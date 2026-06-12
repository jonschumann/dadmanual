---
title: "Kapitel 3 — Installation"
sidebar_label: "Ch. 3 — Installation"
sidebar_position: 5
---

# Kapitel 3 — Installation

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8.1.  
> **TB3 Driver version covered:** Letzte — siehe Download Centre bei digitalaudiosupport. om  
> **Kapitelstatus:** Entwurf v0.1 — Ausstehende technische Überprüfung von DAD Engineering  
> **Zuletzt aktualisiert:** Juni 2026

---

## In diesem Kapitel

Dieses Kapitel behandelt alles, was benötigt wird, um DADman und die dazugehörige Treibersoftware auf Ihrem Computer zu installieren und zu konfigurieren. Es ist für die Erstinstallation organisiert; wenn Sie eine bestehende Installation aktualisieren, lesen Sie [Kapitel 10, Abschnitt 10.1 — DADman aktualisieren und Firmware].

| Abschnitt           | Cover                                                               | Relevant für                                     |
| ------------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| 3.1 | Installationsübersicht                                              | Alle Benutzer                                    |
| 3.2 | Erhalten der Software                                               | Alle Benutzer                                    |
| 3.3 | DADman wird installiert                                             | Alle Benutzer                                    |
| 3.4 | Installation des Thunderbolt 3 Treibers                             | AX64, AX Center, Core 256, Avid MTRX Serie       |
| 3.5 | Konfigurieren des Thunderbolt 3 Treibers                            | AX64, AX Center, Core 256, Avid MTRX Serie       |
| 3.6 | macOS Sequoia: zusätzliche Sicherheitskonfiguration | macOS 15 (Sequoia) und später |
| 3.7 | Netzwerkverbindung konfigurieren                                    | Alle Ethernet-verbundenen Benutzer               |
| 3.8 | Installation wird überprüft                                         | Alle Benutzer                                    |

---

## 3.1 Installationsübersicht

### 3.1.1 Software-Komponenten

DADman und der DAD Thunderbolt 3 Treiber sind **zwei getrennte, unabhängige Anwendungen**. Ob Sie beide – oder nur DADman – benötigen, hängt davon ab, wie sich Ihre Hardware mit dem Computer verbindet.

| Komponente                    | Zweck                                                                                                                                                              | Erforderlich für                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **DADman**                    | Konfiguriert und steuert alle angeschlossenen DAD-, NTP- und Avid-Hardware-Einheiten über Ethernet                                                                 | Alle unterstützte Hardware                           |
| **DAD Thunderbolt 3 Treiber** | Enthält die Thunder\|Core Schnittstelle als Core Audio Gerät (macOS) oder ASIO Gerät (Windows) für DAW und Audio-Anwendungen | Nur AX64, AX Center, Core 256 und Avid MTRX Produkte |

> **HINWEIS:** Der Thunderbolt 3-Treiber stellt den Audio-_Transport_ zwischen Ihrem Computer und der Hardware bereit – Ihre DAW sieht es als Audio-Schnittstelle. DADman bietet die _control_ Ebene — Routing, Gain, Überwachung und Konfiguration. Beide können gleichzeitig ohne Konflikte auf demselben Computer installiert und ausgeführt werden.

Wenn Ihre Hardware nur über Ethernet mit dem Computer verbunden ist (z.B. eine AX32, DX32R oder Penta Einheit), benötigen Sie nur DADman.

### 3.1.2 Verbindungsthema

DADman kommuniziert mit allen angeschlossenen Einheiten über das Netzwerk Ihres Computers mithilfe des Ethernet-(IP)-Protokolls, unabhängig davon, ob diese auch über Thunderbolt 3 verbunden sind. Siehe [Abschnitt 3.7 — Konfiguration der Netzwerkverbindung] für Anleitung vor der Installation.

---

## 3.2 Beschaffung der Software

### 3.2.1 DAD- und NTP-Hardware-Benutzer

Laden Sie DADman und den Thunderbolt 3 Treiber vom DAD Support-Portal herunter:

**[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)**

Für den Zugriff auf das Downloadcenter ist ein kostenloses DAD/NTP-Technologiekonto erforderlich. Wenn Sie noch kein Konto haben:

1. Navigieren Sie zum Support-Portal und wählen Sie **Konto erstellen**.
2. Füllen Sie das Anmeldeformular aus.
3. Nachdem Sie Ihre E-Mail-Adresse überprüft haben, melden Sie sich an und navigieren Sie zum **Download-Center**.
4. Suchen Sie den DADman-Eintrag für Ihr Betriebssystem und laden Sie den Installer herunter.
5. Wenn Ihre Hardware ein Thunder\|Core Produkt ist (AX64, AX Center oder Core 256), laden Sie auch den Thunderbolt 3 Treiber für Ihr Betriebssystem herunter.

> **HINWEIS:** Überprüfen Sie vor der Installation immer die Release-Hinweise im Download-Center. Release-Notizen dokumentieren die getesteten OS-Versionen, bekannte Probleme mit neuen Betriebssystem-Releases und Firmware-Kompatibilitätsanforderungen für diese DADman-Version.

### 3.2.2 Avid Hardware Benutzer

Wenn Sie DADman mit einem Avid MTRX, MTRX II oder MTRX Studio verwenden:

1. Melden Sie sich bei Ihrem **Avid Master Account** unter [https://avid.com](https://avid.com) an.
2. Navigieren Sie zu Ihren Downloads und finden Sie die DADman Version für Ihre Avid Hardware.
3. Laden Sie den Installer von Ihrem Avid-Konto herunter.

> **NOTICE:** Avid-approved DADman Versionen können sich von der aktuellsten Version des DAD Support-Portals unterscheiden. Verwenden Sie immer die Avid Master Account Version für Avid Hardware, um die Kompatibilität sicherzustellen.

---

## 3.3 DADman installieren

### 3.3.1 macOS

**Bevor Sie beginnen:** Stellen Sie sicher, dass Sie bei einem Konto mit Administratorrechten angemeldet sind. Beenden Sie alle Audioanwendungen, die ausgeführt werden könnten.

1. Suchen Sie die heruntergeladene DADman Installationsdatei (`.pkg` Format) und doppelklicken Sie sie, um den Installer zu starten.
2. Lesen Sie die Lizenzvereinbarung und klicken Sie auf **Weiter**, dann **Vereinbaren** um zu akzeptieren.
3. Click **Install**. Geben Sie Ihr Administratorpasswort ein und klicken Sie auf **Software installieren**.
4. Klicken Sie auf **Schließen** wenn die Installation abgeschlossen ist.
5. Navigiere zu deinem **Programme** Ordner und bestätige, dass **DADman.app** vorhanden ist.

DADman ist jetzt installiert. Starten Sie es noch nicht, wenn Sie den Thunderbolt 3 Treiber installieren müssen — fahren Sie mit [Abschnitt 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

Wenn Ihre Hardware nur über Ethernet verbunden ist, können Sie DADman jetzt starten. Weiter zu [Abschnitt 3.7 — Konfiguration der Netzwerkverbindung](#37-configuring-the-network-connection).

### 3.3.2 Fenster

**Bevor Sie beginnen:** Stellen Sie sicher, dass Sie bei einem Konto mit Administratorrechten angemeldet sind. Beenden Sie alle Audioanwendungen, die ausgeführt werden könnten.

1. Suchen Sie die heruntergeladene DADman Installationsdatei (`.exe` oder `.msi` Format) und doppelklicken Sie darauf.
2. Wenn eine Eingabeaufforderung zur Benutzerkontenkontrolle erscheint, klicken Sie auf **Ja**, um den Installer zu starten.
3. Folgen Sie den Installationsanweisungen, klicken Sie auf **Weiter** in jedem Schritt.
4. Klicken Sie auf **Installieren** um mit der Installation zu beginnen.
5. Klicken Sie auf **Beenden** wenn die Installation abgeschlossen ist.
6. Bestätigen Sie, dass DADman im Startmenü erscheint.

Wenn Ihre Hardware nur über Ethernet verbunden ist, gehen Sie zu [Abschnitt 3.7](#37-configuring-the-network-connection). Wenn Sie den Thunderbolt 3 Treiber benötigen, gehen Sie zu [Abschnitt 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

---

## 3.4 Installation des Thunderbolt 3-Treibers (nur Thunder|Kernprodukte)

> **HINWEIS:** Dieser Abschnitt gilt nur, wenn Ihre Hardware ein AX64, AX Center, Core 256 oder ein Avid MTRX Produkt ist. Wenn Ihre Hardware nur über Ethernet mit dem Computer verbunden ist, überspringen Sie [Abschnitt 3.7](#37-configuring-the-network-connection).

Der DAD Thunderbolt 3 Treiber ermöglicht es Ihrem Thunder\|Core Interface als Audio-Gerät in macOS Core Audio (sichtbar in **Audio MIDI Setup**) oder als ASIO Gerät in Windows zu erscheinen und andere Audioanwendungen zur Verfügung zu stellen. Die Installation des Treibers beeinträchtigt nicht die Fähigkeit von DADman, mit der Einheit über Ethernet zu kommunizieren — dies sind unabhängige Verbindungswege.

> **HINWEIS:** Verbinden Sie Ihre Thunder\|Core-Hardware nicht mit dem Thunderbolt-Port des Computers, bis die Treiberinstallationsprozedur Sie dazu anweist.

### 3.4.1 macOS

**Bevor du beginnst:** Stelle sicher, dass du macOS 11 Big Sur oder später ausführst. Stellen Sie sicher, dass DADman v5.6.7.1 oder höher bereits installiert ist (siehe [Abschnitt 3.3.1](#331-macos)).

1. Suchen Sie den heruntergeladenen Thunderbolt 3 Treiber-Installer (`.pkg` Format) und kopieren Sie ihn auf Ihren Desktop.
2. Doppelklicken Sie auf die `.pkg` Datei, um den Installer zu starten.
3. Folgen Sie den Anweisungen auf dem Bildschirm. Klicke **Weiter**, dann **Installieren**.
4. Geben Sie Ihr Administratorpasswort ein und klicken Sie auf **Software installieren**.
5. Ist dies das erste Mal, dass der Treiber auf diesem Computer installiert wurde, wird macOS eine **"System Extension Blocked"** Benachrichtigung anzeigen.
   - Klicken Sie auf **Öffne Sicherheitseinstellungen** (oder **Öffne Systemeinstellungen** auf macOS Ventura und später).
6. Im Bereich **Privatsphäre & Sicherheit** :
   - Klicken Sie auf das Schloss-Symbol am unteren Rand des Fensters und geben Sie Ihr Passwort ein, um die Einstellungen zu entsperren.
   - Klicke **Erlauben** neben der blockierten Erweiterung von Digital Audio Denmark / NTP-Technologie.
7. Wenn Sie aufgefordert werden, klicken Sie **Neustart** um den Computer neu zu starten.

> **NOTICE:** Die "System Extension Blocked"-Benachrichtigung ist ein normaler Bestandteil der erstmaligen Installation auf macOS. Das ist kein Fehler. Die Erweiterung muss erlaubt sein, bevor der Treiber funktioniert.

8. Nach einem Neustart öffnen Sie **DADDriverSetup** aus Ihrem Anwendungsordner.
9. Verbinden Sie Ihre Thunder\|Core-Hardware mit dem Thunderbolt 3- oder USB-C-Port des Computers mit einem 20-Gbps-kompatiblen Kabel.

Der Treiber ist jetzt installiert. Gehen Sie zu [Abschnitt 3.5.1](#351-macos-daddriversetup) um die Treibereinstellungen zu konfigurieren.

> **NOTICE — macOS Sequoia (15) und neuer:** Apple hat das Zubehör für Thunderbolt erheblich gestrafft, angefangen mit macOS Sequoia. Zusätzliche Schritte sind erforderlich. Siehe [Abschnitt 3.6 — macOS Sequoia: Zusätzliche Sicherheitskonfiguration](#36-macos-sequoia-additional-security-configuration) bevor Sie fortfahren.

### 3.4.2 Fenster

**Bevor Sie beginnen:** Stellen Sie sicher, dass Sie Windows 10 oder Windows 11 (64-bit) verwenden. Stellen Sie sicher, dass DADman v5.6.7.1 oder höher bereits installiert ist (siehe [Abschnitt 3.3.2](#332-windows)).

1. Suchen Sie den heruntergeladenen Thunderbolt 3 Treiber-Installer (`.msi` Format) und kopieren Sie ihn auf Ihren Desktop.
2. Doppelklicken Sie auf die `.msi` Datei, um den Installer zu starten.
3. Wenn eine Eingabeaufforderung zur Benutzerkontenkontrolle erscheint, klicke **Ja**.
4. Folgen Sie den Anweisungen auf dem Bildschirm. Klicke **Weiter**, dann **Installieren**.
5. Klicken Sie auf **Beenden** wenn die Installation abgeschlossen ist.
6. Verbinden Sie Ihre Thunder\|Core-Hardware mit dem Thunderbolt 3- oder USB-C-Port des Computers mit einem 20-Gbps-kompatiblen Kabel.

Der Treiber ist jetzt installiert. Gehen Sie zu [Abschnitt 3.5.2](#352-windows-asio-configuration) um den Treiber in Ihrer Audioanwendung zu konfigurieren.

---

## 3.5 Konfigurieren des Thunderbolt 3 Treibers

### 3.5.1 macOS — DADDriverSetup {#351-macos-daddriversetup}

Die Anwendung **DADDriverSetup** steuert die Kanalanzahl und Geräteauswahl für den Thunderbolt 3 Audio-Treiber auf macOS. Änderungen, die hier vorgenommen wurden, werden sofort in **Audio MIDI Setup** wiedergegeben und sind für jede Core Audio kompatible Anwendung auf dem Computer sichtbar.

> **NOTICE:** Die Abtastrate des Thunderbolt Audio-Treibers ist sowohl innerhalb von DADDriverSetup als auch direkt von DADman konfigurierbar. Im normalen Betrieb müssen Sie DADDriverSetup nicht öffnen, um die Abtastrate zu ändern.

\*\*Auf macOS ist der einzige Grund, DADDriverSetup zu öffnen, die Anzahl der Thunderbolt-Kanäle, die dem Host präsentiert werden, zu ändern. \* Alle anderen Parameter können innerhalb von DADman gesetzt werden.

> **NOTICE — Intel vs. Apple Silicon Macs:** Apple M1 und höher bearbeiten 256 bidirektionale Thunderbolt Kanäle ohne Schwierigkeiten. Auf Intel-basierten Macs die Leistung des Systems kann von einer Reduzierung der Kanalanzahl profitieren, wenn Ihr Workflow nicht die vollen 256 Kanäle benötigt – insbesondere bei höheren Abtastrate oder bei großer CPU-Auslastung.

**Um die Kanalanzahl zu ändern:**

1. Öffne **DADDriverSetup** aus deinem Programme-Ordner.
2. Stellen Sie sicher, dass Ihre Thunder\|Core-Hardware angeschlossen und eingeschaltet ist.
3. Konfigurieren Sie die folgenden Einstellungen:

| Parameter         | Optionen                                                                                                       | Notizen                                                                                                                                                                                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Geräteauswahl** | Dropdown-Liste der verbundenen Thunder\|Kerneinheiten                                                          | Wenn mehrere Einheiten auf dem Thunderbolt 3 Bus daisy-chained sind, kann jede Einheit individuell ausgewählt werden                                                                                                                                              |
| **Beispielrate**  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Auch konfigurierbar von DADman; Änderungen werden hier sofort im Core Audio wiedergegeben                                                                                                                                                                         |
| **Sender**        | 16, 64, 128, 256 (bidirektional)                                                            | Alle Thunder\|Core Schnittstellen unterstützen 256 bidirektionale Kanäle in Hardware. M1 und später bedienen Macs 256 Kanäle ohne Probleme. Auf Intel Macs senkt die Verringerung dieses Wertes den CPU-Overhead. |

> **HINWEIS:** Die Kanaleinstellung regelt, wie viele Kanäle für Core Audio und DAW sichtbar sind. Es hat keinen Einfluss auf die Anzahl der intern verfügbaren Kanäle innerhalb der DADman-Routing-Matrix.

4. Nach Änderungen Öffne **Audio MIDI Setup** (**Anwendungen > Utilities > Audio MIDI Setup**), um zu bestätigen, dass das DAD Thunder\|Core Interface im richtigen Format erscheint. Das angezeigte Format sollte mit der in DADDriverSetup konfigurierten Kanalanzahl und Abtastrate übereinstimmen.

> **TIPP:** Wenn sich DADDriverSetup öffnet und Ihre angeschlossene Thunder\|Core Einheit im Dropdown-Dropdown-Dropdown-Menü erscheint, wird der Thunderbolt-Treiber installiert und funktioniert. Dies ist der schnellste Weg, um den Treiberbetrieb auf macOS zu bestätigen, ohne eine DAW öffnen zu müssen.

### 3.5.2 Windows — ASIO Konfiguration {#352-windows-asio-configuration}

Der Thunderbolt 3 ASIO Treiber ist im ASIO Einstellungsdialog Ihrer Audioanwendung konfiguriert.

**Um den Treiber zu konfigurieren:**

1. Öffnen Sie Ihre DAW oder Audio-Anwendung.
2. Wählen Sie in den Audio-Geräte-Einstellungen **Digital Audio Dänemark** als ASIO-Treiber.
3. Öffnen Sie den ASIO Konfigurationsdialog. Konfiguriere die folgenden Parameter:

| Parameter         | Optionen                                                                                                       | Notizen                                                                                                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Geräteauswahl** | Dropdown-Liste der verbundenen Thunder\|Kerneinheiten                                                          | Wählen Sie die Einheit, die als primäres ASIO-Gerät verwendet werden soll                                                                                                                                                      |
| **Puffergröße**   | 16, 32, 64, 256, 512, 1024 Stichproben                                                                         | Beginnen Sie mit einem großen Wert (512 oder 1024), um einen stabilen Audio-Pfad zu sichern; reduzieren Sie, sobald das System stabil bestätigt wurde                                                       |
| **Beispielrate**  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Von Ihrer Audioanwendung kontrolliert; hier als Referenz aufgelistet                                                                                                                                                           |
| **Sender**        | 16, 64, 128 (bidirektional)                                                                 | Der Windows Thunderbolt ASIO Treiber unterstützt maximal 128 bidirektionale Kanäle. Reduziert den maximalen Wert, wenn nicht alle Kanäle benötigt werden, um die Systemleistung zu verbessern. |

> **TIPP:** Wenn sich der ASIO Konfigurationsdialog öffnet und Ihre Thunder\|Core Einheit im Dropdown-Dropdown-Dropdown-Menü angezeigt wird der Thunderbolt ASIO Treiber installiert und korrekt funktioniert. Dies ist der schnellste Weg, um die Treiberoperation unter Windows zu bestätigen, ohne dass die Audiowiedergabe gestartet werden muss.

**Treiberdiagnostik — nur Windows:**

Das ASIO Treiberkonfigurationsfenster enthält drei Echtzeit-Leistungsindikatoren. Überwachen Sie diese während des ersten Setups und wenn Sie Audioprobleme haben:

| Indikator                                                         | Akzeptierbarer Wert                                                             | Wenn außerhalb des Bereichs                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Verpasste IRs** (verpasste Audio-Interrupts) | 0                                                                               | Audiounterbrechungen werden durch konkurrierende Windows-Systemprozesse abgebrochen. Vergrößern Sie die Puffergröße oder reduzieren Sie die Hintergrund-CPU-Auslastung.                                                                                           |
| **PCIe Laden**                                                    | Niedrige Prozent; Waagen mit Kanalanzahl                                        | Hohe Werte zeigen, dass der PCIe-Bus gesättigt ist. Senken Sie die Kanalanzahl oder untersuchen Sie andere PCIe-Bandbreiten-Verbraucher.                                                                                                                          |
| **DPC-Latenz** (aufgeschobener Prozeduraufruf) | Niedrig (< ~500 μs) | Die Terminplanung für Windows OS Interrupts führt zu einer Latenz. Verwenden Sie ein DPC-Latenzanalysator um den Treiber zu identifizieren. Deaktiviere WLAN, USB Power Management oder andere Interrupt-generierende Treiber als ersten Schritt. |

> **HINWEIS:** Beginnen Sie mit einer großen Puffergröße (512 oder 1024 Muster) bei der ersten Konfiguration des ASIO-Treibers. Wenn das System nachgewiesen ist, dass es ohne verpasste Unterbrechungen läuft, können Sie die Puffergröße auf den niedrigsten stabilen Wert für Ihren Workflow reduzieren.

---

## 3.6 macOS Sequoia: Zusätzliche Sicherheitskonfiguration

> **Gilt auf:** macOS 15 (Sequoia) und alle nachfolgenden macOS Versionen  
> **Source:** DAD Technical Support Bulletin, Januar 2026

Ab MacOS Sequoia verschärfte Apple die Sicherheitskontrollen für Thunderbolt und USB-Zubehör. Diese Änderung betrifft alle Thunderbolt Schnittstellen aller Hersteller — sie ist nicht spezifisch für DAD Hardware oder Software.

Wenn Sie auf macOS Sequoia oder höher installieren, führen Sie die folgenden Schritte \*\*zusätzlich zur Standardtreiber-Installation in [Abschnitt 3.4.1](#341-macos).

### 3.6.1 Zubehörberechtigungen einstellen

1. Öffne **Systemeinstellungen** (Apple-Menü > Systemeinstellungen).
2. Navigieren Sie zu **Privatsphäre & Sicherheit**.
3. Scrollen Sie unten zum Abschnitt **Zubehörs** .
4. Legen Sie die Zubehör-Verbindungs-Berechtigung auf entweder:
   - **Erlaube automatisch neue Zubehörteile zum Verbinden** — empfohlen für Studio-Computer, die keine kontrollierte Umgebung verlassen
   - **Immer erlaubt** — maximale Erlaubnis; geeignet, wenn mehrere verschiedene Thunderbolt-Geräte angeschlossen werden
5. Wenn Sie aufgefordert werden, genehmigen Sie die Änderung mit Ihrem Passwort oder Touch ID.

### 3.6.2 Neuinstallation des Fahrers auf Sequoia

Wenn Sie eine zuvor installierte Version des Thunderbolt 3 Treibers haben und auf eine neue Version auf macOS Sequoia aktualisieren:

> **HINWEIS:** Apples Sicherheitsmodell erfordert das Entfernen des alten Treibers vor der Installation des neuen Treibers. Einfach den neuen Installer über die bestehende Installation laufen zu lassen, führt nicht zu einem ordnungsgemäß funktionierenden Treiber auf Sequoia.

1. Suchen Sie **DADDriverSetup.app** in Ihrem Anwendungsordner.
2. In den Papierkorb verschieben (**Rechtsklick > In den Papierkorb verschieben** oder in den Papierkorb ziehen).
3. macOS zeigt eine Warnung an, die angibt, dass die System-Erweiterung entfernt wird. Dies ist das erwartete und gewünschte Ergebnis — klicken Sie um die Entfernung zu bestätigen.
4. Lade den neuesten Thunderbolt 3 Treiber vom DAD Support Portal unter [https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com) herunter.
5. Installieren Sie den neuen Treiber nach der Prozedur in [Abschnitt 3.4.1](#341-macos).
6. Wenn der Installer fertig ist, wird macOS einen Dialog anzeigen, in dem Sie aufgefordert werden, die neue Thunderbolt-Verbindung zu genehmigen. Klicken Sie **Erlauben** (oder äquivalent) und erlauben Sie dem Computer einen Neustart.

Nach einem Neustart sollte sich Ihre Thunder\|Core-Hardware korrekt verbinden.

### 3.6.3 macOS Sequoia — Bekanntes Netzwerkverbindungsproblem

> **Affects:** Alle DADman Versionen auf macOS Sequoia; erwartet in einem zukünftigen DADman Update  
> **Version angemerkt:** Ab DADman v5.8.1.6

Unter macOS Sequoia kann es vorkommen, dass DADman sich beim ersten Start der Anwendung nicht mit Geräten im Netzwerk verbindet. Audiogeräte, die mit Thunderbolt 3 verbunden sind, sind von diesem Problem nicht betroffen.

**Problemumgehung:**

1. Starten Sie DADman und lassen Sie es laufen, auch wenn keine Geräte in der Geräteliste erscheinen.
2. Loggen Sie sich aus Ihrem MacOS-Benutzerkonto aus (**Apple Menü > Abmelden**).
3. Melden Sie sich wieder in Ihr MacOS-Benutzerkonto ein.
4. DADman wird sich nun erfolgreich mit Netzwerkgeräten verbinden.

> **HINWEIS:** Setze DADman automatisch beim Anmelden ein, macht es überflüssig, diese Problemumgehung manuell bei jedem Start auszuführen. Siehe [Kapitel 8 — Erweiterte Funktionen, Abschnitt 8.X — DADman beim Systemstart konfigurieren].

---

## 3.7 Konfiguration der Netzwerkverbindung

### 3.7.1 Netzwerkübersicht

DADman kommuniziert mit allen angeschlossenen Einheiten über Ethernet über das IP-Protokoll. Dazu gehören Einheiten, die sich auch über Thunderbolt 3 mit dem Computer verbinden — beide Verbindungswege sind gleichzeitig aktiv und dienen unterschiedlichen Zwecken (Thunderbolt transportiert Audio; Ethernet trägt Kontrolldaten).

DADman nutzt das Netzwerk Ihres Computers, um Hardware-Einheiten zu entdecken und zu kommunizieren. Die Einstellungen jeder Einheit werden auf der Einheit selbst gespeichert; DADman liest und schreibt diese über die Netzwerkverbindung. Wenn die Netzwerkverbindung verloren geht, verliert DADman die Kontrolle über das Gerät, aber Audio geht ununterbrochen durch das Gerät.

### 3.7.2 Stark empfohlen

> **NOTICE — Netzwerkisolierung:** Für einen zuverlässigen Betrieb empfiehlt DAD dringend die Verwendung eines **dedizierten Ethernet-Netzwerks** für die DADman-Steuerung getrennt von Ihrem allgemeinen Studio oder Einrichtungsnetzwerk. Die gemeinsame Nutzung des Kontrollnetzes mit Audio über IP-Verkehr (Dante, AES67), EuControl oder allgemeiner Büro/Internetverkehr birgt das Risiko von Audio- und Kontrollausgängen.

Empfohlene Netzwerk-Topologie für eine typische Studio-Installation:

| Netzwerk                     | Zweck                                                                                                | Computerverbindung                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Dediziertes Kontrollnetzwerk | DADman :links-rechts_pfeile: Hardware-Einheiten | Dedizierter Ethernet-Port / USB–Ethernet-Adapter |
| Studio/IP-Audio-Netzwerk     | Dante / AES67 Audio Transport                                                                        | Dedizierter Ethernet-Port                        |
| Office / Internet Netzwerk   | Allgemeine Computernutzung                                                                           | Wi-Fi- oder Dritter Ethernet-Port                |

Ein einfaches Zwei-Einheit-System (ein Computer + eine Hardware-Einheit) kann eine direkte Ethernet-Verbindung mit einem einzigen Kabel zwischen dem Ethernet-Port des Computers und dem Netzwerk-Port des Geräts verwenden – kein Schalter erforderlich, wenn beide im selben Subnetz konfiguriert sind.

### 3.7.3 Konfiguration der IP-Adresse

DADman entdeckt Einheiten nach IP-Adresse. Einheiten können je nach Netzwerkumgebung entweder mit einer statischen IP-Adresse oder einer DHCP-zugewiesenen Adresse konfiguriert werden.

**Für einfache dedizierte Netzwerksetups** (kein DHCP-Server im Kontrollnetzwerk), konfigurieren Sie statische IP-Adressen:

| Gerät                                       | Beispiel IP-Adresse                                          | Subnetzmaske                                                  |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Computer (Steuerung NIC) | 192.168.1.1  | 255.255.255.0 |
| Hardware-Einheit 1                          | 192.168.1.10 | 255.255.255.0 |
| Hardware-Einheit 2                          | 192.168.1.11 | 255.255.255.0 |

IP-Adressen werden auf der Hardware-Einheit mittels DADman, dem Frontpanel oder einer Web-Browserschnittstelle eingestellt, je nach Hardwaremodell. Weitere Informationen zur Einstellung der IP-Adresse finden Sie im Installationshandbuch für Ihre spezifische Hardware-Einheit.

> **HINWEIS:** Nach dem Ändern der IP-Adresse einer Hardware-Einheit müssen Sie die DADman-Geräteliste aktualisieren, um die neue Adresse wiederzugeben, bevor die Verbindung wieder hergestellt wird.

**Für Einrichtungsnetze mit einem DHCP-Server:** Einheiten können so konfiguriert werden, dass DHCP verwendet wird. Wenn sich jedoch DHCP-Leases ändern, verliert DADman den Überblick über die Einheiten an ihrer vorherigen Adresse. Die Zuweisung von DHCP-Reservierungen (feste MAC-zu-IP-Mappings) auf den Schalter oder Router wird empfohlen, um dies zu verhindern.

---

## 3.8 Überprüfung der Installation

Sobald DADman und (falls zutreffend) der Thunderbolt 3 Treiber installiert sind und das Netzwerk konfiguriert ist, führen Sie die folgenden Prüfungen durch, um zu bestätigen, dass die Installation korrekt ist, bevor Sie mit [Kapitel 6 — Erste Schritte beginnen] fortfahren.

### 3.8.1 DADman überprüfen

1. Starten Sie **DADman** aus Ihrem Programmordner (macOS) oder aus dem Startmenü (Windows).
2. Warten Sie bis zu 30 Sekunden, bis die Geräteentdeckung abgeschlossen ist.
3. Bestätigen Sie, dass Ihre Hardware-Einheit(en) in der **Geräte-Liste** oben im DADman Fenster erscheinen.
4. Bestätigen Sie, dass die aktuelle Firmware-Version der Einheit angezeigt wird und Ihren Erwartungen entspricht.

Wenn keine Geräte auftauchen, lesen Sie [Kapitel 9 — Fehlerbehebung, Abschnitt 9.2 — Netzwerk- und Verbindungsprobleme].

### 3.8.2 Überprüfung des Thunderbolt 3 Treibers (macOS)

1. Öffne **Audio MIDI Setup** (**Anwendungen > Utilities > Audio MIDI Setup**).
2. Bestätigen Sie, dass die **DAD Thunder\|Core** Schnittstelle in der Geräteliste auf der linken Seite erscheint.
3. Bestätigen Sie, dass das angezeigte Format (z.B. "256 ch, 48000 Hz") mit den in DADDriverSetup konfigurierten Einstellungen übereinstimmt.

Wenn die Schnittstelle nicht erscheint, bestätigen:

- Das Gerät wird über ein mit 20 Gbps bewertetes Thunderbolt-Kabel eingeschaltet und angeschlossen.
- Die System-Erweiterung wurde in **Privacy & Security** erlaubt (siehe [Abschnitt 3.4.1](#341-macos), Schritt 6).
- Wenn auf macOS Sequoia: die Berechtigung für Zubehör ist korrekt gesetzt (siehe [Abschnitt 3.6.1](#361-setting-accessory-permissions)).

### 3.8.3 Überprüfung des Thunderbolt 3-Treibers (Windows)

1. Öffnen Sie Ihre DAW oder Audio-Anwendung.
2. Bestätigen Sie in den Audio-Geräte-Einstellungen, dass **Digital Audio Dänemark** als ASIO-Treiber wählbar ist.
3. Öffnen Sie den ASIO-Konfigurationsdialog und bestätigen Sie, dass Ihr Gerät im Dropdown-Dropdown-Auswahlfeld angezeigt wird.
4. Bestätige, dass der **verpasste IRs** Zähler **0** nach ein paar Sekunden der Leerlaufoperation liest.

---

## Zusammenfassung der installierten Dateien

| Datei / Anwendung      | Plattform | Standort                          | Zweck                                                       |
| ---------------------- | --------- | --------------------------------- | ----------------------------------------------------------- |
| `DADman.app`           | macOS     | `/Anwendungen/`                   | Hauptsteuerungsanwendung                                    |
| `DADman.exe`           | Fenster   | `C:\Programme\DADman\`         | Hauptsteuerungsanwendung                                    |
| `DADDriverSetup.app`   | macOS     | `/Anwendungen/`                   | Thunderbolt 3 Treiberkonfiguration                          |
| DAD ASIO Treiber       | Fenster   | Über `.msi` installiert           | ASIO Audio-Treiber für DAW verwenden                        |
| DAD-System-Erweiterung | macOS     | System — nicht benutzerzugänglich | Kernel-Erweiterung aktiviert Thunderbolt 3 Core Audio Gerät |

---

## Querverweise

- **Kapitel 1 — Einleitung:** Architekturübersicht; wie DADman, der TB3-Treiber und das Netzwerk kommunizieren
- **Kapitel 2 — Systemvoraussetzungen:** Betriebssystemkompatibilität und minimale Hardware-Spezifikationen
- \*\*Kapitel 6 — Erste Schritte nach der Installation – Verbindung zu deinem Gerät und Signalüberprüfung
- **Kapitel 9 — Fehlerbehebung:** Diagnostische Schritte, wenn die Installation nicht erfolgreich abgeschlossen wird oder Geräte nicht gefunden werden
- **Kapitel 10 — Wartung:** Aktualisierung von DADman und Firmware

---

_[Placeholder: figures to inserted — Screenshots für TB3 Treiber-Installation (macOS and Windows), DADDriverSetup Konfigurationsfenster, Audio MIDI Setup zeigt die DAD Schnittstelle, MacOS Datenschutz & Sicherheit / Zubehör Bildschirm, Windows ASIO Dialog]_

_[Ausstehend vom DAD-Engineering: Vollständige Firmware-Update-Prozedur Querverweise, bestätigte IP-Adressanweisungen pro Hardware-Modell]_
