---
title: "Kapitel 7 — Operation"
sidebar_label: "Ch. 7 — Operation"
sidebar_position: 9
---

# Kapitel 7 — Operation

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8. Build 2  
> **Primary reference hardware:** DAD AX Center, Core 256, AX64 (Thunder\|Core Generation)  
> **Chapter status:** Draft v0. — Screenshots ausstehend; Conf tab Dante/TB3 Parameter bis DAD Engineering; PRO\|MON und SPQ Sektionen bis  
> **Letztes aktualisiert:** Juni 2026

---

## In diesem Kapitel

| Abschnitt            | Cover                                               | Wann konsultiert werden                                                                          |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.1  | Sitzungsverwaltung — Dateien, Speichern, Start      | Beginn und Ende der Sitzungen                                                                    |
| 7.2  | Fensterlayout und Navigation                        | Orientierung; erste Verwendung                                                                   |
| 7.3  | Geräteliste                                         | Verwalten der verbundenen Einheiten                                                              |
| 7.4  | Analogeingaben (AD Tab)          | Mikro/Liniengewinn einstellen, Phantomleistung, Phase                                            |
| 7.5  | Analogausgänge (DA-Tab)          | Setze Ausgabelevel und -bereich                                                                  |
| 7.6  | Routing-Matrix (Con Tab)         | Patcht Eingaben auf Ausgänge                                                                     |
| 7.7  | Uhr und Konfiguration (Conf Tab) | Uhr, Abtastrate und digitale I/O-Porteinstellungen                                               |
| 7.8  | Kontrolle überwachen (Mon-Tab)   | Aktive Monitor-Profilanzeige; Quell- und Ausgabeauswahl                                          |
| 7.9  | Steuerung\|Paketstreifen                            | Routing Preset-Steuerung _(v5.8.0 und höher)_ |
| 7.10 | Maus- und Tastatursteuerung                         | Effizienz-Verknüpfungen                                                                          |

> **HINWEIS — Hardware-Variation:** Die Tabs und Parameter in DADman spiegeln die Fähigkeiten der angeschlossenen Hardware wider. Eine Einheit ohne analoge Eingänge zeigt die Registerkarte **AD** an, aber die Steuerelemente sind nicht vorhanden oder werden ausgegraut. Die _[AX32 / Family 1]_ markierten Parameter gelten speziell für die Serie AX32, DX32R und Penta. Nicht markierte Parameter gelten für alle aktuellen Thunder\|Core Hardware (AX Center, Core 256, AX64) sofern nicht anders angegeben.

_[Platzhalter: kommentierte Screenshot von DADman v5.8.2 mit Callout-Nummern für jeden Hauptbereich]_

---

## 7.1 Sitzungsmanagement

### 7.1.1 Konfigurationsdateien und Profile überwachen

DADman verwendet zwei unterschiedliche Dateitypen, um den Systemzustand zu speichern und wiederherzustellen. Die Unterschiede zwischen ihnen zu verstehen, ist für das Session-Management unerlässlich.

#### DADman Einstellungen Datei (.dms)

Eine **DADman Settings File** (Dateierweiterung `.dms`) speichert zum Zeitpunkt des Speicherns einen Schnappschuss aller Einstellungen auf allen verbundenen Einheiten. Dies beinhaltet:

- Analoge Eingangszuwachs, Phantomleistung, Pad-, Phasen- und Kanalbezeichnungen (AD-Sektion)
- Analoge Ausgabeniveau, Mutes und Kanalbeschriftungen (DA-Abschnitt)
- Vollständiges Routing-Matrix-Status (Con-Sektion)
- Uhr-Quelle, Abtastrate und Format-Einstellungen (Conf section)
- Netzwerkkonfiguration und Einheiten ID Zuweisungen
- Control\|Packe Routing Preset-Konfigurationen _(v5.8.0 und höher)_

Einstellungsdateien werden über **Datei > Speichern** oder **Datei > Speichern unter** gespeichert und auf dem Computer gespeichert. Sie wirken sich erst dann direkt auf die Einheit aus, wenn sie geladen ist – an welchem Punkt DADman die gespeicherten Einstellungen auf die angeschlossenen Einheiten über das Netzwerk anwendet.

> **WARNUNG:** Firmware-Updates setzen alle auf der Einheit gespeicherten Einstellungen auf Werkseinstellungen zurück. Speichern Sie immer eine `.dms`-Datei, bevor Sie ein Firmware-Update durchführen. Siehe [Kapitel 10, Abschnitt 10.1 — Firmware aktualisieren].

#### DADman Monitor-Profildatei (.dmprof)

Eine **Monitor-Profildatei** (Dateiendung `.dmprof`) speichert die Monitor-Controller-Konfiguration unabhängig von den Einheitseinstellungen. Ein Monitorprofil definiert:

- Quellen überwachen (Eingänge, die dem Monitor-Controller zugewiesen sind)
- Lautsprecherausgabe-Sets (Mono, Stereo, Umgebung, immersive — bis zu 64 Kanäle)
- Abklappbare Matrizen (z. B. 5.1 zu Stereo, benutzerdefinierte Up-Match-Voreinstellungen)
- Einstellungen pro Ausgabemenge verzögern
- Talkback-Routing und -Ebene
- Referenzstufeneinstellungen

Monitorprofile werden über **Einstellungen > Monitor-Profil** verwaltet und werden als separate Dateien von der `.dms`-Einstellungsdatei gespeichert. Diese Trennung ermöglicht die Verwendung der gleichen physikalischen Routing- und Gain-Konfiguration mit unterschiedlichen Monitoring-Setups.

Ein standardmäßiges Stereo-Monitor-Profil steht vom DAD-Support-Portal zum Download bereit.

#### Beziehung zwischen den zwei Dateitypen

|                                   | Einstellungsdatei (.dms)            | Profil überwachen (.dmprof) |
| --------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Stores**                        | Alle Hardware-Einstellungen (gewinnen, Routen, Uhr) | Nur Controller-Konfiguration überwachen                        |
| **Geltungs**                      | Alle verbundenen Einheiten                                             | Ein Monitorprofil auf einmal                                   |
| **Laden über**                    | Datei > Öffnen                                                         | Einstellungen > Überwachungsprofil > Laden                     |
| **Auto-load on startup**          | Optional                                                               | Optional                                                       |
| **Von Firmware-Update betroffen** | Ja — Einheit zurücksetzen bereinigt die Einstellungen                  | Nein — nur auf dem Computer gespeichert                        |

