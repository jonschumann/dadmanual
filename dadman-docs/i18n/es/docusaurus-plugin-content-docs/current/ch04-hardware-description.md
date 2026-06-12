---
id: descripción de hardware ch04
title: "Capítulo 4 — Descripción de hardware"
sidebar_label: "Ch. 4 — Descripción de hardware"
sidebar_position: 6
slug: /hardware-descripción
---

# Capítulo 4 — Descripción de hardware

> **Documento:** Manual del usuario de DADman  
> **Estado del capítulo:** Borrador v0. — Fotos de panel y datos de puerto integrados; foto trasera del panel principal de 256 y sección Junior de DAD pendiente  
> **Última actualización:** Junio de 2026

---

## En este capítulo

| Sección             | Cubos                                                           | Relevante para         |
| ------------------- | --------------------------------------------------------------- | ---------------------- |
| 4.1 | AX Center — panel frontal y posterior                           | Usuarios del centro AX |
| 4.2 | Núcleo 256 — Panel frontal y posterior                          | Núcleo 256 usuarios    |
| 4.3 | AX 64 — Panel frontal y posterior                               | Usuarios AX 64         |
| 4.4 | MOM — referencia de controles                                   | Usuarios MOM           |
| 4.5 | DAD Junior — panel frontal y trasero                            | Usuarios de DAD Junior |
| 4.6 | Penta 720 / 721s — panel frontal y trasero                      | Penta users            |
| 4.7 | Referencia de estado LED (todos los modelos) | Todos los usuarios     |

> **NOTA: Cómo usar este capítulo:** Este capítulo es una referencia de hardware. Identifica cada control físico y conector en cada producto soportado. Para procedimientos de configuración y enrutamiento de señales, consulte [Capítulo 7 — Operación]. Para instalación y cableado, consulte [Capítulo 3 — Instalación].

---

## 4.1 Centro AX

### 4.1.1 Resumen

El Centro AX es una interfaz de audio de Thunderbolt montado en rack 1U en la familia de productos Thunder\|Core. Proporciona dos entradas de micrófono/línea de instrumentos y salidas del monitor estéreo directamente en el panel frontal, con MADI, ADAT, reloj de palabras, ranuras analógicas de expansión y puertos dobles de Thunderbolt 3 en la parte trasera. Todos los enrutamientos, ganancias, monitoreo y configuración se realizan a través de DADman sobre Ethernet. El Centro AX también aloja el MOM (Monitor Operating Module) cuando se utiliza como un sistema controlador de monitor de escritorio — el MOM se conecta al Centro AX vía USB-C.

### 4.1.2 Resumen del Panel

![Panel frontal central AX](/img/panel-ax-center-front.png)
_Figura 4.1 — Panel frontal central AX. Las llamadas numeradas corresponden a la Sección 4.1.3._

