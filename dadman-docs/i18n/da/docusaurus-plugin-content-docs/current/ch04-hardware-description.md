---
title: "Kapitel 4 — Hardwarebeskrivelse"
sidebar_label: "Ch. 4 — Hardwarebeskrivelse"
sidebar_position: 6
---

# Kapitel 4 — Hardwarebeskrivelse

> **Dokument:** DADman Brugervejledning  
> **Kapitel status:** Kladde v0. — Integreret panelfotos og portdata; Core 256 bagpanelet foto og DAD Junior sektion afventer  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit              | Dækker                                                    | Relevant for         |
| ------------------- | --------------------------------------------------------- | -------------------- |
| 4.1 | AX Center — for- og bagpanelet                            | AX Center brugere    |
| 4.2 | Hovednet 256 — for- og bagpanelet                         | Hovednet 256 brugere |
| 4.3 | AX 64 — for- og bagpanelet                                | AX 64 brugere        |
| 4.4 | MOM — kontrolreference                                    | MOM brugere          |
| 4.5 | DAD Junior — for- og bagpanelet                           | DAD Junior brugere   |
| 4.6 | Penta 720 / 721s — for- og bagpanelet                     | Penta users          |
| 4.7 | LED-tilstandsreference (alle modeller) | Alle brugere         |

> **BEMÆRKNING — Sådan bruges dette kapitel:** Dette kapitel er en hardwarereference. Det identificerer alle fysiske kontrol og konnektor på hvert understøttet produkt. For procedurer for signalrouting og konfiguration, se [Kapitel 7 — Operation]. Med hensyn til montage og kabler, se [kapitel 3 — installation].

---

## 4.1 AX Center

### 4.1.1 Oversigt

AX Center er en 1U rack-mount Thunderbolt audio lydkort i Thunders ‘ s kerne produkt familie. Det giver to mic/line/instrument indgange og stereo monitor udgange direkte på frontpanelet, med MADI, ADAT, ord ur, analoge ekspansion slots, og dobbelt Thunderbolt 3 porte på bagsiden. Al routing, gevinst, overvågning og konfiguration udføres via DADman over Ethernet. AX Center er også vært for MOM (Monitor Operating Module) når det bruges som en desktop monitor controller system - MOM forbinder til AX Center via USB-C.

### 4.1.2 Panel Oversigt

![AX Center frontpanel](/img/panel-ax-center-front.png)
_Figur 4.1 — AX Center frontpanel. Nummererede callouts svarer til afsnit 4.1.3._

![AX Center bagpanel](/img/panel-ax-center-rear.png)
_Figur 4.2 — AX Center bagpanel. Nummererede callouts svarer til afsnit 4.1.4._

### 4.1.3 Frontpanelkontrol

| Ref | Etiket                   | Type                                       | Funktion                                                                                                                                                                                                                                                                                                                |
| --- | ------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —   | **DAD**                  | Belyst logo                                | Blå belysning; angiver tænd/sluk                                                                                                                                                                                                                                                                                        |
| 1   | **Strøm**                | Belyst trykknap                            | Initierer kontrolleret power-on/shutdown sekvens. Hold i 5 s for at tvinge slukket.                                                                                                                                                                                                     |
| —   | **Int.** | LED indikator                              | Lit når enheden er låst til sin egen interne ur reference                                                                                                                                                                                                                                                               |
| —   | **Ext.** | LED-indikator (grøn)    | Lit når enheden er låst til en ekstern ur kilde (ord ur, MADI, ADAT, eller Dante)                                                                                                                                                                                                                    |
| —   | **Err.** | LED-indikator (rød)     | Lit når en ur fejl, synkronisering tab eller intern fejl er opdaget. Jf. [Afsnit 4.7 — Referencen for LED-staten] og [Kapitel 9 — Fejlfinding]. |
| 2   | **Mic/Inst 1**           | Combo XLR/TRS (låsning) | Mic/line/instrument input, kanal 1. Accepterer XLR (afbalanceret mic/line) eller 6.35 mm TRS/TS (linje/instrument).                                                                                                               |
| —   | **P48**                  | LED indikator                              | Lit når phantom power (+48 V) er aktiv på denne indgangskanal                                                                                                                                                                                                                                        |
| —   | **Mic**                  | LED indikator                              | Lit når input er konfigureret som en mikrofon input                                                                                                                                                                                                                                                                     |
| —   | **Inst**                 | LED indikator                              | Lit når input er konfigureret som en high-impedance instrument input                                                                                                                                                                                                                                                    |
| 3   | **Mic/Inst 2**           | Combo XLR/TRS (låsning) | Mic/line/instrument input, kanal 2. Samme specifikation som kanal 1.                                                                                                                                                                                                                    |
| 4   | **HP 1**                 | 6.35 mm TRS-stik           | Hovedtelefonudgang 1. Niveau kontrolleret via DADman eller MOM.                                                                                                                                                                                                                         |
| 5   | **HP 2**                 | 6.35 mm TRS-stik           | Hovedtelefonudgang 2. Niveau kontrolleret via DADman eller MOM.                                                                                                                                                                                                                         |

