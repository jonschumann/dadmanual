---
title: "Kapitel 2 — Panelbeschreibung"
sidebar_label: "Ch. 2 — Panelbeschreibung"
sidebar_position: 3
---

# Kapitel 2 — Panelbeschreibung

> **Produkt:** Digital Audio Denmark AX Center

> **Wie man dieses Kapitel nutzt:** Dieses Kapitel identifiziert jede Steuerung und jeden Konnektor im AX Center. Für Signalpegel und Verbindungsverfahren siehe [Ch. 4 — Signalverbindungen](ch04-connections. Für die Bedeutung von LED-Status siehe [Abschnitt 2.3](#23-led-state-reference).

---

## 2.1 Frontbereich

![AX Center Frontpanel](/img/panel-ax-center-front.png)
_Figure 2.1 — AX Center Frontplatte. Nummerierte Anrufe entsprechen der unten stehenden Tabelle._

| Referenz | Label                        | Typ                                       | Funktion                                                                                                                                                                                          | Punkt                                                                                                                                                                                                                                                     |
| -------- | ---------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **DAD**                      | Beleuchtetes Logo                         | Blaue Beleuchtung; zeigt Einschalten an                                                                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2        | **Kraft**                    | Beleuchteter Tastendruck                  | Startet kontrollierte Ein-/Ausschaltungssequenz. Halten Sie 5 s gedrückt, um den Ausschalten zu erzwingen.                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3        | **Int.**     | LED-Anzeige                               | Lit wenn das Gerät an seine eigene interne Uhrenreferenz gesperrt ist                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4        | **Ext.**     | LED-Anzeige (grün)     | Lit, wenn die Einheit an eine externe Uhrzeit angeschlossen ist (Wort-Uhr, MADI, ADAT oder Dante)                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5        | \*\*Fr. \*\* | LED-Anzeige (rot)      | Lit wenn ein Uhrenfehler, Synchronisationsverlust oder ein interner Fehler erkannt wird. Siehe [Abschnitt 2.3](#23-led-state-reference).          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6        | **Mic/Inst 1**               | Combo XLR/TRS (Sperre) | Mikro/Linie/Instrument Eingang, Kanal 1. Akzeptiert XLR (ausgeglichene Mikro/Linie) oder 6,35 mm TRS/TS (Linie/Instrument). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 7        | **P48**                      | LED-Anzeige                               | Lit wenn die Phantomleistung (+48 V) auf diesem Eingangskanal aktiv ist                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#84CC16'}}></span> |
| 8        | **Mic**                      | LED-Anzeige                               | Lit, wenn der Eingang als Mikrofoneingang konfiguriert ist                                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D946EF'}}></span> |
| 9        | **Instant**                  | LED-Anzeige                               | Lit, wenn der Eingang als High-impedance-Instrument Eingang konfiguriert ist                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F43F5E'}}></span> |
| 10       | **Mic/Inst 2**               | Combo XLR/TRS (Sperre) | Mikro/Linie/Instrument Eingang, Kanal 2. Gleiche Spezifikation wie Kanal 1.                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11       | **HP 1**                     | 6,35-mm-Buchse                            | Kopfhörerausgabe 1. Level gesteuert über DADman oder MOM.                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 12       | **HP 2**                     | 6,35-mm-Buchse                            | Kopfhörerausgabe 2. Level gesteuert über DADman oder MOM.                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |

---

## 2.2 Rückseite

![AX Center Heckpanel](/img/panel-ax-center-rear.png)
_Figure 2.2 — AX Center Heckplatte. Nummerierte Anrufe entsprechen der unten stehenden Tabelle._

| Referenz | Label                                            | Konnektor                                      | Funktion                                                                                                                                                                                                                                                                                                                                                                  | Punkt                                                                                                                                                                                                                                                     |
| -------- | ------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Kraft**                                        | IEC C14 Eingang                                | Netzeingabe. 100–240 V AC, 50/60 Hz, interne PSU. Schließen Sie ein Standard-IEC C13-Stromkabel an.                                                                                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2        | **EXPANSION** (Oberes Paar)   | 2× SFP Bucht                                   | DADLink / MADI optische Expansion. Akzeptiert SFP-Module zur Anbindung an andere DAD-Einheiten über aktive Glasfaser (DADLink-Kabel) oder für optische MADI-I/O.                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3        | **NET 1 / NET 2**                                | 2× RJ45 + SFP Bucht                            | Ethernet Control Network (NET 1, NET 2: 100/1000BASE-T). Die SFP bay unterhalb von NET 1/NET 2 akzeptiert ein SFP-Modul für optionale Glasfasernetzverbindung. Verbinden Sie NET 1 oder NET 2 mit Ihrem DADman Control Netzwerk — für den normalen Betrieb wird nur ein Port benötigt. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4        | **THUNDERBOLT 1** (oben)      | USB-C (Donnerblitz 3)       | Primäre Thunderbolt 3 Verbindung zum Computer. Verbinden Sie diesen Port mit dem Thunderbolt 3 oder USB4 Port des Computers mit einem 20 Gbps-bewerteten Kabel. Liefert bis zu 256 bidirektionale Audiokanäle mit Standard-Samples.                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5        | **THUNDERBOLT 2** (niedriger) | USB-C (Donnerblitz 3)       | Thunderbolt 3 Daisy-Chain / Durchlauf. Verbinden Sie sich mit dem nächsten Thunderbolt-Gerät in der Kette.                                                                                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6        | **WC/VBB IN**                                    | BNC, 75 <unk>                                  | Wortuhr oder Video Black Burst Eingabe. Akzeptiert Wortuhr (1×, 256×, oder Video-Sync-Format). Schließen Sie die 75 <unk> -Beendigung auf dem letzten Gerät in einer Wort-Uhr-Kette an.                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7        | **WOCHE AUS**                                    | BNC, 75 <unk>                                  | Wortuhr-Ausgabe. Gibt die aktuelle Sync-Referenz der Einheit als Wort-Uhr-Signal aus.                                                                                                                                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8        | \*\*MADI IN \*\*                                 | BNC, 75 <unk>                                  | MADI input (coaxial). Akzeptiert AES10 MADI im 56- oder 64-Kanal-Rahmenformat. Bei 96 kHz ist die maximale Kanalanzahl 32.                                                                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9        | **MADI AUS**                                     | BNC, 75 <unk>                                  | MADI output (coaxial). Überträgt MADI im konfigurierten Frame Format und Abtastrate.                                                                                                                                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10       | **ADAT AUT 1 / 2**                               | 2× TOSLINK (optisch)        | ADAT Lightpipe-Ausgänge. Bis zu 8 Kanäle pro Port bei 44,1/48 kHz; 4 Kanäle pro Port bei 88.2/96 kHz (S/MUX).                                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11       | **ADAT IN 1 / 2**                                | 2× TOSLINK (optisch)        | ADAT Lightpipe-Eingänge. Gleiche Kanalanzahl wie ADAT-Ausgänge.                                                                                                                                                                                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12       | **MONITOR 1**                                    | 2× TRS 6,35 mm (L/R)        | Ausgeglichene Stereo-Monitorausgabe 1. Level gesteuert über DADman oder MOM.                                                                                                                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 13       | **MONITEUR 2**                                   | 2× TRS 6,35 mm (L/R)        | Ausgeglichene Stereo-Monitorausgabe 2. Level gesteuert über DADman oder MOM.                                                                                                                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 14       | **SLOT 1 / SLOT 2**                              | 2× Erweiterungsplatz (DB25) | Analoge I/O-Erweiterungs-Slots. Jeder Slot akzeptiert eine DAD-Erweiterungskarte, die 8 Kanäle mit A/D, D/A oder Digital-I/O zur Verfügung stellt. Kartentyp und Kanalzuweisung sind in DADman konfiguriert.                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **HINWEIS: Thunderbolt Kabelanforderung:** Die Thunderbolt 3 Verbindung erfordert ein Kabel mit 20 Gbit/s oder höher. Bei Thunderbolt 3-Drehzahlen werden standardmäßige USB-C-Kabel nicht bewertet und funktionieren nicht zuverlässig. Verwenden Sie das mit der Einheit gelieferte Kabel oder ein zertifiziertes Thunderbolt 3 / Thunderbolt 4 Kabel.

> **NOTICE — Terminierung der Wortuhr:** Der WC/VBB IN Port muss beendet werden (75 <unk> ), wenn das AX Center das letzte Gerät einer Wort-Uhr-Kette ist. Der Terminierungsschalter befindet sich neben dem BNC-Anschluss.

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
