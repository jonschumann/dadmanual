---
id: características avanzadas de ch08-
title: "Capítulo 8 — Características avanzadas"
sidebar_label: "Ch. 8 — Características avanzadas"
sidebar_position: 10
slug: /advanced-features
---

# Capítulo 8 — Características avanzadas

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8. build 2  
> **Ejemplo principal hardware:** DAD AX Center  
> **Estado del capitulo:** Borrador v0. — Secciones 8.1–8. 5 borrados; PRO\|MON y Cue\|Mix documentación pendiente de ingeniería de DAD; tablas de parámetros SPQ y MIDI pendientes; capturas de pantalla pendientes  
> **Última actualización:** junio de 2026

---

## En este capítulo

| Sección              | Característica                                           | Versión requerida                                             |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| 8.1  | Perfiles de seguimiento — configuración y gestión        | Todas las versiones                                           |
| 8.2  | Grupos de ganancias de micrófono                         | v5.8.1 y posterior            |
| 8.3  | Clonar ajustes entre unidades                            | v5.6.9 y posterior            |
| 8.4  | Control\|Pack — Ajustes de ruta                          | v5.8.0 y posterior            |
| 8.5  | Integración de EuCon                                     | Todas las versiones                                           |
| 8.6  | DADLink                                                  | v5.6.9 y posterior            |
| 8.7  | Ejecutando DADman en barra de menú o bandeja del sistema | v5.7.0 y posterior            |
| 8.8  | Gestión de archivos y acceso a línea de comandos         | v5.7.0 y posterior            |
| 8.9  | Referencia de preferencias de DADman                     | Todas las versiones                                           |
| 8.10 | Tarjeta virtual Dante como fuente de seguimiento         | Todas las versiones                                           |
| 8.11 | Configuración del nivel de salida analógico              | Todas las versiones                                           |
| 8.12 | Tarjeta de procesamiento de altavoz SPQ                  | Todas las versiones (requiere tarjeta SPQ) |
| 8.13 | Atmos de Dolby monitoreo de flujo de trabajo             | Todas las versiones                                           |
| 8.14 | LTC sobre Dante                                          | Todas las versiones                                           |
| 8.15 | MIDI Control y Pro Herramientas PRE Emulación            | Todas las versiones                                           |
| —                    | Sistema de seguimiento MON                               | _(documentación pendiente)_                |
| —                    | Mixer cero latencia                                      | _(documentación pendiente)_                |

---

## 8.1 Perfiles de seguimiento — Configuración y gestión

### 8.1.1 Concepto

Un **Perfil de Seguimiento** (extensión de archivo `. mprof`) define la configuración completa del controlador del monitor para una unidad de hardware controlada por DADman: qué fuentes pueden ser monitoreadas, qué conjuntos de salida de altavoces están disponibles, cómo se manejan los plegables y los up-mate, los ajustes de retraso, el enrutamiento de conversaciones y las salidas de medición externas.

Un perfil de seguimiento está completamente separado del archivo de configuración de unidad (`.dms`). La misma configuración física de enrutamiento y ganancia se puede utilizar con varias configuraciones diferentes de monitoreo mediante la carga de perfiles diferentes, sin cambiar ninguna otra configuración de unidad.

> **NOTA:** Los perfiles de seguimiento se almacenan en la computadora, no en la unidad de hardware. Deben ser cargados en DADman cada vez que la aplicación es lanzada (a menos que **Abrir el último archivo al inicio** esté habilitado para los perfiles). Si DADman está cerrado o el ordenador está apagado, el controlador del monitor continúa operando en el último estado enviado a la unidad, pero no es posible controlar el monitor hasta que DADman se reinicie con el perfil cargado.

### 8.1.2 Abriendo el Editor de Perfil de Seguidores

Abra el editor de Perfil de Monitoreo a través de **Ajustes > Perfil de Monitor** (macOS: **► M** / Windows: **Ctrl+Shift+M**).

El editor tiene cinco pestañas: **Fuentes**, **Salidas**, **Bajas de doble**, **Retraso**, y **MOM**.

### 8.1.3 Configuring Sources

Una fuente es cualquier ruta de señal que los operadores deberían poder seleccionar para la supervisión. Las fuentes típicas incluyen una salida estéreo de DAW, un flujo de Dante, una fuente de invitados o una fuente de confianza.

**Para agregar una fuente:**

1. En la pestaña **Fuentes**, haga clic derecho y seleccione **Añadir nueva fuente**.
2. Haga doble clic en el nombre de origen para renombrarlo (por ejemplo, `Pro Tools`, `Invitado`, `Dante Player`).
3. Haga clic derecho en **Modo** y seleccione **Establecer formato de grupo** — elija el número y formato del canal (Mono, Stereo, 5.1, 7.1.4, etc.).
4. Para cada canal en la fuente, haga clic derecho en el campo de asignación del canal y seleccione la entrada correspondiente de la matriz de enrutamiento. Utilice las entradas Dante, MADI, AES3 o analógicas disponibles en el hardware conectado.

_[Marcador de posición: captura de pantalla — pestaña de fuentes con dos fuentes configuradas (Pro Herramientas stereo, Dante 7.1)]_

### 8.1.4 Configurar conjuntos de salida

Un **conjunto de salida** define un grupo de canales de salida físicos usados como configuración de altavoces. Se pueden definir múltiples conjuntos de salida utilizando diferentes salidas físicas (por ejemplo, estéreo cercano al campo vs. alrededor), o las mismas salidas físicas con diferentes niveles de recorte (por ejemplo, 85 dB SPL vs. 75 dB SPL niveles de referencia).

**Para añadir un conjunto de salida:**

1. En la pestaña **Salidas**, haga clic derecho y seleccione **Añadir nuevo conjunto de salida**.
2. Nombra el conjunto de salida (por ej., `Near Field`, `5.1 Surround`, `85 dB SPL`).
3. Asigna un **formato de grupo** que coincida con la configuración del altavoz.
4. Asigna cada canal a una salida física analógica del hardware.
5. Establece un valor **Trim** si este conjunto de salida requiere un desplazamiento de nivel fijo (útil para múltiples valores de nivel de referencia).

> **NOTA:** Una vez que los canales de salida se asignan a un ajuste predefinido de ruta en Control\|Pack, están bloqueados y no pueden ser conectados a través de la matriz de ruta de DADman o monitorear el perfil. Vea [Sección 8.4 — Control\|Pack].

_[Marcador de posición: captura de pantalla — pestaña de salidas que muestra conjuntos de salida estéreo y 5.1]_

### Niveles de referencia 8.1.5 y múltiples ajustes SPL

La función de nivel de referencia bloquea la salida del monitor a una SPL calificada sin riesgo de ajuste accidental.

**Para configurar un nivel de referencia:**

