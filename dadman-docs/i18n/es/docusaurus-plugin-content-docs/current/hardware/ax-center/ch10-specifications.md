---
title: "Capítulo 10 — Especificaciones técnicas"
sidebar_label: "Ch. 10 — Especificaciones"
sidebar_position: 11
---

# Capítulo 10 — Especificaciones técnicas

> **Producto:** Centro Digital Audio Denmark AX Center  
> **SKU:** AXCNTR-BASE  
> **Fuente:** Spec Sheet AXCNTR-BASE, Número de junio de 2026

---

## 10.1 E/S Digital

| Parámetro                                    | Valor                  | Condiciones / Notas    |
| -------------------------------------------- | ---------------------- | ---------------------- |
| Trueno 3                                     | 256 ch en / 256 ch out | A 48 kHz y 96 kHz      |
| AoIP Dante                                   | 256 ch en / 256 ch out | A 48 kHz               |
| AoIP Dante                                   | 128 ch in / 128 ch out | A 96 kHz               |
| MADI                                         | 64 ch en / 64 ch out   | A 48 kHz               |
| ADAT / SMUX                                  | 16 ch in / 16 ch out   |                        |
| S/PDIF                                       | 2 ch input             | Vía ADAT conector      |
| DADlink (a través de SFP) | Hasta 256×256 ch       | A 48 kHz               |
| Vía tarjetas de expansión                    | E/S adicional          | 2 ranuras de expansión |

---

## 10.2 Tarifas de Ejemplo Soportado

| Formatear     | Tasas de ejemplo                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Trueno 3      | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink       | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67 | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| ADAT / SMUX   | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| S/PDIF        | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Rutas y Procesamiento

| Parámetro                      | Valor                                       |
| ------------------------------ | ------------------------------------------- |
| Matrix de ruta                 | 1,006×1,112                                 |
| Procesando longitud de palabra | decimal de 28 bits                          |
| Alineación de salida           | Todas las salidas alineadas a tiempo y fase |

---

## 10.4 DADlink

| Parámetro | Valor              |
| --------- | ------------------ |
| Formatear | decimal de 28 bits |
| Latencia  | 0 muestras         |

---

## 10.5 E/S analógica nativa

### Salidas de auriculares

| Parámetro        | Valor                    | Condiciones / Notas          |
| ---------------- | ------------------------ | ---------------------------- |
| Outputs          | Auricular estéreo 2 ×    | Panel delantero, TRS 6,35 mm |
| Control de nivel | Independiente por salida | Panel frontal                |

### Seguimiento de salida

| Parámetro        | Valor                 | Condiciones / Notas          |
| ---------------- | --------------------- | ---------------------------- |
| Outputs          | Stereo monitor output | Panel de Rear                |
| Control de nivel | Sí                    | Codificador de panel frontal |

### Entrada de micrófono / Instrumento

| Parámetro         | Valor                           | Condiciones / Notas                |
| ----------------- | ------------------------------- | ---------------------------------- |
| Inputs            | 1 × micrófono + 1 × instrumento | Conector de combo de panel frontal |
| Potencia fantasma | 48 V                            | Cambiable                          |

---

## 10.6 Synchronisation

| Fuente                                            | Notas                |
| ------------------------------------------------- | -------------------- |
| Reloj Word                                        | Entrada y salida BNC |
| Explosión negra de vídeo (VBB) | Input                |
| Trueno 3                                          | Vía host             |
| Dante                                             | Vía de red           |
| ADAT                                              | Vía puerto ADAT      |
| MADI                                              | Vía puerto MADI      |
| DADlink                                           | Vía SFP              |

---

## 10.7 Thunderbolt 3 Interfaz

| Parámetro          | Valor                                   |
| ------------------ | --------------------------------------- |
| Conectores         | 2 × USB-C (Trueno 3) |
| Daisy-chain / link | Soportado                               |
| Salida de bus      | 15 W por puerto                         |

---

## 10.8 Interfaz de Red

| Parámetro | Valor        |
| --------- | ------------ |
| Estándar  | 1000BASE-T   |
| Conector  | RJ45, 4-pair |

---

## 10.9 Expansion Slots

| Parámetro            | Valor                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Número de espacios   | 2                                                                                                  |
| Tarjetas compatibles | CARD-L8, ARD-M8, ARD-DA8, CARD-2SDI, ARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10,10 Potencia

| Parámetro                 | Valor       | Notas                          |
| ------------------------- | ----------- | ------------------------------ |
| Tensión de entrada        | CA 90–260 V | Nominal 100–240 V AC, 47–63 Hz |
| Máximo consumo de energía | 90 W        |                                |

---

## 10.11 Mecánico

| Parámetro              | Valor                                                  |
| ---------------------- | ------------------------------------------------------ |
| Factor de forma        | Montura de atril 19", 1RU (44,5 mm) |
| Profundidad del chasis | 32 cm / 12.6"                          |
| Ancho del cuerpo       | 43,5 cm / 17,2"                                        |
| Peso                   | 3.2 kg / 7.1 lbs       |

---

## 10.12 Ambiental

| Parámetro             | Valor                 |
| --------------------- | --------------------- |
| Temperatura operativa | 0–45 °C / 32–113 °F   |
| Humedad               | 20–85%, sin condensar |

---

## 10.13 Regulatory Compliance

| Estándar                                                       | Alcance                                                         |
| -------------------------------------------------------------- | --------------------------------------------------------------- |
| CISPR 32:2015 + AMD1:2019      | Emisiones — equipo multimedia                                   |
| CISPR 35:2016                                  | Inmunidad — equipo multimedia                                   |
| IEC 61000-3-2:2018 + AMD1:2020 | Emisiones de corriente armónica                                 |
| IEC 61000-3:2013 + AMD1:2017   | Fluctuaciones y parpadeo de voltaje                             |
| ICES-003                                                       | Canadá                                                          |
| AS/NZS CISPR 32                                                | Australia / Nueva Zelanda                                       |
| FCC Parte 15, Subparte B                                       | EEUU — radiadores no intencionales                              |
| IEC 62368-1:2018                               | Seguridad: equipos de audio/vídeo e informática |

---

## Referencias cruzadas

- [App. A — Pinetes de Conector](./appa-connector-pinouts)
- [App. C — Dibujos mecánicos](./appc-mechanical-drawings)
