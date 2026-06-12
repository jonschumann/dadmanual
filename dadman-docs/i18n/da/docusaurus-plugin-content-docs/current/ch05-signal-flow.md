---
title: "Kapitel 5 — Signal Flow & Arkitektur"
sidebar_label: "Ch. 5 — Signal Flow"
sidebar_position: 7
---

# Kapitel 5 — Signal Flow & Arkitektur

> **Dokument:** DADman Brugervejledning  
> **Softwareversion dækket:** DADman v5.8.2 build 2  
> **Kapitel status:** Kladde v0. — Bloker diagrammer og topologifigurer, der verser; Afventer teknisk gennemgang af DAD engineering  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit              | Dækker                                       | Relevant for |
| ------------------- | -------------------------------------------- | ------------ |
| 5.1 | Ethernet-baseret kontrolarkitektur           | Alle brugere |
| 5.2 | Enheds Liste                                 | Alle brugere |
| 5.3 | Netværks anbefalinger                        | Alle brugere |
| 5.4 | IP adresse                                   | Alle brugere |
| 5.5 | Oversigt over klokkeslæt og samplingfrekvens | Alle brugere |
| 5.6 | Prøvehastighed og kanalkapacitet             | Alle brugere |

---

## 5.1 Ethernetbaseret Kontrolarkitektur

DADman kommunikerer med alle tilsluttede hardwareenheder over Ethernet ved hjælp af TCP/IP-protokollen. Dette gælder for al understøttet hardware — herunder enheder, der også forbinder via Thunderbolt 3. Ethernet-forbindelsen styrer kun data (konfigurationsændringer, statusovervågning, måling) lyd transporteres separat af MADI, Dante, AES3 eller Thunderbolt 3 afhængigt af hardware.

Fordi DADman bruger standard Ethernet-netværk, kan en enkelt computer, der kører DADman, styre flere enheder samtidigt, forudsat at alle enheder kan nås på det samme netværk. Enheder vises i DADman **Enhedsliste** fra venstre til højre, sorteret efter deres enheds-ID-nummer.

_[Placeholder: system topologi diagram - computer kører DADman tilsluttet en netværksafbryder, med flere DAD hardwareenheder på samme Ethernet undernet; Thunderbolt kabel vist separat for Thunder\-Core enheder]_

### 5.1.1 Dobbelt Kommunikationsstier til Thunder-Core Hardware

En Thunder-Core enhed tilsluttet en computer bruger to samtidige, uafhængige kommunikationsstier:

| Sti               | Protocol      | Formål                                                                      |
| ----------------- | ------------- | --------------------------------------------------------------------------- |
| **Ethernet**      | TCP/IP        | DADman control — routing, gain, konfiguration                               |
| **Thunderbolt 3** | PCIe over TB3 | Audio transport — grænsefladen synlig for din DAW via Core Audio eller ASIO |

Ethernet-only hardware (AX32, DX32R, Penta serie) bruger kun Ethernet-stien. Der er ingen Thunderbolt 3 driver til disse enheder, og de vises ikke som lydgrænseflader på computeren. Lyd fra disse enheder transporteres over MADI, Dante, eller AES3.

_[Pladsholder: diagram, der viser DADman og TB3 driveren som parallelle stier mellem computeren og en Thunder\¤ Core enhed — DADman kommunikerer over Ethernet TB3 driver kommunikerer over Thunderbolt 3; kontrast til en Ethernet-enhed, der kun viser Ethernet-stien]_

---

## 5.2 Enhedslisten

Enhedslisten er topniveauvisningen i DADman, der viser alle fundne og forbundne enheder. Hver enhed vises med en farvet kant, der identificerer den visuelt og adskiller dens kontrolelementer fra kontrollerne i tilstødende enheder.

Når DADman starter, forsøger den at genforbinde til enheder fundet i den sidste session. Hvis en DADman Settings File (`.dms`) er konfigureret til at indlæse automatisk ved start, vil den blive anvendt på tilsluttede enheder. Hvis ingen konfigurationsfil indlæses ved start, skal forbindelser til enheder i Enhedslisten genoprettes manuelt.

Se [Kapitel 7, afsnit 7.3 — Enhedslisten] for fuldstændig henvisning til Enhedslisten.

---

## 5.3 Netværksanbefalinger

> **BEMÆRK:** For pålidelig kontrol, anbefaler DAD kraftigt at bruge et dedikeret Ethernet-netværk til DADman, adskilt fra dit generelle studie eller netværk af faciliteter. Se [Kapitel 3, afsnit 3.7 — Konfiguration af netforbindelsen] til en detaljeret topologivejledning.

DADman kontrol trafik er let. Men deling af kontrolnetværket med Audio over IP (Dante, AES67), EuControl, eller generel internettrafik kan forårsage periodiske tilslutningsmuligheder dråber, der afbryder real-time parameter opdateringer. En dedikeret Gigabit Ethernet switch eller en direkte kabel forbindelse mellem computeren og enheden er den anbefalede topologi for alle professionelle installationer.