1. Utilizando los tonos de prueba y un medidor SPL calificado, establezca el nivel principal de la pestaña Mon a la monitorización deseada SPL.
2. En **Ajustes > Perfil de seguimiento**, abre el conjunto de salida relevante.
3. Introduzca el nivel calibrado como el **Nivel de referencia** para ese conjunto de salida.
4. Presiona **Ref** en la pestaña Lon durante las sesiones para volver al instante a este nivel.

**Para crear múltiples valores preestablecidos de nivel de referencia en las mismas salidas físicas:**

Define dos conjuntos de salida apuntando a las mismas salidas físicas pero con diferentes valores de recorte. Por ejemplo:

| Nombre del conjunto de salida | Outputs | Recortar | SPL Calibrado |
| ----------------------------- | ------- | -------- | ------------- |
| Campo cercano 85 dB           | DA 1–2  | 0 dB     | 85 dB SPL     |
| Campo cercano 75 dB           | DA 1–2  | −10 dB   | SPL de 75 dB  |

Ambos conjuntos de salida aparecen como opciones de altavoz seleccionables en la pestaña Lun. Cambiar entre ellos proporciona interruptores de nivel SPL instantáneos sin tocar los controles de ganancia física.

### 8.1.6 Descargas y Emparejamiento

La pestaña **Descensos de Dobles** define matrices que se convierten entre formatos de altavoz, por ejemplo, plegando un 7. mezclar a estéreo para una comprobación de compatibilidad, o combinar una fuente estéreo con una disposición de altavoces personalizada.

**Replegable estándar:** DADman incluye matrices plegables estándar (por ejemplo, 5.1 a stereo). Seleccione el formato de entrada y salida y DADman genera los coeficientes de mezcla adecuados.

**matrices personalizadas (arriba o ruta selectiva):** Haga clic derecho en una entrada plegable existente y seleccione \*\*Añadir nueva matriz \*\*. Puede ajustar el formato de entrada y salida al mismo valor, creando de forma efectiva un ajuste predefinido de ruta personalizado dentro de la ruta del monitor. Esta técnica permite aplicaciones creativas plegables:

