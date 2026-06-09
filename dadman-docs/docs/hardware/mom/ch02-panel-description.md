---
title: "Chapter 2 — Controls Reference"
sidebar_label: "Ch. 2 — Controls Reference"
sidebar_position: 3
---
# Chapter 2 — Controls Reference

> **Product:** Digital Audio Denmark MOM (Monitor Operating Module)

> **How to use this chapter:** This chapter identifies every control on the MOM front face. The MOM contains no audio circuitry — audio signals are not routed through it. For configuration procedures see [Ch. 6 — Operation](ch06-operation).

---

## 2.1 Controls Reference

![MOM control face](/img/panel-mom.png)
*Figure 2.1 — MOM control face. Numbered callouts correspond to the reference table below.*

| Ref | Label | Type | Function | Dot |
|-----|-------|------|----------|-----|
| 1 | **Spkr. 1** | Illuminated push-button | Selects speaker output set 1 (e.g., main monitors). Corresponds to a speaker output set configured in the active Monitor Profile in DADman. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#0891B2'}}></span> |
| 2 | **Spkr. 2** | Illuminated push-button | Selects speaker output set 2 (e.g., near-field monitors). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#0D9488'}}></span> |
| 3 | **Spkr. 3** | Illuminated push-button | Selects speaker output set 3 (e.g., translation speaker or Atmos bed). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#1D4ED8'}}></span> |
| 4 | **Src. A** | Illuminated push-button | Selects monitoring source A as defined in the active Monitor Profile. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#D97706'}}></span> |
| 5 | **Src. B** | Illuminated push-button | Selects monitoring source B. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#C2410C'}}></span> |
| 6 | **Src. C** | Illuminated push-button | Selects monitoring source C. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#CA8A04'}}></span> |
| 7 | **Layer** | Illuminated push-button | Switches the MOM between control layers. Pressing Layer cycles through configured layers, reassigning Spkr. and Src. buttons. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#7C3AED'}}></span> |
| 8 | **Status LEDs 1–4** | LED indicators | Indicate the status of the four active monitoring layers or presets. Illuminated when the corresponding layer is active. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#4F46E5'}}></span> |
| 9 | **Stat.** | LED indicator (green) | MOM is connected to the AX Center / AX 64 and communicating correctly. Flashes during initialisation. Off when disconnected. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#A78BFA'}}></span> |
| 10 | **TB** | Push-button | Talkback. Routes the talkback microphone (configured in DADman) into the talent feeds while held. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#DC2626'}}></span> |
| 11 | **Ref** | Push-button | Reference level. Switches the monitor output to the calibrated reference level defined in the active Monitor Profile. Press again to return to the previous level. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#16A34A'}}></span> |
| 12 | **Cut** | Illuminated push-button | Cuts (mutes) the monitor output. Illuminates red when active. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#9333EA'}}></span> |
| 13 | **Dim** | Illuminated push-button | Attenuates the monitor output by the Dim amount configured in the active Monitor Profile (typically −20 dB). Illuminates amber when active. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#456678'}}></span> |
| 14 | **Level** | Rotary encoder with LED ring | Master monitor level control. Turn to adjust the output level. The LED ring indicates the current level position relative to the reference level. Range: approximately −40 dB to +6 dB relative to reference. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:'#1E293B'}}></span> |

> **NOTICE — MOM and Monitor Profiles:** The functions of the Spkr., Src., and Layer buttons are determined by the Monitor Profile loaded in DADman. Configure Monitor Profiles before using the MOM in a session. See [Ch. 8 — Advanced Features, Section 8.1 — Monitor Profiles].

> **NOTICE — MOM connectivity:** The MOM connects to the AX Center or AX 64 via USB-C on the rear of the host unit. It does not connect directly to the computer's USB port. DADman must be running for the MOM to function.

---

## 2.3 LED State Reference

### MOM Status LEDs

| Stat. LED | Meaning |
|-----------|---------|
| Steady green | MOM is connected and communicating with the host AX Center / AX 64 |
| Slow flash (green) | MOM is initialising or waiting for DADman to respond |
| Off | MOM is not connected, or the host unit is powered off |

> **NOTICE:** MOM button illumination states (Cut = red, Dim = amber, Spkr./Src./Layer = white) are described in [Ch. 6 — Operation].

---

## Cross-References

- [Ch. 6 — Operation](ch06-operation) — Monitor Profile setup; MOM configuration
- [Ch. 8 — Advanced Features](ch08-advanced-features) — Monitor Profiles
