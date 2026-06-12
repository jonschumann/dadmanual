---
title: "Kapitel 2 — Reference For Kontrol"
sidebar_label: "Ch. 2 — Reference For Kontrol"
sidebar_position: 3
---

# Kapitel 2 — Reference For Kontrol

> **Produkt:** Digital Audio Denmark MOM (Monitor Operating Module)

> **Sådan bruger du dette kapitel:** Dette kapitel identificerer hver kontrol på MOM forside. MOM indeholder ingen lydkredsløb - lydsignaler dirigeres ikke gennem det. For konfigurationsprocedurer se [Ch. 6 — Operation](ch06-operation).

---

## 2.1 Kontrolreference

![MOM kontrol ansigt](/img/panel-mom.png)
_Figur 2.1 — MOM kontrol ansigt. Nummererede callouts svarer til nedenstående referencetabel._

| Ref | Etiket                      | Type                                    | Funktion                                                                                                                                                                                                                                                                                                  | Dot                                                                                                                                                                                                                                                       |
| --- | --------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Spkr. 1** | Belyst trykknap                         | Vælger højttaler output sæt 1 (f.eks. hovedskærme). Tilsvarende til en højttaler output sæt konfigureret i den aktive skærm profil i DADman.                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2   | **Spkr. 2** | Belyst trykknap                         | Vælger højttaler output sæt 2 (fx, nær-felt skærme).                                                                                                                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 3   | **Spkr. 3** | Belyst trykknap                         | Vælger højttaler output sæt 3 (fx, oversættelse højttaler eller Atmos seng).                                                                                                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 4   | **Src. A**  | Belyst trykknap                         | Vælger overvågningskilde A som defineret i den aktive Overvågningsprofil.                                                                                                                                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5   | **Src. B**  | Belyst trykknap                         | Vælger overvågningskilde B.                                                                                                                                                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#C2410C'}}></span> |
| 6   | **Src. C**  | Belyst trykknap                         | Vælger overvågningskilde C.                                                                                                                                                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |
| 7   | **Lag**                     | Belyst trykknap                         | Skifter MOM mellem kontrollag. Tryk på lag-cyklusser gennem konfigurerede lag, tildele Spkr. og Src. knapper.                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8   | **Status LED'er 1–4**       | LED indikatorer                         | Angiv status for de fire aktive overvågningslag eller forudindstillinger. Belyses når det tilsvarende lag er aktivt.                                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#4F46E5'}}></span> |
| 9   | **Stat.**   | LED-indikator (grøn) | MOM er forbundet til AX Center / AX 64 og kommunikerer korrekt. Blinker under initialisering. Slået fra, når de er afbrudt.                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#A78BFA'}}></span> |
| 10  | **TB**                      | Tryk-knap                               | Talkback. Ruter talkback-mikrofonen (konfigureret i DADman) ind i talentfeeds mens den holdes.                                                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11  | **Ref**                     | Tryk-knap                               | Referenceniveau. Slår skærmens udgang til det kalibrerede referenceniveau, der er defineret i den aktive monitorprofil. Tryk igen for at vende tilbage til det forrige niveau.                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#16A34A'}}></span> |
| 12  | **Klip**                    | Belyst trykknap                         | Klipper (mutes) monitor output. Oplyser rødt når aktiv.                                                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 13  | **Dim**                     | Belyst trykknap                         | Attenuates monitor output ved Dim beløb konfigureret i den aktive skærm profil (typisk -20 dB). Oplyser rav når aktiv.                                                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 14  | **Niveau**                  | Roterende encoder med LED-ring          | Master monitor niveau kontrol. Drej for at justere output-niveauet. LED-ringen angiver den aktuelle niveauposition i forhold til referenceniveauet. Område: ca. -40 dB til +6 dB i forhold til reference. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |

> **BEMÆRKNING — MOM og Overvåg profiler:** Funktionerne i Spkr., Src og Layer knapperne bestemmes af Overvågningsprofilen indlæst i DADman. Indstil Overvågningsprofiler før du bruger MOM i en session. Se [Ch. 8 — Avancerede Funktioner, Afsnit 8.1 — Overvågningsprofiler].

> **BEMÆRKNING — MOM-forbindelse:** MOM forbinder til AX Center eller AX 64 via USB-C på bagsiden af værtsenheden. Det forbinder ikke direkte til computerens USB-port. DADman skal køre for at MOM kan fungere.

---

## 2.3 LED State Reference

### MOM Status LED'er

| Stat. LED               | Betydning                                                     |
| --------------------------------------- | ------------------------------------------------------------- |
| Stabil grøn                             | MOM er forbundet og kommunikerer med værten AX Center / AX 64 |
| Langsom blitz (grøn) | MOM initialiserer eller venter på, at DADman svarer           |
| Fra                                     | MOM er ikke tilsluttet, eller værtsenheden er slukket         |

> **BEMÆRK:** Belysning af MOM-knap (Cut = rød, Dim = rav, Spkr./Src./Layer = hvid) er beskrevet i [Ch. 6 — Drift].

---

## Krydsreferencer

- [Ch. 6 — Operation](ch06-operation) — Overvågningsprofilopsætning; MOM-konfiguration
- [Ch. 8 — Avancerede Funktioner](/advanced-features) — Overvågningsprofiler
