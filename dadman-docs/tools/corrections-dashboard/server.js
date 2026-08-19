/**
 * DADman Manual — Corrections Dashboard
 *
 * Polls GitHub Discussions (Giscus comments) for new corrections,
 * uses the Anthropic API to parse them into structured fields,
 * and serves a triage UI for approving / denying / editing each one.
 *
 * On approve, the correction is written to CORRECTIONS.md in the repo
 * via the GitHub REST API (no local git access required).
 */

import express from 'express';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import Anthropic from '@anthropic-ai/sdk';

// ── Config ────────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));

const {
  GITHUB_TOKEN,
  GITHUB_OWNER       = 'jonschumann',
  GITHUB_REPO        = 'dadmanual',
  ANTHROPIC_API_KEY,
  CORRECTIONS_PATH   = 'dadman-docs/CORRECTIONS.md', // path inside the repo
  // Branch that CORRECTIONS.md is read from and written to. MUST be the
  // authoring/deploy branch — the GitHub contents API silently defaults to the
  // repo default branch (main), which is not deployed, and corrections written
  // there never reach the manual.
  TARGET_BRANCH      = 'hardware-manuals',
  DATA_DIR           = join(__dirname, 'data'),
  PORT               = 3001,
  POLL_INTERVAL_MINS = '10',
} = process.env;

const POLL_MS = parseInt(POLL_INTERVAL_MINS, 10) * 60 * 1000;

// ── Persistent state ──────────────────────────────────────────────────────────

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

const STATE_FILE = join(DATA_DIR, 'corrections.json');

function loadState() {
  if (!existsSync(STATE_FILE)) return { corrections: [], seenCommentIds: [] };
  return JSON.parse(readFileSync(STATE_FILE, 'utf8'));
}

function saveState(state) {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

let state = loadState();

// ── Anthropic client ──────────────────────────────────────────────────────────

const anthropic = ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: ANTHROPIC_API_KEY })
  : null;

// Known docs files — given to the model so it can map pages to file paths
const DOCS_FILE_LIST = `
docs/ch07-operation.md                          — DADman operation, routing matrix, keyboard shortcuts
docs/hardware/ax64/ch01-introduction.md         — AX64 introduction & key features
docs/hardware/ax64/ch02-hardware-description.md — AX64 panel connectors
docs/hardware/ax32/ch01-introduction.md         — AX32 introduction & key features
docs/hardware/ax32/ch02-hardware-description.md — AX32 panel connectors
docs/hardware/ax-center/ch01-introduction.md    — AX Center introduction & key features
docs/hardware/core-256/ch01-introduction.md     — Core 256 introduction & key features
docs/hardware/mom/ch01-introduction.md          — MOM introduction & key features
docs/hardware/penta-720/ch01-introduction.md    — Penta 720 introduction & key features
docs/hardware/penta-721s/ch01-introduction.md   — Penta 721S introduction & key features
docs/ch10-specifications.md                     — Technical specifications (all products)
`.trim();

async function parseComment(discussionTitle, commentBody) {
  if (!anthropic) {
    return {
      section: '',
      file: '',
      summary: 'Anthropic API not configured — fill in manually',
      current_text: '',
      proposed_fix: commentBody,
    };
  }

  const prompt = `You are parsing a reader comment left on a documentation page for the DADman software manual (by Digital Audio Denmark).

Available documentation files:
${DOCS_FILE_LIST}

Discussion page title: "${discussionTitle}"
Comment text: ${JSON.stringify(commentBody)}

Extract these fields:
- section: The section number referenced (e.g. "§7.6.2"). Empty string if not mentioned.
- file: The most likely file path from the list above. Base this on the discussion page title and any section number mentioned.
- summary: One sentence (under 80 chars) describing what needs to change.
- current_text: What the manual currently says that is wrong. Empty string if the commenter didn't quote it.
- proposed_fix: What the manual should say instead. This is the most important field — infer it from the comment even if not explicitly stated.

Return ONLY a JSON object with exactly these five keys. No markdown, no explanation.`;

  const msg = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = msg.content[0].text.trim();
  // Strip any accidental markdown code fences
  const cleaned = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  return JSON.parse(cleaned);
}

