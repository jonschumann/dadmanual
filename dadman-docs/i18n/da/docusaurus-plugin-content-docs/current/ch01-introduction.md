---
title: "Kapitel 1 — Indledning & Produktoversigt"
sidebar_label: "Ch. 1 — Indledning"
sidebar_position: 3
---

# Kapitel 1 — Indledning & Produktoversigt

> **Dokument:** DADman Brugervejledning  
> **Softwareversion dækket:** DADman v5.8.2 build 2  
> **Kapitel status:** Kladde v0. — Afventer teknisk gennemgang af DAD engineering  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit              | Dækker                                     | Relevant for |
| ------------------- | ------------------------------------------ | ------------ |
| 1.1 | Hvad DADman er, og hvad det gør            | Alle brugere |
| 1.2 | Nøglefunktioner                            | Alle brugere |
| 1.3 | Software komponenter og deres relationer   | Alle brugere |
| 1.4 | Kompatibel hardware                        | Alle brugere |
| 1.5 | Hardwarefamilier og kloning kompatibilitet | Alle brugere |
| 1.6 | Sådan skal du bruge denne manual           | Alle brugere |
| 1.7 | Om DAD / NTP-teknologi                     | Alle brugere |

> **BEMÆRK — Anvendelsesområde for denne håndbog:** Denne håndbog er skrevet for brugere af DAD (Digital Audio Denmark) hardware. Alle bearbejdede eksempler, screenshots og procedurer bruger DAD-produkter — primært AX Center, Core 256 og AX64 — som referenceplatform. Avid MTRX, MTRX II og MTRX Studio er OEM produkter, der bruger DADman software og er funktionelt identiske fra en DADman control perspektiv; procedurerne i denne håndbog gælder også for disse produkter. Avid-hardware-specifikke emner (iLok, Pro Tools integration, Avid Master Account downloads) er bemærket, hvor relevant, men er ikke fokus i dette dokument.

---

## 1.1 Hvad Er DADman?

DADman er et softwareprogram, der konfigurerer og styrer professionelt lydhardware fra DAD (Digital Audio Denmark), NTP Technology, og Avid over et standard Ethernet-netværk. Det er et enkelt kontrolpunkt for alle tilsluttede enheder — giver adgang til analog inputforstærkning output-niveauer, routing, clocking, synkronisering og monitor control fra en samlet grænseflade.

DADman er en **kanalstrip-orienteret** grænseflade. Hver tilsluttet enhed vises i Enhedslisten, og dens input, output, og rutestyring præsenteres som et sæt af lodrette kanalstrimler — svarende til kanalstrimlerne på en blandekonsol. Det betyder, at uanset hvilken hardware enhed du arbejder med, DADman interface følger en konsekvent layout.

### 1.1.1 Grundlæggende princip: Indstillinger, der bor i enheden

> **BEMÆRK:** Dette er det vigtigste arkitektoniske koncept at forstå, før du bruger DADman.

Alle indstillinger konfigureret i DADman — routing, gain, output-niveauer, ur kilde, kanal etiketter og alle andre parametre — gemmes **i selve hardwareenheden**, ikke i DADman-softwaren eller på computeren, der kører den. DADman læser enhedens aktuelle tilstand fra netværket og viser det; når du foretager en ændring, DADman sender det skifte til den enhed, som gemmer det.

Dette har praktiske konsekvenser:

- Hvis DADman er lukket, eller computeren lukkes ned, fortsætter hardwareenheden med at fungere med de sidste lagrede indstillinger. Lyden passerer gennem uafbrudt.
- Hvis DADman åbnes, og en enhed findes på netværket, DADman viser med det samme enhedens aktuelle tilstand — selv om disse indstillinger sidst blev konfigureret på en anden computer.
- For at gendanne indstillingerne efter en fabriksnulstilling eller firmwareopdatering skal du genindlæse en gemt konfigurationsfil. Jf. [Kapitel 7, Afsnit 7.1 — Sessionsstyring].

---

## 1.2 Nøgleevner

DADman giver følgende kontrol kapaciteter på tværs af kompatibel hardware:

| Kapacitet                                                               | Varebeskrivelse                                                                                                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Analogt inputkontrol**                                                | Mic/line gain, phantom power (+48 V), pad, phase inversion, channel labelling                                                 |
| **Analogt output kontrol**                                              | Output niveau, mute, kanal mærkning, output udvalg (+18/+24 dBu)                                                              |
| **Routing matrix**                                                      | Fuld crosspoint routing matrix — op til 1.500 × 1.500 crosspoints på understøttet hardware                       |
| **Ur og synkronisering**                                                | Valg af prøvehastighed, valg af kilde, tilpasning af uret                                                                                        |
| **Overvåg kontrol**                                                     | Overvåg profiler med kilder, udgange, fold-downs, delay, og talkback                                                                             |
| **Multi-enhed kontrol**                                                 | Styr flere hardwareenheder samtidigt fra et enkelt DADman-vindue                                                                                 |
| **EuCon integration**                                                   | Kompatibel med Avid EuControl for control overflade integration                                                                                  |
| **Pro Tools PRE emulation**                                             | MIDI-kontrolleret forforstærker emulering til MTRX enheder                                                                                       |
| **Forudindstillinger for routing (Kontrol\-pakke)** | Op til 32 routing presets per enhed med automatiseret trigger switching _(v5.8.0 og senere)_  |
| **Mikrofon forstærkningsgrupper**                                       | Gruppér flere indgangskanaler for samtidig forstærkning _(v5.8.1.6 og nyere)_ |
| **Indstillinger backup**                                                | Gem og gendan alle enhedsindstillinger til DADman Indstillingsfiler (`.dms`) på computeren                                    |
| **Kloning enhed**                                                       | Kopier alle indstillinger fra en enhed til en anden i samme hardwarefamilie                                                                      |

---

## 1.3 Software Komponenter og deres relationer

DADman er en del af et to-komponent softwaresystem. Forståelse af sondringen mellem de to komponenter er afgørende for korrekt installation og fejlfinding.

### 1.3.1 De To Komponenter

| Komponent                    | Hvad det gør                                                                                                                                                       | Påkrævet for                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **DADman**                   | Konfigurerer og styrer hardwareenheder over Ethernet — routing, gain, monitoring, clocking                                                                         | Alle understøttede hardware                    |
| **DAD Thunderbolt 3 driver** | Gør Thunders kerne grænseflade synlig for computeren som en Core Audio (macOS) eller ASIO (Windows) lydenhed til brug i DAWs | AX64, AX Center, Core 256, Avid MTRX serie kun |

Disse to applikationer er **uafhængige**. De kommunikerer ikke med hinanden. Thunderbolt 3 føreren er ikke nødvendig for DADman til at fungere, og DADman er ikke nødvendig for Thunderbolt 3 driveren til at præsentere lydgrænsefladen til en DAW. Dog skal begge installeres for at udføre hele driften af Thunders Core hardware — konfiguration af enheden _og_ optagelse eller afspilning af lyd gennem den.

_[Pladsholder: diagram, der viser DADman og TB3 driver som parallelle stier mellem computeren og hardware enhed — DADman kommunikerer over Ethernet TB3 driver kommunikerer over Thunderbolt 3]_

### 1.3.2 Kommunikationsstier

En Thunder-Core enhed tilsluttet en computer bruger to samtidige, uafhængige kommunikationsstier:

| Sti               | Protocol      | Formål                                                                      |
| ----------------- | ------------- | --------------------------------------------------------------------------- |
| **Ethernet**      | TCP/IP        | DADman control — routing, gain, konfiguration                               |
| **Thunderbolt 3** | PCIe over TB3 | Audio transport — grænsefladen synlig for din DAW via Core Audio eller ASIO |

Ethernet-only hardware (AX32, DX32R, Penta serie) bruger kun Ethernet-stien. Der er ingen Thunderbolt 3 driver til disse enheder, og de vises ikke som lydgrænseflader på computeren. Lyd fra disse enheder transporteres over MADI, Dante, eller AES3.

### 1.3.3 Versionshistorik

