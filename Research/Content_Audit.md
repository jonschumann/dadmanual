# DADman User Manual — Content Audit
**Date:** June 2026 | **Prepared by:** Claude / Cowork  
**Structure:** Project Plan v1.0 — FM + Chapters 1–10 + Appendices A–H  
**Purpose:** Map all discovered source material against the authoritative chapter structure. Identify what exists, where it lives, and what must be written from scratch or researched further.

---

## Source Documents Inventory

| # | File | Pages | Type | DADman Relevance |
|---|------|--------|------|-----------------|
| S1 | `DADman PE's Missing Manual.pdf` | 39 | Third-party article (Production Expert) | ★★★★★ — primary DADman reference |
| S2 | `User-Guide-DAD-Control-Pack-2.pdf` | 10 | Official DAD guide | ★★★★★ — Control\|Pack feature complete |
| S3 | `Installation_guide_DAD-Thunderbolt3_driver_29.10.24-2.pdf` | 7 | Official DAD guide | ★★★★☆ — driver install, ASIO config |
| S4 | `DAD-Tech-Support-Spot-TB-JAN2026.pdf` | 2 | Official DAD support note | ★★★☆☆ — Sequoia Thunderbolt fix |
| S5 | `User-Manual-DAD-AX32-V2.pdf` | 31 | Official DAD hardware manual | ★★★★☆ — best structural reference; has DADman UI section |
| S6 | `User_Manual_DAD-AX32-2.pdf` | 31 | Official DAD hardware manual | Duplicate of S5 (different revision) |
| S7 | `Installation-Guide-AX64-v1.0-1.pdf` | 19 | Official DAD install guide | ★★☆☆☆ — hardware install, safety boilerplate |
| S8 | `Installation-Guide-AX-Center-v1.0-2.pdf` | 19 | Official DAD install guide | ★★☆☆☆ — hardware install, safety boilerplate |
| S9 | `Installation-Guide-AX-Center-v1.0-3.pdf` | 19 | Duplicate of S8 | — |
| S10 | `Installation-Guide-Core256-v1.0.pdf` | 16 | Official DAD install guide | ★★☆☆☆ — hardware install, safety boilerplate |
| S11 | `Install-Guide-DADLink-and-mini-MADI-module-3.pdf` | 9 | Official DAD install guide | ★★★☆☆ — DADLink protocol explained |
| S12 | `Installation_Guide_DX32R.pdf` | 10 | Official DAD install guide | ★☆☆☆☆ — hardware specs only |
| S13 | `Installation_Guide_Penta_720.pdf` | 13 | Official DAD install guide | ★☆☆☆☆ — hardware specs only |
| S14 | `User_Guide_Penta_721s-2.pdf` | 11 | Official DAD install guide | ★☆☆☆☆ — hardware specs only |
| S15 | `Getting_Started_Guide_MOM.pdf` | 13 | Official DAD guide | ★★★☆☆ — MOM hardware; DADman monitor control context |

**Key observations:**
- No official standalone DADman manual exists — confirmed by Production Expert article and project context.
- S1 is the richest single source but is a third-party article, not authoritative documentation.
- S5/S6 (AX32 manual) has the best-structured DADman UI section and should be the primary structural template.
- S2 (Control Pack) is a complete, well-written official guide that can be largely adapted.
- S3 (TB3 driver) is authoritative and complete for its scope.
- Installation guides (S7–S14) are largely boilerplate; their safety and compliance text is directly reusable.

---

## Chapter Status Overview

