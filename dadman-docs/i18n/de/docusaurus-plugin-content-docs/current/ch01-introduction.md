---
id: ch01-Einführung
title: "Kapitel 1 — Einführung & Produktübersicht"
sidebar_label: "Ch. 1 — Einführung"
sidebar_position: 3
slug: /Einführung
---

# Kapitel 1 — Einführung & Produktübersicht

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0. — Ausstehende technische Überprüfung von DAD engineering  
> **Zuletzt aktualisiert:** Juni 2026

---

## In diesem Kapitel

| Abschnitt           | Cover                                     | Relevant für  |
| ------------------- | ----------------------------------------- | ------------- |
| 1.1 | Was DADman ist und was es macht           | Alle Benutzer |
| 1.2 | Schlüsselfähigkeiten                      | Alle Benutzer |
| 1.3 | Softwarekomponenten und deren Beziehungen | Alle Benutzer |
| 1.4 | Kompatible Hardware                       | Alle Benutzer |
| 1.5 | Hardware-Familien und Klonkompatibilität  | Alle Benutzer |
| 1.6 | Wie man dieses Handbuch benutzt           | Alle Benutzer |
| 1.7 | Über DAD / NTP-Technologie                | Alle Benutzer |

> **HINWEIS — Umfang dieses Handbuch:** Dieses Handbuch ist für Benutzer von DAD (Digital Audio Denmark) Hardware geschrieben. Alle funktionierenden Beispiele, Screenshots und Verfahren verwenden DAD-Produkte — in erster Linie das AX Center, Core 256 und AX64 — als Referenzplattform. Avid MTRX, MTRX II und MTRX Studio sind OEM-Produkte, die DADman-Software verwenden und funktionell identisch mit einer DADman-Steuerungsperspektive sind; die Verfahren in diesem Handbuch gelten gleichermaßen für diese Produkte. Avid-hardware-spezifische Themen (iLok, Pro Tools Integration, Avid Master Account Downloads) werden dort angegeben, wo relevant, aber nicht im Mittelpunkt dieses Dokuments stehen.

---

## 1.1 Was ist DADman?

DADman ist eine Software-Anwendung, die professionelle Audio-Hardware von DAD (Digital Audio Dänemark) konfiguriert und steuert NTP Technology, und Avid über ein Standard-Ethernet-Netzwerk. Es ist der einzige Kontrollpunkt für alle angeschlossenen Einheiten – er bietet Zugriff auf analoge Eingangsgewinne, Output-Level, Routing, Uhr, Synchronisierung und Überwachung von einer einheitlichen Schnittstelle.

DADman ist eine **Channel strip-orientierte** Schnittstelle. Jede angeschlossene Einheit erscheint in der Geräteliste und ihren Eingängen, Ausgängen und Routingsteuerungen werden als eine Reihe von vertikalen Kanalstreifen dargestellt — ähnlich wie die Kanalstreifen auf einer Mischkonsole. Das bedeutet, dass unabhängig davon, mit welcher Hardware Sie arbeiten, die DADman-Schnittstelle einem konsistenten Layout folgt.

### 1.1.1 Das Grundprinzip: Einstellungen leben in der Einheit

> **HINWEIS:** Dies ist das wichtigste architektonische Konzept, das vor der Verwendung von DADman zu verstehen ist.

Alle in DADman konfigurierten Einstellungen — Routing, Gain, Ausgabe, Taktquelle, Kanalbezeichnungen, und alle anderen Parameter — werden **in der Hardware selbst gespeichert**, nicht in der DADman Software oder auf dem Computer, der sie ausführt. DADman liest den aktuellen Zustand der Einheit aus dem Netzwerk und zeigt sie an; Wenn Sie eine Änderung vornehmen, sendet DADman diese Änderung an die Einheit, die sie speichert.

Dies hat praktische Folgen:

- Wenn DADman geschlossen wird oder der Computer heruntergefahren wird, arbeitet die Hardware-Einheit weiterhin mit den zuletzt gespeicherten Einstellungen. Audio durchläuft ununterbrochen.
- Wenn DADman geöffnet wird und eine Einheit im Netzwerk gefunden wird DADman zeigt sofort den aktuellen Zustand der Einheit an — auch wenn diese Einstellungen zuletzt auf einem anderen Computer konfiguriert wurden.
- Um die Einstellungen nach einem Werkseinstellungen oder Firmware-Update wiederherzustellen, müssen Sie eine gespeicherte Konfigurationsdatei neu laden. Siehe [Kapitel 7, Abschnitt 7.1 — Sitzungsverwaltung].

---

## 1.2 Schlüsselfähigkeiten

DADman bietet die folgenden Steuerungsmöglichkeiten für kompatible Hardware:

| Kapazität                                                       | Beschreibung                                                                                                                                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Analogeingabesteuerung**                                      | Mic/Liniengewinn, Phantomleistung (+48 V), Pad, Phasenumkehr, Kanalkennzeichnung                                                                             |
| **Analogausgabe-Steuerung**                                     | Ausgabe, Stummschaltung, Kanalkennzeichnung, Auswahl des Ausgabebereiches (+18/+24 dBu)                                                                      |
| **Routing-Matrix**                                              | Vollständige Crosspoint-Routing-Matrix — bis zu 1.500 × 1.500 Kreuzpunkte auf unterstützter Hardware                                            |
| **Uhr und Synchronisierung**                                    | Auswahl der Abtastraten, Auswahl der Sync-Quellen, Anpassung der Uhrzeit                                                                                                        |
| **Kontrolle überwachen**                                        | Überwachen Sie Profile mit Quellen, Ausgängen, Klappen, Verzögerung und Talkback                                                                                                |
| **Steuerung mehrerer Einheit**                                  | Steuern Sie mehrere Hardware-Einheiten gleichzeitig aus einem einzigen DADman-Fenster                                                                                           |
| **EuCon-Integration**                                           | Kompatibel mit Avid EuControl zur Integration von Steueroberflächen                                                                                                             |
| **Pro Tools PRE emulation**                                     | MIDI-gesteuerte Vorverstärk-Emulation für MTRX-Einheiten                                                                                                                        |
| **Routing Voreinstellungen (Control\|Pack)** | Bis zu 32 Routing Voreinstellungen pro Einheit mit automatisiertem Triggerschalter _(v5.8.0 und höher)_                      |
| **Mic Gain Gruppen**                                            | Gruppieren Sie mehrere Mikro-Eingangskanäle für gleichzeitige Verstärkungseinstellung _(v5.8.1.6 und höher)_ |
| **Einstellungen Sicherung**                                     | Speichern und Wiederherstellen aller Einheitseinstellungen in DADman Settings Files (`.dms`) auf dem Computer                                                |
| **Kloneinheit**                                                 | Kopiere alle Einstellungen von einer Einheit zur anderen innerhalb der gleichen Hardware-Familie                                                                                |

---

## 1.3 Softwarekomponenten und ihre Beziehungen

DADman ist ein Teil eines Zwei-Komponenten-Softwaresystems. Die Unterscheidung zwischen den beiden Komponenten zu verstehen, ist für die korrekte Installation und Fehlerbehebung unerlässlich.

### 1.3.1 Die zwei Komponenten

| Komponente                    | Was es macht                                                                                                                                                     | Erforderlich für                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **DADman**                    | Konfiguriert und steuert Hardware-Einheiten über Ethernet — Routing, Gewinn, Überwachung, Uhrzeit                                                                | Alle unterstützte Hardware                 |
| **DAD Thunderbolt 3 Treiber** | Macht das Thunder\|Core Interface für den Computer als Core Audio (macOS) oder ASIO (Windows) Audiogerät für DAWs sichtbar | AX64, AX Center, Core 256, Avid MTRX Serie |