_Ejemplo — Selección de subconjunto del altavoz:_ Definir una matriz de \`Únicamente Tops a 7.1.4 → 7.1.4. En el editor de la matriz, enrutar sólo los cuatro canales superiores (Lt1, Rt1, Ltm, Rtm) a sus salidas correspondientes, dejando a todos los demás canales en silencio. Seleccionando este "plegable" en la pestaña de Lun encaja efectivamente los altavoces del techo sin cambiar la mezcla principal.

_Ejemplo — Administración de bases:_ Definir matrices plegables personalizadas que enrutan contenido de baja frecuencia a una salida de sub-frecuencia con coeficientes de rolloff apropiados, incluso cuando el formato fuente no incluye un canal LFE.

### 8.1.7 Configuración de Talkback

Talkback introduce un micrófono u otra fuente en el auricular del talento cuando se activa. Configure talkback en **Ajustes > Perfil de Monitorización > Salidas**.

**Modos de Talkback** _(v5.7.0 y superior):_

| Modo               | Comportamiento                                                                                                                                                    | Cuándo usar                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Alternar/Latch** | La primera pulsación activa hablar; la segunda prensa desactiva. Mantener alineaciones más largas entre los estados de encendido. | Entornos de estudio donde el ingeniero necesita un diálogo manos libres  |
| **RAW**            | Talkback sólo está activo mientras se mantiene el botón; se libera cuando se libera el botón.                                                     | Entornos de transmisión donde la atracción accidental sería perturbadora |

> **NOTA:** El modo RAW se aplica al control de hardware MOM y al botón de conversación del panel frontal de MTRX Studio. Las superficies de control de EuCon siempre usan el modo Toggle/Latch independientemente de esta configuración.

### 8.1.8 Headphone Seguimiento Sala de Control

De forma predeterminada, la salida del auricular es una mezcla de **Cue** separada, independiente de la selección de altavoces de la sala de control. Para tener la salida del auricular automáticamente el seguimiento de cualquier fuente seleccionada en los altavoces de la sala de control principal:

1. En **Ajustes > Perfil de Monitorización > Salidas**, ajusta el **Modo Monitor** de la salida de los auriculares a **Maestro**.
2. Estableció el **Modo Monitor** del set de salida del altavoz de la sala de control a **Cue**.

**Resultado:** La salida del auricular ahora está asignada a la selección de feed del monitor, la fuente que esté activa en los altavoces de la sala de control, la misma fuente reproduce a través de los auriculares. La selección de fuentes, plegar hacia abajo y atenuar/cortar todo sigue la sala de control.

> **NOTA — Limitación:** Cuando DADman no se está ejecutando, la unidad de hardware vuelve a su modo de operación predeterminado. En este fallo, la ruta del grupo Cue no se traduce al estado predeterminado del hardware para que el auricular no siga la sala de control cuando DADman esté fuera de línea. Como workaround, configure DADman para que ejecute automáticamente al iniciar sesión. Consulte [Sección 8.7 — Ejecutar DADman en la barra de menú o la bandeja del sistema].

### 8.1.9 Guardando y Cargando Perfiles de Seguidor

| Accin                                                               | macOS                                      | Ventanas                                   |
| ------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| Abrir perfil                                                        | A/S                                        | Ctrl+Alt+O                                 |
| Importar perfil (de cualquier unidad compatible) | ��� I                                      | Ctrl+Alt+I                                 |
| Guardar perfil                                                      | A/S                                        | Ctrl+Alt+S                                 |
| Guardar perfil como…                                                | Mañana                                     | Ctrl+Alt+Mayús+S                           |
| Cerrar perfil                                                       | A/S                                        | Ctrl+Alt+W                                 |
| Abrir perfil reciente                                               | Menú principal → **Abrir perfil reciente** | Menú principal → **Abrir perfil reciente** |

**Perfil de importación:** La función **Archivo > Importar Perfil…** importa un Perfil de Monitoreo de cualquier unidad conectada compatible y realiza un mapeo de mejor calidad a la E/S del hardware actual. Esto es útil cuando se migra un perfil entre unidades con diferentes configuraciones de E/S.

---

## 8.2 Grupos de Ganancia de Micrófonos _(v5.8.1 construir 6 o superior)_

### 8.2.1 Concepto

Los grupos de ganancia de micrófono permiten enlazar múltiples canales de entrada analógica para que ajustar la ganancia o silenciar en cualquier canal mueva todos los canales del grupo simultáneamente, mientras se preservan las ganancias relativas entre canales. Esto está diseñado para configuraciones multi-micrófonas - tambores, conjuntos orquestrales, coro, o matrices de grabación de ubicación — donde las relaciones de ganancia relativa consistentes entre canales deben ser mantenidas a través de ajustes.

Los Grupos de Mic Gain son compatibles con todo el hardware **excepto MTRX Studio**. Se requiere una actualización del firmware (Family 1: v2.4.5.1 o superior; Thunder\|Core: v1.1.1 o superior).

**Parámetros agrupados:** Ganancia y silencio.  
**No agrupado:** Potencia fantasma (+48 V) e inversión en fase (Ø). Estos permanecen controlados individualmente incluso cuando los canales están en un grupo.

### 8.2.2 Creación y Gestión de Grupos

**Para agregar un canal a un grupo:**

1. En la pestaña **AD**, haga clic derecho en el control de ganancia de un canal (o utilice el menú contextual del canal).
2. Selecciona **Añadir al grupo de ganancias** y elige un número de grupo (los grupos están numerados; puedes crear varios grupos independientes).
3. Repetir por cada canal para incluir en el grupo.

**Para eliminar un canal de un grupo:**

Haga clic derecho en el control de ganancia y seleccione **Quitar del grupo de ganancias**.

### 8.2.3 Comportamiento del Grupo

Cuando varios canales comparten un grupo:

- Al mover el control deslizante de ganancias en cualquier canal agrupado, se mueve **todos los canales del grupo** por el mismo incremento. La compensación relativa entre los canales se conserva.
- Silenciar cualquier canal agrupado silencia todos los canales del grupo.

**Anulación de canal individual — Modificador de alta/opción:**

Mantener presionado **Alt** (Windows) u **Opción** (macOS) mientras se ajusta la ganancia o silencio de un canal sólo en ese canal, pasando por alto el grupo:

| Accin                                                         | Con Alt/Opción                                |
| ------------------------------------------------------------- | --------------------------------------------- |
| Arrastre el ratón al deslizador de ganancia                   | Ajusta solo el canal seleccionado             |
| Teclado (ganancia deslizante seleccionado) | Ajusta solo el canal seleccionado             |
| Haga clic en obtener el valor del campo debajo del deslizador | Ajusta solo el canal seleccionado             |
| Click Mute                                                    | Solo mutes/dessilencian el canal seleccionado |

### 8.2.4 Comportamiento de EuCon

Al controlar los canales agrupados a través de una superficie de Avid EuControl:

- Ganar deslizadores y nudos en las superficies de EuCon afectan al grupo (todos los canales se mueven juntos).
- El silencio de una superficie de EuCon afecta a todos los canales agrupados simultáneamente.

> **NOTA:** La anulación de Alt/Opción por canal sólo está disponible a través del mouse/teclado en DADman — no se puede activar desde una superficie de EuCon.

---

## 8.3 Opciones de Clonación entre Unidades _(v5.6.9 y posterior)_

### 8.3.1 Concepto

La función **Clone** copia todas las configuraciones de una unidad de hardware a otra dentro de la misma familia de hardware. Es útil para duplicar una configuración conocida a una segunda unidad idéntica, restaurar ajustes a una unidad de reemplazo, o inicializar una nueva unidad de un perfil existente.

La clonación sólo está permitida entre unidades dentro del mismo grupo de familia:

| Familia   | Miembros                                                |
| --------- | ------------------------------------------------------- |
| Familia 1 | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s |
| Familia 2 | MTRX II · AX64 · Centro AX · Núcleo 256                 |
| Familia 3 | Estudio MTRX                                            |

### 8.3.2 Clonar Procedimiento

**Para clonar de una unidad conectada a otra:**

1. En la lista de dispositivos, haz clic derecho en la unidad **objetivo** (el que recibe la configuración).
2. Seleccione **Clonar de…** y elija la unidad de origen de la lista.
3. Confirmar la operación de clonado.

**Para clonar desde un archivo de configuración guardado a una unidad conectada:**

1. Abre el archivo de configuración `.dms` a través de **Archivo > Abrir…**.
2. Haga clic derecho en la unidad de destino de la Lista de Dispositivos.
3. Seleccione **Clonar del archivo** y elija la unidad de origen relevante dentro del archivo de configuración cargado.

> **PRECAUCIÓN:** La clonación sobrescribe todas las configuraciones de la unidad de destino. Asegúrese de que la configuración de la unidad de destino ha sido guardada en un archivo `.dms` antes de continuar si la recuperación puede ser necesaria.

### 8.3.3 Comportamiento de Unidad No-Identical

Para obtener mejores resultados, las unidades de origen y destino deben estar configuradas de forma idéntica — los mismos tipos de tarjeta instalados en las mismas posiciones de la ranura. Cuando las configuraciones son diferentes:

- Los ajustes de las tarjetas presentes en el origen pero ausentes en la **misma posición en la ranura** del objetivo están establecidos en los valores predeterminados de fábrica del objetivo.
- Los ajustes de las tarjetas presentes en el objetivo pero ausentes en la fuente no se modifican.

---

## 8.4 Control|Pack — Ajustes de ruta _(compilación 8 v5.8.0 y posterior)_

### 8.4.1 Concepto

Control\|Pack proporciona un sistema predefinido de enrutamiento para productos Thunder\|Core (AX64, AX Center, Core 256). Se pueden definir preajustes de ruta hasta 32 por unidad, cada una con hasta cuatro capas de entrada independientes – llamadas **buckets** – que cambian hasta 256 fuentes a 256 destinos simultáneamente dentro de una única muestra de audio.

Cambiar entre cubos puede ser:

- **Manual**: activado por el operador desde la tira Control\|Pack en DADman
- **Automatizado**: activado por detectores de señales incorporados que monitorean los canales de entrada para detectar la presencia de la señal, integridad del tono del piloto AE6 o conectividad del nivel del puerto

Control\|Los preajustes de paquete se almacenan en la unidad de tren\|Unidad de hardware central. Pueden ser controlados desde múltiples instancias de DADman simultáneamente, y desde un panel de hardware de Control\|Pack sin conexión de DADman.

**Firmware requerido:** Thunder\|Firmware principal v1.1.0.3 o posterior.

### Especificaciones de clave 8.4.2

| Parámetro                                                                 | Valor                                              |
| ------------------------------------------------------------------------- | -------------------------------------------------- |
| Máximo de presets por unidad                                              | 32                                                 |
| Máximo de cubos (capas de entrada) por preselección    | 4                                                  |
| Máximo de fuentes por cubo                                                | 256                                                |
| Máximas salidas por preselección                                          | 256                                                |
| Tiempo de cambio (interruptor de cubeta, automatizado) | Dentro de 1 muestra de audio                       |
| Tiempo de cambio (manual, selección directa)           | 0 muestras de audio                                |
| Detección de señales / tiempo de respuesta de disparo                     | < 1 ms                    |
| Generadores de señales (incorporados)                  | Tono piloto de onda Sine · Tono piloto digital AE6 |

### 8.4.3 Generadores de Señales

Cada unidad de tronco\|El núcleo incluye dos generadores de señales integrados:

| Generador                      | Tipo                                                                  | Parámetros                                                                         |
| ------------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Tono piloto de onda sinuos** | Ola de arena continua                                                 | Nivel: −60 a 0 dBFS; Frecuencia: de 20 Hz a 20 kHz |
| **Tono piloto digital AE6**    | Señal repetitiva binaria (valor hexadecimal 0xAE6) | Patrón fijo                                                                        |

Los generadores de señales pueden ser enrutados a cualquier salida de la unidad a través de la matriz de enrutamiento. La señal AE6 está diseñada para comprobar la integridad — se puede detectar en el extremo receptor para confirmar que la cadena de señales no está procesada y no está modificada. Si la señal AE6 pasa por un convertidor de tasa de muestra, etapa analógica, o cualquier cambio de nivel, su patrón se altera y no se puede reconocer.

### 8.4.4 Tipos de disparo

Cada cubo se puede asignar hasta cuatro fuentes de activación. Hay tres tipos de disparo disponibles:

| Tipo de disparador | Detectar                                                                  | Notas                                                                                                          |
| ------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Nivel de señal** | Presencia de señal de audio por encima de -40 dBFS en una ventana de 1 ms | Funciona con cualquier entrada analógica o digital                                                             |
| **AE6**            | Integridad del tono piloto digital AE6 en una entrada digital             | La señal debe estar sin procesar (sin SRC, sin cambios de nivel) para una detección exitosa |
| **Puerto**         | Estado de conectividad al puerto físico                                   | Puertos Thunderbolt 3, MADI, DADLink, ADAT o AES3                                                              |

### 8.4.5 Configuring Routing Presets

Abra el editor de configuración de ruta a través de **Ajustes > Preajustes de enrutamiento**.

La configuración sigue cuatro pasos:

**Paso 1: Selecciona la unidad de destino**

En el menú desplegable en la parte superior de la ventana de configuración de ruta, seleccione la unidad de tren\|núcleo para configurar. Si la unidad no está conectada, haga clic en **Abrir lista de dispositivos** para conectarla primero.

**Paso 2: Agrega un ajuste de ruta**

Haga clic derecho en la lista preestablecida y seleccione **Agregar predeterminado**. Introduzca un nombre y el número de canales de salida para el preset. Active el ajuste predefinido marcando su casilla de verificación. Los preajustes se pueden reordenar dentro de la lista _(v5.8.1 y posterior)_.

**Paso 3: Configurar cubos y disparadores**

Por cada cubo en el predeterminado:

1. Haga clic derecho en el campo **Nombre de la Fuente** e introduzca un nombre para el cubo (por ejemplo, `Pro Tools`, `Backup DAW`, `Test Generator`).
2. Estableció la **Prioridad del Trigger** para el cubo. Los cubos con un número de prioridad más alto son preferibles cuando sus detectores informan de una señal válida. Si todos los cubos tienen la misma prioridad, el cambio es manual.
3. Selecciona hasta cuatro **Fuentes de Trigger** de las entradas disponibles. Combina tipos de disparo (Nivel de señal + AE6) para una detección robusta de tolerancia contra fallos.

**Lógica de cambio automático:**

- El cubo con la **máxima prioridad** donde todos los detectores asignados reportan que OK se enrutan a las salidas.
- Si los detectores del cubo activo informan de un error, el sistema cambia al siguiente cubo de mayor prioridad con todos los detectores OK.
- La anulación manual está siempre disponible — haga doble clic en un botón de cubo para forzarlo independientemente del estado de detección.

**Paso 4: Asignar canales de entrada y salida**

Haga clic derecho en la columna del canal de salida para seleccionar los canales de salida de las salidas disponibles en la unidad. Haga clic derecho en cada columna de entrada (cubo) para asignar canales de origen. Una vez que las salidas están asignadas a un preset, están **bloqueadas** — no se pueden conectar a través de la matriz de enrutamiento de DADman o monitorear el perfil mientras el preset está activo.

_[Marcador de posición: captura de pantalla — Editor de configuración de ruta que muestra un ajuste de dos cubos con fuentes de activación configuradas]_

### 8.4.6 Operación

Una vez configurado, el Control\|Pack strip aparece debajo de las clips principales de canal DADman. Cada preset se muestra con botones de cubeta, contadores PPM de origen, contadores PPM de salida y indicadores de estado de disparo.

**Estado del color del botón del cubo:**

| Color     | Comenzando                                                                             |
| --------- | -------------------------------------------------------------------------------------- |
| **Azul**  | Este cubo está activo — modo manual (sin interruptor automático)    |
| **Verde** | Este cubo está activo — modo automático, armado y listo para cambiar                   |
| **Rojo**  | Error de detección de señales en este cubo — pérdida de señal o fallo de AE6 detectado |

**Cambiando entre modo manual y automatizado:**

- **Haga doble clic en un botón verde** → cambia a manual (botón se vuelve azul)
- **Haga doble clic en un botón azul** → Re-brazos automatización (botón se vuelve verde)

**Indicadores de estado del activador** por debajo de cada botón del cubo muestran el estado de paso/fallo en tiempo real para cada detector asignado (0–4 indicadores por cubo).

_[Marcador de posición: captura de pantalla — Control\|Clip de paquete mostrando dos presets, uno automatizado (verde), un manual (azul)]_

> **NOTA:** En eventos en vivo o en transmisión, automatización de brazos (**verde**) durante el control de la línea cuando la señal se confirma en todas las entradas. Si una entrada falla durante el espectáculo, el preset cambia automáticamente sin intervención del operador. Haga doble clic en el cubo preferido en cualquier momento lo fuerza independientemente del estado de automatización.

---

## 8,5 EuCon Integración

### 8.5.1 Habilitando EuCon

DADman se comunica con Avid EuControl a través del protocolo EuCon, permitiendo superficies de control Avid (S1, S6, S6L, MTRX Studio panel frontal) y la aplicación Avid Control para controlar las funciones de monitoreo de DADman.

**Para habilitar EuCon:**

1. En DADman, ve a **Ajustes > Activar EuCon**.
2. Asegúrate de que EuControl se está ejecutando en el mismo ordenador y está conectado a la superficie de control o a la aplicación.

### 8.5.2 Enlazar Seguimiento de DADman a EuControl

Para que aparezcan controles de monitoreo en una superficie de control Avid o en la aplicación Avid Control, DADman debe estar vinculado a EuControl:

1. Traiga a DADman al primer plano (haga clic en la ventana de DADman para convertirla en la aplicación activa).
2. En EuControl, abre la pestaña **Asignar**.
3. Activa la casilla de verificación de tareas de monitoreo para DADman (aparece porque DADman está en primer plano).

> **TIP:** Si la página de monitoreo en Avid Control muestra sólo una fader maestra y ningún otro control, el paso de unión no se ha completado. Traiga a DADman al primer plano y repita el procedimiento de Asignación de pestañas.

### 8.5.3 Bloquear Monitoreo a DADman

Una vez que la supervisión está vinculada a DADman, puede bloquear la sección de monitoreo para que permanezca bajo el control de DADman independientemente de qué aplicación está actualmente en primer plano:

1. En la pestaña **Asignar** de EuControl, con la sección de monitoreo enlazada a DADman, haz clic en **Bloquear** (o el equivalente para tu modelo de superficie).
2. Cambiar a su aplicación DAW. La sección de monitoreo en la superficie sigue controlando DADman.

Esto permite a los controles de transporte y canal seguir el DAW mientras que la sección de monitoreo permanece permanentemente asignada a DADman — el flujo de trabajo estándar para entornos de postproducción y seguimiento de música.

### 8.5.4 Grupos de EuCon y Micrófono

Cuando los grupos de ganancia de micrófono están configurados:

- Gana deslizadores y gana nudos en las superficies de EuCon mover todos los canales agrupados juntos.
- Silenciar desde una superficie de EuCon silencia todos los canales agrupados.
- La anulación por canal a través de Alt/Opción no está disponible en superficies EuCon.

### 8.5.5 Ampliando el botón Talkback en una pantalla táctil

Si el botón de talkback de la aplicación Avid Control es demasiado pequeño, utilice la página **Claves suaves** y asigne múltiples botones de tecla suave a la función de conversación. Múltiples botones adyacentes dan un objetivo táctil efectivo más grande.

---

## 8.6 DADLink _(v5.6.9 y posteriores)_

### 8.6.1 Concepto

DADLink es un formato de interconexión autónoma de alto número de canales desarrollado por DAD. Utiliza la ranura de módulo MADI en unidades compatibles con módulos SFP ópticos para transportar audio entre unidades a muy baja latencia.

DADLink está diseñado para conectar varias unidades DAD directamente — por ejemplo, conectando un Centro AX a un AX64 para expandir el número total de canales, o conectando unidades en diferentes ubicaciones físicas dentro de una instalación.

**Hardware compatible:** AX64 · AX Center · Core 256 · AX32 · DX32R · Penta 720 · Penta 721s _(de firmware v2.4.1.2 para Familia 1)_

### Capacidad de canal 8.6.2

| Tasa de ejemplo                 | Canales por conexión DADLink |
| ------------------------------- | ---------------------------- |
| 44.1 / 48 kHz   | Hasta 128 canales            |
| 88.2 / 96 kHz   | Hasta 64 canales             |
| 176.4 / 192 kHz | Hasta 32 canales             |

### 8.6.3 Latencia

La latencia de DADLink es aproximadamente **1 microsegundo**: efectivamente cero desde una perspectiva de alineación de audio. Todas las entradas y salidas de las unidades conectadas a través de DADLink se alinean a condición de que el **retraso de Digi** se ajuste al mismo valor en cada unidad.

### 8.6.4 Requisitos de sincronización

> **NOTA:** Para un alineamiento de fases adecuado de entradas y salidas a través de unidades conectadas a DADLink, usa **DADLink** o **Word Clock** como fuente de sincronización entre la unidad maestra del reloj y todas las unidades seguidoras. Todas las unidades de una red DADLink deben compartir una fuente de reloj común.

### 8.6.5 Instalación de hardware

DADLink requiere el **módulo MADI** instalado en la mini ranura MADI de cada unidad conectada, equipado con módulos de transmisión SFP ópticos. Conecta unidades con cables de fibra óptica entre los transceptores SFP. Consulte la Guía de instalación del Módulo MADI y DADLink (disponible desde [digitalaudiosupport.com](https://www.digitalaudiosupport.com)) para los tipos específicos de módulos SFP y el procedimiento de instalación.

Una vez instalado, las entradas y salidas de DADLink aparecen en la matriz de enrutamiento de DADman junto a MADI, Dante y otras entradas de formato. El formato es visible en la pestaña Conf donde DADLink aparece como una opción de interfaz.

---

## 8.7 Ejecutando DADman en la barra de menú o bandeja del sistema _(v5.7.0 y posteriores)_

### 8,7,1 macOS — Modos de barra de menú

DADman puede configurarse para minimizar su presencia en el escritorio de macOS, haciéndolo adecuado para instalaciones permanentes donde debe funcionar en segundo plano. Tres modos están disponibles en **DADman > Preferencias**:

| Modo                     | Comportamiento                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \*\*Solo Dock \*\*       | DADman se comporta como una aplicación macOS normal — visible en el Dock y la barra de tareas. Predeterminado.                                                                                                                     |
| **Barra de Menú y Dock** | DADman también muestra un icono en la barra de menú del sistema macOS para un acceso rápido.                                                                                                                                                       |
| **Sólo barra de menú**   | DADman se esconde del Dock cuando su ventana principal está cerrada. Sólo el icono de la barra de menú del sistema es visible. Haga clic en él para mostrar el menú de DADman (Muestra, Salir). |

**Para mostrar la ventana principal del modo de barra de menú:**

- Haga clic en el icono de la barra de menú de DADman → **Mostrar**
- Haga doble clic en un archivo `.dms` o `.dmprof` en Finder
- Presiona **mañana1**
- Lanzar DADman de nuevo desde aplicaciones

> **NOTA:** En modo de barra de menú, si DADman todavía aparece en el Dock después de cambiar la configuración, Haga clic derecho en su icono del Dock → **Opciones > Mantener en el Dock** y deshabilitarlo.

> **NOTA:** En modo de barra de menú con DADman oculto, DADman no guarda archivos cuando el usuario cierra la sesión o el sistema se apaga a menos que **Guardar siempre archivo** esté habilitado en Preferencias.

### Windows 8.7.2 — Modos de bandeja del sistema

En Windows, configure el comportamiento de la bandeja en **Ajustes > Opciones**:

| Modo                                                      | Comportamiento                                                                                                                                                                                        |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Solo barra de tareas (por defecto)** | DADman se comporta como una aplicación Windows normal.                                                                                                                                |
| **Taskbar y bandeja del sistema**                         | DADman también muestra un icono de bandeja para un acceso rápido.                                                                                                                     |
| **Solo bandeja del sistema**                              | DADman sólo se lanza a la bandeja. Haga clic izquierdo en el icono de la bandeja para mostrar la ventana principal; haga clic derecho para Mostrar / Ocultar / Salir. |

### 8.7.3 Inicio automático en Login (macOS)

Para que DADman inicie automáticamente al iniciar sesión y cargar un archivo de configuración:

**Método 1 — elementos de acceso a macOS:**

1. Abre **Configuración del sistema > General > Ítems de inicio de sesión**.
2. Haz clic en **+** y añade **DADman.app** de tu carpeta de aplicaciones.
3. Activa **Abrir el último archivo al inicio** en Preferencias para que DADman cargue automáticamente el archivo `.dms`.

**Método 2 — lanzador de retraso de AppleScript** _(para Sonoma y más tarde, donde se restringen los elementos de inicio de sesión):_

Dado que macOS Sonoma eliminó la capacidad de ocultar elementos de inicio de sesión, utilice un script de retraso para iniciar DADman después de iniciar sesión:

```applescript
retraso 5
decir aplicación "Finder"
  activar
  archivo de aplicación abierto "DADman. pp" de la carpeta "Aplicaciones" del disco de inicio