### 4.1.4 Bagpanel

| Ref | Etiket                                         | Forbindelse                                   | Funktion                                                                                                                                                                                                                                                                                                                               |
| --- | ---------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Strøm**                                      | IEC C14 indløb                                | Strømforsyningen til nettet. 100–240 V AC, 50/60 Hz, auto-ranging intern PSU. Tilslut et standard IEC C13 strømkabel.                                                                                                                                                                  |
| 2   | **EXPANSION** (øverste par) | 2× SFP-bugten                                 | DADLink / MADI optisk udvidelse. Accepterer SFP-moduler til tilslutning til andre DAD-enheder via aktiv optisk fiber (DADLink-kabel) eller til optisk MADI I/O.                                                                                                                     |
| 3   | **NET 1 / NET 2**                              | 2× RJ45 + SFP bugt                            | Ethernet-kontrolnet (NET 1, NET 2: 100/1000BASE-T). SFP-bugten under NET 1/NET 2 accepterer et SFP-modul til valgfri fibernetværksforbindelse. Tilslut NET 1 eller NET 2 til dit DADman kontrolnetværk - kun én port er nødvendig for normal drift. |
| 4   | **THUNDERBOLT 1** (øverst)  | USB-C (Thunderbolt 3)      | Primær Thunderbolt 3 forbindelse til computeren. Tilslut denne port til computerens Thunderbolt 3 eller USB4 port ved hjælp af et 20 Gbps-ratet kabel. Carries op til 256 bi-directional audio kanaler ved standard sample rater.                                                      |
| 5   | **THUNDERBOLT 2** (lavere)  | USB-C (Thunderbolt 3)      | Thunderbolt 3 daisy-chain / passthrough. Forbind til næste Thunderbolt enhed i kæden.                                                                                                                                                                                                                  |
| 6   | **WC/VBB IN**                                  | BNC, 75 Ω.                    | Word ur eller Video Black Burst input. Accepterer ord ur (1×, 256×, eller video sync formater). Engage 75 Ω opsigelse på den sidste enhed i en ord ur kæde.                                                                                                         |
| 7   | **WC OUT**                                     | BNC, 75 Ω.                    | Word clock output. Udsender enhedens aktuelle synkroniseringsreference som et ordur signal.                                                                                                                                                                                                            |
| 8   | **MADI IN**                                    | BNC, 75 Ω.                    | MADI input (coaxial). Accepterer AES10 MADI på 56- eller 64-kanal frame format. Ved 96 kHz er maksimal kanaltælling 32.                                                                                                                                             |
| 9   | **MADI UD**                                    | BNC, 75 Ω.                    | MADI output (coaxial). Transmits MADI på den konfigurerede ramme format og samplingfrekvens.                                                                                                                                                                                        |
| 10  | **ADAT UD 1 / 2**                              | 2× TOSLINK (optisk)        | ADAT Lightpipe udgange. Op til 8 kanaler pr. port ved 44,1/48 kHz; 4 kanaler pr. port ved 88,2/96 kHz (S/MUX).                                                                                                                                      |
| 11  | **ADAT IN 1 / 2**                              | 2× TOSLINK (optisk)        | ADAT Lightpipe indgange. Samme kanal tæller som ADAT udgange.                                                                                                                                                                                                                                          |
| 12  | **OVERVÅGNING 1**                              | 2 × TRS 6,35 mm (L/R)      | Balanceret stereo monitor output 1. Niveau kontrolleret via DADman eller MOM.                                                                                                                                                                                                                          |
| 13  | **OVERVÅGNING 2**                              | 2 × TRS 6,35 mm (L/R)      | Balanceret stereo monitor output 2. Niveau kontrolleret via DADman eller MOM.                                                                                                                                                                                                                          |
| 14  | **SLOT 1 / SLOT 2**                            | 2× ekspansionsplads (DB25) | Analog I/O udvidelses slots. Hver slot accepterer en DAD ekspansionskort giver 8 kanaler af A/D, D/A eller digital I/O. Korttype og kanal tildeling er konfigureret i DADman.                                                                                                          |

