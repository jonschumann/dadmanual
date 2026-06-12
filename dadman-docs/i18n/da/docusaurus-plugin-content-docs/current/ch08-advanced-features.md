---
title: "Kapitel 8 — Avancerede Funktioner"
sidebar_label: "Ch. 8 — Avancerede Funktioner"
sidebar_position: 10
---

# Kapitel 8 — Avancerede Funktioner

> **Dokument:** DADman Brugervejledning  
> **Software version dækket:** DADman v5.8. build 2  
> **Primær eksempel hardware:** DAD AX Center  
> **Kapitel status:** Kladde v0. — Afsnit 8.1-8. 5 udskrevet; PROS MON og Cue \ Mix afventende DAD engineering dokumentation; SPQ og MIDI parameter tabeller afventende; screenshots afventer  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit               | Funktion                                        | Version påkrævet                                    |
| -------------------- | ----------------------------------------------- | --------------------------------------------------- |
| 8.1  | Overvåg profiler — konfiguration og forvaltning | Alle versioner                                      |
| 8.2  | Mikrofon Gain Grupper                           | v5.8.1 og senere    |
| 8.3  | Kloning Indstillinger Mellem Enheder            | v5.6.9 og senere    |
| 8.4  | Control\śPack — Forudindstillinger For Routing  | v5.8.0 og senere    |
| 8.5  | EuCon Integration                               | Alle versioner                                      |
| 8.6  | DADLink                                         | v5.6.9 og senere    |
| 8.7  | Kører DADman i menulinjen eller statusfeltet    | v5.7.0 og senere    |
| 8.8  | Filhåndtering og adgang til kommandolinje       | v5.7.0 og senere    |
| 8.9  | DADman Præferencer Reference                    | Alle versioner                                      |
| 8.10 | Dante Virtual Soundcard som en skærm kilde      | Alle versioner                                      |
| 8.11 | Konfiguration Af Analoge Outputniveau           | Alle versioner                                      |
| 8.12 | SPQ Højttalerbehandlingskort                    | Alle versioner (kræver SPQ-kort) |
| 8.13 | Dolby Atmos Overvågning Workflow                | Alle versioner                                      |
| 8.14 | LTC over Dante                                  | Alle versioner                                      |
| 8.15 | MIDI Control og Pro Tools PRE emulering         | Alle versioner                                      |
| —                    | PRO\ MON Overvågningssystem                     | _(afventende dokumentation)_     |
| —                    | Cue\ Mix Zero-Latens-Mixer                      | _(afventende dokumentation)_     |

---

## 8.1 Overvåg profiler — Konfiguration og håndtering

### 8.1.1 Koncept

En **Overvåg profil** (filendelse `. mprof`) definerer den komplette monitorcontrollerkonfiguration for en DADman-kontrolleret hardwareenhed: hvilke kilder der kan overvåges, hvilken højttaler output sæt er tilgængelige, hvordan fold-downs og up-matches håndteres, delay indstillinger, talkback routing, og eksterne måling udgange.

En skærm profil er helt adskilt fra enhedens indstillingsfil (`.dms`). Den samme fysiske routing og gain konfiguration kan bruges med flere forskellige overvågningsopsætninger ved at indlæse forskellige profiler, uden at ændre andre enhedsindstillinger.

> **BEMÆRK:** Overvåg profiler gemmes på computeren, ikke i hardwareenheden. De skal indlæses i DADman hver gang programmet startes (medmindre **Åbn sidste fil ved opstart** er aktiveret for profiler). Hvis DADman er lukket, eller computeren lukkes ned, fortsætter skærmen controller med at fungere i den sidste tilstand, der sendes til enheden, men ingen yderligere monitor control er mulig, indtil DADman genstarter med den indlæste profil.

### 8.1.2 Åbning af skærmprofilredigeringsværktøjet

Åbn Overvågningsprofilens editor via **Indstillinger > Overvågningsprofil** (macOS: **● M** / Windows: **Ctrl+Shift+M**).

Editoren har fem faneblade: **Kilder**, **Outputs**, **Fold Downs**, **Delay**, og **MOM**.

### 8.1.3 Indstilling Af Kilder

En kilde er en signalvej, som operatørerne bør kunne vælge til overvågning. Typiske kilder inkluderer en DAW stereo output, en Dante stream, en gæst kilde, eller et tillidsfeed.

**For at tilføje en kilde:**

1. I fanen **Kilder** skal du højreklikke og vælge **Tilføj ny kilde**.
2. Dobbeltklik på kildenavnet for at omdøbe det (f.eks. `Pro Tools`, `Gæste`, `Dante Player`).
3. Højreklik under **Tilstand** og vælg **Sæt gruppeformat** — vælg kanaltælling og format (Mono, Stereo, 5.1, 7.1.4, osv.).
4. For hver kanal i kilden, skal du højreklikke på kanaltildelingsfeltet og vælge den tilsvarende input fra routing matrix. Brug Dante, MADI, AES3 eller analoge indgange som tilgængelige på den tilsluttede hardware.

_[Pladsholder: skærmbillede - Fanen Kilder med to kilder konfigureret (Pro Tools stereo, Dante 7.1)]_

### 8.1.4 Indstilling Af Outputsæt

Et **output-sæt** definerer en gruppe af fysiske output-kanaler, der bruges som en højttalerkonfiguration. Flere output sæt kan defineres ved hjælp af forskellige fysiske udgange (f.eks. nær-felt stereo vs. omgivelse) eller samme fysiske udgange med forskellige trimniveauer (f.eks. 85 dB SPL versus 75 dB SPL referenceniveauer).

**For at tilføje et outputsæt:**

1. I fanen **Outputs** skal du højreklikke og vælge \*\*Tilføj nyt Output-sæt \*\*.
2. Navngiv outputsættet (fx, `Near Field`, `5.1 Surround`, `85 dB SPL`).
3. Tildel et \*\* Gruppeformat \*\* der matcher højttalerkonfigurationen.
4. Tildel hver kanal til en fysisk analog output på hardwaren.
5. Sæt en **Trim** værdi, hvis dette output sæt kræver en fast niveau offset (nyttigt for flere referenceniveau forudindstillinger).

> **BEMÆRK:** Når output-kanaler er allokeret til en routing forudindstilling i Control\-Pack, de er låst og kan ikke tilsluttes via DADman routing matrix eller monitor profil. Se [Afsnit 8.4 — Kontrol-Pack].

_[Pladsholder: skærmbillede — Udgange fanen viser stereo og 5.1 output sæt]_

### 8.1.5 Referenceniveauer og flere SPL-forudindstillinger

Funktionen på referenceniveauet låser monitorens udgang til et kalibreret SPL uden risiko for utilsigtet justering.

**For at konfigurere et referenceniveau:**

