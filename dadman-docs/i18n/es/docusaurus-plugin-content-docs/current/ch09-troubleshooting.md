---
id: solución de problemas ch09
title: "Capítulo 9 — Solución de problemas"
sidebar_label: "Ch. 9 — Solución de problemas"
sidebar_position: 11
slug: /troubleshooting
---

# Capítulo 9 — Solución de problemas

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8.2 build 2  
> **Estado del capítulo:** Borrador v0. — Acceso a archivos de registro documentado (9.9.1–9.9. ); catálogo de mensajes de error y tablas de estado LED aún pendientes de la ingeniería DAD  
> **Última actualización:** junio de 2026

---

## Cómo usar este capítulo

Encuentre la sección que coincide con la categoría de su problema, luego localice el síntoma que describe más de cerca lo que está experimentando. Cada fila da la causa y el remedio probables. Cuando el remedio implica un procedimiento de varios pasos, se proporciona una referencia cruzada en lugar de repetir los pasos aquí.

**Antes de contactar con el soporte**, recoja información de diagnóstico utilizando:  
**Menú DADman > Acerca de DADman > Copiar información** _(v5.7. y posterior)_  
Esto copia la versión de DADman, la lista de dispositivos conectados, la versión del sistema operativo y la versión del controlador de Thunderbolt al portapapeles. Incluya esto en cualquier solicitud de soporte.

| Sección             | Categoría                         |
| ------------------- | --------------------------------- |
| 9.1 | Conectividad de red y dispositivo |
| 9.2 | Problemas de audio                |
| 9.3 | Software y Inicio                 |
| 9.4 | Tornillo y conductor              |
| 9.5 | Reloj y sincronización            |
| 9.6 | Control de seguimiento            |
| 9.7 | Restablecer procedimientos        |
| 9.8 | Problemas conocidos por versión   |
| 9.9 | Obteniendo soporte                |

---

## Conectividad de red y dispositivo 9.1

_Categoría más común para nuevas instalaciones y después de cambios de red o hardware._

| Síntomas                                                                        | Probable causa                                                                                   | Remedios                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No aparecen unidades en la Lista de Dispositivos después de lanzar DADman       | Unidad no encendida                                                                              | Enciende la unidad; confirma el panel frontal **Listo** LED es verde sólido                                                                                                                                                                                                                                                                                          |
|                                                                                 | Unidad no en la misma red Ethernet                                                               | Conecte la unidad y el ordenador al mismo interruptor o a través de cabina directa; confirme que el cable es Cat5e o Cat6                                                                                                                                                                                                                                            |
|                                                                                 | Unidad y ordenador en diferentes subredes                                                        | Establece la interfaz de red de la computadora en la misma subred que la unidad (por ejemplo, el `192.168.1.x`). Comprobar la IP de la unidad a través de su panel frontal                                                                                                                                                        |
|                                                                                 | macOS Sequoia (v15): Problema de descubrimiento a nivel de SO | Cerrar sesión de la cuenta de usuario de macOS y volver a iniciar sesión. Las conexiones de tornillo triturado no se ven afectadas. Vea [Sección 9.3] y [Ch. 3, Sección 3.7] |
|                                                                                 | Ventana: cortafuegos bloqueando DADman                                           | Añadir una excepción de cortafuegos para DADman. Con BitDefender, actualiza a v5.7.2 o posterior                                                                                                                                                                                                                     |
| La unidad aparece en la lista de dispositivos pero se muestra como desconectada | Cable Ethernet desconectado o defectuoso                                                         | Compruebe el cable en ambos extremos; reemplace si está dañado                                                                                                                                                                                                                                                                                                       |
|                                                                                 | Reinicio de la unidad (por ejemplo, después de la actualización del firmware) | Espere hasta 60 segundos; confirme que el LED Listo es verde sólido                                                                                                                                                                                                                                                                                                  |
|                                                                                 | Conflicto de dirección IP - dos dispositivos que comparten la misma IP                           | Marca todos los dispositivos de red para IPs duplicadas; asigna direcciones estáticas únicas                                                                                                                                                                                                                                                                         |
| Unidad conectada, luego desapareció                                             | Interrupción de red                                                                              | Comprobar conmutador, cable y puerto. DADman reintenta continuamente _(v5.7.0+)_ — la unidad reaparece automáticamente una vez que se restaura la conexión                                                                                                                                        |
| Sólo aparecen algunas unidades (sistema multiunidad)         | Máscara de subred no coincide                                                                    | Confirmar todas las unidades y el ordenador comparten la misma máscara de subred (por ejemplo, `255.255.255.0`)                                                                                                                                                                                                                                   |
|                                                                                 | Duplicar direcciones IP                                                                          | Conecta y configura una unidad a la vez; asigna una única dirección IP                                                                                                                                                                                                                                                                                               |
| Unidad visible pero los ajustes difieren de lo esperado                         | Archivo `.dms` aplicado al inicio con diferentes ajustes                                         | Si "Abrir el último archivo al inicio" está activado, DADman aplica el archivo guardado a unidades en el lanzamiento. Comprueba **Archivo > Abrir** para confirmar qué archivo está cargado                                                                                                                                                          |

