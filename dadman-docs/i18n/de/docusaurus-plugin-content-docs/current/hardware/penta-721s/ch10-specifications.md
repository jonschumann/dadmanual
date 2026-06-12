---
title: "Kapitel 10 — Technische Spezifikationen"
sidebar_label: "Ch. 10 — Spezifikationen"
sidebar_position: 11
---

# Kapitel 10 — Technische Spezifikationen

> **Produkt:** Digital Audio Denmark Penta 721S  
> **SKU:** PENTA721S-BASE  
> **Quelle:** Spec Sheet PENTA721S-BASE, Ausgabe Juni 2026

---

## 10.1 Digital-I/O

| Parameter                           | Wert                 | Bedingungen / Notizen                                      |
| ----------------------------------- | -------------------- | ---------------------------------------------------------- |
| MADI                                | 64 ch in / 64 ch aus | Bei 48 kHz; Koaxial-BNC und optisch via SFP                |
| AES3 (eingebaut) | 16 ch in / 16 ch aus | 2 × DB25 (Tascam-Pinout)                |
| Dante AoIP                          | 64 ch in / 64 ch aus | Bei 48 kHz                                                 |
| Über Erweiterungskarten             | 1 Platz              | Siehe Abschnitt 10.5 für kompatible Karten |

---

## 10.2 Unterstützte Beispielkurse

| Format        | Beispielraten                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3          | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Dante / AES67 | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Routen und Verarbeiten

| Parameter            | Wert                                       |
| -------------------- | ------------------------------------------ |
| Routing-Matrix       | 528×528                                    |
| Verarbeite Wortlänge | 28-Bit Fließpunkt                          |
| Ausgabeausrichtung   | Alle Ausgänge Zeit- und Phasenorientierung |

---

## 10.4 Synchronisation

| Quelle                                     | Notizen                 |
| ------------------------------------------ | ----------------------- |
| Wortuhr                                    | BNC Eingabe und Ausgabe |
| Video Black Burst (VBB) | Input                   |
| MADI                                       | Über MADI-Port          |
| AES3                                       | Via AES3 input          |
| Jennifer                                   | Über Netzwerk           |

---

## 10.5 Erweiterungsautomaten

| Parameter         | Wert                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| Anzahl der Slots  | 1                                                                                                     |
| Kompatible Karten | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.6 Netzwerkschnittstelle

| Parameter | Wert         |
| --------- | ------------ |
| Standard  | 1000Basis-T  |
| Konnektor | RJ45, 4-pair |

---

## 10,7 Stärke

| Parameter                | Wert        | Notizen                       |
| ------------------------ | ----------- | ----------------------------- |
| Eingangsspannung         | 90–260 V AC | Nenner 100–240 V AC, 47–63 Hz |
| Maximaler Stromverbrauch | 45 W        |                               |

---

## 10.8 Mechanisch

| Parameter     | Wert                                              |
| ------------- | ------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2RU (88,9 mm) |
| Chassis Tiefe | 32 cm / 12.6"                     |
| Körperbreite  | 43,5 cm / 17.2"                   |
| Gewicht       | 3.3 kg / 7.3 lbs  |

---

## 10.9 Umwelt

| Parameter          | Wert                     |
| ------------------ | ------------------------ |
| Betriebstemperatur | 0–45 °C / 32–113 °F      |
| Feuchtigkeit       | 20–85%, nicht verdichtet |

---

## 10.10 Vorschriftenkonformität

| Standard                                                                                                                                  | Bereich                            |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013 | Sicherheit — IT-Ausrüstung         |
| CISPR 32                                                                                                                                  | Emissionen — Multimedia-Ausrüstung |
| CISPR 35                                                                                                                                  | Immunität — Multimedia-Ausrüstung  |
| FCC Teil 15, Teil B                                                                                                                       | USA — unbeabsichtigte Heizkörper   |
| ICES-003                                                                                                                                  | Kanada                             |

---

## Querverweise

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanische Zeichnungen](./appc-mechanical-drawings)
