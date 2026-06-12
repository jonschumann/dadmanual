---
title: "Kapitel 10 — Tekniske Specifikationer"
sidebar_label: "Ch. 10 — Specifikationer"
sidebar_position: 11
---

# Kapitel 10 — Tekniske Specifikationer

> **Produkt:** Digital Audio Denmark Core 256  
> \*\*Varenummer: \*\* CORE256-BASE  
> **Kilde:** Spec Sheet CORE256-BASE, Udgave Juni 2026

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

| Parameter           | Værdi                               |
| ------------------- | ----------------------------------- |
| Routing matrix      | 848×848                             |
| Behandler ordlængde | 28-bit flydende punkt               |
| Justering af output | Alle udgange tids- og fase-justeret |

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

## 10.8 Effekt

| Parameter                          | Værdi   | Noter                             |
| ---------------------------------- | ------- | --------------------------------- |
| Indgangsspænding                   | 12 V DC | Ekstern strømforsyning inkluderet |
| Maks. strømforbrug | 60 W    |                                   |

---

## 10.9 Mekanisk

| Parameter       | Værdi                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| Formular faktor | Desktop / 1RU rackmount (med valgfri C256-2MOUNT-BRACKET) |
| Width           | 21.1 cm / 8.3"                               |
| Dybde           | 23.1 cm / 9.1"                               |
| Vægt            | 1.3 kg / 2.9 lbs                             |

---

## 10.10 Miljø

| Parameter        | Værdi                       |
| ---------------- | --------------------------- |
| Driftstemperatur | 0–45 °C / 32–113 °F         |
| Luftfugtighed    | 20-85 %, ikke kondenserende |

---

## 10.11 Regulatorisk Overholdelse

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

---

## Krydsreferencer

- [App. A — Forbindelsesstifter](./appa-connector-pinouts)
- [App. C — Mekaniske Tegninger](./appc-mechanical-drawings)
