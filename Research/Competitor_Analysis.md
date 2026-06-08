# Competitor Documentation Analysis
**Date:** June 2026 | **Prepared by:** Claude / Cowork  
**Purpose:** Extract actionable documentation conventions from benchmark manufacturers to inform DADman manual structure, formatting, and chapter design.

---

## Documents Reviewed

| Manufacturer | Document(s) | Pages | Notes |
|---|---|---|---|
| **LAWO** | mc²96 Operators Manual v6.4.0/2 | 688 | Primary benchmark — most complete software+hardware manual |
| **LAWO** | mc²96 Installation & Service Guide v1.0/3 | 65 | Separate doc for installation — confirms the two-document model |
| **LAWO** | mc²96 Technical Manual v6.4.0/2 | — | Third tier: engineering reference |
| **DigiCo** | SD & Quantum Software Reference, Issue H, V2000+ | 243 | Software-reference style; exemplary version discipline |
| **Avid** | VENUE S6L System Guide v8.2 | 599 | Primary operational guide; strong conventions section |
| **Avid** | VENUE S6L Handbook | 59 | Hardware overview — specification-dense quick reference |
| **Avid** | VENUE Troubleshooting Guide | — | Standalone troubleshooting doc; excellent symptom-table model |
| **Yamaha** | RIVAGE PM Series Owner's Manual | 1079 | Comprehensive reference; excellent Quick Guide + "About Relevant Manuals" pattern |
| **Yamaha** | CS-R5 Owner's Manual | 36 | Hardware control surface; standard safety boilerplate |
| **DirectOut** | PRODIGY.MP Manual v3.1 | 126 | Clean structure; excellent clock management docs; 3-tier callout model |
| **DirectOut** | ANDIAMO Hardware Guide v1.3 | 48 | Standalone hardware guide; exemplary LED state tables; connector naming model |

---

## Key Structural Findings

### 1. Document Suite Architecture

All benchmark manufacturers use a **multi-document model**. The DADman manual project plan already envisions this — these findings confirm the approach.

| Manufacturer | Doc 1 | Doc 2 | Doc 3+ |
|---|---|---|---|
| LAWO | Operators Manual | Installation & Service Guide | Technical Manual |
| Avid VENUE | System Guide (operational) | Installation Guide | Troubleshooting Guide (separate) · Handbook · Dante Guide · AVB Guide · etc. |
| DigiCo | Software Reference (standalone) | (Hardware manuals are per-product) | |
| DirectOut | Hardware Guide | globcon (software) manual | Module-specific supplements |

**DADman implication:** The project is right to build DADman as a software-centric manual. The hardware installation guides (AX64, AX Center, etc.) remain separate product documents. The DADman manual should cross-reference them, not absorb them.

---

### 2. Getting Started Chapter Structure (LAWO — best practice)

LAWO's Getting Started chapter (Ch. 7, pp. 48–73) is the clearest benchmark for Chapter 5 of the DADman manual. Their sequence:

```
7.1  Powering On                           → Expected behaviour at boot
7.2  Checking the System Components        → Alarm/status check
7.3  Resetting the System                  → Loading a default production
7.4  Interrogating the Fader Strips        → Reading the UI state
7.5  Assigning an Input Source             → First routing action
7.6  Adjusting Input Gain                  → First gain action
7.7  Input Metering                        → Confirming signal
7.8  Checking Bus Assignments              → First bus/output action
7.9  Monitoring Audio                      → First output action
     Creating Your Own Setup
     Saving Settings
     Next Steps                            → Cross-refs to deeper chapters
```

Each section is short (1–2 pages), heavily illustrated, and ends with "For full details, see [chapter]".

**DADman equivalent Getting Started sequence:**
```
5.1  Launching DADman
5.2  Verifying device discovery (Device List)
5.3  Loading or creating a configuration
5.4  Assigning an input source (AD section)
5.5  Setting input gain
5.6  Patching to an output (Connections matrix)
5.7  Setting output levels (DA section)
5.8  Verifying audio end-to-end
5.9  Saving your configuration (.dms file)
5.10 Next steps (cross-refs to Ch. 6, 7, 8)
```

---

### 3. Version Tagging — DigiCo (best practice)

DigiCo's SD/Quantum Reference uses consistent inline version marks throughout:
- `(v1445+)` — feature available from this software version
- `(V17xx+)` — feature available in major version 17 onwards
- `(V20xx+)` — current generation

**DADman equivalent:** Apply version marks for any feature not present in all supported versions:
- `(DADman v5.5.0 and later)` — e.g. Apple Silicon native support
- `(DADman v5.8.0 and later)` — e.g. Control|Pack, Mic Gain Groups
- `(DADman v5.8.1.6)` — e.g. Device List column sorting (macOS only)

