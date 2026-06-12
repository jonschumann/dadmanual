---
title: "Kapitel 10 — Technische Spezifikationen"
sidebar_label: "Ch. 10 — Spezifikationen"
sidebar_position: 11
---

# Kapitel 10 — Technische Spezifikationen

> **Produkt:** Digital Audio Denmark AX64  
> **SKU:** AX64-BASE / AX64-BASE-RPS  
> **Quelle:** Spec Sheet AX64-BASE, Ausgabe Juni 2026

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
| Über Erweiterungskarten              | Bis zu 1,024×1,024 ch  | Optionale Karten      |

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

| Parameter                 | Wert                                                  |
| ------------------------- | ----------------------------------------------------- |
| Routing-Matrix            | 1,872×1,872                                           |
| Summen-Prozessor          | 512×64 Kanäle                                         |
| SPQ-Equalizer             | 1.024 Filter                          |
| Verarbeite Wortlänge      | 28-Bit Fließpunkt                                     |
| Interne Systemverzögerung | 7 Proben (einstellbar 3–31 Proben) |
| Ausgabeausrichtung        | Alle Ausgänge Zeit- und Phasenorientierung            |

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

## 10.8 Erweiterungsautomaten

| Parameter         | Wert                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| Anzahl der Slots  | 8                                                                                                     |
| Kompatible Karten | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10,9 Stärke

| Parameter                                        | Wert                                       | Notizen                         |
| ------------------------------------------------ | ------------------------------------------ | ------------------------------- |
| Netzeingänge                                     | Ein- oder Zweibettzimmer                   | AX64-BASE-RPS hat zwei Eingänge |
| Stromversorgung                                  | Doppelt (immer passend) |                                 |
| Eingangsspannung                                 | 90–260 V AC                                | Nenner 100–240 V AC, 47–63 Hz   |
| Netzwerk-Connector                               | IEC 60309                                  |                                 |
| Netz-Sicherung                                   | 1.5 A, T1AH/250 V          | Im IEC-Anschluss eingehängt     |
| Max. Netzbewertung               | 120 W                                      |                                 |
| Digitaler Abschnitt                              | 15 W                                       |                                 |
| Erweiterungskarten (max)      | 70 W                                       |                                 |
| Donnerblitz-Busleistung (max) | 30 W                                       | 2 × 15 W                        |

---

## 10.10 Mechanisch

| Parameter     | Wert                                              |
| ------------- | ------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2RU (88,9 mm) |
| Chassis Tiefe | 34.5 cm / 13.6"   |
| Körperbreite  | 43,5 cm / 17.2"                   |
| Gewicht       | 5.5 kg / 12.2 lbs |

---

## 10.11 Umwelt

| Parameter          | Wert                     |
| ------------------ | ------------------------ |
| Betriebstemperatur | 0–45 °C / 32–113 °F      |
| Feuchtigkeit       | 20–85%, nicht verdichtet |

---

## 10.12 Vorschrifteneinhaltung

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
