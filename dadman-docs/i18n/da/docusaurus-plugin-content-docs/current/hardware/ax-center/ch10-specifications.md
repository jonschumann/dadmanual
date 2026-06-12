---
title: "Kapitel 10 — Tekniske Specifikationer"
sidebar_label: "Ch. 10 — Specifikationer"
sidebar_position: 11
---

# Kapitel 10 — Tekniske Specifikationer

> **Produkt:** Digital Audio Denmark AX Center  
> **SKU:** AXCNTR-BASE  
> **Kilde:** Spec Sheet AXCNTR-BASE, Udgave Juni 2026

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
| Via ekspansionskort                  | Yderligere I/O         | 2 udvidelsesfelter   |

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
| Routing matrix      | 1,006×1,112                         |
| Behandler ordlængde | 28-bit flydende punkt               |
| Justering af output | Alle udgange tids- og fase-justeret |

---

## 10.4 DADlink

| Parameter | Værdi                 |
| --------- | --------------------- |
| Formatér  | 28-bit flydende punkt |
| Latens    | 0 prøver              |

---

## 10.5 Indbygget Analog I/O

### Udgange Til Hovedtelefon

| Parameter      | Værdi                                | Betingelser / Noter                |
| -------------- | ------------------------------------ | ---------------------------------- |
| Outputs        | 2 × stereo hovedtelefon              | Front, 6.35 mm TRS |
| Niveau kontrol | Uafhængig pr. output | Via frontpanel                     |

### Overvåg Output

| Parameter      | Værdi                 | Betingelser / Noter       |
| -------------- | --------------------- | ------------------------- |
| Outputs        | Stereo monitor output | Bageste panel             |
| Niveau kontrol | Ja                    | Via frontpanelets encoder |

### Mikrofon / Instrument Input

| Parameter     | Værdi                         | Betingelser / Noter         |
| ------------- | ----------------------------- | --------------------------- |
| Inputs        | 1 × mikrofon + 1 × instrument | Frontpanel kombinationsstik |
| Phantom strøm | 48 V                          | Switchable                  |

---

## 10.6 Synchronisation

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

## 10.7 Thunderbolt 3 Grænseflade

| Parameter          | Værdi                                        |
| ------------------ | -------------------------------------------- |
| Forbindelser       | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Understøttet                                 |
| Bus udgangseffekt  | 15 W pr. havn                |

---

## 10.8 Netværksgrænseflade

| Parameter   | Værdi        |
| ----------- | ------------ |
| Standard    | 1000BASE-T   |
| Forbindelse | RJ45, 4-pair |

---

## 10.9 Udvidelse Slots

| Parameter       | Værdi                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Antal felter    | 2                                                                                                     |
| Kompatible kort | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.10 Effekt

| Parameter                          | Værdi       | Noter                          |
| ---------------------------------- | ----------- | ------------------------------ |
| Indgangsspænding                   | 90–260 V AC | Nominel 100–240 V AC, 47-63 Hz |
| Maks. strømforbrug | 90 W        |                                |

---

## 10.11 Mekanisk

| Parameter       | Værdi                                            |
| --------------- | ------------------------------------------------ |
| Formular faktor | 19" rack mount, 1RU (44,5 mm) |
| Chassisdybde    | 32 cm / 12.6"                    |
| Kroppens bredde | 43, 5 cm / 17, 2"                                |
| Vægt            | 3.2 kg / 7.1 lbs |

---

## 10.12 Miljø

| Parameter        | Værdi                       |
| ---------------- | --------------------------- |
| Driftstemperatur | 0–45 °C / 32–113 °F         |
| Luftfugtighed    | 20-85 %, ikke kondenserende |

---

## 10.13 Regulatorisk Overholdelse

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
