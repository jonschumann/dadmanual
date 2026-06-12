---
title: "CARD-M8 - Entrada analógica AD/línea de 8 canales"
sidebar_label: "CARGADO-M8"
sidebar_position: 4
---

# CARD-M8 - Tarjeta de entrada de Micrófono/línea de 8 canales

> **SKU:** CARD-M8  
> **Fuente:** Especifica hoja CARD-M8, Número de junio de 2026

---

## Resumen

El CARD-M8 proporciona ocho canales de conversión analógica a digital de alto rendimiento con micrófono conmutable y entrada de nivel de línea para cualquier chasis DAD. Cada canal puede configurarse independientemente en modo micrófono o línea. Todas las entradas están equilibradas, entregadas en un único conector DB25 usando el pinout estándar de Tascam.

La conversión utiliza un modulador dual de delta-sigma de 5-bits con filtrado basado en FPGA a una profundidad de procesamiento de 32-bits. Tanto el micrófono como la etapa de ganancia de la línea están basados en relés sin componentes de ganancia electrónica activos, proporcionar un rendimiento sonoro excepcional y EIN de -131 dBu (A-pesado) con una ganancia máxima.

La potencia fantasma de 48 V está disponible por canal para micrófonos condensadores.

---

## Especificaciones técnicas

### General

| Parámetro                                       | Valor                                                                                                           | Condiciones / Notas                          |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Canales de entrada                              | 8                                                                                                               | Balance; micrófono/línea cambiable por canal |
| Rango dinámico (A-ponderado) | > 123 dB                                                                                                        |                                              |
| THD+N (A-ponderado)          | < -117 dB / 0.00014%                                                   | En —3 dBFS                                   |
| Respuesta de frecuencia                         | 10 Hz – 20 kHz, ±0.1 dB                                                                         | Todos los ajustes ganados                    |
| Precisión de ganancia                           | ±0.1 dB                                                                                         | Todos los ajustes ganados                    |
| Tasas de ejemplo (PCM)       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz  |                                              |
| Tasa de ejemplo (DSD)        | 2.8224 MHz (DSD 64), 5.6448 MHz (DSD 128) |                                              |
| Resolución de ejemplo                           | Sigma-delta de 5-bits a 5.645 o 6.144 MHz; salida PCM de 24 bits                |                                              |
| Procesando longitud de palabra                  | 32 bits                                                                                                         | Filtrado basado en FPGA                      |
| Consumo de energía                              | Máx. 11 W                                                                                       |                                              |

### Modo de entrada de línea

| Parámetro                 | Valor                             | Condiciones / Notas                                          |
| ------------------------- | --------------------------------- | ------------------------------------------------------------ |
| Nivel máximo de entrada   | - 9 a +30 dBu                     | Ajustable en pasos de 0.1 dB                 |
| Obtener pasos para 0 dBFS | 9, 12, 15, 18, 21, 24, 27, 30 dBu | Replicación basada en 3 pasos dB; ajuste digital entre pasos |
| Impedancia de entrada     | > 10 k�.          |                                                              |
| MRR                       | > 120 dB                          | A 1 kHz                                                      |

### Modo de entrada del micrófono

| Parámetro                                     | Valor          | Condiciones / Notas                            |
| --------------------------------------------- | -------------- | ---------------------------------------------- |
| Potencia fantasma                             | 48 V           | Cambiable por canal                            |
| Impedancia de entrada                         | 3 ki/s         |                                                |
| EIN (A-ponderado)          | −131 dBu       | Fuente de 0 (entrada corta) |
| Rango de ganancia analógica                   | - 3 a +45 dB   | Pasos 3 dB basados en relé                     |
| Rango de ganancia digital                     | 0 a +39 dB     | Ganancia digital adicional                     |
| Rango de ganancia total de DADman             | 18-18 a +72 dB |                                                |
| Nivel máximo de entrada en ganancia de -18 dB | +21 dBu        | Antes de recortar                              |

### Mesa de ganancia de micrófono

