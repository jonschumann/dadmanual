---
id: operación de ch7
title: "Capítulo 7 — Operación"
sidebar_label: "Ch. 7 — Operación"
sidebar_position: 9
slug: /operación
---

# Capítulo 7 — Operación

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8. build 2  
> **Hardware primario de referencia:** Centro DAD AX, núcleo 256, AX64 (generación del tronco\|núcleo)  
> **Estado del capítulo:** Borrador v0. — Capturas de pantalla pendientes; Parámetros de la pestaña Conf Dante/TB3 pendientes de ingeniería DAD; secciones PRO\|MON y SPQ pendientes  
> **Última actualización:** junio de 2026

---

## En este capítulo

| Sección              | Cubos                                                     | Cuándo consultar                                                                                     |
| -------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 7.1  | Administración de sesiones — archivos, guardar, iniciar   | Inicio y fin de sesiones                                                                             |
| 7.2  | Diseño de ventana y navegación                            | Orientación; primer uso                                                                              |
| 7.3  | Lista de dispositivos                                     | Gestión de unidades conectadas                                                                       |
| 7.4  | Entradas analógicas (pestaña AD)       | Ajuste micrófono/línea de ganancia, potencia fantasma, fase                                          |
| 7.5  | Salidas analógicas (pestaña DA)        | Establecer niveles de salida y rango                                                                 |
| 7.6  | Matrix de ruta (pestaña Con)           | Parcheando entradas a salidas                                                                        |
| 7.7  | Bloqueo y configuración (pestaña Conf) | Reloj, tasa de muestreo, E/S digital ajustes del puerto                                              |
| 7.8  | Control de seguimiento (pestaña lun)   | Mostrar perfil del monitor activo; selección de origen y salida                                      |
| 7.9  | Clip de embalaje                                          | Control predefinido de ruta _(v5.8.0 y superior)_ |
| 7.10 | Controles de ratón y teclado                              | Accesos directos de eficiencia                                                                       |

> **NOTA — Variación de hardware:** Las pestañas y parámetros mostrados en DADman reflejan las capacidades del hardware conectado. Una unidad sin entradas analógicas muestra la pestaña **AD** pero sus controles estarán ausentes o grises. Parámetros marcados _[AX32 / Familia 1]_ se aplican específicamente a las series AX32, DX32R y Penta. Parámetros no marcados se aplican a todo el hardware actual de Thunder\|Core (AX Center, Core 256, AX64) a menos que se indique lo contrario.

_[Marcador de posición: captura de pantalla anotada de ventana completa de DADman v5.8.2 con números de llamada para cada área principal]_

---

## 7,1 Session Management

### 7.1.1 Archivos de configuración y perfiles de seguimiento

DADman utiliza dos tipos de archivo distintos para guardar y restaurar el estado del sistema. Entender la diferencia entre ellos es esencial para la gestión de sesiones.

#### Archivo de configuración de DADman (.dms)

Un **archivo de configuración de DADman** (extensión de archivo `.dms`) almacena una instantánea de todas las configuraciones en todas las unidades conectadas al momento de guardar. Esto incluye:

- Ganancia analógica de entrada, potencia fantasma, pad, fase y etiquetas de canal (sección AD)
- Niveles analógicos de salida, silencios, y etiquetas de canal (sección DA)
- Estado completo de la matriz de enrutamiento (sección Con)
- Fuente del reloj, velocidad de muestreo y configuración del formato (sección Conf)
- Configuración de red y asignaciones de ID de unidad
- Configuraciones predefinidas del paquete de ruta _(v5.8.0 y superior)_

Los archivos de configuración se guardan a través de **Archivo > Guardar** o **Archivo > Guardar como** y se almacenan en la computadora. No afectan a la unidad directamente hasta que se carga — en cuyo punto DADman aplica la configuración almacenada a la(s) unidad(es) conectadas a través de la red.

> **PRECAUCIÓN:** Las actualizaciones de firmware restablecen todos los ajustes almacenados en la unidad a los valores predeterminados de fábrica. Guarda siempre un archivo `.dms` antes de realizar una actualización de firmware. Consulte [Capítulo 10, Sección 10.1 — Actualizar Firmware].

#### Archivo de perfil de DADman Monitoring (.dmprof)

Un **Archivo de Perfil Monitor** (extensión de archivo `.dmprof`) almacena la configuración del controlador del monitor independientemente de la configuración de la unidad. Un perfil de monitor define:

- Controlar las fuentes (entradas asignadas al controlador del monitor)
- Conjuntos de salida del altavoz (mono, stereo, alrededor, inmersivo — hasta 64 canales)
- matrices plegables (ej., 5.1 a stereo, preajustes personalizados)
- Opciones de retardo por conjunto de salida
- Ruta y nivel de Talkback
- Ajustes de nivel de referencia

Los perfiles de seguimiento se administran a través de **Ajustes > Perfil de Seguimiento** y se guardan como archivos separados del archivo de configuración `.dms`. Esta separación permite utilizar la misma configuración física de enrutamiento y ganancia con diferentes configuraciones de monitoreo.

Un perfil predeterminado de monitor estéreo está disponible para su descarga desde el portal de soporte de DAD.

#### Relación entre los dos tipos de archivo

|                                            | Archivo de configuración (.dms)                | Perfil de seguimiento (.dmprof) |
| ------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Tiendas**                                | Todos los ajustes de hardware (ganancias, enrutamiento, reloj) | Supervisar sólo la configuración del controlador                   |
| **Alcance**                                | Todas las unidades conectadas                                                     | Un perfil de monitor a la vez                                      |
| **Cargar vía**                             | Archivo > Abrir                                                                   | Ajustes > Control de Perfil > Carga                                |
| **Auto-load on startup**                   | Opcional                                                                          | Opcional                                                           |
| **Afectado por actualización de firmware** | Sí — ajustes de restablecimiento de unidades limpian                              | No — almacenado sólo en el ordenador                               |

