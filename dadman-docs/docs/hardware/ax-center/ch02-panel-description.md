---
title: "Chapter 2 — Panel Description"
sidebar_label: "Ch. 2 — Panel Description"
sidebar_position: 3
---
# Chapter 2 — Panel Description

> **Product:** Digital Audio Denmark AX Center

> **How to use this chapter:** This chapter identifies every control and connector on the AX Center. For signal levels and connection procedures, see [Ch. 4 — Signal Connections](ch04-connections). For LED state meanings, see [Section 2.3](#23-led-state-reference).

---

## 2.1 Front Panel

![AX Center front panel](/img/panel-ax-center-front.png)
*Figure 2.1 — AX Center front panel. Numbered callouts correspond to the table below.*

| Ref | Label | Type | Function | Dot |
|-----|-------|------|----------|-----|
| 1 | **DAD** | Illuminated logo | Blue illumination; indicates power-on | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2 | **Power** | Illuminated push-button | Initiates controlled power-on/shutdown sequence. Hold for 5 s to force power off. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3 | **Int.** | LED indicator | Lit when the unit is locked to its own internal clock reference | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4 | **Ext.** | LED indicator (green) | Lit when the unit is locked to an external clock source (word clock, MADI, ADAT, or Dante) | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5 | **Err.** | LED indicator (red) | Lit when a clock error, sync loss, or internal fault is detected. See [Section 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6 | **Mic/Inst 1** | Combo XLR/TRS (locking) | Mic/line/instrument input, channel 1. Accepts XLR (balanced mic/line) or 6.35 mm TRS/TS (line/instrument). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 7 | **P48** | LED indicator | Lit when phantom power (+48 V) is active on this input channel | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#84CC16'}}></span> |
| 8 | **Mic** | LED indicator | Lit when the input is configured as a microphone input | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D946EF'}}></span> |
| 9 | **Inst** | LED indicator | Lit when the input is configured as a high-impedance instrument input | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F43F5E'}}></span> |
| 10 | **Mic/Inst 2** | Combo XLR/TRS (locking) | Mic/line/instrument input, channel 2. Same specification as channel 1. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11 | **HP 1** | 6.35 mm TRS jack | Headphone output 1. Level controlled via DADman or MOM. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 12 | **HP 2** | 6.35 mm TRS jack | Headphone output 2. Level controlled via DADman or MOM. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |

---

## 2.2 Rear Panel

![AX Center rear panel](/img/panel-ax-center-rear.png)
*Figure 2.2 — AX Center rear panel. Numbered callouts correspond to the table below.*

| Ref | Label | Connector | Function | Dot |
|-----|-------|-----------|----------|-----|
| 1 | **Power** | IEC C14 inlet | Mains power input. 100–240 V AC, 50/60 Hz, auto-ranging internal PSU. Connect a standard IEC C13 power cable. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2 | **EXPANSION** (upper pair) | 2× SFP bay | DADLink / MADI optical expansion. Accepts SFP modules for connection to other DAD units via active optical fibre (DADLink cable) or for optical MADI I/O. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3 | **NET 1 / NET 2** | 2× RJ45 + SFP bay | Ethernet control network (NET 1, NET 2: 100/1000BASE-T). The SFP bay below NET 1/NET 2 accepts an SFP module for optional fibre network connection. Connect NET 1 or NET 2 to your DADman control network — only one port is required for normal operation. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4 | **THUNDERBOLT 1** (upper) | USB-C (Thunderbolt 3) | Primary Thunderbolt 3 connection to the computer. Connect this port to the computer's Thunderbolt 3 or USB4 port using a 20 Gbps-rated cable. Carries up to 256 bi-directional audio channels at standard sample rates. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5 | **THUNDERBOLT 2** (lower) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough. Connect to the next Thunderbolt device in the chain. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6 | **WC/VBB IN** | BNC, 75 Ω | Word clock or Video Black Burst input. Accepts word clock (1×, 256×, or video sync formats). Engage the 75 Ω termination on the last device in a word clock chain. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7 | **WC OUT** | BNC, 75 Ω | Word clock output. Outputs the unit's current sync reference as a word clock signal. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8 | **MADI IN** | BNC, 75 Ω | MADI input (coaxial). Accepts AES10 MADI at 56- or 64-channel frame format. At 96 kHz, maximum channel count is 32. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9 | **MADI OUT** | BNC, 75 Ω | MADI output (coaxial). Transmits MADI at the configured frame format and sample rate. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10 | **ADAT OUT 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe outputs. Up to 8 channels per port at 44.1/48 kHz; 4 channels per port at 88.2/96 kHz (S/MUX). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11 | **ADAT IN 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe inputs. Same channel count as ADAT outputs. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12 | **MONITOR 1** | 2× TRS 6.35 mm (L/R) | Balanced stereo monitor output 1. Level controlled via DADman or MOM. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 13 | **MONITOR 2** | 2× TRS 6.35 mm (L/R) | Balanced stereo monitor output 2. Level controlled via DADman or MOM. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 14 | **SLOT 1 / SLOT 2** | 2× expansion slot (DB25) | Analogue I/O expansion slots. Each slot accepts a DAD expansion card providing 8 channels of A/D, D/A, or digital I/O. Card type and channel assignment is configured in DADman. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **NOTICE — Thunderbolt cable requirement:** The Thunderbolt 3 connection requires a cable rated to 20 Gbps or higher. Standard USB-C cables are not rated for Thunderbolt 3 speeds and will not work reliably. Use the cable supplied with the unit or a certified Thunderbolt 3 / Thunderbolt 4 cable.

> **NOTICE — Word clock termination:** The WC/VBB IN port must be terminated (75 Ω) when the AX Center is the last device in a word clock chain. The termination switch is located adjacent to the BNC connector.

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
