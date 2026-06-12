---
title: "Kapitel 9 — Fehlerbehebung"
sidebar_label: "Ch. 9 — Problembehebung"
sidebar_position: 11
---

# Kapitel 9 — Fehlerbehebung

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0. — Zugriff auf Logdateien dokumentiert (9.9.1–9.9. ); Fehlermeldungskatalog und LED-Zustandstabellen noch ausstehend von DAD Engineering  
> **Zuletzt aktualisiert:** Juni 2026

---

## Wie man dieses Kapitel benutzt

Finden Sie den Abschnitt, der der Kategorie Ihres Problems entspricht, dann finden Sie das Symptom, das Ihnen am genauesten beschreibt, was Sie erleben. Jede Zeile gibt die wahrscheinliche Ursache und Heilung. Wenn es sich um ein mehrstufiges Verfahren handelt, wird ein Querverweis angeboten, anstatt die Schritte hier zu wiederholen.

**Bevor Sie den Support kontaktieren**, sammeln Sie diagnostische Informationen unter Verwendung von  
**DADman Menü > Über DADman > Informationen kopieren** _(v5.7. und später)_  
Dies kopiert die DADman-Version, die angeschlossene Geräteliste, die Betriebssystem-Version und die Treiberversion von Thunderbolt in die Zwischenablage. Fügen Sie dies in jede Supportanfrage ein.

| Abschnitt           | Kategorie                      |
| ------------------- | ------------------------------ |
| 9.1 | Netzwerk- und Geräteverbindung |
| 9.2 | Audioprobleme                  |
| 9.3 | Software und Start             |
| 9.4 | Thunderbolzen und Fahrer       |
| 9.5 | Uhr und Synchronisierung       |
| 9.6 | Überwachung Kontrolle          |
| 9.7 | Prozeduren zurücksetzen        |
| 9.8 | Bekannte Probleme nach Version |
| 9.9 | Support erhalten               |

---

## 9.1 Netzwerk und Geräteverbindung

_Häufigste Kategorie für neue Installationen und nach Netzwerk- oder Hardwareänderungen._

| Symptom                                                                 | Wahrscheinliche Ursache                                                                       | Remedy                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nach dem Start von DADman erscheinen keine Einheiten in der Geräteliste | Einheit nicht eingeschaltet                                                                   | Einschalten der Einheit; bestätige die Frontplatte **Ready** LED ist solide grün                                                                                                                                                                                                                                                                                    |
|                                                                         | Einheit nicht im gleichen Ethernet-Netzwerk                                                   | Schließen Sie Einheit und Computer mit dem gleichen Schalter oder über Direktkabel an; bestätigen Sie Kabel ist Cat5e oder Cat6                                                                                                                                                                                                                                     |
|                                                                         | Einheit und Computer auf verschiedenen Subnetzen                                              | Stellen Sie die Computer-Netzwerkschnittstelle auf das gleiche Subnetz wie die Einheit (z. B. beide `192.168.1.x`). Prüfe die IP der Einheit über das Front-Panel Display                                                                                                                        |
|                                                                         | macOS Sequoia (v15): OS-Level-Entdeckungsproblem           | Loggen Sie sich aus dem MacOS-Benutzerkonto aus und melden Sie sich wieder an. Thunderbolt-Verbindungen bleiben unberührt. Siehe [Abschnitt 9.3] und [Ch. 3, Abschnitt 3.7] |
|                                                                         | Windows: Firewall blockiert DADman                                            | Fügen Sie eine Firewall Ausnahme für DADman hinzu. Mit BitDefender, auf v5.7.2 oder höher aktualisieren                                                                                                                                                                                                             |
| Einheit erscheint in der Geräteliste, wird aber als getrennt angezeigt  | Ethernetkabel getrennt oder fehlerhaft                                                        | Kabel an beiden Enden prüfen; ersetzen wenn beschädigt                                                                                                                                                                                                                                                                                                              |
|                                                                         | Unit Neustart (z. B. nach Firmware-Update) | Warten Sie bis zu 60 Sekunden; bestätigen Sie, dass die LED fest grün ist                                                                                                                                                                                                                                                                                           |
|                                                                         | IP-Adresskonflikt — zwei Geräte die die gleiche IP teilen                                     | Überprüfen Sie alle Netzwerkgeräte auf doppelte IPs; weisen Sie eindeutige statische IPs zu                                                                                                                                                                                                                                                                         |
| Einheit verbunden, dann verschwand                                      | Netzwerkunterbrechung                                                                         | Überprüfen Sie Schalter, Kabel und Anschluss. DADman versucht fortlaufend _(v5.7.0+)_ — die Einheit erscheint automatisch, sobald die Verbindung wiederhergestellt wird                                                                                                                          |
| Nur einige Einheiten erscheinen (Multi-Unit System)  | Subnetzmaske stimmt nicht überein                                                             | Bestätigen Sie alle Einheiten und teilen Sie den Computer die gleiche Subnetzmaske (z.B. `255.255.255.0`)                                                                                                                                                                                                        |
|                                                                         | IP-Adressen duplizieren                                                                       | Verbinden und konfigurieren Sie jeweils eine Einheit gleichzeitig; weisen Sie eindeutige IPs zu                                                                                                                                                                                                                                                                     |
| Einheit sichtbar, aber Einstellungen unterscheiden sich von erwartet    | `.dms` Datei beim Start mit anderen Einstellungen angewendet                                  | Wenn "Letzte Datei beim Start öffnen" aktiviert ist, wendet DADman die gespeicherte Datei beim Start auf Einheiten zu. Überprüfe **Datei > Öffnen** um zu bestätigen, welche Datei geladen wird                                                                                                                                                     |

