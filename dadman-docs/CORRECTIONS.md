# DADman Manual — Corrections Log

Use this file to record factual errors found in the manual. Each entry should include the file path, the section, what is wrong, and what the correct information is. Claude will work through open entries and mark them fixed.

---

## How to add a correction

Add a new entry under **Open Corrections** using the template below. You can also leave a Giscus comment directly on the relevant page at [docs.evangelaudio.com](https://docs.evangelaudio.com) — those are checked periodically and converted into entries here.

```
### [Product] §X.Y — Short description of the error
- **File:** `docs/hardware/<product>/chXX-<name>.md`
- **Section:** §X.Y Section Title
- **Wrong:** The text or value currently in the manual
- **Correct:** The verified correct text or value
- **Source:** Where the correct information comes from (spec sheet, DAD support, measurement, etc.)
- **Found:** YYYY-MM-DD
```

---

## Open Corrections

*No open corrections.*

---

## Fixed Corrections

| Date fixed | Product | Section | Summary |
|------------|---------|---------|---------|
| 2026-06-13 | DADman software | §7.6.2 Making and Removing Connections (`docs/ch07-operation.md`) | Ctrl/Cmd+click on an *active* crosspoint unpatches from that point onwards — missing from both §7.6.2 and §7.10.2 tables. Source: Giscus comment on `/operation` page. |
| 2026-06-13 | DADman software | §7.10.3 Keyboard Shortcuts (`docs/ch07-operation.md`) | Routing Presets shortcut was missing: ⌘⇧R (Mac) / Ctrl+Shift+R (Win). Monitor Profile Windows shortcut (Ctrl+Shift+M) confirmed correct and retained. ControlPack firmware requirement noted. Source: Giscus comment + reply on `/operation` page. |
