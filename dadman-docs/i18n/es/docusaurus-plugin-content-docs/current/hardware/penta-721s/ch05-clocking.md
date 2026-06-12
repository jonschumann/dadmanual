---
title: "Capítulo 5 — Bloqueo y sincronización"
sidebar_label: "Ch. 5 — Relojes"
sidebar_position: 6
---

# Capítulo 5 — Bloqueo y sincronización

> **Producto:** Digital Audio Dinamarca Penta 721s

---

## 14.1 Resumen

El Penta 721 soporta múltiples fuentes de referencia de relojes. La fuente de reloj activa está seleccionada en DADman. Sólo un dispositivo en una sesión DADman debe ser el maestro del reloj; todos los demás dispositivos deben esclavizarlo.

---

## 5.2 Reloj Interno

_[Marcador de posición — describir la especificación interna de oscilador de cristal, precisión y cuándo usar reloj interno.]_

> **NOTA:** Utilice el reloj interno sólo cuando no hay referencia externa disponible, o cuando esta unidad es el reloj maestro designado para todo el sistema.

---

## 5.3 Reloj de Word Externo

_[Marcador de posición — especificación de entrada de palabra, tasas aceptadas, terminación de BNC.]_

| Formato aceptado                                   | Conector                           |
| -------------------------------------------------- | ---------------------------------- |
| Reloj de palabra (1× muestra r) | BNC (WC/VBB IN) |
| 256× palabra reloj                                 | BNC (WC/VBB IN) |
| Explosión negra de vídeo                           | BNC (WC/VBB IN) |

---

## 5,4 AES11 / AES Referencia

_[Marcador de posición — reloj desde embebido MADI o señal de referencia AES11.]_

---

## 5.5 Red PTP (IEEE 1588)

_[Placeholder — reloj desde el incrustado ADAT o fuente PTP de red.]_

---

## 5.6 Convertidor de tasa de ejemplo integrada (SRC)

_[Placeholder — Penta 721s solamente. Describa las capacidades de SRC, las conversiones de tasa soportadas y la configuración en DADman.]_

El Penta 721 incluye un SRC integrado que puede conectar flujos de audio corriendo a diferentes velocidades de muestra. Esto le permite funcionar como un dispositivo límite entre, por ejemplo, una red de audio de 48 kHz y una sesión de 96 kHz.

---

## 5.7 Configuración del reloj en DADman

_[Marcador de posición — cómo seleccionar el origen del reloj y verificar el bloqueo en DADman. Referencia cruzada del manual de DADman Ch. 5.]_

1. En DADman, abra la Configuración del Dispositivo para el Penta 721.
2. Vaya a la sección **Reloj**.
3. Seleccione la fuente de reloj deseada de la lista desplegable.
4. Verifique que el panel frontal **Ext.** LED se ilumine (para referencia externa) o **Int.** LED (para interno).

---

## Referencias cruzadas

- [Ch. 2 — Descripción del panel](./ch02-panel-description) — Estados LED del reloj
- [Manual de usuario de DADman — Ch. 5 — Flujo de señal](/signal-flow) — topología de reloj del sistema
