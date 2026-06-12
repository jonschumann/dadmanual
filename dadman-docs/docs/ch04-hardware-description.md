---
title: "Chapter 4 — Hardware Description"
sidebar_label: "Ch. 4 — Hardware Description"
sidebar_position: 6
slug: /hardware-description
---

# Chapter 4 — Hardware Description

> **Document:** DADman User Manual  
> **Chapter status:** Draft v0.2 — Panel photos and port data integrated; Core 256 rear panel photo and DAD Junior section pending  
> **Last updated:** June 2026

---

## In This Chapter

| Section | Covers | Relevant for |
|---------|--------|-------------|
| 4.1 | AX Center — front and rear panel | AX Center users |
| 4.2 | Core 256 — front and rear panel | Core 256 users |
| 4.3 | AX 64 — front and rear panel | AX 64 users |
| 4.4 | MOM — controls reference | MOM users |
| 4.5 | DAD Junior — front and rear panel | DAD Junior users |
| 4.6 | Penta 720 / 721s — front and rear panel | Penta users |
| 4.7 | LED state reference (all models) | All users |

> **NOTICE — How to use this chapter:** This chapter is a hardware reference. It identifies every physical control and connector on each supported product. For signal routing and configuration procedures, see [Chapter 7 — Operation]. For installation and cabling, see [Chapter 3 — Installation].

---

## 4.1 AX Center

### 4.1.1 Overview

The AX Center is a 1U rack-mount Thunderbolt audio interface in the Thunder\|Core product family. It provides two mic/line/instrument inputs and stereo monitor outputs directly on the front panel, with MADI, ADAT, word clock, analogue expansion slots, and dual Thunderbolt 3 ports on the rear. All routing, gain, monitoring, and configuration is performed via DADman over Ethernet. The AX Center also hosts the MOM (Monitor Operating Module) when used as a desktop monitor controller system — the MOM connects to the AX Center via USB-C.

### 4.1.2 Panel Overview

![AX Center front panel](/img/panel-ax-center-front.png)
*Figure 4.1 — AX Center front panel. Numbered callouts correspond to Section 4.1.3.*

![AX Center rear panel](/img/panel-ax-center-rear.png)
*Figure 4.2 — AX Center rear panel. Numbered callouts correspond to Section 4.1.4.*

### 4.1.3 Front Panel Controls

| Ref | Label | Type | Function |
|-----|-------|------|----------|
| — | **DAD** | Illuminated logo | Blue illumination; indicates power-on |
| 1 | **Power** | Illuminated push-button | Initiates controlled power-on/shutdown sequence. Hold for 5 s to force power off. |
| — | **Int.** | LED indicator | Lit when the unit is locked to its own internal clock reference |
| — | **Ext.** | LED indicator (green) | Lit when the unit is locked to an external clock source (word clock, MADI, ADAT, or Dante) |
| — | **Err.** | LED indicator (red) | Lit when a clock error, sync loss, or internal fault is detected. See [Section 4.7 — LED State Reference] and [Chapter 9 — Troubleshooting]. |
| 2 | **Mic/Inst 1** | Combo XLR/TRS (locking) | Mic/line/instrument input, channel 1. Accepts XLR (balanced mic/line) or 6.35 mm TRS/TS (line/instrument). |
| — | **P48** | LED indicator | Lit when phantom power (+48 V) is active on this input channel |
| — | **Mic** | LED indicator | Lit when the input is configured as a microphone input |
| — | **Inst** | LED indicator | Lit when the input is configured as a high-impedance instrument input |
| 3 | **Mic/Inst 2** | Combo XLR/TRS (locking) | Mic/line/instrument input, channel 2. Same specification as channel 1. |
| 4 | **HP 1** | 6.35 mm TRS jack | Headphone output 1. Level controlled via DADman or MOM. |
| 5 | **HP 2** | 6.35 mm TRS jack | Headphone output 2. Level controlled via DADman or MOM. |

### 4.1.4 Rear Panel