---

## 9.2 Problemas de Audio

| Síntomas                                                      | Probable causa                                                                                                | Remedios                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No hay audio en la salida analógica                           | Entrada no enrutada a la salida                                                                               | Abrir pestaña **Con**; verificar que existe un punto cruzado cuadrado azul entre la entrada y la salida requerida                                                                                                                                                                                                |
|                                                               | Canal de salida silenciado                                                                                    | Comprueba la pestaña **DA**; confirma que **Mute** no está comprometida                                                                                                                                                                                                                                          |
|                                                               | Canal de entrada silenciado                                                                                   | Comprueba la pestaña **D**; confirma que **Mute** no está comprometida                                                                                                                                                                                                                                           |
|                                                               | Fader de nivel de salida al mínimo                                                                            | Aumenta el nivel de salida DA a la configuración apropiada para el equipo de aguas abajo                                                                                                                                                                                                                         |
|                                                               | Discordancia del reloj causando silencio                                                                      | En la pestaña **Con**: indicador de estado amarillo en una fila de entrada = pérdida de sincronización. Ve a la pestaña **Conf** y verifica la Tarifa de Fuente y Ejemplo. Ver [Sección 9.5] |
| Audio distorsionado a niveles altos de señal                  | Nivel de salida demasiado alto para el equipo de aguas abajo                                                  | En la pestaña **DA**, reduce el desvanecimiento del nivel de salida. Ejemplo: salida de +24 dBu en un dispositivo de entrada máximo de +18 dBu clips del equipo downstream en aproximadamente −6 dBFS                                                                            |
| LED de señal no iluminado a pesar de la señal conocida        | Ganancia de entrada demasiado baja para superar el umbral de 42 dBFS                                          | Incrementar la **ganancia MIC** en la pestaña **DA**                                                                                                                                                                                                                                                             |
|                                                               | Tipo de entrada incorrecta seleccionado                                                                       | Verificar que MIC o LINE está seleccionado correctamente                                                                                                                                                                                                                                                         |
|                                                               | Cable fuente defectuoso o desconectado                                                                        | Comprobar conexiones físicas                                                                                                                                                                                                                                                                                     |
| Clip LED iluminado durante niveles normales                   | Ganancia de entrada demasiado alta                                                                            | Reduce la ganancia MIC en la pestaña **DA**                                                                                                                                                                                                                                                                      |
|                                                               | Recorte del equipo descendente                                                                                | Reducir el nivel de salida DA — ver "Audio distorsionado" arriba                                                                                                                                                                                                                                                 |
| Clics o ventanas emergentes en audio                          | Ejemplo de frecuencia o no coinciden                                                                          | Ver [Sección 9.5 — Reloj y sincronización]                                                                                                                                                                                                   |
|                                                               | Tamaño del búfer demasiado pequeño (Trucos)                                                | Incrementar tamaño del búfer ASIO; ver [Sección 9.4]                                                                                                                                                                                         |
| Sólo un canal de un par estéreo lleva audio                   | Enlace Stereo no activado                                                                                     | Habilitar enlace Mono/Stereo en la pestaña **DA** o **DA** para el par de canales                                                                                                                                                                                                                                |
|                                                               | Sólo un punto cruzado conectado                                                                               | En la pestaña **Con**, **Mayús + clic** para conectar ambos canales simultáneamente                                                                                                                                                                                                                              |
| Entradas analógicas del centro AX que no pasan audio          | Error de tiempo ADC en el firmware antes de v1.1.0.4          | Actualizar firmware de AX Center a v1.1.0.4 o posterior _(hotfix de enero 2025)_                                                                                                                                                              |
| AX Center / Thunder\|Error en la fase 8 de la tarjeta Core DA | Error en el firmware antes de v1.0.6.3                        | Actualizar Thunder\|Firmware principal a v1.0.6.3 o posterior _(septiembre de 2024)_                                                                                                                                                          |
| Canal ADAT 3 que no funciona en 88.2 o 96 kHz | Error en el firmware antes de v1.0.6.3                        | Actualizar Thunder\|Firmware principal a v1.0.6.3 o posterior                                                                                                                                                                                                    |
| Retraso no aplicado en canales superiores a 16                | Error en el firmware antes de v1.0.6.3                        | Actualizar Thunder\|Firmware principal a v1.0.6.3 o posterior                                                                                                                                                                                                    |
| Canales SDI 3G no habilitados después de encender             | Error de tiempo en el firmware de Familia 1 antes de v2.3.6.1 | Actualizar AX32 / DX32R / Firmware de Penta a v2.3.6.1 o posterior _(diciembre de 2022)_                                                                                                                                                      |

