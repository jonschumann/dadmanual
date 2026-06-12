---
id: ch08-erweiterte Funktionen
title: "Kapitel 8 — Erweiterte Funktionen"
sidebar_label: "Ch. 8 — Erweiterte Funktionen"
sidebar_position: 10
slug: /fortgeschrittene Funktionen
---

# Kapitel 8 — Erweiterte Funktionen

> **Dokument:** DADman User Manual  
> **Software Version umfasst:** DADman v5.8. Build 2  
> **Primäre Beispiel-Hardware:** DAD AX Center  
> **Kapitel Status:** Entwurf v0. — Abschnitt 8.1–8. 5 entworfen; PRO\|MON und Cue\|Mix ausstehender DAD-Engineering-Dokumentation; SPQ- und MIDI-Parametertabellen ausstehend; Screenshots ausstehend  
> **Letztes aktualisiert:** Juni 2026

---

## In diesem Kapitel

| Abschnitt            | Feature                                                           | Version erforderlich                                    |
| -------------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| 8.1  | Profile überwachen — Konfiguration und Verwaltung                 | Alle Versionen                                          |
| 8.2  | Mic Gain Gruppen                                                  | v5.8.1 und später       |
| 8.3  | Kloneinstellungen zwischen den Einheiten                          | v5.6.9 und später       |
| 8.4  | Control\|Pack — Routing Voreinstellungen                          | v5.8.0 und später       |
| 8.5  | EuCon Integration                                                 | Alle Versionen                                          |
| 8.6  | DADLink                                                           | v5.6.9 und später       |
| 8.7  | DADman wird in der Menüleiste oder in der Systemleiste ausgeführt | v5.7.0 und später       |
| 8.8  | Dateiverwaltung und Kommandozeilenzugriff                         | v5.7.0 und später       |
| 8.9  | DADman Einstellungen Referenz                                     | Alle Versionen                                          |
| 8.10 | Dante virtuelle Soundkarte als Monitorquelle                      | Alle Versionen                                          |
| 8.11 | Konfiguration der Analogausgabe                                   | Alle Versionen                                          |
| 8.12 | SPQ-Lautsprecher Prozesskarte                                     | Alle Versionen (erfordert SPQ-Karte) |
| 8.13 | Dolby Atmos Monitoring Workflow                                   | Alle Versionen                                          |
| 8.14 | LTC über Dante                                                    | Alle Versionen                                          |
| 8.15 | MIDI Control und Pro Tools PRE Emulation                          | Alle Versionen                                          |
| —                    | PRO\|MON-Monitor-System                                           | _(ausstehende Dokumentation)_        |
| —                    | Cue\|Mix Null-Latenz-Mixer                                        | _(ausstehende Dokumentation)_        |

---

## 8.1 Monitor-Profile — Konfiguration und Management

### 8.1.1 Konzept

Ein **Monitorprofil** (Dateiendung `. mprof`) definiert die komplette Monitor-Controller-Konfiguration für eine DADman-gesteuerte Hardware-Einheit: Welche Quellen können überwacht werden, welche Lautsprecherausgabesätze verfügbar sind, wie Klapp- und Up-Matches behandelt werden, Verzögerungseinstellungen, Talkback-Routing und externe Dosierausgänge.

Ein Monitorprofil ist völlig getrennt von der Einstellungsdatei (`.dms`). Die gleiche physikalische Routing- und Gain-Konfiguration kann mit mehreren unterschiedlichen Monitoring-Setups verwendet werden, indem verschiedene Profile geladen werden, ohne dass andere Einheitseinstellungen geändert werden.

> **HINWEIS:** Monitorprofile werden auf dem Computer gespeichert, nicht in der Hardware-Einheit. Sie müssen jedes Mal, wenn die Anwendung gestartet wird, in DADman geladen werden (es sei denn, **Letzte Datei beim Start öffnen** ist für Profile aktiviert). Wird DADman geschlossen oder wird der Computer heruntergefahren, wird der Monitorcontroller weiterhin im letzten an die Einheit gesendeten Zustand betrieben. aber es ist keine weitere Monitorsteuerung möglich, bis DADman mit dem Profil geladen ist.

### 8.1.2 Öffnen des Monitorprofil-Editors

Öffnen Sie den Monitor Profile Editor über **Einstellungen > Monitor Profil** (macOS: **<unk> <unk> M** / Windows: **Strg+Umschalt+M**).

Der Editor hat fünf Tabs: **Quellen**, **Outputs**, **Fold Downs**, **Delay** und **MOM**.

### 8.1.3 Quellen konfigurieren

Eine Quelle ist jeder Signalpfad, den die Operatoren zur Überwachung auswählen können. Typische Quellen sind die Stereoausgabe eines DAW, ein Dante-Stream, eine Gastquelle oder ein Confidence Feed.

**Um eine Quelle hinzuzufügen:**

1. Im Tab **Quellen** klicken Sie mit der rechten Maustaste und wählen **Neue Quelle hinzufügen**.
2. Doppelklicken Sie auf den Quellnamen, um ihn umzubenennen (z.B. `Pro Tools`, `Gast`, `Dante Player`).
3. Klicken Sie mit der rechten Maustaste unter **Modus** und wählen Sie **Gruppen-Format** — wählen Sie die Kanalanzahl und -format (Mono, Stereo, 5.1, 7.1.4, etc.).
4. Klicken Sie für jeden Kanal in der Quelle mit der rechten Maustaste auf das Kanalzuweisungsfeld und wählen Sie den entsprechenden Eingang aus der Routing-Matrix. Verwenden Sie Dante, MADI, AES3 oder analoge Eingänge, die auf der angeschlossenen Hardware verfügbar sind.

_[Platzhalter: Screenshot — Quellen-Tab mit zwei konfigurierten Quellen (Pro Tools stereo, Dante 7.1)]_

### 8.1.4 Konfiguriere Ausgabesätze

Eine **Ausgabeeinstellung** definiert eine Gruppe von physikalischen Ausgabekanälen, die als Lautsprecherkonfiguration verwendet werden. Mehrere Ausgabesätze können mit verschiedenen physikalischen Ausgängen definiert werden (z.B. Near-Field Stereo vs. Surround), oder die gleichen physikalischen Ausgänge mit unterschiedlichen Trimpegeln (z.B. 85 dB SPL vs. 75 dB SPL Referenzniveau).

**Um eine Ausgabemenge hinzuzufügen:**

1. Im Tab **Ausgabe** klicken Sie mit der rechten Maustaste und wählen **Neue Ausgabe hinzufügen** aus.
2. Benennen Sie die Ausgabemenge (z.B. `Near Field`, `5.1 Surround`, `85 dB SPL`).
3. Weisen Sie ein **Gruppenformat** zu, das mit der Lautsprecherkonfiguration übereinstimmt.
4. Weisen Sie jedem Kanal eine physikalische Analogausgabe auf der Hardware zu.
5. Legen Sie einen **Trim** Wert fest, wenn diese Ausgabe einen festen Level Offset benötigt (nützlich für mehrere Referenz Level Voreinstellungen).

> **HINWEIS:** Sobald Ausgabekanäle einer Routing Voreinstellung in Control\|Pack zugewiesen sind, sie sind gesperrt und können nicht über die DADman Routing-Matrix oder das Monitorprofil angeschlossen werden. Siehe [Abschnitt 8.4 — Kontrolle\|Paket].

_[Placeholder: screenshot — Reiter mit Stereo und 5.1 Ausgabesätze]_

### 8.1.5 Referenzstufen und mehrere SPL-Presets

Die Referenzstufenfunktion verriegelt die Monitorausgabe ohne versehentliches Anpassungsrisiko auf eine kalibrierte SPL.

**Um ein Referenzlevel zu konfigurieren:**

