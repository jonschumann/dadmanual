---
title: "Capítulo 9 — Solución de problemas"
sidebar_label: "Ch. 9 — Solución de problemas"
sidebar_position: 10
---

# Capítulo 9 — Solución de problemas

> **Producto:** Digital Audio Dinamarca MOM

> Si no puedes resolver un problema usando este capítulo, ponte en contacto con el soporte de Digital Audio Denmark en [digitalaudio.dk/support](https://digitalaudio.dk/support). Al ponerse en contacto con el soporte, tenga disponible el número de serie unitario, la versión de firmware y la versión de DADman.

---

## 9.1 referencia rápida

| Síntomas                           | Primer cheque                                                              | Referencia                                                 |
| ---------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Sin potencia / unidad no se inicia | Compruebe el cable de alimentación y la toma de corriente. | [Ch. 3 — Instalación](./ch03-installation) |

\| MOM Stat. LED no iluminado | Verifique el cable USB-C entre MOM y la unidad de anfitrión. Verificar que DADman se está ejecutando en el equipo. Verificar unidad de host (AX Center / AX64) está encendido. | [Ch. 3 — Instalación](./ch03-installation) |
\| Spkr. / Src. botones no funcionales | Un perfil Monitorizador debe estar configurado en DADman. Vea DADman Manual Ch. 8. | [Ch. 7 — Integración de DADman](./ch07-dadman-integration) |
\| Error de reloj (Err. LED lit) | Verifique que la fuente de referencia externa está presente y a la velocidad de muestreo correcta. Compruebe la terminación del reloj de la palabra. | [Ch. 5 — Bloquear](./ch05-clocking) |
\| Silencio de audio en todos los canales | Verifica la ruta en DADman. Verificar la frecuencia de muestreo de la sesión. Compruebe las conexiones físicas. | [Ch. 4 — Conexiones](./ch04-connections) |
\| Error al actualizar el firmware | No apagar. Espere 5 minutos para que la unidad se agote. Contacte al soporte de DAD si la unidad no se reinicia. | [Ch. 8 — Mantenimiento](./ch08-maintenance) |

---

## 9.2 Solución de Problemas Detallada

### 9.2.1 Unidad No Enciende

_[Marcador de posición — diagnóstico paso a paso para condición de no-energía.]_

1. Confirme que la toma de corriente está en vivo usando un dispositivo conocido.
2. Compruebe que el cable de alimentación IEC está completamente sentado en ambos extremos.
3. Compruebe que el botón de encendido del panel frontal está funcionando (presione y mantenga pulsado 2 segundos).
4. Si la unidad todavía no se inicia, póngase en contacto con el soporte de DAD.

---

### 9.2.2 Unidad No Detectada en DADman

_[Marcador de posición — árbol de decisiones de fallo de detección.]_

---

### 9.2.3 Error de Reloj

_[Placeholder — procedimiento de solución sistemática de problemas del reloj.]_

---

### 9.2.4 Problemas de Audio

_[Marcador de posición — silencio, distorsión, ruido, flujo de diagnóstico de intercambio de canales.]_

---

## Referencias cruzadas

- [Ch. 2 — Descripción del panel](./ch02-panel-description) — referencia del estado LED
- [Ch. 5 — Bloqueando](./ch05-clocking)
- [Manual del usuario de DADman — Ch. 9](/troubleshooting) — Solución de problemas del lado del software
