---
title: "Apéndices"
sidebar_label: "Apéndices"
sidebar_position: 13
---

# Apéndices

> **Documento:** Manual del usuario de DADman  
> **Estado del capítulo:** Borrador v0. — App G (Glosario) completa; App E (Changelog) lista para la fuente compilada; Apps A, B, C, F pendientes de ingeniería DAD y legal; App H (índice) para generar a partir del documento final  
> **Última actualización:** Junio 2026

---

## Apéndice A — Especificaciones técnicas

Este apéndice proporciona especificaciones técnicas completas para todo el hardware controlado por DADman en la actual gama de productos activos. Las especificaciones se obtienen de la documentación oficial del producto DAD. Todos los recuentos de canales reflejan las cifras máximas a la tasa de muestra indicada; los recuentos reales dependen de las tarjetas de expansión instaladas.

> **NOTA:** AX32 (BASE1/BASE2) ya no está en producción activa y no está incluido aquí. Consulte el manual de hardware AX32 para obtener especificaciones antiguas.

---

### A.1 Centro AX (AXCNTR-BASE)

**Vista general del producto:** Interfaz de audio modular de 2-ranura con E/S analógica nativa. Ideal como centro de estudio para aplicaciones de grabación, control de monitores e inmersión de audio. Incluye Tronco 3 a bordo, Dante, MADI y ADAT, con dos ranuras de tarjetas de expansión para E/S adicionales.

#### Matrimonio de ruta

| Recurso                          | Capacidad        |
| -------------------------------- | ---------------- |
| Matrix de ruta                   | 1,006 × 1,112    |
| Procesador de resumen MON        | 512 × 64 canales |
| Ecualizador SPQ                  | 1,024 filtros    |
| Ranuras de tarjetas de expansión | 2                |

#### E/S nativa

| Interfaz                                     | Número de canales                                          |
| -------------------------------------------- | ---------------------------------------------------------- |
| Entradas de micrófono / línea / Instrumento  | 2 (seleccionable por canal)             |
| Salidas de auriculares Stereo                | 2                                                          |
| Stereo monitor outputs                       | 2                                                          |
| Trueno 3                                     | 256 ch @ 48 & 96 kHz      |
| AoIP Dante                                   | 256 ch @ 48 kHz; 128 ch @ 96 kHz |
| MADI I/O                                     | 64 ch @ 48 kHz                                |
| AÑADIR E/S                                   | 16 ch / S/PDIF 2 ch                                        |
| DADlink (a través de SFP) | Hasta 256 × 256 ch                                         |

#### Especificaciones analógicas

**Salida del auricular**

| Parámetro                              | Valor                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Rango dinámico                         | > 120 dB                                                                                          |
| THD+N (A-ponderado) | < −100 dB @ −3 dBFS                                         |
| Tallo                                  | < -110 dB                                                                |
| Cargar impedancia                      | 18 – 600 Ω                                                                                        |
| Impedancia de salida                   | < 1 °                                                                    |
| Nivel máximo de salida                 | Ajustable-80 a +19 dBu (0,1 dB)                                                |
| latencia de conversión a 96 kHz        | 450 μs (filtro de alta frecuencia) / 150 μs (corto retraso) |

**Salida analógica del monitor**

| Parámetro                              | Valor                                                     |
| -------------------------------------- | --------------------------------------------------------- |
| Rango dinámico                         | > 128 dB                                                  |
| THD+N (A-ponderado) | < −115 dB @ −3 dBFS |
| Tallo                                  | < −115 dB                        |
| Nivel máximo de salida                 | Ajustable-60 a +24 dBu (0,1 dB)        |
| Latencia de conversión                 | 450 μs @ 96 kHz                              |

**Entrada de micrófono / instrumento**

| Parámetro                                          | Valor                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------- |
| Rango dinámico                                     | > 124 dB                                                                |
| THD+N (A-ponderado)             | < −115 dB @ −3 dBFS               |
| Tallo                                              | < −115 dB                                      |
| Impedancia de entrada                              | 2 k► (Mic) / > 1 Mb (Instrumento) |
| Rango de ganancia del micrófono                    | - 21 a +100 dB (pasos de 0,1 dB)                     |
| EIN del micrófono (A-ponderado) | < - 131 dBu                                    |
| Latencia de conversión                             | 350 μs @ 96 kHz                                            |

#### E/S digital y sincronización

| Parámetro                    | Valor                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tasa de muestreo soportada   | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Latencia del sistema interno | 7 muestras (ajustables 3 – 31 muestras)                                                                                                                                         |
| DADlink format               | latencia de 28 bits flotante, muestreo cero                                                                                                                                                        |
| Synchronisation sources      | Reloj de palabra, Explosión de Video Negro, Dante, ADAT, MADI                                                                                                                                      |
| Interfaz de red              | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Trueno 3                     | 2 × USB-C, enlace + 15 W de potencia por puerto                                                                                                                                                    |

#### Especificaciones electrónicas

| Parámetro                                                                     | Valor                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Calificación de corriente máxima                                              | 90 W                                                                |
| Tensión de entrada                                                            | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusión Principal                                                              | 1 T, conector IEC montado                                           |
| Conector principal                                                            | IEC 60309                                                           |
| Potencia de sección digital                                                   | 15 W                                                                |
| Potencia de la tarjeta de expansión (máx.) | 30 W                                                                |
| Potencia de Tronco (máx)                                   | 2 × 15 W                                                            |

#### Especificaciones mecánicas

| Parámetro              | Valor                                                   |
| ---------------------- | ------------------------------------------------------- |
| Factor de forma        | Montura de atril 19", 1 RU (44,4 mm) |
| Profundidad del chasis | 320 mm / 12,6"                                          |
| Ancho del cuerpo       | 435 mm / 17.2"                          |
| Peso                   | 3.2 kg / 7.1 lbs        |

#### Medio ambiente y cumplimiento

| Parámetro                 | Valor                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperatura operativa     | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                  |
| Humedad                   | 20 – 85%, sin condensar                                                                                                                                                                                                                                                                                                                  |
| Cumplimiento EMC          | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Parte 15 Subparte B |
| Cumplimiento de seguridad | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                         |

---

### A.2 AX64 (AX64-BASE)

**Resumen del producto:** Cuenta de canales de alta potencia 2U, interfaz de audio modular de 8 ranuras. Diseñado para aplicaciones de estudio y en vivo de formato, que requieran una amplia expansión de E/S. Soporta alimentación redundante opcional (AX64-RPS).

#### Matrimonio de ruta

| Recurso                          | Capacidad        |
| -------------------------------- | ---------------- |
| Matrix de ruta                   | 1,872 × 1,872    |
| Procesador de resumen MON        | 512 × 64 canales |
| Ecualizador SPQ                  | 1,024 filtros    |
| Ranuras de tarjetas de expansión | 8                |

#### E/S nativa

| Interfaz                                           | Número de canales                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| Trueno 3                                           | 256 ch @ 48 & 96 kHz             |
| AoIP Dante                                         | 256 ch @ 48 kHz; 128 ch @ 96 kHz        |
| MADI I/O                                           | 64 ch @ 48 kHz                                       |
| AÑADIR E/S                                         | 16 ch / S/PDIF 2 ch                                               |
| Vía tarjetas de expansión (máx) | Hasta 1,024 × 1,024 ch                                            |
| DADlink / MADI vía SFP (max)    | Hasta 256 × 256 DADlink o 128 × 128 MADI ch @ 48 kHz |

#### E/S digital y sincronización

| Parámetro                    | Valor                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tasa de muestreo soportada   | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Latencia del sistema interno | 7 muestras (ajustables 3 – 31 muestras)                                                                                                                                         |
| DADlink format               | latencia de 28 bits flotante, muestreo cero                                                                                                                                                        |
| Synchronisation sources      | Reloj de palabra, Explosión de Video Negro, Dante, ADAT, MADI, DADlink                                                                                                                             |
| Interfaz de red              | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Trueno 3                     | 2 × USB-C, enlace + 15 W de potencia por puerto                                                                                                                                                    |

#### Especificaciones electrónicas

| Parámetro                                                                     | Valor                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Conexión de energía                                                           | Entrada simple o dual; PSU dual siempre instalado                   |
| Calificación de corriente máxima                                              | 120 W                                                               |
| Tensión de entrada                                                            | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusión Principal                                                              | 1.5 A T, conector IEC montado                       |
| Conector principal                                                            | IEC 60309                                                           |
| Potencia de sección digital                                                   | 15 W                                                                |
| Potencia de la tarjeta de expansión (máx.) | 70 W                                                                |
| Potencia de Tronco (máx)                                   | 2 × 15 W                                                            |

#### Especificaciones mecánicas

| Parámetro              | Valor                                                      |
| ---------------------- | ---------------------------------------------------------- |
| Factor de forma        | Montura de atril de 19", 2 RU (88,9 mm) |
| Profundidad del chasis | 345 mm / 13,6"                                             |
| Ancho del cuerpo       | 435 mm / 17.2"                             |
| Peso                   | 5.5 kg / 12.2 lbs          |

#### Medio ambiente y cumplimiento

| Parámetro                 | Valor                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperatura operativa     | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                  |
| Humedad                   | 20 – 85%, sin condensar                                                                                                                                                                                                                                                                                                                  |
| Cumplimiento EMC          | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Parte 15 Subparte B |
| Cumplimiento de seguridad | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                         |

---

### A.3 Núcleo 256 (CORE256-BASE)

**Vista general del producto:** Unidad compacta de medio-rack-width (1U altura completa) que combina Thunderbolt 3, Dante, MADI y ADAT E/S con una gran matriz interna de enrutamiento. Monta en una estantería estándar de 19" a través de la opción C256-2MOUNT-BRACKET (una o dos unidades por 1U). Producido por 12 V DC.

#### Matrimonio de ruta

| Recurso                   | Capacidad        |
| ------------------------- | ---------------- |
| Matrix de ruta            | 848 × 848        |
| Procesador de resumen MON | 512 × 64 canales |
| Ecualizador SPQ           | 1,024 filtros    |

#### E/S nativa

| Interfaz                                        | Número de canales                                                 |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| Trueno 3                                        | 256 ch @ 48 & 96 kHz             |
| AoIP Dante                                      | 256 ch @ 48 kHz; 128 ch @ 96 kHz        |
| MADI I/O                                        | 64 ch @ 48 kHz                                       |
| AÑADIR E/S                                      | 16 ch / S/PDIF 2 ch                                               |
| DADlink / MADI vía SFP (max) | Hasta 256 × 256 DADlink o 128 × 128 MADI ch @ 48 kHz |

#### E/S digital y sincronización

| Parámetro                    | Valor                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tasa de muestreo soportada   | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| Latencia del sistema interno | 7 muestras (ajustables 3 – 31 muestras)                                                                                                                                         |
| DADlink format               | latencia de 28 bits flotante, muestreo cero                                                                                                                                                        |
| Synchronisation sources      | Reloj de palabra, Explosión de Video Negro, Dante, ADAT, MADI, DADlink                                                                                                                             |
| Interfaz de red              | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Trueno 3                     | 2 × USB-C, enlace + 15 W de potencia por puerto                                                                                                                                                    |

#### Especificaciones electrónicas