1. Mit Hilfe von Testtönen und einem kalibrierten SPL-Meter setzen Sie den Mon Tab Hauptpegelfader auf den gewünschten Monitor-SSPL.
2. In \*\*Einstellungen > Monitorprofil \*\* öffnen Sie die entsprechende Ausgabe.
3. Geben Sie die kalibrierte Ebene als **Referenzstufe** für diese Ausgabe ein.
4. Drücke **Ref** in der Mond-Registerkarte während der Sitzungen, um sofort zu diesem Level zurückzukehren.

**Um mehrere Referenz-Level-Presets bei den gleichen physikalischen Ausgängen zu erstellen:**

Definieren Sie zwei Ausgabemengen, die auf die gleichen physikalischen Ausgänge verweisen, aber mit unterschiedlichen Trimwerten. Zum Beispiel:

| Ausgabesatz Name | Outputs | Trimmen | Kalibrierte SPL |
| ---------------- | ------- | ------- | --------------- |
| In Feld 85 dB    | DA 1–2  | 0 dB    | 85 dB SPL       |
| In Feld 75 dB    | DA 1–2  | −10 dB  | 75 dB SPL       |

Beide Ausgabesätze erscheinen als wählbare Lautsprecheroptionen im Reiter Mon. Der Wechsel zwischen ihnen ermöglicht sofortiges SPL-Schalten ohne Berührung der physikalischen Verstärkungssteuerung.

### 8.1.6 Fold-Downs und Up-Matching

Auf der Registerkarte **Fold Downs** werden Matrizen definiert, die zwischen Lautsprecherformaten konvertieren — zum Beispiel eine 7 falten. für eine Kompatibilitätsprüfung bis hin zu Stereo mischen oder eine Stereo-Quelle auf ein benutzerdefiniertes Lautsprecherlayout abstimmen.

**Standardklappen:** DADman enthält Standardklappmatrizen (z.B. 5.1 bis Stereo). Wählen Sie das Eingabe- und Ausgabeformat und DADman erzeugt die entsprechenden Mischkoeffizienten.

**Benutzerdefinierte Matrizen (Upmatch oder selektives Routen):** Rechtsklicke auf einen vorhandenen Dropdown-Eintrag und wähle **Neue Matrix hinzufügen**. Sie können das Eingabe- und Ausgabeformat auf den gleichen Wert setzen – effektiv eine benutzerdefinierte Routingvorgabe innerhalb des Monitorpfades erstellen. Diese Technik ermöglicht kreative Abklapp-Anwendungen:

_Beispiel — Lautsprecher-Subset-Auswahl:_ Definiere eine `Tops Only` Matrix unter 7.1.4 → 7.1.4. Im Matrix-Editor werden nur die vier Overhead-Kanäle (Lt1, Rt1, Ltm, Rtm) zu den entsprechenden Ausgängen weitergeleitet. Wenn Sie diese Option auf der Registerkarte Mon auswählen, werden die Deckenlautsprecher eingestellt, ohne den Hauptmix zu ändern.

_Beispiel — Bass-Management:_ Definiere benutzerdefinierte Klapp-Down-Matrizen, die niederfrequente Inhalte mit entsprechenden Rolloff-Koeffizienten an eine Sub-Ausgabe weiterleiten, auch wenn das Quellformat keinen LFE-Kanal enthält.

### 8.1.7 Talkback-Konfiguration

Talkback leitet bei Aktivierung ein Mikrofon oder eine andere Quelle in die Kopfhörer-Feeds des Talents. Konfigurieren Sie Talkback in **Einstellungen > Monitorprofil > Ausgänge**.

**Talkback-Modus** _(v5.7.0 und höher):_

| Modus                 | Verhalten                                                                                                                                         | Wann verwenden                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Umschalten/Latsch** | Erstes Drücken aktiviert Talkback; zweites Drücken deaktiviert. Längere Schalter zwischen Latschzuständen halten. | Studioumgebungen, in denen der Ingenieur Freisprechgespräche braucht    |
| **RAW**               | Talkback ist nur aktiv, wenn der Knopf gehalten wird; löst ab, wenn der Knopf freigegeben wird.                                   | Broadcast-Umgebungen, in denen versehentliches Verlatschen störend wäre |

> **HINWEIS:** Der RAW-Modus gilt für MOM Hardware-Steuerung und MTRX Studio Frontpanel Talkback-Knopf. EuCon Control Oberflächen verwenden unabhängig von dieser Einstellung immer den Umschalt-/Latch-Modus.

### 8.1.8 Kontrollraum für Kopfhörer

Standardmäßig ist der Kopfhörerausgang ein separater **Cue** Mix, unabhängig von der Auswahl des Kontrollraums. Um die Kopfhörerausgabe automatisch verfolgen zu lassen, welche Quelle für die Hauptsteuerungsraum-Lautsprecher ausgewählt wurde:

1. In **Einstellungen > Monitorprofil > Ausgänge**, setzten Sie den Kopfhörerausgang **Monitormodus** auf **Master**.
2. Setze den Ausgang des Kontrollraumes im **Monitormodus** auf **Cue**.

**Resultat:** Die Kopfhörerausgabe wird nun der Auswahl des Monitor-Feed zugewiesen — welche Quelle auch immer für die Steuerraumlautsprecher aktiv ist, die gleiche Quelle spielt durch die Kopfhörer. Quellenauswahl, falt-down und dim/cut folgen alle dem Kontrollraum.

> **HINWEIS — Limitation:** Wenn DADman nicht läuft, fällt die Hardware-Einheit zurück in den Standard-Betriebsmodus. In diesem Fallback überträgt das Cue Group Routing nicht den Standardzustand der Hardware so dass das Kopfhörer nicht dem Kontrollraum folgen kann, wenn DADman offline ist. Konfigurieren Sie DADman als Workaround, um bei der Anmeldung automatisch zu starten. Siehe [Abschnitt 8.7 — DADman in der Menüleiste oder in der Systemleiste ausführen].

### 8.1.9 Speicherung und Laden von Monitorprofilen

| Aktion                                                                | macOS                                | Fenster                              |
| --------------------------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| Profil öffnen                                                         | A                                    | Strg+Alt+O                           |
| Profil importieren (von jeder kompatiblen Einheit) | I                                    | Strg+Alt+I                           |
| Profil speichern                                                      | G Nr                                 | Strg+Alt+S                           |
| Profil speichern als…                                                 | Neu                                  | Strg+Alt+Umschalt+S                  |
| Profil schließen                                                      | MW                                   | Strg+Alt+W                           |
| Letztes Profil öffnen                                                 | Hauptmenü → **Kürzes Profil öffnen** | Hauptmenü → **Kürzes Profil öffnen** |

**Profil importieren:** Die **Datei > Profil importieren…** Funktion importiert ein Monitorprofil von allen kompatiblen verbundenen Einheiten und führt eine bestpassende Zuordnung zu den verfügbaren I/O der aktuellen Hardware durch. Dies ist nützlich, wenn ein Profil zwischen Einheiten mit unterschiedlichen I/O-Konfigurationen migriert wird.

---

## 8.2 Mic Gain Gruppen _(v5.8.1 Build 6 und höher)_

### 8.2.1 Konzept

Mic Gain Groups erlauben die Verknüpfung mehrerer analoger Eingangskanäle, so dass die Anpassung des Verstärkers oder der Stummschaltung auf einem Kanal alle Kanäle der Gruppe gleichzeitig verschiebt bei gleichzeitiger Beibehaltung des relativen Gewinnausgleichs zwischen Kanälen. Dies ist für mehrmalige Setups konzipiert – Trommeln, Orchesterensembles, Chor, oder Ortungs-Aufzeichnungsarrays — bei denen konsistente Relationsbeziehungen zwischen Kanälen über Anpassungen hinweg beibehalten werden müssen.

Mic Gain Groups werden auf allen Hardware **außer MTRX Studio** unterstützt. Ein Firmware-Update wird benötigt (Familie 1: v2.4.5.1 oder höher; Thunder\|Core: v1.1.1 oder höher).

**Gruppierte Parameter:** Bekomme und stumm.  
**Nicht gegliedert:** Phantomleistung (+48 V) und Phasenumkehr (Ø). Diese werden auch bei Gruppenkanälen individuell gesteuert.

