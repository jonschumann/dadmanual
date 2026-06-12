---
title: "Kapitel 2 — Beskrivelse Af Panelet"
sidebar_label: "Ch. 2 — Stykkebeskrivelse"
sidebar_position: 3
---

# Kapitel 2 — Beskrivelse Af Panelet

> **Produkt:** Digital Audio Denmark Penta 720

> **Sådan bruger du dette kapitel:** Dette kapitel identificerer hver kontrol og stik på Penta 720. For signalniveauer og tilslutningsprocedurer, se [Ch. 4 — Signal Connections](ch04-connections). For betydninger af LED-tilstand, se [afsnit 2.3](#23-led-state-reference).

---

## 2.1 Forreste Panel

![Penta 720 frontpanel](/img/panel-penta720.png)
_Figur 2.1 — Penta 720 frontpanel. Nummererede callouts svarer til nedenstående referencetabel._

| Ref | Etiket     | Type                                    | Funktion                                                                                                                                                            | Dot |
| --- | ---------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 1   | **Klar**   | LED-indikator (grøn) | Enhed har fuldført opstartssekvens og er klar til drift                                                                                                             | Grå |
| 2   | **Fejl**   | LED-indikator (rød)  | En intern fejl eller konfigurationsfejl er blevet opdaget                                                                                                           | Grå |
| 3   | **PSU OK** | LED-indikator (grøn) | Primær strømforsyning fungerer korrekt. På enheder med overflødig PSU, bekræfter en anden PSU OK indikator backup forsyningsstatus. | Grå |

---

## 2.2 Bagpanel

> **BEMÆRK:** Penta 720 bagpanelets layout varierer afhængigt af de monterede udvidelseskort. Det nedenfor viste konnektorkomplement afspejler en typisk konfiguration. Kontroller det faktiske kortlayout i din enhed, før du opretter forbindelser.

| Ref | Etiket                                                                    | Forbindelse                             | Funktion                                                                                                                                                                                                                                  | Dot    |
| --- | ------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | **Effekt (primær)**                                    | IEC C14 indløb                          | Strømforsyningen til nettet. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                                      | Mørk   |
| 2   | **Strøm (sikkerhedskopi)**                             | IEC C14 indløb                          | Redundant elnettenes effekt input (hvor monteret). Giver hot-swap PSU redundans.                                                                                                       | Mørk   |
| 3   | **AES/EBU I/O 1–4**                                                       | DB25 (Tascam pinout) | AES/EBU digital audio I/O, kanal 1-4 (4 stereo pairs = 8 kanaler).                                                                                                                                     | Orange |
| 4   | **AES/EBU I/O 5–8**                                                       | DB25 (Tascam pinout) | AES/EBU digital audio I/O, kanal 5-8 (4 stereo pairs = 8 kanaler).                                                                                                                                     | Orange |
| 5   | **MADI IN**                                                               | BNC, 75 Ω.              | MADI koaksial input. AES10 overensstemmende.                                                                                                                                                              | Blå    |
| 6   | **MADI UD**                                                               | BNC, 75 Ω.              | MADI koaksial output.                                                                                                                                                                                                     | Blå    |
| 7   | **Optisk I/O**                                                            | TOSLINK (optisk)     | Optisk MADI eller ADAT I/O (kortafhængig).                                                                                                                                                             | Cyan   |
| 8   | **WC/VBB IN**                                                             | BNC, 75 Ω.              | Word ur eller Video Black Burst input.                                                                                                                                                                                    | Violet |
| 9   | **WC OUT**                                                                | BNC, 75 Ω.              | Word clock output.                                                                                                                                                                                                        | Violet |
| 10  | **AES11 IN**                                                              | XLR (kvinder)        | AES11 digital lyd reference signal input. Bruges til at synkronisere enheden til en AES11-referencekilde.                                                                                                 | Grøn   |
| 11  | **NET 1**                                                                 | RJ45 (1000BASE-T)    | Ethernet kontrol og/eller Dante audio netværk, port 1.                                                                                                                                                                    | Skifer |
| 12  | **NET 2**                                                                 | RJ45 (1000BASE-T)    | Ethernet kontrol og/eller Dante lydnetværk, port 2.                                                                                                                                                                       | Skifer |
| 13  | **SLOT 1** _(typisk: Dante/AES67 I/O)_ | 2× SFP                                  | Ekspansion kort slot 1. Er udstyret med Dante/AES67 I/O-kort: to SFP-porte til optiske eller kobberDante netværksforbindelser. Slot indhold varierer efter konfiguration. | Cyan   |

---

## 2.3 LED State Reference

### Status LED'er

| LED                             | Farve                              | Betydning                                                                         |
| ------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------- |
| Klar                            | Grøn (konstant) | Boot sekvens komplet — enhed klar til drift                                       |
| Fejl                            | Rød (konstant)  | Intern fejl eller konfigurationsfejl fundet                                       |
| PSU OK                          | Grøn (konstant) | Primær strømforsyning fungerer korrekt                                            |
| PSU OK (2nd) | Grøn (konstant) | Redundant PSU til stede og drift (kun enheder med dobbelt PSU) |

---

## Krydsreferencer

- [Ch. 4 — Signal Connections](ch04-connections) — Signal niveauer og tilslutningsprocedurer
- [Ch. 6 — Operation](ch06-operation) — Kontrol og visning
- [App. A — Connector Pinouts](appa-connector-pinouts) — Fastgørelsesopgaver
