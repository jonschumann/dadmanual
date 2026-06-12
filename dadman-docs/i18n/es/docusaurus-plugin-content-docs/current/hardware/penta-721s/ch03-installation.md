---
title: "Capítulo 3 — Instalación"
sidebar_label: "Ch. 3 — Instalación"
sidebar_position: 4
---

# Capítulo 3 — Instalación

> **Producto:** Digital Audio Dinamarca Penta 721s

> **Antes de empezar:** Leer [Material frontal — Seguridad y Convenciones](./fm-safety) antes de instalar esta unidad.

---

## 3.1 Requisitos del sitio

_[Marcador de posición — Requisitos ambientales: temperatura, humedad, limpieza de plancha.]_

| Parámetro                     | Especificación                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| Temperatura operativa         | 0 °C a 40 °C (32 °F a 104 °F)                                      |
| Temperatura de almacenamiento | -20 °C a 60 °C                                                                        |
| Humedad relativa              | 20% a 80% (sin condensar)                                          |
| Despacho de ventilación       | Mínimo 1U (44 mm) por encima y por debajo de la unidad en el atril |

---

## Montaje de Rack 3.2

_[Placeholder — procedimiento de montaje en rack. Incluye números de piezas de hardware y especificaciones de torque]_

El Penta 721s es una unidad de montaje en rack de 1U (chasis modular delgado) que se monta directamente en un rack estándar de 19 en el que se suministran orejas de rack.

1. Adjunta las orejas del atril a la unidad usando los tornillos suministrados.
2. Coloque la unidad en el atril en la ubicación deseada.
3. Seguro con tornillos en jaulas o tiras de rack hilado.

> **PRECAUCIÓN:** Usa los cuatro tornillos de rack. No confíe en menos de cuatro puntos de adjunto.

---

## 3.3 Conexión de energía

_[Placeholder — procedimiento de conexión de energía.]_

Interno. IEC C14 inlet. 100–240 V AC, 50/60 Hz. PSU redundante opcional.

1. Conecte un cable IEC C13 adecuado a la entrada de la unidad IEC C14.
2. Conecte el otro extremo a un outlet de la red de red.
3. Encienda la unidad usando el botón de encendido del panel frontal.

> \*\*ADVERTENCIA: \*\* Conéctate sólo a un salto de red terremoto/tierra correctamente. No derroten la conexión terrestre.

---

## 3.4 Configuración de red

La unidad se conecta al ordenador anfitrión sobre Ethernet. Se requiere una red de Ethernet Gigabit dedicada.

_[Placeholder — procedimiento de configuración de red. Referencia cruzada al manual de DADman Ch. 3.]_

1. Conecte el puerto NET 1 de la unidad a un interruptor Gigabit Ethernet.
2. Conecte el NIC dedicado de la computadora del host al mismo interruptor.
3. Configure el host NIC con una dirección IP estática en la misma subred que la unidad.
4. Enciende la unidad.
5. Open DADman — la unidad debe ser descubierta automáticamente.

> **NOTICE — Se requiere una red dedicada:** El tráfico de la red de audio es sensible a la latencia. No enrutar el audio de la red DAD sobre interruptores compartidos con el tráfico general de TI.

---

## 3.4 Initial Startup

_[Marcador de posición — procedimiento de primera potencia y pasos de verificación.]_

1. Confirme que todos los cables de señal son desconectados antes de encender el primer enchufe.
2. Aplicar potencia.
3. Observe front-panel LEDs — vea [Ch. 2 — Descripción del panel](./ch02-panel-description) para los estados LED esperados.
4. Conecte la unidad al ordenador anfitrión (Ethernet (sin Thunderbolt)).
5. Abra DADman y confirme que la unidad aparece en la Lista de Dispositivos.

---

## Referencias cruzadas

- [Material frontal — Seguridad](./fm-safety)
- [Ch. 2 — Descripción del panel](./ch02-panel-description)
- [Manual del usuario de DADman — Ch. 3 — Instalación](/installation) — Configuración del equipo del host