| Ref | Label | Connector | Function |
|-----|-------|-----------|----------|
| 1 | **Power** | IEC C14 inlet | Mains power input. 100–240 V AC, 50/60 Hz, auto-ranging internal PSU. Connect a standard IEC C13 power cable. |
| 2 | **EXPANSION** (upper pair) | 2× SFP bay | DADLink / MADI optical expansion. Accepts SFP modules for connection to other DAD units via active optical fibre (DADLink cable) or for optical MADI I/O. |
| 3 | **NET 1 / NET 2** | 2× RJ45 + SFP bay | Ethernet control network (NET 1, NET 2: 100/1000BASE-T). The SFP bay below NET 1/NET 2 accepts an SFP module for optional fibre network connection. Connect NET 1 or NET 2 to your DADman control network — only one port is required for normal operation. |
| 4 | **THUNDERBOLT 1** (upper) | USB-C (Thunderbolt 3) | Primary Thunderbolt 3 connection to the computer. Connect this port to the computer's Thunderbolt 3 or USB4 port using a 20 Gbps-rated cable. Carries up to 256 bi-directional audio channels at standard sample rates. |
| 5 | **THUNDERBOLT 2** (lower) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough. Connect to the next Thunderbolt device in the chain. |
| 6 | **WC/VBB IN** | BNC, 75 Ω | Word clock or Video Black Burst input. Accepts word clock (1×, 256×, or video sync formats). Engage the 75 Ω termination on the last device in a word clock chain. |
| 7 | **WC OUT** | BNC, 75 Ω | Word clock output. Outputs the unit's current sync reference as a word clock signal. |
| 8 | **MADI IN** | BNC, 75 Ω | MADI input (coaxial). Accepts AES10 MADI at 56- or 64-channel frame format. At 96 kHz, maximum channel count is 32. |
| 9 | **MADI OUT** | BNC, 75 Ω | MADI output (coaxial). Transmits MADI at the configured frame format and sample rate. |
| 10 | **ADAT OUT 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe outputs. Up to 8 channels per port at 44.1/48 kHz; 4 channels per port at 88.2/96 kHz (S/MUX). |
| 11 | **ADAT IN 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe inputs. Same channel count as ADAT outputs. |
| 12 | **MONITOR 1** | 2× TRS 6.35 mm (L/R) | Balanced stereo monitor output 1. Level controlled via DADman or MOM. |
| 13 | **MONITOR 2** | 2× TRS 6.35 mm (L/R) | Balanced stereo monitor output 2. Level controlled via DADman or MOM. |
| 14 | **SLOT 1 / SLOT 2** | 2× expansion slot (DB25) | Analogue I/O expansion slots. Each slot accepts a DAD expansion card providing 8 channels of A/D, D/A, or digital I/O. Card type and channel assignment is configured in DADman. |

> **NOTICE — Thunderbolt cable requirement:** The Thunderbolt 3 connection requires a cable rated to 20 Gbps or higher. Standard USB-C cables are not rated for Thunderbolt 3 speeds and will not work reliably. Use the cable supplied with the unit or a certified Thunderbolt 3 / Thunderbolt 4 cable.

> **NOTICE — Word clock termination:** The WC/VBB IN port must be terminated (75 Ω) when the AX Center is the last device in a word clock chain. Failure to terminate can cause reflections that destabilise the clock reference for all connected devices. The termination switch is located adjacent to the BNC connector.

---

## 4.2 Core 256

### 4.2.1 Overview

The Core 256 is a half-rack Thunderbolt audio interface in the Thunder\|Core product family. It shares the same rear-panel connector complement as the AX Center but omits the front-panel mic/instrument inputs and headphone outputs. It is designed for installations where a compact, rackmountable Thunderbolt audio core is required without front-panel I/O. The Core 256 is powered by an external 12 V DC supply.

> **NOTICE — Racking the Core 256:** The Core 256 is a half-rack-width unit. A dedicated 1U rack shelf or the Core 256 Racking Hardware accessory is required to mount it in a standard 19-inch rack. See [Chapter 2 — System Requirements] for racking options.