Diese beiden Anwendungen sind **unabhängig**. Sie kommunizieren nicht miteinander. Der Thunderbolt 3 Treiber ist nicht erforderlich, damit DADman funktioniert, und DADman ist nicht erforderlich, damit der Thunderbolt 3 Treiber das Audio-Interface einem DAW präsentieren kann. Für den kompletten Betrieb der Thunder\|Core-Hardware — die Konfiguration der Einheit _und_ Aufzeichnung oder Wiedergabe von Audio durch das Gerät — müssen beide installiert sein.

_[Placeholder: diagram showing DADman and TB3 driver as parallele paths between the computer and hardware unit — DADman communicating over Ethernet, TB3-Treiber kommunizieren über Thunderbolt 3]_

### 1.3.2 Kommunikationspfade

Eine Thunder\|Core Einheit, die an einen Computer angeschlossen ist, verwendet zwei gleichzeitige, unabhängige Kommunikationswege:

| Pfad              | Protocol      | Zweck                                                                                |
| ----------------- | ------------- | ------------------------------------------------------------------------------------ |
| **Ethernet**      | TCP/IP        | DADman Kontrolle — Routen, gewinnen, Konfiguration                                   |
| **Donnerblitz 3** | PCIe über TB3 | Audio-Transport — die für Ihre DAW sichtbare Schnittstelle über Core Audio oder ASIO |

Nur-Ethernet-Hardware (AX32, DX32R, Penta-Serie) verwendet nur den Ethernet-Pfad. Für diese Geräte gibt es keinen Thunderbolt 3 Treiber, und sie erscheinen nicht als Audio-Schnittstellen auf dem Computer. Audio von diesen Geräten wird über MADI, Dante oder AES3 transportiert.

### 1.3.3 Versionshistorie

| Anforderung                                                              | Minimale Version                                         |
| ------------------------------------------------------------------------ | -------------------------------------------------------- |
| DADman für Thunderbolt 3 Treiberunterstützung                            | v5.6.7.1 |
| DADman mit Apple Silicon (ARM64) native Unterstützung | v5.5.0                   |
| DADman mit Control\|Pack                                                 | v5.8.0                   |
| DADman mit Mic Gain Gruppen                                              | v5.8.1 Build 6           |
| DADman mit Ravenna Card und ST 2110-30 Unterstützung                     | v5.8.2 Build 2           |
| Letzte DADman Version unterstützt Windows 7 / 8                          | v5.7.0                   |
| Aktuelle Version (zum Zeitpunkt der Veröffentlichung) | v5.8.2 Build 2           |

---

## 1.4 Kompatible Hardware

DADman steuert Hardware von drei Produktfamilien: DAD/NTP-Technologieprodukte und Avid MTRX-Produkte. Die vollständige Liste der unterstützten Hardware zum Zeitpunkt der Veröffentlichung (DADman v5.8.2 build 2) wird unten angezeigt.

> **HINWEIS:** Konsultieren Sie immer die Release-Hinweise für Ihre spezifische DADman-Version, um die Kompatibilität mit neueren Hardware-Revisionen zu bestätigen. Die unterstützte Hardwareliste kann zwischen manuellen Revisionen aktualisiert werden.

### 1.4.1 DAD / NTP-Technologie Hardware

| Produkt       | Kategorie                                                    | Verbindung zum Computer  | Thunder\|Kern | Routing-Matrix                                                      |
| ------------- | ------------------------------------------------------------ | ------------------------ | ------------- | ------------------------------------------------------------------- |
| **AX-Center** | Modulares analoges & digitales Interface | Thunderbolt 3 + Ethernet | Ja            | 1,024 × 1,024                                                       |
| **Kern 256**  | Digitales Audio-Interface                                    | Thunderbolt 3 + Ethernet | Ja            | [Zu bestätigen] |
| **AX64**      | Modulare Audio-Schnittstelle                                 | Thunderbolt 3 + Ethernet | Ja            | [Zu bestätigen] |
| **AX32**      | AD/DA Wandlersystem                                          | Nur Ethernet             | Nein          | [Zu bestätigen] |
| **DX32R**     | Digital-I/O und Router                                       | Nur Ethernet             | Nein          | 400 inputs                                                          |
| **AX24**      | Audio-Schnittstelle                                          | Nur Ethernet             | Nein          | [Zu bestätigen] |

