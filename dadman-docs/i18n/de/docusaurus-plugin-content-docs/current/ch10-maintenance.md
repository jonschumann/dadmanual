---
title: "Kapitel 10 — Wartung"
sidebar_label: "Ch. 10 — Wartung"
sidebar_position: 12
---

# Kapitel 10 — Wartung

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0. — Hardwarespezifische Umweltspezifikationen bis zur Bestätigung des Modells durch DAD Engineering  
> **Zuletzt aktualisiert:** Juni 2026

---

## In diesem Kapitel

| Abschnitt            | Cover                                               |
| -------------------- | --------------------------------------------------- |
| 10.1 | DADman Software aktualisieren                       |
| 10.2 | Hardware-Firmware wird aktualisiert                 |
| 10.3 | Aktualisiere Dante-Firmware                         |
| 10.4 | Aktualisiere den Thunderbolt 3 Treiber              |
| 10.5 | Überprüfe aktuelle Software- und Firmware-Versionen |
| 10.6 | Reinigung                                           |
| 10.7 | Speicher                                            |
| 10.8 | End-of-Life und Entsorgung                          |

---

## 10.1 Aktualisierung der DADman Software

DADman Aktualisierungen werden als komplette Installationspakete vertrieben — nicht als inkrementelle Patches. Die Installation einer neuen Version ersetzt die bestehende Installation.

### 10.1.1 Vor dem Update