| Chapter | File | Status | Draft coverage |
|---------|------|--------|----------------|
| FM — Front Matter & Safety | `FM_Front_Matter_and_Safety/front-matter-safety.md` | Draft v0.1 | Complete — regulatory declarations pending from DAD |
| Ch. 1 — Introduction & Product Overview | `01_Introduction_and_Product_Overview/chapter-01-introduction.md` | Draft v0.1 | ~80% — routing matrix specs and some hardware details pending |
| Ch. 2 — System Requirements & Package Contents | `02_System_Requirements_and_Package_Contents/chapter-02-system-requirements.md` | Draft v0.1 | ~60% — RAM/storage requirements and package contents pending |
| Ch. 3 — Installation | `03_Installation/chapter-03-installation.md` | Draft v0.1 | ~85% — hardware-specific firmware update steps pending |
| Ch. 4 — Hardware Description | `04_Hardware_Description/chapter-04-hardware-description.md` | Skeleton | 0% — all content requires hardware diagrams and LED tables from DAD |
| Ch. 5 — Signal Flow & Architecture | `05_Signal_Flow_and_Architecture/chapter-05-signal-flow-and-architecture.md` | Draft v0.1 | ~70% — block diagrams (3 figures) pending |
| Ch. 6 — Getting Started | `06_Getting_Started/chapter-06-getting-started.md` | Skeleton | 10% — walkthrough and screenshots to be drafted |
| Ch. 7 — Operation | `07_Operation/chapter-07-operation.md` | Draft v0.1 | ~75% — screenshots, Dante Conf tab params, PRO\|MON pending |
| Ch. 8 — Advanced Features | `08_Advanced_Features/chapter-08-advanced-features.md` | Skeleton | 10% — topics identified; sections marked by source coverage |
| Ch. 9 — Troubleshooting | `09_Troubleshooting/chapter-09-troubleshooting.md` | Skeleton | 30% — known issues table seeded; framework and error catalogue pending |
| Ch. 10 — Maintenance | `10_Maintenance/chapter-10-maintenance.md` | Partial draft | 40% — firmware update procedure seeded; cleaning/storage pending |
| Appendices A–H | `Appendices/appendices.md` | Skeleton | Structure defined; all content to be compiled from other chapters and DAD |

---

## Chapter-by-Chapter Coverage Map

### FM — Front Matter & Safety Notices

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| Signal word definitions (DANGER/WARNING/CAUTION/NOTICE) | **Full** | S5, S7–S14 (boilerplate) | Done — in draft |
| Safety symbols (IEC 60417 series) | **Full** | S5 | Done — in draft |
| Electrical safety (grounding, power cord, PoE) | **Full** | S5 p.3 | Done — in draft |
| Environmental safety (moisture, ventilation, mechanical) | **Full** | S5 p.3 | Done — in draft |
| Hearing safety | **Full** | S5 p.3 | Done — in draft |
| Service conditions (no user-serviceable parts) | **Full** | S5 | Done — in draft |
| Software and data safety (save before firmware update) | **Full** | S1 p.8 | Done — in draft |
| WEEE disposal | **Full** | S5–S14 (boilerplate) | Done — in draft |
| CE Declaration of Conformity | **None** | — | **Must obtain from DAD** |
| FCC compliance statement | **None** | — | **Must obtain from DAD** |
| ICES-003 (Canada) | **None** | — | **Must obtain from DAD** |
| UKCA (Great Britain) | **None** | — | **Must obtain from DAD** |
| RoHS certificate | **None** | — | **Must obtain from DAD** |

**Status: 65% — all safety text drafted; all regulatory declarations blocked on DAD legal.**

---

### Ch. 1 — Introduction & Product Overview

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| What is DADman? | Good | S1 pp.2–4 | In draft |
| Key capabilities table | Good | S1 p.3 | In draft |
| Software components (DADman + TB3 driver) | Good | S3 p.1 | In draft |
| Communication paths (Ethernet vs. TB3) | Good | S3 p.1 | In draft |
| Version history table | Good | S1 pp.6–9 | In draft — partial; full changelog missing |
| Compatible hardware overview table | Good | S1 p.2 | In draft — routing matrix specs pending |
| Hardware families and cloning compatibility | Good | S1 p.15 | In draft |
| How to use this manual | **None** | — | In draft (written from scratch) |
| About DAD / NTP Technology | **None** | — | In draft (written from scratch) |
| Routing matrix capacities per product | **None** | — | **Must obtain from DAD engineering** |

**Status: 80% — core content in draft; routing matrix specs blocking Appendix A and this chapter.**

---

