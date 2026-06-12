---
title: "Capítulo 10 — Especificaciones técnicas"
sidebar_label: "Ch. 10 — Especificaciones"
sidebar_position: 11
---

# Capítulo 10 — Especificaciones técnicas

> **Producto:** Digital Audio Denmark AX64  
> **SKU:** AX64-BASE / AX64-BASE-RPS  
> **Fuente:** Spec Sheet AX64-BASE, número junio 2026

---

## 10.1 E/S Digital

| Parámetro                                    | Valor                  | Condiciones / Notas |
| -------------------------------------------- | ---------------------- | ------------------- |
| Trueno 3                                     | 256 ch en / 256 ch out | A 48 kHz y 96 kHz   |
| AoIP Dante                                   | 256 ch en / 256 ch out | A 48 kHz            |
| AoIP Dante                                   | 128 ch in / 128 ch out | A 96 kHz            |
| MADI                                         | 64 ch en / 64 ch out   | A 48 kHz            |
| ADAT / SMUX                                  | 16 ch in / 16 ch out   |                     |
| S/PDIF                                       | 2 ch input             | Vía ADAT conector   |
| DADlink (a través de SFP) | Hasta 256×256 ch       | A 48 kHz            |
| Vía tarjetas de expansión                    | Hasta 1,024×1,024 ch   | Tarjetas opcionales |

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

| Parámetro                      | Valor                                                            |
| ------------------------------ | ---------------------------------------------------------------- |
| Matrix de ruta                 | 1,872×1,872                                                      |
| Procesador de resumen          | 512×64 canales                                                   |
| Ecualizador SPQ                | 1,024 filtros                                                    |
| Procesando longitud de palabra | decimal de 28 bits                                               |
| Retraso interno del sistema    | 7 muestras (ajustables entre 3 y 31 muestras) |
| Alineación de salida           | Todas las salidas alineadas a tiempo y fase                      |

---

## 10.4 DADlink

| Parámetro | Valor              |
| --------- | ------------------ |
| Formatear | decimal de 28 bits |
| Latencia  | 0 muestras         |

---

## 10.5 Synchronisation

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

## 10.6 Trueno 3 Interfaz

| Parámetro          | Valor                                   |
| ------------------ | --------------------------------------- |
| Conectores         | 2 × USB-C (Trueno 3) |
| Daisy-chain / link | Soportado                               |
| Salida de bus      | 15 W por puerto                         |

---

## 10.7 Interfaz de Red

| Parámetro | Valor        |
| --------- | ------------ |
| Estándar  | 1000BASE-T   |
| Conector  | RJ45, 4-pair |

---

## 10.8 Expansion Slots

| Parámetro            | Valor                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Número de espacios   | 8                                                                                                  |
| Tarjetas compatibles | CARD-L8, ARD-M8, ARD-DA8, CARD-2SDI, ARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10,9 Potencia

| Parámetro                                         | Valor                                       | Notas                               |
| ------------------------------------------------- | ------------------------------------------- | ----------------------------------- |
| Entradas de energía                               | Individual o dual                           | AX64-BASE-RPS tiene entradas dobles |
| Suministro                                        | Doble (siempre ajustado) |                                     |
| Tensión de entrada                                | CA 90–260 V                                 | Nominal 100–240 V AC, 47–63 Hz      |
| Conector principal                                | IEC 60309                                   |                                     |
| Fusión Principal                                  | 1.5 A, T1AH/250 V           | Montado en conector IEC             |
| Calificación de corriente máxima                  | 120 W                                       |                                     |
| Sección digital                                   | 15 W                                        |                                     |
| Expansión de tarjetas (máximo) | 70 W                                        |                                     |
| Potencia del bus Trueno (máx)  | 30 W                                        | 2 × 15 W                            |

---

## 10.10 Mecánica

| Parámetro              | Valor                                                  |
| ---------------------- | ------------------------------------------------------ |
| Factor de forma        | Montura de atril 19", 2RU (88,9 mm) |
| Profundidad del chasis | 34.5 cm / 13.6"        |
| Ancho del cuerpo       | 43,5 cm / 17,2"                                        |
| Peso                   | 5.5 kg / 12.2 lbs      |

---

## 10.11 Ambiental

| Parámetro             | Valor                 |
| --------------------- | --------------------- |
| Temperatura operativa | 0–45 °C / 32–113 °F   |
| Humedad               | 20–85%, sin condensar |

---

## 10.12 Regulatory Compliance

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
