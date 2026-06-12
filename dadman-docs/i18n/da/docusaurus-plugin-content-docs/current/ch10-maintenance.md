---
title: "Kapitel 10 — Vedligeholdelse"
sidebar_label: "Ch. 10 — Vedligeholdelse"
sidebar_position: 12
---

# Kapitel 10 — Vedligeholdelse

> **Dokument:** DADman Brugervejledning  
> **Softwareversion dækket:** DADman v5.8.2 build 2  
> **Kapitel status:** Kladde v0. — Hardware-specifikke miljøspecifikationer afventer per-model bekræftelse fra DAD engineering  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

| Afsnit               | Dækker                                              |
| -------------------- | --------------------------------------------------- |
| 10.1 | Opdaterer DADman software                           |
| 10.2 | Opdaterer hardware firmware                         |
| 10.3 | Opdatering af Dante firmware                        |
| 10.4 | Opdatering af Thunderbolt 3 driver                  |
| 10.5 | Verificerer aktuelle software- og firmwareversioner |
| 10.6 | Rengøring                                           |
| 10.7 | Lagerplads                                          |
| 10.8 | Bortskaffelse og bortskaffelse                      |

---

## 10.1 Opdaterer DADman-software

DADman opdateringer distribueres som komplette installationspakker - ikke trinvise patches. Installation af en ny version erstatter den eksisterende installation.

### 10.1.1 Før Opdatering

