---
title: "Formål Og Sikkerhed"
sidebar_label: "FM — Formål Og Sikkerhed"
sidebar_position: 2
---

# Forsiden — Sikkerhedsmeddelelser og -overholdelse

> **Dokument:** DADman Brugervejledning  
> **Gælder til:** DADman software og alle kompatible DAD / NTP Technology hardware  
> **Standarder:** IEC/IEEE 82079-1:2019 · IEC 62368-1:2018 · UL 62368-1 · CSA C22. Nr. 62368-1  
> **Status:** Kladde v0. — Regulatoriske erklæringer afventer fra DAD / NTP Technology engineering  
> **Sidst opdateret:** Juni 2026

---

> \*\*LÆS OG GENTAG DERES VEJLEDNING INDEN DRIFTSMÅDE. \*  
> Dette afsnit indeholder sikkerhedsoplysninger, der skal læses, forstås, og fulgt før installation, konfiguration eller drift af enhver hardware, der kontrolleres af DADman software. Manglende overholdelse af disse instruktioner kan resultere i elektrisk stød, brand, høreskader, skader på udstyr eller bortfald af garanti.

---

## FM.1 Signal Word Definitioner

Følgende signalord bruges i hele denne håndbog til at indikere farestyrke. De vises i meddelelser formateret som vist nedenfor og skal altid læses og observeres.

| Signal ord   | Farligt niveau                         | Betydning                                                                                                                                                                                                                  |
| ------------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FARE**     | Øjeblikkelig død eller alvorlig skade  | Dette signalord indikerer en overhængende farlig situation, som, hvis den ikke undgås, **vil** resulterer i død eller alvorlig personskade.                                                                |
| **ADVARSEL** | Mulig død eller alvorlig tilskadekomst | Dette signalord indikerer en potentielt farlig situation, som, hvis den ikke undgås, **kunne** resultere i død eller alvorlig personskade.                                                                 |
| **ADVARSEL** | Mulig mindre skade eller udstyrsskade  | Dette signal ord indikerer en potentielt farlig situation, som, hvis ikke undgås, **kan** resultere i mindre personskade eller beskadigelse af udstyr.                                                     |
| **BEMÆRK**   | Ingen skadesrisiko                     | Dette signalord angiver vigtige operationelle oplysninger, som, hvis de ikke følges, kan medføre tab af data forkert betjening eller beskadigelse af udstyr, men udgør ikke en personlig sikkerhedsrisiko. |

Sikkerhedsmeddelelser **vises altid før** den handling eller situation, de relaterer til.

---

## FM.2 Sikkerhedssymboler

Følgende symboler kan forekomme på DAD / NTP-teknologihardware, strømforsyninger eller i denne dokumentation. Hvert symbol gengives her med sin betydning.

