---
title: "Tillæg"
sidebar_label: "Tillæg"
sidebar_position: 13
---

# Tillæg

> **Dokument:** DADman Brugervejledning  
> **Kapitel status:** Kladde v0. — App G (Ordliste) komplet; App E (Changelog) kompileret kildelæsning; Apps A, B, C, F afventende DAD engineering og lovlig; App H (Indeks) til at generere fra slutdokument  
> **Sidst opdateret:** Juni 2026

---

## Tillæg A — Tekniske Specifikationer

Dette tillæg indeholder komplette tekniske specifikationer for alle DADman-kontrollerede hardware i den aktuelle aktive produkt lineup. Specifikationer er indkøbt fra officiel DAD produkt dokumentation. Alle kanaltællinger afspejler maksimale tal ved den angivne prøvehastighed; de faktiske tal afhænger af de installerede ekspansionskort.

> **BEMÆRK:** AX32 (BASE1/BASE2) er ikke længere i aktiv produktion og er ikke inkluderet her. Se håndbogen til AX32 for ældre specifikationer.

---

### A.1 AX Center (AXCNTR-BASE)

**Produktoversigt:** Kompakt 1U, 2-slot modulær lydgrænseflade med indbygget analog I/O. Ideel som et studie center for optagelse, monitor control, og fordybende lydprogrammer. Inkluderer onboard Thunderbolt 3, Dante, MADI, og ADAT, med to ekspansionskort slots for yderligere I / O.

#### Routing Matrix

| Ressource                      | Kapacitet        |
| ------------------------------ | ---------------- |
| Routing matrix                 | 1,006 × 1,112    |
| PRO, MON opsummering processor | 512 × 64 kanaler |
| SPQ equalizer                  | 1,024 filtre     |
| Ekspansion kort slots          | 2                |

#### Indbygget I/O

| Grænseflade                            | Kanal antal                                                |
| -------------------------------------- | ---------------------------------------------------------- |
| Mikrofon / Linje / Instrument indgange | 2 (valgbar pr. kanal)   |
| Stereo hovedtelefonudgange             | 2                                                          |
| Stereo monitor outputs                 | 2                                                          |
| Thunderbolt 3                          | 256 ch @ 48 & 96 kHz      |
| Dante AoIP                             | 256 ch @ 48 kHz; 128 ch @ 96 kHz |
| MADI I/O                               | 64 ch @ 48 kHz                                |
| ADAT I/O                               | 16 ch / S/PDIF 2 ch                                        |
| DADlink (via SFP)   | Op til 256 × 256 ch                                        |

#### Analoge Specifikationer

**Hovedtelefonudgang**

| Parameter                                    | Værdi                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Dynamisk rækkevidde                          | > 120 dB                                                                                   |
| THD+N (vægtet)            | < −100 dB @ −3 dBFS                                  |
| Krydsstilk                                   | < -110 dB                                                         |
| Indlæs impedans                              | 18 – 600 Ω                                                                                 |
| Output impedans                              | < 1 Ω.                                            |
| Maks. outputniveau           | Justerbar -80 til +19 dBu (0,1 dB trin)                                 |
| Konvertering latenstid @ 96 kHz | 450 μs (high-res filter) / 150 μs (kort forsinkelse) |

**Analog monitor output**

| Parameter                          | Værdi                                                      |
| ---------------------------------- | ---------------------------------------------------------- |
| Dynamisk rækkevidde                | > 128 dB                                                   |
| THD+N (vægtet)  | < −115 dB @ −3 dBFS  |
| Krydsstilk                         | < −115 dB                         |
| Maks. outputniveau | Justerbar -60 til +24 dBu (0,1 dB trin) |
| Konvertering latenstid             | 450 μs @ 96 kHz                               |

**Mikrofon / instrument input**

| Parameter                                | Værdi                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| Dynamisk rækkevidde                      | > 124 dB                                                               |
| THD+N (vægtet)        | < −115 dB @ −3 dBFS              |
| Krydsstilk                               | < −115 dB                                     |
| Input impedans                           | 2 kΩ (MID) / > 1 MΩ (Instrument) |
| Mikrofon gain rækkevidde                 | −21 til +100 dB (0,1 dB trin)                       |
| Mikrofon EIN (vægtet) | < −131 dBu                                    |
| Konvertering latenstid                   | 350 μs @ 96 kHz                                           |

#### Digital I/O og synkronisering

| Parameter                        | Værdi                                                                                                                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Understøttede prøvetagningsrater | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Internt system ventetid          | 7 prøver (justerbar 3 – 31 prøver)                                                                                                                                              |
| DADlink format                   | 28-bit flydende punkt, nul-prøve latenstid                                                                                                                                                         |
| Synchronisation sources          | Word Ur, Video Black Burst, Dante, ADAT, MADI                                                                                                                                                      |
| Netværksgrænseflade              | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Thunderbolt 3                    | 2 × USB-C, link + 15 W effekt pr. port                                                                                                                                             |

#### Elektriske Specifikationer

| Parameter                                        | Værdi                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------- |
| Maks. netvurdering               | 90 W                                                                |
| Indgangsspænding                                 | 90 – 260 VAC (100 – 240 VAC nominel), 47 – 63 Hz |
| Strøm sikring                                    | 1 A T, IEC-stik monteret                                            |
| Strømforbindelsesled                             | IEC 60309                                                           |
| Digital sektion effekt                           | 15 W                                                                |
| Ekspansion kort effekt (maks) | 30 W                                                                |
| Thunderbolt effekt (maks)     | 2 × 15 W                                                            |

#### Mekaniske Specifikationer

| Parameter       | Værdi                                             |
| --------------- | ------------------------------------------------- |
| Formular faktor | 19" rack mount, 1 RU (44,4 mm) |
| Chassisdybde    | 320 mm / 12,6"                                    |
| Kroppens bredde | 435 mm / 17.2"                    |
| Vægt            | 3.2 kg / 7.1 lbs  |

#### Miljø og overholdelse

| Parameter                        | Værdi                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Driftstemperatur                 | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                |
| Luftfugtighed                    | 20-85 %, ikke kondenserende                                                                                                                                                                                                                                                                                                            |
| EMC overholdelse                 | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Part 15 Subpart B |
| Overensstemmelse med sikkerheden | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                       |

---

### A.2 AX64 (AX64-BASE)

**Produktoversigt:** Høj-kanal-tæller 2U, 8-slot modulær lydgrænseflade. Designet til stort format studie og live applikationer, der kræver omfattende I / O udvidelse. Understøtter valgfri redundant strømforsyning (AX64-RPS).

#### Routing Matrix

| Ressource                      | Kapacitet        |
| ------------------------------ | ---------------- |
| Routing matrix                 | 1,872 × 1,872    |
| PRO, MON opsummering processor | 512 × 64 kanaler |
| SPQ equalizer                  | 1,024 filtre     |
| Ekspansion kort slots          | 8                |

#### Indbygget I/O

| Grænseflade                                      | Kanal antal                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Thunderbolt 3                                    | 256 ch @ 48 & 96 kHz                  |
| Dante AoIP                                       | 256 ch @ 48 kHz; 128 ch @ 96 kHz             |
| MADI I/O                                         | 64 ch @ 48 kHz                                            |
| ADAT I/O                                         | 16 ch / S/PDIF 2 ch                                                    |
| Via ekspansionskort (max)     | Op til 1,024 × 1,024 ch                                                |
| DADlink / MADI via SFP (maks) | Op til 256 × 256 DADlink eller 128 × 128 MADI ch @ 48 kHz |

#### Digital I/O og synkronisering

| Parameter                        | Værdi                                                                                                                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Understøttede prøvetagningsrater | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Internt system ventetid          | 7 prøver (justerbar 3 – 31 prøver)                                                                                                                                              |
| DADlink format                   | 28-bit flydende punkt, nul-prøve latenstid                                                                                                                                                         |
| Synchronisation sources          | Word Ur, Video Black Burst, Dante, ADAT, MADI, DADlink                                                                                                                                             |
| Netværksgrænseflade              | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Thunderbolt 3                    | 2 × USB-C, link + 15 W effekt pr. port                                                                                                                                             |

#### Elektriske Specifikationer

| Parameter                                        | Værdi                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------- |
| Strøm forbindelse                                | Enkelt- eller dobbeltindgang; dobbelt PSU altid monteret            |
| Maks. netvurdering               | 120 W                                                               |
| Indgangsspænding                                 | 90 – 260 VAC (100 – 240 VAC nominel), 47 – 63 Hz |
| Strøm sikring                                    | 1,5 A T, IEC-stik monteret                                          |
| Strømforbindelsesled                             | IEC 60309                                                           |
| Digital sektion effekt                           | 15 W                                                                |
| Ekspansion kort effekt (maks) | 70 W                                                                |
| Thunderbolt effekt (maks)     | 2 × 15 W                                                            |

#### Mekaniske Specifikationer

| Parameter       | Værdi                                             |
| --------------- | ------------------------------------------------- |
| Formular faktor | 19" rack mount, 2 RU (88,9 mm) |
| Chassisdybde    | 345 mm / 13, 6"                                   |
| Kroppens bredde | 435 mm / 17.2"                    |
| Vægt            | 5.5 kg / 12.2 lbs |

#### Miljø og overholdelse

| Parameter                        | Værdi                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Driftstemperatur                 | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                |
| Luftfugtighed                    | 20-85 %, ikke kondenserende                                                                                                                                                                                                                                                                                                            |
| EMC overholdelse                 | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Part 15 Subpart B |
| Overensstemmelse med sikkerheden | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                       |

---

### A.3 Core 256 (CORE256-BASE)

**Produktoversigt:** Kompakt halv-rack-breddeenhed (fuld 1U højde) kombinerer Thunderbolt 3, Dante, MADI og ADAT I/O med en stor intern routing matrix. Monterer i en standard 19" rack via den valgfri C256-2MOUNT-BRACKET (en eller to enheder per 1U). Drevet af 12 V DC.

#### Routing Matrix

| Ressource                      | Kapacitet        |
| ------------------------------ | ---------------- |
| Routing matrix                 | 848 × 848        |
| PRO, MON opsummering processor | 512 × 64 kanaler |
| SPQ equalizer                  | 1,024 filtre     |

#### Indbygget I/O

| Grænseflade                                      | Kanal antal                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Thunderbolt 3                                    | 256 ch @ 48 & 96 kHz                  |
| Dante AoIP                                       | 256 ch @ 48 kHz; 128 ch @ 96 kHz             |
| MADI I/O                                         | 64 ch @ 48 kHz                                            |
| ADAT I/O                                         | 16 ch / S/PDIF 2 ch                                                    |
| DADlink / MADI via SFP (maks) | Op til 256 × 256 DADlink eller 128 × 128 MADI ch @ 48 kHz |

#### Digital I/O og synkronisering

| Parameter                        | Værdi                                                                                                                                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Understøttede prøvetagningsrater | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Internt system ventetid          | 7 prøver (justerbar 3 – 31 prøver)                                                                                                                                              |
| DADlink format                   | 28-bit flydende punkt, nul-prøve latenstid                                                                                                                                                         |
| Synchronisation sources          | Word Ur, Video Black Burst, Dante, ADAT, MADI, DADlink                                                                                                                                             |
| Netværksgrænseflade              | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Thunderbolt 3                    | 2 × USB-C, link + 15 W effekt pr. port                                                                                                                                             |

