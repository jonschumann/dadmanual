---
title: "Kapitel 2 — Beskrivelse Af Panelet"
sidebar_label: "Ch. 2 — Stykkebeskrivelse"
sidebar_position: 3
---

# Kapitel 2 — Beskrivelse Af Panelet

> **Produkt:** Digital Audio Denmark Core 256

> **Sådan bruger du dette kapitel:** Dette kapitel identificerer hver kontrol og stik på Core 256. For signalniveauer og tilslutningsprocedurer, se [Ch. 4 — Signal Connections](ch04-connections). For betydninger af LED-tilstand, se [afsnit 2.3](#23-led-state-reference).

---

## 2.1 Forreste Panel

![Core 256 frontpanel](/img/panel-core256-front.png)
_Figur 2.1 — Core 256 frontpanel._

> **BEMÆRK:** Core 256 frontpanelet giver kun statusindikatorer. Der er ingen lydstik på frontpanelet.

| Ref | Etiket                   | Type                                    | Funktion                                                                                                                    | Dot                                                                                                                                                                                                                                                       |
| --- | ------------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **DAD**                  | Belyst logo                             | Blå belysning; angiver tænd/sluk                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2   | **Strøm**                | Belyst trykknap                         | Initierer kontrolleret power-on/shutdown sekvens                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3   | **Int.** | LED indikator                           | Lit når låst til intern ur reference                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4   | **Ext.** | LED-indikator (grøn) | Lit når låst til ekstern urkilde                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5   | **Err.** | LED-indikator (rød)  | Lit på ur fejl eller intern fejl. Se [Afsnit 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 Bagpanel

![Core 256 bagpanel](/img/panel-core256-rear.png)
_Figur 2.2 — Core 256 bagpanel. Nummererede callouts svarer til nedenstående tabel._

Bagpanelet Core 256 bærer det samme konnektorsæt som AX Center med følgende forskelle:

| Forskel          | AX Centreret                                             | Hovednet 256                                               |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| Effekt           | IEC C14 mains inlet (100–240 V AC)    | 12 V DC tønde stik (ekstern PSU kræves) |
| Overvåg udgange  | 2 × stereo TRS (MONITOR 1, MONITOR 2) | Ikke til stede                                             |
| Ekspansion slots | 2× (SLOT 1, SLOT 2)                   | 2× (SLOT 1, SLOT 2) — samme             |

Alle andre bagpanelstik (EXPANSION / SFP bugter, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) er identisk med AX Center. Der henvises til [Ch. 4 — AX Center Rear Panel](../ax-center/ch04-connections) for funktion og specifikation af disse stik.

| Ref | Etiket                                        | Forbindelse                                   | Funktion                                                                                                                                                             | Dot                                                                                                                                                                                                                                                       |
| --- | --------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Strøm**                                     | 12 V DC tønde                                 | DC power input. Tilslut den medfølgende eksterne 12 V strømforsyning. Må ikke erstatte med en tredjeparts forsyning. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2   | **EXPANSION**                                 | 2× SFP-bugten                                 | DADLink / MADI optisk udvidelse. Identisk med AX Center.                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3   | **NET 1 / NET 2**                             | 2× RJ45 + SFP bugt                            | Ethernet-kontrolnetværk (100/1000BASE-T) + valgfri SFP-fibre. Identisk med AX Center.                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4   | **THUNDERBOLT 1** (øverst) | USB-C (Thunderbolt 3)      | Primær Thunderbolt 3 forbindelse til computeren.                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5   | **THUNDERBOLT 2** (lavere) | USB-C (Thunderbolt 3)      | Thunderbolt 3 daisy-chain / passthrough.                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6   | **WC/VBB IN**                                 | BNC, 75 Ω.                    | Word ur eller Video Black Burst input.                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7   | **WC OUT**                                    | BNC, 75 Ω.                    | Word clock output.                                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8   | **MADI IN**                                   | BNC, 75 Ω.                    | MADI input (coaxial). AES10 overensstemmende.                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9   | **MADI UD**                                   | BNC, 75 Ω.                    | MADI output (coaxial).                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10  | **ADAT UD 1 / 2**                             | 2× TOSLINK (optisk)        | ADAT Lightpipe udgange. Op til 8 ch ved 44,1/48 kHz; 4 ch ved 88,2/96 kHz (S/MUX).                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11  | **ADAT IN 1 / 2**                             | 2× TOSLINK (optisk)        | ADAT Lightpipe indgange. Samme kanal tæller som ADAT udgange.                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12  | **SLOT 1 / SLOT 2**                           | 2× ekspansionsplads (DB25) | Analog I/O udvidelses slots. Hver accepterer et 8-kanals DAD ekspansionskort.                                                        | —                                                                                                                                                                                                                                                         |

---

## 2.3 LED State Reference

### Ur Reference Lysdioder

| Int. | Ext. | Ære. | Betydning                                                              |
| -------------------- | -------------------- | -------------------- | ---------------------------------------------------------------------- |
| ●                    | ○                    | ○                    | Låst til intern urreference — ur mastertilstand                        |
| ○                    | ●                    | ○                    | Låst til ekstern urreference — urslavetilstand                         |
| ●                    | ●                    | ○                    | Erhvervelse lås til ekstern reference (forbigående) |
| ○                    | ○                    | ●                    | **Ur fejl** — kan ikke låse til valgt reference                        |
| ●                    | ○                    | ●                    | **Intern fejl** — power-cycle; kontakt support hvis vedvarende         |
| Langsom blitz        | —                    | —                    | Firmwareopdatering i gang — sluk ikke                                  |

### Strøm Knap Stater

| Stat         | Betydning                               |
| ------------ | --------------------------------------- |
| Fra          | Enhed slukket                           |
| Stabil       | Enhed tændt for normal drift            |
| Langsom puls | Standby eller nedlukning sekvens i gang |

---

## Krydsreferencer

- [Ch. 4 — Signal Connections](ch04-connections) — Signal niveauer og tilslutningsprocedurer
- [Ch. 6 — Operation](ch06-operation) — Kontrol og visning
- [App. A — Connector Pinouts](appa-connector-pinouts) — Fastgørelsesopgaver