> **BEMÆRKNING — Krav til Thunderbolt kabel:** Thunderbolt 3-forbindelsen kræver et kabel på 20 Gbps eller højere. Standard-USB-C-kabler er ikke vurderet til Thunderbolt 3 hastigheder og fungerer ikke pålideligt. Brug kablet leveres med enheden eller en certificeret Thunderbolt 3 / Thunderbolt 4 kabel.

> **BEMÆRKNING — Word clock afslutning:** WC/VBB IN porten skal afsluttes (75 Ω), når AX Center er den sidste enhed i en ord ur kæde. Undladelse af at afslutte kan forårsage refleksioner, der destabiliserer ur reference for alle tilsluttede enheder. Slutkontakten er placeret ved siden af BNC-stikket.

---

## 4. 2 Kerne 256

### 4.2.1 Oversigt

Core 256 er en halv-rack Thunderbolt audio lydkort i Thunders char@@0 rsquo; s produkt familie. Det deler den samme bageste stik supplement som AX Center, men udelader frontpanelet mic/instrument indgange og hovedtelefon udgange. Den er designet til installationer, hvor der kræves en kompakt, monterbar Thunderbolt audio kerne uden front-panel I/O. Core 256 er drevet af en ekstern 12 V DC forsyning.

> **BEMÆRKNING — Kernen 256:** Kernen 256 er en enhed med en halv rackbredde. En dedikeret 1U rack hylde eller Core 256 Racking Hardware tilbehør er nødvendig for at montere det i en standard 19-tommer rack. Jf. [Kapitel 2 — Systemkrav] til oprulningsmuligheder.

### 4.2.2 Panel Oversigt

![Core 256 frontpanel](/img/panel-core256-front.png)
_Figur 4.3 — Core 256 frontpanel. Nummererede callouts svarer til afsnit 4.2.3._

![Core 256 bagpanel](/img/panel-core256-rear.png)
_Figur 4.4 — Core 256 bagpanel. Nummererede callouts svarer til afsnit 4.2.4._

### 4.2.3 Styring Af Frontpaneler

| Ref | Etiket                   | Type                                    | Funktion                                         |
| --- | ------------------------ | --------------------------------------- | ------------------------------------------------ |
| —   | **DAD**                  | Belyst logo                             | Blå belysning; angiver tænd/sluk                 |
| 1   | **Strøm**                | Belyst trykknap                         | Initierer kontrolleret power-on/shutdown sekvens |
| —   | **Int.** | LED indikator                           | Lit når låst til intern ur reference             |
| —   | **Ext.** | LED-indikator (grøn) | Lit når låst til ekstern urkilde                 |
| —   | **Err.** | LED-indikator (rød)  | Lit på ur fejl eller intern fejl                 |

### 4.2.4 Bagpanel

Bagpanelet Core 256 bærer det samme konnektorsæt som AX Center (se [Afsnit 4.1.3]), med følgende forskelle:

| Forskel          | AX Centreret                                             | Hovednet 256                                               |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| Effekt           | IEC C14 mains inlet (100–240 V AC)    | 12 V DC tønde stik (ekstern PSU kræves) |
| Overvåg udgange  | 2 × stereo TRS (MONITOR 1, MONITOR 2) | Ikke til stede                                             |
| Ekspansion slots | 2× (SLOT 1, SLOT 2)                   | 2× (SLOT 1, SLOT 2) — samme             |

Alle andre bagpanelstik (EXPANSION / SFP bugter, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) er identisk med AX Center. Der henvises til AX Center bagpanel-forbindelsestabellen i [afsnit 4.1.3] for funktion og specifikation af disse forbindelser.

---

## 4. 3 Ax 64

### 4.3.1 Oversigt

AX 64 er en 2U rack-mount Thunderbolt audio lydkort interface med op til otte ekspansion kortpladser, at levere op til 64 kanaler af analog I/O i en enkelt enhed (afhængig af de monterede ekspansionskort). Ligesom AX Center, alle kontrol er via DADman over Ethernet. AX 64 bærer den samme core connectivity som AX Center (MADI, ADAT, ord ur, Thunderbolt 3, dual Ethernet), men tilføjer op til otte DB25-format analoge ekspansionskort slots i stedet for AX Centers faste front-panel I / O.

### 4.3.2 Paneloversigt

![AX 64 frontpanel](/img/panel-ax64-front.png)
_Figur 4.5 — AX 64 frontpanel. Nummererede callouts svarer til afsnit 4.3.3._

![AX 64 bagpanel](/img/panel-ax64-rear.png)
_Figur 4.6 — AX 64 bagpanel. Nummererede callouts svarer til afsnit 4.3.4._

### 4.3.3 Frontpanelkontrol

| Ref | Etiket                   | Type                                    | Funktion                                         |
| --- | ------------------------ | --------------------------------------- | ------------------------------------------------ |
| —   | **DAD**                  | Belyst logo                             | Blå belysning; angiver tænd/sluk                 |
| 1   | **Strøm**                | Belyst trykknap                         | Initierer kontrolleret power-on/shutdown sekvens |
| —   | **Int.** | LED indikator                           | Lit når låst til intern ur reference             |
| —   | **Ext.** | LED-indikator (grøn) | Lit når låst til ekstern urkilde                 |
| —   | **Err.** | LED-indikator (rød)  | Lit på ur fejl eller intern fejl                 |

> **BEMÆRK:** AX 64 frontpanelet giver kun statusindikatorer. Alle audio I/O-forbindelser er lavet på bagpanelet (figur 4.6).

### 4.3.4 Bagpanel

