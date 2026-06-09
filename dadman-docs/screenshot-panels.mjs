/**
 * screenshot-panels-split.mjs
 * Produces SEPARATE front-panel and rear-panel images for each device.
 * Uses bounding-box union (panel element + sibling legend element) so the
 * absolutely-positioned legend is always included.
 *
 * Usage:  node screenshot-panels-split.mjs
 */

import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR  = '/tmp/Linkandstyledotcolors/dist';
const OUT_DIR   = '/Users/jonschumann/Documents/Claude/Projects/DADman User Manual/dadman-docs/static/img';
const PORT      = 8787;

// Each shot: { section, panel, legend, out }
//   section : data-name of the wrapper section element (scroll position anchor)
//   panel   : data-name of the panel image element  (null = skip bounding search, use full section half)
//   legend  : data-name of the legend element        (null = no legend for this panel)
//   out     : output filename
const SHOTS = [
  // ── AX Center ────────────────────────────────────────────────────────────────
  { section: 'AX Center section', panel: 'Frame',         legend: null, out: 'panel-ax-center-front.png' },
  { section: 'AX Center section', panel: 'AX Center Back',legend: null, out: 'panel-ax-center-rear.png'  },

  // ── Core 256 ─────────────────────────────────────────────────────────────────
  { section: 'Core 256 section',  panel: 'Core 256 Front',legend: null, out: 'panel-core256-front.png'   },
  { section: 'Core 256 section',  panel: 'Core 256 Back', legend: null, out: 'panel-core256-rear.png'    },

  // ── AX 64 ────────────────────────────────────────────────────────────────────
  { section: 'AX64 section',      panel: 'AX64 Front',    legend: null, out: 'panel-ax64-front.png'      },
  { section: 'AX64 section',      panel: 'AX64 Back',     legend: null, out: 'panel-ax64-rear.png'       },

  // ── MOM (face only — legend replaced by table in ch02) ───────────────────────
  { section: 'MOM section',       panel: 'MOM Face',      legend: null, out: 'panel-mom.png'             },

  // ── Penta 720 (front only) ───────────────────────────────────────────────────
  { section: 'Penta 720 section', panel: null,            legend: null, out: 'panel-penta720.png'        },

  // ── Penta 721s ───────────────────────────────────────────────────────────────
  { section: 'Penta 721s section',panel: 'Penta 721s Front',legend: null, out: 'panel-penta721s-front.png' },
  { section: 'Penta 721s section',panel: 'Penta 721s Back', legend: null, out: 'panel-penta721s-rear.png'  },
];

// ── static file server ────────────────────────────────────────────────────────
function startServer() {
  return new Promise(resolve => {
    const mimeTypes = { '.html':'text/html', '.js':'application/javascript',
                        '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml' };
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url).split('?')[0];
      const ext = path.extname(filePath);
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end(); return; }
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => { console.log(`Server → http://localhost:${PORT}`); resolve(server); });
  });
}

// Union of two bounding boxes
function unionBox(a, b) {
  const x = Math.min(a.x, b.x);
  const y = Math.min(a.y, b.y);
  const x2 = Math.max(a.x + a.width,  b.x + b.width);
  const y2 = Math.max(a.y + a.height, b.y + b.height);
  return { x, y, width: x2 - x, height: y2 - y };
}

// ── main ──────────────────────────────────────────────────────────────────────
(async () => {
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page    = await browser.newPage();

  // Large viewport — nothing wraps or clips
  await page.setViewport({ width: 2400, height: 8000, deviceScaleFactor: 2 });
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

  for (const { section, panel, legend, out } of SHOTS) {
    const outPath = path.join(OUT_DIR, out);

    // Locate section element
    const secEl = await page.$(`[data-name="${section}"]`);
    if (!secEl) {
      console.warn(`  SKIP  ${out} — section not found: ${section}`);
      continue;
    }

    // If no specific panel named, screenshot the whole section
    if (!panel) {
      await secEl.screenshot({ path: outPath });
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`  OK    ${kb}KB  ${out}  (whole section)`);
      continue;
    }

    // Find panel element — first try within section, then anywhere on page
    let panelEl = await secEl.$(`[data-name="${panel}"]`);
    if (!panelEl) panelEl = await page.$(`[data-name="${panel}"]`);
    if (!panelEl) {
      console.warn(`  SKIP  ${out} — panel element not found: ${panel}`);
      continue;
    }

    let clip = await panelEl.boundingBox();
    if (!clip) {
      console.warn(`  SKIP  ${out} — panel element has no bounding box: ${panel}`);
      continue;
    }

    // Expand clip to include legend if present
    if (legend) {
      let legEl = await secEl.$(`[data-name="${legend}"]`);
      if (!legEl) legEl = await page.$(`[data-name="${legend}"]`);
      if (legEl) {
        const legBox = await legEl.boundingBox();
        if (legBox) clip = unionBox(clip, legBox);
      } else {
        console.warn(`  WARN  ${out} — legend not found: ${legend} (panel-only shot)`);
      }
    }

    // Add a small margin so callout dots at edges aren't clipped
    const MARGIN = 8;
    clip = {
      x:      Math.max(0, clip.x - MARGIN),
      y:      Math.max(0, clip.y - MARGIN),
      width:  clip.width  + MARGIN * 2,
      height: clip.height + MARGIN * 2,
    };

    await page.screenshot({ path: outPath, clip });
    const kb = Math.round(fs.statSync(outPath).size / 1024);
    console.log(`  OK    ${kb}KB  ${out}`);
  }

  await browser.close();
  server.close();
  console.log('\nDone.');
})();
