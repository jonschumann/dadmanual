---
title: "Kapitel 2 — Panelbeschreibung"
sidebar_label: "Ch. 2 — Panelbeschreibung"
sidebar_position: 3
---

# Kapitel 2 — Panelbeschreibung

> **Produkt:** Digital Audio Denmark Core 256

> **Wie man dieses Kapitel nutzt:** Dieses Kapitel identifiziert jede Steuerung und jeden Konnektor des Core 256. Für Signalpegel und Verbindungsverfahren siehe [Ch. 4 — Signalverbindungen](ch04-connections. Für die Bedeutung von LED-Status siehe [Abschnitt 2.3](#23-led-state-reference).

---

## 2.1 Frontbereich

![Core 256 Frontplatte](/img/panel-core256-front.png)
_Abbildung 2.1 — Kern 256 Frontplatte._

> **HINWEIS:** Das Core 256 Frontpanel bietet nur Statusanzeige. Es gibt keine Audio-I/O-Anschlüsse auf der Frontleiste.

| Referenz | Label                        | Typ                                   | Funktion                                                                                                                                  | Punkt                                                                                                                                                                                                                                                     |
| -------- | ---------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **DAD**                      | Beleuchtetes Logo                     | Blaue Beleuchtung; zeigt Einschalten an                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2        | **Kraft**                    | Beleuchteter Tastendruck              | Startet kontrollierte Ein-/Ausschaltungssequenz                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3        | **Int.**     | LED-Anzeige                           | Lit wenn die interne Uhr-Referenz gesperrt wird                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4        | **Ext.**     | LED-Anzeige (grün) | Lit wenn an externe Uhrzeit gesperrt wird                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5        | \*\*Fr. \*\* | LED-Anzeige (rot)  | Lit auf Uhrenfehler oder internen Fehler. Siehe [Abschnitt 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 Rückseite

![Core 256 rear panel](/img/panel-core256-rear.png)
_Figure 2.2 — Kern 256 hintere Panel. Nummerierte Anrufe entsprechen der unten stehenden Tabelle._

Das Core 256 Heckpanel trägt den gleichen Steckverbinder wie das AX Center mit den folgenden Unterschieden:

| Unterschied         | AX-Mitte                                                | Kern 256                                                             |
| ------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| Macht               | IEC C14 mains inlet (100–240 V AC)   | 12V DC-Barrel-Stecker (externer PSU erforderlich) |
| Ausgänge überwachen | 2× Stereo-TRS (MONITOR 1, MONITOR 2) | Nicht vorhanden                                                      |
| Erweiterungs-Slots  | 2× (SLOT 1, SLOT 2)                  | 2× (SLOT 1, SLOT 2) — gleich                      |

Alle anderen Steckverbinder (EXPANSION / SFP bays, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC AUT, MADI IN, MADI AUT, ADAT OUT 1/2, ADAT IN 1/2) sind identisch mit dem AX Center. Beziehen Sie sich auf [Ch. 4 — AX Center Rear Panel](../ax-center/ch04-connections) für Funktion und Spezifikation dieser Steckverbinder.

| Referenz | Label                                            | Konnektor                                      | Funktion                                                                                                                                                                           | Punkt                                                                                                                                                                                                                                                     |
| -------- | ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Kraft**                                        | 12 V DC Fässer                                 | Gleichstromeingabe. Schließen Sie die mitgelieferte externe Stromversorgung 12 V an. Ersetzen Sie nicht durch eine Fremdlieferung. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2        | **EXPANSION**                                    | 2× SFP Bucht                                   | DADLink / MADI optische Expansion. Identisch zum AX Center.                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3        | **NET 1 / NET 2**                                | 2× RJ45 + SFP Bucht                            | Ethernet control network (100/1000BASE-T) + optionale SFP fibre. Identisch zum AX Center.                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4        | **THUNDERBOLT 1** (oben)      | USB-C (Donnerblitz 3)       | Primäre Thunderbolt 3 Verbindung zum Computer.                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5        | **THUNDERBOLT 2** (niedriger) | USB-C (Donnerblitz 3)       | Thunderbolt 3 Daisy-Chain / Durchlauf.                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6        | **WC/VBB IN**                                    | BNC, 75 <unk>                                  | Wortuhr oder Video Black Burst Eingabe.                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7        | **WOCHE AUS**                                    | BNC, 75 <unk>                                  | Wortuhr-Ausgabe.                                                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8        | \*\*MADI IN \*\*                                 | BNC, 75 <unk>                                  | MADI input (coaxial). AES10 konform.                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9        | **MADI AUS**                                     | BNC, 75 <unk>                                  | MADI output (coaxial).                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10       | **ADAT AUT 1 / 2**                               | 2× TOSLINK (optisch)        | ADAT Lightpipe-Ausgänge. Bis zu 8 ch bei 44.1/48 kHz; 4 ch bei 88.2/96 kHz (S/MUX).             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11       | **ADAT IN 1 / 2**                                | 2× TOSLINK (optisch)        | ADAT Lightpipe-Eingänge. Gleiche Kanalanzahl wie ADAT-Ausgänge.                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12       | **SLOT 1 / SLOT 2**                              | 2× Erweiterungsplatz (DB25) | Analoge I/O-Erweiterungs-Slots. Jeder akzeptiert eine DAD-Erweiterungskarte mit 8 Kanälen.                                                         | —                                                                                                                                                                                                                                                         |

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
