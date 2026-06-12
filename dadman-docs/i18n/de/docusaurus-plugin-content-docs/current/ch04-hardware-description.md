---
id: ch04-Hardware-Beschreibung
title: "Kapitel 4 — Hardware-Beschreibung"
sidebar_label: "Ch. 4 — Hardware-Beschreibung"
sidebar_position: 6
slug: /hardware-Beschreibung
---

# Kapitel 4 — Hardware-Beschreibung

> **Dokument:** DADman Benutzerhandbuch  
> **Kapitel Status:** Entwurf v0. — Panel-Fotos und Port-Daten integriert; Core 256 hintere Panel-Foto und DAD Junior Abschnitt anhängig von  
> **Zuletzt aktualisiert:** Juni 2026

---

## In diesem Kapitel

| Abschnitt           | Cover                                                 | Relevant für        |
| ------------------- | ----------------------------------------------------- | ------------------- |
| 4.1 | AX Center — Vorder- und Rückseite                     | AX Center Benutzer  |
| 4.2 | Core 256 — Vorder- und Rückseite                      | Kern-256 Benutzer   |
| 4.3 | AX 64 — Vorder- und Rückseite                         | AX 64 Benutzer      |
| 4.4 | MOM — Steuerungsreferenz                              | MOM Benutzer        |
| 4.5 | DAD Junior — Vorder- und Rückseite                    | DAD Junior Benutzer |
| 4.6 | Penta 720 / 721s — Front- und Heckpanel               | Penta users         |
| 4.7 | LED-Status-Referenz (alle Modelle) | Alle Benutzer       |

> **HINWEIS — Wie man dieses Kapitel nutzt:** Dieses Kapitel ist eine Hardware-Referenz. Es identifiziert jede physikalische Steuerung und jeden Steckverbinder auf jedem unterstützten Produkt. Für Signalrouting- und Konfigurationsverfahren siehe [Kapitel 7 — Operation]. Für Installation und Kabel, siehe [Kapitel 3 — Installation].

---

## 4.1 AX-Mitte

### 4.1.1 Übersicht

Das AX Center ist ein Thunderbolt Audio-Interface mit 1U Rackmontage in der Thunder\|Core Produktfamilie. Es bietet zwei Mikro/Linie/Instrumenten-Eingänge und Stereo-Monitorausgänge direkt auf der Frontplatte, mit MADI, ADAT, Wort-Uhr, analogen Erweiterungssteckplätzen und zwei Thunderbolt 3 Ports auf der Rückseite. Alle Routing, Gain, Überwachung und Konfiguration werden über DADman über Ethernet durchgeführt. Das AX Center beherbergt auch das MOM (Monitor Operating Module), wenn es als Desktop-Monitor-Controller-System verwendet wird — das MOM verbindet sich mit dem AX Center über USB-C.

### 4.1.2 Panel Übersicht

![AX Center Frontpanel](/img/panel-ax-center-front.png)
_Abbildung 4.1 — AX Center Frontplatte. Nummerierte Anrufe entsprechen Abschnitt 4.1.3._

![AX Center Heckplatte](/img/panel-ax-center-rear.png)
_Abbildung 4.2 — AX Center Heckplatte. Nummerierte Anrufe entsprechen Abschnitt 4.1.4._

### 4.1.3 Frontplatten-Steuerung

