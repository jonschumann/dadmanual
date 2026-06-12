---
title: "Tillæg A — Forbindelsesstifter"
sidebar_label: "App. A — Forbindelsesstifter"
sidebar_position: 12
---

# Tillæg A — Forbindelsesstifter

> **Produkt:** Digital Audio Denmark MOM

> _[Pladsholder — udskift alle TBC-værdier med verificerede pindata fra teknik.]_

---

## A.1 BNC (MADI, Word Ur)

BNC-stik er ubalanceret 75 Ω koaksial. Signal bæres på midterstiften; skjold på den ydre shell. Ingen yderligere pinout tabel er påkrævet ud over stikket standard.

---

## A.2 DB25 — AES/EBU I/O (Tascam Pinout)

_[Pladsholder — 25-pin D-sub pinout for Tascam/ELCO standard, der anvendes på DAD-udvidelseskort og Penta AES konnektorer.]_

| Fastgør | Signal | Retning      | Noter                    |
| ------- | ------ | ------------ | ------------------------ |
| 1       | Ch 1 + | _Ind/Ud TBC_ |                          |
| 14      | Ch 1 − | _Ind/Ud TBC_ |                          |
| 2       | Ch 2 + | _Ind/Ud TBC_ |                          |
| 15      | Ch 2 − | _Ind/Ud TBC_ |                          |
| _…_     | _…_    | _…_          | _…_                      |
| 12      | Jord   | —            | Chassiser / kabel skjold |
| 25      | Jord   | —            | Chassiser / kabel skjold |

---

## A.3 XLR — AES11-referenceinput

| Fastgør | Signal                       |
| ------- | ---------------------------- |
| 1       | Ground / Skjold              |
| 2       | Varm (+)  |
| 3       | Koldt (−) |

---

## A.4 TOSLINK (ADAT / Optical MADI)

TOSLINK stik bærer optisk digital lyd. Ingen pin tildeling — observere sendepunktet (Tx) / modtage (Rx) orientering markeret på panelet.

---

## A.5 RJ45 (Ethernet)

Standard 1000BASE-T Ethernet. Kablet pr. TIA-568B.

| Fastgør | Signal |
| ------- | ------ |
| 1       | Tx +   |
| 2       | Tx −   |
| 3       | Rx +   |
| 4       | —      |
| 5       | —      |
| 6       | Rx −   |
| 7       | —      |
| 8       | —      |

---

## Krydsreferencer

- [Ch. 2 — Panel Description](./ch02-panel-description) — Forbindelsessteder
- [Ch. 4 — Signalforbindelser](./ch04-connections) — Tilslutningsprocedurer