#### Elektriske Specifikationer

| Parameter                                    | Værdi                                                 |
| -------------------------------------------- | ----------------------------------------------------- |
| Forsyningsspænding                           | 12 V DC                                               |
| DC stik                                      | 5,5 × 2,5 mm tønde (positiv spids) |
| Maks. input strøm            | 5 A                                                   |
| Maks. netvurdering           | 60 W                                                  |
| Digital sektion effekt                       | 15 W                                                  |
| Thunderbolt effekt (maks) | 2 × 15 W                                              |

#### Mekaniske Specifikationer

| Parameter       | Værdi                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------- |
| Formular faktor | Halv-rack bredde, 1 RU (44,4 mm) — kræver C256-2MOUNT-BRACKET til 19" rack |
| Chassisdybde    | 231 mm / 9,1"                                                                                 |
| Kroppens bredde | 211 mm / 8, 3"                                                                                |
| Vægt            | 1.3 kg / 2.9 lbs                                              |

#### Miljø og overholdelse

| Parameter                        | Værdi                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Driftstemperatur                 | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                |
| Luftfugtighed                    | 20-85 %, ikke kondenserende                                                                                                                                                                                                                                                                                                            |
| EMC overholdelse                 | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Part 15 Subpart B |
| Overensstemmelse med sikkerheden | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                       |

---

### A.4 Penta 720 (PENTA720-BASE)

**Produktoversigt:** 2U, 8-slot modulær lydrouter i en 19" sub-rack med hot-swap, front-access udvidelseskort bugter. Designet til udsendelse og medieinstallation. Standard I/O inkluderer 8 stereo AES3 par (16 kanaler) og en MADI port. Valgfri Dante modul (MOD-DANTE-BK3) og dual MADI/DADlink modul (MOD-MADI-DADLNK) tilgængelige. Omfatter ikke Thunderbolt 3.

#### Routing Matrix

| Ressource                      | Kapacitet                                                          |
| ------------------------------ | ------------------------------------------------------------------ |
| Routing matrix                 | 1,424 × 1,424                                                      |
| PRO, MON opsummering processor | 256 × 32 kanaler                                                   |
| Ekspansion kort slots          | 8 (op til 6 analoge kort eller 8 digitale kort) |

#### Indbygget I/O

| Grænseflade                                      | Kanal antal                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------ |
| AES3 I/O                                         | 16 ch @ 48 kHz (8 stereo pairs)                |
| MADI I/O                                         | 64 ch @ 48 kHz                                                    |
| Via ekspansionskort (max)     | Op til 1,024 × 1,024 ch                                                        |
| DADlink / MADI via SFP (maks) | Op til 256 × 256 DADlink eller 128 × 128 MADI/HotLink ch @ 48 kHz |

#### Digital I/O og synkronisering

| Parameter                        | Værdi                                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Understøttede prøvetagningsrater | 44,1 – 384 kHz (AES3, MADI, DADlink); HotLink fast 48 kHz; Dante option 44,1 – 192 kHz |
| Internt system ventetid          | 7 prøver (justerbar 3 – 31 prøver)                                                     |
| DADlink format                   | 28-bit flydende punkt, nul-prøve latenstid                                                                |
| Synchronisation sources          | Word Ur, Video Black Burst, AES11, AES3, MADI, DADlink, HotLink                                           |
| Netværksgrænseflade              | 1000BASE-T, RJ45                                                                                          |

#### Elektriske Specifikationer

| Parameter                                        | Værdi                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------- |
| Strøm forbindelse                                | Dobbelt input, dobbelt PSU                                          |
| Maks. netvurdering               | 90 W                                                                |
| Indgangsspænding                                 | 90 – 260 VAC (100 – 240 VAC nominel), 47 – 63 Hz |
| Strøm sikring                                    | 1 A T, IEC-stik monteret                                            |
| Strømforbindelsesled                             | IEC 60309                                                           |
| Digital sektion effekt                           | 15 W                                                                |
| Ekspansion kort effekt (maks) | 65 W                                                                |

#### Mekaniske Specifikationer

| Parameter       | Værdi                                             |
| --------------- | ------------------------------------------------- |
| Formular faktor | 19" rack mount, 2 RU (88,9 mm) |
| Chassisdybde    | 350 mm / 13, 8"                                   |
| Kroppens bredde | 435 mm / 17.2"                    |
| Vægt            | 5.0 kg / 11.0 lbs |
| Køling          | 2 × interne ventilatorer                          |

#### Miljø og overholdelse

| Parameter                        | Værdi                                         |
| -------------------------------- | --------------------------------------------- |
| Driftstemperatur                 | 0 – 45 °C / 32 – 113 °F                       |
| Luftfugtighed                    | 20-85 %, ikke kondenserende                   |
| EMC overholdelse                 | EN 55103-1, EN 55103-2, FCC Part 15 Subpart B |
| Overensstemmelse med sikkerheden | 60950-1:2006 DA               |

---

### A.5 Penta 721S (PENTA721S-BASE)

**Produktoversigt:** Kompakt 2U, single-slot lydkort og router. Inkluderer standard Dante modul og dobbelt MADI/DADlink modul som fabriksmonteret. Designet til udsendelse og medie installation, hvor et mindre fodaftryk er påkrævet. Én ekspansionskort slot for yderligere I / O.

#### Routing Matrix

| Ressource                      | Kapacitet        |
| ------------------------------ | ---------------- |
| Routing matrix                 | 528 × 528        |
| PRO, MON opsummering processor | 256 × 32 kanaler |
| Ekspansion kort slots          | 1                |

#### Indbygget I/O

| Grænseflade                                  | Kanal antal                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------ |
| AES3 I/O                                     | 16 ch @ 48 kHz (8 stereo pairs)                |
| MADI I/O                                     | 64 ch @ 48 kHz                                                    |
| Dante AoIP                                   | 64 ch @ 48 kHz                                                    |
| Via ekspansionskort (max) | Op til 128 × 128 ekstra ch                                                     |
| DADlink / MADI via SFP                       | Op til 256 × 256 DADlink eller 128 × 128 MADI/HotLink ch @ 48 kHz |

#### Digital I/O og synkronisering

| Parameter                        | Værdi                                                                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Understøttede prøvetagningsrater | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fixed 48 kHz; Dante 44.1 – 192 kHz |
| Internt system ventetid          | 7 prøver (justerbar 3 – 31 prøver)                                                                               |
| DADlink format                   | 28-bit flydende punkt, nul-prøve latenstid                                                                                          |
| Synchronisation sources          | Word Ur, Video Black Burst, AES11, Dante, MADI, DADlink, HotLink                                                                    |
| Netværksgrænseflade              | 1000BASE-T, RJ45                                                                                                                    |

#### Elektriske Specifikationer

| Parameter                                        | Værdi                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------- |
| Strøm forbindelse                                | Dobbelt input, dobbelt PSU                                          |
| Maks. netvurdering               | 45 W                                                                |
| Indgangsspænding                                 | 90 – 260 VAC (100 – 240 VAC nominel), 47 – 63 Hz |
| Strøm sikring                                    | 1 A T, IEC-stik monteret                                            |
| Strømforbindelsesled                             | IEC 60309                                                           |
| Digital sektion effekt                           | 15 W                                                                |
| Ekspansion kort effekt (maks) | 15 W                                                                |

#### Mekaniske Specifikationer

| Parameter       | Værdi                                             |
| --------------- | ------------------------------------------------- |
| Formular faktor | 19" rack mount, 2 RU (88,9 mm) |
| Chassisdybde    | 320 mm / 12,6"                                    |
| Kroppens bredde | 435 mm / 17.2"                    |
| Vægt            | 3.3 kg / 7.3 lbs  |
| Køling          | 1 × intern støjdæmpende ventilator                |

#### Miljø og overholdelse

| Parameter                        | Værdi                                         |
| -------------------------------- | --------------------------------------------- |
| Driftstemperatur                 | 0 – 45 °C / 32 – 113 °F                       |
| Luftfugtighed                    | 20-85 %, ikke kondenserende                   |
| EMC overholdelse                 | EN 55103-1, EN 55103-2, FCC Part 15 Subpart B |
| Overensstemmelse med sikkerheden | 60950-1:2006 DA               |

---

### A.6 Juniorkontrol - Controller (JUNIOR-BASE)

**Produktoversigt:** PoE-drevne kompakt styreenhed til direkte hands-on kontrol af DADman Control char@@0 rsquo; char@@1 rsquo; Pack routing forudindstillinger og spande. Tilsluttes via Ethernet direkte til en hvilken som helst Thunder-kerneenhed. Kompatibel med CORE256-BASE, AXCNTR-BASE og AX64-BASE. Opererer uafhængigt af DADman-softwaren, når den er konfigureret.

#### Funktioner

- 6 RGB LED-belyste knapper
- 6 RGB status LEDs
- 6-karakter OLED display per knap
- Direkte IP- forbindelse til Thunder\- Core enhed

#### Specifikationer

| Parameter                              | Værdi                                                                                                                                                                                                                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Netværksgrænseflade                    | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                    | IEEE 802.3af, klasse 0                                                                                                                                                                                                                                               |
| DC effektforbrug                       | 12 V, 5,5/2,1 mm tønde (spids +5 V)                                                                                                                                                                                                                               |
| Strømforbrug (maks) | 2,5 W                                                                                                                                                                                                                                                                                |
| Dimensioner                            | 116 × 48 × 40 mm / 4.6" × 1.9" × 1.6"                                                                                                                                                                                                |
| Vægt                                   | 0.16 kg / 0.35 lbs                                                                                                                                                                                                                                   |
| Driftstemperatur                       | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Luftfugtighed                          | 20-85 %, ikke kondenserende                                                                                                                                                                                                                                                          |
| EMC overholdelse                       | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Overensstemmelse med sikkerheden       | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

### A.7 MOM — Overvågningsmodul (MOM-BASE)

**Produktoversigt:** PoE-drevet fjernskærmscontroller med stort volumenkoder, 10 brugerdefinerbare knapper på tværs af 4 lag (op til 40 funktioner) og ekstern GPI input til footswitch talkback. Tilsluttes via Ethernet til DADman for control af enhver NTP/DAD enhed med PRO char@@0 nbsp; MON kapacitet.

#### Funktioner

- Stor volume roterende encoder med 27-LED ring (0,5 dB opløsning)
- 10 brugerdefinerede nøgler × 4 lag (40 i alt)
- Prækonfigurerede funktioner: 3 højttalersæt, 3 kilder, Talkback, Dim, Cut, referenceniveau
- GPI indgang (3,5 mm mini-jack) til ekstern footswitch

#### Specifikationer