### 8.2.2 Gruppen erstellen und verwalten

**Um einen Kanal zu einer Gruppe hinzuzufügen:**

1. Im Tab **AD** klicke mit der rechten Maustaste auf die Steuerung eines Kanals (oder benutze das Kontextmenü des Kanals).
2. Wähle **Zur Gewinngruppe hinzufügen** und wähle eine Gruppennummer (Gruppen sind nummeriert; du kannst mehrere unabhängige Gruppen erstellen).
3. Wiederholen für jeden Kanal in der Gruppe.

**Um einen Kanal aus einer Gruppe zu entfernen:**

Klicken Sie mit der rechten Maustaste auf die Gain Steuerung und wählen Sie **Entfernen aus Gewinngruppe**.

### 8.2.3 Gruppenverhalten

Wenn mehrere Kanäle eine Gruppe teilen:

- Beim Verschieben des Gain-Schiebereglers auf jedem gruppierten Kanal werden **alle Kanäle in der Gruppe** um den gleichen Schritt bewegt. Der relative Offset zwischen den Kanälen wird beibehalten.
- Das Mutieren eines gruppierten Kanals stumm alle Kanäle in der Gruppe.

**Individuelle Kanalüberschreibung — Alt/Option Modifikator:**

Halte **Alt** (Windows) oder **Option** (macOS) gedrückt, während du den Gewinn eines Kanals einstellt oder stumm agierst, um die Gruppe zu umgehen:

| Aktion                                                            | Mit Alt/Option                               |
| ----------------------------------------------------------------- | -------------------------------------------- |
| Maustaste auf Gain Slider ziehen                                  | Nur ausgewählten Kanal anpassen              |
| <unk> /<unk> Tastatur (Gain Slider ausgewählt) | Nur ausgewählten Kanal anpassen              |
| Klicken Sie auf Gain Value Feld unter Slider                      | Nur ausgewählten Kanal anpassen              |
| Click Mute                                                        | Nur für den ausgewählten Kanal Mutes/Unmutes |

### 8.2.4 EuCon Verhalten

Bei der Steuerung gruppierter Kanäle über eine Avid EuControl Oberfläche:

- Gewinnen Sie Schieberegler und Regler auf EuCon Oberflächen beeinflussen die Gruppe (alle Kanäle bewegen sich zusammen).
- Die Stummschaltung einer EuCon-Oberfläche beeinflusst alle gruppierten Kanäle gleichzeitig.

> **HINWEIS:** Alt/Option pro Kanal ist nur per Maus/Tastatur im DADman verfügbar — es kann nicht von einer EuCon Oberfläche ausgelöst werden.

---

## 8.3 Kloneinstellungen zwischen Einheiten _(v5.6.9 und neuer)_

### 8.3.1 Konzept

Die **Klone** Funktion kopiert alle Einstellungen von einer Hardware-Einheit auf eine andere innerhalb derselben Hardware-Familie. Es ist nützlich, eine bekannte Konfiguration zu einer zweiten identischen Einheit zu duplizieren Wiederherstellen der Einstellungen zu einer Ersatzeinheit oder Initialisierung einer neuen Einheit aus einem bestehenden Profil.

Klonen ist nur zwischen Einheiten innerhalb derselben Familiengruppe erlaubt:

| Familie   | Mitglieder                                              |
| --------- | ------------------------------------------------------- |
| Familie 1 | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s |
| Familie 2 | MTRX II · AX64 · AX Center · Core 256                   |
| Familie 3 | MTRX Studio                                             |

### 8.3.2 Prozedur klonen

**Um von einer verbundenen Einheit zu einer anderen zu klonen:**

1. Klicken Sie in der Geräteliste mit der rechten Maustaste auf die **Ziel** Einheit (die die Einstellungen erhält).
2. Wähle **Klon aus…** und wähle die Quelleinheit aus der Liste.
3. Bestätigen Sie die Klon-Operation.

**Um von einer gespeicherten Einstellungsdatei zu einer verbundenen Einheit:**

1. Öffne die `.dms` Einstellungsdatei über **Datei > Öffnen…**.
2. Rechtsklick auf die Zieleinheit in der Geräteliste.
3. Wähle **Klonen aus Datei** und wähle die entsprechende Quelleinheit innerhalb der geladenen Einstellungsdatei.

> **KAUTION:** Klonen überschreibt alle Einstellungen der Zieleinheit. Stellen Sie sicher, dass die Einstellungen der Zieleinheit in einer `.dms`-Datei gespeichert wurden, bevor Sie fortfahren, falls eine Wiederherstellung erforderlich ist.

### 8.3.3 Nicht-Identische Einheit Verhalten

Für beste Ergebnisse, Quell- und Zieleinheiten sollten identisch konfiguriert werden — die gleichen Karten, die in den gleichen Slotpositionen installiert sind. Wenn Konfigurationen abweichen:

- Einstellungen für in der Quelle enthaltene Karten, die nicht in der **gleichen Slot-Position** des Ziels vorhanden sind, werden auf Werkseinstellungen am Ziel gesetzt.
- Einstellungen für im Ziel vorhandene Karten werden nicht verändert.

---

## 8.4 Control|Paket — Routing Voreinstellungen _(v5.8.0 Build 8 und höher)_

### 8.4.1 Konzept

Control\|Pack bietet ein Routing-Preset-System für Thunder\|Core Produkte (AX64, AX Center, Core 256). Bis zu 32 Routing-Voreinstellungen können pro Einheit definiert werden jeder mit bis zu vier unabhängigen Eingangsschichten – **Buckets** genannt – die innerhalb eines Audiosamples auf 256 Quellen gleichzeitig auf 256 Ziele umstellen.

Wechseln zwischen Eimern kann sein:

- **Manual** — ausgelöst durch den Operator aus dem Control\|Pack-Streifen in DADman
- **Automatisiert** — ausgelöst durch integrierte Signaldetektoren zur Überwachung von Eingangskanälen für Signalpräsenz, AE6-Pilot-Tonintegrität oder Anschlussverbindung auf Port-Level

Control\|Pack-Voreinstellungen werden in der Thunder\|Core Hardware-Einheit gespeichert. Sie können von mehreren DADman-Instanzen gleichzeitig und von einer dedizierten Control\|Pack-Hardware ohne DADman-Verbindung gesteuert werden.

**Firmware benötigt:** Thunder\|Core Firmware v1.1.0.3 oder höher.

### 8.4.2 Schlüsselspezifikationen

| Parameter                                                        | Wert                                        |
| ---------------------------------------------------------------- | ------------------------------------------- |
| Maximale Voreinstellungen pro Einheit                            | 32                                          |
| Maximale Gruppen (Eingabe-Ebenen) pro Vorlage | 4                                           |
| Maximale Quellen pro Gruppe                                      | 256                                         |
| Maximale Ausgänge pro Voreinstellung                             | 256                                         |
| Wechselzeit (Bucket-Schalter, automatisiert)  | Innerhalb eines Audio-Beispiels             |
| Wechselzeit (manuelle, direkte Auswahl)       | 0 Audiosamples                              |
| Signalerkennung / Trigger Antwortzeit                            | < 1 ms             |
| Signalgeneratoren (eingebaut)                 | Sine Wave Pilotton · AE6 digitale Pilottöne |

### 8.4.3 Signalgeneratoren

Jeder Thunder\|Core Einheit enthält zwei integrierte Signalgeneratoren:

| Generator                | Typ                                                             | Parameter                                                                         |
| ------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Sine Wellen Pilotton** | Kontinuierliche Sinuswelle                                      | Stufe: −60 bis 0 dBFS; Frequenz: 20 Hz bis 20 kHz |
| **AE6 Digitalpilotton**  | Binäres wiederholtes Signal (Hex-Wert 0xAE6) | Festes Muster                                                                     |

