---
title: "CARD-RAVENNA — Ravenna de 128-Canal / AES67 / Interfaz ST 2110-30"
sidebar_label: "CARGADO-RAVENNA"
sidebar_position: 7
---

# CARD-RAVENNA — Ravenna de 128-Canal / AES67 / ST 2110-30 Interface Card

> **SKU:** CARD-RAVENNA  
> **Fuente:** Especifica la hoja CARD-RAVENNA, número de junio de 2026

---

## Resumen

El CARD-RAVENNA proporciona audio bidireccional Ravenna de 128 canales, AES67 y SMPTE ST 2110-30 sobre conectividad IP para cualquier chasis DAD. Dos puertos de red RJ45 pueden configurarse como una red conmutada o con ST 2022-7 Interruptor de Protección sin Fronteras (SPS) para redundancia sin hitos en instalaciones de doble red.

La tarjeta es totalmente interoperable con Ravenna, AES67, y los ecosistemas ST 2110-30 y soportan el descubrimiento y control estándar de la industria a través de WebUI, NMOS IS-04/IS-05, SAP, ANEMAN y JSON API. PTPv2 (IEEE 1588-2008) es compatible tanto con los modos Master como con Slave.

La conversión de tasa de ejemplo (SRC) puede activarse en rutas de entrada y salida de forma constante, permitiendo que la tarjeta opere de forma asincrónica desde la velocidad de ejemplo del chasis host.

---

## Especificaciones técnicas

| Parámetro                                     | Valor                                                                                                          | Condiciones / Notas                                               |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Canales de entrada                            | 128                                                                                                            | A 44,1 / 48 kHz (1FS)                          |
| Canales de salida                             | 128                                                                                                            | A 44,1 / 48 kHz (1FS)                          |
| Escalado del recuento de canales              | Escalas con frecuencia de muestreo                                                                             | Un mayor índice de muestreo reduce el número de canales por flujo |
| Ravenna / streams AES67                       | Hasta 64 bidireccionales                                                                                       |                                                                   |
| Tasas de ejemplo                              | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                   |
| Estándar de red                               | 1000BASE-T                                                                                                     |                                                                   |
| Puertos de red                                | 2 × RJ45                                                                                                       | Redundante SPS cambiado o ST 2022-7                               |
| Redundancia                                   | Cambio de protección sin costuras de ST 2022-7                                                                 | Error sin interrupciones en doble red                             |
| Synchronisation                               | PTPv2 (IEEE 1588-2008) — Maestro o Slave                                                    | O reloj interno del sistema                                       |
| AES67                                         | Soportado                                                                                                      |                                                                   |
| ST 2110-30                                    | Soportado                                                                                                      |                                                                   |
| NMOS                                          | IS-04 (descubrimiento) e IS-05 (gestión de conexión)                     |                                                                   |
| Descubrimiento/control                        | WebUI, NMOS, Ravenna, SAP, ANEMAN, API JSON                                                                    |                                                                   |
| Conversión de tasa de ejemplo                 | Seleccionable en la entrada y salida conjuntamente                                                             |                                                                   |
| latencia SRC (48 → 96 kHz) | Aproximadamente 0.8 ms entrada / 1.1 ms salida                                 |                                                                   |
| latencia SRC (96 → 48 kHz) | Aproximadamente 0.8 ms entrada / 1.1 ms salida                                 |                                                                   |
| Consumo de energía                            | 7,5 W                                                                                                          |                                                                   |

---

## Conexiones

| Puerto                              | Conector | Señal      | Notas                                     |
| ----------------------------------- | -------- | ---------- | ----------------------------------------- |
| Red (principal)  | RJ45     | 1000BASE-T | Ravenna / AES67 / ST 2110-30 primario     |
| Red (secundaria) | RJ45     | 1000BASE-T | ST 2022-7 redundante o cambiado de puerto |

---

## Configuración de red

**Modo conmutado** - Ambos puertos funcionan como un interruptor integrado, permitiendo la topología de la cadena de daisy sin un interruptor externo.

**Modo ST 2022-7** — Cada puerto se conecta a una red independiente. ST 2022-7 Interruptor de Protección sin fisuras proporciona un fallo sin impacto — si una ruta de red falla, el audio continúa sin interrupción a través del otro. Este modo requiere un interruptor dedicado en cada red.

Configure el modo de red y el rol PTP (Master / Slave) mediante el controlador WebUI o NMOS de la tarjeta.

---

## Descubrimiento y control

CARD-RAVENNA soporta múltiples interfaces de descubrimiento y control:

| Interfaz   | Propósito                                             |
| ---------- | ----------------------------------------------------- |
| WebUI      | Configuración y estado del navegador                  |
| NMOS IS-04 | Descubrimiento de dispositivos y recursos             |
| NMOS IS-05 | Gestión de conexión (enrutamiento) |
| Ravena     | Descubrir y controlar Ravenna nativo                  |
| SAP        | Anuncio de la sesión (AES67 / SDP) |
| ANEMAN     | Integración con el administrador de red ANEMAN        |
| JSON API   | Configuración programática                            |

---

## Instalación

> **ADVERTENCIA:** Siempre apague el chasis y desconecte el cable de corriente antes de instalar o quitar las tarjetas de expansión.

1. Abra el chasis y desconecte el cable de corriente.
2. Remueve el panel de blank de la ranura de destino (mantén el tornillo).
3. Deslice el CARD-RAVENNA en la ranura hasta que el conector de bordes se asiente.
4. Asegura el soporte frontal con el tornillo retenido.
5. Conecte cables Ethernet a los puertos RJ45 según sea necesario para su topología de red.
6. Volver a conectar el cable de la red y la potencia del chasis.
7. Abrir DADman — la tarjeta aparece como una interfaz AoIP en la vista de ruta de E/S.
8. Acceda a WebUI de la tarjeta para la configuración avanzada de red y PTP.

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
