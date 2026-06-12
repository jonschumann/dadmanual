---
id: ch03-installation
title: "Kapitel 3 — Anlæg"
sidebar_label: "Ch. 3 — Anbringelse"
sidebar_position: 5
slug: /installation
---

# Kapitel 3 — Anlæg

> **Dokument:** DADman Brugervejledning  
> **Software version dækket:** DADman v5.8.1.  
> **TB3 Driver version dækket:** Seneste — se Download Centre på digitalaudiosupport. om  
> **Kapitel status:** Udkast v0.1 — Afventer teknisk gennemgang af DAD engineering  
> **Sidst opdateret:** Juni 2026

---

## I Dette Kapitel

Dette kapitel dækker alt, hvad der kræves for at installere og konfigurere DADman og dens tilhørende driver software på din computer. Det er organiseret med henblik på førstegangsinstallation; hvis du opgraderer en eksisterende installation, se [Kapitel 10, Afsnit 10.1 — Opdatering af DADman og Firmware].

| Afsnit              | Dækker                                                            | Relevant for                                    |
| ------------------- | ----------------------------------------------------------------- | ----------------------------------------------- |
| 3.1 | Installations oversigt                                            | Alle brugere                                    |
| 3.2 | Opnåelse af softwaren                                             | Alle brugere                                    |
| 3.3 | Installerer DADman                                                | Alle brugere                                    |
| 3.4 | Installation af Thunderbolt 3 driver                              | AX64, AX Center, Core 256, Avid MTRX serie kun  |
| 3.5 | Indstil Thunderbolt 3 driveren                                    | AX64, AX Center, Core 256, Avid MTRX serie kun  |
| 3.6 | macOS Sequoia: yderligere sikkerhedskonfiguration | macOS 15 (Sequoia) og senere |
| 3.7 | Indstilling af netværksforbindelsen                               | Alle Ethernet-forbundne brugere                 |
| 3.8 | Verificerer installationen                                        | Alle brugere                                    |

---

## 3.1 Installationsoversigt

### 3.1.1 Softwarekomponenter

DADman og DAD Thunderbolt 3 driver er **to separate, uafhængige applikationer**. Uanset om du har brug for både - eller kun DADman - afhænger af, hvordan din hardware forbinder til computeren.

| Komponent                    | Formål                                                                                                                                                             | Påkrævet for                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **DADman**                   | Konfigurerer og styrer alle tilsluttede DAD, NTP og Avid hardware enheder over Ethernet                                                                            | Alle understøttede hardware                          |
| **DAD Thunderbolt 3 driver** | Eksponerer Thunders kerne interface som en kerne Lydenhed (macOS) eller ASIO enhed (Windows) til DAW og lyd applikation brug | AX64, AX Center, Core 256 og Avid MTRX produkter kun |

> **BEMÆRK:** Thunderbolt 3-driveren giver lyden _transport_ mellem din computer og hardware - din DAW ser det som en lydgrænseflade. DADman sørger for _control_ laget — routing, gain, overvågning og konfiguration. Begge kan installeres og køres på samme computer samtidigt uden konflikt.

Hvis din hardware kun forbinder til computeren over Ethernet (for eksempel en AX32, DX32R eller Penta enhed), behøver du kun DADman.

### 3.1.2 Forbindelse Topologi

DADman kommunikerer med alle tilsluttede enheder over computerens netværk ved hjælp af Ethernet (IP) protokollen, uanset om disse enheder også forbinder via Thunderbolt 3. Se [Afsnit 3.7 — Konfiguration af netværksforbindelsen] til vejledning før installation.

---

## 3.2 Optagelse af softwaren

### 3.2.1 DAD- og NTP-hardwarebrugere

Download DADman og Thunderbolt 3-driveren fra DAD-supportportalen:

**[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)**

En gratis DAD / NTP-teknologi konto er nødvendig for at få adgang til Download Center. Hvis du ikke har en konto:

1. Gå til supportportalen og vælg **Opret konto**.
2. Udfyld registreringsformularen.
3. Når du har verificeret din e-mailadresse, skal du logge ind og navigere til **Download Centre**.
4. Find DADman-posten til dit operativsystem og download installatøren.
5. Hvis din hardware er et Thunders kerneprodukt (AX64, AX Center eller Core 256), skal du også downloade Thunderbolt 3 driveren til dit operativsystem.

