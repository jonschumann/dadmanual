---
title: "Chapter 10 — Technical Specifications"
sidebar_label: "Ch. 10 — Specifications"
sidebar_position: 11
---

# Chapter 10 — Technical Specifications

> **Product:** Digital Audio Denmark AX64  
> **SKU:** AX64-BASE / AX64-BASE-RPS  
> **Source:** Spec Sheet AX64-BASE, Issue June 2026

---

## 10.1 Digital I/O

| Parameter                            | Value                  | Conditions / Notes   |
| ------------------------------------ | ---------------------- | -------------------- |
| Thunderbolt 3                        | 256 ch in / 256 ch out | At 48 kHz and 96 kHz |
| Dante AoIP                           | 256 ch in / 256 ch out | At 48 kHz            |
| Dante AoIP                           | 128 ch in / 128 ch out | At 96 kHz            |
| MADI                                 | 64 ch in / 64 ch out   | At 48 kHz            |
| ADAT / SMUX                          | 16 ch in / 16 ch out   |                      |
| S/PDIF                               | 2 ch input             | Via ADAT connector   |
| DADlink (via SFP) | Up to 256×256 ch       | At 48 kHz            |
| Via expansion cards                  | Up to 1,024×1,024 ch   | Optional cards       |

---

## 10.2 Supported Sample Rates

| Format        | Sample Rates                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Thunderbolt 3 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67 | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| ADAT / SMUX   | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| S/PDIF        | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Routing and Processing

| Parameter              | Value                                                  |
| ---------------------- | ------------------------------------------------------ |
| Routing matrix         | 1,872×1,872                                            |
| Summing processor      | 512×64 channels                                        |
| SPQ equaliser          | 1,024 filters                                          |
| Processing word length | 28-bit floating point                                  |
| Internal system delay  | 7 samples (adjustable 3–31 samples) |
| Output alignment       | All outputs time- and phase-aligned                    |

---

## 10.4 DADlink

| Parameter | Value                 |
| --------- | --------------------- |
| Format    | 28-bit floating point |
| Latency   | 0 samples             |

---

## 10.5 Synchronisation

| Source                                     | Notes                |
| ------------------------------------------ | -------------------- |
| Word Clock                                 | BNC input and output |
| Video Black Burst (VBB) | Input                |
| Thunderbolt 3                              | Via host             |
| Dante                                      | Via network          |
| ADAT                                       | Via ADAT port        |
| MADI                                       | Via MADI port        |
| DADlink                                    | Via SFP              |

---

## 10.6 Thunderbolt 3 Interface

| Parameter          | Value                                        |
| ------------------ | -------------------------------------------- |
| Connectors         | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Supported                                    |
| Bus power output   | 15 W per port                                |

---

## 10.7 Network Interface

| Parameter | Value        |
| --------- | ------------ |
| Standard  | 1000BASE-T   |
| Connector | RJ45, 4-pair |

---

## 10.8 Expansion Slots

| Parameter        | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| Number of slots  | 8                                                                                                     |
| Compatible cards | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.9 Power

| Parameter                                      | Value                                   | Notes                          |
| ---------------------------------------------- | --------------------------------------- | ------------------------------ |
| Power inputs                                   | Single or dual                          | AX64-BASE-RPS has dual inputs  |
| Power supply                                   | Dual (always fitted) |                                |
| Input voltage                                  | 90–260 V AC                             | Nominal 100–240 V AC, 47–63 Hz |
| Mains connector                                | IEC 60309                               |                                |
| Mains fuse                                     | 1.5 A, T1AH/250 V       | Mounted in IEC connector       |
| Max mains rating                               | 120 W                                   |                                |
| Digital section                                | 15 W                                    |                                |
| Expansion cards (max)       | 70 W                                    |                                |
| Thunderbolt bus power (max) | 30 W                                    | 2 × 15 W                       |

---

## 10.10 Mechanical

| Parameter     | Value                                                            |
| ------------- | ---------------------------------------------------------------- |
| Form factor   | 19" rack mount, 2RU (88.9 mm) |
| Chassis depth | 34.5 cm / 13.6"                  |
| Body width    | 43.5 cm / 17.2"                  |
| Weight        | 5.5 kg / 12.2 lbs                |

---

## 10.11 Environmental

| Parameter             | Value                  |
| --------------------- | ---------------------- |
| Operating temperature | 0–45 °C / 32–113 °F    |
| Humidity              | 20–85%, non-condensing |

---

## 10.12 Regulatory Compliance

| Standard                                                       | Scope                                 |
| -------------------------------------------------------------- | ------------------------------------- |
| CISPR 32:2015 + AMD1:2019      | Emissions — multimedia equipment      |
| CISPR 35:2016                                  | Immunity — multimedia equipment       |
| IEC 61000-3-2:2018 + AMD1:2020 | Harmonic current emissions            |
| IEC 61000-3-3:2013 + AMD1:2017 | Voltage fluctuations and flicker      |
| ICES-003                                                       | Canada                                |
| AS/NZS CISPR 32                                                | Australia / New Zealand               |
| FCC Part 15, Subpart B                                         | USA — unintentional radiators         |
| IEC 62368-1:2018                               | Safety — audio/video and IT equipment |