### 7.1.2 Startup and Auto-Load

DADman kann beim Start so konfiguriert werden, dass **automatisch die zuletzt verwendete Einstellungsdatei** geladen wird. Wenn diese Option aktiviert ist, wird DADman die gespeicherten Einstellungen beim Start auf verbundene Einheiten anwenden, ohne manuelle Aktion zu erfordern.

> **HINWEIS:** Die Option "Letzte Datei beim Start öffnen" veranlasst DADman, die gespeicherten Einstellungen sofort auf alle verbundenen Einheiten zu schreiben. In Multi-Operator-Umgebungen, in denen verschiedene Benutzer Echtzeitänderungen vornehmen können, wird die Aktivierung dieser Option alle Änderungen seit dem letzten Speichern überschreiben.

Zum Aktivieren oder Deaktivieren der automatischen Ladung: **DADman > Einstellungen** (macOS) oder **Einstellungen > Optionen** (Windows), dann **Letzte Datei beim Start öffnen**.

### 7.1.3 Datei-Menü-Referenz

| Menüpunkt                    | Aktion                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Neu**                      | Löscht die aktuelle Konfiguration in DADman. Ändert keine Einstellungen bei verbundenen Einheiten.                                                                                                                                                                                                                                  |
| **Öffne…**                   | Öffnet eine DADman Settings Datei (`.dms`) und wendet die gespeicherten Einstellungen auf verbundene Einheiten an.                                                                                                                                                                                                               |
| **Speichern**                | Speichert den aktuellen Status aller verbundenen Einheiten in der aktuell geöffneten `.dms`-Datei.                                                                                                                                                                                                                                                  |
| **Speichern als…**           | Speichert den aktuellen Status in einer neuen `.dms`-Datei an einem von dir angegebenen Ort.                                                                                                                                                                                                                                                        |
| \*\*Profil… \*\* öffnen      | Öffnet eine Monitor-Profil-Datei (`.dmprof`) von der Festplatte und lädt sie in die Mond-Registerkarte.                                                                                                                                                                                                                          |
| \*\*Profil… \*\* importieren | Importiert ein Monitorprofil aus jeder aktuell angeschlossenen Einheit und führt ein passendes Mapping auf die I/O der aktuellen Einheit durch. Nützlich bei der Migration eines Profils zwischen Einheiten mit unterschiedlichen Hardware-Konfigurationen. _(v5.6.2 und höher)_ |
| **Profil speichern**         | Speichert das aktuell geladene Monitorprofil in seine vorhandene `.dmprof`-Datei.                                                                                                                                                                                                                                                                   |
| **Profil speichern als…**    | Speichert das Monitorprofil in einer neuen `.dmprof`-Datei an einem von dir angegebenen Ort.                                                                                                                                                                                                                                                        |
| **Profil schließen**         | Entlädt das aktuelle Monitor-Profil. Die Registerkarte Mon zeigt keine aktiven Steuerelemente an, bis ein neues Profil geladen ist.                                                                                                                                                                                                 |
| **Kürzliches Profil öffnen** | Öffnet ein Untermenü der kürzlich verwendeten `.dmprof`-Dateien für den schnellen Zugriff. _(v5.7.2 und höher)_                                                                                                                                                                                  |

> **TIPP:** Benutze **Datei > Speichern unter** am Ende jeder Sitzung, auch wenn sich die Einstellungen nicht geändert haben. Die `.dms`-Datei ist der einzige Wiederherstellungspfad nach einem Werkseinstellungen oder Firmware-Update.

---

## 7.2 Fensterlayout und Navigation

Das DADman Hauptfenster gliedert sich in vier horizontale Zonen, die von oben nach unten gestapelt werden.

| Zone                                                       | Inhalt                                                                                   |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Menüleiste**                                             | **Datei** und **Einstellungen** Menüs (und **DADman** Menü auf macOS) |
| **Geräteliste**                                            | Eine Zeile pro angeschlossener Einheit, jede in einem farbigen Rand                      |
| **Tab-Zeile**                                              | **AD · DA · Con · Conf · Mon** tab selectors                                             |
| **Kanalstreifenbereich**                                   | Die Parameteranzeige für den ausgewählten Tab mit allen angeschlossenen Einheiten        |
| **Control\|Paketstreifen** _(optional)_ | Erscheint unterhalb des Kanalabschnitts beim Routen der Voreinstellungen                 |

Wenn Sie auf einen Tab klicken, wird der gesamte Bereich des Kanals umgeschaltet, um die Steuerung des Tab für alle angeschlossenen Einheiten gleichzeitig anzuzeigen. Die Steuerelemente jeder Einheit bleiben in ihrem farbigen Rand gruppiert, unabhängig davon, welcher Tab aktiv ist.

Einzelne Unterabschnitte in der Anzeige einer Einheit können durch Anklicken der Schaltfläche **Kopfzeilen** (AD, DA, Conf, oder Mon) _(v5) einklappen oder erweitern. .2 und höher)_. Tooltips werden angezeigt, wenn Sie über die Schaltflächen der Kopfzeile schweben um deren Funktion zu beschreiben. Dies ist nützlich, wenn mit einer großen Anzahl von Einheiten gearbeitet wird, um die vertikale Scroll zu reduzieren.

### 7.2.1 Die fünf Haupt-Tabs

| Tab      | Voller Name       | Was es zeigt                                                                                                              |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **AD**   | Analog-zu-Digital | Dosierung und Steuerung für alle analogen Eingänge: Verstärkung, Phantomleistung, Stumm, Phase, Etiketten |
| **DA**   | Digital-zu-Analog | Dosierung und Steuerung für alle analogen Ausgänge: Niveau, Stumm, Etiketten, Ausgabebereich              |
| **Nein** | Verbindungen      | Die Routing-Crosspoint-Matrix — Eingänge als Zeilen, Ausgänge als Spalten                                                 |
| **Conf** | Konfiguration     | Taktquelle, Abtastrate, An-, Dante- und Digital-I/O-Port-Einstellungen anpassen                                           |
| **Mon**  | Überwachen        | Das aktive Monitor-Profil: Quellen, Ausgänge, Klappen, Verzögerung, Talkback                              |

### 7.2.2 Multi-Unit Ansicht

Wenn mehrere Einheiten verbunden sind, zeigt DADman sie alle innerhalb eines Fensters an, getrennt durch ihre farbigen Ränder. Tabs gelten global — die Auswahl **AD** zeigt die analogen Eingangssteuerungen für alle angeschlossenen Einheiten gleichzeitig an. Dies ermöglicht einem einzelnen Bediener die Verwaltung eines komplexen Mehrfach-Einheitssystems aus einer Sicht ohne zwischen separaten Anwendungsfenstern zu wechseln.

