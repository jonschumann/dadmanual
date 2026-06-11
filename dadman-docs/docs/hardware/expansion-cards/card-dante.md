---
title: "CARD-DANTE — 128-Channel Dante / AES67 Interface"
sidebar_label: "CARD-DANTE"
sidebar_position: 5
---

# CARD-DANTE — 128-Channel Dante / AES67 Interface Card

> **SKU:** CARD-DANTE  
> **Source:** Spec Sheet CARD-DANTE, Issue June 2026

---

## Overview

The CARD-DANTE provides 128-channel bidirectional Dante and AES67 audio over IP connectivity for any compatible DAD chassis. Two RJ45 network ports can be configured as a switched network (daisy-chain) or as a redundant Dante network with independent primary and secondary connections.

The card is fully compatible with the Dante ecosystem developed by Audinate, including Dante Domain Manager. Sample rate conversion (SRC) can be enabled independently for the input and output paths, allowing the card to operate asynchronously from the host chassis sample rate.

---

## Technical Specifications

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Input channels | 128 | At 44.1 / 48 kHz (1FS) |
| Output channels | 128 | At 44.1 / 48 kHz (1FS) |
| Channels at 2FS (88.2 / 96 kHz) | 64 in / 64 out | |
| Channels at 4FS (176.4 / 192 kHz) | 32 in / 32 out | |
| Dante flows | Up to 128 bidirectional | |
| Sample rates | 44.1, 48, 88.2, 96, 176.4, 192 kHz | |
| Network standard | 1000BASE-T | |
| Network ports | 2 × RJ45 | Switched or redundant |
| Network mode | Switched or redundant | Configurable in Dante Controller |
| AES67 | Supported | SAP discovery |
| Dante Domain Manager | Supported | |
| Sample rate conversion | Selectable on input and output independently | |
| SRC dynamic range | > 125 dB | 64-bit floating point |
| SRC latency (48 → 96 kHz) | Approx. 0.8 ms input / 1.1 ms output | |
| SRC latency (96 → 48 kHz) | Approx. 0.8 ms input / 1.1 ms output | |
| Synchronisation | Dante network clock or internal system clock | |
| Power consumption | 4.5 W | |

---

## Connections

| Port | Connector | Signal | Notes |
|---|---|---|---|
| Network (Dante primary) | RJ45 | 1000BASE-T | Dante primary or switched port |
| Network (Dante secondary) | RJ45 | 1000BASE-T | Dante secondary / redundant port |

---

## Network Configuration

The two RJ45 ports on CARD-DANTE can be configured in two modes:

**Switched mode** — The two ports act as an integrated 2-port switch, allowing daisy-chain network topologies without an external switch. Both ports connect to the same Dante network.

**Redundant mode** — Each port connects to an independent Dante network (primary and secondary). Dante automatically fails over to the secondary network if the primary path fails. Redundant mode requires a switch on each network.

Configure the network mode using Dante Controller or DADman.

---

## Installation

> **WARNING:** Always power down the chassis and disconnect the mains cable before installing or removing expansion cards.

1. Power down the chassis and disconnect the mains cable.
2. Remove the blanking panel from the target slot (retain the screw).
3. Slide the CARD-DANTE into the slot guides until the edge connector seats fully.
4. Secure the front bracket with the retained screw.
5. Connect Ethernet cables to the RJ45 ports as required.
6. Reconnect the mains cable and power on the chassis.
7. Open DADman and/or Dante Controller — the card appears as a Dante device on the network.

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