| Krav                                                                          | Minimum version                                          |
| ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| DADman til Thunderbolt 3 driver support                                       | v5.6.7.1 |
| DADman med Apple Silicon (ARM64) understøttelse            | v5.5.0                   |
| DADman med kontrol Pack                                                       | v5.8.0                   |
| DADman med Mikrofon gain grupper                                              | v5.8.1 build 6           |
| DADman med Ravenna Card og ST 2110-30 support                                 | v5.8.2 byg 2             |
| Sidste DADman version understøtter Windows 7 / 8                              | v5.7.0                   |
| Nuværende udgivelse (på tidspunktet for offentliggørelsen) | v5.8.2 byg 2             |

---

## 1.4 Kompatibel Hardware

DADman styrer hardware fra tre produktfamilier: DAD/NTP Technology produkter, og Avid MTRX produkter. Den komplette liste over understøttet hardware på tidspunktet for offentliggørelsen (DADman v5.8.2 build 2) er vist nedenfor.

> **BEMÆRK:** Se altid udgivelsesbemærkningerne til din specifikke DADman-version for at bekræfte kompatibilitet med nyere hardwarerevisioner. Den understøttede hardware liste kan opdateres mellem manuelle revisioner.

### 1. 4. 1 DAD / NTP-teknologi Hardware

| Produkt       | Kategori                              | Forbindelse til computer | Thunders Kerne | Routing matrix                                                        |
| ------------- | ------------------------------------- | ------------------------ | -------------- | --------------------------------------------------------------------- |
| **AX Center** | Modulær analog og digital grænseflade | Thunderbolt 3 + Ethernet | Ja             | 1,024 × 1,024                                                         |
| **Kerne 256** | Digital lydgrænseflade                | Thunderbolt 3 + Ethernet | Ja             | [For at bekræfte] |
| **AX64**      | Modulær lydgrænseflade                | Thunderbolt 3 + Ethernet | Ja             | [For at bekræfte] |
| **AX32**      | AD/DA konverter system                | Kun Ethernet             | Nej            | [For at bekræfte] |
| **DX32R**     | Digital I/O og router                 | Kun Ethernet             | Nej            | 400 inputs                                                            |
| **AX24**      | Lyd grænseflade                       | Kun Ethernet             | Nej            | [For at bekræfte] |

### 1.4.2 NTP Technology Penta Series

| Produkt        | Kategori                       | Forbindelse til computer | Thunders Kerne |
| -------------- | ------------------------------ | ------------------------ | -------------- |
| **Penta 720**  | Modulær I/O basisenhed         | Kun Ethernet             | Nej            |
| **Penta 721s** | Modulær lydrouter- grænseflade | Kun Ethernet             | Nej            |

### 1.4.3 Tredjeparts Produkter

| Produkt                 | Producent | Forbindelse til computer | Thunders Kerne | DADman version påkrævet                          |
| ----------------------- | --------- | ------------------------ | -------------- | ------------------------------------------------ |
| **Dynaudio Control 01** | Dynaudio  | Thunderbolt 3 + Ethernet | Ja             | v5.7.2 og senere |
| **Dynaudio Control 02** | Dynaudio  | Thunderbolt 3 + Ethernet | Ja             | v5.8.2 og senere |

### 1. 4. 4 Avid MTRX Serie

Avid MTRX, MTRX II og MTRX Studio er OEM produkter fremstillet af DAD / NTP-teknologi og solgt af Avid. De bruger DADman som deres control software og er funktionelt identiske med DAD hardware fra en DADman perspektiv. Denne håndbog omfatter ikke Avid-specifikke emner som iLok-licens, integration af Pro Tools eller Avid Master Account management.

> **BEMÆRK:** For Avid MTRX, MTRX II og MTRX Studio, brug kun den version af DADman godkendt til din Avid hardware, tilgængelig fra din Avid Master Account. Se [Kapitel 3, afsnit 3.2 — Fremskaffelse af Software].

| Produkt              | Forbindelse til computer | Thunders Kerne |
| -------------------- | ------------------------ | -------------- |
| **Avid MTRX**        | Kun Ethernet             | Nej            |
| **Avid MTRX II**     | Thunderbolt 3 + Ethernet | Ja             |
| **Avid MTRX Studio** | Thunderbolt 3 + Ethernet | Ja             |

_[Afventer DAD-teknik: routing matrix kapaciteter til AX32, AX64, Core 256, AX24, Penta 720, Penta 721s; bekræftelse af AX24 forbindelsesmetode]_