// ── GitHub helpers ────────────────────────────────────────────────────────────

async function ghGraphQL(query) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

async function fetchDiscussions() {
  const data = await ghGraphQL(`{
    repository(owner: "${GITHUB_OWNER}", name: "${GITHUB_REPO}") {
      discussions(first: 50, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          id
          title
          comments(first: 50) {
            nodes {
              id
              body
              createdAt
              replies(first: 20) {
                nodes { id body createdAt }
              }
            }
          }
        }
      }
    }
  }`);
  return data.repository.discussions.nodes;
}

async function getFileOnGitHub(path) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`
    + `?ref=${encodeURIComponent(TARGET_BRANCH)}`;
  const res = await fetch(url, {
    headers: { Authorization: `bearer ${GITHUB_TOKEN}` },
  });
  if (!res.ok) return null;
  return res.json(); // { content (base64), sha, ... }
}

async function putFileOnGitHub(path, content, sha, message) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString('base64'),
      sha,
      branch: TARGET_BRANCH,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub PUT failed: ${res.status} ${err}`);
  }
  return res.json();
}

// ── Poll logic ────────────────────────────────────────────────────────────────

let lastPolled = null;
let isPolling = false;

async function poll() {
  if (isPolling) return;
  if (!GITHUB_TOKEN) {
    console.warn('GITHUB_TOKEN not set — skipping poll');
    return;
  }
  isPolling = true;
  console.log('[poll] Fetching discussions…');

  try {
    const discussions = await fetchDiscussions();
    let newCount = 0;

    for (const discussion of discussions) {
      const allComments = [
        ...discussion.comments.nodes.map(c => ({ ...c, isReply: false })),
        ...discussion.comments.nodes.flatMap(c =>
          c.replies.nodes.map(r => ({ ...r, isReply: true }))
        ),
      ];

      for (const comment of allComments) {
        if (state.seenCommentIds.includes(comment.id)) continue;

        console.log(`[poll] New comment ${comment.id} on "${discussion.title}"`);
        let parsed;
        try {
          parsed = await parseComment(discussion.title, comment.body);
        } catch (e) {
          console.error('[poll] Parse error:', e.message);
          parsed = {
            section: '',
            file: '',
            summary: 'Parse failed — fill in manually',
            current_text: '',
            proposed_fix: comment.body,
          };
        }

        state.corrections.push({
          id: comment.id,
          discussionTitle: discussion.title,
          commentBody: comment.body,
          commentCreatedAt: comment.createdAt,
          isReply: comment.isReply,
          status: 'pending',
          parsed,
          approvedAt: null,
          deniedAt: null,
          deniedReason: '',
        });
        state.seenCommentIds.push(comment.id);
        newCount++;
      }
    }

    saveState(state);
    lastPolled = new Date().toISOString();
    console.log(`[poll] Done — ${newCount} new comment(s) found`);
  } catch (e) {
    console.error('[poll] Error:', e.message);
  } finally {
    isPolling = false;
  }
}

// ── Build CORRECTIONS.md entry ────────────────────────────────────────────────

function buildCorrectionsEntry(correction) {
  const { parsed, discussionTitle, commentCreatedAt } = correction;
  const date = commentCreatedAt.slice(0, 10);
  const product = parsed.file
    ? parsed.file.split('/').find(p => ['ax64','ax32','ax-center','core-256','mom','penta-720','penta-721s'].includes(p)) ?? 'DADman'
    : 'DADman';
  const section = parsed.section || '—';
  const title = parsed.summary || '(no summary)';

  return `
### ${product} ${section} — ${title}
- **File:** \`${parsed.file || '(unknown)'}\`
- **Section:** ${section}
- **Wrong:** ${parsed.current_text || '(not quoted by commenter)'}
- **Correct:** ${parsed.proposed_fix || '(see original comment)'}
- **Original comment:** ${correction.commentBody.replace(/\n/g, ' ')}
- **Source:** Giscus comment on \`/${discussionTitle}\` page
- **Found:** ${date}
`.trimStart();
}

