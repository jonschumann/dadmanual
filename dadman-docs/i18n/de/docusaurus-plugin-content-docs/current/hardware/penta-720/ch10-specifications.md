---
title: "Kapitel 10 — Technische Spezifikationen"
sidebar_label: "Ch. 10 — Spezifikationen"
sidebar_position: 11
---

# Kapitel 10 — Technische Spezifikationen

> **Produkt:** Digital Audio Denmark Penta 720  
> **SKU:** PENTA720-BASE  
> **Quelle:** Spec Sheet PENTA720-BASE, Ausgabe Juni 2026

---

## 10.1 Digital-I/O

| Parameter                           | Wert                 | Bedingungen / Notizen                                      |
| ----------------------------------- | -------------------- | ---------------------------------------------------------- |
| MADI                                | 64 ch in / 64 ch aus | Bei 48 kHz; Koaxial-BNC und optisch via SFP                |
| AES3 (eingebaut) | 16 ch in / 16 ch aus | 2 × DB25 (Tascam-Pinout)                |
| Über Erweiterungskarten             | Bis zu 8 Karten      | Siehe Abschnitt 10.5 für kompatible Karten |

---

## 10.2 Unterstützte Beispielkurse

| Format             | Beispielraten                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| MADI               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3               | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Erweiterungskarten | Abhängig vom Kartentyp                                                                                         |

---

## 10.3 Routen und Verarbeiten

| Parameter            | Wert                                       |
| -------------------- | ------------------------------------------ |
| Routing-Matrix       | 1,424×1,424                                |
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

---

## 10.5 Erweiterungsautomaten

| Parameter         | Wert                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| Anzahl der Slots  | 8                                                                                                     |
| Kompatible Karten | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10,6 Kraft

| Parameter                | Wert        | Notizen                       |
| ------------------------ | ----------- | ----------------------------- |
| Eingangsspannung         | 90–260 V AC | Nenner 100–240 V AC, 47–63 Hz |
| Maximaler Stromverbrauch | 90 W        |                               |

---

## 10.7 Mechanisch

| Parameter     | Wert                                              |
| ------------- | ------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2RU (88,9 mm) |
| Chassis Tiefe | 35 cm / 13.8"                     |
| Körperbreite  | 43,5 cm / 17.2"                   |
| Gewicht       | 5.0 kg / 11.0 lbs |

---

## 10.8 Umwelt

| Parameter          | Wert                     |
| ------------------ | ------------------------ |
| Betriebstemperatur | 0–45 °C / 32–113 °F      |
| Feuchtigkeit       | 20–85%, nicht verdichtet |

---

## 10.9 Vorschriftenkonformität

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
