---
title: "Frontfrage & Sicherheit"
sidebar_label: "FM — Front-Matter & Sicherheit"
sidebar_position: 2
---

# Frontfrage — Sicherheitshinweise und Compliance

> **Dokument:** DADman User Manual  
> **Gilt auf:** DADman Software und alle kompatiblen DAD / NTP-Technologie Hardware  
> **Standards:** IEC/IEEE 82079-1:2019 · IEC 62368-1:2018 · UL 62368-1 · CSA C22. Nr. 62368-1  
> **Status:** Entwurf v0. — Regulatorische Erklärungen von DAD / NTP Technology Engineering  
> **Zuletzt aktualisiert:** Juni 2026

---

> \*\*LESEN SIE DIESE INSTRUCTIONEN VOR JEGLICHE ANFRAGE BESCHLOSSEN. \*  
> Dieser Abschnitt enthält Sicherheitsinformationen, die gelesen werden müssen, verstanden werden, und folgte vor der Installation, Konfiguration oder dem Betrieb jeglicher Hardware, die von DADman Software gesteuert wird. Die Nichteinhaltung dieser Anweisungen kann zu Elektroschock, Feuer, Hörschäden, Geräteschäden oder zur Aufhebung der Garantie führen.

---

## FM.1 Signal-Wort-Definitionen

Die folgenden Signalwörter werden in diesem Handbuch verwendet, um die Gefährlichkeit anzugeben. Sie erscheinen in Formatierungen, wie unten gezeigt und müssen immer gelesen und beobachtet werden.

| Signalwort  | Gefahrenstufe                                         | Bedeutung                                                                                                                                                                                                                                                 |
| ----------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DANGER**  | Sofort Tod oder schwere Verletzung                    | Dieses Signalwort zeigt eine unmittelbar gefährliche Situation an, die, wenn sie nicht vermieden wird, **will** zum Tod oder zu schweren Personenschäden führt.                                                                           |
| **WARNUNG** | Mögliche Todesfälle oder schwere Verletzungen         | Dieses Signalwort zeigt eine potenziell gefährliche Situation an, die, wenn sie nicht vermieden wird, **könnte** zum Tod oder zu schweren Personenschäden führen.                                                                         |
| **KAUFEN**  | Mögliche geringfügige Verletzungen oder Geräteschäden | Dieses Signalwort zeigt eine potenziell gefährliche Situation an, die, wenn sie nicht vermieden wird, **können** zu geringfügigen Personenschäden oder Beschädigungen an Geräten führen.                                                  |
| **NOTIZEN** | Kein Verletzungsrisiko                                | Dieses Signalwort zeigt wichtige operative Informationen an, die, wenn nicht befolgt, zu Datenverlust führen können, B. fehlerhafter Betrieb oder Beschädigung von Geräten, aber keine persönliche Sicherheitsgefährdung. |

Sicherheitsmitteilungen **immer davor** die Aktion oder Situation die sie betreffen.

---

## FM.2 Sicherheitssymbole

Die folgenden Symbole können auf der DAD / NTP-Technologie Hardware, Stromversorgung oder in dieser Dokumentation erscheinen. Jedes Symbol wird hier mit seiner Bedeutung reproduziert.