| Parameter                              | Værdi                                                                                                                                                                                                                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Netværksgrænseflade                    | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                    | IEEE 802.3af, klasse 0                                                                                                                                                                                                                                               |
| DC effektforbrug                       | 5 V, 5,5/2,1 mm tønde (spids +5 V)                                                                                                                                                                                                                                |
| GPI input                              | 3,5 mm mini-jack                                                                                                                                                                                                                                                                     |
| Strømforbrug (maks) | 5 W                                                                                                                                                                                                                                                                                  |
| Dimensioner                            | 172 × 110 × 50 mm / 6,8" × 4,3" × 2,0"                                                                                                                                                                                                                                               |
| Vægt                                   | 1.0 kg / 2.2 lbs                                                                                                                                                                                                                                     |
| Driftstemperatur                       | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Luftfugtighed                          | 20-85 %, ikke kondenserende                                                                                                                                                                                                                                                          |
| EMC overholdelse                       | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Overensstemmelse med sikkerheden       | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

## Tillæg B — Forbindelsesstifter

_[Pladsholder: pinout diagrammer for alle stik typer på alle understøttede hardware - XLR, DB25, BNC (MADI), BNC (Word Ur), RJ45, SFP, Thunderbolt 3, USB. Skal leveres af DAD ingeniør.]_

---

## Tillæg C — Understøttede lydformater og -protokoller

Dette tillæg opsummerer lydformater og protokoller understøttet af DADman-kontrolleret hardware, herunder kanal tæller på hver samplingfrekvens. Alle tal er maksimale; de faktiske kanaltal afhænger af de specifikke ekspansionskort installeret i hver enhed.

> **BEMÆRK:** Kanaltal for tidsdivisions-multiplexed interfaces (MADI, ADAT, DADLink) falder med højere samplingfrekvenser, fordi der forbruges mere båndbredde pr. kanal. Dante og AES67 kanaltæller afhænger af netværkskonfiguration og Dante Controller indstillinger.

---

### C.1 MADI (AES10)

MADI er understøttet på alle DAD / NTP-teknologi hardware familier som en ekspansion kort option (Dual MADI card, MADI Module) eller indbygget på udvalgte enheder.

**Kanalkapacitet pr. MADI port:**

| Stikprøve sats                  | Ældre tilstand (56-ch ramme) | Høj hastighed tilstand (64-ch ramme) |
| ------------------------------- | ----------------------------------------------- | ------------------------------------------------------- |
| 44.1 / 48 kHz   | 56 kanaler                                      | 64 kanaler                                              |
| 88.2 / 96 kHz   | 28 kanaler                                      | 32 kanaler                                              |
| 176.4 / 192 kHz | 14 kanaler                                      | 16 kanaler                                              |

**Standard:** AES10-2008 (MADI Serial) og AES10-2003 (MADI-E forlænget).

**Fysiske grænseflader:**

- Koaksial BNC (75 Ω) — maksimal kabellængde ca. 100 m (standardkoax)
- Optisk SFP — multimode eller single-mode fiber afhængigt af SFP-modultypen; op til flere kilometer med single-mode SFP

**Rammehastighed tilstande:**

- **Ældre tilstand:** Rammens længde er fastsat til 48 kHz rammestørrelsen. Ved 88.2/96 kHz, tilstødende kanal par er time-multiplexed (S/MUX2), halvere kanal tæller. Ved 176,4/192 kHz, grupper af fire kanaler er multiplexed (S/MUX4). Kompatibel med størstedelen af MADI-udstyr.
- **Højhastighedstilstand:** Rammens længde følger den faktiske prøvehastighed, hvilket reducerer latenstiden ved 88,2 kHz og derover. Begge ender af MADI-linket skal indstilles til samme tilstand.

> **VIGTIGT:** Begge ender af hver MADI-forbindelse skal bruge den samme Frame Rate mode og Frame Size indstilling. Mismatch vil resultere i ingen lyd- eller urfejl. Verificér indstillinger i fanebladet Conf på begge tilsluttede enheder.

---

### C.2 ADAT (S/PDIF Optical, ADAT Lightpipe)

ADAT optiske grænseflader understøttes på udvalgte DAD hardware udvidelseskort. ADAT bruger S/MUX (prøve multiplexing) til at bære lyd ved højere samplingfrekvenser.

| Stikprøve sats                  | Kanaler (pr. ADAT- port) | Tilstand      |
| ------------------------------- | ----------------------------------------------------------- | ------------- |
| 44.1 / 48 kHz   | 8 kanaler                                                   | Standard ADAT |
| 88.2 / 96 kHz   | 4 kanaler                                                   | S/MUX2        |
| 176.4 / 192 kHz | 2 kanaler                                                   | S/MUX4        |

**Fysisk grænseflade:** TOSLINK optisk stik.

**Standard:** Alesis ADAT optisk protokol.

> **BEMÆRK:** ADAT er ikke defineret over 96 kHz i den oprindelige standard. S/MUX4 understøttelse ved 176.4/192 kHz kræver begge tilsluttede enheder for at understøtte denne udvidelse. Kontroller kompatibilitet med tilsluttet udstyr.

---

### C.3 AES3 (AES/EBU)

AES3 digital lyd bærer to kanaler pr kabel par (et stereo par). DAD hardware giver typisk AES3 I/O via DB25 breakout stik, hver bærer otte stereo par (16 kanaler).

| Stikprøve sats                  | Kanaler pr. AES3-par                  | Kanaler pr. DB25 (8 par) |
| ------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| 44.1 / 48 kHz   | 2                                                     | 16                                                          |
| 88.2 / 96 kHz   | 2 \* (Dobbelttråd / Dobbelttråd)\* | 16                                                          |
| 176.4 / 192 kHz | 2 _(Quad Wire)_                    | 16                                                          |

**Standard:** AES3-2009.

**Fysiske grænseflader:**

- Balanceret XLR (professionel — standard AES3)
- DB25 breakout (via branchens standard TASCAM eller Yamaha pinout ledning)

**High sample rate operation:** Ved 88.2/96 kHz, nogle AES3 implementeringer bruger **Double Wire** (to AES3 par pr. kanal for øget båndbredde). Ved 176.4/192 kHz bruger **Quad Wire** fire par pr. kanal. DADman's AES3 implementering detaljer er hardware-model afhængige - henvises til den hardware installation guide for den specifikke enhed.

---

### C.4 Dante (Audinat)

Dante er en audio-over-IP-protokol, der transporterer lyd over standard Ethernet-infrastruktur. DADman enheder understøtter Dante via ekspansionskort og integrerede moduler.

**Kanalkapacitet ved Dante implementering:**

| Gennemførelse                                                                                             | Maks. kanaler (Tx + Rx) | Typisk hardware                                        |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| Dante Expansion Card (Brooklyn 2/3)                                                    | 128 Tx + 128 Rx (per card)              | AX32 · DX32R · Penta 720 · Penta 721s · MTRX · MTRX II |
| Dante 64-Kanal Modul                                                                                      | 64 Tx + 64 Rx                                              | AX32 · Penta 720 · Penta 721s · MTRX                   |
| Dante 256 IPCore _(v5.8.1.6 firmware)_ | 256 Tx + 256 Rx                                            | AX64 · AX Center · Core 256 · MTRX II                  |
| Dante-kort _(standalone)_                                                              | 512 Tx + 512 Rx                                            | Vælg familie 1 enheder                                 |

**Kanaltallene er uafhængige af samplingfrekvenser** — Dante-kanalerne reduceres ikke med højere samplingfrekvenser. I stedet, højere samplinghastigheder forbruge mere netværk båndbredde pr. kanal. Netværkskapaciteten skal være dimensioneret i overensstemmelse hermed.

**Netværk krav:**

- Gigabit Ethernet anbefales til alle Dante installationer
- Dedikeret netværksknap anbefales til lydtrafik
- Skifter skal understøtte multicast (IGMP snooping anbefales)
- PTP (IEEE 1588) bruges til ursynkronisering på tværs af alle Dante-enheder

**Protokoller og standarder:**

- Dante native protocol (Audinate proprietære)
- AES67 interoperabilitetstilstand (reducerer kanaltælling til AES67 grænser)
- ST 2110-30 _(via DDM fra firmware v1.1.2.4; Brooklyn 3 uden DDM fra v1.1.0.3)_

---

### C.5 DADLink

DADLink er en DAD proprietære optisk sammenkobling ved hjælp af mini MADI modul slot med SFP optiske transceivers. Det giver ultra-lav-latens-tid direkte enhed-til-enhed sammenkobling.

| Stikprøve sats                  | Kanaler pr. DADLink- forbindelse |
| ------------------------------- | ------------------------------------------------ |
| 44.1 / 48 kHz   | 128                                              |
| 88.2 / 96 kHz   | 64                                               |
| 176.4 / 192 kHz | 32                                               |

**Latency:** Ca. 1 mikrosekund (effektivt nul — alle indgange og udgange på tværs af DADLink-tilsluttede enheder er fase-justeret forudsat at uret er korrekt).

**Fysisk grænseflade:** Optisk SFP — kompatible SFP-transceiver-moduler, der kræves i begge ender.

**Kompatibel hardware:** AX64 · AX Center · Core 256 · MTRX II · AX32 · DX32R · Penta 720 · Penta 721s _(familie 1 fra firmware v2. .1.2)_

**Synkroniseringskrav:** DADLink-forbundne enheder skal dele et fælles ur. Brug DADLink eller Word-ur som synkroniseringskilden mellem enheder.

---

### C.6 Thunderbolt 3 (Thunder\¤ Kerne)

Thunderbolt 3 audio I/O understøttes udelukkende på Thunders Core generation hardware (AX64, AX Center, Core 256) via DAD Thunderbolt 3 driver.

| Hardware      | Thunderbolt 3 kanaler | Noter              |
| ------------- | --------------------- | ------------------ |
| **AX64**      | 64 Tx + 64 Rx         | Ved 44, 1 / 48 kHz |
| **AX Center** | 128 Tx + 128 Rx       | Ved 44, 1 / 48 kHz |
| **Kerne 256** | 256 Tx + 256 Rx       | Ved 44, 1 / 48 kHz |

**Ved højere samplinghastigheder:** Thunderbolt 3 kanalantallet reducerer proportionalt. Ved 88.2/96 kHz tæller halvdel; ved 176.4/192 kHz de kvartal.

**Chauffør:**

- macOS: Core Audio driver (DADDriverSetup) — aktuel version v1.2.2
- Windows: ASIO driver — aktuel version v1.1.2

**Kabel:** Certificeret Thunderbolt 3 kabel bedømt til 20 Gbps minimum. Passive kabler understøtter op til ca. 0,5 m; aktive optiske kabler understøtter længere kørsler.

---

### C.7 AES67 og ST 2110-30

AES67 og ST 2110-30 er IP audio standarder understøttes via Dante og Ravenna grænseflader på kompatible DAD hardware.

| Standard            | Transport                     | Kanal antal                                      | Tilgængelig fra                                                                                                                           |
| ------------------- | ----------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **AES67**           | IP (lag 3) | Op til 512 (netværksafhængig) | Alle Dante-udstyret hardware _(AES67 interoperabilitetstilstand)_                                                      |
| **ST 2110-30**      | IP (lag 3) | Op til 512 (netværksafhængig) | v5.8.2 firmware via DDM; Brooklyn 3 uden DDM fra v1.1.0.3 |
| **Ravenna / AES67** | IP (lag 3) | Op til 512 (netværksafhængig) | Ravenna Card _(v5.8.2 hardware option)_                                                |