| Parámetro                                   | Valor                                                      |
| ------------------------------------------- | ---------------------------------------------------------- |
| Tensión de suministro                       | 12 V DC                                                    |
| Conector de CD                              | 5,5 × 2,5 mm de barril (punta positiva) |
| Máxima entrada actual                       | 5 A                                                        |
| Calificación de corriente máxima            | 60 W                                                       |
| Potencia de sección digital                 | 15 W                                                       |
| Potencia de Tronco (máx) | 2 × 15 W                                                   |

#### Especificaciones mecánicas

| Parámetro              | Valor                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| Factor de forma        | Ancho del Half-rack, 1 RU (44,4 mm) — requiere C256-2MOUNT-BRACKET para rack de 19" |
| Profundidad del chasis | 231 mm / 9.1"                                                                          |
| Ancho del cuerpo       | 211 mm / 8.3"                                                                          |
| Peso                   | 1.3 kg / 2.9 lbs                                                       |

#### Medio ambiente y cumplimiento

| Parámetro                 | Valor                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperatura operativa     | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                  |
| Humedad                   | 20 – 85%, sin condensar                                                                                                                                                                                                                                                                                                                  |
| Cumplimiento EMC          | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Parte 15 Subparte B |
| Cumplimiento de seguridad | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                         |

---

### A.4 Penta 720 (PENTA720-BASE)

**Vista general del producto:** 2U, router modular de audio de 8 ranuras en un subrack de 19" con bolas de intercambio caliente y acceso frontal de tarjetas de expansión. Diseñado para la instalación de medios y radiodifusión. La E/S estándar incluye 8 pares AES3 estéreo (16 canales) y un puerto MADI. Módulo Dante opcional (MOD-DANTE-BK3) y módulo dual MADI/DADlink (MOD-MADI-DADLNK) disponible. No incluye Thunderbolt 3.

#### Matrimonio de ruta

| Recurso                          | Capacidad                                                                 |
| -------------------------------- | ------------------------------------------------------------------------- |
| Matrix de ruta                   | 1,424 × 1,424                                                             |
| Procesador de resumen MON        | 256 × 32 canales                                                          |
| Ranuras de tarjetas de expansión | 8 (hasta 6 tarjetas analógicas o 8 tarjetas digitales) |

#### E/S nativa

| Interfaz                                           | Número de canales                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| AES3 I/O                                           | 16 ch @ 48 kHz (8 stereo pairs)           |
| MADI I/O                                           | 64 ch @ 48 kHz                                               |
| Vía tarjetas de expansión (máx) | Hasta 1,024 × 1,024 ch                                                    |
| DADlink / MADI vía SFP (max)    | Hasta 256 × 256 DADlink o 128 × 128 MADI/HotLink ch @ 48 kHz |

#### E/S digital y sincronización

| Parámetro                    | Valor                                                                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Tasa de muestreo soportada   | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fijo 48 kHz; Dante option 44.1 – 192 kHz |
| Latencia del sistema interno | 7 muestras (ajustables 3 – 31 muestras)                                                                                |
| DADlink format               | latencia de 28 bits flotante, muestreo cero                                                                                               |
| Synchronisation sources      | Word Clock, Video Black Burst, AES11, AES3, MADI, DADlink, HotLink                                                                        |
| Interfaz de red              | 1000BASE-T, RJ45                                                                                                                          |

#### Especificaciones electrónicas

| Parámetro                                                                     | Valor                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Conexión de energía                                                           | Doble entrada, doble PSU                                            |
| Calificación de corriente máxima                                              | 90 W                                                                |
| Tensión de entrada                                                            | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusión Principal                                                              | 1 T, conector IEC montado                                           |
| Conector principal                                                            | IEC 60309                                                           |
| Potencia de sección digital                                                   | 15 W                                                                |
| Potencia de la tarjeta de expansión (máx.) | 65 W                                                                |

#### Especificaciones mecánicas

| Parámetro              | Valor                                                      |
| ---------------------- | ---------------------------------------------------------- |
| Factor de forma        | Montura de atril de 19", 2 RU (88,9 mm) |
| Profundidad del chasis | 350 mm / 13,8"                                             |
| Ancho del cuerpo       | 435 mm / 17.2"                             |
| Peso                   | 5.0 kg / 11.0 lbs          |
| Enfriando              | 2 × fans internos                                          |

#### Medio ambiente y cumplimiento

| Parámetro                 | Valor                                           |
| ------------------------- | ----------------------------------------------- |
| Temperatura operativa     | 0 – 45 °C / 32 – 113 °F                         |
| Humedad                   | 20 – 85%, sin condensar                         |
| Cumplimiento EMC          | EN 55103-1, EN 55103-2, FCC Parte 15 Subparte B |
| Cumplimiento de seguridad | EN 60950-1:2006                 |

---

### A.5 Penta 721S (PENTA721S-BASE)

**Resumen del producto:** Interfaz de audio de una sola ranura y router. Incluye módulo Dante estándar y módulo dual MADI/DADlink como ajustado a la fábrica. Diseñado para la instalación de emisiones y medios donde se requiere una huella más pequeña. Una ranura para tarjetas de expansión para E/S adicionales.

#### Matrimonio de ruta

| Recurso                          | Capacidad        |
| -------------------------------- | ---------------- |
| Matrix de ruta                   | 528 × 528        |
| Procesador de resumen MON        | 256 × 32 canales |
| Ranuras de tarjetas de expansión | 1                |

#### E/S nativa

| Interfaz                                          | Número de canales                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------- |
| AES3 I/O                                          | 16 ch @ 48 kHz (8 stereo pairs)           |
| MADI I/O                                          | 64 ch @ 48 kHz                                               |
| AoIP Dante                                        | 64 ch @ 48 kHz                                               |
| Vía tarjeta de expansión (máx) | Hasta 128 × 128 ch adicional                                              |
| DADlink / MADI vía SFP                            | Hasta 256 × 256 DADlink o 128 × 128 MADI/HotLink ch @ 48 kHz |

#### E/S digital y sincronización

| Parámetro                    | Valor                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Tasa de muestreo soportada   | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fixed 48 kHz; Dante 44.1 – 192 kHz |
| Latencia del sistema interno | 7 muestras (ajustables 3 – 31 muestras)                                                                          |
| DADlink format               | latencia de 28 bits flotante, muestreo cero                                                                                         |
| Synchronisation sources      | Reloj de Word, Burst de Video Negro, AES11, Dante, MADI, DADlink, HotLink                                                           |
| Interfaz de red              | 1000BASE-T, RJ45                                                                                                                    |

#### Especificaciones electrónicas

| Parámetro                                                                     | Valor                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Conexión de energía                                                           | Doble entrada, doble PSU                                            |
| Calificación de corriente máxima                                              | 45 W                                                                |
| Tensión de entrada                                                            | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusión Principal                                                              | 1 T, conector IEC montado                                           |
| Conector principal                                                            | IEC 60309                                                           |
| Potencia de sección digital                                                   | 15 W                                                                |
| Potencia de la tarjeta de expansión (máx.) | 15 W                                                                |

#### Especificaciones mecánicas

| Parámetro              | Valor                                                      |
| ---------------------- | ---------------------------------------------------------- |
| Factor de forma        | Montura de atril de 19", 2 RU (88,9 mm) |
| Profundidad del chasis | 320 mm / 12,6"                                             |
| Ancho del cuerpo       | 435 mm / 17.2"                             |
| Peso                   | 3.3 kg / 7.3 lbs           |
| Enfriando              | 1 × ventilador interno de bajo ruido                       |

#### Medio ambiente y cumplimiento

| Parámetro                 | Valor                                           |
| ------------------------- | ----------------------------------------------- |
| Temperatura operativa     | 0 – 45 °C / 32 – 113 °F                         |
| Humedad                   | 20 – 85%, sin condensar                         |
| Cumplimiento EMC          | EN 55103-1, EN 55103-2, FCC Parte 15 Subparte B |
| Cumplimiento de seguridad | EN 60950-1:2006                 |

---

### Control Junior A.6\|Controlador de paquetes (JUNIOR-BASE)

**Resumen del producto:** Unidad de control compacto impulsada por PoE para control directo de DADman Control\|Empacar preajustes y cubos de enrutamiento. Conecta a través de Ethernet directamente a cualquier unidad Thunder\|Core. Compatible con CORE256-BASE, AXCNTR-BASE y AX64-BASE. Funciona independientemente del software DADman una vez configurado.

#### Características

- 6 botones RGB LED iluminados
- 6 RGB status LEDs
- Pantalla OLED por botón de 6 caracteres
- Conexión IP directa a Trunder\|Unidad central

#### Especificaciones

| Parámetro                                   | Valor                                                                                                                                                                                                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interfaz de red                             | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                         | IEEE 802.3af, clase 0                                                                                                                                                                                                                                                |
| Entrada de alimentación CC                  | Barril de 12 V, 5,5/2,1 mm (punta +5 V)                                                                                                                                                                                                                           |
| Consumo de energía (máx) | 2,5 W                                                                                                                                                                                                                                                                                |
| Dimensiones                                 | 116 × 48 × 40 mm / 4.6" × 1.9" × 1.6"                                                                                                                                                                                                |
| Peso                                        | 0.16 kg / 0.35 lbs                                                                                                                                                                                                                                   |
| Temperatura operativa                       | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Humedad                                     | 20 – 85%, sin condensar                                                                                                                                                                                                                                                              |
| Cumplimiento EMC                            | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Cumplimiento de seguridad                   | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

### A.7 MOM — Módulo Operante de Seguimiento (MOM-BASE)

**Vista general del producto:** Controlador de monitor remoto alimentado por PoE con codificador de volumen grande, 10 botones definibles por el usuario a través de 4 capas (hasta 40 funciones), y entrada GPI externa para talkback de pie de página. Conecta vía Ethernet a DADman para controlar cualquier dispositivo NTP/DAD con capacidad PRO\|MON.

#### Características

- Codificador rotativo de gran volumen con 27-LED anillo (resolución de 0.5 dB)
- 10 claves definibles por el usuario × 4 capas (total 40)
- Funciones preconfiguradas: 3 conjuntos de altavoces, 3 fuentes, Talkback, Dim, Corte, nivel de referencia
- Entrada GPI (mini-jack de 3,5 mm) para interruptor de pie externo

#### Especificaciones

| Parámetro                                   | Valor                                                                                                                                                                                                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interfaz de red                             | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                         | IEEE 802.3af, clase 0                                                                                                                                                                                                                                                |
| Entrada de alimentación CC                  | Cañón de 5 V, 5,5/2,1 mm (punta +5 V)                                                                                                                                                                                                                             |
| GPI input                                   | Mini-jack de 3,5 mm                                                                                                                                                                                                                                                                  |
| Consumo de energía (máx) | 5 W                                                                                                                                                                                                                                                                                  |
| Dimensiones                                 | 172 × 110 × 50 mm / 6.8" × 4.3" × 2.0"                                                                                                                                                                                               |
| Peso                                        | 1.0 kg / 2.2 lbs                                                                                                                                                                                                                                     |
| Temperatura operativa                       | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Humedad                                     | 20 – 85%, sin condensar                                                                                                                                                                                                                                                              |
| Cumplimiento EMC                            | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Cumplimiento de seguridad                   | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

## Apéndice B — Pinchos de Conector

_[Marcador de posicionamiento: diagramas pinout para todos los tipos de conector en todo el hardware soportado — XLR, DB25, BNC (MADI), BNC (Word Clock), RJ45, SFP, Thunderbolt 3, USB. A ser proporcionado por DAD engineering.]_

