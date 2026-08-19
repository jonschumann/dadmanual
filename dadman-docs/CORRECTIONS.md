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

### penta-720 §1.1 — Hyphenation of "rack mount"
- **File:** `docs/hardware/penta-720/ch01-introduction.md` (term appears across most product manuals)
- **Section:** §1.1 Product Overview
- **Wrong:** "rackmount"
- **Correct:** "rack mount" or "rack-mount" — needs a house-style decision, then applying consistently across all product manuals rather than penta-720 alone
- **Original comment:** rack mount is spelled wrong. It isn't one word.
- **Source:** Giscus comment on `/hardware/penta-720/` page (approved 2026-08-19; written to `main` by the dashboard before the branch-target fix, migrated here)
- **Found:** 2026-08-19

---

## Fixed Corrections

| Date fixed | Product | Section | Summary |
|------------|---------|---------|---------|
| 2026-06-13 | DADman software | §7.6.2 Making and Removing Connections (`docs/ch07-operation.md`) | Ctrl/Cmd+click on an *active* crosspoint unpatches from that point onwards — missing from both §7.6.2 and §7.10.2 tables. Source: Giscus comment on `/operation` page. |
| 2026-06-13 | DADman software | §7.10.3 Keyboard Shortcuts (`docs/ch07-operation.md`) | Routing Presets shortcut was missing: ⌘⇧R (Mac) / Ctrl+Shift+R (Win). Monitor Profile Windows shortcut (Ctrl+Shift+M) confirmed correct and retained. ControlPack firmware requirement noted. Source: Giscus comment + reply on `/operation` page. |
| 2026-07-14 | DADman software | §7.1.2 Startup and Auto-Load (`docs/ch07-operation.md`) | Added clarifying note: connected units maintain their last state in their own memory and resume immediately on power-on — DADman's "auto-load" setting only controls whether DADman re-pushes a `.dms` file to already-running units at launch, it is not required for the device to retain state. Source: Giscus comment on `/operation` page. |
| 2026-07-14 | AX Center | §2.1 Front Panel (`docs/hardware/ax-center/ch02-panel-description.md`) | HP 1 / HP 2 rows now note the Short Delay setting for minimizing monitoring latency. Source: Giscus comment on `/hardware/ax-center/ch02-panel-description` page. |
| 2026-07-14 | AX Center | §2.2 Rear Panel (`docs/hardware/ax-center/ch02-panel-description.md`) | Thunderbolt cable requirement notice: "Standard USB-C cables are not rated for Thunderbolt 3 speeds and will not work reliably" is now italicized and underlined. Source: Giscus comment on `/hardware/ax-center/ch02-panel-description` page. |
| 2026-07-14 | AX Center | §2.2 Rear Panel — SLOT 1/SLOT 2 (`docs/hardware/ax-center/ch02-panel-description.md`) | Corrected "Analogue I/O expansion slots" — slots accept any DAD expansion card from the family, not just analogue cards. Source: Giscus comment on `/hardware/ax-center/ch02-panel-description` page. |