### 4.2.2 Panel Overview

![Core 256 front panel](/img/panel-core256-front.png)
*Figure 4.3 — Core 256 front panel. Numbered callouts correspond to Section 4.2.3.*

![Core 256 rear panel](/img/panel-core256-rear.png)
*Figure 4.4 — Core 256 rear panel. Numbered callouts correspond to Section 4.2.4.*

### 4.2.3 Front Panel Controls

| Ref | Label | Type | Function |
|-----|-------|------|----------|
| — | **DAD** | Illuminated logo | Blue illumination; indicates power-on |
| 1 | **Power** | Illuminated push-button | Initiates controlled power-on/shutdown sequence |
| — | **Int.** | LED indicator | Lit when locked to internal clock reference |
| — | **Ext.** | LED indicator (green) | Lit when locked to external clock source |
| — | **Err.** | LED indicator (red) | Lit on clock error or internal fault |

### 4.2.4 Rear Panel

The Core 256 rear panel carries the same connector set as the AX Center (see [Section 4.1.3]), with the following differences:

| Difference | AX Center | Core 256 |
|------------|-----------|----------|
| Power | IEC C14 mains inlet (100–240 V AC) | 12 V DC barrel connector (external PSU required) |
| Monitor outputs | 2× stereo TRS (MONITOR 1, MONITOR 2) | Not present |
| Expansion slots | 2× (SLOT 1, SLOT 2) | 2× (SLOT 1, SLOT 2) — same |

All other rear-panel connectors (EXPANSION / SFP bays, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) are identical to the AX Center. Refer to the AX Center rear panel connector table in [Section 4.1.3] for function and specification of those connectors.

---

## 4.3 AX 64

### 4.3.1 Overview

The AX 64 is a 2U rack-mount Thunderbolt audio interface with up to eight expansion card slots, providing up to 64 channels of analogue I/O in a single unit (dependent on expansion cards fitted). Like the AX Center, all control is via DADman over Ethernet. The AX 64 carries the same core connectivity as the AX Center (MADI, ADAT, word clock, Thunderbolt 3, dual Ethernet) but adds up to eight DB25-format analogue expansion card slots in place of the AX Center's fixed front-panel I/O.

### 4.3.2 Panel Overview

![AX 64 front panel](/img/panel-ax64-front.png)
*Figure 4.5 — AX 64 front panel. Numbered callouts correspond to Section 4.3.3.*

![AX 64 rear panel](/img/panel-ax64-rear.png)
*Figure 4.6 — AX 64 rear panel. Numbered callouts correspond to Section 4.3.4.*

### 4.3.3 Front Panel Controls

| Ref | Label | Type | Function |
|-----|-------|------|----------|
| — | **DAD** | Illuminated logo | Blue illumination; indicates power-on |
| 1 | **Power** | Illuminated push-button | Initiates controlled power-on/shutdown sequence |
| — | **Int.** | LED indicator | Lit when locked to internal clock reference |
| — | **Ext.** | LED indicator (green) | Lit when locked to external clock source |
| — | **Err.** | LED indicator (red) | Lit on clock error or internal fault |

> **NOTICE:** The AX 64 front panel provides status indicators only. All audio I/O connections are made on the rear panel (Figure 4.6).

### 4.3.4 Rear Panel