1. Ved hjælp af testtoner og en kalibreret SPL meter, indstille Mon tab hoved niveau fader til den ønskede overvågning SPL.
2. I **Indstillinger > Overvåg profil**, åbn det relevante outputsæt.
3. Angiv det kalibrerede niveau som **referenceniveau** for det pågældende outputsæt.
4. Tryk **Ref** i Mon fanen under sessioner for straks at vende tilbage til dette niveau.

**For at oprette flere forudindstillinger for referenceniveau på de samme fysiske udgange:**

Definér to udgangssæt, der peger på de samme fysiske udgange, men med forskellige Trim værdier. For eksempel:

| Output sæt navn          | Outputs | Beskær | Kalibreret SPL |
| ------------------------ | ------- | ------ | -------------- |
| I nærheden af felt 85 dB | DA 1-2  | 0 dB   | 85 dB SPL      |
| I nærheden af Felt 75 dB | DA 1-2  | −10 dB | 75 dB SPL      |

Begge output sæt vises som valgbar højttaler indstillinger i fanen Mon . Skift mellem dem giver øjeblikkelig SPL niveau skifte uden at røre fysisk gain kontrol.

### 8.1.6 Fold-Downs og Up-Matching

Fanen **Fold Downs** definerer matricer, der konverterer mellem højttalerformater — for eksempel folde en 7. mix ned til stereo for en kompatibilitet check, eller up-matchende en stereo kilde til en custom højttaler layout.

**Standard fold-down:** DADman inkluderer standard fold-down matricer (f.eks. 5,1 til stereo). Vælg input og output format og DADman genererer passende blanding koefficienter.

**Brugerdefinerede matricer (up-match eller selektiv routing):** Højreklik på en eksisterende fold-down post og vælg **Tilføj ny matrix**. Du kan indstille input og output format til den samme værdi - effektivt at skabe en brugerdefineret routing forudindstillet inden for monitor stien. Denne teknik muliggør kreative fold-down applikationer:

_Eksempel - Højttaler delsæt valg:_ Definere en `Tops Only` matrix på 7.1.4 → 7.1.4. I matrix editor, rute kun de fire overhead kanaler (Lt1, Rt1, Ltm, Rtm) til deres tilsvarende udgange, efterlader alle andre kanaler tavse. Valg af denne "fold-down" i fanen Mon effektivt soloer loftet højttalere uden at ændre de vigtigste mix.

_Eksempel - Basstyring:_ Definere brugerdefinerede fold-down matricer, der rute lavfrekvente indhold til en sub output med passende rolloff koefficienter, selv når kildeformatet ikke indeholder en LFE-kanal.

### Konfiguration Af 8.1.7 Talkback

Talkback ruter en mikrofon eller anden kilde ind i talentets hovedtelefonfeeds, når de er aktiveret. Konfigurer talkback i **Indstillinger > Overvåg profil > Outputs**.

**Talkback-tilstande** _(v5.7.0 og senere):_

| Tilstand        | Opførsel                                                                                                                               | Hvornår skal du bruge                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Skift/Latch** | Tryk først på aktiverer talkback; andet tryk deaktiveres. Holding længere skifter mellem låsen stater. | Studio-miljøer, hvor ingeniøren har brug for håndfri talkback      |
| **RAW**         | Talkback er kun aktiv, mens knappen holdes. Frigiver når knappen slippes.                              | Broadcast-miljøer, hvor utilsigtet låsning ville være forstyrrende |

> **BEMÆRK:** RAW-tilstand gælder for MOM hardware kontrol og MTRX Studio frontpanel talkback knap. EuCon kontroloverflader bruger altid Toggle/Latch tilstand uanset denne indstilling.

### 8.1.8 Hovedtelefon Følger Kontrolrum

Som standard er hovedtelefonudgangen et separat \*\* Cue\*\* mix, uafhængigt af kontrolrummets højttalervalg. For at få hovedtelefonudgangen automatisk spore uanset kilde er valgt på de vigtigste kontrolrum højttalere:

1. I **Indstillinger > Overvåg Profil > Outputs**, indstil hovedtelefonudgangens **Overvågningstilstand** til **Master**.
2. Set the control room speaker output set 's \*\* Monitor Mode\*\* to **Cue**.

**Resultat:** Hovedtelefonens udgang er nu tildelt til valg af skærm feed — alt efter hvilken kilde der er aktiv på højttalerne i kontrolrummet den samme kilde spiller gennem hovedtelefonerne. Kildevalg, fold-down og dim/cut alle følge kontrolrummet.

> **BEMÆRK — Begrænsning:** Når DADman ikke kører, falder hardwareenheden tilbage til sin standarddriftstilstand. I denne fallback, oversætter Cue gruppen routing ikke til hardwareens standardtilstand, så hovedtelefonen ikke kan følge kontrolrummet, når DADman er offline. Som en løsning konfigurere DADman til at starte automatisk ved login. Se [Afsnit 8.7 — Kørsel DADman i menulinje eller systembakke].

### 8.1.9 Gemning og indlæsning af monitorprofiler

| Handling                                                         | macOS                              | Vinduer                            |
| ---------------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
| Åbn Profil                                                       | ØSTRIG O                           | Ctrl+Alt+O                         |
| Importer profil (fra enhver kompatibel enhed) | ØSTRIG I                           | Ctrl+Alt+I                         |
| Gem Profil                                                       | ØSTRIG S                           | Ctrl+Alt+S                         |
| Gem Profil Som…                                                  | ØSTRIG - S                         | Ctrl+Alt+Shift+S                   |
| Luk Profil                                                       | ØSTRIG W                           | Ctrl+Alt+W                         |
| Åbn Seneste Profil                                               | Hovedmenu → **Åbn seneste profil** | Hovedmenu → **Åbn seneste profil** |

**Importér profil:** **Filen > Importprofil…** funktionen importerer en Overvågningsprofil fra en kompatibel tilsluttet enhed og udfører en bedst pasform kortlægning til den aktuelle hardware's tilgængelige I/O. Dette er nyttigt, når du migrerer en profil mellem enheder med forskellige I/O-konfigurationer.

---

## 8,2 Mikrofon gain grupper _(v5.8.1 bygge 6 og senere)_

### 8.2.1 Koncept

Mikrofon gain grupper tillade flere analoge indgangskanaler at være forbundet således at justere gain eller mute på en hvilken som helst kanal flytter alle kanaler i gruppen samtidigt, samtidig bevare den relative gain forskydninger mellem kanaler. Dette er designet til multi-mic opsætninger — trommer, orkesterensembler, kor, eller lokaliseringsoptagelsesarrays — hvor der skal opretholdes sammenhængende relative gevinstforhold mellem kanalerne på tværs af justeringer.

Mic Gain Grupper understøttes på alle hardware **undtagen MTRX Studio**. Der kræves en firmwareopdatering (familie 1: v2.4.5.1 eller senere; Thunder\¤ Core: v1.1.1.1 eller senere).

