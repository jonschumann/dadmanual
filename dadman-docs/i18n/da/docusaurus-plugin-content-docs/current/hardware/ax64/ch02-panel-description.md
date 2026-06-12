---
title: "Kapitel 2 — Beskrivelse Af Panelet"
sidebar_label: "Ch. 2 — Stykkebeskrivelse"
sidebar_position: 3
---

# Kapitel 2 — Beskrivelse Af Panelet

> **Produkt:** Digital Audio Denmark AX 64

> **Sådan bruger du dette kapitel:** Dette kapitel identificerer hver kontrol og stik på AX 64. For signalniveauer og tilslutningsprocedurer, se [Ch. 4 — Signal Connections](ch04-connections). For betydninger af LED-tilstand, se [afsnit 2.3](#23-led-state-reference).

---

## 2.1 Forreste Panel

![AX 64 frontpanel](/img/panel-ax64-front.png)
_Figur 2.1 — AX 64 frontpanel. Nummererede callouts svarer til nedenstående tabel._

> **BEMÆRK:** AX 64 frontpanelet giver kun statusindikatorer. Alle audio I/O-forbindelser er lavet på bagpanelet (figur 2.2).

| Ref | Etiket                   | Type                                    | Funktion                                                                                                                                             | Dot                                                                                                                                                                                                                                                       |
| --- | ------------------------ | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **DAD**                  | Belyst logo                             | Blå belysning; angiver tænd/sluk                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2   | **Strøm**                | Belyst trykknap                         | Initierer kontrolleret power-on/shutdown sekvens                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3   | **Int.** | LED indikator                           | Lit når låst til intern ur reference                                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4   | **Ext.** | LED-indikator (grøn) | Lit når låst til ekstern urkilde                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5   | **Err.** | LED-indikator (rød)  | Lit på ur fejl eller intern fejl. Se [Afsnit 2.3](#23-led-state-reference).                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6   | **Ventilatorvent**       | Ventilation grille                      | Udstødningsport til den interne køleventilator. Hold fri af forhindringer for at opretholde tilstrækkelig luftstrøm. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#EF4444'}}></span> |

---

## 2.2 Bagpanel

![AX 64 bagpanel](/img/panel-ax64-rear.png)
_Figur 2.2 — AX 64 bagpanel. Nummererede callouts svarer til nedenstående tabel._

| Ref    | Etiket                                        | Forbindelse                              | Funktion                                                                                                                                                                                                                                                                                                                                              | Dot                                                                                                                                                                                                                                                       |
| ------ | --------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | **Strøm**                                     | IEC C14 indløb                           | Strømforsyningen til nettet. 100–240 V AC, 50/60 Hz, auto-ranging.                                                                                                                                                                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 1a     | _(Valgfrit)_               | IEC C14 indløb                           | Strømforsyning til redundant indtag (fabrikstilpasset indstilling).                                                                                                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2, 3   | **EXPANSION**                                 | 2× SFP-bugten                            | DADLink / MADI optisk udvidelse. Accepterer SFP-moduler for DADLink eller optisk MADI I/O.                                                                                                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 4, 5   | **NET 1 / NET 2**                             | 2× RJ45 + SFP bugt                       | Ethernet-kontrolnetværk. Tilslut NET 1 eller NET 2 til DADman kontrolnetværket.                                                                                                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 6      | **THUNDERBOLT 1** (øverst) | USB-C (Thunderbolt 3) | Primær Thunderbolt 3 forbindelse til computeren.                                                                                                                                                                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 7      | **THUNDERBOLT 2** (lavere) | USB-C (Thunderbolt 3) | Thunderbolt 3 daisy-chain / passthrough.                                                                                                                                                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 8      | **WC IN**                                     | BNC, 75 Ω.               | Word clock input.                                                                                                                                                                                                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 9      | **WC OUT**                                    | BNC, 75 Ω.               | Word clock output.                                                                                                                                                                                                                                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 10     | **MADI IN**                                   | BNC, 75 Ω.               | MADI koaksial input. AES10 overensstemmende.                                                                                                                                                                                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 11     | **MADI UD**                                   | BNC, 75 Ω.               | MADI koaksial output.                                                                                                                                                                                                                                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 12, 14 | **ADAT UD 1 / 2**                             | 2× TOSLINK (optisk)   | ADAT Lightpipe udgange. Op til 8 ch ved 44,1/48 kHz; 4 ch ved 88,2/96 kHz (S/MUX).                                                                                                                                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 13, 15 | **ADAT IN 1 / 2**                             | 2× TOSLINK (optisk)   | ADAT Lightpipe indgange.                                                                                                                                                                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 16–23  | **Slot 1 – Slot 8**                           | Op til 8 × DB25                          | Analoge ekspansionskort slots. Hver slot accepterer en 8-kanals DAD ekspansionskort (A/D, D/A eller digital I/O). Slot nummerering kører højre mod venstre som set fra bagsiden (lot 1 er højre). Korttype og routing er konfigureret i DADman. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **BEMÆRKNING — Ekspansionskortpladser:** Ubefolkede pladser er dækket af en blankplade. Fjern ikke blanke plader - de er nødvendige for korrekt luftstrøm. Ekspansionskort må kun installeres eller fjernes med slukket enhed.

> **BEMÆRKNING — Slot nummerering konvention:** Slotnumre er silkscreenet over hver slot og kører fra højre (lot 1) til venstre (lot 8) som set fra den bageste del af enheden. Kontroller slotopgaver i DADman, når du først forbinder en enhed med ekspansionskort.

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
