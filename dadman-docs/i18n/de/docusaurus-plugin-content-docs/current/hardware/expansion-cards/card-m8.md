---
title: "CARD-M8 — 8-Kanal-Analog AD Mic/Line Eingang"
sidebar_label: "Karton M8"
sidebar_position: 4
---

# CARD-M8 — 8-Kanal Pristine AD Mic/Line Eingangskarte

> **SKU:** CARD-M8  
> \*\*Quelle: \*\* Spec Sheet CARD-M8, Ausgabe Juni 2026

---

## Übersicht

Der CARD-M8 verfügt über acht Kanäle mit leistungsstarker analoger und digitaler Konvertierung mit schaltbarem Mikrofon und Leitungsstufeneingang für jedes kompatible DAD-Chassis. Jeder Kanal kann unabhängig voneinander auf Mikrofon oder Leitungsmodus eingestellt werden. Alle Eingänge sind ausgewogen und werden auf einem einzigen DB25-Steckverbinder mit dem Standard-Tascam-Pinout geliefert.

Conversion verwendet einen Doppel-5-Bit-Delta-Sigma-Modulator mit FPGA-basierter Filterung in 32-Bit-Verarbeitungstiefe. Sowohl die Mikrofon- als auch die Linienverstärkinszenierung sind relaisbasiert, ohne aktive Elektronikkomponenten mit außergewöhnlicher Geräuschleistung und EIN von −131 dBu (A-gewichtet) bei maximaler Verstärkung.

Für Kondensatormikrofone stehen pro Kanal 48 V Phantomleistung zur Verfügung.

---

## Technische Spezifikationen

### Allgemein

| Parameter                                          | Wert                                                                                                           | Bedingungen / Notizen                          |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Eingabekanäle                                      | 8                                                                                                              | Ausgeglichen; schaltbare Mikro/Linie pro Kanal |
| Dynamischer Bereich (Gewichtet) | > 123 dB                                                                                                       |                                                |
| THD+N (Gewichtet)               | < −117 dB / 0.00014%                                                  | Bei −3 dBFS                                    |
| Frequenzantwort                                    | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Alle Gain Einstellungen                        |
| Genauigkeit erhalten                               | ±0,1 dB                                                                                                        | Alle Gain Einstellungen                        |
| Beispielraten (PCM)             | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                |
| Abtastrate (DSD)                | 2,8224 MHz (DSD 64), 5.6448 MHz (DSD 128)                |                                                |
| Beispielauflösung                                  | 5-bit sigma-delta bei 5.645 oder 6.144 MHz; 24-bit PCM-Ausgang                 |                                                |
| Verarbeite Wortlänge                               | 32-Bit                                                                                                         | FPGA-basierte Filterung                        |
| Stromverbrauch                                     | max. 11 W                                                                                      |                                                |

### Zeileneingabemodus

| Parameter                   | Wert                              | Bedingungen / Notizen                                                |
| --------------------------- | --------------------------------- | -------------------------------------------------------------------- |
| Maximale Eingangsstufe      | −9 bis +30 dBu                    | In 0.1 dB-Schritten einstellen                       |
| Erhalte Schritte für 0 dBFS | 9, 12, 15, 18, 21, 24, 27, 30 dBu | Relaisbasierte 3 dB-Schritte; digitale stufenübergreifende Anpassung |
| Input-Impedanz              | > 10 kg                           |                                                                      |
| CMRR                        | > 120 dB                          | Bei 1 kHz                                                            |

### Mikrofon-Eingabemodus

| Parameter                              | Wert           | Bedingungen / Notizen                                    |
| -------------------------------------- | -------------- | -------------------------------------------------------- |
| Phantomleistung                        | 48 V           | Wechselbar pro Kanal                                     |
| Input-Impedanz                         | 3 kg           |                                                          |
| EIN (A-gewichtet)   | −131 dBu       | Bei 0 <unk> Quelle (gekürzte Eingabe) |
| Analog-Verstärkungsbereich             | −3 bis +45 dB  | Relay-basierte 3 dB-Schritte                             |
| Digitale Verstärkung                   | 0 bis +39 dB   | Zusätzlicher digitaler Gewinn                            |
| Gesamte DADman Gain Reichweite         | −18 bis +72 dB |                                                          |
| Maximale Eingangsstufe bei −18 dB Gain | +21 dBu        | Vor dem Clippen                                          |