\*\* Netværkskrav til ST 2110-30: \*\* Professionel håndterede switches med PTP (IEEE 1588) hardware tidsstempling. IGMP snooping påkrævet. Konsultere SMPTE TR-2110 for netværksarkitekturvejledning.

---

### C.8 Hardware Format Support Matrix

Følgende matrix viser, hvilke formater der er tilgængelige på hver hardware familie som standard eller via ekspansionskort. ✓ = standard / indbygget; E = udvidelseskortindstilling; — = ikke understøttet.

| Formatér                               | AX Centreret | Hovednet 256 | AX64 | AX32 | DX32R | Penta 720 | Penta 721s | MTRX II | MTRX Studio |
| -------------------------------------- | ------------ | ------------ | ---- | ---- | ----- | --------- | ---------- | ------- | ----------- |
| MADI (koaksial)     | E            | E            | E    | ✓    | ✓     | ✓         | ✓          | ✓       | —           |
| MADI (optisk SFP)   | E            | E            | E    | E    | —     | E         | E          | E       | —           |
| ADAT                                   | E            | E            | E    | E    | —     | —         | —          | E       | ✓           |
| AES3 (analogt kort) | E            | E            | E    | E    | ✓     | E         | E          | E       | ✓           |
| Dante                                  | E            | E            | E    | E    | ✓     | E         | ✓          | ✓       | ✓           |
| Dante 256 IPCore                       | ✓            | ✓            | ✓    | —    | —     | —         | —          | ✓       | —           |
| DADLink                                | E            | E            | E    | E    | E     | E         | E          | E       | —           |
| Thunderbolt 3                          | ✓            | ✓            | ✓    | —    | —     | —         | —          | —       | —           |
| Ravenna Kort                           | E            | E            | E    | —    | —     | —         | —          | —       | —           |
| AES67                                  | E            | E            | E    | E    | ✓     | E         | ✓          | ✓       | ✓           |
| ST 2110-30                             | E            | E            | E    | E    | —     | —         | —          | ✓       | —           |
| Ord Ur I/O                             | ✓            | ✓            | ✓    | ✓    | ✓     | ✓         | ✓          | ✓       | ✓           |

_E = kræver ekspansionskort eller modul. Udvidelsesmuligheder varierer efter produktgeneration og tilgængelige kortpladser. Se den specifikke hardware installation guide til slot konfiguration detaljer._

