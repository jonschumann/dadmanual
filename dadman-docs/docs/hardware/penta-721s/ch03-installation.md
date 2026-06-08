---
title: "Chapter 3 — Installation"
sidebar_label: "Ch. 3 — Installation"
sidebar_position: 4
---

# Chapter 3 — Installation

> **Product:** Digital Audio Denmark Penta 721s

> **Before you begin:** Read [Front Matter — Safety & Conventions](./penta-721s/fm-safety) before installing this unit.

---

## 3.1 Site Requirements

*[Placeholder — environmental requirements: temperature, humidity, ventilation clearance.]*

| Parameter | Specification |
|-----------|--------------|
| Operating temperature | 0 °C to 40 °C (32 °F to 104 °F) |
| Storage temperature | −20 °C to 60 °C |
| Relative humidity | 20% to 80% (non-condensing) |
| Ventilation clearance | Minimum 1U (44 mm) above and below unit in rack |

---

## 3.2 Rack Mounting

*[Placeholder — rack mounting procedure. Include racking hardware part numbers and torque specifications.]*

The Penta 721s is a 1U rackmount (slim modular chassis) unit that mounts directly in a standard 19-inch rack with the supplied rack ears.

1. Attach the rack ears to the unit using the supplied screws.
2. Position the unit in the rack at the desired location.
3. Secure with rack screws into cage nuts or threaded rack strips.

> **CAUTION:** Use all four rack screws. Do not rely on fewer than four points of attachment.

---

## 3.3 Power Connection

*[Placeholder — power connection procedure.]*

Internal. IEC C14 inlet. 100–240 V AC, 50/60 Hz. Optional redundant PSU.

1. Connect a suitable IEC C13 power cable to the unit's IEC C14 inlet.
2. Connect the other end to a grounded mains outlet.
3. Switch on the unit using the front-panel Power button.

> **WARNING:** Only connect to a correctly earthed/grounded mains outlet. Do not defeat the ground connection.

---



## 3.4 Network Setup

The unit connects to the host computer over Ethernet. A dedicated Gigabit Ethernet network is required.

*[Placeholder — network configuration procedure. Cross-reference to DADman manual Ch. 3.]*

1. Connect the unit's NET 1 port to a dedicated Gigabit Ethernet switch.
2. Connect the host computer's dedicated NIC to the same switch.
3. Configure the host NIC with a static IP address in the same subnet as the unit.
4. Power on the unit.
5. Open DADman — the unit should be discovered automatically.

> **NOTICE — Dedicated network required:** Audio network traffic is latency-sensitive. Do not route DAD network audio over switches shared with general IT traffic.

---

## 3.4 Initial Startup

*[Placeholder — first-power procedure and verification steps.]*

1. Confirm all signal cables are disconnected before first power-on.
2. Apply power.
3. Observe front-panel LEDs — see [Ch. 2 — Panel Description](./penta-721s/ch02-panel-description) for expected LED states.
4. Connect the unit to the host computer (Ethernet (no Thunderbolt)).
5. Open DADman and confirm the unit appears in the Device List.

---

## Cross-References

- [Front Matter — Safety](./penta-721s/fm-safety)
- [Ch. 2 — Panel Description](./penta-721s/ch02-panel-description)
- [DADman User Manual — Ch. 3 — Installation](../ch03-installation) — Host computer setup
