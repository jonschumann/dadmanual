---
title: "Capítulo 6 — Empezando"
sidebar_label: "Ch. 6 — Empezando"
sidebar_position: 8
---

# Capítulo 6 — Empezando

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8. build 2  
> **Ejemplo principal hardware:** DAD AX Center  
> **Estado del capitulo:** Borrador v0. — Capturas de pantalla pendientes (Pasos 1, 2, 4, 5, 6, 7, 9 y captura de pantalla anotada de orientación de interfaz)  
> **Última actualización:** Junio de 2026

---

## Propósito

Este capítulo le guiará a través de una configuración completa y funcional de DADman — desde el primer lanzamiento hasta el audio confirmado — en el camino más corto posible. Asume que DADman ya está instalado en su ordenador. Si no lo es, completa [Capítulo 3 — Instalación] primero.

Cada paso indica qué hacer, qué debes ver, y dónde encontrar la referencia completa cuando necesitas más detalles.

**Tiempo estimado:** 15–20 minutos para una primera configuración en una sola unidad.

---

## Antes de comenzar

Confirme lo siguiente antes de lanzar DADman:

| Requisito                                                                                                                                     | Comprobar                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| DADman v5.8.2 build 2 (o posterior) está instalado                                         | [Capítulo 3, Sección 3.4]                     |
| La unidad de hardware está encendida                                                                                                          | Consulte la guía de instalación de hardware                                                                       |
| La unidad de hardware está conectada a la misma red Ethernet que su computadora                                                               | Cable directo o interruptor compartido                                                                            |
| Si se utiliza el audio de Thunderbolt 3: el controlador TB3 está instalado y la unidad está conectada a través de Thunderbolt | [Capítulo 3, Sección 3.5–3.6] |
| Has notado la dirección IP actual de la unidad (revisa la pantalla del panel frontal)                                      | —                                                                                                                 |

> **NOTA: usuarios de macOS Sequoia (v15):** DADman puede no descubrir unidades en la red cuando se lanza por primera vez en macOS Sequoia. Si no hay unidades después de 30 segundos, cierre la sesión de su cuenta macOS y vuelva a iniciar sesión. Este es un problema conocido a nivel de sistema operativo; las conexiones Thunderbolt no se ven afectadas. Consulte [Capítulo 3, Sección 3.7] para la solución completa.

---

## La interfaz DADman de un vistazo

Cuando DADman se abre, la ventana principal muestra todas las unidades de hardware conectadas organizadas de izquierda a derecha en el área de **Lista de dispositivos**. Cada unidad se muestra como una columna de clips de canal, bordados en el color asignado por la unidad, con cinco pestañas que proporcionan acceso a diferentes dominios de control.

### Las cinco pestañas

| Tab          | Nombre completo     | Lo que controla                                                                                                                                                                                |
| ------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AD**       | Análogo a Digital   | Canales analógicos de entrada — micrófono/ganancia de línea, potencia fantasma +48 V, inversión de fase (Ø), silencio, medición máxima, etiquetas de canal                  |
| **DA**       | Digital a analógico | Canales de salida analógica: faders de nivel de salida, silencio, medición de señal/clip, etiquetas de canal                                                                   |
| **Con**      | Conexiones          | La matriz de ruta de señal completa — una cuadrícula en la que hacer clic en un punto de cruce conecta cualquier entrada a cualquier salida                                                    |
| **Configón** | Configuración       | Ajustes por unidad — fuente de reloj, tasa de muestreo, velocidad de fotogramas MADI, configuración de Dante, opciones de nivel de puerto                                                      |
| **Mon**      | Seguidor            | Controlador de seguimiento — cargado desde un perfil de seguidor; muestra la selección de origen, botones de ajuste de altavoz, desvanecimiento de nivel, controles de ref/Dim/Corte, talkback |

> **NOTA:** La pestaña **Mon** muestra los controles activos sólo cuando se carga un perfil de Monitor (archivo `.dmprof`). Vea el paso 9 para ver cómo cargar o crear uno.

