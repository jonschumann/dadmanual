/**
 * screenshot-panels.mjs
 * Serves the Figma Make build and screenshots each device's full panel section,
 * saving composited images (panel + callout dots + legend) to static/img/.
 *
 * Each entry screenshots the ENTIRE section element so that the absolutely-
 * positioned legend (sibling of the panel image, not a child) is always
 * included in the output image.
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

// One entry per device — screenshots the whole section so the legend is never cropped.
// The legend elements (data-name="FRONT legend", "BACK legend") are absolutely-positioned
// siblings of the panel images within each section, so we must screenshot the section
// itself rather than individual child elements.
const PANELS = [
  { section: 'AX Center section',  out: 'panel-ax-center.png'  },
  { section: 'Core 256 section',   out: 'panel-core256.png'    },
  { section: 'AX64 section',       out: 'panel-ax64.png'       },
  { section: 'MOM section',        out: 'panel-mom.png'        },
  { section: 'Penta 720 section',  out: 'panel-penta720.png'   },
  { section: 'Penta 721s section', out: 'panel-penta721s.png'  },
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

  for (const { section, out } of PANELS) {
    const el = await page.$(`[data-name="${section}"]`);
    if (!el) {
      console.warn(`  SKIP  ${out} — section not found: ${section}`);
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