Signalgeneratoren können über die Routingmatrix zu jedem Ausgang der Einheit geleitet werden. Das AE6-Signal ist für Integritätsprüfung konzipiert – es kann auf dem Empfangsende erkannt werden, um zu bestätigen, dass die Signalkette unverarbeitet und unverändert ist. Wenn das AE6-Signal über einen Abtastratkonverter, eine analoge Phase oder eine Pegeländerung geht, wird sein Muster verändert und es kann nicht erkannt werden.

### 8.4.4 Triggertypen

Jeder Gruppe kann bis zu vier Triggerquellen zugewiesen werden. Drei Triggertypen sind verfügbar:

| Auslöse-Typ     | Erkennt                                                            | Notizen                                                                                                                           |
| --------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Signallevel** | Audiosignalvorkommen über −40 dBFS innerhalb eines 1ms Fensters    | Funktioniert mit allen analogen oder digitalen Eingängen                                                                          |
| **AE6**         | Integrität des AE6 digitalen Pilottöns auf einem digitalen Eingang | Das Signal muss nicht verarbeitet werden (kein SRC, keine Änderung des Niveaus) für die erfolgreiche Erkennung |
| **Port**        | Status der physischen Port-Verbindung                              | Thunderbolt 3, MADI, DADLink, ADAT oder AES3-Ports                                                                                |

### 8.4.5 Routing Presets konfigurieren

Öffnen Sie den Editor Routing Preset über **Einstellungen > Routing Presets**.

Die Konfiguration folgt vier Schritte:

**Schritt 1: Wähle die Zieleinheiten**

Wählen Sie im Dropdown-Menü oben im Fenster Routing Preset die zu konfigurierende Einheit Thunder\|Core. Wenn die Einheit nicht verbunden ist, klicken Sie auf **Öffne Geräteliste** um sie zuerst zu verbinden.

**Schritt 2: Füge eine Routing Voreinstellung hinzu**

Klicken Sie mit der rechten Maustaste in die Voreinstellung und wählen Sie **Voreinstellung hinzufügen**. Geben Sie einen Namen und die Anzahl der Ausgabekanäle für das Preset ein. Aktivieren Sie die Voreinstellung durch Aktivieren der Checkbox. Presets können in der Liste _(v5.8.1 und höher)_ neu sortiert werden.

**Schritt 3: Gruppen und Trigger konfigurieren**

Für jede Gruppe in der Voreinstellung:

1. Klicken Sie mit der rechten Maustaste auf das Feld **Source Set Name** und geben Sie einen Namen für den Bucket ein (z.B. `Pro Tools`, `Backup DAW`, `Test Generator`).
2. Lege die **Trigger-Priorität** für die Gruppe fest. Buckets mit höherer Priorität werden bevorzugt, wenn ihre Detektoren ein gültiges Signal melden. Wenn alle Gruppen die gleiche Priorität haben, ist das Umschalten nur manuell.
3. Wähle bis zu vier **Trigger-Quellen** aus den verfügbaren Eingängen. Triggertypen kombinieren (Signal Level + AE6) für robuste Failover Erkennung.

**Automatisierte Umschalt-Logik:**

- Die Gruppe mit der **höchsten Priorität** bei der alle zugewiesenen Detektoren OK melden, wird an die Ausgaben geleitet.
- Wenn die Detektoren des aktiven Buckets einen Fehler melden, schaltet das System mit allen Detektoren in den nächsten Bucket mit höchster Priorität.
- Manuelle Überschreibung ist immer möglich — Doppelklicken Sie auf eine Eimer-Schaltfläche, um sie unabhängig vom Detektorstatus zu erzwingen.

**Schritt 4: Ein- und Ausgabekanäle zuweisen**

Klicken Sie mit der rechten Maustaste auf die Spalte Ausgabekanal, um Ausgabekanäle aus den verfügbaren Ausgabekanälen des Geräts auszuwählen. Klicken Sie mit der rechten Maustaste auf jede Eingabespalte (Bucket) um Quellkanäle zuzuweisen. Sobald Ausgänge einer Voreinstellung zugewiesen sind sie sind **gesperrt** — sie können nicht über die DADman-Routing-Matrix verbunden werden oder das Profil überwachen, während die Voreinstellung aktiv ist.

_[Placeholder: screenshot — Routing Preset-Editor zeigt eine Voreinstellung mit zwei Gruppen mit konfigurierten Trigger-Quellen]_

### 8.4.6 Operation

Einmal konfiguriert, erscheint der Control\|Pack-Streifen unterhalb der DADman-Kanalstreifen. Jede Voreinstellung wird mit Bucket Buttons, Quell-PPM-Metern, PPM-Zählern und Trigger-Statusindikatoren angezeigt.

**Bucket Button Farbstates:**

| Farbe    | Bedeutung                                                                                     |
| -------- | --------------------------------------------------------------------------------------------- |
| **Blue** | Diese Gruppe ist aktiv — manueller Modus (kein automatisiertes Umschalten) |
| **Grün** | Diese Gruppe ist aktiv – automatisierter Modus, bewaffnet und bereit zum Wechseln             |
| **Rot**  | Signal-Detektor-Fehler in diesem Bucket — Signalverlust oder AE6-Fehler erkannt               |

**Wechsel zwischen manuellem und automatisiertem Modus:**

- **Doppelklicke auf eine grüne Schaltfläche** → wechselt zur Anleitung (Schaltfläche wird blau)
- **Doppelklick auf eine blaue Schaltfläche** → Automatisierung neu ausrüsten (Button wird grün)

**Trigger Status Indikatoren** unter jedem Bucket-Button zeigen den Status eines jeden zugewiesenen Detektors (0–4 Indikatoren pro Bucket).

_[Placeholder: screenshot — Control\|Pack-Streifen zeigt zwei Presets, eine automatisierte (grün), ein Handbuch (blau)]_

> **TIPP:** Bei Live-Events oder Broadcasts ist die Automatisierung des Arms (**grün**) während der Zeilenüberprüfung, wenn das Signal an allen Eingängen bestätigt wird. Wenn während der Show ein Eingabewert fehlschlägt, schaltet die Voreinstellung automatisch ohne Eingriff des Bedieners. Ein Doppelklick auf den bevorzugten Eimer zwingt ihn jederzeit unabhängig vom Automatisierungszustand.

---

## 8.5 EuCon Integration

### 8.5.1 EuCon aktivieren

DADman kommuniziert mit Avid EuControl über das EuCon Protokoll und ermöglicht Avid Steueroberflächen (S1, S6, S6L, MTRX Studio Frontpanel) und die Avid Control App zur Steuerung der Überwachungsfunktionen von DADman.

**Um EuCon zu aktivieren:**

1. Gehen Sie in DADman zu **Einstellungen > EuCon** aktivieren.
2. Stellen Sie sicher, dass EuControl auf demselben Computer läuft und mit der Steueroberfläche oder App verbunden ist.

### 8.5.2 Binding DADman Monitoring an EuControl

Damit Überwachungskontrollen auf einer Avid-Kontrollfläche oder der Avid-Control-App angezeigt werden können, muss DADman an EuControl gebunden:

1. Bringen Sie DADman in den Vordergrund (klicken Sie auf das DADman Fenster, um es zur aktiven Anwendung zu machen).
2. Öffne in der EuControl den **Zuweisen** Tab.
3. Aktivieren Sie das Kontroll-Kontrollkästchen für DADman (es wird angezeigt, weil DADman im Vordergrund steht).

> **TIPP:** Wenn die Überwachungsseite von Avid Control nur einen Masterfader und keine anderen Steuerelemente anzeigt, ist der Bindeschritt noch nicht abgeschlossen. Bringen Sie DADman in den Vordergrund und wiederholen Sie die Tab-Prozedur zuweisen.

### 8.5.3 Sperrüberwachung für DADman

Sobald die Überwachung an DADman gebunden ist Sie können den Überwachungsbereich sperren, so dass er unter der Kontrolle von DADman bleibt, unabhängig davon, welche Anwendung derzeit im Vordergrund steht:

1. Im Tab **Zuweisen** der EuControl mit dem Kontrollbereich an DADman gebunden, klicken Sie auf **Lock** (oder das Äquivalent für Ihr Oberflächenmodell).
2. Wechseln Sie zu Ihrer DAW-Anwendung. Der Kontrollbereich an der Oberfläche steuert weiterhin DADman.

Dies ermöglicht es den Transport- und Kanalsteuerungen, dem DAW zu folgen, während der Überwachungsbereich permanent DADman zugewiesen bleibt – dem Standard-Workflow für Postproduktions- und Musik-Tracking-Umgebungen.

### 8.5.4 EuCon und Mic Gain Gruppen

Wenn Mic Gain Gruppen konfiguriert sind:

- Erhalten Sie Schieberegler und Gain Regler auf EuCon Oberflächen bewegen alle gruppierten Kanäle zusammen.
- Stumm von einer EuCon Oberfläche stumm alle gruppierten Kanäle.
- Per-channel override via Alt/Option ist nicht auf EuCon Oberflächen verfügbar.

### 8.5.5 Erweitern der Talkback-Taste auf einem Touchscreen

Wenn die Talkback-Taste auf dem Touchscreen der Avid Control App zu klein ist verwenden Sie die **Soft Keys** Seite und weisen der Talkback-Funktion mehrere Soft-Taste zu. Mehrere angrenzende Tasten sorgen für ein effektiveres Touch-Ziel.

---

## 8.6 DADLink _(v5.6.9 und höher)_

### 8.6.1 Konzept

DADLink ist ein von DAD entwickeltes proprietäres Hochkanalverbindungsformat mit hoher Kanalanzahl. Es verwendet den Mini-MADI-Modulslot auf kompatiblen Geräten mit optischen SFP-Modulen, um Audio zwischen Einheiten mit sehr geringer Latenz zu transportieren.

DADLink wurde entwickelt, um mehrere DAD-Einheiten direkt zu verbinden — zum Beispiel die Verknüpfung eines AX Centers mit einem AX64 zur Erweiterung der Kanalanzahl oder zur Anbindung von Einheiten an verschiedenen physikalischen Orten innerhalb einer Anlage.

**Kompatible Hardware:** AX64 · AX Center · Core 256 · AX32 · DX32R · Penta 720 · Penta 721s _(von Firmware v2.4.1.2 für Familie 1)_

### 8.6.2 Kanalkapazität

| Abtastrate                      | Kanäle pro DADLink-Verbindung |
| ------------------------------- | ----------------------------- |
| 44.1 / 48 kHz   | Bis zu 128 Kanäle             |
| 88.2 / 96 kHz   | Bis zu 64 Kanäle              |
| 176.4 / 192 kHz | Bis zu 32 Kanäle              |

### 8.6.3 Latenz

DADLink-Latenz ist etwa **1 Mikrosekunde** — effektiv null aus der Perspektive der Audioausrichtung. Alle Eingänge und Ausgänge von über DADLink angeschlossenen Einheiten sind phasenorientiert vorausgesetzt, die **Digi-Verzögerung** wird auf den gleichen Wert für jede Einheit gesetzt.

### 8.6.4 Synchronisationsvoraussetzung

> **HINWEIS:** Für eine korrekte Phasenausrichtung von Eingaben und Ausgängen über DADLink-verbundene Einheiten, benutze entweder **DADLink** oder **Word Clock** als Sync-Quelle zwischen der Uhr Master Unit und allen Follower-Einheiten. Alle Einheiten in einem DADLink-Netzwerk müssen eine gemeinsame Uhrenquelle teilen.

### 8.6.5 Hardware-Installation