Al hacer clic en el botón del encabezado de una sección se colapsa o expande esa sección _(v5.7.2 y posterior)_. Esto es útil en pantallas más pequeñas o cuando se trabaja con múltiples unidades simultáneamente.

_[Marcador de posición: captura de pantalla anotada — ventana principal de DADman que muestra las cinco pestañas, lista de dispositivos y color de borde unitario]_

### Lista de dispositivos

Abra la Lista de Dispositivos a través de **Ajustes > Lista de Dispositivos** o **Corea** (macOS) / **Ctrl+Shift+L** (Windows). La lista de dispositivos muestra todas las unidades que DADman ha descubierto en la red, con su nombre, ID de unidad, dirección IP y versión de firmware. Hacer clic derecho en una unidad en la Lista de Dispositivos da acceso a Configuración de Red, Actualizar Firmware, Restablecer Fábrica, Clonar y Desconectar.

### Tipos de archivo

DADman utiliza dos tipos de archivo:

| Extensión | Nombre                             | Almacenes                                                                                             |
| --------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `.dms`    | Archivo de configuración de DADman | Todos los parámetros de la unidad — enrutamiento, ganancias, etiquetas, parámetros de la pestaña Conf |
| `.dmprof` | Perfil de seguimiento de DADman    | Configuración del controlador de seguimiento — fuentes, conjuntos de altavoces, plegables, talkback   |

Estos archivos son independientes. Guardar una no guarda automáticamente la otra. Ambos deben guardarse y respaldarse.

---

## Caminata paso a paso

### Paso 1 — Iniciar DADman

Abre **DADman** desde tu carpeta de aplicaciones (macOS) o menú de inicio (Windows).

**Resultado esperado:** Se abre la ventana principal de DADman. Si no se encuentran unidades inmediatamente, la ventana de **Lista de dispositivos** se abre automáticamente.

> **NOTA:** De DADman v5.7.0, la aplicación continuamente vuelve a intentar conectarse a unidades — no hay tiempo de espera. Si su unidad está encendida y accesible en la red, aparecerá en la Lista de dispositivos sin necesidad de ninguna acción manual.

_[Marcador de posición: captura de pantalla — ventana principal de DADman al iniciar con lista de dispositivos vacía]_

---

### Paso 2 — Verificar descubrimiento de dispositivo

Espere hasta 30 segundos. Tu centro AX (u otra unidad conectada) debería aparecer en la **lista de dispositivos** como una fila con un borde de color.

**Resultado esperado:** La fila de la unidad muestra el nombre de la unidad, el número de ID de unidad y la versión de firmware. El indicador de conexión está activo (no está en gris).

_[Marcador de posición: captura de pantalla — Lista de dispositivos que muestra un centro AX conectado con borde de color]_

Si no aparecen unidades después de 30 segundos:

- Confirme que la unidad está encendida y su panel frontal **Ready** LED es verde sólido.
- Confirme que el cable Ethernet está conectado entre la unidad y su ordenador (o conmutar).
- Confirme que la dirección IP de la unidad está en la misma subred que la interfaz de red de su computadora. Compruebe a través del panel frontal de la unidad.
- En Windows, confirma que tu cortafuegos no está bloqueando a DADman. Agregue una excepción de firewall si es necesario.
- Consulte [Capítulo 9 — Resolución de problemas, Sección 9.2 — Problemas de red y conectividad] para una tabla de diagnóstico completa.

> **Sugerencia:** Use **Ajustes > Lista de Dispositivos** o **Precaución** (macOS) / **Ctrl+Shift+L** (Windows) para abrir la Lista de Dispositivos directamente si no es visible.

---

### Paso 3 - Nombra la Unidad

Haga clic en el **campo de nombres** de la unidad en la Lista de dispositivos y escriba un nombre descriptivo — por ejemplo, `AX Center - Studio A`.

**Resultado esperado:** El nombre se actualiza inmediatamente y se almacena en la unidad misma. Aparecerá en unidades con pantallas frontales y persistirá en todas las sesiones de DADman en cualquier ordenador.

> **NOTA:** Los nombres de unidades se almacenan en la unidad de hardware. Las etiquetas de canales asignadas en el Paso 5 se almacenan en el archivo de configuración `.dms` del ordenador — no en la unidad.

