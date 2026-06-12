---
title: "Kapitel 6 — Erste Schritte"
sidebar_label: "Ch. 6 — Erste Schritte"
sidebar_position: 8
---

# Kapitel 6 — Erste Schritte

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8. Build 2  
> **Primäre Beispiel-Hardware:** DAD AX Center  
> **Kapitel Status:** Entwurf v0. — Screenshots ausstehend (Schritte 1, 2, 4, 5, 6, 7, 9 und Interface-Ausrichtung kommentierten Screenshot)  
> **Zuletzt aktualisiert:** Juni 2026

---

## Zweck

Dieses Kapitel führt Sie durch ein komplettes und funktionierendes DADman Setup – vom ersten Start bis zum bestätigten Audio – auf dem kürzestmöglichen Weg. Es geht davon aus, dass DADman bereits auf Ihrem Computer installiert ist. Falls nicht, bitte [Kapitel 3 — Installation] zuerst ausfüllen.

Jeder Schritt gibt an, was zu tun ist, was du sehen solltest und wo du die vollständige Referenz findest, wenn du mehr Details brauchst.

**Geschätzte Zeit:** 15–20 Minuten für ein erstmaliges Setup auf einer einzigen Einheit.

---

## Bevor Sie beginnen

Vor dem Start von DADman folgendes bestätigen:

| Anforderung                                                                                                     | Prüfen                                                                                                             |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| DADman v5.8.2 Build 2 (oder neuer) ist installiert           | [Kapitel 3, Abschnitt 3.4]                     |
| Die Hardware-Einheit ist eingeschaltet                                                                          | Beziehen Sie sich auf Ihre Hardware-Installationsanleitung                                                         |
| Die Hardware-Einheit ist mit dem gleichen Ethernet-Netzwerk verbunden wie Ihr Computer                          | Direktes Kabel oder geteilte Schalter                                                                              |
| Bei Thunderbolt 3 Audio wird der TB3 Treiber installiert und das Gerät über Thunderbolt angeschlossen           | [Kapitel 3, Abschnitt 3.5–3.6] |
| Sie haben die aktuelle IP-Adresse der Einheit festgestellt (überprüfen Sie die Frontanzeile) | —                                                                                                                  |

> **HINWEIS — macOS Sequoia (v15) Benutzer:** DADman kann es nicht schaffen, Einheiten im Netzwerk zu entdecken, wenn es das erste Mal auf macOS Sequoia startet. Wenn nach 30 Sekunden keine Einheiten erscheinen, melden Sie sich von Ihrem MacOS-Konto ab und melden Sie sich wieder an. Dies ist ein bekanntes Problem auf Betriebssystemebene; Thunderbolt-Verbindungen bleiben davon unberührt. Siehe [Kapitel 3, Abschnitt 3.7] für die vollständige Problemumgehung.

---

## Die DADman-Schnittstelle auf einen Blick

Wenn sich DADman öffnet, zeigt das Hauptfenster alle angeschlossenen Hardware-Einheiten links nach rechts im Bereich **Device List** an. Jede Einheit wird als Spalte der Kanalstreifen dargestellt, die in der zugewiesenen Farbe der Einheit gerendert wird. mit fünf Registerkarten, die den Zugriff auf verschiedene Steuerungsdomains ermöglichen.

### Die fünf Tabs

| Tab      | Voller Name       | Was es kontrolliert                                                                                                                                     |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AD**   | Analog zu Digital | Analogeingangskanäle — mic/line gain, +48 V Phantomleistung, Phasenumkehrung (Ø), stumm, Spitzenmessung, Kanalbezeichnungen          |
| **DA**   | Digital zu Analog | Analogausgabekanäle — Ausgabepegel faders, stumm, Signal/Clip-Dosierung, Kanalbeschriftungen                                                            |
| **Nein** | Verbindungen      | Die Matrix des vollständigen Signalroutings — ein Raster, in dem ein Kreuzpunkt gedrückt wird                                                           |
| **Conf** | Konfiguration     | Einstellungen pro Einheit — Taktquelle, Abtastrate, MADI Bildrate, Dante Konfiguration, Port-Level Optionen                                             |
| **Mon**  | Überwachen        | Monitor-Controller — wird von einem Monitor-Profil geladen; zeigt die Quellenauswahl, Lautsprecher-Buttons, Ebenenfader, Ref/Dim/Ausschneiden, Talkback |

