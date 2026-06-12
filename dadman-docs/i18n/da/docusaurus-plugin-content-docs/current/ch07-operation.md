---
title: "Kapitel 7 — Drift"
sidebar_label: "Ch. 7 — Drift"
sidebar_position: 9
---

# Kapitel 7 — Drift

> **Dokument:** DADman Brugervejledning  
> **Software version dækket:** DADman v5.8. build 2  
> **Primær referencehardware:** DAD AX Center, Core 256, AX64 (Thunder\¤ Core generation)  
> **Kapitel status:** Udkast v0. — Skærmbilleder venter; Konftabulator Dante/TB3 parametre afventende DAD engineering; PRO\¤ MON og SPQ sektioner afventer  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit               | Dækker                                                       | Hvornår skal man konsultere                                                                         |
| -------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 7.1  | Sessionshåndtering — filer, gemme, opstart                   | Begyndelse og afslutning af sessioner                                                               |
| 7.2  | Vindue layout og navigation                                  | Orientering; brug første gang                                                                       |
| 7.3  | Enheds Liste                                                 | Håndtering af forbundne enheder                                                                     |
| 7.4  | Analogt input (fanebladet AD)             | Indstilling af mic/line gain, phantom power, fase                                                   |
| 7.5  | Analog udgange (DA faneblad)              | Indstilling af outputniveauer og rækkevidde                                                         |
| 7.6  | Routing matrix (fanebladet)               | Patching indgange til udgange                                                                       |
| 7.7  | Ur og konfiguration (fanebladet Konflise) | Ur, samplingfrekvens, digital I/O-port indstillinger                                                |
| 7.8  | Overvåg kontrol (fanebladet)              | Aktiv monitor profilvisning; valg af kilde og output                                                |
| 7.9  | Styringen\ Pakke strimmel                                    | Forudindstillet rutestyring _(v5.8.0 og senere)_ |
| 7.10 | Kontrol af mus og tastatur                                   | Genveje til effektivitet                                                                            |

> **BEMÆRK — Hardwarevariation:** Fanerne og parametrene i DADman afspejler funktionerne i den tilsluttede hardware. En enhed uden analoge indgange viser **AD**-fanen, men dens kontrolelementer vil være fraværende eller grådige ud. Parametre markeret med _[AX32/ Family 1]_ gælder specifikt for AX32, DX32R og Penta-serien. Parametre som ikke er markeret, gælder for alle nuværende Thunder-Core hardware (AX Center, Core 256, AX64), medmindre andet er angivet.

_[Pladsholder: annoteret fuld-vinduesskærmbillede af DADman v5.8.2 med kaldenumre for hvert større område]_

---

## 7.1 Session Management

### 7.1.1 Konfigurationsfiler og monitoreringsprofiler

DADman bruger to forskellige filtyper til at gemme og gendanne system tilstand. Forståelse af forskellen mellem dem er afgørende for session ledelse.

#### DADman Indstillingsfil (.dms)

En **DADman Settings File** (file extension `.dms`) gemmer et øjebliksbillede af alle indstillinger på alle tilsluttede enheder på tidspunktet for gemning. Dette omfatter:

- Analoge input gain, phantom power, pad, fase, og kanal etiketter (AD sektion)
- Analoge output niveauer, mues, og kanal etiketter (DA sektion)
- Komplet routing matrix tilstand (Con sektion)
- Ur kilde, sample rate, og format indstillinger (Conf sektion)
- Netværk konfiguration og enhed ID tildelinger
- Styring Pack routing forudindstillede konfigurationer _(v5.8.0 og senere)_

Indstillingsfiler gemmes via **Fil > Gem** eller **Fil > Gem som** og gemmes på computeren. De påvirker ikke enheden direkte, før den er indlæst — på hvilket tidspunkt DADman anvender de gemte indstillinger på den eller de tilsluttede enheder over netværket.

> **ADVARSEL:** Firmwareopdateringer nulstiller alle indstillinger, der er gemt på enheden, til fabriksstandard. Gem altid en '.dms'-fil, før du udfører en firmwareopdatering. Jf. [Kapitel 10, Afsnit 10.1 — Opdatering Af Firmware].

#### DADman Monitor Profil (DDmprof)

En **Overvåg profilfil** (filtypenavn `.dmprof`) gemmer monitorcontrollerkonfigurationen uafhængigt af enhedsindstillingerne. En skærm profil definerer:

- Overvåg kilder (input tildelt overvågningskontrolleren)
- Højttalersæt (mono, stereo, surround, fordybende — op til 64 kanaler)
- Fold-down matricer (f.eks. 5.1 til stereo, brugerdefinerede up-match forudindstillinger)
- Forsink indstillinger pr. outputsæt
- Talkback routing og niveau
- Indstillinger for referenceniveau

Overvågningsprofiler administreres via \*\*Indstillinger > Overvågningsprofil \*\* og gemmes som separate filer fra `.dms` indstillingsfilen. Denne adskillelse tillader den samme fysiske routing og gain konfiguration til at blive brugt med forskellige overvågning opsætninger.

En standard stereo monitor profil er tilgængelig for download fra DAD support portal.

#### Forhold mellem de to filtyper

|                                     | Opsætnings Fil (.dms)             | Overvågningsprofil (.dmprof) |
| ----------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Butikker**                        | Alle hardwareindstillinger (gevinst, routing, ur) | Overvåg kun controller-konfiguration                            |
| **Scope**                           | Alle tilsluttede enheder                                             | Én overvågningsprofil ad gangen                                 |
| **Indlæs via**                      | Fil > Åbn                                                            | Indstillinger > Overvåg Profil > Indlæs                         |
| **Auto-load on startup**            | Valgfri                                                              | Valgfri                                                         |
| **Påvirket af firmware-opdatering** | Ja — enhedsnulstilling af indstillinger                              | Nej — kun lagret på computeren                                  |

