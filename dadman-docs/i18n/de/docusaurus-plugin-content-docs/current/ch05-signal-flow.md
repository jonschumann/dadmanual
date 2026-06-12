---
id: ch05-Signalfluss
title: "Kapitel 5 — Signalfluss & Architektur"
sidebar_label: "Ch. 5 — Signalfluss"
sidebar_position: 7
slug: /signal-flow
---

# Kapitel 5 — Signalfluss & Architektur

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0. — Blockdiagramme und Topologiedaten ausstehend; Ausstehende technische Überprüfung von DAD engineering  
> **Zuletzt aktualisiert:** Juni 2026

---

## In diesem Kapitel

| Abschnitt           | Cover                                   | Relevant für  |
| ------------------- | --------------------------------------- | ------------- |
| 5.1 | Ethernet-basierte Steuerungsarchitektur | Alle Benutzer |
| 5.2 | Die Geräteliste                         | Alle Benutzer |
| 5.3 | Netzwerkempfehlungen                    | Alle Benutzer |
| 5.4 | IP-Adresse                              | Alle Benutzer |
| 5.5 | Übersicht Uhr- und Sample-Rate          | Alle Benutzer |
| 5.6 | Abtastrate und Kanalkapazität           | Alle Benutzer |

---

## 5.1 Ethernetbasierte Steuerungsarchitektur

DADman kommuniziert mit allen angeschlossenen Hardware-Einheiten über Ethernet über das TCP/IP-Protokoll. Dies gilt für alle unterstützten Hardware – auch für Geräte, die sich auch über Thunderbolt 3 verbinden. Die Ethernet-Verbindung enthält nur Steuerdaten (Konfigurationsänderungen, Statusüberwachung, Dosierung); Audio wird je nach Hardware separat von MADI, Dante, AES3 oder Thunderbolt 3 befördert.

Da DADman ein Standard-Ethernet-Netzwerk nutzt, kann ein einziger Computer mit DADman mehrere Einheiten gleichzeitig steuern, sofern alle Einheiten im selben Netzwerk erreichbar sind. Einheiten erscheinen in der DADman **Geräteliste** von links nach rechts, geordnet nach ihrer Einheits-ID-Nummer.

_[Placeholder: system topology diagram — Computer mit DADman an einen Netzwerkschalter angeschlossen mit mehreren DAD-Hardware-Einheiten auf demselben Ethernet-Subnetz; Thunderbolt Kabel für Thunder\|Core units]_

### 5.1.1 Dual Communication Paths for Thunder|Core Hardware

Eine Thunder\|Core Einheit, die an einen Computer angeschlossen ist, verwendet zwei gleichzeitige, unabhängige Kommunikationswege:

| Pfad              | Protocol      | Zweck                                                                                |
| ----------------- | ------------- | ------------------------------------------------------------------------------------ |
| **Ethernet**      | TCP/IP        | DADman Kontrolle — Routen, gewinnen, Konfiguration                                   |
| **Donnerblitz 3** | PCIe über TB3 | Audio-Transport — die für Ihre DAW sichtbare Schnittstelle über Core Audio oder ASIO |

Nur-Ethernet-Hardware (AX32, DX32R, Penta-Serie) verwendet nur den Ethernet-Pfad. Für diese Geräte gibt es keinen Thunderbolt 3 Treiber, und sie erscheinen nicht als Audio-Schnittstellen auf dem Computer. Audio von diesen Geräten wird über MADI, Dante oder AES3 transportiert.

_[Platzhalter: Diagramm mit DADman und TB3 Treibern als parallele Pfade zwischen dem Computer und einer Thunder\|Core Einheit — DADman kommuniziert über Ethernet, TB3-Treiber, der über Thunderbolt 3 kommuniziert; mit einer Nur-Ethernet-Einheit kontrastiert, die nur den Ethernet-Pfad anzeigt]_

---

## 5.2 Die Geräteliste

Die Geräteliste ist die Top-Level-Ansicht in DADman, die alle entdeckten und verbundenen Einheiten zeigt. Jede Einheit wird mit einem farbigen Rand dargestellt, der sie visuell identifiziert und deren Steuerelemente von den angrenzenden Einheiten trennt.

Wenn DADman startet, versucht er, eine Verbindung zu Einheiten wiederherzustellen, die in der letzten Sitzung gefunden wurden. Wenn eine DADman Settings Datei (`.dms`) so konfiguriert ist, dass sie beim Start automatisch geladen wird, wird sie auf verbundene Einheiten angewendet. Wenn beim Start keine Konfigurationsdatei geladen wird, müssen die Verbindungen zu Einheiten in der Geräteliste manuell wiederhergestellt werden.

Siehe [Kapitel 7, Abschnitt 7.3 — Geräteliste] für die vollständige Geräteliste.

---

## 5.3 Netzwerkempfehlungen

> **HINWEIS:** Zur zuverlässigen Kontrolle empfiehlt DAD dringend ein dediziertes Ethernet-Netzwerk für DADman, das von Ihrem allgemeinen Studio-oder Einrichtungsnetz getrennt ist. Siehe [Kapitel 3, Abschnitt 3.7 — Konfiguration der Netzwerkverbindung] für eine detaillierte Anleitung zur topologischen Entwicklung.

DADman steuert Verkehr ist leicht. Allerdings teilen Sie das Kontrollnetz mit Audio über IP (Dante, AES67), EuControl, oder allgemeiner Internetverkehr kann zu Unterbrechungen bei der Konnektivität führen, die die Aktualisierung von Parametern in Echtzeit unterbrechen. Ein dedizierter Gigabit-Ethernet-Schalter oder eine direkte Kabelverbindung zwischen Computer und Gerät ist die empfohlene Topologie für alle professionellen Installationen.