### 7.1.2 Startup and Auto-Load

DADman puede configurarse para **cargar automáticamente el último archivo de configuración utilizado** en el lanzamiento. Si esta opción está activada, DADman aplicará la configuración almacenada a las unidades conectadas al inicio sin necesidad de una acción manual.

> **NOTA:** La opción "Abrir el último archivo al inicio" hace que DADman escriba inmediatamente la configuración almacenada en todas las unidades conectadas al lanzar. En entornos multioperador donde diferentes usuarios pueden estar haciendo cambios en tiempo real, activando esta opción sobrescribirá cualquier cambio realizado desde el último guardado.

Para activar o desactivar la carga automática: **DADman > Preferencias** (macOS) o **Ajustes > Opciones** (Windows), luego **Abrir el último archivo al inicio**.

### 7.1.3 Referencia de Menú de Archivo

| Elemento de menú          | Accin                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nuevo**                 | Limpia la configuración actual en DADman. No cambia ninguna configuración en unidades conectadas.                                                                                                                                                                                                            |
| **Abrir…**                | Abre un archivo de configuración de DADman (`.dms`) y aplica sus ajustes almacenados a unidades conectadas.                                                                                                                                                                                               |
| **Guardar**               | Guarda el estado actual de todas las unidades conectadas en el archivo `.dms` actualmente abierto.                                                                                                                                                                                                                           |
| **Guardar como…**         | Guarda el estado actual en un nuevo archivo `.dms` en una ubicación que especificas.                                                                                                                                                                                                                                         |
| **Abrir perfil…**         | Abre un archivo MonitorProfile (`.dmprof`) desde el disco y lo carga en la pestaña Lun.                                                                                                                                                                                                                   |
| **Importar Perfil…**      | Importa un Perfil de Seguimiento de cualquier unidad conectada actualmente y realiza un mapeo de mejor calidad a la E/S de la unidad actual. Útil al migrar un perfil entre unidades con diferentes configuraciones de hardware. _(v5.6.2 y posteriores)_ |
| **Guardar perfil**        | Guarda el perfil de seguimiento actualmente cargado en su archivo `.dmprof` existente.                                                                                                                                                                                                                                       |
| **Guardar perfil como…**  | Guarda el perfil de seguimiento en un nuevo archivo `.dmprof` en una ubicación que especificas.                                                                                                                                                                                                                              |
| **Perfil de cierre**      | Descarga el Perfil de Seguidor actual. La pestaña Lon no muestra ningún control activo hasta que se carga un nuevo perfil.                                                                                                                                                                                   |
| **Abrir perfil reciente** | Abre un submenú de archivos `.dmprof` usados recientemente para un acceso rápido. _(v5.7.2 y posteriores)_                                                                                                                                                                |

> **NO:** Use **Archivo > Guardar como** al final de cada sesión, incluso si la configuración no ha cambiado. El archivo `.dms` es la única ruta de recuperación después de un restablecimiento de fábrica unitario o actualización de firmware.

---

## 7,2 Ventana Diseñada y Navegación

La ventana principal de DADman se divide en cuatro zonas horizontales, apiladas de arriba abajo.

| Zona                                                         | Contenido                                                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **Barra de menú**                                            | Menús **Archivo** y **Configuración** (y menú **DADman** en macOS)             |
| **Lista de dispositivos**                                    | Una fila por unidad conectada, cada una en un borde de color                                      |
| **Etiqueta fila**                                            | **AD · DA · Con · Conf · Mon** tab selectors                                                      |
| **Área del clip del canal**                                  | El parámetro mostrado para la pestaña seleccionada, extendiendo todas las unidades conectadas     |
| **Control\|Clip de paquete** _(opcional)_ | Aparece debajo del área de clip de canal cuando se configuran los ajustes preestablecidos de ruta |

Al hacer clic en una pestaña cambia el área completa del clip del canal para mostrar los controles de todas las unidades conectadas simultáneamente. Los controles de cada unidad permanecen agrupados dentro de su borde de color, independientemente de qué ficha esté activa.

Las subsecciones individuales dentro de la pantalla de una unidad se pueden colapsar o expandir haciendo clic en el **botón de cabecera de sección** (AD, DA, Con, Conf o Mon) _(v5. .2 y superior)_. Las herramientas aparecen al pasar el cursor sobre los botones de cabecera de la sección para describir su función. Esto es útil cuando se trabaja con un gran número de unidades para reducir el desplazamiento vertical.

### 7.2.1 Las Cinco Pestañas Principales

| Tab          | Nombre completo     | Lo que muestra                                                                                                              |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **AD**       | Análogo-a-Digital   | Medición y control para todas las entradas analógicas: ganancia, poder fantasma, silenciar, fase, etiquetas |
| **DA**       | Digital-a-analógico | Medición y control para todas las salidas analógicas: nivel, silencio, etiquetas, rango de salida           |
| **Con**      | Conexiones          | La matriz de punto cruzado de ruta — entradas como filas, salidas como columnas                                             |
| **Configón** | Configuración       | Fuente del reloj, tasa de muestreo, configuración del puerto Adapt To, Dante y E/S digital                                  |
| **Mon**      | Seguidor            | El perfil activo del monitor: fuentes, salidas, plegados, retrasos, conversaciones                          |

### 7.2.2 Vista Multi-Unit

