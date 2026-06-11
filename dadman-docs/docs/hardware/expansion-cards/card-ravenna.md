---
title: "CARD-RAVENNA — 128-Channel Ravenna / AES67 / ST 2110-30 Interface"
sidebar_label: "CARD-RAVENNA"
sidebar_position: 7
---

# CARD-RAVENNA — 128-Channel Ravenna / AES67 / ST 2110-30 Interface Card

> **SKU:** CARD-RAVENNA  
> **Source:** Spec Sheet CARD-RAVENNA, Issue June 2026

---

## Overview

The CARD-RAVENNA provides 128-channel bidirectional Ravenna, AES67, and SMPTE ST 2110-30 audio over IP connectivity for any compatible DAD chassis. Two RJ45 network ports can be configured as a switched network or with ST 2022-7 Seamless Protection Switching (SPS) for hitless redundancy on dual-network installations.

The card is fully interoperable with Ravenna, AES67, and ST 2110-30 ecosystems and supports industry-standard discovery and control via WebUI, NMOS IS-04/IS-05, SAP, ANEMAN, and JSON API. PTPv2 (IEEE 1588-2008) is supported in both Master and Slave modes.

Sample rate conversion (SRC) can be enabled on input and output paths jointly, allowing the card to operate asynchronously from the host chassis sample rate.

---

## Technical Specifications

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Input channels | 128 | At 44.1 / 48 kHz (1FS) |
| Output channels | 128 | At 44.1 / 48 kHz (1FS) |
| Channel count scaling | Scales with sample rate | Higher sample rates reduce channel count per stream |
| Ravenna / AES67 streams | Up to 64 bidirectional | |
| Sample rates | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | |
| Network standard | 1000BASE-T | |
| Network ports | 2 × RJ45 | Switched or ST 2022-7 SPS redundant |
| Redundancy | ST 2022-7 Seamless Protection Switching | Hitless failover on dual-network |
| Synchronisation | PTPv2 (IEEE 1588-2008) — Master or Slave | Or internal system clock |
| AES67 | Supported | |
| ST 2110-30 | Supported | |
| NMOS | IS-04 (discovery) and IS-05 (connection management) | |
| Discovery / control | WebUI, NMOS, Ravenna, SAP, ANEMAN, JSON API | |
| Sample rate conversion | Selectable on input and output jointly | |
| SRC latency (48 → 96 kHz) | Approx. 0.8 ms input / 1.1 ms output | |
| SRC latency (96 → 48 kHz) | Approx. 0.8 ms input / 1.1 ms output | |
| Power consumption | 7.5 W | |

---

## Connections

| Port | Connector | Signal | Notes |
|---|---|---|---|
| Network (primary) | RJ45 | 1000BASE-T | Ravenna / AES67 / ST 2110-30 primary |
| Network (secondary) | RJ45 | 1000BASE-T | ST 2022-7 redundant or switched port |

---

## Network Configuration

**Switched mode** — Both ports operate as an integrated switch, enabling daisy-chain topology without an external switch.

**ST 2022-7 SPS mode** — Each port connects to an independent network. ST 2022-7 Seamless Protection Switching provides hitless failover — if one network path fails, audio continues without interruption via the other. This mode requires a dedicated switch on each network.

Configure the network mode and PTP role (Master / Slave) via the card's WebUI or NMOS controller.

---

## Discovery and Control

CARD-RAVENNA supports multiple discovery and control interfaces:

| Interface | Purpose |
|---|---|
| WebUI | Browser-based configuration and status |
| NMOS IS-04 | Device and resource discovery |
| NMOS IS-05 | Connection management (routing) |
| Ravenna | Native Ravenna discovery and control |
| SAP | Session announcement (AES67 / SDP) |
| ANEMAN | ANEMAN network manager integration |
| JSON API | Programmatic configuration |

---

## Installation

> **WARNING:** Always power down the chassis and disconnect the mains cable before installing or removing expansion cards.

1. Power down the chassis and disconnect the mains cable.
2. Remove the blanking panel from the target slot (retain the screw).
3. Slide the CARD-RAVENNA into the slot guides until the edge connector seats fully.
4. Secure the front bracket with the retained screw.
5. Connect Ethernet cables to the RJ45 ports as required for your network topology.
6. Reconnect the mains cable and power on the chassis.
7. Open DADman — the card appears as an AoIP interface in the I/O routing view.
8. Access the card's WebUI for advanced network and PTP configuration.

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
