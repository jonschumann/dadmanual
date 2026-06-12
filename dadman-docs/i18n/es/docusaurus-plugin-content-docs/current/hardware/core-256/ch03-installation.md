---
title: "Capítulo 3 — Instalación"
sidebar_label: "Ch. 3 — Instalación"
sidebar_position: 4
---

# Capítulo 3 — Instalación

> **Producto:** Digital Audio Denmark Core 256

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

El núcleo 256 es una unidad de rack medio. Se requiere un armazón de 1U (disponible por separado) o el accesorio de Hardware Negro 256 para montarlo en una pista estándar de 19 pulgadas.

1. Adjunta las orejas del atril a la unidad usando los tornillos suministrados.
2. Coloque la unidad en el atril en la ubicación deseada.
3. Seguro con tornillos en jaulas o tiras de rack hilado.

> **PRECAUCIÓN:** Usa los cuatro tornillos de rack. No confíe en menos de cuatro puntos de adjunto.

---

## 3.3 Conexión de energía

_[Placeholder — procedimiento de conexión de energía.]_

Externa. 12V conector de cañón DC. PSU externa suministrada.

1. Conecte un cable IEC C13 adecuado a la entrada de la unidad IEC C14.
2. Conecte el otro extremo a un outlet de la red de red.
3. Encienda la unidad usando el botón de encendido del panel frontal.

> \*\*ADVERTENCIA: \*\* Conéctate sólo a un salto de red terremoto/tierra correctamente. No derroten la conexión terrestre.

---

## 3.4 Instalación del controlador de Thunderbolt

El controlador DAD Thunderbolt debe instalarse en el ordenador anfitrión antes de que DADman detecte la unidad.

_[Placeholder — procedimiento de instalación del controlador. Referencia cruzada al manual de DADman Ch. 3.]_

1. Descarga el paquete del controlador DAD Thunderbolt de [digitalaudio.dk](https://digitalaudio.dk/support).
2. Ejecute el instalador y siga las instrucciones en pantalla.
3. Reinicie el equipo cuando se le solicite.
4. Enciende la unidad y conecta el cable Thunderbolt.
5. Abrir DADman — la unidad debe aparecer en la lista de dispositivos.

> **NOTA:** La configuración de seguridad de Thunderbolt en macOS puede requerir que el usuario apruebe el nuevo dispositivo Thunderbolt en la primera conexión. Consulte el capítulo de instalación de DADman para más detalles.

---

## 3.5 Inicio inicial

_[Marcador de posición — procedimiento de primera potencia y pasos de verificación.]_

1. Confirme que todos los cables de señal son desconectados antes de encender el primer enchufe.
2. Aplicar potencia.
3. Observe front-panel LEDs — vea [Ch. 2 — Descripción del panel](./ch02-panel-description) para los estados LED esperados.
4. Conecte la unidad al ordenador del anfitrión (Thunderbolt 3).
5. Abra DADman y confirme que la unidad aparece en la Lista de Dispositivos.

---

## Referencias cruzadas

- [Material frontal — Seguridad](./fm-safety)
- [Ch. 2 — Descripción del panel](./ch02-panel-description)
- [Manual del usuario de DADman — Ch. 3 — Instalación](/installation) — Configuración del equipo del host
