/**
 * screenshot-panels.mjs
 * Produces SEPARATE front-panel and rear-panel images for each device.
 *
 * Pipeline:
 *   1. Puppeteer captures the React panel (clean — no circle overlays needed).
 *   2. Sharp reads circles-config.json and composites numbered callout dots
 *      onto every panel that has circle data.
 *
 * Usage:  node screenshot-panels.mjs
 */

import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR  = '/Users/jonschumann/Documents/Claude/Projects/DADman User Manual/Linkandstyledotcolors/dist';
const OUT_DIR   = '/Users/jonschumann/Documents/Claude/Projects/DADman User Manual/dadman-docs/static/img';
const PORT      = 8787;

const DEVICE_SCALE = 2;   // matches page.setViewport deviceScaleFactor
const MARGIN       = 8;   // px added around each panel clip (CSS px)

// ── Circle visual params (physical px at 2× retina) ─────────────────────────
const CIRCLE_R       = 22;   // radius
const CIRCLE_FONT    = 20;   // font-size
const CIRCLE_STROKE  = 3;    // white border width

// ── Load circles config ──────────────────────────────────────────────────────
const CIRCLES_CONFIG_PATH = path.resolve(__dirname, '../circles-config.json');
const circlesConfig = JSON.parse(fs.readFileSync(CIRCLES_CONFIG_PATH, 'utf8'));

// ── Shot definitions ─────────────────────────────────────────────────────────
// configId      → key in circles-config.json panels (omit if no circles)
// containerDataName → data-name of panel container WITHIN the section;
//                     only needed for panel:null shots so we can compute offset
const SHOTS = [
  // ── AX Center ──────────────────────────────────────────────────────────────
  { section: 'AX Center section', panel: 'Frame',          legend: null, out: 'panel-ax-center-front.png', configId: 'axcenter-front' },
  { section: 'AX Center section', panel: 'AX Center Back', legend: null, out: 'panel-ax-center-rear.png'  },

  // ── Core 256 ───────────────────────────────────────────────────────────────
  { section: 'Core 256 section',  panel: 'Core 256 Front', legend: null, out: 'panel-core256-front.png',  configId: 'core256-front' },
  { section: 'Core 256 section',  panel: 'Core 256 Back',  legend: null, out: 'panel-core256-rear.png'   },

  // ── AX 64 ──────────────────────────────────────────────────────────────────
  { section: 'AX64 section',      panel: 'AX64 Front',     legend: null, out: 'panel-ax64-front.png',     configId: 'ax64-front' },
  { section: 'AX64 section',      panel: 'AX64 Back',      legend: null, out: 'panel-ax64-rear.png'      },

  // ── MOM (face only) ────────────────────────────────────────────────────────
  { section: 'MOM section',       panel: 'MOM Face',       legend: null, out: 'panel-mom.png'            },

  // ── Penta 720 (whole section; container offset resolved dynamically) ───────
  { section: 'Penta 720 section', panel: null,             legend: null, out: 'panel-penta720.png',
    configId: 'penta720-front',   containerDataName: 'Penta 720 Front' },

  // ── Penta 721s ─────────────────────────────────────────────────────────────
  { section: 'Penta 721s section', panel: 'Penta 721s Front', legend: null, out: 'panel-penta721s-front.png', configId: 'penta721s-front' },
  { section: 'Penta 721s section', panel: 'Penta 721s Back',  legend: null, out: 'panel-penta721s-rear.png'  },
];

