---
title: "CARD-DANTE — Interfaz 128-Canal Dante / AES67"
sidebar_label: "CARGADO-DANTE"
sidebar_position: 5
---

# CARD-DANTE — Tarjeta de interfaz de 128-Canal Dante / AES67

> **SKU:** CARD-DANTE  
> **Fuente:** Especifica la hoja CARD-DANTE, número de junio de 2026

---

## Resumen

El CARD-DANTE proporciona audio bidireccional de 128 canales Dante y AES67 sobre conectividad IP para cualquier chasis DAD compatible. Dos puertos de red RJ45 pueden configurarse como una red cambiada (daisy-chain) o como una red redundante Dante con conexiones primarias y secundarias independientes.

La tarjeta es totalmente compatible con el ecosistema de Dante desarrollado por el gerente de dominios de Dante. La conversión de tasa de ejemplo (SRC) puede activarse independientemente para las rutas de entrada y salida, permitiendo que la tarjeta opere de forma asíncrona desde la velocidad de muestreo del chasis anfitrión.

---

## Especificaciones técnicas

| Parámetro                                                           | Valor                                                                              | Condiciones / Notas                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| Canales de entrada                                                  | 128                                                                                | A 44,1 / 48 kHz (1FS) |
| Canales de salida                                                   | 128                                                                                | A 44,1 / 48 kHz (1FS) |
| Canales en 2FS (88.2 / 96 kHz)   | 64 dentro / 64 fuera                                                               |                                          |
| Canales en 4FS (176.4 / 192 kHz) | 32 en / 32                                                                         |                                          |
| Flujos de Dante                                                     | Hasta 128 bidireccionales                                                          |                                          |
| Tasas de ejemplo                                                    | 44.1, 48, 88.2, 96, 176.4, 192 kHz |                                          |
| Estándar de red                                                     | 1000BASE-T                                                                         |                                          |
| Puertos de red                                                      | 2 × RJ45                                                                           | Cambiado o redundante                    |
| Modo de red                                                         | Cambiado o redundante                                                              | Configurable en Dante Controller         |
| AES67                                                               | Soportado                                                                          | Descubrimiento SAP                       |
| Gestor de dominios de Dante                                         | Soportado                                                                          |                                          |
| Conversión de tasa de ejemplo                                       | Seleccionable en la entrada y salida de forma independiente                        |                                          |
| Rango dinámico SRC                                                  | > 125 dB                                                                           | Punto flotante de 64 bits                |
| latencia SRC (48 → 96 kHz)                       | Aproximadamente 0.8 ms entrada / 1.1 ms salida     |                                          |
| latencia SRC (96 → 48 kHz)                       | Aproximadamente 0.8 ms entrada / 1.1 ms salida     |                                          |
| Synchronisation                                                     | Reloj de red Dante o reloj interno del sistema                                     |                                          |
| Consumo de energía                                                  | 4,5 W                                                                              |                                          |

---

## Conexiones

| Puerto                                    | Conector | Señal      | Notas                                |
| ----------------------------------------- | -------- | ---------- | ------------------------------------ |
| Red (Dante principal)  | RJ45     | 1000BASE-T | Puerto principal o cambiado de Dante |
| Red (Dante secundaria) | RJ45     | 1000BASE-T | Puerto secundario Dante / redundante |

---

## Configuración de red

Los dos puertos RJ45 en CARD-DANTE pueden configurarse en dos modos:

**Modo cambiado** — Los dos puertos actúan como un interruptor integrado de 2 puertos, permitiendo topologías de red de cadena de daisy sin un interruptor externo. Ambos puertos se conectan a la misma red Dante.

**Modo redundante** — Cada puerto se conecta a una red Dante independiente (primaria y secundaria). Dante falla automáticamente en la red secundaria si la ruta primaria falla. El modo redundante requiere un interruptor en cada red.

Configure el modo de red usando Dante Controller o DADman.

---

## Instalación

> **ADVERTENCIA:** Siempre apague el chasis y desconecte el cable de corriente antes de instalar o quitar las tarjetas de expansión.

1. Abra el chasis y desconecte el cable de corriente.
2. Remueve el panel de blank de la ranura de destino (mantén el tornillo).
3. Deslice el CARD-DANTE en las guías de la ranura hasta que el conector del borde se sienta completamente.
4. Asegura el soporte frontal con el tornillo retenido.
5. Conecte cables Ethernet a los puertos RJ45 según sea necesario.
6. Volver a conectar el cable de la red y la potencia del chasis.
7. Abrir DADman y/o Dante Controller — la tarjeta aparece como un dispositivo Dante en la red.

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
