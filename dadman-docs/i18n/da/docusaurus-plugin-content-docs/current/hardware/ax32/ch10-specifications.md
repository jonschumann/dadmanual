---
title: "Kapitel 10 — Tekniske Specifikationer"
sidebar_label: "Ch. 10 — Specifikationer"
sidebar_position: 11
---

# Kapitel 10 — Tekniske Specifikationer

> **Produkt:** Digital Audio Denmark AX32  
> **SKU:** AX32-BASE2  
> **Kilde:** Spec Sheet AX32-BASE, Issue June 2026

---

## 10.1 Digital I/O

| Parameter                                                | Værdi                 | Betingelser / Noter                         |
| -------------------------------------------------------- | --------------------- | ------------------------------------------- |
| MADI                                                     | 64 lm i / 64 lm ud    | Ved 48 kHz; koaksial BNC                    |
| AES3 (indbygget)                      | 16 lm ind / 16 lm ud  | 2 × DB25 (Tascam pinout) |
| DADlink (via valgfri MOD-MADI-DADLNK) | Op til 256×256 ch     | Ved 48 kHz; via SFP                         |
| Via ekspansionskort                                      | Op til 1,024×1,024 ch | Valgfrie kort                               |

---

## 10.2 Understøttede Prøvepriser

| Formatér                                             | Prøve Satser                                                                                                   |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                                                 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                                                 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink                                              | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante (via valgfri MOD-DANTE-BK3) | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Ekspansionskort                                      | Afhængigt af korttype                                                                                          |

---

## 10.3 Routing and Processing

| Parameter                | Værdi                                                |
| ------------------------ | ---------------------------------------------------- |
| Routing matrix           | 1,424×1,424                                          |
| Sammenfattende processor | 256×32 kanaler                                       |
| Behandler ordlængde      | 28-bit flydende punkt                                |
| Intern systemforsinkelse | 7 prøver (justerbare 3-31 prøver) |
| Justering af output      | Alle udgange tids- og fase-justeret                  |

---

## 10.4 DADlink

| Parameter | Værdi                               |
| --------- | ----------------------------------- |
| Formatér  | 28-bit flydende punkt               |
| Latens    | 0 prøver                            |
| Kræver    | Valgfri MOD-MADI-DADLNK modul + SFP |

---

## 10.5 Synchronisation

| Kilde                                      | Noter                             |
| ------------------------------------------ | --------------------------------- |
| Ord Ur                                     | BNC input og output               |
| Video Black Burst (VBB) | Input                             |
| AES11                                      | Input                             |
| MADI                                       | Via MADI port                     |
| AES3                                       | Via indbygget AES3 input          |
| ADAT                                       | Via valgfrit kort                 |
| Dante                                      | Via valgfri MOD-DANTE-BK3 modul   |
| DADlink                                    | Via valgfri MOD-MADI-DADLNK modul |

---

## 10.6 Netværksgrænseflade

| Parameter   | Værdi                                                   |
| ----------- | ------------------------------------------------------- |
| Standard    | 1000BASE-T                                              |
| Forbindelse | RJ45, 4-pair                                            |
| Formål      | DADman kontrol; valgfri netværkslyd via ekspansionskort |

---

## 10.7 Udvidelse Slots

| Parameter       | Værdi                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Antal felter    | 8                                                                                                     |
| Kompatible kort | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.8 Valgfrie Moduler

| Modul           | Funktion                                      |
| --------------- | --------------------------------------------- |
| MOD-MADI-DADLNK | Dobbelt MADI og DADlink via SFP               |
| MOD-DANTE-BK3   | 64-ch Dante netværkslyd                       |
| MOD-SFP-1300-LZ | DADlink SFP                                   |
| MOD-SFP-1300-LD | MADI SFP (enkelttilstande) |
| MOD-SFP-COAX    | MADI SFP (koaksial)        |

---

## 10.9 Effekt

| Parameter                                                  | Værdi                                       | Noter                                       |
| ---------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Strøm input                                                | Enkelt                                      | AX32-RPS tilvalg tilføjer overflødigt input |
| Strømforsyning                                             | Dobbelt (altid monteret) |                                             |
| Indgangsspænding                                           | 90–260 V AC                                 | Nominel 100–240 V AC, 47-63 Hz              |
| Strømforbindelsesled                                       | IEC 60309                                   |                                             |
| Strøm sikring                                              | 1.0 A, T1AH/250 V           | Monteret i IEC-stik                         |
| Maks. netvurdering                         | 90 W                                        |                                             |
| Digital sektion                                            | 15 W                                        |                                             |
| Ekspansionskort (maks.) | 65 W                                        |                                             |

---

## 10.10 Mekanisk

| Parameter       | Værdi                                             |
| --------------- | ------------------------------------------------- |
| Formular faktor | 19" rack mount, 2RU (88,9 mm)  |
| Chassisdybde    | 35 cm / 13.8"                     |
| Kroppens bredde | 43, 5 cm / 17, 2"                                 |
| Vægt            | 5.0 kg / 11.0 lbs |
| Køling          | 2 × super støjsvage interne ventilatorer          |

---

## 10.11 Miljø

| Parameter        | Værdi                       |
| ---------------- | --------------------------- |
| Driftstemperatur | 0–45 °C / 32–113 °F         |
| Luftfugtighed    | 20-85 %, ikke kondenserende |

---

## 10.12 Regulatorisk Overholdelse

| Standard                        | Anvendelsesområde                                   |
| ------------------------------- | --------------------------------------------------- |
| 55103-1 DA                      | Emissioner — audio/video- og underholdningsudstyr   |
| 55103-2 DA                      | Immunitet — udstyr til audio/video og underholdning |
| Fcc Part 15, Subpart B          | USA — utilsigtet radiatorer                         |
| 60950-1:2006 DA | Sikkerhed — IT-udstyr                               |

---

## Krydsreferencer

- [App. A — Forbindelsesstifter](./appa-connector-pinouts)
- [App. C — Mekaniske Tegninger](./appc-mechanical-drawings)
