---
title: "Anhänge"
sidebar_label: "Anhänge"
sidebar_position: 13
---

# Anhänge

> **Dokument:** DADman Benutzerhandbuch  
> **Kapitel Status:** Entwurf v0. — App G (Glossary) fertig; App E (Changelog) kompiliert Quelltext; Apps A, B, C, F anhängig von DAD Engineering und legal; App H (Index) zum generieren aus dem endgültigen Dokument  
> **Zuletzt aktualisiert:** Juni 2026

---

## Anhang A — Technische Daten

Dieser Anhang bietet komplette technische Spezifikationen für alle von DADman gesteuerten Hardware in der aktuellen aktiven Produktreihe. Spezifikationen stammen aus der offiziellen DAD-Produktdokumentation. Alle Kanalanzahlen spiegeln die maximalen Werte bei der angegebenen Abtastrate wider. Die tatsächliche Anzahl hängt von den installierten Erweiterungskarten ab.

> **HINWEIS:** AX32 (BASE1/BASE2) ist nicht mehr in der aktiven Produktion und ist hier nicht enthalten. Weitere Informationen zu älteren Spezifikationen finden Sie im AX32 Hardware-Handbuch.

---

### A.1 AX Zentrum (AXCNTR-BASE)

**Produktübersicht:** Kompakt 1U, modulare 2-Steck-Slot Audio-Schnittstelle mit nativen analogen I/O. Ideal als Studio Centrepiece für Recording, Monitorsteuerung und immersive Audioapplikationen. Enthält Onboard Thunderbolt 3, Dante, MADI und ADAT, mit zwei Erweiterungskartenslots für zusätzliche I/O.

#### Routing-Matrix

| Ressource                 | Kapazität                    |
| ------------------------- | ---------------------------- |
| Routing-Matrix            | 1,006 × 1,112                |
| PRO\|MON-Summen-Prozessor | 512 × 64 Kanäle              |
| SPQ-Equalizer             | 1.024 Filter |
| Erweiterungskartenplätze  | 2                            |

#### Native I/O

| Schnittstelle                             | Kanalanzahl                                                |
| ----------------------------------------- | ---------------------------------------------------------- |
| Mikrofon / Leitung / Instrumenteneingänge | 2 (wählbar pro Kanal)                   |
| Stereo Kopfhörerausgänge                  | 2                                                          |
| Stereo monitor outputs                    | 2                                                          |
| Donnerblitz 3                             | 256 ch @ 48 & 96 kHz      |
| Dante AoIP                                | 256 ch @ 48 kHz; 128 ch @ 96 kHz |
| MADI I/O                                  | 64 ch @ 48 kHz                                |
| ADAT I/O                                  | 16 ch / S/PDIF 2 ch                                        |
| DADlink (via SFP)      | Bis zu 256 × 256 ch                                        |

#### Analog-Spezifikationen

**Kopfhörer-Ausgabe**

| Parameter                               | Wert                                                                                     |
| --------------------------------------- | ---------------------------------------------------------------------------------------- |
| Dynamischer Bereich                     | > 120 dB                                                                                 |
| THD+N (Gewichtet)    | < −100 dB @ −3 dBFS                                |
| Rose                                    | < −110 dB                                                       |
| Load Impedance                          | 18 – 600 Ω                                                                               |
| Ausgang Impedanz                        | < 1                                                        |
| Maximale Ausgabestufe                   | Anpassbar −80 bis +19 dBu (0.1 dB Schritte)           |
| Konversionslatenz @ 96 kHz | 450 μs (Hochres Filter) / 150 μs (Kurzverzögerung) |

**Analog-Monitorausgabe**

| Parameter                            | Wert                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------ |
| Dynamischer Bereich                  | > 128 dB                                                                       |
| THD+N (Gewichtet) | < −115 dB @ −3 dBFS                      |
| Rose                                 | < −115 dB                                             |
| Maximale Ausgabestufe                | Anpassbar −60 bis +24 dBu (0.1 dB Schritte) |
| Konversionslatenz                    | 450 μs @ 96 kHz                                                   |

**Mikrofon / Instrumenteneingang**

| Parameter                                   | Wert                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------ |
| Dynamischer Bereich                         | > 124 dB                                                                       |
| THD+N (Gewichtet)        | < −115 dB @ −3 dBFS                      |
| Rose                                        | < −115 dB                                             |
| Input-Impedanz                              | 2 k (Mic) / > 1 M (Instrument) |
| Bereich Mikrofon-Verstärkung                | −21 bis +100 dB (0.1 dB Schritte)           |
| Mikrofon EIN (Gewichtet) | < −131 dBu                                            |
| Konversionslatenz                           | 350 µs @ 96 kHz                                                   |

#### Digitale I/O und Synchronisierung

| Parameter                  | Wert                                                                                                                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unterstützte Beispielraten | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Interne Systemlatenz       | 7 Proben (einstellbar 3 – 31 Proben)                                                                                                                                            |
| DADlink format             | 28-Bit Fließkommazahlpunkt, Null-Proben-Latenz                                                                                                                                                     |
| Synchronisation sources    | Word Clock, Video Black Burst, Dante, ADAT, MADI                                                                                                                                                   |
| Netzwerk-Schnittstelle     | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Donnerblitz 3              | 2 × USB-C, Verbindung + 15 W Strom pro Port                                                                                                                                                        |

#### Elektrische Spezifikationen

| Parameter                                         | Wert                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| Max. Netzbewertung                | 90 W                                                                |
| Eingangsspannung                                  | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Netz-Sicherung                                    | 1 A T, IEC-Anschluss montiert                                       |
| Netzwerk-Connector                                | IEC 60309                                                           |
| Digitale Teilleistung                             | 15 W                                                                |
| Erweiterungskartenstärke (max) | 30 W                                                                |
| Donnerblitzkraft (max)         | 2 × 15 W                                                            |

#### Mechanische Spezifikationen

| Parameter     | Wert                                               |
| ------------- | -------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 1 RU (44,4 mm) |
| Chassis Tiefe | 320 mm / 12,6"                                     |
| Körperbreite  | 435 mm / 17.2"                     |
| Gewicht       | 3.2 kg / 7.1 lbs   |

#### Umwelt und Einhaltung

| Parameter          | Wert                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Betriebstemperatur | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                             |
| Feuchtigkeit       | 20 – 85%, nicht verdichtet                                                                                                                                                                                                                                                                                                          |
| EMV-Konformität    | KISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Teil 15 Teil B |
| Sicherheitskonform | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                    |

---

### A.2 AX64 (AX64-BASE)

**Produktübersicht:** Hohe Kanalanzahl 2U, 8-Steckplatz modulare Audio-Schnittstelle. Entworfen für großformatige Studio- und Live-Anwendungen, die eine umfangreiche I/O-Erweiterung erfordern. Unterstützt optional redundante Stromversorgung (AX64-RPS).

#### Routing-Matrix

| Ressource                 | Kapazität                    |
| ------------------------- | ---------------------------- |
| Routing-Matrix            | 1,872 × 1,872                |
| PRO\|MON-Summen-Prozessor | 512 × 64 Kanäle              |
| SPQ-Equalizer             | 1.024 Filter |
| Erweiterungskartenplätze  | 8                            |

#### Native I/O

| Schnittstelle                                    | Kanalanzahl                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| Donnerblitz 3                                    | 256 ch @ 48 & 96 kHz                 |
| Dante AoIP                                       | 256 ch @ 48 kHz; 128 ch @ 96 kHz            |
| MADI I/O                                         | 64 ch @ 48 kHz                                           |
| ADAT I/O                                         | 16 ch / S/PDIF 2 ch                                                   |
| Über Erweiterungskarten (max) | Bis zu 1,024 × 1,024 ch                                               |
| DADlink / MADI via SFP (max)  | Bis zu 256 × 256 DADlink oder 128 × 128 MADI ch @ 48 kHz |

#### Digitale I/O und Synchronisierung

| Parameter                  | Wert                                                                                                                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unterstützte Beispielraten | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Interne Systemlatenz       | 7 Proben (einstellbar 3 – 31 Proben)                                                                                                                                            |
| DADlink format             | 28-Bit Fließkommazahlpunkt, Null-Proben-Latenz                                                                                                                                                     |
| Synchronisation sources    | Word Clock, Video Black Burst, Dante, ADAT, MADI, DADlink                                                                                                                                          |
| Netzwerk-Schnittstelle     | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Donnerblitz 3              | 2 × USB-C, Verbindung + 15 W Strom pro Port                                                                                                                                                        |

#### Elektrische Spezifikationen

| Parameter                                         | Wert                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| Stromverbindung                                   | Ein- oder Zweieingangs; doppelte PSU immer eingebaut                |
| Max. Netzbewertung                | 120 W                                                               |
| Eingangsspannung                                  | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Netz-Sicherung                                    | 1.5 A T, IEC-Anschluss montiert                     |
| Netzwerk-Connector                                | IEC 60309                                                           |
| Digitale Teilleistung                             | 15 W                                                                |
| Erweiterungskartenstärke (max) | 70 W                                                                |
| Donnerblitzkraft (max)         | 2 × 15 W                                                            |

#### Mechanische Spezifikationen

| Parameter     | Wert                                               |
| ------------- | -------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2 RU (88,9 mm) |
| Chassis Tiefe | 345 mm / 13,6"                                     |
| Körperbreite  | 435 mm / 17.2"                     |
| Gewicht       | 5.5 kg / 12.2 lbs  |

#### Umwelt und Einhaltung

| Parameter          | Wert                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Betriebstemperatur | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                             |
| Feuchtigkeit       | 20 – 85%, nicht verdichtet                                                                                                                                                                                                                                                                                                          |
| EMV-Konformität    | KISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Teil 15 Teil B |
| Sicherheitskonform | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                    |

---

### A.3 Kern 256 (CORE256-BASE)

**Produktübersicht:** Kompakte Halbrackbreiteneinheit (volle 1U-Höhe) kombiniert Thunderbolt 3, Dante, MADI und ADAT mit einer großen internen Routingmatrix. Montage in einem 19" Standardregal über den optionalen C256-2MOUNT-BRACKET (ein oder zwei Einheiten pro 1U). Powered by 12 V DC.

#### Routing-Matrix

| Ressource                 | Kapazität                    |
| ------------------------- | ---------------------------- |
| Routing-Matrix            | 848 × 848                    |
| PRO\|MON-Summen-Prozessor | 512 × 64 Kanäle              |
| SPQ-Equalizer             | 1.024 Filter |

#### Native I/O

| Schnittstelle                                   | Kanalanzahl                                                           |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| Donnerblitz 3                                   | 256 ch @ 48 & 96 kHz                 |
| Dante AoIP                                      | 256 ch @ 48 kHz; 128 ch @ 96 kHz            |
| MADI I/O                                        | 64 ch @ 48 kHz                                           |
| ADAT I/O                                        | 16 ch / S/PDIF 2 ch                                                   |
| DADlink / MADI via SFP (max) | Bis zu 256 × 256 DADlink oder 128 × 128 MADI ch @ 48 kHz |

#### Digitale I/O und Synchronisierung

| Parameter                  | Wert                                                                                                                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unterstützte Beispielraten | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Interne Systemlatenz       | 7 Proben (einstellbar 3 – 31 Proben)                                                                                                                                            |
| DADlink format             | 28-Bit Fließkommazahlpunkt, Null-Proben-Latenz                                                                                                                                                     |
| Synchronisation sources    | Word Clock, Video Black Burst, Dante, ADAT, MADI, DADlink                                                                                                                                          |
| Netzwerk-Schnittstelle     | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Donnerblitz 3              | 2 × USB-C, Verbindung + 15 W Strom pro Port                                                                                                                                                        |

#### Elektrische Spezifikationen

| Parameter                                 | Wert                                                  |
| ----------------------------------------- | ----------------------------------------------------- |
| Versorgungsspannung                       | 12 V DC                                               |
| DC-Stecker                                | 5,5 × 2,5 mm Fass (Spitze positiv) |
| Max. Eingangsstrom        | 5 A                                                   |
| Max. Netzbewertung        | 60 W                                                  |
| Digitale Teilleistung                     | 15 W                                                  |
| Donnerblitzkraft (max) | 2 × 15 W                                              |

#### Mechanische Spezifikationen