| Ref    | Etiket                                        | Forbindelse                              | Funktion                                                                                                                                                                                                                                                                                                                                              |
| ------ | --------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | **Strøm**                                     | IEC C14 indløb                           | Strømforsyningen til nettet. 100–240 V AC, 50/60 Hz, auto-ranging.                                                                                                                                                                                                                                                    |
| 1a     | _(Valgfrit)_               | IEC C14 indløb                           | Strømforsyning til redundant indtag (fabrikstilpasset indstilling). Når den valgfrie overflødige PSU er installeret, vises en anden IEC C14-indgang ved siden af primæren.                                                                                                                         |
| 2, 3   | **EXPANSION**                                 | 2× SFP-bugten                            | DADLink / MADI optisk udvidelse, identisk med AX Center. Accepterer SFP-moduler for DADLink eller optisk MADI I/O.                                                                                                                                                                                                    |
| 4, 5   | **NET 1 / NET 2**                             | 2× RJ45 + SFP bugt                       | Ethernet-kontrolnetværk. Identisk med AX Center. Tilslut NET 1 eller NET 2 til DADman kontrolnetværket.                                                                                                                                                                                               |
| 6      | **THUNDERBOLT 1** (øverst) | USB-C (Thunderbolt 3) | Primær Thunderbolt 3 forbindelse til computeren.                                                                                                                                                                                                                                                                                      |
| 7      | **THUNDERBOLT 2** (lavere) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough.                                                                                                                                                                                                                                                                                              |
| 8      | **WC IN**                                     | BNC, 75 Ω.               | Word clock input.                                                                                                                                                                                                                                                                                                                     |
| 9      | **WC OUT**                                    | BNC, 75 Ω.               | Word clock output.                                                                                                                                                                                                                                                                                                                    |
| 10     | **MADI IN**                                   | BNC, 75 Ω.               | MADI koaksial input. AES10 overensstemmende.                                                                                                                                                                                                                                                                          |
| 11     | **MADI UD**                                   | BNC, 75 Ω.               | MADI koaksial output.                                                                                                                                                                                                                                                                                                                 |
| 12, 14 | **ADAT UD 1 / 2**                             | 2× TOSLINK (optisk)   | ADAT Lightpipe udgange.                                                                                                                                                                                                                                                                                                               |
| 13, 15 | **ADAT IN 1 / 2**                             | 2× TOSLINK (optisk)   | ADAT Lightpipe indgange.                                                                                                                                                                                                                                                                                                              |
| 16–23  | **Slot 1 – Slot 8**                           | Op til 8 × DB25                          | Analoge ekspansionskort slots. Hver slot accepterer en 8-kanals DAD ekspansionskort (A/D, D/A eller digital I/O). Slot nummerering kører højre mod venstre som set fra bagsiden (lot 1 er højre). Korttype og routing er konfigureret i DADman. |

> **BEMÆRKNING — Udvidelseskortpladser:** AX 64 skibe med det antal udvidelseskort, der er angivet på bestillingstidspunktet. Ubefolkede felter er dækket af en blankplade. Fjern ikke blanke plader fra tomme slots - de er nødvendige for korrekt luftstrøm. Ekspansionskort må kun installeres eller fjernes med slukket enhed.

> **BEMÆRKNING — Konvention for nummerering:** På det fysiske bagpanel, slot numre er silkscreened over hver slot og køre fra højre (lot 1) til venstre (lot 8) som set fra bagsiden af enheden. I DADman, er slots mærket til at matche denne fysiske nummerering. Kontroller slotopgaver i DADman, når du først forbinder en enhed med ekspansionskort.

---

## 4.4 MOM — Overvåg Operativmodul

### 4.4.1 Oversigt

MOM (Monitor Operating Module) er en desktop monitor controller, der forbinder til et AX Center eller AX 64 via USB-C. Det giver fysisk control over monitor højttaler valg, kilde udvælgelse, master niveau, dæmning, klippe, talkback, og referenceniveau uden at kræve interaktion med DADman software vinduet. MOM kommunikerer med værten AX Center eller AX 64 over USB og indeholder ingen lyd kredsløb af sin egen - det er kun en kontrol overflade. Lydsignaler sendes ikke gennem MOM.

> **BEMÆRK:** MOM forbinder til computeren, der kører DADman via USB-C-porten på bagsiden af AX Center eller AX 64. Det forbinder ikke direkte til computerens USB-port. DADman skal køre for at MOM kan fungere.

### 4.4.2 Kontrol Reference

![MOM kontrol ansigt](/img/panel-mom.png)
_Figur 4.7 — MOM kontrol ansigt. Nummererede callouts svarer til nedenstående referencetabel._

