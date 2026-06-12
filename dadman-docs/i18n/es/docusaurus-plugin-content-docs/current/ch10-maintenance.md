---
id: ch10-maintenance
title: "Capítulo 10 — Mantenimiento"
sidebar_label: "Ch. 10 — Mantenimiento"
sidebar_position: 12
slug: /mantenimiento
---

# Capítulo 10 — Mantenimiento

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8.2 build 2  
> **Estado del capítulo:** Borrador v0. — Especificaciones ambientales específicas de Hardware pendientes de confirmación por modelo de la ingeniería DAD  
> **Última actualización:** junio de 2026

---

## En este capítulo

| Sección              | Cubos                                                 |
| -------------------- | ----------------------------------------------------- |
| 10.1 | Actualizando software de DADman                       |
| 10.2 | Actualizando firmware hardware                        |
| 10.3 | Actualizando firmware de Dante                        |
| 10.4 | Actualizando el controlador Thunderbolt 3             |
| 10.5 | Verificando versiones actuales de software y firmware |
| 10.6 | Limpieza                                              |
| 10.7 | Almacenamiento                                        |
| 10.8 | Final de vida y eliminación                           |

---

## 10.1 Updating DADman Software

Las actualizaciones de DADman se distribuyen como paquetes completos del instalador — no como parches incrementales. La instalación de una nueva versión reemplaza la instalación existente.

### 10.1 antes de actualizar