| Symbol                                                         | IEC 60417 reference    | Betydning                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚠                                                              | IEC 60417-5036         | **Generel forsigtighed / opmærksomhed påkrævet.** Henvis til den ledsagende tekst for den specifikke risiko.                                                                                                                            |
| ⚡                                                              | IEC 60417-5031         | **Elektrisk stødfare.** Farlig spænding indeni. Risiko for elektrisk stød. Åben ikke.                                                                                                                   |
| ⏚                                                              | IEC 60417-5019         | **Beskyttende jord / jord.** Denne terminal skal være forbundet med en beskyttende jordleder.                                                                                                                                           |
| **~**                                          | IEC 60417-5032         | **Alternativ strøm (AC).** Indikerer AC effekt input.                                                                                                                                                                |
| **⏻**                                                          | IEC 60417-5009         | **Strøm / standby.**                                                                                                                                                                                                                                    |
| ♻                                                              | WEEE Direktiv          | **Bortskaffelse ikke af husholdningsaffald.** Dette produkt skal bortskaffes via et godkendt genbrugs- eller affaldsindsamlingssystem. Se [Afsnit FM.8 — Bortskaffelse og Uge](#fm8-disposal-and-weee). |
| **[RoHS]** | EU Direktiv 2011/65/EU | **RoHS-kompatibel.** Dette produkt overholder direktivet om begrænsning af farlige stoffer.                                                                                                                                             |

> **BEMÆRK:** Hvis et symbol vises på hardware eller emballage og ikke er anført i tabellen ovenfor, henvise til installationsvejledningen, der leveres med den pågældende hardwareenhed.

---

## FM.3 Elektrisk Sikkerhed

### FM.3.1 Mains Power and Grounding

> **DANGER — Elektrisk stødfare**  
> \*\*Forkert tilslutning af udstyrslederen resulterer i risiko for elektrisk stød. \* Du må ikke ændre den stik, der følger med produktet. Hvis stikket ikke passer til stikkontakten, så få en kvalificeret elektriker til at installere et egnet stikkontakt. Brug ikke en adapter, der besejrer funktionen af den udstyrs-jordingsleder. Hvis du er usikker på, om produktet er ordentligt jordbundet, konsultere en kvalificeret elektriker, før du betjener udstyret.

Alle DAD / NTP Technology mains-powered hardware \*\* skal være jorunded\*\*. I tilfælde af funktionsfejl eller brud giver jordforbindelse en sti med mindst modstand for fejlstrøm og mindsker risikoen for elektrisk stød. Hver net-drevet produkt leveres med en strømledning udstyret med en udstyr-jordingsleder og en jordforbindelse stik. Stikproppen skal indsættes i en korrekt installeret og jordbaseret stikkontakt, der er i overensstemmelse med alle gældende lokale elektriske koder og forskrifter.

> **ADVARSEL**  
> Må ikke besejre sikkerhedsformålet med strømstikket af polariserede eller jordbaserede typer. En polariseret stik har to blade med en bredere end den anden. En jord-type stik har to blade og en tredje grundstødningstang. Den brede klinge og den tredje prong er til rådighed for din sikkerhed. Hvis den medfølgende stik ikke passer til din stikkontakt, skal du konsultere en elektriker for at erstatte den forældede stikkontakt. Denne instruktion gælder i alle regioner og erstatter enhver lokal bekvemmelighed praksis.

### FM.3.2 Power Cord Beskyttelse

> **ADVARSEL**  
> Beskyt strømledningen fra at blive gået på eller fastgjort især ved stikkontakter, stikkontakter, og på det punkt, hvor ledninger forlader udstyrets chassis. En beskadiget strømledning skal erstattes af en kvalificeret servicetekniker, før udstyret returneres til drift. Udstyr må ikke betjenes med synligt beskadiget eller afskårne strømledninger.

### FM.3.3 Afkobling og Lightning

- Frakobl alt netdrevet udstyr under lynnedslag.
- Frakobl alt netdrevet udstyr, når det vil være ubrugt i en længere periode.
- Ved frakobling af en strømledning, grib fat om stikkontakten solidt — træk ikke på selve ledningen.

### FM.3.4 Power over Ethernet (PoE) Enheder

Nogle DAD hardware (herunder MOM Monitor Operating Module) er drevet via Power over Ethernet (PoE) snarere end en netledning. Følgende gælder for PoE-drevne enheder:

- Tilslut kun PoE-drevne enheder til netværkskontakter eller injektorer, der er i overensstemmelse med IEEE 802. af (15.4 W) eller IEEE 802.3at (30 W), alt efter hvad der er relevant for anordningen.
- Tilslut ikke PoE-drevne enheder til standard data-only-netværksporte, der ikke er i stand til at levere PoE-strøm.
- PoE-strømforsyningen inden for netværkskontakten eller -injektoren er underlagt de generelle netsikkerhedsforskrifter i [afsnit FM.3.1](#fm31-mains-power-and-grounding).

---

## FM.4 Miljøsikkerhed

### FM.4.1 Fugt og flydende stoffer

> **ADVARSEL**  
> Brug ikke DAD / NTP-teknologi hardware nær vand eller på steder, hvor kondensation, regn eller flydende spild kan forekomme. Flydende indtrængen kan forårsage elektrisk stød, brand eller uoprettelig skade på elektronik.

- Opbevar væskerne væk fra alt udstyr.
- Sørg for at sikre, at genstande ikke falder, og at væsker ikke spildes i udstyr gennem ventilationsåbninger eller konnektoråbninger.
- Hvis væsken er spildt på eller i udstyret, afbrydes strømmen med det samme, og der henvises til [afsnit FM. — Servicebetingelser](#fm6-service-conditions) før returnering af udstyret til tjeneste.

### FM.4.2 Ventilation og varme

> **ADVARSEL**  
> Dette udstyr genererer varme under normal drift. Obstruktion af ventilationsåbninger kan forårsage overophedning, brand eller for tidlig svigt af interne komponenter.

- Blokér ikke nogen ventilationsåbninger. Installer udstyr i overensstemmelse med producentens anvisninger og de klareringer, der er specificeret i installationsvejledningen til din hardwaremodel.
- Der må ikke installeres udstyr i nærheden af varmekilder, såsom radiatorer, varmeregistre, komfurer eller andre apparater — herunder effektforstærkere — der frembringer betydelig varme.
- Produktet skal være placeret således, at dets position ikke påvirker dets korrekte ventilation.
- Observere de minimale rack clearances og driftstemperaturområde specificeret i de tekniske specifikationer for din hardware. Generelt kræver DAD rack hardware et minimum på 1U ledig plads over og under enheden, medmindre andet er angivet.

### FM.4.3 Mekanisk Stabilitet

> **ADVARSEL**  
> Udstyr, der falder, kan forårsage personskade og alvorlige skader på udstyret. Når montering hardware i en rack eller på en vogn, sikre monteringsstrukturen er stabil, normeret til lasten og korrekt fastgjort før frigivelse af udstyret.

- Brug kun rack kabinetter, stande, vogne, eller monteringsbeslag specificeret af producenten eller forsynet med udstyret.
- Når du bruger en vogn med hjul, skal du være forsigtig, når du flytter vognen og udstyrets kombination for at undgå tip-over.
- Rackmount enheder skal være fastgjort med alle medfølgende rackmonterede skruer før drift.

---

## FM.5 Hørsikkerhed

> **ADVARSEL — Risiko for permanente høreskader**  
> DADman-softwaren styrer det analoge og digitale output-niveau af tilsluttet hardware. Dette udstyr, uanset om det anvendes alene eller i kombination med effektforstærkere og højttalere eller hovedtelefoner er i stand til at producere lydtryksniveauer (SPL), der kan forårsage **permanent høretab**.

- Må ikke operere på outputniveauer, der er ubehagelige. Hvis du er i tvivl om sikre overvågningsniveauer konsultere professionel vejledning om SPL grænser for udvidet lytning (en fælles reference er 85 dB SPL som et kontinuerligt sikkert niveau for professionel overvågning).
- Reducer output-niveauer før tilslutning af nye signalkilder, hvilket gør routing ændringer, eller genindlæsning konfigurationsfiler.
- Hvis du oplever høretab, tinnitus (ringen for ørerne) eller øget følsomhed over for lyd efter en lyttesession, skal du straks kontakte en audiolog Det kan være tidlige indikatorer for støjinduceret høreskader.

> **BEMÆRK:** DADmans outputniveau styrer og overvåger profilreferenceniveaufunktion (**Ref**-knappen) er specielt designet til at tillade at outputniveauer kan indstilles og låses ved kalibrerede SPL-værdier. Brug af disse funktioner til disciplineret gain struktur management reducerer risikoen for utilsigtet eksponering for usikker SPL. Se [Kapitel 8 — Avancerede Funktioner, Afsnit 8.X — Overvågningsprofiler og referenceniveauer] for vejledning.

---

## FM.6 Servicebetingelser

> **ADVARSEL**  
> Der er ingen brugbare dele inde i DAD / NTP Technology hardware. Åbning af anlægget udsætter farlige spændinger. Der henvises til al service ud over det, der er beskrevet i denne håndbog, til kvalificeret servicepersonale.

Hardware skal tages ud af drift og henvises til kvalificeret tjenestepersonale, når en af følgende betingelser foreligger:

1. Netledningen eller stikket er blevet fysisk beskadiget.
2. Objekter er faldet ind i, eller væske er blevet spildt ind i udstyret.
3. Udstyret har været udsat for regn eller fugt.
4. Udstyret ser ikke ud til at fungere normalt eller udviser en markant ændring i ydeevnen.
5. Udstyret er blevet tabt, eller anlægget er blevet fysisk beskadiget.

Forsøg ikke at servicere produktet ud over brugervedligeholdelsesprocedurerne beskrevet i [kapitel 10 — Vedligeholdelse] i denne håndbog. Uautoriseret service vil annullere garantien og kan skabe yderligere sikkerhedsrisici.

> **ADVARSEL — Flytter dele**  
> Nogle DAD rack enheder (herunder AX32) indeholder køleventilatorer med **farlige bevægelige dele** tilgængelige, når enhedscoveret fjernes. Hold fingre og alle andre kropsdele væk fra interne ventilatorsamlinger til enhver tid.

---

## FM.7 Software og datasikkerhed

Følgende vejledning i NOTICE-niveau gælder for DADman-softwaredrift og indebærer ikke personlige sikkerhedsrisici. Manglende overholdelse af denne praksis kan resultere i tab af konfigurationsdata.

> **BEMÆRKNING — Gem konfiguration før firmwareopdateringer**  
> Firmwareopdateringer nulstiller alle indstillinger, der er gemt på hardwareenheden, til fabriksstandardværdier. Routing konfigurationer, gain indstillinger, monitor profiler, kanal etiketter og alle andre gemte parametre vil gå tabt, medmindre de gemmes først. Gem altid en DADman indstillingsfil (`.dms`) ved hjælp af **Fil > Gem som** før du starter en firmwareopdatering. Se [Kapitel 3, afsnit 3.X — Opdatering af DADman og Firmware] for hele proceduren.

> **NOTICE — Configuration file backups**  
> DADman Settings Files (`.dms`) and Monitor Profile Files (`.dmprof`) represent significant setup investment. Vedligeholde regelmæssige sikkerhedskopier af disse filer til en placering adskilt fra computeren, der kører DADman (f.eks. skyopbevaring eller et eksternt drev). Disse filer er det eneste middel til at inddrive din konfiguration efter en fabriksindstilling.

> **BEMÆRKNING — Netværkssikkerhed**  
> DADman kommunikerer som standard med hardwareenheder over netværket uden godkendelse. I miljøer med flere brugere eller netværksadgang uden for studiet, placere DADman-kontrolleret hardware på en dedikeret, isoleret netværkssegment for at forhindre uautoriseret adgang til enhedskonfiguration.

---

## FM.8 Bortskaffelse og Uge

DAD / NTP-teknologiprodukter er omfattet af det europæiske WEEE-direktiv (affald af elektrisk og elektronisk udstyr, direktiv 2012/19/EU) og tilsvarende nationale og regionale bestemmelser.

> **Bortskaf ikke dette udstyr i usorteret kommunalt affald (husholdningsaffald/almindeligt tilbagefald).**

Elektrisk og elektronisk udstyr skal indsamles og bortskaffes separat via godkendte indsamlingssteder eller returneres til en autoriseret distributør eller til fabrikanten med henblik på korrekt genanvendelse. Kontakt din lokale myndighed, affald management service, eller DAD / NTP Teknologi til bortskaffelse vejledning.

Den krydsede wheelie bin symbol (♻️ med en X) trykt på eller fastgjort til produktet identificerer det som underlagt separate indsamlingskrav.

---

## FM.9 Regulatorisk Overholdelse

> **BEMÆRKNING — Afventende erklæringer**  
> Erklæringerne om overholdelse af lovgivningen i dette afsnit leveres som pladsholdere. Endelige erklæringer, herunder relevante versioner af direktivet, oplysninger om bemyndigede organer (hvis relevant) og autoriserede repræsentantoplysninger skal bekræftes og indsættes af DAD / NTP-teknologiteknik og være lovlige før offentliggørelsen.

### FM.9.1 CE Overensstemmelseserklæring (Den Europæiske Union)

DAD / NTP-teknologi erklærer, at de hardwareprodukter, der kontrolleres af DADman-software, opfylder kravene i følgende EU-direktiver:

- **Direktivet om radioudstyr (RED) 2014/53/EU** — _[Gælder for produkter med radio/Wi-Fi; bekræft anvendelighed pr. produkt]_
- **Lavspændingsdirektiv (LVD) 2014/35/EU** — Gælder for netdrevet hardware
- **Direktiv om elektromagnetisk kompatibilitet (EMC) 2014/30/EU**
- **RoHS-direktiv 2011/65/EU** — Begrænsning af farlige stoffer
- **WEEE-direktiv 2012/19/EU** — affald af elektrisk og elektronisk udstyr

_[Fuldstændig overensstemmelseserklæring indsættes her. Skal omfatte: produktnavn(e), modelnumre, autoriseret underskriver, dato og liste over anvendte harmoniserede standarder (EN 55032, EN 55035, EN IEC 62368-1 osv.).]_

**Authorised Representative (EU):**  
NTP Technology A/S  
Nybrovej 99, DK-2820 Gentofte, Denmark  
Email: info@digitalaudio.dk

### FM.9.2 FCC-overensstemmelseserklæring (USA)

_[FCC erklæring, der skal indsættes af DAD engineering. Skal omfatte: FCC ID (hvis relevant), ansvarlig parts navn og adresse og overholdelseserklæring pr. 47 CFR del 15.]_

Denne enhed overholder del 15 i FCC-reglerne. Driften er underlagt følgende to betingelser:

1. Denne enhed forårsager muligvis ikke skadelig interferens.
2. Denne anordning skal acceptere enhver modtaget interferens, herunder interferens, der kan forårsage uønsket drift.

> **BEMÆRK:** Ændringer eller ændringer, der ikke udtrykkeligt er godkendt af NTP Technology A/S, kan annullere brugerens autoritet til at betjene udstyret.

### FM.9.3 ICES-003 (Canada)

_[Industry Canada ICES-003 compliance statement to be inserted.]_

Digitalt udstyr i klasse B er i overensstemmelse med canadisk ICES-003.

### FM.9.4 RoHS Compliance

DAD / NTP-teknologihardware fremstilles i overensstemmelse med EU-direktiv 2011/65/EU (RoHS 2) og dets ændringsdirektiv 2015/863/EU (RoHS 3) som begrænser anvendelsen af farlige stoffer, herunder bly, kviksølv, cadmium, hexavalent krom, polybromerede biphenyler (PBB), polybromerede diphenylethere (PBDE) og fire phthalater i elektrisk og elektronisk udstyr.

_[Der indsættes en henvisning til RoHS-overensstemmelsescertifikat eller -erklæring.]_

### FM.9.5 UK Conformity Assessed (UKCA) — Storbritannien

_[UKCA-erklæring, der skal indsættes for produkter, der bringes i omsætning efter Brexit, hvis relevant.]_

---

## FM.10 Juridiske Meddelelser

### Ophavsret

2026 NTP-teknologi A/S. Alle rettigheder forbeholdt.

DAD — Digital Audio Denmark er et registreret varemærke tilhørende NTP Technology A/S. Alle andre varemærker tilhører deres respektive ejere.

Ingen del af denne håndbog må gengives, overføres eller oversættes i nogen form eller på nogen måde — elektronisk. mekanisk, fotokopiering, optagelse eller på anden måde — uden forudgående skriftlig tilladelse fra NTP Technology A/S.

### Ansvarsfraskrivelse

NTP Technology A/S forbeholder sig ret til at foretage ændringer i hardwareprodukter og software uden varsel. Produktfunktioner og specifikationer, der er beskrevet i denne manual, kan ændres.

NTP Technology A/S er ikke ansvarlig for tekniske eller redaktionelle fejl eller udeladelser, der er indeholdt heri, eller i tilfælde af utilsigtede skader eller følgeskader som følge af indretning, ydelse eller anvendelse af denne håndbog eller de produkter, den beskriver.

### Kontakt

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

E-mail: info@digitalaudio.dk  
Web: www.digitalaudio.dk  
Support: www.digitalaudiosupport.com

---

## Resumé af sikkerhedsmeddelelser

Per IEC/IEEE 82079-1:2019, alle meddelelser om DANGER og ADVARSEL i dette dokument indsamles her til hurtig reference. Individuelle bekendtgørelser optræder også i sammenhæng i de kapitler, hvor den relevante fare finder anvendelse.

| Placering                                     | Signal ord   | Summary                                                                                  |
| --------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------- |
| Afsnit FM.3.1 | **FARE**     | Forkert jordforbindelse — risiko for elektrisk stød                                      |
| Afsnit FM.3.1 | **ADVARSEL** | Må ikke besejre det sikkerhedsmæssige formål med strømstikket                            |
| Afsnit FM.3.2 | **ADVARSEL** | Beskyt og fungerer ikke med en beskadiget strømledning                                   |
| Afsnit FM.4.1 | **ADVARSEL** | Må ikke anvendes nær vand — risiko for elektrisk stød og brand                           |
| Afsnit FM.4.2 | **ADVARSEL** | Undgå ventilation — risiko for brand og overophedning                                    |
| Afsnit FM.5                   | **ADVARSEL** | Outputniveauer, der kan forårsage permanent høretab                                      |
| Afsnit FM.6                   | **ADVARSEL** | Ingen brugbare dele — farlige spændinger inde i                                          |
| Afsnit FM.6                   | **ADVARSEL** | Farlige bevægelige dele (AX32 og enheder med indvendige ventilatorer) |

---

_[Afventer DAD / NTP Technology legal and engineering:]_  
_— Final CE Declaration of Conformity text and signatory_  
_— FCC ID numbers and compliance statements per product model_  
_— ICES-003 declaration_  
_— UKCA declaration (hvis relevant)_  
_— RoHS certificate reference_  
_— Confirmation of applicable harmonised standards (EN series)_
