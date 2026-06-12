---
title: "Kapitel 2 — Beskrivelse Af Panelet"
sidebar_label: "Ch. 2 — Stykkebeskrivelse"
sidebar_position: 3
---

# Kapitel 2 — Beskrivelse Af Panelet

> **Produkt:** Digital Audio Denmark AX Center

> **Sådan bruger du dette kapitel:** Dette kapitel identificerer hver kontrol og stik på AX Center. For signalniveauer og tilslutningsprocedurer, se [Ch. 4 — Signal Connections](ch04-connections). For betydninger af LED-tilstand, se [afsnit 2.3](#23-led-state-reference).

---

## 2.1 Forreste Panel

![AX Center frontpanel](/img/panel-ax-center-front.png)
_Figur 2.1 — AX Center frontpanel. Nummererede callouts svarer til nedenstående tabel._

| Ref | Etiket                   | Type                                       | Funktion                                                                                                                                                                                                  | Dot                                                                                                                                                                                                                                                       |
| --- | ------------------------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **DAD**                  | Belyst logo                                | Blå belysning; angiver tænd/sluk                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2   | **Strøm**                | Belyst trykknap                            | Initierer kontrolleret power-on/shutdown sekvens. Hold i 5 s for at tvinge slukket.                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3   | **Int.** | LED indikator                              | Lit når enheden er låst til sin egen interne ur reference                                                                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4   | **Ext.** | LED-indikator (grøn)    | Lit når enheden er låst til en ekstern ur kilde (ord ur, MADI, ADAT, eller Dante)                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5   | **Err.** | LED-indikator (rød)     | Lit når en ur fejl, synkronisering tab eller intern fejl er opdaget. Se [Afsnit 2.3](#23-led-state-reference).                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6   | **Mic/Inst 1**           | Combo XLR/TRS (låsning) | Mic/line/instrument input, kanal 1. Accepterer XLR (afbalanceret mic/line) eller 6.35 mm TRS/TS (linje/instrument). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 7   | **P48**                  | LED indikator                              | Lit når phantom power (+48 V) er aktiv på denne indgangskanal                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#84CC16'}}></span> |
| 8   | **Mic**                  | LED indikator                              | Lit når input er konfigureret som en mikrofon input                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D946EF'}}></span> |
| 9   | **Inst**                 | LED indikator                              | Lit når input er konfigureret som en high-impedance instrument input                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F43F5E'}}></span> |
| 10  | **Mic/Inst 2**           | Combo XLR/TRS (låsning) | Mic/line/instrument input, kanal 2. Samme specifikation som kanal 1.                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11  | **HP 1**                 | 6.35 mm TRS-stik           | Hovedtelefonudgang 1. Niveau kontrolleret via DADman eller MOM.                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 12  | **HP 2**                 | 6.35 mm TRS-stik           | Hovedtelefonudgang 2. Niveau kontrolleret via DADman eller MOM.                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |

---

## 2.2 Bagpanel

![AX Center bagpanel](/img/panel-ax-center-rear.png)
_Figur 2.2 — AX Center bagpanel. Nummererede callouts svarer til nedenstående tabel._

| Ref | Etiket                                         | Forbindelse                                   | Funktion                                                                                                                                                                                                                                                                                                                               | Dot                                                                                                                                                                                                                                                       |
| --- | ---------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Strøm**                                      | IEC C14 indløb                                | Strømforsyningen til nettet. 100–240 V AC, 50/60 Hz, auto-ranging intern PSU. Tilslut et standard IEC C13 strømkabel.                                                                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2   | **EXPANSION** (øverste par) | 2× SFP-bugten                                 | DADLink / MADI optisk udvidelse. Accepterer SFP-moduler til tilslutning til andre DAD-enheder via aktiv optisk fiber (DADLink-kabel) eller til optisk MADI I/O.                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3   | **NET 1 / NET 2**                              | 2× RJ45 + SFP bugt                            | Ethernet-kontrolnet (NET 1, NET 2: 100/1000BASE-T). SFP-bugten under NET 1/NET 2 accepterer et SFP-modul til valgfri fibernetværksforbindelse. Tilslut NET 1 eller NET 2 til dit DADman kontrolnetværk - kun én port er nødvendig for normal drift. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4   | **THUNDERBOLT 1** (øverst)  | USB-C (Thunderbolt 3)      | Primær Thunderbolt 3 forbindelse til computeren. Tilslut denne port til computerens Thunderbolt 3 eller USB4 port ved hjælp af et 20 Gbps-ratet kabel. Carries op til 256 bi-directional audio kanaler ved standard sample rater.                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5   | **THUNDERBOLT 2** (lavere)  | USB-C (Thunderbolt 3)      | Thunderbolt 3 daisy-chain / passthrough. Forbind til næste Thunderbolt enhed i kæden.                                                                                                                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6   | **WC/VBB IN**                                  | BNC, 75 Ω.                    | Word ur eller Video Black Burst input. Accepterer ord ur (1×, 256×, eller video sync formater). Engage 75 Ω opsigelse på den sidste enhed i en ord ur kæde.                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7   | **WC OUT**                                     | BNC, 75 Ω.                    | Word clock output. Udsender enhedens aktuelle synkroniseringsreference som et ordur signal.                                                                                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8   | **MADI IN**                                    | BNC, 75 Ω.                    | MADI input (coaxial). Accepterer AES10 MADI på 56- eller 64-kanal frame format. Ved 96 kHz er maksimal kanaltælling 32.                                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9   | **MADI UD**                                    | BNC, 75 Ω.                    | MADI output (coaxial). Transmits MADI på den konfigurerede ramme format og samplingfrekvens.                                                                                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10  | **ADAT UD 1 / 2**                              | 2× TOSLINK (optisk)        | ADAT Lightpipe udgange. Op til 8 kanaler pr. port ved 44,1/48 kHz; 4 kanaler pr. port ved 88,2/96 kHz (S/MUX).                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11  | **ADAT IN 1 / 2**                              | 2× TOSLINK (optisk)        | ADAT Lightpipe indgange. Samme kanal tæller som ADAT udgange.                                                                                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12  | **OVERVÅGNING 1**                              | 2 × TRS 6,35 mm (L/R)      | Balanceret stereo monitor output 1. Niveau kontrolleret via DADman eller MOM.                                                                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 13  | **OVERVÅGNING 2**                              | 2 × TRS 6,35 mm (L/R)      | Balanceret stereo monitor output 2. Niveau kontrolleret via DADman eller MOM.                                                                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 14  | **SLOT 1 / SLOT 2**                            | 2× ekspansionsplads (DB25) | Analog I/O udvidelses slots. Hver slot accepterer en DAD ekspansionskort giver 8 kanaler af A/D, D/A eller digital I/O. Korttype og kanal tildeling er konfigureret i DADman.                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **BEMÆRKNING — Krav til Thunderbolt kabel:** Thunderbolt 3-forbindelsen kræver et kabel på 20 Gbps eller højere. Standard-USB-C-kabler er ikke vurderet til Thunderbolt 3 hastigheder og fungerer ikke pålideligt. Brug kablet leveres med enheden eller en certificeret Thunderbolt 3 / Thunderbolt 4 kabel.

> **BEMÆRKNING — Word clock afslutning:** WC/VBB IN porten skal afsluttes (75 Ω), når AX Center er den sidste enhed i en ord ur kæde. Slutkontakten er placeret ved siden af BNC-stikket.

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
