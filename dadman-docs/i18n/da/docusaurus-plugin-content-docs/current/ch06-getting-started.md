---
title: "Kapitel 6 — Kom I Gang"
sidebar_label: "Ch. 6 — Kom I Gang"
sidebar_position: 8
---

# Kapitel 6 — Kom I Gang

> **Dokument:** DADman Brugervejledning  
> **Software version dækket:** DADman v5.8. build 2  
> **Primær eksempel hardware:** DAD AX Center  
> **Kapitel status:** Kladde v0. — Skærmbilleder afventer (Steps 1, 2, 4, 5, 6, 7, 9 og brugerflade orientering annoteret skærmbillede)  
> **Sidst opdateret:** Juni 2026

---

## Formål

Dette kapitel går dig gennem en komplet, arbejder DADman setup - fra første start til bekræftet lyd - på den kortest mulige vej. Det antager, at DADman allerede er installeret på din computer. Hvis ikke, udfyldes [kapitel 3 — anlæg] først.

Hvert trin angiver, hvad du skal gøre, hvad du skal se, og hvor du kan finde den fulde reference, når du har brug for flere detaljer.

**Estimeret tid:** 15-20 minutter for første gang opsætning på en enkelt enhed.

---

## Før Du Begynder

Bekræft følgende før start af DADman:

| Krav                                                                                                                   | Tjek                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| DADman v5.8.2 build 2 (eller senere) er installeret                 | [Kapitel 3, Afsnit 3.4]                     |
| Hardwareenheden er tændt                                                                                               | Se din installationsguide til hardware                                                                          |
| Hardwareenheden er tilsluttet det samme Ethernet-netværk som din computer                                              | Direkte kabel eller delt kontakt                                                                                |
| Hvis du bruger Thunderbolt 3 lyd: TB3 driveren er installeret og enheden er tilsluttet via Thunderbolt | [Kapitel 3, Afsnit 3.5-3.6] |
| Du har bemærket enhedens aktuelle IP-adresse (tjek frontpanelet visning)                            | —                                                                                                               |

> **NOTE - macOS Sequoia (v15) brugere:** DADman kan ikke opdage enheder på netværket, når den først starter på macOS Sequoia. Hvis der ikke kommer enheder efter 30 sekunder, skal du logge ud af din macOS-konto og logge ind igen. Dette er en kendt OS-niveau problem; Thunderbolt forbindelser er upåvirket. Se [Kapitel 3, afsnit 3.7] for fuld løsøre.

---

## DADman-grænsefladen i et blik

Når DADman åbner, viser hovedvinduet alle tilsluttede hardwareenheder arrangeret fra venstre til højre i **Enhedsliste**-området. Hver enhed vises som en kolonne af kanalstrimler, der er kantet i enhedens tildelte farve med fem faner, der giver adgang til forskellige kontroldomæner.

### De Fem Faneblade

| Tab          | Fulde navn         | Hvad det styrer                                                                                                                              |
| ------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **AD**       | Analog til Digital | Analoge indgangskanaler — mic/line gain, +48 V phantom power, fase invert (Ø), mute, peak metering, kanal etiketter       |
| **DA**       | Digital til analog | Analoge udgangskanaler — fadere på outputniveau, mute, signal-/klip-måling, kanaletiketter                                                   |
| **Tilstand** | Forbindelser       | Den fulde signalrouting matrix - et gitter, hvor du klikker på en crosspoint forbinder ethvert input til ethvert output                      |
| **Konflikt** | Konfiguration      | Per-unit settings — clock source, sample rate, Adapt To, MADI frame rate, Dante configuration, port-level options                            |
| **Mon**      | Overvåg            | Overvåg controller - indlæst fra en skærm profil; viser kilde udvælgelse, højttaler sæt knapper, niveau fader, Ref/Dim/Cut kontrol, talkback |

> **BEMÆRK:** Fanen **Mon** viser kun aktive kontroller, når en Overvågningsprofil (`.dmprof` fil) er indlæst. Se trin 9 for hvordan man indlæse eller oprette en.