Cuando se conectan varias unidades, DADman las muestra todas dentro de la misma ventana, separadas por sus bordes de color. Las etiquetas se aplican globalmente — al seleccionar **AD** se muestran los controles de entrada analógica para todas las unidades conectadas simultáneamente. Esto permite a un único operador administrar un complejo sistema multi-unidad desde una sola vista sin cambiar entre ventanas de aplicación separadas.

### 7.2.3 Colour Schemes

Hay tres esquemas de color disponibles a través de **Ajustes > Opciones** (Windows) o **DADman > Preferencias** (macOS). El esquema por defecto se utiliza en todos los ejemplos de este manual. La selección de esquemas es una preferencia local almacenada en el ordenador y no afecta a ninguna unidad conectada.

### Referencia del menú de ajustes 7.2.4

| Elemento de menú                                                                                   | Accin                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Opciones…** (Windows) / **DADman > Preferencias…** (macOS) | Abre la ventana de preferencias                                                                                                                                                                    |
| **Perfil de seguimiento**                                                                          | Abre el Editor de Perfil de Seguimiento — vea [Sección 7.8] y [Capítulo 8] |
| **Preajustes de ruta**                                                                             | Abre el Control\|Ventana de configuración de la ruta de paquetes _(v5.8.0 y posterior)_                                                         |
| **Activar EuCon**                                                                                  | Habilita la integración de EuControl para conectividad de superficie de control Avid                                                                                                               |
| **Lista de dispositivos**                                                                          | Abre la ventana de gestión de listas de dispositivos                                                                                                                                               |

---

## Lista de dispositivos 7.3

La Lista de Dispositivos es la tira horizontal en la parte superior de la ventana de DADman que muestra todas las unidades de hardware descubiertas. Las unidades aparecen **de izquierda a derecha en orden de identificación de unidad**.

_[Marcador de posición: captura de pantalla de lista de dispositivos anotada que muestra dos unidades con bordes coloreados, campos de identificación, campos de nombre de unidad e indicadores de estado de conexión]_

### 7.3.1 Columnas de Lista de Dispositivos

| Elemento                 | Descripción                                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID de unidad**         | Un número que determina la posición de la unidad en la Lista de Dispositivos (de izquierda a derecha). Editable — haga clic en el campo ID para cambiarlo. El ID se almacena en la unidad. |
| **Nombre de unidad**     | Un nombre asignado por el usuario para la unidad. Editable — haga clic en el campo nombre para renombrar. Almacenado en la unidad y mostrado en unidades con pantallas de panel frontal.                      |
| **Estado de conexión**   | Indica si DADman tiene una conexión activa con la unidad. Una unidad desconectada se muestra en gris.                                                                                                                         |
| **Versión del firmware** | Muestra la versión actual del firmware que se ejecuta en la unidad.                                                                                                                                                                           |

> **TIP (v5.8.1.6, sólo macOS):** La lista de dispositivos se puede ordenar haciendo clic en las cabeceras de las columnas — nombre de unidad, ID, versión de firmware y otras columnas. Esto es útil a la hora de administrar un gran número de unidades. La ordenación es sólo una preferencia de visualización y no cambia los identificadores de unidad.

### 7.3.2 Menú contextual de lista de dispositivos

Haciendo clic derecho en una fila unitaria (Windows) o usando el botón **Acción** (macOS) abre un menú contextual con las siguientes opciones:

| Opción                        | Accin                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| **Configuración de red**      | Abre el diálogo de dirección IP y configuración de red para la unidad seleccionada           |
| **Clonar desde…**             | Copia todas las configuraciones de otra unidad de la misma familia de hardware a esta unidad |
| **Actualización de firmware** | Inicia una actualización de firmware para la unidad seleccionada                             |
| **Reinicio de fábrica**       | Restablece todos los ajustes de la unidad a los valores predeterminados de fábrica           |
| **Desconectar**               | Elimina la unidad de la lista de dispositivos activos sin borrarla                           |

> **CAUCIÓN:** **Reinicio de fábrica** y **Actualización de firmware** eliminan todas las configuraciones almacenadas en la unidad. Guarda un archivo `.dms` antes de usar cualquiera de las dos opciones.

### 7.3.3 Nombres de canal

Los nombres de canales (etiquetas para canales individuales de entrada y salida) se asignan en las pestañas AD y DA.

> **NOTA — Importante:** Los nombres de los canales se almacenan en el **archivo de configuración de DADman (`.dms`)** en la computadora, **no** en la unidad de hardware. Esto significa que los nombres de los canales se pierden si DADman se utiliza sin cargar un archivo `.dms` o si un ordenador diferente se conecta a la unidad. Siempre incluya los nombres de los canales al guardar los archivos de configuración.

---

## 7.4 AD Tab — Entradas analógicas

La pestaña **AD** muestra la medición y el control de todos los canales de entrada analógicos (micrófono, DI y nivel de línea) en unidades conectadas. Si una unidad no tiene tarjetas de entrada analógicas instaladas, esta pestaña estará presente pero vacía para esa unidad.

_[Marcador de posición: captura de pantalla de pestaña AD anotada que muestra el canal micrófono con los indicadores de ganancias, fantasma, fase, silencio y clip/señal]_

### 7.4.1 Control del clip de canales

Cada canal de entrada analógica muestra los siguientes controles de arriba hacia abajo:

| Control                                          | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Selector de tipo de entrada**                  | Cambia la entrada entre **MIC** (preamplificador de micrófono) y **LÍNEA** (nivel de línea). Disponible sólo en canales con preamplificador micrófono.                                                                                                                                                                                                             |
| **Potencia fantasma (+48 V)** | Activa la corriente fantasma de 48 V en el canal seleccionado. Sólo disponible en modo MIC. Aplicar sólo a micrófonos de condensador — no activar en micrófonos de cinta a menos que el fabricante especifique la compatibilidad.                                                                                                                                                        |
| **Inversión de fase (Ø)**     | Invierte la polaridad de la señal de entrada en 180°.                                                                                                                                                                                                                                                                                                                                                                    |
| **Mono / stereo link**                           | Enlaces pares de canales adyacentes impares/pares para operación estéreo. Los controles para el par se colocan cuando están enlazados.                                                                                                                                                                                                                                                                   |
| **Deslizador de ganancia MIC**                   | Establece la ganancia del preamplificador del micrófono. Consulte [Sección 7.4.2] para ver incrementos de ajustes.                                                                                                                                                                                                   |
| **Silencio**                                     | Silencia el canal de entrada. El estado de silencio se almacena en la unidad.                                                                                                                                                                                                                                                                                                                            |
| **Señal LED**                                    | Ilumina cuando la señal de entrada excede  42 dBFS. Indica la presencia de la señal; no indica que la señal esté a un nivel útil.                                                                                                                                                                                                                                                                       |
| **Clip LED**                                     | Ilumina cuando la señal de entrada excede - 0.5 dBFS. Indica un recorte digital inminente o real. Reduce la ganancia inmediatamente si este LED se enciende durante la operación normal.                                                                                                                                                                                 |
| **Pico de espera**                               | El nivel de señal más alto alcanzado se mantiene en la barra de metros, descendiendo lentamente. Proporciona un registro visual de picos transitorios sin monitoreo continuo. Disponible en hardware AX32, Penta y MTRX _(requiere firmware v2.3.2.1 o posterior, de DADman v5.4.3)_. |
| **Etiqueta de canal**                            | Nombre asignado por el usuario para el canal. Almacenado en el archivo `.dms`. Haga clic para editar.                                                                                                                                                                                                                                                                                    |

### 7.4.2 Ganancia de ajuste

El deslizador de ganancia MIC se puede ajustar utilizando los siguientes métodos:

| Método                                                                                     | Incrementar                                                                  |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Arrastrar ratón                                                                            | 0,5 dB por paso                                                              |
| Teclado **n.°/r.** (canal seleccionado) | 0,1 dB por paso                                                              |
| Teclado **Arriba/Bajar página**                                                            | Paso más grande (valor a confirmar por la ingeniería DAD) |

> **NOTA:** Selecciona un clip de canal haciendo clic en él luego use las flechas de teclado para ajustar la ganancia durante una sesión sin mover las manos al ratón.

### 7.4.3 Grupos de Ganancia de Micrófonos _(v5.8.1.6 y superior)_

Los grupos de ganancias de micrófono permiten ajustar varios canales de entrada simultáneamente — útil para configuraciones multi-micrófonas en tambores, sesiones orquestrales, o cualquier situación que requiera relaciones de ganancia relativas consistentes en un grupo.

**Para crear un grupo de ganancias de micrófono:**

1. Haga clic derecho en el control de ganancia de un canal (o utilice el menú contextual del canal).
2. Seleccione **Añadir al grupo de ganancias** y asignar un número de grupo.
3. Repetir por cada canal para incluir en el grupo.

**Comportamiento del grupo:**

- Al mover el control de ganancia en cualquier canal agrupado, todos los canales del grupo se mueven por la misma cantidad.
- **Tecla Alt / Opción + arrastrar** ajusta sólo el canal bajo el cursor, permitiendo afinar individualmente sin romper el grupo.
- El silencio se aplica a todos los canales agrupados simultáneamente, independientemente de las teclas modificadoras.

> **NOTA:** Los grupos de ganancias de micrófono funcionan como se esperaba cuando DADman es controlado a través de EuControl — los deslizadores y los nudos en las superficies de Avid afectan a todos los canales agrupados. Silenciar de la superficie de control silencia todos los canales agrupados simultáneamente.

> **NOTA:** Los grupos Mic Gain no están soportados en el MTRX Studio. _(v5.8.1.6)_

---

## 7.5 DA Tabla — Salidas analógicas

La pestaña **DA** muestra la medición y el control de todos los canales de salida analógicos en unidades conectadas. Si una unidad no tiene tarjetas de salida analógicas instaladas, la pestaña estará presente pero vacía para esa unidad.

_[Marcador de posición: captura de pantalla de pestaña DA anotada que muestra un canal de salida con indicadores de nivel de fader, mute, portador/señal/clip]_

### 7.5.1 Controles de clips de canales

| Control                      | Descripción                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fader de nivel de salida** | Establece el nivel de salida analógica. El valor corresponde al nivel analógico en dBu que se produce cuando se aplica una señal digital de 0 dBFS. Consulte [Sección 7.5.2] para ver los detalles del rango. |
| **Silencio**                 | Silencia el canal de salida.                                                                                                                                                                                                                                                                                                      |
| **Mono / stereo link**       | Enlaces pares de canales adyacentes impares/pares para operación estéreo.                                                                                                                                                                                                                                                         |
| **Transportista válido LED** | En los canales de salida digital: se ilumina cuando una señal digital válida está presente en la salida. En tarjetas de salida analógicas: se ilumina cuando la tarjeta de salida está presente y activa.                                                                         |
| **Señal LED**                | Ilumina cuando la señal de salida supera el  42 dBFS.                                                                                                                                                                                                                                                                            |
| **Clip LED**                 | Ilumina cuando la señal de salida excede -0.5 dBFS.                                                                                                                                                                                                                                                               |
| **Pico de espera**           | Mantiene el nivel de salida más alto alcanzado en la barra de metros. Igual disponibilidad que la pestaña AD — AX32, Penta y MTRX con firmware v2.3.2.1 o posterior.                                                                                              |
| **Etiqueta de canal**        | Nombre asignado por el usuario. Almacenado en el archivo `.dms`. Haga clic para editar.                                                                                                                                                                                                           |