| Parameter     | Wert                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------- |
| Formfaktor    | Halbregalbreite, 1 RU (44,4 mm) — benötigt C256-2MOUNT-BRACKET für 19" Rack |
| Chassis Tiefe | 231 mm / 9,1"                                                                                  |
| Körperbreite  | 211 mm / 8,3"                                                                                  |
| Gewicht       | 1.3 kg / 2.9 lbs                                               |

#### Umwelt und Einhaltung

| Parameter          | Wert                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Betriebstemperatur | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                             |
| Feuchtigkeit       | 20 – 85%, nicht verdichtet                                                                                                                                                                                                                                                                                                          |
| EMV-Konformität    | KISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Teil 15 Teil B |
| Sicherheitskonform | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                    |

---

### A.4 Penta 720 (PENTA720-BASE)

**Produktübersicht:** 2U, 8-Steckplatz modularer Audio-Router in 19" Subrack mit Hot-Swap, Front-Access-Erweiterungskartenbuchten. Entworfen für Broadcast- und Medieninstallation. Standard I/O beinhaltet 8 Stereo-AES3-Paare (16 Kanäle) und einen MADI-Port. Optionales Dante-Modul (MOD-DANTE-BK3) und duales MADI/DADlink Modul (MOD-MADI-DADLNK) verfügbar. Enthält keinen Thunderbolt 3.

#### Routing-Matrix

| Ressource                 | Kapazität                                                             |
| ------------------------- | --------------------------------------------------------------------- |
| Routing-Matrix            | 1,424 × 1,424                                                         |
| PRO\|MON-Summen-Prozessor | 256 × 32 Kanäle                                                       |
| Erweiterungskartenplätze  | 8 (bis zu 6 analoge Karten oder 8 digitale Karten) |

#### Native I/O

| Schnittstelle                                    | Kanalanzahl                                                                |
| ------------------------------------------------ | -------------------------------------------------------------------------- |
| AES3 I/O                                         | 16 ch @ 48 kHz (8 stereo pairs)            |
| MADI I/O                                         | 64 ch @ 48 kHz                                                |
| Über Erweiterungskarten (max) | Bis zu 1,024 × 1,024 ch                                                    |
| DADlink / MADI via SFP (max)  | Bis zu 256 × 256 DADlink oder 128 × 128 MADI/HotLink @ 48 kHz |

#### Digitale I/O und Synchronisierung

| Parameter                  | Wert                                                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Unterstützte Beispielraten | 44,1 – 384 kHz (AES3, MADI, DADlink); HotLink 48 kHz; Dante Option 44,1 – 192 kHz |
| Interne Systemlatenz       | 7 Proben (einstellbar 3 – 31 Proben)                                              |
| DADlink format             | 28-Bit Fließkommazahlpunkt, Null-Proben-Latenz                                                       |
| Synchronisation sources    | Word Clock, Video Black Burst, AES11, AES3, MADI, DADlink, HotLink                                   |
| Netzwerk-Schnittstelle     | 1000BASE-T, RJ45                                                                                     |

#### Elektrische Spezifikationen

| Parameter                                         | Wert                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| Stromverbindung                                   | Doppeleingabe, doppelte PSU                                         |
| Max. Netzbewertung                | 90 W                                                                |
| Eingangsspannung                                  | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Netz-Sicherung                                    | 1 A T, IEC-Anschluss montiert                                       |
| Netzwerk-Connector                                | IEC 60309                                                           |
| Digitale Teilleistung                             | 15 W                                                                |
| Erweiterungskartenstärke (max) | 65 W                                                                |

#### Mechanische Spezifikationen

| Parameter     | Wert                                               |
| ------------- | -------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2 RU (88,9 mm) |
| Chassis Tiefe | 350 mm / 13,8 "                                    |
| Körperbreite  | 435 mm / 17.2"                     |
| Gewicht       | 5.0 kg / 11.0 lbs  |
| Kühlung       | 2 × interne Fans                                   |

#### Umwelt und Einhaltung

| Parameter          | Wert                                       |
| ------------------ | ------------------------------------------ |
| Betriebstemperatur | 0 – 45 °C / 32 – 113 °F                    |
| Feuchtigkeit       | 20 – 85%, nicht verdichtet                 |
| EMV-Konformität    | EN 55103-1, EN 55103-2, FCC Part 15 Teil B |
| Sicherheitskonform | EN 60950-1:2006            |

---

### A.5 Penta 721S (PENTA721S-BASE)

**Produktübersicht:** Kompakt 2U, Single-Slot Audio-Interface und Router. Enthält das Standard-Modul Dante und das duale MADI/DADlink Modul als Fabrikbestückt. Entworfen für Broadcast- und Media-Installation, wo ein kleiner Fußabdruck erforderlich ist. Ein Erweiterungskartenschlitz für zusätzliche I/O.

#### Routing-Matrix

| Ressource                 | Kapazität       |
| ------------------------- | --------------- |
| Routing-Matrix            | 528 × 528       |
| PRO\|MON-Summen-Prozessor | 256 × 32 Kanäle |
| Erweiterungskartenplätze  | 1               |

#### Native I/O

| Schnittstelle                                   | Kanalanzahl                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| AES3 I/O                                        | 16 ch @ 48 kHz (8 stereo pairs)            |
| MADI I/O                                        | 64 ch @ 48 kHz                                                |
| Dante AoIP                                      | 64 ch @ 48 kHz                                                |
| Über Erweiterungskarte (max) | Bis zu 128 × 128 zusätzliches ch                                           |
| DADlink / MADI via SFP                          | Bis zu 256 × 256 DADlink oder 128 × 128 MADI/HotLink @ 48 kHz |

#### Digitale I/O und Synchronisierung

| Parameter                  | Wert                                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Unterstützte Beispielraten | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fixed 48 kHz; Dante 44.1 – 192 kHz |
| Interne Systemlatenz       | 7 Proben (einstellbar 3 – 31 Proben)                                                                             |
| DADlink format             | 28-Bit Fließkommazahlpunkt, Null-Proben-Latenz                                                                                      |
| Synchronisation sources    | Word Clock, Video Black Burst, AES11, Dante, MADI, DADlink, HotLink                                                                 |
| Netzwerk-Schnittstelle     | 1000BASE-T, RJ45                                                                                                                    |

#### Elektrische Spezifikationen

| Parameter                                         | Wert                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| Stromverbindung                                   | Doppeleingabe, doppelte PSU                                         |
| Max. Netzbewertung                | 45 W                                                                |
| Eingangsspannung                                  | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Netz-Sicherung                                    | 1 A T, IEC-Anschluss montiert                                       |
| Netzwerk-Connector                                | IEC 60309                                                           |
| Digitale Teilleistung                             | 15 W                                                                |
| Erweiterungskartenstärke (max) | 15 W                                                                |

#### Mechanische Spezifikationen

| Parameter     | Wert                                               |
| ------------- | -------------------------------------------------- |
| Formfaktor    | 19" Rackmontage, 2 RU (88,9 mm) |
| Chassis Tiefe | 320 mm / 12,6"                                     |
| Körperbreite  | 435 mm / 17.2"                     |
| Gewicht       | 3.3 kg / 7.3 lbs   |
| Kühlung       | 1 × internes Geräuschloch Lüfter                   |

#### Umwelt und Einhaltung

| Parameter          | Wert                                       |
| ------------------ | ------------------------------------------ |
| Betriebstemperatur | 0 – 45 °C / 32 – 113 °F                    |
| Feuchtigkeit       | 20 – 85%, nicht verdichtet                 |
| EMV-Konformität    | EN 55103-1, EN 55103-2, FCC Part 15 Teil B |
| Sicherheitskonform | EN 60950-1:2006            |

---

### A.6 Junior Control\|Pack Controller (JUNIOR-BASE)

**Produktübersicht:** PoE-betriebenes Kompaktsteuergerät zur direkten Steuerung der DADman Control\|Pack-Routing Presets und Eimer. Verbindet sich über Ethernet direkt mit einer beliebigen Thunder\|Core-Einheit. Kompatibel mit CORE256-BASE, AXCNTR-BASE und AX64-BASE. Betriebt unabhängig von der DADman Software einmal konfiguriert.

#### Eigenschaften

- 6 RGB LED-Leuchtknöpfe
- 6 RGB status LEDs
- 6-stellige OLED-Anzeige pro Button
- Direkte IP-Verbindung zu Thunder\|Kerneinheit

#### Spezifikationen

| Parameter                               | Wert                                                                                                                                                                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Netzwerk-Schnittstelle                  | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                     | IEEE 802.3af, Klasse 0                                                                                                                                                                                                                                               |
| Gleichstromeingang                      | 12 V, 5,5/2,1 mm Fässer (Spitze +5 V)                                                                                                                                                                                                                             |
| Stromverbrauch (max) | 2,5 W                                                                                                                                                                                                                                                                                |
| Abmessungen                             | 116 × 48 × 40 mm / 4.6" × 1.9" × 1.6"                                                                                                                                                                                                |
| Gewicht                                 | 0.16 kg / 0.35 lbs                                                                                                                                                                                                                                   |
| Betriebstemperatur                      | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Feuchtigkeit                            | 20 – 85%, nicht verdichtet                                                                                                                                                                                                                                                           |
| EMV-Konformität                         | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Sicherheitskonform                      | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

### A.7 MOM — Überwachungsmodul (MOM-BASE)

**Produktübersicht:** PoE-betriebener Fernüberwachungscontroller mit großem Volumenkodierer, 10 benutzerdefinierbare Tasten über 4 Ebenen (bis zu 40 Funktionen) und externe GPI-Eingaben für Footswitch-Talkback. Verbindet sich über Ethernet mit DADman zur Steuerung von NTP/DAD Geräten mit PRO\|MON-Fähigkeit.

#### Eigenschaften

- Großer Volumengeber mit 27 LED-Ring (0,5 dB Auflösung)
- 10 benutzerdefinierbare Tasten × 4 Ebenen (insgesamt 40 Ebenen)
- Vorkonfigurierte Funktionen: 3 Lautsprecher-Sets, 3 Quellen, Talkback, Dim, Schnitt, Referenz-Ebene
- GPI Eingang (3,5 mm Mini-Jack) für externe Fußspitzen

#### Spezifikationen

| Parameter                               | Wert                                                                                                                                                                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Netzwerk-Schnittstelle                  | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                     | IEEE 802.3af, Klasse 0                                                                                                                                                                                                                                               |
| Gleichstromeingang                      | 5 V, 5,5/2,1 mm Fässer (Spitze +5 V)                                                                                                                                                                                                                              |
| GPI input                               | 3,5-mm-Minijack                                                                                                                                                                                                                                                                      |
| Stromverbrauch (max) | 5 W                                                                                                                                                                                                                                                                                  |
| Abmessungen                             | 172 × 110 × 50 mm / 6,8" × 4.3" × 2.0"                                                                                                                                                                                                               |
| Gewicht                                 | 1.0 kg / 2.2 lbs                                                                                                                                                                                                                                     |
| Betriebstemperatur                      | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Feuchtigkeit                            | 20 – 85%, nicht verdichtet                                                                                                                                                                                                                                                           |
| EMV-Konformität                         | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Sicherheitskonform                      | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

## Anhang B — Connector Pinouts

_[Platzhalter: Pinout-Diagramme für alle Konnektor-Typen auf allen unterstützten Hardware — XLR, DB25, BNC (MADI), BNC (Word Clock), RJ45, SFP, Thunderbolt 3, USB. Von DAD Engineering bereitzustellen.]_

---

## Anhang C — Unterstützte Audio-Formate und Protokolle

Dieser Anhang fasst die Audioformate und Protokolle zusammen, die von DADman-gesteuerter Hardware unterstützt werden, einschließlich der Kanalanzahl je Abtastrate zusammen. Alle Figuren sind Maximal; die tatsächliche Kanalanzahl hängt von den jeweiligen Erweiterungskarten ab, die in jeder Einheit installiert sind.

> **HINWEIS:** Der Kanal zählt auf zeitdivision-multiplexierte Schnittstellen (MADI, ADAT, DADLink) mit höheren Abtastraten ab, da mehr Bandbreite pro Kanal verbraucht wird. Dante und AES67 Kanalzähler hängen von der Netzwerkkonfiguration und den Dante Controller-Einstellungen ab.

---

### C.1 MADI (AES10)

MADI wird von allen DAD / NTP-Technologie-Hardware-Familien als Erweiterungskarte unterstützt (Dual MADI Card). MADI Module) oder in ausgewählten Einheiten eingebaut.

**Kanalkapazität pro MADI-Port:**

