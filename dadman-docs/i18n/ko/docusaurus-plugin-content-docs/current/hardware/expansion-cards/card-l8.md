---
title: "CARD-L8 — 8-Channel Analogue AD Line Input"
sidebar_label: "CARD-L8"
sidebar_position: 3
---

# CARD-L8 — 8-Channel Pristine AD Line Input Card

> **SKU:** CARD-L8  
> **Source:** Spec Sheet CARD-L8, Issue June 2026

---

## Overview

The CARD-L8 provides eight channels of high-performance analogue-to-digital conversion at line level for any compatible DAD chassis. All inputs are balanced, delivered on a single DB25 connector using the standard Tascam pinout.

Conversion uses a dual 5-bit delta-sigma modulator with FPGA-based filtering at 32-bit processing depth. Input gain staging is relay-based with no active electronic components, providing best-in-class noise and linearity across the full gain range.

The card supports all PCM sample rates from 44.1 kHz to DXD (352.8/384 kHz), as well as DSD 64 and DSD 128.

---

## Technical Specifications

| Parameter                                     | Value                                                                                                           | Conditions / Notes                                    |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Input channels                                | 8                                                                                                               | Balanced, line level                                  |
| Dynamic range (A-weighted) | > 123 dB                                                                                                        |                                                       |
| THD+N (A-weighted)         | < −117 dB / 0.00014%                                                   | At −3 dBFS                                            |
| Frequency response                            | 10 Hz – 20 kHz, ±0.1 dB                                                                         | All gain settings                                     |
| Gain accuracy                                 | ±0.1 dB                                                                                         | All gain settings                                     |
| Maximum input level                           | −9 to +30 dBu                                                                                                   | Adjustable in 0.1 dB steps            |
| Gain steps for 0 dBFS                         | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                               | Relay-based 3 dB steps; digital inter-step adjustment |
| Input impedance                               | > 10 kΩ                                                                                                         |                                                       |
| CMRR                                          | > 120 dB                                                                                                        | At 1 kHz                                              |
| Sample rates (PCM)         | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz  |                                                       |
| Sample rates (DSD)         | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) |                                                       |
| Sample resolution                             | 5-bit sigma-delta at 5.645 or 6.144 MHz; 24-bit PCM output                      |                                                       |
| Processing word length                        | 32-bit                                                                                                          | FPGA-based filtering                                  |
| Power consumption                             | 9 W max                                                                                                         |                                                       |

---

## Connections

| Port                | Connector   | Signal                    | Notes                                 |
| ------------------- | ----------- | ------------------------- | ------------------------------------- |
| Analogue line input | DB25 female | 8 ch balanced, line level | Tascam pinout; −9 to +30 dBu, > 10 kΩ |

### DB25 Input Pinout (Tascam)

| DB25 Pin | Signal |
| -------- | ------ |
| 1        | Ch 1 + |
| 14       | Ch 1 − |
| 2        | Ch 2 + |
| 15       | Ch 2 − |
| 3        | Ch 3 + |
| 16       | Ch 3 − |
| 4        | Ch 4 + |
| 17       | Ch 4 − |
| 5        | Ch 5 + |
| 18       | Ch 5 − |
| 6        | Ch 6 + |
| 19       | Ch 6 − |
| 7        | Ch 7 + |
| 20       | Ch 7 − |
| 8        | Ch 8 + |
| 21       | Ch 8 − |
| 25       | Ground |

---

## Installation

> **WARNING:** Always power down the chassis and disconnect the mains cable before installing or removing expansion cards.

1. Power down the chassis and disconnect the mains cable.
2. Remove the blanking panel from the target slot (retain the screw).
3. Slide the CARD-L8 into the slot guides, label side up, until the edge connector seats fully.
4. Secure the front bracket with the retained screw.
5. Reconnect the mains cable and power on the chassis.
6. Open DADman — the card appears automatically as line inputs in the I/O routing view.

---

## Compatibility

| Chassis    | Compatible              |
| ---------- | ----------------------- |
| AX64       | Yes                     |
| AX Center  | Yes                     |
| Penta 720  | Yes                     |
| Penta 721S | Yes                     |
| AX32       | Yes                     |
| Core 256   | No — no expansion slots |
| MOM        | No — no expansion slots |
