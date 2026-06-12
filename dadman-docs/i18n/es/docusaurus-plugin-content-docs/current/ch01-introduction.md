---
id: ch01-introducción
title: "Capítulo 1 — Introducción y descripción de producto"
sidebar_label: "Ch. 1 — Introducción"
sidebar_position: 3
slug: /introducción
---

# Capítulo 1 — Introducción y descripción de producto

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8.2 build 2  
> **Estado del capítulo:** Borrador v0. — Revisión técnica pendiente por la ingeniería DAD  
> **Última actualización:** junio de 2026

---

## En este capítulo

| Sección             | Cubos                                              | Relevante para     |
| ------------------- | -------------------------------------------------- | ------------------ |
| 1.1 | Qué es DADman y qué hace                           | Todos los usuarios |
| 1.2 | Capacidades clave                                  | Todos los usuarios |
| 1.3 | Componentes de software y sus relaciones           | Todos los usuarios |
| 1.4 | Hardware compatible                                | Todos los usuarios |
| 1.5 | Familias de hardware y compatibilidad de clonación | Todos los usuarios |
| 1.6 | Cómo utilizar este manual                          | Todos los usuarios |
| 1.7 | Acerca de Tecnología DAD / NTP                     | Todos los usuarios |

> **NOTA — Ámbito de este manual:** Este manual está escrito para los usuarios del hardware DAD (Digital Audio Dinamarca). Todos los ejemplos trabajados, capturas de pantalla y procedimientos utilizan productos DAD —principalmente el Centro AX, el núcleo 256 y AX6— como plataforma de referencia. Avid MTRX, MTRX II y MTRX Studio son productos OEM que utilizan software DADman y que son funcionalmente idénticos desde una perspectiva de control de DADman; los procedimientos de este manual se aplican igualmente a esos productos. Los temas específicos de Avid-hardware (integración iLok, Pro Tools integrada, descargas de la cuenta Avid Master ) son anotados donde es pertinente, pero no son el foco de este documento.

---

## 1.1 ¿Qué es DADman?

DADman es una aplicación de software que configura y controla hardware de audio profesional desde DAD (Digital Audio Denmark), Tecnología NTP y Avid sobre una red Ethernet estándar. Es el único punto de control para todas las unidades conectadas — proporcionando acceso a la ganancia de entrada analógica, niveles de salida, enrutamiento, relojamiento, sincronización y monitoreo de control desde una interfaz unificada.

DADman es una interfaz **orientada al canal con rayas**. Cada unidad conectada aparece en la Lista de Dispositivos, y sus entradas, salidas, y los controles de enrutamiento se presentan como un conjunto de clips de canal verticales — similar en concepto a los clips de canal en una consola de mezcla. Esto significa que independientemente de la unidad de hardware con la que esté trabajando, la interfaz DADman sigue un diseño consistente.

### 1.1.1 El principio fundamental: Configuración en vivo en la unidad

> **NOTA:** Este es el concepto arquitectónico más importante a entender antes de usar DADman.

Todos los ajustes configurados en DADman — enrutamiento, ganancia, niveles de salida, fuente de reloj, etiquetas de canal, y todos los demás parámetros — se almacenan en la propia unidad de hardware, no en el software DADman ni en la computadora que lo ejecuta. DADman lee el estado actual de la unidad desde la red y lo muestra; al hacer un cambio, DADman envía ese cambio a la unidad, que lo almacena.

Esto tiene consecuencias prácticas:

- Si DADman está cerrado o el equipo está apagado, la unidad de hardware continúa operando con sus configuraciones almacenadas últimamente. El audio pasa ininterrumpido.
- Si se abre DADman y se encuentra una unidad en la red, DADman inmediatamente muestra el estado actual de la unidad — incluso si la configuración se configuró por última vez en un equipo diferente.
- Para recuperar los ajustes después de un restablecimiento de fábrica o una actualización del firmware, debe recargar un archivo de configuración guardado. Consulte [Capítulo 7, Sección 7.1 — Gestión de sesiones].

---

## 1.2 Capacidades de clave

DADman proporciona las siguientes capacidades de control a través de hardware compatible:

| Capacidad                                                 | Descripción                                                                                                                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Control de entrada analógica**                          | Ganancia de mic/línea, potencia fantasma (+48 V), pad, inversión en fase, etiquetado de canal                                                               |
| **Control de salida analógica**                           | Nivel de salida, silencio, etiquetado de canales, selección de rango de salida (+18/+24 dBu)                                                                |
| **Materia de ruta**                                       | Matrix de enrutamiento de punto cruzado completo — hasta 1,500 × 1,500 puntos de cruce en hardware soportado                                                                   |
| **Reloj y sincronización**                                | Selección de tasa de muestreo, selección de fuente sincronizada, adaptación de reloj                                                                                           |
| **Control de seguimiento**                                | Monitorear perfiles con fuentes, salidas, plegados, retraso y conversaciones                                                                                                   |
| **Control multiunidad**                                   | Controla varias unidades de hardware simultáneamente desde una sola ventana de DADman                                                                                          |
| **Integración con EuCon**                                 | Compatible con Avid EuControl para la integración de la superficie de control                                                                                                  |
| **Pro Tools PRE emulation**                               | Emulación de preámbulos controlados por MIDI para unidades MTRX                                                                                                                |
| **Preajustes de ruta (Control\|Pack)** | Hasta 32 preajustes de enrutamiento por unidad con interruptor automático de disparo _(v5.8.0 y posterior)_                 |
| **Grupo de ganancias de micrófono**                       | Agrupa múltiples canales de entrada de micrófono para ajuste de ganancia simultánea _(v5.8.1.6 o superior)_ |
| **Copia de seguridad de configuración**                   | Guardar y restaurar todos los ajustes de unidades a los archivos de configuración de DADman (`.dms`) en el equipo                                           |
| **Clonación de unidad**                                   | Copiar todas las configuraciones de una unidad a otra dentro de la misma familia de hardware                                                                                   |

---

## 1.3 Componentes de software y sus relaciones

DADman es una parte de un sistema de software de dos componentes. Entender la distinción entre los dos componentes es esencial para una correcta instalación y solución de problemas.

### 1.3.1 Los Dos Componentes

| Componente                        | Qué hace                                                                                                                                                                                 | Requerido para                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **DADman**                        | Configura y controla las unidades de hardware sobre Ethernet — enrutamiento, ganancia, monitoreo, reloj                                                                                  | Todo el hardware soportado                      |
| **Controlador DAD Thunderbolt 3** | Hace que la interfaz del núcleo sea visible para el ordenador como un dispositivo de audio del núcleo (macOS) o ASIO (Windows) para su uso en DAWs | AX64, AX Center, Core 256, solo serie Avid MTRX |

Estas dos aplicaciones son **independientes**. No se comunican entre sí. El controlador Thunderbolt 3 no es necesario para que DADman funcione, y DADman no es necesario para que el controlador Thunderbolt 3 presente la interfaz de audio a un DAW. Sin embargo, para el funcionamiento completo del hardware Thunder\|Core — configurando la unidad _y_ grabación o reproducción de audio a través de él — deben instalarse ambos.

_[Placeholder: diagrama que muestra DADman y controlador TB3 como rutas paralelas entre la computadora y la unidad de hardware — DADman se comunica sobre Ethernet, Controlador TB3 comunicándose sobre Thunderbolt 3]_

### Rutas de comunicación 1.3.2

Una unidad de núcleo conectada a una computadora utiliza dos rutas de comunicación simultáneas e independientes:

| Ruta           | Protocol       | Propósito                                                                        |
| -------------- | -------------- | -------------------------------------------------------------------------------- |
| **Ethernet**   | TCP/IP         | Control de DADman — enrutamiento, ganancia, configuración                        |
| **Tornillo 3** | PCIe sobre TB3 | Transporte de audio — la interfaz visible para tu DAW vía Audio Principal o ASIO |

El hardware sólo Ethernet-only (AX32, DX32R, serie Penta) utiliza sólo la ruta Ethernet. No hay ningún controlador Thunderbolt 3 para estas unidades, y no aparecen como interfaces de audio en el ordenador. El audio de estas unidades se transporta a través de MADI, Dante o AES3.

### 1.3.3 Historia de versiones