| Abtastrate                      | Legacy-Modus (56-ch-Frame) | Hochgeschwindigkeitsmodus (64-ch-Frame) |
| ------------------------------- | --------------------------------------------- | ---------------------------------------------------------- |
| 44.1 / 48 kHz   | 56 Kanäle                                     | 64 Kanäle                                                  |
| 88.2 / 96 kHz   | 28 Kanäle                                     | 32 Kanäle                                                  |
| 176.4 / 192 kHz | 14 Kanäle                                     | 16 Kanäle                                                  |

**Standard:** AES10-2008 (MADI Serial) und AES10-2003 (MADI-E erweitert).

**Physikalische Schnittstellen:**

- Koaxial-BNC (75  ) — maximale Kabellänge ca. 100 m (Standard-Koaxie)
- Optisches SFP — Mehrfach- oder Einzelmodusfaser je nach Typ des SFP-Moduls; bis zu mehrere Kilometer mit Single-Mode-SFP

**Bildbewertungsmodus:**

- **Legacy-Modus:** Rahmenlänge auf 48 kHz festgelegt. Bei 88.2/96 kHz sind angrenzende Kanalpaare zeitmultiplexiert (S/MUX2), wodurch die Kanalanzahl halbiert wird. Mit 176.4/192 kHz sind Gruppen von vier Kanälen multiplexiert (S/MUX4). Kompatibel mit den meisten MADI Geräten.
- **High Speed Modus:** Die Länge des Bildes folgt der tatsächlichen Abtastrate und verringert die Latenz bei 88.2 kHz und höher. Beide Enden des MADI-Links müssen auf den gleichen Modus gesetzt werden.

> **WICHTIG:** Beide Enden jeder MADI-Verbindung müssen die gleiche Bildfrequenz-Einstellung und die gleiche Bildgröße verwenden. Unstimmigkeiten führen zu keinen Audio- oder Uhrenfehlern. Überprüfen Sie die Einstellungen in der Conf Registerkarte auf beiden verbundenen Geräten.

---

### C.2 ADAT (S/PDIF Optisch, ADAT Lightpipe)

Optische ADAT-Schnittstellen werden auf ausgewählten DAD-Hardwareerweiterungskarten unterstützt. ADAT verwendet S/MUX (Sample Multiplexing) um Audio mit höheren Abtastraten zu übertragen.

| Abtastrate                      | Kanäle (pro ADAT-Port) | Modus         |
| ------------------------------- | ----------------------------------------- | ------------- |
| 44.1 / 48 kHz   | 8 Kanäle                                  | Standard ADAT |
| 88.2 / 96 kHz   | 4 Kanäle                                  | S/MUX2        |
| 176.4 / 192 kHz | 2 Kanäle                                  | S/MUX4        |

**Physical Interface:** TOSLINK optischer Steckverbinder.

**Standard:** Alesis ADAT optisches Protokoll.

> **HINWEIS:** ADAT ist nicht über 96 kHz im ursprünglichen Standard definiert. S/MUX4 Unterstützung bei 176.4/192 kHz erfordert beide angeschlossenen Geräte, um diese Erweiterung zu unterstützen. Verifizieren Sie die Kompatibilität mit angeschlossenen Geräten.

---

### C.3 AES3 (AES/EBU)

AES3 Digital Audio hat zwei Kanäle pro Kabel-Paar (ein Stereo-Paar). DAD-Hardware bietet in der Regel AES3-I/O über DB25-Steckverbinder, die jeweils acht Stereo-Paare (16 Kanäle) tragen.

| Abtastrate                      | Kanäle pro AES3-Paar                                           | Kanäle pro DB25 (8 Paare) |
| ------------------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| 44.1 / 48 kHz   | 2                                                              | 16                                           |
| 88.2 / 96 kHz   | 2 _(Doppeltes Draht / Doppeltes Drahtnetz)_ | 16                                           |
| 176.4 / 192 kHz | 2 _(Quad Wire)_                             | 16                                           |

**Standard:** AES3-2009.

**Physikalische Schnittstellen:**

- Balanced XLR (professionell — Standard AES3)
- DB25 Breakout (über den Industriestandard TASCAM oder Yamaha Pinout-Verkabelung)

**Hohe Abtastrate Operation:** Bei 88.2/96 kHz verwenden einige AES3-Implementierungen **Double Wire** (zwei AES3-Paare pro Kanal für erhöhte Bandbreite). Bei 176.4/192 kHz verwendet **Quad Wire** vier Paare pro Kanal. DADman's AES3 Implementierungsdetails sind hardware-modellabhängig — siehe die Hardware-Installationsanleitung für die jeweilige Einheit.

---

### C.4 Dante (Audinate)

Dante ist ein Audio-over-IP-Protokoll, das Audio über die Standard-Ethernet-Infrastruktur transportiert. DADman Units unterstützen Dante über Erweiterungskarten und integrierte Module.

**Kanalkapazität durch Dante-Implementierung:**

| Implementierung                                                                                           | Max. Kanäle (Tx + Rx) | Typische Hardware                                      |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| Dante Erweiterungskarte (Brooklyn 2/3)                                                 | 128 Tx + 128 Rx (per card)            | AX32 · DX32R · Penta 720 · Penta 721s · MTRX · MTRX II |
| Dante 64-Kanal-Modul                                                                                      | 64 Tx + 64 Rx                                            | AX32 · Penta 720 · Penta 721s · MTRX                   |
| Dante 256 IPCore _(v5.8.1.6 firmware)_ | 256 Tx + 256 Rx                                          | AX64 · AX Center · Core 256 · MTRX II                  |
| Dante-Karte _(Standallone)_                                                            | 512 Tx + 512 Rx                                          | Wählen Sie Familie 1 Einheiten                         |

**Kanalzähler sind unabhängig von der Abtastrate** — Dante-Kanäle werden bei höheren Abtastraten nicht reduziert. Stattdessen verbrauchen höhere Abtastrate mehr Netzwerkbandbreite pro Kanal. Die Netzwerkkapazität muss entsprechend groß sein.

**Netzwerkvoraussetzungen:**

- Gigabit-Ethernet empfohlen für alle Dante-Installationen
- Dedizierter Netzwerkschalter für Audioverkehr empfohlen
- Schalter müssen Multicast unterstützen (IGMP Schnüffelung empfohlen)
- PTP (IEEE 1588) für die Synchronisation der Uhr auf allen Dante-Geräten

**Protokolle und Standards:**

- Dante natives Protokoll (Audinate proprietär)
- Interoperabilitätsmodus AES67 (reduziert die Kanalanzahl auf AES67-Grenzwerte)
- ST 2110-30 _(via DDM von Firmware v1.1.2.4; Brooklyn 3 ohne DM von v1.1.0.3)_

---

### C.5 DADLink

DADLink ist eine DAD proprietäre optische Verbindung über den Mini-MADI Modulslot mit SFP optischen Transceivern. Es bietet eine extrem latenzarme Direktverbindung zwischen Einheit und Einheit.

| Abtastrate                      | Kanäle pro DADLink-Verbindung |
| ------------------------------- | ----------------------------- |
| 44.1 / 48 kHz   | 128                           |
| 88.2 / 96 kHz   | 64                            |
| 176.4 / 192 kHz | 32                            |

**Latenz:** Etwa 1 Mikrosekunde (effektiv null — alle Eingänge und Ausgänge über DADLink-angeschlossene Einheiten sind phasenorientiert vorausgesetzt, Uhrzeit ist korrekt).

**Physikalische Schnittstelle:** Optisches SFP — kompatible SFP-Transceiver-Module an beiden Enden.

**Kompatible Hardware:** AX64 · AX Center · Core 256 · MTRX II · AX32 · DX32R · Penta 720 · Penta 721s _(Familie 1 von Firmware v2. .1.2)_

**Synchronisierungsvoraussetzung:** DADLink-angeschlossene Einheiten müssen eine gemeinsame Uhr teilen. Verwenden Sie DADLink oder Word Clock als Sync-Quelle zwischen den Einheiten.

---

### C.6 Thunderbolt 3 (Donner\|Kern)

Thunderbolt 3 Audio-I/O wird ausschließlich auf der Hardware der Thunder\|Core Generation (AX64, AX Center, Core 256) über den DAD Thunderbolt 3 Treiber unterstützt.

| Hardware      | Thunderbolt 3 Kanäle | Notizen           |
| ------------- | -------------------- | ----------------- |
| **AX64**      | 64 Tx + 64 Rx        | Bei 44,1 / 48 kHz |
| **AX-Center** | 128 Tx + 128 Rx      | Bei 44,1 / 48 kHz |
| **Kern 256**  | 256 Tx + 256 Rx      | Bei 44,1 / 48 kHz |

**Bei höheren Sample-Raten:** Die Thunderbolt 3-Kanalanzahl nimmt proportional ab. Bei 88.2/96 kHz zählt die Hälfte; mit 176,4/192 kHz Quartal.

**Fahrer:**

- macOS: Core Audio Treiber (DADDriverSetup) — aktuelle Version v1.2.2
- Windows: ASIO-Treiber — aktuelle Version v1.1.2

**Kabel:** Zertifizierter Thunderbolt 3 Kabel auf mindestens 20 Gbit/s eingestuft. Passivkabel unterstützen bis zu ca. 0,5 m; aktives optisches Kabel unterstützen längere Laufzeiten.

---

### C.7 AES67 und ST 2110-30

AES67 und ST 2110-30 sind IP-Audio-Standards, die über die Dante- und Ravenna-Schnittstellen auf kompatibler DAD-Hardware unterstützt werden.

| Standard            | Transport                       | Kanalanzahl                                      | Verfügbar ab                                                                                                                             |
| ------------------- | ------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **AES67**           | IP (Leser 3) | Bis zu 512 (Netzwerkabhängig) | Alle Dante-ausgestattete Hardware _(AES67 Interoperabilitätsmodus)_                                                   |
| **ST 2110-30**      | IP (Leser 3) | Bis zu 512 (Netzwerkabhängig) | v5.8.2 Firmware via DDM; Brooklyn 3 ohne DM von v1.1.0.3 |
| **Ravenna / AES67** | IP (Leser 3) | Bis zu 512 (Netzwerkabhängig) | Ravenna Card _(v5.8.2 Hardware-Option)_                                               |

**Netzwerkanforderungen für ST 2110-30:** Professional-managed Switches mit PTP (IEEE 1588) Hardware Timestamping. IGMP Schnüffeln erforderlich. Konsultieren Sie SMPTE TR-2110 zur Unterstützung der Netzwerkarchitektur.

---

### C.8 Hardware-Format-Unterstützung Matrix

Die folgende Matrix zeigt an, welche Formate standardmäßig für jede Hardware-Familie oder über Erweiterungskarten verfügbar sind. ✓ = Standard / eingebaut; E = Erweiterungskarte Option; — = nicht unterstützt.

| Format                                  | AX-Mitte | Kern 256 | AX64 | AX32 | DX32R | Penta 720 | Penta 721s | MTRX II | MTRX Studio |
| --------------------------------------- | -------- | -------- | ---- | ---- | ----- | --------- | ---------- | ------- | ----------- |
| MADI (koaxial)       | G        | G        | G    | ✓    | ✓     | ✓         | ✓          | ✓       | —           |
| MADI (optischer SFP) | G        | G        | G    | G    | —     | G         | G          | G       | —           |
| ADAT                                    | G        | G        | G    | G    | —     | —         | —          | G       | ✓           |
| AES3 (analoge Karte) | G        | G        | G    | G    | ✓     | G         | G          | G       | ✓           |
| Jennifer                                | G        | G        | G    | G    | ✓     | G         | ✓          | ✓       | ✓           |
| Dante 256 IPCore                        | ✓        | ✓        | ✓    | —    | —     | —         | —          | ✓       | —           |
| DADLink                                 | G        | G        | G    | G    | G     | G         | G          | G       | —           |
| Donnerblitz 3                           | ✓        | ✓        | ✓    | —    | —     | —         | —          | —       | —           |
| Ravenna-Karte                           | G        | G        | G    | —    | —     | —         | —          | —       | —           |
| AES67                                   | G        | G        | G    | G    | ✓     | G         | ✓          | ✓       | ✓           |
| ST 2110-30                              | G        | G        | G    | G    | —     | —         | —          | ✓       | —           |
| Wortuhr-I/O                             | ✓        | ✓        | ✓    | ✓    | ✓     | ✓         | ✓          | ✓       | ✓           |