### 7.1.2 Startup and Auto-Load

DADman kan konfigureres til **automatisk at indlæse den sidst brugte indstillingsfil** ved lanceringen. Hvis denne indstilling er aktiveret, vil DADman anvende de gemte indstillinger på forbundne enheder ved opstart uden at kræve manuel handling.

> **BEMÆRK:** indstillingen "Åbn sidste fil ved opstart" forårsager DADman til straks at skrive de gemte indstillinger til alle tilsluttede enheder ved lanceringen. I multioperatørmiljøer, hvor forskellige brugere kan foretage realtidsændringer, vil aktivering af denne indstilling overskrive alle ændringer, der er foretaget siden sidste gemning.

For at aktivere eller deaktivere autoindlæsning: **DADman > Indstillinger** (macOS) eller **Indstillinger > Indstillinger** (Windows), derefter \*\*Åbn sidste fil ved opstart \*\*.

### 7.1.3 Fil Menu Reference

| Menu element           | Handling                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ny**                 | Rydder den aktuelle konfiguration i DADman. Ændrer ikke nogen indstillinger på forbundne enheder.                                                                                                                                                                                               |
| **Åbn…**               | Åbner en DADman Settings File (`.dms`) og anvender dens gemte indstillinger til tilsluttede enheder.                                                                                                                                                                                         |
| **Gem**                | Gemmer den aktuelle tilstand for alle forbundne enheder til den aktuelt åbne `.dms` fil.                                                                                                                                                                                                                        |
| **Gem Som…**           | Gemmer den aktuelle tilstand til en ny '.dms'-fil på et sted du angiver.                                                                                                                                                                                                                        |
| **Åbn Profil…**        | Åbner en skærm profil (`.dmprof`) fil fra disken og indlæser den i Mon fanen.                                                                                                                                                                                                                |
| **Importér Profil…**   | Importerer en Monitor profil fra enhver aktuelt tilsluttet enhed og udfører en best-fit mapping til den aktuelle enhed I/O. Nyttigt ved overførsel af en profil mellem enheder med forskellige hardwarekonfigurationer. _(v5.6.2 og senere)_ |
| **Gem Profil**         | Gemmer den aktuelt indlæste Overvågningsprofil til sin eksisterende '.dmprof'-fil.                                                                                                                                                                                                              |
| **Gem Profil Som…**    | Gemmer Overvågningsprofilen til en ny `.dmprof` fil på et sted, du angiver.                                                                                                                                                                                                                                     |
| **Luk Profil**         | Fjerner den aktuelle Overvågningsprofil. Fanebladet Mon viser ingen aktive kontroller før en ny profil er indlæst.                                                                                                                                                                              |
| **Åbn Seneste Profil** | Åbner en undermenu af nyligt brugte '.dmprof'-filer for hurtig adgang. _(v5.7.2 og senere)_                                                                                                                                                  |

> **TIP:** Brug **Fil > Gem som** i slutningen af hver session, selvom indstillingerne ikke er ændret. Den `.dms` fil er den eneste opsving sti efter en enhed fabrik reset eller firmware opdatering.

---

## 7.2 Vindueslayout og navigation

DADman hovedvinduet er opdelt i fire vandrette zoner, stablet fra top til bund.

| Område                                                    | Indhold                                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Menulinje**                                             | **Fil** og **Indstillinger** menuer (og **DADman** menu på macOS) |
| **Enhedsliste**                                           | En række pr. tilsluttet enhed, hver i en farvet kant                 |
| **Fane række**                                            | **AD · DA · Con · Conf · Mon** tab selectors                                         |
| **Kanal strimmel område**                                 | Parameteren vises for den valgte fane, der spænder over alle forbundne enheder       |
| **Kontrol af pakkestrip** _(valgfrit)_ | Vises under kanalstrimlen området når routing presets er konfigureret                |

Hvis du klikker på en fane skifter hele kanalstrimlen området for at vise fanens kontrol for alle forbundne enheder samtidigt. Hver enheds kontroller forbliver grupperet inden for dens farvede kant, uanset hvilken fane der er aktiv.

Individuelle underafsnit i en enheds display kan kollapses eller udvides ved at klikke på **sektionens header-knappen** (AD, DA, Con, Conf eller Mon) _(v5. .2 og senere)_. Værktøjstips vises, når svæver over sektion header knapper til at beskrive deres funktion. Dette er nyttigt, når du arbejder med et stort antal enheder for at reducere lodret rulle.

### 7.2.1 De Fem Hovedfaneblade

| Tab          | Fulde navn         | Hvad det viser                                                                                          |
| ------------ | ------------------ | ------------------------------------------------------------------------------------------------------- |
| **AD**       | Analog-til-Digital | Måling og kontrol for alle analoge indgange: gain, phantom power, mute, fase, etiketter |
| **DA**       | Digital-Til-Analog | Måling og kontrol for alle analoge udgange: niveau, mute, etiketter, output rækkevidde  |
| **Tilstand** | Forbindelser       | Den routing crosspoint matrix - indgange som rækker, udgange som kolonner                               |
| **Konflikt** | Konfiguration      | Ur kilde, samplingfrekvens, Tilpas til, Dante og digital I/O-port indstillinger                         |
| **Mon**      | Overvåg            | Den aktive skærm profil: kilder, udgange, fold-downs, delay, talkback                   |

### 7.2.2 Multienhed Visning

