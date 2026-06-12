---
title: "CARD-2MADI-SO — Interfaz dual MADI con SRC"
sidebar_label: "CARGADO-2MADI-SO"
sidebar_position: 6
---

# CARD-2MADI-SO — Tarjeta doble MADI con SRC

> **SKU:** CARD-2MADI-SO  
> **Fuente:** Especifica hoja CARD-MADI-SO, Número de junio de 2026

---

## Resumen

El CARD-2MADI-SO proporciona dos conexiones bidireccionales MADI independientes a través de módulos SFP para cualquier chasis DAD compatible. Cada puerto MADI proporciona 64 canales en y 64 canales en 48 kHz, para un total de 128 canales en cada dirección por tarjeta.

Los módulos SFP se venden por separado y pueden ser ópticos (LC, modo simple o multimodo) o eléctricos (HD-BNC coaxial). Esta flexibilidad permite que la tarjeta se conecte prácticamente a cualquier infraestructura MADI existente. La conversión de tasa de ejemplo (SRC) puede activarse independientemente para la entrada y salida de cada puerto.

---

## Especificaciones técnicas

| Parámetro                                     | Valor                                                                                                          | Condiciones / Notas                                               |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Puertos MADI                                  | 2                                                                                                              | Puertos bidireccionales independientes                            |
| Canales por puerto                            | 64 dentro / 64 fuera                                                                                           | A 44,1 / 48 kHz (1FS)                          |
| Total de canales                              | 128 en / 128 out                                                                                               | Ambos puertos combinados                                          |
| Canales por puerto en 2FS                     | 32 en / 32                                                                                                     | A 88,2 / 96 kHz                                                   |
| Canales por puerto en 4FS                     | 16 en / 16                                                                                                     | A 176,4 / 192 kHz                                                 |
| Canales por puerto a 8FS                      | 8 dentro / 8 fuera                                                                                             | A 352.8 / 384 kHz                                 |
| Tasas de ejemplo                              | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                   |
| Frame modes                                   | Legado (SMUX) y alta velocidad                                                              |                                                                   |
| Modos de conteo de canales                    | Canal 56 y canal 64                                                                                            |                                                                   |
| Interfaz SFP                                  | Jaula SFP 2 ×                                                                                                  | Coax óptico LC o HD-BNC (vendido por separado) |
| Conversión de tasa de ejemplo                 | Seleccionable por puerto, entrada y salida independientemente                                                  |                                                                   |
| latencia SRC (48 → 96 kHz) | Aproximadamente 0.8 ms entrada / 1.1 ms salida                                 | Por puerto                                                        |
| latencia SRC (96 → 48 kHz) | Aproximadamente 0.8 ms entrada / 1.1 ms salida                                 | Por puerto                                                        |
| Synchronisation                               | Entrada MADI o reloj interno del sistema                                                                       | Por puerto                                                        |
| Consumo de energía                            | 4,5 W                                                                                                          |                                                                   |

---

## Conexiones

| Puerto              | Conector | Señal      | Notas                           |
| ------------------- | -------- | ---------- | ------------------------------- |
| MADI E/S — Puerto A | SFP cage | AES10 MADI | Módulo SFP vendido por separado |
| MADI E/S — Puerto B | SFP cage | AES10 MADI | Módulo SFP vendido por separado |

---

## Módulos SFP

Los módulos SFP **no están incluidos** y deben ser pedidos por separado. Dos tipos están disponibles en DAD:

| SKU                  | Descripción                                                          |
| -------------------- | -------------------------------------------------------------------- |
| MOD-SFP-COAX         | Transceptor eléctrico SFP para MADI — Conector HD-BNC                |
| MOD-SFP-1300-LD      | Transceptor óptico SFP para MADI — 1310 nm, 100BASE modo múltiple LC |
| CON-2BNC-HD/STD-0,5M | Conjunto de cable adaptador HD-BNC a BNC (0,5 m)  |

> **Nota:** El MOD-SFP-COAX utiliza conectores HD-BNC. Utilice cables adaptadores CON-2BNC-HD/STD-0,5M para conectar al equipo estándar MADI BNC.

---

## Instalación

> **ADVERTENCIA:** Siempre apague el chasis y desconecte el cable de corriente antes de instalar o quitar las tarjetas de expansión.

> **CAUCIÓN:** Los módulos SFP se pueden insertar y retirar con la tarjeta alimentada. Sin embargo, para evitar dañar la jaula SFP, siempre inserte módulos rectos e incluso con presión. No obligue a un módulo que no se sienta fácilmente.

1. Abra el chasis y desconecte el cable de corriente.
2. Remueve el panel de blank de la ranura de destino (mantén el tornillo).
3. Deslice el CARD-2MADI-SO en las guías de la ranura hasta que el conector de bordes se asiente.
4. Asegura el soporte frontal con el tornillo retenido.
5. Volver a conectar el cable de la red y la potencia del chasis.
6. Inserte los módulos SFP apropiados en las jaulas SFP y conecte cables MADI.
7. Abrir DADman — ambos puertos MADI aparecen en la vista de enrutamiento de E/S.

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