**Grupperede parametre:** gain og mute.  
**Ikke grupperet:** Phantom power (+48 V) og fase invert (Ø). Disse forbliver individuelt kontrollerede, selv når kanaler er i en gruppe.

### 8.2.2 Oprettelse og styring af grupper

\*\*For at tilføje en kanal til en gruppe: \*\*

1. I fanen **AD** skal du højreklikke på vinderkontrollen af en kanal (eller bruge kanalkontekstmenuen).
2. Vælg **Tilføj til Gain Group** og vælg et gruppenummer (grupper er nummereret; du kan oprette flere uafhængige grupper).
3. Gentag for hver kanal til at inkludere i gruppen.

\*\*Sådan fjerner du en kanal fra en gruppe: \*\*

Højreklik på gain-kontrollen og vælg **Fjern fra Gain Group**.

### 8.2.3 Gruppeadfærd

Når flere kanaler deler en gruppe:

- Flytning af gain-skyderen på en grupperet kanal flytter \*\*alle kanaler i gruppen \*\* med den samme stigning. Den relative forskydning mellem kanaler bevares.
- Muting enhver grupperet kanal slår alle kanaler i gruppen.

**Tilsidesætning af individuelle kanaler — Alt/Option modifier:**

Holding af **Alt** (Windows) eller **Option** (macOS) under justering af en kanals gevinst eller mute virker kun på denne kanal uden om gruppen:

| Handling                                            | Med Alt/Option                 |
| --------------------------------------------------- | ------------------------------ |
| Mus træk på gain skyderen                           | Justerer kun valgte kanal      |
| ↑/↓ tastatur (gain slider valgt) | Justerer kun valgte kanal      |
| Klik på gevinstfelt under skyderen                  | Justerer kun valgte kanal      |
| Click Mute                                          | Mutes/unmutes kun valgte kanal |

### 8.2.4 EuCon Adfærd

Ved kontrol af grupperede kanaler via en Avid EuControl overflade:

- Få skydere og knapper på EuCon overflader påvirker gruppen (alle kanaler bevæger sig sammen).
- Slå fra en EuCon overflade påvirker alle grupperede kanaler samtidigt.

> **BEMÆRK:** Alt/Option per kanal tilsidesættelse er kun tilgængelig via mus/tastatur i DADman - det kan ikke udløses fra en EuCon overflade.

---

## 8.3 Kloningsindstillinger mellem enheder _(v5.6.9 og senere)_

### 8.3.1 Koncept

Funktionen **Clone** kopierer alle indstillinger fra en hardwareenhed til en anden i samme hardwarefamilie. Det er nyttigt for duplikering af en kendt god konfiguration til en anden identisk enhed, gendannelse af indstillinger til en udskiftningsenhed eller initialisering af en ny enhed fra en eksisterende profil.

Kloning er kun tilladt mellem enheder inden for samme familiegruppe:

| Familie   | Medlemmer                                               |
| --------- | ------------------------------------------------------- |
| Familie 1 | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s |
| Familie 2 | MTRX II · AX64 · AX Center · Core 256                   |
| Familie 3 | MTRX Studio                                             |

### 8.3.2 Klon Procedure

**For at klone fra en tilsluttet enhed til en anden:**

1. Højreklik på **mål**-enheden (den, der skal modtage indstillingerne).
2. Vælg **Klon fra…** og vælg kildeenheden fra listen.
3. Bekræft klonhandlingen.

**For at klone fra en gemt indstillingsfil til en tilsluttet enhed:**

1. Åbn `.dms` indstillingsfilen via **Fil > Åbn…**.
2. Højreklik på målenheden i Enhedslisten.
3. Vælg **Klon fra fil** og vælg den relevante kildeenhed i filen med indlæste indstillinger.

> **ADVARSEL:** Kloning overskriver alle indstillinger på målenheden. Sørg for, at målenhedens indstillinger er blevet gemt i en `.dms` fil, før du fortsætter, hvis det kan være nødvendigt at gendanne.

### 8.3.3 Ikke-Identisk Enhedsadfærd

For de bedste resultater skal kilden og målenhederne konfigureres identisk — de samme korttyper installeret i de samme pladspositioner. Ved forskellige konfigurationer:

- Indstillinger for kort til stede i kilden, men mangler i **samme pladsposition** på målet er sat til fabriksstandard på målet.
- Indstillinger for kort til stede i målet men fraværende i kilden er ikke ændret.

---

## 8.4 kontrolpakke — routing Presets _(v5.8.0 bygge 8 og senere)_

### 8.4.1 Koncept

Control Pack giver en routing forudindstillede system til Thunders kerne produkter (AX64, AX Center, Core 256). Op til 32 routing presets kan defineres pr. enhed, hver med op til fire uafhængige inputlag — kaldet **buckets** — der skifter op til 256 kilder til 256 destinationer samtidigt inden for en enkelt lydprøve.

Skift mellem spande kan være:

- **Manual** — udløst af operatøren fra Control\-Pack strimlen i DADman
- **Automatiseret** — udløst af indbyggede signaldetektorer, der overvåger indgangskanaler til signaltilstedeværelse, AE6-pilottoneintegritet eller tilslutning på portniveau

Kontrol char@@0 rsquo; Pack forudindstillinger gemmes i Thunder\-kerne hardware enhed. De kan styres fra flere DADman forekomster samtidigt, og fra en dedikeret Control char@@0 nbsp; Pack hardware panel uden nogen DADman forbindelse.

**Firmware kræves:** Thunder\¤ Core firmware v1.1.0.3 eller senere.

### 8.4.2 Nøglespecifikationer

| Parameter                                                                             | Værdi                                         |
| ------------------------------------------------------------------------------------- | --------------------------------------------- |
| Maksimum forudindstillinger pr. enhed                                 | 32                                            |
| Maksimale skovle (indgangslag) pr. forudindstillet | 4                                             |
| Maksimale kilder pr. spand                                            | 256                                           |
| Maksimum output pr. forudindstillet                                   | 256                                           |
| Switching time (spand switch, automatiseret)                       | Indenfor 1 lydprøve                           |
| Skift tid (manuelt, direkte valg)                                  | 0 lydprøver                                   |
| Signaldetektering / udløser responstid                                                | < 1 ms               |
| Signalgeneratorer (indbygget)                                      | Sine wave pilot tone · AE6 digital pilot tone |

### 8.4.3 Signalgeneratorer

Hver Thunders kerne enhed indeholder to indbyggede signalgeneratorer:

| Generator                  | Type                                                          | Parametre                                                                          |
| -------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Sine wave pilot tone**   | Kontinuerlig sinusbølge                                       | Niveau: -60 til 0 dBFS; Frekvens: 20 Hz til 20 kHz |
| **AE6 digital pilot tone** | Binært repetitivt signal (hex værdi 0xAE6) | Fast mønster                                                                       |