Når flere enheder er forbundet, viser DADman dem alle inden for samme vindue, adskilt af deres farvede kanter. Faner anvender globalt — valg af **AD** viser de analoge inputkontroller for alle tilsluttede enheder samtidigt. Dette gør det muligt for en enkelt operatør at styre en kompleks multi-unit system fra en visning uden at skifte mellem separate programvinduer.

### 7.2.3 Farveskemaer

Tre farvesammensætninger er tilgængelige via **Indstillinger > Indstillinger** (Windows) eller **DADman > Indstillinger** (macOS). Standardskemaet bruges i alle eksempler i denne manual. Ordningen udvælgelse er en lokal præference gemt på computeren og påvirker ikke nogen tilsluttet enhed.

### 7.2.4 Opsætnings Menureference

| Menu element                                                                                             | Handling                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Indstillinger…** (Windows) / **DADman > Indstillinger…** (macOS) | Åbner vinduet Indstillinger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Overvåg Profil**                                                                                       | Åbner Monitor Profile editor — se [Afsnit 7.8] og [Kapitel 8]                                                                                                                                                                                                                                                                                                                                             |
| **Rute Forudindstillinger**                                                                              | Åbner kontrolvinduet char@@0 rsquo; char@@1 rsquo; char@@1 rsquo; char@@1 rsquo; s char@@1 rsquo; s char@@1 rsquo; s char@@1 rsquo; s char@@1 rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo; rsquo;. |
| **Aktiver EuCon**                                                                                        | Aktiverer EuControl integration for Avid kontrol overflade tilslutning                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Enhedsliste**                                                                                          | Åbner vinduet til enhedslistehåndtering                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

---

## 7.3 Enhedsliste

Enhedslisten er den vandrette stribe øverst i DADman- vinduet, der viser alle fundne hardwareenheder. Enheder vises **fra venstre til højre i stigende enheds ID rækkefølge**.

_[Pladsholder: annoteret Enhedsliste-skærmaftryk, der viser to enheder med farvede kanter, enheds-id-felter, enhedsnavnefelter og forbindelsesstatusindikatorer]_

### 7.3.1 Enheds Liste Kolonner

| Element                | Varebeskrivelse                                                                                                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Enhed ID**           | Et tal, der afgør enhedens position i enhedslisten (venstre mod højre). Redigerbar — klik på ID-feltet for at ændre det. ID er gemt i enheden. |
| **Enhed navn**         | En bruger-tildelt navn for enheden. Redigerbar — klik på navnefeltet for at omdøbe. Gemt i enheden og vises på enheder med frontpanel skærme.                     |
| **Forbindelsesstatus** | Angiver, om DADman har en aktiv forbindelse til enheden. En afbrudt enhed vises gråt ud.                                                                                          |
| **Firmware version**   | Viser den aktuelle firmwareversion der kører på enheden.                                                                                                                                          |

> **TIP (v5.8.1.6, kun macOS):** Enhedslisten kan sorteres ved at klikke på kolonneoverskrifter — enhedsnavn, ID, firmware-version og andre kolonner. Dette er nyttigt ved håndtering af et stort antal enheder. Sortering er kun en visningspræference og ændrer ikke enheds-ID'er.

### 7.3.2 Kontekstmenu Til Enhedsliste

Højreklik på en enhedsrække (Windows) eller brug af **Handling**-knappen (macOS) åbner en sammenhængsafhængig menu med følgende muligheder:

| Valgmulighed              | Handling                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **Netværksindstillinger** | Åbner IP- adressen og netværksindstillingsdialogen for den valgte enhed                |
| **Klon fra…**             | Kopierer alle indstillinger fra en anden enhed i samme hardwarefamilie til denne enhed |
| **Firmware Opdatering**   | Initierer en firmwareopdatering for den valgte enhed                                   |
| **Fabriksnulstilling**    | Nulstiller alle indstillinger på enheden til fabriksstandarder                         |
| **Afbryd**                | Fjerner enheden fra den aktive enhedsliste uden at slette den                          |

> **ADVARSEL:** **Fabriksnulstilling** og **Firmwareopdatering** rydder begge indstillinger gemt på enheden. Gem en '.dms'-fil før du bruger en af mulighederne.

### 7.3.3 Kanalnavne

Kanalnavne (etiketter for individuelle input- og output-kanaler) er tildelt i fanerne AD- og DA.

> **BEMÆRK — Vigtigt:** Kanalnavne gemmes i **DADman Settings File (`.dms`)** på computeren, **ikke** i hardwareenheden. Det betyder, kanalnavne er tabt, hvis DADman bruges uden at indlæse en `.dms` fil, eller hvis en anden computer forbinder til enheden. Inkludér altid kanalnavne når konfigurationsfiler gemmes.

---

## 7.4 AD Tab — Analog Indgange

Fanen **AD** viser måling og kontrol af alle analoge indgangskanaler — mikrofon, DI og linjeniveau — på tilsluttede enheder. Hvis en enhed ikke har installeret analoge inputkort, vil dette faneblad være til stede, men tomt for den enhed.

_[Pladsholder: annoteret AD faneblad screenshot viser mic channel med gain skyderen, phantom, fase, mute og clip/signal indikatorer]_

### 7.4.1 Kanal Strip Kontrol

Hver analog indgangskanal viser følgende kontroller fra top til bund:

| Kontrol                                      | Varebeskrivelse                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Input type selector**                      | Skifter input mellem **MIC** (mikrofon forforstærker) og **LINE** (linjeniveau). Fås kun på kanaler med mikrofon preamp hardware.                                                                                                                                                                                                                    |
| **Phantom power (+48 V)** | Aktiverer 48 V phantom power på den valgte kanal. Kun tilgængelig i MIC tilstand. Anvend kun på kondensatormikrofoner — aktiver ikke på bånds mikrofoner, medmindre producenten angiver kompatibilitet.                                                                                                                                                                    |
| **Fase invertér (Ø)**     | Inverterer polariteten af indgangssignalet ved 180 °.                                                                                                                                                                                                                                                                                                                                                      |
| **Mono / stereo link**                       | Links tilstødende ulige / endda kanal par for stereo operation. Kontrollen for parret er bandet, når de er forbundet.                                                                                                                                                                                                                                                                      |
| **MIC- forstærkningskyderen**                | Sætter mikrofon forforstærker gevinst. Se [afsnit 7.4.2] for justeringsstigninger.                                                                                                                                                                                                                     |
| **Lydløs**                                   | Nedbryder inputkanalen. Stumme tilstand er gemt i enheden.                                                                                                                                                                                                                                                                                                                                 |
| **Signal LED**                               | Oplyser, når indgangssignalet overstiger −42 dBFS. Indikerer signaltilstedeværelse; indikerer ikke, at signalet er på et nyttigt niveau.                                                                                                                                                                                                                                                   |
| **Klip LED**                                 | Oplyser, når indgangssignalet overstiger -0,5 dBFS. Indikerer forestående eller faktiske digitale klipning. Reducer forstærkningen med det samme, hvis denne LED er tændt under normal drift.                                                                                                                                                                              |
| **Peak-hold**                                | Det højeste signalniveau, der nås, holdes på målerbjælken, og falder langsomt. Giver en visuel oversigt over forbigående toppe uden kontinuerlig overvågning. Tilgængelig på AX32, Penta og MTRX hardware _(kræver firmware v2.3.2.1 eller senere, fra DADman v5.4.3)_. |
| **Kanaletiket**                              | Bruger-tildelt navn for kanalen. Gemt i `.dms` filen. Klik for at redigere.                                                                                                                                                                                                                                                                                                |

### 7.4.2 Gain Justering

Skyderen MIC-forstærkning kan justeres ved hjælp af følgende metoder:

| Metode                                              | Tillæg                                                                        |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| Træk i musen                                        | 0,5 dB pr. trin                                               |
| Tastatur **↑ / ↓** (valgt kanal) | 0,1 dB pr. trin                                               |
| Tastatur **Page Up / Page Down**                    | Større trin (værdi, der skal bekræftes af DAD engineering) |

> **TIP:** Vælg en kanalstrimmel ved at klikke på den, derefter bruge keyboardet pile for fine gain justering under en session uden at flytte dine hænder til musen.

### 7.4.3 Mikrofon Gain Groups _(v5.8.1.6 og nyere)_

Mikrofon gain grupper tillade flere input kanaler til at blive justeret samtidigt — nyttigt for multi-mic opsætninger på trommer, orkestrale sessioner eller enhver situation, der kræver konsekvente relative gevinstforhold på tværs af en gruppe.

**For at oprette en Mikrofon Gain Group:**

1. Højreklik på en kanals forstærkningskontrol (eller brug kanalens sammenhængsafhængige menu).
2. Vælg **Tilføj til Gain Group** og tildel et gruppenummer.
3. Gentag for hver kanal til at inkludere i gruppen.

**Gruppeadfærd:**

- Flytning af gain control på enhver grupperet kanal flytter alle kanaler i gruppen af samme beløb.
- \*\*Alt / Indstillingstast + træk \*\* justerer kun kanalen under markøren, hvilket giver mulighed for individuel finjustering uden at bryde gruppen.
- Lydløs gælder for alle grupperede kanaler samtidigt, uanset ændringstaster.

> **BEMÆRK:** Mikrofon gain Grupper fungerer som forventet, når DADman styres via EuControl — få skydere og drejeknapper på Avid overflader påvirker alle grupperede kanaler. Lydløs fra en control overflade dæmper alle grupperede kanaler samtidigt.

> **BEMÆRK:** Mikrofon gain grupper understøttes ikke på MTRX Studio. _(5,8,1,6)_

---

## 7.5 DA-fane — Analogudgange

Fanen **DA** viser måling og kontrol af alle analoge udgangskanaler på tilsluttede enheder. Hvis en enhed ikke har installeret analoge uddatakort, vil fanen være til stede, men tom for den enhed.

_[Placeholder: annoteret DA tab screenshot viser output kanal med niveau fader, mute, carrier/signal/clip indikatorer]_

### 7.5.1 Kanal Strip Kontroller

| Kontrol                           | Varebeskrivelse                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output niveau fader**           | Indstiller det analoge outputniveau. Værdien svarer til det analoge niveau i dBu, der produceres, når der anvendes et digitalt signal på 0 dBFS. Se [afsnit 7.5.2] for oplysninger om intervaller. |
| **Lydløs**                        | Nedbryder output- kanalen.                                                                                                                                                                                                                                                                                             |
| **Mono / stereo link**            | Links tilstødende ulige / endda kanal par for stereo operation.                                                                                                                                                                                                                                                        |
| **Gyldigt forsendelsesfirma LED** | På digitale output-kanaler: lyser, når et gyldigt digitalt signal er til stede ved output. På analoge outputkort: lyser, når outputkortet er til stede og aktiv.                                                                                                       |
| **Signal LED**                    | Oplyser, når udgangssignalet overstiger −42 dBFS.                                                                                                                                                                                                                                                                      |
| **Klip LED**                      | Oplyser, når udgangssignalet overstiger -0,5 dBFS.                                                                                                                                                                                                                                                                     |
| **Peak-hold**                     | Holder det højeste output-niveau, der er nået på målerbjælken. Samme tilgængelighed som AD-fanen — AX32, Penta og MTRX med firmware v2.3.2.1 eller senere.                                                                                             |
| **Kanaletiket**                   | Bruger-tildelt navn. Gemt i `.dms` filen. Klik for at redigere.                                                                                                                                                                                                                        |