async function appendToCorrectionsFile(correction) {
  const file = await getFileOnGitHub(CORRECTIONS_PATH);
  if (!file) throw new Error(`CORRECTIONS.md not found at ${CORRECTIONS_PATH} on branch ${TARGET_BRANCH}`);

  const current = Buffer.from(file.content, 'base64').toString('utf8');
  const entry = buildCorrectionsEntry(correction);

  // Replace the "No open corrections" placeholder if present, otherwise append
  let updated;
  if (current.includes('*No open corrections.*')) {
    updated = current.replace('*No open corrections.*', entry.trimEnd());
  } else {
    // Insert before the "---" that precedes Fixed Corrections
    const marker = '\n---\n\n## Fixed Corrections';
    const idx = current.indexOf(marker);
    if (idx !== -1) {
      updated = current.slice(0, idx) + '\n' + entry + current.slice(idx);
    } else {
      updated = current + '\n' + entry;
    }
  }

  await putFileOnGitHub(
    CORRECTIONS_PATH,
    updated,
    file.sha,
    `correction: approve §${correction.parsed.section || '?'} — ${correction.parsed.summary || correction.id}`
  );
}

// ── Express app ───────────────────────────────────────────────────────────────

const app = express();
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// List all corrections
app.get('/api/corrections', (req, res) => {
  const { status } = req.query;
  const list = status
    ? state.corrections.filter(c => c.status === status)
    : state.corrections;
  res.json([...list].reverse()); // newest first
});

// Update parsed fields (manual edit)
app.put('/api/corrections/:id', (req, res) => {
  const c = state.corrections.find(x => x.id === req.params.id);
  if (!c) return res.status(404).json({ error: 'Not found' });
  if (req.body.parsed) Object.assign(c.parsed, req.body.parsed);
  saveState(state);
  res.json(c);
});

// Approve
app.post('/api/corrections/:id/approve', async (req, res) => {
  const c = state.corrections.find(x => x.id === req.params.id);
  if (!c) return res.status(404).json({ error: 'Not found' });
  if (c.status !== 'pending') return res.status(400).json({ error: 'Not pending' });

  try {
    await appendToCorrectionsFile(c);
    c.status = 'approved';
    c.approvedAt = new Date().toISOString();
    saveState(state);
    res.json(c);
  } catch (e) {
    console.error('[approve]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// Deny
app.post('/api/corrections/:id/deny', (req, res) => {
  const c = state.corrections.find(x => x.id === req.params.id);
  if (!c) return res.status(404).json({ error: 'Not found' });
  c.status = 'denied';
  c.deniedAt = new Date().toISOString();
  c.deniedReason = req.body.reason || '';
  saveState(state);
  res.json(c);
});

// Re-parse a single correction with Claude
app.post('/api/corrections/:id/reparse', async (req, res) => {
  const c = state.corrections.find(x => x.id === req.params.id);
  if (!c) return res.status(404).json({ error: 'Not found' });
  try {
    c.parsed = await parseComment(c.discussionTitle, c.commentBody);
    saveState(state);
    res.json(c);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Manual poll trigger
app.post('/api/poll', async (req, res) => {
  res.json({ ok: true, message: 'Poll started' });
  poll(); // fire-and-forget
});

// Status
app.get('/api/status', (req, res) => {
  res.json({
    lastPolled,
    isPolling,
    pollIntervalMins: parseInt(POLL_INTERVAL_MINS, 10),
    pending: state.corrections.filter(c => c.status === 'pending').length,
    approved: state.corrections.filter(c => c.status === 'approved').length,
    denied: state.corrections.filter(c => c.status === 'denied').length,
    anthropicConfigured: !!anthropic,
    githubConfigured: !!GITHUB_TOKEN,
    targetBranch: TARGET_BRANCH,
    correctionsPath: CORRECTIONS_PATH,
  });
});

// ── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Corrections dashboard running on http://localhost:${PORT}`);
  poll();
  setInterval(poll, POLL_MS);
});
