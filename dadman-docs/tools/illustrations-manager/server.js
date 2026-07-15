/**
 * DADman Manual — Illustrations Manager
 *
 * Scans the GitHub repo for image references in markdown files,
 * identifies missing files in static/img/, reads a planned-illustrations
 * manifest (ILLUSTRATIONS.md), and accepts drag-and-drop uploads that
 * are committed directly to the repo via the GitHub REST API.
 *
 * No local git access required — everything goes through the API.
 */

import express from 'express';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ────────────────────────────────────────────────────────────────────

const {
  GITHUB_TOKEN,
  GITHUB_OWNER        = 'jonschumann',
  GITHUB_REPO         = 'dadmanual',
  GITHUB_BRANCH       = 'hardware-manuals',
  ILLUSTRATIONS_PATH  = 'dadman-docs/ILLUSTRATIONS.md',
  STATIC_IMG_PATH     = 'dadman-docs/static/img',
  DOCS_PATH           = 'dadman-docs/docs',
  PORT                = 3001,
  CACHE_TTL_MINS      = '5',
} = process.env;

const CACHE_TTL_MS = parseInt(CACHE_TTL_MINS, 10) * 60 * 1000;

const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif']);

// ── GitHub helpers ────────────────────────────────────────────────────────────

const ghHeaders = () => ({
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
});

async function ghFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { ...ghHeaders(), ...(options.headers || {}) },
  });
  return res;
}

/** GET a single file's metadata + base64 content */
async function ghGetFile(path) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  const res = await ghFetch(url);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET ${path} failed: ${res.status}`);
  return res.json();
}

/** GET a directory listing */
async function ghGetDir(path) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  const res = await ghFetch(url);
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub GET dir ${path} failed: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/** Get full recursive tree for the branch */
async function ghGetTree() {
  // First get the branch HEAD commit tree SHA
  const branchRes = await ghFetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/branches/${GITHUB_BRANCH}`
  );
  if (!branchRes.ok) throw new Error(`Cannot fetch branch: ${branchRes.status}`);
  const branch = await branchRes.json();
  const treeSha = branch.commit.commit.tree.sha;

  const treeRes = await ghFetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees/${treeSha}?recursive=1`
  );
  if (!treeRes.ok) throw new Error(`Cannot fetch tree: ${treeRes.status}`);
  const tree = await treeRes.json();
  return tree.tree || [];
}

// Short-lived shared cache for the recursive tree — avoids refetching the
// whole repo tree on every single thumbnail request (N+1 problem) while
// still picking up new commits within a few minutes.
let treeCache = null;
let treeCacheTime = 0;
async function getCachedTree(forceRefresh = false) {
  if (!forceRefresh && treeCache && Date.now() - treeCacheTime < CACHE_TTL_MS) {
    return treeCache;
  }
  treeCache = await ghGetTree();
  treeCacheTime = Date.now();
  return treeCache;
}

/** Get a blob by SHA (raw content) */
async function ghGetBlob(sha) {
  const res = await ghFetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/blobs/${sha}`
  );
  if (!res.ok) throw new Error(`Cannot fetch blob ${sha}: ${res.status}`);
  return res.json();
}

