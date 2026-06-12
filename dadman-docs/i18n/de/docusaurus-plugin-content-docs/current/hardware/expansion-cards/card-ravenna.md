---
title: "CARD-RAVENNA — 128-Kanal Ravenna / AES67 / ST 2110-30 Schnittstelle"
sidebar_label: "CARD-RAVENNA"
sidebar_position: 7
---

# CARD-RAVENNA — 128-Kanal Ravenna / AES67 / ST 2110-30 Schnittstellenkarte

> **SKU:** CARD-RAVENNA  
> \*\*Quelle: \*\* Spec Sheet CARD-RAVENNA, Ausgabe Juni 2026

---

## Übersicht

Die CARD-RAVENNA bietet 128-Kanal-bidirektionale Ravenna, AES67 und SMPTE ST 2110-30 Audio over IP Verbindungen für jedes kompatible DAD Chassis an. Zwei RJ45 Netzwerk-Ports können als umgeschaltetes Netzwerk konfiguriert werden oder mit ST 2022-7 Seamless Protection Switching (SPS) für hitless Redundanz bei Dual-Network-Installationen.

Die Karte ist voll interoperabel mit Ravenna, AES67, und ST 2110-30 Ökosysteme und unterstützt Industriestandard-Erkennung und -Kontrolle über WebUI, NMOS IS-04/IS-05, SAP, ANEMAN und JSON API. PTPv2 (IEEE 1588-2008) wird sowohl im Master- als auch im Slave-Modus unterstützt.

Die Sample-Rate Konvertierung (SRC) kann auf Ein- und Ausgabepfaden gemeinsam aktiviert werden, so dass die Karte asynchron von der Host-Chassis Sample-Rate aus betrieben werden kann.

---

## Technische Spezifikationen

| Parameter                                   | Wert                                                                                                           | Bedingungen / Notizen                                     |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Eingabekanäle                               | 128                                                                                                            | Bei 44,1 / 48 kHz (1FS)                |
| Ausgabekanäle                               | 128                                                                                                            | Bei 44,1 / 48 kHz (1FS)                |
| Skalierung der Kanalanzahl                  | Skalen mit Abtastrate                                                                                          | Höhere Sample-Raten reduzieren die Kanalanzahl pro Stream |
| Ravenna / AES67 Streams                     | Bis zu 64 bidirektionale                                                                                       |                                                           |
| Beispielraten                               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                           |
| Netzwerkstandard                            | 1000Basis-T                                                                                                    |                                                           |
| Netzwerk Ports                              | 2 × RJ45                                                                                                       | Umgeschaltet oder ST 2022-7 SPS redundant                 |
| Redundanz                                   | ST 2022-7 Nahtloser Schutzschalter                                                                             | Hitless Failover im Dual-Netzwerk                         |
| Synchronisation                             | PTPv2 (IEEE 1588-2008) — Master oder Slave                                                  | Oder interne Systemuhr                                    |
| AES67                                       | Unterstützt                                                                                                    |                                                           |
| ST 2110-30                                  | Unterstützt                                                                                                    |                                                           |
| NMOS                                        | IS-04 (Entdeckung) und IS-05 (Verbindungsmanagement)                     |                                                           |
| Entdeckung/Steuerung                        | WebUI, NMOS, Ravenna, SAP, ANEMAN, JSON-API                                                                    |                                                           |
| Beispielrate Konvertierung                  | Selektierbar bei Eingabe und Ausgabe                                                                           |                                                           |
| SRC-Latenz (48 → 96 kHz) | Ungefähr 0,8 ms Eingabe / 1,1 ms Ausgabe                                                                       |                                                           |
| SRC-Latenz (96 → 48 kHz) | Ungefähr 0,8 ms Eingabe / 1,1 ms Ausgabe                                                                       |                                                           |
| Stromverbrauch                              | 7,5 W                                                                                                          |                                                           |

---

## Verbindungen

| Port                                   | Konnektor | Signal      | Notizen                                      |
| -------------------------------------- | --------- | ----------- | -------------------------------------------- |
| Netzwerk (primäre)  | RJ45      | 1000Basis-T | Ravenna / AES67 / ST 2110-30 primäre         |
| Netzwerk (sekundär) | RJ45      | 1000Basis-T | ST 2022-7 redundant oder umgeschalteter Port |

---

## Netzwerkkonfiguration

**Umgeschalteter Modus** — Beide Ports funktionieren als integrierter Schalter, wodurch Daisy-Kettentopologie ohne externen Schalter ermöglicht wird.

**ST 2022-7 SPS Modus** — Jeder Port verbindet sich mit einem unabhängigen Netzwerk. ST 2022-7 Nahtloser Schutzschalter bietet einen schlaglosen Failover — wenn ein Netzwerkpfad fehlschlägt, geht Audio ohne Unterbrechung über den anderen weiter. Dieser Modus erfordert einen dedizierten Schalter in jedem Netzwerk.

Konfigurieren Sie den Netzwerkmodus und die PTP Rolle (Master / Slave) über den WebUI oder den NMOS Controller der Karte.

---

## Entdeckung und Kontrolle

CARD-RAVENNA unterstützt mehrere Erkennungs- und Kontrollschnittstellen:

| Schnittstelle | Zweck                                                |
| ------------- | ---------------------------------------------------- |
| WebUI         | Browserbasierte Konfiguration und Status             |
| NMOS IS-04    | Geräte- und Ressourcenerkennung                      |
| NMOS IS-05    | Verbindungsverwaltung (Routing)   |
| Ravenna       | Entdeckung und Kontrolle der indigenen Ravenna       |
| SAP           | Sitzungsankündigung (AES67 / SDP) |
| ANEMAN        | ANEMAN Netzwerk Manager Integration                  |
| JSON API      | Programmatische Konfiguration                        |

---

## Installation

> **WARNUNG:** Schalten Sie das Chassis immer aus und trennen Sie das Netzkabel bevor Sie Erweiterungskarten installieren oder entfernen.

1. Schalten Sie das Chassis ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die CARD-RAVENNA in die Schlitzführer, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die vordere Halterung mit der befestigten Schraube.
5. Verbinden Sie Ethernetkabel mit den RJ45-Ports wie für Ihre Netzwerktopologie.
6. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
7. DADman öffnen — die Karte erscheint als AoIP-Schnittstelle in der I/O-Routingansicht.
8. Greifen Sie auf das WebUI der Karte für erweiterte Netzwerk- und PTP-Konfiguration zu.

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
