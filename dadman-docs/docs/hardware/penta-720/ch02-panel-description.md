---
title: "Chapter 2 — Panel Description"
sidebar_label: "Ch. 2 — Panel Description"
sidebar_position: 3
---
# Chapter 2 — Panel Description

> **Product:** Digital Audio Denmark Penta 720

> **How to use this chapter:** This chapter identifies every control and connector on the Penta 720. For signal levels and connection procedures, see [Ch. 4 — Signal Connections](ch04-connections). For LED state meanings, see [Section 2.3](#23-led-state-reference).

---

## 2.1 Front Panel

![Penta 720 front panel](/img/panel-penta720.png)
*Figure 2.1 — Penta 720 front panel. Numbered callouts correspond to the reference table below.*

| Ref | Label | Type | Function | Dot |
|-----|-------|------|----------|-----|
| 1 | **Ready** | LED indicator (green) | Unit has completed boot sequence and is ready for operation | Grey |
| 2 | **Error** | LED indicator (red) | An internal fault or configuration error has been detected | Grey |
| 3 | **PSU OK** | LED indicator (green) | Primary power supply is operating correctly. On units with redundant PSU, a second PSU OK indicator confirms backup supply status. | Grey |

---

## 2.2 Rear Panel

> **NOTICE:** The Penta 720 rear panel layout varies depending on the expansion cards fitted. The connector complement shown below reflects a typical configuration. Verify the actual card layout in your unit before making connections.

| Ref | Label | Connector | Function | Dot |
|-----|-------|-----------|----------|-----|
| 1 | **Power (primary)** | IEC C14 inlet | Mains power input. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC. | Dark |
| 2 | **Power (backup)** | IEC C14 inlet | Redundant mains power input (where fitted). Provides hot-swap PSU redundancy. | Dark |
| 3 | **AES/EBU I/O 1–4** | DB25 (Tascam pinout) | AES/EBU digital audio I/O, channels 1–4 (4 stereo pairs = 8 channels). | Orange |
| 4 | **AES/EBU I/O 5–8** | DB25 (Tascam pinout) | AES/EBU digital audio I/O, channels 5–8 (4 stereo pairs = 8 channels). | Orange |
| 5 | **MADI IN** | BNC, 75 Ω | MADI coaxial input. AES10 compliant. | Blue |
| 6 | **MADI OUT** | BNC, 75 Ω | MADI coaxial output. | Blue |
| 7 | **Optical I/O** | TOSLINK (optical) | Optical MADI or ADAT I/O (card-dependent). | Cyan |
| 8 | **WC/VBB IN** | BNC, 75 Ω | Word clock or Video Black Burst input. | Violet |
| 9 | **WC OUT** | BNC, 75 Ω | Word clock output. | Violet |
| 10 | **AES11 IN** | XLR (female) | AES11 digital audio reference signal input. Used to synchronise the unit to an AES11 reference source. | Green |
| 11 | **NET 1** | RJ45 (1000BASE-T) | Ethernet control and/or Dante audio network, port 1. | Slate |
| 12 | **NET 2** | RJ45 (1000BASE-T) | Ethernet control and/or Dante audio network, port 2. | Slate |
| 13 | **SLOT 1** *(typical: Dante/AES67 I/O)* | 2× SFP | Expansion card slot 1. When fitted with a Dante/AES67 I/O card: two SFP ports for optical or copper Dante network connections. Slot content varies by configuration. | Cyan |

---

## 2.3 LED State Reference

### Status LEDs

| LED | Colour | Meaning |
|-----|--------|---------|
| Ready | Green (steady) | Boot sequence complete — unit ready for operation |
| Error | Red (steady) | Internal fault or configuration error detected |
| PSU OK | Green (steady) | Primary power supply operating correctly |
| PSU OK (2nd) | Green (steady) | Redundant PSU present and operating (units with dual PSU only) |

---

## Cross-References

- [Ch. 4 — Signal Connections](ch04-connections) — Signal levels and connection procedures
- [Ch. 6 — Operation](ch06-operation) — Controls and display operation
- [App. A — Connector Pinouts](appa-connector-pinouts) — Pin assignments