| Ref | Label | Connector | Function |
|-----|-------|-----------|----------|
| 1 | **Power** | IEC C14 inlet | Mains power input. 100–240 V AC, 50/60 Hz, auto-ranging. |
| 1a | *(Optional)* | IEC C14 inlet | Redundant power supply inlet (factory-fitted option). When the optional redundant PSU is installed, a second IEC C14 inlet appears adjacent to the primary. |
| 2, 3 | **EXPANSION** | 2× SFP bay | DADLink / MADI optical expansion, identical to AX Center. Accepts SFP modules for DADLink or optical MADI I/O. |
| 4, 5 | **NET 1 / NET 2** | 2× RJ45 + SFP bay | Ethernet control network. Identical to AX Center. Connect NET 1 or NET 2 to the DADman control network. |
| 6 | **THUNDERBOLT 1** (upper) | USB-C (Thunderbolt 3) | Primary Thunderbolt 3 connection to the computer. |
| 7 | **THUNDERBOLT 2** (lower) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough. |
| 8 | **WC IN** | BNC, 75 Ω | Word clock input. |
| 9 | **WC OUT** | BNC, 75 Ω | Word clock output. |
| 10 | **MADI IN** | BNC, 75 Ω | MADI coaxial input. AES10 compliant. |
| 11 | **MADI OUT** | BNC, 75 Ω | MADI coaxial output. |
| 12, 14 | **ADAT OUT 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe outputs. |
| 13, 15 | **ADAT IN 1 / 2** | 2× TOSLINK (optical) | ADAT Lightpipe inputs. |
| 16–23 | **Slot 1 – Slot 8** | Up to 8× DB25 | Analogue expansion card slots. Each slot accepts one 8-channel DAD expansion card (A/D, D/A, or digital I/O). Slot numbering runs right to left as viewed from the rear (Slot 1 is rightmost). Card type and routing is configured in DADman. |

> **NOTICE — Expansion card slots:** The AX 64 ships with the number of expansion cards specified at time of order. Unpopulated slots are covered by a blanking plate. Do not remove blanking plates from empty slots — they are required for correct airflow. Expansion cards must only be installed or removed with the unit powered off.

> **NOTICE — Slot numbering convention:** On the physical rear panel, slot numbers are silkscreened above each slot and run from right (Slot 1) to left (Slot 8) as viewed from the rear of the unit. In DADman, slots are labelled to match this physical numbering. Verify slot assignments in DADman when first connecting a unit with expansion cards.

---

## 4.4 MOM — Monitor Operating Module

### 4.4.1 Overview

The MOM (Monitor Operating Module) is a desktop monitor controller that connects to an AX Center or AX 64 via USB-C. It provides physical control over monitor speaker selection, source selection, master level, dim, cut, talkback, and reference level without requiring interaction with the DADman software window. The MOM communicates with the host AX Center or AX 64 over USB and contains no audio circuitry of its own — it is a control surface only. Audio signals are not routed through the MOM.

> **NOTICE:** The MOM connects to the computer running DADman via the USB-C port on the rear of the AX Center or AX 64. It does not connect directly to the computer's USB port. DADman must be running for the MOM to function.

### 4.4.2 Controls Reference

![MOM control face](/img/panel-mom.png)
*Figure 4.7 — MOM control face. Numbered callouts correspond to the reference table below.*

| Ref | Label | Type | Function |
|-----|-------|------|----------|
| 1 | **Spkr. 1** | Illuminated push-button | Selects speaker output set 1 (e.g., main monitors). Corresponds to a speaker output set configured in the active Monitor Profile in DADman. |
| 2 | **Spkr. 2** | Illuminated push-button | Selects speaker output set 2 (e.g., near-field monitors). |
| 3 | **Spkr. 3** | Illuminated push-button | Selects speaker output set 3 (e.g., translation speaker or Atmos bed). |
| 4 | **Src. A** | Illuminated push-button | Selects monitoring source A as defined in the active Monitor Profile. |
| 5 | **Src. B** | Illuminated push-button | Selects monitoring source B. |
| 6 | **Src. C** | Illuminated push-button | Selects monitoring source C. |
| 7 | **Layer** | Illuminated push-button | Switches the MOM between control layers. When multiple layers are configured in DADman, pressing Layer cycles through them, reassigning the Spkr. and Src. buttons to different speaker sets and sources. |
| — | **Status LEDs 1–4** | LED indicators | Indicate the status of the four active monitoring layers or presets. Illuminated when the corresponding layer is active. |
| — | **Stat.** | LED indicator (green) | Indicates MOM is connected to the AX Center / AX 64 and communicating correctly. Flashes during initialisation. Off when disconnected. |
| 8 | **TB** | Push-button | Talkback. Routes the talkback microphone (configured in DADman) into the talent feeds while held. |
| 9 | **Ref** | Push-button | Reference level. Switches the monitor output to the calibrated reference level defined in the active Monitor Profile. Press again to return to the previous level. |
| 10 | **Cut** | Illuminated push-button | Cuts (mutes) the monitor output. Illuminates red when active. |
| 11 | **Dim** | Illuminated push-button | Attenuates the monitor output by the Dim amount configured in the active Monitor Profile (typically −20 dB). Illuminates amber when active. |
| 12 | **Level** | Rotary encoder with LED ring | Master monitor level control. Turn to adjust the output level. The LED ring indicates the current level position relative to the reference level (0 = Ref). Range: approximately −40 dB to +6 dB relative to reference. |