_E = benötigt Erweiterungskarte oder Modul. Die Erweiterungsoptionen variieren je nach Produkterstellung und verfügbaren Kartensteckplätzen. Weitere Informationen zur Slot Konfiguration finden Sie in der Anleitung zur Hardware-Installation._

> **HINWEIS:** Diese Matrix reflektiert die Hardware-Fähigkeiten von DADman v5.8.2 Build 2 (Januar 2026). Neue Erweiterungskarten-Optionen können in späteren Firmware- oder Hardware-Revisionen eingeführt werden. Überprüfen Sie [digitalaudiosupport.com](https://www.digitalaudiosupport.com) für den aktuellen Produktkonfigurator.

---

## Anhang D — Tastaturkürzel

Siehe [Kapitel 7, Abschnitt 7.10.3] für die vollständige Tastaturkürzelreferenz.

---

## Anhang E — Changelog

Dieser Anhang dokumentiert die Veröffentlichung der DADman Software ab 2019 auf die in diesem Handbuch enthaltene Version. Einträge werden zuerst neu aufgelistet. Jeder Eintrag zeigt die Software-Version, die Firmware-Firmware-Versionen, neue Funktionen und bemerkenswerte Fehlerbehebungen. Nur-Firmware-Versionen werden separat vermerkt.

Vollständige Release-Notizen, einschließlich detaillierter Firmware-Änderungsprotokolle, sind im Download-Center unter [digitalaudiosupport.com]verfügbar (https://www.digitalaudiosupport.com).

---

### DADman v5.8.2 Build 2 — 2026-01-19 _(Aktuelles Release)_

| Komponente                  | Version                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                      | v5.8.2 b2 — macOS 10.13–15, Windows 10/11 |
| TB3-Treiber — macOS         | v1.2.2 _(keine Änderung)_              |
| TB3-Treiber — Windows       | v1.1.2 _(keine Änderung)_              |
| Thunder\|Kern-Firmware      | v1.1.2.4                                  |
| Dante 256 IPCore            | v1.0.3.1                                  |
| Familie 1 Firmware          | v2.4.6.4                                  |
| Brooklyn 2 Dante Modul      | v1.0.3.1                                  |
| Brooklyn 3 Dante Modul      | v1.1.0.3                                  |
| MTRX Studio Firmware        | v1.1.6.3                                  |
| MTRX Studio Dante 64 IPCore | v1.0.3.1                                  |
| Dante-Kartenfirmware        | v1.0.3.1 _(neu)_       |

**Neu in DADman:**

- Ravenna Karte wird jetzt von DADman unterstützt
- Dante Card und Ravenna Card: Netzwerk-Samplate ist jetzt konfigurierbar, wenn SRC aktiviert ist
- EuCon: Anzahl der Meter erhöht auf 16

**Neu in Firmware:**

- Alle Dante-Firmware auf neueste Versionen aktualisiert
- ST 2110-30 und erweiterte AES67 für alle Dante-Implementierungen über DDM verfügbar
- Brooklyn 3-Modul: ST 2110-30 jetzt ohne DDM verfügbar (benötigt den neuesten Dante-Controller)
- Unterstützung für neue Ravenna Card (RAVENNA / AES67 / ST 2110-30)
- Dynaudio Control 02 unterstützt nun neben Control 01

**Fehlerbehebungen:**

- macOS: Talkback-Menü zeigt nicht den korrekten ausgewählten Wert im Monitor-Profil-Dialog an
- EuCon: Kontrollraumlevel nach Ausschalten der Ref Level nicht wieder aktiviert
- macOS: Verbesserte Thunderbolt Kommunikationsstabilität
- Verschiedene kleinere Korrekturen

---

### DADman v5.8.1 Build 6 — 2025-05-01

| Komponente             | Version                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| DADman                 | v5.8.1 b6 — macOS 10.13–15, Windows 10/11      |
| TB3-Treiber — macOS    | v1.2.2 _(keine Änderung)_                   |
| TB3-Treiber — Windows  | v1.1.2 _(keine Änderung)_                   |
| Thunder\|Kern-Firmware | v1.1.1                                                         |
| Familie 1 Firmware     | v2.4.5.1                                       |
| MTRX Studio Firmware   | v1.1.5.1 _(keine Änderung)_ |

**Neu in DADman:**

- **Mic Gain Groups** — Mehrere Mikro-Eingangskanäle können miteinander verbunden werden, so dass das Anpassen von Gewinn oder Stummschalten auf einem Kanal alle Kanäle der Gruppe gleichzeitig bewegt, Beibehaltung relativer Offsets zwischen Kanälen. Unterstützt auf allen Produkten **außer MTRX Studio**. Firmware-Aktualisierung erforderlich. Phantomleistung und Phasenumkehrung sind nicht zusammengefasst. Halten Sie Alt/Option gedrückt, um einen einzelnen Kanal innerhalb einer Gruppe anzupassen, ohne andere zu beeinflussen.
- Control\|Pack: Routing-Voreinstellungen können nun im Routing Preset-Dialog neu sortiert werden _(erfordert Firmware-Update)_
- Control\|Pack: Der Auslösestatus wird nun im Dialogfeld Routing Preset angezeigt
- macOS: Spalten der Geräteliste können durch Klicken auf Spaltenüberschriften sortiert werden

**Fehlerbehebungen:**

- Control\|Pack: Verschiedene Korrekturen im Dialogfeld Routing
- Windows: Routing-Preset-Metergrafiken verbessert
- Windows: Absturz bei der Bearbeitung von MIDI aufgelöst
- macOS: Grafiken auf skalierten Displays mit großen DADman Fenstern
- macOS: Fehler bei der Aktualisierung der Statusfarbe im Routing Preset Dialog

---

### Firmware-only Release — 2025-01-09

| Komponente             | Version                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------- |
| DADman                 | v5.8.0 b8 _(ohne Änderung)_          |
| Thunder\|Kern-Firmware | v1.1.0.4 _(Bug Fix)_ |

**Fehlerkorrekturen in Firmware:**

- AX Center: ADC Chipset Timing Fehler, der in einigen Fällen das Übergeben von Audio verhinderte — behoben
- AX Center Dante Card: Externe Synchronisierung mit Dante Netzwerkkarte nicht korrekt konfiguriert — repariert

---

### DADman v5.8.0 Build 8 — 2024-12-01

| Komponente             | Version                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| DADman                 | v5.8.0 b8 — macOS 10.13–15, Windows 10/11 |
| TB3-Treiber — macOS    | v1.2.2 _(neu)_                         |
| TB3-Treiber — Windows  | v1.1.2 _(keine Änderung)_              |
| Thunder\|Kern-Firmware | v1.1.0.3                                  |
| Familie 1 Firmware     | v2.4.4.1                                  |
| MTRX Studio Firmware   | v1.1.5.1                                  |

**Neu in DADman:**

- **Control\|Pack** — Routen des Preset-Systems für Thunder\|Core Units (AX64, AX Center, Core 256) mit bis zu 32 Voreinstellungen pro Einheit, die jeweils bis zu vier schaltbare Eingangsschaufeln unterstützen. Enthält automatisierte Schaltvorgänge über Signalpegelerkennung, AE6 Tonintegrität und Anschlussauslöser. Firmware-Aktualisierung erforderlich.
- Unterstützung für CARD-2MADI-SO (720251A) — MADI-Karte mit bidirektionaler Abtastrate Konvertierung
- Übersicht-Ansicht: Klapp-Down-Steuerelemente werden jetzt in Spalten angezeigt, wenn viele Fold-Downs konfiguriert sind
- Windows: Minimal unterstütztes Betriebssystem ist jetzt Windows 10 (Windows 7 und 8 werden nicht mehr unterstützt)

**Neu im TB3-Treiber (v1.2.2):**

- Wenn die DriverKit-Erweiterung nicht korrekt aktiviert ist, werden Anweisungen und ein Screenshot angezeigt, um den Benutzer zu führen
- Wenn die Installation abgeschlossen ist und die Erweiterung aktiviert wird, bringt der Treiber den Installer in den Vordergrund und beendet ihn sauber
- Wenn kein Gerät verbunden ist: Es wird eine Nachricht "Kein Gerät verbunden" statt leerer Dropdowns angezeigt

**Fehlerbehebungen:**

- Monitor-Profil: Laden und Stornieren eines Profils würde die Datei beim nächsten Speichern beschädigen — behoben
- macOS: Scrolling von Artefakten bei skalierten Displayauflösungen — behoben
- macOS: Absturz beim Öffnen von DADman durch Doppelklick auf eine Datei im Finder — behoben
- macOS: Seltenes Thunderbolt Kommunikationsproblem — behoben _(auch benötigt ein TB3 Treiberupdate auf v1.2.2)_
- macOS: Datei-Öffnen-Dialoge erlauben die Auswahl von Verzeichnissen nicht mehr

> **Bekanntes Problem (macOS 15 Sequoia):** DADman kann beim ersten Start auf macOS 15 keine Verbindung zu Netzwerkgeräten herstellen. Problemumgehung: Abmelden und wieder einloggen. Thunderbolt-Verbindungen sind nicht betroffen. Siehe: _Kapitel 9, Abschnitt 9.3_.

---

### DADman v5.7.2 Build 1 — 2024-09-25

| Komponente             | Version                                                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman                 | v5.7.2 b1 — macOS 10.13–15 (inkl. Sequoia), Windows 10/11 |
| TB3-Treiber — macOS    | v1.1.26                                                                                                      |
| TB3-Treiber — Windows  | v1.1.2 _(keine Änderung)_                                                                 |
| Thunder\|Kern-Firmware | v1.0.6.3                                                                                     |
| Familie 1 Firmware     | v2.4.3.1                                                                                     |
| MTRX Studio Firmware   | v1.0.4.2                                                                                     |

**Neue Hardware-Unterstützung:** Dynaudio Control 01 Monitor-Controller.

**Neu in DADman:**

- macOS 15 Sequoia Unterstützung _(Problem mit Netzwerkverbindung — siehe v5.8.0)_
- Unterstützung für Thunderbolt Modul 722150B
- Sektionskopftasten (AD / DA / Mon / Con / Conf) zeigen nun Tooltipps an. Klicken Sie auf eine Sektion Kopfzeile oder erweitert diesen Abschnitt
- "Über DADman" hat jetzt einen **Kopiere Informationen** Button — Kopiere DADman Version, angeschlossene Geräteliste Betriebssystem-Version und Treiber-Versionen in der Zwischenablage zur Verwendung in Support-Anfragen
- Menü "Letzte Profile öffnen" zur Hauptmenüleiste hinzugefügt
- macOS: Monitor-Profil-Fenster ist jetzt skalierbar; der letzte aktive Tab wird beim erneuten Öffnen wiederhergestellt
- Fenster: Option "In den Tray minimieren" ersetzt durch **Einfügen** Einstellung mit drei Optionen: Nur Taskleiste · Taskleiste und Systemabschnitt · Nur Systemabschnitt
- Phasenumkehrsymbol wurde von "Ph" zu "Ø" geändert, um Verwirrung mit Phantomleistung zu vermeiden

**Fehlerbehebungen:**

- Fehler beim Überwachen der EQ-Parameterzuordnung, wenn zwischen den Monitorausgabemengen gewechselt wird — behoben
- Windows: DADman konnte auf einigen Systemen aufgrund fehlender `VCRUNTIME140_1.DLL` nicht starten — behoben
- Windows: Gerätesperre mit BitDefender-Firewall in bestimmten IP-Bereichen — repariert
- macOS: Datei-Lese-/Schreibfehler alarmieren nun den Benutzer
- MADI Ausgabe-Bildrate für DSD über PCM korrigiert
- Verarbeitungsfehler für Kanäle über 16 verzögern — behoben

**Neu in Firmware (Thunder\|Core v1.0.6.3):**

- ADAT-Kanal 3 bei 88.2/96 kHz; ADAT-PLL und Verriegelung verbessert
- DA Kartenphasenfehler auf Kanal 8 korrigiert (AX Center analoge Base-Board)
- DADLink Abtastrate Ausgabefilter korrigiert
- Warnung: Falsche Karte Fehleralarm korrigiert; FPGA-Überwachung hinzugefügt
- Unterstützung für Thunderbolt Modul 722150B hinzugefügt

---

### Firmware-only Release — 2024-03-06

| Komponente         | Version                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- |
| DADman             | v5.7.0 b1 _(keine Änderung)_         |
| Familie 1 Firmware | v2.4.2.2 _(Bug Fix)_ |

**Fehlerbehebung:** DigiLink Interface Timing und Formatfehler in Familie 1 Firmware v2.4.1.2 — korrigiert. Nicht anwendbar auf DAD-Hardware.

---

### DADman v5.7.0 Build 1 — 2023-11-15

| Komponente             | Version                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| DADman                 | v5.7.0 b1 — macOS 10.13–14, Windows 10/11 |
| TB3-Treiber — macOS    | v1.1.26 _(keine Änderung)_             |
| TB3-Treiber — Windows  | v1.1.2 _(keine Änderung)_              |
| Thunder\|Kern-Firmware | v1.0.5.2                                  |
| Familie 1 Firmware     | v2.4.1.2                                  |
| MTRX Studio Firmware   | v1.1.3.1                                  |

> **Hinweis:** macOS 10.10 (Yosemite), 10.11 (El Capitan) und 10.12 (Sierra) werden von dieser Version nicht mehr unterstützt.

**Neu in DADman:**

_Menüleiste und System Tray-Modus:_ DADman kann nun im Hintergrund mit minimaler Desktop-Präsenz laufen. macOS: drei Anzeigemodi — Dock Only, Menu Bar und Dock, und Menu Bar nur (versteckt vor dem Dock; mit   1 wiederherstellen oder DADman erneut starten). Windows: System Tray Modus hinzugefügt — Linksklick zum Anzeigen/Verstecken; Rechtsklick für Anzeigen/Verstecken von Optionen.

_Talkback RAW-Modus:_ Ein neuer Talkback-Modus, in dem Talkback nur aktiv ist, wenn der Button gedrückt wird und bei der Freigabe endet (Push-to-Talk). Der vorherige Schalter/Latch-Modus bleibt verfügbar. Der RAW-Modus gilt für MOM Hardware und MTRX Studio Frontpaneelen; EuCon Oberflächen verwenden immer den Umschalt-/Latch-Modus.

_DADLink für alle Produkte:_ DADLink ist ab sofort auf Family 1 Hardware (AX32, DX32, Penta 720, Penta 721s) über Firmware v2 verfügbar. .1.2, zusätzlich zu Thunder\|Core Einheiten.

_Matrix View-Erweiterungen:_ Maximale Matrix View-Größe ist nun in den Einstellungen (32×32, 64×64, 128×128, oder 256×256) konfigurierbar. Tooltips auf dem Matrixhover zeigen Kanalnummern und Label an. Trackpad / Scrollrad scrollt nun eher die Matrixansicht als das ganze Fenster. DADLink-Port-Namen werden in Tooltips angezeigt.

_File handling:_ `.dms` und `.dmprof` Dateien können nun direkt vom Finder oder vom Windows Explorer durch einen Doppelklick geöffnet werden. Kommandozeilendatei öffnen unterstützt: `open -a DADman settings.dms profile.dmprof` (macOS); `DADman.exe settings.dms profile.dmprof` (Windows). DADman versucht nun fortwährend eher die Einheitenverbindungen als die Timeout zu wiederholen. Windows: DADman speichert Dateien automatisch beim Abmelden, Herunterfahren oder Neustart.

**Tastenkürzel (zuerst formell in dieser Version dokumentiert):**

| Aktion                        | macOS | Fenster             |
| ----------------------------- | ----- | ------------------- |
| Datei > Öffnen…               | Mo    | Strg+O              |
| Datei > Speichern             | MP    | Strg+S              |
| File > Save As…               | G Nr  | Strg+Umschalt+S     |
| Datei > Profil öffnen…        | A     | Strg+Alt+O          |
| Datei > Profil importieren…   | I     | Strg+Alt+I          |
| Datei > Profil speichern      | G Nr  | Strg+Alt+S          |
| Datei > Profil speichern als… | Neu   | Strg+Alt+Umschalt+S |
| Datei > Profil schließen      | MW    | Strg+Alt+W          |
| Hauptfenster anzeigen         | ⌘⇧1   | —                   |
| Geräteliste                   | LT    | Strg+Umschalt+L     |
| Profil überwachen             | MP    | Strg+Umschalt+M     |
| Einstellungen / Optionen      | ⌘,    | Strg+,              |

**Fehlerbehebungen:**

- Datenfehler beim Hinzufügen von Matrizen mit mehr als 1.024 Elementen behoben

---

### DADman v5.6.9 build 1 — 2023-06-14 _(ungefähr)_

| Komponente             | Version                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| DADman                 | v5.6.9 b1 — macOS 10.10–13, Windows 10/11      |
| TB3-Treiber — macOS    | v1.1.26                                                        |
| TB3-Treiber — Windows  | v1.1.2 _(erste offizielle Version)_         |
| Thunder\|Kern-Firmware | v1.0.3.4                                       |
| Familie 1 Firmware     | v2.3.6.1 _(keine Änderung)_ |

**Neu in DADman:**

- **Avid MTRX II** zur unterstützten Hardwareliste hinzugefügt
- **Clone Settings** — Kopieren Sie alle Einstellungen von einer Hardware-Einheit in eine andere innerhalb derselben Familiengruppe. Drei Familiengruppen definiert: Familie 1 (MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s), Familie 2 (MTRX II · AX64 · AX Center · Core 256), Familie 3 (MTRX Studio)
- **DADLink** — proprietärer optischer Audio-Anschluss mit hoher Kanalanzahl für AX64, AX Center, Core 256 und MTRX II via mini MADI Modul mit SFP optischen Transceivern. Bis zu 128 Kanäle bei 48 kHz, 64 Kanäle bei 96 kHz, 32 Kanäle bei 192 kHz pro Verbindung. Ungefähr 1 μs Latenz.
- Windows ASIO-Treiber — erste offizielle (nicht-beta) Version

---

### DADman v5.6.7 Build 1 — 2023-02-06

| Komponente            | Version                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------- |
| DADman                | v5.6.7 b1 — macOS 10.10–12, Windows 10/11 |
| TB3-Treiber — macOS   | v1.1.22                                                   |
| TB3-Treiber — Windows | v1.0.8                                                    |

> **Hinweis:** Windows 7 Unterstützung wurde von dieser Version abgebrochen.

**Neu in DADman:**

- **DAD AX Center** zur unterstützten Hardwareliste hinzugefügt
- Windows ASIO-Treiber offiziell freigegeben (außer Beta)

---

### Nur-Firmware-Version — 2022-12-05

| Komponente         | Version                                                                             |
| ------------------ | ----------------------------------------------------------------------------------- |
| DADman             | v5.6.5 b1 _(ohne Änderung)_      |
| Familie 1 Firmware | v2.3.6.1 _(neu)_ |

**Neu in Firmware:**

- Brooklyn 3 Dante Modul unterstützt nun neben Brooklyn 2
- Verbesserter 3G SDI KartenZurücksetzungsmechanismus — korrigiert ein Timing-Problem, das die korrekte Aktivierung der SDI-Kanäle nach dem Einschalten verhindern könnte

---

### DADman v5.6.3 Build 8/23 — 2022-07-01

| Komponente          | Version                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| DADman              | macOS v5.6.3 b8 · Windows v5.6.3 b23 |
| TB3-Treiber — macOS | v1.1.9.4 _(Beta)_                 |

**Neue Funktionen:**

- **Windows 11** Unterstützung hinzugefügt
- Die Reihenfolge der Quell- und Ausgabesetzungen in der Monitorprofilkonfiguration kann nun nach dem ersten Setup neu angeordnet werden
- Windows: DADman sucht nun automatisch nach Netzwerkgeräten, wenn sich Netzwerkverbindungen ändern

**Fehlerbehebungen:**

- Dunkler Modus: Aufklappbare Labels werden jetzt korrekt angezeigt

---

### DADman v5.6.2 Build 13b — 2022-05-27

| Komponente          | Version                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| DADman              | v5.6.2 b13b — macOS 10.10–12, Windows 7/8/10 _(Beta)_ |
| TB3-Treiber — macOS | v1.1.9.4 _(erste Version — Beta)_                     |

**Neue Funktionen:**

- **Thunder\|Core Hardware-Unterstützung** — erste Veröffentlichung die AX64, AX Center und Core 256 via Thunderbolt 3 unterstützt
- macOS 12 Monterey Unterstützung
- Geräteliste automatisch öffnen, wenn DADman ohne angeschlossene Einheiten startet
- **Import-Profil** wurde zum Dateimenü hinzugefügt — Importiert ein Monitor-Profil von jeder angeschlossenen Einheit und wendet die Einstellungen der aktuellen Einheit am besten an
- Dunkler Modus: Verklappung Label Rendering verbessert

---

### DADman v5.5.0 Build 2 — 2021-06-03

| Komponente | Version                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| DADman     | v5.5.0 b2 — macOS 10.10–11 (Intel und Apple Silicon M1), Windows 7/8/10 |

**Neue Funktionen:**

- **Apple Silicon (M1) native support** — DADman läuft nativ auf Apple Silicon ohne Rosetta 2 Übersetzung
- MOM: Bass Management an/aus und EQ an/aus Tasten jetzt als zuweisbare MOM Tasten in PRO\|MON verfügbar

---

### DADman v5.4.5 Build 1 — 2021-01-10 / 2021-03-18

| Komponente | Version                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.4.5 b1 — macOS 10.10–11 (Intel), Windows 7/8/10 |

**Neue Funktionen:**

- NTP Penta 721s zur unterstützten Hardwareliste hinzugefügt _(Januar 2021 Build)_
- macOS 11 Big Sur Unterstützung (nur Intel läuft) _(März 2021 build)_

---

### DADman v5.4.4 Build 2 — 2020-09-30

**Nur Fehlerbehebungen:** Bass Management Verhalten bei mehreren Sub-Ausgängen; EuCon Rückruf bei Avid S6; SPQ Konfigurationsfehler in v5. .4 b1; MTRX Studio Firmware Update Timing Fix.

---

### DADman v5.4.3 Build 2 — 2020-08-20

| Komponente | Version                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| DADman     | v5.4.3 b2 — macOS 10.10–15 _(Catalina neu)_, Windows 7/8/10 |

**Neue Funktionen:**

- macOS 10.15 Catalina Unterstützung
- Tooltips zu Tasten und Regler im gesamten DADman Interface
- Automatische Zuweisung von aufeinanderfolgenden Kanälen im Dialog Profilgruppen überwachen
- AD / DA / Mon / Con / Conf Abschnitt erweitert/zusammengebrochen, in den Einstellungen gespeichert
- Markierungen für ausgewählte Werte in Popupmenüs
- Warnung, die angezeigt wird, wenn Firmware heruntergeladen wird, die älter ist als oder gleich wie die aktuelle Version
- Peak/hold Metering auf AD- und DA-Kanälen für AX32, Penta und MTRX-Hardware _(erfordert Firmware v2.3.2.1 oder höher)_
- Lange Kanal-Labels mit Ellipse abgeschnitten, um Layoutüberlauf zu vermeiden

---

### DADman v5.3.4 Build 3 — 2019-08-01

| Komponente | Version                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.3.4 b3 — macOS 10.10–14 _(Mojave neu)_, Windows 7/8/10 |

**Neue Funktionen:**

- **Portbezeichnung für digitale I/O-Karten** — jeder physische Port (MADI, Dante, AES3) kann eine individuelle Bezeichnung zugewiesen werden; werden in der Hardware-Einheit gespeichert und in der Matrix-Ansicht angezeigt
- Unterstützung der DigiLink-Karte _(Avid MTRX nur — nicht anwendbar auf DAD-Hardware)_
- macOS 10.14 Mojave Unterstützung _(erfordert keine Farbprofil-Workaround)_
- Schnelleres Starten der Anwendung auf macOS; verringerte allgemeine CPU-Last

---

## Anhang F — Entsprechenserklärungen

Siehe [Front-Matter, Section FM.9 — Regulatory Compliance] für CE, FCC, ICES-003, UKCA und RoHS Deklarationen.

_[Abschlusserklärungen, die vor der Veröffentlichung von DAD / NTP-Technologie-Engineering und legal einzufügen sind.]_

---

## Appendix G — Glossary

Begriffe sind alphabetisch aufgeführt. Wenn ein Begriff eine gemeinsame Abkürzung hat, erscheint der Eintrag unter der vollständigen Form mit der angemerkten Abkürzung, und ein Querverweis wird an der alphabetischen Position der Abkürzung platziert. DAD-Produktnamen und markenmarkierte Begriffe werden so dargestellt, wie sie auf dem Produkt oder in DADman erscheinen.

---

**AD Tab**
Die Registerkarte _Analog zu Digital_ in DADman. Zeigt den Kanalabschnitt für alle analogen Eingangskanäle der angeschlossenen Hardware-Einheit(en), mit Steuerungen für den Eingangsgewinn, Stummschaltung, Phasenumkehr, Phantomleistung (+48 V) und Kanalkennzeichnungen. Dosierung für jede Eingabe wird in diesem Tab angezeigt. Siehe auch: _DA Tab_.

**ADAT** (Alesis Digital Audio Tape optische Schnittstelle)
Eine optische digitale Audio-Schnittstelle, die bis zu 8 Audiokanäle bei 44 sendet. oder 48 kHz oder 4 Kanäle bei 88.2 oder 96 kHz über ein einziges TOSLINK-Glasfaserkabel. Unterstützt als I/O-Option bei der Auswahl der DAD-Hardware. Bei doppelten Abtastraten wird die Kanalanzahl halbiert — dies wird _S/MUX_ genannt. Siehe auch: _S/MUX_.

**AES3** (AES/EBU)
Ein professioneller ausgewogener digitaler Audio-Interface-Standard, definiert von der Audio Engineering Society (AES) und der European Broadcasting Union (EBU). Zwei Kanäle PCM-Audio über ein ausgewogenes XLR-Kabel transportieren. Wird als AES/EBU bezeichnet. Unterstützt auf DAD-Hardware als diskretes I/O-Format, typischerweise über DB25 Breakout-Steckverbinder, die mehrere AES3-Paare tragen. Siehe auch: _AES67_.

**AES67**
Ein Interoperabilitätsstandard für Audio-over-IP (AoIP), definiert von der Audio Engineering Society. AES67 definiert eine gemeinsame Transportschicht, die es Dante, Ravenna, WNEU und anderen AoIP-Implementierungen ermöglicht, Audio-Streams auszutauschen. DAD-Hardware mit Dante- oder Ravenna-Schnittstellen kann für den AES67-Modus konfiguriert werden. Siehe auch: _Dante_, _Ravenna_, _ST 2110-30_.

**ASIO** (Audio Stream Input/Output)
Eine latenzarme Audio-Treiber-Architektur für Windows, die von Steinberg entwickelt wurde. Der DAD Thunderbolt 3 ASIO Treiber stellt Thunder\|Core Schnittstellen (AX64, AX Center, Core 256) als ASIO Geräte in Windows DAWs dar. Konfiguriert über das DAD ASIO Treiber-Bedienfeld mit Puffergröße, Abtastrate und Kanalanzahl.

**Autoboot**
Die Konfiguration von DADman, die automatisch beim Start des Computers gestartet werden soll, wahlweise eine bestimmte Einstellungsdatei laden und das Profil ohne Benutzerinteraktion überwachen. Bei macOS wird automatisch über Login-Items oder einen AppleScript Delay-Launcher gestartet. Unter Windows, über den Windows Startup Ordner oder Task-Planer. Siehe _Kapitel 8, Abschnitt 8.7_.

**AX Center**
Ein DAD Audio-Interface in der Thunder\|Core Produktfamilie. Kombiniert eine A/D- und D/A-Konvertierung mit einer Dante-Netzwerkschnittstelle und Thunderbolt 3-Konnektivität. Unterstützt bis zu 128 Kanäle über Thunderbolt bei 44.1/48 kHz. Über DADman gesteuert und konfiguriert.

**AX32**
Ein DAD-Audio-Router und -Konverter. Das Flaggschiff-Produkt der Hardware-Gruppe Family 1, unterstützt bis zu 256×256 Kreuzpunkt-Routing über eine Ethernet-basierte Matrix, mit Erweiterungskartensteckplätzen für MADI, Dante, AES3, analoge I/O, SDI, und SPQ. Über DADman gesteuert.

**AX64**
Ein DAD Audio-Interface in der Thunder\|Core Produktfamilie. Stellt 64 Kanäle mit Thunderbolt 3-Konnektivität sowie Erweiterungsoptionen für MADI, Dante, AES3 und analoge I/O zur Verfügung. Über DADman gesteuert.

**Bucket**
In Control\|Pack-Routing Presets ist ein _Bucket_ eine von bis zu vier unabhängigen Eingangslagen innerhalb einer einzigen Voreinstellung des Routers. Jede Gruppe definiert einen kompletten Satz von Quellkanälen, die als einzelne Aktion auf die Ausgabe des Presets umgestellt werden können. Eimer werden manuell oder automatisch auf Basis von Signaldetektor-Triggern geschaltet. Siehe auch: _Control\|Pack_, _Routing Preset_, _Trigger_. Siehe _Kapitel 8, Abschnitt 8.4_.

**CE** (Conformite Europe enne)
Eine obligatorische Produktkennzeichnung für Waren, die innerhalb des Europäischen Wirtschaftsraums verkauft werden, die Angabe des Produkts erfüllt alle anwendbaren EU-Richtlinien für Sicherheit, elektromagnetische Kompatibilität und andere regulatorische Anforderungen. DAD / NTP-Technologie-Hardware trägt CE-Kennzeichnung. Die vollständige Deklaration der Konformität ist in der DAD verfügbar und in _Anhang F_ wiedergegeben.

**Klonen / Klonen**
Eine DADman-Operation, die alle Einstellungen von einer angeschlossenen Hardware-Einheit auf eine andere innerhalb derselben Hardware-Familiengruppe kopiert. Das Klonen erfolgt über das Kontextmenü der Geräteliste. Einheiten müssen in der gleichen Familiengruppe sein; Einstellungen für I/O-Karten, die in der Zieleinheit nicht vorhanden sind, werden auf Werkseinstellungen gesetzt. Siehe _Kapitel 8, Abschnitt 8.3_. Siehe auch: _Familiengruppe_.

**Con Tab**
Der Tab _Verbindungen_ im DADman. Zeigt die vollständige Cross-Point-Routing-Matrix für die angeschlossene Einheit an, mit Eingängen auf einer Achse und Ausgängen auf der anderen. Blaue Quadrate zeigen aktive Verbindungen an. Die Verbindung erfolgt durch Anklicken von Kreuzpunkten; mehrere Verbindungen können gleichzeitig mit Hilfe von Shift+Click für Stereo-Paare hergestellt werden. Siehe auch: _Crosspoint_, _Routing Matrix_.

**Konf Tab**
Die _Konfiguration_ Registerkarte in DADman. Bietet Kontrolle über Synchronisationsparameter (Taktquelle, Abtastrate und Adapt To), formatspezifische Einstellungen (MADI Framerate, Dante Konfiguration, AES3 Optionen) und Port-Level-Konfiguration. Der Conf Tab-Inhalt variiert je nach Hardwaremodell und installierten Erweiterungskarten.

**Control 01 / Control 02**
DAD Hardware-Monitor-Controller. Kompakte, dedizierte Hardware-Einheiten zur praktischen Steuerung von DADman Monitorfunktionen ohne dass eine externe Steuerungsfläche erforderlich ist. Unterstützt von DADman v5.8.2 Build 2 (Control 01) und v5.8.2 Build 2 (Control 02, eingeführt Januar 2026).

**Control\|Pack**
Ein Routing-Preset-System für Thunder\|Core Hardware (AX64, AX Center, Core 256) eingeführt in DADman v5.8.0 build 8. Ermöglicht bis zu 32 Routing Presets pro Einheit mit bis zu vier Eingabegruppen, die gleichzeitig innerhalb eines Audiosamples wechseln. Automatisches Schalten basierend auf Signalpegelerkennung, AE6 Tonintegrität oder Anschlussstatus. Siehe _Kapitel 8, Abschnitt 8.4_. Siehe auch: _Bucket_, _Routing Preset_, _Trigger_.

**Core 256**
Ein DAD-Audio-Interface in der Thunder\|Core Produktfamilie. Unterstützt bis zu 256 Kanäle über Thunderbolt 3 bei 44.1/48 kHz mit umfangreichen Erweiterungskarten. Das größte Mitglied der Thunder\|Core-Familie zum Zeitpunkt der Veröffentlichung. Über DADman gesteuert.

**Core Audio**
Apples Audio-I/O-Architektur für macOS. DAD Thunder\|Core Einheiten erscheinen als Core Audio Geräte, wenn der DAD Thunderbolt 3 Core Audio Treiber installiert ist, und stellt sie für jede MacOS-Audioanwendung zur Verfügung. Siehe auch: _ASIO_.

**Crosspoint**
Eine einfache Kreuzung in der DADman-Routing-Matrix, die eine Verbindung zwischen einer Eingabe und einer Ausgabe darstellt. Das Aktivieren eines Kreuzpunktes leitet das Signal von diesem Eingang zu diesem Ausgang aus. Ein blaues Quadrat auf der Registerkarte Con zeigt einen aktiven Kreuzungspunkt an. Mehrere Kreuzpunkte können die gleiche Eingabe (Fan-out) haben. Siehe auch: _Con tab_, _Routing Matrix_.

**Cue\|Mix**
Eine Null-Latenz in-Ohr-Monitor-Mixer-Funktion in DADman. Ermöglicht das Erstellen einzelner Kopfhörer- oder IEM-Mischungen unabhängig vom Hauptsteuerungsraummix. _Ausstehende Dokumentation — benötigt DAD Engineering-Eingabe. Siehe: Kapitel 8, Ausstehende Dokumentation._

**DA Tab**
Die Registerkarte _Digital zu Analog_ in DADman. Zeigt Kanalabschnitte für alle analogen Ausgangskanäle auf den angeschlossenen Hardware-Einheit(en) an und bietet Steuerungen für Output-Level-Fader, Mutes und Kanalbeschriftungen. Die Registerkarte DA enthält auch die analogen Kalibrierungssteuerungen (dBu alignment). See also: _AD tab_.

**DAD** (Digital Audio Denmark)
Der Markenname für Audio-Hardware und Software-Produkte, die von NTP Technology A/S, einem dänischen Unternehmen für Audio-Technologie entwickelt wurden. Zu den DAD-Produkten gehören das AX32, AX64, AX Center, Core 256, DX32R, MOM, und die DADman Control-Software. Siehe auch: _NTP Technology A/S_.

**DADLink**
Ein proprietäres Audio-Interconnect-Format mit hoher Kanalanzahl. Verwendet den Mini-MADI-Modulslot auf kompatibler Hardware mit optischen SFP-Transceivern. Stellt bis zu 128 Kanäle mit 44,1/48 kHz zur Verfügung, wobei zwischen angeschlossenen Einheiten ca. 1 Mikrosekunde Latenz besteht. Kompatibel mit AX32, AX64, AX Center, Core 256, DX32R, Penta 720, Penta 721 und MTRX/MTRX II. Siehe _Kapitel 8, Abschnitt 8.6_.

**DADman**
Die von NTP-Technologie A/S (DAD) entwickelte Steuersoftware für Konfigurierung, Überwachung, und Controlling aller DAD- und NTP-Technologie-Hardware-Produkte sowie Avid MTRX, MTRX II und MTRX Studio Audio-Schnittstellen. Verfügbar für macOS und Windows. DADman kommuniziert mit angeschlossenen Einheiten über Ethernet (und optional über Thunderbolt 3 für Thunder\|Core Einheiten). Die Anwendung besteht aus Kanalabschnittsteuerungen (AD, DA, Con, Conf, Mon), Geräteliste, Monitor-Profilverwaltung, Routing Preset-Konfiguration und Einstellungen.

**DAW** (Digital Audio Workstation)
Eine Software-Anwendung, die zum Aufnehmen, Bearbeiten, Mischen und Produzieren digitaler Audio verwendet wird. Pro Tools, Logic Pro, Nuendo, Reaper und Cubase sind gängige Beispiele. DADman integriert sich in DAWs über Ethernet (EuCon), MIDI, Dante und Thunderbolt 3.

**dBFS** (Dezibel relativ zur vollen Skala)
Eine Maßeinheit für das digitale Audiosignalniveau. 0 dBFS ist der maximal mögliche digitale Level; alle praktischen Signalpegel sind negative Werte (z.B. −18 dBFS, −6 dBFS). DADman Metering zeigt Signalstände im dBFS an. Siehe auch: _dBu_.

**dBu**
Eine Maßeinheit für analogen Audiosignalpegel, bezogen auf 0,775 V RMS. Professionelle Audiogeräte arbeiten üblicherweise bei +4 dBu nominal mit Headroom bis +18 dBu oder +24 dBu. DADman DA Tab Output-Level-Steuerungen setzen die analoge Ebene, die 0 dBFS entspricht, und richten die digitalen und analogen Signalbereiche aus. Siehe auch: _dBFS_.

**DDM** (Dante Domain Manager)
Audinates zentralisiertes Managementsystem für Dante-Netzwerke im Unternehmenssaal, bietet Authentifizierung, Netzwerksegmentierung und Quer-Subnet-Routing. Einige erweiterte Dante-Funktionen (wie ST 2110-30 bei bestimmten Modularten) benötigen DDM. Siehe auch: _Dante_.

**Geräteliste**
Die Haupteinheitsanzeigebereich im DADman, zeigt alle angeschlossenen Hardware-Einheiten von links nach rechts in der Reihenfolge ihrer Einheits-ID-Nummern an. Jede Einheit wird mit einem farbigen Rand dargestellt, der die aktuellen Steuerelemente AD, DA und Con/Conf als Kanalstreifen anzeigt. Die Geräteliste stellt die primäre Schnittstelle für Operationen auf Gerätebene zur Verfügung (Firmware-Update, Werkseinsetzung, Klon, Netzwerkeinstellungen).

**DMS** (DADman Settings File)
Das Dateiformat (Endung `. ms`) wird von DADman verwendet, um die komplette Konfiguration aller angeschlossenen Hardware-Einheiten zu speichern — Routing-Verbindungen, gewinnen Sie Einstellungen, Kanalbeschriftungen, Conf Tab-Parameter und alle anderen Einheiteneinstellungen. Einstellungen werden auf der Hardware-Einheit selbst gespeichert; eine `.dms`-Datei ist eine Sicherung der auf dem Computer gehaltenen Einstellungen. Siehe auch: _DMPROF_.

**DMPROF** (DADman Monitor-Profildatei)
Das Dateiformat (Endung `. mprof`) wird von DADman verwendet, um ein Monitorprofil zu speichern — die komplette Monitor-Controller-Konfiguration für eine Hardware-Einheit inklusive Quellen, Ausgabemengen, Einklappungen, Talkback-Routing- und Dosierzuweisungen. Eine `.dmprof` Datei wird auf dem Computer gespeichert, nicht in der Hardware-Einheit. Siehe auch: _Profil überwachen_, _DMS_.

**DPC Latenz** (Verzögerte Prozedur Latenz)
Eine Windows-Systemleistungmetrische Messung der Zeit, die Hardwaretreiber und Systemprozesse benötigen, um Interrupt-Anfragen zu bearbeiten. Hohe DPC-Latenz verursacht Audioausgänge in Echtzeit-Audioanwendungen. Häufige Ursachen sind drahtlose Netzwerktreiber, USB-Stromverwaltungseinstellungen und Antiviren-Software. Relevant für Thunder\|Core ASIO Performance unter Windows. Siehe _Kapitel 9, Abschnitt 9.4_.

**DVS** (Dante Virtual Soundcard)
Eine Software von Audinate, die einen Mac oder PC als Dante Audiogerät im Netzwerk erscheinen lässt Routen der System-Audio des Computers nach Dante. Wird verwendet, um die Ausgabe einer beliebigen Audioanwendung auf das DADman-Monitorsystem als Quelle zu bringen. Siehe _Kapitel 8, Abschnitt 8.10_.

**DX32R**
Ein DAD digitaler Audio-Router und Brücke. Unterstützt das Routing zwischen AES3, MADI und Dante in einem 1RU-Gehäuse. Mitglied der Hardware-Gruppe von Familie 1. Über DADman gesteuert.

**EuCon**
Avids proprietäres Kontrolloberflächenprotokoll, für die Kommunikation zwischen DAWs (insbesondere Pro Tools) und Avid Control Oberflächen (S1, S6, S6L) und der Avid Control App. DADman implementiert EuCon zur Exposition von Kontrollfunktionen – Quellenauswahl, Lautstärke, Abdunklung, Talkback und Abklappung – an jede angeschlossene EuCon-Oberfläche. Aktiviert in DADman über _Einstellungen > EuCon_ aktivieren. Siehe _Kapitel 8, Abschnitt 8.5_.

**Family Group**
Eine Hardware-Kompatibilitätsgruppierung, die von DADman für die Clone-Funktion und zur Identifizierung von Einheiten verwendet wird, die den gleichen Firmware-Zweig teilen. Es gibt drei Familiengruppen: Familie 1 (MTRX, AX32, DX32, Penta 720, Penta 721s); Familie 2 (MTRX II, AX64, AX Center, Core 256); Family 3 (MTRX Studio). Siehe auch: _Klonen / Klonen_.

**FCC** (Federal Communications Commission)
Die Regulierungsbehörde der Vereinigten Staaten für Funkfrequenz und elektromagnetische Kompatibilitätsstandards. DAD / NTP-Technologie-Hardware, die in den USA verkauft wird, muss den FCC-Teil 15 (unbeabsichtigte Heizkörper) entsprechen. Sie: _Anhang F_.

**Firmware**
eingebettete Software, die auf dem internen Flash-Speicher der Hardware-Einheit gespeichert ist, der die Kernfunktionen der Audioverarbeitung, des Routings und der I/O-Funktionen des Geräts steuert. Firmware ist getrennt von DADman (der auf dem Host-Computer läuft). Firmware-Updates werden über DADman von einer Firmware-Datei aus dem DAD-Support-Portal heruntergeladen. Siehe: _Kapitel 10, Abschnitt 10.2_.

**Fold-Down**
Eine Mischmatrix innerhalb eines DADman Monitor Profils, die eine Audioquelle mit höherer Kanalanzahl in ein Format mit geringerer Kanalanzahl umwandelt, um Kompatibilitätsüberwachung zu gewährleisten. So kann beispielsweise mit einem 7,1 Klapptisch auf Stereo geprüft werden, wie ein Surround-Mix zur zweikanaligen Wiedergabe übersetzt. Benutzerdefinierte Matrizen können auch für die Auswahl von Lautsprecheruntersätzen und das Up-Matrizen verwendet werden. Siehe _Kapitel 8, Abschnitt 8.1.6_. Siehe auch: _Up-Match_, _Monitor-Profil_.

\*\*LTC \*\* (Linear-Timecode)
SMPTE Zeitcode als Audiofrequenzsignal kodiert und kann über jede analoge oder digitale Audioverbindung übertragen werden mit einem Dante-Channel. LTC kodiert Stunden, Minuten, Sekunden und Frames um Audio- und Videogeräte zu synchronisieren. Siehe _Kapitel 8, Abschnitt 8.14_.

**MADI** (Multichannel Audio Digital Interface, AES10)
Eine professionelle digitale Audio-Schnittstelle, definiert von der Audio Engineering Society (AES10). Überträgt bis zu 64 Audiokanäle mit 44,1 oder 48 kHz (32 Kanäle bei 88,2/96 kHz im Hochgeschwindigkeitsmodus; 16 Kanäle bei 176. /192 kHz) über ein einzelnes Koaxialkabel oder Glasfaserkabel mit Hilfe von SFP-Modulen. MADI verwendet zwei Bildrate Modus: Legacy (56-Kanal) und High Speed (64-Kanal). Beide Enden einer MADI-Verbindung müssen den gleichen Bildrate Modus verwenden.

**Menüleistemodus**
Ein MacOS-Anzeigemodus für DADman, in dem die Anwendung beim Schließen des Hauptfensters vor dem Dock verbirgt und nur über ein Symbol in der MacOS-System-Menüleiste erreichbar ist. Wird in permanenten Installationsumgebungen verwendet, in denen DADman im Hintergrund laufen soll. Siehe _Kapitel 8, Abschnitt 8.7_.

**Mic Gain Group**
Ein DADman Feature (v5.8. B. 6 und höher), die mehrere analoge Eingangskanäle miteinander verknüpfen, so dass Anpassungen auf einem Kanal alle Kanäle der Gruppe gleichzeitig beeinflussen und stumm bei gleichzeitiger Beibehaltung des relativen Gewinnausgleichs zwischen Kanälen. Phantomleistung und Phasenumkehrung sind nicht zusammengefasst. Unterstützt auf allen Hardware außer MTRX Studio. Siehe _Kapitel 8, Abschnitt 8.2_.

**MOM** (Monitor Operating Module)
Ein DAD Hardware-Monitor-Controller — ein kompakter Rack-montierbare oder Desktop-Hardware-Einheit, die physikalische Knöpfe und Tasten zur Steuerung der DADman Monitorfunktionen (Lautstärke, Quellenauswahl, Dimm, Schnitt, Talkback, Stumm). MOM kommuniziert mit DADman über Ethernet. Siehe _Kapitel 8, Abschnitt 8.5_.

**Mond-Tab**
Der _Monitor_ Tab in DADman. Zeigt Monitor-Steuerelemente für das aktuell geladene Monitor-Profil: Auswahltasten für Quellen, Lautsprecherausgabe-Auswahl, Hauptstufenfader, dim, schneiden, Ref-Knopf, Talkback und Klapp-Selektoren. Die Registerkarte Mon wird nur gefüllt, wenn eine `.dmprof` Monitorprofildatei geladen wird. Siehe auch: _Monitor Profil_.

**Profil überwachen**
Eine DADman Konfigurationsdatei (`. mprof`) definiert das komplette Controller-Setup für den Monitor: verfügbare Quellen, physikalische Ausgabesätze, Matrizen, Talkback-Routing, Verzögerungseinstellungen und Dosierausgänge. Ein Monitorprofil ist völlig getrennt von der Einstellungsdatei (`.dms`). Profile werden auf dem Computer gespeichert und müssen beim Start in DADman geladen werden. Siehe _Kapitel 8, Abschnitt 8.1_. Siehe auch: _DMPROF_, _Source (monitor)_, _Output Set_.

**MTRX / MTRX II / MTRX Studio**
Audioschnittstellenprodukte von NTP Technology A/S (DAD) nach OEM-Vereinbarung. MTRX und MTRX II sind Mitglieder der Hardware-Gruppen der Familie 1 bzw. der Familie 2. MTRX Studio ist Familie 3. Alle drei sind über DADman Software konfiguriert und gesteuert. Avid-spezifische Workflows finden Sie in der entsprechenden Avid-Dokumentation. Siehe: _Front Matter, Abschnitt FM.3_.

**NTP-Technologie A/S**
Das dänische Unternehmen (NTP Technology A/S, Kopenhagen), das DAD-Hard- und Softwareprodukte entwickelt und herstellt. Früher bekannt als NTP / NEVE Technologie. Entwickelt auch Audioprodukte unter der Marke NTP Penta. DAD ist der verbraucherorientierte Markenname; NTP Technology A/S ist die juristische Einheit. Siehe auch: _DAD_.

**Output Set**
In einem DADman Monitor Profil, einer benannten Gruppe von physikalischen Ausgabekanälen, die eine Lautsprecherkonfiguration darstellen — zum Beispiel `Near Field`, `5. Umkreis, oder `85 dB SPL\`. Mehrere Ausgabesätze können mit verschiedenen physikalischen Ausgängen oder den gleichen Ausgängen mit unterschiedlichen Schnittstufen definiert werden, um mehrere Referenz-Level-Presets zu erstellen. Siehe _Kapitel 8, Abschnitt 8.1.4_. Siehe auch: _Referenzstufe_, _Trim_.

**Penta 720 / Penta 721s**
NTP Technologie A/S Audio-Router und Konverterprodukte. Mitglieder der Hardware-Gruppe Familie 1. Mit den gleichen Erweiterungskartenoptionen wie mit dem AX32 können Sie die gleichen Optionen wie die AX32 vornehmen. Über DADman gesteuert. Hergestellt von NTP Technology A/S; vertrieben unter der Marke NTP Penta.

**PCIe** (Peripheral Component Interconnect Express)
Ein interner Hochgeschwindigkeits-Computer-Bus-Standard für die Kommunikation zwischen CPU, RAM und Peripheriegeräten. Thunderbolt 3 legt die PCIe-Bandbreite extern offen, so wie Thunder\|Core-Geräte mit dem Host-Computer bei nahezu Null Latenz kommunizieren.

**PoE** (Power over Ethernet)
Ein Standard (IEEE 802. af/at) ermöglicht es Netzwerkschaltern, elektrische Energie an angeschlossene Geräte über das gleiche Ethernetkabel zu liefern, das für Daten verwendet wird. Der MOM Monitor Controller und einige DAD Zubehörteile unterstützen PoE und entfallen auf eine separate Stromversorgung.

**PRE Emulation**
Eine DADman-Funktion, die es Pro Tools ermöglicht, DADman-angeschlossene Vorverstärkergewinne über MIDI zu steuern, wobei die Hardware als _Avid PRE_ Preamp-Einheit behandelt wird. Ermöglicht die Einstellung von mic gain aus dem I/O Setup von Pro Tools oder einer angeschlossenen Steuerfläche, ohne auf DADman zu wechseln. Siehe _Kapitel 8, Abschnitt 8.15_.

**PRO\|MON**
Eine optionale DADman Software-Lizenz, die die Monitorsteuerung über den Basiswert des Monitorprofils hinaus erweitert erweiterte Monitor-Routing, Talkback, Cue-Bus und Integrationsmöglichkeiten für komplexe Studio- und Broadcast-Monitoring-Umgebungen. Wird hauptsächlich mit AX32, DX32R, Penta 720 und MTRX Studio eingesetzt. _Vollständige ausstehende Dokumentation — benötigt DAD Engineeringeingabe. Siehe: Kapitel 8, Ausstehende Dokumentation._

**PTP** (Precision Time Protocol, IEEE 1588)
Ein Netzwerkprotokoll zur Synchronisierung von Uhren in einem lokalen Netzwerk mit Submikrosekunden. Wird in den Netzwerken von Dante und Ravenna verwendet, um Audio-Streams von verschiedenen Netzwerk-Geräten auszurichten, ohne ein dediziertes Wort-Uhr-Kabel zu benötigen. Siehe auch: _Dante_, _Ravenna_.

**Ravenna**
Ein audio-over-IP-Transport-Protokoll, das von ALC NetworX entwickelt wurde. Wird in High-End-Broadcast- und professionellen Audioanwendungen verwendet. Interoperabel mit AES67. Die DAD Ravenna Card (unterstützt von DADman v5.8.2 Build 2) fügt Ravenna/AES67/ST 2110-30 Verbindungen zu kompatiblen Thunder\|Core Einheiten hinzu. Siehe auch: _AES67_, _ST 2110-30_.

**Bereite LED**
Ein Front-Panel-Statusanzeige auf allen Hardware-Einheiten der DAD / NTP Technologie. Bei solidem Grün wird die Einheit eingeschaltet, gebootet und normal kommuniziert. Eine blinkende oder nicht grüne LED zeigt einen Boot-Einstieg, eine Firmware-Aktualisierung oder eine Fehler-Bedingung an.

**Referenzstufe**
In einem DADman Monitor Profil, einem kalibrierten Ausgangsniveau für eine bestimmte Ausgabemenge, hergestellt mit Testtönen und einem SPL-Meter. Einmal definiert, sperrt das Drücken der **Ref** Taste auf der Registerkarte Mon den Monitor fader auf diese Ebene, wodurch versehentliche Lautstärkeänderungen beim kritischen Hören vermieden werden. Siehe _Kapitel 8, Abschnitt 8.1.5_.

**Routing-Matrix**
Die Signal-Routing-Engine einer DADman-gesteuerten Hardware-Einheit, so dass jeder Eingang an jede beliebige Ausgabe angeschlossen werden kann. Die Routing-Matrix wird auf der Registerkarte DADman **Con** als Gitter von Kreuzpunkten angezeigt und bearbeitet. DAD-Hardware unterstützt Matrizen bis 1.500×1.500 Kreuzpunkte (modellabhängig). Siehe auch: _Con tab_, _Crosspoint_.

**Routing Preset**
In Control\|Pack, eine benannte Konfiguration, die festlegt, welche Ausgabekanäle von der Voreinstellung gesteuert werden und welche Quellbuchstaben zum Umschalten zur Verfügung stehen. Pro Thunder\|Core-Einheit können bis zu 32 Routing-Voreinstellungen konfiguriert werden. Siehe auch: _Control\|Pack_, _Bucket_. Siehe _Kapitel 8, Abschnitt 8.4_.

**RoHS** (Beschränkung gefährlicher Stoffe)
EU-Richtlinie 2011/65/EU zur Beschränkung der Verwendung bestimmter gefährlicher Stoffe (Blei, Quecksilber, Kadmium, hexavalent chromium, bestimmte Flammschutzmittel) in elektrischen und elektronischen Geräten. Die Hardware von DAD / NTP-Technologie entspricht RoHS. Sie: _Anhang F_.

**Beispielrate**
Die Anzahl der aufgenommenen oder abgespielten Audiosamples pro Sekunde, ausgedrückt in kHz. Standardpreise: 44,1 kHz, 48 kHz (Standarddefinition); 88,2 kHz, 96 kHz (hohe Auflösung); 176,4 kHz, 192 kHz (ultrahohe Auflösung). Höhere Abtastrate reduzieren die Kanalanzahl auf zeitmultiplexierte Schnittstellen (MADI, ADAT, DADLink). Die Abtastrate ist pro Einheit im Tab DADman **Conf** konfiguriert.

**SFP** (Small Form-Faktor-Pluggable)
Ein kompaktes, hochtauschbares optisches oder elektrisches Transceiver-Modul, das in MADI- und DADLink-Anschlüssen auf DAD-Hardware verwendet wird. SFP-Module sind in verschiedenen Konfigurationen für Multimode- oder Single-Mode-Faser oder Koaxial-MADI erhältlich. Der SFP-Typ bestimmt den Kabeltyp und die maximale Übertragungsdistanz.

**S/MUX** (Sample Multiplexing)
Eine Technik zur Übertragung höherer Abtastrate über ADAT durch Verwendung mehrerer ADAT-Kanäle zur Übertragung von Daten eines einzigen Kanals. Bei 88.2/96 kHz halbiert sich der ADAT-Kanal auf 4 Kanäle (S/MUX2). Mit 176.4/192 kHz reduziert S/MUX4 die Anzahl weiter auf 2 Kanäle. Siehe auch: _ADAT_.

**Quelle** _(Monitor)_
In einem DADman Monitor Profil steht ein benannter Eingangssignalpfad für die Monitorauswahl zur Verfügung. Die Quellen werden bestimmten Eingangskanälen auf der Hardware-Einheit zugewiesen (Analog, Dante, MADI, AES3, usw.) und erscheinen als wählbare Optionen auf der Registerkarte Mon. Beispiele: `Pro Tools`, `DVS`, `Dante Player`, `Guest`. Siehe _Kapitel 8, Abschnitt 8.1.3_. Siehe auch: _Monitor Profil_.

**SPQ** (ignale Verarbeitungskarte)
Eine optionale DSP-Erweiterungskarte für kompatible DAD-Hardware (AX32 Variante) mit parametrischen EQ pro Kanal bei analogen Monitorausgängen. Für Lautsprecher und Zimmerkorrektur. SPQ-Filterdaten werden typischerweise aus akustischen Messungen erzeugt, die mit Room EQ Wizard (oder ähnlichen Tools) durchgeführt und über die SPQ-Registerkarte in DADman importiert werden. Siehe _Kapitel 8, Abschnitt 8.12_.

**SRC** (Sample Rate Converter)
Eine Hard- oder Softwarekomponente, die digitale Audio zwischen verschiedenen Abtastraten konvertiert. Das Einlegen einer SRC in einen Signalweg unterbricht jede phasenkohärente Beziehung zur ursprünglichen Musteruhr, die zeitempfindliche Signale wie LTC und den AE6-Pilotton beschädigen kann. DADman Units unterstützen SRC bei der Auswahl der I/O Schnittstellen, wenn sie im Conf Tab konfiguriert werden.

**ST 2110-30**
Ein SMPTE-Standard (SMPTE ST 2110-30) für den Transport von unkomprimiertem Audio über IP-Netzwerke, abgeleitet vom AES67-Standard. Wird in professionellen Broadcast-Umgebungen verwendet. Unterstützt auf DAD Dante und Ravenna Schnittstellen von Firmware v1.1.2.4 (Januar 2026). Brooklyn 3 Module unterstützen ST 2110-30 ohne DDM von Firmware v1.1.0.3. Siehe auch: _AES67_, _Ravenna_, _DDM_.

**Thunder\|Core**
Der DAD-Begriff für die Thunderbolt 3-Schnittstellen-Technologie, die in AX64, AX Center und Core 256 Hardware-Einheiten integriert ist. Thunder\|Core bietet extrem latenzarme Audio-I/O zwischen der Hardware-Einheit und dem Host-Computer über ein Thunderbolt 3-Kabel, zusätzlich zur Standard-Ethernet-basierten DADman-Steuerung.

**Thunderbolt 3**
Der High-Speed-Peripherie-Schnittstellenstandard von Intel, der eine Bandbreite von bis zu 40 Gbit/s über einen USB-C-Anschluss bereitstellt. Wird von DAD Thunder\|Core Einheiten für Audio-I/O auf den Host-Computer verwendet. Benötigt den DAD Thunderbolt 3 Treiber (Core Audio unter macOS; ASIO unter Windows). Die minimale Kabelspezifikation für den korrekten Betrieb ist ein zertifiziertes Thunderbolt 3-Kabel mit einer Leistung von 20 Gbps. Siehe: _Kapitel 3, Abschnitt 3.2_ und _Kapitel 9, Abschnitt 9.4_.

**Trim**
In einem DADman Monitor Profile Ausgabewert wird ein fester Level Offset auf diese Ausgabewert relativ zum Hauptbildschirmfader angewendet. Wird verwendet, um mehrere Referenz-Level-Presets auf denselben physikalischen Ausgängen ohne zusätzliche Hardware zu erstellen. Zum Beispiel ein −10 dB Trimmen auf einem zweiten Ausgangssatz, der auf die gleichen Lautsprecher wie das Primärset verweist, ermöglicht eine sofortige Verschiebung des Referenzniveaus von 10 dB. Siehe auch: _Ausgabeeinstellung_, _Referenzstufe_.

**Trigger**
In Control\|Pack-Routing-Presets ist ein _Trigger_ eine Erkennungsbedingung, die einer Gruppe zugewiesen ist, die bestimmt, ob die Quelle dieser Gruppe als gültig gilt. Triggertypen: Signal Level (Audiosignal über −40 dBFS Schwellenwert); AE6 (Integrität des AE6 digitalen Pilotton); Port (physikalischer Anschlussstatus). Siehe _Kapitel 8, Abschnitt 8.4.4_. Siehe auch: _Bucket_, _Control\|Pack_.

**UKCA** (UK Conformity Assessed)
Eine Warenkennzeichnung, die für in Großbritannien (England, Schottland, Wales) ab dem 1. Januar 2021, das CE-Kennzeichen für den britischen Markt nach dem Brexit ersetzt. Äquivalent im Geltungsbereich CE. Die in Großbritannien verkaufte Hardware DAD / NTP Technology trägt die UKCA-Kennzeichnung. Sie: _Anhang F_.

**Up-Match**
Eine benutzerdefinierte Fold-down-Matrix in einem DADman Monitor-Profil, die ein Quellformat mit geringerer Kanalanzahl auf eine höhere Kanalanzahl überführt — zum Beispiel eine 5 verbreiten. über ein 7.1.4 Lautsprecherlayout verfügen. Konfiguriert in der Registerkarte Fold Downs des Monitorprofil-Editors. Siehe auch: _Fold-down_. Siehe _Kapitel 8, Abschnitt 8.1.6_.

**WEEE** (Waste Electrical and Electronic Equipment)
EU-Richtlinie 2012/19/EU zur Erfassung, Recycling und Entsorgung von Elektro- und Elektronikgeräten. Die Beschläge DAD / NTP-Technologie tragen das WEEE-Symbol (Crossed-out-Wheelie-Behälter) und dürfen nicht in unsortierten Hausmüll entsorgt werden. Siehe: _Kapitel 10, Abschnitt 10.8_ und _Front Matter, Abschnitt FM.8_.

**Word Clock**
Ein quadratisches Synchronisations-Signal, das zur Phasensperre von digitalem Audiogerät zu einer gemeinsamen Abtastrate verwendet wird. Word uhr wird bei der Betriebsabtastrate (z.B. 48 kHz) über 75  BNC-Kabel verteilt. DAD-Hardware unterstützt Word Clock in und aus für die Integration in Werkssynchronisationssysteme. Wortuhrverbindungen erfordern 75  Beenden am Endgerät in der Kette. Siehe: _Kapitel 9, Abschnitt 9.5_.

---

## Anhang H — Index

_[Platzhalter: Index, der aus dem fertig kompilierten Dokument generiert wird.]_