---

## Apéndice C — Formatos de audio y protocoles soportados

Este apéndice resume los formatos de audio y los protocolos soportados por el hardware controlado por DADman, incluyendo el recuento de canales a cada tasa de muestra. Todas las figuras son máximas; el conteo real de canales depende de las tarjetas de expansión específicas instaladas en cada unidad.

> **NOTA:** El canal cuenta con interfaces multiplexadas de tiempo (MADI, ADAT, DADLink) que disminuyen a mayores velocidades de muestreo porque se consume más ancho de banda por canal. Las cuentas de canales Dante y AES67 dependen de la configuración de red y de la configuración de Dante Controller.

---

### C.1 MADI (AES10)

MADI es compatible con todas las familias de hardware DAD / NTP Tecnología como opción de tarjeta de expansión (tarjeta dual MADI, Módulo MADI) o integrado en unidades seleccionadas.

**Capacidad del canal por puerto MADI:**

| Tasa de ejemplo                 | Modo antiguo (marco de 56 ches) | Modo de alta velocidad (marco 64-ch) |
| ------------------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| 44.1 / 48 kHz   | 56 canales                                         | 64 canales                                              |
| 88.2 / 96 kHz   | 28 canales                                         | 32 canales                                              |
| 176.4 / 192 kHz | 14 canales                                         | 16 canales                                              |

**Estándar:** AES10-2008 (MADI Serial) y AES10-2003 (MADI-E extendió).

**Interfaces físicas:**

- Coaxial BNC (75 cm) — longitud máxima de aproximadamente 100 m (coaxial estándar)
- SFP óptico: fibra multimodo o de un solo modo dependiendo del tipo de módulo SFP; hasta varios kilómetros con SFP de un solo modo

**Modos de fotograma:**

- **Modo antiguo:** Longitud de marco fijada en el tamaño del marco de 48 kHz. En 88.2/96 kHz, los pares de canales adyacentes son multiplexados de tiempo (S/MUX2), reduciendo a la mitad el número de canales. A 176.4/192 kHz, grupos de cuatro canales son multiplexados (S/MUX4). Compatible con la mayoría de los equipos MADI.
- **Modo de alta velocidad:** La longitud del marco sigue la tasa real de muestra, reduciendo la latencia a 88,2 kHz o superior. Ambos extremos del enlace MADI deben estar en el mismo modo.

> **IMPORTANTE:** Ambos extremos de cada conexión MADI deben usar el mismo modo de velocidad de fotogramas y configuración de tamaño de marco. Mismatch no producirá errores de audio o reloj. Verifique los ajustes en la pestaña Conf en ambos dispositivos conectados.

---

### C.2 ADAT (S/PDIF Óptico, ADAT Lightpipe)

ADAT interfaces ópticas están soportadas en tarjetas de expansión de hardware DAD. ADAT utiliza S/MUX (muestreo de muestra) para llevar audio a una tasa de muestreo más alta.

| Tasa de ejemplo                 | Canales (por puerto ADAT) | Modo          |
| ------------------------------- | -------------------------------------------- | ------------- |
| 44.1 / 48 kHz   | 8 canales                                    | ADAT estándar |
| 88.2 / 96 kHz   | 4 canales                                    | S/MUX2        |
| 176.4 / 192 kHz | 2 canales                                    | S/MUX4        |

**Interfaz física:** TOSLINK conector óptico.

**Estándar:** Alesis ADAT protocolo óptico.

> **NOTA:** ADAT no está definido por encima de 96 kHz en el estándar original. El soporte para S/MUX4 a 176.4/192 kHz requiere ambos dispositivos conectados para soportar esta extensión. Verificar compatibilidad con equipos conectados.

---

### C.3 AES3 (AES/EBU)

El audio digital AES3 transporta dos canales por par de cable (un par estéreo). El hardware DAD normalmente proporciona E/S AES3 a través de conectores de arranque DB25, cada uno con ocho pares estéreos (16 canales).

| Tasa de ejemplo                 | Canales por par AES3                                | Canales por DB25 (8 pares) |
| ------------------------------- | --------------------------------------------------- | --------------------------------------------- |
| 44.1 / 48 kHz   | 2                                                   | 16                                            |
| 88.2 / 96 kHz   | 2 _(Doble alambre / Doble Wire)_ | 16                                            |
| 176.4 / 192 kHz | 2 _(Quad Wire)_                  | 16                                            |

**Standard:** AES3-2009.

**Interfaces físicas:**

- XLR equilibrado (profesional - estándar AES3)
- Brote DB25 (a través de TASCAM estándar en la industria o cabalgado de pinout Yamaha)

**Operación de alta tasa de muestreo:** A 88.2/96 kHz, algunas implementaciones AES3 utilizan **Double Wire** (dos pares AES3 por canal para aumentar el ancho de banda). A 176,4/192 kHz, **Quad Wire** utiliza cuatro pares por canal. Los detalles de la implementación AES3 de DADman dependen del modelo de hardware — consulte la guía de instalación de hardware para la unidad específica.

---

### C.4 Dante (Audinés)

Dante es un protocolo de audio sobre-IP que transmite audio a través de la infraestructura Ethernet estándar. Las unidades DADman soportan Dante mediante tarjetas de expansión y módulos integrados.

**Capacidad del canal por implementación de Dante:**

| Implementación                                                                                            | Canales máximos (Tx + Rx)  | Hardware típico                                        |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------ |
| Tarjeta de expansión Dante (Brooklyn 2/3)                                              | 128 Tx + 128 Rx (per card) | AX32 · DX32R · Penta 720 · Penta 721s · MTRX · MTRX II |
| Módulo Dante 64-Canal                                                                                     | 64 Tx + 64 Rx                                 | AX32 · Penta 720 · Penta 721s · MTRX                   |
| Dante 256 IPCore _(v5.8.1.6 firmware)_ | 256 Tx + 256 Rx                               | AX64 · Centro AX · Núcleo 256 · MTRX II                |
| Tarjeta Dante _(independiente)_                                                        | 512 Tx + 512 Rx                               | Seleccione unidades familiares 1                       |

**El recuento de canales es independiente de tasa de muestra** — los canales de Dante no se reducen a tasas de muestreo más altas. En su lugar, un mayor índice de muestreo consume más ancho de banda por canal. La capacidad de red debe ser medida en consecuencia.

**Requisitos de red:**

- Se recomienda Gigabit Ethernet para todas las instalaciones de Dante
- Se recomienda el interruptor de red dedicado para el tráfico de audio
- Los interruptores deben soportar multicast (se recomienda reprimir IGMP)
- PTP (IEEE 1588) usado para sincronización de reloj en todos los dispositivos Dante

**Protocols y estándares:**

- Protocolo nativo Dante (Propietario Audinado)
- Modo de interoperabilidad AES67 (reduce el número de canales a límites AES67)
- ST 2110-30 _(a través de DDM de firmware v1.1.2.4; Brooklyn 3 sin DDM de v1.1.0.3)_

---

### C.5 DADLink

DADLink es una interconexión óptica propietaria de DAD usando la ranura para módulos MADI con transceptores ópticos SFP. Proporciona interconexión ultra baja latencia directa unidad-unidad-unidad.

| Tasa de ejemplo                 | Canales por conexión DADLink |
| ------------------------------- | ---------------------------- |
| 44.1 / 48 kHz   | 128                          |
| 88.2 / 96 kHz   | 64                           |
| 176.4 / 192 kHz | 32                           |

**Latencia:** Aproximadamente 1 microsegundo (efectivamente cero — todas las entradas y salidas a través de las unidades conectadas a DADLink están alineadas en fase siempre que el reloj sea correcto).

**Interfaz física:** SFP óptico — módulos de transmisión SFP compatibles necesarios en ambos extremos.

**Hardware compatible:** AX64 · AX Center · Core 256 · MTRX II · AX32 · DX32R · Penta 720 · Penta 721s _(Family 1 from firmware v2. .1.2)_

**Requisitos de sincronización:** Las unidades conectadas a DADLink deben compartir un reloj común. Utilice DADLink o Word Clock como fuente de sincronización entre unidades.

---

### C.6 Trueno 3 (Torren\|núcleo)

La E/S de audio de Thunderbolt 3 es compatible exclusivamente con hardware de generación Thunder\|Core (AX64, AX Center, Core 256) mediante el controlador DAD Thunderbolt 3.

| Hardware       | Tornillo de 3 canales | Notas           |
| -------------- | --------------------- | --------------- |
| **AX64**       | 64 Tx + 64 Rx         | A 44,1 / 48 kHz |
| **Centro AX**  | 128 Tx + 128 Rx       | A 44,1 / 48 kHz |
| **Núcleo 256** | 256 Tx + 256 Rx       | A 44,1 / 48 kHz |

**A altas tasas de muestreo:** El recuento de canales de Thunderbolt 3 reduce proporcionalmente. A 88,2/96 kHz cuenta la mitad; a 176,4/192 kHz se cuadran.

**Conductor:**

- macOS: Controlador de audio núcleo (DADDriverSetup) — versión actual v1.2.2
- Windows: controlador ASIO — versión actual v1.1.2

**Caballo:** Cable de Trueno Certificado 3 con una puntuación mínima de 20 Gbps. Los cables pasivos soportan aproximadamente 0,5 m; los cables ópticos activos soportan más largas.

---

### C.7 AES67 y ST 2110-30

AES67 y ST 2110-30 son estándares de audio IP soportados a través de las interfaces Dante y Ravenna en hardware DAD compatible.

| Estándar            | Transporte                     | Número de canales                                 | Disponible desde                                                                                                                        |
| ------------------- | ------------------------------ | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **AES67**           | IP (capa 3) | Hasta 512 (dependiente de red) | Todo el hardware equipado con Dante-_(modo interoperabilidad AES67)_                                                 |
| **ST 2110-30**      | IP (capa 3) | Hasta 512 (dependiente de red) | firmware v5.8.2 vía DDM; Brooklyn 3 sin DDM de v1.1.0.3 |
| **Ravenna / AES67** | IP (capa 3) | Hasta 512 (dependiente de red) | Tarjeta Ravenna _(opción de hardware v5.8.2)_                                        |

**Requisitos de red para ST 2110-30:** Interruptores gestionados de grado profesional con timestamping de hardware PTP (IEEE 1588) . Se requiere esnooping IGMP. Consulta SMPTE TR-2110 para orientación de arquitectura de red.

---

### C.8 Soporte de Formato de hardware Murgx

La siguiente matriz muestra qué formatos están disponibles en cada familia de hardware como estándar o a través de tarjetas de expansión. ✓ = estándar / incorporado; E = opción de tarjeta de expansión; — = no compatible.