### 1.4.2 NTP-Technologie Penta Serie

| Produkt        | Kategorie                                                  | Verbindung zum Computer | Thunder\|Kern |
| -------------- | ---------------------------------------------------------- | ----------------------- | ------------- |
| **Penta 720**  | Modulare I/O Basiseinheit                                  | Nur Ethernet            | Nein          |
| **Penta 721s** | Modulare Audio-Router & -Schnittstelle | Nur Ethernet            | Nein          |

### 1.4.3 Produkte Dritter

| Produkt                 | Hersteller | Verbindung zum Computer  | Thunder\|Kern | DADman Version erforderlich                       |
| ----------------------- | ---------- | ------------------------ | ------------- | ------------------------------------------------- |
| **Dynaudio Control 01** | Dynaudio   | Thunderbolt 3 + Ethernet | Ja            | v5.7.2 und später |
| **Dynaudio Control 02** | Dynaudio   | Thunderbolt 3 + Ethernet | Ja            | v5.8.2 und später |

### 1.4.4 Avid MTRX Serie

Die Avid MTRX, MTRX II und MTRX Studio sind OEM-Produkte von DAD / NTP Technology und werden von Avid vertrieben. Sie verwenden DADman als Steuersoftware und sind funktionell identisch mit DAD-Hardware aus DADman-Perspektive. Dieses Handbuch behandelt keine Avid-spezifischen Themen wie die Lizenzierung von iLok, die Integration von Pro Tools oder die Verwaltung von Avid Master Accounts.

> **HINWEIS:** Für Avid MTRX, MTRX II und MTRX Studio, verwenden Sie nur die Version von DADman, die für Ihre Avid Hardware zugelassen ist, die von Ihrem Avid Master Account erhältlich ist. Siehe [Kapitel 3, Abschnitt 3.2 — Erwerb der Software].

| Produkt              | Verbindung zum Computer  | Thunder\|Kern |
| -------------------- | ------------------------ | ------------- |
| **Avid MTRX**        | Nur Ethernet             | Nein          |
| **Avid MTRX II**     | Thunderbolt 3 + Ethernet | Ja            |
| **Avid MTRX Studio** | Thunderbolt 3 + Ethernet | Ja            |

_[Ausstehend vom DAD-Engineering: Routing-Matrixkapazitäten für AX32, AX64, Core 256, AX24, Penta 720, Penta 721; Bestätigung der AX24-Verbindungsmethode]_

---

## 1.5 Hardware-Familien und Klonen Kompatibilität

DADman organisiert kompatible Hardware in drei **Familien**. Die Familienmitgliedschaft bestimmt, welche Einheiten mit der **Klone** Funktion Einstellungen untereinander austauschen können.

Klonen erlaubt es, alle Einstellungen von einer Einheit auf eine andere zu kopieren. Dies ist nützlich, um eine bekannte Konfiguration über mehrere identische Einheiten hinweg zu duplizieren oder um die Einstellungen einer Ersatzeinheit wiederherzustellen. Klonen ist nur zwischen Einheiten in der **gleichen Familie** erlaubt.

| Familie       | Mitglieder                                              | Notizen                                     |
| ------------- | ------------------------------------------------------- | ------------------------------------------- |
| **Familie 1** | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s | Originalgenerierung der Routing-Architektur |
| **Familie 2** | MTRX II · AX64 · AX Center · Core 256                   | Thunder\|Kerngenerierung                    |
| **Familie 3** | MTRX Studio                                             | Eigenständig                                |

