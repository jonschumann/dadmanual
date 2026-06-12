---
title: "CARD-L8 — 8-Channel Analogue AD Line Input"
sidebar_label: "CARD-L8"
sidebar_position: 3
---

# CARD-L8 — 8-kanals Uberørte AD-linjekort

> \*\*Varenummer: \*\* CARD-L8  
> **Kilde:** Spec Sheet CARD-L8, Issue Juni 2026

---

## Oversigt

CARD-L8 giver otte kanaler af højtydende analog-til-digital konvertering på linje niveau for enhver kompatibel DAD chassis. Alle indgange er afbalancerede, leveres på en enkelt DB25 stik ved hjælp af standard Tascam pinout.

Konvertering bruger en dobbelt 5-bit delta-sigma modulator med FPGA-baseret filtrering på 32-bit behandling dybde. Input gain iscenesættelse er relæ-baseret med ingen aktive elektroniske komponenter, giver best-i-klasse støj og linearitet på tværs af fuld gain rækkevidde.

Kortet understøtter alle PCM samplinghastigheder fra 44,1 kHz til DXD (352,8/384 kHz), samt DSD 64 og DSD 128.

---

## Tekniske Specifikationer

| Parameter                                         | Værdi                                                                                                          | Betingelser / Noter                                  |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Input kanaler                                     | 8                                                                                                              | Balanceret, linjeniveau                              |
| Dynamisk rækkevidde (A-vægtet) | > 123 dB                                                                                                       |                                                      |
| THD+N (vægtet)                 | < - 117 dB / 0, 00014%                                                                | På −3 dBFS                                           |
| Hyppighed respons                                 | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Alle forstærkningsindstillinger                      |
| Få nøjagtighed                                    | ±0,1 dB                                                                                                        | Alle forstærkningsindstillinger                      |
| Maksimalt inputniveau                             | −9 til +30 dBu                                                                                                 | Justerbar i 0,1 dB trin                              |
| Få trin til 0 dBFS                                | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                              | Relæbaseret 3 dB-trin; digital justering mellem trin |
| Input impedans                                    | > 10 kΩ.                                                                                       |                                                      |
| CMRR                                              | > 120 dB                                                                                                       | Ved 1 kHz                                            |
| Stikprøverater (PCM)           | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                      |
| Prøvehastigheder (DSD)         | 2,8224 MHz (DSD 64), 5,6448 MHz (DSD 128)                                |                                                      |
| Opløsning af prøver                               | 5-bit sigma-delta på 5,645 eller 6,144 MHz; 24-bit PCM output                                                  |                                                      |
| Behandler ordlængde                               | 32-bit                                                                                                         | FPGA-baseret filtrering                              |
| Strømforbrug                                      | maks. 9 W                                                                                      |                                                      |

---

## Forbindelser

| Port               | Forbindelse | Signal                       | Noter                                  |
| ------------------ | ----------- | ---------------------------- | -------------------------------------- |
| Analogt linjeinput | DB25 hun    | 8 ch balanceret, linjeniveau | Tascam pinout; −9 til +30 dBu, > 10 kΩ |

### DB25 Input Pinout (Tascam)

| DB25 Pin | Signal |
| -------- | ------ |
| 1        | Ch 1 + |
| 14       | Ch 1 − |
| 2        | Ch 2 + |
| 15       | Ch 2 − |
| 3        | Ch 3 + |
| 16       | Ch 3 − |
| 4        | Ch 4 + |
| 17       | Ch 4 − |
| 5        | Ch 5 + |
| 18       | Ch 5 − |
| 6        | Ch 6 + |
| 19       | Ch 6 − |
| 7        | Ch 7 + |
| 20       | Ch 7 − |
| 8        | Ch 8 + |
| 21       | Ch 8 − |
| 25       | Jord   |

---

## Installation

> **ADVARSEL:** Tænd altid chassiset og frakobl netkablet, før du installerer eller fjerner udvidelseskort.

1. Tænd chassiset ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub CARD-L8 ind i slot guider, etiket side op, indtil kantstikket sæder fuldt ud.
4. Sikre den forreste beslag med den beholdt skrue.
5. Genopret netledningen og strømmen på chassiset.
6. Åbn DADman - kortet vises automatisk som linjeindgange i I/O-routervisningen.

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