### 7.5.2 Nivel de salida y Alineamiento

El fader de nivel de salida establece el \*\*nivel de salida analógico correspondiente a la escala digital de 0 dBFS. Este es un ajuste de estructura de ganancia que determina el factor de conversión entre el dominio digital (dBFS) y el dominio analógico (dBu).

**Rango de nivel de salida:** Dos rangos están disponibles, seleccionables a través del botón **6 dB Gain**:

| Modo                       | Range              | Salida máxima    |
| -------------------------- | ------------------ | ---------------- |
| Estándar                   | -66 dBu a +18 dBu  | +18 dBu a 0 dBFS |
| Ganancia de +6 dB activada |  60 dBu a +24 dBu | +24 dBu a 0 dBFS |

> **PRECAUCIÓN:** Establecer un nivel de alto rendimiento no siempre es apropiado. Si el equipo de aguas abajo tiene un nivel de entrada máximo inferior al ajuste del nivel de salida de DADman, el equipo de aguas abajo recortará incluso cuando la señal DADman esté limpia. Verifica siempre que el nivel de salida no exceda de la especificación de entrada máxima del equipo que se alimenta. Ejemplo: configurar la salida de +24 dBu en el equipo con una entrada máxima de +18 dBu causará un recorte de aproximadamente −6 dBFS en la señal DADman.

> **NO:** Haz coincidir el nivel de salida con el nivel de entrada nominal del equipo de aguas abajo para obtener la mejor estructura de ganancia. Por ejemplo, si la sensibilidad de entrada del amplificador del monitor es +4 dBu, ajustar el nivel de salida de DADman a +18 dBu da aproximadamente 14 dB de espacio de cabecera arriba nominal — un margen cómodo para la mayoría de los flujos de trabajo de monitoreo.

---

## 7.6 Con Tab — Matrícula de ruta

La pestaña **Con** muestra la matriz de punto cruzado de enrutamiento — el motor completo de enrutamiento de señales del hardware conectado. Cada entrada puede ser enrutada a cualquier salida, y cualquier número de salidas puede recibir la misma entrada simultáneamente.

_[Marcador de posición: captura de pantalla de pestaña Con anotada mostrando la matriz de vista general (izquierda), la matriz detallada (derecha) y los indicadores de estado de entrada/salida]_

### 7.6.1 Diseño de matriz

La matriz de enrutamiento se presenta en dos paneles lado a lado:

| Panel                    | Contenido                                                                                                       | Propósito                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Materia de resúmenes** | Todas las entradas (filas) × todas las salidas (columnas), pequeña escala | Navega a una sección de la matriz; muestra el estado general de ruta de un vistazo |
| **Matrix detallada**     | Vista expandida del área seleccionada en el resumen                                                             | Crear o quitar conexiones cruzadas individuales                                    |

En ambos paneles, las **entradas se muestran como filas a la izquierda** y las **salidas se muestran como columnas a lo largo de la parte superior**. Una conexión se realiza en la intersección (punto cruzado) de una fila de entrada y una columna de salida.

> **NOTA:** Las entradas y salidas mostradas en la matriz reflejan las opciones de hardware realmente instaladas y el número de canales disponibles al ritmo de muestra actual. A altas tasas de muestreo, algunos formatos (MADI, ADAT) llevan menos canales, reduciendo el número de filas y columnas mostradas.

### 7.6.2 Haciendo y Eliminando Conexiones

| Accin                                     | Resultado                                                                                                     |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Clic único** en un punto cruzado        | Conecta esa entrada a esa salida (o desconecta si ya está conectada)                       |
| **Mayús + clic** en un punto de cruce     | Conecta el canal pulsado y el siguiente canal consecutivo simultáneamente (un par estéreo) |
| **Ctrl / Cmd + clic** en un punto cruzado | Conecta un diagnóstico completo — mapea las entradas a sus mismas salidas numeradas desde el punto pulsado    |

Un punto de cruce conectado se muestra como un **cuadrado azul lleno**.

### 7.6.3 Indicadores de Estado de Conexión

**En las cabeceras de la columna de salida (fila superior):**

| Indicador            | Comenzando                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| Sin marca            | La salida no está conectada a ninguna entrada                                                           |
| Cuadrado azul claro  | La salida está conectada a una entrada que no es visible actualmente en la vista detallada de la matriz |
| Cuadrado azul oscuro | La salida está conectada a una entrada visible en la vista de la matriz detallada actual                |

> **NOTA:** Siempre se anula una conexión existente cuando haces clic en un nuevo punto de cruce en la misma columna de salida. La salida se reasigna a la nueva entrada; la conexión anterior se elimina.

**En las etiquetas de la fila de entrada (lado izquierdo de la matriz detallada):**

| Color        | Comenzando                                                                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Verde**    | Transportista digital válido presente en la entrada (o tarjeta analógica está instalada y activa para canales analógicos) |
| **Amarillo** | Pérdida de sincronización o desajuste de tasa de muestreo en esta entrada                                                                    |
| **Rojo**     | Error — no se ha detectado una señal de entrada válida                                                                                       |

> **NOTA:** El estado amarillo de una entrada digital suele indicar un desajuste de tasa de muestra entre el origen y el ajuste actual del reloj de la unidad. Revisa la pestaña **Conf** y verifica que la tasa de muestra de la unidad coincide con la fuente, o activa **Adaptar a** para esa entrada.

---

## 7.7 Conf Tab — Bloqueo y Configuración

