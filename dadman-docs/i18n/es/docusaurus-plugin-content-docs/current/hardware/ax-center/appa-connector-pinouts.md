---
title: "Apéndice A — Pinturas de Conector"
sidebar_label: "Aplicación. A — Conectores Pinouts"
sidebar_position: 12
---

# Apéndice A — Pinturas de Conector

> **Producto:** Centro Digital Audio Dinamarca AX

> _[Marcador de posición — reemplazar todos los valores de TBC con datos de pin verificados de la ingeniería.]_

---

## A.1 BNC (MADI, Reloj de palabra)

Los conectores de BNC son desequilibrados 75 coaxiales. La señal se lleva sobre el pin central; escudo sobre la cáscara exterior. No se requiere ninguna tabla de pinout adicional más allá del estándar del conector.

---

## A.2 DB25 — E/S analógica (Tascam Pinout)

La unidad base del Centro AX no incluye ningún conector DB25. Las conexiones DB25 se proporcionan mediante tarjetas de expansión opcionales (CARD-L8, CARD-M8, CARD-DA8) instaladas en las dos ranuras de expansión.

Para detalles de pinout DB25, vea la página de referencia de tarjetas de expansión:

- [CARD-L8 — Entrada AD de línea de 8 canales](../../expansion-cards/card-l8#db25-input-pinout-tascam)
- [CARD-M8 — Entrada de Micrófono/línea de AD de 8 canales](../../expansion-cards/card-m8#db25-input-pinout-tascam)
- [CARD-DA8 — Salida DA de 8 canales](../../expansion-cards/card-da8#db25-output-pinout-tascam)

---

## A.3 XLR — Entrada de Mic/Línea

| Fijar | Señal                           |
| ----- | ------------------------------- |
| 1     | Terreno / Escudo                |
| 2     | Caliente (+) |
| 3     | Frío (−)     |

---

## A.4 TOSLINK (ADAT / Optical MADI)

Los conectores TOSLINK transportan audio digital óptico. Sin asignación de pin — observe la orientación de transmisión (Tx) / recibir (Rx) marcada en el panel.

---

## A.5 RJ45 (Ethernet)

Ethernet estándar 1000BASE-T. Cableado por TIA-568B.

| Fijar | Señal |
| ----- | ----- |
| 1     | Tx +  |
| 2     | Tx −  |
| 3     | Rx +  |
| 4     | —     |
| 5     | —     |
| 6     | Rx −  |
| 7     | —     |
| 8     | —     |

---

## Referencias cruzadas

- [Ch. 2 — Descripción del panel](./ch02-panel-description) — Ubicaciones del conector
- [Ch. 4 — Conexiones de señal](./ch04-connections) — Procedimientos de conexión