| Referenz | Label                        | Typ                                       | Funktion                                                                                                                                                                                                                                                                                                                      |
| -------- | ---------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —        | **DAD**                      | Beleuchtetes Logo                         | Blaue Beleuchtung; zeigt Einschalten an                                                                                                                                                                                                                                                                                       |
| 1        | **Kraft**                    | Beleuchteter Tastendruck                  | Startet kontrollierte Ein-/Ausschaltungssequenz. Halten Sie 5 s gedrückt, um den Ausschalten zu erzwingen.                                                                                                                                                                                    |
| —        | **Int.**     | LED-Anzeige                               | Lit wenn das Gerät an seine eigene interne Uhrenreferenz gesperrt ist                                                                                                                                                                                                                                                         |
| —        | **Ext.**     | LED-Anzeige (grün)     | Lit, wenn die Einheit an eine externe Uhrzeit angeschlossen ist (Wort-Uhr, MADI, ADAT oder Dante)                                                                                                                                                                                                          |
| —        | \*\*Fr. \*\* | LED-Anzeige (rot)      | Lit wenn ein Uhrenfehler, Synchronisationsverlust oder ein interner Fehler erkannt wird. Siehe [Section 4.7 — LED-Zustandsreferenz] und [Kapitel 9 — Fehlerbehebung]. |
| 2        | **Mic/Inst 1**               | Combo XLR/TRS (Sperre) | Mikro/Linie/Instrument Eingang, Kanal 1. Akzeptiert XLR (ausgeglichene Mikro/Linie) oder 6,35 mm TRS/TS (Linie/Instrument).                                                                                                                             |
| —        | **P48**                      | LED-Anzeige                               | Lit wenn die Phantomleistung (+48 V) auf diesem Eingangskanal aktiv ist                                                                                                                                                                                                                                    |
| —        | **Mic**                      | LED-Anzeige                               | Lit, wenn der Eingang als Mikrofoneingang konfiguriert ist                                                                                                                                                                                                                                                                    |
| —        | **Instant**                  | LED-Anzeige                               | Lit, wenn der Eingang als High-impedance-Instrument Eingang konfiguriert ist                                                                                                                                                                                                                                                  |
| 3        | **Mic/Inst 2**               | Combo XLR/TRS (Sperre) | Mikro/Linie/Instrument Eingang, Kanal 2. Gleiche Spezifikation wie Kanal 1.                                                                                                                                                                                                                   |
| 4        | **HP 1**                     | 6,35-mm-Buchse                            | Kopfhörerausgabe 1. Level gesteuert über DADman oder MOM.                                                                                                                                                                                                                                     |
| 5        | **HP 2**                     | 6,35-mm-Buchse                            | Kopfhörerausgabe 2. Level gesteuert über DADman oder MOM.                                                                                                                                                                                                                                     |

### 4.1.4 Rückseite

| Referenz | Label                                            | Konnektor                                      | Funktion                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Kraft**                                        | IEC C14 Eingang                                | Netzeingabe. 100–240 V AC, 50/60 Hz, interne PSU. Schließen Sie ein Standard-IEC C13-Stromkabel an.                                                                                                                                                                                                                       |
| 2        | **EXPANSION** (Oberes Paar)   | 2× SFP Bucht                                   | DADLink / MADI optische Expansion. Akzeptiert SFP-Module zur Anbindung an andere DAD-Einheiten über aktive Glasfaser (DADLink-Kabel) oder für optische MADI-I/O.                                                                                                                                                       |
| 3        | **NET 1 / NET 2**                                | 2× RJ45 + SFP Bucht                            | Ethernet Control Network (NET 1, NET 2: 100/1000BASE-T). Die SFP bay unterhalb von NET 1/NET 2 akzeptiert ein SFP-Modul für optionale Glasfasernetzverbindung. Verbinden Sie NET 1 oder NET 2 mit Ihrem DADman Control Netzwerk — für den normalen Betrieb wird nur ein Port benötigt. |
| 4        | **THUNDERBOLT 1** (oben)      | USB-C (Donnerblitz 3)       | Primäre Thunderbolt 3 Verbindung zum Computer. Verbinden Sie diesen Port mit dem Thunderbolt 3 oder USB4 Port des Computers mit einem 20 Gbps-bewerteten Kabel. Liefert bis zu 256 bidirektionale Audiokanäle mit Standard-Samples.                                                                                       |
| 5        | **THUNDERBOLT 2** (niedriger) | USB-C (Donnerblitz 3)       | Thunderbolt 3 Daisy-Chain / Durchlauf. Verbinden Sie sich mit dem nächsten Thunderbolt-Gerät in der Kette.                                                                                                                                                                                                                                |
| 6        | **WC/VBB IN**                                    | BNC, 75 <unk>                                  | Wortuhr oder Video Black Burst Eingabe. Akzeptiert Wortuhr (1×, 256×, oder Video-Sync-Format). Schließen Sie die 75 <unk> -Beendigung auf dem letzten Gerät in einer Wort-Uhr-Kette an.                                                                                                                |
| 7        | **WOCHE AUS**                                    | BNC, 75 <unk>                                  | Wortuhr-Ausgabe. Gibt die aktuelle Sync-Referenz der Einheit als Wort-Uhr-Signal aus.                                                                                                                                                                                                                                                     |
| 8        | \*\*MADI IN \*\*                                 | BNC, 75 <unk>                                  | MADI input (coaxial). Akzeptiert AES10 MADI im 56- oder 64-Kanal-Rahmenformat. Bei 96 kHz ist die maximale Kanalanzahl 32.                                                                                                                                                                             |
| 9        | **MADI AUS**                                     | BNC, 75 <unk>                                  | MADI output (coaxial). Überträgt MADI im konfigurierten Frame Format und Abtastrate.                                                                                                                                                                                                                                   |
| 10       | **ADAT AUT 1 / 2**                               | 2× TOSLINK (optisch)        | ADAT Lightpipe-Ausgänge. Bis zu 8 Kanäle pro Port bei 44,1/48 kHz; 4 Kanäle pro Port bei 88.2/96 kHz (S/MUX).                                                                                                                                                                                          |
| 11       | **ADAT IN 1 / 2**                                | 2× TOSLINK (optisch)        | ADAT Lightpipe-Eingänge. Gleiche Kanalanzahl wie ADAT-Ausgänge.                                                                                                                                                                                                                                                                           |
| 12       | **MONITOR 1**                                    | 2× TRS 6,35 mm (L/R)        | Ausgeglichene Stereo-Monitorausgabe 1. Level gesteuert über DADman oder MOM.                                                                                                                                                                                                                                                              |
| 13       | **MONITEUR 2**                                   | 2× TRS 6,35 mm (L/R)        | Ausgeglichene Stereo-Monitorausgabe 2. Level gesteuert über DADman oder MOM.                                                                                                                                                                                                                                                              |
| 14       | **SLOT 1 / SLOT 2**                              | 2× Erweiterungsplatz (DB25) | Analoge I/O-Erweiterungs-Slots. Jeder Slot akzeptiert eine DAD-Erweiterungskarte, die 8 Kanäle mit A/D, D/A oder Digital-I/O zur Verfügung stellt. Kartentyp und Kanalzuweisung sind in DADman konfiguriert.                                                                                                              |