### 7.5.2 Outputniveau rækkevidde og justering

Outputniveau-faderen sætter det **analoge outputniveau svarende til 0 dBFS digitale fuld skala**. Dette er en gain struktur justering indstilling, der bestemmer konverteringsfaktoren mellem det digitale domæne (dBFS) og det analoge domæne (dBu).

**Output level range:** To intervaller er tilgængelige, kan vælges via **6 dB Gain** knappen:

| Tilstand             | Range               | Maksimal output    |
| -------------------- | ------------------- | ------------------ |
| Standard             | −66 dBu til +18 dBu | +18 dBu ved 0 dBFS |
| +6 dB gain aktiveret | −60 dBu til +24 dBu | +24 dBu ved 0 dBFS |

> **ADVARSEL:** Indstilling af et højt output-niveau er ikke altid passende. Hvis downstream-udstyret har et maksimalt inputniveau lavere end DADman-indstillingen for outputniveau, downstream-udstyret vil klippe, selv når DADman-signalet er rent. Kontroller altid, at indstillingen af udgangsniveauet ikke overstiger den maksimale inputspecifikation for det udstyr, der fodres. Eksempel: indstilling +24 dBu output til udstyr med en +18 dBu maksimal input vil forårsage klipning på ca. -6 dBFS på DADman signal.

> **TIP:** Match outputniveauet til det nominelle inputniveau for downstream udstyr for bedste gain struktur. For eksempel, hvis din monitor forstærker input følsomhed er +4 dBu, indstilling af DADman-udgangsniveauet til +18 dBu giver ca. 14 dB headroom over nominel – en komfortabel margen til de fleste overvågning af arbejdsprocesser.

---

## 7.6 Con Tab — Routing Matrix

Fanen **Con** viser routing crosspoint matrix — den komplette signalrouting motor af den tilsluttede hardware. Hvert input kan dirigeres til ethvert output, og et vilkårligt antal udgange kan modtage det samme input samtidigt.

_[Pladsholder: annoteret Con tab screenshot viser oversigt matrix (venstre), detaljeret matrix (højre) og input/output status indikatorer]_

### 7.6.1 Matrix Layout

Routing matrix er præsenteret i to paneler side om side:

| Stykke                | Indhold                                                                                             | Formål                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Overblik matrix**   | Alle indgange (rækker) × alle udgange (kolonner), lille skala | Naviger til en del af matrixen; viser overordnet routing tilstand med et blik |
| **Detaljeret matrix** | Udvidet visning af det valgte område i oversigten                                                   | Lav eller fjern individuelle crosspoint forbindelser                          |

I begge paneler vises **indgange som rækker til venstre** og **udgange vises som kolonner over toppen**. En forbindelse er lavet ved skæringspunktet (crosspoint) af en input-række og en output-kolonne.

> **BEMÆRK:** De indgange og udgange, der vises i matrixen, afspejler de faktisk installerede hardwareindstillinger og antallet af kanaler til rådighed med den aktuelle samplingfrekvens. Ved højere samplingfrekvenser bærer nogle formater (MADI, ADAT) færre kanaler, hvilket reducerer antallet af viste rækker og kolonner.

### 7.6.2 Oprettelse og fjernelse af forbindelser

| Handling                                    | Resultat                                                                                                   |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Enkelt klik** på en krydspoint            | Forbinder dette input til det output (eller afbryder, hvis det allerede er tilsluttet)  |
| **Skift + klik** på en krydspoint           | Forbinder den klikkede kanal og næste sammenhængende kanal samtidigt (et stereopar par) |
| \*\*Ctrl / Cmd + klik \*\* på en krydspoint | Tilslutter en komplet diagonal — indgange til deres samme nummererede udgange fra det klikkede punkt       |

En tilsluttet crosspoint vises som en **fyldt blå firkant**.

### 7.6.3 Forbindelsesstatusindikatorer

**I output kolonne overskrifter (øverste række):**

| Indikator        | Betydning                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| Intet mærke      | Output er ikke forbundet til noget input                                                           |
| Lyseblå firkant  | Output er forbundet til et input, der i øjeblikket ikke er synligt i den detaljerede matrixvisning |
| Mørkeblå firkant | Output er forbundet til et input synligt i den aktuelle detaljerede matrix- visning                |

> **BEMÆRK:** En eksisterende forbindelse bliver altid tilsidesat, når du klikker på en ny krydspoint i den samme output-kolonne. Outputtet er omskrevet til det nye input; den tidligere forbindelse er fjernet.

**I input-rækkeetiketter (venstre side af detaljeret matrix):**

| Farve    | Betydning                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Grøn** | Gyldig digital carrier til stede på input (eller analogt kort er installeret og aktiv for analoge kanaler) |
| **Gul**  | Synkroniser tab eller uoverensstemmelse mellem samplingfrekvens på dette input                                                |
| **Rød**  | Fejl — intet gyldigt indgangssignal fundet                                                                                    |

> **TIP:** Gul status på et digitalt input indikerer normalt en uoverensstemmelse mellem kilden og enhedens aktuelle ur indstilling. Tjek **Konf** fanen og kontrollér, at enhedens samplingfrekvens matcher kilden, eller aktivér **Tilpas til** for dette input.

---

## 7.7 Konfigurationsfaneblad — Ur og konfiguration