---

### Paso 4 — Establecer la fuente del reloj y la frecuencia de muestra

> **Este paso debe completarse antes de parchear.** Todos los dispositivos de audio digital de tu sistema deben compartir un reloj de muestra común. Configurar enrutamiento antes de confirmar la configuración del reloj puede causar clics, ventanas emergentes o silencio que son más difíciles de diagnosticar después del hecho.

1. Haz clic en la pestaña **Conf**.
2. En la sección **Sincronización**, establece **Origen** para que coincida con tu sistema:

| Configuración del sistema                                               | Configuración de origen                                                           |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Esta unidad es el maestro de reloj del sistema                          | **Internacional**                                                                 |
| Bloquear desde una señal de reloj                                       | **Reloj de palabra**                                                              |
| Bloquear desde la red Dante                                             | **Dante**                                                                         |
| Coincidir automáticamente con la velocidad de muestreo de DAW conectada | **Adapto a** → **Thunderbolt 3** (o entrada digital relevante) |

3. Establezca **Tasa de muestreo** para que coincida con su sesión — típicamente **48 kHz** para difusión o postproducción, **44.1 kHz** para música.
4. Si usas la palabra entrada de reloj, establece **la terminación de sincronización** a **75**.

**Resultado esperado:** La tasa de muestra que se muestra en la pestaña **Conf** coincide con la tasa deseada. Si **Adaptar a** es una fuente externa, la tasa mostrada se actualiza automáticamente para que coincida con la tasa externa detectada.

_[Marcador de posición: captura de pantalla — pestaña de configuración de configuración de fuente y tasa de muestreo]_

> **TIP:** Si tu AX Center es el único dispositivo digital de tu sistema, ajusta **Origen** a **Internacional** y selecciona tu tasa de muestreo manualmente. Esto le da un control total sin dependencia en un reloj externo.

Referencia completa: [Capítulo 7, Sección 7.3 — Reloj y sincronización]

---

### Paso 5 — Etiqueta y configurar entradas analógicas

1. Haz clic en la pestaña **AD**.
2. Para cada canal de entrada activo:
   - Haga clic en el campo **etiqueta de canal** y escriba un nombre (por ejemplo, `Kick`, `OH L`, `Room, `).
   - Seleccione el tipo de entrada: **MIC** o **LÍNE**.
   - Para micrófonos condensadores: activa **+48V** potencia fantasma. No active la energía fantasma en los micrófonos de cinta a menos que el fabricante confirme la compatibilidad.
   - Estableció el deslizador de **ganancia MIC** a un nivel de inicio conservador. Ajustar hacia arriba durante la comprobación de sonido.
   - Habilita **Ø** (fase inversa) si es necesario.

**Resultado esperado:** El LED de **Señal** (verde) ilumina cuando el audio está presente arriba −42 dBFS. El LED **Clip** no debe iluminarse durante los niveles normales de señal.

_[Marcador de posición: captura de pantalla — pestaña AD con dos canales micrófonos configurados, LED de señal lit]_

> **Sugerencia:** Con un canal seleccionado, usa las teclas de flecha **n/n.°** para ajustar la ganancia en incrementos de 0.1 dB. Añade **Mayús** para una resolución aún más fina. Esto es más preciso que arrastrar el ratón (0,5 dB pasos).

Referencia completa: [Capítulo 7, Sección 7.4 — Ganancia y gestión de niveles]

---

### Paso 6 — Entradas de ruta a Salidas

1. Haz clic en la pestaña **Con**.
2. La matriz de enrutamiento muestra **entradas como filas** a la izquierda y **salidas como columnas** a lo largo de la parte superior.
3. Haga clic en el punto cruzado en la intersección de una fila de entrada y columna de salida para conectarlos. Un **cuadrado azul lleno** confirma la conexión.

| Accin                                           | Acceso directo                              |
| ----------------------------------------------- | ------------------------------------------- |
| Conectar un canal                               | Un clic                                     |
| Conectar un par estéreo                         | **Mayús** + clic en el primer canal         |
| Conectar diagnóstico de E/S con el mismo número | **Ctrl/Cmd** + clic                         |
| Desconectar                                     | Haz clic de nuevo en el cuadrado azul lleno |

