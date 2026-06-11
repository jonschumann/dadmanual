---
title: "CARD-2MADI-SO — Dual MADI Interface with SRC"
sidebar_label: "CARD-2MADI-SO"
sidebar_position: 6
---

# CARD-2MADI-SO — Dual MADI Interface Card with SRC

> **SKU:** CARD-2MADI-SO  
> **Source:** Spec Sheet CARD-MADI-SO, Issue June 2026

---

## Overview

The CARD-2MADI-SO provides two independent bidirectional MADI connections via SFP modules for any compatible DAD chassis. Each MADI port delivers 64 channels in and 64 channels out at 48 kHz, for a total of 128 channels in each direction per card.

SFP modules are sold separately and can be optical (LC, single-mode or multi-mode) or electrical (HD-BNC coaxial). This flexibility allows the card to connect to virtually any existing MADI infrastructure. Sample rate conversion (SRC) can be enabled independently for the input and output of each port.

---

## Technical Specifications

| Parameter | Value | Conditions / Notes |
|---|---|---|
| MADI ports | 2 | Independent bidirectional ports |
| Channels per port | 64 in / 64 out | At 44.1 / 48 kHz (1FS) |
| Total channels | 128 in / 128 out | Both ports combined |
| Channels per port at 2FS | 32 in / 32 out | At 88.2 / 96 kHz |
| Channels per port at 4FS | 16 in / 16 out | At 176.4 / 192 kHz |
| Channels per port at 8FS | 8 in / 8 out | At 352.8 / 384 kHz |
| Sample rates | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | |
| Frame modes | Legacy (SMUX) and high-speed | |
| Channel count modes | 56-channel and 64-channel | |
| SFP interface | 2 × SFP cage | Optical LC or HD-BNC coax (sold separately) |
| Sample rate conversion | Selectable per port, input and output independently | |
| SRC latency (48 → 96 kHz) | Approx. 0.8 ms input / 1.1 ms output | Per port |
| SRC latency (96 → 48 kHz) | Approx. 0.8 ms input / 1.1 ms output | Per port |
| Synchronisation | MADI input or internal system clock | Per port |
| Power consumption | 4.5 W | |

---

## Connections

| Port | Connector | Signal | Notes |
|---|---|---|---|
| MADI I/O — Port A | SFP cage | AES10 MADI | SFP module sold separately |
| MADI I/O — Port B | SFP cage | AES10 MADI | SFP module sold separately |

---

## SFP Modules

SFP modules are **not included** and must be ordered separately. Two types are available from DAD:

| SKU | Description |
|---|---|
| MOD-SFP-COAX | SFP electrical transceiver for MADI — HD-BNC connector |
| MOD-SFP-1300-LD | SFP optical transceiver for MADI — 1310 nm, 100BASE multi-mode LC |
| CON-2BNC-HD/STD-0,5M | HD-BNC to BNC adapter cable set (0.5 m) |

> **Note:** The MOD-SFP-COAX uses HD-BNC connectors. Use CON-2BNC-HD/STD-0,5M adapter cables to connect to standard 75 Ω BNC MADI equipment.

---

## Installation

> **WARNING:** Always power down the chassis and disconnect the mains cable before installing or removing expansion cards.

> **CAUTION:** SFP modules can be inserted and removed with the card powered. However, to avoid damaging the SFP cage, always insert modules straight and with even pressure. Do not force a module that does not seat easily.

1. Power down the chassis and disconnect the mains cable.
2. Remove the blanking panel from the target slot (retain the screw).
3. Slide the CARD-2MADI-SO into the slot guides until the edge connector seats fully.
4. Secure the front bracket with the retained screw.
5. Reconnect the mains cable and power on the chassis.
6. Insert the appropriate SFP modules into the SFP cages and connect MADI cables.
7. Open DADman — both MADI ports appear in the I/O routing view.

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
