---
title: "Chapter 10 — Technical Specifications"
sidebar_label: "Ch. 10 — Specifications"
sidebar_position: 11
---

# Chapter 10 — Technical Specifications

> **Product:** Digital Audio Denmark Core 256  
> **SKU:** CORE256-BASE  
> **Source:** Spec Sheet CORE256-BASE, Issue June 2026

---

## 10.1 Digital I/O

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Thunderbolt 3 | 256 ch in / 256 ch out | At 48 kHz and 96 kHz |
| Dante AoIP | 256 ch in / 256 ch out | At 48 kHz |
| Dante AoIP | 128 ch in / 128 ch out | At 96 kHz |
| MADI | 64 ch in / 64 ch out | At 48 kHz |
| ADAT / SMUX | 16 ch in / 16 ch out | |
| S/PDIF | 2 ch input | Via ADAT connector |
| DADlink (via SFP) | Up to 256×256 ch | At 48 kHz |

---

## 10.2 Supported Sample Rates

| Format | Sample Rates |
|---|---|
| Thunderbolt 3 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67 | 44.1, 48, 88.2, 96, 176.4, 192 kHz |
| ADAT / SMUX | 44.1, 48, 88.2, 96, 176.4, 192 kHz |
| S/PDIF | 44.1, 48, 88.2, 96 kHz |

---

## 10.3 Routing and Processing

| Parameter | Value |
|---|---|
| Routing matrix | 848×848 |
| Processing word length | 28-bit floating point |
| Output alignment | All outputs time- and phase-aligned |

---

## 10.4 DADlink

| Parameter | Value |
|---|---|
| Format | 28-bit floating point |
| Latency | 0 samples |

---

## 10.5 Synchronisation

| Source | Notes |
|---|---|
| Word Clock | BNC input and output |
| Video Black Burst (VBB) | Input |
| Thunderbolt 3 | Via host |
| Dante | Via network |
| ADAT | Via ADAT port |
| MADI | Via MADI port |
| DADlink | Via SFP |

---

## 10.6 Thunderbolt 3 Interface

| Parameter | Value |
|---|---|
| Connectors | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Supported |
| Bus power output | 15 W per port |

---

## 10.7 Network Interface

| Parameter | Value |
|---|---|
| Standard | 1000BASE-T |
| Connector | RJ45, 4-pair |

---

## 10.8 Power

| Parameter | Value | Notes |
|---|---|---|
| Input voltage | 12 V DC | External power supply included |
| Max power consumption | 60 W | |

---

## 10.9 Mechanical

| Parameter | Value |
|---|---|
| Form factor | Desktop / 1RU rackmount (with optional C256-2MOUNT-BRACKET) |
| Width | 21.1 cm / 8.3" |
| Depth | 23.1 cm / 9.1" |
| Weight | 1.3 kg / 2.9 lbs |

---

## 10.10 Environmental

| Parameter | Value |
|---|---|
| Operating temperature | 0–45 °C / 32–113 °F |
| Humidity | 20–85%, non-condensing |

---

## 10.11 Regulatory Compliance

| Standard | Scope |
|---|---|
| CISPR 32:2015 + AMD1:2019 | Emissions — multimedia equipment |
| CISPR 35:2016 | Immunity — multimedia equipment |
| IEC 61000-3-2:2018 + AMD1:2020 | Harmonic current emissions |
| IEC 61000-3-3:2013 + AMD1:2017 | Voltage fluctuations and flicker |
| ICES-003 | Canada |
| AS/NZS CISPR 32 | Australia / New Zealand |
| FCC Part 15, Subpart B | USA — unintentional radiators |
| IEC 62368-1:2018 | Safety — audio/video and IT equipment |

---

## Cross-References

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanical Drawings](./appc-mechanical-drawings)