---

## 9.3 Software y Inicio

| Síntomas                                                                                                               | Probable causa                                                                                                                                            | Remedios                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman no se ejecuta en Windows                                                                                        | Falta `VCRUNTIME140_1.DL`                                                                                                                                 | Actualizar a DADman v5.7.2 o posterior                                                                                                                                                                                                                                                                                            |
|                                                                                                                        | Instalación incompleta                                                                                                                                    | Desinstalar, reiniciar, reinstalar desde [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                                                                           |
| macOS Sequoia: DADman no puede conectarse a unidades de la red al iniciar                              | problema de descubrimiento de dispositivo a nivel de SO macOS 15                                                                                          | **Workaround:** Cerrar sesión (**menú de Apple > Salir de sesión**), luego volver a iniciar sesión. Las conexiones de tornillo triturado no se ven afectadas. _(Conocido problema abierto a partir de la v5.8.2; corrección en desarrollo)_ |
| DADman se bloquea al hacer doble clic en un archivo `.dms` en Finder (macOS)                        | Error antes de v5.8.0                                                                                                     | Actualizar a DADman v5.8.0 o posterior                                                                                                                                                                                                                                                                                            |
| El archivo de perfil de seguimiento se corrompe después de cancelar una carga                                          | Error antes de v5.8.0                                                                                                     | Actualizar a DADman v5.8.0 o superior; restaurar desde un archivo `.dmprof` de copia de seguridad                                                                                                                                                                                                                                 |
| Ventanas: Choque MIDI en DADman                                                                        | Error antes de v5.8.1                                                                                                     | Actualizar a la compilación DADman v5.8.1 6 o posterior                                                                                                                                                                                                                                                                           |
| macOS: Mostrar artefactos de escalado (líneas delgadas al desplazarse)              | Error antes de v5.8.0 en pantallas escaladas                                                                              | Actualizar a DADman v5.8.0 o posterior                                                                                                                                                                                                                                                                                            |
| DADman no guarda archivos al cerrar sesión en macOS o apagar                                                           | Error antes de v5.7.0 (general); antes v5.8.0 en modo de barra de menú | Actualizar a DADman v5.8.0 o superior; habilitar **Guardar siempre archivo** en Preferencias                                                                                                                                                                                                                                      |
| macOS: DADman no se convertirá en la parte frontal del icono de la bandeja (Sonoma) | Error antes de v5.8.0                                                                                                     | Actualizar a DADman v5.8.0 o posterior                                                                                                                                                                                                                                                                                            |
| Ventanas: Firewall de BitDefender causando bloqueo del dispositivo                                     | Conflicto conocido antes de v5.7.2                                                                                        | Actualizar a DADman v5.7.2 o posterior                                                                                                                                                                                                                                                                                            |
| Corrupción de datos plegable con matrices > 1024 elementos                                                             | Error antes de v5.7.0                                                                                                     | Actualizar a DADman v5.7.0 o posterior                                                                                                                                                                                                                                                                                            |

---

## 9,4 Trueno y Conductor

_Se aplica a AX64, AX Center, Core 256 solamente. Saltar para hardware sólo Ethernet._

| Síntomas                                                                                            | Probable causa                                                                         | Remedios                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unidad que no aparece en la configuración de macOS Audio MIDI                                       | Extensión del sistema no permitida                                                     | Abre **Configuración del sistema > Privacidad y Seguridad**; permite la extensión de Digital Audio Dinamarca / NTP Technology A/S; reinicia                                                                                                                                                                          |
|                                                                                                     | macOS Sequoia: seguridad de accesorio reforzada                        | Establezca **Configuración del sistema > Privacidad y Seguridad > Accesorios** a **Automáticamente** o **Permitir siempre**. Ver [Ch. 3, Sección 3.7]                                                            |
|                                                                                                     | Controlador no instalado                                                               | Instala el controlador DAD Thunderbolt 3 de [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                           |
|                                                                                                     | Versión antigua del controlador que entra en conflicto con actualización de macOS      | Elimina el antiguo `DADDriverSetup.app` (arrastra a la papelera; aprueba la eliminación), luego reinstala el último controlador                                                                                                                                                                   |
| El dispositivo aparece en la configuración de Audio MIDI sin canales                                | Tasa de muestreo o número de canales no coincide                                       | Abre **DADDriverSetup** y verifica la configuración de la frecuencia de muestra y los canales coinciden con el formato esperado de tu DAW                                                                                                                                                                            |
| ASIO de Windows: contador de infrarrojos faltantes **IR perdidos** distinto de cero | Conflicto de interrupción del sistema                                                  | Aumentar el tamaño del búfer ASIO (512 o 1024 muestras); cerrar aplicaciones en segundo plano innecesarias; desactivar Wi-Fi                                                                                                                                                                      |
| ASIO de Windows: Alta **carga de PCIe**                                             | Demasiados canales configurados                                                        | Reduce la configuración de Canales en la configuración del controlador ASIO                                                                                                                                                                                                                                          |
| ASIO: Alta **latencia DPC**                                                         | Retrasos de programación de Windows por parte de controladores de terceros             | Utilice un analizador de latencia DPC para identificar el controlador ofensivo. Causas comunes: adaptadores inalámbricos, gestión de alimentación USB, antivirus. Habilitar plan de energía de alto rendimiento                                                      |
| macOS: DADman no puede comunicarse con la unidad sobre Thunderbolt                  | Problema de la pila de comunicación de Thunderbolt                                     | Actualizar el controlador DAD Thunderbolt 3 a v1.2.2 o posterior **y** actualizar Thunder\|Firmware del núcleo a v1.1.0.3 o posterior. Ambas actualizaciones son necesarias _(diciembre de 2024)_ |
| Detenciones de audio sobre Thunderbolt                                                              | Cable Trueno inferior a 20 Gbps                                                        | Reemplace el cable con un cable certificado Thunderbolt 3 con una puntuación mínima de 20 Gbps                                                                                                                                                                                                                       |
| Windows: controlador ASIO no visible en la aplicación de audio                      | Controlador no instalado                                                               | Instale el controlador DAD Thunderbolt 3 ASIO — es un instalador separado de DADman                                                                                                                                                                                                                                  |
| Tarjeta Dante Centro AX: sincronización externa de Dante no funciona                | Error en el firmware antes de v1.1.0.4 | Actualizar firmware de AX Center a v1.1.0.4 o posterior _(Enero 2025)_                                                                                                                                                                            |

---

## 9.5 Reloj y sincronización

| Síntomas                                                                                     | Probable causa                                                                         | Remedios                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Indicador de estado amarillo en una fila de entrada de pestaña Con                           | La pérdida de sincronización o la tasa de muestreo no coinciden en esa entrada digital | Verificar la frecuencia de muestreo del dispositivo fuente coincide con la unidad DAD. En la pestaña **Confes**, confirmar origen y tasa de muestra son correctos. Si esta entrada debe ser el reloj maestro, establezca **Fuente** a esa entrada (por ejemplo, MADI Coax, Dante, Word Clock) |
| Clics y ventanas emergentes en todo el audio                                                 | Unidad no bloqueada a un reloj estable                                                 | En la pestaña **Conf**, verificar que la fuente está establecida correctamente y la fuente seleccionada está activa y estable                                                                                                                                                                                                                    |
|                                                                                              | La red está sobrecargada afectando la estabilidad del reloj Dante                      | Colocar el tráfico de DADman y el audio de Dante en redes dedicadas separadas                                                                                                                                                                                                                                                                    |
| La entrada del reloj de palabra no se bloqueará                                              | Sincronización incorrecta                                                              | Estableció **Terminación de sincronización** a \*\*75 \*\* en la pestaña **Conf**                                                                                                                                                                                                                                                                |
|                                                                                              | cable de reloj de palabra demasiado largo o de mala calidad                            | Usa un caballo coaxial; la longitud máxima confiable es de aproximadamente 30 m                                                                                                                                                                                                                                                                  |
| La entrada MADI muestra el estado amarillo pero la frecuencia de la muestra aparece correcta | La tasa de fotogramas MADI no coincide                                                 | En la pestaña **Conf**, verifique la configuración de la **frecuencia de foto** (Legacy vs. High Speed) coincide con el dispositivo de envío. Ambos extremos de un enlace MADI deben usar la misma configuración de velocidad de fotogramas                                                   |
| "Adaptar a" no siguiendo los cambios de tasa de muestreo DAW                                 | Adaptar a la entrada incorrecta                                                        | Establece **Adaptar a** a la entrada digital conectada al DAW (por ejemplo, **Thunderbolt 3**)                                                                                                                                                                                                                                |
|                                                                                              | DAW no actualiza la velocidad de muestreo de audio central / ASIO del dispositivo      | Cerrar y reabrir la configuración del dispositivo de audio de DAW para forzar una actualización                                                                                                                                                                                                                                                  |

---

## Control de seguimiento 9,6

| Síntomas                                                                                                   | Probable causa                                                           | Remedios                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| La pestaña lun no muestra controles                                                                        | Ningún perfil de control cargado                                         | Carga un archivo `.dmprof` a través de **File > Open Profile…** o crea un nuevo perfil en **Settings > Monitoring Profile**                                                                                                                                                                       |
| Página de monitoreo en blanco en la superficie de control Avid o Avid                                      | DADman no vinculado a EuControl                                          | En la pestaña **Asignación** de EuControl, con DADman en primer plano, permite la asignación de monitoreo para DADman. Confirma que **Enable EuCon** está marcado en el menú **Configuración** de DADman                                                                          |
| EuCon: Nivel de sala de control no rehabilitado después de alternar Ref                    | Error antes de v5.8.2                    | Actualizar a DADman v5.8.2 build 2 o posterior                                                                                                                                                                                                                    |
| macOS: El menú de Talkback muestra un valor incorrecto en el diálogo Perfil de seguimiento | Error antes de v5.8.2                    | Actualizar a DADman v5.8.2 build 2 o posterior                                                                                                                                                                                                                    |
| El auricular no está siguiendo la selección del altavoz de la sala de control                              | Modo de seguimiento del auricular establecido en Cue en lugar de Maestro | En **Ajustes > Perfil de seguimiento**, ajusta el modo de monitor de salida de auriculares a **Maestro**; ajusta los altavoces de la sala de control a modo **Cue**. Ver [Ch. 8, Sección 8.2] |
| El botón Ref no tiene efecto                                                                               | Ningún nivel de referencia definido en el perfil de seguimiento          | En **Ajustes > Perfil de seguimiento**, introduzca el valor de nivel de referencia calificado para el conjunto de salida activo                                                                                                                                                                   |
| Controlar perfil corrupto en el siguiente guardado después de una carga cancelada                          | Error antes de v5.8.0                    | Actualizar a DADman v5.8.0 o superior; restaurar desde la copia de seguridad `.dmprof`                                                                                                                                                                            |

---

## 9.7 Reiniciar Procedimientos

Los intentos se reinician en el pedido listado — primero más suave.

### 9.7.1 Recargar Archivo de Configuración

Restaura los ajustes guardados sin afectar al hardware:

1. Ve a **Archivo > Abrir…** y selecciona el archivo `.dms` más reciente.
2. Confirme la actualización de todos los parámetros en la ventana de DADman.

### 9.7.2 Reinicio de fábrica vía DADman

> **PRECAUCIÓN:** Borra todas las configuraciones almacenadas en la unidad de hardware. Guarda un archivo `.dms` primero.

1. En la lista de dispositivos, haga clic derecho en la unidad (o utilice el botón Acción en macOS).
2. Seleccione **Reinicio de fábrica** y confirme cuando se le solicite.
3. Después de reiniciar la unidad (hasta 60 segundos), recarga el archivo `.dms` a través de **Archivo > Abrir…**.

### 9.7.3 Reiniciar IP del Panel frontal

Si la dirección IP de la unidad es desconocida o mal configurada y no se puede conectar a través de DADman:

- El botón **Reconfigurar** (al que se accede mediante un pequeño agujero en el panel trasero con un lápiz u objeto apuntado) restablece la unidad a su dirección IP predeterminada de fábrica cuando se presiona durante encendido.
- IP predeterminada de fábrica para la mayoría de hardware DAD: `10.0.7.20` — confirme en su guía de instalación de hardware.
- Después de reiniciar, vuelve a conectar a través de DADman y reconfigura a través de Lista de Dispositivos **> Configuración de Red**.

### Ciclo de potencia 9.7.4

Si la unidad no responde y no se puede restablecer a través de DADman:

1. En la lista de dispositivos DADman: haga clic derecho en la unidad **> Desconectar**.
2. Apaga la unidad de hardware al interruptor de enchufe.
3. Espere 10 segundos.
4. Enciende la unidad de nuevo.
5. Espere hasta 60 segundos para que el LED Listo muestre verde sólido.
6. La unidad reaparece en la lista de dispositivos automáticamente.

---

## 9.8 Problemas conocidos por Versión

| Síntomas                                                                                                  | Versiones afectadas                                                                            | Fijado en                                                                                                                |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Windows: DADman falla al iniciar (falta VCRUNTIME DLL)                 | Antes de v5.7.2                                                | v5.7.2 (Sep 2024)                                                     |
| macOS: Fallo al hacer doble clic en .dms en el Buscador                   | Antes de v5.8.0                                                | v5.8.0 (Dic 2024)                                                     |
| Perfil de seguimiento corrupto después de la carga cancelada                                              | Antes de v5.8.0                                                | v5.8.0 (Dic 2024)                                                     |
| macOS: Mostrar elementos de escalado                                                      | Antes de v5.8.0                                                | v5.8.0 (Dic 2024)                                                     |
| macOS: DADman no se volverá más frontal de la bandeja (Sonoma)         | Antes de v5.8.0                                                | v5.8.0 (Dic 2024)                                                     |
| macOS: Fallo de comunicación de Thunderbolt raro                                          | Antes de v5.8.0 + driver 1.2.2 | v5.8.0 + controlador 1.2.2 (Dic 2024) |
| Ventanas: Choque MIDI                                                                     | Antes de v5.8.1                                                | v5.8.1 b6 (mayo 2025)                                                 |
| macOS: Problemas gráficos en pantallas escaladas con grandes ventanas                     | Antes de v5.8.1                                                | v5.8.1 b6 (mayo 2025)                                                 |
| EuCon: Nivel de sala de control no rehabilitado después de alternar Ref                   | Antes de v5.8.2                                                | v5.8.2 b2 (Jan 2026)                                                  |
| macOS: Menú de Talkback incorrecto                                                        | Antes de v5.8.2                                                | v5.8.2 b2 (Jan 2026)                                                  |
| Ventanas: Bloqueo de firewall BitDefender                                                 | Antes de v5.7.2                                                | v5.7.2 (Sep 2024)                                                     |
| **Firmware:** AX Center ADC que no pasa audio (error de temporización) | Antes del firmware v1.1.0.4                    | v1.1.0.4 (Jan 2025)                                   |
| **Firmware:** AX Center Dante Card sincronización externa incorrecta                      | Antes del firmware v1.1.0.4                    | v1.1.0.4 (Jan 2025)                                   |
| **Firmware:** Error de fase 8 de la tarjeta DA                                            | Antes del firmware v1.0.6.3                    | v1.0.6.3 (Sep 2024)                                   |
| **Firmware:** ADAT Canal 3 a 88.2/96 kHz                                  | Antes del firmware v1.0.6.3                    | v1.0.6.3 (Sep 2024)                                   |
| **Firmware:** Retraso no aplicado en canales > 16                                         | Antes del firmware v1.0.6.3                    | v1.0.6.3 (Sep 2024)                                   |
| **Firmware:** canales 3G SDI no habilitados después de encender                           | Antes de Familia 1 firmware v2.3.6.1           | v2.3.6.1 (Dic 2022)                                   |

**Abrir problema conocido (a partir de v5.8.2 build 2):**

| Síntomas                                                                                                                       | Estado                         | Solución                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| macOS Sequoia (v15): DADman no puede conectarse a dispositivos de red al primer lanzamiento | Abrir — corregir en desarrollo | Cerrar sesión y volver a iniciar sesión en la cuenta de usuario de macOS. Las conexiones de Trueno no se ven afectadas |

---

## 9.9 Obteniendo soporte

**Portal de soporte para DAD**  
[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)  
Base de conocimientos, descargas de firmware, bulletins técnicos y foro comunitario.  
Se requiere una cuenta gratuita.

**Email**  
support@ntp.dk

**Al contactar con el soporte, incluye:**

1. **DADman > Acerca de DADman > Copiar información** salida _(v5.7.2+)_
2. Modelo de unidad de hardware y versión del firmware (visible en la lista de dispositivos)
3. Descripción de la viña, cuando comenzó, y qué cambió antes de que apareciera
4. Cualquier mensaje de error mostrado en la pantalla
5. Salida de registro relevante (ver abajo)

### 9.9.1 accediendo a los registros de DADman — macOS

DADman escribe entradas de registro a través del sistema de registro unificado macOS. Los registros no se almacenan como archivos de texto plano; utilice los siguientes métodos para recolectarlos.

**Console.app (método más simple):**

1. Abre **Console.app** Launplications > Utilities > Console).
2. En el campo de búsqueda, escribe `DADman` y presiona Devolución.
3. Reproduce el problema. La consola muestra entradas de registro de DADman en tiempo real.
4. Seleccione las entradas relevantes, haga clic derecho y elija **Copia** para pegar en un ticket de soporte.

**Terminal (intervalo de tiempo de exportación):**

```bash
log show --predicate 'process == "DADman"' --info --last 1h > ~/Desktop/dadman-log.txt
```

Ajusta `--last 1h` según sea necesario (por ejemplo, `--last 30m`, `--last 2h`). El archivo resultante puede ser adjuntado a un ticket de soporte.

**Crash reports:**  
If DADman crashed, a crash report is written to:

```
~/Biblioteca/Registros/Informes de Diagnóstico/
```

Busca archivos llamados `DADman_<date>_<hostname>.ips` o `DADman_<date>.crash`. Estos también son visibles en Console.app bajo **informes de fallos**.

**Registros de conductor TB3:**  
Para recolectar entradas del registro del controlador Thunderbolt:

```bash
log show --predicate 'process == "DADThunderboltDriver" O subsistema CONTAINS "ntp"' --info --last 1h > ~/Desktop/tb3-driver-log.txt
```

### 9.9.2 accediendo a los registros de DADman — Windows

**Windows Event Viewer:**

1. Abrir **visor de eventos** (Iniciar → buscar "visor de eventos").
2. Vaya a **Registros de Windows > Aplicación**.
3. Haga clic en **Filtrar registro actual…** e ingrese `DADman` en el campo **orígenes de eventos**.
4. Copie o exporte las entradas filtradas para el ticket de soporte.

**Carpeta de datos de aplicación:**  
DADman almacena ajustes y puede almacenar archivos de registro en:

```
%AppData%\NTecnología de TP\DADman\
```

Abre esta ruta en el Explorador de Windows (`Gana + R` → pega la ruta → Entrar) e incluye cualquier archivo `.log` que se encuentre allí al contactar con el soporte.

> **NOTA:** Las rutas exactas de los archivos de registro anteriores han sido verificadas para instalaciones estándar. Si DADman fue instalado en una ubicación no predeterminada o ejecutado bajo una cuenta de usuario diferente, las rutas pueden diferir. El soporte DAD puede proporcionar orientación si estas ubicaciones no contienen los archivos esperados.

---

_[Pendiente de Ingeniería DAD:]_  
_— Catálogo de mensajes de error (texto de alerta en pantalla → causar → remedio)_  
_— Tablas de estado LED frontales por modelo de hardware_