Hvis du klikker på en sektionsknap kollapser eller udvider den sektion _(v5.7.2 og senere)_. Dette er nyttigt på mindre skærme eller når du arbejder med flere enheder samtidigt.

_[Pladsholder: annoteret skærmbillede — DADman hovedvindue, der viser alle fem faneblade, Enhedsliste og enhedsgrænsefarve]_

### Enheds Liste

Åbn enhedslisten via **Indstillinger > Enhedsliste** eller **● L** (macOS) / **Ctrl+Shift+L** (Windows). Enhedslisten viser alle enheder DADman har opdaget på netværket, med deres navn, enheds-id, IP-adresse og firmware-version. Højreklik på en enhed i Enhedslisten giver adgang til Netværksindstillinger, Opdater Firmware, Fabriksindstilling, Klone og Afbryd.

### Filtyper

DADman bruger to filtyper:

| Udvidelse | Navn                   | Butikker                                                                       |
| --------- | ---------------------- | ------------------------------------------------------------------------------ |
| `.dms`    | DADman Indstillingsfil | Alle enhedsindstillinger — routing, gevinster, etiketter, Conf-tab-parametre   |
| `.dmprof` | DADman Overvåg Profil  | Monitor controller konfiguration — kilder, højttaler sæt, fold-downs, talkback |

Disse filer er uafhængige. Gemmer den ene ikke automatisk den anden. Begge bør reddes og bakkes op.

---

## Trin-For-Trin Gennemgang

### Trin 1 — Start DADman

Åbn **DADman** fra din Applikationsmappe (macOS) eller Start menu (Windows).

**Forventet resultat:** DADman hovedvinduet åbnes. Hvis ingen enheder findes straks, åbnes **Enhedsliste**-vinduet automatisk.

> **BEMÆRK:** Fra DADman v5.7.0 gendanner applikationen kontinuerligt tilslutning til enheder - der er ingen timeout. Hvis din enhed er tændt og tilgængelig på netværket, vises den i Enhedslisten uden nogen manuel handling.

_[Pladsholder: skærmbillede — DADman hovedvindue ved start med tom enhedsliste]_

---

### Trin 2 — Verificér Opdagelse Af Enheder

Vent op til 30 sekunder. Din AX Center (eller anden tilsluttet enhed) skal fremgå af **Enhedslisten** som en række med en farvet kant.

**Forventet resultat:** Enhedsrækken viser enhedens navn, enheds ID-nummer og firmware-version. Forbindelsesindikatoren er aktiv (ikke grålig).

_[Pladsholder: skærmbillede - Enhedsliste, der viser et tilsluttet AX Center med farvet kant]_

Hvis der ikke forekommer enheder efter 30 sekunder:

- Bekræft at enheden er tændt og dens frontpanel **Læs** LED er solid grøn.
- Bekræft Ethernet-kablet er forbundet mellem enheden og din computer (eller skifter).
- Bekræft enhedens IP-adresse er på samme undernet som computerens netværksinterface. Kontroller via enhedens frontpanel display.
- Bekræft, at din firewall ikke blokerer DADman. Tilføj en firewall undtagelse hvis nødvendigt.
- Jf. [Kapitel 9 — Fejlfinding, Afsnit 9.2 — Net- og tilslutningsproblemer] for en fuldstændig diagnostisk tabel.

> **TIP:** Brug **Indstillinger > Enhedsliste** eller **● L** (macOS) / **Ctrl+Shift+L** (Windows) til at åbne Enhedslisten direkte, hvis den ikke er synlig.

---

### Trin 3 — Navngiv enheden

Klik på enhedens **navnefelt** i enhedslisten og skriv et beskrivende navn — for eksempel, `AX Center - Studio A`.

**Forventet resultat:** Navnet opdateres straks og gemmes i selve enheden. Det vil blive vist på enheder med frontpanelet skærme og fortsætte på tværs af DADman sessioner på enhver computer.

