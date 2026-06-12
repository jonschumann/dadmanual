---
title: "Kapitel 2 — Panelbeschreibung"
sidebar_label: "Ch. 2 — Panelbeschreibung"
sidebar_position: 3
---

# Kapitel 2 — Panelbeschreibung

> **Produkt:** Digital Audio Denmark Penta 720

> **Wie man dieses Kapitel nutzt:** Dieses Kapitel identifiziert jede Steuerung und jeden Konnektor der Penta 720. Für Signalpegel und Verbindungsverfahren siehe [Ch. 4 — Signalverbindungen](ch04-connections. Für die Bedeutung von LED-Status siehe [Abschnitt 2.3](#23-led-state-reference).

---

## 2.1 Frontbereich

![Penta 720 Frontplatte](/img/panel-penta720.png)
_Abbildung 2.1 — Penta 720 Frontplatte. Nummerierte Anrufe entsprechen der unten stehenden Referenztabelle._

| Referenz | Label      | Typ                                   | Funktion                                                                                                                                                                                      | Punkt |
| -------- | ---------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1        | **Ready**  | LED-Anzeige (grün) | Einheit hat Bootsequenz abgeschlossen und ist bereit für den Betrieb                                                                                                                          | Grau  |
| 2        | **Fehler** | LED-Anzeige (rot)  | Ein interner Fehler oder Konfigurationsfehler wurde erkannt                                                                                                                                   | Grau  |
| 3        | **PSU OK** | LED-Anzeige (grün) | Die Primärstromversorgung funktioniert einwandfrei. Bei Geräten mit redundanter PSU bestätigt eine zweite PSU OK Anzeige den Status der Sicherungsversorgung. | Grau  |

---

## 2.2 Rückseite

> **HINWEIS:** Die Penta 720 hintere Paneele variiert je nach eingebauter Erweiterungskarte. Die unten angezeigte Konnektor-Ergänzung spiegelt eine typische Konfiguration wider. Überprüfen Sie das Kartenlayout in Ihrer Einheit, bevor Sie eine Verbindung herstellen.

| Referenz | Label                                                                      | Konnektor                               | Funktion                                                                                                                                                                                                                                    | Punkt    |
| -------- | -------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 1        | **Energie (primäre)**                                   | IEC C14 Eingang                         | Netzeingabe. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                                                        | Dunkel   |
| 2        | **Power (Sicherung)**                                   | IEC C14 Eingang                         | Redundant Netzeingabe (sofern vorhanden). Stellt Hot-Swap PSU Redundanz zur Verfügung.                                                                                                   | Dunkel   |
| 3        | **AES/EBU I/O 1–4**                                                        | DB25 (Tascam-Pinout) | AES/EBU Digital-Audio-I/O, Kanäle 1–4 (4 Stereo-Paare = 8 Kanäle).                                                                                                                                       | Orange   |
| 4        | **AES/EBU I/O 5–8**                                                        | DB25 (Tascam-Pinout) | AES/EBU Digital-Audio-I/O, Kanäle 5–8 (4 Stereo-Paare = 8 Kanäle).                                                                                                                                       | Orange   |
| 5        | \*\*MADI IN \*\*                                                           | BNC, 75 <unk>                           | MADI Koaxialeingabe. AES10 konform.                                                                                                                                                                         | Blau     |
| 6        | **MADI AUS**                                                               | BNC, 75 <unk>                           | MADI Koaxialausgabe.                                                                                                                                                                                                        | Blau     |
| 7        | **Optischer I/O**                                                          | TOSLINK (optisch)    | Optische MADI oder ADAT I/O (kartenabhängig).                                                                                                                                                            | Türkis   |
| 8        | **WC/VBB IN**                                                              | BNC, 75 <unk>                           | Wortuhr oder Video Black Burst Eingabe.                                                                                                                                                                                     | Violett  |
| 9        | **WOCHE AUS**                                                              | BNC, 75 <unk>                           | Wortuhr-Ausgabe.                                                                                                                                                                                                            | Violett  |
| 10       | \*\*AES11 IN \*\*                                                          | XLR (weiblich)       | AES11 Digital Audio Referenzsignaleingang. Wird verwendet, um die Einheit mit einer AES11-Referenzquelle zu synchronisieren.                                                                                | Grün     |
| 11       | **NET 1**                                                                  | RJ45 (1000Base-T)    | Ethernet-Steuerung und/oder Dante-Audio-Netzwerk, Port 1.                                                                                                                                                                   | Schiefer |
| 12       | **NET 2**                                                                  | RJ45 (1000Base-T)    | Ethernet-Steuerung und/oder Dante-Audio-Netzwerk, Port 2.                                                                                                                                                                   | Schiefer |
| 13       | **SLOT 1** _(typisch: Dante/AES67 I/O)_ | 2× SFP                                  | Erweiterungskarte Slot 1. Mit einer Dante/AES67 I/O-Karte: zwei SFP-Ports für optische oder Kupfer-Dante-Netzwerkverbindungen. Slotinhalte variieren je nach Konfiguration. | Türkis   |

---

## 2,3 LED Status Referenz

### Status LEDs

| LED                                            | Farbe                              | Bedeutung                                                                              |
| ---------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| Bereit                                         | Grün (stabil)   | Boot-Sequenz abgeschlossen — Einheit für den Betrieb bereit                            |
| Fehler                                         | Rot (beständig) | Interner Fehler oder Konfigurationsfehler erkannt                                      |
| PSU OK                                         | Grün (stabil)   | Primärstromversorgung korrekt funktioniert                                             |
| PSU OK (2.) | Grün (stabil)   | Redundante PSU vorhanden und betriebsbereit (nur mit doppelter PSU) |

---

## Querverweise

- [Ch. 4 — Signalverbindungen](ch04-connections) — Signalpegel und Verbindungsprozeduren
- [Ch. 6 — Operation](ch06-operation) — Steuerung und Anzeigeoperation
- [App. A — Connector Pinouts](appa-connector-pinouts) — Zuordnungen
