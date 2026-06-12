---
title: "CARD-DA8 — 8-Kanal Analog DA Ausgabe"
sidebar_label: "CARD-DA8"
sidebar_position: 2
---

# CARD-DA8 — 8-Kanal Pristine DA Ausgangskarte

> **SKU:** CARD-DA8  
> \*\*Quelle: \*\* Spec Sheet CARD-DA8, Ausgabe Juni 2026

---

## Übersicht

Das CARD-DA8 verfügt über acht Kanäle zur Hochleistungskonvertierung für jedes kompatible DAD-Chassis. Alle Ausgänge sind ausgewogen und werden auf einem einzigen DB25-Stecker mit dem Standard-Tascam-Pinout ausgeliefert.

Conversion verwendet einen 32-Bit Oversampling 32-Bit Burr Brown DAC mit FPGA-basierter Filterung in 32-Bit Verarbeitungstiefe. Die Stationierung der Ausgänge erfolgt auf Relaisbasis ohne aktive Elektronik-Gain-Komponenten, wodurch ein maximaler Dynamikumfang und eine präzise Anpassung des Niveaus an jedes nachgelagerte analoge System gewährleistet sind.

Die Karte unterstützt alle PCM-Abtastrate von 44,1 kHz bis DXD (352,8/384 kHz), sowie DSD 64 und DSD 128.

---

## Technische Spezifikationen

| Parameter                                          | Wert                                                                                                           | Bedingungen / Notizen                                                |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Ausgabekanäle                                      | 8                                                                                                              | Ausgeglichen, Zeilenebene                                            |
| Dynamischer Bereich (Gewichtet) | > 128 dB                                                                                                       |                                                                      |
| THD+N (Gewichtet)               | < −115 dB / 0.00017%                                                  | Bei −3 dBFS                                                          |
| Frequenzantwort                                    | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Alle Gain Einstellungen                                              |
| Genauigkeit erhalten                               | ±0,1 dB                                                                                                        | Alle Gain Einstellungen                                              |
| Maximale Ausgabestufe                              | 0 bis +24 dBu                                                                                                  | In 0.1 dB-Schritten einstellen                       |
| Erhalte Schritte für 0 dBFS                        | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                              | Relaisbasierte 6 dB-Schritte; digitale stufenübergreifende Anpassung |
| Ausgang Impedanz                                   | < 100 Ω                                                                               |                                                                      |
| Beispielraten (PCM)             | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                      |
| Abtastrate (DSD)                | 2,8224 MHz (DSD 64), 5.6448 MHz (DSD 128)                |                                                                      |
| Verarbeite Wortlänge                               | 32-Bit                                                                                                         | FPGA-basierte Filterung                                              |
| Stromverbrauch                                     | max. 11 W                                                                                      |                                                                      |

---

## Verbindungen

| Port                 | Konnektor     | Signal                         | Notizen       |
| -------------------- | ------------- | ------------------------------ | ------------- |
| Analog-Zeilenausgabe | DB25 weiblich | 8 ch ausgeglichen, Linienlevel | Tascam-Pinout |

### DB25 Output Pinout (Tascam)

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

> **WARNUNG:** Schalten Sie das Chassis immer aus und trennen Sie das Netzkabel bevor Sie Erweiterungskarten installieren oder entfernen. Das Einlegen einer Karte in ein Power-Chassis kann die Karte und das Chassis beschädigen.

1. Schalten Sie das Chassis ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die CARD-DA8 in die Schlitzführung, etikettieren Sie seitlich nach oben, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die vordere Halterung mit der befestigten Schraube. Finger-dicht ist ausreichend.
5. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
6. DADman öffnen — die Karte erscheint automatisch als DA Ausgänge in der I/O Routingansicht.

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
