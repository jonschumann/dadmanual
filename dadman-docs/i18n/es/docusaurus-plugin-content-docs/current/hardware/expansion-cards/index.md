---
title: "Tarjetas de expansión"
sidebar_label: "Resumen"
sidebar_position: 1
---

# Tarjetas de expansión

Ranura de tarjetas de expansión DAD en la bahía de la tarjeta con chasis compatible para ampliar la capacidad de E/S. Cada tarjeta ocupa una ranura y es capaz de enchufar en caliente. Múltiples tarjetas de los mismos o diferentes tipos se pueden instalar simultáneamente, sujeto al presupuesto total del chasis de acogida.

## Chasis compatible

| Chasis     | Espacios disponibles |
| ---------- | -------------------- |
| AX64       | 8                    |
| Penta 720  | 8                    |
| Centro AX  | 2                    |
| Penta 721S | 1                    |
| AX32       | 8                    |

> El núcleo 256 no tiene ranuras de expansión. El MOM no tiene ranuras de expansión.

---

## Comparación de tarjetas

| Tarjeta                          | SKU              | Tipo                                    | Canales                | Conector                         | Potencia |
| -------------------------------- | ---------------- | --------------------------------------- | ---------------------- | -------------------------------- | -------- |
| [CARD-DA8](./card-da8)           | CARGADO-DA8      | Salida analógica DA                     | 8 ch out               | DB25 (Tascam) | 11 W     |
| [CARD-L8](./card-l8)             | CARGADO-L8       | Entrada analógica de línea AD           | 8 ch en                | DB25 (Tascam) | 9 W      |
| [CARD-M8](./card-m8)             | CARGADO-M8       | Entrada analógica de micrófono/línea AD | 8 ch en                | DB25 (Tascam) | 11 W     |
| [CARD-DANTE](./card-dante)       | CARGADO-DANTE    | Dante / AES67 AoIP                      | 128 ch in + 128 ch out | 2 × RJ45                         | 4,5 W    |
| [CARD-2MADI-SO](./card-2madi-so) | CARGADO-2MADI-SO | MADI dual a través de SFP               | 2 × 64 ch en + 64 ch   | 2 × SFP                          | 4,5 W    |
| [CARD-RAVENNA](./card-ravenna)   | CARGADO-RAVENNA  | Ravenna / AES67 / ST 2110-30            | 128 ch in + 128 ch out | 2 × RJ45                         | 7,5 W    |
| [CARD-8AES](./card-8aes)         | CARGADO-8AES     | E/S digital AES3                        | 8 ch in + 8 ch out     | TBC                              | TBC      |
| [CARD-AVB](./card-avb)           | CARGADO-AVB      | Audio de red AVB / Milan                | TBC                    | 2 × RJ45                         | TBC      |

---

## Presupuesto Slot

Cada chasis tiene un presupuesto de potencia máxima para sus ranuras de tarjetas de expansión. Asegúrese de que el consumo combinado de energía de las tarjetas instaladas no exceda el límite de chasis.

| Chasis     | Potencia de la tarjeta                      |
| ---------- | ------------------------------------------- |
| AX64       | Total de 70 W en 8 ranuras                  |
| Penta 720  | Consulte las especificaciones del Penta 720 |
| Centro AX  | Consulte las especificaciones del Centro AX |
| Penta 721S | Consulte las especificaciones de Penta 721S |
| AX32       | Consulte las especificaciones de AX32       |

> **PRECAUCIÓN:** Exceder el presupuesto de la ranura puede causar una operación inestable o un cierre térmico. Calcula la potencia total de la tarjeta antes de instalar múltiples tarjetas de alta potencia (CARD-DA8, CARD-M8) en el mismo chasis.

---

## Vista general de instalación

Todas las tarjetas de expansión comparten el mismo procedimiento de instalación. Para ver los pasos detallados, consulte la sección Instalación en la página de cada tarjeta.

1. Encienda el chasis completamente y desconecte el cable eléctrico.
2. Remueve el panel de blank de la ranura de destino (mantén el tornillo).
3. Deslice la tarjeta en la ranura hasta que el conector de bordes se asiente.
4. Asegura el soporte frontal de la tarjeta con el tornillo retenido.
5. Volver a conectar el cable de la red y la potencia del chasis.
6. Abrir DADman — la tarjeta aparecerá automáticamente en la configuración de E/S.