| Symbol                                                         | IEC 60417 Referenz       | Bedeutung                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⚠                                                              | IEC 60417-5036           | **Allgemeine Vorsicht / Aufmerksamkeit erforderlich.** Beziehen Sie sich auf den begleitenden Text für die spezifische Gefahr.                                                                                                                       |
| ⚡                                                              | IEC 60417-5031           | **Elektroschockgefahr.** Gefährliche Spannung drinnen. Gefahr eines elektrischen Schocks. Nicht öffnen.                                                                                                              |
| ⏚                                                              | IEC 60417-5019           | **Schutzerd/Erde.** Dieses Terminal muss mit einem schützenden Erdleiter verbunden sein.                                                                                                                                                             |
| **~**                                          | IEC 60417-5032           | **Wechselstrom (AC).** Zeigt den Netzeingang an.                                                                                                                                                                                  |
| **⏻**                                                          | IEC 60417-5009           | **Kraft / Standby.**                                                                                                                                                                                                                                                 |
| ♻                                                              | WEEE-Richtlinie          | **Entsorgen Sie nicht in Haushaltsabfällen.** Dieses Produkt muss durch ein genehmigtes Recycling- oder Abfallentsorgungssystem entsorgt werden. Siehe [Abschnitt FM.8 — Disposal and WEEE](#fm8-disposal-and-weee). |
| **[RoHS]** | EU-Richtlinie 2011/65/EU | **RoHS-konform.** Dieses Produkt entspricht der Richtlinie zur Beschränkung gefährlicher Stoffe.                                                                                                                                                     |

> **HINWEIS:** Wenn ein Symbol auf der Hardware oder der Verpackung erscheint und nicht in der Tabelle oben aufgeführt ist, finden Sie in der Installationsanleitung, die mit dieser speziellen Hardware-Einheit geliefert wird.

---

## FM.3 Elektrische Sicherheit

### FM.3.1 Netzleistung und Erdung

> **DANGER — Elektrischer Schockgefahren**  
> \*\*Eine fehlerhafte Verbindung des anlagengebundenen Leiters birgt das Risiko eines elektrischen Schocks. \* Den mit dem Produkt gelieferten Stecker nicht ändern. Wenn der Stecker nicht in die Steckdose passt, haben Sie einen qualifizierten Elektriker installieren eine geeignete Steckdose. Verwenden Sie keinen Adapter, der die Funktion des ausrüstungsgestützten Leiters zunichte macht. Wenn Sie sich unsicher sind, ob das Produkt ordnungsgemäß gegrundet ist, wenden Sie sich vor dem Betrieb der Anlage an einen qualifizierten Elektriker.

Alle DAD / NTP-Technologie mit Main-Hardware **muss untermauert werden**. Bei Störungen oder Ausfällen bietet die Erdung einen Weg der geringsten Widerstandsfähigkeit gegen Störstrom und verringert so das Risiko eines elektrischen Schocks. Jedes netzbetriebene Produkt wird mit einem Stromkabel geliefert, der mit einem ausrüstungsgestützten Leiter und einem Erdungsstecker ausgestattet ist. Der Stecker muss in eine ordnungsgemäß installierte und gemahlene Steckdose eingefügt werden, die alle anwendbaren lokalen Elektrokodizes und -verordnungen einhält.

> **WARNUNG**  
> besiegen Sie nicht den Sicherheitszweck des Polarisierten oder Bodentyp-Steckers. Ein polarisierter Stecker hat zwei Klingen mit einem breiteren als der andere. Ein Stecker des Erdungstyps hat zwei Klingen und einen dritten Erdungsprong. Die breite Klinge und die dritte Klinge sind für Ihre Sicherheit vorgesehen. Falls der mitgelieferte Stecker nicht zu Ihrer Steckdose passt, wenden Sie sich an einen Elektriker, um die veraltete Steckdose zu ersetzen. Diese Anleitung gilt in allen Regionen und ersetzt jede lokale Gefälligkeitspraxis.

### FM.3.2 Power Cord Schutz

> **WARNUNG**  
> Schütze die Stromkabel vor dem Anlaufen oder Fangen vor allem an Steckern, Netzausgängen und an der Stelle, an der die Kabel das Chassis verlassen. Ein beschädigtes Stromkabel muss durch einen qualifizierten Servicetechniker ersetzt werden, bevor das Gerät wieder in Betrieb genommen wird. Betreiben Sie keine Geräte mit einem sichtbar beschädigten oder verfallenen Stromnetz.

### FM.3.3 Trennung und Blitz

- Trennen Sie bei Blitzstürmen alle netzbetriebenen Ausrüstungen ab.
- Schließen Sie alle netzbetriebenen Geräte ab, wenn sie für einen längeren Zeitraum nicht verwendet werden.
- Bei der Trennung eines Stromkabel nehmen Sie den Steckerkörper fest — ziehen Sie nicht an der Schnur selbst an.

### FM.3.4 Power over Ethernet (PoE) Geräte

Einige DAD-Hardware (einschließlich des MOM Monitor Operating Module) wird über Power over Ethernet (PoE) statt über ein Netzkabel betrieben. Folgendes gilt für PoE-betriebene Geräte:

- Anschließen von PoE-betriebenen Geräten nur an Netzwerkschalter oder Einspritzer, die mit IEEE 802 übereinstimmen. af (15.4 W) oder IEEE 802.3at (30 W) entsprechend für das Gerät.
- Verbinden Sie PoE-Geräte nicht mit Standard-Daten-Nur-Netzwerk-Ports, die nicht in der Lage sind, PoE-Strom zu liefern.
- Die PoE-Stromversorgung innerhalb des Netzwerkschalters oder Injektors unterliegt den allgemeinen Anweisungen zur Netzsicherheit in [Abschnitt FM.3.1](#fm31-mains-power-and-grounding).

---

## Umweltsicherheit FM4

### FM.4.1 Feuchtigkeit und Flüssigkeiten

> **WARNUNG**  
> Verwende keine DAD/NTP-Technologie Hardware in der Nähe von Wasser oder an Orten, an denen Kondensation, Regen oder Flüssigkeitsverseuchung auftreten können. Das flüssige Eindringen kann Elektroschock, Feuer oder irreparable Schäden an der Elektronik verursachen.

- Flüssigkeiten von allen Geräten fernhalten.
- Achten Sie darauf, dass die Objekte nicht fallen und Flüssigkeiten nicht durch Lüftungsöffnungen oder Steckverbinderöffnungen in Anlagen vergossen werden.
- Wenn Flüssigkeiten auf oder in die Anlage vergossen wurden, trennen Sie die Netzleistung sofort und beziehen sich auf [Abschnitt FM. — Service-Bedingungen](#fm6-service-conditions) bevor die Ausrüstung an den Dienst zurückgeschickt wird.

### FM.4.2 Lüftung und Hitze

> **WARNUNG**  
> Diese Ausrüstung erzeugt Wärme während des normalen Betriebs. Behinderung von Lüftungsöffnungen kann Überhitzung, Feuer oder vorzeitiges Ausfallen von internen Komponenten verursachen.

- Blockieren Sie keine Belüftungsöffnungen. Installieren Sie Geräte gemäß den Anweisungen des Herstellers und den in der Installationsanleitung für Ihr Hardwaremodell.
- Installieren Sie keine Geräte in der Nähe von Wärmequellen wie Heizkörpern, Heizkörpern, Öfen oder anderen Geräten – einschließlich Verstärker – die erhebliche Wärme erzeugen.
- Das Produkt sollte so lokalisiert werden, dass seine Position nicht die richtige Belüftung beeinträchtigt.
- Beachten Sie die in den Technischen Spezifikationen für Ihre Hardware angegebenen Mindestabstände und Betriebstemperaturbereich. Im Allgemeinen erfordert DAD Rack-Hardware ein Minimum von 1U freien Speicherplatz oberhalb und unterhalb der Einheit, sofern nicht anders angegeben.

### Mechanische Stabilität von FM.4.3

> **KAUTION**  
> Ausrüstung, die fällt, kann Personenschäden und schwere Ausrüstungsschäden verursachen. Bei der Montage der Hardware in einem Rack oder im Warenkorb stellen Sie sicher, dass die Montagestruktur stabil ist, an die Last angepasst und vor der Freigabe des Geräts richtig gesichert.

- Verwenden Sie nur Regalgehäuse, Ständer, Kartons oder Montagehalter, die vom Hersteller spezifiziert oder mit der Ausrüstung geliefert werden.
- Bei der Verwendung eines Radausrüstungswagens sollten Sie bei der Verlegung des Warenkorbs und der Ausstattung Vorsicht walten lassen, um eine Überspitzung zu vermeiden.
- Rackmontageeinheiten müssen vor dem Betrieb mit allen mitgelieferten Rackmontageschrauben gesichert werden.

---

## FM.5 Hörsicherheit

> **WARNUNG – Risiko eines permanenten Hörschaden**  
> DADman Software steuert die analoge und digitale Ausgangsstufe der angeschlossenen Hardware. Diese Ausrüstung, ob alleine oder in Kombination mit Verstärkern und Lautsprechern oder Kopfhörern ist in der Lage, Schalldruckpegel (SPL) zu erzeugen, die **permanenten Hörverlust** verursachen können.

- Operieren Sie nicht auf unbequemen Ausgangsstufen. Bei Zweifeln an sicheren Überwachungsniveaus konsultieren Sie professionelle Beratung zu SPL Grenzen für das erweiterte Hören (eine gemeinsame Referenz ist 85 dB SPL als kontinuierliches sicheres Niveau für professionelle Überwachung).
- Reduzieren Sie die Ausgabestufen, bevor Sie neue Signalquellen verbinden, Routing-Änderungen vornehmen oder Konfigurationsdateien neu laden.
- Wenn Sie Hörverlust, Tinnitus (Klingeln in den Ohren) oder eine erhöhte Klangempfindlichkeit nach einer Hörsitzung erfahren, wenden Sie sich umgehend an einen Audiologen. Dies können frühzeitige Indikatoren für Lärm verursachte Hörschäden sein.

> **HINWEIS:** DADman-Ausgabestufensteuerung und Überwachung der Profilreferenzstufenfunktion (die **Ref** Schaltfläche) wurden speziell so konzipiert, dass die Ausgabestufen bei kalibrierten SPL-Werten eingestellt und gesperrt werden können. Die Nutzung dieser Funktionen für ein diszipliniertes Gain-Strukturmanagement reduziert das Risiko unbeabsichtigter Exposition gegenüber unsicheren SPL. Siehe [Kapitel 8 — Erweiterte Funktionen, Abschnitt 8.X — Profile und Referenzstufen überwachen] für Anleitungen.

---

## FM.6 Service-Bedingungen

> **WARNUNG**  
> Innerhalb der DAD/NTP-Technologie-Hardware gibt es keine nutzerfreundlichen Teile. Das Öffnen des Gehäuses zeigt gefährliche Spannungen auf. Lesen Sie alle Wartungen, die über die in diesem Handbuch beschriebene hinausgehen, auf qualifiziertes Servicepersonal.

Die Hardware muss aus dem Verkehr gezogen werden und an qualifiziertes Servicepersonal weitergeleitet werden, wenn eine der folgenden Bedingungen existiert:

1. Das Netzkabel oder der Stecker wurde körperlich beschädigt.
2. Objekte sind in die Ausrüstung gefallen, oder Flüssigkeiten wurden in die Ausrüstung vergossen.
3. Die Ausrüstung wurde Regen oder Feuchtigkeit ausgesetzt.
4. Das Gerät scheint nicht normal zu arbeiten oder weist eine deutliche Leistungsänderung auf.
5. Die Ausrüstung wurde fallen gelassen oder das Gehäuse wurde körperlich beschädigt.

Versuchen Sie nicht, das Produkt über die in [Kapitel 10 — Wartung) dieses Handbuchs beschriebenen Wartungsvorgänge hinaus zu bedienen. Unbefugter Service entfällt die Gewährleistung und kann zusätzliche Sicherheitsrisiken verursachen.

> **WARNUNG — Verschiebungsteile**  
> Einige DAD Regaleinheiten (einschließlich der AX32) enthalten Kühlventilatoren mit **gefährlichen beweglichen Teilen** wenn die Einheitenabdeckung entfernt wird. Behalten Sie Finger und alle anderen Körperteile jederzeit von internen Ventilatoren.

---

## FM.7 Software und Datensicherheit

Die folgende Anleitung auf NOTICE-Ebene gilt für den Betrieb von DADman Software und beinhaltet keine persönlichen Sicherheitsrisiken. Die Nichteinhaltung dieser Praktiken kann zum Verlust von Konfigurationsdaten führen.

> **HINWEIS — Speichern Sie die Konfiguration vor Firmware-Updates**  
> Firmware-Updates setzen alle auf die Werkseinheit gespeicherten Einstellungen auf Werkseinstellungen zurück. Routingkonfigurationen, Gain-Einstellungen, Monitor-Profile, Kanalbeschriftungen und alle anderen gespeicherten Parameter gehen verloren, sofern sie nicht zuvor gespeichert werden. Speichern Sie immer eine DADman Einstellungen Datei (`.dms`) mit **Datei > Speichern unter** bevor Sie ein Firmware-Update starten. Siehe [Kapitel 3, Abschnitt 3.X — Aktualisierung von DADman und Firmware] für die komplette Prozedur.

> **NOTICE — Backup der Konfigurationsdateien**  
> DADman Settings Files (`.dms`) und Monitoring Profile Files (`.dmprof`) stellen eine erhebliche Setup-Investition dar. Verwalten Sie regelmäßige Sicherungen dieser Dateien an einem anderen Ort als dem Computer, auf dem DADman läuft (zum Beispiel Cloud-Speicher oder ein externes Laufwerk). Diese Dateien sind die einzige Möglichkeit, Ihre Konfiguration nach einem werksseitigen Zurücksetzen wiederherzustellen.

> **NOTICE — Netzwerksicherheit**  
> DADman kommuniziert mit Hardware-Einheiten über das Netzwerk ohne Authentifizierung. In Umgebungen mit mehreren Benutzern oder Netzzugriff von außerhalb des Studios platzieren Sie DADman-gesteuerte Hardware auf eine engagierte, ein isoliertes Netzwerksegment, um unbefugten Zugriff auf die Konfiguration der Einheit zu verhindern.

---

## FM.8 Disposal und WEEE

DAD / NTP-Technologieprodukte unterliegen der europäischen WEEE-Richtlinie (Waste Electrical and Electronic Equipment, Directive 2012/19/EU) und gleichwertigen nationalen und regionalen Vorschriften.

> **Entsorgen Sie diese Geräte nicht in unsortierten kommunalen Abfällen (Hausmüll/allgemeiner Abfall).**

Elektrische und elektronische Geräte müssen getrennt über zugelassene Sammelstellen gesammelt und entsorgt oder an einen autorisierten Händler oder den Hersteller zur ordnungsgemäßen Verwertung zurückgeschickt werden. Wenden Sie sich an Ihre örtliche Behörde, den Entsorgungsservice oder die DAD / NTP-Technologie.

Das Crossed-out Wheelie bin Symbol (♻️ mit einem X) auf das Produkt gedruckt oder auf das Produkt angebracht wird, identifiziert es als Gegenstand separater Sammelanforderungen.

---

## FM.9 Regulatorische Compliance

> **HINWEIS: Erklärungen anstehen**  
> Die regulatorischen Compliance-Deklarationen in diesem Abschnitt werden als Platzhalter zur Verfügung gestellt. Schlusserklärungen, einschließlich anwendbarer Richtlinienversionen, mitgeteilte Körperinformationen (falls zutreffend) und autorisierte repräsentative Angaben, müssen vor der Veröffentlichung durch DAD / NTP Technology Engineering bestätigt und eingefügt werden.

### 9.1 CE-Konformitätserklärung (Europäische Union)

DAD / NTP-Technologie erklärt, dass die von DADman Software kontrollierten Hardwareprodukte den Anforderungen der folgenden Richtlinien der Europäischen Union entsprechen:

- **Funkgeräterichtlinie (RED) 2014/53/EU** — _[Anwendbar für Produkte mit Radio/Wi-Fi; Anwendbarkeit pro Produkt bestätigen]_
- **Niedrige Spannungsrichtlinie (LVD) 2014/35/EU** — Anwendbar für netzbetriebene Hardware
- **Elektromagnetische Kompatibilitätsrichtlinie (EMC) 2014/30/EU**
- **RoHS-Richtlinie 2011/65/EU** — Beschränkung gefährlicher Stoffe
- **WEEE-Richtlinie 2012/19/EU** — Elektro- und Elektronik-Altgeräte

_[Vollständige Deklaration der Konformitätsdokumente, die hier einzufügen ist. Muss beinhalten: Produktname(e), Modellnummer(s), autorisierte Unterzeichner, Datum und Liste harmonisierter Normen (EN 55032, EN 55035, EN IEC 62368-1, etc.).]_

**Authorised Representative (EU):**  
NTP Technology A/S  
Nybrovej 99, DK-2820 Gentofte, Denmark  
Email: info@digitalaudio.dk

### FM.9.2 FCC-Konformitätserklärung (Vereinigte Staaten)

_[FCC-Deklaration, die durch DAD Engineering eingefügt werden soll. Muss beinhalten: FCC-ID (falls zutreffend), verantwortlicher Parteiname und Adresse sowie Compliance-Statement pro 47 CFR Teil 15.]_

Dieses Gerät entspricht Teil 15 der FCC-Regeln. Die Operation unterliegt den folgenden zwei Bedingungen:

1. Dieses Gerät kann keine schädlichen Störungen verursachen.
2. Dieses Gerät muss jede Eingriffe akzeptieren, einschließlich Störungen, die unerwünschte Operationen verursachen können.

> **HINWEIS:** Änderungen oder Änderungen, die nicht ausdrücklich von NTP Technology A/S genehmigt wurden, können die Berechtigung des Benutzers für den Betrieb der Ausrüstung außer Kraft setzen.

### FM.9.3 ICES-003 (Canada)

_[Industry Canada ICES-003 Compliance-Erklärung einzufügen.]_

Dieser digitale Apparat der Klasse B entspricht kanadischen ICES-003.

### FM.9.4 RoHS-Compliance

Die Hardware der DAD / NTP-Technologie wird gemäß der EU-Richtlinie 2011/65/EU (RoHS 2) und ihrer Änderungsrichtlinie 2015/863/EU (RoHS 3) hergestellt die die Verwendung gefährlicher Stoffe einschließlich Blei einschränken Quecksilber, Kadmium, hexavalent Chrom, polybromierte Biphenyle (PBB), polybromierte Diphenylether (PBDE) und vier Phthalate in Elektro- und Elektronikgeräten.

_[RoHS Compliance-Zertifikat oder Deklarationsreferenz einzufügen.]_

### FM.9.5 UK Conformity Assessed (UKCA) — Großbritannien

_[UKCA-Deklaration, die für Produkte, die nach dem Brexit auf dem GB-Markt platziert werden, eingefügt werden soll.]_

---

## FM.10 Rechtliche Hinweise

### Copyright

2026 NTP-Technologie A/S. Alle Rechte vorbehalten.

DAD – Digital Audio Denmark ist eine eingetragene Marke von NTP Technology A/S. Alle anderen Warenzeichen sind Eigentum ihrer jeweiligen Eigentümer.

Kein Teil dieses Handbuchs darf in irgendeiner Form oder auf irgendeine Weise reproduziert, übertragen oder übersetzt werden — elektronisch, mechanisch, Fotokopie, Aufnahme oder anderweitig — ohne vorherige schriftliche Genehmigung von NTP Technology A/S.

### Haftungsausschluss

NTP Technology A/S behält sich das Recht vor, ohne Ankündigung Änderungen an Hardwareprodukten und Software vorzunehmen. Die in diesem Handbuch beschriebenen Produktmerkmale und Spezifikationen können sich ändern.

NTP Technology A/S haftet nicht für technische oder redaktionelle Fehler oder Auslassungen, die hier enthalten sind oder für zufällige oder Folgeschäden, die sich aus der Ausstattung, Leistung oder der Verwendung dieses Handbuchs oder der darin beschriebenen Produkte ergeben.

### Kontakt

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

E-Mail: info@digitalaudio.dk  
Web: www.digitalaudio.dk  
Unterstützung: www.digitalaudiosupport.com

---

## Zusammenfassung der Sicherheitshinweise

Per IEC/IEEE 82079-1:2019 werden alle DANGER- und WARNING-Hinweise in diesem Dokument zur schnellen Referenz hier gesammelt. In den Kapiteln, in denen die entsprechende Gefahr besteht, erscheinen auch einzelne Mitteilungen im Kontext.

| Standort                                         | Signalwort  | Summary                                                                                  |
| ------------------------------------------------ | ----------- | ---------------------------------------------------------------------------------------- |
| Abschnitt FM.3.1 | **DANGER**  | Unsachgemäße Erdung — Risiko eines elektrischen Schocks                                  |
| Abschnitt FM.3.1 | **WARNUNG** | Den Sicherheitszweck des Steckers nicht besiegen                                         |
| Abschnitt FM.3.2 | **WARNUNG** | Schützen und nicht mit beschädigter Stromleitung arbeiten                                |
| Abschnitt FM.4.1 | **WARNUNG** | Nicht in der Nähe des Wassers verwenden — Risiko für elektrischen Schock und Feuer       |
| Abschnitt FM.4.2 | **WARNUNG** | Belüftung nicht behindern — Brand- und Überhitzungsrisiko                                |
| Abschnitt FM.5                   | **WARNUNG** | Ausgabestufen, die einen permanenten Hörverlust verursachen können                       |
| Abschnitt FM.6                   | **WARNUNG** | Keine nutzer-wartbaren Teile — gefährliche Spannungen innerhalb                          |
| Abschnitt FM.6                   | **WARNUNG** | Gefährliche bewegende Teile (AX32 und Einheiten mit internen Lüftern) |

---

_[Ausstehend von DAD / NTP-Technologie:]_  
_— Abschlusserklärung des Konformitätstextes und Unterzeichner_  
_— FCC-ID-Nummern und Compliance-Statements pro Produktmodell_  
_— ICES-003-Deklaration_  
_— UKCA-Deklaration (falls zutreffend)_  
_— Referenznummer für RoHS-Zertifikate_  
_— Bestätigung der anwendbaren harmonisierten Standards (EN Series)_