### 7.2.3 Farbschemata

Drei Farbschemas sind über **Einstellungen > Optionen** (Windows) oder **DADman > Einstellungen** (macOS) verfügbar. Das Standardschema wird in allen Beispielen dieses Handbuchs verwendet. Die Schema Auswahl ist eine lokale Präferenz, die auf dem Computer gespeichert wird und keine verbundenen Einheiten beeinflusst.

### 7.2.4 Referenz für Einstellungsmenü

| Menüpunkt                                                                                           | Aktion                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Optionen…** (Windows) / **DADman > Einstellungen…** (macOS) | Öffnet das Einstellungsfenster                                                                                                                                                                  |
| **Profil überwachen**                                                                               | Öffnet den Monitorprofil-Editor — siehe [Abschnitt 7.8] und [Kapitel 8] |
| **Routing Voreinstellungen**                                                                        | Öffnet das Control\|Pack-Routing Preset Konfigurationsfenster _(v5.8.0 und höher)_                                                           |
| **EuCon aktivieren**                                                                                | Aktiviert die Integration von EuControl für Avid Oberflächenverbindungen                                                                                                                        |
| **Geräteliste**                                                                                     | Öffnet das Gerätelistenverwaltungsfenster                                                                                                                                                       |

---

## 7.3 Geräteliste

Die Geräteliste ist der horizontale Streifen oben im DADman-Fenster, der alle entdeckten Hardware-Einheiten anzeigt. Einheiten erscheinen **links nach rechts in aufsteigender Einheit ID Bestellung**.

_[Platzhalter: Screenshot der Geräteliste, die zwei Einheiten mit farbigen Rändern, Einheit-ID-Feldern, Einheiten-Namensfeldern und Verbindungsstatus-Indikatoren]_

### 7.3.1 Spalten der Geräte-Liste

| Element               | Beschreibung                                                                                                                                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Einheit-ID**        | Eine Zahl, die die Position der Einheit in der Geräteliste (links nach rechts) bestimmt. Editierbar — klicken Sie auf das ID-Feld, um es zu ändern. Die ID wird in der Einheit gespeichert. |
| **Einheitsname**      | Ein Benutzername für die Einheit. Bearbeitbar — klicken Sie zum Umbenennen auf das Namensfeld. In der Einheit gespeichert und auf Einheiten mit Frontplattenanzeige angezeigt.                                 |
| **Verbindungsstatus** | Gibt an, ob DADman eine aktive Verbindung zur Einheit hat. Eine getrennte Einheit wird grau angezeigt.                                                                                                                         |
| **Firmware-Version**  | Zeigt die aktuelle Firmware-Version an, die auf der Einheit läuft.                                                                                                                                                                             |

> **TIP (v5.8.1.6, nur macOS):** Die Geräteliste kann durch Anklicken von Spaltenüberschriften sortiert werden — Einheitsname, ID, Firmware-Version und andere Spalten. Dies ist nützlich bei der Verwaltung einer großen Anzahl von Einheiten. Sortieren ist nur eine Anzeigeeinstellung und ändert keine Einheiten-IDs.

### 7.3.2 Kontextmenü der Geräteliste

Ein Rechtsklick auf eine Einheitszeile (Windows) oder mit der **Action** Schaltfläche (macOS) öffnet ein Kontextmenü mit folgenden Optionen:

| Option                    | Aktion                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Netzwerkeinstellungen** | Öffnet den Dialog IP-Adresse und Netzwerkkonfiguration für die ausgewählte Einheit                     |
| **Klonen von…**           | Kopiert alle Einstellungen von einer anderen Einheit in der gleichen Hardware-Familie in diese Einheit |
| **Firmware-Update**       | Startet ein Firmware-Update für die ausgewählte Einheit                                                |
| **Fabrik zurücksetzen**   | Alle Einstellungen der Einheit auf Werkseinstellungen zurücksetzen                                     |
| **Verbindung trennen**    | Entfernt die Einheit aus der aktiven Geräteliste, ohne sie zu löschen                                  |

> **WARNUNG:** **Werkseinstellungen zurücksetzen** und **Firmware-Update** löschen beide alle auf der Einheit gespeicherten Einstellungen. Speichern Sie eine `.dms`-Datei, bevor Sie eine der beiden Optionen verwenden.

### 7.3.3 Kanalnamen

Kanalnamen (Labels für einzelne Eingabe- und Ausgabekanäle) werden in den AD- und DA-Tabs zugewiesen.

> **HINWEIS — Wichtig:** Kanalnamen werden in der **DADman Settings File (`.dms`)** auf dem Computer gespeichert, **nicht** in der Hardware-Einheit. Dies bedeutet, dass Kanalnamen verloren gehen, wenn DADman ohne eine `.dms`-Datei benutzt wird oder wenn ein anderer Computer sich mit der Einheit verbindet. Beim Speichern der Konfigurationsdateien immer den Namen des Kanals angeben.

---

## 7.4 AD Tab — Analogeingaben

Die Registerkarte **AD** zeigt die Dosierung und Steuerung aller analogen Eingangskanäle – Mikro-, DI- und Zeilenebene – auf angeschlossenen Einheiten an. Wenn eine Einheit keine analogen Eingabenkarten installiert hat, ist diese Registerkarte vorhanden, aber leer für diese Einheit.

_[Platzhalter: Screenshot im AD Tab kommentiert, der den Mikrokanal mit Gain-Slider, Phantom, Phase, Stummschaltung und Clip/Signal-Indikatoren]_

### 7.4.1 Kanalentfernung Steuerung

Jeder analoge Eingangskanal zeigt die folgenden Steuerelemente von oben nach unten:

| Steuerung                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Eingabe-Typ-Selektor**                       | Schaltet den Eingang zwischen **MIC** (Mikrofonvorverstärker) und **LINE** (Zeilenebene) um. Verfügbar nur auf Kanälen mit Mikro-Vorverstärk-Hardware.                                                                                                                                                                                                                          |
| **Phantomleistung (+48 V)** | Aktiviert 48 V Phantomleistung für den ausgewählten Kanal. Nur im MIC-Modus verfügbar. Nur auf Kondensatormikrofone anwenden — auf Bandmikrofonen nicht aktivieren, es sei denn, der Hersteller gibt Kompatibilität an.                                                                                                                                                                               |
| **Phase umkehren (Ø)**      | Invertiert die Polarität des Eingangssignals um 180°.                                                                                                                                                                                                                                                                                                                                                                                 |
| **Mono / stereo link**                         | Links angrenzende ungerad/gleiche Kanalpaare für den Stereo-Betrieb. Bei Verlinkung werden die Steuerelemente für das Paar gekoppelt.                                                                                                                                                                                                                                                                                 |
| **MIC Gain Slider**                            | Legt den Mikrofonvorverstärkergewinn fest. Siehe [Abschnitt 7.4.2] für Anpassungsstufen.                                                                                                                                                                                                                                          |
| **Stumm**                                      | Stummschaltet den Eingangskanal. Der Stummschaltzustand wird in der Einheit gespeichert.                                                                                                                                                                                                                                                                                                                              |
| **Signal LED**                                 | Beleuchtet, wenn das Eingangssignal übersteigt −42 dBFS. Zeigt die Signalpräsenz an; zeigt nicht an, dass das Signal auf einer nützlichen Ebene ist.                                                                                                                                                                                                                                                                  |
| **Clip LED**                                   | Erleuchtet bei Überschreitung des Eingangssignals −0,5 dBFS. Zeigt unmittelbar bevorstehendes oder aktuelles digitales Clipping. Reduzieren Sie den Gewinn sofort, wenn diese LED während des normalen Betriebs leuchtet.                                                                                                                                                                             |
| **Spitzenhälter**                              | Die höchste erreichte Signalstufe wird auf der Zählerleiste gehalten und verfällt langsam. Bietet eine visuelle Aufzeichnung von transienten Gipfeln ohne kontinuierliche Überwachung. Erhältlich auf AX32, Penta, und MTRX Hardware _(erfordert Firmware v2.3.2.1 oder höher, ab DADman v5.4.3)_. |
| **Kanalbezeichnung**                           | Benutzername für den Kanal. In der `.dms`-Datei gespeichert. Zum Bearbeiten klicken.                                                                                                                                                                                                                                                                                                                  |

### 7.4.2 Anpassung

Der MIC Gain Slider kann mit den folgenden Methoden angepasst werden:

| Methode                                                           | Erhöhen                                                                         |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Maus ziehen                                                       | 0,5 dB pro Schritt                                                              |
| Tastatur \*\*″ /  \*\* (Kanal ausgewählt) | 0,1 dB pro Schritt                                                              |
| Tastatur **Seite oben / Seite runter**                            | Größerer Schritt (Wert wird durch DAD-Engineering bestätigt) |

> **TIPP:** Wählen Sie einen Kanalstreifen aus, indem Sie ihn anklicken dann verwenden Sie die Tastaturpfeile zur Feineinstellung während einer Sitzung, ohne Ihre Hände an die Maus zu bewegen.

### 7.4.3 Mic Gain Groups _(v5.8.1.6 und höher)_

Mic Gain Groups ermöglichen die gleichzeitige Anpassung mehrerer Eingangskanäle – nützlich für Mehrfach-Setups auf Trommeln, B. orchestrale Sitzungen, oder eine Situation, die konsistente Beziehungen zwischen einer Gruppe erfordert.

**Um eine Mic Gain Gruppe zu erstellen:**

1. Klicken Sie mit der rechten Maustaste auf die Verstärkungssteuerung eines Kanals (oder benutzen Sie das Kontextmenü des Kanals).
2. Wähle **Zur Gewinngruppe hinzufügen** und füge eine Gruppennummer zu.
3. Wiederholen für jeden Kanal in der Gruppe.

**Gruppenverhalten:**

- Wenn man die Gain-Steuerung auf einem gruppierten Kanal verschiebt, bewegt man alle Kanäle der Gruppe um die gleiche Menge.
- **Alt / Options-Taste + Drag** passt nur den Kanal unter dem Cursor an, so dass individuelle Feineinstellungen möglich sind, ohne die Gruppe zu brechen.
- Stummschalten gilt für alle gruppierten Kanäle gleichzeitig, unabhängig von Modifikatortasten.

> **HINWEIS:** Mic Gain Groups funktionieren wie erwartet, wenn DADman über EuControl gesteuert wird — Gain Slider und Regler auf Avid Oberflächen beeinflussen alle gruppierten Kanäle. Von einer Steuerfläche stummschalten alle gruppierten Kanäle gleichzeitig.

> **HINWEIS:** Mic Gain Groups werden im MTRX Studio nicht unterstützt. _(v5.8.1.6)_

---

## 7.5 DA Tab — Analog-Ausgaben

Die Registerkarte **DA** zeigt die Dosierung und Steuerung aller analogen Ausgangskanäle auf angeschlossenen Einheiten an. Wenn eine Einheit keine analogen Ausgabekarten installiert hat, ist die Registerkarte vorhanden, aber leer für diese Einheit.

_[Platzhalter: Bildschirmfoto mit DA-Tab kommentiert, der den Ausgabekanal mit Ebenenfader, Stummschalter, Carrier/Signal/Clip-Indikatoren]_

### 7.5.1 Kanalentfernung Steuerung

| Steuerung                | Beschreibung                                                                                                                                                                                                                                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ausgabelevel fader**   | Legt die analoge Ausgangsstufe fest. Der Wert entspricht der analogen Ebene in dBu, die bei der Verwendung eines 0 dBFS digitalen Signals erzeugt wird. Siehe [Abschnitt 7.5.2] für Bereichsdetails. |
| **Stumm**                | Stummt den Ausgabekanal.                                                                                                                                                                                                                                                                                                 |
| **Mono / stereo link**   | Links angrenzende ungerad/gleiche Kanalpaare für den Stereo-Betrieb.                                                                                                                                                                                                                                                     |
| **Gültige Anbieter-LED** | Auf digitalen Ausgangskanälen: leuchtet, wenn ein gültiges digitales Signal am Ausgang vorhanden ist. Auf analogen Ausgabekarten: leuchtet, wenn die Ausgabekarte vorhanden und aktiv ist.                                                                               |
| **Signal LED**           | Beleuchtet, wenn das Ausgangssignal übersteigt −42 dBFS.                                                                                                                                                                                                                                                                 |
| **Clip LED**             | Erleuchtet bei Überschreitung des Ausgangssignals −0,5 dBFS.                                                                                                                                                                                                                                                             |
| **Spitzenhälter**        | Haltet die höchste Ertragsstufe auf der Zählerleiste. Gleiche Verfügbarkeit wie AD-Tab — AX32, Penta, und MTRX mit Firmware v2.3.2.1 oder höher.                                                                                                         |
| **Kanalbezeichnung**     | Benutzername zugewiesen. In der `.dms`-Datei gespeichert. Zum Bearbeiten klicken.                                                                                                                                                                                                        |