| Ganancia de DADman (dB) | Ganancia analógica (dB) | Ganancia digital (dB) | Input Overload (dBu) | Ruido de salida (dBFS A) | EIN (dBu A) |
| ------------------------------------------ | ------------------------------------------ | ---------------------------------------- | --------------------------------------- | ------------------------------------------- | ------------------------------ |
| −18                                        | −3                                         | 0                                        | +21                                     | −123.8                      | −102.8         |
| −15                                        | 0                                          | 0                                        | +18                                     | −123.3                      | −105.3         |
| −12                                        | +3                                         | 0                                        | +15                                     | −123.2                      | −108.2         |
| −9                                         | +6                                         | 0                                        | +12                                     | −123.2                      | −111.2         |
| −6                                         | +9                                         | 0                                        | +9                                      | −122.8                      | −113.8         |
| −3                                         | +12                                        | 0                                        | +6                                      | −122.8                      | −116.8         |
| 0                                          | +12                                        | 0                                        | +3                                      | −122.2                      | −119.2         |
| +3                                         | +18                                        | 0                                        | 0                                       | −122.0                      | −122.0         |
| +6                                         | +21                                        | 0                                        | −3                                      | −120.8                      | −123.8         |
| +9                                         | +24                                        | 0                                        | −6                                      | −120.3                      | −126.3         |
| +12                                        | +27                                        | 0                                        | −9                                      | −118.5                      | −127.5         |
| +15                                        | +30                                        | 0                                        | −12                                     | −117.3                      | −129.3         |
| +18                                        | +33                                        | 0                                        | −15                                     | −114.8                      | −129.8         |
| +21                                        | +36                                        | 0                                        | −18                                     | −113.0                      | −131.0         |
| +24                                        | +39                                        | 0                                        | −21                                     | −110.2                      | −131.2         |
| +27                                        | +42                                        | 0                                        | −24                                     | −107.8                      | −131.8         |
| +30                                        | +45                                        | 0                                        | −27                                     | −104.8                      | −131.8         |
| +33                                        | +45                                        | +3                                       | −27                                     | −107.8                      | −131.8         |
| +36                                        | +45                                        | +6                                       | −27                                     | −110.8                      | −131.8         |
| +72                                        | +45                                        | +39                                      | −27                                     | −68.8                       | −131.8         |

> **Nota:** En los ajustes de ganancia digital por encima de +30 dB DADman, la ganancia analógica es de +45 dB. Incrementar la ganancia digital por encima de este punto reduce el rango dinámico efectivo pero mantiene el piso EIN en -131,8 dBu A.

---

## Conexiones

| Puerto                     | Conector    | Señal            | Notas                                                                                        |
| -------------------------- | ----------- | ---------------- | -------------------------------------------------------------------------------------------- |
| Entrada de micrófono/línea | DB25 hembra | 8 ch balanceados | Tascam pinout; micrófono: fantasma de 48 V; línea: a +30 dBu |

### Pinout de entrada DB25 (Tascam)

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

> **ADVERTENCIA:** Siempre apague el chasis y desconecte el cable de corriente antes de instalar o quitar las tarjetas de expansión.

> **PRECAUCIÓN:** Si 48 V de potencia fantasma está habilitada en cualquier canal, desactivarlo en DADman antes de conectar o desconectar micrófonos o cables para evitar transientes que puedan dañar las cápsulas del micrófono.

1. Abra el chasis y desconecte el cable de corriente.
2. Remueve el panel de blank de la ranura de destino (mantén el tornillo).
3. Deslice el CARD-M8 en las guías de las ranuras, marque el lado hacia arriba, hasta que el conector de bordes se sienta completamente.
4. Asegura el soporte frontal con el tornillo retenido.
5. Volver a conectar el cable de la red y la potencia del chasis.
6. Abrir DADman — la tarjeta aparece como entradas de micrófono/línea en la vista de ruta de E/S. Establecer cada canal en modo Micrófono o Línea según sea necesario.

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
