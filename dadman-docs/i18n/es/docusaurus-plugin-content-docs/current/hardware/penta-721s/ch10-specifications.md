---
title: "Capítulo 10 — Especificaciones técnicas"
sidebar_label: "Ch. 10 — Especificaciones"
sidebar_position: 11
---

# Capítulo 10 — Especificaciones técnicas

> **Producto:** Digital Audio Denmark Penta 721S  
> **SKU:** PENTA721S-BASE  
> **Fuente:** Spec Sheet PENTA721S-BASE, número junio 2026

---

## 10.1 E/S Digital

| Parámetro                             | Valor                | Condiciones / Notas                                        |
| ------------------------------------- | -------------------- | ---------------------------------------------------------- |
| MADI                                  | 64 ch en / 64 ch out | A 48 kHz; BNC coaxial y óptico a través de SFP             |
| AES3 (incorporado) | 16 ch in / 16 ch out | 2 × DB25 (pinout de Tascam)             |
| AoIP Dante                            | 64 ch en / 64 ch out | A 48 kHz                                                   |
| Vía tarjetas de expansión             | 1 ranura             | Ver Sección 10.5 para tarjetas compatibles |

---

## 10.2 Tarifas de Ejemplo Soportado

| Formatear     | Tasas de ejemplo                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3          | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Dante / AES67 | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Rutas y Procesamiento

| Parámetro                      | Valor                                       |
| ------------------------------ | ------------------------------------------- |
| Matrix de ruta                 | 528×528                                     |
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
| Dante                                             | Vía de red           |

---

## 10.5 Expansion Slots

| Parámetro            | Valor                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Número de espacios   | 1                                                                                                  |
| Tarjetas compatibles | CARD-L8, ARD-M8, ARD-DA8, CARD-2SDI, ARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.6 Interfaz de Red

| Parámetro | Valor        |
| --------- | ------------ |
| Estándar  | 1000BASE-T   |
| Conector  | RJ45, 4-pair |

---

## 10,7 Potencia

| Parámetro                 | Valor       | Notas                          |
| ------------------------- | ----------- | ------------------------------ |
| Tensión de entrada        | CA 90–260 V | Nominal 100–240 V AC, 47–63 Hz |
| Máximo consumo de energía | 45 W        |                                |

---

## 10.8 Mecánica

| Parámetro              | Valor                                                  |
| ---------------------- | ------------------------------------------------------ |
| Factor de forma        | Montura de atril 19", 2RU (88,9 mm) |
| Profundidad del chasis | 32 cm / 12.6"                          |
| Ancho del cuerpo       | 43,5 cm / 17,2"                                        |
| Peso                   | 3.3 kg / 7.3 lbs       |

---

## 10,9 Ambiental

| Parámetro             | Valor                 |
| --------------------- | --------------------- |
| Temperatura operativa | 0–45 °C / 32–113 °F   |
| Humedad               | 20–85%, sin condensar |

---

## 10,10 Regulatory Compliance

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
