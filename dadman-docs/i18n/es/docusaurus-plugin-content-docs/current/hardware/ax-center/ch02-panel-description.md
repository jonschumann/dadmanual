---
title: "Capítulo 2 — Descripción del Panel"
sidebar_label: "Ch. 2 — Descripción del Panel"
sidebar_position: 3
---

# Capítulo 2 — Descripción del Panel

> **Producto:** Centro Digital Audio Dinamarca AX

> **Cómo usar este capítulo:** Este capítulo identifica cada control y conector en el Centro AX. Para obtener niveles de señal y procedimientos de conexión, consulte [Ch. 4 — Conexiones de señal](ch04-connections). Para significados de estado LED, vea [Sección 2.3](#23-led-state-reference).

---

## 2.1 Panel frontal

![Panel frontal central AX](/img/panel-ax-center-front.png)
_Figura 2.1 — Panel frontal central AX. Los callouts numerados corresponden a la tabla de abajo._

| Ref | Etiqueta                   | Tipo                                       | Función                                                                                                                                                                                           | Punto                                                                                                                                                                                                                                                     |
| --- | -------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **DAD**                    | Logo iluminado                             | Iluminación azul; indica encendido                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2   | **Energía**                | Botón de pulsación iluminado               | Inicia la secuencia controlada de encendido/apagado. Mantenga pulsado durante 5 s para apagar el apagado.                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3   | **Int.**   | Indicador LED                              | Encender cuando la unidad está bloqueada a su propia referencia interna de reloj                                                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4   | **Ext.**   | Indicador LED (verde)   | Enciende cuando la unidad está bloqueada a una fuente externa de reloj (palabra reloj, MADI, ADAT o Dante)                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5   | **Error.** | Indicador LED (rojo)    | Enciende cuando se detecta un error de reloj, la pérdida de sincronización o un fallo interno. Vea [Sección 2.3](#23-led-state-reference).        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |
| 6   | **Micrófono/Inst 1**       | Combo XLR/TRS (bloqueo) | Entrada de micrófono/línea/instrumento, canal 1. Acepta XLR (micrófono balanceado) o TRS/TS de 6,35 mm (línea/instrumento). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 7   | **P48**                    | Indicador LED                              | Encender cuando la potencia fantasma (+48 V) está activa en este canal de entrada                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#84CC16'}}></span> |
| 8   | **Michael**                | Indicador LED                              | Enciende cuando la entrada está configurada como entrada de micrófono                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D946EF'}}></span> |
| 9   | **Instancia**              | Indicador LED                              | Encender cuando la entrada está configurada como una entrada de instrumentos de alta impedancia                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F43F5E'}}></span> |
| 10  | **Micrófono/Inst 2**       | Combo XLR/TRS (bloqueo) | Entrada de micrófono/línea/instrumento, canal 2. La misma especificación que el canal 1.                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 11  | **HP 1**                   | Jack TRS 6,35 mm                           | Salida de auriculares 1. Nivel controlado a través de DADman o MOM.                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |
| 12  | **HP 2**                   | Jack TRS 6,35 mm                           | Salida de auriculares 2. Nivel controlado a través de DADman o MOM.                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#9333EA'}}></span> |

---

## 2.2 Panel de Rear

![Panel trasero del Centro AX (/img/panel-ax-center-rear.png)
_Figura 2.2 — panel trasero del Centro AX. Los callouts numerados corresponden a la tabla de abajo._

| Ref | Etiqueta                                        | Conector                                                | Función                                                                                                                                                                                                                                                                                                                                                   | Punto                                                                                                                                                                                                                                                     |
| --- | ----------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Energía**                                     | Entrada IEC C14                                         | Entrada principal de poder. 100–240 V AC, 50/60 Hz, PSU interna auto-rango. Conecte un cable IEC C13 estándar.                                                                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2   | **EXPANSION** (par superior) | Bahía SFP 2×                                            | Expansión óptica DADLink / MADI. Acepta módulos SFP para la conexión a otras unidades DAD mediante fibra óptica activa (cabina DADLink) o para MADI óptico.                                                                                                                                            | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3   | **NET 1 / NET 2**                               | 2× RJ45 + bahía SFP                                     | Red de control de Ethernet (NET 1, NET 2: 100/1000BASE-T). La Bahía SFP debajo de NET 1/NET 2 acepta un módulo SFP para conexión opcional a la red de fibras. Conecte NET 1 o NET 2 a su red de control DADman — sólo se necesita un puerto para una operación normal. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4   | **THUNDERBOLT 1** (superior) | USB-C (Trueno 3)                     | Conexión principal de Thunderbolt 3 al ordenador. Conecte este puerto al puerto de Thunderbolt 3 o USB4 del ordenador con un cable de 20 Gbps. Carries hasta 256 canales de audio bidireccionales a tarifas estándar de muestra.                                                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5   | **THUNDERBOLT 2** (inferior) | USB-C (Trueno 3)                     | Thunderbolt 3 daisy-chain / paseo. Conecta al siguiente dispositivo Thunderbolt de la cadena.                                                                                                                                                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6   | **WC/VBB IN**                                   | BNC, 75                                                 | Entrada de reloj de palabras o de Explosión de Video Negro. Acepta el reloj de la palabra (1×, 256×, o los formatos de sincronización de vídeo). Introducir la terminación de 75 en el último dispositivo en una palabra cadena de reloj.                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7   | **APAGAR WC**                                   | BNC, 75                                                 | Salida de reloj. Sale la referencia de sincronización actual de la unidad como una palabra señal de reloj.                                                                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8   | **MADI IN**                                     | BNC, 75                                                 | MADI input (coaxial). Acepta AES10 MADI en formato de marco de 56 o 64 canales. A 96 kHz, el número máximo de canales es de 32.                                                                                                                                                        | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9   | **MADI OUT**                                    | BNC, 75                                                 | MADI output (coaxial). Transmits MADI al formato de fotograma configurado y velocidad de muestreo.                                                                                                                                                                                                     | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10  | **AÑADIR 1 / 2**                                | 2× TOSLINK (óptico)                  | ADAT salidas de tuberías ligeras. Hasta 8 canales por puerto a 44,1/48 kHz; 4 canales por puerto a 88,2/96 kHz (S/MUX).                                                                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11  | **ADAT EN 1 / 2**                               | 2× TOSLINK (óptico)                  | ADAT entradas de tuberías ligeras. El mismo número de canales que las salidas ADAT.                                                                                                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12  | **MONITOR 1**                                   | 2× TRS 6.35 mm (L/R) | Salida del monitor estéreo equilibrado 1. Nivel controlado a través de DADman o MOM.                                                                                                                                                                                                                                      | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 13  | **MONITOR 2**                                   | 2× TRS 6.35 mm (L/R) | Salida balanceada del monitor estéreo 2. Nivel controlado a través de DADman o MOM.                                                                                                                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#DC2626'}}></span> |
| 14  | **SLOT 1 / SLOT 2**                             | 2× ranura de expansión (DB25)        | Ranuras analógicas de expansión de E/S. Cada ranura acepta una tarjeta de expansión DAD que proporciona 8 canales de A/D, D/A o E/S digital. La asignación del tipo de tarjeta y del canal está configurada en DADman.                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#CA8A04'}}></span> |

> **NOTICE — Requisitos de cable de Trueno :** La conexión de Thunderbolt 3 requiere un cable con una calificación de 20 Gbps o superior. Los cables estándar USB-C no están clasificados para las velocidades de Thunderbolt 3 y no funcionarán de forma fiable. Utilice el cable suministrado con la unidad o un cable certificado Thunderbolt 3 / Thunderbolt 4 cable.

> **NOTICE — Terminación del reloj de la palabra:** El puerto WC/VBB IN debe ser terminado (75 horas) cuando el centro AX es el último dispositivo en una cadena de reloj de la palabra. El interruptor de terminación se encuentra junto al conector BNC.

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
