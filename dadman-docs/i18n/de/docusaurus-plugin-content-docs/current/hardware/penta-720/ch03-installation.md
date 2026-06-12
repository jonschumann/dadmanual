---
title: "Kapitel 3 — Installation"
sidebar_label: "Ch. 3 — Installation"
sidebar_position: 4
---

# Kapitel 3 — Installation

> **Produkt:** Digital Audio Denmark Penta 720

> **Bevor du beginnst:** Lesen Sie [Front Matter — Sicherheit & Konvention](./fm-safety) bevor Sie diese Einheit installieren.

---

## 3.1 Website-Anforderungen

_[Placeholder — Umweltanforderungen: Temperatur, Luftfeuchtigkeit, Lüftungsabstand.]_

| Parameter                 | Spezifikation                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Betriebstemperatur        | 0 °C bis 40 °C (32 °F bis 104 °F)                                |
| Speichertemperatur        | −20 °C bis 60 °C                                                                    |
| Relative Luftfeuchtigkeit | 20% bis 80% (ohne Kondensierung)                                 |
| Lüftungsfreiheit          | Mindestens 1U (44 mm) oberhalb und unterhalb der Einheit im Rack |

---

## 3.2 Rackmontage

_[Placeholder — Haltevorgang des Racks. Fügen Sie Racking-Hardware-Ersatzteilnummern und Drehmomentspezifikationen ein.]_

Der Penta 720 ist ein 2U-Rackmontage (modulares Chassis - Modular), das direkt in einem 19-Zoll-Rack mit den mitgelieferten Rackohren montiert wird.

1. Befestigen Sie die Rack-Ohren mit den mitgelieferten Schrauben.
2. Positionieren Sie die Einheit im Regal am gewünschten Ort.
3. Sichern Sie sich mit Rackschrauben in Käfigmuttern oder Gewindeschrauben.

> **WARNUNG:** Benutze alle vier Rackschrauben. Verlassen Sie sich nicht auf weniger als vier Anbaupunkte.

---

## 3.3 Stromverbindung

_[Placeholder — Stromverbindungsverfahren.]_

Intern. IEC C14 inlet. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Optional redundant PSU.

1. Schließen Sie ein passendes IEC C13-Stromkabel an den IEC C14-Eingang an.
2. Verbinden Sie das andere Ende mit einer gehobenen Netzabgabe.
3. Schalten Sie die Einheit mit der Power-Taste vorne ein.

> **WARNUNG:** Verbinden Sie sich nur mit einem korrekt erd/gemahlenen Netzausgang. Besiegen Sie die Bodenverbindung nicht.

---

## 3.4 Netzwerkeinrichtung

Die Einheit verbindet sich mit dem Host-Computer über Ethernet. Ein dediziertes Gigabit-Ethernet-Netzwerk wird benötigt.

_[Placeholder — Netzwerkkonfigurationsprozedur. Cross-Referenz zu DADman Handbuch Ch. 3.]_

1. Verbinden Sie den NET-1-Port mit einem dedizierten Gigabit-Ethernet-Schalter.
2. Verbinden Sie den NIC des Host-Computers mit dem gleichen Schalter.
3. Konfigurieren Sie den Host NIC mit einer statischen IP-Adresse im gleichen Subnetz wie die Einheit.
4. Einschalten der Einheit.
5. Open DADman — die Einheit sollte automatisch entdeckt werden.

> **NOTICE — dediziertes Netzwerk benötigt:** Audionetzverkehr ist latenzempfindlich. Führen Sie DAD-Netzwerk-Audio nicht über Schalter, die mit dem allgemeinen IT-Verkehr geteilt werden.

---

## 3.4 Initial Startup

_[Placeholder — Erstleistung und Verifikationsschritte.]_

1. Bestätigen Sie alle Signalkabel vor dem ersten Einschalten getrennt.
2. Macht anwenden.
3. Beobachten Sie Front-Panel-LEDs — siehe [Ch. 2 — Panel-Beschreibung](./ch02-panel-description) für erwartete LED-Zustände.
4. Verbinden Sie die Einheit mit dem Host-Computer (Ethernet (kein Thunderbolt)).
5. Öffnen Sie DADman und bestätigen Sie, dass die Einheit in der Geräteliste erscheint.

---

## Querverweise

- [Front Matter — Sicherheit](./fm-safety)
- [Ch. 2 — Panel-Beschreibung](./ch02-panel-description)
- [DADman User Manual — Ch. 3 — Installation](/installation) — Einrichtung des Host-Computers