**Rule:** Every feature introduced or changed in a specific version must carry an inline version note. This is especially important for DADman given it controls hardware from multiple generations.

---

### 4. Conventions Section — Avid VENUE (best practice, must adopt)

Avid's System Guide opens with an explicit **"Conventions Used in This Guide"** table. It covers:
- Touch/Swipe/Double-tap gestures on touchscreens
- UI path notation: `Options > System` format
- Bold text = physical switches/controls
- Different font = on-screen selectable elements
- Four callout icon types: Tips · Important Notices · Shortcuts · Cross References

**DADman equivalent — adopt the following conventions and document them in the Front Matter:**

| Convention | Meaning | Example |
|---|---|---|
| **Bold** | DADman UI element (button, tab, menu item, control) | **File > Save As** |
| `Monospace` | File path, filename, command, value to type | `DADman.app`, `.dms`, `192.168.1.1` |
| *Italic* | Variable — substitute your own value | *filename*, *unit name* |
| SMALL CAPS | Hardware control or front panel label | RECONFIG button |
| `>` | Menu or navigation path separator | **Settings > Monitor Profile** |
| *(v5.8.0+)* | Feature requires this version or later | *(v5.8.0+)* |

**Four callout types** (to match DADman's documentation tone):

| Icon | Label | Purpose |
|---|---|---|
| 💡 | **TIP** | Workflow shortcut or professional best practice |
| ℹ | **NOTE** | Important clarification or caveat; no safety risk |
| ⚠ | **CAUTION** | Risk of data loss or configuration loss; minor equipment risk |
| 🔗 | **SEE ALSO** | Cross-reference to a related section |

Safety notices (DANGER / WARNING) remain separate from these callouts and follow IEC 62368-1 formatting.

---

### 5. Troubleshooting Structure — Avid VENUE (definitive model)

Avid's standalone Troubleshooting Guide uses the **three-column symptom table** throughout, grouped by category:

| Categories used | DADman equivalent |
|---|---|
| Faders, Switches, Modules, Channels, Devices | Audio Issues |
| Startup and Restarts | Software & Startup |
| Plug-Ins | — (not applicable) |
| Warning Dialogs | Error Messages & Alerts |
| — | Network & Device Connectivity |
| — | Installation & Driver |

**Additional structure borrowed from Avid Troubleshooting:**
- Status LED reference table (colour + state + meaning)
- Log file locations and collection procedure
- Component reset procedures (ordered: soft reset → hardware reset → power cycle)
- Emergency shutdown procedure

**Critical for DADman Ch. 9:** The Avid model has a separate "E6LX/E6L Status and System LEDs" section. We should include an equivalent for the front panel LEDs of each major DADman-compatible hardware type, cross-referenced from the troubleshooting table.

---

### 6. Hardware Overview Chapter — Avid Handbook (specification model)

The Avid VENUE Handbook is a compact, specification-dense document covering hardware variants, I/O configurations, power, weight, and expansion options in tables. It functions as the "what comes in the box and how does it spec out" reference.

The systematic table format for hardware variants is directly applicable to Chapter 3 (System Overview) of the DADman manual:

```
For each DADman-compatible hardware product:
  - Product name + variant (e.g. AX Center, Core 256, AX64)
  - Connection method (Thunderbolt / Ethernet)
  - Family group (for cloning compatibility)
  - Routing matrix capacity (e.g. 1024×1024)
  - Max analogue I/O
  - Digital I/O formats supported
  - Sample rates
  - DADman version minimum
```

---

### 7. Separate Installation Guide — LAWO & Avid (confirms our structure)

Both LAWO and Avid publish the installation procedure as a **separate document** from the operator's manual. This cleanly separates:
- Installation Guide: for the systems integrator / IT / facilities engineer installing the system
- Operator's Manual: for the audio engineer who uses the system daily

**DADman implication:** Chapter 4 (Installation) in our manual is somewhat unusual in a software-centric manual. However, given that DADman requires network configuration, IP addressing, driver installation, and firmware management — all typically done by a different person than the daily operator — a future version of this documentation set could productively split Chapter 4 into a separate "DADman System Setup Guide."

For the current manual, keep Chapter 4 in place but ensure it has a clear note in the section header table stating it is primarily relevant to the system integrator / IT person, not the daily operator.

---

### 8. Path Notation for Software Menus

All manufacturers use a `>` separator for menu paths:
- **Avid:** `Options > System`
- **LAWO:** `Productions display > right-click > Load`
- **DigiCo:** `System Menu > Diagnostics`

**Adopt for DADman:** `Settings > Monitor Profile`, `File > Save As`, etc. This is already used in draft chapters — confirm consistency across all chapters.

---

### 9. Version Information in Document Header

All benchmark manufacturers state the exact software/firmware version in the document header:
- **LAWO:** "Specification valid for mc2 Version 6.4.0.x" — on page 4
- **DigiCo:** "Issue H – June 2025 – V2000+" — on cover + page footer
- **Avid:** "8.2" on cover; "05/26" (date) in footer

**DADman:** Every chapter draft carries version in the front-matter block. Confirm this is in every chapter before review. Footer on every page should carry: `DADman User Manual · v5.8.1.6 · [Chapter title] · Draft [version]`.

---

## Conventions Decisions — Apply Immediately

The following decisions should be applied retroactively to Chapters 2 and 4, and prospectively to all subsequent chapters:

1. **UI element formatting:** Bold all DADman tab names, button labels, and menu paths on first mention and wherever precision matters. Example: **AD**, **DA**, **Con**, **Conf**, **Mon**, **File > Save As**.

2. **Version tags:** Add inline `*(v5.8.0+)*` or `*(v5.5.0+)*` wherever version-specific behaviour is mentioned.

3. **Menu path separator:** Confirm `>` is used consistently (not `->`).

4. **Callout types:** The four callout types (TIP, NOTE, CAUTION, SEE ALSO) need to be applied consistently in drafted chapters — currently some use NOTICE which is the IEC safety signal word; replace non-safety NOTICEs with NOTE.

5. **Chapter header section navigator table:** The DigiCo-style table at the top of each chapter mapping sections to user roles (from Chapter 4) should be adopted in all chapters.

---

## Gaps Identified by Competitor Comparison

| Gap | Benchmark | Action |
|---|---|---|
| No "Conventions Used in This Manual" section | Avid VENUE System Guide | Add to Front Matter / Chapter 1 |
| No LED state reference table | Avid Troubleshooting Guide + LAWO | Add to Ch. 9 (Troubleshooting) per hardware model |
| No component reset procedure hierarchy | Avid Troubleshooting Guide | Add to Ch. 9 |
| No log file location reference | Avid Troubleshooting Guide | Research DADman log file paths; add to Ch. 9 |
| No hardware variant specification table | Avid Handbook | Add to Ch. 3 (System Overview) |
| No "Next Steps" section at end of Getting Started | LAWO Getting Started | Add to Ch. 5 |
| Regulatory declarations not yet in place | All manufacturers | Pending from DAD engineering — see Ch. 2 placeholders |

---

---

## Additional Findings — DirectOut & Yamaha RIVAGE

### DirectOut PRODIGY.MP (v3.1, 126 pp)

**Document structure:**
```
About This Manual (conventions)
Ch.1  Overview (feature summary, block diagram)
Ch.2  Legal issues & facts (safety + compliance)
Ch.3  Power & Connections
Ch.4  Connections (signal I/O)
Ch.5  Managing Device (UI reference — touch, browser, globcon)
Ch.6  Troubleshooting & Maintenance
Ch.7  Technical Data
```

**Callout hierarchy — only 3 tiers (simpler than IEC 62368-1):**
- **TIPS** — useful hints and shortcuts
- **NOTES** — important clarification or cross-references
- **WARNINGS!** — actions that must always be observed

*DADman implication:* DirectOut's simplified 3-tier model is more user-friendly than the full IEC hierarchy for software documentation. Consider using DANGER/WARNING only for genuine electrical hazards (Ch. 2) and TIP/NOTE/CAUTION for the operational chapters. This matches what the competitor analysis recommends.

**Getting Started (p.83) — minimal, exemplary:**
```
1. Check hardware — housing must be closed; cover empty slots
2. Check network connection (MGMT port)
3. Power on
4. Check front panel display for IP address
```
Four steps. Then each subsequent chapter deepens from there. This minimalism is the ideal for DADman's Ch. 5 opener before the detailed walkthrough.

**CLOCK screen documentation (pp.88–92) — directly applicable to DADman:**
DirectOut documents the clock UI as a table: each selectable item → its function → footnotes for caveats. The Auto/Manual mode toggle, priority fallback behaviour, and SRC bypass logic are all documented this way. DADman's **Conf** tab clock/sync section should follow this exact pattern.

**SNAPSHOT documentation (p.94):**
- Up to 99 snapshots stored in device
- Show Mode vs Config Mode toggle — important distinction
- Outputs muted after recall in Config Mode (critical safety behaviour — must document)
- This maps directly to DADman's `.dms` configuration file and routing preset concepts.

**Troubleshooting table (pp.108–109):**
Three columns: **Issue | Possible reason | Solution**. Grouped by symptom type. Reset procedures (Device reset, Label reset) documented as separate numbered procedures after the table — not buried inside it.

---

### DirectOut ANDIAMO Hardware Guide (v1.3, 48 pp)

**LED state table format — adopt for DADman Ch. 9:**

DirectOut documents every front panel LED as:
```
[LED name] [physical location indicator]
  State: (ON, green) = meaning
  State: (blinking, green) = meaning  
  State: (OFF) = meaning
```

This is the clearest LED documentation format reviewed across all manufacturers. Apply to each DADman-compatible hardware unit's LED reference in Ch. 9 / Ch. 3.

**Connector naming convention — best in class:**
Every connector is documented as: `[port name] [connector type, spec]`
- `WCK IN — BNC socket (coaxial), 75 Ω`
- `MADI 1/2 — SFP cage`
- `MGMT — RJ45 socket (1 Gbit/s)`
- `ANALOG OUTPUT 1..8 — DSUB-25 Port`

This is exactly the convention in our pro-audio-manual-expert skill. Must apply consistently throughout Ch. 3 hardware tables.

**Bank Routing vs Matrix Mode concept table (p.28) — model for DADman routing documentation:**
DirectOut introduces the routing concept with a two-column feature comparison before explaining procedures:

| Feature | Bank Routing | Matrix Mode |
|---|---|---|
| Input level adjust, mute, polarity | n/a | yes |
| Signal routing | entire port/bank | single channel |
| EARS | n/a | switchable |

DADman's routing documentation in Ch. 7 should open with an equivalent concept table comparing simple routing (direct I/O assignment) vs. the full crosspoint matrix before explaining how to use each.

**globcon port requirements (p.19) — model for DADman network requirements:**
DirectOut explicitly documents: *"ports 5002, 5003, 5004 must be unfiltered for TCP traffic."*
We must document DADman's equivalent port requirements in Ch. 4 and Ch. 9. This is currently a gap — **action: request port numbers from DAD engineering.**

**IP Reset from front panel (p.23):**
DirectOut documents the front-panel emergency IP reset procedure (press and hold SELECT + SET for 5 seconds). Each DADman-compatible hardware unit has an equivalent Reconfig procedure — document these in Ch. 9 per model.

---

### Yamaha RIVAGE PM Owner's Manual (1079 pp)

**"About the Relevant Manuals" section (p.25) — must adopt:**
Yamaha opens with a page listing every document in the RIVAGE documentation suite and what each covers. This is the pattern we need in DADman's Front Matter: a table listing this manual + the hardware installation guides + release notes + where to find them.

**"Quick Guide" section (pp.166+) — second Getting Started model:**
Yamaha's Quick Guide sequence mirrors LAWO's Getting Started but adds system setup before operation:
```
Basic system overview
Installing optional cards
Assigning Unit ID
Connecting the devices
Turning on the power
Setting word clock
Assigning channels to TWINLANe network
Patching input ports
Patching output ports
```

The clocking step coming immediately after power-on (before patching) is correct. DADman Getting Started should follow the same order: launch → device discovery → **set clock/sample rate** → assign inputs → patch → set output levels → save.

**Scale:** At 1079 pages, the RIVAGE PM manual is the most comprehensive in the benchmark set. Its sheer depth confirms that the DADman manual — covering software that manages up to 1500×1500 routing crosspoints and complex monitor profiles — warrants a full-length reference guide, not a quick-start pamphlet.

**Component Structure chapter (pp.27–47):** Yamaha dedicates ~20 pages purely to "what is each hardware component" before any operation. This is the template for DADman's Ch. 3 (System Overview) — hardware family descriptions, connection topology, and the software layer explained as a system before procedures begin.

---

## Revised Conventions Decision — Callout Tiers

After reviewing all five manufacturers, the following callout model is recommended (revision of the earlier 4-tier proposal):

| Callout | When to use | IEC equivalent | Visual |
|---|---|---|---|
| **DANGER** | Immediate death/injury risk — electrical, mains voltage | DANGER | ⚡ Red box |
| **WARNING** | Potential death/injury risk | WARNING | ⚠ Orange box |
| **CAUTION** | Equipment damage, data loss risk | CAUTION | ⚠ Yellow box |
| **TIP** | Workflow shortcut, professional best practice | — | 💡 |
| **NOTE** | Important clarification, caveat, cross-reference | NOTICE | ℹ |

This aligns DADman with DirectOut's clean 3-tier operational model while maintaining IEC 62368-1 compliance for the safety chapter. DANGER/WARNING appear only in Ch. 2 and where genuine hazards arise in operational chapters (e.g., output level settings near amplifiers). TIP and NOTE cover all other callout needs.

---

*Analysis updated June 2026 — all five manufacturer documentation sets now reviewed.*