---

## 9.2 Audioprobleme

| Symptom                                                              | Wahrscheinliche Ursache                                                                                               | Remedy                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kein Audio bei analoger Ausgabe                                      | Eingabe nicht zur Ausgabe geroutet                                                                                    | Öffne **Con** Tab; überprüfe ob ein blauer quadratischer Kreuzpunkt zwischen der Eingabe und der benötigten Ausgabe existiert                                                                                                                                                                |
|                                                                      | Ausgangskanal stumm                                                                                                   | Markieren Sie den **DA** Tab; bestätigen Sie, dass **Mute** nicht aktiviert ist                                                                                                                                                                                                              |
|                                                                      | Eingabekanal stumm                                                                                                    | Überprüfe den **AD** Tab; bestätige **Mute** ist nicht aktiviert                                                                                                                                                                                                                             |
|                                                                      | Ausgabelevel fader mindestens                                                                                         | Erhöhe DA-Output-Level fader auf die entsprechende Einstellung für die nachgeschaltete Ausrüstung                                                                                                                                                                                            |
|                                                                      | Fehler bei der Uhr, die zum Schweigen führt                                                                           | Im **Con** Tab: gelbe Statusanzeige in einer Eingabezeile = Sync-Verlust. Gehen Sie zum **Conf** Tab und überprüfen Sie Quellen- und Beispielrate. Siehe [Abschnitt 9.5] |
| Verzerrte Audio auf hohem Signalstand                                | Leistungsstufe zu hoch für nachgeschaltete Geräte                                                                     | Im Reiter **DA** reduzieren Sie Output-Level fader. Beispiel: +24 dBu Ausgang in ein +18 dBu maximales Eingabegerät koppelt die nachgeschaltete Anlage an etwa −6 dBFS                                                                                       |
| Signal-LED leuchtet trotz bekanntem Signal nicht aus                 | Eingangsgewinn zu niedrig um −42 dBFS zu überschreiten                                                                | Erhöhe **MIC gain** im **AD** Tab                                                                                                                                                                                                                                                            |
|                                                                      | Falscher Eingabetyp ausgewählt                                                                                        | MIC oder LINE überprüfen ist korrekt ausgewählt                                                                                                                                                                                                                                              |
|                                                                      | Quellkabel fehlerhaft oder getrennt                                                                                   | physische Verbindungen überprüfen                                                                                                                                                                                                                                                            |
| Clip-LED beleuchtet während des normalen Levels                      | Eingangsgewinn zu hoch                                                                                                | MIC-Verstärkung im **AD** Tab reduzieren                                                                                                                                                                                                                                                     |
|                                                                      | Nachgeschaltete Ausrüstung                                                                                            | Verringere DA-Ausgangslevel — siehe "Verzerrtes Audio" oben                                                                                                                                                                                                                                  |
| Klicks oder Pops in Audio                                            | Abtastrate oder Abweichung der Uhr                                                                                    | Siehe [Abschnitt 9.5 — Uhr und Synchronisierung]                                                                                                                                                                         |
|                                                                      | Puffergröße zu klein (Thunderbolt)                                                                 | ASIO-Puffergröße erhöhen; siehe [Abschnitt 9.4]                                                                                                                                                                          |
| Nur ein Kanal eines Stereo-Paares trägt Audio                        | Stereo-Link nicht aktiviert                                                                                           | Mono/Stereo-Link im Tab **AD** oder **DA** für das Kanalpaar aktivieren                                                                                                                                                                                                                      |
|                                                                      | Nur ein Knotenpunkt verbunden                                                                                         | Im Tab **Con** **Shift + Klick** um beide Kanäle des Paares gleichzeitig zu verbinden                                                                                                                                                                                                        |
| AX Center analoge Eingänge ohne Audio                                | ADC Timing Fehler in Firmware vor v1.1.0.4                            | Aktualisiere AX Center Firmware auf v1.1.0.4 oder höher _(Januar 2025-Hotfix)_                                                                                                                                            |
| AX Center / Thunder\|Core DA Kartenkanal 8 Phasenfehler              | Fehler in Firmware vor v1.0.6.3                                       | Aktualisiere Thunder\|Core Firmware auf v1.0.6.3 oder höher _(September 2024)_                                                                                                                                            |
| ADAT-Kanal 3 funktioniert nicht mit 88.2 oder 96 kHz | Fehler in Firmware vor v1.0.6.3                                       | Aktualisiere Thunder\|Core Firmware auf v1.0.6.3 oder höher                                                                                                                                                                                  |
| Verzögerung nicht auf Kanälen über 16 angewendet                     | Fehler in Firmware vor v1.0.6.3                                       | Aktualisiere Thunder\|Core Firmware auf v1.0.6.3 oder höher                                                                                                                                                                                  |
| 3G SDI Kanäle nach dem Einschalten nicht aktiviert                   | Zeitüberschreitung des Fehlers in der Firmware Familie 1 vor v2.3.6.1 | Update von AX32 / DX32R / Penta Firmware auf v2.3.6.1 oder höher _(Dezember 2022)_                                                                                                                                        |