> **BEMÆRK:** Enhedsnavne gemmes i hardwareenheden. Kanaletiketter tildelt i Trin 5 gemmes i `.dms` indstillingsfilen på computeren — ikke i enheden.

---

### Trin 4 — Indstil urkilden og prøvehastigheden

> **Dette trin skal være afsluttet før patching.** Alle digitale lydenheder i dit system skal dele en fælles prøve ur. Indstilling af routing før bekræftelse af ur indstillinger kan forårsage klik, pops, eller stilhed, der er sværere at diagnosticere efter faktum.

1. Klik på fanen **Konf**.
2. I afsnittet **Synkronisering** indstil **Kilde** til at matche dit system:

| System konfiguration                                      | Kilde indstilling                                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Denne enhed er systemuret master                          | **Interne**                                                                           |
| Ur fra et ordur signal                                    | **Ord Ur**                                                                            |
| Ur fra Dante netværk                                      | **Dante**                                                                             |
| At matche en tilsluttet DAW's samplingfrekvens automatisk | **Tilpas til** → **Thunderbolt 3** (eller relevant digitalt input) |

3. Sæt **Prøveudtagningshastighed** til at matche din session — typisk **48 kHz** til udsendelse eller post-produktion, **44.1 kHz** til musik.
4. Hvis der bruges ord clock input, angiv **Sync termination** til **75 Ω**.

**Forventet resultat:** Prøvefrekvensen vist i fanen **Konf** matcher din tilsigtede sats. Hvis **Tilpas til** er sat til en ekstern kilde, opdateres de viste hastigheder automatisk for at matche den fundne eksterne hastighed.

_[Pladsholder: skærmbillede — Konflik, der viser Kilde- og Prøvehastighed konfigureret]_

> **TIP:** Hvis dit AX Center er den eneste digitale enhed i dit system, indstil **Kilde** til **Interne** og vælg din samplingsfrekvens manuelt. Dette giver dig fuld kontrol uden afhængighed af en ekstern ur.

Fuldstændig henvisning: [Kapitel 7, afsnit 7.3 — Ur og synkronisering]

---

### Trin 5 — Etiket og opsætning af analoge input

1. Klik på fanen **AD**.
2. For hver aktiv inputkanal:
   - Klik på feltet **kanaletiket** og skriv et navn (f.eks. `Kick`, `OH L`, `Room`).
   - Vælg inputtype: **MIC** eller **LINE**.
   - For kondensatormikrofoner: Aktiver **+48V** phantom power. Aktiver ikke phantom power på bånd mikrofoner, medmindre producenten bekræfter kompatibilitet.
   - Sæt **MIC gain**-skyderen til et konservativt startniveau. Juster opad under soundcheck.
   - Aktiver **Ø** (fase-inverteret) hvis nødvendigt.

**Forventet resultat:** Den **Signal** LED (grøn) lyser, når lyd er til stede over −42 dBFS. **Clip** LED bør ikke belyse under normale signalniveauer.

_[Pladsholder: skærmbillede — AD fane med to mikrofonkanaler konfigureret, Signal LED lit]_

> **TIP:** Brug **↑/↓** piletasterne til at justere gevinsten i 0,1 dB intervaller. Tilføj \*\*Skift \*\* for endnu finere opløsning. Dette er mere præcist end musetrækning (0,5 dB trin).

Fuld reference: [Kapitel 7, afsnit 7.4 — Gain and Level Management]

---

### Trin 6 — Ruteindgange til output

1. Klik på fanen **Con**.
2. Den routing matrix viser \*\* input som rækker\*\* til venstre og \*\* udgange som kolonner\*\* på tværs af toppen.
3. Klik på crosspoint i skæringspunktet af en input-række og output kolonne for at forbinde dem. En **fyldt blå firkant** bekræfter forbindelsen.

| Handling                                   | Genvej                              |
| ------------------------------------------ | ----------------------------------- |
| Tilslut én kanal                           | Enkelt klik                         |
| Tilslut et stereopar                       | **Skift** + klik på første kanal    |
| Forbind diagonal med samme nummerering I/O | **Ctrl/Cmd** + klik                 |
| Afbryd                                     | Klik på den fyldte blå firkant igen |