end tell
delay 8
tell application "System Events"
  set visible del proceso "DADman" a false
end tell
```

Para usar este script:

1. Abrir **Editor de Script** (Aplicaciones > Utilidades > Editor de Script).
2. Pegue el script, ajustando los valores de retraso según sea necesario.
3. Exportar como **aplicación** (**Archivo > Exportar** → Formato: aplicación).
4. Añade la aplicación resultante a **Configuración del sistema > General > Items de inicio de sesión**.

El script lanza DADman después de un retraso de 5 segundos y lo oculta después de otros 8 segundos. Ajuste los retrasos para adaptarse al tiempo de arranque de su hardware.

---

## 8.8 Gestión de Archivos y Acceso a Línea de Comandos _(v5.7.0 y posteriores)_

### 8.8.1 Apertura de archivos desde Finder o Explorador de Windows

Desde los archivos DADman v5.7.0, `.dms` y `.dmprof` pueden abrirse directamente haciendo doble clic en Finder (macOS) o Windows Explorer. DADman abre, carga el archivo y aplica la configuración a unidades conectadas.

Si un archivo `.dms` y un `.dmprof` son seleccionados y abiertos simultáneamente, DADman carga el primer `. ms` encontrado y el primer archivo `.dmprof` encontrado, ignorando archivos adicionales.

### 8.8.2 Apertura del archivo de línea de comandos

Abrir DADman con archivos específicos desde un terminal o script:

**macOS:**

```bash
abrir -a DADman /path/to/settings.dms /path/to/profile.dmprof
```

El `-a DADman` es opcional pero asegura que DADman sea usado incluso si otras aplicaciones están registradas para archivos `.dms`.

**Ventanas:**

```cmd
DADman.exe C:\path\to\settings.dms C:\path\to\profile.dmprof
```

Esto permite la integración con sistemas de control externo, mostrar lanzadores de archivos o scripts de inicio de sesión que necesitan cargar una configuración específica de DADman en el arranque.

### 8.8.3 Abriendo múltiples instancias de DADman (Windows)

Por defecto, abrir DADman cuando ya se está ejecutando trae la instancia existente al primer plano en lugar de lanzar una segunda copia. Para lanzar explícitamente una segunda instancia independiente:

```cmd
DADman.exe -m
```

---

## 8.9 Referencia de preferencias de DADman

Preferencias de acceso a través de **DADman > Preferencias** (macOS) o **Ajustes > Opciones** (Windows).

| Preferencia                                            | Descripción                                                                                                                                                       | Notas                                                                                                                                                                                     |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Abrir el último archivo al inicio**                  | Carga automáticamente el último archivo de configuración `.dms` usado y lo aplica a unidades conectadas al iniciar                                                | Recomendado para instalaciones permanentes; use con precaución en entornos multioperador                                                                                                  |
| **Diseño GUI**                                         | Selecciona uno de los tres esquemas de color para la interfaz DADman                                                                                              | Almacenado localmente; no afecta al hardware                                                                                                                                              |
| **Tamaño máximo de la vista de la matriza**            | Establece el tamaño máximo de la vista de detalle de la matriz de enrutamiento: 32×32 (por defecto), 64×64, 128×128, o 256×256 | Tamaños mayores permiten ver más de la matriz de enrutamiento a la vez; pueden afectar el rendimiento en sistemas antiguos _(v5.7.0+)_ |
| **Show Mode** (macOS)               | Dock Sólo · Barra de Menú y Dock · Barra de Menú Sólo                                                                                                             | Vea [Sección 8.7.1]                                                                                   |
| **Mostrar en** (Windows)            | Solo barra de tareas · Barra de tareas y bandeja de sistema · Solo bandeja de sistema                                                                             | Ver [Sección 8.7.2]                                                                                   |
| **Guardar siempre archivo** (macOS) | Guarda automáticamente el archivo `.dms` actual al cerrar sesión, reiniciar o apagar                                                                              | Requerido para una operación fiable en modo de barra de menú                                                                                                                              |

---

## 8.10 Tarjeta virtual Dante como fuente de seguimiento

La **tarjeta virtual de sonido Dante (DVS)** de la barra de herramientas permite que un Mac o PC aparezca como un dispositivo de audio Dante en la red, enrutar la salida de audio del sistema de la computadora en la red Dante y en cualquier unidad de hardware controlada por DADman. Esto es útil para monitorear la reproducción DAW a través de un DAW que soporta Dante, o para usar audio del sistema macOS/Windows (YouTube, Spotify, con pistas de referencia) a través del monitor principal sin E/S adicionales.

### 8.10.1 Prerrequisitos

- Tarjeta virtual Dante instalada y licenciada en el equipo anfitrión
- Controlador Dante instalado (libre de --)
- Una unidad controlada por DADman con entrada de Dante (AX Center, Core 256, AX64, AX32 con tarjeta de expansión Dante, etc.)

### 8.10.2 Procedimiento de Configuración

**Paso 1 — Iniciar y configurar DVS**

1. Abre la aplicación Dante Virtual Soundcard.
2. Estableció el número de canales según sea necesario (por ejemplo, **8×8** para una fuente 7.1 o 7.1.2).
3. Pulsa **Inicio** para activar el servicio DVS. El ordenador ahora aparece como un dispositivo Dante en la red.

**Paso 2 — Parchear DVS a la unidad de hardware en Dante Controller**

1. Abrir **Controlador Dante**.
2. En la matriz **Routing**, localiza el transmisor DVS (aparecerá bajo el nombre del host de la computadora).
3. Enrutar las salidas DVS a los canales de entrada de Dante deseados en la unidad de hardware de DADman (e. ., salidas DVS 1–8 → entradas MTRX Dante 1–8, o entradas Dante Centro AX 1–8).

**Paso 3 — Establece la salida de audio del sistema a DVS (macOS)**

Mantenga presionada **Opción** y haga clic en el icono de volumen de macOS en la barra de menú, luego seleccione la tarjeta de sonido virtual de Dante como el dispositivo de salida del sistema. Alternativamente, establézcalo en **Configuración del sistema > Sonido > Salida**.

**Paso 4 — Agrega una fuente DVS en el perfil de DADman Monitor**

1. En DADman, ve a **Ajustes > Perfil de Seguimiento**.
2. En la pestaña **Fuentes**, haga clic derecho y seleccione **Añadir nueva fuente**.
3. Nombra la fuente (por ejemplo, `DVS`, `System Audio`, `Mac Output`).
4. Haga clic con el botón derecho del ratón en la columna **Mode** y seleccione **Establecer formato de grupo** — elija el número de canales para que coincida con su configuración DVS (Stereo, 5.1, 7.1, etc.).
5. Para cada canal, haga clic derecho en la asignación del canal y seleccione el canal de entrada Dante correspondiente que recibe la señal DVS (como parcheado en el Controlador de Dante).

**Paso 5 — Verificar**

Regresa a la pestaña **Mon** de DADman. La fuente DVS ahora debería aparecer como una fuente de monitor seleccionable. Reproducir audio en el ordenador — debería ver la medición en la fila de origen DVS.

> **NOTA:** La fuente DVS aparecerá en la lista de fuentes del monitor sólo mientras DADman tenga un perfil de Monitor activo cargado con la fuente DVS configurada. Si se carga un perfil diferente, la fuente DVS no será accesible hasta que se recargue el perfil correcto.

---

## 8.11 Configuración de nivel de salida analógica

Los controles de nivel de salida analógica en la pestaña **DA** establecían la alineación de la señal entre el dominio digital de la unidad de hardware (en dBFS) y su nivel de salida analógica (en dBu). Este es un ajuste de calibración — no es un control a nivel operativo.

### 8.11.1 Concepto

El deslizador de nivel de salida DA especifica qué nivel analógico corresponde a 0 dBFS. No controla el nivel de monitoreo; el volumen de monitoreo está controlado por el fader en la pestaña **Mon**. El ajuste del nivel de salida DA existe únicamente para alinear la salida analógica del hardware con los requerimientos de la sala de cabeceras del equipo de aguas abajo.

**Ejemplo:** Si el nivel de salida DA se ajusta a +18 dBu, una señal digital de 0 dBFS produce +18 dBu en la salida analógica. Si el equipo de aguas abajo (amplificador de alimentación o monitor activo) clips a +18 dBu, una señal a 0 dBFS recortará el amplificador — por lo que el nivel DA debe ajustarse para que coincida con la especificación de entrada máxima del equipo de aguas abajo.

> **CAUCIÓN:** Establecer un nivel alto de producción de DA no siempre es ventajoso. Ajustando +24 dBu cuando el equipo de la corriente baja a +18 dBu causará la entrada de 6 dB antes de la escala digital completa. Ajuste siempre el nivel de salida DA a la especificación de entrada máxima de amplificadores o monitores conectados.

### Rango de Nivel de Salida 8.11.2

Las salidas de línea DA (en conectores DB25) ofrecen dos rangos de nivel máximo seleccionables:

| Range                  | Transparencia deslizante            |
| ---------------------- | ----------------------------------- |
| - 66 dBu a **+18 dBu** | Por defecto                         |
|  60 dBu a **+24 dBu** | Activado por el botón **6 dB Gain** |

Activa el botón **6 dB Gain** de un canal para extender su rango de salida a +24 dBu. Esto es apropiado cuando se conecta a un equipo profesional con entradas máximas de +24 dBu.

### 8.11.3 Configuración por Canal

Diferentes canales de salida pueden establecerse a diferentes niveles analógicos, permitiendo conexiones de equipos mixtos desde una sola unidad. Por ejemplo, los monitores de campo cercano alimentados desde un amplificador de potencia estéreo a +18 dBu pueden ajustarse a +18 dBu, mientras los altavoces envolvente alimentados de amplificadores con cabecera +24 dBu pueden ajustarse a +24 dBu en la misma unidad.

_[Marcador de posición: captura de pantalla — pestaña DA que muestra deslizadores de nivel de salida por canal con diferentes valores de calificación]_

---

## 8.12 SPQ Speaker Card

La **tarjeta SPQ (Speaker Processing)** es una tarjeta de expansión DSP opcional para unidades de hardware DAD compatibles (AX32 y MTRX). Proporciona EQ paramétrica por canal en las salidas del monitor analógico, permitiendo el altavoz del hardware y la corrección de la habitación sin un procesador externo en la ruta de la señal.

> **NOTA:** La tarjeta SPQ es una opción de hardware. Debe estar instalado físicamente en la unidad. Si no hay ninguna tarjeta SPQ presente, la pestaña SPQ no aparece en DADman.

### 8.12.1 SPQ Workflow Overview

El flujo de trabajo típico de SPQ es:

1. **Medir la habitación** utilizando el software de medición acústica (por ejemplo, el asistente gratuito **Room EQ**, disponible en roomeqwizard.com). Utilice un micrófono de medición calificado en la posición de escucha.
2. **Genera filtros de corrección EQ** a partir de los resultados de medición dentro del software de medición.
3. **Importa los filtros** en DADman a través de la pestaña SPQ. DADman acepta los datos de EQ en un formato compatible de exportación de Room EQ Wizard.
4. **Aplicar la corrección** — la tarjeta SPQ procesa las salidas analógicas en tiempo real utilizando los coeficientes de filtro importados.

### 8.12.2 SPQ Tab en DADman

La pestaña SPQ aparece en DADman cuando se detecta una tarjeta SPQ compatible en la unidad conectada. Desde la pestaña SPQ puede:

- Ver y editar curvas EQ por salida
- Importar datos de medición del asistente EQ de la sala
- Activar o omitir el procesamiento de SPQ por canal de salida
- Guardar configuraciones SPQ como parte del archivo de configuración de unidad (`.dms`)

> **NOTA:** Los ajustes de SPQ se almacenan en la unidad de hardware, no en el perfil del monitor. Persisten en todas las sesiones de DADman sin necesidad de que se cargue un perfil.

_[Marcador de posición: referencia completa del parámetro SPQ y procedimiento de importación del Asistente EQ paso a paso, pendiente de documentación de ingeniería de DAD]_

---

## 8.13 Atmos Dolby monitoreando flujo de trabajo

El sistema de perfil de monitor de DADman soporta la monitorización de Dolby Atmos desde configuraciones de una sola unidad hasta configuraciones de 64 canales. Lo siguiente es una visión conceptual de una típica ruta de señalización de Dolby Atmos usando una unidad controlada por DADman.

### 8.13.1 Signal Flow Overview

Una cadena de monitoreo típico de Dolby Atmos:

```
Herramientas Pro (Atmos sesión)
      (DADLink / MADI / Dante)
