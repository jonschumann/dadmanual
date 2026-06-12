---
title: "Kapitel 10 — Tekniske Specifikationer"
sidebar_label: "Ch. 10 — Specifikationer"
sidebar_position: 11
---

# Kapitel 10 — Tekniske Specifikationer

> **Produkt:** Digital Audio Denmark AX64  
> **SKU:** AX64-BASE / AX64-BASE-RPS  
> **Kilde:** Spec Sheet AX64-BASE, Udgave Juni 2026

---

## 10.1 Digital I/O

| Parameter                            | Værdi                  | Betingelser / Noter  |
| ------------------------------------ | ---------------------- | -------------------- |
| Thunderbolt 3                        | 256 lm ind / 256 lm ud | Ved 48 kHz og 96 kHz |
| Dante AoIP                           | 256 lm ind / 256 lm ud | Ved 48 kHz           |
| Dante AoIP                           | 128 lm i / 128 lm ud   | Ved 96 kHz           |
| MADI                                 | 64 lm i / 64 lm ud     | Ved 48 kHz           |
| ADAT / SMUX                          | 16 lm ind / 16 lm ud   |                      |
| S/PDIF                               | 2 ch input             | Via ADAT stik        |
| DADlink (via SFP) | Op til 256×256 ch      | Ved 48 kHz           |
| Via ekspansionskort                  | Op til 1,024×1,024 ch  | Valgfrie kort        |

---

## 10.2 Understøttede Prøvepriser

| Formatér      | Prøve Satser                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Thunderbolt 3 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67 | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| ADAT / SMUX   | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| S/PDIF        | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Routing and Processing

| Parameter                | Værdi                                                |
| ------------------------ | ---------------------------------------------------- |
| Routing matrix           | 1,872×1,872                                          |
| Sammenfattende processor | 512×64 kanaler                                       |
| SPQ equalizer            | 1,024 filtre                                         |
| Behandler ordlængde      | 28-bit flydende punkt                                |
| Intern systemforsinkelse | 7 prøver (justerbare 3-31 prøver) |
| Justering af output      | Alle udgange tids- og fase-justeret                  |

---

## 10.4 DADlink

| Parameter | Værdi                 |
| --------- | --------------------- |
| Formatér  | 28-bit flydende punkt |
| Latens    | 0 prøver              |

---

## 10.5 Synchronisation

| Kilde                                      | Noter               |
| ------------------------------------------ | ------------------- |
| Ord Ur                                     | BNC input og output |
| Video Black Burst (VBB) | Input               |
| Thunderbolt 3                              | Via vært            |
| Dante                                      | Via netværk         |
| ADAT                                       | Via ADAT port       |
| MADI                                       | Via MADI port       |
| DADlink                                    | Via SFP             |

---

## 10.6 Thunderbolt 3 Grænseflade

| Parameter          | Værdi                                        |
| ------------------ | -------------------------------------------- |
| Forbindelser       | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Understøttet                                 |
| Bus udgangseffekt  | 15 W pr. havn                |

---

## 10.7 Netværksgrænseflade

| Parameter   | Værdi        |
| ----------- | ------------ |
| Standard    | 1000BASE-T   |
| Forbindelse | RJ45, 4-pair |

---

## 10.8 Udvidelse Slots

| Parameter       | Værdi                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Antal felter    | 8                                                                                                     |
| Kompatible kort | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.9 Effekt

| Parameter                                                  | Værdi                                       | Noter                          |
| ---------------------------------------------------------- | ------------------------------------------- | ------------------------------ |
| Strøm input                                                | Enkelt eller dobbelt                        | AX64-BASE-RPS har to indgange  |
| Strømforsyning                                             | Dobbelt (altid monteret) |                                |
| Indgangsspænding                                           | 90–260 V AC                                 | Nominel 100–240 V AC, 47-63 Hz |
| Strømforbindelsesled                                       | IEC 60309                                   |                                |
| Strøm sikring                                              | 1.5 A, T1AH/250 V           | Monteret i IEC-stik            |
| Maks. netvurdering                         | 120 W                                       |                                |
| Digital sektion                                            | 15 W                                        |                                |
| Ekspansionskort (maks.) | 70 W                                        |                                |
| Thunderbolt bus effekt (maks)           | 30 W                                        | 2 × 15 W                       |

---

## 10.10 Mekanisk

| Parameter       | Værdi                                             |
| --------------- | ------------------------------------------------- |
| Formular faktor | 19" rack mount, 2RU (88,9 mm)  |
| Chassisdybde    | 34.5 cm / 13.6"   |
| Kroppens bredde | 43, 5 cm / 17, 2"                                 |
| Vægt            | 5.5 kg / 12.2 lbs |

---

## 10.11 Miljø

| Parameter        | Værdi                       |
| ---------------- | --------------------------- |
| Driftstemperatur | 0–45 °C / 32–113 °F         |
| Luftfugtighed    | 20-85 %, ikke kondenserende |

---

## 10.12 Regulatorisk Overholdelse

| Standard                                                       | Anvendelsesområde                     |
| -------------------------------------------------------------- | ------------------------------------- |
| CISPR 32:2015 + AMD1:2019      | Emissioner — multimedieudstyr         |
| CISPR 35:2016                                  | Immunitet — multimedieudstyr          |
| IEC 61000-3-2:2018 + AMD1:2020 | Harmoniske aktuelle emissioner        |
| IEC 61000-3-3:2013 + AMD1:2017 | Spændingsudsving og flimmer           |
| ICES-003                                                       | Canada                                |
| AS/NZS CISPR 32                                                | Australien / New Zealand              |
| Fcc Part 15, Subpart B                                         | USA — utilsigtet radiatorer           |
| IEC 62368-1:2018                               | Sikkerhed — audio/video- og it-udstyr |