Fanen **Konf** styrer enhedens digitale infrastruktur — urkilde, samplingfrekvens synkroniseringsadfærd og konfiguration af digitale I/O-porte (MADI, Dante, Word Clock, AES3).

_[Pladsholder: annoteret Conf fane skærmbillede for AX Center, der viser Synkronisering, Dante, og MADI underafsnit]_

> **NOTE — AX32 / Family 1 hardware:** Konflikten på AX32, DX32R, og Penta enheder er mærket **Generelt** og organiseret i underafsnit (Synchronisation, MADI Coax Interface, Optical 1/2 Interface). Parametrene svarer funktionelt til dem, der er beskrevet her. AX32-specifikke parametre bemærkes nedenfor, hvor de er forskellige.

### 7.7.1 Synkroniseringsparametre

| Parameter                  | Indstillinger                                                                                 | Varebeskrivelse                                                                                                                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kilde**                  | Intern · Word Ur · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical 1/2 · Dante · Thunderbolt 3 | Vælger urens hovedkilde for enheden. Brug **Internal** når denne enhed er systemuret master.                                                                                                                                                           |
| **Prøveudtagningsrate**    | 44,1 · 48 · 88,2 · 96 · 176,4 · 192 kHz _(og DXD / 384 kHz på AX32)_       | Sætter den operationelle samplingshastighed, når **Tilpas til** er sat til **Internal**. Når **Tilpas til** er indstillet til en digital input, viser dette felt den detekterede samplingfrekvens af dette input (skrivebeskyttet). |
| **Tilpas Til**             | Intern · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical · Dante · Thunderbolt 3               | Når den indstilles til et digitalt input, matcher enheden automatisk samplingshastigheden for det pågældende input. Når sat til **Internal**, anvendes **Prøvetagningshastighed**-parameteren ovenfor.                                                 |
| **Word Ur Ud**             | Word ur (base rate) · Word ur (faktiske sats)           | Bestemmer, om BNC Word Clock output kun følger den basale samplingfrekvens eller den faktiske driftshastighed.                                                                                                                                                         |
| **Synkroniser afslutning** | Høj Z · 75 Ω.                                                                 | Sætter om Word Ur-indgangen afsluttes internt med 75 Ω. **Stærkt anbefalet: Brug altid 75 Ω terminering** for optimal ur stabilitet.                                                                                                   |

> **TIP:** Når Dante bruges som lydnetværk og enheden er ikke Dante clock master, Sæt **Kilde** til **Dante** og **Tilpas til** til **Dante**. Dette sikrer enheden sporer Dante PTP ur og undgår samplingfrekvens konvertering i lydstien.

### 7.7.2 Konfiguration Af MADI Port

Disse indstillinger gælder for hver MADI port individuelt (Coaxial BNC og optiske SFP porte er konfigureret separat).

| Parameter                      | Indstillinger           | Varebeskrivelse                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Rammehastighed**             | Ældre · Høj Hastighed   | **Legacy:** MADI frame length opretholdes på 48 kHz frame længde, og tilstødende kanaler fusioneres med højere samplingfrekvenser (S/MUX). **Høj hastighed:** Rammens længde følger den faktiske prøvehastighed — lavere latenstid ved 88,2 kHz og derover. På 44.1 eller 48 kHz bruges arven altid uanset denne indstilling. |
| **Frame size**                 | Normal · Udvidet        | **Normal:** 56-kanals MADI (standard). **Udvidede:** 64-Kanal-MADI. Kontroller, at tilsluttet MADI udstyr understøtter 64-kanals udvidet tilstand før aktivering.                                                                                                                                                                             |
| **Ch. status** | Standard · Gennemsigtig | **Standard:** enheden definerer kanalstatus bits af det udgående MADI-signal. **Gennemsigtig:** kanalstatusbits fra kilden gennemgås uændret. Efterlad **Standard** i de fleste installationer.                                                                                                                                                                  |
| **Input rate**                 | Auto · Som AD           | **Auto:** enheden registrerer automatisk samplingshastigheden af det indgående MADI-signal. Anbefalet: **Auto**.                                                                                                                                                                                                                                                                 |

> **NOTE — High Speed vs. Legacy MADI:** De fleste MADI enheder i markedet bruger Legacy mode. Aktivering af højhastighedstilstand på den ene ende af et MADI-link uden at aktivere det på den anden side, vil resultere i ingen lyd- eller urfejl. Kontrollér, at både sende- og modtageenheden er indstillet til samme rammehastighedstilstand, før den kører over 48 kHz.

### 7.7.3 Optisk MADI Grænseflade _(AX32)_

- Gælder for AX32 enheder udstyret med et SFP optisk MADI-modul.\*

| Parameter                      | Indstillinger                    | Varebeskrivelse                                                                                                                                                                                                           |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tilstand**                   | Deaktiveret · MADI · NTP HotLink | Vælger driftstilstanden for den optiske SFP-grænseflade. Sæt til **Deaktiveret** hvis intet SFP-modul er installeret. **NTP HotLink** tilstand er reserveret - brug ikke. |
| **Rammehastighed**             | Ældre · Høj Hastighed            | Samme som MADI koaksial — se ovenfor.                                                                                                                                                                     |
| **Frame size**                 | Normal · Udvidet                 | Samme som MADI koaksial — se ovenfor.                                                                                                                                                                     |
| **Ch. status** | Standard · Gennemsigtig          | Samme som MADI koaksial — se ovenfor.                                                                                                                                                                     |
| **Input rate**                 | Auto · Som AD                    | Samme som MADI koaksial — se ovenfor.                                                                                                                                                                     |