- Revise las **notas de lanzamiento** para la nueva versión antes de instalar. Notas de publicación documento probado versiones del sistema operativo, requerimientos de compatibilidad con firmware, comportamientos cambiados y cualquier problema conocido con nuevas versiones del sistema operativo. Las notas de publicación están disponibles en el Centro de Descarga de [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
- Confirme que su sistema operativo está listado como compatible con la nueva versión de DADman. Consulte las notas de la versión — no todas las versiones de DADman soportan todas las versiones del sistema operativo.

### 10.1.2 Actualizar DADman — macOS

1. Descargue el nuevo instalador de DADman (`.pkg`) desde el portal de soporte de DAD o su cuenta de Avid Master.
2. Salir de DADman si se está ejecutando.
3. Haga doble clic en el instalador y siga las instrucciones en pantalla. La nueva versión reemplaza automáticamente la instalación existente.
4. Después de la instalación, inicia DADman y confirma el número de versión en **DADman > Acerca de DADman**.

### 10.1.3 Actualizar DADman — Windows

1. Descarga el nuevo instalador de DADman (`.exe` o `.msi`) desde el portal de soporte de DAD.
2. Cerrar DADman si se está ejecutando.
3. Haga doble clic en el instalador y siga las instrucciones en pantalla. Haga clic en **Sí** si aparece un aviso de control de cuentas de usuario.
4. Después de la instalación, inicia DADman y confirma el número de versión en **Ayuda > Acerca de DADman**.

> **NOTA:** Actualizar DADman no actualiza el firmware de hardware. Se trata de operaciones separadas que requieren procedimientos separados. Compruebe siempre las notas de la versión para determinar si una actualización de DADman recomienda o requiere una actualización del firmware correspondiente.

---

## 10.2 Actualizar Firmware de Hardware

### 10.2.1 Crítico: Guardar configuración antes de actualizar

> **ADVERTENCIA: los ajustes se perderán**  
> \*\*Las actualizaciones de firmware restablecen todos los ajustes almacenados en la unidad de hardware a los valores predeterminados de fábrica. \* Las configuraciones de enrutamiento, la configuración de ganancias, etiquetas de canales, perfiles de monitor, presets de enrutamiento y todos los demás parámetros almacenados se borran permanentemente durante una actualización del firmware. La única forma de recuperar estos ajustes es recargar un archivo de configuración de DADman guardado previamente (`.dms`).

**Antes de actualizar cualquier firmware de hardware:**

1. Abra DADman y confirme que la unidad a actualizar está conectada y visible en la Lista de Dispositivos.
2. Ve a **Archivo > Guardar como…** y guarda la configuración actual en un archivo `.dms` con un nombre de archivo claro (por ejemplo, `StudioA_AXCenter_pre-update_2026-06.dms`).
3. Si se carga un Perfil de seguimiento, guárdelo por separado: **Archivo > Guardar Perfil Como…**
4. Confirme que ambos archivos se guardan en una ubicación que está respaldada.

> **NOTA:** El diálogo de advertencia de actualización del firmware en DADman _(v5.7.2 y posterior)_ incluye un recordatorio para hacer una copia de seguridad de los ajustes antes de proceder. No descarte este diálogo sin confirmar que la copia de seguridad está completa.

### 10.2.2 Obteniendo Archivos de Firmware

Los archivos de firmware para todo el hardware DAD y Tecnología NTP están disponibles en el Centro de Descarga de [digitalaudiosupport.com](https://www.digitalaudiosupport.com). Se requiere una cuenta gratuita.

Descargue el archivo de firmware para su modelo de hardware específico. No utilice el firmware de un modelo diferente — el firmware no es intercambiable entre familias de hardware.

### 10.2.3 Realizando la actualización del Firmware a través de DADman

1. DADman abierto. Confirme que la unidad a actualizar está conectada y visible en la Lista de Dispositivos.
2. En la lista de dispositivos, haga clic derecho en la unidad (Windows) o utilice el botón Acción (macOS).
3. Seleccione **Update Firmware**.
4. Haga clic en **Reconocimiento** o **Continuar** cuando aparezca el diálogo de recordatorio de la copia de seguridad (después de confirmar que la copia de seguridad está completa).
5. Navega al archivo de firmware descargado y selecciónalo.
6. Comienza la actualización del firmware. Un indicador de progreso muestra el estado de actualización.
7. No interrumpa la energía a la unidad ni cierre DADman durante la actualización. Una actualización interrumpida del firmware puede hacer que la unidad sea inarrancable y requerir recuperación de fábrica.
8. Una vez finalizada la actualización, la unidad se reiniciará automáticamente. La lista de dispositivos muestra la unidad que se desconecta y vuelve a conectar. Espere a que el LED **Listo** regrese al verde sólido (hasta 60 segundos).
9. Confirme la nueva versión de firmware en la Lista de Dispositivos. Recarga tu archivo de configuración `.dms` a través de **Archivo > Abrir…**.

> **PRECAUCIÓN:** No interrumpa la potencia de la unidad de hardware durante una actualización del firmware bajo ninguna circunstancia. Si ocurre un fallo de energía en la actualización, póngase en contacto con el soporte de DAD en support@ntp.dk antes de volver a encender la unidad.

### 10.2.4 Firmware Version History Reference

Para obtener un registro completo de versiones de firmware, fechas de lanzamiento y qué cambió en cada versión, consulte el **Historial de versiones** documento compilado:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

Las versiones actuales de firmware para cada familia de hardware en el momento de su publicación (DADman v5.8.2 build 2):

| Familia de hardware                                          | Firmware actual                                          |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| AX64, Centro AX, núcleo 256, MTRX II, Control 01/02          | v1.1.2.4 |
| Dante 256 IPCore (Torren\|gen del núcleo) | v1.0.3.1 |
| AX32, DX32R, Penta 720, Penta 721s, Avid MTRX                | v2.4.6.4 |
| Módulo Dante de Brooklyn 2                                   | v1.0.3.1 |
| Módulo Dante de Brooklyn 3                                   | v1.1.0.3 |
| Estudio MTRX                                                 | v1.1.6.3 |
| Estudio MTRX Dante 64 IPCore                                 | v1.0.3.1 |
| Tarjeta Dante                                                | v1.0.3.1 |

---

## 10.3 Updating Dante Firmware

El firmware de Dante (para módulos Dante y hardware IPCore en unidades DAD) se actualiza por separado del firmware de la placa principal, usando la herramienta **Dante Updater** dentro de **Dante Controller** — no a través de DADman.

### 10.3.1 Requisitos

- El **Dante Controller** debe estar instalado en la computadora. Descargar desde [audinate.com](https://www.audinate.com).
- La unidad DAD debe estar conectada a la red Dante y visible en Dante Controller.
- Descargue el archivo de firmware Dante (`.dnt`) apropiado desde el portal de soporte de DAD. Los archivos de firmware de Dante están empaquetados con cada lanzamiento de software de DADman.

### 10.3.2 Proceso de Actualización de Firmware de Dante

1. Abrir **Controlador Dante**.
2. Navega a **Dispositivo > Actualizador Dante** para abrir la herramienta Actualizador Dante.
3. En el actualizador Dante **Opciones avanzadas**, habilite **Permitir Firmware importado**. Esto es necesario para cargar archivos de firmware suministrados por DAD.
4. En el actualizador de Dante, seleccione la pestaña **Biblioteca** y haga clic en **Archivos importados**.
5. Importa los archivos de firmware `.dnt` descargados desde el portal de soporte de DAD haciendo clic en **Importar**.
6. Vuelva a la pestaña **Inicio** de Dante Updater y seleccione **Archivos de firmware importados** en el selector de origen del firmware.
7. Seleccione la unidad DAD que se actualizará de la lista de dispositivos.
8. Siga las instrucciones en pantalla para comenzar la actualización.
9. Espere a que se complete la actualización. El módulo Dante se reinicia automáticamente.

> **NOTA:** Los usuarios del módulo de Brooklyn 3 Dante: de firmware v1.1.0.3 (publicado en enero de 2026), el Brooklyn 3 soporta el protocolo **ST 2110** sin DDM (Dante Domain Manager). Esto requiere tanto el firmware actualizado de Dante como la última versión de Dante Controller. Vea las notas de la versión para más detalles.

---

## 10.4 Actualizar el Driver de Thunderbolt 3

_Se aplica sólo a usuarios de AX64, AX Center, Core 256. Saltar para hardware sólo Ethernet._

El controlador DAD Thunderbolt 3 (DADDriverSetup) se actualiza por separado de DADman. Las actualizaciones de los controladores se publican junto con las actualizaciones de firmware cuando se incluyen las mejoras de funcionalidad de Thunderbolt.

### 10.4.1 macOS — Procedimiento de actualización de controlador

> **NOTA:** En macOS, la versión antigua del controlador debe ser eliminada antes de instalar la nueva. Instalar un controlador existente sin eliminarlo primero no resulta en un controlador que funcione correctamente en macOS Sequoia o posterior.

1. Descarga el nuevo instalador de controladores Thunderbolt 3 (`.pkg`) desde [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Localice **DADDriverSetup.app** en su carpeta de aplicaciones.
3. Muévelo a la papelera (**clic derecho > Mover a la papelera**). macOS muestra una advertencia de que se eliminará la extensión del sistema — confirme para continuar.
4. Ejecute el nuevo instalador de controladores: haga doble clic en el `.pkg` descargado y siga las instrucciones en pantalla.
5. Cuando se le solicite, apruebe la nueva extensión del sistema en **Configuración del sistema > Privacidad y Seguridad**.
6. Reinicie el equipo cuando se le solicite.
7. Después de reiniciar, abre **DADDriverSetup** desde las aplicaciones y confirma el número de versión mostrado.
8. Conecte su hardware Thunder\|Core y confirme que aparece en la **Configuración de Audio MIDI**.

### 10.4.2 Windows — Procedimiento de actualización del controlador

1. Descarga el nuevo instalador de controladores ASIO (`.msi`) desde [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Salir de cualquier aplicación de audio usando el controlador ASIO.
3. Abre **Ajustes > Aplicaciones** (o **Panel de Control > Programas**) y desinstala el controlador ASIO DAD Thunderbolt 3.
4. Reiniciar la computadora.
5. Ejecute el nuevo instalador de controladores (`.msi`) y siga las instrucciones en pantalla.
6. Abre tu aplicación de audio y confirma que la versión actualizada del controlador es visible en la configuración del dispositivo ASIO.

### 10.4.3 versiones actuales del controlador

| Conductor                                                          | Plataforma | Versión actual                         |
| ------------------------------------------------------------------ | ---------- | -------------------------------------- |
| DAD Thunderbolt 3 Core Audio Driver (DADdriver) | macOS      | v1.2.2 |
| DAD Tronco 3 Controlador ASIO                                      | Ventanas   | v1.1.2 |

_Actual a partir de la compilación 2 de DADman v5.8.2 (enero de 2026)._

---

## 10.5 Versiones de Firmware y Software Actual

### 10.5.1 Versión de DADman

- **macOS:** **Menú DADman > Acerca de DADman**
- **Windows:** **Ayuda > Acerca de DADman**

El diálogo Acerca de DADman muestra el número de versión de DADman y la compilación. De v5.7. , el botón **Copiar información** copia la información de diagnóstico completa — Versión de DADman, Versión del sistema operativo, lista de dispositivos conectados y versiones de controladores Thunderbolt — al portapapeles.

### Versión del Firmware de hardware 10.5.2

La versión del firmware para cada unidad conectada se muestra en la **Lista de dispositivos** junto con el nombre de la unidad y el ID. Desplácese sobre el campo de versión del firmware para más detalles cuando esté disponible.

### 10.5.3 Versión de Driver de Thunderbolt

La versión del controlador Thunderbolt está incluida en la salida **Acerca de DADman > Copiar Información** _(v5.7.2 y posterior)_. También se puede encontrar en **DADDriverSetup** (macOS) o en el diálogo de configuración del controlador ASIO (Windows).

### 10.5.4 Notas de la versión y el historial de actualización

Todas las notas de lanzamiento se archivan en [digitalaudiosupport.com](https://www.digitalaudiosupport.com) en el Centro de Descarga. También se mantiene un historial de versiones compiladas en:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

---

## 10,6 Limpieza

**Materiales de limpieza:** Utilice sólo un paño suave y seco para limpiar los paneles delanteros y traseros y el recinto de todo el hardware DAD. No usar:

- Limpiadores líquidos, disolventes o limpiadores de spray de cualquier tipo
- Ropa abrasiva o pads
- Aire comprimido dirigido a aberturas o aperturas de conector

**Conectores:** No inserte objetos en las aperturas del conector con fines de limpieza. Si un conector aparece contaminado, consulte al personal de servicio cualificado.

> **PRECAUCIÓN:** Desconecte la unidad de la fuente de alimentación antes de limpiar. No permita que ningún líquido entre en el recinto a través de aberturas o aperturas de conector.

**Pantallas y pantallas:** Unidades con pantallas LCD de panel frontal (AX Center, MTRX Studio) pueden limpiarse con una ropa suave y seca. No utilice fluidos de limpieza de la pantalla.

**Frecuencia:** Inspecciona y limpia el panel frontal y las aperturas de presentación como parte de un programa de mantenimiento regular, como mínimo, una vez al año en un estudio limpio; con mayor frecuencia en ambientes con altos niveles de polvo.

---

## 10.7 Almacenamiento

Si una unidad de hardware va a ser almacenada durante un período prolongado (más de unas pocas semanas), las siguientes condiciones deben mantenerse:

| Parámetro        | Condición                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Temperatura**  | - 20°C a +60°C (-4°F a +140°F)                                                                                                                                                                     |
| **Humedad**      | De 10% a 80% de humedad relativa, no condensante                                                                                                                                                                      |
| **Empaquetando** | Almacenar en el embalaje original si está disponible. Si el empaque original no está disponible, utilice el empaque antiestático para cualquier placa de circuitos o interfaces de conector expuestos |
| **Orientación**  | Almacena unidades de montaje horizontalmente con el panel frontal mirando hacia arriba                                                                                                                                |
| **Energía**      | Desconectar de la alimentación antes de almacenamiento                                                                                                                                                                |

> **NOTA:** Permite que la unidad alcance la temperatura ambiente antes de encender después del almacenamiento en condiciones frías. Encender una unidad en frío en un ambiente cálido puede hacer que la condensación se forme en componentes internos.

---

## 10.8 Fin de Vida y Disposición

DAD / NTP Tecnología hardware y cables asociados están sujetos a la Directiva europea de RAEE (residuos de equipos eléctricos y electrónicos, Directiva 2012/19/UE) y reglamentos nacionales y regionales equivalentes.

**No descartes este equipo en residuos domésticos no clasificados.**

Al final de la vida, el equipo debe ser:

- Devuelto a un distribuidor o distribuidor autorizado para su reciclaje, o
- Entregado a un punto de recogida local autorizado o
- Devuelto a DAD / NTP Tecnología para una eliminación adecuada

Póngase en contacto con la tecnología DAD / NTP para orientación de eliminación:  
Correo electrónico: info@digitalaudio.dk  
Web: www.digitalaudio.dk

El símbolo WEEE (papelera de rueda cruzada) en el producto o su embalaje lo identifica como sujeto a requisitos de recogida separados. Vea también [Front Matter, Sección FM.8 — Disposición y RAE].

---

_[Pendiente de Ingeniería DAD:]_  
_— Temperatura de funcionamiento y almacenamiento confirmada por modelo y rangos de humedad (los valores anteriores son indicativos)_  
_— Intervalo de limpieza de filtros de ventiladores y procedimientos para unidades con filtros reemplazables (si es aplicable)_  
_— Fuse el tipo y procedimiento de reemplazo por modelo de hardware (para ser añadido por modelo según corresponde)_