| Formatear                                   | Centro AX | Núcleo 256 | AX64 | AX32 | DX32R | Penta 720 | Penta 721s | MTRX II | Estudio MTRX |
| ------------------------------------------- | --------- | ---------- | ---- | ---- | ----- | --------- | ---------- | ------- | ------------ |
| MADI (coaxial)           | E         | E          | E    | ✓    | ✓     | ✓         | ✓          | ✓       | —            |
| MADI (SFP óptico)        | E         | E          | E    | E    | —     | E         | E          | E       | —            |
| ADAT                                        | E         | E          | E    | E    | —     | —         | —          | E       | ✓            |
| AES3 (tarjeta analógica) | E         | E          | E    | E    | ✓     | E         | E          | E       | ✓            |
| Dante                                       | E         | E          | E    | E    | ✓     | E         | ✓          | ✓       | ✓            |
| Dante 256 IPCore                            | ✓         | ✓          | ✓    | —    | —     | —         | —          | ✓       | —            |
| DADLink                                     | E         | E          | E    | E    | E     | E         | E          | E       | —            |
| Trueno 3                                    | ✓         | ✓          | ✓    | —    | —     | —         | —          | —       | —            |
| Tarjeta Ravenna                             | E         | E          | E    | —    | —     | —         | —          | —       | —            |
| AES67                                       | E         | E          | E    | E    | ✓     | E         | ✓          | ✓       | ✓            |
| ST 2110-30                                  | E         | E          | E    | E    | —     | —         | —          | ✓       | —            |
| Reloj de palabra E/S                        | ✓         | ✓          | ✓    | ✓    | ✓     | ✓         | ✓          | ✓       | ✓            |

_E = requiere tarjeta de expansión o módulo. Las opciones de expansión varían según la generación del producto y las ranuras de tarjetas disponibles. Consulte la guía específica de instalación de hardware para los detalles de la configuración de la ranura._

