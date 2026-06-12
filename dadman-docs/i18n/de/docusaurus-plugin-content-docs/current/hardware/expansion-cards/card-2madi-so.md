---
title: "CARD-2MADI-SO — Dual MADI Interface mit SRC"
sidebar_label: "KART-2MADI-SO"
sidebar_position: 6
---

# CARD-2MADI-SO — Dual MADI Interface Card mit SRC

> **SKU:** KARTE 2MADI-SO  
> \*\*Quelle: \*\* Spec Sheet CARD-MADI-SO, Ausgabe Juni 2026

---

## Übersicht

Die CARD-2MADI-SO bietet zwei unabhängige bidirektionale MADI-Verbindungen über SFP-Module für jedes kompatible DAD-Chassis an. Jeder MADI-Anschluss liefert 64 Kanäle in und 64 Kanäle bei 48 kHz für insgesamt 128 Kanäle pro Karte pro Richtung.

SFP-Module werden separat verkauft und können optisch (LC, Ein- oder Mehrmodus) oder elektrisch (HD-BNC-Koaxial) sein. Diese Flexibilität ermöglicht es der Karte, sich mit nahezu jeder bestehenden MADI-Infrastruktur zu verbinden. Die Sample-Rate Konvertierung (SRC) kann unabhängig von der Eingabe und Ausgabe jedes Ports aktiviert werden.

---

## Technische Spezifikationen

| Parameter                                   | Wert                                                                                                           | Bedingungen / Notizen                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| MADI-Ports                                  | 2                                                                                                              | Unabhängige bidirektionale Ports                                     |
| Kanäle pro Port                             | 64 in / 64 aus                                                                                                 | Bei 44,1 / 48 kHz (1FS)                           |
| Sender gesamt                               | 128 in / 128 out                                                                                               | Beide Ports kombiniert                                               |
| Kanäle pro Port bei 2FS                     | 32 in / 32 aus                                                                                                 | Bei 88.2 / 96 kHz                                    |
| Kanäle pro Port bei 4FS                     | 16 in / 16 aus                                                                                                 | Bei 176,4 / 192 kHz                                                  |
| Kanäle pro Port bei 8FS                     | 8 in / 8 out                                                                                                   | Bei 352,8 / 384 kHz                                                  |
| Beispielraten                               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                      |
| Frame modes                                 | Legacy (SMUX) und Hochgeschwindigkeiten                                                     |                                                                      |
| Kanalanzahl                                 | 56-Kanal und 64-Kanal                                                                                          |                                                                      |
| SFP-Schnittstelle                           | 2 × SFP-Käfig                                                                                                  | Optische LC oder HD-BNC Coax (separat erhältlich) |
| Beispielrate Konvertierung                  | Selektierbar pro Port, Eingabe und Ausgang unabhängig                                                          |                                                                      |
| SRC-Latenz (48 → 96 kHz) | Ungefähr 0,8 ms Eingabe / 1,1 ms Ausgabe                                                                       | Pro Port                                                             |
| SRC-Latenz (96 → 48 kHz) | Ungefähr 0,8 ms Eingabe / 1,1 ms Ausgabe                                                                       | Pro Port                                                             |
| Synchronisation                             | MADI Eingabeaufforderung oder interne Systemuhr                                                                | Pro Port                                                             |
| Stromverbrauch                              | 4,5 W                                                                                                          |                                                                      |

---

## Verbindungen

| Port              | Konnektor | Signal     | Notizen                    |
| ----------------- | --------- | ---------- | -------------------------- |
| MADI I/O — Port A | SFP cage  | AES10 MADI | SFP-Modul separat verkauft |
| MADI I/O — Port B | SFP cage  | AES10 MADI | SFP-Modul separat verkauft |

---

## SFP-Module

SFP-Module sind **nicht enthalten** und müssen separat bestellt werden. Zwei Typen sind von DAD:

| SKU                  | Beschreibung                                                       |
| -------------------- | ------------------------------------------------------------------ |
| MOD-SFP-COAX         | SFP elektrischer Transceiver für MADI — HD-BNC Stecker             |
| MOD-SFP-1300-LD      | SFP optischer Transceiver für MADI — 1310 nm, 100BASE Multimode LC |
| CON-2BNC-HD/STD-0,5M | HD-BNC zu BNC Adapterkabel (0,5 m)              |

> **Hinweis:** Der MOD-SFP-COAX verwendet HD-BNC-Steckverbinder. Benutzen Sie CON-2BNC-HD/STD-0,5M Adapterkabel, um sich an die Standard 75 <unk> BNC MADI Geräte anzuschließen.

---

## Installation

> **WARNUNG:** Schalten Sie das Chassis immer aus und trennen Sie das Netzkabel bevor Sie Erweiterungskarten installieren oder entfernen.

> **KAUFUNG:** SFP-Module können mit der Power-Karte eingelegt und entfernt werden. Um jedoch eine Beschädigung des SFP-Käfigs zu vermeiden, legen Sie immer die Module direkt und mit gleichmäßigem Druck ein. Erzwingen Sie kein Modul, das nicht einfach sitzt.

1. Schalten Sie das Chassis ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die CARD-2MADI-SO in die Schlitzführer, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die vordere Halterung mit der befestigten Schraube.
5. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
6. Legen Sie die entsprechenden SFP-Module in die SFP-Käfige ein und verbinden Sie MADI-Kabel.
7. Open DADman — Beide MADI-Ports erscheinen in der I/O-Routingansicht.

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
