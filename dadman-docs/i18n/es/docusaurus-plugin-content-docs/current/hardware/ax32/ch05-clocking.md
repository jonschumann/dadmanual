---
title: "Capítulo 5 — Bloqueo y sincronización"
sidebar_label: "Ch. 5 — Relojes"
sidebar_position: 6
---

# Capítulo 5 — Bloqueo y sincronización

> **Producto:** Digital Audio Denmark AX32  
> **SKU:** AX32-BASE2

---

## 5.1 Resumen de sincronización

_[Placeholder — visión conceptual del reloj en un sistema DAD. Sincronización de la casa de referencia, roles maestro/esclavo, y cómo encaja el AX32.]_

---

## 5.2 Fuentes de sincronización disponibles

| Fuente                   | Conector       | Notas                                                                                   |
| ------------------------ | -------------- | --------------------------------------------------------------------------------------- |
| Interno                  | —              | AX32 actúa como maestro de sincronización                                               |
| Reloj Word               | BNC WC EN      | Entrada de reloj de palabra externa                                                     |
| MADI                     | MADI DE BNC EN | Sincronizar desde flujo MADI entrante                                                   |
| Tornillo                 | Vía TB3 host   | Sincronizar a través del controlador DAD Thunderbolt                                    |
| Vía tarjeta de expansión | —              | Dante, Ravenna, las tarjetas MADI-SO proporcionan fuentes de sincronización adicionales |

---

## 5.3 Configurar la fuente Sync

_[Marcador de posición — procedimiento paso a paso para seleccionar la fuente de sincronización en DADman.]_

---

## Referencias cruzadas

- [Ch. 4 — Conexiones de la señal](./ch04-connections) — Conectando el reloj de la palabra
- [Ch. 7 — Integración de DADman](./ch07-dadman-integration) — Configuración de sincronización en software