> **NOTA:** Esta matriz refleja las capacidades de hardware desde la compilación DADman v5.8.2 (enero de 2026). Se pueden introducir nuevas opciones de tarjetas de expansión en posteriores revisiones de firmware o hardware. Compruebe [digitalaudiosupport.com](https://www.digitalaudiosupport.com) para el configurador de producto actual.

---

## Apéndice D — Atajos de teclado

Consulte [Capítulo 7, Sección 7.10.3] para la referencia completa del acceso directo al teclado.

---

## Apéndice E — Registro de cambios

Este apéndice documenta que el software DADman se publica desde 2019 a la versión cubierta por este manual. Las entradas son las más recientes primero. Cada entrada muestra la versión del software, versiones de firmware complementarias, nuevas características y notables correcciones de errores. Las versiones sólo de firmware se señalan por separado.

Las notas de la versión completa, incluyendo los registros detallados de cambios de firmware, están disponibles en el Centro de Descarga de [digitalaudiosupport.com](https://www.digitalaudiosupport.com).

---

### Compilación DADman v5.8.2 - 2026-01-19 _(Versión actual)_

| Componente                   | Versión                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                       | v5.8.2 b2 — macOS 10.13–15, Windows 10/11 |
| Controlador TB3 — macOS      | v1.2.2 _(sin cambio)_                  |
| Controlador TB3 — Ventanas   | v1.1.2 _(sin cambio)_                  |
| Firmware del núcleo          | v1.1.2.4                                  |
| Dante 256 IPCore             | v1.0.3.1                                  |
| Firmware Familiar 1          | v2.4.6.4                                  |
| Módulo Dante de Brooklyn 2   | v1.0.3.1                                  |
| Módulo Dante de Brooklyn 3   | v1.1.0.3                                  |
| Firmware de MTRX Studio      | v1.1.6.3                                  |
| Estudio MTRX Dante 64 IPCore | v1.0.3.1                                  |
| Firmware de tarjeta Dante    | v1.0.3.1 _(nuevo)_     |

**Nuevo en DADman:**

- Tarjeta Ravenna ahora compatible con DADman
- Tarjeta Dante y tarjeta Ravenna: la velocidad de muestreo de red ahora es configurable cuando SRC está activado
- EuCon: número de metros aumentado a 16

**Nuevo en firmware:**

- Todo el firmware de Dante actualizado a las últimas versiones
- ST 2110-30 y AES67 mejorado disponible para todas las implementaciones de Dante a través de DDM
- Módulo Brooklyn 3: ST 2110-30 ahora disponible sin DDM (requiere el último Dante Controller)
- Soporte para la nueva tarjeta Ravenna (RAVENNA / AES67 / ST 2110-30)
- Dynaudio Control 02 ahora soportado junto con Control 01

**Correcciones de errores:**

- macOS: El menú de Talkback no muestra el valor seleccionado correcto en el cuadro de diálogo Perfil de seguimiento
- EuCon: Nivel de la sala de control no reactivado después de desactivar el nivel de Ref
- macOS: Mejora de la estabilidad de la comunicación de Thunderbolt
- Varias correcciones menores

---

### DADman v5.8.1 compilar 6 - 2025-05-01

| Componente                 | Versión                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| DADman                     | v5.8.1 b6 — macOS 10.13–15, Windows 10/11  |
| Controlador TB3 — macOS    | v1.2.2 _(sin cambio)_                   |
| Controlador TB3 — Ventanas | v1.1.2 _(sin cambio)_                   |
| Firmware del núcleo        | v1.1.1                                                     |
| Firmware Familiar 1        | v2.4.5.1                                   |
| Firmware de MTRX Studio    | v1.1.5.1 _(sin cambio)_ |

**Nuevo en DADman:**

- **Grupos de ganancia de micrófono** — múltiples canales de entrada de micrófonos pueden ser enlazados para que ajustando ganancia o silencio en cualquier canal mueva todos los canales del grupo simultáneamente, preservando compensaciones relativas entre canales. Soportado en todos los productos **excepto MTRX Studio**. Necesita una actualización del firmware. Potencia fantasma e inversión de fase no están agrupados. Mantenga Alt/Opción para ajustar un canal individual dentro de un grupo sin afectar a otros.
- Control\|Pack: Los preajustes de ruta ahora pueden ser reordenados dentro del diálogo de configuración de ruta _(requiere actualización de firmware)_
- Control\|Pack: El estado de activación se muestra ahora en el diálogo de configuración de ruta
- macOS: Las columnas de la lista de dispositivos se pueden ordenar haciendo clic en los encabezados de las columnas

**Correcciones de errores:**

- Control\|Pack: Varias correcciones al cuadro de diálogo de configuración de ruta
- Ventanas: Gráficos de ajuste de ruta mejorados
- Ventanas: error al manejar MIDI resuelto
- macOS: Problemas gráficos en pantallas escaladas con grandes ventanas de DADman
- macOS: Error de actualización de color de estado en el cuadro de diálogo de configuración de ruta

---

### Versión sólo en firmware — 2025-01-09

| Componente          | Versión                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| DADman              | v5.8.0 b8 _(sin cambio)_                         |
| Firmware del núcleo | v1.1.0.4 _(corrección de error)_ |

**Corrección de errores en firmware:**

- Centro AX: error de temporización del chipset ADC que impidió que el audio pasara en algunos casos — arreglado
- Tarjeta Dante Centro AX: Sincronización externa con tarjeta de red Dante no configurada correctamente — arreglado

---

### Construir DADman v5.8.0 8 - 2024-12-01

| Componente                 | Versión                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                     | v5.8.0 b8 — macOS 10.13–15, Windows 10/11 |
| Controlador TB3 — macOS    | v1.2.2 _(nuevo)_                       |
| Controlador TB3 — Ventanas | v1.1.2 _(sin cambio)_                  |
| Firmware del núcleo        | v1.1.0.3                                  |
| Firmware Familiar 1        | v2.4.4.1                                  |
| Firmware de MTRX Studio    | v1.1.5.1                                  |

**Nuevo en DADman:**

- **Control\|Pack** — sistema predefinido de ruta para Thunder\|Unidades de núcleo (AX64, Centro AX, Núcleo 256) con hasta 32 preajustes por unidad, cada uno soporta hasta cuatro cubos de entrada conmutables. Incluye interruptor automatizado a través de detección de nivel de señal, integración de tono del piloto AE6 y activación de conectividad del puerto. Necesita una actualización del firmware.
- Soporte para CARD-2MADI-SO (720251A) — Tarjeta MADI con conversión de tasa de muestreo bidireccional
- Vista de seguimiento: controles plegables ahora mostrados en columnas cuando se configuran muchos plegables
- Windows: El sistema operativo mínimo soportado es ahora Windows 10 (Windows 7 y 8 ya no soportado)

**Nuevo en TB3 Driver (v1.2.2):**

- Cuando la extensión DriverKit no está activada correctamente, se muestran instrucciones y una captura de pantalla para guiar al usuario
- Cuando la instalación se completa y la extensión se activa, el controlador trae el instalador al primer plano y sale limpiamente
- Cuando no hay ningún dispositivo conectado: se muestra un mensaje "No hay dispositivo conectado" en lugar de caer vacío

**Correcciones de errores:**

- Perfil de seguimiento: Cargando y cancelando un perfil corregiría el archivo al guardar siguiente — arreglado
- macOS: Artefactos de desplazamiento en resoluciones de visualización escalada — arreglado
- macOS: Se produce un error al abrir DADman haciendo doble clic en un archivo en Finder — arreglado
- macOS: Problema de comunicación raro de Thunderbolt — arreglado _(también requiere una actualización del controlador TB3 a v1.2.2)_
- macOS: Los diálogos de apertura de archivos ya no permiten seleccionar directorios

> **Problema conocido (macOS 15 Sequoia):** DADman puede no conectarse a dispositivos de red en el primer lanzamiento en macOS 15. Workaround: cierre la sesión y vuelva a iniciar sesión. Las conexiones de tornillo triturado no se ven afectadas. Ver: \* Capítulo 9, Sección 9.3\*.

---

### Construcción de DADman v5.7.2 1 - 2024-09-25

| Componente                 | Versión                                                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman                     | v5.7.2 b1 — macOS 10.13–15 (incl. Sequoia), Windows 10/11 |
| Controlador TB3 — macOS    | v1.1.26                                                                                                      |
| Controlador TB3 — Ventanas | v1.1.2 _(sin cambio)_                                                                     |
| Firmware del núcleo        | v1.0.6.3                                                                                     |
| Firmware Familiar 1        | v2.4.3.1                                                                                     |
| Firmware de MTRX Studio    | v1.0.4.2                                                                                     |

**Nuevo soporte de hardware:** Controlador de monitor Dynaudio Control 01.

**Nuevo en DADman:**

- soporte de macOS 15 Sequoia _(problema conocido de conectividad de red — ver v5.8.0)_
- Soporte para el módulo de Thunderbolt 722150B
- Botones de cabecera de sección (AD / DA / Mon / Con / Conf) ahora muestran tooltips; haciendo clic en el encabezado de una sección colapsa o expande esa sección
- "Acerca de DADman" ahora tiene un botón de **Copiar información** — copia la versión de DADman, lista de dispositivos conectados, Versión del sistema operativo y versiones de controladores al portapapeles para su uso en peticiones de soporte
- Menú "Abrir perfil reciente" añadido a la barra de menú principal
- macOS: Ahora se puede cambiar el tamaño de la ventana del perfil; la última pestaña activa se restaura al volver a abrir
- Ventanas: opción "Minimizar a la bandeja" reemplazada por la opción **Mostrar en** con tres opciones: Barra de tareas sólo · Barra de tareas y bandeja del sistema · Solo la bandeja del sistema
- Símbolo de inversión de fase cambiado de "Ph" a "Ø" para evitar confusión con energía fantasma

**Correcciones de errores:**

- Corregido el error de mapeo de parámetros EQ al cambiar entre conjuntos de salida del monitor —
- Windows: DADman falló al iniciar algunos sistemas debido a que falta `VCRUNTIME140_1.DL` — arreglado
- Ventanas: Bloqueo de dispositivo con cortafuegos de BitDefender en ciertos rangos IP — arreglado
- macOS: Fallos de lectura/escritura de archivos ahora avisa al usuario
- Informe de velocidad de fotogramas de salida MADI corregido para DSD sobre PCM
- Retraso en el procesamiento de canales superiores a 16 — arreglado

**Nuevo en firmware (Thunder\|Core v1.0.6.3):**

- Canal ADAT 3 a 88.2/96 kHz fix; ADAT PLL y bloqueo mejorado
- Error en la fase de la tarjeta DA en el canal 8 corregido (placa base analógica del Centro AX)
- Filtrado de velocidad de muestra de DADLink corregido
- Dante: Se ha corregido la alarma de error de la tarjeta; se ha añadido la supervisión del FPGA
- Soporte para el módulo de Thunderbolt 722150B añadido

---

### Versión sólo en firmware — 2024-03-06

| Componente          | Versión                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| DADman              | v5.7.0 b1 _(sin cambio)_                         |
| Firmware Familiar 1 | v2.4.2.2 _(corrección de error)_ |

**Corrección de errores:** Interfaz DigiLink y error de formato introducido en el firmware de Familia 1 v2.4.1.2 — corregido. No se aplica al hardware de marca DAD.

---

### Construcción de DADman v5.7.0 1 - 2023-11-15

| Componente                 | Versión                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                     | v5.7.0 b1 — macOS 10.13–14, Windows 10/11 |
| Controlador TB3 — macOS    | v1.1.26 _(sin cambio)_                 |
| Controlador TB3 — Ventanas | v1.1.2 _(sin cambio)_                  |
| Firmware del núcleo        | v1.0.5.2                                  |
| Firmware Familiar 1        | v2.4.1.2                                  |
| Firmware de MTRX Studio    | v1.1.3.1                                  |

> **Nota:** macOS 10.10 (Yosemite), 10.11 (El Capitán), y 10.12 (Sierra) ya no son compatibles con esta versión.

**Nuevo en DADman:**

_Modos de barra de menú y bandeja del sistema:_ Ahora DADman puede ejecutarse en segundo plano con la mínima presencia del escritorio. macOS: tres modos de visualización: Dock solamente, barra de menú y acoplamiento, y barra de menú sólo (oculta del muelle; restaure con mañana: 1 o lanzando DADman de nuevo). Ventanas: Modo de bandeja del sistema añadido — clic izquierdo para mostrar/ocultar; clic derecho para mostrar/ocultar/Salir.

_Modo RAW de Talkback:_ Un nuevo modo de conversación en el que el talkback está activo sólo mientras el botón se mantiene pulsado y termina cuando se suelta (pulsar a hablar). El modo de interruptor/latch anterior sigue estando disponible. El modo RAW se aplica al hardware MOM y al control del panel frontal de MTRX Studio; las superficies EuCon siempre usan el modo de toque/latch.

_DADLink para todos los productos:_ DADLink ya está disponible en hardware Family 1 (AX32, DX32, Penta 720, Penta 721s) vía firmware v2. .1.2, además de Thunder\|Unidades de núcleo.

_Mejoras en la vista Matriz:_ El tamaño máximo de la vista de la matriz ahora es configurable en Preferencias (32×32, 64×64, 128×128 o 256×256). Consejos para mostrar números de canal y etiquetas en el hover de las matriz. Trackpad / rueda de desplazamiento ahora desplaza la vista de la matriz en lugar de la ventana completa. Nombres de puertos de DADLink mostrados en los tooltips.

_Gestión de archivos:_ Los archivos `.dms` y `.dmprof` ahora pueden abrirse directamente desde Finder o el Explorador de Windows haciendo doble clic. Apertura de archivos de línea de comandos soportada: `open -a DADman settings.dms profile.dmprof` (macOS); `DADman.exe settings.dms profile.dmprof` (Windows). DADman ahora reintenta continuamente las conexiones unitarias en lugar de agotar el tiempo de espera. Windows: DADman guarda automáticamente los archivos al cerrar sesión, apagar o reiniciar.

**Atajos de teclado (primero documentados formalmente en esta versión):**

| Accin                          | macOS               | Ventanas         |
| ------------------------------ | ------------------- | ---------------- |
| Archivo > Abrir…               | AO                  | Ctrl + O         |
| Archivo > Guardar              | TI                  | Ctrl+S           |
| Archivo > Guardar como…        | A/S                 | Ctrl+Mayús+S     |
| Archivo > Abrir perfil…        | A/S                 | Ctrl+Alt+O       |
| Archivo > Importar perfil…     | ��� I               | Ctrl+Alt+I       |
| Archivo > Guardar perfil       | A/S                 | Ctrl+Alt+S       |
| Archivo > Guardar perfil como… | Mañana              | Ctrl+Alt+Mayús+S |
| Archivo > Cerrar perfil        | A/S                 | Ctrl+Alt+W       |
| Mostrar ventana principal      | ⌘⇧1                 | —                |
| Lista de dispositivos          | M.° | Ctrl+Mayús+L     |
| Perfil de seguimiento          | M/M                 | Ctrl+Mayús+M     |
| Ajustes / Opciones             | ⌘,                  | Ctrl+,           |

**Correcciones de errores:**

- Corrupción de datos al añadir matrices plegables con más de 1.024 elementos

---

### DADman v5.6.9 build 1 - 2023-06-14 _(aproximado)_

| Componente                 | Versión                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| DADman                     | v5.6.9 b1 — macOS 10.10–13, Windows 10/11  |
| Controlador TB3 — macOS    | v1.1.26                                                    |
| Controlador TB3 — Ventanas | v1.1.2 _(primera versión oficial)_      |
| Firmware del núcleo        | v1.0.3.4                                   |
| Firmware Familiar 1        | v2.3.6.1 _(sin cambio)_ |

**Nuevo en DADman:**

- **Avid MTRX II** añadido a la lista de hardware soportada
- **Clonar Configuración** — copia todos los ajustes de una unidad de hardware a otra dentro del mismo grupo familiar. Tres grupos de familia definidos: Familia 1 (MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s), Familia 2 (MTRX II · AX64 · Centro AX · Núcleo 256), Familia 3 (MTRX Studio)
- **DADLink** — interconexión de audio óptico de alto recuento de canales propietaria para AX64, AX Center, Core 256 y MTRX II a través del módulo mini MADI con transceptores ópticos SFP. Hasta 128 canales a 48 kHz, 64 canales a 96 kHz, 32 canales a 192 kHz por enlace. Aproximadamente 1 μs latencia.
- Controlador ASIO de Windows — primera versión oficial (no beta)

---

### Construir DADman v5.6.7 1 - 2023-02-06

| Componente                 | Versión                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                     | v5.6.7 b1 — macOS 10.10–12, Windows 10/11 |
| Controlador TB3 — macOS    | v1.1.22                                                   |
| Controlador TB3 — Ventanas | v1.0.8                                                    |

> **Nota:** El soporte de Windows 7 ha desaparecido de esta versión.

**Nuevo en DADman:**

- **Centro DAD AX** añadido a la lista de hardware soportada
- Controlador ASIO de Windows oficialmente lanzado (sin beta)

---

### Versión sólo en firmware — 2022-12-05

| Componente          | Versión                                                                               |
| ------------------- | ------------------------------------------------------------------------------------- |
| DADman              | v5.6.5 b1 _(sin cambio)_           |
| Firmware Familiar 1 | v2.3.6.1 _(nuevo)_ |

**Nuevo en firmware:**

- Módulo Brooklyn 3 Dante ahora soportado junto a Brooklyn 2
- Mecanismo de restablecimiento de tarjetas 3G mejorado — corrige un problema de temporización que podría evitar que los canales SDI se activen correctamente después de encender

---

### DADman v5.6.3 compilar 8/23 - 2022-07-01

| Componente              | Versión                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| DADman                  | macOS v5.6.3 b8 · Windows v5.6.3 b23 |
| Controlador TB3 — macOS | v1.1.9.4 _(beta)_                 |

**Nuevas características:**

- Soporte de **Windows 11** añadido
- El orden del conjunto de fuentes y salidas en la configuración del perfil de seguimiento ahora puede ser reorganizado después de la configuración inicial
- Windows: DADman ahora busca automáticamente dispositivos de red cuando las conexiones de red cambian

**Correcciones de errores:**

- Modo oscuro: las etiquetas plegables ahora se muestran correctamente

---

### DADman v5.6.2 compilar 13b - 2022-05-27

| Componente              | Versión                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| DADman                  | v5.6.2 b13b — macOS 10.10–12, Windows 7/8/10 _(beta)_ |
| Controlador TB3 — macOS | v1.1.9.4 _(primera versión — beta)_                   |

**Nuevas características:**

- **Thunder\|Core hardware support** — primera versión que soporta AX64, AX Center y Core 256 a través de Thunderbolt 3
- soporte de macOS 12 Monterey
- Auto-abrir lista de dispositivos cuando DADman inicia sin unidades conectadas
- **Perfil de importación** añadido al menú Archivo — importa un Perfil de Seguimiento de cualquier unidad conectada y aplica una configuración de mejor ajuste a la E/S de la unidad actual
- Modo oscuro: mejorado el renderizado de la etiqueta plegable

---

### Construir 2 - 2021-06-03 de DADman v5.5.0

| Componente | Versión                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.5.0 b2 — macOS 10.10–11 (Intel y Apple Silicon M1), Windows 7/8/10 |

**Nuevas características:**

- **Soporte nativo de Apple Silicon (M1)** — DADman funciona nativamente con Apple Silicon sin traducción de Rosetta 2
- MOM: Botones de gestión de pases encendido/apagado y encendido/apagado EQ ahora disponibles como claves MOM asignables en PRO\|MON

---

### Construir DADman v5.4.5 1 - 2021-01-10 / 2021-03-18

| Componente | Versión                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.4.5 b1 — macOS 10.10–11 (Intel), Windows 7/8/10 |

**Nuevas características:**

- NTP Penta 721s añadido a la lista de hardware soportada _(build de enero 2021)_
- soporte para macOS 11 Big Sur (sólo Intel) _(construcción de marzo de 2021)_

---

### Construir DADman v5.4.4 de 2 a 2020-09-30

**Sólo se corrigen errores:** Comportamiento de administración de basura en múltiples sub-salidas; Recordación de EuCon en Avid S6; Error de configuración de SPQ introducido en v5. .4 b1; corrección de tiempos de actualización del firmware de MTRX Studio.

---

### Construir DADman v5.4.3 de 2 a 2020-08

| Componente | Versión                                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| DADman     | v5.4.3 b2 — macOS 10.10–15 _(Catalina nueva)_, Windows 7/8/10 |

**Nuevas características:**

- soporte de macOS 10.15 Catalina
- Consejos sobre botones y nudos en toda la interfaz de DADman
- Auto-asignación de canales sucesivos en el cuadro de diálogo de Grupos de Perfil
- AD / DA / Mon / Con / Conf sección ampliado/colapsado estado almacenado en Preferencias
- Comprobaciones de los valores seleccionados en los menús emergentes
- Advertencia mostrada al descargar el firmware que es más antiguo o igual que la versión instalada actualmente
- Peak/hold metering on AD y DA channels for AX32, Penta y MTRX hardware _(requiere firmware v2.3.2.1 o superior)_
- Etiquetas largas de canal truncadas con ellipsis para evitar el desbordamiento del diseño

---

### DADman v5.3.4 compilación 3 - 2019-08-01

| Componente | Versión                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| DADman     | v5.3.4 b3 — macOS 10.10–14 _(Mojave nuevo)_, Windows 7/8/10 |

**Nuevas características:**

- **Etiqueta de puertos para tarjetas de E/S digitales** — cada puerto físico (MADI, Dante, AES3) puede ser asignado una etiqueta de texto individual; las etiquetas se almacenan en la unidad de hardware y se muestran en la vista de la matriz
- Soporte de tarjeta DigiLink _(Sólo Avid MTRX — no aplicable al hardware DAD)_
- soporte Mojave macOS 10.14 _(ya no requiere un perfil de color)_
- Ejecutar aplicaciones más rápidas en macOS; reducir la carga general de la CPU

---

## Apéndice F — Declaraciones de cumplimiento

Vea [Front Matter, Sección FM.9 — Conformidad regulatoria] para declaraciones CE, FCC, ICES-003, UKCA y RoHS.

_[Declaraciones finales que serán insertadas por DAD / NTP Tecnología y legales antes de la publicación.]_

---

## Appendix G — Glossary

Los términos están listados alfabéticamente. Cuando un término tiene una abreviatura común, la entrada aparece bajo la forma completa con la abreviatura señalada, y una referencia cruzada se coloca en la posición alfabética de la abreviatura. Los nombres de productos DAD y los términos marcados se presentan como aparecen en el producto o en DADman.

---

**pestaña DA**
La pestaña _Análogo_ en DADman. Muestra el clip de canal para todos los canales de entrada analógica en las unidades de hardware conectadas proporcionando controles de ganancia de entrada de micrófono/línea, silencio, inversión de fase, potencia fantasma (+48 V), y etiquetas de canales. La medición de cada entrada se muestra en esta pestaña. Vea también: _pestaña DA_.

**ADAT** (interfaz óptica Alesis Digital Audio Tape)
Una interfaz de audio digital estándar transmitiendo hasta 8 canales de audio a 44. o 48 kHz, o 4 canales a 88,2 o 96 kHz, sobre un solo cable de fibra óptica TOSLINK. Soportado como una opción de E/S en seleccionar hardware DAD. A tasas de muestreo dobles, el recuento de canales se reduce a la mitad, lo que se denomina _S/MUX_. Vea también: _S/MUX_.

**AES3** (AES/EBU)
Un estándar de interfaz de audio digital equilibrado profesional definido por la Audio Engineering Society (AES) y la European Broadcasting Union (EBU). Carreta dos canales de audio PCM sobre un solo cable XLR equilibrado. Comúnmente denominado AES/EBU. Soportado en hardware DAD como un formato discreto de E/S, normalmente a través de conectores de arranque DB25 con múltiples pares AES3. Vea también: _AES67_.

**AES67**
Un estándar de interoperabilidad para audio-over-IP (AoIP) definido por la Sociedad de Ingeniería de Audio. AES67 define una capa de transporte común que permite a Dante, Ravenna, WNEU y otras implementaciones AoIP intercambiar flujos de audio. El hardware DAD con interfaces Dante o Ravenna se puede configurar para el modo AES67. Ver también: _Dante_, _Ravenna_, _ST 2110-30_.

**ASIO** (Audio Stream Input/Salida)
Una arquitectura de controladores de audio de baja latencia para Windows desarrollada por Steinberg. El controlador DAD Thunderbolt 3 ASIO expone las interfaces Thunder\|Core (AX64, AX Center, Core 256) como dispositivos ASIO en Windows DAWs. Configurado a través del panel de control DAD ASIO, el cual proporciona el tamaño del búfer, la velocidad de muestreo y la cantidad de canales.

**Inicio automático**
La configuración de DADman para iniciar automáticamente cuando la computadora se inicie, cargando opcionalmente un archivo de configuración especificado y monitoreando el perfil sin interacción del usuario. En macOS, el autoarranque se logra a través de ítems de Login o un lanzador de retraso de AppleScript. En Windows, a través de la carpeta de inicio de Windows o del planificador de tareas. Ver: \* Capítulo 8, Sección 8.7\*.

**Centro AX**
Una interfaz de audio DAD en la familia de productos Thunder\|Core. Combina la conversión a bordo de A/D y D/A con una interfaz de red Dante y conectividad Thunderbolt 3. Soporta hasta 128 canales sobre Thunderbolt a 44.1/48 kHz. Controlado y configurado a través de DADman.

**AX32**
Un enrutador y convertidor de audio DAD. El producto de bandera del grupo de hardware Family 1, soportando hasta 256×256 puntos de enrutamiento a través de una matriz basada en Ethernet, con ranuras para tarjetas de expansión para MADI, Dante, AES3, E/S analógica, SDI y SPQ. Controlado a través de DADman.

**AX64**
Una interfaz de audio DAD en la familia de productos Thunder\|Core. Proporciona 64 canales de conectividad Thunderbolt 3 más opciones de expansión para MADI, Dante, AES3 y E/S analógica. Controlado a través de DADman.

**Cubo**
En Control\|Empacar presets de enrutamiento, un _cubo_ es una de las cuatro capas de entrada independientes dentro de un solo ajuste de enrutamiento. Cada cubo define un conjunto completo de canales fuente que pueden ser cambiados a las salidas predefinidas como una sola acción. Los cubos se cambian manualmente o automáticamente basado en detectores de señales. Vea también: _Control\|Pack_, _Rutting Preset_, _Trigger_. Ver: \* Capítulo 8, Sección 8.4\*.

**CE** (Conformité Européenne)
Una marca de producto obligatoria para los bienes vendidos dentro del Área Económica Europea, indicar que el producto cumple con todas las directivas aplicables de la UE en materia de seguridad, compatibilidad electromagnética y otros requisitos reglamentarios. El hardware DAD / NTP Tecnología lleva marcado CE. La Declaración de Conformidad completa está disponible en DAD y reproducida en _Apéndice F_.

**Clonar/Clonar**
Una operación de DADman que copia todas las configuraciones de una unidad de hardware conectada a otra dentro del mismo grupo de la familia de hardware. La clonación se realiza mediante el menú contextual Lista de dispositivos. Las unidades deben estar en el mismo grupo de familia; los ajustes para tarjetas de E/S no presentes en la unidad de destino se establecen en valores predeterminados de fábrica. Ver: \* Capítulo 8, Sección 8.3\*. Ver también: _Grupo familiar_.

**pestaña Con**
La pestaña _Conexiones_ en DADman. Muestra la matriz de enrutamiento de punto cruzado completa para la unidad conectada, con entradas en un eje y salida en el otro. Los cuadrados azules indican conexiones activas. Las conexiones se realizan haciendo clic en puntos cruzados; las conexiones múltiples se pueden hacer simultáneamente usando Shift+click para pares estéreo. Vea también: _Crosspoint_, _Ruturación de ruta_.

**Pestaña Conf**
La pestaña _Configuración_ en DADman. Proporciona control sobre los parámetros de sincronización (fuente del reloj, tasa de muestreo, Adapt To), ajustes específicos del formato (tasa de fotogramas MADI, configuración de Dante, opciones AES3) y configuración a nivel del puerto. El contenido de la pestaña Conf varía según el modelo de hardware y las tarjetas de expansión instaladas.

**Control 01/Control 02**
Controles de control de hardware DAD. Unidades de hardware compactas y dedicadas para el control práctico de las funciones de DADman sin necesidad de una superficie de control de terceros. Soportado desde DADman v5.8.2 build 2 (Control 01) y v5.8.2 build 2 (Control 02, introducido enero 2026).

**Control\|Pack**
Un sistema preestablecido de enrutamiento para el hardware Thunder\|Core (AX64, AX Center, Core 256) introducido en la compilación 8 de DADman v5.8.0. Permite hasta 32 preajustes de enrutamiento por unidad, cada uno con hasta cuatro cubos de entrada que cambian simultáneamente dentro de una única muestra de audio. Interruptor automático basado en detección de nivel de señal, integridad de tono del piloto AE6 o estado de conectividad del puerto. Ver: \* Capítulo 8, Sección 8.4\*. Vea también: _Bucket_, _Rutting Preset_, _Trigger_.

**Core 256**
Una interfaz de audio DAD en la familia de productos Thunder\|Core. Soporta hasta 256 canales sobre Thunderbolt 3 a 44.1/48 kHz, con amplias opciones de tarjetas de expansión. El miembro de mayor capacidad de la familia Thunder\|Core en el momento de la publicación. Controlado a través de DADman.

**Core Audio**
Arquitectura de E/S de audio para macOS. DAD Thunder\|Las unidades principales aparecen como dispositivos de Audio central cuando el controlador de audio de DAD Thunderbolt 3 Core está instalado, poniéndolos a disposición de cualquier aplicación de audio de macOS. Vea también: _ASIO_.

**Punto cruzado**
Una única intersección en la matriz de ruta de DADman que representa una conexión entre una entrada y una salida. Activando rutas de punto de cruce la señal de esa entrada a esa salida. Un cuadrado azul en la pestaña Con indica un punto cruzado activo. Múltiples puntos cruciales pueden compartir la misma entrada (fan-out). Vea también: _Con tab_, _Ruturación de ruta_.

**Cue\|Mix**
Una función de mezclador del monitor de cero latencia en el oído en DADman. Permite crear mezclas individuales de auriculares o IEM independientemente de la mezcla principal de la sala de control. _La documentación pendiente — requiere entrada de ingeniería DAD. Ver: Capítulo 8, documentación pendiente._

**pestaña DA**
La pestaña _Digital a Analogue_ en DADman. Muestra clips de canal para todos los canales de salida analógica en las unidades de hardware conectadas, proporcionando controles para faders de nivel de salida, mutes y etiquetas de canales. La pestaña DA también contiene los controles de calibración del nivel de salida analógico (alineación dBU). See also: _AD tab_.

**DAD** (Digital Audio Dinamarca)
La marca utilizada para hardware de audio y productos de software desarrollados por NTP Technology A/S, una compañía danesa de tecnología de audio. Los productos DAD incluyen AX32, AX64, AX Center, Core 256, DX32R, MOM, y el software de control DADman. Vea también: _NTP Technology A/S_.

**DADLink**
Un formato de interconexión de audio independiente de alto número de canales desarrollado por DAD. Utiliza la ranura de módulo MADI en hardware compatible con transceptores SFP ópticos. Proporciona hasta 128 canales a 44,1/48 kHz con aproximadamente 1 microsegundo de latencia entre unidades conectadas. Compatible con AX32, AX64, AX Center, Core 256, DX32R, Penta 720, Penta 721 y MTRX/MTRX II. Ver: \* Capítulo 8, Sección 8.6\*.

**DADman**
La aplicación de software de control desarrollada por NTP Technology A/S (DAD) para configurar, monitorear, y controlando todos los productos de hardware de tecnología DAD y NTP, así como las interfaces de audio de Avid MTRX, MTRX II y MTRX Studio. Disponible para macOS y Windows. DADman se comunica con unidades conectadas a través de Ethernet (y opcionalmente a través de Thunderbolt 3 para Thunder\|Unidades de núcleo). La aplicación incluye controles de tiras de canal (AD, DA, Con, Conf, Pestañas lunes), la Lista de Dispositivos, la gestión del perfil, configuración preestablecida de enrutamiento y ajustes de preferencias.

**DAW** (Digital Audio Workstation)
Una aplicación de software utilizada para grabar, editar, mezclar y producir audio digital. Herramientas Pro, Logic Pro, Nuendo, Reaper, y Cubase son ejemplos comunes. DADman se integra con DAWs vía Ethernet (EuCon), MIDI, Dante y Thunderbolt 3.

**dBFS** (decibelios relativos a la escala completa)
Una unidad de medida para el nivel de señal de audio digital. 0 dBFS es el máximo nivel digital posible; todos los niveles prácticos de señal son valores negativos (por ejemplo, −18 dBFS, −6 dBFS). La medición de DADman muestra los niveles de señal en dBFS. Vea también: _dBu_.

**dBu**
Una unidad de medida para el nivel de señal de audio analógico, referenciada a RMS de 0.775 V. El equipo de audio profesional funciona típicamente a nominal de +4 dBu con cuarto de cabecera a +18 dBu o +24 dBu. Los controles de nivel de salida DADman DA establecen el nivel analógico que corresponde a 0 dBFS, alineando los dominios de señales digitales y analógicas. Vea también: _dBFS_.

**DDM** (Dante Domain Manager)
El sistema de gestión centralizado de Dante a escala mundial proporciona autenticación, segmentación de red y enrutamiento de subred. Algunas características avanzadas de Dante (como ST 2110-30 en ciertos tipos de módulo) requieren DDM. Ver también: _Dante_.

**Lista de dispositivos**
El área principal de visualización de la unidad en DADman, muestra todas las unidades de hardware conectadas de izquierda a derecha en orden de sus números de ID de unidad. Cada unidad se muestra con un borde de color, mostrando sus controles actuales de AD, DA y Con/Conf como clips de canal. La Lista de Dispositivos proporciona la interfaz principal para las operaciones a nivel de dispositivo (actualización de firmware, reinicio de fábrica, clonación, configuración de red).

**DMS** (DADman Settings File)
El formato de archivo (extensión `. ms`) usado por DADman para guardar la configuración completa de todas las unidades de hardware conectadas: conexiones de enrutamiento, obtiene ajustes, etiquetas de canal, parámetros de pestaña de Conf y todas las demás configuraciones de nivel de unidad. Los ajustes se almacenan en la propia unidad de hardware; un archivo `.dms` es una copia de seguridad de esos ajustes guardados en el equipo. Vea también: _DMPROF_.

**DMPROF** (DADman Monitor Profile File)
El formato de archivo (extensión `. mprof`) usado por DADman para guardar un perfil de Monitor: la configuración completa del controlador de monitor para una unidad de hardware, incluyendo fuentes, conjuntos de salida, plegables, routing de charkback y asignaciones de medición. Un archivo `.dmprof` se almacena en el ordenador, no en la unidad de hardware. Vea también: _Perfil de monitoreo_, _DMS_.

**Latencia DPC** (latencia de llamada de procedimiento diferida)
Una métrica de rendimiento del sistema de Windows que mide el tiempo que toman los controladores de hardware y los procesos del sistema para manejar las solicitudes de interrupción. La latencia de alta DPC causa el abandono de audio en aplicaciones de audio en tiempo real. Las causas más comunes son los controladores de red inalámbricos, los ajustes de administración de energía USB y el software antivirus. Relevant to Thunder\|Core ASIO performance en Windows. Ver: \* Capítulo 9, Sección 9.4\*.

**DVS** (Dante Virtual Soundcard)
Una aplicación de software de inata que hace que un Mac o PC aparezca como un dispositivo de audio Dante en la red, enrutando el sistema de audio de la computadora en Dante. Utilizado para llevar cualquier salida de una aplicación de audio en el sistema de monitor de DADman como fuente. Ver: \* Capítulo 8, Sección 8.10\*.

**DX32R**
Un enrutador y puente de audio digital DAD. Permite enrutar entre los formatos AES3, MADI y Dante en un recinto 1RU. Miembro del grupo de hardware de Familia 1. Controlado a través de DADman.

**EuCon**
Protocolo de superficie de control propietario de Avid, utilizado para la comunicación entre DAWs (particularmente Pro Tools) y superficies de control Avid (S1, S6, S6L) y la aplicación Avid Control. DADman implementa EuCon para exponer las funciones de control de monitoreo — selección de fuentes, volumen, atenuación, corte, charkback y plegado — a cualquier superficie EuCon conectada. Habilitado en DADman a través de _Ajustes > Activar EuCon_. Ver: \* Capítulo 8, Sección 8.5\*.

**Grupo Familiar**
Un grupo de compatibilidad de hardware utilizado por DADman para la función del Clon y para identificar unidades que comparten la misma rama de firmware. Existen tres grupos de familia: Familia 1 (MTRX, AX32, DX32, Penta 720, Penta 721s); Familia 2 (MTRX II, AX64, AX Center, Core 256); Familia 3 (MTRX Studio). Ver también: _Clonar / Clonar_.

**FCC** (Comisión de Comunicaciones Federales)
La agencia regulatoria de Estados Unidos responsable de los estándares de compatibilidad con radiofrecuencia y electromagnética. DAD / NTP Tecnología vendida en los Estados Unidos debe cumplir con FCC Parte 15 (radiadores no intencionales). Vea: _Apéndice F_.

**Firmware**
Software incrustado almacenado en la memoria flash interna de la unidad de hardware, que controla las funciones principales de procesamiento, enrutamiento y E/S. El firmware está separado de DADman (que se ejecuta en el equipo anfitrión). Las actualizaciones de firmware se aplican a través de DADman desde un archivo de firmware descargado desde el portal de soporte de DAD. Ver: \* Capítulo 10, Sección 10.2\*.

**Retroceder**
Una matriz de mezcla dentro de un Perfil de Monitorizador de DADman que convierte una fuente de audio de cuenta de canales más altos a un formato de menor recuento de canales para monitoreo de compatibilidad. Por ejemplo, un plegado 7.1 al estéreo permite comprobar cómo una mezcla envolvente se traduce en la reproducción de dos canales. Las matrices plegables personalizadas también se pueden utilizar para la selección de subconjuntos de altavoces y la coincidencia. Ver: \* Capítulo 8, Sección 8.1.6\*. Vea también: _Coincidencia superior_, _Perfil de seguidor_.

**LTC** (Timecode Lineal)
código de tiempo SMPTE codificado como una señal de audio-frecuencia que puede ser transportada sobre cualquier conexión de audio analógico o digital incluyendo un canal Dante. LTC codifica horas, minutos, segundos y fotogramas para sincronizar equipos de audio y video. Ver: \* Capítulo 8, Sección 8.14\*.

**MADI** (Interfaz Digital de Audio Multicanal, AES10)
Un estándar profesional de interfaz de audio digital definido por la Sociedad de Ingeniería de Audio (AES10). Trassmos hasta 64 canales de audio a 44.1 o 48 kHz (32 canales a 88.2/96 kHz en modo de alta velocidad; 16 canales a 176. /192 kHz) sobre un solo cable coaxial o cable de fibra óptica usando módulos SFP. MADI utiliza dos modos de velocidad de fotogramas: Legacy (56 canales) y High Speed (64 canales). Ambos extremos de una conexión MADI deben usar el mismo modo de velocidad de fotogramas.

**Modo barra de menú**
Un modo de visualización macOS para DADman en el que la aplicación se oculta del Dock cuando su ventana principal está cerrada y sólo es accesible a través de un icono en la barra de menú del sistema macOS. Utilizado en entornos de instalación permanentes donde DADman debe ejecutarse en segundo plano. Ver: \* Capítulo 8, Sección 8.7\*.

**Grupo de obtención de micrófono**
Una función de DADman (v5.8. construir 6 o posterior) que enlaza múltiples canales de entrada analógica para que los ajustes de ganancia y silencio en cualquier canal afecten a todos los canales del grupo simultáneamente, mientras se preservan las ganancias relativas entre canales. Potencia fantasma e inversión de fase no están agrupados. Soportado en todo el hardware excepto MTRX Studio. Ver: \* Capítulo 8, Sección 8.2\*.

**MOM** (Módulo Operador)
Un controlador de monitor de hardware de DAD: un compacto, unidad de hardware montable en rack o de escritorio que proporciona nudos y botones físicos para controlar las funciones de monitoreo de DADman (volumen, selección de fuente, atenuación, corte, silencio). MOM se comunica con DADman sobre Ethernet. Ver: \* Capítulo 8, Sección 8.5\*.

**pestaña lun**
La pestaña _Monitor_ en DADman. Muestra los controles del monitor para el perfil de seguimiento actualmente cargado: botones de selección de fuente, la salida del altavoz establece selección, fader de nivel principal, atenuar, corte, botón de referencia, talkback, y selectores plegables. La pestaña Mon solo se rellena cuando se carga un archivo de Perfil `.dmprof`. Vea también: _Perfil de monitoreo_.

**Controlar perfil**
Un archivo de configuración de DADman (`. mprof`) que define la configuración completa del controlador de monitor: fuentes disponibles, conjuntos de salida físicos, matrices plegables, enrutamiento de conversaciones, ajustes de retraso y salidas de medición. Un perfil de seguimiento está completamente separado del archivo de configuración de unidad (`.dms`). Los perfiles se almacenan en el ordenador y deben cargarse en DADman al inicio. Ver: \* Capítulo 8, Sección 8.1\*. Vea también: _DMPROF_, _Fuente (monitor)_, _Conjunto de salida_.

**MTRX / MTRX II / MTRX Studio**
productos de interfaz de audio de marca Avid, desarrollados por NTP Technology A/S (DAD) bajo acuerdo OEM. MTRX y MTRX II son miembros de la Familia 1 y Familia 2 grupos de hardware respectivamente. MTRX Studio es la Familia 3. Los tres están configurados y controlados a través del software DADman. Para los flujos de trabajo específicos de Avid, consulte la documentación pertinente de Avid. Ver: _Importe frontal, Sección FM.3_.

**Tecnología NTP A/S**
La compañía danesa (NTP Technology A/S ), que desarrolla y fomenta los productos de hardware y software DAD. Anteriormente conocido como NTP / NEVE Technology. También desarrolla productos de audio bajo la marca NTP Penta. DAD es la marca orientada al consumidor; NTP Technology A/S es la entidad jurídica. Vea también: _DAD_.

**Conjunto de salida**
en un Perfil de Monitoreo de DADman, un grupo nombrado de canales de salida físicos que representan la configuración de un altavoz — por ejemplo, `Near Field`, `5. Rodeo`, o `85 dB SPL`. Se pueden definir múltiples conjuntos de salida utilizando diferentes salidas físicas o las mismas salidas con diferentes niveles de recorte para crear múltiples presets de nivel de referencia. Ver: \* Capítulo 8, Sección 8.1.4\*. Vea también: _Nivel de referencia_, _Trim_.

**Penta 720/Penta 721s**
productos de convertidor y enrutador de audio A/S de Tecnología NTP. Miembros del grupo de hardware de la Familia 1. Caracterice las mismas opciones de tarjetas de expansión que el AX32. Controlado a través de DADman. Manufactura por NTP Technology A/S; distribuida bajo la marca NTP Penta.

**PCIe** (Expresión de Interconexión de Componentes Períferales)
Un estándar de bus de computadora de alta velocidad utilizado internamente en computadoras para la comunicación entre la CPU, RAM y dispositivos periféricos. Thunderbolt 3 expone externamente el ancho de banda PCIe, que es la forma en que los dispositivos Thunder\|Core se comunican con el equipo anfitrión con una latencia cercana a cero.

**PoE** (Power over Ethernet)
Un estándar (IEEE 802. af/at) permitiendo que los interruptores de red suministren energía eléctrica a dispositivos conectados por el mismo cable Ethernet utilizado para datos. El controlador del monitor MOM y algunos accesorios DAD soportan PoE, eliminando la necesidad de una fuente de alimentación separada.

**Emulación PRE**
Una función DADman que permite a Pro Tools controlar las ganancias de preámbulos conectados a DADman a través de MIDI, tratando el hardware como una unidad de preaviso _Avid PRE_. Permite ajustar la ganancia micrófono desde la configuración de E/S de Pro Tools o una superficie de control conectada sin cambiar a DADman. Ver: \* Capítulo 8, Sección 8.15\*.

**PRO\|MON**
Una licencia de software de DADman opcional que extiende el sistema de control del monitor más allá del conjunto básico de Perfil de Monitor. añadiendo funciones avanzadas de monitoreo de enrutamiento, charla, bús e integración para entornos complejos de monitoreo de estudio y difusión. Utilizado principalmente con AX32, DX32R, Penta 720, y MTRX Studio. _La documentación completa pendiente — requiere entrada de ingeniería DAD. Ver: Capítulo 8, documentación pendiente._

**PTP** (Protocolo de tiempo de receta, IEEE 1588)
Protocolo de red para sincronizar relojes a través de una red de área local con precisión de sub-microsegundos. Utilizado en redes Dante y Ravenna para alinear flujos de audio desde diferentes dispositivos de red sin requerir cableado de palabra dedicado. Vea también: _Dante_, _Ravenna_.

**Ravenna**
Un protocolo de transporte de audio sobre-IP desarrollado por ALC NetworX. Utilizado en aplicaciones de audio profesionales y de alta difusión. Interoperable con AES67. La tarjeta DAD Ravenna (compatible con DADman v5.8.2 build 2) añade conectividad Ravenna/AES67/ST 2110-30 a unidades compatibles de Thunder\|Core. Vea también: _AES67_, _ST 2110-30_.

**LED listo**
Un indicador de estado del panel frontal presente en todas las unidades de hardware de tecnología DAD / NTP. Cuando el verde sólido, la unidad está encendida, arranca y se comunica normalmente. Un LED Ready que parpadea o no verde indica un arranque en progreso, una actualización de firmware o una condición de falta.

**Nivel de referencia**
en un perfil de seguimiento de DADman, un nivel de salida calibrado para un conjunto de salida específico, establecido con tonos de prueba y un medidor SPL. Una vez definido, presionando el botón **Ref** de la pestaña Mon bloquea el deslizador del monitor a este nivel, evitando cambios de volumen accidentales durante la escucha crítica. Ver: \* Capítulo 8, Sección 8.1.5\*.

**Misión de enrutamiento**
El motor de enrutamiento de señales de una unidad de hardware controlada por DADman, permitiendo que cualquier entrada esté conectada a cualquier salida. La matriz de enrutamiento es mostrada y editada en la pestaña **Con** de DADman como una cuadrícula de puntos críticos. El hardware DAD soporta matrices de hasta 1.500×1.500 puntos cruciales (dependiente del modelo). Vea también: _Con tab_, _Crosspoint_.

**Preajuste de ruta**
En Control\|Pack, una configuración con nombre que define qué canales de salida están controlados por el preset y qué cubos de origen están disponibles para cambiar. Se pueden configurar hasta 32 presets de enrutamiento por unidad de trenes\|núcleo. Vea también: _Control\|Pack_, _Bucket_. Ver: \* Capítulo 8, Sección 8.4\*.

**RUS** (Restricción de Sustancias Peligrosas)
Directiva de la UE 2011/65/UE que restringe el uso de sustancias peligrosas específicas (plomo, mercurio, cadmio, cromo hexavalente, ciertos retardantes de llamas) en aparatos eléctricos y electrónicos. El hardware DAD / NTP Tecnología cumple con RoHS. Vea: _Apéndice F_.

**Tasa de muestreo**
El número de muestras de audio capturadas o reproducidas por segundo, expresadas en kHz. Tarifas estándar: 44,1 kHz, 48 kHz (definición estándar); 88,2 kHz, 96 kHz (definición alta); 176,4 kHz, 192 kHz (definición ultra alta). Las tasas de muestreo más altas reducen el número de canales en interfaces multiplexadas (MADI, ADAT, DADLink). La velocidad de muestra está configurada por unidad en la pestaña **Conf** de DADman.

**SFP** (pequeño Pluggable de factor)
Un módulo de transceptor óptico o eléctrico compacto, intercambiable en caliente utilizado en conexiones MADI y DADLink en hardware DAD. Los módulos SFP están disponibles en varias configuraciones para fibra multimodo o de un solo modo o MADI coaxial. El tipo SFP determina el tipo de cable y la distancia máxima de transmisión.

**S/MUX** (Multiplexo de ejemplo)
Una técnica para transmitir una mayor tasa de muestreo sobre ADAT usando múltiples canales ADAT para llevar datos de un solo canal. A 88.2/96 kHz, S/MUX significa el conteo de canales ADAT para 4 canales (S/MUX2). A 176.4/192 kHz, S/MUX4 reduce aún más el recuento a 2 canales. Vea también: _ADAT_.

**Fuente** _(monitor)_
en un perfil de seguimiento de DADman, una ruta de la señal de entrada con nombre disponible para la selección de monitores. Las fuentes están asignadas a canales de entrada específicos de la unidad de hardware (analógico, Dante, MADI, AES3, etc.) y aparecen como opciones seleccionables en la pestaña Lun. Ejemplos: `Pro Tools`, `DVS`, `Dante Player`, `Invitado`. Ver: \* Capítulo 8, Sección 8.1.3\*. Vea también: _Perfil de monitoreo_.

**SPQ** (tarjeta de procesamiento de señales)
Una tarjeta de expansión opcional DSP para hardware DAD compatible (variantes AX32) que proporciona EQ paramétrica por canal en las salidas del monitor analógico. Utilizado para el altavoz y corrección de la sala. Los datos del filtro SPQ normalmente se generan a partir de mediciones acústicas hechas con el Asistente de Room EQ (o herramientas similares) e importadas en DADman a través de la pestaña SPQ. Ver: \* Capítulo 8, Sección 8.12\*.

**SRC** (convertidor de tasa de muestra)
Un componente de hardware o software que convierte audio digital entre diferentes tasas de muestreo. Insertar un SRC en una ruta de señal rompe cualquier relación de fase coherente con el reloj de muestra original, que puede corromper señales sensibles al tiempo como LTC y el tono del piloto AE6. Las unidades DADman soportan SRC en la selección de interfaces de E/S cuando se configuran en la pestaña Conf.

**ST 2110-30**
Un estándar SMPTE (SMPTE ST 2110-30) para el transporte de audio sin comprimir sobre redes IP, derivado del estándar AES67. Utilizado en entornos profesionales de radiodifusión. Soportado en interfaces DAD Dante y Ravenna del firmware v1.1.2.4 (enero de 2026). Los módulos Brooklyn 3 soportan ST 2110-30 sin DDM de firmware v1.1.0.3. Vea también: _AES67_, _Ravenna_, _DDM_.

**Thunder\|Core**
El término DAD para la tecnología de interfaz Thunderbolt 3 integrado en las unidades de hardware AX64, AX Center y Core 256. Thunder\|Core proporciona E/S de audio de ultra baja latencia entre la unidad de hardware y el ordenador anfitrión a través de un cable Thunderbolt 3, además del control DADman estándar basado en Ethernet.

**Thunderbolt 3**
El estándar de interfaz periférica de alta velocidad de Intel, proporciona hasta 40 Gbps de ancho de banda a través de un conector USB-C. Utilizado por DAD Thunder\|Unidades principales para E/S de audio a la computadora anfitrión. Requiere el controlador DAD Thunderbolt 3 (Core Audio en macOS; ASIO en Windows). La especificación mínima del cable para su correcto funcionamiento es un cable de Thunderbolt 3 certificado con una puntuación de 20 Gbps. Ver: _Capítulo 3, Sección 3.2_ y _Capítulo 9, Sección 9.4_.

**Retirar**
En un conjunto de salida del perfil de Monitorizador de DADman, un desplazamiento de nivel fijo aplicado a ese conjunto de salida relativo al monitor principal fader. Utilizado para crear múltiples valores preestablecidos de nivel de referencia en las mismas salidas físicas sin hardware adicional. Por ejemplo, un recorte de -10 dB en un segundo conjunto de salida apuntando a los mismos altavoces que el conjunto primario proporciona un desplazamiento instantáneo de 10 dB de referencia. Vea también: _Conjunto de salida_, _Nivel de referencia_.

**Disparador**
En Control\|Empacar presets de enrutamiento, un _disparador_ es una condición de detección asignada a un cubo que determina si la fuente de ese cubo se considera válida. Tipos de activación: Nivel de señal (señal de audio por encima del umbral de 40 dBFS); AE6 (integridad del tono del piloto digital AE6); Puerto (estado de conectividad física del puerto). Ver: \* Capítulo 8, Sección 8.4.4\*. Vea también: _Bucket_, _Control\|Pack_.

**UKCA** (UK Conformity Assessed)
Un marcado de producto requerido para los bienes vendidos en Gran Bretaña (Inglaterra, Escocia, Gales) a partir del 1 de enero de 2021, sustituyendo la marca CE para el mercado del Reino Unido tras el Brexit. Equivalente en el ámbito de aplicación a CE. El hardware DAD / NTP Tecnología vendido en Gran Bretaña lleva el marcado UKCA. Vea: _Apéndice F_.

**Coincidencia arriba**
Una matriz plegable personalizada en un Perfil de Monitoreo de DADman que dirige un formato de conteo de canales inferiores a una salida de mayor conteo de canales, por ejemplo, difundiendo un 5. a través de una disposición de altavoces 7.1.4. Configurado en la pestaña Bajas de Doble del Editor de Perfil de Monitor. Vea también: _Bajo-bajo_. Ver: \* Capítulo 8, Sección 8.1.6\*.

**WEEE** (Residuos de equipos eléctricos y electrónicos)
Directiva de la UE 2012/19/EU que rige la recogida, el reciclaje y la eliminación de aparatos eléctricos y electrónicos. El hardware DAD / NTP Tecnología transporta el símbolo WEEE (papelera de rueda cruzada), indicando que no debe ser desechado en residuos domésticos no clasificados. Ver: _Capítulo 10, Sección 10.8_ y _Cuestiones delanteras, Sección FM.8_.

**Reloj de palabra**
Una señal de sincronización de onda cuadrada utilizada para bloquear el equipo de audio digital a una referencia de tasa de muestreo compartida. El reloj de palabras se distribuye a la velocidad de muestreo operacional (por ejemplo, 48 kHz) sobre 75 cables BNC. El hardware DAD soporta Word Clock in y out para la integración en sistemas de sincronización de instalaciones. Las conexiones de relojes de palabra requieren 75 veces terminación en el dispositivo final de la cadena. Ver: \* Capítulo 9, Sección 9.5\*.

---

## Apéndice H — Índice

_[Marcador de posición: índice a ser generado a partir del documento compilado final.]_
