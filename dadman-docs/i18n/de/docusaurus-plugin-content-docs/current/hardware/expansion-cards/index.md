---
title: "Erweiterungskarten"
sidebar_label: "Übersicht"
sidebar_position: 1
---

# Erweiterungskarten

DAD-Karten Slot in die Kartenbuchten auf kompatiblem Chassis um die I/O-Fähigkeit zu erweitern. Jede Karte belegt einen Slot und ist Hot-Stecker fähig. Mehrere Karten der gleichen oder unterschiedlichen Typen können gleichzeitig installiert werden, vorbehaltlich des gesamten Leistungsbudgets des Host-Chassis.

## Kompatibles Chassis

| Chassis    | Verfügbare Slots |
| ---------- | ---------------- |
| AX64       | 8                |
| Penta 720  | 8                |
| AX-Mitte   | 2                |
| Penta 721S | 1                |
| AX32       | 8                |

> Der Core 256 hat keine Erweiterungsplattformen. Das MOM hat keine Erweiterungsplätze.

---

## Kartenvergleich

| Karte                            | SKU           | Typ                            | Kanäle                   | Konnektor                        | Macht |
| -------------------------------- | ------------- | ------------------------------ | ------------------------ | -------------------------------- | ----- |
| [CARD-DA8](./card-da8)           | CARD-DA8      | Analoge DA Ausgabe             | 8 ch out                 | DB25 (Tascam) | 11 W  |
| [CARD-L8](./card-l8)             | KARTE L8      | Analoge AD-Zeileneingabe       | 8 h in                   | DB25 (Tascam) | 9 W   |
| [CARD-M8](./card-m8)             | Karton M8     | Analoge AD Mikro/Linie Eingabe | 8 h in                   | DB25 (Tascam) | 11 W  |
| [CARD-DANTE](./card-dante)       | KARTE DANTE   | Dante / AES67 AoIP             | 128 ch in + 128 ch aus   | 2 × RJ45                         | 4,5 W |
| [CARD-2MADI-SO](./card-2madi-so) | KART-2MADI-SO | Dual MADI via SFP              | 2 × 64 ch in + 64 ch aus | 2 × SFP                          | 4,5 W |
| [CARD-RAVENNA](./card-ravenna)   | CARD-RAVENNA  | Ravenna / AES67 / ST 2110-30   | 128 ch in + 128 ch aus   | 2 × RJ45                         | 7,5 W |
| [CARD-8AES](./card-8aes)         | Karton 8AES   | AES3 Digital-I/O               | 8 ch in + 8 ch aus       | TBC                              | TBC   |
| [CARD-AVB](./card-avb)           | CARD-AVB      | AVB / Mailand Netzwerk-Audio   | TBC                      | 2 × RJ45                         | TBC   |

---

## Slot Power Budget

Jedes Chassis verfügt über ein maximales Strombudget für seine Erweiterungskartenslots. Stellen Sie sicher, dass der kombinierte Stromverbrauch der installierten Karten das Chassis Limit nicht überschreitet.

| Chassis    | Karten-Slot Power-Budget                            |
| ---------- | --------------------------------------------------- |
| AX64       | 70 W insgesamt über 8 Slots                         |
| Penta 720  | Beziehen Sie sich auf Penta 720 Spezifikationen     |
| AX-Mitte   | Beziehen Sie sich auf die AX Center Spezifikationen |
| Penta 721S | Beziehen Sie sich auf Penta 721S Spezifikationen    |
| AX32       | Beziehen Sie sich auf AX32 Spezifikationen          |

> **WARNUNG:** Das Überschreiten des Schlitzstrombudgets kann zu instabilem Betrieb oder zum thermischen Herunterfahren führen. Berechne die gesamte Kartenleistung bevor du mehrere Karten mit hoher Leistung (CARD-DA8, CARD-M8) im gleichen Chassis installierst.

---

## Installationsübersicht

Alle Erweiterungskarten teilen die gleiche Installationsprozedur. Detaillierte Schritte finden Sie im Abschnitt Installation auf der Seite jeder Karte.

1. Schalten Sie das Chassis komplett ab und trennen Sie das Netzkabel vom Netz.
2. Entfernen Sie die Platte aus dem Zielfeld (halten Sie die Schraube).
3. Schieben Sie die Karte in die Schlitzführer, bis der Kantenverbinder voll sitzt.
4. Sichern Sie die Vorderseite der Karte mit der befestigten Schraube.
5. Schließen Sie das Netzkabel wieder an und schalten Sie das Chassis an.
6. DADman öffnen — die Karte wird automatisch in der I/O-Konfiguration angezeigt.
