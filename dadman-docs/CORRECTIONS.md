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

### DADman — — Correct keyboard shortcut for Win: Ctrl+Shift+R instead of another key
- **File:** `docs/ch07-operation.md`
- **Section:** —
- **Wrong:** (not quoted by commenter)
- **Correct:** Ctrl+Shift+R (Win) for the referenced function; Monitor Profiles remain Ctrl+Shift+M (Win)
- **Original comment:** No. Typo - It's Ctrl+Shift+R (Win), Monitor Profiles are still Ctrl+Shift+M (Win)
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

### DADman §7.6.2 — Clarify Ctrl/Cmd+click behavior on activated crosspoints
- **File:** `docs/ch07-operation.md`
- **Section:** §7.6.2
- **Wrong:** (not quoted by commenter)
- **Correct:** Ctrl/Cmd+click on an activated crosspoint unpatches that point and all following points
- **Original comment:** Reg #7.6.2 - if Ctrl/Cmd+click is on an activated crosspoint, that point and all that follow will be unpatched.
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

### DADman §7.10.3 — Add keyboard shortcut for Routing Presets with firmware requirement note.
- **File:** `docs/ch07-operation.md`
- **Section:** §7.10.3
- **Wrong:** (not quoted by commenter)
- **Correct:** Routing Presets keyboard shortcut: ⌘⇧R (Mac) / Ctrl+Shift+R (Win). Requires firmware with ControlPack.
- **Original comment:** Reg #7.10.3 - The keyboard shortcut for Routing Presets is ⌘⇧R (Mac) and Ctrl+Shift+M (Win) (Requires the firmware that introduced ControlPack.)
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

### DADman §7.1.2 — Clarify device state maintenance mechanism
- **File:** `docs/ch07-operation.md`
- **Section:** §7.1.2
- **Wrong:** (not quoted by commenter)
- **Correct:** The device maintains its last state directly in memory and activates it immediately when the device comes online. No loading from DADman is required.
- **Original comment:** Reg #7.1.2 - Technically, the device doesn't load the last state from DADman. It is maintained directly in memory on device and will be active as soon as the device is on-line. No loading needed. This clarification is important to avoid confusion about saving vs. not saving.
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

### ax-center 2.1 — Add information about Headphones Short Delay setting for latency minimization.
- **File:** `docs/hardware/ax-center/ch02-panel-description.md`
- **Section:** 2.1
- **Wrong:** (not quoted by commenter)
- **Correct:** Headphones have a Short Delay setting for minimizing latency.
- **Original comment:** Reg #2.1 - Headphones have a Short Delay setting for minimizing latency.
- **Source:** Giscus comment on `/hardware/ax-center/ch02-panel-description` page
- **Found:** 2026-06-15

### DADman §7.10.3 — Add keyboard shortcut for Routing Presets (⌘⇧R Mac, Ctrl+Shift+M Win)
- **File:** `docs/ch07-operation.md`
- **Section:** §7.10.3
- **Wrong:** (not quoted by commenter)
- **Correct:** Section 7.10.3 should document that the keyboard shortcut for Routing Presets is ⌘⇧R on Mac and Ctrl+Shift+M on Windows (requires firmware with ControlPack).
- **Original comment:** Reg #7.10.3 - The keyboard shortcut for Routing Presets is ⌘⇧R (Mac) and Ctrl+Shift+M (Win) (Requires the firmware that introduced ControlPack.)
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

### DADman — — Keyboard shortcut for Monitor Profiles is incorrect on Windows.
- **File:** `docs/ch07-operation.md`
- **Section:** —
- **Wrong:** (not quoted by commenter)
- **Correct:** Monitor Profiles keyboard shortcut (Win): Ctrl+Shift+M. Separate shortcut Ctrl+Shift+R also exists.
- **Original comment:** No. Typo - It's Ctrl+Shift+R (Win), Monitor Profiles are still Ctrl+Shift+M (Win)
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

### DADman §7.1.2 — Clarify that device state is maintained in memory, not loaded from DADman.
- **File:** `docs/ch07-operation.md`
- **Section:** §7.1.2
- **Wrong:** (not quoted by commenter)
- **Correct:** The device maintains its last state directly in memory and activates it when the device comes online. No loading from DADman is required.
- **Original comment:** Reg #7.1.2 - Technically, the device doesn't load the last state from DADman. It is maintained directly in memory on device and will be active as soon as the device is on-line. No loading needed. This clarification is important to avoid confusion about saving vs. not saving.
- **Source:** Giscus comment on `/operation` page
- **Found:** 2026-06-13

---

## Fixed Corrections

| Date fixed | Product | Section | Summary |
|------------|---------|---------|---------|
| 2026-06-13 | DADman software | §7.6.2 Making and Removing Connections (`docs/ch07-operation.md`) | Ctrl/Cmd+click on an *active* crosspoint unpatches from that point onwards — missing from both §7.6.2 and §7.10.2 tables. Source: Giscus comment on `/operation` page. |
| 2026-06-13 | DADman software | §7.10.3 Keyboard Shortcuts (`docs/ch07-operation.md`) | Routing Presets shortcut was missing: ⌘⇧R (Mac) / Ctrl+Shift+R (Win). Monitor Profile Windows shortcut (Ctrl+Shift+M) confirmed correct and retained. ControlPack firmware requirement noted. Source: Giscus comment + reply on `/operation` page. |
