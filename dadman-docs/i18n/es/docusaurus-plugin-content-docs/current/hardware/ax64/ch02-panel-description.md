---
title: "Capítulo 2 — Descripción del Panel"
sidebar_label: "Ch. 2 — Descripción del Panel"
sidebar_position: 3
---

# Capítulo 2 — Descripción del Panel

> **Producto:** Digital Audio Dinamarca AX 64

> **Cómo usar este capítulo:** Este capítulo identifica cada control y conector en la AX 64. Para obtener niveles de señal y procedimientos de conexión, consulte [Ch. 4 — Conexiones de señal](ch04-connections). Para significados de estado LED, vea [Sección 2.3](#23-led-state-reference).

---

## 2.1 Panel frontal

![Panel frontal AX 64](/img/panel-ax64-front.png)
_Figura 2.1 — Panel frontal AX 64. Los callouts numerados corresponden a la tabla de abajo._

> **NOTA:** El panel frontal AX 64 sólo proporciona indicadores de estado. Todas las conexiones de E/S de audio se realizan en el panel trasero (Figura 2.2).

| Ref | Etiqueta                   | Tipo                                     | Función                                                                                                                                                                | Punto                                                                                                                                                                                                                                                     |
| --- | -------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **DAD**                    | Logo iluminado                           | Iluminación azul; indica encendido                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2   | **Energía**                | Botón de pulsación iluminado             | Inicia la secuencia controlada de encendido/apagado                                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3   | **Int.**   | Indicador LED                            | Encender cuando esté bloqueado a la referencia interna del reloj                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4   | **Ext.**   | Indicador LED (verde) | Encender cuando esté bloqueado a la fuente de reloj externa                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5   | **Error.** | Indicador LED (rojo)  | Lit en error de reloj o fallo interno. Vea [Sección 2.3](#23-led-state-reference).                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6   | **Ventiladores**           | Ventilation grille                       | Puerto de escape para el ventilador interno enfriado. Manténgase alejado de las obstrucciones para mantener un flujo de aire adecuado. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#EF4444'}}></span> |

---

## 2.2 Panel de Rear

![Panel trasero AX 64](/img/panel-ax64-rear.png)
_Figura 2.2 — panel trasero AX 64. Los callouts numerados corresponden a la tabla de abajo._

| Ref    | Etiqueta                                        | Conector                               | Función                                                                                                                                                                                                                                                                                                                                                                                                                         | Punto                                                                                                                                                                                                                                                     |
| ------ | ----------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | **Energía**                                     | Entrada IEC C14                        | Entrada principal de poder. 100–240 V AC, 50/60 Hz, auto-ranging.                                                                                                                                                                                                                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 1a     | _(Opcional)_                 | Entrada IEC C14                        | Entrada de alimentación redundante (opción instalada en fábrica).                                                                                                                                                                                                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 2, 3   | **EXPANSIÓN**                                   | Bahía SFP 2×                           | Expansión óptica DADLink / MADI. Acepta módulos SFP para DADLink o MADI I/O óptico.                                                                                                                                                                                                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 4, 5   | **NET 1 / NET 2**                               | 2× RJ45 + bahía SFP                    | Red de control Ethernet. Conecte NET 1 o NET 2 a la red de control DADman.                                                                                                                                                                                                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 6      | **THUNDERBOLT 1** (superior) | USB-C (Trueno 3)    | Conexión principal de Thunderbolt 3 al ordenador.                                                                                                                                                                                                                                                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 7      | **THUNDERBOLT 2** (inferior) | USB-C (Trueno 3)    | Thunderbolt 3 daisy-chain / paseo.                                                                                                                                                                                                                                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 8      | **WC IN**                                       | BNC, 75                                | Entrada de reloj.                                                                                                                                                                                                                                                                                                                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 9      | **APAGAR WC**                                   | BNC, 75                                | Salida de reloj.                                                                                                                                                                                                                                                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 10     | **MADI IN**                                     | BNC, 75                                | Entrada coaxial MADI. AES10 compatible.                                                                                                                                                                                                                                                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 11     | **MADI OUT**                                    | BNC, 75                                | Salida coaxial MADI.                                                                                                                                                                                                                                                                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 12, 14 | **AÑADIR 1 / 2**                                | 2× TOSLINK (óptico) | ADAT salidas de tuberías ligeras. Hasta 8 ch a 44.1/48 kHz; 4 ch a 88.2/96 kHz (S/MUX).                                                                                                                                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 13, 15 | **ADAT EN 1 / 2**                               | 2× TOSLINK (óptico) | ADAT entradas de tuberías ligeras.                                                                                                                                                                                                                                                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 16–23  | **Ranura 1 – Ranura 8**                         | Hasta 8× DB25                          | Ranuras analógicas de tarjetas de expansión. Cada ranura acepta una tarjeta de expansión DAD de 8 canales (A/D, D/A o E/S digital). La numeración de la ranura corre de derecha a izquierda como se ve desde la parte trasera (la ranura 1 está a la derecha). El tipo de tarjeta y la ruta están configurados en DADman. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **NOTICE — Ranuras de tarjetas de expansión:** Ranuras despobladas están cubiertas por una placa blanking. No retire las placas de la clasificación — son requeridas para un flujo de aire correcto. Las tarjetas de expansión sólo deben instalarse o eliminarse con la unidad apagada.

> **NOTICE — Convención de numeración de las ranuras:** Los números de las ranuras son vistos por encima de cada ranura y corren de la derecha (ranura 1) a la izquierda (ranura 8) como se ve desde la parte trasera de la unidad. Verifique las asignaciones de ranuras en DADman cuando conecte por primera vez una unidad con tarjetas de expansión.

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
