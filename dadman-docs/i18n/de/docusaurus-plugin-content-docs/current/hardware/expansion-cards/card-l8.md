---
title: "CARD-L8 — 8-Kanal-Analog-AD-Zeileneingabe"
sidebar_label: "KARTE L8"
sidebar_position: 3
---

# CARD-L8 — 8-Kanal Pristine AD Line Eingang Karte

> **SKU:** KARTE L8  
> \*\*Quelle: \*\* Spec Sheet CARD-L8, Ausgabe Juni 2026

---

## Übersicht

Die CARD-L8 verfügt über acht Kanäle für hochperformante analoge und digitale Konvertierung auf Leitungsebene für jedes kompatible DAD-Chassis. Alle Eingänge sind ausgewogen und werden auf einem einzigen DB25-Steckverbinder mit dem Standard-Tascam-Pinout geliefert.

Conversion verwendet einen Doppel-5-Bit-Delta-Sigma-Modulator mit FPGA-basierter Filterung in 32-Bit-Verarbeitungstiefe. Die Input-Gain-Inszenierung basiert auf Relais ohne aktive elektronische Komponenten, die über den gesamten Gain-Bereich hinweg das beste Rauschen und die beste Linearität bieten.

Die Karte unterstützt alle PCM-Abtastrate von 44,1 kHz bis DXD (352,8/384 kHz), sowie DSD 64 und DSD 128.

---

## Technische Spezifikationen

| Parameter                                          | Wert                                                                                                           | Bedingungen / Notizen                                                |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Eingabekanäle                                      | 8                                                                                                              | Ausgeglichen, Zeilenebene                                            |
| Dynamischer Bereich (Gewichtet) | > 123 dB                                                                                                       |                                                                      |
| THD+N (Gewichtet)               | < −117 dB / 0.00014%                                                  | Bei −3 dBFS                                                          |
| Frequenzantwort                                    | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Alle Gain Einstellungen                                              |
| Genauigkeit erhalten                               | ±0,1 dB                                                                                                        | Alle Gain Einstellungen                                              |
| Maximale Eingangsstufe                             | −9 bis +30 dBu                                                                                                 | In 0.1 dB-Schritten einstellen                       |
| Erhalte Schritte für 0 dBFS                        | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                              | Relaisbasierte 3 dB-Schritte; digitale stufenübergreifende Anpassung |
| Input-Impedanz                                     | > 10 kg                                                                                                        |                                                                      |
| CMRR                                               | > 120 dB                                                                                                       | Bei 1 kHz                                                            |
| Beispielraten (PCM)             | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                      |
| Abtastrate (DSD)                | 2,8224 MHz (DSD 64), 5.6448 MHz (DSD 128)                |                                                                      |
| Beispielauflösung                                  | 5-bit sigma-delta bei 5.645 oder 6.144 MHz; 24-bit PCM-Ausgang                 |                                                                      |
| Verarbeite Wortlänge                               | 32-Bit                                                                                                         | FPGA-basierte Filterung                                              |
| Stromverbrauch                                     | max. 9 W                                                                                       |                                                                      |

---

## Verbindungen

| Port                 | Konnektor     | Signal                         | Notizen                                    |
| -------------------- | ------------- | ------------------------------ | ------------------------------------------ |
| Analog-Zeileneingabe | DB25 weiblich | 8 ch ausgeglichen, Linienlevel | Tascam-Pinout; −9 bis +30 dBu, > 10 k |

### DB25 Eingabeausschnitt (Tascam)

| DB25 Pin | Signal |
| -------- | ------ |
| 1        | Ch 1 + |
| 14       | Ch 1 − |
| 2        | Ch 2 + |
| 15       | Ch 2 − |
| 3        | Ch 3 + |
| 16       | Ch 3 − |
| 4        | Ch 4 + |
| 17       | Ch 4 − |
| 5        | Ch 5 + |
| 18       | Ch 5 − |
| 6        | Ch 6 + |
| 19       | Ch 6 − |
| 7        | Ch 7 + |
| 20       | Ch 7 − |
| 8        | Ch 8 + |
| 21       | Ch 8 − |
| 25       | Boden  |

---

## Installation

> **WARNUNG:** Schalten Sie das Chassis immer aus und trennen Sie das Netzkabel bevor Sie Erweiterungskarten installieren oder entfernen.

1. Schalten Sie das Chassis ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die CARD-L8 in die Schlitzführung, etikettieren Sie seitlich nach oben, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die vordere Halterung mit der befestigten Schraube.
5. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
6. DADman öffnen — die Karte erscheint automatisch als Zeileneingaben in der I/O-Routingansicht.

---

## Kompatibilität

| Chassis    | Kompatibel                      |
| ---------- | ------------------------------- |
| AX64       | Ja                              |
| AX-Mitte   | Ja                              |
| Penta 720  | Ja                              |
| Penta 721S | Ja                              |
| AX32       | Ja                              |
| Kern 256   | Nein — keine Erweiterungs-Slots |
| MM         | Nein — keine Erweiterungs-Slots |