> **HINWEIS:** Die Registerkarte **Mon** zeigt aktive Steuerelemente nur an, wenn ein Monitorprofil (`.dmprof` Datei) geladen ist. Siehe Schritt 9, wie Sie einen laden oder erstellen können.

Wenn Sie auf einen Abschnitt klicken, wird der Abschnitt _(v5.7.2 und höher)_ eingeblendet. Dies ist auf kleineren Bildschirmen oder bei gleichzeitiger Arbeit mit mehreren Einheiten nützlich.

_[Platzhalter: Screenshot kommentiert — DADman Hauptfenster zeigt alle fünf Tabs, Geräteliste und die Farbe der Maßeinheiten]_

### Die Geräteliste

Öffne die Geräteliste über **Einstellungen > Geräteliste** oder **  L** (macOS) / **Strg+Umschalt+L** (Windows). Die Geräteliste zeigt alle Einheiten an, die DADman im Netzwerk entdeckt hat, mit Namen, Einheiten-ID, IP-Adresse und Firmware-Version. Mit einem Rechtsklick auf eine Einheit in der Geräteliste erhalten Sie Zugriff auf Netzwerkeinstellungen, Firmware, Werkseinsetzung, Klonen und Trennen der Verbindung.

### Dateitypen

DADman verwendet zwei Dateitypen:

| Erweiterung | Name                       | Filialen                                                                                 |
| ----------- | -------------------------- | ---------------------------------------------------------------------------------------- |
| `.dms`      | DADman Einstellungen Datei | Alle Einheitseinstellungen — Routing, Gains, Labels, Conf Tab-Parameter                  |
| `.dmprof`   | DADman Monitorprofil       | Controller-Konfiguration überwachen — Quellen, Lautsprecher-Sets, Abklappungen, Talkback |

Diese Dateien sind unabhängig. Das Speichern des einen speichert nicht automatisch das andere. Beide sollten gespeichert und gesichert werden.

---

## Schritt-für-Schritt Gehen

### Schritt 1 — DADman starten

Öffne **DADman** aus deinem Programme-Ordner (macOS) oder Start-Menü (Windows).

**Erwartetes Ergebnis:** Das DADman Hauptfenster öffnet sich. Wenn keine Einheit sofort gefunden wird, öffnet sich das Fenster **Geräteliste** automatisch.

> **HINWEIS:** Ab DADman v5.7.0 versucht die Anwendung fortwährend erneut eine Verbindung zu Einheiten herzustellen — es gibt keine Zeitüberschreitung. Wenn Ihre Einheit eingeschaltet ist und im Netzwerk erreichbar ist, erscheint sie in der Geräteliste, ohne dass eine manuelle Aktion erforderlich ist.

_[Platzhalter: Screenshot — DADman Hauptfenster beim Start mit leerer Geräteliste]_

---

### Schritt 2 — Geräteentdeckung überprüfen

Warten Sie bis zu 30 Sekunden. Dein AX-Zentrum (oder eine andere angeschlossene Einheit) sollte in der **Geräteliste** als Zeile mit einem farbigen Rand erscheinen.

**Erwartetes Ergebnis:** Die Einheitszeile zeigt den Einheitsnamen, die Einheitsnummer und die Firmware-Version. Der Verbindungsindikator ist aktiv (nicht ausgegraut).

_[Placeholder: screenshot — Geräteliste, die ein angeschlossenes AX-Zentrum mit farbigen Grenzen anzeigt]_

Wenn nach 30 Sekunden keine Einheiten erscheinen:

- Bestätigen Sie, dass das Gerät eingeschaltet ist und seine Frontplatte **Ready** LED ist solide grün.
- Bestätigen Sie, dass das Ethernet-Kabel zwischen der Einheit und Ihrem Computer (oder Switch) angeschlossen ist.
- Bestätigen Sie die IP-Adresse der Einheit auf dem gleichen Subnetz wie die Netzwerkschnittstelle Ihres Computers. Prüfen Sie über die Front-Panel-Anzeige der Einheit.
- Bestätigen Sie unter Windows, dass Ihre Firewall DADman nicht blockiert. Bei Bedarf eine Firewall-Ausnahme hinzufügen.
- Siehe [Kapitel 9 — Fehlerbehebung, Abschnitt 9.2 — Probleme mit den Netzwerken und Verbindungen [Kapitel 9 — Fehlerbehebung, Abschnitt 9.2 — Probleme mit den Netzwerken und Verbindung] für eine vollständige Diagnosetabelle.

> **TIPP:** Benutze **Einstellungen > Geräteliste** oder **  L** (macOS) / **Strg+Umschalt+L** (Windows) um die Geräteliste direkt zu öffnen, wenn sie nicht sichtbar ist.

---

### Schritt 3 — Benennen Sie die Einheit

Klicken Sie auf das **Namensfeld** in der Geräteliste und geben Sie einen beschreibenden Namen ein — zum Beispiel `AX Center - Studio A`.

**Erwartetes Ergebnis:** Der Name aktualisiert sich sofort und wird in der Einheit selbst gespeichert. Es wird auf Einheiten mit Front-Panel-Displays angezeigt und hält an allen DADman Sitzungen auf jedem Computer an.

> **HINWEIS:** Die Namen der Einheit werden in der Hardware-Einheit gespeichert. Die in Schritt 5 zugewiesenen Kanalbezeichnungen werden in den Einstellungen der `.dms` auf dem Computer gespeichert — nicht in der Einheit.

---

### Schritt 4 — Setze die Uhr-Quelle und Abtastrate

> **Dieser Schritt muss vor dem Patchen abgeschlossen sein.** Alle digitalen Audiogeräte in deinem System müssen eine gemeinsame Sampleuhr teilen. Das Konfigurieren von Routing vor der Bestätigung der Uhr-Einstellungen kann dazu führen, dass Klicks, Pops oder Stille schwerer zu diagnostizieren sind.

1. Klicke auf den Reiter **Conf**.
2. Im Abschnitt **Synchronisierung** setze **Quellen** zu deinem System:

| Systemkonfiguration                                       | Quell-Einstellung                                                                        |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Diese Einheit ist der Systemuhr-Master                    | **Internal**                                                                             |
| Uhren von einem Wort Uhrsignal                            | **Wortuhr**                                                                              |
| Uhr vom Dante-Netzwerk                                    | **Dante**                                                                                |
| Automatisch die Abtastrate eines verbundenen DAW anpassen | **Anpassen an** → **Thunderbolt 3** (oder relevante digitale Eingabe) |

3. Setze **Sampling Rate** für deine Sitzung ein — typischerweise **48 kHz** für Broadcast oder Post-Production, **44.1 kHz** für Musik.
4. Setze **Sync termination** auf \*\*75  \*\*.

**Erwartetes Ergebnis:** Die Abtastrate im Reiter **Conf** entspricht dem beabsichtigten Kurs. Wenn **An anpassen** auf eine externe Quelle gesetzt wird, aktualisiert sich die angezeigte Rate automatisch an den ermittelten externen Kurs.

_[Placeholder: screenshot — Conf Tab zeige Quell- und Beispielrate konfiguriert]_

> **TIPP:** Wenn dein AX Center das einzige digitale Gerät in deinem System ist, setze **Quellen** auf **Internal** und wähle deine Abtastrate manuell. Dies gibt Ihnen volle Kontrolle ohne Abhängigkeit von einer externen Uhr.

Vollständige Referenz: [Kapitel 7, Abschnitt 7.3 — Uhr und Synchronisierung]

---

### Schritt 5 — Beschriftung und Konfiguration von Analogeingaben

1. Klicke auf die Registerkarte **AD**.
2. Für jeden aktiven Eingabekanal:
   - Klicke auf das Feld **Kanal Label** und gib einen Namen ein (z.B. `Kick`, `OH L`, `Room`).
   - Wählen Sie den Input-Typ: **MIC** oder **LINE**.
   - Für Kondensatormikrofone: Aktiviere **+48V** Phantomleistung. Aktivieren Sie die Phantomleistung auf Bandmikrofone nicht, es sei denn, der Hersteller bestätigt die Kompatibilität.
   - Setze den **MIC gain** Schieberegler auf ein konservatives Startniveau. Während des Soundcheck nach oben anpassen.
   - Aktiviere **Ø** (Phasenumkehr) wenn nötig.

**Erwartetes Ergebnis:** Die **Signal** LED (grün) leuchtet, wenn Audio über −42 dBFS vorhanden ist. Die **Clip** LED sollte während der normalen Signalpegel nicht beleuchtet werden.

_[Placeholder: screenshot — AD-Tab mit zwei konfigurierten Mikrokanälen, Signal LED Lite]_

> **TIPP:** Wenn ein Kanal ausgewählt ist, verwenden Sie \*\* / \*\* Pfeiltasten, um den Gewinn in 0,1 dB Inkrementen anzupassen. Füge **Umschalt** für eine noch feinere Auflösung hinzu. Dies ist präziser als das Maus ziehen (Schrittweite 0,5 dB).

Vollständige Referenz: [Kapitel 7, Abschnitt 7.4 — Gewinn und Ebenenverwaltung]

---

### Schritt 6 — Inputs zu Ausgängen leiten

1. Klicke auf die **Con** Registerkarte.
2. Die Routing-Matrix zeigt **Eingänge als Zeilen** links und **Ausgänge als Spalten** oben an.
3. Klicken Sie auf den Kreuzpunkt an der Kreuzung einer Eingabezeile und einer Ausgabespalte, um sie zu verbinden. Ein **gefülltes blaues Quadrat** bestätigt die Verbindung.

| Aktion                                   | Verknüpfung                         |
| ---------------------------------------- | ----------------------------------- |
| Einen Kanal verbinden                    | Einfacher Klick                     |
| Ein Stereo-Paar verbinden                | **Shift** + Klicke den ersten Kanal |
| Verbinde gleichnummerierte I/O-Diagonale | **Strg/Strg** + Klick               |
| Verbindung trennen                       | Klicke erneut auf das blaue Quadrat |

**Erwartetes Ergebnis:** Blaue Quadrate erscheinen an jedem verbundenen Kreuzungspunkt. Die Spaltenüberschrift zeigt einen blauen Indikator, der die Ausgabe bestätigt.

_[Platzhalter: Screenshot — Karteikarte mit angeschlossenen Kreuzpunkten mit Übersicht und Detail-Matrix]_

> **HINWEIS:** Die Anzahl der Eingänge und Ausgänge, die in der Matrix angezeigt werden, spiegelt Ihre Hardware-Konfiguration und die aktuelle Abtastrate wider. Bei höheren Abtastraten haben einige Formate (MADI, ADAT) weniger Kanäle — die Matrix passt sich automatisch an.

Vollständige Referenz: [Kapitel 7, Abschnitt 7.2 — Konfiguration und Patching]

---

### Schritt 7 — Setze Ausgabestufen

1. Klicke auf den **DA** Tab.
2. Setze den **Output-Level-fader** für jeden aktiven Ausgabekanal so ein, dass er der Eingabespezifikation der nachgelagerten Ausrüstung entspricht.

Der Faderwert ist die **analoge Ausgangsstufe in dBu , die 0 dBFS Digital Full Scale** entspricht — keine Lautstärkeregelung. Allgemeine Einstellungen:

| Nachgeschaltete Geräte                                                 | Typische Ausgabestufeneinstellung |
| ---------------------------------------------------------------------- | --------------------------------- |
| Professionelle Leistungsverstärker (+4 dBu nominal) | **+18 dBu**                       |
| Broadcast-Ausrüstung (EBU R68 Ausrichtung)          | **+18 dBu**                       |
| Semi-pro / Prosumer Ausrüstung (−10 dBV nominal)    | **+4 bis +8 dBu**                 |

> **KAUFUNG:** Setze das Ausgabeniveau höher als der maximale Eingang deiner Downstream-Ausrüstung wird diese Ausrüstung auch dann abschneiden, wenn das DADman-Signal keine Überladung zeigt. Überprüfen Sie immer die Ausgabestufe überschreitet nicht die maximale Eingabespezifikation des Downstream-Geräts.

_[Placeholder: screenshot — DA Tab mit Output-Level-Faders gesetzt]_

Vollständige Referenz: [Kapitel 7, Abschnitt 7.4 — Gewinn und Ebenenverwaltung]

---

### Schritt 8 — Audio Ende-zu-Ende überprüfen

Mit dem Signal, das an den Eingängen vorhanden ist, bestätigen Sie die Audioströme durch das System:

1. **AD Tab:** Signal-LEDs (grün) leuchten bei aktiven Eingängen.
2. **Con Tab:** Eingabestatusindikatoren auf der linken Seite der Detailmatrix zeigen grün (gültiges Signal). Gelb zeigt ein Sync/Uhr-Missverhältnis an — kehren Sie zu Schritt 4 zurück.
3. **DA Tab:** Signal-LEDs leuchten bei aktiven Ausgängen.
4. **Am Ziel:** Audio ist hörbar oder messbar an Ihrem Lautsprecher, Recorder oder Dosiersystem.

**Wenn LEDs grün sind, aber kein Ton erreicht die Ausgabe:**

- Überprüfen Sie die Kreuzpunkte des Routens im Reiter **Con**.
- **Mute** ist nicht auf dem relevanten AD- oder DA-Kanal aktiv.
- Überprüfen Sie, ob die **Source** Uhr-Einstellung im **Conf** Tab korrekt ist — ein gelber Status in der Con Matrix signalisiert ein Problem mit der Uhr.

**Wenn Clip LED Beleuchtung:**

- Reduziere **MIC gain** im **AD** Tab.
- Wenn die nachgeschaltete Ausrüstung abgeschnitten ist, reduzieren Sie den Output-Level fader im Reiter **DA** .

---

### Schritt 9 — Lade oder erstelle ein Monitorprofil

Wenn Sie DADman-Monitor-Controller (PRO\|MON) verwenden, benötigen Sie ein Monitor-Profil, bevor die **Mon** Registerkarte aktive Steuerelemente anzeigt.

**Um ein bestehendes Profil zu laden:**

1. **Datei > Profil öffnen…** (macOS: ** O** / Windows: **Strg+Alt+O**)
2. Wähle deine `.dmprof` Datei.

**Um ein neues Profil zu erstellen:**

1. **Einstellungen > Profil überwachen** um den Editor zu öffnen.
2. Rechtsklick **Quellen** → **Neue Quelle hinzufügen** → Eingaben aus deiner Route zuweisen.
3. Klicken Sie mit der rechten Maustaste auf **Ausgänge** → Neue Ausgabe hinzufügen\*\* → Zuweisen von analogen Ausgängen für jede Lautsprecherkonfiguration.
4. **Datei > Profil speichern unter…** (macOS: **   S** / Windows: **Strg+Alt+Umschalt+S**)

**Erwartetes Ergebnis:** Die Registerkarte **Mon** zeigt den Quellauswahl-Auswahler, die Lautsprecher-Buttons und die Steuerung **Ref**, **Dim** und **Cut** an.

_[Platzhalter: Screenshot — Mond-Tab mit einem Monitor-Profil geladen]_

Vollständige Referenz: [Kapitel 8, Abschnitt 8.1 — Profil überwachen]

---

### Schritt 10 — Setze eine Referenzstufe (optional)

Wenn Ihr Zimmer akustisch kalibriert wurde:

1. Verwendung von Testtönen und einem kalibrierten SPL-Meter, setzt den Hauptlevel fader im Reiter **Mon** auf Ihre Zielreferenz SPL (85 dB SPL ist Standard für die meisten Broadcast- und Post-Production-Umgebungen).
2. In \*\*Einstellungen > Monitorprofil \*\* dieses Level als **Referenzstufe** für den aktiven Lautsprecher aufnehmen.
3. Drücke während der Sitzungen **Ref** im Tab **Mon** um sofort zur Kalibrierungsstufe zurückzukehren.

> **TIPP:** Mehrfachlautsprecherausgänge können die gleichen physikalischen Ausgänge aufweisen, haben aber unterschiedliche Absätze — indem Sie die Voreinstellungen "85 dB SPL" und "75 dB SPL" erstellen, zwischen denen Sie ohne Neukalibrierung wechseln können.

---

### Schritt 11 — Konfiguration speichern

> **ACHTUNG:** Einheitseinstellungen werden in der Hardware gespeichert. Ein Werkseinstellungen oder Firmware-Update löscht sie. Die `.dms` Datei auf deinem Computer ist die einzige Sicherung.

1. **File > Save As…** (macOS: **⌘⇧S** / Windows: **Ctrl+Shift+S**)
2. Verwende einen deskriptiven Dateinamen: `StudioA_AXCenter_2026-06.dms`
3. An einem Ort speichern, der regelmäßig gesichert wird.

Wenn du ein Monitorprofil hast, speichere es separat:
**Datei > Profil speichern unter…** (macOS: **  S** / Windows: **Strg+Alt+Umschalt+S**)

> **TIPP:** Aktiviere **Letzte Datei beim Start öffnen** in **DADman > Einstellungen** (macOS) oder **Einstellungen > Optionen** (Windows), um diese Konfiguration bei jedem Start automatisch wiederherzustellen. Empfohlen für permanente Installationen.

---

### Schritt 12 — Neu laden bestätigen

1. Schließe DADman.
2. DADman wieder öffnen.
3. Bestätigen Sie das erneute Laden der Einstellungen — alle Routing-, Gain-Einstellungen und Kanal-Labels sollten genau wie gespeichert wiederhergestellt werden.

**Erwartetes Ergebnis:** Einheiten, die sofort beim Laden der `.dms` Datei online aktualisiert werden. Die Registerkarte Mon zeigt Ihr gespeichertes Monitorprofil an, wenn "Letzte Datei beim Start öffnen" auch für Profile aktiviert wurde.

---

## Setup abgeschlossen

Du hast jetzt ein funktionierendes DADman-System mit:

- Einheiten entdeckt, verbunden und benannt
- Uhrzeit Quelle und Abtastrate bestätigt
- Eingaben beschriftet, gewonnen und gepatcht zu Ausgängen
- Ausgabestufen auf nachgeschaltete Ausrüstung ausgerichtet
- Ende-zu-Ende Audio verifiziert
- Konfiguration gespeichert und neu geladen

---

## Tastatur- und Mausreferenz

### Slider-Modifikatortasten

Alle Gain, Level und Fader Schieberegler in DADman unterstützen die folgenden Modifikatortasten:

| Modifier                                                                               | Effekt                                                                        |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Ziehen** (kein Modifikator)                                       | Normale Auflösung — ca. 0,5 dB pro Pixel                      |
| **Shift + Drag**                                                                       | Erhöhte Genauigkeit — ungefähr 0,1 dB pro Pixel                               |
| **″ /  Pfeiltasten** (Schieberegler fokussiert)                | 0.1 dB Schritte                                               |
| \*\*Shift +  / \*\*                                                          | Schöne Schritte (0,01 dB)                                  |
| **Strg** (Windows) / **Cmd** (macOS) **+ Klick** | Auf Standardwert zurücksetzen                                                 |
| **Alt** (Windows) / **Option** (macOS)           | Nur pro Kanal — umgeht Mic Gain Group, passt den ausgewählten Kanal allein an |
| **Alt/Option + Umschalt**                                                              | Feineinstellungen pro Kanal                                                   |

### Tastaturkürzel

| Aktion                                                          | macOS | Fenster             |
| --------------------------------------------------------------- | ----- | ------------------- |
| **Datei**                                                       |       |                     |
| Einstellungsdatei öffnen                                        | Mo    | Strg+O              |
| Einstellungsdatei speichern                                     | MP    | Strg+S              |
| Einstellungsdatei speichern als…                                | G Nr  | Strg+Umschalt+S     |
| Monitorprofil öffnen                                            | A     | Strg+Alt+O          |
| Monitorprofil importieren                                       | I     | Strg+Alt+I          |
| Monitorprofil speichern                                         | G Nr  | Strg+Alt+S          |
| Monitorprofil speichern als…                                    | Neu   | Strg+Alt+Umschalt+S |
| Monitorprofil schließen                                         | MW    | Strg+Alt+W          |
| **Ansicht**                                                     |       |                     |
| Hauptfenster (vom Menüleistenmodus) anzeigen | ⌘⇧1   | —                   |
| Geräteliste öffnen                                              | LT    | Strg+Umschalt+L     |
| Monitorprofil-Editor öffnen                                     | MP    | Strg+Umschalt+M     |
| Einstellungen öffnen / Optionen                                 | ⌘,    | Strg+,              |

### Routing-Matrix-Kurzbefehle

| Aktion                                          | Methode                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| Einen Kreuzpunkt verbinden                      | Klicken Sie an der Kreuzung                                                |
| Ein Stereo-Paar gleichzeitig verbinden          | Shift + auf den ersten Kanal klicken                                       |
| Verbinde gleich nummerierte Eingabeaufforderung | Strg/Cmd + Klick                                                           |
| Verbindung trennen                              | Klicke auf den aktiven (blauen) Kreuzpunkt              |
| Matrixansicht scrollen                          | Scrollrad / Trackpad (scrollen nicht das ganze Fenster) |

### Diagnosewerkzeug

**DADman Menü > Über DADman > Informationen kopieren** _(v5.7.2 und höher)_

Kopiert DADman Version, angeschlossene Geräteliste, Betriebssystem-Version und Treiberversionen in die Zwischenablage. Fügen Sie dies in jede Supportanfrage an DAD ein.

---

## Nächste Schritte

| Zu…                                                                                                                     | Siehe…                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| MADI, Dante oder AES3 Port-Einstellungen in der Tiefe konfigurieren                                                     | Ch. 7, Abschnitt 7.3 — Conf Tab                              |
| Arbeiten Sie mit der vollständigen Routing-Matrix                                                                       | Ch. 7, Abschnitt 7.2 — I/O-Konfiguration und Patchen         |
| Immersive Überwachung (5.1, 7.1.4, Atmos) einrichten | Ch. 8, Abschnitt 8.1 — Profile überwachen                    |
| Routing Presets mit automatisiertem Signalausfall konfigurieren                                                         | Ch. 8, Abschnitt 8.4 — Kontrolle\|Paket                      |
| Gruppenmikrofone gewinnen für Trommel, Orchestrale oder Multi-Mikrofon                                                  | Ch. 8, Abschnitt 8.2 — Gewinngruppen für Mikrofone           |
| Verbinden Sie DADman mit einer Avid EuControl Oberfläche                                                                | Ch. 8, Abschnitt 8.5 — EuCon Integration                     |
| Verbindung oder Audioproblem diagnostizieren                                                                            | Ch. 9 — Problembehebung                                                      |
| DADman Software oder Hardware Firmware aktualisieren                                                                    | Ch. 10, Abschnitt 10.1 — Software und Firmware aktualisieren |

---

_[Ausstehend: Screenshots für Schritte 1, 2, 4, 5, 6, 7, 9 — alle benötigen ein AX Center mit DADman v5.8.2]_
