---
title: "Capítulo 10 — Especificaciones técnicas"
sidebar_label: "Ch. 10 — Especificaciones"
sidebar_position: 11
---

# Capítulo 10 — Especificaciones técnicas

> **Producto:** Digital Audio Denmark AX32  
> **SKU:** AX32-BASE2  
> **Fuente:** Spec Sheet AX32-BASE, número junio 2026

---

## 10.1 E/S Digital

| Parámetro                                                | Valor                | Condiciones / Notas                            |
| -------------------------------------------------------- | -------------------- | ---------------------------------------------- |
| MADI                                                     | 64 ch en / 64 ch out | A 48 kHz; coaxial BNC                          |
| AES3 (incorporado)                    | 16 ch in / 16 ch out | 2 × DB25 (pinout de Tascam) |
| DADlink (a través de MOD-MADI-DADLNK) | Hasta 256×256 ch     | A 48 kHz; vía SFP                              |
| Vía tarjetas de expansión                                | Hasta 1,024×1,024 ch | Tarjetas opcionales                            |

---

## 10.2 Tarifas de Ejemplo Soportado

| Formatear                                            | Tasas de ejemplo                                                                                               |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| MADI                                                 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                                                 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink                                              | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante (a través de MOD-DANTE-BK3) | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Expansión de tarjetas                                | Dependente en el tipo de tarjeta                                                                               |

---

## 10.3 Rutas y Procesamiento

| Parámetro                      | Valor                                                            |
| ------------------------------ | ---------------------------------------------------------------- |
| Matrix de ruta                 | 1,424×1,424                                                      |
| Procesador de resumen          | 256×32 canales                                                   |
| Procesando longitud de palabra | decimal de 28 bits                                               |
| Retraso interno del sistema    | 7 muestras (ajustables entre 3 y 31 muestras) |
| Alineación de salida           | Todas las salidas alineadas a tiempo y fase                      |

---

## 10.4 DADlink

| Parámetro | Valor                                 |
| --------- | ------------------------------------- |
| Formatear | decimal de 28 bits                    |
| Latencia  | 0 muestras                            |
| Requiere  | Módulo opcional MOD-MADI-DADLNK + SFP |

---

## 10.5 Synchronisation

| Fuente                                            | Notas                                    |
| ------------------------------------------------- | ---------------------------------------- |
| Reloj Word                                        | Entrada y salida BNC                     |
| Explosión negra de vídeo (VBB) | Input                                    |
| AES11                                             | Input                                    |
| MADI                                              | Vía puerto MADI                          |
| AES3                                              | Entrada AES3 integrada                   |
| ADAT                                              | A través de tarjeta opcional             |
| Dante                                             | Mediante módulo MOD-DANTE-BK3 opcional   |
| DADlink                                           | Mediante módulo MOD-MADI-DADLNK opcional |

---

## 10.6 Interfaz de Red

| Parámetro | Valor                                                                   |
| --------- | ----------------------------------------------------------------------- |
| Estándar  | 1000BASE-T                                                              |
| Conector  | RJ45, 4-pair                                                            |
| Propósito | Control DADman; audio de red opcional a través de tarjetas de expansión |

---

## 10.7 Expansion Slots

| Parámetro            | Valor                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Número de espacios   | 8                                                                                                  |
| Tarjetas compatibles | CARD-L8, ARD-M8, ARD-DA8, CARD-2SDI, ARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.8 Optional Modules

| Módulo          | Función                                   |
| --------------- | ----------------------------------------- |
| MOD-MADI-DADLNK | Dual MADI y DADlink a través de SFP       |
| MOD-DANTE-BK3   | 64-ch audio de red Dante                  |
| MOD-SFP-1300-LZ | DADlink SFP                               |
| MOD-SFP-1300-LD | MADI SFP (modo simple) |
| MOD-SFP-COAX    | MADI SFP (coaxial)     |

---

## 10,9 Potencia

| Parámetro                                         | Valor                                       | Notas                                    |
| ------------------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| Entradas de energía                               | Único                                       | Opción AX32-RPS añade entrada redundante |
| Suministro                                        | Doble (siempre ajustado) |                                          |
| Tensión de entrada                                | CA 90–260 V                                 | Nominal 100–240 V AC, 47–63 Hz           |
| Conector principal                                | IEC 60309                                   |                                          |
| Fusión Principal                                  | 1.0 A, T1AH/250 V           | Montado en conector IEC                  |
| Calificación de corriente máxima                  | 90 W                                        |                                          |
| Sección digital                                   | 15 W                                        |                                          |
| Expansión de tarjetas (máximo) | 65 W                                        |                                          |

---

## 10.10 Mecánica

| Parámetro              | Valor                                                  |
| ---------------------- | ------------------------------------------------------ |
| Factor de forma        | Montura de atril 19", 2RU (88,9 mm) |
| Profundidad del chasis | 35 cm / 13.8"                          |
| Ancho del cuerpo       | 43,5 cm / 17,2"                                        |
| Peso                   | 5.0 kg / 11.0 lbs      |
| Enfriando              | 2 × super bajos ventiladores internos de ruido         |

---

## 10.11 Ambiental

| Parámetro             | Valor                 |
| --------------------- | --------------------- |
| Temperatura operativa | 0–45 °C / 32–113 °F   |
| Humedad               | 20–85%, sin condensar |

---

## 10.12 Regulatory Compliance

| Estándar                        | Alcance                                             |
| ------------------------------- | --------------------------------------------------- |
| EN 55103-1                      | Emisiones — equipo de audio/vídeo y entretenimiento |
| EN 55103-2                      | Inmunidad — equipo de audio/vídeo y entretenimiento |
| FCC Parte 15, Subparte B        | EEUU — radiadores no intencionales                  |
| EN 60950-1:2006 | Seguridad — Equipo informático                      |

---

## Referencias cruzadas

- [App. A — Pinetes de Conector](./appa-connector-pinouts)
- [App. C — Dibujos mecánicos](./appc-mechanical-drawings)