/** Create or update a file in the repo */
async function ghPutFile(path, base64Content, commitMessage, existingSha) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const body = {
    message: commitMessage,
    content: base64Content,
    branch: GITHUB_BRANCH,
  };
  if (existingSha) body.sha = existingSha;

  const res = await ghFetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub PUT ${path} failed: ${res.status} — ${err}`);
  }
  return res.json();
}

// ── Core scan logic ───────────────────────────────────────────────────────────

/** List all filenames in static/img/ */
async function listStaticImages() {
  const entries = await ghGetDir(STATIC_IMG_PATH);
  return entries
    .filter(e => e.type === 'file')
    .map(e => e.name);
}

const IMG_REF_REGEX = /!\[([^\]]*)\]\(\/img\/([^)#?\s]+)\)/g;

/** Scan all .md files and return image references with context */
async function scanMarkdownRefs(tree) {
  const mdFiles = tree.filter(
    node =>
      node.type === 'blob' &&
      node.path.startsWith(DOCS_PATH + '/') &&
      node.path.endsWith('.md')
  );

  const refs = [];

  // Batch fetches — 10 at a time to avoid rate limits
  for (let i = 0; i < mdFiles.length; i += 10) {
    const batch = mdFiles.slice(i, i + 10);
    const results = await Promise.allSettled(
      batch.map(async file => {
        const blob = await ghGetBlob(file.sha);
        const content = Buffer.from(blob.content, 'base64').toString('utf8');
        const fileRefs = [];
        let match;
        const rx = new RegExp(IMG_REF_REGEX.source, 'g');
        while ((match = rx.exec(content)) !== null) {
          fileRefs.push({
            file: file.path,
            alt: match[1],
            filename: match[2],
          });
        }
        return fileRefs;
      })
    );
    for (const r of results) {
      if (r.status === 'fulfilled') refs.push(...r.value);
    }
  }

  return refs;
}

/** Compute which referenced images are missing from static/img/ */
async function computeMissingRefs() {
  const [tree, staticImages] = await Promise.all([getCachedTree(), listStaticImages()]);
  const allRefs = await scanMarkdownRefs(tree);
  const imageSet = new Set(staticImages);

  // Deduplicate by filename but preserve all referencing files
  const byFilename = new Map();
  for (const ref of allRefs) {
    if (!imageSet.has(ref.filename)) {
      if (!byFilename.has(ref.filename)) {
        byFilename.set(ref.filename, { filename: ref.filename, refs: [] });
      }
      byFilename.get(ref.filename).refs.push({ file: ref.file, alt: ref.alt });
    }
  }

  return Array.from(byFilename.values()).sort((a, b) =>
    a.filename.localeCompare(b.filename)
  );
}

// ── Image dimension probing (pure buffer parsing — no image-processing deps) ──

function getPngDimensions(buf) {
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function getGifDimensions(buf) {
  if (buf.length < 10) return null;
  const sig = buf.toString('ascii', 0, 6);
  if (sig !== 'GIF87a' && sig !== 'GIF89a') return null;
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
}

function getJpegDimensions(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) { offset++; continue; }
    const marker = buf[offset + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) { offset += 2; continue; }
    const length = buf.readUInt16BE(offset + 2);
    if (length < 2) break;
    offset += 2 + length;
  }
  return null;
}

function getWebpDimensions(buf) {
  if (buf.length < 30) return null;
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const fmt = buf.toString('ascii', 12, 16);
  if (fmt === 'VP8 ') {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (fmt === 'VP8L') {
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height: 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
    };
  }
  if (fmt === 'VP8X') {
    return {
      width: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)),
      height: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)),
    };
  }
  return null;
}

function getSvgDimensions(buf) {
  const text = buf.toString('utf8', 0, Math.min(buf.length, 4000));
  const tagMatch = text.match(/<svg\b[^>]*>/i);
  if (!tagMatch) return null;
  const tag = tagMatch[0];
  const w = tag.match(/\bwidth="([\d.]+)/i);
  const h = tag.match(/\bheight="([\d.]+)/i);
  if (w && h) return { width: Math.round(parseFloat(w[1])), height: Math.round(parseFloat(h[1])), vector: true };
  const vb = tag.match(/\bviewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.]+)\s+([\d.]+)/i);
  if (vb) return { width: Math.round(parseFloat(vb[1])), height: Math.round(parseFloat(vb[2])), vector: true };
  return { vector: true };
}

function getImageDimensions(filename, buf) {
  const ext = extname(filename).toLowerCase();
  try {
    if (ext === '.png') return getPngDimensions(buf);
    if (ext === '.gif') return getGifDimensions(buf);
    if (ext === '.jpg' || ext === '.jpeg') return getJpegDimensions(buf);
    if (ext === '.webp') return getWebpDimensions(buf);
    if (ext === '.svg') return getSvgDimensions(buf);
  } catch {
    return null;
  }
  return null; // avif and anything else — dimensions unavailable, not fatal
}

/** Build one conservative, single-line suggestion — or null if nothing stands out. */
function buildRecommendation({ ext, filename, width, height, sizeBytes, vector }) {
  if (vector) {
    if (sizeBytes && sizeBytes > 500 * 1024) {
      return `Large for an SVG (${formatBytes(sizeBytes)}) — check for embedded raster images or excessive path detail.`;
    }
    return null;
  }

  const looksLikeDiagram = /block-diagram|mechanical|pinout|drawing|schematic|topology/i.test(filename);
  if (looksLikeDiagram && ext !== '.svg') {
    return 'This looks like a technical diagram — a vector file (SVG) would likely render more crisply, especially in the PDF export.';
  }

  if (width && height) {
    if (width < 900 && height < 900) {
      return `Resolution is ${width}×${height}px — could be higher, especially if this needs to fill a page width in the PDF export.`;
    }
    if (sizeBytes) {
      const megapixels = (width * height) / 1_000_000;
      const bytesPerMP = megapixels > 0 ? sizeBytes / megapixels : 0;
      if (ext !== '.jpg' && ext !== '.jpeg' && bytesPerMP > 3_000_000) {
        return 'File is large relative to its resolution — consider re-exporting as a more compressed PNG or WebP.';
      }
    }
  }

  return null;
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1024 / 1024).toFixed(1) + ' MB';
}

/** Compute every image currently in static/img/, with usage, dimensions, and an advisory note. */
async function computeCurrentImages() {
  const tree = await getCachedTree();

  const imgNodes = tree.filter(
    node =>
      node.type === 'blob' &&
      node.path.startsWith(STATIC_IMG_PATH + '/') &&
      ALLOWED_EXTENSIONS.has(extname(node.path).toLowerCase())
  );

  const allRefs = await scanMarkdownRefs(tree);
  const usageByFilename = new Map();
  for (const ref of allRefs) {
    if (!usageByFilename.has(ref.filename)) usageByFilename.set(ref.filename, []);
    usageByFilename.get(ref.filename).push({ file: ref.file, alt: ref.alt });
  }

  const items = [];
  // Batch blob fetches — images are bigger payloads than markdown, so keep batches small.
  for (let i = 0; i < imgNodes.length; i += 5) {
    const batch = imgNodes.slice(i, i + 5);
    const results = await Promise.allSettled(
      batch.map(async node => {
        const filename = node.path.slice(STATIC_IMG_PATH.length + 1);
        const ext = extname(filename).toLowerCase();
        let dims = null;
        try {
          const blob = await ghGetBlob(node.sha);
          const buf = Buffer.from(blob.content, 'base64');
          dims = getImageDimensions(filename, buf);
        } catch (e) {
          console.warn(`Could not probe dimensions for ${filename}:`, e.message);
        }
        const sizeBytes = node.size ?? null;
        return {
          filename,
          format: ext.replace('.', '').toUpperCase() || 'UNKNOWN',
          sizeBytes,
          width: dims?.width ?? null,
          height: dims?.height ?? null,
          vector: !!dims?.vector,
          usedIn: usageByFilename.get(filename) || [],
          recommendation: buildRecommendation({
            ext, filename, width: dims?.width, height: dims?.height, sizeBytes, vector: dims?.vector,
          }),
        };
      })
    );
    for (const r of results) {
      if (r.status === 'fulfilled') items.push(r.value);
    }
  }

  items.sort((a, b) => a.filename.localeCompare(b.filename));
  return items;
}

// ── ILLUSTRATIONS.md parsing ──────────────────────────────────────────────────

// Format: - [ ] `filename.ext` — Description
//         - [x] `filename.ext` — Description *(added YYYY-MM-DD)*
const ILLUS_ITEM_REGEX = /^- \[([ x])\] `([^`]+)` — (.+)$/gm;
// Section headings: ## Section Name  or  ### Subsection
const SECTION_REGEX = /^#{2,3} (.+)$/gm;

function parseIllustrationsMarkdown(content) {
  const items = [];

  // Build a position→section map so we can label each item
  const sections = [];
  let m;
  const rx = new RegExp(SECTION_REGEX.source, 'gm');
  while ((m = rx.exec(content)) !== null) {
    sections.push({ pos: m.index, name: m[1].trim() });
  }

  const itemRx = new RegExp(ILLUS_ITEM_REGEX.source, 'gm');
  while ((m = itemRx.exec(content)) !== null) {
    // Find the most recent section before this position
    let section = 'General';
    for (const s of sections) {
      if (s.pos < m.index) section = s.name;
    }
    const addedMatch = m[3].match(/\*\(added ([^)]+)\)\*/);
    items.push({
      done: m[1] === 'x',
      filename: m[2],
      description: m[3].replace(/\s*\*\(added [^)]+\)\*/, '').trim(),
      section,
      addedDate: addedMatch ? addedMatch[1] : null,
    });
  }

  return items;
}

