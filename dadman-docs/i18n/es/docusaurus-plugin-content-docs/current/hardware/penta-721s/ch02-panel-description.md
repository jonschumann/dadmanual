---
title: "Capítulo 2 — Descripción del Panel"
sidebar_label: "Ch. 2 — Descripción del Panel"
sidebar_position: 3
---

# Capítulo 2 — Descripción del Panel

> **Producto:** Digital Audio Dinamarca Penta 721s

> **Cómo usar este capítulo:** Este capítulo identifica cada control y conector en el Penta 721. Para obtener niveles de señal y procedimientos de conexión, consulte [Ch. 4 — Conexiones de señal](ch04-connections). Para significados de estado LED, vea [Sección 2.3](#23-led-state-reference).

---

## 2.1 Panel frontal

![Penta 721s panel frontal](/img/panel-penta721s-front.png)
_Figura 2.1 — Panel frontal Penta 721. Los callouts numerados corresponden a la tabla de referencia de abajo._

| Ref | Etiqueta   | Tipo                                     | Función                                                                                                                                                                                                          | Punto |
| --- | ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1   | **Listo**  | Indicador LED (verde) | La unidad ha completado la secuencia de arranque y está lista para la operación                                                                                                                                  | Gris  |
| 2   | **Error**  | Indicador LED (rojo)  | Se ha detectado un fallo interno o un error de configuración                                                                                                                                                     | Gris  |
| 3   | **PSU OK** | Indicador LED (verde) | La fuente de alimentación primaria funciona correctamente. En unidades con PSU redundante, un segundo indicador PSU OK confirma el estado del suministro de copias de seguridad. | Gris  |

---

## 2.2 Panel de Rear

![Panel trasero de Penta 721](/img/panel-penta721s-rear.png)
_Tablero trasero de Penta 721. Los callouts numerados corresponden a la tabla de abajo._

> **NOTA:** El diseño trasero del panel Penta 721 varía en función de las tarjetas de expansión ajustadas. El complemento del conector que se muestra a continuación refleja una configuración típica. Verifique el diseño real de la tarjeta en su unidad antes de hacer conexiones.

| Ref | Etiqueta                                                                  | Conector                                | Función                                                                                                                                                                             | Punto   |
| --- | ------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1   | **Energía (primaria)**                                 | Entrada IEC C14                         | Entrada principal de poder. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC. | Oscuro  |
| 2   | **Potencia (copia de seguridad)**                      | Entrada IEC C14                         | Entrada de alimentación de corriente redundante (donde se ajusta). Proporciona redundancia PSU de intercambio caliente.          | Oscuro  |
| 3   | **AES/EBU I/O 1–4**                                                       | DB25 (Tascam pinout) | AES/EBU E/S de audio digital, canales 1–4 (4 pares estéreo = 8 canales).                                                                         | Naranja |
| 4   | **AES/EBU I/O 5–8**                                                       | DB25 (Tascam pinout) | AES/EBU E/S de audio digital, canales 5–8 (4 pares estéreo = 8 canales).                                                                         | Naranja |
| 5   | **MADI IN**                                                               | BNC, 75                                 | Entrada coaxial MADI. AES10 compatible.                                                                                                             | Azul    |
| 6   | **MADI OUT**                                                              | BNC, 75                                 | Salida coaxial MADI.                                                                                                                                                | Azul    |
| 7   | **E/S óptica**                                                            | TOSLINK (óptico)     | MADI óptico o ADAT E/S (dependiente de la tarjeta).                                                                                              | Cian    |
| 8   | **WC/VBB IN**                                                             | BNC, 75                                 | Entrada de reloj de palabras o de Explosión de Video Negro.                                                                                                         | Violeta |
| 9   | **APAGAR WC**                                                             | BNC, 75                                 | Salida de reloj.                                                                                                                                                    | Violeta |
| 10  | **AES11 EN**                                                              | XLR (hembra)         | Entrada de señal de referencia de audio digital AES11.                                                                                                              | Verde   |
| 11  | **NET 1**                                                                 | RJ45 (1000BASE-T)    | Control Ethernet y/o red de audio Dante, puerto 1.                                                                                                                  | Pizarra |
| 12  | **NET 2**                                                                 | RJ45 (1000BASE-T)    | Control Ethernet y/o red de audio Dante, puerto 2.                                                                                                                  | Pizarra |
| 13  | **SLOT 1** _(típico: Dante/AES67 I/O)_ | 2× SFP                                  | Espacio de expansión 1. Con una tarjeta Dante/AES67 I/O: dos puertos SFP para conexiones ópticas o de cobre Dante.                  | Cian    |

---

## 2.3 referencia de estado LED

### LEDs de estado

| LED                             | Color                              | Comenzando                                                                                |
| ------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| Listo                           | Verde (estable) | Secuencia de Arrancamiento completa: unidad lista para operar             |
| Error                           | Rojo (estable)  | Error interno o error de configuración detectado                                          |
| PSU OK                          | Verde (estable) | Suministro de alimentación primario funcionando correctamente                             |
| PSU OK (2nd) | Verde (estable) | PSU redundante presente y operativo (unidades con doble PSU solamente) |

---

## Referencias cruzadas

- [Ch. 4 — Conexiones de señal](ch04-connections) — Niveles de señal y procedimientos de conexión
- [Ch. 6 — Operación](ch06-operation) — Operación de controles y visualización
- [App. A — Pineos de Conector](appa-connector-pinouts) — Asignaciones de Pin
