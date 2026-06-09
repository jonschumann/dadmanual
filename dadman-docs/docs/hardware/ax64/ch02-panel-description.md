---
title: "Chapter 2 — Panel Description"
sidebar_label: "Ch. 2 — Panel Description"
sidebar_position: 3
---
# Chapter 2 — Panel Description

> **Product:** Digital Audio Denmark AX 64

> **How to use this chapter:** This chapter identifies every control and connector on the AX 64. For signal levels and connection procedures, see [Ch. 4 — Signal Connections](ch04-connections). For LED state meanings, see [Section 2.3](#23-led-state-reference).

---

## 2.1 Front Panel

![AX 64 front panel](/img/panel-ax64-front.png)
*Figure 2.1 — AX 64 front panel. Numbered callouts correspond to the table below.*

> **NOTICE:** The AX 64 front panel provides status indicators only. All audio I/O connections are made on the rear panel (Figure 2.2).

| Ref | Label | Type | Function | Dot |
|-----|-------|------|----------|-----|
| 1 | **DAD** | Illuminated logo | Blue illumination; indicates power-on | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2 | **Power** | Illuminated push-button | Initiates controlled power-on/shutdown sequence | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3 | **Int.** | LED indicator | Lit when locked to internal clock reference | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4 | **Ext.** | LED indicator (green) | Lit when locked to external clock source | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5 | **Err.** | LED indicator (red) | Lit on clock error or internal fault. See [Section 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 Rear Panel

![AX 64 rear panel](/img/panel-ax64-rear.png)
*Figure 2.2 — AX 64 rear panel. Numbered callouts correspond to the table below.*

| Ref | Label | Connector | Function | Dot |
|-----|-------|-----------|----------|-----|
| 1 | **Power** | IEC C14 inlet | Mains power input. 100–240 V AC, 50/60 Hz, auto-ranging. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 1a | *(Optional)* | IEC C14 inlet | Redundant power supply inlet (factory-fitted option). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2, 3 | **EXPANSION** | 2× SFP bay | DADLink / MADI optical expansion. Accepts SFP modules for DADLink or optical MADI I/O. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 4, 5 | **NET 1 / NET 2** | 2× RJ45 + SFP bay | Ethernet control network. Connect NET 1 or NET 2 to the DADman control network. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 6 | **THUNDERBOLT 1** (upper) | USB-C (Thunderbolt 3) | Primary Thunderbolt 3 connection to the computer. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 7 | **THUNDERBOLT 2** (lower) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 8 | **WC IN** | BNC, 75 Ω | Word clock input. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 9 | **WC OUT** | BNC, 75 Ω | Word clock output. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 10 | **MADI IN** | BNC, 75 Ω | MADI coaxial input. AES10 compliant. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 11 | **MADI OUT** | BNC, 75 Ω | MADI coaxial output. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 12, 14 | **ADAT OUT 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe outputs. Up to 8 ch at 44.1/48 kHz; 4 ch at 88.2/96 kHz (S/MUX). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 13, 15 | **ADAT IN 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe inputs. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 16–23 | **Slot 1 – Slot 8** | Up to 8× DB25 | Analogue expansion card slots. Each slot accepts one 8-channel DAD expansion card (A/D, D/A, or digital I/O). Slot numbering runs right to left as viewed from the rear (Slot 1 is rightmost). Card type and routing is configured in DADman. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **NOTICE — Expansion card slots:** Unpopulated slots are covered by a blanking plate. Do not remove blanking plates — they are required for correct airflow. Expansion cards must only be installed or removed with the unit powered off.

> **NOTICE — Slot numbering convention:** Slot numbers are silkscreened above each slot and run from right (Slot 1) to left (Slot 8) as viewed from the rear of the unit. Verify slot assignments in DADman when first connecting a unit with expansion cards.

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