### Ch. 2 — System Requirements & Package Contents

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| macOS supported versions | Good | S1 pp.6–9, S3 p.1 | In draft |
| Windows supported versions | Good | S3 p.1 | In draft |
| TB3 driver OS requirements | **Full** | S3 p.1 | In draft |
| Compatible hardware for TB3 driver | **Full** | S3 p.1 | In draft |
| Thunderbolt cable specification | **Full** | S3 p.1 | In draft |
| Minimum RAM | **None** | — | **Must obtain from DAD engineering** |
| Minimum storage | **None** | — | **Must obtain from DAD engineering** |
| Package contents per product | **None** | — | **Must obtain from DAD engineering** |

**Status: 55% — OS and driver requirements complete; hardware specs and package contents blocked on DAD.**

---

### Ch. 3 — Installation

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| Where to download DADman | Good | S1 pp.5–6 | In draft |
| macOS TB3 driver installation | **Full** | S3 pp.1–3 | In draft |
| macOS Security & Privacy approval | **Full** | S3 pp.2–3 + S4 | In draft |
| Windows TB3 driver installation | **Full** | S3 pp.5–7 | In draft |
| Windows ASIO configuration | **Full** | S3 pp.6–7 | In draft |
| macOS Sequoia Thunderbolt workaround | **Full** | S4 | In draft |
| Network / IP configuration | Good | S5 p.12 | In draft — generalised from AX32-specific |
| Installation verification | Good | S3 | In draft |
| Hardware-specific firmware update steps | Partial | S1 pp.7–8 | → Ch. 10; model-specific steps **pending from DAD** |

**Status: 85% — installation well documented; firmware update cross-reference to Ch. 10 in place.**

---

### Ch. 4 — Hardware Description

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| AX Center front/rear panel diagrams | **None** | — | **Must obtain from DAD engineering** |
| Core 256 front/rear panel diagrams | **None** | — | **Must obtain from DAD engineering** |
| AX64 front/rear panel diagrams | **None** | — | **Must obtain from DAD engineering** |
| MOM front/rear panel diagrams | **None** | — | **Must obtain from DAD engineering** |
| DAD Junior front/rear panel diagrams | **None** | — | **Must obtain from DAD engineering** |
| LED state tables (all models) | **None** | — | **Must obtain from DAD engineering** |
| Connector identification | Partial | S7–S10 (install guides) | Install guides have rear panel photos but no annotated diagrams |

**Status: 0% drafted — this chapter is entirely blocked on DAD-supplied hardware diagrams and LED tables.**

---

### Ch. 5 — Signal Flow & Architecture

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| Ethernet-based control architecture | Good | S1 p.4 | In draft |
| Dual communication paths (Ethernet + TB3) | Good | S3 p.1 | In draft |
| Device List concept | Good | S1 p.4 | In draft |
| Dedicated network recommendation | Good | S1 pp.4–5 | In draft |
| IP addressing | Partial | S5 p.12 | In draft — generalised |
| Clocking and sample rate overview | Good | S3 pp.4, 7 | In draft |
| Sample rate vs. channel capacity table | Good | S3 pp.4, 7 | In draft |
| System topology diagram | **None** | — | **Must create** |
| TB3 vs. Ethernet dual-path diagram | **None** | — | **Must create** |
| Clock hierarchy diagram | **None** | — | **Must create** |
| DADman TCP/UDP port numbers | **None** | — | **Must obtain from DAD engineering** |

**Status: 70% — conceptual content drafted; three diagrams and port numbers outstanding.**

---

### Ch. 6 — Getting Started

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| DADman UI orientation (tabs overview) | Good | S1 p.14 | → Ch. 7 draft; cross-ref in place |
| 10-step first-use walkthrough | **None** | — | **Must write from scratch + screenshots** |
| Quick Start guide | **None** | — | **Must write from scratch** |
| First-launch experience | **None** | — | **Must write from scratch** |

**Status: 10% — structure defined; all content requires screenshots and step-by-step walkthrough drafting.**

---

