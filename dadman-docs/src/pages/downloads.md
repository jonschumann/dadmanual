---
title: Download PDF
description: Download the DADman User Manual as a PDF for offline reference. All PDFs are versioned and date-stamped.
hide_table_of_contents: true
---

# Download PDF

Offline PDF versions of the DADman User Manual are generated on demand from the same source as this website. Every PDF is stamped with its version number and generation date — check the footer of any page to confirm you have a current copy.

:::tip Checking currency
The PDF footer reads: **"Generated YYYY-MM-DD — verify currency at docs.evangelaudio.com"**
If the date is more than a few weeks old, a newer version may be available. Generate a fresh copy using the workflow below.
:::

## Available downloads

PDF downloads are attached to each [GitHub Release](https://github.com/digitalaudio/dadman-user-manual/releases) as release assets. Download the latest from the Releases page.

The filename format is:

```
DADman-User-Manual-vX.X.X-YYYY-MM-DD-<locale>.pdf
```

For example: `DADman-User-Manual-v5.8.2-2026-06-11-en.pdf`

## Generate a PDF on demand

Any collaborator with access to the GitHub repository can generate a fresh, versioned PDF in any supported language directly from GitHub Actions — no local setup required.

**Steps:**

1. Open the [GitHub Actions tab](https://github.com/digitalaudio/dadman-user-manual/actions/workflows/generate-pdf.yml) in the repository
2. Click **Run workflow** (top right of the workflow list)
3. Select the language you need from the dropdown
4. Optionally enter a version string override (leave blank to use the current version)
5. Click **Run workflow** — the PDF will be ready in 3–5 minutes
6. Download from the **Artifacts** section of the completed run, or from the Releases page if triggered automatically

## Supported languages

| Language | Locale | Status |
|---|---|---|
| English | `en` | ✅ Source — always available |
| Deutsch | `de` | 🔄 Translation in progress (Crowdin) |
| Français | `fr` | 🔄 Translation in progress (Crowdin) |
| 日本語 | `ja` | 🔄 Translation in progress (Crowdin) |
| Español (Latinoamérica) | `es` | 🔄 Translation in progress (Crowdin) |
| 한국어 | `ko` | 🔄 Translation in progress (Crowdin) |
| Dansk | `da` | 🔄 Translation in progress (Crowdin) |

Non-English PDFs fall back to English for any untranslated sections until translations are complete.

## For distributors and resellers

If you distribute DAD hardware and need a localised PDF for customer packaging or support material, contact [support@ntp.dk](mailto:support@ntp.dk) to request a specific language version or to contribute a translation via Crowdin.

---

*PDFs are generated from the same Markdown source as this website using Puppeteer and are not independently maintained. Always check [docs.evangelaudio.com](https://docs.evangelaudio.com) for the most current version.*