---

## 9.3 Software und Start

| Symptom                                                                                                    | Wahrscheinliche Ursache                                                                                                                               | Remedy                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman startet nicht auf Windows                                                                           | `VCRUNTIME140_1.DLL` fehlt                                                                                                                            | Update auf DADman v5.7.2 oder höher                                                                                                                                                                                                                                  |
|                                                                                                            | Unvollständige Installation                                                                                                                           | Deinstallieren, neu starten, von [digitalaudiosupport.com]installieren (https://www.digitalaudiosupport.com)                                                  |
| macOS Sequoia: DADman kann beim Start keine Verbindung zu Einheiten im Netzwerk herstellen | macOS 15 Geräteerkennung auf OS-Ebene                                                                                                                 | **Workaround:** Abmelden (**Apple Menü > Abmelden**), dann wieder einloggen. Thunderbolt-Verbindungen bleiben unberührt. _(Known open issue as of v5.8.2; fix in Development)_ |
| DADman stürzt ab, wenn Doppelklick auf eine `.dms`-Datei im Finder (macOS)              | Fehler vor v5.8.0                                                                                                     | Update auf DADman v5.8.0 oder höher                                                                                                                                                                                                                                  |
| Monitor-Profildatei wird nach dem Abbrechen einer Ladung beschädigt                                        | Fehler vor v5.8.0                                                                                                     | Update auf DADman v5.8.0 oder höher; Wiederherstellen aus einer Sicherungsdatei `.dmprof`                                                                                                                                                                            |
| Windows: MIDI Absturz in DADman                                                            | Fehler vor v5.8.1                                                                                                     | Update auf DADman v5.8.1 Build 6 oder höher                                                                                                                                                                                                                          |
| macOS: Skalierende Artefakte anzeigen (dünne Linien beim Scrollen)      | Fehler vor v5.8.0 auf skalierten Bildschirmen                                                                         | Update auf DADman v5.8.0 oder höher                                                                                                                                                                                                                                  |
| DADman speichert keine Dateien beim macOS-Abmelden oder Herunterfahren                                     | Fehler vor v5.7.0 (allgemein); vor v5.8.0 im Menü Leiste nur Modus | Update auf DADman v5.8.0 oder höher; Aktiviere **Immer Datei speichern** in den Einstellungen                                                                                                                                                                        |
| macOS: DADman wird nicht vorderst von Tray Icon (Sonoma)                | Fehler vor v5.8.0                                                                                                     | Update auf DADman v5.8.0 oder höher                                                                                                                                                                                                                                  |
| Windows: BitDefender Firewall, wodurch das Gerät gesperrt wird                             | Bekannter Konflikt vor v5.7.2                                                                                         | Update auf DADman v5.7.2 oder höher                                                                                                                                                                                                                                  |
| Verfälschte Daten mit Matrizen > 1024 Elementen                                                            | Fehler vor v5.7.0                                                                                                     | Update auf DADman v5.7.0 oder höher                                                                                                                                                                                                                                  |

---

## 9.4 Thunderbolt und Fahrer

_Gilt nur für AX64, AX Center, Core 256. Überspringe für Nur-Ethernet-Hardware._

| Symptom                                                                                 | Wahrscheinliche Ursache                                                         | Remedy                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Einheit wird nicht im macOS Audio MIDI Setup angezeigt                                  | System-Erweiterung nicht erlaubt                                                | Öffne **Systemeinstellungen > Privatsphäre & Sicherheit**; erlaube die Erweiterung von Digital Audio Denmark / NTP-Technologie A/S; starte neu                                                                                                                                               |
|                                                                                         | macOS Sequoia: gestrafftes Zubehör                              | Setze **Systemeinstellungen > Privatsphäre & Sicherheit > Zubehör** auf **Automatisch erlaubt** oder **Immer erlaubt**. Siehe [Ch. 3, Abschnitt 3.7]                                     |
|                                                                                         | Treiber nicht installiert                                                       | Installiere den DAD Thunderbolt 3 Treiber von [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                     |
|                                                                                         | Alte Treiberversion steht im Widerspruch zu macOS-Update                        | Entferne alte `DADDriverSetup.app` (ziehe in den Papierkorb und bestätige die Löschung), dann installiere den neuesten Treiber erneut                                                                                                                                                         |
| Gerät wird in der Audio-MIDI-Einrichtung ohne Kanäle angezeigt                          | Abtastrate oder Kanalanzahl stimmen nicht überein                               | Öffne **DADDriverSetup** und überprüfe die Einstellungen für Abtastrate und Kanäle mit dem erwarteten Format deines DAW                                                                                                                                                                                          |
| Windows ASIO: **Verpasste IRs** Zähler ohne Null                        | Systemunterbrechungsstreit                                                      | ASIO Puffer Größe erhöhen (512 oder 1024 Samples); schließen Sie unnötige Hintergrund-Anwendungen; deaktivieren Sie Wi-Fi                                                                                                                                                                     |
| Windows ASIO: Hohe **PCIe Laden**                                       | Zu viele Kanäle konfiguriert                                                    | Sendekanaleinstellungen in der ASIO-Treiberkonfiguration verringern                                                                                                                                                                                                                                              |
| Windows ASIO: Hohe **DPC-Latenz**                                       | Windows-Zeitplanungsverzögerungen von Drittanbietertreibern                     | Verwenden Sie einen DPC Latency Analyser, um den Treiber zu identifizieren. Häufige Ursachen: Wireless-Adapter, USB Power Management, Antivirus. Hochleistungs-Stromplan aktivieren                                                                              |
| macOS: DADman kann nicht mit Einheit über Thunderbolt kommunizieren     | Thunderbolt Kommunikations-Stack-Problem                                        | Aktualisieren Sie DAD Thunderbolt 3 Treiber auf v1.2.2 oder höher **and** aktualisieren Sie Thunder\|Core Firmware auf v1.1.0.3 oder höher. Beide Updates sind erforderlich _(Dezember 2024)_ |
| Audioausgänge über Thunderbolt                                                          | Donnerblitzkabel unter 20 Gbps                                                  | Ersetzen Sie Kabel mit einem zertifizierten Thunderbolt 3-Kabel auf mindestens 20 Gbit/s                                                                                                                                                                                                                         |
| Windows: ASIO-Treiber in der Audioanwendung nicht sichtbar              | Treiber nicht installiert                                                       | Installieren Sie den DAD Thunderbolt 3 ASIO Treiber — es ist ein separater Installer vom DADman                                                                                                                                                                                                                  |
| AX Center Dante Karte: externe Dante-Synchronisation funktioniert nicht | Fehler in Firmware vor v1.1.0.4 | Aktualisiere AX Center Firmware auf v1.1.0.4 oder höher _(Januar 2025)_                                                                                                                                                                       |

---

## 9.5 Uhr und Synchronisierung

| Symptom                                                                    | Wahrscheinliche Ursache                                                                 | Remedy                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gelbe Statusanzeige in einer Zeile mit dem Tab der Kamera                  | Synchronisationsverlust oder Abtastrate stimmen nicht mit der digitalen Eingabe überein | Überprüfen Sie die Abtastrate des Quellgeräts mit der DAD-Einheit. Im Tab **Conf** sind Quellen- und Abtastrate korrekt zu bestätigen. Falls dieser Eingabewert der Uhrmeister sein soll, setze **Quellen** auf diesen Eingabewert (z.B. MADI Coax, Dante, Word Uhr) |
| Klicks und Pops während des gesamten Audios                                | Einheit nicht an eine stabile Uhr gesperrt                                              | Im Tab **Conf** überprüfen Sie, dass die Quelle korrekt gesetzt ist und die ausgewählte Quelle aktiv und stabil ist                                                                                                                                                                                                                                     |
|                                                                            | Netzwerk überladen, die die Stabilität der Dante Uhr beeinträchtigen                    | Platziere DADman Traffic und Dante Audio in separaten Netzwerken                                                                                                                                                                                                                                                                                        |
| Eingabe der Wort-Uhr wird nicht sperren                                    | Synchronisation falsch                                                                  | Setze **Sync termination** zu \*\*75  \*\* im Tab **Conf**                                                                                                                                                                                                                                                                                         |
|                                                                            | Wortuhrkabel zu lang oder von schlechter Qualität                                       | Nutze 75  Koaxialkabel, maximale zuverlässige Länge ca. 30 m                                                                                                                                                                                                                                                                       |
| MADI Eingabe zeigt gelben Status an, aber die Abtastrate erscheint korrekt | MADI Frame Rate stimmt nicht überein                                                    | Im Reiter **Conf** überprüfen Sie die Einstellung **Frame Rate** (Legacy vs. High Speed) mit dem Sendegerät. Beide Enden eines MADI-Links müssen die gleiche Einstellung für Frame Rate verwenden                                                                                                    |
| "An anpassen" nicht nach DAW-Abtastratänderungen                           | Auf falsche Eingabe anpassen                                                            | Setze **Anpassen zu** an den digitalen Eingang, der mit dem DAW verbunden ist (z.B. **Thunderbolt 3**)                                                                                                                                                                                               |
|                                                                            | DAW aktualisiert Core Audio / ASIO Abtastrate nicht                                     | Schließen und öffnen Sie die DAW-Audio-Einstellungen erneut, um eine Aktualisierung zu erzwingen                                                                                                                                                                                                                                                        |

---

## 9.6 Überwachung

| Symptom                                                                                     | Wahrscheinliche Ursache                                      | Remedy                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mon Tab zeigt keine Steuerelemente                                                          | Kein Monitor-Profil geladen                                  | Load a `.dmprof` file via **File > Open Profile…** or create a new profile in **Settings > Monitor Profile**                                                                                                                                                                |
| Leere Kontrollseite in Avid Control oder Avid Control Oberfläche                            | DADman nicht an EuControl gebunden                           | In der Registerkarte EuControl **Zuweisen** mit DADman im Vordergrund, aktivieren Sie die Überwachung der Zuweisung für DADman. Bestätige **Aktiviere EuCon** in DADman **Einstellungen** Menü                                                              |
| EuCon: Kontrollraumlevel nach Ref Schalter nicht wieder aktiviert           | Fehler vor v5.8.2            | Update auf DADman v5.8.2 Build 2 oder höher                                                                                                                                                                                                 |
| macOS: Das Talkback-Menü zeigt einen falschen Wert im Monitor-Profil-Dialog | Fehler vor v5.8.2            | Update auf DADman v5.8.2 Build 2 oder höher                                                                                                                                                                                                 |
| Kopfhörer folgt nicht der Auswahl von Steuerraum Lautsprechern                              | Monitor Modus für Kopfhörer auf Cue statt auf Master gesetzt | In **Einstellungen > Monitor Profil**, setzte den Kopfhörer-Ausgabemonitor auf **Master**; Setze Steuerraumlautsprecher auf **Cue** Modus. Siehe [Ch. 8, Abschnitt 8.2] |
| Ref-Button hat keinen Effekt                                                                | Keine Referenzstufe im Monitorprofil definiert               | In **Einstellungen > Profil überwachen**, geben Sie den kalibrierten Referenzwert für die aktive Ausgabemenge ein                                                                                                                                                           |
| Monitorprofil beim nächsten Speichern nach abgebrochenem Laden beschädigt                   | Fehler vor v5.8.0            | Update auf DADman v5.8.0 oder neuer; Wiederherstellung aus Backup `.dmprof`                                                                                                                                                                 |

---

## 9.7 Prozeduren zurücksetzen

Versuche zurückgesetzt in der aufgelisteten Reihenfolge — weich zuerst.

### 9.7.1 Konfigurationsdatei neu laden

Stellt gespeicherte Einstellungen ohne Hardware wiederher:

1. Gehen Sie zu **Datei > Öffnen…** und wählen Sie die neueste `.dms` Datei.
2. Bestätigen Sie alle Parameter im DADman Fenster.

### 9.7.2 Werkseinstellungen via DADman

> **WARNUNG:** Löscht alle auf der Hardware gespeicherten Einstellungen. Speichere zuerst eine `.dms`-Datei.

1. Klicken Sie in der Geräteliste mit der rechten Maustaste auf die Einheit (oder benutzen Sie den Action-Button auf macOS).
2. Wähle **Werkseinstellungen zurücksetzen** und bestätige, wenn du aufgefordert wirst.
3. Nach dem Neustart der Einheit (bis zu 60 Sekunden) laden Sie die `.dms` Datei erneut über **Datei > Öffnen…**.

### 9.7.3 IP Reset Front Panel

Wenn die IP-Adresse der Einheit unbekannt oder falsch konfiguriert ist und Sie keine Verbindung über DADman herstellen können:

- Mit der **Reconfig** Taste (über ein kleines Loch auf der Rückseite mit einem Stift oder spitzen Objekt) wird die Einheit bei Einschalten auf ihre werksseitige Standard-IP-Adresse zurückgesetzt.
- Standard IP für die meisten DAD-Hardware: `10.0.7.20` — bestätigen Sie in Ihrer Hardware-Installationsanleitung.
- Nach der Neueinstellung erneut über DADman verbinden und über Device List **> Netzwerk-Einstellungen** neu konfigurieren.

### 9.7.4 Stromzyklus

Wenn die Einheit nicht reagiert und nicht über DADman zurückgesetzt werden kann:

1. In der DADman Device Liste: Rechtsklick auf die Einheit **> Verbindung trennen**.
2. Schalten Sie die Hardware-Einheit am Netzschalter aus.
3. Warte 10 Sekunden.
4. Schaltet die Einheit wieder ein.
5. Warten Sie bis zu 60 Sekunden auf die Fertig-LED um ein solides Grün zu zeigen.
6. Die Einheit erscheint automatisch in der Geräteliste.

---

## 9.8 Bekannte Probleme nach Version

| Symptom                                                                                   | Betroffene Versionen                                                                       | Behoben in                                                                                                                            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Windows: DADman startet nicht (VCRUNTIME DLL fehlend)  | Vor v5.7.2                                                 | v5.7.2 (Sep 2024)                                                                  |
| macOS: Absturz beim Doppelklick auf .dms im Finder        | Vor v5.8.0                                                 | v5.8.0 (Dez. 2024)                                                 |
| Monitor-Profil beschädigt nach abgebrochenem Laden                                        | Vor v5.8.0                                                 | v5.8.0 (Dez. 2024)                                                 |
| macOS: Skalierungsartefakte anzeigen                                      | Vor v5.8.0                                                 | v5.8.0 (Dez. 2024)                                                 |
| macOS: DADman wird nicht vorderst vom Tray (Sonoma)    | Vor v5.8.0                                                 | v5.8.0 (Dez. 2024)                                                 |
| macOS: Seltener Thunderbolt Kommunikationsfehler                          | Vor v5.8.0 + Treiber 1.2.2 | v5.8.0 + Treiber 1.2.2 (Dez. 2024) |
| Windows: MIDI Absturz                                                     | Vor v5.8.1                                                 | v5.8.1 b6 (Mai 2025)                                                               |
| macOS: Grafiken auf skalierten Bildschirmen mit großen Fenstern           | Vor v5.8.1                                                 | v5.8.1 b6 (Mai 2025)                                                               |
| EuCon: Kontrollraumlevel nach Ref Schalter nicht wieder aktiviert         | Vor v5.8.2                                                 | v5.8.2 b2 (Jan 2026)                                                               |
| macOS: Talkback-Menü falsch ausgewählter Wert                             | Vor v5.8.2                                                 | v5.8.2 b2 (Jan 2026)                                                               |
| Windows: BitDefender Firewall Gerät sperren                               | Vor v5.7.2                                                 | v5.7.2 (Sep 2024)                                                                  |
| **Firmware:** ADC AX Center ohne Audio (Timing-Fehler) | Vor Firmware v1.1.0.4                      | v1.1.0.4 (Januar 2025)                                             |
| **Firmware:** AX Center Dante Card externer Sync falsch                   | Vor Firmware v1.1.0.4                      | v1.1.0.4 (Januar 2025)                                             |
| **Firmware:** DA Karte Kanal 8 Phasenfehler                               | Vor Firmware v1.0.6.3                      | v1.0.6.3 (Sep 2024)                                                |
| **Firmware:** ADAT-Kanal 3 bei 88.2/96 kHz                | Vor Firmware v1.0.6.3                      | v1.0.6.3 (Sep 2024)                                                |
| **Firmware:** Verzögerung nicht auf Kanäle > 16 angewendet                | Vor Firmware v1.0.6.3                      | v1.0.6.3 (Sep 2024)                                                |
| **Firmware:** 3G SDI Kanäle aktivieren nicht nach dem Einschalten         | Vor Familie 1 Firmware v2.3.6.1            | v2.3.6.1 (Dez. 2022)                               |

**Bekanntes Problem öffnen (ab Version 5.8.2 Version 2):**

| Symptom                                                                                                                              | Status                          | Workaround                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| macOS Sequoia (v15): DADman kann beim ersten Start keine Verbindung zu Netzwerkgeräten herstellen | Öffnen — Fix in der Entwicklung | Loggen Sie sich ab und melden Sie sich im MacOS-Benutzerkonto an. Thunderbolt-Verbindungen sind nicht betroffen |

---

## 9.9 Erhalte Support

**DAD Support Portal**  
[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)  
Knowledge Base, Firmware-Downloads, technische Bulletins und Community-Forum.  
Ein kostenloses Konto ist erforderlich.

**Email**  
support@ntp.dk

**Wenn du Support kontaktierst, inklusive:**

1. **DADman > Über DADman > Informationen kopieren** Ausgabe _(v5.7.2+)_
2. Hardware-Einheitsmodell und Firmware-Version (sichtbar in der Geräte-Liste)
3. Beschreibung des Symptoms, wenn es begonnen hat und was sich geändert hat, bevor es erschienen ist
4. Alle auf dem Bildschirm angezeigten Fehlermeldungen
5. Relevante Protokollausgabe (siehe unten)

### 9.9.1 Zugriff auf DADman Logs — macOS

DADman schreibt Logeinträge über das macOS Unified Logging System. Protokolle werden nicht als reine Textdateien gespeichert; verwenden Sie die folgenden Methoden, um sie zu sammeln.

**Console.app (einfachste Methode):**

1. Öffne **Console.app** (Anwendungen > Utilities > Konsole).
2. Geben Sie im Suchfeld `DADman` ein und drücken Sie auf Zurück.
3. Wiederholen Sie das Problem. Konsole zeigt DADman Logeinträge in Echtzeit an.
4. Wählen Sie die relevanten Einträge aus, klicken Sie mit der rechten Maustaste und wählen **Kopieren** aus, um sie in ein Support-Ticket einzufügen.

**Terminal (Zeitreicher Log-Export):**

```bash
log show --predicate 'process == "DADman"' --info --last 1h > ~/Desktop/dadman-log.txt
```

Passen Sie `--last 1h` nach Bedarf an (z.B. `--last 30m`, `--last 2h`). Die resultierende Datei kann einem Support-Ticket angehängt werden.

**Absturzberichte:**  
Wenn DADman abstürzt, wird ein Absturzbericht geschrieben an:

```
~/Bibliothek/Logs/DiagnosticReports/
```

Suchen Sie nach Dateien mit dem Namen `DADman_<date>_<hostname>.ips` oder `DADman_<date>.crash`. Diese sind auch in Console.app unter **Absturzberichte** sichtbar.

**TB3 Treiberprotokolle:**  
um Thunderbolt Treiberprotokolle zu sammeln:

```bash
log zeigt --predicate 'process == "DADThunderboltDriver" ODER Subsystem CONTAINS "ntp"' --info --last 1h > ~/Desktop/tb3-driver-log.txt
```

### 9.9.2 Zugriff auf DADman Logs — Windows

**Windows Event Viewer:**

1. Öffne **Event Viewer** (Start → Suche "Event Viewer").
2. Navigieren Sie zu **Windows Logs > Anwendung**.
3. Klicke auf **Filter Aktuelle Log…** und gib `DADman` in das Feld **Event-Quellen** ein.
4. Kopieren oder exportieren Sie die gefilterten Einträge für das Support-Ticket.

**Anwendungsdatenordner:**  
DADman speichert Einstellungen und kann Logdateien speichern:

```
%AppData%\NTP-Technologie\DADman\
```

Öffne diesen Pfad im Windows Explorer (`Win + R` → füge den Pfad → Enter) ein und füge alle dort gefundenen `.log`-Dateien hinzu, wenn du Unterstützung kontaktierst.

> **HINWEIS:** Die exakten Logdateipfade oben wurden für Standardinstallationen überprüft. Wenn DADman an einem nicht-standardmäßigen Ort installiert wurde oder unter einem anderen Benutzerkonto ausgeführt wurde, können Pfade abweichen. DAD-Unterstützung kann Anleitungen bieten, wenn diese Orte nicht die erwarteten Dateien enthalten.

---

_[Ausstehend vom DAD-Engineering:]_  
_— Fehlermeldungskatalog (on-screen Alarmtext → cause → remedy)_  
_— Frontpanel LED-Zustandstabellen pro Hardware-Modell_