### Ch. 7 — Operation

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| Session management — .dms and .dmprof files | Good | S1 pp.14–15 | In draft |
| File menu reference | Good | S1 p.14 | In draft |
| Window layout and navigation | Good | S1 p.14 | In draft |
| The five main tabs overview | Good | S1 p.14 | In draft |
| Multi-unit view | Good | S1 p.4 | In draft |
| Device List — columns and context menu | Good | S1 p.8 | In draft |
| AD tab — channel strip controls | Good | S1 p.14, S5 pp.15 | In draft |
| AD tab — gain adjustment | Good | S1 | In draft |
| AD tab — Mic Gain Groups | Good | S1 pp.7–9 | In draft |
| DA tab — channel strip controls | Good | S1 p.14 | In draft |
| DA tab — output level range (+18/+24 dBu) | Good | S1 pp.22–23 | In draft |
| Con tab — crosspoint matrix layout | Good | S1 p.16 | In draft |
| Con tab — making/removing connections | Good | S1 p.16 | In draft |
| Con tab — connection status indicators | Good | S1 | In draft |
| Conf tab — synchronisation parameters | Partial | S1 p.14 | In draft — AX Center/Core 256 Dante params pending |
| Conf tab — MADI port configuration | Good | S11 pp.3–6 | In draft |
| Conf tab — Dante configuration | **None** | — | **Must obtain from DAD engineering** |
| Mon tab — controls | Good | S1 pp.14–15 | In draft |
| Mon tab — reference level procedure | Good | S1 pp.23–24 | In draft |
| Control\|Pack strip | **Full** | S2 | In draft |
| Keyboard shortcuts | Good | S1 | In draft |
| PRO\|MON controls in Mon tab | **None** | — | **Must obtain from DAD engineering** |
| SPQ card tab | Partial | S1 pp.21–22 | **Must obtain from DAD engineering** |
| Screenshots (all sections) | **None** | — | **Must capture from live DADman session** |

**Status: 75% — operational reference substantially complete; screenshots, Dante Conf params, PRO\|MON outstanding.**

---

### Ch. 8 — Advanced Features

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| Monitor profiles — sources, outputs, fold-downs | Good | S1 pp.17–28 | Ready to draft |
| Multiple speaker sets / reference levels | Good | S1 pp.23–24 | Ready to draft |
| Fold-down and up-match presets | Good | S1 pp.24–26 | Ready to draft |
| Headphone follows control room | Good | S1 pp.26–29 | Ready to draft |
| Control\|Pack — all sections | **Full** | S2 | Ready to draft |
| EuControl / Avid Control integration | Good | S1 pp.23, 31–32 | Ready to draft |
| Cloning settings between units | Good | S1 p.15 | Ready to draft |
| Dante Virtual Soundcard as monitor source | Good | S1 pp.19–21 | Ready to draft |
| Autoboot / startup script (macOS) | Good | S1 pp.29–30 | Ready to draft |
| Dolby Atmos monitoring | Partial | S1 pp.16–17 | Needs additional research |
| Bass management | Partial | S1 p.35 | Needs additional research |
| MIDI control (Pro Tools PRE emulation) | Partial | S1 p.4 | Needs additional research |
| SPQ card setup | Partial | S1 pp.21–22 | Needs additional research |
| PRO\|MON monitor system | **None** | — | **Must obtain from DAD engineering** |
| Cue\|Mix zero-latency mixer | **None** | — | **Must obtain from DAD engineering** |
| LTC over Dante | Partial | S1 p.35 | **Must obtain from DAD engineering** |

**Status: 65% source coverage — well-covered topics ready to draft; PRO\|MON and Cue\|Mix blocked on DAD.**

---

### Ch. 9 — Troubleshooting

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| macOS Sequoia Thunderbolt connection issue | **Full** | S4 (Jan 2026) | In draft |
| DADman not connecting on Sequoia (network) | Good | S1 p.6 | In draft |
| ASIO driver diagnostics (Windows) | Good | S3 p.7 | In draft |
| Blank monitoring page in Avid Control | Good | S1 p.23 | In draft |
| Distorted audio / output level clipping | Good | S1 pp.22–23 | In draft |
| Headphone not following control room | Good | S1 pp.26–29 | In draft |
| Systematic troubleshooting framework | **None** | — | **Must write from scratch** |
| Error message reference | **None** | — | **Must research / request from DAD** |
| Network configuration troubleshooting | Partial | S1 pp.4–5 | Needs expansion |
| Firmware update recovery | Good | S1 p.8 | In draft |

**Status: 45% — specific known issues documented; systematic framework and error catalogue missing.**

---

### Ch. 10 — Maintenance