### 7.7.4 Dante Konfiguration

Dante konfigurationsparametre, der er synlige i DADmans Conf tab kontrol aspekter af Dante drift, der styres på hardware niveau. Fuld Dante routing og abonnementshåndtering udføres i applikationen **Dante Controller** (en separat applikation fra Audinate, ikke en del af DADman).

_[Afventer DAD-teknik: komplet liste over Dante-parametre, der er synlige i fanen Conf for AX Center / Core 256 — herunder Dante sample rate, redundanstilstand og IPCore parametre indført i v5. .1.6]_

> **NOTE — Dante 256 IPCore _(v5.8.1. )_:** AX64, AX Center og Core 256 enheder udstyret med Dante 256 IPCore modul understøtter op til 256 kanaler Dante ved 48 kHz. Denne udvidede Dante-konfiguration kræver både firmware og software på v5.8.1.6 eller senere.

---

## 7.8 Mon Tab — Monitor Control

Fanen **Mon** giver realtidskontrol af monitorcontrolleren defineret i den aktive monitorprofil. Det er operatørens daglige grænseflade til overvågning — valg af kilde, skift af højttaler, fold-downs, og talkback.

> **BEMÆRK:** Mon fanen viser _kontrol_ defineret i Overvågningsprofilen; _konfiguration_ af kilder, udgange, fold-downs, og routing er udført i Overvågningsprofil-editor, tilgås via \*\*Indstillinger > Overvågningsprofil \*\*. Dette afsnit dækker kun fanen Mon kontrol. For så vidt angår konfigurationen af monitorprofil henvises til [kapitel 8 — Avancerede funktioner, afsnit 8.1 — Overvågningsprofiler].

- [Pladsholder: annoteret Mon faneblad screenshot viser kilde selector, højttaler output knapper, fold-down selector, hoved niveau fader, dim, cut, talkback og reference niveau knap]\*

### 7.8.1 Mon Tab Controls

| Kontrol                                      | Varebeskrivelse                                                                                                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kildevælger**                              | Vælger den aktive overvågningskilde fra dem, der er defineret i Overvågningsprofilen.                                                                                           |
| **Speaker output buttons**                   | Vælger den aktive højttaler sæt (fx, Nær, Mid, Far; eller Stereo, 5.1, 7.1.4).                               |
| **Fold-down selector**                       | Anvender en fold-down eller op-matrix fra dem, der er defineret i Overvågningsprofilen.                                                                                         |
| **Vigtigste niveau fader**                   | Styrer master monitor niveau for den active højttaler sæt. Vist i dB i forhold til referenceniveauet.                                                           |
| **Ref (referenceniveau)** | Låser hovedniveau faderen til det kalibrerede referenceniveau, der er defineret i Overvågningsprofilen. Tryk én gang for at engagere, tryk igen for at frigive. |
| **Dim**                                      | Gælder en fast dæmpning (typisk -20 dB) til overvågning output uden at ændre faderens position.                                                              |
| **Klip**                                     | Mutes alle overvågning udgange straks.                                                                                                                                          |
| **Videres**                                  | Aktiverer talkback- signalstien defineret i Overvågningsprofilen.                                                                                                               |
| **Meter sektion**                            | Viser måling i realtid af den aktive monitor kilde og udgange, som konfigureret i Overvågningsprofilen.                                                                         |

### 7.8.2 Referenceniveau

Funktionen på referenceniveau gør det muligt at overvåge ved et prækalibreret SPL uden risiko for tilfældige ændringer i niveauet.

**For at angive et referenceniveau:**

1. Ved brug af testtoner og en kalibreret SPL-meter, indstilles overvågningsoutputniveauet til det ønskede referencepunkt.
2. Bemærk dB værdien vist på hovedniveau faderen - dette er din reference forskydning.
3. Indtast denne værdi som **referenceniveau** for højttalersættet i skærmprofileditoren (**Indstillinger > Overvåg profil**).
4. Under normal drift tryk på **Ref** for straks at vende tilbage til det kalibrerede niveau efter eventuelle manuelle justeringer.

> **TIP:** Flere højttalersæt kan hver have deres eget referenceniveau. For eksempel kan et "Near Field 85 dB" sæt og et "Near Field 75 dB" sæt dele de samme fysiske output, afvigende kun i deres trim indstilling.

---

## 7.9 kontrolstribe _(v5.8.0 og senere)_

Styringenævnet vises **nedenfor** området for hovedkanalstrimler, når forudindstillinger for routing er konfigureret for en eller flere tilsluttede enheder. Det giver real-time kontrol og status overvågning for alle konfigurerede routing presets.

> **BEMÆRK:** Styringen\ Pack strip er kun synlig efter routing presets er blevet oprettet i Routing Preset editor (**Indstillinger > Routing Presets**). Hvis ingen forudindstillinger er konfigureret, er dette område ikke til stede i DADman- vinduet. Jf. [Kapitel 8, afsnit 8.4 — Kontrolpakke] for fuldstændig konfigurationsdokumentation.

- [Pladsholder: Anmærkede Control\-Pakke strip screenshot viser forudindstillede navneknapper, PPM meter, og trigger status indikatorer]\*

### 7.9.1 Kontrolpakke Strip Elementer

Strimlen viser en sektion pr. Thunder\-kerne enhed med routing forudindstillinger konfigureret. Inden for hver enhed sektion, hver konfigureret forudindstilling vises med følgende elementer:

| Element                                    | Varebeskrivelse                                                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Forudindstillet navn**                   | Navnet tildelt forudindstilling i Routing Preset editoren                                                                                             |
| **Spændeknapper (1–4)** | Vælger det aktive inputsæt (spand) for den forudindstillede. Farve angiver tilstand — se nedenfor. |
| **Kilde PPM meter**                        | Topmålere i realtid, der viser niveauet af alle kanaler i spanden.                                                                    |
| **Output PPM meter**                       | Topmålere i realtid, der viser niveauet af alle udgangskanaler for forudindstillede.                                                  |
| **Udløser statusindikatorer**              | Viser status for signaldetektorer tildelt som udløsere for hver spand.                                                                |

### 7.9.2 Bucket Button Status

| Farve    | Stat                                        | Betydning                                                                                                                                                                |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Blå**  | Aktiv (manual)           | Denne spand er i øjeblikket dirigeret. Forudindstilling er i manuel tilstand - ingen automatisk skift.                                   |
| **Grøn** | Bevæbnet (automatiseret) | Denne spand er den aktuelle aktive rute. Forudindstilling er i automatisk tilstand og klar til at skifte baseret på trigger betingelser. |
| **Rød**  | Udløsningsfejl                              | En signaldetektor tildelt til denne skovl har rapporteret en fejl (signaltab, AE6 integritetsfejl).                                   |

**Skift mellem manuel og automatiseret tilstand:**

- **Dobbeltklik** en grøn (automatiseret) spand knap til at skifte til manuel tilstand — knappen bliver blå.
- **Dobbeltklik** en blå (manuel) spand knap til automatisk genstart af armen — knappen bliver grøn.

> **TIP:** I live events eller udsendelse, armautomatisering under linjekontrol. Hvis et input mislykkes, vil forudindstillingen skifte automatisk uden operatør indgriben. Du kan tilsidesætte automatiseret skifte til enhver tid ved at dobbeltklikke på den ønskede spand knap.

---

## 7.10 Mus og tastatur kontrol

### 7.10.1 Gain- og niveaujustering

| Handling                                   | Modifier                                                         | Resultat                                              |
| ------------------------------------------ | ---------------------------------------------------------------- | ----------------------------------------------------- |
| Mus træk på MIC gain skyderen              | —                                                                | 0,5 dB pr. trin                       |
| **↑ / ↓** (kanal valgt) | —                                                                | 0,1 dB pr. trin                       |
| **↑ / ↓** (kanal valgt) | **Skift**                                                        | Øget opløsning (finere end 0,1 dB) |
| \*\*Klik \*\* ved forstærkningskontrol     | **Ctrl (Win) / Cmd (Mac)** | Nulstil til standardværdi                             |
| En eller flere af ovenstående              | **Alt / Valg**                                                   | Anvend kun på den valgte kanal - omgår Mic Gain Group |

### 7.10.2 Routing Matrix

| Handling                  | Resultat                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Enkelt klik på krydspoint | Forbind / afbryd forbindelse                                                           |
| **Skift** + klik          | Tilslut to på hinanden følgende kanaler (et stereopar)              |
| **Ctrl / Cmd** + klik     | Tilslut en komplet diagonal (samme nummererede I/O fra dette punkt) |

### 7.10.3 Tastaturgenveje _(v5.7.0 og senere)_

| Handling                          | macOS      | Vinduer          |
| --------------------------------- | ---------- | ---------------- |
| **Fil > Åbn…**                    | ŽO         | Ctrl+O           |
| **Fil > Gem**                     | ● S        | Ctrl+S           |
| **Fil > Gem Som…**                | ØSTRIG S   | Ctrl+Shift+S     |
| **Fil > Åbn Profil…**             | ØSTRIG O   | Ctrl+Alt+O       |
| **Fil > Importprofil…**           | ØSTRIG I   | Ctrl+Alt+I       |
| **Fil > Gem Profil**              | ØSTRIG S   | Ctrl+Alt+S       |
| **Fil > Gem Profil Som…**         | ØSTRIG - S | Ctrl+Alt+Shift+S |
| **Fil > Luk Profil**              | ØSTRIG W   | Ctrl+Alt+W       |
| Åbn / aktiver hovedvindue         | ⌘⇧1        | —                |
| Åbn Enhedsliste                   | ● ● L      | Ctrl+Shift+L     |
| Åbn Overvågningsprofil            | - M        | Ctrl+Shift+M     |
| Åbn Indstillinger / Indstillinger | ⌘,         | Ctrl+            |

> **BEMÆRK:** Disse genveje blev introduceret i DADman v5.7.0. Tidligere versioner understøtter ikke tastaturgenveje til fil- og vinduesoperationer.

---

## Krydsreferencer

- **Kapitel 1 — Introduktion:** Konceptuel forklaring af, hvad hver fane styrer og hvordan filtyperne relaterer
- **Kapitel 5 — Signal Flow & Architecture:** Netværks- og clocking-arkitektur
- **Kapitel 6 — Kom i gang:** Trin-for-trin gennemgang med disse kontroller i rækkefølge for første gang
- **Kapitel 8 — Avancerede funktioner:** Overvåg profilkonfiguration; Control\¤ Pack setup; Mikrofon Gain Groups; EuCon integration; output niveau justering

---

_[Afventer DAD ingeniør:]_  
_— Fuld Conf tab parameter liste for AX Center / Core 256 (Dante params, Thunderbolt 3 clock params)_  
_- Dante 256 IPCore Conf tab parametre (v5. .1. )_  
_— Komplet tastaturgenvejstast_  
_— SPQ-kortfanebladet / kontrolelementer (separat underafsnit, der skal tilføjes, når den er dokumenteret)_  
_— PRO\¤ MON kontrolelementer i Man-fanebladet (kræver dedikeret dokumentation fra DAD)_  
_— Alle skærmbilleder_
