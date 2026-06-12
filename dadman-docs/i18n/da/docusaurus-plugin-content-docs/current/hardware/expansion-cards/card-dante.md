---
title: "CARD-DANTE — 128-Channel Dante / AES67 Interface"
sidebar_label: "CARD-DANTE"
sidebar_position: 5
---

# CARD-DANTE — 128-Channel Dante / AES67 Grænseflade Kort

> \*\*Varenummer: \*\* CARD-DANTE  
> **Kilde:** Spec Sheet CARD-DANTE, Issue June 2026

---

## Oversigt

CARD-DANTE giver 128-kanals todirectional Dante og AES67 lyd over IP connectivity for enhver kompatibel DAD chassis. To RJ45 netværksporte kan konfigureres som et skiftet netværk (daisy-kæde) eller som et redundant Dante netværk med uafhængige primære og sekundære forbindelser.

Kortet er fuldt kompatibelt med Dante-økosystemet udviklet af Audinate, herunder Dante Domain Manager. Sample rate konvertering (SRC) kan aktiveres uafhængigt for input og output stier, giver kortet mulighed for at operere asynkront fra værtens chassisprøvehastighed.

---

## Tekniske Specifikationer

| Parameter                                                             | Værdi                                                                              | Betingelser / Noter                         |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------- |
| Input kanaler                                                         | 128                                                                                | Ved 44, 1 / 48 kHz (1FS) |
| Output kanaler                                                        | 128                                                                                | Ved 44, 1 / 48 kHz (1FS) |
| Kanaler ved 2FS (88,2 / 96 kHz)                    | 64 i / 64 ud                                                                       |                                             |
| Kanaler ved 4FS (176. 4 / 192 kHz) | 32 i / 32 ud                                                                       |                                             |
| Dante strømme                                                         | Op til 128 tovejs                                                                  |                                             |
| Stikprøve satser                                                      | 44.1, 48, 88.2, 96, 176.4, 192 kHz |                                             |
| Netværks standard                                                     | 1000BASE-T                                                                         |                                             |
| Netværksporte                                                         | 2 × RJ45                                                                           | Skiftede eller overflødige                  |
| Netværk tilstand                                                      | Skiftede eller overflødige                                                         | Konfigurerbar i Dante Controller            |
| AES67                                                                 | Understøttet                                                                       | Opdagelse af SAP                            |
| Dante Domæne Manager                                                  | Understøttet                                                                       |                                             |
| Konvertering af prøvehastighed                                        | Valgbar på input og output uafhængigt                                              |                                             |
| SRC dynamikområde                                                     | > 125 dB                                                                           | 64-bit flydende punkt                       |
| SRC latenstid (48 → 96 kHz)                        | Ca. 0. 8 ms input / 1. 1 ms output |                                             |
| SRC latenstid (96 → 48 kHz)                        | Ca. 0. 8 ms input / 1. 1 ms output |                                             |
| Synchronisation                                                       | Dante netværk ur eller internt system ur                                           |                                             |
| Strømforbrug                                                          | 4,5 W                                                                              |                                             |

---

## Forbindelser

| Port                                         | Forbindelse | Signal     | Noter                             |
| -------------------------------------------- | ----------- | ---------- | --------------------------------- |
| Netværk (primært Dante)   | RJ45        | 1000BASE-T | Dante primære eller skiftede port |
| Netværk (Dante secondary) | RJ45        | 1000BASE-T | Dante sekundær / overflødig port  |

---

## Indstilling Af Netværk

De to RJ45 porte på CARD-DANTE kan konfigureres i to tilstande:

**Skiftet tilstand** — De to porte fungerer som en integreret 2-port switch, hvilket tillader daisy-chain netværk topologier uden en ekstern switch. Begge porte opretter forbindelse til det samme Dante-netværk.

**Redundant tilstand** — Hver port forbinder til et uafhængigt Dante netværk (primær og sekundær). Dante mislykkes automatisk over til det sekundære netværk, hvis den primære sti svigter. Redundant tilstand kræver en kontakt på hvert netværk.

Konfigurer netværkstilstand ved hjælp af Dante Controller eller DADman.

---

## Installation

> **ADVARSEL:** Tænd altid chassiset og frakobl netkablet, før du installerer eller fjerner udvidelseskort.

1. Tænd chassiset ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub CARD-DANTE ind i slot guider indtil kantstikket sæder fuldt ud.
4. Sikre den forreste beslag med den beholdt skrue.
5. Tilslut Ethernet kabler til RJ45 porte efter behov.
6. Genopret netledningen og strømmen på chassiset.
7. Åbn DADman og/eller Dante Controller - kortet vises som en Dante enhed på netværket.

---

## Forenelighed

| Chassiser    | Kompatibel                    |
| ------------ | ----------------------------- |
| AX64         | Ja                            |
| AX Centreret | Ja                            |
| Penta 720    | Ja                            |
| Penta 721S   | Ja                            |
| AX32         | Ja                            |
| Hovednet 256 | Nej — ingen udvidelses felter |
| MOM          | Nej — ingen udvidelses felter |
