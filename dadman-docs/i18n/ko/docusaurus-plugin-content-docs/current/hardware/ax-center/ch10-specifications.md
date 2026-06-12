---
title: "Chapter 10 — Technical Specifications"
sidebar_label: "Ch. 10 — Specifications"
sidebar_position: 11
---

# Chapter 10 — Technical Specifications

> **Product:** Digital Audio Denmark AX Center  
> **SKU:** AXCNTR-BASE  
> **Source:** Spec Sheet AXCNTR-BASE, Issue June 2026

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
| Via expansion cards                  | Additional I/O         | 2 expansion slots    |

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

| Parameter              | Value                               |
| ---------------------- | ----------------------------------- |
| Routing matrix         | 1,006×1,112                         |
| Processing word length | 28-bit floating point               |
| Output alignment       | All outputs time- and phase-aligned |

---

## 10.4 DADlink

| Parameter | Value                 |
| --------- | --------------------- |
| Format    | 28-bit floating point |
| Latency   | 0 samples             |

---

## 10.5 Native Analogue I/O

### Headphone Outputs

| Parameter     | Value                  | Conditions / Notes                       |
| ------------- | ---------------------- | ---------------------------------------- |
| Outputs       | 2 × stereo headphone   | Front panel, 6.35 mm TRS |
| Level control | Independent per output | Via front panel                          |

### Monitor Output

| Parameter     | Value                 | Conditions / Notes      |
| ------------- | --------------------- | ----------------------- |
| Outputs       | Stereo monitor output | Rear panel              |
| Level control | Yes                   | Via front panel encoder |

### Microphone / Instrument Input

| Parameter     | Value                           | Conditions / Notes          |
| ------------- | ------------------------------- | --------------------------- |
| Inputs        | 1 × microphone + 1 × instrument | Front panel combo connector |
| Phantom power | 48 V                            | Switchable                  |

---

## 10.6 Synchronisation

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

## 10.7 Thunderbolt 3 Interface

| Parameter          | Value                                        |
| ------------------ | -------------------------------------------- |
| Connectors         | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Supported                                    |
| Bus power output   | 15 W per port                                |

---

## 10.8 Network Interface

| Parameter | Value        |
| --------- | ------------ |
| Standard  | 1000BASE-T   |
| Connector | RJ45, 4-pair |

---

## 10.9 Expansion Slots

| Parameter        | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| Number of slots  | 2                                                                                                     |
| Compatible cards | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.10 Power

| Parameter             | Value       | Notes                          |
| --------------------- | ----------- | ------------------------------ |
| Input voltage         | 90–260 V AC | Nominal 100–240 V AC, 47–63 Hz |
| Max power consumption | 90 W        |                                |

---

## 10.11 Mechanical

| Parameter     | Value                                                            |
| ------------- | ---------------------------------------------------------------- |
| Form factor   | 19" rack mount, 1RU (44.5 mm) |
| Chassis depth | 32 cm / 12.6"                                    |
| Body width    | 43.5 cm / 17.2"                  |
| Weight        | 3.2 kg / 7.1 lbs                 |

---

## 10.12 Environmental

| Parameter             | Value                  |
| --------------------- | ---------------------- |
| Operating temperature | 0–45 °C / 32–113 °F    |
| Humidity              | 20–85%, non-condensing |

---

## 10.13 Regulatory Compliance

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

---

## Cross-References

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanical Drawings](./appc-mechanical-drawings)