### 7.5.2 Ausgabestufenbereich und Ausrichtung

Der Output-Level fader setzt die **analoge Ausgangsstufe entsprechend 0 dBFS Digital Full Scale**. Dies ist eine Gainstrukturausrichtung, die den Konvertierungsfaktor zwischen der digitalen Domäne (dBFS) und der analogen Domäne (dBu) bestimmt.

**Ausgabelevel Bereich:** Zwei Bereiche sind verfügbar, wählbar über den \*\*6 dB Gewinn \*\*-Button:

| Modus                | Range               | Maximale Ausgabe   |
| -------------------- | ------------------- | ------------------ |
| Standard             | −66 dBu bis +18 dBu | +18 dBu bei 0 dBFS |
| +6 dB Gain aktiviert | −60 dBu bis +24 dBu | +24 dBu bei 0 dBFS |

> **WARNUNG:** Ein hohes Ausgabeniveau zu setzen ist nicht immer angemessen. Wenn das nachgelagerte Gerät einen maximalen Eingangspegel unter der DADman-Ausgangsstufe hat, die nachgeschaltete Ausrüstung wird auch bei sauberem DADman-Signal geklemmt. Vergewissern Sie sich immer, dass die Einstellung der Ausgangsstufe die maximale Eingabeaufforderung der zu fütternden Ausrüstung nicht überschreitet. Beispiel: Das Setzen von +24 dBu Ausgang in Geräte mit einem +18 dBu maximalen Eingang, führt zu einer Einschaltung bei etwa −6 dBFS auf dem DADman Signal.

> **TIPP:** Passen Sie die Ausgabestufe auf die nominale Eingangsebene der nachgelagerten Ausrüstung für die beste Gain-Struktur an. Zum Beispiel, wenn die Eingabeempfindlichkeit Ihres Monitorverstärkers +4 dBu, Das Setzen der DADman-Ausgangsstufe auf +18 dBu gibt ca. 14 dB Kopfraum über dem Nenner — eine komfortable Marge für die meisten Monitoring-Workflows.

---

## 7.6 Con Tab — Routing-Matrix

Die Registerkarte **Con** zeigt die Routing-Crosspoint-Matrix — die komplette Signal-Routing-Engine der angeschlossenen Hardware. Jeder Eingabewert kann zu jeder beliebigen Ausgabe geroutet werden und jede beliebige Anzahl von Ausgängen kann die gleiche Eingabe gleichzeitig empfangen.

_[Platzhalter: Screenshot für den Con Tab kommentiert, der die Übersichtsmatrix (links), detaillierte Matrix (rechts) und Ein-/Ausgabe-Statusindikatoren anzeigt]_

### 7.6.1 Matrix-Layout

Die Routing-Matrix wird in zwei Panels nebeneinander dargestellt:

| Platte                  | Inhalt                                                                                                  | Zweck                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Matrix übersicht**    | Alle Eingaben (Zeilen) × alle Ausgänge (Spalten), kleiner Maßstab | Navigiere zu einem Abschnitt der Matrix; zeigt den gesamten Routingstatus auf einen Blick |
| **Detaillierte Matrix** | Erweiterte Ansicht des ausgewählten Bereichs in der Übersicht                                           | Einzelne Kreuzpunkt-Verbindungen erstellen oder entfernen                                 |

In beiden Fenstern werden **Eingaben als Zeilen links** angezeigt und **Ausgänge werden als Spalten oben angezeigt** angezeigt. Eine Verbindung wird an der Kreuzung (Kreuzpunkt) einer Eingabezeile und einer Ausgabespalte hergestellt.

> **HINWEIS:** Die in der Matrix angezeigten Eingänge und Ausgänge reflektieren die tatsächlich installierten Hardwareoptionen und die Anzahl der Kanäle, die bei der aktuellen Abtastrate zur Verfügung stehen. Bei höheren Abtastraten haben einige Formate (MADI, ADAT) weniger Kanäle, was die Anzahl der angezeigten Zeilen und Spalten verringert.

### 7.6.2 Verbindungen erstellen und entfernen

| Aktion                                     | Ergebnis                                                                                                                     |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Einzelklick** an einem Kreuzpunkt        | Verbindet diese Eingabe mit dieser Ausgabe (oder trennt sie, wenn bereits verbunden)                      |
| **Shift + Klick** an einem Kreuzpunkt      | Verbindet den geklickten Kanal und den nächsten aufeinanderfolgenden Kanal gleichzeitig (ein Stereo-Paar) |
| **Strg / Cmd + Klick** an einem Kreuzpunkt | Verbindet eine komplette Diagonale — Karten die Eingaben zu ihren gleich nummerierten Ausgängen vom angeklickten Punkt       |

Ein angeschlossener Kreuzpunkt wird als **gefülltes blaues Quadrat** angezeigt.

### 7.6.3 Verbindungsstatus Indikatoren

**In der Ausgabe Spaltenüberschrift (obere Zeile):**

| Indikator            | Bedeutung                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Keine Markierung     | Ausgabe ist mit keiner Eingabe verbunden                                                                       |
| Hellblaues Quadrat   | Die Ausgabe ist mit einer Eingabe verbunden, die derzeit nicht in der detaillierten Matrixansicht sichtbar ist |
| Dunkelblaues Quadrat | Die Ausgabe ist mit einer Eingabe verbunden, die in der aktuellen Detailansicht sichtbar ist                   |

> **HINWEIS:** Eine bestehende Verbindung wird immer überschrieben, wenn du auf einen neuen Kreuzpunkt in der gleichen Ausgabespalte klickst. Die Ausgabe wird der neuen Eingabe zugewiesen; die vorherige Verbindung wird entfernt.

**In der Eingabezeile Beschriftungen (linke Seite der detaillierten Matrix):**

| Farbe     | Bedeutung                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Grün**  | Gültiger digitaler Träger am Eingang (oder analoge Karte ist installiert und aktiv für analoge Kanäle) |
| **Gelbe** | Sync-Verlust oder Abtastrate stimmen nicht mit dieser Eingabe überein                                                     |
| **Rot**   | Fehler — kein gültiges Eingangssignal erkannt                                                                             |