- Überprüfen Sie vor der Installation die **Versionshinweise** für die neue Version. Veröffentlichungshinweise dokumentieren getestete OS-Versionen, Firmware-Kompatibilitätsanforderungen, verändertes Verhalten und bekannte Probleme mit neuen Betriebssystemen. Versionshinweise sind im Downloadcenter unter [digitalaudiosupport.com]verfügbar (https://www.digitalaudiosupport.com).
- Bestätigen Sie, dass Ihr Betriebssystem als Unterstützung für die neue DADman Version aufgelistet ist. Werfen Sie einen Blick auf die Release Notes — nicht alle DADman Versionen unterstützen alle Betriebssysteme.

### 10.1.2 DADman aktualisieren — macOS

1. Laden Sie den neuen DADman Installer (`.pkg`) vom DAD Support Portal oder Ihrem Avid Master Account herunter.
2. Beenden Sie DADman, wenn es ausgeführt wird.
3. Doppelklicken Sie auf den Installer und folgen Sie den Anweisungen auf dem Bildschirm. Die neue Version ersetzt automatisch die bestehende Installation.
4. Starten Sie nach der Installation DADman und bestätigen Sie die Versionsnummer unter **DADman > Über DADman**.

### 10.1.3 DADman aktualisieren — Windows

1. Lade den neuen DADman Installer (`.exe` oder `.msi`) vom DAD Support-Portal herunter.
2. Schließen Sie DADman, wenn es läuft.
3. Doppelklicken Sie auf den Installer und folgen Sie den Anweisungen auf dem Bildschirm. Klicken Sie auf **Ja**, wenn eine Eingabeaufforderung zur Benutzerkontenkontrolle angezeigt wird.
4. Starten Sie nach der Installation DADman und bestätigen Sie die Versionsnummer unter **Hilfe > Über DADman**.

> **HINWEIS:** Das Aktualisieren von DADman aktualisiert die Hardware-Firmware nicht. Dabei handelt es sich um getrennte Operationen, die gesonderte Verfahren erfordern. Überprüfen Sie immer die Release-Hinweise, um festzustellen, ob ein DADman Update ein entsprechendes Firmware-Update empfiehlt oder benötigt.

---

## 10.2 Hardware-Firmware aktualisieren

### 10.2.1 Kritisch: Konfiguration vor dem Update speichern

> **WARNUNG — Einstellungen gehen verloren**  
> \*\*Firmware-Updates setzen alle auf der Hardware-Einheit gespeicherten Einstellungen auf Werkseinstellungen zurück. \* Routing-Konfigurationen, Gain-Einstellungen, Kanalbeschriftungen, Monitor-Profile, Routing-Presets und alle anderen gespeicherten Parameter werden während eines Firmware-Updates dauerhaft gelöscht. Die einzige Möglichkeit, diese Einstellungen wiederherzustellen, besteht darin, eine zuvor gespeicherte DADman Settings Datei (`.dms`) neu zu laden.

**Vor dem Update einer Hardware-Firmware:**

1. Öffnen Sie DADman und bestätigen Sie, dass die zu aktualisierende Einheit in der Geräteliste angeschlossen und sichtbar ist.
2. Gehen Sie zu **Datei > Speichern unter…** und speichern Sie die aktuellen Einstellungen in einer `.dms` Datei mit einem klaren Dateinamen (z.B. `StudioA_AXCenter_pre-update_2026-06.dms`).
3. Wenn ein Monitorprofil geladen ist, speichern Sie es separat: **Datei > Profil speichern unter…**
4. Bestätigen Sie, dass beide Dateien an einem gesicherten Ort gespeichert sind.

> **TIPP:** Der Firmware-Update-Warndialog in DADman _(v5.7.2 und höher)_ enthält eine Erinnerung an die Sicherung der Einstellungen bevor Sie fortfahren. Diesen Dialog nicht schließen, ohne die Sicherung zu bestätigen.

### 10.2.2 Firmware-Dateien erhalten

Firmware-Dateien für alle DAD- und NTP-Technologie-Hardware sind im Download Center unter [digitalaudiosupport.com]verfügbar (https://www.digitalaudiosupport.com). Ein kostenloses Konto ist erforderlich.

Laden Sie die Firmware-Datei für Ihr spezielles Hardwaremodell herunter. Verwenden Sie keine Firmware von einem Modell auf einem anderen Modell — Firmware ist nicht zwischen Hardware-Familien austauschbar.

### 10.2.3 Durchführung des Firmware-Updates über DADman

1. DADman öffnen. Bestätigen Sie, dass die zu aktualisierende Einheit angeschlossen und in der Geräteliste sichtbar ist.
2. Klicken Sie in der Geräteliste mit der rechten Maustaste auf die Einheit (Windows) oder benutzen Sie den Action-Button (macOS).
3. Wähle **Update Firmware**.
4. Klicken Sie auf **Bestätigen** oder **Weiter** wenn der Backup-Erinnerungsdialog erscheint (nach der Bestätigung der Sicherung ist das Backup-Dialog).
5. Durchsuchen Sie die heruntergeladene Firmware-Datei und wählen Sie diese aus.
6. Das Firmware-Update beginnt. Ein Fortschrittsanzeiger zeigt den Update-Status an.
7. Unterbrechen Sie nicht die Stromversorgung der Einheit oder schließen Sie DADman während des Updates. Ein unterbrechtes Firmware-Update kann die Einheit unbootbar machen und eine Werkserholung erfordern.
8. Nach dem Update startet die Einheit automatisch neu. Die Geräteliste zeigt die Trennung und Verbindung der Einheit an. Warte auf die **Ready** LED um zu solidem Grün zurückzukehren (bis zu 60 Sekunden).
9. Bestätigen Sie die neue Firmware-Version in der Geräteliste. Lade deine `.dms` Einstellungsdatei neu über **Datei > Öffnen…**.

> **WARNUNG:** Unterbrechen Sie unter keinen Umständen die Stromversorgung zur Hardware-Einheit, während eines Firmware-Updates. Falls ein Stromausfall mitten im Update auftritt, kontaktieren Sie den DAD-Support unter support@ntp.dk, bevor Sie die Einheit wieder einschalten.

### 10.2.4 Firmware-Versionsversionsreferenz

Für eine komplette Aufzeichnung von Firmware-Versionen, Veröffentlichungsdaten und was sich in jedem Release geändert hat, siehe das kompilierte Dokument **Version History** :  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

Die aktuelle Firmware-Version für jede Hardware-Familie zum Zeitpunkt der Veröffentlichung (DADman v5.8.2 Build 2):

| Hardware-Familie                                        | Aktuelle Firmware                                        |
| ------------------------------------------------------- | -------------------------------------------------------- |
| AX64, AX Center, Core 256, MTRX II, Control 01/02       | v1.1.2.4 |
| Dante 256 IPCore (Thunder\|Core Gen) | v1.0.3.1 |
| AX32, DX32R, Penta 720, Penta 721s, Avid MTRX           | v2.4.6.4 |
| Brooklyn 2 Dante Modul                                  | v1.0.3.1 |
| Brooklyn 3 Dante Modul                                  | v1.1.0.3 |
| MTRX Studio                                             | v1.1.6.3 |
| MTRX Studio Dante 64 IPCore                             | v1.0.3.1 |
| Dante Karte                                             | v1.0.3.1 |

---

## 10.3 Aktualisiere Dante Firmware

Dante-Firmware (für Dante-Module und IPCore-Hardware in DAD-Einheiten) wird separat von der Hauptplatinen-Firmware aktualisiert mit dem **Dante Updater** Tool innerhalb des **Dante Controller** — nicht via DADman.

### 10.3.1 Anforderungen

- **Dante Controller** muss auf dem Computer installiert sein. Download von [audinate.com](https://www.audinate.com).
- Die DAD-Einheit muss an das Dante-Netzwerk angeschlossen werden und im Dante-Controller sichtbar sein.
- Laden Sie die passende Dante-Firmware-Datei (`.dnt`) vom DAD-Support-Portal herunter. Dante Firmware-Dateien werden mit jedem DADman Software-Release gebündelt.

### 10.3.2 Dante Firmware Update Prozedur

1. Öffne **Dante Controller**.
2. Navigieren Sie zu **Gerät > Dante Updater** um das Dante Updater Tool zu öffnen.
3. Aktiviere in den Dante Updater **Erweiterte Einstellungen**, **Importierte Firmware erlauben**. Dies ist erforderlich, um DAD-mitgelieferte Firmware-Dateien zu laden.
4. Wählen Sie im Dante-Updater die Registerkarte **Bibliothek** aus und klicken Sie auf **Importierte Dateien**.
5. Importiere die `.dnt` Firmware-Dateien, die vom DAD Support Portal heruntergeladen wurden, indem du **Import** klickst.
6. Kehre zur Registerkarte Dante Updater **Home** zurück und wähle **importierte Firmware-Dateien** aus der Firmware-Quellenauswahl.
7. Wählen Sie die zu aktualisierende DAD-Einheit aus der Geräteliste.
8. Folgen Sie den Anweisungen auf dem Bildschirm, um die Aktualisierung zu starten.
9. Warten Sie, bis das Update abgeschlossen ist. Das Dante-Modul startet automatisch neu.

> **NOTE:** Brooklyn 3 Dante Modul Benutzer: von Firmware v1.1.0.3 (Release Januar 2026), unterstützt die Brooklyn 3 **ST 2110** Protokoll ohne DM (Dante Domain Manager). Dies erfordert sowohl die aktualisierte Dante Firmware als auch die neueste Version des Dante Controllers. Weitere Informationen finden Sie in den Versionshinweisen .

---

## 10.4 Aktualisierung des Thunderbolt 3 Treibers

_Gilt nur für AX64, AX Center, Core 256 Benutzer. Überspringe für Nur-Ethernet-Hardware._

Der DAD Thunderbolt 3 Treiber (DADDriverSetup) wird separat von DADman aktualisiert. Treiber-Updates werden neben Firmware-Updates veröffentlicht, wenn Verbesserungen der Funktionalität von Thunderbolt enthalten sind.

### 10.4.1 macOS — Treiberaktualisierungsvorgang

> **HINWEIS:** Auf macOS muss die alte Treiberversion entfernt werden, bevor die neue installiert wird. Die Installation über einen existierenden Treiber ohne ihn zuerst zu entfernen, führt nicht zu einem ordnungsgemäß funktionierenden Treiber auf macOS Sequoia oder neuer.

1. Laden Sie den neuen Thunderbolt 3 Treiber-Installer (`.pkg`) von [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Suchen Sie **DADDriverSetup.app** in Ihrem Anwendungsordner.
3. In den Papierkorb verschieben (**Rechtsklick > In den Papierkorb verschieben**). macOS zeigt eine Warnung an, dass die System-Erweiterung entfernt wird — bestätigen Sie den Fortfahren.
4. Führen Sie den neuen Treiber-Installer aus: Doppelklicken Sie auf die heruntergeladene `.pkg` und folgen Sie den Anweisungen auf dem Bildschirm.
5. Wenn Sie aufgefordert werden, genehmigen Sie die neue System-Erweiterung in **Systemeinstellungen > Privatsphäre & Sicherheit**.
6. Starten Sie den Computer neu, wenn Sie aufgefordert werden.
7. Nach dem Neustart öffnen Sie **DADDriverSetup** von Anwendungen und bestätigen die angezeigte Versionsnummer.
8. Verbinden Sie Ihre Thunder\|Core Hardware und bestätigen Sie, dass sie im **Audio MIDI Setup** erscheint.

### 10.4.2 Windows — Treiberaktualisierungsvorgang

1. Laden Sie den neuen ASIO Treiber Installer (`.msi`) von [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Beenden Sie alle Audio-Anwendungen mit dem ASIO-Treiber.
3. Öffnen Sie **Einstellungen > Apps** (oder **Systemsteuerung > Programme**) und deinstallieren Sie den bestehenden DAD Thunderbolt 3 ASIO Treiber.
4. Computer neu starten.
5. Führen Sie den neuen Treiber-Installer (`.msi`) aus und folgen Sie den Anweisungen auf dem Bildschirm.
6. Öffnen Sie Ihre Audio-Anwendung und bestätigen Sie, dass die aktualisierte Treiberversion in den ASIO-Geräteeinstellungen sichtbar ist.

### 10.4.3 Aktuelle Treiber-Versionen

| Fahrer                                                              | Plattform | Aktuelle Version                       |
| ------------------------------------------------------------------- | --------- | -------------------------------------- |
| DAD Thunderbolt 3 Core Audio Treiber (DADdriver) | macOS     | v1.2.2 |
| DAD Thunderbolt 3 ASIO Treiber                                      | Fenster   | v1.1.2 |

_Aktuell ab DADman v5.8.2 Build 2 (Januar 2026)._

---

## 10.5 Überprüfung aktueller Software und Firmware-Versionen

### 10.5.1 DADman Version

- **macOS:** **DADman Menü > Über DADman**
- **Fenster:** **Hilfe > Über DADman**

Der Dialog Über DADman zeigt die DADman Versionsnummer und Build an. Ab v5.7. , der **Kopiere Informationen** Button kopiert die kompletten Diagnoseinformationen — DADman Version, OS-Version, angeschlossene Geräteliste und Treiberversionen von Thunderbolt — in die Zwischenablage.

### 10.5.2 Hardware-Firmware-Version

Die Firmware-Version für jede angeschlossene Einheit wird in der **Geräteliste** neben dem Einheitsnamen und der ID angezeigt. Fahren Sie über das Firmware-Versionsfeld für weitere Details, sofern verfügbar.

### 10.5.3 Thunderbolt Treiberversion

Die Thunderbolt Treiberversion ist im **Über DADman > Informationen kopieren** Ausgang _(v5.7.2 und höher)_ enthalten. Es kann auch in **DADDriverSetup** (macOS) oder im ASIO Treiberkonfigurationsdialog (Windows) gefunden werden.

### 10.5.4 Versionshinweise und Update-Chronik

Alle Versionshinweise werden bei [digitalaudiosupport.com](https://www.digitalaudiosupport.com) im Downloadcenter archiviert. Eine kompilierte Versionshistorie wird auch in:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

---

## 10.6 Reinigung

**Reinigungsmaterialien:** Verwenden Sie nur ein weiches, trockenes Stoff, um die Front- und Heckplatten und Gehäuse aller DAD-Hardware zu reinigen. Nicht verwenden:

- Flüssige Reinigungsmittel, Lösungsmittel oder Sprühreiniger jeglicher Art
- Schleifgewebe oder Pads
- Druckluft in Lüftungsöffnungen oder Steckverbinder-Blenden geleitet

**Connectors:** Fügen Sie keine Objekte zu Reinigungszwecken in Konnektor-Blenden ein. Wenn ein Steckverbinder verunreinigt erscheint, konsultieren Sie qualifiziertes Servicepersonal.

> **KAUF:** Trennen Sie vor der Reinigung die Einheit vom Netzstromanschluss. Lassen Sie keine Flüssigkeiten durch Lüftungsöffnungen oder Steckverbinder-Aperturen in das Gehäuse eindringen.

**Bildschirme und Anzeige:** Einheiten mit LCD-Displays (AX Center, MTRX Studio) können mit einem weichen, trockenen Tuch gereinigt werden. Verwenden Sie keine Siebreinigungsflüssigkeiten.

**Frequenz:** Untersuchen und reinigen Sie die Frontplatte und Lüftungsöffnungen im Rahmen eines regulären Wartungszeitplans — zumindest einmal im Jahr in einer sauberen Studio-Umgebung; öfter in Umgebungen mit erhöhtem Staubspiegel.

---

## 10.7 Speicher

Wenn eine Hardware-Einheit für einen längeren Zeitraum gespeichert werden soll (mehr als ein paar Wochen), sollten die folgenden Bedingungen beibehalten werden:

| Parameter            | Bedingung                                                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Temperatur**       | −20°C bis +60°C (−4°F bis +140°F)                                                                                                                                                                                 |
| **Luftfeuchtigkeit** | 10% bis 80% relative Luftfeuchtigkeit, nicht verdichtet                                                                                                                                                                              |
| **Paket**            | Wenn vorhanden, in der Originalverpackung aufbewahren. Wenn die Originalverpackung nicht verfügbar ist, verwenden Sie antistatische Verpackung für alle exponierten Leiterplatten oder Steckverbinder-Schnittstellen |
| **Orientierung**     | Lagere Rackmontageeinheiten horizontal mit der Frontplatte nach oben                                                                                                                                                                 |
| **Kraft**            | Netzleistung vor dem Speicher trennen                                                                                                                                                                                                |

> **HINWEIS:** Erlaube der Einheit die Raumtemperatur zu erreichen, bevor sie nach der Lagerung unter kalten Bedingungen eingeschaltet wird. Durch die Anbringung einer Kälteeinheit in einer warmen Umgebung kann die Kondensation an internen Komponenten entstehen.

---

## 10.8 End-of-Life und Disposal

Die Hardware der DAD / NTP-Technologie und die dazugehörigen Kabel unterliegen der Europäischen WEEE-Richtlinie (Elektro- und Elektronische Geräte, Richtlinie 2012/19/EU) und gleichwertige nationale und regionale Vorschriften.

**Entsorgen Sie diese Ausrüstung nicht in unsortierten Haushaltsabfällen.**

Am Ende der Lebensdauer muss die Ausrüstung sein:

- Wird zum Recycling an einen autorisierten Händler oder Distributor zurückgegeben, oder
- An einen autorisierten lokalen Sammelpunkt für das Recycling geliefert, oder
- Zurück zur DAD / NTP-Technologie zur ordnungsgemäßen Entsorgung

Kontaktieren Sie DAD / NTP-Technologie für die Entsorgung Anleitung:  
E-Mail: info@digitalaudio.dk  
Web: www.digitalaudio.dk

Das WEEE-Symbol auf dem Produkt oder dessen Verpackung identifiziert es als gesonderten Sammelbedarf. Siehe auch [Front Matter, Section FM.8 — Disposal and WEEE].

---

_[Ausstehend vom DAD-Engineering:]_  
_— Bestätigtes Betriebs- und Lagertemperatur-/Luftfeuchtigkeitsbereich (Werte oben sind angezeigt)_  
_— Reinigungsintervall und Verfahren für Einheiten mit auswechselbaren Ventilatorfiltern (falls zutreffend)_  
_— Sicherungstyp und Ersatzverfahren pro Hardwaremodell (zutreffend)_
