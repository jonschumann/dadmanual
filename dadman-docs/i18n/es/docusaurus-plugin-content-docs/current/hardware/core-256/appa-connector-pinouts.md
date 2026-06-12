---
title: "Apéndice A — Pinturas de Conector"
sidebar_label: "Aplicación. A — Conectores Pinouts"
sidebar_position: 12
---

# Apéndice A — Pinturas de Conector

> **Producto:** Digital Audio Denmark Core 256

> _[Marcador de posición — reemplazar todos los valores de TBC con datos de pin verificados de la ingeniería.]_

---

## A.1 BNC (MADI, Reloj de palabra)

Los conectores de BNC son desequilibrados 75 coaxiales. La señal se lleva sobre el pin central; escudo sobre la cáscara exterior. No se requiere ninguna tabla de pinout adicional más allá del estándar del conector.

---

## A.2 DB25 — E/S analógica (Tascam Pinout)

_[Marcador de posición — Piñón D-25 pin para el estándar Tascam/ELCO usado en tarjetas de expansión DAD y conectores Penta AES.]_

| Fijar | Señal   | Dirección    | Notas                    |
| ----- | ------- | ------------ | ------------------------ |
| 1     | Ch 1 +  | _Apagar TBC_ |                          |
| 14    | Ch 1 −  | _Apagar TBC_ |                          |
| 2     | Ch 2 +  | _Apagar TBC_ |                          |
| 15    | Ch 2 −  | _Apagar TBC_ |                          |
| _…_   | _…_     | _…_          | _…_                      |
| 12    | Terreno | —            | Escudo de chasis / cable |
| 25    | Terreno | —            | Escudo de chasis / cable |

---

## A.3 XLR — Entrada de referencia AES11

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
