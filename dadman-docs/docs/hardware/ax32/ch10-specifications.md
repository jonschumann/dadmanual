---
title: "Chapter 10 — Technical Specifications"
sidebar_label: "Ch. 10 — Specifications"
sidebar_position: 11
---

# Chapter 10 — Technical Specifications

> **Product:** Digital Audio Denmark AX32  
> **SKU:** AX32-BASE2  
> **Source:** DAD Product Library (June 2026) — full spec sheet pending

> **NOTICE:** Specifications in this chapter are derived from available product documentation. Values marked *TBC* require verification against the current engineering spec sheet. Do not publish without engineering review.

---

## 10.1 Digital I/O

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Thunderbolt 3 | TBC ch in / TBC ch out | |
| MADI (BNC coaxial) | 64 ch in / 64 ch out | At 48 kHz |
| Via expansion cards | Up to TBC ch | Card-dependent |

---

## 10.2 Analogue I/O (via Expansion Cards)

| Parameter | Value | Conditions / Notes |
|---|---|---|
| Analogue channels (max) | 16 in / 16 out | With 2× CARD-L8 + 2× CARD-DA8 (4 slots) |
| Analogue format | Line, mic/line, or DA | Card-dependent — CARD-L8, CARD-M8, CARD-DA8 |
| Connector type | DB25 | Tascam pinout — per card |

---

## 10.3 Supported Sample Rates

| Format | Sample Rates |
|---|---|
| Thunderbolt 3 | TBC |
| MADI | 44.1, 48, 88.2, 96, 176.4, 192 kHz |
| Expansion cards | Card-dependent |

---

## 10.4 Routing and Processing

| Parameter | Value |
|---|---|
| Routing matrix | TBC |
| Processing word length | TBC |

---

## 10.5 Synchronisation

| Source | Notes |
|---|---|
| Internal | AX32 acts as sync master |
| Word Clock | BNC input |
| MADI | Via BNC MADI input |
| Thunderbolt | Via host |
| Via expansion card | Dante, Ravenna, MADI-SO cards add additional sync sources |

---

## 10.6 Thunderbolt 3 Interface

| Parameter | Value |
|---|---|
| Connectors | TBC × USB-C (Thunderbolt 3) |
| DAD Thunderbolt driver | Required |

---

## 10.7 Network Interface

| Parameter | Value |
|---|---|
| Standard | 1000BASE-T |
| Connector | RJ45 |
| Purpose | DADman control and optional network audio via expansion cards |

---

## 10.8 Expansion Slots

| Parameter | Value |
|---|---|
| Number of slots | 8 |
| Compatible cards | CARD-L8, CARD-M8, CARD-DA8, CARD-DANTE, CARD-2MADI-SO, CARD-RAVENNA |

---

## 10.9 Power

| Parameter | Value | Notes |
|---|---|---|
| Input voltage | 90–260 V AC | TBC — verify against spec sheet |
| Mains connector | IEC C14 | |
| Max power consumption | TBC W | |

---

## 10.10 Mechanical

| Parameter | Value |
|---|---|
| Form factor | 19" rack mount, 2U (88.9 mm) |
| Chassis depth | TBC |
| Weight | TBC |

---

## 10.11 Environmental

| Parameter | Value |
|---|---|
| Operating temperature | TBC |
| Humidity | TBC |

---

## 10.12 Regulatory Compliance

*[Placeholder — verify compliance declarations against current AX32-BASE2 documentation.]*

| Standard | Scope |
|---|---|
| IEC 62368-1:2018 | Safety — audio/video and IT equipment |
| *[Additional certifications TBC]* | — |