> **NOTICE — MOM and Monitor Profiles:** The functions of the Spkr., Src., and Layer buttons are determined by the Monitor Profile loaded in DADman. A MOM without an active Monitor Profile configured will have non-functional Spkr. and Src. buttons. Configure Monitor Profiles before using the MOM in a session. See [Chapter 8 — Advanced Features, Section 8.1 — Monitor Profiles].

---

## 4.5 DAD Junior

### 4.5.1 Overview

*[Placeholder: DAD Junior overview — pending product release and engineering documentation.]*

### 4.5.2 Front Panel

*[Placeholder: annotated front panel diagram — DAD Junior]*

### 4.5.3 Rear Panel

*[Placeholder: annotated rear panel diagram — DAD Junior]*

---

## 4.6 Penta 720 / 721s

### 4.6.1 Overview

The Penta 720 and Penta 721s are modular audio interface and signal conversion platforms from NTP Technology. Unlike the Thunder\|Core products (AX Center, AX 64, Core 256), Penta units connect to the computer over Ethernet only — there is no Thunderbolt connection. DADman communicates with Penta units over the control network for routing, format conversion, and configuration. Penta units are typically used for high-channel-count AES/EBU and MADI I/O, format conversion, and network audio distribution in broadcast and post-production environments.

The Penta 720 is a 2U rack-mount chassis that accepts expansion cards in its internal slots. The Penta 721s is a slimmer 1U variant. The rear-panel connector complement depends on the expansion cards fitted; the layout shown in Section 4.6.3 reflects a typical configuration with a Dante/AES67 I/O card in Slot 1.

### 4.6.2 Panel Overview

![Penta 720 front panel](/img/panel-penta720.png)
*Figure 4.8 — Penta 720 front panel. Numbered callouts correspond to the reference table in Section 4.6.3.*

![Penta 721s front panel](/img/panel-penta721s-front.png)
*Figure 4.9 — Penta 721s front panel.*

![Penta 721s rear panel](/img/panel-penta721s-rear.png)
*Figure 4.10 — Penta 721s rear panel. Numbered callouts correspond to the reference table in Section 4.6.4.*

| Ref | Label | Type | Function |
|-----|-------|------|----------|
| — | **Ready** | LED indicator (green) | Unit has completed boot sequence and is ready for operation |
| — | **Error** | LED indicator (red) | An internal fault or configuration error has been detected |
| — | **PSU OK** | LED indicator (green) | Primary power supply is operating correctly. On units with redundant PSU, a second PSU OK indicator confirms the backup supply status. |

### 4.6.4 Rear Panel

