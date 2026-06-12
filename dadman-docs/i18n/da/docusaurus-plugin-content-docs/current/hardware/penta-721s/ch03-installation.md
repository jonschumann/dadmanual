---
title: "Kapitel 3 — Anlæg"
sidebar_label: "Ch. 3 — Anbringelse"
sidebar_position: 4
---

# Kapitel 3 — Anlæg

> **Produkt:** Digital Audio Denmark Penta 721s

> **Før du begynder:** Læs [Front Matter — Sikkerhed & Konventioner](./fm-safety) før du installerer denne enhed.

---

## 3.1 Webstedskrav

_[Pladsholder — miljøkrav: temperatur, fugtighed, ventilationsfrihed.]_

| Parameter             | Specifikation                                                    |
| --------------------- | ---------------------------------------------------------------- |
| Driftstemperatur      | 0 °C til 40 °C (32 °F til 104 °F)             |
| Opbevaringstemperatur | -20 °C til 60 °C                                                 |
| Relativ fugtighed     | 20% til 80% (ikke-kondenserende)              |
| Ventilation clearance | Minimum 1U (44 mm) over og under enhed i rack |

---

## 3.2 Rack Montering

_[Pladsholder — rack monteringsprocedure. Medtag reacking hardware reservedelsnumre og momentspecifikationer.]_

Penta 721s er en 1U rackmount (slank modulopbygget chassis) enhed, der monteres direkte i en standard 19-tommer rack med de medfølgende rack ører.

1. Fastgør rack ører til enheden ved hjælp af de medfølgende skruer.
2. Placer enheden i rack på den ønskede placering.
3. Sikker med rack skruer i bur nødder eller gevind rack strimler.

> **ADVARSEL:** Brug alle fire rackskruer. Stol ikke på færre end fire punkter af vedhæftning.

---

## 3.3 Strømtilslutning

_[Pladsholder — procedure for strømtilslutning.]_

Internal. IEC C14 inlet. 100–240 V AC, 50/60 Hz. Valgfri redundant PSU.

1. Tilslut et passende IEC C13 strømkabel til enhedens IEC C14 indløb.
2. Tilslut den anden ende til en grundlagt lysnetstikkontakt.
3. Tænd for enheden ved hjælp af frontpanelet Strømknappen.

> **ADVARSEL:** Opret kun forbindelse til en korrekt øremærket/jordbaseret stikkontakt. Må ikke besejre jordforbindelsen.

---

## 3.4 Netværksopsætning

Enheden forbinder til værtscomputeren over Ethernet. Et dedikeret Gigabit Ethernet-netværk er påkrævet.

_[Pladsholder — netværkskonfigurationsprocedure. Krydsreference til DADman manual Ch. 3.]_

1. Tilslut enhedens NET 1-port til en dedikeret Gigabit Ethernet switch.
2. Tilslut værtscomputerens dedikerede NIC til den samme switch.
3. Konfigurer værten NIC med en statisk IP-adresse i samme undernet som enheden.
4. Strøm på enheden.
5. Open DADman - enheden skal opdages automatisk.

> **BEMÆRKNING — Dedikeret netværk kræves:** Lydnetværkstrafik er latensfølsom. Rutér ikke DAD netværkslyd over switches delt med generel IT-trafik.

---

## 3.4 Initial Startup

_[Pladsholder — første effektprocedure og verifikationstrin.]_

1. Bekræft at alle signalkabler er frakoblet, før første tænd/sluk.
2. Anvend strøm.
3. Overvåge frontpanel-lysdioder — se [Ch. 2 — Panel Description](./ch02-panel-description) for forventede LED-stater.
4. Tilslut enheden til værtscomputeren (Ethernet (ingen Thunderbolt)).
5. Åbn DADman og bekræft at enheden vises i Enhedslisten.

---

## Krydsreferencer

- [Foran Foran — Sikkerhed](./fm-safety)
- [Ch. 2 — Panelbeskrivelse](./ch02-panel-description)
- [DADman Brugervejledning — Ch. 3 — Installation](/installation) — Opsætning af værtscomputer