| Requisito                                                             | Versión mínima                                           |
| --------------------------------------------------------------------- | -------------------------------------------------------- |
| DADman para soporte de controladores Thunderbolt 3                    | v5.6.7.1 |
| DADman con soporte nativo de Apple Silicon (ARM64) | v5.5.0                   |
| DADman con control\|Paquete                                           | v5.8.0                   |
| DADman con grupos de ganancias de micrófono                           | V5.8.1 compilación 6     |
| DADman con tarjeta Ravenna y soporte ST 2110-30                       | v5.8.2 Construcción 2    |
| Última versión de DADman compatible con Windows 7 / 8                 | v5.7.0                   |
| Versión actual (en el momento de la publicación)   | v5.8.2 Construcción 2    |

---

## 1.4 Hardware compatible

DADman controla el hardware de tres familias de productos: productos DAD/NTP Technology y productos Avid MTRX. A continuación se muestra la lista completa de hardware soportado en el momento de su publicación (DADman v5.8.2 build 2).

> **NOTA:** Consulte siempre las notas de lanzamiento para su versión específica de DADman para confirmar la compatibilidad con las últimas revisiones de hardware. La lista de hardware soportada puede actualizarse entre revisiones manuales.

### 1.4.1 DAD / NTP Tecnología Hardware

| Producto       | Categoría                            | Conexión al ordenador | Núcleo | Matrix de ruta                                                       |
| -------------- | ------------------------------------ | --------------------- | ------ | -------------------------------------------------------------------- |
| **Centro AX**  | Interfaz digital y analógica modular | Tornillo 3 + Ethernet | Sí     | 1,024 × 1,024                                                        |
| **Núcleo 256** | Interfaz de audio digital            | Tornillo 3 + Ethernet | Sí     | [Para confirmar] |
| **AX64**       | Interfaz de audio modular            | Tornillo 3 + Ethernet | Sí     | [Para confirmar] |
| **AX32**       | Sistema de conversión AD/DA          | Solo Ethernet         | Nu     | [Para confirmar] |
| **DX32R**      | E/S digital y router                 | Solo Ethernet         | Nu     | 400 inputs                                                           |
| **AX24**       | Interfaz de audio                    | Solo Ethernet         | Nu     | [Para confirmar] |

### 1.4.2 NTP Technology Penta Series

| Producto       | Categoría                          | Conexión al ordenador | Núcleo |
| -------------- | ---------------------------------- | --------------------- | ------ |
| **Penta 720**  | Unidad base de E/S Modular         | Solo Ethernet         | Nu     |
| **Penta 721s** | Interfaz y router de audio modular | Solo Ethernet         | Nu     |

### 1.4.3 Productos de Terceros

| Producto                | Fabricante | Conexión al ordenador | Núcleo | Versión DADman requerida                           |
| ----------------------- | ---------- | --------------------- | ------ | -------------------------------------------------- |
| **Dynaudio Control 01** | Dynaudio   | Tornillo 3 + Ethernet | Sí     | v5.7.2 y posterior |
| **Dynaudio Control 02** | Dynaudio   | Tornillo 3 + Ethernet | Sí     | v5.8.2 y posterior |

### 1.4.4 Serie MTRX Avid

Los Avid MTRX, MTRX II, y MTRX Studio son productos OEM fabricados por DAD / NTP Technology y vendidos por Avid. Utilizan DADman como software de control y son funcionalmente idénticos a DAD desde una perspectiva de DADman. Este manual no cubre temas específicos como licencias de iLok, integración de Pro Tools o administración de cuentas Avid Master .

> **NOTA:** Para Avid MTRX, MTRX II y MTRX Studio, utilice sólo la versión de DADman aprobada para su hardware Avid, disponible en su cuenta principal Avid. Consulte [Capítulo 3, Sección 3.2 — Obteniendo el Software].

| Producto                | Conexión al ordenador | Núcleo |
| ----------------------- | --------------------- | ------ |
| **Avid MTRX**           | Solo Ethernet         | Nu     |
| **Avid MTRX II**        | Tornillo 3 + Ethernet | Sí     |
| **Estudios MTRX vivos** | Tornillo 3 + Ethernet | Sí     |

_[Pendiente de Ingeniería DAD: capacidad de la matriz de enrutamiento para AX32, AX64, núcleo 256, AX24, Penta 720, Penta 721s; confirmación del método de conexión AX24]_

---

