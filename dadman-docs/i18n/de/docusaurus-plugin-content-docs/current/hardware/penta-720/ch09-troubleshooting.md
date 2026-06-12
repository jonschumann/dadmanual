---
title: "Kapitel 9 — Fehlerbehebung"
sidebar_label: "Ch. 9 — Problembehebung"
sidebar_position: 10
---

# Kapitel 9 — Fehlerbehebung

> **Produkt:** Digital Audio Denmark Penta 720

> Wenn Sie ein Problem mit diesem Kapitel nicht lösen können, wenden Sie sich bitte an die Unterstützung von Digital Audio Denmark unter [digitalaudio.dk/support](https://digitalaudio.dk/support). Wenn Sie Support kontaktieren, haben Sie die Seriennummer, Firmware-Version und DADman Version zur Verfügung.

---

## 9.1 Kurzreferenz

| Symptom                            | Erste Prüfung                                          | Referenz                                                    |
| ---------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| Kein Strom / Einheit startet nicht | Stromkabel und Netzausgang überprüfen. | [Ch. 3 — Installation](./ch03-installation) |

\| Einheit nicht von DADman entdeckt | Prüfen Sie Ethernet-Kabel und Schalterverbindung. Überprüfen Sie den Host NIC im gleichen Subnetz. QoS Einstellungen auf verwaltetem Schalter überprüfen. | [Ch. 3 — Installation](./ch03-installation#34-network-setup) |
\| Audioabbrecher auf Ethernet | Dedizierter Netzwerkschalter erforderlich — teilen Sie nicht mit dem IT-Verkehr. QoS Konfiguration überprüfen. | [Ch. 3 — Installation](./ch03-installation) |
\| Uhrenfehler (Err. LED Leucht) | Überprüfen Sie externe Referenzquelle ist vorhanden und mit der richtigen Abtastrate. Terminierung der Wort-Uhr überprüfen. | [Ch. 5 — Uhren](./ch05-clocking) |
\| Ton auf allen Kanälen | Routing in DADman überprüfen. Überprüfen Sie die Abtastrate Übereinstimmung Sitzung. physische Verbindungen überprüfen. | [Ch. 4 — Verbindungen](./ch04-connections) |
\| Firmware-Update fehlgeschlagen | Nicht ausschalten. Warten Sie 5 Minuten, bis die Einheit Timeout hat. Kontaktieren Sie den DAD Support, wenn die Einheit nicht neu gestartet wird. | [Ch. 8 — Wartung](./ch08-maintenance) |

---

## 9.2 Detaillierte Fehlerbehebung

### 9.2.1 Einheit aktiviert nicht

_[Placeholder — Schritt-für-Schritt-Diagnose für keine Stromversorgung.]_

1. Bestätigen Sie, dass der Netzausgang live mit einem bekannten Gerät ist.
2. Prüfen Sie, ob das IEC-Stromkabel an beiden Enden voll sitzt.
3. Überprüfen Sie die Power-Taste auf der Vorderseite (drücken und halten Sie 2 Sekunden).
4. Falls die Einheit noch nicht gestartet ist, kontaktieren Sie den DAD-Support.

---

### 9.2.2 Einheit nicht in DADman erkannt

_[Placeholder — Entscheidungsbaum für Erkennungsfehler.]_

---

### 9.2.3 Uhr Fehler

_[Placeholder — systematisches Verfahren zur Uhr zur Fehlerbehebung.]_

---

### 9.2.4 Audioprobleme

_[Placeholder — Stumm, Verzerrung, Geräusch, Kanalwechseldiagnostik, Stummgeschaltung.]_

---

## Querverweise

- [Ch. 2 — Panel-Beschreibung](./ch02-panel-description) — LED-Status-Referenz
- [Ch. 5 — Uhren](./ch05-clocking)
- [DADman User Manual — Ch. 9](/troubleshooting) — Software-seitige Fehlerbehebung