| Topic | Coverage | Source | Gap? |
|-------|----------|--------|------|
| Updating DADman software | Good | S1 pp.7–8 | In draft |
| Updating hardware firmware (save-first warning) | Good | S1 p.8 | In draft |
| Hardware-specific firmware update steps | **None** | — | **Must obtain from DAD engineering** |
| Cleaning and physical maintenance | **None** | — | **Must obtain from DAD engineering** |
| Storage conditions | **None** | — | **Must obtain from DAD engineering** |
| EOL disposal | Handled in FM.8 | S5–S14 | Cross-ref in place |

**Status: 40% — update procedures seeded; physical maintenance requires DAD input.**

---

### Appendices A–H

| Appendix | Topic | Status |
|----------|-------|--------|
| A | Technical Specifications | **Skeleton — must obtain from DAD engineering** |
| B | Connector Pinouts | **Skeleton — must obtain from DAD engineering** |
| C | Supported Audio Formats | Partial — sample rate/channel table in Ch. 5; needs expansion |
| D | Keyboard Shortcuts | Cross-ref to Ch. 7, Section 7.10.3 — ready |
| E | Changelog | **Skeleton — compile from Release_Notes/ folder** |
| F | Compliance Declarations | Cross-ref to FM.9 — blocked on DAD legal |
| G | Glossary | **Skeleton — must write from scratch** |
| H | Index | **To generate from final compiled document** |

---

## Overall Gap Summary

### Critical gaps — must obtain from DAD engineering or legal

| Item | Chapter(s) | Priority |
|------|-----------|----------|
| CE / FCC / RoHS / UKCA compliance declarations | FM, App F | P1 — blocks publication |
| Hardware diagrams (front/rear panel, annotated) | Ch. 4 | P1 — blocks Ch. 4 entirely |
| LED state tables | Ch. 4 | P1 — blocks Ch. 4 entirely |
| Routing matrix capacities per product | Ch. 1, App A | P1 — key specification |
| Dante Conf tab parameters (AX Center / Core 256) | Ch. 7 | P1 — significant operational gap |
| DADman TCP/UDP port numbers | Ch. 5, Ch. 9 | P2 — needed for network troubleshooting |
| PRO\|MON documentation | Ch. 7, Ch. 8 | P1 — feature gap |
| Cue\|Mix documentation | Ch. 8 | P1 — feature gap |
| Minimum RAM / storage requirements | Ch. 2 | P2 |
| Package contents per product | Ch. 2 | P2 |
| Hardware-specific firmware update steps | Ch. 10 | P2 |
| Error message catalogue | Ch. 9 | P2 |
| SPQ card documentation | Ch. 7, Ch. 8 | P2 |

### Screenshots required (blocks publication)

All screenshots must be captured from a live DADman session or provided by DAD. Required for:
- Ch. 6 (Getting Started — all steps)
- Ch. 7 (all major tabs: AD, DA, Con, Conf, Mon, Control\|Pack, Device List)

### Content ready to draft now (high source confidence)

- Ch. 8 Sections: Monitor profiles, speaker sets, fold-downs, headphone follows, Control\|Pack, EuCon, cloning, DVS, autoboot
- Ch. 9: Systematic troubleshooting framework (write from scratch using structured approach)
- App E: Changelog (compile from Release_Notes/ folder)
- App G: Glossary (write from scratch)

---

## Recommended Drafting Priority

| Priority | Chapter/Section | Blocker |
|----------|----------------|---------|
| 1 | Ch. 8 — Advanced Features (sections with full source) | None — ready now |
| 2 | Ch. 9 — Troubleshooting framework | None — write from scratch |
| 3 | App G — Glossary | None — write from scratch |
| 4 | App E — Changelog | None — compile from Release_Notes/ |
| 5 | Ch. 6 — Getting Started | Needs screenshots |
| 6 | Ch. 4 — Hardware Description | Blocked on DAD diagrams |
| 7 | Ch. 2 — Package Contents section | Blocked on DAD |
| 8 | Appendices A, B | Blocked on DAD engineering |

---

*Audit updated June 2026 to reflect project plan v1.0 chapter structure (FM + Ch.1–10 + App A–H). Previous structure (Ch.01–10) superseded. Review before starting each chapter to check if new source material has been added.*