---

## 5.4 Ip Adressering

Hver hardware enhed kræver en unik IP-adresse på samme undernet som den computer, der kører DADman. Enheder kan konfigureres med statiske IP-adresser (anbefales til dedikerede kontrolnetværk) eller DHCP-tildelte adresser.

IP-adresser er konfigureret enten via enhedens frontpanel display, via en webbrowser interface, eller via DADman efter indledende forbindelse. Se installationsvejledningen til din specifikke hardwaremodel for første gang IP-tildelingsproceduren.

---

## 5.5 Clocking and Sample Rate Oversigt

Uret bestemmer den samplinghastighed, hvormed al lyd i systemet fungerer. Fordi DADman-kontrolleret hardware typisk sidder i centrum af en større lydinfrastruktur — modtagelse og routing lyd fra flere kilder — ur konfiguration er en af de vigtigste aspekter af systemopsætning.

### 5.5.1 Ur Hierarki

Alle digitale lydenheder i et tilsluttet system skal dele et fælles prøveur for at undgå klik pops, og audio artefakter forårsaget af sample rate mismatch. Én enhed fungerer som **ur master**; alle andre er **ur slaver**, der synkroniserer til det.

DADman-kontrolleret hardware kan fungere som enten master eller slave, og kan udlede sit ur fra flere kilder:

| Ur kilde          | Varebeskrivelse                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Interne**       | Enheden genererer sit eget ur ved den valgte samplingfrekvens — brug når enheden er systemuret master                                                               |
| **Word ur**       | Et eksternt ord ur signal på BNC ord ur input                                                                                                                       |
| **MADI**          | Ur udvundet fra en indgående MADI strøm                                                                                                                             |
| **Dante**         | Ur afledt af Dante audio netværket (PTP-baseret)                                                                                                 |
| **AES3**          | Ur udtrukket fra et indgående AES3-signal                                                                                                                           |
| **Thunderbolt 3** | Ur afledt af den tilsluttede computer _(Thunder\¤ Core hardware)_                                                                                |
| **Tilpas Til**    | DADman matcher automatisk samplingshastigheden for et indgående digitalt signal — nyttigt til tilpasning til Pro Tools eller andre DAW samplingshastighedsændringer |

_[Pladsholder: ur hierarki diagram viser ur master → ord ur bus → ur slaver; med Dante PTP som en alternativ reference]_

Urkilde og samplingfrekvens er konfigureret i fanen DADmans **Konf**. Se [Kapitel 7, afsnit 7.5 — Ur og konfiguration] for den fulde reference.

---

## 5.6 Prøvehastighed og kanalkapacitet

Nogle lydformater bærer færre kanaler med højere samplingfrekvens. Tabellen nedenfor viser, hvordan kanalkapacitet ændres med samplingfrekvens for de mest almindelige formater på DAD hardware.

| Formatér                                                                                         | Kanaler ved 44, 1 / 48 kHz | Kanaler ved 88,2 / 96 kHz       | Kanaler ved 176,4 / 192 kHz     |
| ------------------------------------------------------------------------------------------------ | -------------------------- | ------------------------------- | ------------------------------- |
| MADI (standard)                                                               | 64                         | 32 (S/MUX 2) | 16 (S/MUX 4) |
| MADI (høj Hastighed)                                                          | 64                         | 64                              | 32                              |
| Dante (standard)                                                              | 64                         | 32                              | 16                              |
| Dante 256 IPCore _(v5.8.1.6)_ | 256                        | 128                             | 64                              |
| ADAT Lysrør                                                                                      | 8                          | 4 (S/MUX 2)  | —                               |
| Thunderbolt 3 (DAD driver)                                                    | Op til 256                 | Op til 256                      | Op til 256                      |

> **BEMÆRK:** Kanal kapacitet værdier i tabellen ovenfor er typiske; faktiske værdier afhænger af din specifikke hardware model og firmware version. Bekræft kapaciteten for din enhed i de tekniske specifikationer i tillæg A.

---

## Krydsreferencer

- **Kapitel 1 — Introduktion:** Overblik over hardwarefamilier
- **Kapitel 3 — Installation:** Installation af DADman og konfiguration af netværket
- **Kapitel 4 — Hardwarebeskrivelse:** Forreste og bageste panelstik, fysisk I/O
- **Kapitel 7 — Drift:** Konflik-fanens reference for indstillingerne for urkilde og samplingfrekvens
- **Tillæg A — Specifikationer:** Tabeller med fuldstændige hardwarespecifikationer, herunder routing matrixkapaciteter

---

_[Afventer DAD ingeniør:]_  
_— DADman TCP/UDP portnumre, der anvendes til enhedsopdagelse og kontrol (nødvendigt for Ch. 9 fejlfinding i firewall-fejlfinding)_  
_— Dante 256 IPCore bekræftelse af enhedslisten (v5. .1.6)_  
_— Tre blokdiagrammer, der er angivet som pladsholdere ovenfor_