> **TIPP:** Der gelbe Status eines digitalen Eingangs zeigt in der Regel eine Abtastrate an, die zwischen der Quelle und der aktuellen Uhr-Einstellung der Einheit nicht übereinstimmt. Überprüfen Sie den Reiter **Conf** und stellen Sie sicher, dass die Abtastrate der Einheit mit der Quelle übereinstimmt, oder aktivieren Sie **Zu** für diese Eingabe.

---

## 7.7 Conf Tab — Uhren und Konfiguration

Die Registerkarte **Conf** steuert die digitale Infrastruktur der Einheit — Taktquelle, Abtastrate Synchronisationsverhalten und die Konfiguration digitaler I/O-Ports (MADI, Dante, Word Clock, AES3).

_[Platzhalter: Screenshot im Conf Tab für AX Center, zeigt Synchronisation, Dante und MADI Unterabschnitte]_

> **HINWEIS — AX32 / Familie 1 Hardware:** Die Conf Registerkarte auf AX32, DX32R, und Penta-Einheiten werden als **General** bezeichnet und in Unterabschnitten (Synchronisation, MADI Coax Interface, optische 1/2 Schnittstelle). Die Parameter entsprechen den hier beschriebenen Funktionen. AX32 spezifische Parameter werden unten angegeben, wo sie sich unterscheiden.

### 7.7.1 Synchronisationsparameter

| Parameter            | Optionen                                                                                                                                  | Beschreibung                                                                                                                                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quelle**           | Intern · Word Clock · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical 1/2 · Dante · Thunderbolt 3                                          | Wählt die Uhr-Master-Quelle für die Einheit aus. Benutze **Internal** wenn diese Einheit der Systemuhrmeister ist.                                                                                                                            |
| **Abtastrate Werte** | 44.1 · 48 · 88.2 · 96 · 176.4 · 192 kHz _(und DXD / 384 kHz auf AX32)_ | Setzt die Operationsabtastrate wenn **Anzu** auf **Internal** gesetzt wird. Wenn **Nachbesserung** auf eine digitale Eingabe gesetzt wird, zeigt dieses Feld die erkannte Abtastrate dieser Eingabe (schreibgeschützt) an. |
| **Anpassen an**      | Intern · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical · Dante · Thunderbolt 3                                                           | Wenn die Einheit auf einen digitalen Eingang gesetzt wird, entspricht sie automatisch der Abtastrate dieser Eingabe. Wenn auf **Internal** gesetzt wird, wird oben der **Sampling Rate** Parameter verwendet.                                 |
| **Wortuhr aus**      | Word Clock (Basisrate) · Word Clock (aktueller Kurs)                                                | Legt fest, ob die Ausgabe der BNC Word Clock nur nach der Basisabtastrate oder der tatsächlichen Betriebsgeschwindigkeit erfolgt.                                                                                                                             |
| **Sync-Beendeung**   | Hohes Z · 75                                                                                                                         | Legt fest, ob die Word Clock Eingabe intern mit 75  beendet wird. **Stark empfohlen: immer 75  termination** verwenden, um eine optimale Taktstabilität zu erzielen.                                                |

> **TIPP:** Wenn Dante als Audio-Netzwerk und Einheit verwendet wird, ist nicht der Dante-Uhr-Master, hat **Quellen** zu **Dante** gesetzt und **Zu** zu **Dante** angepasst. Dadurch wird sichergestellt, dass das Gerät die Dante PTP Uhr verfolgt und die Konvertierung der Abtastrate im Audioweg vermeidet.

### 7.7.2 MADI Port Konfiguration

Diese Einstellungen gelten für jeden MADI Port einzeln (Coaxial BNC und Optical SFP Ports sind separat konfiguriert).

| Parameter                      | Optionen                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bildrate**                   | Legacy · Hohe Geschwindigkeit | **Legacy:** MADI Frame-Länge wird bei 48 kHz Frame-Länge gepflegt und benachbarte Kanäle werden bei höheren Abtastrate (S/MUX) zusammengeführt. **Hohe Geschwindigkeit:** Die Bildlänge folgt der tatsächlichen Abtastrate — geringere Latenz bei 88.2 kHz und höher. Bei 44.1 oder 48 kHz wird Legacy immer verwendet, unabhängig von dieser Einstellung. |
| **Frame size**                 | Normal · Erweitert            | **Normal:** 56-Kanal MADI (Standard). **Erweitert:** 64-Kanal MADI. Vergewissern Sie sich, dass angeschlossene MADI-Geräte den 64-Kanal-erweiterten Modus unterstützen, bevor Sie es aktivieren.                                                                                                                                                                                           |
| **Ch. Status** | Standard · Transparent        | **Standard:** die Einheit definiert die Kanalstatus-Bits des ausgehenden MADI-Signals. **Transparent:** Kanalstatus-Bits aus der Quelle werden unverändert weitergegeben. Auf **Standard** in den meisten Installationen belassen.                                                                                                                                                                            |
| **Eingaberate**                | Auto · wie AD                 | **Auto:** erkennt die Einheit automatisch die Abtastrate des eingehenden MADI-Signals. Empfohlen: **Auto**.                                                                                                                                                                                                                                                                                                                   |

> **NOTE — High Speed vs. Legacy MADI:** Die meisten MADI Geräte im Markt verwenden Legacy Modus. Die Aktivierung des Hochgeschwindigkeitsmodus an einem Ende einer MADI-Verbindung ohne ihn auf der anderen Seite zu aktivieren, führt zu keinen Audio- oder Uhrenfehlern. Überprüfen Sie, dass sowohl das Sende- als auch das Empfangsgerät vor dem Betrieb über 48 kHz auf den gleichen Frame Rate Modus eingestellt sind.

### 7.7.3 Optische MADI-Schnittstelle _(AX32)_

_Gilt für AX32 Einheiten mit einem SFP optischen MADI Modul._

| Parameter                      | Optionen                         | Beschreibung                                                                                                                                                                                                                        |
| ------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Modus**                      | Deaktiviert · MADI · NTP HotLink | Wählt den Betriebsmodus der optischen SFP-Schnittstelle aus. Setze auf **Deaktiviert** wenn kein SFP-Modul installiert ist. **NTP HotLink** Modus ist reserviert — nicht verwenden. |
| **Bildrate**                   | Legacy · Hohe Geschwindigkeit    | Wie MADI Coaxial — siehe oben.                                                                                                                                                                                      |
| **Frame size**                 | Normal · Erweitert               | Wie MADI Coaxial — siehe oben.                                                                                                                                                                                      |
| **Ch. Status** | Standard · Transparent           | Wie MADI Coaxial — siehe oben.                                                                                                                                                                                      |
| **Eingaberate**                | Auto · wie AD                    | Wie MADI Coaxial — siehe oben.                                                                                                                                                                                      |

