---
title: "CARD-DA8 — 8-Channel Analogue DA Output"
sidebar_label: "CARD-DA8"
sidebar_position: 2
---

# CARD-DA8 — 8-Channel Pristine DA Output Card

> \*\*Varenummer: \*\* CARD-DA8  
> **Kilde:** Spec Sheet CARD-DA8, Issue Juni 2026

---

## Oversigt

CARD-DA8 giver otte kanaler af højtydende digital-til-analog konvertering for enhver kompatibel DAD chassis. Alle udgange er afbalanceret og leveres på en enkelt DB25 stik ved hjælp af standard Tascam pinout.

Konvertering bruger en 32-gange oversampling 32-bit Burr Brown DAC med FPGA-baseret filtrering på 32-bit behandling dybde. Output gain iscenesættelse er relæ-baseret med ingen aktive elektroniske gain komponenter, sikrer maksimal dynamikområde og præcise niveau matcher til enhver downstream analoge system.

Kortet understøtter alle PCM samplinghastigheder fra 44,1 kHz til DXD (352,8/384 kHz), samt DSD 64 og DSD 128.

---

## Tekniske Specifikationer

| Parameter                                         | Værdi                                                                                                          | Betingelser / Noter                                  |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Output kanaler                                    | 8                                                                                                              | Balanceret, linjeniveau                              |
| Dynamisk rækkevidde (A-vægtet) | > 128 dB                                                                                                       |                                                      |
| THD+N (vægtet)                 | < - 115 dB / 0, 00017%                                                                | På −3 dBFS                                           |
| Hyppighed respons                                 | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Alle forstærkningsindstillinger                      |
| Få nøjagtighed                                    | ±0,1 dB                                                                                                        | Alle forstærkningsindstillinger                      |
| Maksimalt output-niveau                           | 0 til +24 dBu                                                                                                  | Justerbar i 0,1 dB trin                              |
| Få trin til 0 dBFS                                | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                              | Relæbaseret 6 dB-trin; digital justering mellem trin |
| Output impedans                                   | < 100 Ω                                                                               |                                                      |
| Stikprøverater (PCM)           | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                      |
| Prøvehastigheder (DSD)         | 2,8224 MHz (DSD 64), 5,6448 MHz (DSD 128)                                |                                                      |
| Behandler ordlængde                               | 32-bit                                                                                                         | FPGA-baseret filtrering                              |
| Strømforbrug                                      | maks. 11 W                                                                                     |                                                      |

---

## Forbindelser

| Port                | Forbindelse | Signal                       | Noter         |
| ------------------- | ----------- | ---------------------------- | ------------- |
| Analoge linjeoutput | DB25 hun    | 8 ch balanceret, linjeniveau | Tascam pinout |

### DB25 Output Pinout (Tascam)

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

> **ADVARSEL:** Tænd altid chassiset og frakobl netkablet, før du installerer eller fjerner udvidelseskort. Indsættelse af et kort i et drevet chassis kan beskadige kortet og chassiset.

1. Tænd chassiset ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub CARD-DA8 ind i slot guider, etiket side op, indtil kantstikket sæder fuldt ud.
4. Sikre den forreste beslag med den beholdt skrue. Fingertæt er tilstrækkeligt.
5. Genopret netledningen og strømmen på chassiset.
6. Åbn DADman - kortet vises automatisk som DA udgange i I/O routing view.

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
