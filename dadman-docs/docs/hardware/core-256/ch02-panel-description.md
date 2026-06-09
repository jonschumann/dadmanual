---
title: "Chapter 2 — Panel Description"
sidebar_label: "Ch. 2 — Panel Description"
sidebar_position: 3
---
# Chapter 2 — Panel Description

> **Product:** Digital Audio Denmark Core 256

> **How to use this chapter:** This chapter identifies every control and connector on the Core 256. For signal levels and connection procedures, see [Ch. 4 — Signal Connections](ch04-connections). For LED state meanings, see [Section 2.3](#23-led-state-reference).

---

## 2.1 Front Panel

![Core 256 front panel](/img/panel-core256-front.png)
*Figure 2.1 — Core 256 front panel.*

> **NOTICE:** The Core 256 front panel provides status indicators only. There are no audio I/O connectors on the front panel.

| Ref | Label | Type | Function | Dot |
|-----|-------|------|----------|-----|
| 1 | **DAD** | Illuminated logo | Blue illumination; indicates power-on | — |
| 2 | **Power** | Illuminated push-button | Initiates controlled power-on/shutdown sequence | — |
| 3 | **Int.** | LED indicator | Lit when locked to internal clock reference | — |
| 4 | **Ext.** | LED indicator (green) | Lit when locked to external clock source | — |
| 5 | **Err.** | LED indicator (red) | Lit on clock error or internal fault. See [Section 2.3](#23-led-state-reference). | — |

---

## 2.2 Rear Panel

![Core 256 rear panel](/img/panel-core256-rear.png)
*Figure 2.2 — Core 256 rear panel. Numbered callouts correspond to the table below.*

The Core 256 rear panel carries the same connector set as the AX Center with the following differences:

| Difference | AX Center | Core 256 |
|------------|-----------|----------|
| Power | IEC C14 mains inlet (100–240 V AC) | 12 V DC barrel connector (external PSU required) |
| Monitor outputs | 2× stereo TRS (MONITOR 1, MONITOR 2) | Not present |
| Expansion slots | 2× (SLOT 1, SLOT 2) | 2× (SLOT 1, SLOT 2) — same |

All other rear-panel connectors (EXPANSION / SFP bays, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) are identical to the AX Center. Refer to [Ch. 4 — AX Center Rear Panel](../ax-center/ch04-connections) for function and specification of those connectors.

| Ref | Label | Connector | Function | Dot |
|-----|-------|-----------|----------|-----|
| 1 | **Power** | 12 V DC barrel | DC power input. Connect the supplied external 12 V power supply. Do not substitute with a third-party supply. | Dark |
| 2 | **EXPANSION** | 2× SFP bay | DADLink / MADI optical expansion. Identical to AX Center. | Cyan |
| 3 | **NET 1 / NET 2** | 2× RJ45 + SFP bay | Ethernet control network (100/1000BASE-T) + optional SFP fibre. Identical to AX Center. | Slate |
| 4 | **THUNDERBOLT 1** (upper) | USB-C (Thunderbolt 3) | Primary Thunderbolt 3 connection to the computer. | Amber |
| 5 | **THUNDERBOLT 2** (lower) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough. | Amber |
| 6 | **WC/VBB IN** | BNC, 75 Ω | Word clock or Video Black Burst input. | Violet |
| 7 | **WC OUT** | BNC, 75 Ω | Word clock output. | Violet |
| 8 | **MADI IN** | BNC, 75 Ω | MADI input (coaxial). AES10 compliant. | Blue |
| 9 | **MADI OUT** | BNC, 75 Ω | MADI output (coaxial). | Blue |
| 10 | **ADAT OUT 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe outputs. Up to 8 ch at 44.1/48 kHz; 4 ch at 88.2/96 kHz (S/MUX). | Teal |
| 11 | **ADAT IN 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe inputs. Same channel count as ADAT outputs. | Teal |
| 12 | **SLOT 1 / SLOT 2** | 2× expansion slot (DB25) | Analogue I/O expansion slots. Each accepts one 8-channel DAD expansion card. | — |

---

## 2.3 LED State Reference

### Clock Reference LEDs

| Int. | Ext. | Err. | Meaning |
|------|------|------|---------|
| ● | ○ | ○ | Locked to internal clock reference — clock master mode |
| ○ | ● | ○ | Locked to external clock reference — clock slave mode |
| ● | ● | ○ | Acquiring lock to external reference (transient) |
| ○ | ○ | ● | **Clock error** — cannot lock to selected reference |
| ● | ○ | ● | **Internal fault** — power-cycle; contact support if persistent |
| Slow flash | — | — | Firmware update in progress — do not power off |

### Power Button States

| State | Meaning |
|-------|---------|
| Off | Unit powered off |
| Steady | Unit powered on, normal operation |
| Slow pulse | Standby or shutdown sequence in progress |

---

## Cross-References

- [Ch. 4 — Signal Connections](ch04-connections) — Signal levels and connection procedures
- [Ch. 6 — Operation](ch06-operation) — Controls and display operation
- [App. A — Connector Pinouts](appa-connector-pinouts) — Pin assignments