| Ref | Etiket                      | Type                                    | Funktion                                                                                                                                                                                                                                                                                                                           |
| --- | --------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Spkr. 1** | Belyst trykknap                         | Vælger højttaler output sæt 1 (f.eks. hovedskærme). Tilsvarende til en højttaler output sæt konfigureret i den aktive skærm profil i DADman.                                                                                                    |
| 2   | **Spkr. 2** | Belyst trykknap                         | Vælger højttaler output sæt 2 (fx, nær-felt skærme).                                                                                                                                                                                                                                            |
| 3   | **Spkr. 3** | Belyst trykknap                         | Vælger højttaler output sæt 3 (fx, oversættelse højttaler eller Atmos seng).                                                                                                                                                                                                                    |
| 4   | **Src. A**  | Belyst trykknap                         | Vælger overvågningskilde A som defineret i den aktive Overvågningsprofil.                                                                                                                                                                                                                                          |
| 5   | **Src. B**  | Belyst trykknap                         | Vælger overvågningskilde B.                                                                                                                                                                                                                                                                                        |
| 6   | **Src. C**  | Belyst trykknap                         | Vælger overvågningskilde C.                                                                                                                                                                                                                                                                                        |
| 7   | **Lag**                     | Belyst trykknap                         | Skifter MOM mellem kontrollag. Når flere lag er konfigureret i DADman, skal du trykke på Lag cykler gennem dem, tildele Spkr. og Src. knapper til forskellige højttaler sæt og kilder.                                                                             |
| —   | **Status LED'er 1–4**       | LED indikatorer                         | Angiv status for de fire aktive overvågningslag eller forudindstillinger. Belyses når det tilsvarende lag er aktivt.                                                                                                                                                                               |
| —   | **Stat.**   | LED-indikator (grøn) | Indikerer MOM er forbundet til AX Center / AX 64 og kommunikerer korrekt. Blinker under initialisering. Slået fra, når de er afbrudt.                                                                                                                                              |
| 8   | **TB**                      | Tryk-knap                               | Talkback. Ruter talkback-mikrofonen (konfigureret i DADman) ind i talentfeeds mens den holdes.                                                                                                                                                                                  |
| 9   | **Ref**                     | Tryk-knap                               | Referenceniveau. Slår skærmens udgang til det kalibrerede referenceniveau, der er defineret i den aktive monitorprofil. Tryk igen for at vende tilbage til det forrige niveau.                                                                                                     |
| 10  | **Klip**                    | Belyst trykknap                         | Klipper (mutes) monitor output. Oplyser rødt når aktiv.                                                                                                                                                                                                                         |
| 11  | **Dim**                     | Belyst trykknap                         | Attenuates monitor output ved Dim beløb konfigureret i den aktive skærm profil (typisk -20 dB). Oplyser rav når aktiv.                                                                                                                                                          |
| 12  | **Niveau**                  | Roterende encoder med LED-ring          | Master monitor niveau kontrol. Drej for at justere output-niveauet. LED-ringen angiver strømniveauets position i forhold til referenceniveauet (0 = Ref). Område: ca. -40 dB til +6 dB i forhold til reference. |

> **BEMÆRKNING — MOM og Overvåg profiler:** Funktionerne i Spkr., Src og Layer knapperne bestemmes af Overvågningsprofilen indlæst i DADman. En MOM uden en aktiv skærm profil konfigureret vil have ikke-funktionel Spkr. og Src. knapper. Indstil Overvågningsprofiler før du bruger MOM i en session. Se [Kapitel 8 — Avancerede Funktioner, Afsnit 8.1 — Overvågningsprofiler].

---

## 4.5 DAD Junior

### 4.5.1 Oversigt

_[Pladsholder: DAD Junior oversigt — afventende produktudgivelse og engineering dokumentation.]_

### 4.5.2 Frontpanel

_[Pladsholder: annoteret frontpaneldiagram — DAD Junior]_

### 4.5.3 Bagpanel

_[Pladsholder: annoteret bagpaneldiagram — DAD Junior]_

---

## 4.6 Penta 720 / 721s

### 4.6.1 Oversigt

Penta 720 og Penta 721s er modulære audio lydkort og signal konvertering platforme fra NTP-teknologi. I modsætning til Thunders Core produkter (AX Center, AX 64, Core 256), Penta enheder forbinder kun til computeren over Ethernet - der er ingen Thunderbolt forbindelse. DADman kommunikerer med Penta enheder over kontrolnetværket for routing, format konvertering og konfiguration. Penta enheder anvendes typisk til høj kanal-tæller AES/EBU og MADI I/O, format konvertering, og netværk audio distribution i broadcast og post-produktion miljøer.