### Mikrofon-Gain Tisch

| DADman Gain (dB) | Analog-Gewinn (dB) | Digitaler Gewinn (dB) | Input Overload (dBu) | Ausgangsgeräusche (dBFS A) | EIN (dBu A) |
| ----------------------------------- | ------------------------------------- | ---------------------------------------- | --------------------------------------- | --------------------------------------------- | ------------------------------ |
| −18                                 | −3                                    | 0                                        | +21                                     | −123.8                        | −102.8         |
| −15                                 | 0                                     | 0                                        | +18                                     | −123.3                        | −105.3         |
| −12                                 | +3                                    | 0                                        | +15                                     | −123.2                        | −108.2         |
| −9                                  | +6                                    | 0                                        | +12                                     | −123.2                        | −111.2         |
| −6                                  | +9                                    | 0                                        | +9                                      | −122.8                        | −113.8         |
| −3                                  | +12                                   | 0                                        | +6                                      | −122.8                        | −116.8         |
| 0                                   | +12                                   | 0                                        | +3                                      | −122.2                        | −119.2         |
| +3                                  | +18                                   | 0                                        | 0                                       | −122.0                        | −122.0         |
| +6                                  | +21                                   | 0                                        | −3                                      | −120.8                        | −123.8         |
| +9                                  | +24                                   | 0                                        | −6                                      | −120.3                        | −126.3         |
| +12                                 | +27                                   | 0                                        | −9                                      | −118.5                        | −127.5         |
| +15                                 | +30                                   | 0                                        | −12                                     | −117.3                        | −129.3         |
| +18                                 | +33                                   | 0                                        | −15                                     | −114.8                        | −129.8         |
| +21                                 | +36                                   | 0                                        | −18                                     | −113.0                        | −131.0         |
| +24                                 | +39                                   | 0                                        | −21                                     | −110.2                        | −131.2         |
| +27                                 | +42                                   | 0                                        | −24                                     | −107.8                        | −131.8         |
| +30                                 | +45                                   | 0                                        | −27                                     | −104.8                        | −131.8         |
| +33                                 | +45                                   | +3                                       | −27                                     | −107.8                        | −131.8         |
| +36                                 | +45                                   | +6                                       | −27                                     | −110.8                        | −131.8         |
| +72                                 | +45                                   | +39                                      | −27                                     | −68.8                         | −131.8         |

> **Hinweis:** Bei digitalen Verstärkereinstellungen über +30 dB DADman Gain ist der analoge Verstärkergewinn auf +45 dB fixiert. Die Erhöhung des digitalen Gewinns über diesem Punkt reduziert den effektiven Dynamikumfang, hält aber den EIN Boden bei −131,8 dBu A.

---

## Verbindungen

| Port                   | Konnektor     | Signal            | Notizen                                                                              |
| ---------------------- | ------------- | ----------------- | ------------------------------------------------------------------------------------ |
| Mikrofon/Zeileneingabe | DB25 weiblich | 8 ch ausgeglichen | Tascam-Pinout; mic: 48 V Phantom; Linie: bis +30 dBu |

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

> **KAUFUNG:** Wenn 48 V Phantomleistung auf jedem Kanal aktiviert ist, Deaktivieren Sie es in DADman, bevor Sie Mikrofone oder Kabel verbinden oder trennen, um Transienten zu vermeiden, die Mikrofonkapseln beschädigen könnten.

1. Schalten Sie das Chassis ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die CARD-M8 in die Schlitzführung, etikettieren Sie seitlich nach oben, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die vordere Halterung mit der befestigten Schraube.
5. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
6. DADman öffnen — die Karte erscheint als Mikro-/Linieneingänge in der I/O-Routingansicht. Setze jeden Kanal auf Mic oder Line Modus, je nach Bedarf.

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
