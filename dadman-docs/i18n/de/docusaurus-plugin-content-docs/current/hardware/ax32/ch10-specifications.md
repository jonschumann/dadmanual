---
title: "Kapitel 10 — Technische Spezifikationen"
sidebar_label: "Ch. 10 — Spezifikationen"
sidebar_position: 11
---

# Kapitel 10 — Technische Spezifikationen

> **Produkt:** Digital Audio Denmark AX32  
> **SKU:** AX32-BASE2  
> **Source:** Spec Sheet AX32-BASE, Ausgabe Juni 2026

---

## 10.1 Digital-I/O

| Parameter                                                   | Wert                  | Bedingungen / Notizen                       |
| ----------------------------------------------------------- | --------------------- | ------------------------------------------- |
| MADI                                                        | 64 ch in / 64 ch aus  | Bei 48 kHz; Koaxial-BNC                     |
| AES3 (eingebaut)                         | 16 ch in / 16 ch aus  | 2 × DB25 (Tascam-Pinout) |
| DADlink (über optionale MOD-MADI-DADLNK) | Bis zu 256×256 ch     | Bei 48 kHz; via SFP                         |
| Über Erweiterungskarten                                     | Bis zu 1,024×1,024 ch | Optionale Karten                            |

---

## 10.2 Unterstützte Beispielkurse

| Format                                                   | Beispielraten                                                                                                  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                                                     | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                                                     | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink                                                  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante (über optionales MOD-DANTE-BK3) | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Erweiterungskarten                                       | Abhängig vom Kartentyp                                                                                         |

---

## 10.3 Routen und Verarbeiten

| Parameter                 | Wert                                                  |
| ------------------------- | ----------------------------------------------------- |
| Routing-Matrix            | 1,424×1,424                                           |
| Summen-Prozessor          | 256×32 Kanäle                                         |
| Verarbeite Wortlänge      | 28-Bit Fließpunkt                                     |
| Interne Systemverzögerung | 7 Proben (einstellbar 3–31 Proben) |
| Ausgabeausrichtung        | Alle Ausgänge Zeit- und Phasenorientierung            |

---

## 10.4 DADlink

| Parameter | Wert                                   |
| --------- | -------------------------------------- |
| Format    | 28-Bit Fließpunkt                      |
| Latenz    | 0 Muster                               |
| Benötigt  | Optionales MOD-MADI-DADLNK Modul + SFP |

---

## 10.5 Synchronisation

| Quelle                                     | Notizen                               |
| ------------------------------------------ | ------------------------------------- |
| Wortuhr                                    | BNC Eingabe und Ausgabe               |
| Video Black Burst (VBB) | Input                                 |
| AES11                                      | Input                                 |
| MADI                                       | Über MADI-Port                        |
| AES3                                       | Über integrierte AES3-Eingabe         |
| ADAT                                       | Über optionale Karte                  |
| Jennifer                                   | Über optionales MOD-DANTE-BK3-Modul   |
| DADlink                                    | Über optionales MOD-MADI-DADLNK Modul |

---

## 10.6 Netzwerkschnittstelle

| Parameter | Wert                                                               |
| --------- | ------------------------------------------------------------------ |
| Standard  | 1000Basis-T                                                        |
| Konnektor | RJ45, 4-pair                                                       |
| Zweck     | DADman Steuerung; optionale Netzwerk-Audio über Erweiterungskarten |

---

## 10.7 Erweiterungsautomaten

| Parameter         | Wert                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| Anzahl der Slots  | 8                                                                                                     |
| Kompatible Karten | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.8 Optionale Module

| Modul           | Funktion                                  |
| --------------- | ----------------------------------------- |
| MOD-MADI-DADLNK | Dual MADI und DADlink via SFP             |
| MOD-DANTE-BK3   | 64 ch Dante Netzwerk-Audio                |
| MOD-SFP-1300-LZ | DADlink SFP                               |
| MOD-SFP-1300-LD | MADI SFP (Einzelmodus) |
| MOD-SFP-COAX    | MADI SFP (Koaxial)     |

---

## 10,9 Stärke

| Parameter                                   | Wert                                       | Notizen                                        |
| ------------------------------------------- | ------------------------------------------ | ---------------------------------------------- |
| Netzeingänge                                | Einzeln                                    | AX32-RPS Option fügt redundante Eingaben hinzu |
| Stromversorgung                             | Doppelt (immer passend) |                                                |
| Eingangsspannung                            | 90–260 V AC                                | Nenner 100–240 V AC, 47–63 Hz                  |
| Netzwerk-Connector                          | IEC 60309                                  |                                                |
| Netz-Sicherung                              | 1.0 A, T1AH/250 V          | Im IEC-Anschluss eingehängt                    |
| Max. Netzbewertung          | 90 W                                       |                                                |
| Digitaler Abschnitt                         | 15 W                                       |                                                |
| Erweiterungskarten (max) | 65 W                                       |                                                |

---

## 10.10 Mechanisch

| Parameter     | Wert                                              |
| ------------- | ------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2RU (88,9 mm) |
| Chassis Tiefe | 35 cm / 13.8"                     |
| Körperbreite  | 43,5 cm / 17.2"                   |
| Gewicht       | 5.0 kg / 11.0 lbs |
| Kühlung       | 2 × extrem geräuscharme interne Ventilatoren      |

---

## 10.11 Umwelt

| Parameter          | Wert                     |
| ------------------ | ------------------------ |
| Betriebstemperatur | 0–45 °C / 32–113 °F      |
| Feuchtigkeit       | 20–85%, nicht verdichtet |

---

## 10.12 Vorschrifteneinhaltung

| Standard                        | Bereich                                              |
| ------------------------------- | ---------------------------------------------------- |
| DE 55103-1                      | Emissionen — Audio/Video- und Unterhaltungsgeräte    |
| DE 55103-2                      | Immunität — Audio/Video- und Unterhaltungsausrüstung |
| FCC Teil 15, Teil B             | USA — unbeabsichtigte Heizkörper                     |
| EN 60950-1:2006 | Sicherheit — IT-Ausrüstung                           |

---

## Querverweise

- [App. A — Connector Pinouts](./appa-connector-pinouts)
- [App. C — Mechanische Zeichnungen](./appc-mechanical-drawings)