- Gennemgå **udgivelsesnoterne** for den nye version, før du installerer. Udgivelsesnoter dokument testet OS versioner, firmware kompatibilitetskrav, ændret adfærd og eventuelle kendte problemer med nye OS udgivelser. Udgivelsesnoter er tilgængelige i downloadcentret på [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
- Bekræft dit operativsystem er angivet som understøttet af den nye DADman-version. Se de udgivelsesnoter - ikke alle DADman-versioner understøtter alle OS-versioner.

### 10.1.2 Opdatering DADman - macOS

1. Download den nye DADman installer (`.pkg`) fra DAD support portalen eller din Avid Master Account.
2. Afslut DADman, hvis det kører.
3. Dobbeltklik på installationsprogrammet og følg instruktionerne på skærmen. Den nye version erstatter den eksisterende installation automatisk.
4. Efter installation, starte DADman og bekræfte versionsnummeret i \*\*DADman > Om DADman \*\*.

### 10.1.3 Opdatering DADman — Windows

1. Download den nye DADman installer (`.exe` eller `.msi`) fra DAG-supportportalen.
2. Luk DADman, hvis den kører.
3. Dobbeltklik på installationsprogrammet og følg instruktionerne på skærmen. Klik på **Ja**, hvis en prompt til brugerkontokontrol vises.
4. Efter installation, starte DADman og bekræfte versionsnummeret i \*\*Hjælp > Om DADman \*\*.

> **BEMÆRK:** Opdatering DADman opdaterer ikke hardware firmware. Der er tale om særskilte operationer, der kræver særskilte procedurer. Kontroller altid udgivelsesbemærkningerne for at afgøre, om en DADman opdatering anbefaler eller kræver en tilsvarende firmwareopdatering.

---

## 10.2 Opdatering Af Hardware Firmware

### 10.2.1 Kritisk: Gem Konfiguration Før Opdatering

> **ADVARSEL — Indstillinger vil gå tabt**  
> \*\*Firmwareopdateringer nulstiller alle indstillinger, der er gemt på hardwareenheden, til fabriksstandardværdier. \* Routing konfigurationer, gain indstillinger, kanal etiketter, monitor profiler, routing forudindstillinger, og alle andre lagrede parametre slettes permanent under en firmware opdatering. Den eneste måde at gendanne disse indstillinger er at genindlæse en tidligere gemt DADman Settings File (`.dms`).

**Før du opdaterer hardwarefirmware:**

1. Åbn DADman og bekræft at enheden skal opdateres, er forbundet og synlig i Enhedslisten.
2. Gå til **Fil > Gem som…** og gem de aktuelle indstillinger i en `.dms'-fil med et klart filnavn (f.eks. `StudioA_AXCenter_pre-update_2026-06.dms\`).
3. Hvis en skærm profil er indlæst, så gem den separat: **Fil > Gem profil som…**
4. Bekræft begge filer gemmes til en placering, der er sikkerhedskopieret.

> **TIP:** Dialogen for firmwareopdatering i DADman _(v5.7.2 og senere)_ indeholder en påmindelse om at sikkerhedskopiere indstillinger, før du fortsætter. Afvis ikke denne dialog uden at bekræfte sikkerhedskopieringen er færdig.

### 10.2.2 Henter Firmware- Filer

Firmware-filer til alle DAD og NTP-teknologi-hardware er tilgængelige i download-centret hos [digitalaudiosupport.com](https://www.digitalaudiosupport.com). En gratis konto er påkrævet.

Download firmwarefilen til din specifikke hardwaremodel. Brug ikke firmware fra en model på en anden model - firmware er ikke udskiftelig mellem hardwarefamilier.

### 10.2.3 Udfører Firmwareopdateringen via DADman

1. Åbn DADman. Bekræft at den enhed, der skal opdateres, er tilsluttet og synlig i Enhedslisten.
2. Højreklik på enheden (Windows) eller brug knappen Handling (macOS).
3. Vælg **Opdater Firmware**.
4. Klik på **Anerken** eller **Fortsæt** når dialogboksen for sikkerhedskopiering vises (efter bekræftelse af din sikkerhedskopi er fuldført).
5. Gennemse den downloadede firmwarefil og vælg den.
6. Firmware- opdateringen begynder. En fremgangsindikator viser opdateringsstatus.
7. Afbryd ikke strømmen til enheden eller luk DADman under opdateringen. En afbrudt firmwareopdatering kan gøre enheden unbootable og kræve fabriksgendannelse.
8. Efter opdateringen er færdig, genstarter enheden automatisk. Enhedslisten viser enhedens frakobling og genforbindelse. Vent på **Klar** LED til at vende tilbage til solid grøn (op til 60 sekunder).
9. Bekræft den nye firmware-version i Enhedslisten. Genindlæs din `.dms` indstillingsfil via **Fil > Åbn…**.

> **ADVARSEL:** Afbryd ikke strømforsyningen til hardwareenheden under nogen omstændigheder. Hvis der opstår strømsvigt midt i opdateringen, så kontakt DAD support på support@ntp.dk før du aktiverer enheden igen.

### 10.2.4 Firmware Versionshistorik Reference

For en komplet registrering af firmwareversioner, udgivelsesdatoer, og hvad der er ændret i hver udgave, henvises til **Versionshistorik** kompileret dokument:  
`Forskning/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

De aktuelle firmwareversioner for hver hardwarefamilie på tidspunktet for offentliggørelsen (DADman v5.8.2 build 2):

| Hardware familie                                         | Nuværende firmware                                       |
| -------------------------------------------------------- | -------------------------------------------------------- |
| AX64, AX Center, Core 256, MTRX II, Control 01/02        | v1.1.2.4 |
| Dante 256 IPCore (Thunder\¤ Core gen) | v1.0.3.1 |
| AX32, DX32R, Penta 720, Penta 721s, Avid MTRX            | v2.4.6.4 |
| Brooklyn 2 Dante modul                                   | v1.0.3.1 |
| Brooklyn 3 Dante modul                                   | v1.1.0.3 |
| MTRX Studio                                              | v1.1.6.3 |
| MTRX Studio Dante 64 IPCore                              | v1.0.3.1 |
| Dante-kort                                               | v1.0.3.1 |

---

## 10.3 Opdatering Af Dante Firmware

Dante firmware (til Dante moduler og IPCore hardware i DAD enheder) opdateres separat fra hovedboardet firmware brug af **Dante Updater**-værktøjet inden for **Dante Controller** — ikke via DADman.

### 10.3.1 Krav

- **Dante Controller** skal være installeret på computeren. Download fra [audinate.com](https://www.audinate.com).
- DAD-enheden skal være tilsluttet Dante-netværket og synlig i Dante Controller.
- Download den relevante Dante firmware-fil (`.dnt`) fra DAD-supportportalen. Dante firmware-filer er bundtet med hver DADman software udgivelse.

### 10.3.2 Dante Firmware Opdateringsprocedure

1. Åbn **Dante Controller**.
2. Gå til **Device > Dante Updater** for at åbne Dante Updater-værktøjet.
3. I Dante Updater **Avancerede Indstillinger**, aktivér **Tillad Importeret Firmware**. Dette er nødvendigt for at indlæse DAD-leverede firmwarefiler.
4. Vælg fanen **Bibliotek** i Dante Updater og klik på **Importerede filer**.
5. Importer `.dnt` firmware-filerne hentet fra DAD-supportportalen ved at klikke på **Importér**.
6. Gå tilbage til fanen Dante Updater **Hjem** og vælg **Importerede Firmware-filer** fra firmware-kildevælgeren.
7. Vælg den DAD enhed, der skal opdateres fra enhedslisten.
8. Følg anvisningerne på skærmen for at starte opdateringen.
9. Vent til opdateringen er færdig. Dante-modulet genstarter automatisk.

> **BEMÆRK:** Brooklyn 3 Dante modul brugere: fra firmware v1.1.0.3 (udgivet januar 2026), Brooklyn 3 understøtter **ST 2110** protokol uden DDM (Dante Domain Manager). Dette kræver både den opdaterede Dante firmware og den nyeste version af Dante Controller. Se udgivelsesbemærkningerne for detaljer.

---

## 10.4 Opdatering af Thunderbolt 3 Driver

- Gælder kun for AX64, AX Center, Core 256 brugere. Spring over for Ethernet-hardware.\*

DAD Thunderbolt 3 driver (DADDriverSetup) opdateres separat fra DADman. Driveropdateringer frigives sammen med firmwareopdateringer, når Thunderbolt funktionalitet forbedringer er inkluderet.

### 10.4.1 macOS — Fører-opdateringsprocedure

> **BEMÆRK:** På macOS skal den gamle driverversion fjernes, før den nye installeres. Installation over en eksisterende driver uden at fjerne den først resulterer ikke i en korrekt fungerende driver på macOS Sequoia eller senere.

1. Download det nye Thunderbolt 3 driverinstallationsprogram (`.pkg`) fra [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Find **DADDriverSetup.app** i din Applikationsmappe.
3. Flyt den til papirkurven (\*\*Højreklik > Flyt til papirkurven \*\*). macOS viser en advarsel om, at systemets udvidelse vil blive fjernet — bekræft for at fortsætte.
4. Kør den nye driver installatør: dobbeltklikke på den downloadede `.pkg` og følg på skærmen prompter.
5. Godkend den nye systemudvidelse under **Systemindstillinger > Privatliv og Sikkerhed**.
6. Genstart computeren, når du bliver spurgt.
7. Efter genstart åbnes **DADDriverSetup** fra Applikationer og versionsnummeret bekræftes.
8. Tilslut din Thunders Core hardware og bekræft, at den vises i \*\* Audio MIDI Setup \*\*.

### 10.4.2 Windows — Fører-opdateringsprocedure

1. Download det nye ASIO driverinstallatør (`.msi`) fra [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Afslut alle lydprogrammer ved hjælp af ASIO driver.
3. Åbn **Indstillinger > Apps** (eller **Kontrolpanel > Programmer**) og afinstaller den eksisterende DAD Thunderbolt 3 ASIO driver.
4. Genstart computeren.
5. Kør det nye driverinstallatør (`.msi`) og følg instruktionerne på skærmen.
6. Åbn din lydapplikation og bekræft at den opdaterede driverversion er synlig i ASIO-enhedsindstillingerne.

### 10.4.3 Aktuelle Driver Versioner

| Chauffør                                                           | Platform | Nuværende version                      |
| ------------------------------------------------------------------ | -------- | -------------------------------------- |
| DAD Thunderbolt 3 Core Audio Driver (DADdriver) | macOS    | v1.2.2 |
| DAD Thunderbolt 3 ASIO Driver                                      | Vinduer  | v1.1.2 |

_Nuværende fra DADman v5.8.2 bygget 2 (Januar 2026)._

---

## 10.5 Verificering af aktuelle software- og firmwareversioner

### 10.5.1 DADman Version

- **macOS:** **DADman menu > Om DADman**
- **Windows:** **Hjælp > Om DADman**

Dialogen Om DADman viser DADman versionsnummer og bygger. Fra v5.7. , knappen **Kopier oplysninger** kopierer de komplette diagnostiske oplysninger — DADman version, OS-version, liste over tilsluttede enheder og Thunderbolt driverversioner - til udklipsholderen.

### 10.5.2 Hardware Firmware Version

firmware-versionen for hver tilsluttet enhed vises i **Enhedsliste** sammen med enhedens navn og ID. Hold musen over firmwareversionsfeltet for yderligere detaljer, hvis det er muligt.

### 10.5.3 Thunderbolt Driver Version

Thunderbolt driverversionen er inkluderet i **Om DADman > Kopier information** output _(v5.7.2 og senere)_. Den kan også findes i **DADDriverSetup** (macOS) eller ASIO driverkonfigurationsdialogen (Windows).

### 10.5.4 Udgivelsesnoter og opdateringshistorik

Alle udgivelsesnoter arkiveres hos [digitalaudiosupport.com](https://www.digitalaudiosupport.com) i Download Center. En kompileret version historie vedligeholdes også:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

---

## 10.6 Rengøring

**Rengøringsmaterialer:** Brug kun en blød, tør klud til at rense front- og bagpanelerne og indkapslingen af alle DAG-hardware. Må ikke anvendes:

- Flydende rengøringsmidler, opløsningsmidler og rengøringsmidler af enhver art
- Slibende klude eller slibepuder
- Komprimeret luft rettet mod ventilationsåbninger eller konnektoråbninger

**Forbindelser:** Indsæt ikke objekter i konnektoråbninger til rengøringsformål. Hvis et stik fremstår forurenet, kan du konsultere kvalificeret servicepersonale.

> **ADVARSEL:** Afbryd enheden fra nettets strømforsyning før rengøring. Ingen væske må trænge ind i kabinettet gennem ventilationsåbninger eller konnektoråbninger.

**Skærme og skærme:** Enheder med LCD-skærme på frontpanelet (AX Center, MTRX Studio) kan rengøres med en blød, tør klud. Brug ikke rengøringsvæsker på skærmen.

**Frekven:** Kontroller og rengør forpanelet og ventilationsåbninger som led i en regelmæssig vedligeholdelsesplan — mindst en gang om året i et rent studiemiljø oftere i miljøer med forhøjet støv niveauer.

---

## 10.7 Opbevaring

Hvis en hardwareenhed skal lagres i en længere periode (mere end et par uger), bør følgende betingelser opretholdes:

| Parameter       | Tilstand                                                                                                                                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Temperatur**  | −20°C til +60°C (-4°F til +140°F)                                                                                                                                                                               |
| **Fugtighed**   | 10% til 80% relativ luftfugtighed, ikke-kondenserende                                                                                                                                                                              |
| **Emballage**   | Opbevares i den originale emballage, hvis det er tilgængeligt. Hvis den originale emballage ikke er tilgængelig, skal der anvendes antistatisk emballage til eksponerede kredsløbskort eller konnektorgrænseflader |
| **Orientering** | Opbevar rackmonteringsenheder vandret med frontpanelet opad                                                                                                                                                                        |
| **Strøm**       | Afbryd opkoblingen fra elnettet før lagring                                                                                                                                                                                        |

> **BEMÆRK:** Lad enheden opnå stuetemperatur, før den tændes efter opbevaring under kolde forhold. Strøm på en kold enhed i et varmt miljø kan medføre, at kondens dannes på interne komponenter.

---

## 10,8 End-of-Life og bortskaffelse

DAG/NTP-teknologihardware og tilhørende kabler er omfattet af det europæiske WEEE-direktiv (affald af elektrisk og elektronisk udstyr, Direktiv 2012/19/EU) og tilsvarende nationale og regionale bestemmelser.

**Bortskaf ikke dette udstyr i usorteret husholdningsaffald.**

Ved afslutningen af livet skal udstyret være:

- Returneres til en godkendt forhandler eller distributør med henblik på genanvendelse, eller
- Leveres til et godkendt lokalt indsamlingspunkt, eller
- Returneret til DAD / NTP-teknologi for korrekt bortskaffelse

Kontakt DAD / NTP-teknologi til bortskaffelsesvejledning:  
E-mail: info@digitalaudio.dk  
Web: www.digitalaudio.dk

WEEE symbolet (krydset wheelie bin) på produktet eller dets emballage identificerer det som underlagt separate indsamlingskrav. Se også [Forrest, afsnit FM.8 — Bortskaffelse og WEEE].

---

_[Afventer DAD-teknik:]_  
_— Per-model bekræftet drifts- og opbevaringstemperatur/fugtighedsområde (værdier ovenfor er indikativ)_  
_— Ventilatorfilter rengøringsinterval og procedure for enheder med udskiftelige ventilatorfiltre (hvis relevant)_  
_— Sikringstype og udskiftningsprocedure pr. hardwaremodel (skal tilføjes pr. model i givet fald)_