### 7.7.4 Dante-Konfiguration

Dante Konfigurationsparameter, die im DADman's Conf Tab sichtbar sind, steuern Aspekte der Dante-Operation, die auf Hardwareebene verwaltet werden. Full Dante Routing- und Abonnementmanagement erfolgt in der Anwendung **Dante Controller** (eine separate Anwendung von Audinate, nicht Teil von DADman).

_[Ausstehend vom DAD-Engineering: vollständige Liste der Dante-Parameter, die im Conf-Tab für AX Center / Core 256 sichtbar sind — inklusive Dante-Abtastrate Redundanz-Modus und IPCore-Parameter in v5 eingeführt. .1.6]_

> **HINWEIS — Dante 256 IPCore _(v5.8.1. )_:** AX64, AX Center und Core 256 Einheiten ausgestattet mit der Dante 256 IPCore Modulunterstützung bis zu 256 Kanäle von Dante bei 48 kHz. Diese erweiterte Dante-Konfiguration erfordert sowohl Firmware als auch Software ab Version 5.8.1.6.

---

## 7.8 Mon Tab — Monitor Control

Die Registerkarte **Mon** bietet die Echtzeitkontrolle des Monitor-Controllers, der im aktiven Monitorprofil definiert ist. Es ist die tagtägliche Schnittstelle des Operators für die Überwachung – Quellauswahl, Lautsprecherwechsel, Einklappung und Talkback.

> **HINWEIS:** Die Mond-Registerkarte zeigt die _Steuerung_ an, die im Monitorprofil definiert sind; die _Konfiguration_ von Quellen, Ausgängen, Einklappungen und Routing erfolgt im Editor Monitor Profil, auf den über **Einstellungen > Monitorprofil zugegriffen wird**. Dieser Abschnitt behandelt nur die Mondtab-Steuerelemente. Für die Konfiguration des Monitorprofils siehe [Kapitel 8 — Erweiterte Funktionen, Abschnitt 8.1 — Profile überwachen].

_[Platzhalter: Bildschirmfoto mit Mon Tab kommentiert, der die Quellauswahl anzeigt, Lautsprecher-Buttons, Auswahlauswahl, Hauptstufenfader, Dimm, Schnitt, Talkback und Referenz-Ebenen-Button]_

### 7.8.1 Mon Tab Controls

| Steuerung                                  | Beschreibung                                                                                                                                                                                               |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quell-Selektor**                         | Wählt die aktive Überwachungsquelle aus den im Monitorprofil definierten Quellen aus.                                                                                                      |
| **Speaker output buttons**                 | Wählt den aktiven Lautsprechersatz (z.B. Nähe, Mid, Far; oder Stereo, 5.1, 7.1.4).      |
| **Fold-down-Selektor**                     | wendet eine Matrix an, die im Monitorprofil definiert ist.                                                                                                                                 |
| **Hauptebene fader**                       | Steuert die Master-Überwachung des aktiven Lautsprechersatzes. In dB relativ zur Referenzstufe angezeigt.                                                                  |
| **Ref (Referenzlevel)** | Sperrt den Fader der Hauptebene auf der im Monitor Profil definierten Referenzstufe. Drücken Sie noch einmal, um zu engagieren; drücken Sie erneut, um zu veröffentlichen. |
| **Dim**                                    | Wendet eine feste Dämpfung (typischerweise −20 dB) auf die Monitorausgabe an, ohne die Position des Faders zu ändern.                                                   |
| **Schnitte**                               | Stummschaltet alle Überwachungsausgänge sofort ab.                                                                                                                                         |
| **Talkback**                               | Aktiviert den Talkback-Signalpfad, der im Monitor-Profil definiert ist.                                                                                                                    |
| **Meter Abschnitt**                        | Zeigt die Echtzeitmessung der aktiven Monitorquelle und -ausgabe, wie im Monitorprofil konfiguriert.                                                                                       |

### 7.8.2 Referenzlevel

Die Referenz-Level-Funktion ermöglicht die Überwachung an einer vorkalibrierten SPL ohne das Risiko zufälliger Pegeländerungen.

**Um eine Referenzstufe zu setzen:**

1. Mit Hilfe von Testtönen und einem kalibrierten SPL-Messgerät wird der Ausgabepegel auf die gewünschte Referenz-SPL gesetzt.
2. Beachten Sie den dB-Wert, der im Hauptstufenfader angezeigt wird — dies ist Ihr Referenz-Offset.
3. Geben Sie im Editor Monitor Profile (**Einstellungen > Monitor Profil**) diesen Wert als **Referenzstufe** für den gewählten Lautsprecher ein.
4. Drücken Sie während des normalen Betriebs **Ref** um nach manuellen Anpassungen sofort auf das kalibrierte Niveau zurückzukehren.

> **TIPP:** Mehrere Lautsprechersets können jeweils eine eigene Referenzstufe haben. Zum Beispiel können ein Satz "Near Field 85 dB" und ein Satz "Near Field 75 dB" die gleichen physikalischen Ausgänge teilen, nur in ihrer Trimm-Einstellung.

---

## 7.9 Steuerung|Packstreifen _(v5.8.0 und höher)_

Der Control\|Pack-Streifen erscheint **unte** den Haupt-Kanalabzugsbereich, wenn die Routing Presets für eine oder mehrere verbundene Einheiten konfiguriert wurden. Es bietet Echtzeitsteuerung und Statusüberwachung für alle konfigurierten Routingvorgaben.

> **HINWEIS:** Der Control\|Pack-Streifen ist nur sichtbar, nachdem im Routing Preset-Editor die Routing Presets erstellt wurden (**Einstellungen > Routing Presets**). Wenn keine Voreinstellungen konfiguriert sind, fehlt dieser Bereich im DADman Fenster. Siehe [Kapitel 8, Abschnitt 8.4 — Kontrolle\|Paket] für die komplette Konfigurationsdokumentation.

_[Platzhalter: kommentierte Steuerung\|Bildschirmfoto aus dem Pack-Streifen zeigt voreingestellte Namens-Buttons, PPM-Meter und löst Statusindikatoren aus]_

### 7.9.1 Steuerung|Verpackungsstreifenelemente

