---
title: "CARD-2MADI-SO — dobbelt MADI grænseflade med SRC"
sidebar_label: "CARD-2MADI-SO"
sidebar_position: 6
---

# CARD-2MADI-SO — dobbelt MADI interface kort med SRC

> \*\*Varenummer: \*\* CARD-2MADI-SO  
> **Kilde:** Spec Sheet CARD-MADI-SO, Issue June 2026

---

## Oversigt

CARD-2MADI-SO giver to uafhængige tovejs MADI forbindelser via SFP moduler for enhver kompatibel DAD chassis. Hver MADI port leverer 64 kanaler i og 64 kanaler ud på 48 kHz, for i alt 128 kanaler i hver retning pr. kort.

SFP-moduler sælges separat og kan være optiske (LC, single-mode eller multi-mode) eller elektriske (HD-BNC coaxial). Denne fleksibilitet gør det muligt for kortet at oprette forbindelse til stort set enhver eksisterende MADI infrastruktur. Sample rate konvertering (SRC) kan aktiveres uafhængigt for input og output af hver port.

---

## Tekniske Specifikationer

| Parameter                                      | Værdi                                                                                                          | Betingelser / Noter                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| MADI porte                                     | 2                                                                                                              | Uafhængige bidirektionelle porte                                 |
| Kanaler pr. port               | 64 i / 64 ud                                                                                                   | Ved 44, 1 / 48 kHz (1FS)                      |
| Kanaler i alt                                  | 128 i / 128 ud                                                                                                 | Begge havne tilsammen                                            |
| Kanaler pr. havn ved 2FS       | 32 i / 32 ud                                                                                                   | Ved 88,2 / 96 kHz                                                |
| Kanaler pr. havn ved 4FS       | 16 i / 16 ud                                                                                                   | Ved 176,4 / 192 kHz                                              |
| Kanaler pr. havn ved 8FS       | 8 i / 8 ud                                                                                                     | Ved 352,8 / 384 kHz                                              |
| Stikprøve satser                               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                  |
| Frame modes                                    | Legacy (SMUX) og højhastighedstog                                                           |                                                                  |
| Tilstande for kanaltælling                     | 56-kanals og 64-kanals                                                                                         |                                                                  |
| SFP grænseflade                                | 2 × SFP-bur                                                                                                    | Optisk LC- eller HD-BNC-koks (sælges separat) |
| Konvertering af prøvehastighed                 | Valgbar pr. port, input og output uafhængigt                                                   |                                                                  |
| SRC latenstid (48 → 96 kHz) | Ca. 0. 8 ms input / 1. 1 ms output                             | Pr. havn                                         |
| SRC latenstid (96 → 48 kHz) | Ca. 0. 8 ms input / 1. 1 ms output                             | Pr. havn                                         |
| Synchronisation                                | MADI input eller internt system ur                                                                             | Pr. havn                                         |
| Strømforbrug                                   | 4,5 W                                                                                                          |                                                                  |

---

## Forbindelser

| Port              | Forbindelse | Signal     | Noter                   |
| ----------------- | ----------- | ---------- | ----------------------- |
| MADI I/O — Port A | SFP cage    | AES10 MADI | SFP-modul solgt separat |
| MADI I/O — Port B | SFP cage    | AES10 MADI | SFP-modul solgt separat |

---

## SFP Moduler

SFP-moduler er **ikke inkluderet** og skal bestilles separat. To typer er tilgængelige fra DAD:

| Varenummer           | Varebeskrivelse                                                  |
| -------------------- | ---------------------------------------------------------------- |
| MOD-SFP-COAX         | SFP elektrisk transceiver til MADI — HD-BNC stik                 |
| MOD-SFP-1300-LD      | SFP optisk transceiver til MADI — 1310 nm, 100BASE multi-mode LC |
| CON-2BNC-HD/STD-0,5M | HD-BNC til BNC adapter kabel sæt (0,5 m)      |

> **Bemærk:** MOD-SFP-COAX bruger HD-BNC-stik. Brug CON-2BNC-HD/STD-0,5M adapter kabler til at forbinde til standard 75 Ω BNC MADI udstyr.

---

## Installation

> **ADVARSEL:** Tænd altid chassiset og frakobl netkablet, før du installerer eller fjerner udvidelseskort.

> **ADVARSEL:** SFP-moduler kan indsættes og fjernes med kortet drevet. Men for at undgå at beskadige SFP-buret, skal du altid indsætte moduler lige og med et jævnt tryk. Du må ikke tvinge et modul, der ikke sidder nemt.

1. Tænd chassiset ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub CARD-2MADI-SO ind i slot guider indtil kantstikket sæder fuldt ud.
4. Sikre den forreste beslag med den beholdt skrue.
5. Genopret netledningen og strømmen på chassiset.
6. Indsæt de relevante SFP-moduler i SFP-bure og tilslut MADI-kabler.
7. Åbn DADman - begge MADI porte vises i I/O routing view.

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
