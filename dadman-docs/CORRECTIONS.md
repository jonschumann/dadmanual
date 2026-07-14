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
| 2026-07-14 | DADman software | §7.1.2 Startup and Auto-Load (`docs/ch07-operation.md`) | Added clarifying note: connected units maintain their last state in their own memory and resume immediately on power-on — DADman's "auto-load" setting only controls whether DADman re-pushes a `.dms` file to already-running units at launch, it is not required for the device to retain state. Source: Giscus comment on `/operation` page. |
| 2026-07-14 | AX Center | §2.1 Front Panel (`docs/hardware/ax-center/ch02-panel-description.md`) | HP 1 / HP 2 rows now note the Short Delay setting for minimizing monitoring latency. Source: Giscus comment on `/hardware/ax-center/ch02-panel-description` page. |
| 2026-07-14 | AX Center | §2.2 Rear Panel (`docs/hardware/ax-center/ch02-panel-description.md`) | Thunderbolt cable requirement notice: "Standard USB-C cables are not rated for Thunderbolt 3 speeds and will not work reliably" is now italicized and underlined. Source: Giscus comment on `/hardware/ax-center/ch02-panel-description` page. |
| 2026-07-14 | AX Center | §2.2 Rear Panel — SLOT 1/SLOT 2 (`docs/hardware/ax-center/ch02-panel-description.md`) | Corrected "Analogue I/O expansion slots" — slots accept any DAD expansion card from the family, not just analogue cards. Source: Giscus comment on `/hardware/ax-center/ch02-panel-description` page. |

---

*Note: this log was reconciled 2026-07-14 against the actual manual content on the `hardware-manuals` branch (the sole deploy source — see repo `.github/workflows/deploy.yml`). Several entries above had been duplicated by the corrections-dashboard (the same Giscus thread parsed multiple times as comment + reply) and two were already fixed in an earlier session but the fix had only ever reached `hardware-manuals`, not `main`, so they lingered here as "open." All are now resolved and reflected on `hardware-manuals`.*