Der Streifen zeigt einen Abschnitt pro Thunder\|Core Einheit mit konfigurierten Routingvorgaben. Innerhalb jeder Einheitensektion wird jede konfigurierte Voreinstellung mit den folgenden Elementen angezeigt:

| Element                                     | Beschreibung                                                                                                                                                |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Voreinstellungsname**                     | Der Name, der dem Preset im Routing Preset Editor zugewiesen wird                                                                                           |
| **Bucket-Buttons (1–4)** | Wählt den aktiven Eingabesatz (Bucket) für die Voreinstellung aus. Farbe zeigt Zustand an — siehe unten. |
| **Quelle PPM Meter**                        | Echtzeit-Peak-Programmzähler zeigen den Stand aller Kanäle im Eimer.                                                                        |
| **Ausgang PPM Meter**                       | Echtzeit-Peak-Programmzähler zeigen die Höhe aller Ausgabekanäle für die Voreinstellung an.                                                 |
| **Auslöserstatus Indikatoren**              | Zeigt den Status von Signaldetektoren an, die als Trigger für jede Gruppe zugewiesen werden.                                                |

### 7.9.2 Bucket-Button Status

| Farbe    | Bundesland                                   | Bedeutung                                                                                                                                                                      |
| -------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Blue** | Aktiv (manuell)           | Diese Gruppe ist zur Zeit geroutet. Die Voreinstellung befindet sich im manuellen Modus — keine automatische Schaltung.                        |
| **Grün** | Bewaffnet (automatisiert) | Diese Gruppe ist die aktuelle aktive Route. Die Voreinstellung befindet sich im automatischen Modus und kann nach Triggerbedingungen wechseln. |
| **Rot**  | Auslöserfehler                               | Ein diesem Bucket zugewiesener Signaldetektor hat einen Fehler gemeldet (Signalverlust, AE6-Integritätsausfall).                            |

**Wechsel zwischen manuellem und automatisiertem Modus:**

- **Doppelklick** eine grüne (automatisierte) Schaufel um in den manuellen Modus zu wechseln — der Knopf wird blau.
- **Doppelklick** einen blauen (manuellen) Eimer, um die Automatisierung neu zu bewaffnen — der Knopf wird grün.

> **TIPP:** Bei Live-Events oder Broadcast, Arm-Automation während der Zeilenprüfung. Wenn ein Eingabewert fehlschlägt, schaltet die Voreinstellung automatisch ohne Eingriff des Bedieners. Sie können den automatisierten Schalter jederzeit durch Doppelklick auf den gewünschten Schaufelknopf überschreiben.

---

## 7.10 Maus und Tastatursteuerung

### 7.10.1 Verbesserung und Anpassung des Levels

| Aktion                                                   | Modifier                                                         | Ergebnis                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------- |
| Maus ziehen auf MIC Gain Slider                          | —                                                                | 0,5 dB pro Schritt                                          |
| \*\*″ /  \*\* (Kanal ausgewählt) | —                                                                | 0,1 dB pro Schritt                                          |
| \*\*″ /  \*\* (Kanal ausgewählt) | **Schicht**                                                      | Erhöhte Auflösung (feiner als 0,1 dB)    |
| **Klick** auf Verstärkung Kontrolle                      | **Strg (Win) / Cmd (Mac)** | Auf Standardwert zurücksetzen                               |
| Eines der oben genannten                                 | **Alt / Option**                                                 | Nur auf ausgewählten Kanal anwenden — umgeht Mic Gain Group |

### 7.10.2 Routing-Matrix

| Aktion                         | Ergebnis                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------- |
| Einfacher Klick auf Kreuzpunkt | Verbinden / trennen                                                                                 |
| **Shift** + Klick              | Verbinde zwei aufeinanderfolgende Kanäle (ein Stereo-Paar)                       |
| **Strg / Strg** + Klick        | Verbinden Sie eine komplette Diagonale (gleich nummerierte I/O von diesem Punkt) |

### 7.10.3 Tastaturkürzel _(v5.7.0 und höher)_

| Aktion                              | macOS | Fenster             |
| ----------------------------------- | ----- | ------------------- |
| **Datei > Öffnen…**                 | Mo    | Strg+O              |
| **Datei > Speichern**               | MP    | Strg+S              |
| **File > Save As…**                 | G Nr  | Strg+Umschalt+S     |
| **Datei > Profil öffnen…**          | A     | Strg+Alt+O          |
| **Datei > Profil importieren…**     | I     | Strg+Alt+I          |
| **Datei > Profil speichern**        | G Nr  | Strg+Alt+S          |
| **Datei > Profil speichern unter…** | Neu   | Strg+Alt+Umschalt+S |
| **Datei > Profil schließen**        | MW    | Strg+Alt+W          |
| Hauptfenster öffnen / aktivieren    | ⌘⇧1   | —                   |
| Geräteliste öffnen                  | LT    | Strg+Umschalt+L     |
| Monitorprofil öffnen                | MP    | Strg+Umschalt+M     |
| Einstellungen öffnen / Optionen     | ⌘,    | Strg+,              |

> **HINWEIS:** Diese Verknüpfungen wurden in DADman v5.7.0 eingeführt. Frühere Versionen unterstützen keine Tastaturkürzel für Datei- und Fensteroperationen.

---

## Querverweise

- **Kapitel 1 — Einführung:** Konzeptuelle Erklärung dessen, was jeder Tab kontrolliert und wie die Dateitypen miteinander in Beziehung stehen
- **Kapitel 5 — Signalfluss & Architektur:** Netzwerk und Uhrenarchitektur
- **Kapitel 6 — Erste Schritte beginnen:** Schritt-für-Schritt durch Verwendung dieser Steuerelemente zum ersten Mal in Folge
- **Kapitel 8 — Erweiterte Funktionen:** Überwachung Profilkonfiguration; Control\|Pack-Setup; Mic Gain Groups; EuCon Integration; Ausgabelevel Ausrichtung

---

_[Ausstehend vom DAD-Engineering:]_  
_— Vollkonfigurations-Parameterliste für AX Center / Core 256 (Dante-Parameter, Thunderbolt 3 clock params)_  
_— Dante 256 IPCore Conf Tab Parameter (v5. .1. )_  
_— Vollständige Tastaturkürzelliste_  
_— SPQ-Karte/-Steuerelemente (separater Unterabschnitt, der bei Dokumentation hinzugefügt wird)_  
_— PRO\|MON-Steuerelemente im Tab MON (erfordert dedizierte Dokumentation von DAD)_  
_— Alle Screenshots_