Signalgeneratorer kan dirigeres til ethvert output i enheden via routing matrix. AE6-signalet er designet til integritetskontrol — det kan detekteres på modtagelsesenden for at bekræfte, at signalkæden er uforarbejdet og uændret. Hvis AE6-signalet passerer gennem en samplingfrekvensomformer, analog fase eller niveauændring, ændres mønsteret, og det kan ikke genkendes.

### 8.4.4 Udløsningstyper

Hver spand kan tildeles op til fire trigger kilder. Tre udløsningstyper er tilgængelige:

| Udløser type      | Detekter                                                       | Noter                                                                                                     |
| ----------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Signal Niveau** | Tilstedeværelse af lydsignal over -40 dBFS i et vindue på 1 ms | Fungerer med analogt eller digitalt input                                                                 |
| **AE6**           | Integritet af den digitale AE6-pilottone på et digitalt input  | Signalet skal være ubehandlet (ingen SRC, ingen niveauændring) for vellykket detektion |
| **Port**          | Status for fysisk port forbindelse                             | Thunderbolt 3, MADI, DADLink, ADAT eller AES3 porte                                                       |

### 8.4.5 Indstil Routing Forudindstillinger

Åbn Routing Preset editor via **Indstillinger > Routing Presets**.

Konfiguration følger fire trin:

**Trin 1: Vælg målenheden**

Fra rullemenuen øverst i ruteforudindstillingsvinduet, skal du vælge Thunders kerne for at konfigurere. Hvis enheden ikke er tilsluttet, klik på **Åbn enhedsliste** for at forbinde den først.

**Trin 2: Tilføj en routing forudindstilling**

Højreklik på den forudindstillede liste og vælg **Tilføj forudindstilling**. Indtast et navn og antallet af udskriftskanaler for forudindstillet. Aktivér forudindstilling ved at markere dens afkrydsningsfelt. Forudindstillinger kan genbestilles i listen _(v5.8.1 og senere)_.

**Trin 3: Konfigurere spande og udløsere**

For hver spand i forudindstillingen:

1. Højreklik på feltet **Kildesæt Navn** og skriv et navn på skovlen (f.eks. `Pro Tools`, `Backup DAW`, `Test Generator`).
2. Sæt **Trigger Prioritet** for spanden. Buckets med et højere prioritetsnummer foretrækkes, når deres detektorer rapporterer et gyldigt signal. Hvis alle spande har samme prioritet, skiftes kun manuelt.
3. Vælg op til fire **Trigger Sources** fra de tilgængelige input. Kombiner trigger typer (Signal Level + AE6) for robust failover detektion.

**Automatiseret skifte logic:**

- Spanden med **højeste prioritet** hvor alle tildelte detektorer rapporterer OK sendes til outputs.
- Hvis den aktive spand detektorer rapporterer en fejl, skifter systemet til den næste højest prioriterede spand med alle detektorer OK.
- Manuel tilsidesættelse er altid tilgængelig — dobbeltklik på en spand knap for at tvinge det uanset detektor status.

**Trin 4: Tildel input og output kanaler**

Højreklik på output kanal kolonne for at vælge output kanaler fra de tilgængelige udgange på enheden. Højreklik på hver indgang (spand) kolonne for at tildele kildekanaler. Når udgange er tildelt til en forudindstilling, de er **låst** — de kan ikke tilsluttes via DADman-router- matrixen eller monitor-profilen, mens forudindstillingen er aktiv.

_[Pladsholder: skærmbillede — Forudindstilling for routing editor viser en to-spand forudindstilling med trigger kilder konfigureret]_

### 8.4.6 Betjening

Når den er konfigureret, den Control char@@0 rsquo; Pack strip vises under de vigtigste DADman kanal strimler. Hver forudindstilling vises med bucket knapper, kilde PPM meter, output PPM meter, og trigger status indikatorer.

**Spændingsknappens farve tilstande:**

| Farve    | Betydning                                                                               |
| -------- | --------------------------------------------------------------------------------------- |
| **Blå**  | Denne spand er aktiv — manuel tilstand (ingen automatiseret skifter) |
| **Grøn** | Denne spand er aktiv — automatiseret tilstand, bevæbnet og klar til at skifte           |
| **Rød**  | Signaldetektorfejl på denne spand — signaltab eller AE6-fejl detekteret                 |

**Skift mellem manuel og automatiseret tilstand:**

- **Dobbeltklik på en grøn knap** → skifter til manuel (knappen bliver blå)
- **Dobbeltklik på en blå knap** → automatisering af arme igen (knap bliver grøn)

**Udløsningsstatusindikatorer** under hver skovlknap viser realtids-beståt/fejlstatus for hver tildelt detektor (0–4 indikatorer pr. skovle).

_[Pladsholder: skærmbillede — Control\řpakkestrid viser to forudindstillinger, en automatiseret (grøn), en manuel (blå)]_

> **TIP:** I live-events eller udsendelser er armautomatisering (**grøn**) under linjekontrol, når signalet er bekræftet på alle indgange. Hvis et input mislykkes under showet, skifter forudindstillingen automatisk uden operatør indgriben. Dobbeltklik på den foretrukne spand til enhver tid tvinger det uanset automatisering tilstand.

---

## 8.5 EuCon Integration

### 8.5.1 Aktivering Af EuCon

DADman kommunikerer med Avid EuControl via EuCon-protokollen, hvilket gør det muligt at kontrollere Avid overflader (S1, S6, S6L, MTRX Studio frontpanel) og Avid Control app til at styre DADman overvågning funktioner.

**For at aktivere EuCon:**

1. Gå til **Indstillinger > Aktivér EuCon** i DADman.
2. Sørg for, at EuControl kører på den samme computer og er forbundet til kontroloverfladen eller -appen.

### 8.5.2 Binding DADman overvågning til EuControl

For at monitoreringskontrollen kan forekomme på en Avid-kontrolflade eller Avid-kontrolappen, skal DADman være bundet til EuControl:

1. Bring DADman til forgrunden (klik på DADman-vinduet for at gøre det til det aktive program).
2. Åbn fanen **Tildel** i EuControl.
3. Aktivér afkrydsningsfeltet overvågning for DADman (det vises fordi DADman er i forgrunden).

> **TIP:** Hvis overvågningssiden i Avid Control kun viser en master fader og ingen andre kontroller, er bindingstrinnet ikke afsluttet. Bring DADman til forgrunden og gentag tildel fanen procedure.

### 8.5.3 Låseovervågning til DADman

Når overvågningen er bundet til DADman, du kan låse overvågningssektionen, så den forbliver under DADman-kontrol, uanset hvilken ansøgning der aktuelt er i forgrunden:

1. I EuControl \*\* Tildel \*\* fanen, med overvågningssektionen bundet til DADman, klik \*\*Lås \*\* (eller tilsvarende for din overflademodel).
2. Skift til din DAW applikation. Overvågningsafsnittet på overfladen fortsætter med at kontrollere DADman.

Dette giver mulighed for transport og kanal kontrol til at følge DAW mens overvågningssektionen forbliver permanent tildelt DADman — standard arbejdsgangen til post-produktion og musik sporing miljøer.

### 8.5.4 EuCon og Mikrofon Gain Grupper

Når Mikrofon Gain Grupper er konfigureret:

- Få skydere og få knapper på EuCon overflader flytte alle grupperede kanaler sammen.
- Slå fra en EuCon overflade dæmper alle grupperede kanaler.
- Tilsidesættelse af en kanal via Alt/Option er ikke tilgængelig fra EuCons overflader.

### 8.5.5 Udvidelse af knappen Talkback på en berøringsskærm

Hvis talkback knappen på Avid Control app touchscreen er for lille, brug siden **Soft Keys** og tildel flere bløde tastknapper til talkback-funktionen. Flere tilstødende knapper giver alle udløsende talkback et større effektivt touch-mål.

---

## 8,6 DADLink _(v5.6.9 og nyere)_

### 8.6.1 Koncept

DADLink er et proprietært high-channel-count interconnect format udviklet af DAD. Det bruger mini MADI modul slot på kompatible enheder med optiske SFP moduler til at transportere lyd mellem enheder på meget lav latenstid.

DADLink er designet til at forbinde flere DAD-enheder direkte — for eksempel forbinder et AX Center med en AX64 for at udvide den samlede kanaltælling, eller forbinder enheder på forskellige fysiske steder i en facilitet.

**Kompatibel hardware:** AX64 · AX Center · Core 256 · AX32 · DX32R · Penta 720 · Penta 721s _(fra firmware v2.4.1.2 for familie 1)_

### 8.6.2 Kanalkapacitet

| Stikprøve sats                  | Kanaler pr. DADLink- forbindelse |
| ------------------------------- | ------------------------------------------------ |
| 44.1 / 48 kHz   | Op til 128 kanaler                               |
| 88.2 / 96 kHz   | Op til 64 kanaler                                |
| 176.4 / 192 kHz | Op til 32 kanaler                                |

### 8.6.3 Latens

DADLink-latenstid er ca. **1 mikrosekunder** — effektivt nul fra et lydjusteringsperspektiv. Alle indgange og udgange på enheder, der er tilsluttet via DADLink, er fase-justerede, forudsat at **Digi forsinkelsen** er indstillet til den samme værdi på hver enhed.

### 8.6.4 Synkroniseringskrav

> **BEMÆRK:** For korrekt justering af indgange og udgange på tværs af DADLink-forbundne enheder, brug enten **DADLink** eller **Word Ur** som sync kilde mellem uret master enhed og alle følgere enheder. Alle enheder i et DADLink-netværk skal dele en fælles urkilde.

### 8.6.5 Installation Af Hardware

