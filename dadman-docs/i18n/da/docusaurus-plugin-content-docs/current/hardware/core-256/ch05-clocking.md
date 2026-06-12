---
title: "Kapitel 5 — Ure Og Synkronisering"
sidebar_label: "Ch. 5 — Ure"
sidebar_position: 6
---

# Kapitel 5 — Ure Og Synkronisering

> **Produkt:** Digital Audio Denmark Core 256

---

## 5.1 Oversigt

Core 256 understøtter flere ur referencekilder. Den aktive urkilde er valgt i DADman. Kun én enhed i en DADman-session bør være ur master; alle andre enheder bør slave til det.

---

## 5.2 Intern Ur

_[Pladsholder — beskrive intern krystal oscillator specifikation, nøjagtighed, og hvornår man skal bruge intern ur.]_

> **BEMÆRK:** Brug kun det interne ur, når der ikke er nogen ekstern reference til rådighed, eller når denne enhed er den udpegede ur master for hele systemet.

---

## 5.3 Ekstern Ord Ur

_[Pladsholder — word clock input specifikation, accepterede satser, BNC opsigelse.]_

| Accepteret format                               | Forbindelse                        |
| ----------------------------------------------- | ---------------------------------- |
| Tekstur (1 × prøvehastighed) | BNC (WC/VBB IN) |
| 256 × ordur                                     | BNC (WC/VBB IN) |
| Video Black Burst                               | BNC (WC/VBB IN) |

---

## 5.4 MADI Indlejret Ur

_[Pladsholder - låsning fra MADI indlejring eller AES11 referencesignal.]_

---

## 5.5 ADAT Embedded Clock

_[Pladsholder - clocking fra ADAT indlejring eller netværk PTP kilde.]_

---

## 5.6 Ur konfiguration i DADman

_[Pladsholder — hvordan du vælger ur kilde og kontrollere lås i DADman. Krydsreference DADman manual Ch. 5.]_

1. I DADman, åbne Enhedskonfigurationen for Core 256.
2. Naviger til **Ur** sektionen.
3. Vælg den ønskede urkilde fra rullemenuen.
4. Kontroller, at front-panelet **Ext.** LED lyser (for ekstern reference) eller **Int.** LED (for internal).

---

## Krydsreferencer

- [Ch. 2 — Panel Description](./ch02-panel-description) — Ur LED-tilstand
- [DADman brugermanual — Ch. 5 — Signal Flow](/signal-flow) — System clock topologi