DADLink benötigt das **mini MADI Modul** im Mini-MADI Slot jeder angeschlossenen Einheit, ausgestattet mit kompatiblen optischen SFP Transceiver Modulen. Verbinden Sie Geräte mit Glasfaserkabeln zwischen den SFP-Transceivern. Weitere Informationen finden Sie im Installationshandbuch für DADLink und Mini MADI Module (erhältlich bei [digitalaudiosupport.com](https://www.digitalaudiosupport.com)) für spezifische SFP-Modultypen und Installationsvorgänge.

Einmal installiert, erscheinen DADLink-Ein- und Ausgänge in der DADman-Routing-Matrix neben MADI, Dante und anderen Formateingängen. Das Format ist im Conf Reiter sichtbar, wo DADLink als Schnittstellenoption angezeigt wird.

---

## 8.7 DADman läuft in der Menüleiste oder System Tray _(v5.7.0 und höher)_

### 8.7.1 macOS — Menüleistenmodus

DADman kann so konfiguriert werden, dass seine Präsenz auf dem macOS-Desktop minimiert wird, was es für permanente Installationen geeignet macht, auf denen es im Hintergrund laufen soll. Drei Modi sind verfügbar in **DADman > Einstellungen**:

| Modus                   | Verhalten                                                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Nur anziehen**        | DADman verhält sich wie eine normale MacOS-Anwendung — sichtbar im Dock und in der Taskleiste. Standard.                                                                                                               |
| **Menüleiste und Dock** | DADman zeigt auch ein Symbol in der MacOS-Menüleiste für den schnellen Zugriff an.                                                                                                                                                     |
| Nur **Menüleiste**      | DADman versteckt sich beim Schließen des Hauptfensters vor dem Dock. Nur das Symbol der Systemleiste ist sichtbar. Klicke darauf, um das DADman Menü zu zeigen (Anzeigen, Beenden). |

**Um das Hauptfenster nur aus der Menüleiste anzuzeigen:**

- Klicken Sie auf das DADman Menüleistensymbol → \*\*Anzeigen \*\*
- Doppelklicke im Finder auf eine `.dms` oder `.dmprof` Datei
- Drücke **<unk> <unk> 1**
- DADman erneut von Anwendungen starten

> **HINWEIS:** Nur in der Menüleiste, wenn DADman nach dem Ändern der Einstellung immer noch im Dock erscheint, mit der rechten Maustaste auf das Dock-Symbol → **Optionen > Im Dock** halten und deaktivieren.

> **HINWEIS:** In der Menüleiste nur Modus mit DADman versteckt, DADman speichert keine Dateien, wenn der Benutzer sich ausloggt oder das System herunterfährt, es sei denn, **Immer Datei speichern** ist in den Einstellungen aktiviert.

### 8.7.2 Windows — System Tray Modes

Konfigurieren Sie unter Windows das Tray-Verhalten in **Einstellungen > Optionen**:

| Modus                                            | Verhalten                                                                                                                                                                                                                       |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nur Taskleiste (Standard)** | DADman verhält sich als normale Windows-Anwendung.                                                                                                                                                              |
| **Taskleiste und Systemablage**                  | DADman zeigt auch ein Tray-Icon für den schnellen Zugriff an.                                                                                                                                                   |
| **Nur Systemablage**                             | DADman startet nur in den Tray. Klicken Sie mit der linken Maustaste auf das Symbol, um das Hauptfenster anzuzeigen; klicken Sie mit der rechten Maustaste für Anzeigen / Ausblenden / Beenden. |

### 8.7.3 Auto-Start bei Anmeldung (macOS)

Um DADman beim Anmelden automatisch starten zu lassen und eine Konfigurationsdatei zu laden:

**Methode 1 — macOS Login-Items:**

1. Öffne **Systemeinstellungen > Allgemein > Anmeldeelemente**.
2. Klicke **+** und füge **DADman.app** aus deinem Anwendungsordner hinzu.
3. Aktiviere **Letzte Datei beim Start öffnen** in den Einstellungen, so dass DADman die korrekte `.dms` Datei automatisch lädt.

**Methode 2 — AppleScript verzögert den Launcher** _(für Sonoma und später, wo das Verstecken von Login-Elementen eingeschränkt ist):_

Da macOS Sonoma die Möglichkeit entfernt hat, Login-Elemente zu verstecken, verwenden Sie ein Verzögerungsskript um DADman nach dem Login zu starten:

```applescript
Verzögerung 5
tell Anwendung "Finder"
  aktivieren Sie
  Anwendungsdatei "DADman. pp" des Ordners "Anwendungen" des Startup Disk
Ende mitteilen
Verzögerung 8
der Anwendung "System Events" mitteilen
  des Prozesses "DADman" auf false
Ende Erzählen
```

Um dieses Skript zu verwenden:

1. Öffne **Script Editor** (Anwendungen > Utilities > Script Editor).
2. Fügen Sie das Skript ein und passen Sie die Verzögerungswerte bei Bedarf an.
3. Exportieren als **Anwendung** (**Datei > Exportieren** → Format: Anwendung).
4. Fügen Sie die resultierende Anwendung zu **Systemeinstellungen > Allgemein > Anmeldeartikel** hinzu.

Das Skript startet DADman nach einer 5-Sekunden-Verzögerung und versteckt es nach weiteren 8 Sekunden. Passen Sie die Verzögerungen an die Bootzeit Ihrer Hardware an.

---

## 8.8 Dateiverwaltung und Kommandozeilenzugriff _(v5.7.0 und höher)_

### 8.8.1 Öffne Dateien vom Finder oder Windows Explorer

Mit DADman v5.7.0 können `.dms` und `.dmprof` Dateien direkt durch einen Doppelklick in Finder (macOS) oder Windows Explorer geöffnet werden. DADman öffnet sich, lädt die Datei und wendet die Einstellungen auf verbundene Einheiten an.

Wenn sowohl eine `.dms` als auch eine `.dmprof` Datei gleichzeitig ausgewählt und geöffnet werden, lädt DADman das erste `. ms`-Datei gefunden und die erste `.dmprof`-Datei gefunden und zusätzliche Dateien ignoriert.

### 8.8.2 Befehlszeilendatei öffnen

DADman mit bestimmten Dateien von einem Terminal oder Skript öffnen:

**macOS:**

```bash
öffnen -ein DADman /path/to/settings.dms /path/to/profile.dmprof
```

Der `-a DADman` ist optional, stellt aber sicher, dass DADman verwendet wird, auch wenn andere Anwendungen für `.dms` Dateien registriert sind.

**Fenster:**

```cmd
DADman.exe C:\path\to\settings.dms C:\path\to\profile.dmprof
```

Dies ermöglicht die Integration in externe Steuerungssysteme, Datei-Launcher oder Login-Skripte, die eine bestimmte DADman-Konfiguration beim Start laden müssen.

### 8.8.3 Mehrere DADman Instanzen öffnen (Windows)

Standardmäßig bringt das Öffnen von DADman, wenn es bereits läuft, die bestehende Instanz in den Vordergrund, anstatt eine zweite Kopie zu starten. Um explizit eine zweite unabhängige Instanz zu starten:

```cmd
DADman.exe -m
```

---

## 8.9 DADman Präferenzreferenz

Zugriffseinstellungen über **DADman > Einstellungen** (macOS) oder **Einstellungen > Optionen** (Windows).

| Präferenz                                            | Beschreibung                                                                                                                                    | Notizen                                                                                                                                                                                      |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Letzte Datei beim Start öffnen**                   | Lädt automatisch die zuletzt genutzte `.dms`-Einstellungsdatei und wendet diese beim Start auf angeschlossene Einheiten an                      | Empfohlen für permanente Installationen; mit Vorsicht in Mehrbenutzerumgebungen                                                                                                              |
| **GUI Layout**                                       | Wählt eines von drei Farbschemas für die DADman-Schnittstelle aus                                                                               | Lokal gespeichert; hat keine Auswirkungen auf die Hardware                                                                                                                                   |
| **Max. Matrix Ansichtsgröße**        | Legt die maximale Größe der Routing-Matrix-Detailansicht fest: 32×32 (Standard), 64×64, 128×128 oder 256×256 | Größere Größen erlauben es, mehr Routing-Matrix auf einmal anzuzeigen; kann die Leistung auf älteren Systemen beeinträchtigen _(v5.7.0+)_ |
| **Show Mode** (macOS)             | Nur Dock · Menüleiste und Dock · Menüleiste                                                                                                     | Siehe [Abschnitt 8.7.1]                                                                                  |
| **Zeige in** (Windows)            | Nur Taskleiste · Taskleiste und Systemabschnitt · Nur Systemabschnitt                                                                           | Siehe [Abschnitt 8.7.2]                                                                                  |
| **Datei immer speichern** (macOS) | Speichert die aktuelle `.dms`-Datei automatisch beim Ausloggen, Neustart oder Herunterfahren                                                    | Erforderlich für einen zuverlässigen Betrieb im Nur-Modus der Menüleiste                                                                                                                     |

---

## 8.10 Dante Virtual Soundcard als Monitorquelle

Die **Dante Virtual Soundcard (DVS)** von Audinate ermöglicht es einem Mac oder PC als Dante Audiogerät im Netzwerk zu erscheinen Routing der Audioausgabe des Computers in das Dante-Netzwerk und in jede von DADman-gesteuerte Hardware. Dies ist nützlich für die Überwachung der DAW-Wiedergabe über eine DAW die Dante unterstützt oder für die Verwendung von macOS/Windows-System-Audio (YouTube, Spotify, Referenzspuren) durch das Hauptmonitor System ohne zusätzliche I/O.

### 8.10.1 Voraussetzungen

- Dante Virtual Soundcard installiert und lizenziert auf dem Host-Computer
- Dante Controller installiert (frei von Audinate)
- Eine DADman-gesteuerte Einheit mit Dante-Eingang (AX Center, Core 256, AX64, AX32 mit Dante-Erweiterungskarte, etc.)

### 8.10.2 Konfigurationsvorgang

**Schritt 1 — Starten und konfigurieren von DVS**

1. Öffnen Sie die Dante Virtual Soundcard Anwendung.
2. Legen Sie die Kanalanzahl bei Bedarf fest (z.B. **8×8** für eine 7.1 oder 7.1.2 Quelle).
3. Drücke **Start** um den DVS-Dienst zu aktivieren. Der Computer erscheint nun als ein Dante-Gerät im Netzwerk.

**Schritt 2 — Patch DVS auf die Hardware-Einheit in Dante Controller**

1. Öffne **Dante Controller**.
2. Suchen Sie in der **Routing** Matrix den DVS Sender (er wird unter dem Hostnamen des Computers erscheinen).
3. Führen Sie die DVS-Ausgänge zu den gewünschten Dante-Eingangskanälen auf der DADman Hardware (e. ., DVS gibt 1–8 → MTRX Dante Eingänge 1–8 oder AX Center Dante Eingänge 1–8).

**Schritt 3 — Setze die Audio-Ausgabe des Systems auf DVS (macOS)**

Halten Sie die **Option** gedrückt und klicken Sie auf das MacOS-Lautstärkesymbol in der Menüleiste, dann wählen Sie die Dante Virtual Soundcard als Ausgabegerät aus. Alternativ können Sie es auch unter **Systemeinstellungen > Sound > Output** einstellen.

**Schritt 4 — Füge eine DVS Quelle in DADman Monitor Profil hinzu**

1. In DADman gehen Sie auf **Einstellungen > Profil überwachen**.
2. Im Tab **Quellen** klicken Sie mit der rechten Maustaste und wählen **Neue Quelle hinzufügen**.
3. Benennen Sie die Quelle (z.B. `DVS`, `System Audio`, `Mac Output`).
4. Klicken Sie mit der rechten Maustaste auf die Spalte **Modus** und wählen Sie **Gruppen-Format** — wählen Sie die Kanalanzahl für Ihre DVS-Konfiguration (Stereo, 5.1, 7.1, etc.).
5. Klicken Sie für jeden Kanal mit der rechten Maustaste auf die Kanalzuweisung und wählen Sie den entsprechenden Dante-Eingangskanal, der das DVS-Signal empfängt (gepatcht in der Dante-Steuerung).

**Schritt 5 — Überprüfen**

Kehre zum Tab DADman **Mon** zurück. Die DVS-Quelle sollte nun als einstellbare Monitorquelle erscheinen. Wiedergabe von Audio auf dem Computer — Sie sollten Dosierung in der DVS-Quellzeile sehen.

> **HINWEIS:** Die DVS Quelle wird nur in der Monitorquellliste angezeigt, wenn DADman ein aktives Monitorprofil hat, das mit der konfigurierten DVS Quelle geladen wird. Wird ein anderes Profil geladen, ist die DVS Quelle erst dann zugänglich, wenn das richtige Profil neu geladen wird.

---

## 8.11 Analog-Ausgabelevel Konfiguration

Die Analogausgangsstufensteuerung auf der Registerkarte **DA** legt die Signalausrichtung zwischen der digitalen Domäne der Hardware-Einheit (in dBFS) und der analogen Ausgangsstufe (in dBu) fest. Dies ist eine Kalibrierungseinstellung — es handelt sich nicht um eine betriebliche Ebenenkontrolle.

### 8.11.1 Konzept

Der DA-Ausgabestufenregler gibt an, welche Analogstufe 0 dBFS entspricht. Es kontrolliert nicht die Überwachungsebene; die Überwachungslautstärke wird im Reiter **Mon** vom Fader gesteuert. Die DA-Ausgangsstufeneinstellung dient ausschließlich dazu, die Analogausgabe der Hardware an die Headroom-Anforderungen der nachgelagerten Geräte auszurichten.

**Beispiel:** Wenn die DA-Ausgangsstufe auf +18 dBu gesetzt ist, erzeugt ein 0 dBFS-Digitalsignal +18 dBu auf die analoge Ausgabe. Wenn nachgeschaltete Geräte (Powerverstärker oder aktiver Monitor) +18 dBu, ein Signal an 0 dBFS wird den Verstärker abschliessen — daher sollte der DA-Wert so eingestellt werden, dass er der maximalen Eingangsspezifikation der nachgeschalteten Geräte entspricht.

> **WARNUNG:** Eine hohe DA-Ausgangsstufe einstellen ist nicht immer vorteilhaft. +24 dBu einstellen, wenn die nachgeschalteten Geräte bei +18 dBu die Spannung von 6 dB vor dem digitalen Volumen einstellen. Immer die DA-Ausgangsstufe an die maximale Eingangsspezifikation angeschlossener Verstärker oder Monitore anpassen.

### 8.11.2 Ausgabestufenbereich

Die DA-Ausgänge (auf DB25-Steckverbindern) bieten zwei wählbare maximale Ausgabebereiche:

| Range                  | Slider-Spanne                            |
| ---------------------- | ---------------------------------------- |
| −66 dBu zu **+18 dBu** | Standard                                 |
| −60 dBu zu **+24 dBu** | Aktiviert durch den **6 dB Gain** Button |

Aktiviere den **6 dB Gain** Button auf einem Kanal, um den Ausgabebereich auf +24 dBu. Dies ist bei der Verbindung mit professioneller Ausrüstung mit +24 dBu maximalen Eingängen.

### 8.11.3 Per-Channel-Konfiguration

Verschiedene Ausgangskanäle können auf unterschiedliche analoge Niveaus eingestellt werden, so dass gemischte Anschlüsse von einer Einheit aus möglich sind. Beispielsweise können Nahfeldmonitore, die von einem Stereo-Verstärkerverstärker mit +18 dBu gespeist werden, auf +18 dBu eingestellt werden, während Surround-Lautsprecher von Verstärkern mit +24 dBu Headroom auf +24 dBu eingestellt werden können.

_[Platzhalter: Screenshot — DA Tab zeigt Schieberegler mit unterschiedlichen Kalibrationswerten]_

---

## 8.12 SPQ-Lautsprecherkarte

Die \*\*SPQ (Speaker Processing) Karte ist eine optionale DSP Erweiterungskarte für kompatible DAD Hardware-Einheiten (AX32 und MTRX Varianten). Es bietet einen parametrischen EQ pro Kanal an den analogen Monitorausgängen und ermöglicht die Hardware- und Raumkorrektur ohne einen externen Prozessor im Signalweg.

> **HINWEIS:** Die SPQ-Karte ist eine Hardware-Option. Es muss physisch in der Einheit installiert sein. Wenn keine SPQ-Karte vorhanden ist, erscheint die SPQ-Registerkarte nicht im DADman.

### 8.12.1 SPQ-Workflow-Übersicht

Der typische SPQ-Workflow ist:

1. **Messen Sie den Raum** mit Hilfe einer akustischen Messsoftware (z.B. dem kostenlosen **Room EQ Wizard**, erhältlich auf roomeqwizard.com). Verwenden Sie ein kalibriertes Messmikrofon an der Hörposition.
2. **Generiere EQ-Korrekturfilter** aus den Messergebnissen innerhalb der Messsoftware.
3. **Importiere die Filter** in DADman über die SPQ-Registerkarte. DADman akzeptiert EQ-Daten in einem kompatiblen Exportformat von Room EQ Wizard.
4. **Die Korrektur anwenden** — die SPQ-Karte verarbeitet die analogen Ausgänge in Echtzeit unter Verwendung der importierten Filterkoeffizienten.

### 8.12.2 SPQ Tab in DADman

Die SPQ-Registerkarte erscheint in DADman, wenn eine kompatible SPQ-Karte im angeschlossenen Gerät erkannt wird. Auf der SPQ-Registerkarte können Sie:

- EQ-Kurven pro Ausgabe anzeigen und bearbeiten
- Messdaten aus dem Room EQ Assistenten importieren
- SPQ-Verarbeitung pro Ausgabekanal aktivieren oder umgehen
- SPQ-Konfigurationen als Teil der Einheiten-Datei speichern (`.dms`)

> **HINWEIS:** SPQ-Einstellungen werden auf der Hardware-Einheit gespeichert, nicht im Monitorprofil. Sie halten an allen DADman-Sitzungen fest, ohne dass ein Profil geladen werden muss.

_[Placeholder: full SPQ parameter reference and step-by-step Room EQ Wizard import procedure — anhängige technische Dokumentation von DAD]_

---

## 8.13 Dolby Atmos Monitoring Workflow

DADmans Monitorprofilsystem unterstützt Dolby Atmos-Überwachung von Einzeleinheiten bis hin zu 64 Kanalkonfigurationen. Im Folgenden finden Sie einen konzeptionellen Überblick über einen typischen Dolby Atmos-Monitoringpfad mit einer DADman-gesteuerten Einheit.

### 8.13.1 Signalflussübersicht

Eine typische Dolby Atmos-Überwachungskette:

```
Pro Tools (Atmos session)
      <unk> (DADLink / MADI / Dante)
Dolby Renderer (e. ., Dolby Atmos Mastering Suite / Renderer)
      <unk> (Lautsprecherfeeds — bis 9. .6 oder darüber hinaus)
DADman Hardware (DA Ausgänge)
      <unk> (analog)
Lautsprecherverstärker und Lautsprecher
```

DADman behandelt die finale Monitorsteuerungsebene - Quellauswahl, Niveau, Einklappungen und Abdunkel/Schnitt - auf dem Ausgangsspektrum des Renderers.

### 8.13.2 Erstellen eines benutzerdefinierten Gruppenformats

Standard DADman Gruppenformate decken bis zu 7.1.4 ab. Für größere Atmos-Konfigurationen (9.1.6, 7.1.6, etc.) muss ein **benutzerdefiniertes Gruppenformat** definiert werden:

1. In **Einstellungen > Profil überwachen**, gehen Sie zum Reiter **Ausgänge** .
2. Klicken Sie mit der rechten Maustaste und wählen Sie **Benutzerdefiniertes Gruppenformat hinzufügen**.
3. Definieren Sie die Kanalanzahl und Lautsprecher-Layout-Labels (z.B. L, C, R, Ls, Lss, Rss, Rss, Lts, Rts…).
4. Speichern Sie das Format und weisen Sie es der entsprechenden Ausgabe zu.

### 8.13.3 Quellen und Rücksendungen vom Dolby Renderer

Fügen Sie jeden Satz von Renderer-Ausgängen als separate Quelle im Monitorprofil hinzu:

| Quelle                      | Kanäle                                                                              | Zweck                                             |
| --------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| Atmos voll                  | 9.1.6 (oder konfiguriertes Bett) | Vollständiger Atmossprecherfeed vom Renderer      |
| Stereo Downmix              | 2.0                                                                 | ITU-Stereo-Downmix von Renderer                   |
| Binaural                    | 2.0                                                                 | Binaurale Rückgabe des Kopfhörers von Renderer    |
| 5.1 Downmix | 5.1                                                                 | Renderer 5.1 Kompatibilitätsfalte |

### 8.8.4 Fold-Downs für Atmos

Benutzen Sie den Reiter **Fold Downs** um Kompatibilitätsüberwachungsoptionen hinzuzufügen, die keine Umschaltquellen auf dem Renderer benötigen — zum Beispiel fald-downs , die eine Stereo-Summe der Atmos-Lautsprecherkanäle direkt in DADman für eine schnelle Mono-Prüfung oder eine enge Stereoüberprüfung anwenden. Diese ergänzen statt ersetzen die eigenen Downmix-Ausgänge des Renderers.

> **HINWEIS:** Für echte Dolby-Spezifikations-Downmix-Mischungen verwenden Sie immer die Downmix-Ausgänge des Dolby Renderers statt DADman-Ausgänge. DADman Faltschlüssel sind keine Dolby-zertifizierten Prozesse.

_[Placeholder: screenshot — 9.1.6 Monitorprofil mit Atmos-Quellen konfiguriert]_

---

## 8.14 LTC über Dante

DADmangesteuerte Einheiten mit einer Dante-Schnittstelle können **LTC (Linear Timecode)** innerhalb eines Dante Audio-Kanals tragen. Dies ermöglicht es, eine Zeitcode-Quelle über das Dante-Netzwerk an jede Einheit im selben Netzwerk ohne dedizierte Zeitcode-Verkabelung zu verteilen.

### 8.14.1 Konzept

LTC ist ein Audio-Frequenz-Signal, das SMPTE Zeitcode in der Audiosignalform kodiert. Weil es den gleichen Frequenzbereich wie Audio belegt, es kann über einen beliebigen Dante-Kanal geleitet werden, als wäre es ein Mono-Audiosignal — es erfordert keine spezielle Dante-Konfiguration.

### 8.14.2 Konfiguration

**LTC über Dante senden:**

1. Verbinden Sie die LTC-Quelle (Hardware-Zeitcode-Generator, DAW-Ausgabe, etc.) an einen analogen oder digitalen Eingang auf der DADman-Hardware-Einheit.
2. Im Tab **Con** von DADman führt den LTC-Eingang zu einem Dante-Ausgabekanal.
3. In **Dante Controller**, leiten Sie diesen Dante Kanal zu jeder empfangenden Einheit im Netzwerk.

**LTC auf einer verbundenen Einheit empfangen:**

1. In Dante Controller führen Sie den LTC Dante Kanal zu einem geeigneten Eingang in die Empfangseinheit.
2. Verbinden Sie diese Eingabe mit der Zeitcode-Eingabe von jedem nachgeschalteten Gerät, das LTC akzeptiert.

> **HINWEIS:** LTC ist eine analoge Wellenform. Wenn er einen Abtastratkonverter durchläuft, kann das Zeitcodesignal beschädigt sein. Stellen Sie sicher, dass alle Einheiten im Dante-Netzwerk die gleiche Uhrenquelle teilen (z.B. Word Clock, PTP/IEEE 1588) um SRC-Einfügen in den Timecode zu vermeiden. Siehe [Abschnitt 8.6.4 — DADLink Synchronisation Requirement].

---

## 8.15 MIDI Control und Pro Tools PRE Emulation

DADman kann über MIDI an Pro Tools angeschlossen werden, so dass Pro Tools die Preamp-Gain-Steuerung an einer DADman-angeschlossenen Einheit so behandeln kann, als wären sie **Avid PRE** Hardware-Preamp-Steuerungen. Dies ermöglicht die eingebaute Fernbedienung von Pro Tools, den Eingangszuwachs der DADman Hardware direkt aus dem I/O Setup von Pro Tools oder einer kompatiblen Steueroberfläche einzustellen – ohne den Fokus auf DADman zu wechseln.

### 8.15.1 Übersicht

Wenn die Pro Tools PRE Emulation aktiv ist:

- Pro Tools sendet MIDI Gain Nachrichten an DADman
- DADman übersetzt diese in Gain-Anpassungen an den analogen Eingängen der angeschlossenen Hardware-Einheit
- Die DADman AD-Registerkarte zeigt die aktuellen Vorteile an. Änderungen von Pro Tools werden in Echtzeit reflektiert

### 8.15.2 Konfiguration

**Um die MIDI-Steuerung für Pro Tools PRE-Emulation zu aktivieren:**

1. Stellen Sie sicher, dass zwischen dem DADman Computer und dem Pro Tools System (Netzwerk MIDI, USB MIDI oder IAC Driver auf macOS) eine MIDI-Verbindung besteht.
2. In DADman gehen Sie auf **Einstellungen > MIDI** und konfigurieren Sie die MIDI-Ein- und Ausgabe-Ports für die Verbindung.
3. Konfigurieren Sie in Pro Tools **I/O Setup**, die Preamp-Seite so konfigurieren, dass die MIDI-Verbindung zu DADman verwendet wird.

> **HINWEIS:** Die exakte MIDI-Kanalzuweisung und Controller-Zuordnung hängt von der Pro-Tools-Version und der MTRX/DAD-Einheits-Konfiguration ab. Lesen Sie in der Avid MTRX Dokumentation oder DAD Unterstützung die richtige MIDI Parametertabelle für Ihr Hardwaremodell.

_[Placeholder: detailed MIDI parameter table and step-by-step procedure — anhängige Engineering-Dokumentation von DAD]_

---

## Ausstehende Dokumentation

Die folgenden Themen für erweiterte Funktionen erfordern zusätzliche Informationen aus dem DAD-Engineering, bevor sie dokumentiert werden können:

| Feature                                      | Status                                                                       | Notizen                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PRO\|MON Monitor System**                  | Platzhalter — noch nicht dokumentiert                                        | PRO\|MON ist der erweiterte Monitorcontroller für AX32, DX32R, Penta, und MTRX Studio. Die vollständige Dokumentation erfordert einen DAD-Engineeringeintrag für den PRO\|MON Konfigurationsworkflow, die Parameterreferenz und die Cue\|Mix-Integration.                                                                           |
| **Cue\|Mix Null-Latenz-Mixer**               | Platzhalter — noch nicht dokumentiert                                        | Als DADman-Funktion aufgelistet; keine Quelldokumentation verfügbar. Anfrage von DAD Engineering.                                                                                                                                                                                                                                   |
| **SPQ Kartenkonfiguration**                  | Entwurf in Abschnitt 8.12 — Parametertabelle ausstehend      | Workflow-Übersicht erstellt. Vollständige Schritt-für-Schritt-Prozedur mit je Parameter Referenz von DAD. Room EQ Wizard Importformat muss mit DAD Engineering bestätigt werden.                                                                                                                                    |
| **MIDI Control und Pro Tools PRE Emulation** | Entwurf in Abschnitt 8.15 — MIDI-Parametertabelle ausstehend | Konzept und Konfigurationsübersicht entworfen. Volle MIDI-Controller- und Kanalzuordnungstabelle für jedes unterstützte Hardwaremodell, das von DAD benötigt wird.                                                                                                                                                                  |
| **Screenshots — alle Abschnitte**            | Ausstehend                                                                   | Alle Screenshot-Platzhalter (8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13) benötigen live DADman v5.8.2 mit angeschlossenem AX Center. |

---

_[Ausstehend: Screenshots für Abschnitte 8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13 — alle benötigen live DADman v5.8.2 mit angeschlossenem AX Center oder AX64]_