DADLink kræver **mini MADI modulet** installeret i mini MADI slot for hver tilsluttet enhed, udstyret med kompatible optiske SFP transceiver moduler. Tilslut enheder med optiske fiberkabler mellem SFP transceivers. Der henvises til DADLink og Mini MADI Module Installation Guide (fås fra [digitalaudiosupport.com](https://www.digitalaudiosupport.com)) for specifikke SFP modultyper og installationsprocedure.

Når det er installeret, DADLink indgange og udgange vises i DADmans routing matrix sammen med MADI, Dante, og andre format indgange. Formatet er synligt i fanen Conf, hvor DADLink vises som en grænseflade mulighed.

---

## 8.7 Kørsel DADman i menulinje eller systembakke _(v5.7.0 og senere)_

### 8.7.1 macOS — Menulinje Tilstande

DADman kan konfigureres til at minimere sin tilstedeværelse på MacOS-skrivebordet, hvilket gør den velegnet til permanente installationer, hvor den skal køre i baggrunden. Tre tilstande er tilgængelige i **DADman > Indstillinger**:

| Tilstand              | Opførsel                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kun Dock**          | DADman opfører sig som en normal macOS applikation - synlig i Dock og proceslinjen. Standard:                                                                                                      |
| **Menulinje og Dock** | DADman viser også et ikon i MacOS-systemets menulinje for hurtig adgang.                                                                                                                                           |
| **Kun Menulinje**     | DADman skjuler sig fra Dock, når dets hovedvindue er lukket. Kun ikonet i systemmenulinjen er synligt. Klik på den for at vise DADman menuen (hvordan, Afslut). |

**For at vise hovedvinduet fra kun menulinje tilstand:**

- Klik på DADman menulinjens ikon → **Vis**
- Dobbeltklik på en `.dms` eller `.dmprof` fil i Finder
- Tryk **~~~**\*\*
- Start DADman igen fra Programmer

> **BEMÆRK:** I menulinjen Kun tilstand, hvis DADman stadig vises i dokken efter ændring af indstillingen, Højreklik på Dock-ikonet → **Indstillinger > Behold i Dock** og deaktiver det.

> **BEMÆRK:** Kun i menulinjen med DADman skjult, DADman gemmer ikke filer, når brugeren logger ud eller systemet lukker ned, medmindre **Altid Gem fil** er aktiveret i Indstillinger.

### 8.7.2 Vinduer — Bakketilstand

I Windows skal du konfigurere statusopførsel i **Indstillinger > Indstillinger**:

| Tilstand                                           | Opførsel                                                                                                                                                  |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kun proceslinjen (standard)** | DADman opfører sig som en normal Windows-applikation.                                                                                     |
| **Proceslinje og systembakke**                     | DADman viser også en bakke ikon for hurtig adgang.                                                                                        |
| **Kun statusområde**                               | DADman lancerer kun til bakken. Venstreklik på statusikonen for at vise hovedvinduet; højreklik for Vis / Skjul / Afslut. |

### 8.7.3 Automatisk start ved login (macOS)

For automatisk at få DADman til at starte ved login og indlæse en konfigurationsfil:

**Metode 1 — macOS Login Items:**

1. Åbn **Systemindstillinger > Generelt > Login Elementer**.
2. Klik **+** og tilføj **DADman.app** fra din Applikationsmappe.
3. Aktiver \*\*Åbn sidste fil ved opstart \*\* i Præferencer, så DADman indlæser den korrekte `.dms` fil automatisk.

**Metode 2 — AppleScript forsinkelse lancering** _(for Sonoma og senere, hvor skjule login-elementer er begrænset):_

Da macOS Sonoma fjernede muligheden for at skjule loginelementer, skal du bruge et delay script til at starte DADman efter login:

```applescript
delay 5
fortæller programmet "Finder"
  aktivér
  open application file "DADman. pp" af mappen "Applikationer" af startdisken
slutter fortælle
delay 8
fortælle programmet "System Events"
  sæt synlig proces "DADman" til falsk
ende fortælle
```

For at bruge dette script:

1. Åbn **Script- Editor** (Programmer > Hjælpeprogrammer > Script- Editor).
2. Indsæt scriptet, justere forsinkelsesværdier efter behov.
3. Eksporter som **Program** (**Fil > Eksport** → Format: Program).
4. Tilføj den resulterende applikation til **Systemindstillinger > Generelt > Login Elementer**.

Scriptet lancerer DADman efter en 5-sekunders forsinkelse, så skjuler det efter yderligere 8 sekunder. Justér forsinkelser, der passer til din hardware.

---

## 8.8 Filhåndtering og kommandolinjeadgang _(v5.7.0 og nyere)_

### 8.8.1 Åbning af filer fra Finder eller Windows Stifinder

Fra DADman v5.7.0, `.dms` og `.dmprof` filer kan åbnes direkte ved at dobbeltklikke på dem i Finder (macOS) eller Windows Explorer. DADman åbner, indlæser filen, og anvender indstillingerne på tilsluttede enheder.

Hvis både en `.dms` og en `.dmprof` fil vælges og åbnes samtidigt, indlæser DADman den første `. ms` fil fundet og den første `.dmprof` fil fundet, ignorerer yderligere filer.

### 8.2 Åbning Af Kommandolinjefil

Åbn DADman med specifikke filer fra en terminal eller et script:

**macOS:**

```bash
open -a DADman /path/to/settings.dms /path/to/profile.dmprof
```

Den `-a DADman` er valgfri, men sikrer, at DADman bruges, selvom andre ansøgninger er registreret til `.dms` filer.

**Vinduer:**

```cmd
DADman.exe C:\path\to\settings.dms C:\path\to\profile.dmprof
```

Dette muliggør integration med eksterne styresystemer, vis filløfteraketter eller login-scripts, der skal indlæse en bestemt DADman-konfiguration ved opstart.

### 8.8.3 Åbning Flere DADman Instanser (Windows)

Som standard bringer åbning af DADman, når den allerede er i gang, den eksisterende instans til forgrunden i stedet for at lancere en anden kopi. For udtrykkeligt at starte en anden uafhængig instans:

```cmd
DADman.exe -m
```

---

## 8.9 DADman Præferencer Reference

Adgangspræferencer via **DADman > Indstillinger** (macOS) eller **Indstillinger > Indstillinger** (Windows).

| Præference                                         | Varebeskrivelse                                                                                                                                    | Noter                                                                                                                                                                                     |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Åbn sidste fil ved opstart**                     | Indlæser automatisk den sidst anvendte `.dms` indstillingsfil og anvender den til tilsluttede enheder ved opstart                                  | Anbefales til permanente anlæg; brug med forsigtighed i multi-operatør miljøer                                                                                                            |
| **GUI Layout**                                     | Vælger en af tre farvesammensætninger for DADman-grænsefladen                                                                                      | Gemt lokalt; påvirker ikke hardware                                                                                                                                                       |
| **Maks. matrix visningsstørrelse** | Sætter den maksimale størrelse af routing matrix detaljevisning: 32×32 (standard), 64×64, 128×128 eller 256×256 | Større størrelser giver mulighed for at se flere af routerens matrix på en gang; kan påvirke ydeevnen på ældre systemer \* (v5.7.0+)\* |
| **Show Mode** (macOS)           | Kun Dock · Menulinje og Dock · Kun Menulinje                                                                                                       | Se [Afsnit 8.7.1]                                                                                     |
| \*\*Vis I \*\* (Windows)        | Kun proceslinjen · Proceslinje og systembakke · Kun statusbakke                                                                                    | Se [Afsnit 8.7.2]                                                                                     |
| **Altid Gem Fil** (macOS)       | Gem automatisk den aktuelle '.dms'-fil ved logout, genstart eller nedlukning                                                       | Påkrævet for pålidelig drift i Kun menulinje tilstand                                                                                                                                     |

---

## 8.10 Dante Virtual Soundcard som Monitor Kilde

Den **Dante Virtual Soundcard (DVS)** fra Audinate tillader en Mac eller PC at fremstå som en Dante lydenhed på netværket, dirigere computerens systemlydoutput ind i Dante-netværket og ind i en DADman-kontrolleret hardwareenhed. Dette er nyttigt til overvågning DAW afspilning via en DAW der understøtter Dante, eller til brug af macOS / Windows-system lyd (YouTube, Spotify, referencespor) gennem hovedovervågningssystemet uden yderligere I/O.

### 8.10.1 Forudsætninger

- Dante Virtual Soundcard installeret og licenseret på værtscomputeren
- Dante Controller installeret (fri for Audinat)
- En DADman-styret enhed med Dante-indgang (AX Center, Core 256, AX64, AX32 med Dante-udvidelseskort osv.)

### 8.10.2 Konfigurationsprocedure

**Trin 1 — Start og konfigurer DVS**

1. Åbn Dante Virtual Soundcard applikationen.
2. Set the channel count as required (fx, **8×8** for a 7.1 or 7.1.2 source).
3. Tryk på **Start** for at aktivere DVS-tjenesten. Computeren vises nu som en Dante enhed på netværket.

**Trin 2 — Patch DVS til hardwareenheden i Dante Controller**

1. Åbn **Dante Controller**.
2. I **Routing** matrixen, find DVS-senderen (det vil fremgå under computerens værtsnavn).
3. Rute DVS udgange til de ønskede Dante input kanaler på DADman hardware enhed (f. eks. ., DVS udgange 1–8 → MTRX Dante indgange 1–8 eller AX Center Dante indgange 1–8).

**Trin 3 — Indstil systemets lydoutput til DVS (macOS)**

Hold **Option** og klik på macOS lydstyrke-ikonet i menulinjen, og vælg derefter Dante Virtual Soundcard som systemoutput-enheden. Alternativt, indstil den i **Systemindstillinger > Lyd > Output**.

**Trin 4 — Tilføj en DVS-kilde i DADman-skærmprofil**

1. Gå til **Indstillinger > Overvåg profil** i DADman.
2. I fanen **Kilder** skal du højreklikke og vælge **Tilføj ny kilde**.
3. Navngiv kilden (fx, `DVS`, `System Audio`, `Mac Output`).
4. Højreklik på **Tilstand**-kolonnen og vælg **Sæt gruppeformat** — vælg kanaltællingen for at matche din DVS-konfiguration (Stereo, 5.1, 7.1, osv.).
5. Højreklik på kanaltildelingen for hver kanal og vælg den tilsvarende Dante-input-kanal, der modtager DVS-signalet (som lappet i Dante Controller).

**Trin 5 — Bekræft**

Vend tilbage til fanen DADman \*\*Min. DVS-kilden skal nu fremstå som en valgbar overvågningskilde. Afspil lyd på computeren - du bør se måling på DVS kilde række.

> **BEMÆRK:** DVS-kilden vises kun i skærmkildelisten, mens DADman har en aktiv skærm profil indlæst med DVS-kilden konfigureret. Hvis en anden profil er indlæst, er DVS-kilden ikke tilgængelig, før den korrekte profil er genindlæst.

---

## 8.11 Analogt Outputniveau Konfiguration

Det analoge outputniveau styrer i fanen **DA** indstille signalet justering mellem hardware-enhedens digitale domæne (i dBFS) og dens analoge outputniveau (i dBu). Dette er en kalibreringsindstilling — det er ikke en kontrol på operationelt niveau.

### 8.11.1 Koncept

Skyderen DA outputniveau angiver hvilket analogt niveau der svarer til 0 dBFS. Det styrer ikke overvågningsniveauet; overvågningsvolumen styres af faderen i fanen **Mon**. Indstillingen DA output niveau eksisterer udelukkende for at justere hardwareens analoge output med headroom krav downstream udstyr.

**Eksempel:** Hvis DA-outputniveauet er sat til +18 dBu, producerer et digitalt 0 dBFS-signal +18 dBu på det analoge output. Hvis downstream-udstyr (effektforstærker eller aktiv monitor) klip ved +18 dBu, et signal på 0 dBFS klipper forstærkeren — så DA-niveauet skal indstilles til at matche downstream-udstyrets maksimale inputspecifikation.

> **ADVARSEL:** Indstilling af et højt DA-output-niveau er ikke altid fordelagtigt. Indstilling +24 dBu når downstream udstyr klip på +18 dBu vil forårsage input til at klippe 6 dB før digital fuld skala. Altid matche DA output niveau til den maksimale input specifikation af tilsluttede forstærkere eller skærme.

### 8.11.2 Output Niveau Område

DA linie udgange (på DB25 stikker) tilbyder to valgbare maksimale output niveau intervaller:

| Range                   | Slider span                           |
| ----------------------- | ------------------------------------- |
| −66 dBu til **+18 dBu** | Standard                              |
| −60 dBu til **+24 dBu** | Aktiveret af **6 dB gevinst** knappen |

Aktivér **6 dB Gain**-knappen på en kanal for at udvide dens outputområde til +24 dBu. Dette er passende, når du forbinder til professionelt udstyr med +24 dBu maksimale indgange.

### 8.11.3 Per-Channel Konfiguration

Forskellige output kanaler kan indstilles til forskellige analoge niveauer, giver mulighed for blandede udstyr forbindelser fra en enkelt enhed. For eksempel, nær-felt skærme fodret fra en stereo effektforstærker klipning på +18 dBu kan indstilles til +18 dBu, mens surround højttalere fodret fra forstærkere med +24 dBu headroom kan indstilles til +24 dBu på samme enhed.

_[Pladsholder: skærmbillede — DA fane, der viser skydere pr. kanal output niveau med forskellige kalibreringsværdier]_

---

## 8.12 SPQ Speaker Processing Card

**SPQ (Speaker Processing) kort** er et valgfrit DSP ekspansionskort til kompatible DAD hardware enheder (AX32 og MTRX varianter). Det giver per-kanal parametrisk EQ på den analoge monitor udgange, så in-hardware højttaler og rum korrektion uden en ekstern processor i signalvejen.

> **BEMÆRK:** SPQ-kortet er en hardware mulighed. Det skal være fysisk installeret i enheden. Hvis intet SPQ-kort er til stede, vises SPQ-fanen ikke i DADman.

### 8.12.1 SPQ Workflow Oversigt

Den typiske SPQ arbejdsgang er:

1. **Mål rummet** ved hjælp af akustisk målesoftware (f.eks. den gratis **Room EQ Wizard**, tilgængelig på roomeqwizard.com). Brug en kalibreret målemikrofon på lyttepositionen.
2. **Generer korrektionsfiltre for EQ** fra måleresultaterne i målesoftwaren.
3. **Importer filtrene** til DADman via SPQ-fanen. DADman accepterer EQ-data i et kompatibelt eksportformat fra Room EQ Wizard.
4. **Anvend korrektionen** — SPQ-kortet behandler de analoge udgange i realtid ved hjælp af de importerede filterkoefficienter.

### 8.12.2 SPQ Tab i DADman

SPQ-fanen vises i DADman, når et kompatibelt SPQ-kort detekteres i den tilsluttede enhed. Fra fanen SPQ kan du:

- Se og rediger EQ-kurver pr. output
- Importer måledata fra Room EQ Wizard
- Aktiver eller omgå SPQ behandlingen pr. output kanal
- Gem SPQ-konfigurationer som en del af enhedsindstillingsfilen (`.dms`)

> **BEMÆRK:** SPQ-indstillinger gemmes på hardwareenheden, ikke i skærmprofilen. De fortsætter på tværs af DADman sessioner uden at kræve en profil for at blive indlæst.

_[Pladsholder: fuld SPQ parameter reference og trin-for-trin Room EQ Wizard import procedure — afventende engineering dokumentation fra DAD]_

---

## 8.13 Dolby Atmos Monitoring Workflow

DADman monitor profil system understøtter Dolby Atmos overvågning fra single-unit opsætninger op til 64-kanal konfigurationer. Følgende er et begrebsmæssigt overblik over en typisk Dolby Atmos overvågningssignalvej ved hjælp af en DADman-kontrolleret enhed.

### 8.13.1 Oversigt Over Signal Flow

En typisk Dolby Atmos overvågningskæde:

```
Pro-værktøjer (Atmos session)
      ↓ (DADLink / MADI / Dante)
Dolby Renderer (f. eks. ., Dolby Atmos Mastering Suite / Renderer)
      ↓ (højttaler feeds — op til 9. .6 eller derover)
DADman hardware enhed (DA udgange)
      ↓ (analog)
Højttalerforstærkere og højttalere
```

DADman håndterer det endelige monitorkontrollag — valg af kilde, niveau, nedbøjninger og dim/cut — på renderens højttalerudgangsfeeds.

### 8.13.2 Oprettelse af en brugerdefineret gruppeformat

Standard DADman gruppeformater dækker op til 7.1.4. For større Atmos-konfigurationer (9.1.6, 7.1.6 osv.), skal der defineres et **brugerdefineret gruppeformat**:

1. Gå til fanen **Outputs** i **Indstillinger > Overvåg profil**.
2. Højreklik og vælg **Tilføj Brugerdefineret gruppeformat**.
3. Definere kanal tæller og højttaler layout etiketter (fx, L, C, R, Ls, Rs, Lss, Rss, Lts, Rts…).
4. Gem formatet, og tildel det til det relevante outputsæt.

### 8.13.3 Kilder og returnering fra Dolby Renderer

Tilføj hvert sæt af renderer udgange som en separat kilde i skærmprofilen:

| Kilde                       | Kanaler                                                                            | Formål                                             |
| --------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------- |
| Atmos Fuld                  | 9.1.6 (eller konfigureret seng) | Fuld Atmos højttaler feed fra renderer             |
| Stereo Downmix              | 2.0                                                                | Renderer's ITU stereo downmix returnerer           |
| Binaural                    | 2.0                                                                | Renderer's hovedtelefon binaural returnering       |
| 5.1 Downmix | 5.1                                                                | Renderer's 5.1 kompatibilitet fold |

### 8.13.4 Fold-Downs for Atmos

Brug fanen **Fold Downs** for at tilføje kompatibilitetsovervågningsindstillinger, der ikke kræver at skifte kilder på renderer — for eksempel fold-dows, der anvender en stereo summen af Atmos højttaler kanaler direkte i DADman for en hurtig mono eller smal stereo check. Disse supplement, snarere end erstatte, renderer's egen downmix udgange.

> **BEMÆRK:** For ægte Dolby-specifikation nedblander, altid bruge Dolby Renderer's downmix udgange i stedet for DADman fold-downs. DADman fold-downs er ikke Dolby-certificerede processer.

_[Pladsholder: skærmbillede — 9.1.6 skærmprofil med Atmos-kilder konfigureret]_

---

## 8.14 LTC over Dante

DADman-kontrollerede enheder med en Dante-grænseflade kan bære **LTC (lineær tidskode)** i en Dante lydkanal. Dette gør det muligt at distribuere en tidskodekilde på tværs af Dante-netværket til enhver enhed på samme netværk uden dedikeret tidskodeledning.

### 8.14.1 Koncept

LTC er et lydfrekvenssignal, der koder for SMPTE-tidskoden i lydbølgeformen. Fordi det optager samme frekvensområde som lyd, den kan dirigeres gennem en hvilken som helst Dante-kanal, som om det var et mono-lydsignal — den kræver ingen særlig Dante-konfiguration.

### Konfiguration Af 8.14.2

**For at sende LTC over Dante:**

1. Tilslut LTC kilde (hardware tidskode generator, DAW output, etc.) til en tilgængelig analog eller digital indgang på DADman hardware enhed.
2. I DADmans **Con**-fane, ruter LTC-input til en Dante-output-kanal.
3. I **Dante Controller**, rute til enhver modtagende enhed på netværket.

**For at modtage LTC på en tilsluttet enhed:**

1. I Dante Controller, rute LTC Dante kanal til en passende input på den modtagende enhed.
2. Tilslut input til timecode input af enhver downstream-enhed, der accepterer LTC.

> **BEMÆRK:** LTC er en analog bølgeform. Hvis det passerer gennem en samplingfrekvens konverter, kan tidskoden signalet blive beskadiget. Sørg for, at alle enheder i Dante-netværket deler den samme urkilde (f.eks. Word Clock, PTP/IEEE 1588) for at undgå SRC-indsættelse på timecode-kanalen. Se [Afsnit 8.6.4 — DADLinks Synkroniseringskrav].

---

## 8.15 MIDI Control og Pro Tools PRE emulering

DADman kan tilsluttes via MIDI til Pro Tools, tillader Pro Tools at behandle preamp gain kontrol på en DADman-tilsluttet enhed, som om de var \*\* Avid PRE\*\* hardware preamp kontrol. Dette muliggør Pro Tools' indbyggede remote preamp control funktionalitet til at justere input gain på DADman hardware direkte fra Pro Tools' I/O Setup eller en kompatibel control overflade — uden at skifte fokus til DADman.

### 8.15.1 Oversigt

Når Pro Tools PRE emulering er aktiv:

- Pro Tools sender MIDI gain ændre beskeder til DADman
- DADman oversætter disse til gain justeringer på de analoge indgange af den tilsluttede hardware enhed
- Fanebladet DADman AD viser de aktuelle gevinstværdier; ændringer fra Pro Tools afspejles i realtid

### 8.15.2 Konfiguration

**For at aktivere MIDI-kontrol til Pro-værktøjer PRE-emulering:**

1. Sørg for en MIDI-forbindelse mellem DADman computer og Pro Tools system (netværk MIDI, USB MIDI, eller IAC driver på macOS).
2. I DADman, gå til **Indstillinger > MIDI** og konfigurere MIDI input og output porte til at matche forbindelsen.
3. I Pro Tools' \*\* I/O opsætning \*\*, konfigurere preamp side til at bruge MIDI-forbindelse svarende til DADman.

> **BEMÆRK:** Den nøjagtige MIDI kanal tildeling og controller kortlægning afhænger af Pro Tools version og MTRX/DAD enhed konfiguration. Se den relevante Avid MTRX dokumentation eller DAD støtte til den korrekte MIDI parameter bord for din hardware model.

_[Pladsholder: detaljeret MIDI parameter tabel og trin-for-trin procedure — afventende engineering dokumentation fra DAD]_

---

## Afventer Dokumentation

Følgende Avancerede funktioner emner kræver yderligere oplysninger fra DAD engineering før de kan dokumenteres:

| Funktion                                    | Status                                                                   | Noter                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **PRO\|MON Monitor System**                 | Pladsholder — endnu ikke dokumenteret                                    | PRO, MON er den udvidede monitor controller brugt med AX32, DX32R, Penta og MTRX Studio. Fuld dokumentation kræver DAD engineering input på PROO char@@0 MON konfiguration arbejdsgang, parameter reference, og Cue char@@1 Mix integration.                             |
| **Cue\śMix Zero-Latens-Mixer**              | Pladsholder — endnu ikke dokumenteret                                    | Opført som en DADman-funktion; der er ingen tilgængelig kildedokumentation. Anmodning fra DAD engineering.                                                                                                                                                                                                                   |
| **Opsætning Af SPQ-kort**                   | Udkast til afsnit 8.12 — parametertabel, der afventer    | Workflow oversigt udarbejdet. Fuld trin-for-trin procedure med per-parameter reference kræves fra DAD. Room EQ Wizard import format skal bekræftes med DAD engineering.                                                                                                                                      |
| **MIDI Control og Pro Tools PRE emulering** | Udkast i afsnit 8.15 — MIDI-parametertabellen afventende | Koncept og konfiguration oversigt udarbejdet. Fuld MIDI-controller/kanal kortlægning tabel for hver understøttet hardwaremodel, der er nødvendig fra DAD.                                                                                                                                                                    |
| **Skærmbilleder — alle sektioner**          | Afventer                                                                 | Alle screenshot pladsholdere (8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13) kræver live DADman v5.8.2 med tilsluttet AX Center. |

---

_[Afventer: Skærmbilleder til afsnit 8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13 — alle kræver live DADman v5.8.2 med tilsluttet AX Center eller AX64]_