Penta 720 er et 2U rack-mount chassis, der accepterer ekspansionskort i sine interne slots. Penta 721s er en slankere 1U variant. Den bageste konnektor komplementet afhænger af de monterede ekspansionskort; layoutet vist i afsnit 4. .3 afspejler en typisk konfiguration med Dante/AES67 I/O-kort i Slot 1.

### 4.6.2 Panel Oversigt

![Penta 720 frontpanel](/img/panel-penta720.png)
_Figur 4.8 — Penta 720 frontpanel. Nummererede afskrivninger svarer til referencetabellen i afsnit 4.6.3._

![Penta 721s frontpanel](/img/panel-penta721s-front.png)
_Figur 4.9 — Penta 721s frontpanel._

![Penta 721s bagpanel](/img/panel-penta721s-rear.png)
_Figur 4.10 — Penta 721s bagpanel. Nummererede afskrivninger svarer til referencetabellen i afsnit 4.6.4._

| Ref | Etiket     | Type                                    | Funktion                                                                                                                                                           |
| --- | ---------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| —   | **Klar**   | LED-indikator (grøn) | Enhed har fuldført opstartssekvens og er klar til drift                                                                                                            |
| —   | **Fejl**   | LED-indikator (rød)  | En intern fejl eller konfigurationsfejl er blevet opdaget                                                                                                          |
| —   | **PSU OK** | LED-indikator (grøn) | Primær strømforsyning fungerer korrekt. På enheder med redundant PSU, en anden PSU OK indikator bekræfter backup forsyningsstatus. |

### 4.6.4 Bagpanel

| Ref | Etiket                                          | Forbindelse                             | Funktion                                                                                                                                                                                                                          |
| --- | ----------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Effekt (primær)**          | IEC C14 indløb                          | Strømforsyningen til nettet. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                              |
| 2   | **Strøm (sikkerhedskopi)**   | IEC C14 indløb                          | Redundant elnettenes effekt input (hvor monteret). Giver hot-swap PSU redundans.                                                                                               |
| 3   | **AES/EBU I/O 1–4**                             | DB25 (Tascam pinout) | AES/EBU digital audio I/O, kanal 1-4 (4 stereo pairs = 8 kanaler).                                                                                                                             |
| 4   | **AES/EBU I/O 5–8**                             | DB25 (Tascam pinout) | AES/EBU digital audio I/O, kanal 5-8 (4 stereo pairs = 8 kanaler).                                                                                                                             |
| 5   | **MADI IN**                                     | BNC, 75 Ω.              | MADI koaksial input. AES10 overensstemmende.                                                                                                                                                      |
| 6   | **MADI UD**                                     | BNC, 75 Ω.              | MADI koaksial output.                                                                                                                                                                                             |
| 7   | **Optisk I/O**                                  | TOSLINK (optisk)     | Optisk MADI eller ADAT I/O (kortafhængig).                                                                                                                                                     |
| 8   | **WC/VBB IN**                                   | BNC, 75 Ω.              | Word ur eller Video Black Burst input.                                                                                                                                                                            |
| 9   | **WC OUT**                                      | BNC, 75 Ω.              | Word clock output.                                                                                                                                                                                                |
| 10  | **AES11 IN**                                    | XLR (kvinder)        | AES11 digital lyd reference signal input. Bruges til at synkronisere enheden til en AES11-referencekilde.                                                                                         |
| 11  | **NET 1**                                       | RJ45 (1000BASE-T)    | Ethernet kontrol og/eller Dante audio netværk, port 1.                                                                                                                                                            |
| 12  | **NET 2**                                       | RJ45 (1000BASE-T)    | Ethernet kontrol og/eller Dante lydnetværk, port 2.                                                                                                                                                               |
| 13  | **SLOT 1** (Dante/AES67 I/O) | 2× SFP                                  | Ekspansion kort slot 1. Vist udstyret med et Dante/AES67 I/O-kort med to SFP-porte til optiske eller kobberDante netværksforbindelser. Slot indhold varierer efter konfiguration. |

---