**Forventet resultat:** Blå felter vises ved hver tilsluttet crosspoint. Output kolonne header viser en blå indikator bekræfter output er lappet.

_[Pladsholder: skærmbillede — Con fane med krydspoints forbundet viser oversigt og detalje matrix]_

> **BEMÆRK:** Antallet af indgange og udgange, der vises i matrixen, afspejler din hardwarekonfiguration og aktuelle samplingfrekvens. Ved højere samplingfrekvenser, nogle formater (MADI, ADAT) bærer færre kanaler - matrix justerer automatisk.

Fuld reference: [Kapitel 7, afsnit 7.2 — I/O Konfiguration og Patching]

---

### Trin 7 — Indstil Outputniveauer

1. Klik på fanen **DA**.
2. Indstil **output-niveau faderen** for hver aktiv output-kanal til at matche input-specifikationen for downstream-udstyret.

Fader-værdien er det **analoge output-niveau i dBu, der svarer til 0 dBFS digital fuld skala** — ikke en volumenkontrol. Almindelige indstillinger:

| Downstream udstyr                                                    | Typisk indstilling af outputniveau |
| -------------------------------------------------------------------- | ---------------------------------- |
| Professionelle effektforstærkere (+4 dBu nominal) | **+18 dBu**                        |
| Udstyr til udsendelse (EBU R68 justering)         | **+18 dBu**                        |
| Semi-pro / prosumer udstyr (−10 dBV nominal)      | **+4 til +8 dBu**                  |

> **FORSIGTIG:** Indstilling af outputniveauet højere end det maksimale input af dit downstream-udstyr vil klippe udstyret, selv når DADman-signalet ikke viser overbelastning. Kontroller altid, at outputniveauet ikke overstiger downstream-enhedens maksimale inputspecifikation.

_[Pladsholder: skærmbillede - DA fane med output niveau fadere indstillet]_

Fuld reference: [Kapitel 7, afsnit 7.4 — Gain and Level Management]

---

### Trin 8 — Kontroller Lydslut-til-Slut

Med signal til stede ved indgangene, skal du bekræfte lydstrømme gennem systemet:

1. **AD fane:** Signal lysdioder (grøn) belyser på aktive indgange.
2. **Con fane:** Input statusindikatorer på venstre side af detalje matrixen viser grøn (gyldigt signal). Gul angiver en uoverensstemmelse mellem synkronisering/ur — vend tilbage til trin 4.
3. **DA fane:** Signallysdioder belyser på aktive udgange.
4. **På destinationen:** Lyd kan høres eller måles hos dine højttalere, optager- eller målersystem.

**Hvis signal-lysdioder er grønne, men ingen lyd når outputtet:**

- Kontroller routing crosspoints i fanen **Con**.
- Bekræft **Mute** er ikke engageret i den relevante AD eller DA kanal.
- Kontroller, at **Kilde** ur-indstillingen i **Konf** fanen er korrekt — en gul status i Con matrix signalerer et ur problem.

**Hvis klip LED-belysninger:**

- Reducér **MIC-gevinst** i fanen **AD**.
- Hvis downstream-udstyr klippes, skal du reducere output-niveau faderen i fanen **DA**.

---

### Trin 9 — Indlæs eller opret en skærm profil

Hvis du bruger DADmans monitor controller (PRO\¤ MON), skal du bruge en skærm profil før fanen **Mon** viser aktive kontroller.

**For at indlæse en eksisterende profil:**

1. **Fil > Åbn Profil…** (MacOS: **ØØ** / Vinduer: **Ctrl+Alt+O**)
2. Vælg din `.dmprof` fil.

**For at oprette en ny profil:**

