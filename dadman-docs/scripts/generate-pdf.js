#!/usr/bin/env node
/**
 * DADman User Manual — PDF Generator
 * ─────────────────────────────────────────────────────────────────────────────
 * Crawls the locally-served Docusaurus build, captures each doc page as a
 * PDF with consistent headers and footers, and merges everything into a single
 * versioned file using pdf-lib.
 *
 * Called by the generate-pdf.yml GitHub Actions workflow. Can also be run
 * locally after `npm run build && npx serve build`:
 *
 *   node scripts/generate-pdf.js \
 *     --output "DADman-User-Manual-v5.8.2-2026-06-11-en.pdf" \
 *     --version "5.8.2" \
 *     --date "2026-06-11" \
 *     --locale "en"
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use strict';

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

// ── CLI argument parser (no external dependency) ─────────────────────────────

const argv = process.argv.slice(2);
const getArg = (name) => {
  const idx = argv.indexOf(`--${name}`);
  return idx !== -1 && argv[idx + 1] ? argv[idx + 1] : null;
};

const PKG      = require('../package.json');
const TODAY    = new Date().toISOString().split('T')[0];

const SECTION   = getArg('section')   || 'software';
const OUTPUT    = getArg('output')    || `DADman-${SECTION === 'software' ? 'User-Manual' : SECTION + '-Hardware-Manual'}-${PKG.version}-${TODAY}-en.pdf`;
const VERSION   = getArg('version')   || PKG.version;
const DATE      = getArg('date')      || TODAY;
const LOCALE    = getArg('locale')    || 'en';
const BASE_URL  = getArg('base-url')  || 'http://localhost:3000';

// Public URL shown in PDF footer — single point of truth.
// Update when the domain moves from docs.evangelaudio.com to docs.digitalaudio.dk.
const DOCS_URL  = getArg('docs-url')  || 'https://docs.evangelaudio.com';

// ── Locale display names ──────────────────────────────────────────────────────

const LOCALE_LABELS = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
  es: 'Español (Latinoamérica)',
  ko: '한국어',
  da: 'Dansk',
};

// ── Page list — must match sidebar order in sidebars.js ──────────────────────
// With routeBasePath: '/', docs are at the root of the built site.
// All locales are built to root when using --locale <code> in Docusaurus.

const DOCS_DIR = path.join(__dirname, '..', 'docs');

// ── Page discovery ────────────────────────────────────────────────────────────
// SECTION = 'software' (the software manual) or a hardware product folder name
// (e.g. 'ax32'). Each page's URL comes from its slug: frontmatter when present,
// else the default route from the file path. Stays correct as content changes.
function readFrontmatter(absPath) {
  let s = '';
  try { s = fs.readFileSync(absPath, 'utf8'); } catch (e) { return ''; }
  if (!s.startsWith('---')) return '';
  const close = s.indexOf('---', 3);
  return close === -1 ? '' : s.slice(3, close);
}
function fmField(fm, name) {
  for (const line of fm.split('\n')) {
    const t = line.trim();
    if (t.startsWith(name + ':')) {
      let v = t.slice(name.length + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      return v;
    }
  }
  return null;
}
function stripExt(p) {
  if (p.endsWith('.mdx')) return p.slice(0, -4);
  if (p.endsWith('.md')) return p.slice(0, -3);
  return p;
}
function routeFor(relFromDocs, fm) {
  const slug = fmField(fm, 'slug');
  if (slug) return slug.startsWith('/') ? slug : '/' + slug;
  let r = stripExt(relFromDocs);
  if (r === 'index') return '/';
  if (r.endsWith('/index')) r = r.slice(0, -('/index'.length));
  return '/' + r;
}
const SOFTWARE_FILES = [
  'intro.md', 'front-matter-safety.md',
  'ch01-introduction.md', 'ch02-system-requirements.md', 'ch03-installation.md',
  'ch04-hardware-description.md', 'ch05-signal-flow.md', 'ch06-getting-started.md',
  'ch07-operation.md', 'ch08-advanced-features.md', 'ch09-troubleshooting.md',
  'ch10-maintenance.md', 'appendices.md',
];
function softwarePages() {
  return SOFTWARE_FILES.map((f) => routeFor(f, readFrontmatter(path.join(DOCS_DIR, f))));
}
function productPages(product) {
  const dir = path.join(DOCS_DIR, 'hardware', product);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  const items = files.map((f) => {
    const fm = readFrontmatter(path.join(dir, f));
    const isIndex = (f === 'index.md' || f === 'index.mdx');
    const posStr = fmField(fm, 'sidebar_position');
    const pos = isIndex ? -1 : (posStr ? parseInt(posStr, 10) : 999);
    return { route: routeFor('hardware/' + product + '/' + f, fm), pos, file: f };
  });
  items.sort((a, b) => (a.pos - b.pos) || a.file.localeCompare(b.file));
  return items.map((i) => i.route);
}
const DOC_PAGES = SECTION === 'software' ? softwarePages() : productPages(SECTION);

// ── Print CSS — injected before capturing each page ──────────────────────────
// Removes site chrome (navbar, sidebar, TOC, pagination) and sets print-safe
// typography. Keeps images, tables, and code blocks intact.

const PRINT_CSS = `
  /* ── Hide site chrome ── */
  .navbar,
  .theme-doc-sidebar-container,
  .theme-doc-toc-desktop,
  .theme-doc-toc-mobile,
  .pagination-nav,
  .theme-last-updated,
  footer.footer,
  .breadcrumbs__item,
  nav[aria-label="Docs pages"] {
    display: none !important;
  }

  /* ── Full-width content ── */
  .main-wrapper,
  .docMainContainer,
  .docPage,
  article {
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .container { max-width: none !important; padding: 0 !important; }
  .col { padding: 0 !important; }

  /* ── Typography ── */
  body { font-size: 13px !important; line-height: 1.5 !important; }
  h1 { font-size: 22px !important; }
  h2 { font-size: 18px !important; }
  h3 { font-size: 15px !important; }

  /* ── Page breaks ── */
  h2 { break-before: auto; }
  h1 { break-before: page; }
  h1:first-of-type { break-before: avoid; }
  table, figure, pre { break-inside: avoid; }

  /* ── Code blocks ── */
  pre, code { font-size: 10px !important; }

  /* ── Tables ── */
  table { width: 100% !important; border-collapse: collapse !important; }
  th, td { padding: 4px 8px !important; border: 1px solid #ccc !important; }

  /* ── Warning/note admonitions — keep readable in greyscale print ── */
  .admonition { border-left: 3px solid #666 !important; padding: 8px 12px !important; }
`;

// ── Puppeteer header/footer templates ────────────────────────────────────────
// Note: only inline styles work inside these templates (no external CSS).

const localeLabel = LOCALE !== 'en' ? ` · ${LOCALE_LABELS[LOCALE] || LOCALE}` : '';

const HEADER_HTML = `
  <div style="
    font-size: 9px; font-family: Helvetica, Arial, sans-serif;
    width: 100%; padding: 4px 18mm; box-sizing: border-box;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 0.5pt solid #cccccc; color: #444444;
  ">
    <span style="font-weight: bold;">DADman User Manual</span>
    <span>v${VERSION}${localeLabel}</span>
  </div>`;

const FOOTER_HTML = `
  <div style="
    font-size: 8px; font-family: Helvetica, Arial, sans-serif;
    width: 100%; padding: 4px 18mm; box-sizing: border-box;
    display: flex; justify-content: space-between; align-items: center;
    color: #888888;
  ">
    <span>Generated ${DATE} — verify currency at ${DOCS_URL.replace('https://', '')}</span>
    <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
  </div>`;

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n📄  DADman PDF Generator');
  console.log(`    Version  : ${VERSION}`);
  console.log(`    Date     : ${DATE}`);
  console.log(`    Locale   : ${LOCALE_LABELS[LOCALE] || LOCALE}`);
  console.log(`    Source   : ${BASE_URL}`);
  console.log(`    Output   : ${OUTPUT}\n`);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const pdfBuffers = [];

  for (const pagePath of DOC_PAGES) {
    const url  = `${BASE_URL}${pagePath}`;
    const tick = process.stdout;
    tick.write(`  Capturing ${pagePath.padEnd(35)} `);

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });

      // Wait for Docusaurus hydration to settle
      await page.waitForSelector('article', { timeout: 10_000 }).catch(() => {});

      await page.addStyleTag({ content: PRINT_CSS });

      const buf = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top:    '20mm',
          right:  '18mm',
          bottom: '18mm',
          left:   '18mm',
        },
        displayHeaderFooter: true,
        headerTemplate: HEADER_HTML,
        footerTemplate:  FOOTER_HTML,
      });

      pdfBuffers.push(buf);
      tick.write('✓\n');

    } catch (err) {
      tick.write(`✗  ${err.message}\n`);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  if (pdfBuffers.length === 0) {
    console.error('\n✗  No pages captured. Is the site running at', BASE_URL, '?\n');
    process.exit(1);
  }

  // ── Merge individual page PDFs into one document ──────────────────────────
  console.log(`\n  Merging ${pdfBuffers.length} sections with pdf-lib...`);

  const { PDFDocument } = require('pdf-lib');
  const merged = await PDFDocument.create();

  // Document metadata
  merged.setTitle(`DADman User Manual v${VERSION}`);
  merged.setAuthor('NTP Technology A/S — Digital Audio Denmark');
  merged.setSubject('DADman Control Software User Manual');
  merged.setKeywords(['DADman', 'Digital Audio Denmark', 'NTP Technology', 'user manual', 'audio', VERSION]);
  merged.setCreationDate(new Date(DATE));
  merged.setModificationDate(new Date());

  for (const buf of pdfBuffers) {
    try {
      const doc   = await PDFDocument.load(buf);
      const pages = await merged.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => merged.addPage(p));
    } catch (err) {
      console.warn(`  Warning: could not merge a section — ${err.message}`);
    }
  }

  const bytes  = await merged.save();
  const sizeKB = Math.round(bytes.length / 1024);
  const sizeMB = (bytes.length / (1024 * 1024)).toFixed(1);

  fs.writeFileSync(OUTPUT, bytes);
  console.log(`\n✓  Saved: ${OUTPUT}`);
  console.log(`   Size : ${sizeKB} KB (${sizeMB} MB)`);
  console.log(`   Pages: ${merged.getPageCount()}\n`);
}

main().catch(err => {
  console.error('\n✗  Fatal error:', err.message);
  process.exit(1);
});
