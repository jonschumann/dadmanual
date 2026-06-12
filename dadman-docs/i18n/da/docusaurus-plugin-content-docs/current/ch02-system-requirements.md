---
id: ch02-system-krav
title: "Kapitel 2 — Systemkrav"
sidebar_label: "Ch. 2 — Systemkrav"
sidebar_position: 4
slug: /systemkrav
---

# Kapitel 2 — Systemkrav Og pakkeindhold

> **Dokument:** DADman Brugervejledning  
> **Software version dækket:** DADman v5.8.1.  
> **TB3 Driver version dækket:** Seneste — se Download Centre på digitalaudiosupport. om  
> **Kapitel status:** Udkast v0. — Mindstekrav til RAM/lagerplads og pakkeindhold afventende fra DAD engineering  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit              | Dækker                        | Relevant for                                   |
| ------------------- | ----------------------------- | ---------------------------------------------- |
| 2.1 | Krav til DADman-software      | Alle brugere                                   |
| 2.2 | DAD Thunderbolt 3 driver krav | AX64, AX Center, Core 256, Avid MTRX serie kun |
| 2.3 | Indholdet i emballagen        | Alle brugere                                   |

---

## 2.1 DADman Software Systemkrav

### 2.1.1 Operativsystem og -platform

| Krav                           | macOS                                                                                                                                                  | Vinduer                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **Understøttede OS-versioner** | macOS 10.13 High Sierra gennem 15 Sequoia (Intel og Apple Silicon)                                                  | Windows 10 (64-bit), Windows 11 (64-bit)           |
| **CPU-arkitektur**             | x86-64 (Intel) og ARM64 (Apple Silicon M1 og senere) — native support fra v5.5.0 | x86-64                                                                                   |
| **Minimum RAM**                | [To be confirmed by DAD engineering]                                                               | [To be confirmed by DAD engineering] |
| **Mindste lagerplads**         | [To be confirmed by DAD engineering]                                                               | [To be confirmed by DAD engineering] |
| **Netværk**                    | Påkrævet Ethernet-port (jf. kapitel 3, afsnit 3.5); Wi-Fi anbefales ikke til produktionsbrug        | Ethernet-port påkrævet; Wi-Fi anbefales ikke                                             |
| **Nuværende version**          | 5.8.2 bygger2                                                                                                          | 5.8.2 bygger2                                            |

> **BEMÆRKNING — Windows legacy support:** DADman v5.7.0 var den endelige udgivelse, der understøtter Windows 7 og Windows 8. Alle efterfølgende versioner kræver Windows 10 eller Windows 11.

> **BEMÆRKNING — Avid hardware brugere:** Hvis du bruger DADman med en Avid MTRX, MTRX II, eller MTRX Studio, skal du bruge den version af DADman godkendt til din Avid hardware. Download denne version fra din Avid Master Account, ikke fra DAD support portal. Brug af en ikke-godkendt version kan forårsage kompatibilitetsproblemer med din Avid hardware.

---

## 2.2 DAD Thunderbolt 3 Driver Systemkrav

> **BEMÆRK:** Dette afsnit gælder kun, hvis din hardware er et AX64, AX Center, Core 256 eller et Avid MTRX produkt. Hvis din hardware kun forbinder til computeren over Ethernet (fx, AX32, DX32R, Penta serie), Thunderbolt 3 driver er ikke påkrævet.

| Krav                           | macOS                                                                                     | Vinduer                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Understøttede OS-versioner** | macOS 11 Big Sur og senere (Intel og Apple Silicon)                    | Windows 10, Windows 11                                               |
| **Minimum DADman version**     | 5.6.7.1 eller senere                      | 5.6.7.1 eller senere |
| **Thunderbolt kabel**          | Thunderbolt 3 eller USB-C-kabel normeret til minimum 20 Gbps                              | Thunderbolt 3 eller USB-C-kabel normeret til minimum 20 Gbps         |
| **Kompatibel hardware**        | AX64, AX Center, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio, Dynaudio Control 01 | AX64, AX Center, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio |

> **FORSIGTIG — Kabel specifikation:** Brug af et kabel, der ikke er klassificeret til mindst 20 Gbps, kan resultere i ustabile eller mislykkede Thunderboltforbindelser. Standard-USB-C-kabler, der ikke bærer Thunderbolt certificering, er ikke tilstrækkeligt. Verificer dit kabel før installation.

---

## 2.3 Indholdsfortegnelse

> **BEMÆRKNING — Indholdet af pakker**  
> Hardwareindhold for hvert produkt skal bekræftes af DAD-teknikken. En tabel for hvert produkt i DADman-kompatibel lineup vil blive indsat her.

_[Pladsholder: Indholdstabel for hvert produkt — skal leveres af DAD-ingeniøren. Skal omfatte: hardwareenhed, strømforsyning / IEC kabel, rack ører, skruer, eventuelle medfølgende kabler, dokumentationskort, eventuelle medfølgende software eller licens dokumentation.]_

### 2.3.1 Software

DADman software og Thunderbolt 3 driver leveres ikke på fysiske medier. De downloades fra DAD support portalen eller din Avid Master Account. Se [Kapitel 3, afsnit 3.2 — Fremskaffelse af Software].

---

## Krydsreferencer

- **Kapitel 1 — Introduktion:** Kompatibel hardwareliste; hardwarefamilier
- **Kapitel 3 — Installation:** Downloading og installation af DADman og Thunderbolt 3 driver; netværkskonfiguration
- **Tillæg A — Specifikationer:** Fuldstændige tekniske specifikationer pr. produkt

---

_[Afventer DAD-teknik:]_  
_— Mindstekrav til RAM og lagring af DADman på macOS og Windows_  
_— Pakkeindhold for hver hardwaremodel (Core 256, AX Center, AX64, MOM, DAD Junior)_
