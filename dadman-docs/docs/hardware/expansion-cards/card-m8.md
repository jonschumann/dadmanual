---
title: "CARD-M8 — 8-Channel Analogue AD Mic/Line Input"
sidebar_label: "CARD-M8"
sidebar_position: 4
---

# CARD-M8 — 8-Channel Pristine AD Mic/Line Input Card

> **SKU:** CARD-M8  
> **Source:** Spec Sheet CARD-M8, Issue June 2026

---

## Overview

The CARD-M8 provides eight channels of high-performance analogue-to-digital conversion with switchable microphone and line level input for any compatible DAD chassis. Each channel can be independently set to microphone or line mode. All inputs are balanced, delivered on a single DB25 connector using the standard Tascam pinout.

Conversion uses a dual 5-bit delta-sigma modulator with FPGA-based filtering at 32-bit processing depth. Both microphone and line gain staging are relay-based with no active electronic gain components, providing exceptional noise performance and EIN of −131 dBu (A-weighted) at maximum gain.

48 V phantom power is available per-channel for condenser microphones.

---

## Technical Specifications

### General

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Input channels | 8 | Balanced; switchable mic/line per channel |
| Dynamic range (A-weighted) | > 123 dB | |
| THD+N (A-weighted) | < −117 dB / 0.00014% | At −3 dBFS |
| Frequency response | 10 Hz – 20 kHz, ±0.1 dB | All gain settings |
| Gain accuracy | ±0.1 dB | All gain settings |
| Sample rates (PCM) | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | |
| Sample rates (DSD) | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) | |
| Sample resolution | 5-bit sigma-delta at 5.645 or 6.144 MHz; 24-bit PCM output | |
| Processing word length | 32-bit | FPGA-based filtering |
| Power consumption | 11 W max | |

### Line Input Mode

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Maximum input level | −9 to +30 dBu | Adjustable in 0.1 dB steps |
| Gain steps for 0 dBFS | 9, 12, 15, 18, 21, 24, 27, 30 dBu | Relay-based 3 dB steps; digital inter-step adjustment |
| Input impedance | > 10 kΩ | |
| CMRR | > 120 dB | At 1 kHz |

### Microphone Input Mode

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Phantom power | 48 V | Switchable per channel |
| Input impedance | 3 kΩ | |
| EIN (A-weighted) | −131 dBu | At 0 Ω source (shorted input) |
| Analogue gain range | −3 to +45 dB | Relay-based 3 dB steps |
| Digital gain range | 0 to +39 dB | Additional digital gain |
| Total DADman gain range | −18 to +72 dB | |
| Maximum input level at −18 dB gain | +21 dBu | Before clipping |

### Microphone Gain Table

| DADman Gain (dB) | Analogue Gain (dB) | Digital Gain (dB) | Input Overload (dBu) | Output Noise (dBFS A) | EIN (dBu A) |
|---|---|---|---|---|---|
| −18 | −3 | 0 | +21 | −123.8 | −102.8 |
| −15 | 0 | 0 | +18 | −123.3 | −105.3 |
| −12 | +3 | 0 | +15 | −123.2 | −108.2 |
| −9 | +6 | 0 | +12 | −123.2 | −111.2 |
| −6 | +9 | 0 | +9 | −122.8 | −113.8 |
| −3 | +12 | 0 | +6 | −122.8 | −116.8 |
| 0 | +12 | 0 | +3 | −122.2 | −119.2 |
| +3 | +18 | 0 | 0 | −122.0 | −122.0 |
| +6 | +21 | 0 | −3 | −120.8 | −123.8 |
| +9 | +24 | 0 | −6 | −120.3 | −126.3 |
| +12 | +27 | 0 | −9 | −118.5 | −127.5 |
| +15 | +30 | 0 | −12 | −117.3 | −129.3 |
| +18 | +33 | 0 | −15 | −114.8 | −129.8 |
| +21 | +36 | 0 | −18 | −113.0 | −131.0 |
| +24 | +39 | 0 | −21 | −110.2 | −131.2 |
| +27 | +42 | 0 | −24 | −107.8 | −131.8 |
| +30 | +45 | 0 | −27 | −104.8 | −131.8 |
| +33 | +45 | +3 | −27 | −107.8 | −131.8 |
| +36 | +45 | +6 | −27 | −110.8 | −131.8 |
| +72 | +45 | +39 | −27 | −68.8 | −131.8 |

> **Note:** At digital gain settings above +30 dB DADman gain, the analogue gain is fixed at +45 dB. Increasing digital gain above this point reduces the effective dynamic range but maintains the EIN floor at −131.8 dBu A.

---

## Connections

| Port | Connector | Signal | Notes |
|---|---|---|---|
| Mic / line input | DB25 female | 8 ch balanced | Tascam pinout; mic: 48 V phantom; line: to +30 dBu |

### DB25 Input Pinout (Tascam)

| DB25 Pin | Signal |
|---|---|
| 1 | Ch 1 + |
| 14 | Ch 1 − |
| 2 | Ch 2 + |
| 15 | Ch 2 − |
| 3 | Ch 3 + |
| 16 | Ch 3 − |
| 4 | Ch 4 + |
| 17 | Ch 4 − |
| 5 | Ch 5 + |
| 18 | Ch 5 − |
| 6 | Ch 6 + |
| 19 | Ch 6 − |
| 7 | Ch 7 + |
| 20 | Ch 7 − |
| 8 | Ch 8 + |
| 21 | Ch 8 − |
| 25 | Ground |

---

## Installation

> **WARNING:** Always power down the chassis and disconnect the mains cable before installing or removing expansion cards.

> **CAUTION:** If 48 V phantom power is enabled on any channel, disable it in DADman before connecting or disconnecting microphones or cables to avoid transients that may damage microphone capsules.

1. Power down the chassis and disconnect the mains cable.
2. Remove the blanking panel from the target slot (retain the screw).
3. Slide the CARD-M8 into the slot guides, label side up, until the edge connector seats fully.
4. Secure the front bracket with the retained screw.
5. Reconnect the mains cable and power on the chassis.
6. Open DADman — the card appears as mic/line inputs in the I/O routing view. Set each channel to Mic or Line mode as required.

---

## Compatibility

| Chassis | Compatible |
|---|---|
| AX64 | Yes |
| AX Center | Yes |
| Penta 720 | Yes |
| Penta 721S | Yes |
| AX32 | Yes |
| Core 256 | No — no expansion slots |
| MOM | No — no expansion slots |