![Panel trasero del centro AX (/img/panel-ax-center-rear.png)
_Figura 4.2 — panel trasero del centro AX. Las llamadas numeradas corresponden a la Sección 4.1.4._

### 4.1.3 Controles del Panel frontal

| Ref | Etiqueta                   | Tipo                                       | Función                                                                                                                                                                                                                                                                                                                                            |
| --- | -------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —   | **DAD**                    | Logo iluminado                             | Iluminación azul; indica encendido                                                                                                                                                                                                                                                                                                                 |
| 1   | **Energía**                | Botón de pulsación iluminado               | Inicia la secuencia controlada de encendido/apagado. Mantenga pulsado durante 5 s para apagar el apagado.                                                                                                                                                                                                          |
| —   | **Int.**   | Indicador LED                              | Encender cuando la unidad está bloqueada a su propia referencia interna de reloj                                                                                                                                                                                                                                                                   |
| —   | **Ext.**   | Indicador LED (verde)   | Enciende cuando la unidad está bloqueada a una fuente externa de reloj (palabra reloj, MADI, ADAT o Dante)                                                                                                                                                                                                                      |
| —   | **Error.** | Indicador LED (rojo)    | Enciende cuando se detecta un error de reloj, la pérdida de sincronización o un fallo interno. Consulte [Sección 4.7 — Referencia de Estado LED] y [Capítulo 9 — Resolución de problemas]. |
| 2   | **Micrófono/Inst 1**       | Combo XLR/TRS (bloqueo) | Entrada de micrófono/línea/instrumento, canal 1. Acepta XLR (micrófono balanceado) o TRS/TS de 6,35 mm (línea/instrumento).                                                                                                                                                  |
| —   | **P48**                    | Indicador LED                              | Encender cuando la potencia fantasma (+48 V) está activa en este canal de entrada                                                                                                                                                                                                                                               |
| —   | **Michael**                | Indicador LED                              | Enciende cuando la entrada está configurada como entrada de micrófono                                                                                                                                                                                                                                                                              |
| —   | **Instancia**              | Indicador LED                              | Encender cuando la entrada está configurada como una entrada de instrumentos de alta impedancia                                                                                                                                                                                                                                                    |
| 3   | **Micrófono/Inst 2**       | Combo XLR/TRS (bloqueo) | Entrada de micrófono/línea/instrumento, canal 2. La misma especificación que el canal 1.                                                                                                                                                                                                                           |
| 4   | **HP 1**                   | Jack TRS 6,35 mm                           | Salida de auriculares 1. Nivel controlado a través de DADman o MOM.                                                                                                                                                                                                                                                |
| 5   | **HP 2**                   | Jack TRS 6,35 mm                           | Salida de auriculares 2. Nivel controlado a través de DADman o MOM.                                                                                                                                                                                                                                                |

### 4.1.4 Panel de Rear

| Ref | Etiqueta                                        | Conector                                                | Función                                                                                                                                                                                                                                                                                                                                                   |
| --- | ----------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Energía**                                     | Entrada IEC C14                                         | Entrada principal de poder. 100–240 V AC, 50/60 Hz, PSU interna auto-rango. Conecte un cable IEC C13 estándar.                                                                                                                                                                                            |
| 2   | **EXPANSION** (par superior) | Bahía SFP 2×                                            | Expansión óptica DADLink / MADI. Acepta módulos SFP para la conexión a otras unidades DAD mediante fibra óptica activa (cabina DADLink) o para MADI óptico.                                                                                                                                            |
| 3   | **NET 1 / NET 2**                               | 2× RJ45 + bahía SFP                                     | Red de control de Ethernet (NET 1, NET 2: 100/1000BASE-T). La Bahía SFP debajo de NET 1/NET 2 acepta un módulo SFP para conexión opcional a la red de fibras. Conecte NET 1 o NET 2 a su red de control DADman — sólo se necesita un puerto para una operación normal. |
| 4   | **THUNDERBOLT 1** (superior) | USB-C (Trueno 3)                     | Conexión principal de Thunderbolt 3 al ordenador. Conecte este puerto al puerto de Thunderbolt 3 o USB4 del ordenador con un cable de 20 Gbps. Carries hasta 256 canales de audio bidireccionales a tarifas estándar de muestra.                                                                          |
| 5   | **THUNDERBOLT 2** (inferior) | USB-C (Trueno 3)                     | Thunderbolt 3 daisy-chain / paseo. Conecta al siguiente dispositivo Thunderbolt de la cadena.                                                                                                                                                                                                                             |
| 6   | **WC/VBB IN**                                   | BNC, 75                                                 | Entrada de reloj de palabras o de Explosión de Video Negro. Acepta el reloj de la palabra (1×, 256×, o los formatos de sincronización de vídeo). Introducir la terminación de 75 en el último dispositivo en una palabra cadena de reloj.                                              |
| 7   | **APAGAR WC**                                   | BNC, 75                                                 | Salida de reloj. Sale la referencia de sincronización actual de la unidad como una palabra señal de reloj.                                                                                                                                                                                                                |
| 8   | **MADI IN**                                     | BNC, 75                                                 | MADI input (coaxial). Acepta AES10 MADI en formato de marco de 56 o 64 canales. A 96 kHz, el número máximo de canales es de 32.                                                                                                                                                        |
| 9   | **MADI OUT**                                    | BNC, 75                                                 | MADI output (coaxial). Transmits MADI al formato de fotograma configurado y velocidad de muestreo.                                                                                                                                                                                                     |
| 10  | **AÑADIR 1 / 2**                                | 2× TOSLINK (óptico)                  | ADAT salidas de tuberías ligeras. Hasta 8 canales por puerto a 44,1/48 kHz; 4 canales por puerto a 88,2/96 kHz (S/MUX).                                                                                                                                                                                |
| 11  | **ADAT EN 1 / 2**                               | 2× TOSLINK (óptico)                  | ADAT entradas de tuberías ligeras. El mismo número de canales que las salidas ADAT.                                                                                                                                                                                                                                       |
| 12  | **MONITOR 1**                                   | 2× TRS 6.35 mm (L/R) | Salida del monitor estéreo equilibrado 1. Nivel controlado a través de DADman o MOM.                                                                                                                                                                                                                                      |
| 13  | **MONITOR 2**                                   | 2× TRS 6.35 mm (L/R) | Salida balanceada del monitor estéreo 2. Nivel controlado a través de DADman o MOM.                                                                                                                                                                                                                                       |
| 14  | **SLOT 1 / SLOT 2**                             | 2× ranura de expansión (DB25)        | Ranuras analógicas de expansión de E/S. Cada ranura acepta una tarjeta de expansión DAD que proporciona 8 canales de A/D, D/A o E/S digital. La asignación del tipo de tarjeta y del canal está configurada en DADman.                                                                                    |

> **NOTICE — Requisitos de cable de Trueno :** La conexión de Thunderbolt 3 requiere un cable con una calificación de 20 Gbps o superior. Los cables estándar USB-C no están clasificados para las velocidades de Thunderbolt 3 y no funcionarán de forma fiable. Utilice el cable suministrado con la unidad o un cable certificado Thunderbolt 3 / Thunderbolt 4 cable.

> **NOTICE — Terminación del reloj de la palabra:** El puerto WC/VBB IN debe ser terminado (75 horas) cuando el centro AX es el último dispositivo en una cadena de reloj de la palabra. No terminar puede causar reflexiones que desestabilicen la referencia del reloj para todos los dispositivos conectados. El interruptor de terminación se encuentra junto al conector BNC.

---

## 4.2 Núcleo 256

### 4.2.1 Resumen

El núcleo 256 es una interfaz de audio de medio rack Thunderbolt en la familia de productos Thunder\|Core . Comparte el mismo complemento de conector de panel trasero que el Centro AX, pero omite las entradas de micrófono/instrumentos del panel frontal y las salidas de auriculares. Está diseñado para instalaciones donde se requiere un núcleo de audio compacto y rackmountable de Thunderbolt sin E/S de panel frontal. El núcleo 256 está propulsado por un suministro externo de 12 V DC.

> **NOTA: El núcleo 256:** es una unidad de medio ancho de rack. Para montarlo en una racha estándar de 19 pulgadas se requiere una protección de 1U o el accesorio de Hardware Negro 256 para montarlo. Vea [Capítulo 2 — Requisitos del sistema] para opciones de estrago.

### 4.2.2 Resumen del Panel

![Panel frontal del núcleo 256](/img/panel-core256-front.png)
_Panel frontal de la figura 4.3 — Panel frontal del núcleo 256. Las llamadas numeradas corresponden a la Sección 4.2.3._

![Panel trasero del núcleo 256](/img/panel-core256-rear.png)
_Panel trasero de la Figura 4.4 — Panel trasero de 256. Las llamadas numeradas corresponden a la Sección 4.2.4._

### 4.2.3 Controles del Panel frontal

| Ref | Etiqueta                   | Tipo                                     | Función                                                          |
| --- | -------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| —   | **DAD**                    | Logo iluminado                           | Iluminación azul; indica encendido                               |
| 1   | **Energía**                | Botón de pulsación iluminado             | Inicia la secuencia controlada de encendido/apagado              |
| —   | **Int.**   | Indicador LED                            | Encender cuando esté bloqueado a la referencia interna del reloj |
| —   | **Ext.**   | Indicador LED (verde) | Encender cuando esté bloqueado a la fuente de reloj externa      |
| —   | **Error.** | Indicador LED (rojo)  | Lit en error de reloj o fallo interno                            |

### 4.2.4 Panel de Rear

El panel trasero Core 256 lleva el mismo conjunto de conector que el Centro AX (ver [Sección 4.1.3]), con las siguientes diferencias:

| Diferencia           | Centro AX                                                | Núcleo 256                                                             |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| Potencia             | IEC C14 mains inlet (100–240 V AC)    | Conector de cañón de 12 V DC (requiere PSU externo) |
| Monitorear salidas   | 2× TRS estéreo (MONITOR 1, MONITOR 2) | No presente                                                            |
| Ranuras de expansión | 2× (SLOT 1, SLOT 2)                   | 2× (SLOT 1, SLOT 2) — el mismo                      |

Todos los demás conectores de panel posterior (EXPANSION / SFP bays, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) son idénticos al Centro AX. Consulte la tabla del conector de panel trasero del Centro AX en [Sección 4.1.3] para ver la función y la especificación de esos conectores.

---

## 4.3 AX 64

### 4.3.1 Resumen

El AX 64 es una interfaz de audio Thunderbolt montado en rack 2U con hasta ocho ranuras para tarjetas de expansión, proporcionando hasta 64 canales de E/S analógica en una sola unidad (dependiendo de las tarjetas de expansión ajustadas). Al igual que el AX Center, todo el control es vía DADman sobre Ethernet. El AX 64 tiene la misma conectividad del núcleo que el Centro AX (MADI, ADAT, reloj de palabras, Thunderbolt 3, Ethernet dual, pero añade hasta ocho ranuras analógicas de expansión en formato DB25 en lugar de las E/S del panel frontal fijo del centro AX.

### 4.3.2 Resumen del Panel

![Panel frontal AX 64](/img/panel-ax64-front.png)
_Figura 4.5 — Panel frontal AX 64. Las llamadas numeradas corresponden a la Sección 4.3.3._

![Panel trasero AX 64](/img/panel-ax64-rear.png)
_Tema 4.6 — panel trasero AX 64. Las llamadas numeradas corresponden a la Sección 4.3.4._

### 4.3.3 Controles del Panel frontal

| Ref | Etiqueta                   | Tipo                                     | Función                                                          |
| --- | -------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| —   | **DAD**                    | Logo iluminado                           | Iluminación azul; indica encendido                               |
| 1   | **Energía**                | Botón de pulsación iluminado             | Inicia la secuencia controlada de encendido/apagado              |
| —   | **Int.**   | Indicador LED                            | Encender cuando esté bloqueado a la referencia interna del reloj |
| —   | **Ext.**   | Indicador LED (verde) | Encender cuando esté bloqueado a la fuente de reloj externa      |
| —   | **Error.** | Indicador LED (rojo)  | Lit en error de reloj o fallo interno                            |

> **NOTA:** El panel frontal AX 64 sólo proporciona indicadores de estado. Todas las conexiones de E/S de audio se realizan en el panel trasero (Figura 4.6).

### 4.3.4 Panel de Rear

| Ref    | Etiqueta                                        | Conector                               | Función                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------ | ----------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | **Energía**                                     | Entrada IEC C14                        | Entrada principal de poder. 100–240 V AC, 50/60 Hz, auto-ranging.                                                                                                                                                                                                                                                                                                                               |
| 1a     | _(Opcional)_                 | Entrada IEC C14                        | Entrada de alimentación redundante (opción instalada en fábrica). Cuando se instala el PSU redundante opcional, aparece una segunda entrada IEC C14 adyacente a la principal.                                                                                                                                                                                                |
| 2, 3   | **EXPANSIÓN**                                   | Bahía SFP 2×                           | Expansión óptica DADLink / MADI, idéntica a AX Center. Acepta módulos SFP para DADLink o MADI I/O óptico.                                                                                                                                                                                                                                                                                       |
| 4, 5   | **NET 1 / NET 2**                               | 2× RJ45 + bahía SFP                    | Red de control Ethernet. Identical to AX Center. Conecte NET 1 o NET 2 a la red de control DADman.                                                                                                                                                                                                                                                                              |
| 6      | **THUNDERBOLT 1** (superior) | USB-C (Trueno 3)    | Conexión principal de Thunderbolt 3 al ordenador.                                                                                                                                                                                                                                                                                                                                                               |
| 7      | **THUNDERBOLT 2** (inferior) | USB-C (Trueno 3)    | Thunderbolt 3 daisy-chain / paseo.                                                                                                                                                                                                                                                                                                                                                                              |
| 8      | **WC IN**                                       | BNC, 75                                | Entrada de reloj.                                                                                                                                                                                                                                                                                                                                                                                               |
| 9      | **APAGAR WC**                                   | BNC, 75                                | Salida de reloj.                                                                                                                                                                                                                                                                                                                                                                                                |
| 10     | **MADI IN**                                     | BNC, 75                                | Entrada coaxial MADI. AES10 compatible.                                                                                                                                                                                                                                                                                                                                                         |
| 11     | **MADI OUT**                                    | BNC, 75                                | Salida coaxial MADI.                                                                                                                                                                                                                                                                                                                                                                                            |
| 12, 14 | **AÑADIR 1 / 2**                                | 2× TOSLINK (óptico) | ADAT salidas de tuberías ligeras.                                                                                                                                                                                                                                                                                                                                                                               |
| 13, 15 | **ADAT EN 1 / 2**                               | 2× TOSLINK (óptico) | ADAT entradas de tuberías ligeras.                                                                                                                                                                                                                                                                                                                                                                              |
| 16–23  | **Ranura 1 – Ranura 8**                         | Hasta 8× DB25                          | Ranuras analógicas de tarjetas de expansión. Cada ranura acepta una tarjeta de expansión DAD de 8 canales (A/D, D/A o E/S digital). La numeración de la ranura corre de derecha a izquierda como se ve desde la parte trasera (la ranura 1 está a la derecha). El tipo de tarjeta y la ruta están configurados en DADman. |

> **NOTICE — Ranuras de tarjetas de expansión:** El AX 64 viene con el número de tarjetas de expansión especificadas en el momento del pedido. Las ranuras despobladas están cubiertas por una placa blanking. No retire las placas de las ranuras vacías de las que se necesita para un flujo de aire correcto. Las tarjetas de expansión sólo deben instalarse o eliminarse con la unidad apagada.

> **NOTICE — Convención de numeración de las ranuras:** En el panel trasero físico, los números de las ranuras son mostrados por encima de cada ranura y corren de la derecha (ranura 1) a la izquierda (ranura 8) como se ve desde la parte trasera de la unidad. En DADman, las ranuras están etiquetadas para que coincidan con esta numeración física. Verifique las asignaciones de ranuras en DADman cuando conecte por primera vez una unidad con tarjetas de expansión.

---

## 4.4 MOM — Módulo Operador

### 4.4.1 Resumen

El MOM (Monitor Operating Module) es un controlador de monitor de escritorio que se conecta a un AX Center o AX 64 vía USB-C. Proporciona control físico sobre la selección de altavoces del monitor, selección de fuente, nivel maestro, atenuación, corte, conversación y nivel de referencia sin necesidad de interacción con la ventana de software DADman. El MOM se comunica con el centro AX o AX 64 a través de USB y no contiene ningún circuito de audio propio, es sólo una superficie de control. Las señales de audio no se envían a través del MOM.

> **NOTA:** El MOM se conecta a la computadora que ejecuta DADman a través del puerto USB-C en la parte trasera del Centro AX o AX 64. No se conecta directamente al puerto USB del ordenador. DADman debe estar corriendo para que el MOM funcione.

### 4.4.2 Controles Referencia

![Cara de control MOM](/img/panel-mom.png)
_Figura 4.7 — Cara de control MOM. Los callouts numerados corresponden a la tabla de referencia de abajo._

| Ref | Etiqueta                    | Tipo                                     | Función                                                                                                                                                                                                                                                                                                                                    |
| --- | --------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **Spkr. 1** | Botón de pulsación iluminado             | Selecciona la salida del altavoz 1 (por ejemplo, los monitores principales). Corresponde a un conjunto de salida de altavoces configurado en el perfil de Monitoring activo de DADman.                                                                                                  |
| 2   | **Spkr. 2** | Botón de pulsación iluminado             | Selecciona la salida del altavoz 2 (por ejemplo, los monitores de campo cercano).                                                                                                                                                                                                                       |
| 3   | **Spkr. 3** | Botón de pulsación iluminado             | Selecciona la salida del altavoz 3 (por ejemplo, altavoz de traducción o cama de Atmos).                                                                                                                                                                                                                |
| 4   | **Src. Y**  | Botón de pulsación iluminado             | Selecciona la fuente de monitoreo A como se define en el perfil de seguimiento activo.                                                                                                                                                                                                                                     |
| 5   | **Src. B**  | Botón de pulsación iluminado             | Selecciona el monitoreo de fuente B.                                                                                                                                                                                                                                                                                       |
| 6   | **Src. C**  | Botón de pulsación iluminado             | Selecciona la fuente de monitoreo C.                                                                                                                                                                                                                                                                                       |
| 7   | **Capa**                    | Botón de pulsación iluminado             | Cambia el MOM entre capas de control. Cuando se configuran múltiples capas en DADman, presionando los ciclos de capa a través de ellos, reasignando el Spkr. y cc. botones a diferentes conjuntos de altavoces y fuentes.                                                  |
| —   | **Estado LEDs 1–4**         | Indicadores LED                          | Indique el estado de las cuatro capas o presets activas. Iluminado cuando la capa correspondiente está activa.                                                                                                                                                                                             |
| —   | **Estado.** | Indicador LED (verde) | Indicates MOM está conectado al AX Center / AX 64 y se comunica correctamente. Flashear durante la inicialización. Apagado cuando se desconecte.                                                                                                                                           |
| 8   | **BT**                      | Botón-push                               | Talkback. Envía el micrófono charkback (configurado en DADman) a los canales de talento mientras se mantiene.                                                                                                                                                                           |
| 9   | **Ref**                     | Botón-push                               | Nivel de referencia. Cambia la salida del monitor al nivel de referencia calificado definido en el perfil de seguimiento activo. Presione de nuevo para volver al nivel anterior.                                                                                                          |
| 10  | **Cortar**                  | Botón de pulsación iluminado             | Corta (silencia) la salida del monitor. Ilumina rojo cuando está activo.                                                                                                                                                                                                                |
| 11  | **Dim**                     | Botón de pulsación iluminado             | Atenta la salida del monitor por la cantidad de atenuación configurada en el perfil de seguimiento activo (típicamente – 20 dB). Ilumina ámbar cuando está activo.                                                                                                                      |
| 12  | **Nivel**                   | Codificador de Rotary con anillo LED     | Control de nivel de monitor maestro. Gira para ajustar el nivel de salida. El anillo LED indica la posición del nivel actual relativa al nivel de referencia (0 = Ref). Rango: aproximadamente −40 dB a +6 dB relativo a la referencia. |

> **NOTICE — Perfiles de MOM y Monitorizadores:** Las funciones de los botones de Spkr., C., C., y Capa están determinadas por el perfil de los supervisores cargado en DADman. Un MOM sin un perfil de supervisor activo configurado tendrá Spkr no funcional. y cc. botones. Configurar Perfiles de seguimiento antes de usar el MOM en una sesión. Consulte [Capítulo 8 — Características avanzadas, Sección 8.1 — Perfiles de seguimiento].

---

## 4.5 DAD Junior

### 4.5.1 Resumen

_[Titular de posición: Resumen de DAD Junior — documentación pendiente de lanzamiento de producto e ingeniería.]_

### 4.5.2 Panel frontal

_[Marcador de posición: diagrama anotado de panel frontal — DAD (Diagrama de DAD]_

### 4.5.3 Panel de Rear

_[Marcador de posición: diagrama del panel trasero anotado — Diagrama de DAD]_

---

## 4.6 Penta 720 / 721s

### 4.6.1 Resumen

Los Penta 720 y Penta 721 son plataformas modulares de conversión de audio y señal de NTP Technology. A diferencia de los productos Thunder\|Core (AX Center, AX 64, Core 256), las unidades Penta sólo se conectan a la computadora por Ethernet — no hay conexión Thunderbolt. DADman se comunica con unidades Penta a través de la red de control para enrutamiento, conversión de formato y configuración. Las unidades Penta se utilizan típicamente para contar con altos canales AES/EBU y MADI E/S, conversión de formato y distribución de audio de red en entornos de transmisión y postproducción.

El Penta 720 es un chasis montado en rack 2U que acepta tarjetas de expansión en sus ranuras internas. El Penta 721s es una variante de 1U más delgada. El complemento del conector de panel trasero depende de las tarjetas de expansión instaladas; la disposición mostrada en la Sección 4. .3 refleja una configuración típica con una tarjeta de E/S Dante/AES67 en la ranura 1.

### 4.6.2 Paneles Resumen

![Penta 720 panel frontal](/img/panel-penta720.png)
_Figura 4.8 — Panel frontal Penta 720. Las llamadas numeradas corresponden a la tabla de referencia de la Sección 4.6.3._

![Penta 721s panel frontal](/img/panel-penta721s-front.png)
_Figura 4.9 — Panel frontal Penta 721s._

![Panel trasero de Penta 721](/img/panel-penta721s-rear.png)
_Panel trasero de Penta 721s. Las llamadas numeradas corresponden a la tabla de referencia de la Sección 4.6.4._

| Ref | Etiqueta   | Tipo                                     | Función                                                                                                                                                                                                           |
| --- | ---------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —   | **Listo**  | Indicador LED (verde) | La unidad ha completado la secuencia de arranque y está lista para la operación                                                                                                                                   |
| —   | **Error**  | Indicador LED (rojo)  | Se ha detectado un fallo interno o un error de configuración                                                                                                                                                      |
| —   | **PSU OK** | Indicador LED (verde) | La fuente de alimentación primaria funciona correctamente. En unidades con PSU redundante, un segundo indicador PSU OK confirma el estado de suministro de la copia de seguridad. |

### 4.6.4 Panel de Oso

| Ref | Etiqueta                                             | Conector                                | Función                                                                                                                                                                                                                                                                |
| --- | ---------------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Energía (primaria)**            | Entrada IEC C14                         | Entrada principal de poder. 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                                                                    |
| 2   | **Potencia (copia de seguridad)** | Entrada IEC C14                         | Entrada de alimentación de corriente redundante (donde se ajusta). Proporciona redundancia PSU de intercambio caliente.                                                                                             |
| 3   | **AES/EBU I/O 1–4**                                  | DB25 (Tascam pinout) | AES/EBU E/S de audio digital, canales 1–4 (4 pares estéreo = 8 canales).                                                                                                                                                            |
| 4   | **AES/EBU I/O 5–8**                                  | DB25 (Tascam pinout) | AES/EBU E/S de audio digital, canales 5–8 (4 pares estéreo = 8 canales).                                                                                                                                                            |
| 5   | **MADI IN**                                          | BNC, 75                                 | Entrada coaxial MADI. AES10 compatible.                                                                                                                                                                                                |
| 6   | **MADI OUT**                                         | BNC, 75                                 | Salida coaxial MADI.                                                                                                                                                                                                                                   |
| 7   | **E/S óptica**                                       | TOSLINK (óptico)     | MADI óptico o ADAT E/S (dependiente de la tarjeta).                                                                                                                                                                                 |
| 8   | **WC/VBB IN**                                        | BNC, 75                                 | Entrada de reloj de palabras o de Explosión de Video Negro.                                                                                                                                                                                            |
| 9   | **APAGAR WC**                                        | BNC, 75                                 | Salida de reloj.                                                                                                                                                                                                                                       |
| 10  | **AES11 EN**                                         | XLR (hembra)         | Entrada de señal de referencia de audio digital AES11. Se utiliza para sincronizar la unidad con una fuente de referencia AES11.                                                                                                       |
| 11  | **NET 1**                                            | RJ45 (1000BASE-T)    | Control Ethernet y/o red de audio Dante, puerto 1.                                                                                                                                                                                                     |
| 12  | **NET 2**                                            | RJ45 (1000BASE-T)    | Control Ethernet y/o red de audio Dante, puerto 2.                                                                                                                                                                                                     |
| 13  | **SLOT 1** (Dante/AES67 I/O)      | 2× SFP                                  | Espacio de expansión 1. Se muestra equipada con una tarjeta Dante/AES67 de E/S que proporciona dos puertos SFP para conexiones de red ópticas o de cobre Dante. El contenido del espacio varía según la configuración. |

---

## Referencia del estado LED 4.7

La siguiente tabla cubre los indicadores LED del panel frontal comunes a todas las unidades de trenzas\|rack del núcleo (AX Center, Core 256, AX 64). Las unidades Penta utilizan un conjunto separado de indicadores cubiertos en la sección Penta de arriba.

### 4.7.1 Reloj de referencia LEDs — Trueno | Unidades de núcleo

| Ent.         | Ext.              | Err.             | Comenzando                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ● (lit)   | (apagado)      | (apagado)     | La unidad está cerrada a su propio oscilador interno. Ninguna referencia externa está conectada o seleccionada. Estado normal para un maestro de reloj.                                                                                                                                                                                                            |
| (apagado) | ● (lit, verde) | (apagado)     | La unidad está bloqueada a la referencia externa seleccionada (reloj, MADI incrustado, ADAT embebido, o Dante PTP). Estado normal para un esclavo de reloj.                                                                                                                                                                                                     |
| ● (lit)   | ● (lit)        | (apagado)     | La unidad está en proceso de bloqueo a una referencia externa. El oscilador interno se está ejecutando mientras se adquiere la cerradura. Estado de transición — normalmente se resuelve en unos segundos.                                                                                                                                                         |
| (apagado) | (apagado)      | ● (lit, rojo) | **Error de reloj.** La unidad no puede bloquear a la referencia externa seleccionada. Compruebe que la fuente de referencia está presente, a la velocidad de muestra correcta y conectada a la entrada correcta. Consulte [Capítulo 9 — Resolución de problemas, Sección 9.3]. |
| ● (lit)   | (apagado)      | ● (lit, rojo) | **Defecto interno.** La unidad ha detectado un error interno no relacionado con el reloj externo. Tenga en cuenta el estado del panel frontal y el ciclo de energía de la unidad. Si el error persiste, póngase en contacto con el soporte de DAD.                                                                                                 |
| Parpadeo lento               | —                                 | —                                | La unidad está llevando a cabo una actualización de firmware. No apague la unidad durante una actualización del firmware.                                                                                                                                                                                                                                                          |

### 4.7.2 Botón de energía

| Estado                           | Comenzando                                                  |
| -------------------------------- | ----------------------------------------------------------- |
| Apagado                          | Unidad apagada                                              |
| Lit (estable) | La unidad está encendida y funciona normalmente             |
| Pulso lento                      | La unidad está en espera o realiza una secuencia de apagado |

### 4.7.3 MOM Status LEDs

| Stat.                      | Comenzando                                                          |
| ------------------------------------------ | ------------------------------------------------------------------- |
| ● (lit, verde, estable) | MOM está conectado y comunicándose con el centro AX de host / AX 64 |
| Parpadeo lento (verde)  | MOM está inicializando o esperando a que DADman responda            |
| (apagado)               | MOM no está conectado, o la unidad host está apagada                |

_[Marcador de posición: tablas LED por canal/OL/carrier — aplicable a tarjetas de expansión AX 64 que incluyen mediciones de panel frontal. Documentación pendiente de ingeniería.]_

---

## Referencias cruzadas

- **Capítulo 1 — Introducción:** Lista de hardware compatible; familias de hardware y compatibilidad de clonación
- **Capítulo 2 — Requerimientos del sistema:** Contenido del paquete por modelo; versiones soportadas del sistema operativo
- **Capítulo 3 — Instalación:** Instalación del controlador Thunderbolt; configuración de red
- **Capítulo 5 — Flujo de señal y Archivo:** Cómo encaja cada tipo de conector en la ruta de señal y reloj
- **Capítulo 7 — Operación:** Configurando los perfiles de entradas, salidas, enrutamiento y monitoreo en DADman
- **Capítulo 8 — Características avanzadas:** Perfiles de seguimiento, configuración MOM, Control\|Pack
- **Apéndice A — Especificaciones:** Especificaciones eléctricas y mecánicas completas por producto
- **Apéndice B — Pinouts de conector:** Asignaciones de pines para DB25, XLR, BNC y otros tipos de conector

---