La pestaña **Conf** controla la infraestructura digital de la unidad: fuente de reloj y tasa de muestreo, y la configuración de los puertos digitales de E/S (MADI, Dante, Word Clock, AES3).

_[Marcador de posición: captura de pantalla de la pestaña Conf anotada para el Centro AX, mostrando subsecciones de sincronización, Dante y MADI]_

> **NOTA — hardware AX32 / Familia 1:** La pestaña Conf en AX32, DX32R, y unidades Penta están etiquetadas **General** y organizadas en subsecciones (Synchronisation, MADI Coax Interface, Optical 1/2 Interface). Los parámetros son funcionalmente equivalentes a los descritos aquí. Los parámetros específicos de AX32 se señalan a continuación donde difieren.

### 7.7.1 Parámetros de sincronización

| Parámetro                         | Opciones                                                                                                                               | Descripción                                                                                                                                                                                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Fuente**                        | Interno · Reloj de palabras · AES11 · AES/EBU 1–8 · Coax MADI · MADI óptico 1/2 · Dante · Thunderbolt 3                                | Selecciona la fuente maestra del reloj para la unidad. Utilice **Internacional** cuando esta unidad sea el maestro del reloj del sistema.                                                                                                            |
| **Tasa de muestreo**              | 44.1 · 48 · 88.2 · 96 · 176.4 · 192 kHz _(y DXD / 384 kHz en AX32)_ | Establece la tasa de muestreo cuando **Adaptar a** se ajusta a **Internacional**. Cuando **Adapt To** está configurado a una entrada digital, este campo muestra la velocidad de muestra detectada de esa entrada (sólo lectura). |
| **Adaptar a**                     | Interno · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical · Dante · Thunderbolt 3                                                       | Cuando se establece en una entrada digital, la unidad coincide automáticamente con la velocidad de muestra de esa entrada. Cuando se establece a **Internacional**, se utiliza el parámetro de **Tasa de muestreo**.                                 |
| **Reloj de palabra**              | Reloj Word (base r) · Reloj de Word (actual r)                                                   | Determina si la salida del reloj Word de BNC sigue sólo la velocidad de muestreo base o la velocidad de operación real.                                                                                                                                              |
| **Terminación de sincronización** | Z alta · 75                                                                                                                            | Establece si la entrada del Reloj de Palabra se termina internamente con 75. **Muy recomendable: siempre use terminación de 75 pulgadas** para una estabilidad óptima del reloj.                                                     |

> **TIP:** Cuando se utiliza Dante como la red de audio y la unidad no es el maestro de reloj Dante, establece **Fuente** a **Dante** y **Adaptar a** a **Dante**. Esto asegura que la unidad rastrea el reloj Dante PTP y evita la conversión de tasa de muestra en la ruta de audio.

### 7.7.2 Configuración de Puerto MADI

Estos ajustes se aplican a cada puerto MADI individualmente (los puertos Coaxial BNC y Optical SFP se configuran por separado).

| Parámetro                      | Opciones                   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tasa de fotograma**          | Legado · Alta velocidad    | **Legacía:** La longitud de marco MADI se mantiene a 48 kHz de longitud y los canales adyacentes se combinan a un mayor índice de muestreo (S/MUX). **Alta velocidad:** La longitud del marco sigue la tasa real de muestreo — menor latencia a 88,2 kHz y superiores. A 44,1 o 48 kHz, el legado se utiliza siempre independientemente de este ajuste. |
| **Frame size**                 | Normal · Extendido         | **Normal:** 56 canales MADI (estándar). **Extendido:** MADI de 64 canales. Verificar que el equipo conectado de MADI soporta el modo extendido de 64 canales antes de activarlo.                                                                                                                                                                        |
| **Ch. estado** | Por defecto · Transparente | **Por defecto:** la unidad define los bits de estado del canal de la señal MADI saliente. **Transparente:** los bits de estado del canal de la fuente se pasan sin cambios. Abandonar **por defecto** en la mayoría de las instalaciones.                                                                                                                                  |
| **Tasa de entrada**            | Auto · Como AD             | **Auto:** la unidad detecta la velocidad de muestreo de la señal MADI entrante automáticamente. Recomendado: **Auto**.                                                                                                                                                                                                                                                                     |

> **NOTE — MADI de alta velocidad vs. Legacy vADI:** La mayoría de los dispositivos MADI en el mercado usan el modo Legacy. Activar el modo de alta velocidad en un extremo de un enlace MADI sin activarlo en el otro no producirá errores de audio o reloj. Verificar que tanto el dispositivo de transmisión como el receptor estén ajustados al mismo modo de Frame Rate antes de operar por encima de 48 kHz.

### 7.7.3 Interfaz óptica MADI _(AX32)_

_Se aplica a unidades AX32 equipadas con un módulo MADI óptico SFP._

| Parámetro                      | Opciones                           | Descripción                                                                                                                                                                                                                          |
| ------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Modo**                       | Deshabilitado · MADI · NTP HotLink | Selecciona el modo de funcionamiento de la interfaz SFP óptica. Establecer a **Desactivado** si no hay módulo SFP instalado. El modo **NTP HotLink** está reservado — no lo utilice. |
| **Tasa de fotograma**          | Legado · Alta velocidad            | Igual que MADI Coaxial — ver arriba.                                                                                                                                                                                 |
| **Frame size**                 | Normal · Extendido                 | Igual que MADI Coaxial — ver arriba.                                                                                                                                                                                 |
| **Ch. estado** | Por defecto · Transparente         | Igual que MADI Coaxial — ver arriba.                                                                                                                                                                                 |
| **Tasa de entrada**            | Auto · Como AD                     | Igual que MADI Coaxial — ver arriba.                                                                                                                                                                                 |

