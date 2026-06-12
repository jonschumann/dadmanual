---
id: ch09-fejlfinding
title: "Kapitel 9 — Fejlfinding"
sidebar_label: "Ch. 9 — Fejlfinding"
sidebar_position: 11
slug: /fejlfinding
---

# Kapitel 9 — Fejlfinding

> **Dokument:** DADman Brugervejledning  
> **Softwareversion dækket:** DADman v5.8.2 build 2  
> **Kapitel status:** Kladde v0. — Dokumenteret adgang til logfiler (9.9.1-9.9. ); fejlmeddelelseskatalog og LED-tilstandstabeller, der stadig afventer fra DAD engineering  
> **Sidst opdateret:** Juni 2026

---

## Sådan skal du bruge dette kapitel

Find den sektion, der matcher kategorien af dit problem, og find derefter symptomet, der bedst beskriver det, du oplever. Hver række giver den sandsynlige årsag og afhjælpning. Når midlet omfatter en flertrinsprocedure, gives der en krydshenvisning i stedet for at gentage trinene her.

**Før du kontakter support**, indsamler diagnostisk information med:  
**DADman menu > Om DADman > Kopier oplysninger** _(v5.7. og senere)_  
Denne kopierer DADman version, tilsluttet enhedsliste, OS-version og Thunderbolt driverversion til udklipsholderen. Inkludér dette i enhver supportanmodning.

| Afsnit              | Kategori                        |
| ------------------- | ------------------------------- |
| 9.1 | Tilslutning af netværk og enhed |
| 9.2 | Problemer Med Lyd               |
| 9.3 | Software og opstart             |
| 9.4 | Thunderbolt og driver           |
| 9.5 | Ur og synkronisering            |
| 9.6 | Overvåg Kontrol                 |
| 9.7 | Nulstil Procedurer              |
| 9.8 | Kendte problemer i version      |
| 9.9 | Henter Support                  |

---

## 9.1 Net- og enhedstilslutning

_Mest almindelige kategori for nye installationer og efter netværk eller hardware ændringer._

| Symptom                                                        | Sandsynlig årsag                                                                                       | Fortryd                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ingen enheder vises i enhedslisten efter start af DADman       | Enhed ikke tændt                                                                                       | Strøm på enheden; bekræft frontpanelet **Læse** LED er solid grøn                                                                                                                                                                                                                                                   |
|                                                                | Enhed ikke på det samme Ethernet-netværk                                                               | Tilslut enhed og computer til samme kontakt eller via direkte kabel; bekræft kabel er Cat5e eller Cat6                                                                                                                                                                                                              |
|                                                                | Enhed og computer på forskellige undernet                                                              | Sæt computerens netværksinterface til det samme undernet som enheden (f.eks. begge `192.168.1.x`). Kontroller enhed IP via dens frontpanel display                                                                                               |
|                                                                | macOS Sequoia (v15): OS-niveau opdagelse problem                    | Log ud af macOS brugerkontoen og log ind igen. Thunderbolt forbindelser er upåvirket. Se [afsnit 9.3] og [Ch. 3, Punkt 3.7] |
|                                                                | Windows: firewall blokering DADman                                                     | Tilføj en firewall undtagelse for DADman. Med BitDefender, opdateres til v5.7.2 eller senere                                                                                                                                                                        |
| Enhed vises i enhedslisten, men vises som afbrudt              | Ethernet-kabel frakoblet eller defekt                                                                  | Kontrollér kabel i begge ender; erstat hvis det er beskadiget                                                                                                                                                                                                                                                       |
|                                                                | Genstart af enhed (f.eks. efter firmwareopdatering) | Vent op til 60 sekunder; bekræft at klar LED er solid grøn                                                                                                                                                                                                                                                          |
|                                                                | IP-adressekonflikt — to enheder, der deler den samme IP                                                | Tjek alle netværksenheder for dublerede IPs; tildel unikke statiske IP'er                                                                                                                                                                                                                                           |
| Enhed tilsluttet, derefter forsvandt                           | Afbrydelse af netværk                                                                                  | Kontroller switch, kabel og port. DADman genoptager kontinuerligt _(v5.7.0+)_ — enheden genoptages automatisk, når forbindelsen er gendannet                                                                                                     |
| Kun nogle enheder vises (multi-unit system) | Subnet maske inkonsistens                                                                              | Bekræft alle enheder og computeren deler den samme undernetmaske (f.eks. `255.255.255.0`)                                                                                                                                                                        |
|                                                                | Dupliker IP adresser                                                                                   | Tilslut og konfigurer én enhed ad gangen; tildel unikke IP'er                                                                                                                                                                                                                                                       |
| Enhed synlig, men indstillinger adskiller sig fra forventet    | `.dms` fil anvendes ved lanceringen med forskellige indstillinger                                      | Hvis "Åbn sidste fil ved opstart" er aktiveret, anvender DADman den gemte fil til enheder ved opstart. Tjek **Fil > Åbn** for at bekræfte, hvilken fil der er indlæst                                                                                                                               |

