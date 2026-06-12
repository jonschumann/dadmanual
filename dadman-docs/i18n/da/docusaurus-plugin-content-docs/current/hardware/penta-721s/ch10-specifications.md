---
title: "Kapitel 10 — Tekniske Specifikationer"
sidebar_label: "Ch. 10 — Specifikationer"
sidebar_position: 11
---

# Kapitel 10 — Tekniske Specifikationer

> **Produkt:** Digital Audio Denmark Penta 721S  
> \*\*Varenummer: \*\* PENTA721S-BASE  
> **Kilde:** Spec Sheet PENTA721S-BASE, Udgave Juni 2026

---

## 10.1 Digital I/O

| Parameter                           | Værdi                | Betingelser / Noter                                |
| ----------------------------------- | -------------------- | -------------------------------------------------- |
| MADI                                | 64 lm i / 64 lm ud   | Ved 48 kHz; koaksial BNC og optisk via SFP         |
| AES3 (indbygget) | 16 lm ind / 16 lm ud | 2 × DB25 (Tascam pinout)        |
| Dante AoIP                          | 64 lm i / 64 lm ud   | Ved 48 kHz                                         |
| Via ekspansionskort                 | 1 plads              | Se afsnit 10.5 for kompatible kort |

---

## 10.2 Understøttede Prøvepriser

| Formatér      | Prøve Satser                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3          | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Dante / AES67 | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Routing and Processing

| Parameter           | Værdi                               |
| ------------------- | ----------------------------------- |
| Routing matrix      | 528×528                             |
| Behandler ordlængde | 28-bit flydende punkt               |
| Justering af output | Alle udgange tids- og fase-justeret |

---

## 10.4 Synchronisation

| Kilde                                      | Noter               |
| ------------------------------------------ | ------------------- |
| Ord Ur                                     | BNC input og output |
| Video Black Burst (VBB) | Input               |
| MADI                                       | Via MADI port       |
| AES3                                       | Via AES3 input      |
| Dante                                      | Via netværk         |

---

## 10.5 Udvidelse Slots

| Parameter       | Værdi                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Antal felter    | 1                                                                                                     |
| Kompatible kort | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.6 Netværksgrænseflade

| Parameter   | Værdi        |
| ----------- | ------------ |
| Standard    | 1000BASE-T   |
| Forbindelse | RJ45, 4-pair |

---

## 10.7 Effekt

| Parameter                          | Værdi       | Noter                          |
| ---------------------------------- | ----------- | ------------------------------ |
| Indgangsspænding                   | 90–260 V AC | Nominel 100–240 V AC, 47-63 Hz |
| Maks. strømforbrug | 45 W        |                                |

---

## 10.8 Mekanisk

| Parameter       | Værdi                                            |
| --------------- | ------------------------------------------------ |
| Formular faktor | 19" rack mount, 2RU (88,9 mm) |
| Chassisdybde    | 32 cm / 12.6"                    |
| Kroppens bredde | 43, 5 cm / 17, 2"                                |
| Vægt            | 3.3 kg / 7.3 lbs |

---

## 10.9 Miljø

| Parameter        | Værdi                       |
| ---------------- | --------------------------- |
| Driftstemperatur | 0–45 °C / 32–113 °F         |
| Luftfugtighed    | 20-85 %, ikke kondenserende |

---

## 10.10 Regulatorisk Overholdelse

| Standard                                                                                                                                  | Anvendelsesområde             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013 | Sikkerhed — IT-udstyr         |
| CISPR 32                                                                                                                                  | Emissioner — multimedieudstyr |
| CISPR 35                                                                                                                                  | Immunitet — multimedieudstyr  |
| Fcc Part 15, Subpart B                                                                                                                    | USA — utilsigtet radiatorer   |
| ICES-003                                                                                                                                  | Canada                        |

---

## Krydsreferencer

- [App. A — Forbindelsesstifter](./appa-connector-pinouts)
- [App. C — Mekaniske Tegninger](./appc-mechanical-drawings)