---

## 1.5 Hardware Familier og Kloning kompatibilitet

DADman organiserer kompatibel hardware i tre **familier**. Familiemedlemskab bestemmer, hvilke enheder der kan udveksle indstillinger med hinanden ved hjælp af **Clone**-funktionen.

Kloning tillader alle indstillinger fra en enhed at blive kopieret til en anden. Dette er nyttigt til at duplikere en kendt god konfiguration på tværs af flere identiske enheder, eller til at genoprette indstillinger til en udskiftningsenhed. Kloning er kun tilladt mellem enheder i **samme familie**.

| Familie       | Medlemmer                                               | Noter                                    |
| ------------- | ------------------------------------------------------- | ---------------------------------------- |
| **Familie 1** | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s | Oprindelig generation routing arkitektur |
| **Familie 2** | MTRX II · AX64 · AX Center · Core 256                   | Generering af Thunders kerne             |
| **Familie 3** | MTRX Studio                                             | Standalone                               |

> **NOTE — Kloning mellem ikke-identiske enheder:** For de bedste resultater skal kilden og målenhederne konfigureres identisk (samme kort i de samme pladser). Indstillinger for kort til stede i kildeenheden, men mangler i samme plads i målenheden, er sat til fabriksstandard på målet. Indstillinger for kort til stede i målet men fraværende i kilden er upåvirket.

---

## 1.6 Sådan skal du bruge denne manual

Denne håndbog er organiseret for at understøtte både sekventiel og reference-stil læsning.

**Hvis du er ny til DADman:** Læs kapitel 1–3 i orden, så følg kapitel 6 (Getting startet) trin for trin. Vend tilbage til kapitel 4-5 for hardware baggrund, og kapitel 7, når du har brug for detaljerede operationelle vejledning.

**Hvis du er en erfaren bruger på udkig efter et bestemt emne:** Brug sektionsindekset øverst i hvert kapitel, eller det fulde indeks i tillæg H.

**Dokument konventioner brugt i hele denne håndbog:**

| Konvention                                                          | Betydning                                                                        |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Bold text**                                                       | Hardware kontrol navne, menupunkter, knap etiketter, fanenavne                   |
| `Monospace tekst`                                                   | Filnavne, filendelser, mappestier, kommandolinje- input                          |
| _[Placeholder]_ | Indhold, der skal bekræftes af DAD engineering eller tilføjes under gennemgangen |
| _(5,8,0 og senere)_                              | Funktionel tilgængelighed — angiver den krævede DADman-minimumsversion           |
| \* (AX32 / Familie 1) \*                         | Hardwarevariationer — parameter gælder specifikt for den navngivne hardware      |

**Krydsreferencer** brug formatet [Kapitel X, Afsnit X.X — Titel] til at pege på relateret indhold i denne håndbog.

---

## 1.7 Om DAD / NTP-teknologi

Digital Audio Denmark (DAD) er et mærke af NTP Technology A/S, med hovedsæde i Gentofte, Danmark. NTP Technology designer og fremstiller professionel lyd hardware til udsendelse, post-produktion, live lyd og studie applikationer.

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Web: www.digitalaudio.dk  
Support: www.digitalaudiosupport.com  
E-mail: info@digitalaudio.dk

---

## Krydsreferencer

- **Kapitel 2 — Systemkrav:** OS-kompatibilitet, minimum hardware specs, pakkeindhold
- **Kapitel 3 — Installation:** Installation af DADman og Thunderbolt 3-driveren
- **Kapitel 5 — Signal Flow & Architecture:** Hvordan DADman kommunikerer med hardware; clocking oversigt
- **Kapitel 6 — Kom i gang:** Trin-for-trin første brug
- **Kapitel 7 — Drift:** Fuldstændig grænseflade og operationelle arbejdsgange
- **Tillæg A — Specifikationer:** Specifikationstabeller for hele hardware

---

_[Afventer DAD-teknik:]_  
_- Routing matrix kapaciteter til AX32, AX64, Core 256, AX24, Penta 720, Penta 721s_  
_— Bekræftelse af AX24-forbindelsesmetode_  
_— Introduktion tekst til Om DAD / NTP-teknologiafsnit_