1. **Indstillinger > Overvåg profil** for at åbne editoren.
2. Højreklik på **Kilder** → **Tilføj ny kilde** → tildel indgange fra din routing.
3. Højreklik på **Outputs** → **Tilføj nyt Outputsæt** → tildel analoge udgange for hver højttalerkonfiguration.
4. **Fil > Gem Profil Som…** (MacOS: **initiativet S** / Windows: **Ctrl+Alt+Shift+S**)

**Forventet resultat:** Fanen **Mon** viser kildevælgeren, højttalerudgangsknapperne, fader i hovedniveau og **Ref**, **Dim**, og **Cut**-kontrol.

_[Pladsholder: skærmbillede — Mon fane med en skærm profil indlæst]_

Fuld henvisning: [Kapitel 8, Afsnit 8.1 — Overvågningsprofiler]

---

### Trin 10 — Indstil et referenceniveau (valgfrit)

Hvis dit lokale er blevet kalibreret akustisk:

1. Brug af testtoner og et kalibreret SPL-meter indstille hovedniveau faderen i **Mon** fanen til din mål reference SPL (85 dB SPL er standard for de fleste udsendelser og post-produktionsmiljøer).
2. I **Indstillinger > Overvåg profil**, optag dette niveau som **referenceniveau** for det aktive højttalersæt.
3. Under sessioner skal du trykke på **Ref** i **Mon**-fanen for straks at vende tilbage til det kalibrerede niveau.

> **TIP:** Multipel højttaler output sæt kan dele de samme fysiske udgange, men har forskellige trim forskydninger — skabe navngivne "85 dB SPL" og "75 dB SPL" forudindstillinger kan du skifte mellem uden omkalibrering.

---

### Trin 11 — Gem konfigurationen

> **ADVARSEL:** Enhedsindstillinger gemmes i hardwaren. En fabriksnulstilling eller firmwareopdatering vil slette dem. Filen `.dms` på din computer er den eneste backup.

1. **Fil > Gem Som…** (MacOS: **initiativet S** / Windows: **Ctrl+Shift+S**)
2. Brug et beskrivende filnavn: `StudioA_AXCenter_2026-06.dms`
3. Gem til en placering, der er sikkerhedskopieret regelmæssigt.

Hvis du har en Overvågningsprofil, så gem den separat:
**Fil > Gem Profil som…** (macOS: **ØBSDATORE: S** / Windows: **Ctrl+Alt+Shift+S**)

> **TIP:** Aktivér **Åbn sidste fil ved opstart** i **DADman > Indstillinger** (macOS) eller **Indstillinger > Indstillinger** (Windows) for automatisk at gendanne denne konfiguration ved hver start. Anbefales til permanente installationer.

---

### Trin 12 — Bekræft Genindlæsning

1. Luk DADman.
2. Genåbn DADman.
3. Bekræft indstillinger genindlæs korrekt - alle routing, få indstillinger og kanal etiketter skal gendannes præcis som gemt.

**Forventede resultat:** Enheder, der opdateres online med det samme, når filen `.dms` indlæses. Mon fanen viser din gemte skærm profil hvis "Åbn sidste fil ved opstart" var aktiveret for profiler.

---

## Opsætning Fuldført

Du har nu et fungerende DADman system med:

- Enheder opdaget, tilsluttet og navngivet
- Ur og samplingfrekvens bekræftet
- Indgange mærket, fået og lappet til udgange
- Output niveauer justeret til downstream udstyr
- Lyd verificeret end-to-end
- Konfiguration gemt og genindlæs verificeret

---

## Tastatur- og musereference

### Slider Modifier Nøgler

Alle gevinst, niveau og fader skydere i DADman understøtter følgende modifikator nøgler:

| Modifier                                                                              | Effekt                                                                   |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Træk** (ingen ændringer)                                         | Normal opløsning — ca. 0,5 dB pr. pixel  |
| **Skift + træk**                                                                      | Øget præcision — ca. 0,1 dB pr. pixel    |
| **↑ / ↓ piletaster** (skyderen fokuseret)                          | 0.1 dB trin                                              |
| **Skift + ↑/↓**                                                                       | Fine trin (0,01 dB)                                   |
| **Ctrl** (Windows) / **Cmd** (macOS) **+ klik** | Nulstil til standardværdi                                                |
| **Alt** (Windows) / **Valg** (macOS)            | Kun Per-channel - omgår Mikrofon Gain Group, justerer valgte kanal alene |
| **Alt/Option + Skift**                                                                | Justering af perkanals finjustering                                      |

