---
title: "Capítulo 10 — Especificaciones técnicas"
sidebar_label: "Ch. 10 — Especificaciones"
sidebar_position: 11
---

# Capítulo 10 — Especificaciones técnicas

> **Producto:** Digital Audio Denmark Penta 720  
> **SKU:** PENTA720-BASE  
> **Fuente:** Spec Sheet PENTA720-BASE, número junio 2026

---

## 10.1 E/S Digital

| Parámetro                             | Valor                | Condiciones / Notas                                        |
| ------------------------------------- | -------------------- | ---------------------------------------------------------- |
| MADI                                  | 64 ch en / 64 ch out | A 48 kHz; BNC coaxial y óptico a través de SFP             |
| AES3 (incorporado) | 16 ch in / 16 ch out | 2 × DB25 (pinout de Tascam)             |
| Vía tarjetas de expansión             | Hasta 8 tarjetas     | Ver Sección 10.5 para tarjetas compatibles |

---

## 10.2 Tarifas de Ejemplo Soportado

| Formatear             | Tasas de ejemplo                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                  | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                  | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Expansión de tarjetas | Dependente en el tipo de tarjeta                                                                               |

---

## 10.3 Rutas y Procesamiento

| Parámetro                      | Valor                                       |
| ------------------------------ | ------------------------------------------- |
| Matrix de ruta                 | 1,424×1,424                                 |
| Procesando longitud de palabra | decimal de 28 bits                          |
| Alineación de salida           | Todas las salidas alineadas a tiempo y fase |

---

## 10.4 Synchronisation

| Fuente                                            | Notas                |
| ------------------------------------------------- | -------------------- |
| Reloj Word                                        | Entrada y salida BNC |
| Explosión negra de vídeo (VBB) | Input                |
| MADI                                              | Vía puerto MADI      |
| AES3                                              | Via AES3 input       |

---

## 10.5 Expansion Slots

| Parámetro            | Valor                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Número de espacios   | 8                                                                                                  |
| Tarjetas compatibles | CARD-L8, ARD-M8, ARD-DA8, CARD-2SDI, ARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10,6 Potencia

| Parámetro                 | Valor       | Notas                          |
| ------------------------- | ----------- | ------------------------------ |
| Tensión de entrada        | CA 90–260 V | Nominal 100–240 V AC, 47–63 Hz |
| Máximo consumo de energía | 90 W        |                                |

---

## 10.7 Mecánico

| Parámetro              | Valor                                                  |
| ---------------------- | ------------------------------------------------------ |
| Factor de forma        | Montura de atril 19", 2RU (88,9 mm) |
| Profundidad del chasis | 35 cm / 13.8"                          |
| Ancho del cuerpo       | 43,5 cm / 17,2"                                        |
| Peso                   | 5.0 kg / 11.0 lbs      |

---

## 10,8 Ambiental

| Parámetro             | Valor                 |
| --------------------- | --------------------- |
| Temperatura operativa | 0–45 °C / 32–113 °F   |
| Humedad               | 20–85%, sin condensar |

---

## 10.9 Regulatory Compliance

| Estándar                                                                                                                                  | Alcance                            |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013 | Seguridad — Equipo informático     |
| CISPR 32                                                                                                                                  | Emisiones — equipo multimedia      |
| CISPR 35                                                                                                                                  | Inmunidad — equipo multimedia      |
| FCC Parte 15, Subparte B                                                                                                                  | EEUU — radiadores no intencionales |
| ICES-003                                                                                                                                  | Canadá                             |

---

## Referencias cruzadas

- [App. A — Pinetes de Conector](./appa-connector-pinouts)
- [App. C — Dibujos mecánicos](./appc-mechanical-drawings)
