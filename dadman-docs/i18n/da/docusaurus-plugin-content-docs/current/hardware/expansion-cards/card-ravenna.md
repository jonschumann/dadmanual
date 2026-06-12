---
title: "CARD-RAVENNA — 128-Channel Ravenna / AES67 / ST 2110-30 Interface"
sidebar_label: "CARD-RAVENNA"
sidebar_position: 7
---

# CARD-RAVENNA - 128 Kanal Ravenna / AES67 / ST 2110-30 Grænseflade Kort

> \*\*Varenummer: \*\* CARD-RAVENNA  
> **Kilde:** Spec Sheet CARD-RAVENNA, Issue June 2026

---

## Oversigt

CARD-RAVENNA giver 128-kanal bidirectional Ravenna, AES67, og SMPTE ST 2110-30 lyd over IP-tilslutning til enhver kompatibel DAD chassis. To RJ45 netværksporte kan konfigureres som et skiftet netværk eller med ST 2022-7 Seamless Protection Switching (SPS) for hitless redundans på dual-network installationer.

Kortet er fuldt interoperabelt med Ravenna, AES67, og ST 2110-30 økosystemer og understøtter industristandard opdagelse og kontrol via WebUI, NMOS IS-04/IS-05, SAP, ANEMAN og JSON API. PTPv2 (IEEE 1588-2008) understøttes i både Master og Slavetilstande.

Sample rate konvertering (SRC) kan aktiveres på input og output stier i fællesskab, så kortet til at fungere asynkront fra værten chassiset samplinghastighed.

---

## Tekniske Specifikationer

| Parameter                                      | Værdi                                                                                                          | Betingelser / Noter                                                            |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Input kanaler                                  | 128                                                                                                            | Ved 44, 1 / 48 kHz (1FS)                                    |
| Output kanaler                                 | 128                                                                                                            | Ved 44, 1 / 48 kHz (1FS)                                    |
| Kanaltæller skalering                          | Skalaer med prøvetagningshastighed                                                                             | Højere prøvetagningshastigheder reducerer kanalantal pr. strøm |
| Ravenna / AES67 vandløb                        | Op til 64 tovejs                                                                                               |                                                                                |
| Stikprøve satser                               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                                |
| Netværks standard                              | 1000BASE-T                                                                                                     |                                                                                |
| Netværksporte                                  | 2 × RJ45                                                                                                       | Afbrudt eller ST 2022-7 SPS overflødig                                         |
| Rødspåvirkning                                 | ST 2022-7 Problemfri Beskyttelsesskifte                                                                        | Hitless failover on dual-network                                               |
| Synchronisation                                | PTPv2 (IEEE 1588-2008) — Master eller Slave                                                 | Eller internt systemur                                                         |
| AES67                                          | Understøttet                                                                                                   |                                                                                |
| ST 2110-30                                     | Understøttet                                                                                                   |                                                                                |
| NMOS                                           | IS-04 (opdagelse) og IS-05 (forbindelsesstyring)                         |                                                                                |
| Opdagelse / kontrol                            | WebUI, NMOS, Ravenna, SAP, ANEMAN, JSON API                                                                    |                                                                                |
| Konvertering af prøvehastighed                 | Valgbar på input og output i fællesskab                                                                        |                                                                                |
| SRC latenstid (48 → 96 kHz) | Ca. 0. 8 ms input / 1. 1 ms output                             |                                                                                |
| SRC latenstid (96 → 48 kHz) | Ca. 0. 8 ms input / 1. 1 ms output                             |                                                                                |
| Strømforbrug                                   | 7,5 W                                                                                                          |                                                                                |

---

## Forbindelser

| Port                                  | Forbindelse | Signal     | Noter                                   |
| ------------------------------------- | ----------- | ---------- | --------------------------------------- |
| Netværk (primær)   | RJ45        | 1000BASE-T | Ravenna / AES67 / ST 2110- 30 primary   |
| Netværk (sekundær) | RJ45        | 1000BASE-T | ST 2022-7 overflødig eller skiftet port |

---

## Indstilling Af Netværk

**Skiftet tilstand** — Begge havne fungerer som en integreret kontakt, hvilket muliggør daisy-chain topologi uden ekstern kontakt.

**ST 2022-7 SPS-tilstand** — Hver port forbinder til et uafhængigt netværk. ST 2022-7 Problemfri beskyttelse Skift giver hitless failover - hvis den ene netværkssti mislykkes, lyd fortsætter uden afbrydelse via den anden. Denne tilstand kræver en dedikeret kontakt på hvert netværk.

Indstil netværkstilstand og PTP rolle (Master / Slave) via kortets WebUI eller NMOS-controller.

---

## Opdagelse og kontrol

CARD-RAVENNA understøtter flere opdagelses- og kontrolgrænseflader:

| Grænseflade | Formål                                                |
| ----------- | ----------------------------------------------------- |
| WebUI       | Browserbaseret konfiguration og status                |
| NMOS IS-04  | Enhed og ressource opdagelse                          |
| NMOS IS-05  | Forbindelsesstyring (routing)      |
| Ravenna     | Nativ Ravenna opdagelse og kontrol                    |
| SAP         | Session announcement (AES67 / SDP) |
| ANEMAN      | ANEMAN netværksadministratorintegration               |
| JSON API    | Programmatisk konfiguration                           |

---

## Installation

> **ADVARSEL:** Tænd altid chassiset og frakobl netkablet, før du installerer eller fjerner udvidelseskort.

1. Tænd chassiset ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub CARD-RAVENNA ind i slot guider indtil kantstikket sæder fuldt ud.
4. Sikre den forreste beslag med den beholdt skrue.
5. Tilslut Ethernet kabler til RJ45 porte som krævet for din netværks topologi.
6. Genopret netledningen og strømmen på chassiset.
7. Åbn DADman - kortet vises som en AoIP grænseflade i I/O routing view.
8. Få adgang til kortets WebUI til avanceret netværk og PTP-konfiguration.

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