### 7,7,4 Configuración de Dante

Parámetros de configuración de Dante visibles en la pestaña Conf de DADman controlan aspectos de la operación de Dante que se gestionan a nivel de hardware. La gestión completa de la ruta Dante y de la suscripción se realiza en la aplicación **Dante Controller** (una aplicación separada del ingenio, no parte de DADman).

_[Pendiente de Ingeniería DAD: lista completa de parámetros Dante visibles en la pestaña Conf para el Centro AX / Núcleo 256 — incluyendo la tasa de muestreo de Dante, modo de redundancia, y parámetros IPCore introducidos en la v5. .1.6]_

> **NOTE — Dante 256 IPCore _(v5.8.1. )_:** unidades AX64, AX Center y Core 256 equipadas con el módulo IPCore Dante 256 soporta hasta 256 canales de Dante a 48 kHz. Esta configuración expandida de Dante requiere tanto firmware como software en v5.8.1.6 o posterior.

---

## 7.8 Mon Tab — Monitor Control

La pestaña **Mon** proporciona un control en tiempo real del controlador del monitor definido en el perfil de seguimiento activo. Es la interfaz diaria del operador para monitorear — selección de fuentes, interruptores de altavoces, plegables y conversaciones.

> **NOTA:** La pestaña Lon muestra los _controles_ definidos en el Perfil de Seguimiento; la _configuración_ de fuentes, salidas, plegables y enrutamiento se hace en el editor de perfiles de Monitor, accesible a través de **Ajustes > Perfil de Monitor**. Esta sección sólo cubre los controles de la pestaña Lun. Para la configuración del perfil, consulte [Capítulo 8 — Características avanzadas, Sección 8.1 — Perfiles de monitoreo].

_[Marcador de posición: captura de pantalla de pestañas lunares anotada mostrando el selector de origen, botones de salida de altavoz, selector plegable, fader de nivel principal, atenuar, cortar, hablar, y botón de nivel de referencia]_

### 7.8.1 Mon Tab Controls

| Control                                          | Descripción                                                                                                                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Selector de origen**                           | Selecciona la fuente de monitoreo activa de las definidas en el Perfil de Seguimiento.                                                                                                             |
| **Speaker output buttons**                       | Selecciona el conjunto de altavoces activos (por ejemplo, Cerca, Mid, Far o Stereo, 5.1, 7.1.4).                                |
| **Selector desplegable**                         | Se aplica una matriz plegable o ascendente de las definidas en el Perfil de Seguimiento.                                                                                                           |
| **Fader de nivel principal**                     | Controla el nivel de monitorización maestro del conjunto de altavoces activos. Mostrar en dB relativo al nivel de referencia.                                                      |
| **Ref (Nivel de referencia)** | Bloquea el deslizador de nivel principal al nivel de referencia calificado definido en el Perfil de Seguimiento. Presione una vez para participar; presione de nuevo para liberar. |
| **Dim**                                          | Se aplica una atenuación fija (típicamente – 20 dB) a la salida de monitoreo sin cambiar la posición del fader.                                                                 |
| **Cortar**                                       | Mueve todas las salidas de monitoreo inmediatamente.                                                                                                                                               |
| **Talkback**                                     | Activa la ruta de señal de talkback definida en el Perfil de Seguimiento.                                                                                                                          |
| **Sección de medidor**                           | Muestra la medición en tiempo real de las fuentes y salidas activas del monitor, como se configura en el Perfil de Seguimiento.                                                                    |

### Nivel de referencia 7,8,2

La función de nivel de referencia permite monitorizar un SPL pre-calificado sin riesgo de cambios de nivel accidentales.

**Para establecer un nivel de referencia:**

1. Utilizando tonos de prueba y un medidor SPL calificado, ajuste el nivel de salida de la monitorización a la referencia deseada SPL.
2. Tenga en cuenta el valor de dB mostrado en el nivel principal — este es su compensación de referencia.
3. En el Editor de Perfil de Monitoreo (**Configuración > Perfil de Monitor**), introduzca este valor como el **Nivel de Referencia** para el altavoz.
4. Durante el funcionamiento normal, presiona **Ref** para volver instantáneamente al nivel calificado después de cualquier ajuste manual.

> **TIP:** Múltiples conjuntos de altavoces pueden tener su propio nivel de referencia. Por ejemplo, un conjunto de "Campo cercano 85 dB" y un conjunto "Campo cercano 75 dB" pueden compartir las mismas salidas físicas, difiere sólo en su ajuste de recortes.

---

## 7.9 Control|Pack Clip _(v5.8.0 y posterior)_

El clip Control\|Pack aparece **debajo** el área principal del clip del canal cuando los presets de enrutamiento han sido configurados para una o más unidades conectadas. Proporciona control en tiempo real y monitorización de estado para todos los preajustes de ruta configurados.

> **NOTA:** El control \|Clip de paquete sólo es visible después de que se hayan creado preajustes de ruta en el editor de configuración de ruta (**Ajustes > Presets de enrutamiento**). Si no hay preajustes configurados, este área está ausente en la ventana de DADman. Consulte [Capítulo 8, Sección 8.4 — Control\|Pack] para obtener documentación completa de configuración.

_[Marcador de posición: control anotado\|Captura de pantalla de clip con botones de nombre predefinido, medidores PPM e indicadores de estado de disparo]_

### 7.9.1 Control|Pack Elements del clip

El clip muestra una sección por Trude\|Unidad central con preajustes de ruta configurados. Dentro de cada sección unidad, cada preset configurado se muestra con los siguientes elementos:

| Elemento                                     | Descripción                                                                                                                                                                         |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nombre preestablecido**                    | El nombre asignado al preset en el editor de configuración de ruta                                                                                                                  |
| **Botones de cubo (1–4)** | Selecciona el conjunto de entrada activo (bucket) para el ajuste predeterminado. El color indica el estado — ver a continuación. |
| **Medidores PPM de origen**                  | Medidores de programa pico en tiempo real que muestran el nivel de todos los canales en el cuchillo.                                                                |
| **Medidores PPM de salida**                  | Medidores de programa pico en tiempo real que muestran el nivel de todos los canales de salida para el predeterminado.                                              |
| **Indicadores de estado de encendido**       | Muestra el estado de los detectores de señales asignados como activadores para cada cubeta.                                                                         |

### 7.9.2 Estados de Bucket Button

| Color     | Estado                                   | Comenzando                                                                                                                                                          |
| --------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Azul**  | Activo (manual)       | Este cubo está actualmente enrutado. La configuración predeterminada está en modo manual, sin interruptores automatizados.          |
| **Verde** | Armado (automatizado) | Este cubo es la ruta activa actual. El ajuste está en modo automático y listo para el interruptor basado en condiciones de disparo. |
| **Rojo**  | Error de activación                      | Un detector de señales asignado a este cubo ha reportado un error (pérdida de señal, fallo de integridad AE6).                   |

**Cambiando entre modo manual y automatizado:**

- **Haga doble clic** en un botón verde (automatizado) para cambiar al modo manual — el botón se vuelve azul.
- **Haga doble clic** en el botón azul (manual) del cubo para rearmar la automatización — el botón se vuelve verde.

> **TIP:** En eventos en vivo o en transmisión, automatización de brazos durante la comprobación de línea. Si una entrada falla, el ajuste predefinido cambiará automáticamente sin intervención del operador. Puede anular el cambio automatizado en cualquier momento haciendo doble clic en el botón de cubo deseado.

---

## 7.10 Controles de ratón y teclado

### 7.10.1 Ganancia y Ajuste de Nivel

| Accin                                                          | Modifier                                                         | Resultado                                                                     |
| -------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Arrastre el ratón sobre el control deslizante de ganancias MIC | —                                                                | 0,5 dB por paso                                                               |
| **mañana** (canal seleccionado)             | —                                                                | 0,1 dB por paso                                                               |
| **mañana** (canal seleccionado)             | **Mayús**                                                        | Resolución incrementada (más fina que 0,1 dB)              |
| **Clic** en control de ganancia                                | **Ctrl (Win) / Cmd (Mac)** | Restablecer al valor por defecto                                              |
| Cualquiera de los anteriores                                   | **Alt / Opción**                                                 | Aplicar solo al canal seleccionado — evita el grupo de ganancia de micrófonos |

### 7,10,2 Routing Mtitudes

| Accin                    | Resultado                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| Un clic en punto cruzado | Conectar / desconectar                                                                    |
| **Mayús** + clic         | Conecta dos canales consecutivos (un par estéreo)                      |
| **Ctrl / Cmd** + clic    | Conectar un diagnóstico completo (E/S igual numerada desde este punto) |

### 7.10.3 Atajos de teclado _(v5.7.0 y superior)_

| Accin                              | macOS               | Ventanas         |
| ---------------------------------- | ------------------- | ---------------- |
| **Archivo > Abrir…**               | AO                  | Ctrl + O         |
| **Archivo > Guardar**              | TI                  | Ctrl+S           |
| **Archivo > Guardar como…**        | A/S                 | Ctrl+Mayús+S     |
| **Archivo > Abrir perfil…**        | A/S                 | Ctrl+Alt+O       |
| **Archivo > Importar perfil…**     | ��� I               | Ctrl+Alt+I       |
| **Archivo > Perfil de Guardar**    | A/S                 | Ctrl+Alt+S       |
| **Archivo > Guardar perfil como…** | Mañana              | Ctrl+Alt+Mayús+S |
| **Archivo > Perfil de cierre**     | A/S                 | Ctrl+Alt+W       |
| Abrir / activar ventana principal  | ⌘⇧1                 | —                |
| Abrir lista de dispositivos        | M.° | Ctrl+Mayús+L     |
| Abrir perfil de seguimiento        | M/M                 | Ctrl+Mayús+M     |
| Abre Ajustes / Opciones            | ⌘,                  | Ctrl+,           |

> **NOTA:** Estos atajos fueron introducidos en DADman v5.7.0. Las versiones anteriores no soportan atajos de teclado para operaciones de archivos y ventanas.

---

## Referencias cruzadas

- **Capítulo 1 — Introducción:** Explicación conceptual de lo que controla cada pestaña y cómo se relacionan los tipos de archivo
- **Capítulo 5 — Arquitectura y flujo de señales:** Arquitectura de red y reloj
- **Capítulo 6 — Empezando:** Caminata paso a paso usando estos controles en secuencia por primera vez
- **Capítulo 8 — Características avanzadas:** Configuración del perfil de monitoreo; Control\|Configuración del paquete; Grupos de ganancias de micrófono; integración de eucon; alineamiento del nivel de salida

---

_[Pendiente de Ingeniería DAD:]_  
_— Lista completa de parámetros de la pestaña Conf para el Centro AX / Núcleo 256 (Parámetros Dante, Thunderbolt 3 clock params)_  
_— Parámetros de pestaña de Dante 256 IPCore Conf (v5. .1. )_  
_— Lista completa de atajos de teclado_  
_— Pestaña / controles de tarjeta SPQ (se añadirá una subsección separada cuando esté documentada)_  
_— Controles PRO\|MON en la pestaña de lun (requiere documentación específica de DAD)_  
_— Todas las capturas de pantalla_