## 1.5 Compatibilidad con las familias de hardware y la clonación

DADman organiza hardware compatible en tres **familias**. La membresía de la familia determina qué unidades pueden intercambiar ajustes entre sí usando la función **Clone**.

La clonación permite que todas las configuraciones de una unidad se copien a otra. Esto es útil para duplicar una configuración conocida a través de múltiples unidades idénticas, o para restaurar la configuración a una unidad de reemplazo. La clonación sólo está permitida entre unidades en la **misma familia**.

| Familia       | Miembros                                                | Notas                                       |
| ------------- | ------------------------------------------------------- | ------------------------------------------- |
| **Familia 1** | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s | Arquitectura de ruta de generación original |
| **Familia 2** | MTRX II · AX64 · Centro AX · Núcleo 256                 | Generación del núcleo                       |
| **Familia 3** | Estudio MTRX                                            | Independiente                               |

> **NOTA — Clonar entre unidades no idénticas:** Para obtener mejores resultados, las unidades de origen y destino deben estar configuradas de forma idéntica (mismas tarjetas en las mismas ranuras). Los ajustes de las tarjetas presentes en la unidad de origen, pero ausentes en la misma posición de la ranura en la unidad de destino se ajustan a los valores predeterminados de fábrica en el objetivo. Los ajustes de las tarjetas presentes en el objetivo pero ausentes en la fuente no se verán afectados.

---

## 1.6 Cómo utilizar este manual

Este manual está organizado para apoyar tanto la lectura secuencial como la de referencia.

**Si eres nuevo en DADman:** Lee los capítulos 1–3 en orden, luego sigue el Capítulo 6 (Primeros pasos) paso a paso. Vuelva a los capítulos 4–5 para el fondo de hardware, y Capítulo 7 cuando necesite una guía operativa detallada.

**Si eres un usuario experimentado que busca un tema específico:** Usa el índice de sección en la parte superior de cada capítulo, o el índice completo en el Apéndice H.

**Convenciones de documentos utilizadas a través de este manual:**

| Convención                                                                  | Comenzando                                                                                    |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Bold text**                                                               | Nombres de control de hardware, elementos de menú, etiquetas de botón, nombres de pestaña     |
| `Texto monoespaciado`                                                       | Nombres de archivos, extensiones de archivos, rutas de carpetas, entrada de línea de comandos |
| _[Placeholder]_         | Contenido a confirmar por ingeniería DAD o añadido durante la revisión                        |
| _(v5.8.0 y posteriores)_ | Disponibilidad de características — indica la versión mínima de DADman requerida              |
| _(AX32 / Familia 1)_                                     | Variación de hardware — el parámetro se aplica específicamente al hardware con nombre         |

**Referencias cruzadas** usan el formato [Capítulo X, Sección X.X — Título] para apuntar al contenido relacionado dentro de este manual.

---

## 1.7 Acerca de Tecnología DAD / NTP

Digital Audio Dinamarca (DAD) es una marca de Tecnología NTP A/S, dominada por Dinamarca. NTP Tecnología diseña y fomenta el hardware de audio profesional para la radiodifusión, postproducción, sonido en vivo y aplicaciones de estudio.

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Web: www.digitalaudio.dk  
Soporte: www.digitalaudiosupport.com  
Correo electrónico: info@digitalaudio.dk

---

## Referencias cruzadas

- **Capítulo 2 — Requerimientos del sistema:** Compatibilidad del sistema operativo, especificaciones mínimas de hardware, contenido del paquete
- **Capítulo 3 — Instalación:** Instalar DADman y el controlador Thunderbolt 3
- **Capítulo 5 — Flujo de señal y Archivo:** Cómo se comunica DADman con hardware; resumen del reloj
- **Capítulo 6 — Empezando:** primer uso paso a paso
- **Capítulo 7 — Operación:** Referencia completa de la interfaz y flujos de trabajo operativos
- **Apéndice A — Especificaciones:** Tablas completas de especificaciones de hardware

---

_[Pendiente de Ingeniería DAD:]_  
_— Capacidad de la matriz de enrutamiento para AX32, AX64, núcleo 256, AX24, Penta 720, Penta 721s_  
_— Confirmación del método de conexión AX24_  
_— Texto de introducción para Acerca de la sección Tecnología DAD / NTP_