// ── Static file server ───────────────────────────────────────────────────────
function startServer() {
  return new Promise(resolve => {
    const mime = { '.html':'text/html', '.js':'application/javascript',
                   '.css':'text/css',   '.png':'image/png', '.svg':'image/svg+xml' };
    const server = http.createServer((req, res) => {
      const filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url).split('?')[0];
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end(); return; }
        res.writeHead(200, { 'Content-Type': mime[path.extname(filePath)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(PORT, () => { console.log(`Server → http://localhost:${PORT}`); resolve(server); });
  });
}

// ── Bounding-box helpers ─────────────────────────────────────────────────────
function unionBox(a, b) {
  const x  = Math.min(a.x, b.x),  y  = Math.min(a.y, b.y);
  const x2 = Math.max(a.x + a.width, b.x + b.width);
  const y2 = Math.max(a.y + a.height, b.y + b.height);
  return { x, y, width: x2 - x, height: y2 - y };
}

// ── Sharp circle compositing ─────────────────────────────────────────────────
/**
 * Overlay numbered callout circles onto a panel PNG.
 *
 * @param {string}  imgPath         Output PNG to modify in-place
 * @param {string}  configId        Key into circlesConfig.panels
 * @param {{ x: number, y: number }} offsetCss
 *   Position of the panel container's top-left corner within the screenshot,
 *   in CSS px (pre-scaling).  Multiply by DEVICE_SCALE to get physical px.
 */
async function compositeCircles(imgPath, configId, offsetCss) {
  const panel = circlesConfig.panels[configId];
  if (!panel || !panel.circles || panel.circles.length === 0) return;

  const { width: pngW, height: pngH } = await sharp(imgPath).metadata();

  // Build SVG overlay — coordinates in physical pixels
  const dots = panel.circles.map(c => {
    const cx = Math.round((offsetCss.x + c.left) * DEVICE_SCALE);
    const cy = Math.round((offsetCss.y + c.top)  * DEVICE_SCALE);
    return `
  <circle cx="${cx}" cy="${cy}" r="${CIRCLE_R}" fill="${c.color}" stroke="white" stroke-width="${CIRCLE_STROKE}" stroke-linejoin="round"/>
  <text   x="${cx}"  y="${cy}"
          text-anchor="middle" dominant-baseline="central"
          fill="white" font-weight="700"
          font-size="${CIRCLE_FONT}"
          font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
  >${c.num}</text>`;
  }).join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${pngW}" height="${pngH}">${dots}\n</svg>`;

  const tmp = imgPath + '.__tmp.png';
  await sharp(imgPath)
    .composite([{ input: Buffer.from(svg), blend: 'over' }])
    .png()
    .toFile(tmp);

  fs.renameSync(tmp, imgPath);
  console.log(`  ○ circles composited (${panel.circles.length} dots)  [${configId}]`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  const server  = await startServer();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page    = await browser.newPage();

  await page.setViewport({ width: 2400, height: 8000, deviceScaleFactor: DEVICE_SCALE });
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

  for (const { section, panel, legend, out, configId, containerDataName } of SHOTS) {
    const outPath = path.join(OUT_DIR, out);

    // ── Locate section ──────────────────────────────────────────────────────
    const secEl = await page.$(`[data-name="${section}"]`);
    if (!secEl) {
      console.warn(`  SKIP  ${out} — section not found: ${section}`);
      continue;
    }

    // ── Whole-section shot (no named panel element) ─────────────────────────
    if (!panel) {
      await secEl.screenshot({ path: outPath });
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`  OK    ${kb}KB  ${out}  (whole section)`);

      // Circles: resolve panel container offset within the section screenshot
      if (configId && containerDataName) {
        let containerEl = await secEl.$(`[data-name="${containerDataName}"]`);
        if (!containerEl) containerEl = await page.$(`[data-name="${containerDataName}"]`);

        if (containerEl) {
          const secBox = await secEl.boundingBox();
          const ctnBox = await containerEl.boundingBox();
          const offsetCss = {
            x: ctnBox.x - secBox.x,
            y: ctnBox.y - secBox.y,
          };
          await compositeCircles(outPath, configId, offsetCss);
        } else {
          console.warn(`  WARN  ${out} — containerDataName not found: ${containerDataName} (skipping circles)`);
        }
      }
      continue;
    }

    // ── Named-panel shot ────────────────────────────────────────────────────
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

    // Optionally expand to include a legend element
    if (legend) {
      let legEl = await secEl.$(`[data-name="${legend}"]`) ?? await page.$(`[data-name="${legend}"]`);
      if (legEl) {
        const legBox = await legEl.boundingBox();
        if (legBox) clip = unionBox(clip, legBox);
      } else {
        console.warn(`  WARN  ${out} — legend not found: ${legend} (panel-only shot)`);
      }
    }

    // Add margin
    clip = {
      x:      Math.max(0, clip.x - MARGIN),
      y:      Math.max(0, clip.y - MARGIN),
      width:  clip.width  + MARGIN * 2,
      height: clip.height + MARGIN * 2,
    };

    await page.screenshot({ path: outPath, clip });
    const kb = Math.round(fs.statSync(outPath).size / 1024);
    console.log(`  OK    ${kb}KB  ${out}`);

    // Circles: panel element sits at (MARGIN, MARGIN) CSS px within the screenshot
    if (configId) {
      await compositeCircles(outPath, configId, { x: MARGIN, y: MARGIN });
    }
  }

  await browser.close();
  server.close();
  console.log('\nDone.');
})();
