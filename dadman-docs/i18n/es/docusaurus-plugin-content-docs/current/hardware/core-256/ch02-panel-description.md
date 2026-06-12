---
title: "Capítulo 2 — Descripción del Panel"
sidebar_label: "Ch. 2 — Descripción del Panel"
sidebar_position: 3
---

# Capítulo 2 — Descripción del Panel

> **Producto:** Digital Audio Denmark Core 256

> **Cómo usar este capítulo:** Este capítulo identifica cada control y conector en el núcleo 256. Para obtener niveles de señal y procedimientos de conexión, consulte [Ch. 4 — Conexiones de señal](ch04-connections). Para significados de estado LED, vea [Sección 2.3](#23-led-state-reference).

---

## 2.1 Panel frontal

![Panel frontal del núcleo 256](/img/panel-core256-front.png)
_Figura 2.1 — Panel frontal del núcleo 256._

> **NOTA:** El panel frontal Core 256 proporciona sólo indicadores de estado. No hay conectores de E/S de audio en el panel frontal.

| Ref | Etiqueta                   | Tipo                                     | Función                                                                                                                            | Punto                                                                                                                                                                                                                                                     |
| --- | -------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **DAD**                    | Logo iluminado                           | Iluminación azul; indica encendido                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2   | **Energía**                | Botón de pulsación iluminado             | Inicia la secuencia controlada de encendido/apagado                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3   | **Int.**   | Indicador LED                            | Encender cuando esté bloqueado a la referencia interna del reloj                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4   | **Ext.**   | Indicador LED (verde) | Encender cuando esté bloqueado a la fuente de reloj externa                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5   | **Error.** | Indicador LED (rojo)  | Lit en error de reloj o fallo interno. Vea [Sección 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 Panel de Rear

![Panel trasero del núcleo 256](/img/panel-core256-rear.png)
_Figura 2.2 — Panel trasero de 256. Los callouts numerados corresponden a la tabla de abajo._

El panel trasero Core 256 lleva el mismo conjunto de conector que el Centro AX con las siguientes diferencias:

| Diferencia           | Centro AX                                                | Núcleo 256                                                             |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| Potencia             | IEC C14 mains inlet (100–240 V AC)    | Conector de cañón de 12 V DC (requiere PSU externo) |
| Monitorear salidas   | 2× TRS estéreo (MONITOR 1, MONITOR 2) | No presente                                                            |
| Ranuras de expansión | 2× (SLOT 1, SLOT 2)                   | 2× (SLOT 1, SLOT 2) — el mismo                      |

Todos los demás conectores de panel posterior (EXPANSION / SFP bays, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) son idénticos al Centro AX. Consulte [Ch. 4 — Panel de Oso del Centro AX](../ax-center/ch04-connections) para la función y la especificación de esos conectores.

| Ref | Etiqueta                                        | Conector                                         | Función                                                                                                                                                                    | Punto                                                                                                                                                                                                                                                     |
| --- | ----------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Energía**                                     | Cañón de 12 V DC                                 | Entrada de energía DC. Conecte la fuente de alimentación externa de 12 V. No sustituya por un suministro de terceros.      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2   | **EXPANSIÓN**                                   | Bahía SFP 2×                                     | Expansión óptica DADLink / MADI. Identical to AX Center.                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3   | **NET 1 / NET 2**                               | 2× RJ45 + bahía SFP                              | Red de control Ethernet (100/1000BASE-T) + fibra SFP opcional. Identical to AX Center.                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4   | **THUNDERBOLT 1** (superior) | USB-C (Trueno 3)              | Conexión principal de Thunderbolt 3 al ordenador.                                                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5   | **THUNDERBOLT 2** (inferior) | USB-C (Trueno 3)              | Thunderbolt 3 daisy-chain / paseo.                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6   | **WC/VBB IN**                                   | BNC, 75                                          | Entrada de reloj de palabras o de Explosión de Video Negro.                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7   | **APAGAR WC**                                   | BNC, 75                                          | Salida de reloj.                                                                                                                                           | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8   | **MADI IN**                                     | BNC, 75                                          | MADI input (coaxial). AES10 compatible.                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9   | **MADI OUT**                                    | BNC, 75                                          | MADI output (coaxial).                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10  | **AÑADIR 1 / 2**                                | 2× TOSLINK (óptico)           | ADAT salidas de tuberías ligeras. Hasta 8 ch a 44.1/48 kHz; 4 ch a 88.2/96 kHz (S/MUX). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11  | **ADAT EN 1 / 2**                               | 2× TOSLINK (óptico)           | ADAT entradas de tuberías ligeras. El mismo número de canales que las salidas ADAT.                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12  | **SLOT 1 / SLOT 2**                             | 2× ranura de expansión (DB25) | Ranuras analógicas de expansión de E/S. Cada una acepta una tarjeta de expansión DAD de 8 canales.                                         | —                                                                                                                                                                                                                                                         |

---

## 2.3 referencia de estado LED

### Reloj de referencia LEDs

| Ent. | Ext. | Err. | Comenzando                                                                                |
| -------------------- | -------------------- | -------------------- | ----------------------------------------------------------------------------------------- |
| ●                    | ○                    | ○                    | Bloqueado a referencia interna del reloj — modo maestro del reloj                         |
| ○                    | ●                    | ○                    | Bloqueado a referencia de reloj externo — modo de esclavizado de reloj                    |
| ●                    | ●                    | ○                    | Adquiriendo bloqueo a referencia externa (transitoria)                 |
| ○                    | ○                    | ●                    | **Error del reloj** — no se puede bloquear a la referencia seleccionada                   |
| ●                    | ○                    | ●                    | **Defecto interno** — ciclo de energía; póngase en contacto con soporte si es persistente |
| Parpadeo lento       | —                    | —                    | Actualización del firmware en progreso — no apagar                                        |

### Estados del botón de encendido

| Estado      | Comenzando                                |
| ----------- | ----------------------------------------- |
| Apagado     | Unidad apagada                            |
| Fiel        | Unidad encendida, operación normal        |
| Pulso lento | Secuencia de espera o apagado en progreso |

---

## Referencias cruzadas

- [Ch. 4 — Conexiones de señal](ch04-connections) — Niveles de señal y procedimientos de conexión
- [Ch. 6 — Operación](ch06-operation) — Operación de controles y visualización
- [App. A — Pineos de Conector](appa-connector-pinouts) — Asignaciones de Pin