---

## 9.2 Lydproblemer

| Symptom                                                             | Sandsynlig årsag                                                                              | Fortryd                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ingen lyd ved analog udgang                                         | Input ikke dirigeret til output                                                               | Åbn fanen **Con**; Kontroller en blå firkantet krydspoint mellem input og påkrævede output                                                                                                                                                                                         |
|                                                                     | Output kanal dæmpet                                                                           | Tjek **DA**-fane; bekræft at **Mute** ikke er engageret                                                                                                                                                                                                                            |
|                                                                     | Input kanal dæmpet                                                                            | Tjek **AD**-fanen; bekræft at **Mute** ikke er engageret                                                                                                                                                                                                                           |
|                                                                     | Output niveau fader ved minimum                                                               | Hæv DA output-niveau fader til passende indstilling for downstream udstyr                                                                                                                                                                                                          |
|                                                                     | Uoverensstemmelse i uren, der forårsager tavshed                                              | I **Con**-fanebladet: gul statusindikator på en input-række = synkroniseringstab. Gå til **Konf** fanen og verificer kilde- og prøvehastighed. Se [Afsnit 9.5] |
| Forvrænget lyd på høje signalniveauer                               | Output niveau sæt for højt til downstream udstyr                                              | I fanen **DA** skal du reducere output niveau fader. Eksempel: +24 dBu output i en +18 dBu maksimal indgangsenhed klipper downstream udstyr på ca. -6 dBFS                                                                         |
| SignalLED ikke oplyser på trods af kendte signaler                  | Input gain for lav til at overstige -42 dBFS tærskel                                          | Forøg **MIC gevinst** i fanen **AD**                                                                                                                                                                                                                                               |
|                                                                     | Forkert inputtype valgt                                                                       | Kontroller at MIC eller LINE er valgt korrekt                                                                                                                                                                                                                                      |
|                                                                     | Kildekabel defekt eller frakoblet                                                             | Tjek fysiske forbindelser                                                                                                                                                                                                                                                          |
| Klip LED belysning under normale niveauer                           | Input forstærkning for høj                                                                    | Reducér MIC gevinst i **AD** fanen                                                                                                                                                                                                                                                 |
|                                                                     | Udklipning af downstream-udstyr                                                               | Reducér DA-output-niveau — se "forvrænget lyd" ovenfor                                                                                                                                                                                                                             |
| Klik eller popper i lyd                                             | Prøvefrekvens eller ure-uoverensstemmelse                                                     | Se [Afsnit 9.5 — Ur og synkronisering]                                                                                                                                                                         |
|                                                                     | Buffer størrelse for lille (Thunderbolt)                                   | Forøg ASIO-bufferstørrelse; se [afsnit 9.4]                                                                                                                                                                    |
| Kun én kanal i et stereopar bærer lyd                               | Stereo link ikke aktiveret                                                                    | Aktiver Mono/Stereo link i fanen **AD** eller **DA** for kanalparret                                                                                                                                                                                                               |
|                                                                     | Kun én krydspoint forbundet                                                                   | I **Kon**-fanen, **Skift + klik** for at forbinde begge kanaler af parret samtidigt                                                                                                                                                                                                |
| AX Center analoge indgange, der ikke passerer lyd                   | ADC timing fejl i firmware før v1.1.0.4       | Opdater AX Center firmware til v1.1.0.4 eller senere _(Januar 2025 hotfix)_                                                                                                                                     |
| AX Center / Thunders - Core DA kort kanal 8 fase fejl               | Fejl i firmware før v1.0.6.3                  | Opdater Thunder\¤ Core firmware til v1.0.6.3 eller senere _(SepSeptember 2024)_                                                                                                                                 |
| ADAT-kanal 3, der ikke virker ved 88.2 eller 96 kHz | Fejl i firmware før v1.0.6.3                  | Opdater Thunder\¤ Core firmware til v1.0.6.3 eller senere                                                                                                                                                                          |
| Forsinkelse ikke anvendt på kanaler over 16                         | Fejl i firmware før v1.0.6.3                  | Opdater Thunder\¤ Core firmware til v1.0.6.3 eller senere                                                                                                                                                                          |
| 3G SDI kanaler ikke aktiveret efter power-up                        | Timing fejl i familie 1 firmware før v2.3.6.1 | Opdater AX32 / DX32R / Penta firmware til v2.3.6.1 eller nyere \* (December 2022)\*                                                                                                                             |