> **HINWEIS — Klonen zwischen nicht identischen Einheiten:** Für beste Ergebnisse sollten die Quell- und Zieleinheiten identisch konfiguriert sein (gleiche Karten in den gleichen Slots). Einstellungen für in der Ausgangseinheit vorhandene aber nicht in der gleichen Slotposition in der Zieleinheit sind auf Werkseinstellungen am Ziel gesetzt. Einstellungen für im Ziel vorhandene aber nicht im Quelltext enthaltene Karten bleiben davon unberührt.

---

## 1.6 Wie man dieses Handbuch benutzt

Dieses Handbuch ist so organisiert, dass es sowohl das sequentielle als auch das Lesen von Referenzen unterstützt.

**Wenn du neu bei DADman bist:** Lese Kapitel 1–3 in Reihenfolge, dann folge Kapitel 6 (Erste Schritte) Schritt für Schritt. Zurück zu Kapitel 4–5 für Hardware-Hintergrund und Kapitel 7, wenn Sie eine detaillierte Bedienungsanleitung benötigen.

**Wenn du ein erfahrener Benutzer bist, der nach einem bestimmten Thema sucht:** Nutze den Abschnittsindex oben in jedem Kapitel, oder der vollständige Index in Anhang H.

**Dokumentenkonventionen in diesem Handbuch verwenden:**

| Konvention                                                              | Bedeutung                                                                                      |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Bold text**                                                           | Hardware-Steuerungsnamen, Menüelemente, Tastenbeschriftungen, Tab-Namen                        |
| 'Monospace-Text'                                                        | Dateinamen, Dateiendungen, Ordnerpfade, Befehlszeileneingabe                                   |
| _[Placeholder]_     | Inhalt, der von DAD Engineering bestätigt oder während der Überprüfung hinzugefügt werden soll |
| _(v5.8.0 und höher)_ | Feature Verfügbarkeit — zeigt die mindestens benötigte DADman Version an                       |
| _(AX32 / Familie 1)_                                 | Hardware-Variation — Parameter gilt speziell für die benannte Hardware                         |

**Querverweise** verwenden das Format [Kapitel X, Abschnitt X.X — Titel] um auf verwandte Inhalte innerhalb dieses Handbuchs zu verweisen.

---

## 1.7 Über DAD / NTP-Technologie

Digital Audio Denmark (DAD) ist eine Marke der NTP-Technologie A/S mit Hauptsitz in Gentofte, Dänemark. NTP Technology entwickelt und produziert professionelle Audio-Hardware für Broadcast, Post-Production, Live Sound und Studio-Anwendungen.

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Web: www.digitalaudio.dk  
Unterstützung: www.digitalaudiosupport.com  
E-Mail: info@digitalaudio.dk

---

## Querverweise

- **Kapitel 2 — Systemvoraussetzungen:** Betriebssystemkompatibilität, minimale Hardware-Spezifikationen, Paketinhalt
- **Kapitel 3 — Installation:** DADman und der Thunderbolt 3 Treiber installieren
- **Kapitel 5 — Signalfluss & Architektur:** Wie DADman mit Hardware kommuniziert; Uhrübersicht
- \*\*Kapitel 6 — Erste Schritt-für-Schritt verwenden
- **Kapitel 7 — Operation:** Volle Schnittstellenreferenz und operative Abläufe
- **Anhang A — Spezifikation:** Komplette Hardware-Spezifikationstabellen

---

_[Ausstehend vom DAD-Engineering:]_  
_— Routing Matrixkapazitäten für AX32, AX64, Core 256, AX24, Penta 720, Penta 721s_  
_— Bestätigung der AX24-Verbindungsmethode_  
_— Einführungstext für Abschnitt DAD / NTP-Technologie_