**Resultado esperado:** Cuadrados azules aparecen en cada punto cruzado conectado. La cabecera de la columna de salida muestra un indicador azul que confirma que la salida está parcheada.

_[Marcador de posición: captura de pantalla — pestaña Con con puntos de cruce conectados mostrando la matriz de resumen y detalles]_

> **NOTA:** El número de entradas y salidas que se muestran en la matriz refleja tu configuración de hardware y la tasa de muestreo actual. A altas tasas de muestreo, algunos formatos (MADI, ADAT) llevan menos canales — la matriz se ajusta automáticamente.

Referencia completa: [Capítulo 7, Sección 7.2 — Configuración y parche de E/S

---

### Paso 7 — Establecer niveles de salida

1. Haz clic en la pestaña **DA**.
2. Establece el **fader de nivel de salida** para cada canal de salida activo para que coincida con la especificación de entrada del equipo de aguas abajo.

El valor de fader es el **nivel de salida analógico en dBu que corresponde a la escala digital completa de 0 dBFS** — no un control de volumen. Ajustes comunes:

| Desplegar equipo                                                               | Nivel de salida típico |
| ------------------------------------------------------------------------------ | ---------------------- |
| Amplificadores de potencia profesionales (nominales dBu +4) | **+18 dBu**            |
| Equipo de transmisión (EBU R68 alineamiento)                | **+18 dBu**            |
| Equipo semi-pro / proverbio (-10 dBV nominal)               | **+4 a +8 dBu**        |

> **PRECAUCIÓN:** Establecer el nivel de salida más alto que la entrada máxima de tu equipo descendente recortará ese equipo incluso cuando la señal DADman no muestre sobrecarga. Verifique siempre que el nivel de salida no exceda la especificación de entrada máxima del dispositivo de aguas bajas.

_[Marcador de posición: captura de pantalla — pestaña DA con el conjunto de faders de nivel de salida]_

Referencia completa: [Capítulo 7, Sección 7.4 — Ganancia y gestión de niveles]

---

### Paso 8 — Verificar audio de extremo a extremo

Con la señal presente en las entradas, confirme que el audio fluye a través del sistema:

1. \*\*pestaña AD: \*\* Los LEDs de la señal (verde) se iluminan sobre las entradas activas.
2. **pestaña Con:** Indicadores de estado de entrada en el lado izquierdo de la matriz de detalle mostrar verde (señal válida). Amarillo indica un desajuste de sincronización/reloj — volver al Paso 4.
3. **pestaña DA:** Los LEDs señales iluminan sobre las salidas activas.
4. **En el destino:** El audio es audible o asequible en tus altavoces, grabadores o sistemas de medición.

**Si las señales LEDs son verdes pero no hay audio que alcance la salida:**

- Verifique los puntos cruciales de enrutamiento en la pestaña **Con**.
- Confirme que **Mute** no está involucrado en el canal relevante de AD o DA.
- Compruebe que la configuración del reloj **Fuente** en la pestaña **Conf** es correcta — un estado amarillo en la matriz Con indica un problema de reloj.

**Si el clip LED ilumina:**

- Reduce la **ganancia MIC** en la pestaña **AD**.
- Si el equipo de aguas abajo está recortando, reduce el nivel de salida en la pestaña **DA**.

---

### Paso 9 — Carga o Crea un Perfil de Seguidor

Si está utilizando el controlador de monitor de DADman (PRO\|MON), necesita un perfil de Monitoring antes de que la pestaña **Mon** muestre los controles activos.

**Para cargar un perfil existente:**

1. **Archivo > Abrir perfil…** (macOS: **mañana** / Windows: **Ctrl+Alt+O**)
2. Selecciona tu archivo `.dmprof`.

**Para crear un nuevo perfil:**

1. **Ajustes > Perfil de seguimiento** para abrir el editor.
2. Haga clic derecho en **Fuentes** → **Añadir nueva fuente** → asignar entradas de tu enrutamiento.
3. Haga clic derecho en **Salidas** → **Añadir nuevo conjunto de salidas** → asignar salidas analógicas para cada configuración de altavoz.
4. **Archivo > Guardar Perfil Como…** (macOS: **mañana** / Windows: **Ctrl+Alt+Shift+S**)

**Resultado esperado:** La pestaña **Mon** muestra los controles del selector de origen, los botones de salida del altavoz, el fader principal y **Ref**, **Dim**, y **Corte**.

_[Marcador de posición: captura de pantalla — pestaña lunar con un perfil de monitor cargado]_

Referencia completa: [Capítulo 8, Sección 8.1 — Perfiles de seguimiento]

---

### Paso 10 — Establecer un nivel de referencia (opcional)

Si su habitación ha sido calificada acústicamente:

1. Utilizando tonos de prueba y un medidor SPL calificado, establece el nivel principal de fader en la pestaña **Mon** a tu referencia de destino SPL (85 dB SPL es estándar para la mayoría de entornos de difusión y postproducción).
2. En **Ajustes > Perfil de seguimiento**, registra este nivel como el **Nivel de referencia** para el conjunto de altavoces activos.
3. Durante las sesiones, presiona **Ref** en la pestaña **Mon** para volver instantáneamente al nivel calificado.

> **TIP:** Múltiples conjuntos de salida de altavoces pueden compartir las mismas salidas físicas, pero tienen diferentes desplazamientos de recorte — creando los valores predeterminados "85 dB SPL" y "75 dB SPL" que puedes cambiar entre sin recalibrar.

---

### Paso 11 — Guardar la configuración

> **PRECAUCIÓN:** Los ajustes de unidades se almacenan en el hardware. Un restablecimiento de fábrica o actualización de firmware los borrará. El archivo `.dms` en tu computadora es la única copia de seguridad.

1. **Archivo > Guardar como…** (macOS: **mañana** / Windows: **Ctrl+Shift+S**)
2. Usa un nombre de archivo descriptivo: `StudioA_AXCenter_2026-06.dms`
3. Guardar en una ubicación que se respalda regularmente.

Si tienes un Perfil de seguimiento, guárdelo por separado:
**Archivo > Guardar Perfil Como…** (macOS: **mañana** / Windows: **Ctrl+Alt+Shift+S**)

> **Sugerencia:** Habilitar **Abrir el último archivo al inicio** en **DADman > Preferencias** (macOS) o **Ajustes > Opciones** (Windows) para restaurar esta configuración automáticamente en cada lanzamiento. Recomendado para instalaciones permanentes.

---

### Paso 12 — Confirmar recarga

1. Cerrar DADman.
2. Reabrir DADman.
3. Confirma que los ajustes se recargan correctamente: todos los enrutamientos, ajustes de ganancia y etiquetas de canal deben restaurarse exactamente como se guardan.

**Resultado esperado:** Unidades que se actualizan en línea inmediatamente cuando el archivo `.dms` se carga. La pestaña Lon muestra tu perfil de Monitori guardado si "Abrir el último archivo al inicio" fue habilitado para perfiles también.

---

## Configuración Completa

Ahora tiene un sistema DADman funcional con:

- Unidades descubiertas, conectadas y nombradas
- Fuente de reloj y frecuencia de muestreo confirmada
- Entradas etiquetadas, ganadas y parcheadas a salidas
- Niveles de salida alineados al equipo de aguas abajo
- Audio verificado de extremo a extremo
- Configuración guardada y actualizada

---

## Referencia de teclado y ratón

### Teclas modificadoras deslizantes

Todos los deslizadores de ganancias, nivel y fader en DADman soportan las siguientes teclas modificadores:

| Modifier                                                                              | Efecto                                                                      |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Arrastrar** (sin modificador)                                    | Resolución normal: aproximadamente 0,5 dB por píxel         |
| **Mayús + arrastre**                                                                  | Aumento de precisión, aproximadamente 0,1 dB por píxel                      |
| \*\* Teclas de flecha \*\* (enfoque deslizante)                    | 0,1 dB pasos                                                                |
| **Mayúsculas/a**                                                                      | Pasos finos (0.01 dB)                    |
| **Ctrl** (Windows) / **Cmd** (macOS) **+ clic** | Restablecer al valor por defecto                                            |
| **Alt** (Windows) / **Opción** (macOS)          | Sólo por canal — evita el Mic Gain Group, ajusta solo el canal seleccionado |
| **Alt/Opción + Mayús**                                                                | Ajuste fino por canal                                                       |

### Atajos de teclado

| Accin                                                                   | macOS               | Ventanas         |
| ----------------------------------------------------------------------- | ------------------- | ---------------- |
| **Archivo**                                                             |                     |                  |
| Abrir archivo de configuración                                          | AO                  | Ctrl + O         |
| Guardar archivo de configuración                                        | TI                  | Ctrl+S           |
| Guardar archivo de configuración como…                                  | A/S                 | Ctrl+Mayús+S     |
| Abrir perfil de seguimiento                                             | A/S                 | Ctrl+Alt+O       |
| Importar perfil de seguimiento                                          | ��� I               | Ctrl+Alt+I       |
| Guardar perfil de seguimiento                                           | A/S                 | Ctrl+Alt+S       |
| Guardar perfil de seguimiento como…                                     | Mañana              | Ctrl+Alt+Mayús+S |
| Cerrar perfil de seguimiento                                            | A/S                 | Ctrl+Alt+W       |
| **Ver**                                                                 |                     |                  |
| Mostrar ventana principal (desde modo barra de menú) | ⌘⇧1                 | —                |
| Abrir lista de dispositivos                                             | M.° | Ctrl+Mayús+L     |
| Abrir editor de perfil de seguimiento                                   | M/M                 | Ctrl+Mayús+M     |
| Abrir Preferencias / Opciones                                           | ⌘,                  | Ctrl+,           |

### Atajos de la matriz de ruta

| Accin                                            | Método                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Conectar un punto cruzado                        | Haga clic en la intersección                                                                      |
| Conecta un par estéreo simultáneamente           | Mayús + haz clic en el primer canal                                                               |
| Conecta la salida de entrada con el mismo número | Ctrl/Cmd + clic                                                                                   |
| Desconectar                                      | Haz clic en el punto de cruce activo (azul)                                    |
| Desplazar la vista de la matriz                  | Rueda de desplazamiento / pad de seguimiento (no desplaza la ventana completa) |

### Herramienta de diagnóstico

**Menú DADman > Acerca de DADman > Copiar información** _(v5.7.2 y posterior)_

Copia la versión de DADman, la lista de dispositivos conectados, la versión del sistema operativo y las versiones de controladores al portapapeles. Incluya esto en cualquier solicitud de soporte al DAD.

---

## Siguiente paso

| A…                                                                                                                       | Ver…                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Configurar ajustes de puertos MADI, Dante o AES3 en profundidad                                                          | Ch. 7, Sección 7.3 — Tabla de Conf                    |
| Trabajar con la matriz de enrutamiento completa                                                                          | Ch. 7, Sección 7.2 — Configuración y parche de E/S    |
| Configurar el monitoreo inmersivo (5.1, 7.1.4, Atmos) | Ch. 8, Sección 8.1 — Controlar perfiles               |
| Configurar preajustes de enrutamiento con tolerancia a fallos de señal automática                                        | Ch. 8, Sección 8.4 — Control\|Paquete                 |
| Agrupar ganancias de micrófono para tambores, orquestrales o multimicrófonos                                             | Ch. 8, Sección 8.2 — Grupos de micrófonos             |
| Conecta DADman a una superficie de Avid EuControl                                                                        | Ch. 8, Sección 8.5 — Integración EuCon                |
| Diagnosticar una conexión o un problema de audio                                                                         | Ch. 9 — Solución de problemas                                         |
| Actualizar software DADman o firmware de hardware                                                                        | Ch. 10, Sección 10.1 — Actualizar software y firmware |

---

_[Pendiente: capturas de pantalla para pasos 1, 2, 4, 5, 6, 7, 9 — todos requieren un centro AX conectado a DADman v5.8.2]_
