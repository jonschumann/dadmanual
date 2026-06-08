/**
 * screenshot-panels.mjs
 * Serves the Figma Make build and screenshots each panel section,
 * saving composited images (panel + dots + legend) to static/img/.
 *
 * Usage:  node screenshot-panels.mjs
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

// data-name → output filename(s)
// When a section contains both front and back panels we screenshot
// the child elements directly; otherwise we screenshot the section.
const PANELS = [
  { section: 'AX Center section',   child: 'AX Center Back',    out: 'ch04-fig02-ax-center-rear-panel.png'   },
  { section: 'AX Center section',   child: null,                out: 'ch04-fig01-ax-center-front-panel.png',  wholeSection: true },
  { section: 'Core 256 section',    child: 'Core 256 Front',    out: 'ch04-fig03-core256-front-panel.png'    },
  { section: 'Core 256 section',    child: 'Core 256 Back',     out: 'ch04-fig04-core256-rear-panel.png'     },
  { section: 'AX64 section',        child: 'AX64 Front',        out: 'ch04-fig05-ax64-front-panel.png'       },
  { section: 'AX64 section',        child: 'AX64 Back',         out: 'ch04-fig06-ax64-rear-panel.png'        },
  { section: 'MOM section',         child: 'MOM Face',          out: 'ch04-fig07-mom-control-face.png'       },
  { section: 'Penta 720 section',   child: 'Penta 720 Front',   out: 'ch04-fig08-penta720-front-panel.png'   },
  { section: 'Penta 721s section',  child: 'Penta 721s Front',  out: 'ch04-fig09-penta721s-front-panel.png'  },
  { section: 'Penta 721s section',  child: 'Penta 721s Back',   out: 'ch04-fig10-penta721s-rear-panel.png'   },
];

// ── static file server ────────────────────────────────────────────────────────
function startServer() {
  return new Promise(resolve => {
    const mimeTypes = { '.html':'text/html', '.js':'application/javascript',
                        '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml' };
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
      // strip query strings
      filePath = filePath.split('?')[0];
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

// ── main ──────────────────────────────────────────────────────────────────────
(async () => {
  const server = await startServer();

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page    = await browser.newPage();

  // Large viewport so nothing wraps/clips
  await page.setViewport({ width: 2400, height: 4000, deviceScaleFactor: 2 });
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

  for (const { section, child, out } of PANELS) {
    const selector = child
      ? `[data-name="${child}"]`
      : `[data-name="${section}"]`;

    const el = await page.$(selector);
    if (!el) {
      console.warn(`  SKIP  ${out} — element not found: ${selector}`);
      continue;
    }

    const outPath = path.join(OUT_DIR, out);
    await el.screenshot({ path: outPath });
    const size = Math.round(fs.statSync(outPath).size / 1024);
    console.log(`  OK    ${size}KB  ${out}`);
  }

  await browser.close();
  server.close();
  console.log('\nDone. Reload the Docusaurus dev server to see updated images.');
})();