> **BEMÆRK:** Kontrollér altid udgivelsesbemærkningerne i Download Center, før du installerer. Udgivelsesnoter dokumentere de testede OS-versioner, eventuelle kendte problemer med nye OS udgivelser, og firmware kompatibilitetskrav for den DADman version.

### 3.2.2 Avid Hardwarebrugere

Hvis du bruger DADman sammen med et Avid MTRX, MTRX II eller MTRX Studio:

1. Log ind på din **Avid Master Account** på [https://avid.com](https://avid.com).
2. Naviger til dine downloads og find den DADman version godkendt til din Avid hardware.
3. Download installationsprogrammet fra din Avid konto.

> **BEMÆRK:** Avid-godkendte DADman-versioner kan afvige fra den nyeste version tilgængelig på DAD-supportportalen. Brug altid Avid Master Account version til Avid hardware for at sikre kompatibilitet.

---

## 3.3 Installerer DADman

### 3.3.1 macOS

**Før du begynder:** Sørg for at du er logget ind på en konto med administratorrettigheder. Afslut alle lydprogrammer, der kan køre.

1. Find den downloadede DADman installationsfil (`.pkg` format) og dobbeltklik på den for at starte installationsprogrammet.
2. Læs licensaftalen og klik på **Fortsæt**, derefter **Accepter** for at acceptere.
3. Click **Install**. Når du bliver bedt om det, skal du indtaste din administrator adgangskode og klikke på **Installer Software**.
4. Klik på **Luk** når installationen er færdig.
5. Gå til din **Programmer** mappe og bekræft, at **DADman.app** er til stede.

DADman er nu installeret. Start ikke det endnu, hvis du har brug for at installere Thunderbolt 3 driveren — gå videre til [Afsnit 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

Hvis din hardware kun forbinder over Ethernet, kan du starte DADman nu. Fortsæt til [Afsnit 3.7 — Konfiguration af netværksforbindelsen](#37-configuring-the-network-connection).

### 3.3.2 Vinduer

**Før du begynder:** Sørg for at du er logget ind på en konto med administratorrettigheder. Afslut alle lydprogrammer, der kan køre.

1. Find den downloadede DADman installationsfil (`.exe` eller `.msi` format) og dobbeltklik på den.
2. Hvis der vises en prompt til brugerkonti, klik på **Ja** for at tillade installationsprogrammet at køre.
3. Følg installationsprogrammets prompter, klik på **Næste** i hvert trin.
4. Klik på **Installér** for at starte installationen.
5. Klik på \*\*Afslut \*\* når installationen er færdig.
6. Bekræft at DADman vises i menuen Start .

Hvis din hardware kun forbinder over Ethernet, fortsæt til [Afsnit 3.7] (#37-configuring-the-network-connection). Hvis du har brug for Thunderbolt 3 driver, gå videre til [Afsnit 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

---

## 3.4 Installation af Thunderbolt 3 Driver (kun Thunder-kerne Produkter)

> **BEMÆRK:** Dette afsnit gælder kun, hvis din hardware er et AX64, AX Center, Core 256 eller et Avid MTRX produkt. Hvis din hardware kun opretter forbindelse til computeren over Ethernet skal du springe til [Afsnit 3.7](#37-configuring-the-network-connection).

DAD Thunderbolt 3 driver gør det muligt at vise din Thunders kerne interface som en lydenhed i macOS Core Audio (synlig i \*\* Audio MIDI Setup \*\*) eller som en ASIO enhed i Windows, gør det tilgængeligt for din DAW og andre lydprogrammer. Installation af chaufføren påvirker ikke DADmans evne til at kommunikere med enheden over Ethernet - disse er uafhængige forbindelsesstier.

> **BEMÆRK:** Forbind ikke din Thunder\ Core hardware til computerens Thunderbolt port, indtil driverinstallationsproceduren instruerer dig om at gøre det.

### 3.4.1 macOS

**Før du begynder:** Sørg for at du kører macOS 11 Big Sur eller senere. Sørg for, at DADman v5.6.7.1 eller senere allerede er installeret (se [Afsnit 3.3.1](#331-macos)).

1. Find det downloadede Thunderbolt 3 driverinstallatør (`.pkg` format) og kopier det til din skrivebord.
2. Dobbeltklik på filen `.pkg` for at starte installationsprogrammet.
3. Følg instruktionerne på skærmen. Klik **Næste**, derefter **Installér**.
4. Indtast din administrator adgangskode, når du bliver bedt om det, og klik på **Installer Software**.
5. Hvis dette er første gang, driveren er installeret på denne computer, vil macOS vise en **"System Extension Blocked"** notifikation.
   - Klik på **Åbn sikkerhedsindstillinger** (eller **Åbn systemindstillinger** på macOS Ventura og senere).
6. I ruden **Privatliv og Sikkerhed**:
   - Klik på låseikonet i bunden af vinduet og indtast din adgangskode for at låse op for indstillinger.
   - Klik **Tillad** ved siden af den blokerede udvidelse fra Digital Audio Denmark / NTP-teknologi.
7. Når du bliver bedt om det, skal du klikke på **Genstart** for at genstarte computeren.

> **BEMÆRK:** Meddelelsen "System Extension Blocked" er en normal del af førstegangsinstallation på macOS. Det er ikke en fejl. Udvidelsen skal være tilladt, før føreren vil fungere.

8. Efter genstart skal du åbne **DADDriverSetup** fra din Applikationsmappe.
9. Tilslut din Thunders Core hardware til computerens Thunderbolt 3 eller USB-C port ved hjælp af et 20 Gbps-vurderet kabel.

Chaufføren er nu installeret. Fortsæt til [Afsnit 3.5.1](#351-macos-daddriversetup) for at konfigurere driverindstillingerne.

> **BEMÆRKNING — macOS Sequoia (15) og senere:** Apple strammede Thunderbolt tilbehøret sikkerhedstilladelser, der begyndte med macOS Sequoia. Yderligere skridt er påkrævet. Se [Afsnit 3.6 — MacOS Sequoia: Yderligere sikkerhedskonfiguration](#36-macos-sequoia-additional-security-configuration) før fortsættelse.

### 3.4.2 Vinduer

**Før du begynder:** Sørg for at du kører Windows 10 eller Windows 11 (64-bit). Sørg for, at DADman v5.6.7.1 eller senere allerede er installeret (se [Afsnit 3.3.2](#332-windows)).

1. Find det downloadede Thunderbolt 3 driverinstallatør (`.msi` format) og kopier det til din desktop.
2. Dobbeltklik på filen `.msi` for at starte installationsprogrammet.
3. Klik på **Ja**, hvis der vises en prompt til brugerkontokontrol.
4. Følg instruktionerne på skærmen. Klik **Næste**, derefter **Installér**.
5. Klik på \*\*Afslut \*\* når installationen er færdig.
6. Tilslut din Thunders Core hardware til computerens Thunderbolt 3 eller USB-C port ved hjælp af et 20 Gbps-vurderet kabel.

Chaufføren er nu installeret. Fortsæt til [Afsnit 3.5.2](#352-windows-asio-configuration) for at konfigurere driveren i din lydapplikation.

---

## 3.5 Indstil Thunderbolt 3 Driver

### 3.5.1 macOS — DADDriverSetup {#351-macos-daddriversetup}

Applikationen **DADDriverSetup** styrer kanaltællingen og enhedsvalget for Thunderbolt 3-lyddriveren på macOS. Ændringer, der foretages her, afspejles straks i \*\* Audio MIDI Setup\*\* og er synlige for enhver Core Audio-kompatibel applikation på computeren.

> **BEMÆRK:** Thunderbolt audio-driveren kan konfigureres både indefra DADDriverSetup og direkte fra DADman. Ved normal drift, behøver du ikke at åbne DADDriverSetup for at ændre samplingfrekvensen.

\*\*På macOS er den eneste grund til at åbne DADDriverSetup at ændre antallet af Thunderbolt kanaler, der præsenteres for værten. \* Alle andre parametre kan indstilles indefra DADman.

> **BEMÆRKNING — Intel vs. Apple Silicon Macs:** Apple M1 og nyere computere håndterer 256 tovejs Thunderbolt kanaler uden problemer. På Intel-baserede Mac'er systemets ydeevne kan drage fordel af at reducere kanaltællingen, hvis din arbejdsgang ikke kræver de fulde 256 kanaler — især ved højere prøvehastigheder eller med store CPU-belastninger.

**For at ændre kanaltælling:**

1. Åbn **DADDriverSetup** fra din mappe.
2. Sikre, at din Thunders Core hardware er tilsluttet og tændt.
3. Indstil følgende indstillinger:

| Parameter          | Indstillinger                                                                                                  | Noter                                                                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Valg Af Enhed**  | Drop-down liste over tilsluttede Thunder\-Core enheder                                                        | Hvis flere enheder er dag-lænket på Thunderbolt 3 bus, kan hver enhed vælges individuelt                                                                                                                                                             |
| **Prøvehastighed** | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Også konfigurerbar fra DADman; ændringer her afspejles straks i Core Audio                                                                                                                                                                           |
| **Kanaler**        | 16, 64, 128, 256 (tovejs)                                                                   | Alle Thunders kerne grænseflader understøtter 256 bi-directional kanaler i hardware. M1 og senere Macs håndtere 256 kanaler uden problemer. På Intel Macs, reducere denne værdi sænker CPU overhead. |

> **BEMÆRK:** Kanalernes indstilling styrer hvor mange kanaler der er synlige for Core Audio og din DAW. Det påvirker ikke antallet af tilgængelige kanaler internt i DADmans routing matrix.

4. Efter at foretage ændringer, åben **Audio MIDI Setup** (**Programmer > Hjælpeprogrammer > Audio MIDI Setup**) for at bekræfte, at DAD Thunder\¤ Core interface vises med det korrekte format. Det viste format skal matche kanaltællingen og samplingfrekvensen konfigureret i DADDriverSetup.

> **TIP:** Hvis DADDriverSetup åbner, og din forbundne Thunder\ Core enhed vises i indstillingen for enhedsvalg, er Thunderbolt driveren installeret og fungerer korrekt. Dette er den hurtigste måde at bekræfte driver operation på macOS uden at behøve at åbne en DAW.

### 3.5.2 Windows — ASIO-konfiguration {#352-windows-asio-configuration}

Thunderbolt 3 ASIO driver er konfigureret fra dit program ASIO indstillingsdialog.

**For at konfigurere føreren:**

1. Åbn din DAW eller lydapplikation.
2. Vælg **Digital Audio Denmark** som ASIO-driveren i lydenhedens indstillinger.
3. Åbn ASIO konfigurationsdialogen. Indstil følgende parametre:

| Parameter            | Indstillinger                                                                                                  | Noter                                                                                                                                                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Valg Af Enhed**    | Drop-down liste over tilsluttede Thunder\-Core enheder                                                        | Vælg den enhed, der skal bruges som den primære ASIO-enhed                                                                                                                                                        |
| **Buffer Størrelse** | 16, 32, 64, 256, 512, 1024 prøver                                                                              | Start med en stor værdi (512 eller 1024) for at sikre en stabil lydsti; reducer når systemet er bekræftet stabil                                                                               |
| **Prøvehastighed**   | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Kontrolleret af din lydprogram; angivet her for reference                                                                                                                                                         |
| **Kanaler**          | 16, 64, 128 (tovejs)                                                                        | Windows Thunderbolt ASIO driver understøtter maksimalt 128 bi-directional kanaler. Reducer fra maksimale, hvis ikke alle kanaler er nødvendige for at forbedre systemets ydeevne. |

> **TIP:** Hvis ASIO-konfigurationsdialogen åbnes, og din Thunder-kerneenhed vises i indstillingslisten for enhedsvalg, Thunderbolt ASIO driver er installeret og fungerer korrekt. Dette er den hurtigste måde at bekræfte driver operation på Windows uden at behøve at starte lydafspilning.

**Chauffør diagnostik — kun Windows:**

ASIO driverkonfigurationsvinduet omfatter tre real-time performance-indikatorer. Overvåg disse under indledende opsætning, og hvis du oplever lydproblemer:

| Indikator                                                         | Acceptabel Værdi                                           | Hvis udenfor rækkevidde                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ubesvarede IRs** (ubesvarede lydafbrydelser) | 0                                                          | Lydafbrydelser bliver droppet ved at konkurrere Windows-systemprocesser. Forøg bufferstørrelsen eller reducer baggrunds CPU-belastning.                                                                                                                |
| **PCIe Belastning**                                               | Lav procent; skalaer med kanalantal                        | Høje værdier angiver, at PCIe-bussen er mættet. Reducer kanal tælle eller undersøge andre PCIe båndbredde forbrugere.                                                                                                                                  |
| **DPC Latency** (Udskudt Procedure Call)       | Lav (< 500 μs) | Windows OS interrupt scheduling er at indføre latency. Brug en DPC latensanalysator værktøj til at identificere den krænkende driver. Deaktivér Wi-Fi, USB strømstyring eller andre afbrydelsesgenererende drivere som et første trin. |

> **BEMÆRK:** Start med en stor bufferstørrelse (512 eller 1024 prøver), når du først konfigurerer ASIO-driveren. Når systemet er bekræftet til at køre uden at gå glip af afbrydelser, kan du reducere bufferstørrelsen til den laveste stabile værdi for din arbejdsproces.

---

## 3.6 macOS Sequoia: Yderligere Sikkerhedskonfiguration

> \*\*Gælder for: \*\* MacOS 15 (Sequoia) og alle efterfølgende macOS udgivelser  
> **Kilde:** DAD Technical Support Bulletin, Januar 2026

Fra og med macOS Sequoia strammede Apple sikkerhedskontrollen betydeligt for Thunderbolt og USB-tilbehørsforbindelser. Denne ændring påvirker alle Thunderbolt grænseflader fra alle producenter - det er ikke specifikt for DAD hardware eller software.

Hvis du installerer på macOS Sequoia eller senere, skal du udføre følgende trin \*\*ud over \*\* standardinstallationen af driver i [Afsnit 3.4.1](#341-macos).

### 3.6.1 Indstilling Af Tilbehørstilladelser

1. Åbn **Systemindstillinger** (Apple-menu > Systemindstillinger).
2. Naviger til **Privatliv og Sikkerhed**.
3. Rul ned til afsnittet **Tilbehør**.
4. Set the accessory connection permission to enten:
   - **Tillad automatisk nyt tilbehør at forbinde** — anbefales til studiecomputere, der ikke efterlader et kontrolleret miljø
   - **Altid Tillad** — maksimal tilladelse; passende, hvis du forbinder flere forskellige Thunderbolt enheder
5. Godkend ændringen med din adgangskode eller Touch ID, når du bliver bedt om det.

### 3.6.2 Geninstallation af Driver på Sequoia

Hvis du har en tidligere installeret version af Thunderbolt 3-driveren og opgraderer til en ny version på macOS Sequoia:

> **BEMÆRK:** Apples sikkerhedsmodel kræver fjernelse af den gamle driver, før du installerer den nye. Blot at køre den nye installatør over den eksisterende installation vil ikke resultere i en korrekt fungerende driver på Sequoia.

1. Find **DADDriverSetup.app** i din Applikationsmappe.
2. Flyt den til papirkurven (**Højreklik > Flyt til papirkurven** eller træk til papirkurven).
3. macOS vil vise en advarsel om, at udvidelsen af systemet vil blive fjernet. Dette er den forventede og ønskede resultat - klik for at bekræfte fjernelse.
4. Download den seneste Thunderbolt 3-driver fra DAD-supportportalen på [https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com).
5. Installer den nye fører efter proceduren i [afsnit 3.4.1](#341-macos).
6. Når installationsprogrammet er færdig, vil macOS vise en dialog og bede dig om at godkende den nye Thunderbolt forbindelse. Klik **Tillad** (eller tilsvarende) og tillad computeren at genstarte.

Efter genstart, skal din Thunder\ Core hardware forbinde korrekt.

### 3.6.3 macOS Sequoia — Kendt netværksforbindelsesproblem

> **Påvirk:** Alle DADman-versioner på macOS Sequoia; forventes at blive løst i en fremtidig DADman-opdatering  
> **Version noteret:** Som for DADman v5.8.1.6

På macOS Sequoia kan DADman ikke oprette forbindelse til enheder på netværket, når programmet først lanceres. Lydenheder tilsluttet via Thunderbolt 3 er ikke påvirket af dette problem.

**Workaround:**

1. Start DADman og lad den køre, selvom der ikke er nogen enheder på Enhedslisten.
2. Log ud af din macOS brugerkonto (**Apple menu > Log ud**).
3. Log ind på din macOS brugerkonto.
4. DADman vil nu oprette forbindelse til netværksenheder.

> **BEMÆRK:** Indstilling af DADman til at starte automatisk ved login eliminerer behovet for at udføre denne løsning manuelt ved hver start. Se [Kapitel 8 — Avancerede funktioner, afsnit 8.X — Konfiguration af DADman til lancering ved systemstart].

---

## 3.7 Konfiguration af netværksforbindelsen

### 3.7.1 Netværksoversigt

DADman kommunikerer med alle tilsluttede enheder over Ethernet ved hjælp af IP-protokollen. Dette omfatter enheder, der også forbinder til computeren via Thunderbolt 3 - begge forbindelsesstier er aktive samtidigt og tjener forskellige formål (Thunderbolt bærer lyd; Ethernet bærer kontroldata).

DADman bruger computerens netværk til at opdage og kommunikere med hardwareenheder. Indstillingerne for hver enhed gemmes på selve enheden; DADman læser og skriver disse indstillinger over netværksforbindelsen. Hvis netværksforbindelsen går tabt, mister DADman kontrollen over enheden, men lyden passerer gennem enheden uafbrudt.

### 3.7.2 Dedikeret Netværk Stærkt Anbefalet

> **BEMÆRKNING — Netværksisolation:** For pålidelig drift anbefaler DAD kraftigt at bruge et **dedikeret Ethernet-netværk** til DADman-styring. adskilt fra din generelle studie eller facilitet netværk. Deling af kontrolnetværket med Audio over IP trafik (Dante, AES67), EuControl, eller generelle kontor / internet trafik introducerer risikoen for lyd og kontrol udfald.

Anbefalet netværk topologi for en typisk studie installation:

| Netværk                  | Formål                        | Forbindelse til computer                       |
| ------------------------ | ----------------------------- | ---------------------------------------------- |
| Dedikeret kontrolnetværk | DADman ↔️ hardwareenheder     | Dedikeret Ethernet-port / USB–Ethernet-adapter |
| Studio/IP lydnetværk     | Dante / AES67 audio transport | Dedikeret Ethernet-port                        |
| Kontor / internetnetværk | Generel brug af computer      | Wi-Fi eller tredje Ethernet-port               |

Et simpelt system med to enheder (en computer + en hardwareenhed) kan bruge en direkte Ethernet-forbindelse med et enkelt kabel mellem computerens Ethernet-port og enhedens netværksporte — ingen kontakt, der kræves, hvis begge er konfigureret på samme undernet.

### 3.7.3 Ip Adresse Konfiguration

DADman opdager enheder med IP-adresse. Enheder kan konfigureres med enten en statisk IP-adresse eller en DHCP-tildelt adresse, afhængigt af dit netværksmiljø.

**For simple dedikerede netværks-opsætninger** (ingen DHCP-server på kontrolnetværket), konfigurer statiske IP-adresser:

| Enhed                                    | Eksempel på IP-adresse                                       | Subnetmaske                                                   |
| ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Computer (styrer NIC) | 192.168.1.1  | 255.255.255.0 |
| Hardware enhed 1                         | 192.168.1.10 | 255.255.255.0 |
| Hardware enhed 2                         | 192.168.1.11 | 255.255.255.0 |

IP-adresser er indstillet på hardwareenheden ved hjælp af DADman, enhedens frontpanel display, eller en webbrowser interface, afhængigt af hardwaremodellen. Se installationsvejledningen til din specifikke hardwareenhed for instruktioner om indstilling af dens IP-adresse.

> **BEMÆRK:** Efter ændring af IP-adressen på en hardwareenhed, du skal opdatere DADmans liste over enheder for at afspejle den nye adresse, før forbindelsen genoprettes.

**For facilitetsnetværk med en DHCP-server:** Enheder kan konfigureres til at bruge DHCP. Men hvis DHCP-leaser ændres, vil DADman miste styr på enheder på deres tidligere adresse. Tildeling af DHCP-reservationer (faste MAC-til-IP-tilknytninger) på kontakten eller routeren anbefales for at forhindre dette.

---

## 3.8 Verificerer installationen

Når DADman og (hvis relevant) Thunderbolt 3-driveren er installeret og netværket er konfigureret, udføre følgende kontrol for at bekræfte, at installationen er korrekt, før du fortsætter til [kapitel 6 — Kom i gang].

### 3.8.1 Verificering Af DADman

1. Start **DADman** fra din Applikationsmappe (macOS) eller Start menu (Windows).
2. Vent op til 30 sekunder, før enheden opdager at fuldføre.
3. Bekræft at din hardwareenhed vises i **Enhedsliste** øverst i DADman- vinduet.
4. Bekræft at enhedens nuværende firmwareversion vises og matcher dine forventninger.

Hvis der ikke forekommer nogen anordninger, se [Kapitel 9 — Fejlfinding, Afsnit 9.2 — Net- og tilslutningsproblemer].

### 3.8.2 Verificering af Thunderbolt 3 Driver (macOS)

1. Åbn **Audio MIDI Setup** (**Programmer > Hjælpeprogrammer > Audio MIDI Setup**).
2. Bekræft at grænsefladen **DAD Thunder** vises i listen over enheder til venstre.
3. Bekræft at det viste format (f.eks. "256 ch, 48000 Hz") matcher de indstillinger, der er konfigureret i DADDriverSetup.

Hvis grænsefladen ikke forekommer, bekræft

- Enheden er tændt og tilsluttet via et 20 Gbps-rated Thunderboltkabel.
- Systemudvidelsen var tilladt i **Privatliv og Sikkerhed** (se [Afsnit 3.4.1](#341-macos), trin 6).
- Hvis på macOS Sequoia: Tilbehør tilladelsen er indstillet korrekt (se [Afsnit 3.6.1](#361-setting-accessory-permissions)).

### 3.8.3 Verificering af Thunderbolt 3 Driver (Windows)

1. Åbn din DAW eller lydapplikation.
2. I indstillingerne for lydenheden skal du bekræfte, at **Digital Audio Denmark** kan vælges som ASIO-driveren.
3. Åbn ASIO-konfigurationsdialogen og bekræft at din enhed vises i dropdown for enhedsvalget.
4. Bekræft at **Missed IRs**-tælleren læser **0** efter et par sekunders tomgang.

---

## Oversigt over installerede filer

| Fil / Program        | Platform | Placering                        | Formål                                                   |
| -------------------- | -------- | -------------------------------- | -------------------------------------------------------- |
| `DADman.app`         | macOS    | `/Applications/`                 | Hoved kontrolprogram                                     |
| `DADman.exe`         | Vinduer  | `C:\Program Files\DADman\`    | Hoved kontrolprogram                                     |
| `DADDriverSetup.app` | macOS    | `/Applications/`                 | Thunderbolt 3 driver konfiguration                       |
| DAD ASIO driver      | Vinduer  | Installeret via `.msi`           | ASIO audio driver til DAW brug                           |
| DAD systemudvidelse  | macOS    | System — ikke brugertilgængeligt | Kerne udvidelse aktiverer Thunderbolt 3 Core Audio enhed |

---

## Krydsreferencer

- **Kapitel 1 — Introduktion:** Arkitektur overblik; forståelse, hvordan DADman, TB3-driveren og netværkskommunikation
- **Kapitel 2 — Systemkrav:** OS-kompatibilitet og mindstekrav til hardware
- **Kapitel 6 — Kom i gang:** Første trin efter installation — tilslutning til enheden og verifikation af signalet
- **Kapitel 9 — Fejlfinding:** Diagnostiske trin, hvis installationen ikke er gennemført, eller hvis enhederne ikke er opdaget
- **Kapitel 10 — Vedligeholdelse:** Opdatering af DADman og firmware

---

_[Pladsholder: figurer, der skal indsættes — TB3 driver installation screenshots (macOS og Windows), DADDriverSetup konfigurationsvindue, Audio MIDI Setup viser skærmen DAD interface, macOS Privacy & Security / Accessories , Windows ASIO dialog]_

_[Afventer fra DAD engineering: fuld firmware update procedure cross-reference, bekræftet IP adressering instruktioner per hardware model]_