async function getPlannedIllustrations() {
  const file = await ghGetFile(ILLUSTRATIONS_PATH);
  if (!file) return { items: [], sha: null, content: '' };

  const content = Buffer.from(file.content, 'base64').toString('utf8');
  return { items: parseIllustrationsMarkdown(content), sha: file.sha, content };
}

/** Mark a planned item as done by updating its checkbox in ILLUSTRATIONS.md */
async function markPlannedDone(filename) {
  const { content, sha } = await getPlannedIllustrations();
  if (!sha) return;

  const date = new Date().toISOString().slice(0, 10);
  const escapedFilename = filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const updated = content.replace(
    new RegExp(`^(- )\\[ \\]( \`${escapedFilename}\` — .+?)$`, 'm'),
    `$1[x]$2 *(added ${date})*`
  );

  if (updated === content) return; // not found — that's OK

  await ghPutFile(
    ILLUSTRATIONS_PATH,
    Buffer.from(updated).toString('base64'),
    `illus: mark ${filename} as added`,
    sha
  );
}

// ── Scan cache ────────────────────────────────────────────────────────────────

let scanCache = null;
let scanCacheTime = 0;
let scanInProgress = false;

async function getCachedScan(forceRefresh = false) {
  if (!forceRefresh && scanCache && Date.now() - scanCacheTime < CACHE_TTL_MS) {
    return { data: scanCache, cached: true, age: Math.round((Date.now() - scanCacheTime) / 1000) };
  }
  if (scanInProgress) {
    return { data: scanCache || [], cached: true, scanning: true };
  }
  scanInProgress = true;
  try {
    scanCache = await computeMissingRefs();
    scanCacheTime = Date.now();
    return { data: scanCache, cached: false, age: 0 };
  } finally {
    scanInProgress = false;
  }
}