---

## 9.3 Software og opstart

| Symptom                                                                                                          | Sandsynlig årsag                                                                                                                                  | Fortryd                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman starter ikke på Windows                                                                                   | Mangler `VCRUNTIME140_1.DLL`                                                                                                                      | Opdatering til DADman v5.7.2 eller senere                                                                                                                                                                                                                      |
|                                                                                                                  | Ufuldstændig installation                                                                                                                         | Afinstaller, genstart, geninstaller fra [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                         |
| macOS Sequoia: DADman kan ikke oprette forbindelse til enheder på netværket ved opstart          | macOS 15 OS-niveau enhed opdagelse problem                                                                                                        | **Workaround:** Log ud (**Apple-menu > Log ud**), og log derefter ind igen. Thunderbolt forbindelser er upåvirket. _(Kendt åben problem som af v5.8.2; fix i udvikling)_ |
| DADman bryder sammen, når du dobbeltklikker på en '.dms'-fil i Finder (macOS) | Fejl før v5.8.0                                                                                                   | Opdatering til DADman v5.8.0 eller senere                                                                                                                                                                                                                      |
| Overvåg profilfil bliver beskadiget efter annullering af en belastning                                           | Fejl før v5.8.0                                                                                                   | Opdater til DADman v5.8.0 eller senere; gendan fra en backup `.dmprof` fil                                                                                                                                                                                     |
| Windows: MIDI nedbrud i DADman                                                                   | Fejl før v5.8.1                                                                                                   | Opdatering til DADman v5.8.1 build 6 eller senere                                                                                                                                                                                                              |
| macOS: Vis skalering af artefakter (tynde linjer ved rulning)                 | Fejl før v5.8.0 på skalerede skærme                                                                               | Opdatering til DADman v5.8.0 eller senere                                                                                                                                                                                                                      |
| DADman gemmer ikke filer på macOS logout eller nedlukning                                                        | Fejl før v5.7.0 (generel); før v5.8.0 i Kun menulinje tilstand | Opdatering til DADman v5.8.0 eller senere; aktivér \*\*Altid Gem fil \*\* i Indstillinger                                                                                                                                                                      |
| macOS: DADman bliver ikke forrest fra bakkeikonet (Sonoma)                    | Fejl før v5.8.0                                                                                                   | Opdatering til DADman v5.8.0 eller senere                                                                                                                                                                                                                      |
| Windows: BitDefender firewall forårsager enhedens låsning                                        | Kendt konflikt før v5.7.2                                                                                         | Opdatering til DADman v5.7.2 eller senere                                                                                                                                                                                                                      |
| Fold-down data korruption med matricer > 1024 elementer                                                          | Fejl før v5.7.0                                                                                                   | Opdatering til DADman v5.7.0 eller senere                                                                                                                                                                                                                      |

---

## 9.4 Thunderbolt og driver

- Gælder kun for AX64, AX Center, Core 256. Spring over for Ethernet-hardware.\*

| Symptom                                                                         | Sandsynlig årsag                                                             | Fortryd                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhed vises ikke i macOS Audio MIDI Setup                                       | Systemudvidelse er ikke tilladt                                              | Åbn **Systemindstillinger > Privatliv & Sikkerhed**; Tillader udvidelsen fra Digital Audio Denmark / NTP Technology A/S; genstart                                                                                                                                           |
|                                                                                 | macOS Sequoia: øget tilbehørssikkerhed                       | Sæt **Systemindstillinger > Privatliv og Sikkerhed > Tilbehør** til **Tillad automatisk** eller **Tillad**. Se [Ch. 3, Punkt 3.7]                                                           |
|                                                                                 | Chauffør ikke installeret                                                    | Installer DAD Thunderbolt 3 driver fra [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                           |
|                                                                                 | Gammel driverversion, der er i konflikt med macOS-opdatering                 | Fjern gamle `DADDriverSetup.app` (træk til papirkurven, godkend fjernelse), og geninstaller derefter den nyeste driver                                                                                                                                                       |
| Enheden vises i Audio MIDI Setup uden kanaler                                   | Eksempel på antal eller antal kanaler uoverensstemmelse                      | Åbn **DADDriverSetup** og bekræft indstillingerne for Sample Rate og Channels matcher dit DAW's forventede format                                                                                                                                                                               |
| Windows ASIO: **Manglede IR'er** tæller ikke-nul                | Systemet afbryder uenighed                                                   | Forøg ASIO Buffer Størrelse (512 eller 1024 prøver); luk unødvendige baggrundsapplikationer; deaktiver Wi-Fi                                                                                                                                                                 |
| Windows ASIO: Høj **PCIe Indlæsning**                           | For mange kanaler konfigureret                                               | Reducér Kanalindstilling i ASIO- driverkonfiguration                                                                                                                                                                                                                                            |
| Windows ASIO: Høj **DPC Latency**                               | Windows planlægning forsinkelser fra tredjeparts-drivere                     | Brug en DPC latensanalysator til at identificere den krænkende driver. Almindelige årsager: trådløse adaptere, USB strømstyring, antivirus. Aktiver højtydende effektplan                                                                       |
| macOS: DADman kan ikke kommunikere med enheden over Thunderbolt | Thunderbolt kommunikationsstak problem                                       | Opdater DAD Thunderbolt 3 driver til v1.2.2 eller nyere **og** opdater Thunder\¤ Core firmware til v1.1.0.3 eller senere. Begge opdateringer er nødvendige _(December 2024)_ |
| Lyd dropouts over Thunderbolt                                                   | Thunderboltkabel under 20 Gbps                                               | Udskift kabel med en certificeret Thunderbolt 3 kabel bedømt til 20 Gbps minimum                                                                                                                                                                                                                |
| Windows: ASIO driver ikke synlig i lydprogram                   | Chauffør ikke installeret                                                    | Installer DAD Thunderbolt 3 ASIO driver - det er en separat installatør fra DADman                                                                                                                                                                                                              |
| AX Center Dante Card: ekstern Dante sync virker ikke            | Fejl i firmware før v1.1.0.4 | Opdater AX Center firmware til v1.1.0.4 eller senere _(Januar 2025)_                                                                                                                                                         |

---

## 9.5 Ur og synkronisering

| Symptom                                                            | Sandsynlig årsag                                                                      | Fortryd                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gul status indikator på en Con tab input række                     | Synkroniser tab eller uoverensstemmelse mellem samplingfrekvens på det digitale input | Verificér kilde-enhedens samplingfrekvens matcher DAD-enheden. I **Konf** fanen, bekræft at kilden og Sample Rate er korrekte. Hvis dette input skal være ur master, sæt **Source** til dette input (fx, MADI Coax, Dante, Word Ur) |
| Klik og popper i hele lyden                                        | Enhed ikke låst til et stabilt ur                                                     | I fanen **Konf** skal du kontrollere, at Kilden er indstillet korrekt og den valgte kilde er aktiv og stabil                                                                                                                                                                           |
|                                                                    | Netværk overbelastet påvirker Dante ur stabilitet                                     | Placer DADman styrer trafik og Dante lyd på separate dedikerede netværk                                                                                                                                                                                                                |
| Indtastning af Word-ur vil ikke låse                               | Synkronisering forkert                                                                | Sæt **Synkronisering** til **75 Ω** i fanen **Konf**                                                                                                                                                                                                                                   |
|                                                                    | Word ur kabel for lang eller dårlig kvalitet                                          | Brug 75 Ωkoaksialkablet; maksimal pålidelig længde er ca. 30 m                                                                                                                                                                                                         |
| MADI input viser gul status, men samplinghastigheden synes korrekt | MADI Frame rate inkonsistens                                                          | I fanen **Konf** skal du kontrollere indstillingen **Rammehastighed** (Legacy vs. High Speed) matcher afsenderenheden. Begge ender af et MADI link skal bruge den samme Frame Rate indstilling                                      |
| "Tilpas til", ikke efter ændringer i DAW-samplingfrekvens          | Tilpas til at indstille til forkert input                                             | Sæt **Tilpas til** til det digitale input, der er forbundet til DAW (f.eks. **Thunderbolt 3**)                                                                                                                                      |
|                                                                    | DAW opdaterer ikke Core Audio / ASIO enhed samplingfrekvens                           | Luk og genåbne DAW's indstillinger for lydenhed for at tvinge en opdatering                                                                                                                                                                                                            |

---

## 9.6 Overvågningskontrol

| Symptom                                                                          | Sandsynlig årsag                                                         | Fortryd                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Man- fanebladet viser ingen kontroller                                           | Ingen skærm profil indlæst                                               | Indlæs en `.dmprof` fil via **Fil > Åbn profil…** eller opret en ny profil i **Indstillinger > Overvåg profil**                                                                                                                                                                     |
| Blank overvågningsside i Avid Control eller Avid kontroloverflade                | DADman er ikke bundet til EuControl                                      | I EuControl **Tildel** fanen med DADman i forgrunden, aktivere overvågning tildeling til DADman. Bekræft **Aktivér EuCon** er afkrydset i DADman **Indstillinger** menuen                                                                                           |
| EuCon: Kontrolrum niveau ikke genaktiveret efter Ref skifte      | Fejl før v5.8.2                          | Opdatering til DADman v5.8.2 build 2 eller senere                                                                                                                                                                                                   |
| macOS: Talkback menu viser forkert værdi i Overvåg profil dialog | Fejl før v5.8.2                          | Opdatering til DADman v5.8.2 build 2 eller senere                                                                                                                                                                                                   |
| Hovedtelefon ikke efter valg af højttaler i kontrolrum                           | Overvåg tilstand for hovedtelefon indstillet til Cue i stedet for Master | I **Indstillinger > Overvåg profil**, indstil hovedtelefonens output monitor tilstand til **Master**; indstil kontrolrum højttalere til **Cue**-tilstand. Se [Ch. 8, Punkt 8.2] |
| Ref knappen har ingen effekt                                                     | Intet referenceniveau defineret i Overvågningsprofil                     | I **Indstillinger > Overvåg profil**, indtast den kalibrerede referenceværdi for det aktive outputsæt                                                                                                                                                                               |
| Overvåg profil beskadiget ved næste gemning efter en annulleret belastning       | Fejl før v5.8.0                          | Opdater til DADman v5.8.0 eller nyere; gendan fra backup `.dmprof`                                                                                                                                                                                  |

---

## 9.7 Nulstil Procedurer

Forsøg nulstiller i den rækkefølge, der er anført — blødeste først.

### 9.7.1 Genindlæs Konfigurationsfil

Gendanner gemte indstillinger uden at påvirke hardware:

1. Gå til **Fil > Åbn…** og vælg den seneste `.dms` fil.
2. Bekræft alle parametre opdatering i DADman vinduet.

### 9.7.2 Fabriksnulstilling via DADman

> **ADVARSEL:** Sletter alle indstillinger, der er gemt på hardwareenheden. Gem først en '.dms'-fil.

1. Højreklik på enheden (eller brug handlingsknappen på macOS) i enhedslisten.
2. Vælg **Fabriksindstilling** og bekræft, når du bliver bedt om det.
3. Efter genstart af enheden (op til 60 sekunder), genindlæs filen `.dms` via **Fil > Åbn…**.

### 9.7.3 Forreste Panel Ip Nulstilling

Hvis enhedens IP-adresse er ukendt eller fejlkonfigureret, og du ikke kan oprette forbindelse via DADman:

- Knappen **Reconfig** (tilgås via et lille hul på bagpanelet med en pen eller spidse objekt) nulstiller enheden til fabrikkens standard IP-adresse, når der trykkes på under tænding.
- Factory standard IP for de fleste DAD hardware: `10.0.7.20` — bekræft i din hardware installationsguide.
- Efter genbosættelse, genforbinde via DADman og omkonfigurere via Enhedsliste **> Netværksindstillinger**.

### 9.7.4 Effektcyklus

Hvis enheden ikke reagerer og ikke kan nulstilles via DADman:

1. Højreklik på enheden **> Afbryd forbindelsen**.
2. Sluk for hardwareenheden ved lysnetknappen.
3. Vent 10 sekunder.
4. Strøm enheden tilbage på.
5. Vent op til 60 sekunder for Klar LED til at vise solid grøn.
6. Enheden vises automatisk igen i enhedslisten.

---

## 9.8 Kendte problemer i version

| Symptom                                                                                        | Berørte versioner                                                                           | Fast i                                                                                                              |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Windows: DADman undlader at starte (VCRUNTIME DLL mangler)  | Før v5.7.2                                                  | v5.7.2 (Sp. 2024)                                |
| MacOS: Nedbrud ved dobbeltklik på .dms i Finder                | Før v5.8.0                                                  | v5.8.0 (dec. 2024)                               |
| Overvåg profil beskadiget efter annulleret belastning                                          | Før v5.8.0                                                  | v5.8.0 (dec. 2024)                               |
| macOS: Vis skalerende artefakter                                               | Før v5.8.0                                                  | v5.8.0 (dec. 2024)                               |
| macOS: DADman bliver ikke forrest fra bakken (Sonoma)       | Før v5.8.0                                                  | v5.8.0 (dec. 2024)                               |
| macOS: Sjælden Thunderbolt kommunikationsfejl                                  | Før v5.8.0 + chauffør 1.2.2 | v5.8.0 + driver 1.2.2 (Dec 2024) |
| Windows: MIDI nedbrud                                                          | Før v5.8.1                                                  | v5.8.1 b6 (maj 2025)                                             |
| macOS: Grafikproblemer på skalerede skærme med store vinduer                   | Før v5.8.1                                                  | v5.8.1 b6 (maj 2025)                                             |
| EuCon: Kontrolrum niveau ikke genaktiveret efter Ref skifte                    | Før v5.8.2                                                  | v5.8.2 b2 (Jan 2026)                                             |
| macOS: Talkback menu forkert valgt værdi                                       | Før v5.8.2                                                  | v5.8.2 b2 (Jan 2026)                                             |
| Windows: BitDefender firewall enhed lock-up                                    | Før v5.7.2                                                  | v5.7.2 (Sp. 2024)                                |
| **Firmware:** AX Center ADC passerer ikke lyd (timing fejl) | Før firmware v1.1.0.4                       | v1.1.0.4 (Jan. 2025)             |
| **Firmware:** AX Center Dante Card ekstern synkronisering forkert              | Før firmware v1.1.0.4                       | v1.1.0.4 (Jan. 2025)             |
| **Firmware:** DA kort kanal 8 fase fejl                                        | Før firmware v1.0.6.3                       | v1.0.6.3 (sep 2024)                              |
| **Firmware:** ADAT kanal 3 ved 88,2/96 kHz                                     | Før firmware v1.0.6.3                       | v1.0.6.3 (sep 2024)                              |
| **Firmware:** Forsinkelse ikke anvendt på kanaler > 16                         | Før firmware v1.0.6.3                       | v1.0.6.3 (sep 2024)                              |
| **Firmware:** 3G SDI-kanaler, der ikke aktiverer efter opstart                 | Før Family 1 firmware v2.3.6.1              | v2.3.6.1 (dec. 2022)             |

**Åbn kendt problem (efter v5.8.2 build 2):**

| Symptom                                                                                                                            | Status                     | Workaround                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------- |
| macOS Sequoia (v15): DADman kan ikke oprette forbindelse til netværksenheder ved første opstart | Åbn — rettelse i udvikling | Log ud og log tilbage på macOS brugerkontoen. Thunderbolt forbindelser er upåvirket |

---

## 9.9 Henter Support

**DAD Support Portal**  
[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)  
Vidensbase, firmware downloads, tekniske bulletiner og community forum.  
En gratis konto er påkrævet.

**Email**  
support@ntp.dk

**Når du kontakter support, inkluderer:**

1. **DADman > Om DADman > Kopier Information** output _(v5.7.2+)_
2. Hardware unit model og firmware version (synlig i Enhedsliste)
3. Beskrivelse af symptomet, da det startede, og hvad der ændredes, før det viste sig
4. Eventuelle fejlmeddelelser vises på skærmen
5. Relevant log output (se nedenfor)

### 9.9.1 Adgang til DADman- logfiler — macOS

DADman skriver logposter via macOS Unified Logging system. Logfiler gemmes ikke som almindelige tekstfiler; brug følgende metoder til at indsamle dem.

**Console.app (enkleste metode):**

1. Åbn **Console.app** (Programmer > Hjælpeprogrammer > Konsol).
2. I søgefeltet, skriv `DADman` og tryk på Retur.
3. Genskab problemet. Konsollen viser DADman logposter i realtid.
4. Vælg de relevante poster, højreklik og vælg **Kopiér** for at indsætte en supportbillet.

**Terminal (tidsindstillet log export):**

```bash
log show --predicate 'process == "DADman"' --info --last 1h > ~/Desktop/dadman-log.txt
```

Juster `--last 1h` efter behov (f.eks. `--last 30m`, `--last 2h`). Den resulterende fil kan knyttes til en support billet.

**Fejlrapporter:**  
Hvis DADman styrtede ned, er der skrevet en fejlrapport til:

```
~/Library/Logs/DiagnosticReports/
```

Kig efter filer med navnet `DADman_<date>_<hostname>.ips` eller `DADman_<date>.crash`. Disse er også synlige i Console.app under **Crash Rapporter**.

**TB3 Driver logs:**  
For at indsamle Thunderbolt driver log indgange:

```bash
log show --predicate 'process == "DADThunderboltDriver" ELLER undersystemet CONTAINS "ntp"' --info --last 1h > ~/Desktop/tb3-driver-log.txt
```

### 9.9.2 Adgang DADman Logs — Vinduer

**Windows Begivenhedsfremviser:**

1. Åbn **Begivenhedsfremviser** (Start → søg "Begivenhedsfremviser").
2. Navigér til **Windows Logs > Program**.
3. Klik på **Filter Nuværende Log…** og indtast `DADman` i feltet **Begivenhedskilder**.
4. Kopier eller eksporter de filtrerede poster til support billet.

**Applikationsdatamappe:**  
DADman gemmer indstillinger og kan gemme logfiler på:

```
%AppData%\NTP Technology\DADman\
```

Åbn denne sti i Windows Stifinder (`Win + R` → indsæt stien → Enter) og omfatter alle `.log` filer fundet der, når du kontakter support.

> **BEMÆRK:** De nøjagtige logfilstier ovenfor er blevet verificeret for standardinstallationer. Hvis DADman blev installeret til en ikke-standard placering eller køre under en anden brugerkonto, stier kan variere. DAD support kan give vejledning, hvis disse placeringer ikke indeholder de forventede filer.

---

_[Afventer fra DAD ingeniør:]_  
_— Fejlmeddelelse katalog (on-screen alarm tekst → årsag → afhjælpning)_  
_— Front panel LED state tables per hardware model_
