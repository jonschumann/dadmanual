---
title: "CARD-M8 — 8-Channel Analogue AD Mic/Line Input"
sidebar_label: "CARD-M8"
sidebar_position: 4
---

# CARD-M8 — 8-kanals Uberørt AD Mic/Line Indgangskort

> \*\*Varenummer: \*\* CARD-M8  
> **Kilde:** Spec Sheet CARD-M8, Issue Juni 2026

---

## Oversigt

CARD-M8 giver otte kanaler af højtydende analog-til-digital konvertering med switchable mikrofon og linje niveau input til enhver kompatibel DAD chassis. Hver kanal kan indstilles uafhængigt til mikrofon eller line-tilstand. Alle indgange er afbalancerede, leveres på en enkelt DB25 stik ved hjælp af standard Tascam pinout.

Konvertering bruger en dobbelt 5-bit delta-sigma modulator med FPGA-baseret filtrering på 32-bit behandling dybde. Både mikrofon og line gain iscenesættelse er relæ-baseret med ingen aktive elektroniske gain komponenter, at yde exceptionel støjpræstation og EIN på -131 dBu (A-vægtet) ved maksimal gevinst.

48 V phantom power er tilgængelig per kanal for kondensatormikrofoner.

---

## Tekniske Specifikationer

### Generelt

| Parameter                                         | Værdi                                                                                                          | Betingelser / Noter                                        |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Input kanaler                                     | 8                                                                                                              | Balanceret; omstillelig mic/line pr. kanal |
| Dynamisk rækkevidde (A-vægtet) | > 123 dB                                                                                                       |                                                            |
| THD+N (vægtet)                 | < - 117 dB / 0, 00014%                                                                | På −3 dBFS                                                 |
| Hyppighed respons                                 | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Alle forstærkningsindstillinger                            |
| Få nøjagtighed                                    | ±0,1 dB                                                                                                        | Alle forstærkningsindstillinger                            |
| Stikprøverater (PCM)           | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                            |
| Prøvehastigheder (DSD)         | 2,8224 MHz (DSD 64), 5,6448 MHz (DSD 128)                                |                                                            |
| Opløsning af prøver                               | 5-bit sigma-delta på 5,645 eller 6,144 MHz; 24-bit PCM output                                                  |                                                            |
| Behandler ordlængde                               | 32-bit                                                                                                         | FPGA-baseret filtrering                                    |
| Strømforbrug                                      | maks. 11 W                                                                                     |                                                            |

### Linje Input-tilstand

| Parameter             | Værdi                             | Betingelser / Noter                                  |
| --------------------- | --------------------------------- | ---------------------------------------------------- |
| Maksimalt inputniveau | −9 til +30 dBu                    | Justerbar i 0,1 dB trin                              |
| Få trin til 0 dBFS    | 9, 12, 15, 18, 21, 24, 27, 30 dBu | Relæbaseret 3 dB-trin; digital justering mellem trin |
| Input impedans        | > 10 kΩ.          |                                                      |
| CMRR                  | > 120 dB                          | Ved 1 kHz                                            |

### Mikrofon Input Tilstand

| Parameter                                     | Værdi                 | Betingelser / Noter                                |
| --------------------------------------------- | --------------------- | -------------------------------------------------- |
| Phantom strøm                                 | 48 V                  | Switchable pr. kanal               |
| Input impedans                                | 3 kΩ. |                                                    |
| EIN (vægtet)               | −131 dBu              | Ved 0 Ω kilde (forkortet input) |
| Analog forstærkerinterval                     | −3 til +45 dB         | Relæbaseret 3 dB trin                              |
| Digital gain rækkevidde                       | 0 til +39 dB          | Yderligere digital forstærkning                    |
| Samlet DADman gain interval                   | −18 til +72 dB        |                                                    |
| Maksimalt inputniveau ved −18 dB forstærkning | +21 dBu               | Før klipning                                       |

### Mikrofon Gain Tabel

| DADman Gain (dB) | Analog Gain (dB) | Digital Gain (dB) | Input Overload (dBu) | Output-støj (dBFS A) | EIN (dBu A) |
| ----------------------------------- | ----------------------------------- | ------------------------------------ | --------------------------------------- | --------------------------------------- | ------------------------------ |
| −18                                 | −3                                  | 0                                    | +21                                     | −123.8                  | −102.8         |
| −15                                 | 0                                   | 0                                    | +18                                     | −123.3                  | −105.3         |
| −12                                 | +3                                  | 0                                    | +15                                     | −123.2                  | −108.2         |
| −9                                  | +6                                  | 0                                    | +12                                     | −123.2                  | −111.2         |
| −6                                  | +9                                  | 0                                    | +9                                      | −122.8                  | −113.8         |
| −3                                  | +12                                 | 0                                    | +6                                      | −122.8                  | −116.8         |
| 0                                   | +12                                 | 0                                    | +3                                      | −122.2                  | −119.2         |
| +3                                  | +18                                 | 0                                    | 0                                       | −122.0                  | −122.0         |
| +6                                  | +21                                 | 0                                    | −3                                      | −120.8                  | −123.8         |
| +9                                  | +24                                 | 0                                    | −6                                      | −120.3                  | −126.3         |
| +12                                 | +27                                 | 0                                    | −9                                      | −118.5                  | −127.5         |
| +15                                 | +30                                 | 0                                    | −12                                     | −117.3                  | −129.3         |
| +18                                 | +33                                 | 0                                    | −15                                     | −114.8                  | −129.8         |
| +21                                 | +36                                 | 0                                    | −18                                     | −113.0                  | −131.0         |
| +24                                 | +39                                 | 0                                    | −21                                     | −110.2                  | −131.2         |
| +27                                 | +42                                 | 0                                    | −24                                     | −107.8                  | −131.8         |
| +30                                 | +45                                 | 0                                    | −27                                     | −104.8                  | −131.8         |
| +33                                 | +45                                 | +3                                   | −27                                     | −107.8                  | −131.8         |
| +36                                 | +45                                 | +6                                   | −27                                     | −110.8                  | −131.8         |
| +72                                 | +45                                 | +39                                  | −27                                     | −68.8                   | −131.8         |

> **Bemærk:** Ved digital gain-indstillinger over +30 dB DADman gain, er den analoge gain fast på +45 dB. Stigende digital forstærkning over dette punkt reducerer den effektive dynamikområde, men opretholder EIN-gulvet på -131,8 dBu A.

---

## Forbindelser

| Port                  | Forbindelse | Signal            | Noter                                                                                |
| --------------------- | ----------- | ----------------- | ------------------------------------------------------------------------------------ |
| Mikrofon / line input | DB25 hun    | 8 lm afbalanceret | Tascam pinout; mic: 48 V phantom; linje: til +30 dBu |

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

> **ADVARSEL:** Hvis 48 V phantom-effekt er aktiveret på en hvilken som helst kanal, deaktivere det i DADman før tilslutning eller frakobling af mikrofoner eller kabler for at undgå transienter, der kan beskadige mikrofonkapsler.

1. Tænd chassiset ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub CARD-M8 ind i slot guider, etiket side op, indtil kantstikket sæder fuldt ud.
4. Sikre den forreste beslag med den beholdt skrue.
5. Genopret netledningen og strømmen på chassiset.
6. Åbn DADman - kortet vises som mic/line input i I/O routing view. Indstil hver kanal til Mikrofon eller Linje tilstand efter behov.

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