let currentCache = null;
let currentCacheTime = 0;
let currentInProgress = false;

async function getCachedCurrent(forceRefresh = false) {
  if (!forceRefresh && currentCache && Date.now() - currentCacheTime < CACHE_TTL_MS) {
    return { data: currentCache, cached: true, age: Math.round((Date.now() - currentCacheTime) / 1000) };
  }
  if (currentInProgress) {
    return { data: currentCache || [], cached: true, scanning: true };
  }
  currentInProgress = true;
  try {
    currentCache = await computeCurrentImages();
    currentCacheTime = Date.now();
    return { data: currentCache, cached: false, age: 0 };
  } finally {
    currentInProgress = false;
  }
}

const MIME_BY_EXT = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.avif': 'image/avif',
};

// ── Express app ───────────────────────────────────────────────────────────────

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.static(join(__dirname, 'public')));

// GET /api/status — health check
app.get('/api/status', (_req, res) => {
  res.json({
    ok: true,
    githubConfigured: !!GITHUB_TOKEN,
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
    branch: GITHUB_BRANCH,
    scanCached: !!scanCache,
    scanAgeSeconds: scanCache ? Math.round((Date.now() - scanCacheTime) / 1000) : null,
    scanning: scanInProgress,
  });
});

// GET /api/missing[?refresh=1] — missing image references
app.get('/api/missing', async (req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }
  try {
    const result = await getCachedScan(req.query.refresh === '1');
    res.json(result);
  } catch (err) {
    console.error('Scan error:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/planned — planned illustrations from ILLUSTRATIONS.md
app.get('/api/planned', async (_req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }
  try {
    const { items } = await getPlannedIllustrations();
    res.json(items);
  } catch (err) {
    console.error('Planned fetch error:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/upload — upload an image to static/img/ via GitHub API
// Body: { filename: "ch07-routing-matrix.png", content: "<base64>", markDone: true }
app.post('/api/upload', async (req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }

  const { filename, content, markDone = true } = req.body;

  if (!filename || !content) {
    return res.status(400).json({ error: 'filename and content are required' });
  }

  const ext = extname(filename).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return res.status(400).json({
      error: `File type ${ext} not allowed. Supported: ${[...ALLOWED_EXTENSIONS].join(', ')}`,
    });
  }

  if (!/^[a-z0-9][a-z0-9\-_.]*[a-z0-9]$/i.test(filename)) {
    return res.status(400).json({ error: 'Invalid filename — use alphanumeric, hyphens, dots only' });
  }

  // Strip data URL prefix if present
  const base64 = content.includes(',') ? content.split(',')[1] : content;

  try {
    const targetPath = `${STATIC_IMG_PATH}/${filename}`;
    // Check if file already exists (need its SHA to update)
    const existing = await ghGetFile(targetPath);
    const sha = existing ? existing.sha : undefined;

    await ghPutFile(
      targetPath,
      base64,
      `illus: add ${filename}`,
      sha
    );

    // Optionally mark the planned item as done
    if (markDone) {
      try {
        await markPlannedDone(filename);
      } catch (e) {
        console.warn(`Could not mark ${filename} as done in ILLUSTRATIONS.md:`, e.message);
      }
    }

    // Invalidate caches so the missing list, current-illustrations list, and
    // thumbnail proxy (which resolves blob shas from the tree) all update
    scanCache = null;
    currentCache = null;
    treeCache = null;

    res.json({ ok: true, filename, updated: !!sha });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/planned/add — add a new item to ILLUSTRATIONS.md
// Body: { filename: "ch07-routing-matrix.png", description: "...", section: "Chapter 7 — Operation" }
app.post('/api/planned/add', async (req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }

  const { filename, description } = req.body;
  if (!filename || !description) {
    return res.status(400).json({ error: 'filename and description are required' });
  }

  try {
    const { content, sha } = await getPlannedIllustrations();

    const newLine = `- [ ] \`${filename}\` — ${description}`;

    let updated;
    if (!content) {
      updated = `# Illustrations Manifest\n\n${newLine}\n`;
    } else {
      updated = content.trimEnd() + '\n' + newLine + '\n';
    }

    await ghPutFile(
      ILLUSTRATIONS_PATH,
      Buffer.from(updated).toString('base64'),
      `illus: plan ${filename}`,
      sha || undefined
    );

    res.json({ ok: true, filename });
  } catch (err) {
    console.error('Add planned error:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/images — list existing images in static/img/
app.get('/api/images', async (_req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }
  try {
    const images = await listStaticImages();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/current[?refresh=1] — every image in static/img/ with usage info,
// so the UI can show what's already live and offer an in-place Replace.
app.get('/api/current', async (req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }
  try {
    const result = await getCachedCurrent(req.query.refresh === '1');
    res.json(result);
  } catch (err) {
    console.error('Current scan error:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/image-content/:filename — proxies the raw image bytes from GitHub
// so the browser can render a thumbnail without needing repo visibility/auth.
//
// Uses the Git Blobs API (via the tree's blob sha), NOT the Contents API —
// the Contents API silently returns empty content for any file over ~1MB
// (confirmed directly: a 1.4MB file came back with content_len 0, encoding
// "none", and only a download_url). Most panel photos in this repo are
// well over 1MB, so that bug affected most thumbnails. Blobs API has no
// such limit (up to 100MB).
app.get('/api/image-content/:filename', async (req, res) => {
  if (!GITHUB_TOKEN) {
    return res.status(503).json({ error: 'GITHUB_TOKEN not configured' });
  }
  const { filename } = req.params;
  if (!/^[a-z0-9][a-z0-9\-_.]*[a-z0-9]$/i.test(filename)) {
    return res.status(400).json({ error: 'Invalid filename' });
  }
  try {
    const tree = await getCachedTree();
    const node = tree.find(
      n => n.type === 'blob' && n.path === `${STATIC_IMG_PATH}/${filename}`
    );
    if (!node) return res.status(404).json({ error: 'Not found' });

    const blob = await ghGetBlob(node.sha);
    const ext = extname(filename).toLowerCase();
    const mime = MIME_BY_EXT[ext] || 'application/octet-stream';
    const buf = Buffer.from(blob.content, blob.encoding || 'base64');
    res.set('Content-Type', mime);
    res.set('Cache-Control', 'public, max-age=300');
    res.send(buf);
  } catch (err) {
    console.error('Thumbnail proxy error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Illustrations manager running on http://localhost:${PORT}`);
  console.log(`  Repo:   ${GITHUB_OWNER}/${GITHUB_REPO} @ ${GITHUB_BRANCH}`);
  console.log(`  Img:    ${STATIC_IMG_PATH}`);
  console.log(`  Docs:   ${DOCS_PATH}`);
  console.log(`  Manif:  ${ILLUSTRATIONS_PATH}`);
  if (!GITHUB_TOKEN) console.warn('  ⚠️  GITHUB_TOKEN not set — API calls will fail');
});
