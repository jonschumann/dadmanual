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
| 2026-08-19 | AX Center | §1.1 Product Overview (`docs/hardware/ax-center/ch01-introduction.md`, `index.md`) and §4.1 (`docs/ch04-hardware-description.md`) | "dual Thunderbolt 3 ports" corrected — the two ports are a single Thunderbolt connection with pass-through, not two independent connections, so the port count does not double bandwidth or channel count. Applies to all Thunder\|Core units. Source: Giscus comment on `/hardware/ax-center/ch01-introduction` page (approved 2026-07-15, logged on `main` only). |
| 2026-08-19 | AX Center | §1.3 Contents of Box (`docs/hardware/ax-center/ch01-introduction.md`) | Box contents corrected to unit / Thunderbolt cable / warranty card — no IEC power cable is supplied. Placeholder text removed and a note added that a territory-appropriate IEC C13 cable must be sourced separately (§3.3). Source: Giscus comment on `/hardware/ax-center/ch01-introduction` page (approved 2026-07-29, logged on `main` only). |
| 2026-08-19 | AX Center | §10.1 Digital I/O (`docs/hardware/ax-center/ch10-specifications.md`) | Channel counts reformatted from "256 ch in / 256 ch out" to "256 In/Out" throughout the Digital I/O table for consistency. Source: Giscus comment on `/hardware/ax-center/ch10-specifications` page (approved 2026-07-15, logged on `main` only). |

---

*Note (2026-08-19): the corrections dashboard had been reading and writing `CORRECTIONS.md` through the GitHub contents API without an explicit branch, so it silently used the repo default branch (`main`) instead of `hardware-manuals` — the sole authoring and deploy branch. Three approved corrections sat on `main` and were never published. They are applied above, and the dashboard now targets `hardware-manuals` explicitly via `TARGET_BRANCH`.*
