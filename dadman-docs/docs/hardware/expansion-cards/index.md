---
title: "Expansion Cards"
sidebar_label: "Overview"
sidebar_position: 1
---

# Expansion Cards

DAD expansion cards slot into the card bays on compatible chassis to extend I/O capability. Each card occupies one slot and is hot-plug capable. Multiple cards of the same or different types can be installed simultaneously, subject to the total power budget of the host chassis.

## Compatible Chassis

| Chassis | Available Slots |
|---|---|
| AX64 | 8 |
| Penta 720 | 8 |
| AX Center | 2 |
| Penta 721S | 1 |
| AX32 | 8 |

> The Core 256 has no expansion slots. The MOM has no expansion slots.

---

## Card Comparison

| Card | SKU | Type | Channels | Connector | Power |
|---|---|---|---|---|---|
| [CARD-DA8](./card-da8) | CARD-DA8 | Analogue DA output | 8 ch out | DB25 (Tascam) | 11 W |
| [CARD-L8](./card-l8) | CARD-L8 | Analogue AD line input | 8 ch in | DB25 (Tascam) | 9 W |
| [CARD-M8](./card-m8) | CARD-M8 | Analogue AD mic/line input | 8 ch in | DB25 (Tascam) | 11 W |
| [CARD-DANTE](./card-dante) | CARD-DANTE | Dante / AES67 AoIP | 128 ch in + 128 ch out | 2 × RJ45 | 4.5 W |
| [CARD-2MADI-SO](./card-2madi-so) | CARD-2MADI-SO | Dual MADI via SFP | 2 × 64 ch in + 64 ch out | 2 × SFP | 4.5 W |
| [CARD-RAVENNA](./card-ravenna) | CARD-RAVENNA | Ravenna / AES67 / ST 2110-30 | 128 ch in + 128 ch out | 2 × RJ45 | 7.5 W |

---

## Slot Power Budget

Each chassis has a maximum power budget for its expansion card slots. Ensure the combined power consumption of installed cards does not exceed the chassis limit.

| Chassis | Card slot power budget |
|---|---|
| AX64 | 70 W total across 8 slots |
| Penta 720 | Refer to Penta 720 specifications |
| AX Center | Refer to AX Center specifications |
| Penta 721S | Refer to Penta 721S specifications |
| AX32 | Refer to AX32 specifications |

> **CAUTION:** Exceeding the slot power budget may cause unstable operation or thermal shutdown. Calculate total card power before installing multiple high-power cards (CARD-DA8, CARD-M8) in the same chassis.

---

## Installation Overview

All expansion cards share the same installation procedure. For detailed steps, see the Installation section on each card's page.

1. Power down the chassis completely and disconnect the mains cable.
2. Remove the blanking panel from the target slot (retain the screw).
3. Slide the card into the slot guides until the edge connector seats fully.
4. Secure the card's front bracket with the retained screw.
5. Reconnect the mains cable and power on the chassis.
6. Open DADman — the card will appear automatically in the I/O configuration.
