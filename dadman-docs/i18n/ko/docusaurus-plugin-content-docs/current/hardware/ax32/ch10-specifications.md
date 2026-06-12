---
title: "Chapter 10 — Technical Specifications"
sidebar_label: "Ch. 10 — Specifications"
sidebar_position: 11
---

# Chapter 10 — Technical Specifications

> **Product:** Digital Audio Denmark AX32  
> **SKU:** AX32-BASE2  
> **Source:** Spec Sheet AX32-BASE, Issue June 2026

---

## 10.1 Digital I/O

| Parameter                                                 | Value                | Conditions / Notes                          |
| --------------------------------------------------------- | -------------------- | ------------------------------------------- |
| MADI                                                      | 64 ch in / 64 ch out | At 48 kHz; coaxial BNC                      |
| AES3 (built-in)                        | 16 ch in / 16 ch out | 2 × DB25 (Tascam pinout) |
| DADlink (via optional MOD-MADI-DADLNK) | Up to 256×256 ch     | At 48 kHz; via SFP                          |
| Via expansion cards                                       | Up to 1,024×1,024 ch | Optional cards                              |

---

## 10.2 Supported Sample Rates

| Format                                                | Sample Rates                                                                                                   |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                                                  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                                                  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink                                               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante (via optional MOD-DANTE-BK3) | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Expansion cards                                       | Dependent on card type                                                                                         |

---

## 10.3 Routing and Processing

| Parameter              | Value                                                  |
| ---------------------- | ------------------------------------------------------ |
| Routing matrix         | 1,424×1,424                                            |
| Summing processor      | 256×32 channels                                        |
| Processing word length | 28-bit floating point                                  |
| Internal system delay  | 7 samples (adjustable 3–31 samples) |
| Output alignment       | All outputs time- and phase-aligned                    |

---

## 10.4 DADlink

| Parameter | Value                                 |
| --------- | ------------------------------------- |
| Format    | 28-bit floating point                 |
| Latency   | 0 samples                             |
| Requires  | Optional MOD-MADI-DADLNK module + SFP |

---

## 10.5 Synchronisation

| Source                                     | Notes                               |
| ------------------------------------------ | ----------------------------------- |
| Word Clock                                 | BNC input and output                |
| Video Black Burst (VBB) | Input                               |
| AES11                                      | Input                               |
| MADI                                       | Via MADI port                       |
| AES3                                       | Via built-in AES3 input             |
| ADAT                                       | Via optional card                   |
| Dante                                      | Via optional MOD-DANTE-BK3 module   |
| DADlink                                    | Via optional MOD-MADI-DADLNK module |

---

## 10.6 Network Interface

| Parameter | Value                                                      |
| --------- | ---------------------------------------------------------- |
| Standard  | 1000BASE-T                                                 |
| Connector | RJ45, 4-pair                                               |
| Purpose   | DADman control; optional network audio via expansion cards |

---

## 10.7 Expansion Slots

| Parameter        | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| Number of slots  | 8                                                                                                     |
| Compatible cards | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.8 Optional Modules

| Module          | Function                                  |
| --------------- | ----------------------------------------- |
| MOD-MADI-DADLNK | Dual MADI and DADlink via SFP             |
| MOD-DANTE-BK3   | 64-ch Dante network audio                 |
| MOD-SFP-1300-LZ | DADlink SFP                               |
| MOD-SFP-1300-LD | MADI SFP (single-mode) |
| MOD-SFP-COAX    | MADI SFP (coaxial)     |

---

## 10.9 Power

| Parameter                                | Value                                   | Notes                                |
| ---------------------------------------- | --------------------------------------- | ------------------------------------ |
| Power inputs                             | Single                                  | AX32-RPS option adds redundant input |
| Power supply                             | Dual (always fitted) |                                      |
| Input voltage                            | 90–260 V AC                             | Nominal 100–240 V AC, 47–63 Hz       |
| Mains connector                          | IEC 60309                               |                                      |
| Mains fuse                               | 1.0 A, T1AH/250 V       | Mounted in IEC connector             |
| Max mains rating                         | 90 W                                    |                                      |
| Digital section                          | 15 W                                    |                                      |
| Expansion cards (max) | 65 W                                    |                                      |

---

## 10.10 Mechanical

| Parameter     | Value                                                            |
| ------------- | ---------------------------------------------------------------- |
| Form factor   | 19" rack mount, 2RU (88.9 mm) |
| Chassis depth | 35 cm / 13.8"                                    |
| Body width    | 43.5 cm / 17.2"                  |
| Weight        | 5.0 kg / 11.0 lbs                |
| Cooling       | 2 × super low noise internal fans                                |

---

## 10.11 Environmental

| Parameter             | Value                  |
| --------------------- | ---------------------- |
| Operating temperature | 0–45 °C / 32–113 °F    |
| Humidity              | 20–85%, non-condensing |

---

## 10.12 Regulatory Compliance

| Standard                        | Scope                                               |
| ------------------------------- | --------------------------------------------------- |
| EN 55103-1                      | Emissions — audio/video and entertainment equipment |
| EN 55103-2                      | Immunity — audio/video and entertainment equipment  |
| FCC Part 15, Subpart B          | USA — unintentional radiators                       |
| EN 60950-1:2006 | Safety — IT equipment                               |

---

## Cross-References

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanical Drawings](./appc-mechanical-drawings)