> **BEMÆRK:** Denne matrix afspejler hardware kapaciteter fra DADman v5.8.2 build 2 (Januar 2026). Nye udvidelseskortindstillinger kan indføres i efterfølgende firmware eller hardware revisioner. Tjek [digitalaudiosupport.com](https://www.digitalaudiosupport.com) for den aktuelle produktkonfigurator.

---

## Tillæg D — Tastaturgenveje

Se [Kapitel 7, afsnit 7.10.3] for den fuldstændige henvisning til genvejstaster.

---

## Tillæg E — Ændringslog

Dette appendiks dokumenter DADman software frigiver fra 2019 til den version, der er omfattet af denne manual. Indgange er listet nyeste først. Hver post viser software version, følgesvend firmware versioner, nye funktioner og bemærkelsesværdige fejlrettelser. Kun firmware-udgivelser noteres separat.

Fuldstændige udgivelsesnoter, herunder detaljerede firmwareændringslogs, er tilgængelige i downloadcentret på [digitalaudiosupport.com](https://www.digitalaudiosupport.com).

---

### DADman v5.8.2 build 2 — 2026-01-19 _(Tilbagevendende frigivelse)_

| Komponent                   | Version                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                      | v5.8.2 b2 — macOS 10.13-15, Windows 10/11 |
| TB3 Driver - macOS          | v1.2.2 _(ingen ændring)_               |
| TB3 Driver — Vinduer        | v1.1.2 _(ingen ændring)_               |
| Thunder\ Core firmware      | v1.1.2.4                                  |
| Dante 256 IPCore            | v1.0.3.1                                  |
| Familie 1 firmware          | v2.4.6.4                                  |
| Brooklyn 2 Dante modul      | v1.0.3.1                                  |
| Brooklyn 3 Dante modul      | v1.1.0.3                                  |
| MTRX Studio firmware        | v1.1.6.3                                  |
| MTRX Studio Dante 64 IPCore | v1.0.3.1                                  |
| Dante Card firmware         | v1.0.3.1 _(ny)_        |

**Nyt i DADman:**

- Ravenna kort understøttes nu i DADman
- Dante Card og Ravenna Card: netværk samplingfrekvens er nu konfigurerbar, når SRC er aktiveret
- EuCon: antal meter steget til 16

**Nyt i firmware:**

- Alle Dante firmware opdateret til nyeste versioner
- ST 2110-30 og forbedret AES67 til rådighed for alle Dante implementeringer via DDM
- Brooklyn 3 modul: ST 2110-30 nu tilgængelig uden DDM (kræver nyeste Dante Controller)
- Støtte til nyt Ravenna kort (RAVENNA / AES67 / ST 2110-30)
- Dynaudio Control 02 understøttes nu sammen med Control 01

**Fejlrettelser:**

- macOS: Talkback menu viser ikke den korrekte valgte værdi i Overvåg profil dialog
- EuCon: Kontrolrum niveau ikke genaktiveret efter at have slukket Ref niveau
- macOS: Forbedret Thunderbolt kommunikationsstabilitet
- Forskellige mindre rettelser

---

### DADman v5.8.1 build 6 — 2025-05-01

| Komponent              | Version                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| DADman                 | v5.8.1 b6 — macOS 10.13-15, Windows 10/11     |
| TB3 Driver - macOS     | v1.2.2 _(ingen ændring)_                   |
| TB3 Driver — Vinduer   | v1.1.2 _(ingen ændring)_                   |
| Thunder\ Core firmware | v1.1.1.1                                      |
| Familie 1 firmware     | v2.4.5.1                                      |
| MTRX Studio firmware   | v1.1.5.1 _(ingen ændring)_ |

**Nyt i DADman:**

- **Mikrofon Gain Groups** — multiple mic input kanaler kan linkes, så justering af gain eller mute på en hvilken som helst kanal bevæger alle kanaler i gruppen samtidigt, bevare relative forskydninger mellem kanalerne. Understøttet på alle produkter **undtagen MTRX Studio**. Kræver firmwareopdatering. Phantom power og fase invert er ikke grupperet. Hold Alt/Option for at justere en individuel kanal i en gruppe uden at påvirke andre.
- Styring char@@0 rsquo; Pack: Forudindstillinger for ruter kan nu genbestilles i Routing Forudindstilling dialogen \* (kræver firmware opdatering)\*
- Kontrol char@@0 rsquo; Pack: Udløser status vises nu i Routing Forudindstilling dialogen
- macOS: Enhedsliste kolonner kan sorteres ved at klikke på kolonneoverskrifter

**Fejlrettelser:**

- Kontrol char@@0 rsquo; Pack: Forskellige rettelser til routing forudindstillede dialog
- Windows: Routing Preset meter grafik forbedret
- Windows: Nedbrud ved håndtering af MIDI løst
- macOS: Grafikproblemer på skalerede skærme med store DADman-vinduer
- macOS: Statusfarveopdateringsfejl i routing forudindstillede dialog

---

### Firmware-only release — 2025-01-09

| Komponent              | Version                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| DADman                 | v5.8.0 b8 _(ingen ændring)_               |
| Thunder\ Core firmware | v1.1.0.4 _(fejlrettelse)_ |

**Fejlrettelser i firmware:**

- AX Center: ADC chipset timing fejl, der forhindrede lyd i at passere i nogle tilfælde - fast
- AX Center Dante Card: Ekstern synkronisering til Dante netværkskort ikke konfigureret korrekt — rettet

---

### DADman v5.8.0 build 8 — 2024-12-01

| Komponent              | Version                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| DADman                 | v5.8.0 b8 — macOS 10.13-15, Windows 10/11 |
| TB3 Driver - macOS     | v1.2.2 _(ny)_                          |
| TB3 Driver — Vinduer   | v1.1.2 _(ingen ændring)_               |
| Thunder\ Core firmware | v1.1.0.3                                  |
| Familie 1 firmware     | v2.4.4.1                                  |
| MTRX Studio firmware   | v1.1.5.1                                  |

**Nyt i DADman:**

- **Kontrol char@@0 Pack** — routing preset system til Thunderchar@@1 Core enheder (AX64, AX Center, Core 256) med op til 32 presets pr. enhed, der hver understøtter op til fire switchable input spande. Inkluderer automatisk skift via detektion af signalniveau, AE6 pilot tone integritet og port connectivity triggers. Kræver firmwareopdatering.
- Støtte til CARD-2MADI-SO (720251A) — MADI-kort med tovejs sample rate konvertering
- Overvåg visning: fold-down kontrol vises nu i kolonner, når mange fold-downs er konfigureret
- Windows: Minimum understøttet OS er nu Windows 10 (Windows 7 og 8 understøttes ikke længere)

**Nyt i TB3 Driver (v1.2.2):**

- Når DriverKit udvidelse ikke er korrekt aktiveret, vises instruktioner og et skærmbillede for at guide brugeren
- Når installationen er færdig, og udvidelsen aktiveres, bringer føreren installationsprogrammet til forgrunden og afslutter rent
- Når ingen enhed er tilsluttet: en "Ingen enhed tilsluttet" besked vises i stedet for tomme dropdowns

**Fejlrettelser:**

- Overvåg profil: Indlæsning og annullering af en profil ville ødelægge filen ved næste gemning — fast
- macOS: Rullende artefakter om skalerede skærmopløsninger — faste
- macOS: Nedbrud, da DADman blev åbnet ved at dobbeltklikke på en fil i Finder — fast
- macOS: Sjælden Thunderbolt communication issue — fixed _(også kræver TB3 driveropdatering til v1.2.2)_
- macOS: Åbne fildialoger tillader ikke længere valg af mapper

> **Kendt problem (macOS 15 Sequoia):** DADman kan muligvis ikke oprette forbindelse til netværksenheder ved første start på macOS 15. Workaround: Log ud og log ind igen. Thunderbolt forbindelser påvirkes ikke. Se _Kapitel 9, Afsnit 9.3_.

---

### DADman v5.7.2 build 1 — 2024-09-25

| Komponent              | Version                                                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman                 | v5.7.2 b1 — macOS 10.13-15 (inkl. Sequoia), Windows 10/11 |
| TB3 Driver - macOS     | v1.1.26                                                                                                      |
| TB3 Driver — Vinduer   | v1.1.2 _(ingen ændring)_                                                                  |
| Thunder\ Core firmware | v1.0.6.3                                                                                     |
| Familie 1 firmware     | v2.4.3.1                                                                                     |
| MTRX Studio firmware   | v1.0.4.2                                                                                     |

**Ny hardware support:** Dynaudio Control 01 monitor controller.

**Nyt i DADman:**

- macOS 15 Sequoia support _(kendt problem med netværksforbindelse — se v5.8.0)_
- Understøttelse af Thunderbolt modul 722150B
- Sektionshovedknapper (AD / DA / Mon / Con / Conf) viser nu værktøjstips; klik på et sektionshoved, kollapser eller udvider det afsnit
- "Om DADman" har nu en \*\* Kopier Information\*\* knap — kopier DADman version, tilsluttet enhed liste, OS version og driverversioner til udklipsholderen til brug i supportanmodninger
- "Åbn Seneste profil" menu tilføjet til hovedmenulinjen
- macOS: Overvåg profilvindue er nu resizable; den sidste aktive fane gendannes ved genåbning
- Vinduer: "Minimér til bakke" valgmulighed erstattet af **Vis in**-indstilling med tre muligheder: Kun proceslinje · Proceslinje og statusfelt · Kun statusfelt
- Fase inverter symbol ændret fra "Ph" til "Ø" for at undgå forveksling med phantom power

**Fejlrettelser:**

- Overvåg kortlægningsfejl for EQ-parametre, når der skiftes mellem monitorudgangssæt — fast
- Windows: DADman undladt at starte på nogle systemer på grund af manglende `VCRUNTIME140_1.DLL` — fast
- Windows: Enhedslusning med BitDefender firewall i visse IP-intervaller — fast
- macOS: Fil læse / skrive fejl nu advare brugeren
- MADI output frame rate rapportering korrigeret for DSD over PCM
- Forsinkelsesbehandlingsfejl for kanaler over 16 — rettet

**Nyt i firmware (Thunder\-Core v1.0.6.3):**

- ADAT kanal 3 ved 88.2/96 kHz fix; ADAT PLL og låsning forbedret
- Fejl i DA- kortfasefejl på kanal 8 korrigeret (AX Center analog base board)
- DADLink sample rate output filtrering korrigeret
- Dante: Falsk kort fejlalarm rettet; FPGA overvågning tilføjet
- Understøttelse af Thunderbolt modul 722150B tilføjet

---

### Kun firmware-udgivelse — 2024-03-06

| Komponent          | Version                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------- |
| DADman             | v5.7.0 b1 _(ingen ændring)_               |
| Familie 1 firmware | v2.4.2.2 _(fejlrettelse)_ |

**Fejlfinding:** DigiLink-grænseflade timing og format fejl indført i Family 1 firmware v2.4.1.2 — rettet. Ikke relevant for DAD-mærkevarer hardware.

---

### DADman v5.7.0 build 1 — 2023-11-15

| Komponent              | Version                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| DADman                 | v5.7.0 b1 — macOS 10.13-14, Windows 10/11 |
| TB3 Driver - macOS     | v1.1.26 _(ingen ændring)_              |
| TB3 Driver — Vinduer   | v1.1.2 _(ingen ændring)_               |
| Thunder\ Core firmware | v1.0.5.2                                  |
| Familie 1 firmware     | v2.4.1.2                                  |
| MTRX Studio firmware   | v1.1.3.1                                  |

> **Bemærk:** macOS 10.10 (Yosemite), 10.11 (El Capitan) og 10.12 (Sierra) understøttes ikke længere fra denne version.

**Nyt i DADman:**

- Menulinje og System Tray tilstande: \* DADman kan nu køre i baggrunden med minimal desktop tilstedeværelse. macOS: tre visningstilstande — kun Dock, menulinje og Dock, og kun menulinje (skjuler sig fra Dock; gendan igen med ¤ 1 eller ved at lancere DADman igen). Windows: Systembakketilstand tilføjet — Venstreklik for at vise/skjule; Højreklik for Vis/Skjul/Afslut indstillinger.

_Talkback RAW-tilstand:_ En ny talkback-tilstand hvor talkback kun er aktiv, mens knappen holdes og slutter, når den frigives (push-to-talk). Den tidligere skifte/låsetilstand er stadig tilgængelig. RAW-tilstand gælder for MOM hardware og MTRX Studio frontpanel kontrol; EuCon overflader altid bruge skifte/låsetilstand.

_DADLink for alle produkter:_ DADLink er nu tilgængelig på Family 1 hardware (AX32, DX32, Penta 720, Penta 721s) via firmware v2. .1.2, ud over Thunders kerneenheder.

- Matrix visning forbedringer:\* Maksimal matrix visning størrelse er nu konfigureres i Indstillinger (32×32, 64×64, 128×128 eller 256×256). Værktøjstips om matrix hover viser kanalnumre og etiketter. Trackpad / rullehjul ruller nu matrixvisningen i stedet for hele vinduet. DADLink- portnavne vist i værktøjstips.

_Filhåndtering:_ `.dms` og `.dmprof` filer kan nu åbnes direkte fra Finder eller Windows Stifinder ved at dobbeltklikke. Kommandolinjeåbning understøttet: `open -a DADman settings.dms profile.dmprof` (macOS); `DADman.exe settings.dms profile.dmprof` (Windows). DADman nu løbende gensøger enhed forbindelser snarere end timing ud. Windows: DADman gemmer filer automatisk ved sign-out, nedlukning eller genstart.

**Tastaturgenveje (første formelt dokumenteret i denne udgivelse):**

| Handling                      | macOS      | Vinduer          |
| ----------------------------- | ---------- | ---------------- |
| Fil > Åbn…                    | ŽO         | Ctrl+O           |
| Fil > Gem                     | ● S        | Ctrl+S           |
| Fil > Gem Som…                | ØSTRIG S   | Ctrl+Shift+S     |
| Fil > Åbn Profil…             | ØSTRIG O   | Ctrl+Alt+O       |
| Fil > Importér Profil…        | ØSTRIG I   | Ctrl+Alt+I       |
| Fil > Gem Profil              | ØSTRIG S   | Ctrl+Alt+S       |
| Fil > Gem Profil Som…         | ØSTRIG - S | Ctrl+Alt+Shift+S |
| Fil > Luk Profil              | ØSTRIG W   | Ctrl+Alt+W       |
| Vis hovedvindue               | ⌘⇧1        | —                |
| Enheds Liste                  | ● ● L      | Ctrl+Shift+L     |
| Overvåg Profil                | - M        | Ctrl+Shift+M     |
| Indstillinger / Indstillinger | ⌘,         | Ctrl+            |

**Fejlrettelser:**

- Fast data korruption, når du tilføjer fold-down matricer med mere end 1.024 elementer

---

### DADman v5.6.9 build 1 — 2023-06-14 _(omtrentlig)_

| Komponent              | Version                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| DADman                 | v5.6.9 b1 — macOS 10.10–13, Windows 10/11     |
| TB3 Driver - macOS     | v1.1.26                                                       |
| TB3 Driver — Vinduer   | v1.1.2 _(første officielle udgivelse)_     |
| Thunder\ Core firmware | v1.0.3.4                                      |
| Familie 1 firmware     | v2.3.6.1 _(ingen ændring)_ |

**Nyt i DADman:**

- **Avid MTRX II** føjet til understøttet hardwareliste
- **Klon Indstillinger** — kopier alle indstillinger fra en hardwareenhed til en anden inden for samme familiegruppe. Tre familiegrupper defineret: familie 1 (MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s) Familie 2 (MTRX II · AX64 · AX Center · Core 256), Familie 3 (MTRX Studio)
- **DADLink** — proprietære optisk lydforbindelse til AX64, AX Center, Core 256 og MTRX II via mini MADI modul med SFP optiske transceivers. Op til 128 kanaler ved 48 kHz, 64 kanaler ved 96 kHz, 32 kanaler ved 192 kHz pr. link. Ca. 1 μs latency.
- Windows ASIO driver - første officielle (ikke-beta) udgivelse

---

### DADman v5.6.7 build 1 — 2023-02-06

| Komponent            | Version                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------- |
| DADman               | v5.6.7 b1 — macOS 10.10–12, Windows 10/11 |
| TB3 Driver - macOS   | v1.1.22                                                   |
| TB3 Driver — Vinduer | v1.0.8                                                    |

> **Bemærk:** Støtte Windows 7 faldt fra denne version.

**Nyt i DADman:**

- **DAD AX Center** føjet til understøttet hardware liste
- Windows ASIO driver officielt udgivet (ud af beta)

---

### Kun firmware-udgivelse — 2022-12-05

| Komponent          | Version                                                                            |
| ------------------ | ---------------------------------------------------------------------------------- |
| DADman             | v5.6.5 b1 _(ingen ændring)_     |
| Familie 1 firmware | v2.3.6.1 _(ny)_ |

**Nyt i firmware:**

- Brooklyn 3 Dante modul understøttes nu sammen med Brooklyn 2
- 3G SDI kort reset mekanisme forbedret - korrigerer et timing problem, der kan forhindre SDI kanaler i at aktivere korrekt efter power-up

---

### DADman v5.6.3 build 8/23 — 2022-07-01

| Komponent          | Version                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| DADman             | macOS v5.6.3 b8 · Windows v5.6.3 b23 |
| TB3 Driver - macOS | v1.1.9.4 _(beta)_                 |

**Nye funktioner:**

- **Windows 11** understøttelse tilføjet
- Kilde og output sæt rækkefølge i Monitor Profil konfiguration kan nu omarrangeres efter indledende opsætning
- Windows: DADman søger nu automatisk efter netværksenheder, når netværksforbindelser skifter

**Fejlrettelser:**

- Mørk Tilstand: fold-down etiketter vises nu korrekt

---

### DADman v5.6.2 build 13b — 2022-05-27

| Komponent          | Version                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| DADman             | v5.6.2 b13b — macOS 10.10–12, Windows 7/8/10 _(beta)_ |
| TB3 Driver - macOS | v1.1.9.4 _(første udgivelse — beta)_                  |

**Nye funktioner:**

- **Thunder\¤ Core hardwareunderstøttelse** — første udgivelse, der understøtter AX64, AX Center og Core 256 via Thunderbolt 3
- macOS 12 Monterey support
- Auto-åbn enhedsliste når DADman starter uden tilsluttede enheder
- **Importér profil** føjet til Fil menu — importerer en skærm profil fra en hvilken som helst tilsluttet enhed og anvender en bedst pasform konfiguration til den aktuelle enhed I/O
- Mørk tilstand: fold-down etiket gengivelse forbedret

---

### DADman v5.5.0 build 2 — 2021-06-03

| Komponent | Version                                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.5.0 b2 — macOS 10.10–11 (Intel og Apple Silicon M1), Vinduer - 10 |

**Nye funktioner:**

- **Apple Silicon (M1) native support** — DADman kører indbygget på Apple Silicon uden Rosetta 2-oversættelse
- MOM: Bass management on/off og EQ on/off knapper nu tilgængelig som overdragelig MOM nøgler i PRO\¤ MON

---

### DADman v5.4.5 build 1 — 2021-01-10 / 2021-03-18

| Komponent | Version                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.4.5 b1 — macOS 10.10–11 (Intel), Windows ● 10 |

**Nye funktioner:**

- NTP Penta 721s føjet til understøttet hardware liste _(Januar 2021 build)_
- macOS 11 Big Sur support (kun Intel) _(marts 2021 build)_

---

### DADman v5.4.4 build 2 — 2020-09-30

**Kun fejlrettelser:** Håndtering af basser på flere underudgange; EuCon recall på Avid S6; SPQ konfigurationsfejl indført i v5. .4 b1; MTRX Studio firmware opdatering timing fix.

---

### DADman v5.4.3 build 2 — 2020-08-20

| Komponent | Version                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.4.3 b2 — macOS 10.10–15 _(Catalina ny)_, Windows ¤ 10 |

**Nye funktioner:**

- macOS 10.15 Catalina understøttelse
- Værktøjstips på knapper og knapper i hele DADman interface
- Auto-tildeling af successive kanaler i dialogen Overvåg profilgrupper
- AD / DA / Mon / Con / Conf afsnit udvidet/kollapset tilstand lagret i Indstillinger
- Checkmarks for valgte værdier i popop- menuer
- Advarsel, der vises, når du henter firmware, der er ældre end eller det samme som den aktuelt installerede version
- Peak/hold måling på AD- og DA-kanaler for AX32, Penta og MTRX hardware _(kræver firmware v2.3.2.1 eller nyere)_
- Lange kanaletiketter afkortet med ellipse for at forhindre layoutoverløb

---

### DADman v5.3.4 build 3 — 2019-08-01

| Komponent | Version                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.3.4 b3 — macOS 10.10–14 _(Mojave ny)_, Windows ¤ 10 |

**Nye funktioner:**

- **Port labelling for digital I/O-kort** — each physical port (MADI, Dante, AES3) can be assigned an individual text label; etiketter er gemt i hardwareenheden og vises i matrixvisningen
- DigiLink kort support _(Avid MTRX only — not applicable to DAD hardware)_
- understøttelse af macOS 10.14 Mojave _(kræver ikke længere farveprofilløsning)_
- Hurtigere applikationsstart på macOS; reduceret generel CPU-belastning

---

## Tillæg F — Overensstemmelseserklæringer

Jf. [Front Matter, Section FM.9 — Regulatory Compliance] for CE, FCC, ICES-003, UKCA og RoHS-erklæringer.

_[Afsluttende erklæringer, der skal indsættes af DAD / NTP-teknologi engineering og lovlig før offentliggørelsen.]_

---

## Appendix G — Glossary

Termer er listet i alfabetisk rækkefølge. Hvis et udtryk har en fælles forkortelse, vises indgangen under den fulde form med den bemærkede forkortelse, og en krydshenvisning anbringes i forkortelsens alfabetiske position. DAD produktnavne og varemærkede termer præsenteres som de vises på produktet eller i DADman.

---

**AD tab**
Fanen _Analog til Digital_ i DADman. Viser kanalstrimlen for alle analoge inputkanaler på den/de tilsluttede hardwareenhed(er), leverer kontrolelementer for mic/line input gain, mute, fase invert, phantom power (+48 V), og kanal etiketter. Måling for hvert input vises i denne fane. Se også: _DA-tab_.

**ADAT** (Alesis Digital Audio Tape optisk interface)
En optisk digital audio interface standard sender op til 8 kanaler af lyd ved 44. eller 48 kHz, eller 4 kanaler ved 88,2 eller 96 kHz, over et enkelt TOSLINK fiberoptisk kabel. Understøttet som I/O indstilling på Vælg DAD hardware. Med dobbelt samplingfrekvens er antallet af kanaler halveret — dette er omtalt som _S/MUX_. Se også: _S/MUX_.

**AES3** (AES/EBU)
En professionel afbalanceret digital lydgrænsefladestandard defineret af Audio Engineering Society (AES) og European Broadcasting Union (EBU). Bærer to kanaler af PCM lyd over en enkelt balanceret XLR kabel. Almindeligvis benævnt AES/EBU. Understøttet på DAD hardware som en diskret I/O-format, typisk via DB25 breakout stik bærer flere AES3 par. Se også: _AES67_.

**AES67**
En interoperabilitetsstandard for audio-over-IP (AoIP) defineret af Audio Engineering Society. AES67 definerer et fælles transportlag, der gør det muligt for Dante, Ravenna, WNEU og andre AoIP-implementeringer at udveksle lydstrømme. DAD hardware med Dante eller Ravenna grænseflader kan konfigureres til AES67 tilstand. Se også: _Dante_, _Ravenna_, _ST 2110-30_.

**ASIO** (Audio Stream Input/Output)
En lyddriverarkitektur med lav latenstid til Windows udviklet af Steinberg. DAD Thunderbolt 3 ASIO driver udsætter Thunders kerne grænseflader (AX64, AX Center, Core 256) som ASIO enheder i Windows DAWs. Konfigureret via DAD ASIO driver control panel, som giver buffer størrelse, sample rate, og kanal tæller indstillinger.

**Autoboot**
Konfigurationen af DADman til at starte automatisk, når computeren starter, eventuelt indlæsning af en bestemt indstillingsfil og overvågning af profil uden brugerinteraktion. På macOS opnås autoboot via Login Items eller en AppleScript delay launcher. I Windows, via Windows opstart mappe eller opgave scheduler. Se _Kapitel 8, Afsnit 8.7_.

**AX Center**
En DAD lydgrænseflade i Thunders kerne produktfamilie. Kombinerer ombord A/D og D/A konvertering med en Dante netværk interface og Thunderbolt 3 connectivity. Understøtter op til 128 kanaler over Thunderbolt ved 44.1/48 kHz. Kontrolleret og konfigureret via DADman.

**AX32**
En DAD-lydrouter og konverter. Flagskibets produkt fra Family 1 hardwaregruppen, der understøtter op til 256×256 crosspoint routing via en Ethernet-baseret matrix, med ekspansionskort til MADI, Dante, AES3, analog I/O, SDI og SPQ. Kontrolleret via DADman.

**AX64**
En DAD lydgrænseflade i Thunders kerne produktfamilie. Giver 64 kanaler af Thunderbolt 3 connectivity plus udvidelsesmuligheder for MADI, Dante, AES3 og analog I/O. Kontrolleret via DADman.

**Bucket**
I Control\-Pack routing presets, en _bucket_ er et af op til fire uafhængige inputlag inden for en enkelt routing preset. Hver spand definerer et komplet sæt af kildekanaler, der kan skiftes til den forudindstillede udgange som en enkelt handling. Buckets skiftes manuelt eller automatisk baseret på signaldetektorudløsere. Se også: _Kontrol\-pakke_, \*Forudindstilling For Routing \*, _Udløsning_. Se _Kapitel 8, Afsnit 8.4_.

**CE** (Conformite¤ Europeřenne)
En obligatorisk produktmærkning for varer, der sælges inden for Det Europæiske Økonomiske Samarbejdsområde, angivelse af produktet opfylder alle gældende EU-direktiver vedrørende sikkerhed, elektromagnetisk kompatibilitet og andre reguleringskrav. DAD / NTP-teknologi hardware bærer CE-mærkning. Den fuldstændige overensstemmelseserklæring er tilgængelig fra DAD og gengivet i _tillæg F_.

**Klon / kloning**
En DADman operation, der kopierer alle indstillinger fra en tilsluttet hardware enhed til en anden inden for samme hardware familie gruppe. Kloning udføres via kontekstmenuen Enhedsliste. Enheder skal være i samme familiegruppe. Indstillingerne for I/O-kort, der ikke findes i målenheden, er sat til fabriksstandard. Se _Kapitel 8, Afsnit 8.3_. Se også: _Familiegrupper_.

**Con tab**
fanen _Forbindelser_ i DADman. Viser den fulde crosspoint routing matrix for den tilsluttede enhed, med indgange på den ene akse og udgange på den anden. Blå felter angiver aktive forbindelser. Forbindelser er lavet ved at klikke på crosspoints; flere forbindelser kan gøres samtidigt ved hjælp af Shift + klik for stereo par. Se også: _Crosspoint_, _Routing Matrix_.

**Konf- fane**
fanen _Konfiguration_ i DADman. Giver kontrol over synkronisering parametre (clock kilde, sample rate, Tilpas til), format-specifikke indstillinger (MADI frame rate, Dante konfiguration, AES3 muligheder) og port-niveau konfiguration. Fanebladet Conf varierer efter hardwaremodel og installerede ekspansionskort.

**Control 01 / Control 02**
DAD hardware monitor controllere. Kompakt, dedikeret hardware enheder til hands-on control af DADman monitor funktioner uden at kræve en tredjepart control overflade. Understøttet fra DADman v5.8.2 build 2 (Control 01) og v5.8.2 build 2 (Control 02, indført januar 2026).

**Kontrol char@@0 rsquo; pakke** char@@1 rsquo;
Et routing forudindstillede system til Thunderchar@@1 rsquo; core hardware (AX64, AX Center, Core 256) introduceret i DADman v5.8.0 build 8. Tillader op til 32 routing presets pr. enhed, hver med op til fire input spande, der skifter samtidigt inden for en enkelt lyd prøve. Automatiseret skift baseret på detektering af signalniveau, AE6 pilot tone integritet eller port connectivity status. Se _Kapitel 8, Afsnit 8.4_. Se også: _Bucket_, _Ruteindstilling_, \*trigger \*.

**Kerne 256**
En DAD-lydgrænseflade i Thunder\-kernens produktfamilie. Understøtter op til 256 kanaler over Thunderbolt 3 på 44.1/48 kHz, med omfattende ekspansionskort muligheder. Den største kapacitet medlem af Thunders kerne familie på tidspunktet for offentliggørelsen. Kontrolleret via DADman.

**Kerne lyd**
Apples I/O-lydarkitektur til macOS. DAD Thunders kerne enheder vises som Core Audio enheder, når DAD Thunderbolt 3 Core Audio driver er installeret, gøre dem tilgængelige for ethvert macOS lydprogram. Se også: _ASIO_.

**Crosspoint**
Et enkelt skæringspunkt i DADman-routermatrixen, der repræsenterer en forbindelse mellem et input og et output. Aktivering af en crosspoint ruter signalet fra at input til at output. En blå firkant i fanen Con indikerer en aktiv crosspoint. Flere crosspoints kan dele det samme input (fan-out). Se også: _Con fane_, _Routing Matrix_.

**Cue\¤ Mix**
En zero-latency in-ear monitor mixer funktion i DADman. Tillader individuel hovedtelefon eller IEM blander skal oprettes uafhængigt af hovedkontrolrummet mix. _Afventende dokumentation — kræver DAD engineering input. Se: Kapitel 8, Afventende Dokumentation._

**DA tab**
Fanen _Digital til analog_ i DADman. Viser kanalstrimler for alle analoge udgangskanaler på den/de tilsluttede hardwareenhed(er), hvilket giver kontrol for output-niveau fadere, muter og kanal etiketter. Fanen DA indeholder også den analoge output niveau kalibrering kontrol (dBu justering). See also: _AD tab_.

**DAD** (Digital Audio Denmark)
Mærkenavnet, der anvendes til lydhardware og softwareprodukter udviklet af NTP Technology A/S, en dansk lydteknologi. DAD produkter omfatter AX32, AX64, AX Center, Core 256, DX32R, MOM og DADman control software. Se også: _NTP-teknologi A/S_.

**DADLink**
Et proprietært lydforbindelsesformat udviklet af DAD. Bruger mini MADI modul slot på kompatibel hardware med optiske SFP transceivers. Giver op til 128 kanaler ved 44,1/48 kHz med ca. 1 mikrosekund latens-tid mellem tilsluttede enheder. Kompatibel med AX32, AX64, AX Center, Core 256, DX32R, Penta 720, Penta 721 og MTRX/MTRX II. Se _Kapitel 8, Afsnit 8.6_.

**DADman**
Kontrolprogrammet udviklet af NTP Technology A/S (DAD) til konfiguration, overvågning, og styre alle DAD og NTP Technology hardware produkter, samt Avid MTRX, MTRX II og MTRX Studio audio interfaces. Tilgængelig til macOS og Windows. DADman kommunikerer med tilsluttede enheder over Ethernet (og eventuelt via Thunderbolt 3 for Thunder\¤ Core enheder). Applikationen omfatter kanal strip kontrol (AD, DA, Con, Conf, Mon faner), Enhedslisten, overvåge profil management, routing forudindstillede konfiguration, og præference-indstillinger.

**DAW** (Digital Audio Workstation)
Et softwareprogram, der bruges til optagelse, redigering, blanding og produktion af digital lyd. Pro Tools, Logic Pro, Nuendo, Reaper og Cubase er almindelige eksempler. DADman integrerer med DAWs via Ethernet (EuCon), MIDI, Dante, og Thunderbolt 3.

**dBFS** (decibel i forhold til fuld skala)
En måleenhed for digitalt lydsignalniveau. 0 dBFS er det højest mulige digitale niveau; alle praktiske signalniveauer er negative værdier (f.eks. −18 dBFS, −6 dBFS). DADman måling viser signalniveauer i dBFS. Se også: _dBu_.

**dBu**
En måleenhed for analogt lydsignal, der refereres til 0,775 V RMS. Professionelt lydudstyr opererer typisk på +4 dBu nominel med headroom til +18 dBu eller +24 dBu. DADman DA tab output niveau kontrol indstille det analoge niveau, der svarer til 0 dBFS, justere de digitale og analoge signal domæner. Se også: _dBFS_.

**DDM** (Dante Domain Manager)
Audinates centraliserede management system for enterprise-scale Dante-netværk, der leverer autentificering, netværkssegmentering og cross-subnet routing. Nogle avancerede Dante funktioner (såsom ST 2110-30 på visse modultyper) kræver DDM. Se også: _Dante_.

**Enhedsliste**
Hovedenhedens visningsområde i DADman, viser alle forbundne hardwareenheder fra venstre mod højre i rækkefølge efter deres enheds-ID-numre. Hver enhed vises med en farvet grænse, der viser dens aktuelle AD, DA, og Con/Conf kontrol som kanalstrimler. Enhedslisten giver den primære grænseflade for operationer på enhedsniveau (firmwareopdatering, fabriksindstillinger, klon, netværksindstillinger).

**DMS** (DADman Settings File)
Filformatet (extension `. ms`) brugt af DADman til at gemme den fuldstændige konfiguration af alle tilsluttede hardwareenheder — routing forbindelser få indstillinger, kanaletiketter, Konf- faneblad parametre og alle andre indstillinger på enhedsniveau. Indstillingerne gemmes på selve hardwareenheden; en `.dms` fil er en sikkerhedskopi af de indstillinger, der holdes på computeren. Se også: _DMPROF_.

**DMPROF** (DADman Monitor Profilfil)
Filformatet (endelse `. mprof`) brugt af DADman til at gemme en skærm profil — den komplette skærm controller konfiguration for en hardware enhed, herunder kilder, outputsæt, fold-downs, talkback routing, og måling tildelinger. En `.dmprof` fil gemmes på computeren, ikke i hardwareenheden. Se også: _Skærmprofil_, _DMS_.

**DPC Latency** (Udskudt Procedure Call Latency)
En Windows-system ydeevne metriske måle den tid, som hardware drivere og system processer til at håndtere afbryder anmodninger. Høj DPC latens-tid forårsager audio dropouts i realtid lydprogrammer. Almindelige årsager omfatter trådløse netværk drivere, USB strømstyring indstillinger og antivirus-software. Relevant for Thunders / Core ASIO ydeevne på Windows. Se _Kapitel 9, Afsnit 9.4_.

**DVS** (Dante Virtual Soundcard)
En softwareapplikation fra Audinate, der får en Mac eller PC til at fremstå som en Dante lydenhed på netværket, at dirigere computerens systemlyd ind i Dante. Bruges til at bringe enhver computer audio program output i DADman monitor system som en kilde. Se _Kapitel 8, Afsnit 8.10_.

**DX32R**
En DAD digital lydrouter og bro. Understøtter ruter mellem AES3, MADI, og Dante formater i en 1RU kabinet. Medlem af familie 1-udstyrsgruppen. Kontrolleret via DADman.

**EuCon**
Avid's proprietære kontrol overflade protokol, anvendes til kommunikation mellem DAWs (især Pro Tools) og Avid kontrol overflader (S1, S6, S6L) og Avid Control app. DADman implementerer EuCon for at eksponere kontrolfunktioner for overvågning — kildevalg, volumen, dim, cut, talkback og fold-down — til enhver forbundet EuCon overflade. Aktiveret i DADman via _Indstillinger > Aktivér EuCon_. Se _Kapitel 8, Afsnit 8.5_.

**Familiegruppe**
En udstyrskompatibilitetsgruppering brugt af DADman til klon-funktionen og til identifikation af enheder, der deler den samme firmware-filial. Der findes tre familiegrupper: Familie 1 (MTRX, AX32, DX32, Penta 720, Penta 721s) Familie 2 (MTRX II, AX64, AX Center, Core 256); Familie 3 (MTRX Studio). Se også: \* Klon / Kloning \*.

**FCC** (Federal Communications Commission)
The United States regulatory agency responsible for radio frequency and electromagnetic compatibility standards DAD / NTP-teknologi hardware solgt i USA skal overholde FCC Part 15 (utilsigtet radiatorer). Se: _Tillæg F_.

**Firmware**
Indlejret software gemt på hardwareenhedens interne flash-hukommelse, der styrer enhedens kernelydbehandling, routing, og I/O-funktioner. Firmware er adskilt fra DADman (som kører på værtscomputeren). Firmware-opdateringer anvendes via DADman fra en firmwarefil downloadet fra DAD-supportportalen. Se _Kapitel 10, Afsnit 10.2_.

**Fold-Down**
En blanding matrix i en DADman Monitor Profil, der konverterer en højere kanal-tæller lydkilde til en lavere kanal-tæller format til kompatibilitet overvågning. For eksempel gør en 7.1 fold-down til stereo det muligt at tjekke, hvordan en surround mix kan oversættes til to-kanals afspilning. Brugerdefinerede fold-down matricer kan også bruges til højttaler undersæt udvalg og up-matching. Se _Kapitel 8, Punkt 8.1.6_. Se også: _Up-Match_, _Skærmprofil_.

**LTC** (Lineær Timecode)
SMPTE tidskode kodet som et lydfrekvenssignal, der kan overføres over enhver analog eller digital lydforbindelse, herunder en Dante-kanal. LTC koder timer, minutter, sekunder og rammer til synkronisering af lyd og video-udstyr. Se _Kapitel 8, Afsnit 8.14_.

**MADI** (Multichannel Audio Digital Interface, AES10)
En professionel digital audio interface standard defineret af Audio Engineering Society (AES10). Transmits op til 64 lydkanaler ved 44,1 eller 48 kHz (32 kanaler ved 88,2/96 kHz i højhastighedstilstand; 16 kanaler ved 176. /192 kHz) over et enkelt koaksialt kabel eller fiberoptisk kabel ved hjælp af SFP-moduler. MADI bruger to frame rate tilstande: Legacy (56-kanal) og High Speed (64-kanal). Begge ender af en MADI-forbindelse skal bruge den samme frame rate mode.

**Menulinje Tilstand**
En MacOS visningstilstand for DADman, hvor applikationen skjuler sig fra Dock, når dens hovedvindue er lukket og kun tilgængelig via et ikon i MacOS-systemets menulinje. Bruges i permanente installationsmiljøer, hvor DADman skal køre i baggrunden. Se _Kapitel 8, Afsnit 8.7_.

**Mic Gain Group**
A DADman feature (v5.8. opbygge 6 og senere), der forbinder flere analoge indgangskanaler, så at få og slå justeringer på en hvilken som helst kanal påvirke alle kanaler i gruppen samtidigt, samtidig bevare den relative gain forskydninger mellem kanaler. Phantom power og fase invert er ikke grupperet. Understøttet på alle hardware undtagen MTRX Studio. Se _Kapitel 8, Afsnit 8.2_.

**MOM** (Overvåg operativmodul)
A DAD hardware monitor controller — en kompakt, rack-monterbar eller desktop hardware enhed giver fysiske drejeknapper og knapper til at kontrollere DADman monitor funktioner (volumen, kilde udvælgelse, dim, cut, talkback, mute). MOM kommunikerer med DADman over Ethernet. Se _Kapitel 8, Afsnit 8.5_.

**Mon tabel**
fanen _Skærm_ i DADman. Viser overvågningskontroller for de aktuelt indlæste Overvågningsprofil: kildevalgsknapper valg af højttaleroutput, hovedniveau fader, dim, cut, Ref knap, talkback og fold-down vælgere. Mon fanen er kun udfyldt, når en `.dmprof` skærm profilfil er indlæst. Se også: _Skærmprofil_.

**Overvåg profil**
En DADman konfigurationsfil (`. mprof`) definerer den komplette monitor controller opsætning: tilgængelige kilder, fysiske output sæt, fold-down matricer, talkback routing, delay indstillinger og måling udgange. En skærm profil er helt adskilt fra enhedens indstillingsfil (`.dms`). Profiler gemmes på computeren og skal indlæses i DADman ved lanceringen. Se _Kapitel 8, Afsnit 8.1_. Se også: _DMPROF_, _Kilde (monitor)_, _Outputsæt_.

**MTRX / MTRX II / MTRX Studio**
Avid-branded audio interface products developed by NTP Technology A/S (DAD) under OEM agreement MTRX og MTRX II er medlemmer af henholdsvis familie 1- og familie 2-hardwaregrupperne. MTRX Studio er familie 3. Alle tre er konfigureret og kontrolleret via DADman software. For Avid-specifikke arbejdsgange henvises til den relevante Avid-dokumentation. Se: _Forstykke, Afsnit FM.3_.

**NTP Technology A/S**
Den danske virksomhed (NTP Technology A/S, København), der udvikler og fremstiller DAD hardware og softwareprodukter. Tidligere kendt som NTP / NEVE Technology. Udvikler også lydprodukter under NTP Penta mærket. DAD er det forbrugervendte varemærke, NTP Technology A/S er den juridiske enhed. Se også: _DAD_.

**Output Set**
I en DADman Monitor Profil, en navngivet gruppe af fysiske output kanaler, der repræsenterer en højttaler konfiguration — for eksempel, `Near Field`, `5. Surround`, eller `85 dB SPL`. Flere output sæt kan defineres ved hjælp af forskellige fysiske udgange eller de samme udgange med forskellige trim niveauer til at oprette flere reference niveau forudindstillinger. Se _Kapitel 8, Punkt 8.1.4_. Se også: _referenceniveau_, _Trim_.

**Penta 720 / Penta 721s**
NTP Technology A/S audio router og konverter produkter. Medlemmer af Family 1 hardware gruppen. Feature de samme udvidelseskort muligheder som AX32. Kontrolleret via DADman. Fremstillet af NTP Technology A/S; distribueret under NTP Penta mærke.

**PCIe** (Perifer Component Interconnect Express)
En højhastigheds computerbusstandard, der anvendes internt i computere til kommunikation mellem CPU, RAM og perifere enheder. Thunderbolt 3 eksternt udsætter PCIe båndbredde, hvilket er hvordan Thunder\-kerne enheder kommunikere med værtscomputeren på nær nul latency.

**PoE** (Power over Ethernet)
A standard (IEEE 802. af/at) gør det muligt for netværksafbryderne at levere elektrisk strøm til tilsluttede enheder over det samme Ethernet-kabel, der anvendes til data. MOM monitor controller og nogle DAD tilbehør støtte PoE, eliminerer behovet for en separat strømforsyning.

**PRE emulering**
En DADman funktion gør det muligt for Pro Tools at styre DADman-tilsluttede forforstærker gevinster via MIDI, behandle hardware som en _Avid PRE_ forforstærker enhed. Tillader mic gain justering fra inden for Pro Tools' I/O Setup eller en tilsluttet control overflade uden at skifte til DADman. Se _Kapitel 8, Afsnit 8.15_.

**PRO\¤ MON**
En valgfri DADman softwarelicens, der udvider overvågningssystemet ud over den grundlæggende skærm profilfunktion tilføje avancerede monitor routing, talkback, cue bus, og integration kapaciteter til komplekse studie og broadcast overvågning miljøer. Anvendes primært med AX32, DX32R, Penta 720 og MTRX Studio. _Fuld afventende dokumentation — kræver DAD engineering input. Se: Kapitel 8, Afventende Dokumentation._

**PTP** (Precision Time Protocol, IEEE 1588)
En netværksprotokol til synkronisering af ure på tværs af et lokalnetværk med sub-microsecond præcision. Brugt i Dante og Ravenna netværk til at justere lydstrømme fra forskellige netværksenheder uden at kræve dedikeret word clock kabling. Se også: _Dante_, _Ravenna_.

**Ravenna**
En audio-over-IP-transportprotokol udviklet af ALC NetworX. Bruges i luksus udsendelse og professionelle lydprogrammer. Interoperabel med AES67. DAD Ravenna Card (understøttes fra DADman v5.8.2 build 2) tilføjer Ravenna/AES67/ST 2110-30 tilslutning til kompatible Thunder\¤ Core enheder. Se også: _AES67_, _ST 2110-30_.

**Klar LED**
En statusindikator for frontpanelet til stede på alle DAD / NTP-teknologihardwareenheder. Når solid grøn, enheden er tændt, startet og kommunikere normalt. En blinkende eller ikke-grøn Klar LED indikerer en opstart i gang, en firmwareopdatering eller en fejltilstand.

**Referenceniveau**
I en DADman-skærm profil er et kalibreret output-niveau for et bestemt output-sæt, der er etableret med testtoner og en SPL-meter. Når den er defineret, kan du ved at trykke på **Ref**-knappen i Mon-fanen låse skærmens fader til dette niveau, så utilsigtet lydstyrke ikke ændres under kritisk lytning. Se _Kapitel 8, Punkt 8.1.5_.

**Routing Matrix**
Signalrouting engine fra en DADman-kontrolleret hardwareenhed, hvilket gør det muligt at tilslutte ethvert input til ethvert output. Routing matrix vises og redigeres i fanen DADman \*\* Con\*\* som et gitter af crosspoints. DAD hardware understøtter matricer op til 1.500×1.500 crosspoints (modelafhængig). Se også: _Con tab_, _Crosspoint_.

**Routing Preset**
I Control\-Pack, en navngivet konfiguration, der definerer, hvilke output-kanaler der styres af forudindstillede og hvilke kilde-spande der er tilgængelige til at skifte. Op til 32 routing forudindstillinger kan konfigureres pr. Thunder\¤ Core enhed. Se også: _Control\¤ Pack_, _Bucket_. Se _Kapitel 8, Afsnit 8.4_.

**RoHS** (Begrænsning af farlige stoffer)
EU-direktiv 2011/65/EU om begrænsning af anvendelsen af specifikke farlige stoffer (bly kviksølv, cadmium, hexavalent krom, visse flammehæmmere) i elektrisk og elektronisk udstyr. DAD / NTP-teknologi hardware overholder RoHS. Se: _Tillæg F_.

**Prøvehastighed**
Antallet af lydprøver, der fanges eller afspilles tilbage pr. sekund, udtrykt i kHz. Standardsatser: 44,1 kHz, 48 kHz (standarddefinition); 88,2 kHz, 96 kHz (high definition); 176,4 kHz, 192 kHz (ultra-high definition). Højere prøvetagningshastigheder reducerer antallet af kanaler på tids-multiplexed interfaces (MADI, ADAT, DADLink). Prøvehastigheden er konfigureret pr. enhed i fanen DADman **Konf**.

**SFP** (Small Form-faktor Tilsluttelig)
Et kompakt, varmtslukkeligt optisk eller elektrisk transceiver-modul, der anvendes i MADI og DADLink-forbindelser på DAD-hardware. SFP-moduler er tilgængelige i forskellige konfigurationer til multimode eller single-mode fibre, eller koaksial MADI. SFP-typen bestemmer kabeltypen og maksimal transmissionsafstand.

**S/MUX** (Sample Multiplexing)
En teknik til overførsel af lyd med højere samplingfrekvens over ADAT ved hjælp af flere ADAT-kanaler til at bære en enkelt kanals data. Ved 88.2/96 kHz halverer S/MUX ADAT kanalen til 4 kanaler (S/MUX2). Ved 176.4/192 kHz, S/MUX4 reducerer antallet yderligere til 2 kanaler. Se også: _ADAT_.

**Kilde** _(monitor)_
I en DADman Monitor Profil, en navngivet indgangssignalsti til rådighed for valg af overvågning. Kilder tildeles til specifikke inputkanaler på hardwareenheden (analog, Dante, MADI, AES3, osv.) og vises som valgbare indstillinger i fanen Mon. Eksempler: `Pro Tools`, `DVS`, `Dante Player`, `Gæste`. Se _Kapitel 8, Punkt 8.1.3_. Se også: _Skærmprofil_.

**SPQ** (Signal Processing card)
Et valgfrit DSP udvidelseskort til kompatibel DAD hardware (AX32 varianter) giver per kanal parametrisk EQ på analoge monitor udgange. Bruges til højttaler og rum korrektion. SPQ filter data genereres typisk fra akustiske målinger foretaget med Room EQ Wizard (eller lignende værktøjer) og importeres til DADman via SPQ fanen. Se _Kapitel 8, Afsnit 8.12_.

**SRC** (Sample Rate Converter)
En hardware eller software komponent, der konverterer digital lyd mellem forskellige samplingfrekvenser. Indsættelse af en SRC i en signalvej bryder ethvert fasesammenhængende forhold med det oprindelige prøveur, som kan ødelægge tidsfølsomme signaler såsom LTC og AE6 pilot tone. DADman enheder understøtter SRC på vælg I/O-grænseflader, når de er konfigureret i fanen Conf.

**ST 2110-30**
En SMPTE-standard (SMPTE ST 2110-30) til transport af ukomprimeret lyd over IP-netværk, afledt af AES67-standarden. Anvendes i professionelle udsendelsesmiljøer. Understøttet på DAD Dante og Ravenna grænseflader fra firmware v1.1.2.4 (Januar 2026). Brooklyn 3 moduler understøtter ST 2110-30 uden DDM fra firmware v1.1.0.3. Se også: _AES67_, _Ravenna_, _DDM_.

**Thunder\-Core**
DAD-udtrykket for Thunderbolt 3-interfaceteknologien integreret i AX64, AX Center og Core 256 hardwareenheder. Thunders Core giver ultra-lav-latens-tid audio I/O mellem hardware enhed og værtscomputeren over en Thunderbolt 3 kabel, ud over standard Ethernet-baserede DADman kontrol.

**Thunderbolt 3**
Intels high-speed perifere grænseflade standard, der giver op til 40 Gbps båndbredde over et USB-C-stik. Benyttes af DAD Thunders Core enheder til lyd I / O til værtscomputeren. Kræver DAD Thunderbolt 3 driver (Core Audio on macOS; ASIO på Windows). Den mindste kabelspecifikation for korrekt drift er et certificeret Thunderbolt 3-kabel med en nominel værdi på 20 Gbps. Se: _Kapitel 3, afsnit 3.2_ og _Kapitel 9, afsnit 9.4_.

**Trim**
I et DADman Monitor Profiludgangssæt, anvendes en fast niveauforskydning for outputtet i forhold til hovedskærmens fader. Bruges til at oprette flere referenceniveau forudindstillinger på de samme fysiske udgange uden yderligere hardware. For eksempel a −10 dB trim på et andet output sæt peger på de samme højttalere som det primære sæt giver en øjeblikkelig 10 dB referenceniveau skift. Se også: _Outputsæt_, _referenceniveau_.

**Udløser**
I Control\-Pack routing presets, en _trigger_ er en detektionstilstand tildelt en spand, der afgør, om den pågældende spand kilde anses for gyldig. Trigger typer: Signal Level (lydsignal over −40 dBFS tærsklen); AE6 (integritet af AE6 digital pilot tone); Port (fysisk port connectivity status). Se _Kapitel 8, Punkt 8.4.4_. Se også: _Bucket_, _Kontrol\ńPakke_.

**UKCA** (UK Conformity Assessed)
En produktmærkning, der kræves for varer solgt i Storbritannien (England, Scotland, Wales) fra den 1. januar 2021 som erstatning for CE-mærkning af det britiske marked efter Brexit. Tilsvarende i anvendelsesområde til CE. DAD / NTP-teknologi hardware sælges i Storbritannien bærer UKCA mærkning. Se: _Tillæg F_.

**Up-Match**
En brugerdefineret fold-down matrix i en DADman Monitor Profil, der dirigerer en lavere kanaltæller kildeformat til en højere kanaltæller output — for eksempel spredning af en 5. kilde på tværs af et 7.1.4 højttaler layout. Konfigureret i fanen Fold Downs i Overvågningsprofil editoren. Se også: _Fold-Down_. Se _Kapitel 8, Punkt 8.1.6_.

**WEEE** (affald af elektrisk og elektronisk udstyr)
EU-direktiv 2012/19/EU om indsamling, genanvendelse og bortskaffelse af elektrisk og elektronisk udstyr. Hardwaren til DAD / NTP-teknologi bærer WEEE-symbolet (crossed-out wheelie-bin), som tyder på, at det ikke må bortskaffes sammen med usorteret husholdningsaffald. Se _Kapitel 10, Afsnit 10.8_ og _Forhåndsspørgsmål, Afsnit FM.8_.

**Word Ur**
Et kvadrat-bølge synkroniseringssignal, der bruges til fase-lås digitalt lydudstyr til en fælles samplingfrekvens reference. Word clock distribueres ved drift samplingfrekvens (fx, 48 kHz) over 75 Ω BNC kabler. DAD hardware understøtter Word Clock ind og ud for integration i facilitet synkronisering systemer. Word clock forbindelser kræver 75 Ω opsigelse på den endelige enhed i kæden. Se _Kapitel 9, Afsnit 9.5_.

---

## Tillæg H — Indeks

_[Pladsholder: indeks, der skal genereres fra det endelige kompilerede dokument.]_