> **HINWEIS: Thunderbolt Kabelanforderung:** Die Thunderbolt 3 Verbindung erfordert ein Kabel mit 20 Gbit/s oder höher. Bei Thunderbolt 3-Drehzahlen werden standardmäßige USB-C-Kabel nicht bewertet und funktionieren nicht zuverlässig. Verwenden Sie das mit der Einheit gelieferte Kabel oder ein zertifiziertes Thunderbolt 3 / Thunderbolt 4 Kabel.

> **NOTICE — Terminierung der Wortuhr:** Der WC/VBB IN Port muss beendet werden (75 <unk> ), wenn das AX Center das letzte Gerät einer Wort-Uhr-Kette ist. Ein Abbrechen kann zu Reflexionen führen, die die Zeitreferenz für alle angeschlossenen Geräte destabilisieren. Der Terminierungsschalter befindet sich neben dem BNC-Anschluss.

---

## 4.2 Kern 256

### 4.2.1 Übersicht

Der Core 256 ist ein halbes Rack-Audio-Interface in der Thunder\|Core Produktfamilie. Es verfügt über die gleiche Steckverbinder-Ergänzung wie das AX Center, lässt aber die Eingänge und Kopfhörerausgänge an der Vorderseite des Gerätes weg. Es ist für Installationen konzipiert, bei denen ein kompakter, rackmontierbarer Thunderbolt Audio-Core ohne I/O benötigt wird. Der Core 256 wird durch eine externe 12 V DC-Versorgung angetrieben.

> **HINWEISE — Racking the Core 256:** The Core 256 is a half-rack-width unit. Ein dediziertes 1HU-Regal oder das Core 256 Racking Hardware Zubehör ist erforderlich, um es in einem Standard-19-Zoll-Regal zu montieren. Siehe [Kapitel 2 — Systemvoraussetzungen] für Racking-Optionen.

### 4.2.2 Panel Übersicht

![Core 256 Frontpanel](/img/panel-core256-front.png)
_Abbildung 4.3 — Core 256 Frontplatte. Nummerierte Anrufe entsprechen Abschnitt 4.2.3._

![Core 256 rear panel](/img/panel-core256-rear.png)
_Abbildung 4.4 — Kern 256 hintere Panel. Nummerierte Anrufe entsprechen Abschnitt 4.2.4._

### 4.2.3 Front-Panel-Steuerung

| Referenz | Label                        | Typ                                   | Funktion                                        |
| -------- | ---------------------------- | ------------------------------------- | ----------------------------------------------- |
| —        | **DAD**                      | Beleuchtetes Logo                     | Blaue Beleuchtung; zeigt Einschalten an         |
| 1        | **Kraft**                    | Beleuchteter Tastendruck              | Startet kontrollierte Ein-/Ausschaltungssequenz |
| —        | **Int.**     | LED-Anzeige                           | Lit wenn die interne Uhr-Referenz gesperrt wird |
| —        | **Ext.**     | LED-Anzeige (grün) | Lit wenn an externe Uhrzeit gesperrt wird       |
| —        | \*\*Fr. \*\* | LED-Anzeige (rot)  | Lit auf Fehler der Uhr oder interner Fehler     |

### 4.2.4 Rückseite

Das Core-256-Heckpanel trägt den gleichen Steckverbinder wie das AX-Center (siehe [Abschnitt 4.1.3]) mit den folgenden Unterschieden:

| Unterschied         | AX-Mitte                                                | Kern 256                                                             |
| ------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| Macht               | IEC C14 mains inlet (100–240 V AC)   | 12V DC-Barrel-Stecker (externer PSU erforderlich) |
| Ausgänge überwachen | 2× Stereo-TRS (MONITOR 1, MONITOR 2) | Nicht vorhanden                                                      |
| Erweiterungs-Slots  | 2× (SLOT 1, SLOT 2)                  | 2× (SLOT 1, SLOT 2) — gleich                      |

Alle anderen Steckverbinder (EXPANSION / SFP bays, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC AUT, MADI IN, MADI AUT, ADAT OUT 1/2, ADAT IN 1/2) sind identisch mit dem AX Center. Weitere Informationen hierzu finden Sie in der Tabelle des AX Center Heckplattenanschlusses in [Abschnitt 4.1.3] für die Funktion und Spezifikation dieser Steckverbinder.

---

## 4.3 AX 64

### 4.3.1 Übersicht

Der AX 64 ist ein 2-U-Rack-Thunderbolt Audio-Interface mit bis zu acht Erweiterungskarten-Steckplätzen, die Bereitstellung von bis zu 64 Kanälen analoger I/O in einer einzigen Einheit (abhängig von Erweiterungskarten). Wie das AX Center ist auch die Steuerung über DADman über Ethernet. Der AX 64 verfügt über die gleiche Kernverbindung wie das AX Center (MADI, ADAT, Wortuhr, Thunderbolt 3, Das AX Center verfügt über acht analoge Erweiterungskartensteckplätze im DB25-Format, die anstelle der festen Frontplatten-I/O des AX Centers liegen.

### 4.3.2 Panel Übersicht

![AX 64 Frontpanel](/img/panel-ax64-front.png)
_Abbildung 4.5 — AX 64 Frontplatte. Nummerierte Anrufe entsprechen Abschnitt 4.3.3._

![AX 64 hintere Panel](/img/panel-ax64-rear.png)
_Abbildung 4.6 — AX 64 hintere Panel. Nummerierte Anrufe entsprechen Abschnitt 4.3.4._

### 4.3.3 Front-Panel-Steuerung

| Referenz | Label                        | Typ                                   | Funktion                                        |
| -------- | ---------------------------- | ------------------------------------- | ----------------------------------------------- |
| —        | **DAD**                      | Beleuchtetes Logo                     | Blaue Beleuchtung; zeigt Einschalten an         |
| 1        | **Kraft**                    | Beleuchteter Tastendruck              | Startet kontrollierte Ein-/Ausschaltungssequenz |
| —        | **Int.**     | LED-Anzeige                           | Lit wenn die interne Uhr-Referenz gesperrt wird |
| —        | **Ext.**     | LED-Anzeige (grün) | Lit wenn an externe Uhrzeit gesperrt wird       |
| —        | \*\*Fr. \*\* | LED-Anzeige (rot)  | Lit auf Fehler der Uhr oder interner Fehler     |

> **HINWEIS:** Das AX 64 Frontpanel bietet nur Statusanzeige. Alle Audio-I/O-Anschlüsse sind auf der Rückseite (Bild 4.6).

### 4.3.4 Rückseite

| Referenz | Label                                            | Konnektor                                | Funktion                                                                                                                                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Kraft**                                        | IEC C14 Eingang                          | Netzeingabe. 100–240 V AC, 50/60 Hz, Auto-Ranking.                                                                                                                                                                                                                                                                                         |
| 1a       | _(Option)_                    | IEC C14 Eingang                          | Redundant Netzeingang (werksmontierte Option). Wenn die optionale redundante PSU installiert ist, erscheint neben der Primäreingabe ein zweiter IEC C14-Eingang.                                                                                                                                                        |
| 2, 3     | **EXPANSION**                                    | 2× SFP Bucht                             | DADLink / MADI optische Erweiterung, identisch mit AX Center. Akzeptiert SFP-Module für DADLink oder optische MADI-I/O.                                                                                                                                                                                                                    |
| 4, 5     | **NET 1 / NET 2**                                | 2× RJ45 + SFP Bucht                      | Ethernet-Steuerungsnetzwerk Identisch zum AX Center. Verbinden Sie NET 1 oder NET 2 mit dem DADman Steuernetzwerk.                                                                                                                                                                                                                         |
| 6        | **THUNDERBOLT 1** (oben)      | USB-C (Donnerblitz 3) | Primäre Thunderbolt 3 Verbindung zum Computer.                                                                                                                                                                                                                                                                                                             |
| 7        | **THUNDERBOLT 2** (niedriger) | USB-C (Donnerblitz 3) | Thunderbolt 3 Daisy-Chain / Durchlauf.                                                                                                                                                                                                                                                                                                                     |
| 8        | **WOHN**                                         | BNC, 75 <unk>                            | Wortuhreingabe.                                                                                                                                                                                                                                                                                                                                            |
| 9        | **WOCHE AUS**                                    | BNC, 75 <unk>                            | Wortuhr-Ausgabe.                                                                                                                                                                                                                                                                                                                                           |
| 10       | \*\*MADI IN \*\*                                 | BNC, 75 <unk>                            | MADI Koaxialeingabe. AES10 konform.                                                                                                                                                                                                                                                                                                        |
| 11       | **MADI AUS**                                     | BNC, 75 <unk>                            | MADI Koaxialausgabe.                                                                                                                                                                                                                                                                                                                                       |
| 12, 14   | **ADAT AUT 1 / 2**                               | 2× TOSLINK (optisch)  | ADAT Lightpipe-Ausgänge.                                                                                                                                                                                                                                                                                                                                   |
| 13, 15   | **ADAT IN 1 / 2**                                | 2× TOSLINK (optisch)  | ADAT Lightpipe-Eingänge.                                                                                                                                                                                                                                                                                                                                   |
| 16–23    | **Platz 1 – Platz 8**                            | Bis zu 8 × DB25                          | Analoge Erweiterungskartenslots. Jeder Slot akzeptiert eine DAD-Karte mit 8 Kanälen (A/D, D/A oder Digital-I/O). Die Nummerierung der Plätze läuft von rechts nach links wie von hinten aus (Platz 1 ist rechts). Kartenart und Routing sind in DADman konfiguriert. |

> **HINWEISE — Erweiterungskartenslots:** Die AX 64 wird mit der Anzahl der Erweiterungskarten ausgeliefert, die zum Zeitpunkt der Bestellung angegeben wurde. Unbesiedelte Plätze sind mit einer Platte bedeckt. Leere Platten nicht von leeren Steckplätzen entfernen — sie sind für einen korrekten Luftstrom erforderlich. Erweiterungskarten dürfen nur mit ausgeschaltetem Gerät installiert oder entfernt werden.

> **HINWEIS — Slot Nummerierungskonvention:** Auf der physischen Rückseite Schlitznummern werden über jedem Slot gesiebt und laufen von rechts (Slot 1) nach links (Slot 8) wie von der Rückseite des Geräts aus gesehen. Im DADman werden Slots so gekennzeichnet, dass sie mit dieser physikalischen Nummerierung übereinstimmen. Überprüfen Sie die Zuweisung von Zeitnischen in DADman, wenn Sie eine Einheit mit Erweiterungskarten verbinden.

---

## 4.4 MOM — Überwachungsmodul

### 4.4.1 Übersicht

Das MOM (Monitor Operating Module) ist ein Desktop-Monitor-Controller, der über USB-C mit einem AX Center oder AX 64 verbunden ist. Es bietet die physische Kontrolle über die Auswahl des Bildschirms, die Auswahl der Quellen, den Master-Level, Dimmen Kürzung, Talkback und Referenzlevel ohne Interaktion mit dem DADman Software-Fenster. Das MOM kommuniziert mit dem Host AX Center oder AX 64 über USB und enthält keine eigene Audioschaltung — es ist nur eine Steuerfläche. Audiosignale werden nicht durch das MM geleitet.

> **HINWEIS:** Der MOM verbindet sich mit dem Computer mit DADman über den USB-C-Port auf der Rückseite des AX Centers oder AX 64. Es ist nicht direkt an den USB-Port des Computers angeschlossen. DADman muss laufen, damit das MOM funktioniert.

### 4.4.2 Steuerungsreferenz

![MOM control face](/img/panel-mom.png)
_Abbildung 4.7 — MOM Kontrollfläche. Nummerierte Anrufe entsprechen der unten stehenden Referenztabelle._

| Referenz | Label                       | Typ                                   | Funktion                                                                                                                                                                                                                                                                                                                            |
| -------- | --------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Spkr. 1** | Beleuchteter Tastendruck              | Wählt die Lautsprecherausgabe 1 (z.B. Hauptbildschirme) aus. Entspricht einer Lautsprecherausgabe, die im aktiven Monitorprofil in DADman konfiguriert ist.                                                                                      |
| 2        | **Spkr. 2** | Beleuchteter Tastendruck              | Wählt den Lautsprecherausgabesatz 2 aus (z. B. Nahfeldmonitore).                                                                                                                                                                                                 |
| 3        | **Spkr. 3** | Beleuchteter Tastendruck              | Wählt die Lautsprecherausgabe 3 (zum Beispiel Übersetzer oder Atmosbett).                                                                                                                                                                                                                        |
| 4        | **Src. A**  | Beleuchteter Tastendruck              | Wählt die Überwachungsquelle A aus, wie sie im aktiven Monitorprofil definiert ist.                                                                                                                                                                                                                                 |
| 5        | **Src. B**  | Beleuchteter Tastendruck              | Wählt Überwachungsquelle B aus.                                                                                                                                                                                                                                                                                     |
| 6        | **Src. C**  | Beleuchteter Tastendruck              | Wählt Überwachungsquelle C aus.                                                                                                                                                                                                                                                                                     |
| 7        | **Ebene**                   | Beleuchteter Tastendruck              | Wechselt das MOM zwischen Steuerungsebenen. Wenn mehrere Ebenen in DADman konfiguriert werden, drücken Sie die Ebenenzyklen durch sie, die Zuordnung der Spkr. und Src. zu verschiedenen Lautsprecher-Sets und Quellen.                                             |
| —        | **Status LEDs 1–4**         | LED-Anzeige                           | Geben Sie den Status der vier aktiven Monitoring-Ebenen oder Presets an. Erleuchtet, wenn die entsprechende Ebene aktiv ist.                                                                                                                                                                        |
| —        | **Statistik**               | LED-Anzeige (grün) | Indicates MOM ist mit dem AX Center / AX 64 verbunden und wird korrekt kommuniziert. Flasht während der Initialisierung. Aus bei getrennter Verbindung.                                                                                                                             |
| 8        | **TB**                      | Push-Taste                            | Talkback. Leitt das Talkback-Mikrofon (konfiguriert in DADman) während des Spiels in die Talent-Feeds ein.                                                                                                                                                                       |
| 9        | **Ablehnen**                | Push-Taste                            | Referenz-Level. Schaltet die Monitorausgabe auf die im aktiven Monitorprofil festgelegte Referenzstufe um. Drücken Sie erneut, um zum vorherigen Level zurückzukehren.                                                                                                              |
| 10       | **Schnitte**                | Beleuchteter Tastendruck              | Schneidet den Monitor (Mutes) aus. Erleuchtet rot wenn aktiv.                                                                                                                                                                                                                    |
| 11       | **Dim**                     | Beleuchteter Tastendruck              | Attenuiert die Monitorausgabe durch die im aktiven Monitorprofil konfigurierte Dim-Menge (typischerweise −20 dB). Erleuchtet Bernstein wenn aktiv.                                                                                                                               |
| 12       | **Stufe**                   | Rotary-Encoder mit LED-Ring           | Mastermonitor Level Steuerung. Drehen, um die Ausgabestufe anzupassen. Der LED-Ring zeigt die aktuelle Pegelposition relativ zur Referenzstufe an (0 = Ref). Bereich: ca. −40 dB bis +6 dB relativ zur Referenz. |

> **NOTICE — MOM und Monitor Profiles:** Die Funktionen der Spkr-, Src- und Layer-Tasten werden durch das in DADman geladene Monitorprofil bestimmt. Ein MOM ohne aktives Monitorprofil wird nicht funktionale Spkr haben. und Src. knöpfe. Konfigurieren Sie Monitorprofile vor Verwendung des MOM in einer Sitzung. Siehe [Kapitel 8 — Erweiterte Funktionen, Abschnitt 8.1 — Profil überwachen].

---

## 4.5 DAD Junior

### 4.5.1 Übersicht

_[Platzhalter: DAD Junior Übersicht — ausstehende Produktfreigabe und -dokumentation.]_

### 4.5.2 Frontbereich

_[Placeholder: annoted front panel diagram — DAD Junior]_

### 4.5.3 Rücken-Panel

_[Placeholder: annotated rear panel diagram — DAD Junior]_

---

## 4.6 Penta 720 / 721s

### 4.6.1 Übersicht

Die Penta 720 und Penta 721s sind modulare Audio-Interface und Signalumwandlungsplattformen von NTP-Technologie. Anders als bei den Thunder\|Core-Produkten (AX Center, AX 64, Core 256) verbinden sich Penta-Einheiten nur über Ethernet mit dem Computer — es gibt keine Thunderbolt-Verbindung. DADman kommuniziert mit Penta-Einheiten über das Kontrollnetzwerk für Routing, Formatkonvertierung und Konfiguration. Penta-Einheiten werden typischerweise für die Verwendung mit hoher Kanalanzahl AES/EBU und MADI I/O, Formatkonvertierung und Netzwerk-Audio-Verteilung in Broadcast- und Post-Production-Umgebungen eingesetzt.

Das Penta 720 ist ein 2U-Rack-Chassis mit Erweiterungskarten in seinen internen Steckplätzen. Die Penta 721s ist eine schlanke 1U-Variante. Der Steckverbinder nach hinten ist abhängig von den eingebauten Erweiterungskarten, wie in Abschnitt 4 dargestellt. .3 spiegelt eine typische Konfiguration mit einer Dante/AES67 I/O Karte in Slot 1 wider.

### 4.6.2 Panel Übersicht

![Penta 720 Frontplatte](/img/panel-penta720.png)
_Abbildung 4.8 — Penta 720 Frontplatte. Nummerierte Anrufe entsprechen der Referenztabelle in Abschnitt 4.6.3._

![Penta 721s Frontplatte](/img/panel-penta721s-front.png)
_Abbildung 4.9 — Penta 721s Frontplatte._

![Penta 721s hintere Panel](/img/panel-penta721s-rear.png)
_Abbildung 4.10 — Penta 721s hintere Panel. Nummerierte Anrufe entsprechen der Referenztabelle in Abschnitt 4.6.4._

| Referenz | Label      | Typ                                   | Funktion                                                                                                                                                                                      |
| -------- | ---------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —        | **Ready**  | LED-Anzeige (grün) | Einheit hat Bootsequenz abgeschlossen und ist bereit für den Betrieb                                                                                                                          |
| —        | **Fehler** | LED-Anzeige (rot)  | Ein interner Fehler oder Konfigurationsfehler wurde erkannt                                                                                                                                   |
| —        | **PSU OK** | LED-Anzeige (grün) | Die Primärstromversorgung funktioniert einwandfrei. Bei Geräten mit redundanter PSU bestätigt eine zweite PSU OK Anzeige den Status der Sicherungsversorgung. |

### 4.6.4 Rückseite

| Referenz | Label                                           | Konnektor                               | Funktion                                                                                                                                                                                                                                       |
| -------- | ----------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | **Energie (primäre)**        | IEC C14 Eingang                         | Netzeingabe. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                                                           |
| 2        | **Power (Sicherung)**        | IEC C14 Eingang                         | Redundant Netzeingabe (sofern vorhanden). Stellt Hot-Swap PSU Redundanz zur Verfügung.                                                                                                      |
| 3        | **AES/EBU I/O 1–4**                             | DB25 (Tascam-Pinout) | AES/EBU Digital-Audio-I/O, Kanäle 1–4 (4 Stereo-Paare = 8 Kanäle).                                                                                                                                          |
| 4        | **AES/EBU I/O 5–8**                             | DB25 (Tascam-Pinout) | AES/EBU Digital-Audio-I/O, Kanäle 5–8 (4 Stereo-Paare = 8 Kanäle).                                                                                                                                          |
| 5        | \*\*MADI IN \*\*                                | BNC, 75 <unk>                           | MADI Koaxialeingabe. AES10 konform.                                                                                                                                                                            |
| 6        | **MADI AUS**                                    | BNC, 75 <unk>                           | MADI Koaxialausgabe.                                                                                                                                                                                                           |
| 7        | **Optischer I/O**                               | TOSLINK (optisch)    | Optische MADI oder ADAT I/O (kartenabhängig).                                                                                                                                                               |
| 8        | **WC/VBB IN**                                   | BNC, 75 <unk>                           | Wortuhr oder Video Black Burst Eingabe.                                                                                                                                                                                        |
| 9        | **WOCHE AUS**                                   | BNC, 75 <unk>                           | Wortuhr-Ausgabe.                                                                                                                                                                                                               |
| 10       | \*\*AES11 IN \*\*                               | XLR (weiblich)       | AES11 Digital Audio Referenzsignaleingang. Wird verwendet, um die Einheit mit einer AES11-Referenzquelle zu synchronisieren.                                                                                   |
| 11       | **NET 1**                                       | RJ45 (1000Base-T)    | Ethernet-Steuerung und/oder Dante-Audio-Netzwerk, Port 1.                                                                                                                                                                      |
| 12       | **NET 2**                                       | RJ45 (1000Base-T)    | Ethernet-Steuerung und/oder Dante-Audio-Netzwerk, Port 2.                                                                                                                                                                      |
| 13       | **SLOT 1** (Dante/AES67 I/O) | 2× SFP                                  | Erweiterungskarte Slot 1. Angezeigt mit einer Dante/AES67 I/O-Karte mit zwei SFP-Anschlüssen für optische oder Kupfer-Dante-Netzwerkverbindungen. Slotinhalte variieren je nach Konfiguration. |

---

## 4,7 LED Status Referenz

Die folgende Tabelle behandelt die Front-Panel-LED-Indikatoren, die für alle Thunder\|Core Rack-Einheiten gemeinsam sind (AX Center, Core 256, AX 64). Penta-Einheiten verwenden ein separates Set von Indikatoren, die oben im Penta-Abschnitt behandelt werden.

### 4.7.1 Referenz-LEDs — Thunder|Kern-Einheiten

| Int.           | Erweitert                        | Fr.             | Bedeutung                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------ | -------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ● (lit)     | <unk> (aus)   | <unk> (aus)  | Die Einheit ist an den eigenen internen Oszillator gebunden. Keine externe Referenz ist verbunden oder ausgewählt. Normaler Zustand für einen Uhrenmeister.                                                                                                                                                                                                      |
| <unk> (aus) | ● (lit, grün) | <unk> (aus)  | Die Einheit ist an die ausgewählte externe Referenz (Wort-Uhr, MADI Einbetten, ADAT Einbettung oder Dante PTP) gebunden. Normaler Zustand für einen Uhrensklave.                                                                                                                                                                                              |
| ● (lit)     | ● (lit)       | <unk> (aus)  | Die Einheit befindet sich im Prozess der Sperrung an eine externe Referenz. Der interne Oszillator läuft während die Sperre erworben wird. Übergangszustand — löst sich typischerweise innerhalb weniger Sekunden.                                                                                                                                               |
| <unk> (aus) | <unk> (aus)   | ● (lit, rot) | **Uhr Fehler.** Die Einheit kann nicht an die ausgewählte externe Referenz gesperrt werden. Überprüfen Sie, ob die Referenzquelle bei der richtigen Abtastrate vorhanden ist und mit der richtigen Eingabe verbunden ist. Siehe [Kapitel 9 — Fehlerbehebung, Abschnitt 9.3]. |
| ● (lit)     | <unk> (aus)   | ● (lit, rot) | **Interner Fehler.** Die Einheit hat einen internen Fehler entdeckt, der nichts mit externer Uhr zu tun hat. Beachten Sie den Zustand der Frontplatte und den Power-Zyklus der Einheit. Wenn der Fehler weiterhin besteht, wenden Sie sich an den DAD-Support.                                                                                   |
| Langsamer Blitz                | —                                | —                               | Unit führt ein Firmware-Update durch. Schalten Sie die Einheit während eines Firmware-Updates nicht aus.                                                                                                                                                                                                                                                                         |

### 4.7.2 Power-Taste

| Bundesland                         | Bedeutung                                                                |
| ---------------------------------- | ------------------------------------------------------------------------ |
| Aus                                | Einheit ist ausgeschaltet                                                |
| Lit (beständig) | Einheit ist eingeschaltet und funktioniert normal                        |
| Langsamer Puls                     | Die Einheit befindet sich im Standby oder führt eine Abschaltsequenz aus |

### 4.7.3 MOM Status LEDs

| Stat.                     | Bedeutung                                                         |
| ----------------------------------------- | ----------------------------------------------------------------- |
| ● (lit, grün, stetig)  | MOM ist verbunden und kommuniziert mit dem Host AX Center / AX 64 |
| Langsamer Blitz (grün) | MOM initialisiert oder wartet auf DADman zu antworten             |
| <unk> (aus)            | MOM ist nicht verbunden oder die Hosteinheit ist ausgeschaltet    |

_[Platzhalter: Kanal-Signal/OL/Träger-LED-Tabellen — anwendbar auf AX 64 Erweiterungskarten, die eine Frontplattenmessung beinhalten. Ausstehende Engineering-Dokumentation.]_

---

## Querverweise

- **Kapitel 1 — Einführung:** Kompatible Hardwareliste; Hardware-Familien und Klonkompatibilität
- **Kapitel 2 — Systemvoraussetzungen:** Paketinhalt pro Modell; unterstützte OS-Versionen
- **Kapitel 3 — Installation:** Installation des Thunderbolt-Treibers; Netzwerkkonfiguration
- **Kapitel 5 — Signalfluss & Architektur:** Wie jeder Konnektortyp in den Signal- und Uhrenpfad passt
- **Kapitel 7 — Operation:** Konfigurieren von Eingängen, Ausgängen, Routing und Überwachung von Profilen in DADman
- **Kapitel 8 — Erweiterte Funktionen:** Monitor-Profile, MOM-Konfiguration, Steuerung\|Paket
- **Anhang A — Spezifikation:** Volle elektrische und mechanische Spezifikationen pro Produkt
- **Anhang B — Connector Pinouts:** Pinzuweisungen für DB25, XLR, BNC und andere Konnektor-Typen

---