---

## 5.4 IP-Adresse

Jede Hardware-Einheit benötigt eine eindeutige IP-Adresse im gleichen Subnetz wie der Computer mit DADman. Einheiten können mit statischen IP-Adressen (empfohlen für dedizierte Kontrollnetzwerke) oder DHCP-Adressen konfiguriert werden.

IP-Adressen werden entweder über das Front-Panel der Einheit, über eine Web-Browser-Schnittstelle oder über DADman nach der ersten Verbindung konfiguriert. Für die erstmalige IP Zuweisungsprozedur lesen Sie bitte die Installationsanleitung für Ihr spezifisches Hardwaremodell.

---

## 5.5 Übersicht über Uhr- und Beispielrate

Die Uhr bestimmt die Abtastrate mit der alle Audio im System betrieben werden. Da DADman-gesteuerte Hardware typischerweise im Zentrum einer größeren Audioinfrastruktur steht – Empfang und Routen von Audio aus mehreren Quellen – ist die Uhrenkonfiguration einer der wichtigsten Aspekte des System-Setups.

### 5.5.1 Die Uhr-Hierarchie

Alle digitalen Audio-Geräte in einem angeschlossenen System müssen eine gemeinsame Sample-Uhr teilen, um Klicks zu vermeiden -Pops, und Audio-Artefakte, die durch Unstimmigkeiten bei der Abtastrate verursacht werden. Ein Gerät fungiert als **Uhr Meister**; alle anderen sind **Uhr Sklaven** die mit ihm synchronisieren.

DADman-gesteuerte Hardware kann entweder als Master oder Slave fungieren und ihre Uhr aus mehreren Quellen ableiten:

| Uhr-Quelle        | Beschreibung                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Internal**      | Das Gerät erzeugt seine eigene Uhr bei der gewählten Abtastrate — verwenden Sie es, wenn das Gerät der Systemtakt ist                                            |
| **Wortuhr**       | Ein externes Wort-Uhr-Signal an der BNC-Wort-Uhr-Eingabe                                                                                                         |
| **MADI**          | Uhr aus einem eingehenden MADI-Stream extrahiert                                                                                                                 |
| **Dante**         | Uhr abgeleitet vom Dante Audio-Netzwerk (PTP-basiert)                                                                                         |
| **AES3**          | Uhr aus einem eingehenden AES3 Signal extrahiert                                                                                                                 |
| **Donnerblitz 3** | Uhr abgeleitet vom angeschlossenen Computer _(Thunder\|Core Hardware)_                                                                        |
| **Anpassen an**   | DADman entspricht automatisch der Abtastrate eines eingehenden digitalen Signals – nützlich für die Anpassung an Pro Tools oder andere Änderungen der Abtastrate |

\*[Platzhalter: Uhr-Hierarchiediagramm mit Uhr-Master → Wort-Uhr-Bus → Uhr-Slaven; Dante PTP als alternative Referenz] \*

Die Uhr-Quelle und Abtastrate sind im Tab **Conf** von DADman konfiguriert. Siehe [Kapitel 7, Abschnitt 7.5 — Uhr und Konfiguration] für die vollständige Referenz.

---

## 5.6 Beispielrate und Kanalkapazität

Einige Audioformate verfügen über weniger Kanäle mit höheren Abtastraten. Die folgende Tabelle zeigt, wie sich die Kanalkapazität mit Abtastrate für die gängigsten Formate der DAD-Hardware ändert.

| Format                                                                                           | Kanäle 44,1 / 48 kHz | Kanäle bei 88.2 / 96 kHz | Kanäle bei 176,4 / 192 kHz      |
| ------------------------------------------------------------------------------------------------ | -------------------- | ---------------------------------------- | ------------------------------- |
| MADI (standard)                                                               | 64                   | 32 (S/MUX 2)          | 16 (S/MUX 4) |
| MADI (Hochgeschwindigkeit)                                                    | 64                   | 64                                       | 32                              |
| Dante (Standard)                                                              | 64                   | 32                                       | 16                              |
| Dante 256 IPCore _(v5.8.1.6)_ | 256                  | 128                                      | 64                              |
| ADAT Lichtrohr                                                                                   | 8                    | 4 (S/MUX 2)           | —                               |
| Thunderbolt 3 (DAD-Treiber)                                                   | Bis zu 256           | Bis zu 256                               | Bis zu 256                      |

> **HINWEIS:** Die Kanalkapazitätswerte in der obigen Tabelle sind typisch; die tatsächlichen Werte hängen von Ihrem spezifischen Hardwaremodell und der Firmware-Version ab. Bestätigen Sie die Kapazität für Ihre Einheit in den technischen Spezifikationen in Anhang A.

---

## Querverweise

- **Kapitel 1 — Einführung:** Kompatible Hardwareliste; Übersicht über Hardware-Familien
- **Kapitel 3 — Installation:** DADman installieren und das Netzwerk konfigurieren
- **Kapitel 4 — Hardware-Beschreibung:** Front- und Hecksteckverbinder; physikalische I/O
- **Kapitel 7 — Operation:** Referenz für die Uhr-Quelle und Abtastrate
- **Anhang A — Spezifikation:** Komplette Hardware-Spezifikationstabellen, einschließlich Routing-Matrix-Kapazitäten

---

_[Ausstehend vom DAD Engineering:]_  
_— DADman TCP/UDP Port-Nummern, die für die Entdeckung und Kontrolle von Einheiten verwendet werden (benötigt für Ch. 9 Firewall Fehlerbehebung)_  
_— Dante 256 IPCore unterstützte Einheitenliste Bestätigung (v5. .1.6)_  
_— Drei als Platzhalter angegebene Blockdiagramm-Zahlen_
