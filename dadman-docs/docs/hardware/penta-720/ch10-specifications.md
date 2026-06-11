---
title: "Chapter 10 — Technical Specifications"
sidebar_label: "Ch. 10 — Specifications"
sidebar_position: 11
---

# Chapter 10 — Technical Specifications

> **Product:** Digital Audio Denmark Penta 720  
> **SKU:** PENTA720-BASE  
> **Source:** Spec Sheet PENTA720-BASE, Issue June 2026

---

## 10.1 Digital I/O

| Parameter | Value | Conditions / Notes |
|---|---|---|
| MADI | 64 ch in / 64 ch out | At 48 kHz; coaxial BNC and optical via SFP |
| AES3 (built-in) | 16 ch in / 16 ch out | 2 × DB25 (Tascam pinout) |
| Via expansion cards | Up to 8 cards | See Section 10.5 for compatible cards |

---

## 10.2 Supported Sample Rates

| Format | Sample Rates |
|---|---|
| MADI | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3 | 44.1, 48, 88.2, 96, 176.4, 192 kHz |
| Expansion cards | Dependent on card type |

---

## 10.3 Routing and Processing

| Parameter | Value |
|---|---|
| Routing matrix | 1,424×1,424 |
| Processing word length | 28-bit floating point |
| Output alignment | All outputs time- and phase-aligned |

---

## 10.4 Synchronisation

| Source | Notes |
|---|---|
| Word Clock | BNC input and output |
| Video Black Burst (VBB) | Input |
| MADI | Via MADI port |
| AES3 | Via AES3 input |

---

## 10.5 Expansion Slots

| Parameter | Value |
|---|---|
| Number of slots | 8 |
| Compatible cards | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.6 Power

| Parameter | Value | Notes |
|---|---|---|
| Input voltage | 90–260 V AC | Nominal 100–240 V AC, 47–63 Hz |
| Max power consumption | 90 W | |

---

## 10.7 Mechanical

| Parameter | Value |
|---|---|
| Form factor | 19" rack mount, 2RU (88.9 mm) |
| Chassis depth | 35 cm / 13.8" |
| Body width | 43.5 cm / 17.2" |
| Weight | 5.0 kg / 11.0 lbs |

---

## 10.8 Environmental

| Parameter | Value |
|---|---|
| Operating temperature | 0–45 °C / 32–113 °F |
| Humidity | 20–85%, non-condensing |

---

## 10.9 Regulatory Compliance

| Standard | Scope |
|---|---|
| EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013 | Safety — IT equipment |
| CISPR 32 | Emissions — multimedia equipment |
| CISPR 35 | Immunity — multimedia equipment |
| FCC Part 15, Subpart B | USA — unintentional radiators |
| ICES-003 | Canada |

---

## Cross-References

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanical Drawings](./appc-mechanical-drawings)