### Tastaturgenveje

| Handling                                                      | macOS      | Vinduer          |
| ------------------------------------------------------------- | ---------- | ---------------- |
| **Fil**                                                       |            |                  |
| Åbn indstillingsfil                                           | ŽO         | Ctrl+O           |
| Gem indstillingsfil                                           | ● S        | Ctrl+S           |
| Gem indstillingsfil som…                                      | ØSTRIG S   | Ctrl+Shift+S     |
| Åbn Overvågningsprofil                                        | ØSTRIG O   | Ctrl+Alt+O       |
| Importér Overvågningsprofil                                   | ØSTRIG I   | Ctrl+Alt+I       |
| Gem Overvågningsprofil                                        | ØSTRIG S   | Ctrl+Alt+S       |
| Gem Overvågningsprofil Som…                                   | ØSTRIG - S | Ctrl+Alt+Shift+S |
| Luk Overvågningsprofil                                        | ØSTRIG W   | Ctrl+Alt+W       |
| **Vis**                                                       |            |                  |
| Vis hovedvindue (fra menulinjens tilstand) | ⌘⇧1        | —                |
| Åbn Enhedsliste                                               | ● ● L      | Ctrl+Shift+L     |
| Åbn Overvåg profil editor                                     | - M        | Ctrl+Shift+M     |
| Åbn Indstillinger / Indstillinger                             | ⌘,         | Ctrl+            |

### Rute Matrix- Genveje

| Handling                                        | Metode                                                            |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| Forbind en krydspoint                           | Klik på skæringspunktet                                           |
| Tilslut et stereopar samtidigt                  | Skift + klik på den første kanal                                  |
| Tilslut samme nummererede input→output diagonal | Ctrl/Cmd + klik                                                   |
| Afbryd                                          | Klik på den aktive (blå) krydspoint            |
| Rul matrixvisningen                             | Rul hjul / trackpad (ruller ikke hele vinduet) |

### Diagnostisk Værktøj

**DADman menu > Om DADman > Kopier information** _(v5.7.2 og nyere)_

Kopierer DADman version, tilsluttet enhed liste, OS version og driver versioner til udklipsholderen. Inkluder dette i enhver anmodning om support til DAD.

---

## Næste Trin

| Til…                                                                                                              | Se…                                                                                      |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Konfigurer indstillinger for MADI, Dante, eller AES3 port i dybden                                                | Ch. 7, Afsnit 7.3 — Konftabulator                        |
| Arbejd med den fulde routing matrix                                                                               | Ch. 7, afsnit 7.2 — I/O-konfiguration og rettelse        |
| Opsæt immersiv overvågning (5.1, 7.1.4, Atmos) | Ch. 8, Afsnit 8.1 — Overvåg Profiler                     |
| Konfigurere routing forudindstillinger med automatiseret signal failover                                          | Ch. 8, Punkt 8.4 — Kontrolpakke                          |
| Gruppe mikrofon forstærkninger til trommer, orkester eller multi-mic                                              | Ch. 8, Punkt 8.2 — Mikrofongenerationsgrupper            |
| Tilslut DADman til en Avid EuControl overflade                                                                    | Ch. 8, Afsnit 8.5 — EuCon-Integration                    |
| Diagnosticér et forbindelses- eller lydproblem                                                                    | Ch. 9 — Fejlfinding                                                      |
| Opdater DADman software eller hardware firmware                                                                   | Ch. 10, afsnit 10.1 — Opdatering af software og firmware |

---

_[Afventer: screenshots til trin 1, 2, 4, 5, 6, 7, 9 — alle kræver et AX Center tilsluttet DADman v5.8.2]_
