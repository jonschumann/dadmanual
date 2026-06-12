---
title: "CARD-DANTE — 128-Kanal Dante / AES67 Schnittstelle"
sidebar_label: "KARTE DANTE"
sidebar_position: 5
---

# CARD-DANTE — 128-Kanal Dante / AES67 Schnittstellenkarte

> **SKU:** KARTE DANTE  
> \*\*Quelle: \*\* Spec Sheet CARD-DANTE, Ausgabe Juni 2026

---

## Übersicht

Das CARD-DANTE bietet 128-kanal-bidirektionale Dante und AES67 Audio over IP Verbindungen für jedes kompatible DAD Chassis an. Zwei RJ45 Netzwerk-Ports können als umgeschaltetes Netzwerk (daisy-chain) oder als redundantes Dante-Netzwerk mit unabhängigen primären und sekundären Verbindungen konfiguriert werden.

Die Karte ist voll kompatibel mit dem von Audinate entwickelten Dante-Ökosystem, einschließlich des Dante-Domain-Managers. Beispielratenkonvertierung (SRC) kann unabhängig von den Eingabe- und Ausgabepfaden aktiviert werden, so dass die Karte asynchron von der Host-Chassis-Abtastrate betrieben werden kann.

---

## Technische Spezifikationen

| Parameter                                                           | Wert                                                                               | Bedingungen / Notizen                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------ |
| Eingabekanäle                                                       | 128                                                                                | Bei 44,1 / 48 kHz (1FS) |
| Ausgabekanäle                                                       | 128                                                                                | Bei 44,1 / 48 kHz (1FS) |
| Kanäle bei 2FS (88.2 / 96 kHz)   | 64 in / 64 aus                                                                     |                                            |
| Kanäle bei 4FS (176.4 / 192 kHz) | 32 in / 32 aus                                                                     |                                            |
| Dante-Ströme                                                        | Bis zu 128 bidirektionale                                                          |                                            |
| Beispielraten                                                       | 44.1, 48, 88.2, 96, 176.4, 192 kHz |                                            |
| Netzwerkstandard                                                    | 1000Basis-T                                                                        |                                            |
| Netzwerk Ports                                                      | 2 × RJ45                                                                           | Umgeschaltet oder redundant                |
| Netzwerkmodus                                                       | Umgeschaltet oder redundant                                                        | Konfigurierbar im Dante-Controller         |
| AES67                                                               | Unterstützt                                                                        | SAP-Entdeckung                             |
| Dante-Domain-Manager                                                | Unterstützt                                                                        |                                            |
| Beispielrate Konvertierung                                          | Selektierbar bei Eingabe und Ausgabe unabhängig                                    |                                            |
| SRC Dynamikbereich                                                  | > 125 dB                                                                           | 64-Bit Gleitpunkt                          |
| SRC-Latenz (48 → 96 kHz)                         | Ungefähr 0,8 ms Eingabe / 1,1 ms Ausgabe                                           |                                            |
| SRC-Latenz (96 → 48 kHz)                         | Ungefähr 0,8 ms Eingabe / 1,1 ms Ausgabe                                           |                                            |
| Synchronisation                                                     | Dante-Netzwerkuhr oder interne Systemuhr                                           |                                            |
| Stromverbrauch                                                      | 4,5 W                                                                              |                                            |

---

## Verbindungen

| Port                                         | Konnektor | Signal      | Notizen                                 |
| -------------------------------------------- | --------- | ----------- | --------------------------------------- |
| Netzwerk (Dante primär)   | RJ45      | 1000Basis-T | Dante primären oder umgeschalteten Port |
| Netzwerk (Dante Sekundär) | RJ45      | 1000Basis-T | Dante sekundär/redundanten Port         |

---

## Netzwerkkonfiguration

Die beiden RJ45-Ports auf CARD-DANTE können in zwei Modi konfiguriert werden:

**Umgeschalteter Modus** — Die beiden Ports fungieren als integrierter 2-Port-Schalter, der Daisy-Chain-Netzwerk-Topologien ohne externen Schalter erlaubt. Beide Ports verbinden sich mit dem gleichen Dante-Netzwerk.

**Redundant Modus** — Jeder Port verbindet sich mit einem unabhängigen Dante Netzwerk (primär und sekundär). Dante versagt automatisch in das sekundäre Netzwerk, wenn der Primärpfad fehlschlägt. Redundant-Modus erfordert einen Schalter in jedem Netzwerk.

Konfigurieren Sie den Netzwerkmodus mit dem Dante Controller oder DADman.

---

## Installation

> **WARNUNG:** Schalten Sie das Chassis immer aus und trennen Sie das Netzkabel bevor Sie Erweiterungskarten installieren oder entfernen.

1. Schalten Sie das Chassis ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die CARD-DANTE in die Schlitzführer, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die vordere Halterung mit der befestigten Schraube.
5. Ethernetkabel je nach Bedarf an die RJ45-Ports anschließen.
6. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
7. DADman und/oder Dante Controller öffnen — die Karte erscheint als ein Dante-Gerät im Netzwerk.

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