## 4.7 LED Statsreference

Nedenstående tabel omfatter frontpanelet LED-indikatorer, der er fælles for alle Thunders Core rack enheder (AX Center, Core 256, AX 64). Penta enheder anvender et separat sæt indikatorer, der er omfattet af afsnittet Penta ovenfor.

### 4.7.1 Urreference-LED'er — Thunder-Core Enheder

| Int.         | Ext.             | Ære.            | Betydning                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | -------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ● (liter) | ● (off)       | ● (off)      | Enheden er låst til sin egen interne oscillator. Ingen ekstern reference er forbundet eller valgt. Normal tilstand for en ur mester.                                                                                                                                                                                                          |
| ● (off)   | ● (låg, grøn) | ● (off)      | Enheden er låst til den valgte eksterne reference (ordur, MADI embed, ADAT embed eller Dante PTP). Normal tilstand for en ur slave.                                                                                                                                                                                                        |
| ● (liter) | ● (liter)     | ● (off)      | Enheden er i færd med at låse op for en ekstern reference. Den interne oscillator kører, mens låsen er erhvervet. Forbigående tilstand — løser typisk inden for få sekunder.                                                                                                                                                                  |
| ● (off)   | ● (off)       | ● (låg, rød) | **Ur fejl.** Enheden kan ikke låses til den valgte eksterne reference. Kontrollér, at referencekilden er til stede med den korrekte prøvetagningshastighed og tilsluttet den korrekte indgang. Jf. [Kapitel 9 — Fejlfinding, Afsnit 9.3]. |
| ● (liter) | ● (off)       | ● (låg, rød) | **Intern fejl.** Enheden har detekteret en intern fejl uden relation til ekstern locking. Bemærk, at front-panelet tilstand og power-cycle enheden. Hvis fejlen fortsætter, kontakt DAD support.                                                                                                                              |
| Langsom blitz                | —                                | —                               | Enheden udfører en firmwareopdatering. Sluk ikke enheden under en firmwareopdatering.                                                                                                                                                                                                                                                                         |

### 4.7.2 Strømknap

| Stat                            | Betydning                                                        |
| ------------------------------- | ---------------------------------------------------------------- |
| Fra                             | Enhed er slukket                                                 |
| Lit (stabil) | Enheden er tændt og fungerer normalt                             |
| Langsom puls                    | Enheden er i standbytilstand eller udfører en nedlukningssekvens |

### 4.7.3 MOM-statuslysdioder

| Stat.                    | Betydning                                                     |
| ---------------------------------------- | ------------------------------------------------------------- |
| ● (låg, grøn, stabil) | MOM er forbundet og kommunikerer med værten AX Center / AX 64 |
| Langsom blitz (grøn)  | MOM initialiserer eller venter på, at DADman svarer           |
| ● (off)               | MOM er ikke tilsluttet, eller værtsenheden er slukket         |

_[Pladsholder: per-kanal signal/OL/carrier LED-tabeller — gældende for AX 64 udvidelseskort, der omfatter frontpanel måling. Afventer teknisk dokumentation.]_

---

## Krydsreferencer

- **Kapitel 1 — Introduktion:** Kompatibel hardwareliste; hardwarefamilier og kloning kompatibilitet
- **Kapitel 2 — Systemkrav:** Pakkens indhold pr. model; understøttede OS-versioner
- **Kapitel 3 — Installation:** Installation af Thunderbolt driver; netværkskonfiguration
- **Kapitel 5 — Signal Flow & Architecture:** Hvordan hver stikkontakt passer ind i signal- og urstien
- **Kapitel 7 — Operation:** Konfigurering af input, output, routing, og monitor profiler i DADman
- **Kapitel 8 — Avancerede funktioner:** Overvågningsprofiler, MOM-konfiguration, Control\-Pack
- **Tillæg A — Specifikationer:** Fuldstændige elektriske og mekaniske specifikationer pr. produkt
- **Tillæg B — Forbindelsesstifter:** Stiftopgaver til DB25, XLR, BNC og andre konnektortyper

---