| Ref | Label | Connector | Function |
|-----|-------|-----------|----------|
| 1 | **Power (primary)** | IEC C14 inlet | Mains power input. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC. |
| 2 | **Power (backup)** | IEC C14 inlet | Redundant mains power input (where fitted). Provides hot-swap PSU redundancy. |
| 3 | **AES/EBU I/O 1–4** | DB25 (Tascam pinout) | AES/EBU digital audio I/O, channels 1–4 (4 stereo pairs = 8 channels). |
| 4 | **AES/EBU I/O 5–8** | DB25 (Tascam pinout) | AES/EBU digital audio I/O, channels 5–8 (4 stereo pairs = 8 channels). |
| 5 | **MADI IN** | BNC, 75 Ω | MADI coaxial input. AES10 compliant. |
| 6 | **MADI OUT** | BNC, 75 Ω | MADI coaxial output. |
| 7 | **Optical I/O** | TOSLINK (optical) | Optical MADI or ADAT I/O (card-dependent). |
| 8 | **WC/VBB IN** | BNC, 75 Ω | Word clock or Video Black Burst input. |
| 9 | **WC OUT** | BNC, 75 Ω | Word clock output. |
| 10 | **AES11 IN** | XLR (female) | AES11 digital audio reference signal input. Used to synchronise the unit to an AES11 reference source. |
| 11 | **NET 1** | RJ45 (1000BASE-T) | Ethernet control and/or Dante audio network, port 1. |
| 12 | **NET 2** | RJ45 (1000BASE-T) | Ethernet control and/or Dante audio network, port 2. |
| 13 | **SLOT 1** (Dante/AES67 I/O) | 2× SFP | Expansion card slot 1. Shown fitted with a Dante/AES67 I/O card providing two SFP ports for optical or copper Dante network connections. Slot content varies by configuration. |

---

## 4.7 LED State Reference

The following table covers the front-panel LED indicators common to all Thunder\|Core rack units (AX Center, Core 256, AX 64). Penta units use a separate set of indicators covered in the Penta section above.

### 4.7.1 Clock Reference LEDs — Thunder|Core Units

| Int. | Ext. | Err. | Meaning |
|------|------|------|---------|
| ● (lit) | ○ (off) | ○ (off) | Unit is locked to its own internal oscillator. No external reference is connected or selected. Normal state for a clock master. |
| ○ (off) | ● (lit, green) | ○ (off) | Unit is locked to the selected external reference (word clock, MADI embed, ADAT embed, or Dante PTP). Normal state for a clock slave. |
| ● (lit) | ● (lit) | ○ (off) | Unit is in the process of locking to an external reference. The internal oscillator is running while lock is acquired. Transient state — typically resolves within a few seconds. |
| ○ (off) | ○ (off) | ● (lit, red) | **Clock error.** The unit cannot lock to the selected external reference. Check that the reference source is present, at the correct sample rate, and connected to the correct input. See [Chapter 9 — Troubleshooting, Section 9.3]. |
| ● (lit) | ○ (off) | ● (lit, red) | **Internal fault.** The unit has detected an internal error unrelated to external clocking. Note the front-panel state and power-cycle the unit. If the error persists, contact DAD support. |
| Slow flash | — | — | Unit is performing a firmware update. Do not power off the unit during a firmware update. |

### 4.7.2 Power Button

| State | Meaning |
|-------|---------|
| Off | Unit is powered off |
| Lit (steady) | Unit is powered on and operating normally |
| Slow pulse | Unit is in standby or performing a shutdown sequence |

### 4.7.3 MOM Status LEDs

| Stat. | Meaning |
|-------|---------|
| ● (lit, green, steady) | MOM is connected and communicating with the host AX Center / AX 64 |
| Slow flash (green) | MOM is initialising or waiting for DADman to respond |
| ○ (off) | MOM is not connected, or the host unit is powered off |

*[Placeholder: per-channel signal/OL/carrier LED tables — applicable to AX 64 expansion cards that include front-panel metering. Pending engineering documentation.]*

---

## Cross-References

- **Chapter 1 — Introduction:** Compatible hardware list; hardware families and cloning compatibility
- **Chapter 2 — System Requirements:** Package contents per model; supported OS versions
- **Chapter 3 — Installation:** Thunderbolt driver installation; network configuration
- **Chapter 5 — Signal Flow & Architecture:** How each connector type fits into the signal and clock path
- **Chapter 7 — Operation:** Configuring inputs, outputs, routing, and monitor profiles in DADman
- **Chapter 8 — Advanced Features:** Monitor Profiles, MOM configuration, Control\|Pack
- **Appendix A — Specifications:** Full electrical and mechanical specifications per product
- **Appendix B — Connector Pinouts:** Pin assignments for DB25, XLR, BNC, and other connector types

---
