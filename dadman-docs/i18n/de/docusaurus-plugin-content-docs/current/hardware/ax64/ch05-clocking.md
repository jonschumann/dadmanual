---
title: "Kapitel 5 — Uhren & Synchronisierung"
sidebar_label: "Ch. 5 — Uhren"
sidebar_position: 6
---

# Kapitel 5 — Uhren & Synchronisierung

> **Produkt:** Digital Audio Dänemark AX64

---

## 5.1 Übersicht

Der AX64 unterstützt mehrere Uhr-Referenzquellen. Die aktive Uhrenquelle wird in DADman ausgewählt. Nur ein Gerät in einer DADman-Sitzung sollte der Uhrenmeister sein; alle anderen Geräte sollten darauf Slave sein.

---

## 5.2 Interne Uhr

_[Placeholder — Beschreibung der internen Kristalloszillatorspezifikation, Genauigkeit und wann die interne Uhr verwendet werden soll.]_

> **HINWEIS:** Benutzen Sie die interne Uhr nur, wenn keine externe Referenz verfügbar ist oder wenn diese Einheit der für das gesamte System vorgesehene Uhrenmeister ist.

---

## 5.3 Externe Wortuhr

_[Placeholder — Wort-Uhr-Eingabespezifikation, akzeptierte Preise, BNC-Termination.]_

| Akzeptiertes Format                        | Konnektor                          |
| ------------------------------------------ | ---------------------------------- |
| Wortuhr (1× Probenrate) | BNC (WC/VBB IN) |
| 256× Wort-Uhr                              | BNC (WC/VBB IN) |
| Video Black Burst                          | BNC (WC/VBB IN) |

---

## 5.4 MADI eingebaute Uhr

_[Placeholder — Uhren vom MADI Einbetten oder AES11 Referenzsignal.]_

---

## 5.5 ADAT Embedded Clock

_[Placeholder — Uhren von ADAT-Einbettung oder Netzwerk-PTP-Quelle.]_

---

## 5.6 Konfiguration der Uhr in DADman

_[Placeholder — wie man die Uhrquelle auswählt und die Sperre im DADman überprüft. DADman Handbuch Ch. 5.]_

1. Öffnen Sie in DADman die Gerätekonfiguration für den AX64.
2. Navigiere zum Abschnitt **Uhr** .
3. Wählen Sie aus dem Dropdown-Menü die gewünschte Uhrenquelle.
4. Überprüfen Sie, dass die Frontplatte **Ext.** LED leuchtet (für externe Referenz) oder **Int.** LED (für intern).

---

## Querverweise

- [Ch. 2 — Panel-Beschreibung](./ch02-panel-description) — Uhr-LED-Status
- [DADman User Manual — Ch. 5 — Signal Flow](/signal-flow) — Systemuhr-Topologie
