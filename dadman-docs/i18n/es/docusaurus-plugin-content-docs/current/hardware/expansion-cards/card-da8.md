---
title: "CARD-DA8 — Salida analógica DA de 8 canales"
sidebar_label: "CARGADO-DA8"
sidebar_position: 2
---

# CARD-DA8 — Tarjeta de salida DA Prístina de 8 canales

> **SKU:** CARD-DA8  
> **Fuente:** Spec Sheet CARD-DA8, número junio 2026

---

## Resumen

El CARD-DA8 proporciona ocho canales de conversión digital-to-analógica de alto rendimiento para cualquier chasis DAD. Todas las salidas son equilibradas y entregadas en un único conector DB25 usando el pinout estándar de Tascam.

La conversión utiliza un muestreo de 32 veces superior de Burr Brown DAC de 32 bits con filtro basado en FPGA a una profundidad de procesamiento de 32 bits. El staging de ganancia de salida se basa en el relé sin componentes electrónicos activos, garantizando un rango dinámico máximo y un nivel preciso que coincida con cualquier sistema analógico de aguas abajo.

La tarjeta soporta todas las tasas de muestreo PCM de 44,1 kHz a DXD (352.8/384 kHz), así como DSD 64 y DSD 128.

---

## Especificaciones técnicas

| Parámetro                                       | Valor                                                                                                           | Condiciones / Notas                                          |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Canales de salida                               | 8                                                                                                               | Balanceado, nivel de línea                                   |
| Rango dinámico (A-ponderado) | > 128 dB                                                                                                        |                                                              |
| THD+N (A-ponderado)          | < -115 dB / 0.00017%                                                   | En —3 dBFS                                                   |
| Respuesta de frecuencia                         | 10 Hz – 20 kHz, ±0.1 dB                                                                         | Todos los ajustes ganados                                    |
| Precisión de ganancia                           | ±0.1 dB                                                                                         | Todos los ajustes ganados                                    |
| Nivel de salida máximo                          | 0 a +24 dBu                                                                                                     | Ajustable en pasos de 0.1 dB                 |
| Obtener pasos para 0 dBFS                       | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                               | Replicación basada en 6 pasos dB; ajuste digital entre pasos |
| Impedancia de salida                            | < 100 Ω                                                                                |                                                              |
| Tasas de ejemplo (PCM)       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz  |                                                              |
| Tasa de ejemplo (DSD)        | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) |                                                              |
| Procesando longitud de palabra                  | 32 bits                                                                                                         | Filtrado basado en FPGA                                      |
| Consumo de energía                              | Máx. 11 W                                                                                       |                                                              |

---

## Conexiones

| Puerto                    | Conector    | Señal                            | Notas            |
| ------------------------- | ----------- | -------------------------------- | ---------------- |
| Salida analógica de línea | DB25 hembra | 8 ch equilibrado, nivel de línea | Pinout de Tascam |

### DB25 Output Pinout (Tascam)

| Fijar DB25 | Señal   |
| ---------- | ------- |
| 1          | Ch 1 +  |
| 14         | Ch 1 −  |
| 2          | Ch 2 +  |
| 15         | Ch 2 −  |
| 3          | Ch 3 +  |
| 16         | Ch 3 −  |
| 4          | Ch 4 +  |
| 17         | Ch 4 −  |
| 5          | Ch 5 +  |
| 18         | Ch 5 −  |
| 6          | Ch 6 +  |
| 19         | Ch 6 −  |
| 7          | Ch 7 +  |
| 20         | Ch 7 −  |
| 8          | Ch 8 +  |
| 21         | Ch 8 −  |
| 25         | Terreno |

---

## Instalación

> **ADVERTENCIA:** Siempre apague el chasis y desconecte el cable de corriente antes de instalar o quitar las tarjetas de expansión. Insertar una carta en un chasis alimentado puede dañar la carta y el chasis.

1. Abra el chasis y desconecte el cable de corriente.
2. Remueve el panel de blank de la ranura de destino (mantén el tornillo).
3. Deslice el CARD-DA8 en las guías de la ranura, marque el lado hacia arriba, hasta que el conector de bordes se sienta completamente.
4. Asegura el soporte frontal con el tornillo retenido. Basta con apretarse el dedo.
5. Volver a conectar el cable de la red y la potencia del chasis.
6. Abrir DADman — la tarjeta aparece automáticamente como salida DA en la vista de ruta de E/S.

---

## Compatibilidad

| Chasis     | Compatible                        |
| ---------- | --------------------------------- |
| AX64       | Sí                                |
| Centro AX  | Sí                                |
| Penta 720  | Sí                                |
| Penta 721S | Sí                                |
| AX32       | Sí                                |
| Núcleo 256 | No — no hay espacios de expansión |
| MOMA       | No — no hay espacios de expansión |
