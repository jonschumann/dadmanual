---
title: "Kapitel 10 — Technische Spezifikationen"
sidebar_label: "Ch. 10 — Spezifikationen"
sidebar_position: 11
---

# Kapitel 10 — Technische Spezifikationen

> **Produkt:** Digital Audio Denmark Core 256  
> **SKU:** CORE256-BASE  
> **Source:** Spec Sheet CORE256-BASE, Ausgabe Juni 2026

---

## 10.1 Digital-I/O

| Parameter                            | Wert                   | Bedingungen / Notizen |
| ------------------------------------ | ---------------------- | --------------------- |
| Donnerblitz 3                        | 256 ch in / 256 ch aus | Bei 48 kHz und 96 kHz |
| Dante AoIP                           | 256 ch in / 256 ch aus | Bei 48 kHz            |
| Dante AoIP                           | 128 ch in / 128 ch aus | Bei 96 kHz            |
| MADI                                 | 64 ch in / 64 ch aus   | Bei 48 kHz            |
| ADAT / SMUX                          | 16 ch in / 16 ch aus   |                       |
| S/PDIF                               | 2 ch input             | Über ADAT-Anschluss   |
| DADlink (via SFP) | Bis zu 256×256 ch      | Bei 48 kHz            |

---

## 10.2 Unterstützte Beispielkurse

| Format        | Beispielraten                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Donnerblitz 3 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67 | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| ADAT / SMUX   | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| S/PDIF        | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Routen und Verarbeiten

| Parameter            | Wert                                       |
| -------------------- | ------------------------------------------ |
| Routing-Matrix       | 848×848                                    |
| Verarbeite Wortlänge | 28-Bit Fließpunkt                          |
| Ausgabeausrichtung   | Alle Ausgänge Zeit- und Phasenorientierung |

---

## 10.4 DADlink

| Parameter | Wert              |
| --------- | ----------------- |
| Format    | 28-Bit Fließpunkt |
| Latenz    | 0 Muster          |

---

## 10.5 Synchronisation

| Quelle                                     | Notizen                 |
| ------------------------------------------ | ----------------------- |
| Wortuhr                                    | BNC Eingabe und Ausgabe |
| Video Black Burst (VBB) | Input                   |
| Donnerblitz 3                              | Über Host               |
| Jennifer                                   | Über Netzwerk           |
| ADAT                                       | Über ADAT-Port          |
| MADI                                       | Über MADI-Port          |
| DADlink                                    | Über SFP                |

---

## 10.6 Thunderbolt 3 Schnittstelle

| Parameter          | Wert                                         |
| ------------------ | -------------------------------------------- |
| Konnektoren        | 2 × USB-C (Thunderbolt 3) |
| Daisy-chain / link | Unterstützt                                  |
| Ausgangsleistung   | 15 W pro Port                                |

---

## 10.7 Netzwerk-Schnittstelle

| Parameter | Wert         |
| --------- | ------------ |
| Standard  | 1000Basis-T  |
| Konnektor | RJ45, 4-pair |

---

## 10,8 Kraft

| Parameter                | Wert    | Notizen                     |
| ------------------------ | ------- | --------------------------- |
| Eingangsspannung         | 12 V DC | Externes Netzteil enthalten |
| Maximaler Stromverbrauch | 60 W    |                             |

---

## 10.9 Mechanisch

| Parameter  | Wert                                                                            |
| ---------- | ------------------------------------------------------------------------------- |
| Formfaktor | Desktop / 1RU Rackmount (mit optionaler C256-2MOUNT-BRACKET) |
| Width      | 21.1 cm / 8.3"                                  |
| Tiefe      | 23.1 cm / 9.1"                                  |
| Gewicht    | 1.3 kg / 2.9 lbs                                |

---

## 10.10 Umwelt

| Parameter          | Wert                     |
| ------------------ | ------------------------ |
| Betriebstemperatur | 0–45 °C / 32–113 °F      |
| Feuchtigkeit       | 20–85%, nicht verdichtet |

---

## 10.11 Vorschrifteneinhaltung

| Standard                                                       | Bereich                                    |
| -------------------------------------------------------------- | ------------------------------------------ |
| CISPR 32:2015 + AMD1:2019      | Emissionen — Multimedia-Ausrüstung         |
| CISPR 35:2016                                  | Immunität — Multimedia-Ausrüstung          |
| IEC 61000-3-2:2018 + AMD1:2020 | Harmonische aktuelle Emissionen            |
| IEC 61000-3-3:2013 + AMD1:2017 | Spannungsschwankungen und Flicker          |
| ICES-003                                                       | Kanada                                     |
| AS/NZS-ZISPR 32                                                | Australien / Neuseeland                    |
| FCC Teil 15, Teil B                                            | USA — unbeabsichtigte Heizkörper           |
| IEC 62368-1:2018                               | Sicherheit — Audio/Video und IT-Ausrüstung |

---

## Querverweise

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanische Zeichnungen](./appc-mechanical-drawings)
