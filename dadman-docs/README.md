# DADman User Manual — Docusaurus Site

This is the source for the DADman User Manual, built with [Docusaurus 3](https://docusaurus.io).

**Target URL:** https://docs.digitalaudio.dk/dadman/

## Quick start

```bash
cd dadman-docs
npm install
npm start      # local dev server at http://localhost:3000
npm run build  # production build → /build
```

## Structure

```
dadman-docs/
├── docs/                  # All manual content (Markdown)
│   ├── intro.md           # Landing page / About
│   ├── front-matter-safety.md
│   ├── ch01-introduction.md
│   ├── ch02-system-requirements.md
│   ├── ch03-installation.md
│   ├── ch04-hardware-description.md
│   ├── ch05-signal-flow.md
│   ├── ch06-getting-started.md
│   ├── ch07-operation.md
│   ├── ch08-advanced-features.md
│   ├── ch09-troubleshooting.md
│   ├── ch10-maintenance.md
│   └── appendices.md
├── src/css/custom.css     # DAD brand theme
├── static/img/            # Images and logo assets (add here)
├── docusaurus.config.js   # Site configuration
├── sidebars.js            # Sidebar navigation
└── package.json
```

## Editing content

Source markdown files live in `../Chapters/` — the DAD manual project folder. The `docs/` files here are copies with Docusaurus frontmatter added. When chapter content is updated in the source folder, re-run the copy script or update `docs/` manually.

## Adding images / screenshots

Place screenshots in `static/img/` and reference them in markdown as:

```markdown
![Alt text](/img/screenshot-filename.png)
```

Screenshot placeholders in the draft appear as striped grey boxes — they render as `*[Placeholder: ...]*` italic paragraphs styled by `custom.css`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`.
