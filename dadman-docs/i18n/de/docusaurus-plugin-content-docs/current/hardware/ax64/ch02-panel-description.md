---
title: "Kapitel 2 — Panelbeschreibung"
sidebar_label: "Ch. 2 — Panelbeschreibung"
sidebar_position: 3
---

# Kapitel 2 — Panelbeschreibung

> **Produkt:** Digital Audio Dänemark AX 64

> **Wie man dieses Kapitel nutzt:** Dieses Kapitel identifiziert jede Steuerung und jeden Konnektor auf der AX 64. Für Signalpegel und Verbindungsverfahren siehe [Ch. 4 — Signalverbindungen](ch04-connections. Für die Bedeutung von LED-Status siehe [Abschnitt 2.3](#23-led-state-reference).

---

## 2.1 Frontbereich

![AX 64 Frontpanel](/img/panel-ax64-front.png)
_Abbildung 2.1 — AX 64 Frontplatte. Nummerierte Anrufe entsprechen der unten stehenden Tabelle._

> **HINWEIS:** Das AX 64 Frontpanel bietet nur Statusanzeige. Alle Audio-I/O-Anschlüsse sind auf der Rückseite (Abbildung 2.2).

| Referenz | Label                        | Typ                                   | Funktion                                                                                                                                                      | Punkt                                                                                                                                                                                                                                                     |
| -------- | ---------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **DAD**                      | Beleuchtetes Logo                     | Blaue Beleuchtung; zeigt Einschalten an                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2        | **Kraft**                    | Beleuchteter Tastendruck              | Startet kontrollierte Ein-/Ausschaltungssequenz                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3        | **Int.**     | LED-Anzeige                           | Lit wenn die interne Uhr-Referenz gesperrt wird                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4        | **Ext.**     | LED-Anzeige (grün) | Lit wenn an externe Uhrzeit gesperrt wird                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5        | \*\*Fr. \*\* | LED-Anzeige (rot)  | Lit auf Uhrenfehler oder internen Fehler. Siehe [Abschnitt 2.3](#23-led-state-reference).                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6        | **Fan vent**                 | Ventilation grille                    | Exhaustport für den internen Kühlventilator. Halten Sie Hindernisse frei, um einen angemessenen Luftstrom aufrechtzuerhalten. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#EF4444'}}></span> |

---

## 2.2 Rückseite

![AX 64 hintere Panel](/img/panel-ax64-rear.png)
_Abbildung 2.2 — AX 64 hintere Panel. Nummerierte Anrufe entsprechen der unten stehenden Tabelle._

| Referenz | Label                                            | Konnektor                                | Funktion                                                                                                                                                                                                                                                                                                                                                                   | Punkt                                                                                                                                                                                                                                                     |
| -------- | ------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Kraft**                                        | IEC C14 Eingang                          | Netzeingabe. 100–240 V AC, 50/60 Hz, Auto-Ranking.                                                                                                                                                                                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 1a       | _(Option)_                    | IEC C14 Eingang                          | Redundant Netzeingang (werksmontierte Option).                                                                                                                                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2, 3     | **EXPANSION**                                    | 2× SFP Bucht                             | DADLink / MADI optische Expansion. Akzeptiert SFP-Module für DADLink oder optische MADI-I/O.                                                                                                                                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 4, 5     | **NET 1 / NET 2**                                | 2× RJ45 + SFP Bucht                      | Ethernet-Steuerungsnetzwerk Verbinden Sie NET 1 oder NET 2 mit dem DADman Steuernetzwerk.                                                                                                                                                                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 6        | **THUNDERBOLT 1** (oben)      | USB-C (Donnerblitz 3) | Primäre Thunderbolt 3 Verbindung zum Computer.                                                                                                                                                                                                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 7        | **THUNDERBOLT 2** (niedriger) | USB-C (Donnerblitz 3) | Thunderbolt 3 Daisy-Chain / Durchlauf.                                                                                                                                                                                                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 8        | **WOHN**                                         | BNC, 75 <unk>                            | Wortuhreingabe.                                                                                                                                                                                                                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 9        | **WOCHE AUS**                                    | BNC, 75 <unk>                            | Wortuhr-Ausgabe.                                                                                                                                                                                                                                                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 10       | \*\*MADI IN \*\*                                 | BNC, 75 <unk>                            | MADI Koaxialeingabe. AES10 konform.                                                                                                                                                                                                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 11       | **MADI AUS**                                     | BNC, 75 <unk>                            | MADI Koaxialausgabe.                                                                                                                                                                                                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 12, 14   | **ADAT AUT 1 / 2**                               | 2× TOSLINK (optisch)  | ADAT Lightpipe-Ausgänge. Bis zu 8 ch bei 44.1/48 kHz; 4 ch bei 88.2/96 kHz (S/MUX).                                                                                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 13, 15   | **ADAT IN 1 / 2**                                | 2× TOSLINK (optisch)  | ADAT Lightpipe-Eingänge.                                                                                                                                                                                                                                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 16–23    | **Platz 1 – Platz 8**                            | Bis zu 8 × DB25                          | Analoge Erweiterungskartenslots. Jeder Slot akzeptiert eine DAD-Karte mit 8 Kanälen (A/D, D/A oder Digital-I/O). Die Nummerierung der Plätze läuft von rechts nach links wie von hinten aus (Platz 1 ist rechts). Kartenart und Routing sind in DADman konfiguriert. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **NOTICE — Erweiterungskartenslots:** Unbevölkerte Slots sind mit einer leeren Platte bedeckt. Leere Platten nicht entfernen — sie sind für einen korrekten Luftstrom erforderlich. Erweiterungskarten dürfen nur mit ausgeschaltetem Gerät installiert oder entfernt werden.

> **HINWEISE – Konventionelle Slotnummern:** Slotnummern werden über jedem Slot gesiebt und laufen von rechts (Slot 1) nach links (Slot 8) wie von der Rückseite der Einheit. Überprüfen Sie die Zuweisung von Zeitnischen in DADman, wenn Sie eine Einheit mit Erweiterungskarten verbinden.

---

## 2,3 LED Status Referenz

### Uhr-Referenz-LEDs

| Int. | Erweitert | Fr. | Bedeutung                                                                   |
| -------------------- | --------- | ------------------- | --------------------------------------------------------------------------- |
| ●                    | ○         | ○                   | An interner Uhr-Referenz gesperrt — Uhr-Master-Modus                        |
| ○                    | ●         | ○                   | An externer Uhr-Referenz gesperrt — Uhr-Slave-Modus                         |
| ●                    | ●         | ○                   | Sperrung externer Referenz (vorübergehend)               |
| ○                    | ○         | ●                   | **Uhr Fehler** — kann nicht auf die ausgewählte Referenz sperren            |
| ●                    | ○         | ●                   | **Interner Fehler** — Stromzyklus; kontaktiere den Support, wenn persistent |
| Langsamer Blitz      | —         | —                   | Firmware-Update im Gange — nicht ausschalten                                |

### Power-Taste Status

| Bundesland     | Bedeutung                                    |
| -------------- | -------------------------------------------- |
| Aus            | Einheit ausgeschaltet                        |
| Stetig         | Einheit eingeschaltet, normale Operation     |
| Langsamer Puls | Standby oder Herunterfahren Sequenz im Gange |

---

## Querverweise

- [Ch. 4 — Signalverbindungen](ch04-connections) — Signalpegel und Verbindungsprozeduren
- [Ch. 6 — Operation](ch06-operation) — Steuerung und Anzeigeoperation
- [App. A — Connector Pinouts](appa-connector-pinouts) — Zuordnungen