Renderizador de Dolby (e. ., Dolby Atmos Mastering Suite / Renderer)
      (fuente de altavoces — hasta 9. .6 o más adelante)
Unidad de hardware de DADman (salida DA)
      (análogo)
amplificadores y altavoces del altavoz
```

DADman maneja la capa de control final del monitor - selección de fuente, nivel, plegados y atenuación - en los canales de salida del altavoz del renderizador.

### 8.13.2 Crear un Formato de Grupo Personalizado

Los formatos estándar de grupo DADman cubren hasta 7.1.4. Para configuraciones de Atmos más grandes (9.1.6, 7.1.6, etc.), debe definirse un **formato de grupo personalizado**:

1. En **Ajustes > Perfil de seguimiento**, ve a la pestaña **Salidas**.
2. Haga clic derecho y seleccione **Añadir formato de grupo personalizado**.
3. Defina el número de canales y las etiquetas de disposición del altavoz (por ejemplo, L, C, R, Ls, Rs, Lss, Rss, Lts, Rts…).
4. Guarde el formato, luego asignelo al conjunto de salida relevante.

### 8.13.3 Fuentes y Devuelve desde el Renderer de Dolby

Agrega cada conjunto de salidas de renderizador como una fuente separada en el perfil del monitor:

| Fuente                      | Canales                                                                       | Propósito                                                   |
| --------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Atmos llenos                | 9.1.6 (o cama configurada) | Fuente completa del altavoz Atmos desde el renderizador     |
| Stereo Downmix              | 2.0                                                           | Retorno de mix estéreo de ITU del procesador                |
| Binaural                    | 2.0                                                           | Retorno binaural del auricular del procesador               |
| 5.1 Downmix | 5.1                                                           | Compatibilidad 5.1 del renderizador doblada |

### 8.13.4 Fold-Downs for Atmos

Utilice la pestaña **Bajas de doble** para añadir opciones de monitorización de compatibilidad que no requieren cambiar fuentes en el renderizador — por ejemplo, derribos que aplican una suma estéreo de los canales de altavoces de Atmos directamente en DADman para una comprobación rápida de mono o estrecho estéreo. Estos suplementos, en lugar de reemplazar, las propias salidas de la mezcla de renderizado.

> **NOTA:** Para mezclas bajas de especificaciones Dolby-, utiliza siempre las salidas de Dolby Renderer en lugar de las de DADman. Las plegables DADman no son procesos Dolby-certificados.

_[Marcador de posición: captura de pantalla — perfil de monitor 9.1.6 con fuentes de Atmos configuradas]_

---

## 8,14 LTC sobre Dante

Unidades controladas por DADman con una interfaz Dante pueden llevar **LTC (Linear Timecode)** dentro de un canal de audio Dante. Esto permite que una fuente de código de tiempo se distribuya a través de la red Dante a cualquier unidad de la misma red sin cables de código de tiempo dedicado.

### 8.14.1 Concepto

LTC es una señal de audio-frecuencia que codifica el código de tiempo SMPTE en la forma de sonido. Porque ocupa el mismo rango de frecuencia que el audio, se puede enrutar a través de cualquier canal Dante como si fuera una señal de audio mono — no requiere ninguna configuración especial de Dante.

### 8.14.2 Configuración

**Para enviar LTC sobre Dante:**

1. Conectar la fuente de LTC (generador de código de tiempo de hardware, salida DAW, etc.) a una entrada analógica o digital disponible en la unidad de hardware DADman.
2. En la pestaña **Con** de DADman, enruta la entrada LTC a un canal de salida de Dante.
3. En **Dante Controller**, enrutar ese canal Dante a cualquier unidad receptora de la red.

**Para recibir LTC en una unidad conectada:**

1. En Dante Controller, enrutar el canal LTC Dante a una entrada adecuada en la unidad receptora.
2. Conecte esa entrada al código de tiempo de cualquier dispositivo que acepte LTC.

> **NOTA:** LTC es una forma de onda analógica. Si pasa a través de un convertidor de velocidad de muestra, la señal de código de tiempo puede estar corrupta. Asegúrese de que todas las unidades de la red Dante comparten la misma fuente de reloj (por ejemplo, Word Clock, PTP/IEEE 1588) para evitar la inserción de SRC en el canal de código de tiempo. Consulte [Sección 8.6.4 — Requerimiento de sincronización de DADLink].

---

## 8.15 MIDI Control and Pro Tools PRE Emulation

DADman puede conectarse a través de MIDI a Pro Tools, permitiendo a Pro Tools tratar los controles de ganancia de preámbulos en una unidad conectada a DADman como si fueran controles de preámbulo de hardware **Avid PRE**. Esto permite que la funcionalidad de control de preámbulos remotos de Pro Tools ajuste la ganancia de entrada en el hardware de DADman directamente desde la configuración de E/S de Pro Tools o una superficie de control compatible — sin cambiar de enfoque a DADman.

### 8.15.1 Resumen

Cuando la emulación Pro Tools PRE está activa:

- Pro Tools envía MIDI obtener mensajes de cambio a DADman
- DADman las traduce en ajustes de ganancia en las entradas analógicas de la unidad de hardware conectada
- La pestaña DADman AD muestra los valores de ganancia actuales; los cambios de Pro Tools se reflejan en tiempo real

### 8.15.2 Configuración

**Para activar el control MIDI para emulación Pro Tools PRE:**

1. Asegúrese de que existe una conexión MIDI entre el ordenador DADman y el sistema Pro Tools (red MIDI, USB MIDI o IAC Driver en macOS).
2. En DADman, vaya a **Ajustes > MIDI** y configure los puertos de entrada y salida MIDI para que coincidan con la conexión.
3. En la **instalación de E/S de Pro Tools**, configure la página de preámbulo para que utilice la conexión MIDI correspondiente a DADman.

> **NOTA:** La asignación exacta de canales MIDI y el mapeo de controladores depende de la versión Pro Tools y de la configuración de la unidad MTRX/DAD. Consulte la documentación relevante de Avid MTRX o el soporte DAD para la tabla de parámetros MIDI correcta para su modelo de hardware.

_[Marcador de posición: tabla de parámetros MIDI detallada y procedimiento paso a paso — documentación de ingeniería pendiente de DAD]_

---

## Documentación pendiente

Los siguientes temas de características avanzadas requieren información adicional de la ingeniería de DAD antes de que puedan ser documentados:

| Característica                                                | Estado                                                                        | Notas                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PRO\|MON Monitor System**                                   | Marcador de posición — aún no documentado                                     | PRO\|MON es el controlador de monitor expandido utilizado con AX32, DX32R, Penta y MTRX Studio. La documentación completa requiere entrada de ingeniería DAD en el flujo de trabajo de configuración PRO\|MON, referencia de parámetros, e integración Cue\|Mix.                                                                                             |
| **Cue\|Mix Mixer cero latencia**                              | Marcador de posición — aún no documentado                                     | Listado como una característica de DADman; no hay documentación de fuente disponible. Solicitud de Ingeniería DAD.                                                                                                                                                                                                                                           |
| **Configuración de tarjeta SPQ**                              | Borrador en Sección 8.12 — tabla de parámetros pendiente      | Resumen del flujo de trabajo borrado. Procedimiento completo paso a paso con referencia por parámetro necesaria de DAD. Formato de importación del Asistente EQ de Sala debe ser confirmado con el ingeniero DAD.                                                                                                                            |
| **MIDI Control y Pro Herramientas PRE Emulación**             | Borrador en Sección 8.15 — Tabla de parámetros MIDI pendiente | Resumen de Concepto y configuración borrado. Tabla completa de mapeo de controladores/canales MIDI para cada modelo de hardware soportado necesario desde DAD.                                                                                                                                                                                               |
| **Capturas de pantalla: todas las secciones** | Pendiente                                                                     | Todos los marcadores de posición de captura de pantalla (8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13) requieren DADman en vivo v5.8.2 con AX Center conectado. |

---

_[Pendiente: Capturas de pantalla para las secciones 8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13 — todas requieren DADman en vivo v5.8.2 con AX Center o AX64]_
