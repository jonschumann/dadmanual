---
title: "Capítulo 3 — Instalación"
sidebar_label: "Ch. 3 — Instalación"
sidebar_position: 5
---

# Capítulo 3 — Instalación

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.1.6  
> **TB3 Driver version covered:** Latest — see Download Centre at digitalaudiosupport.com  
> **Chapter status:** Draft v0.1 — Pending technical review by DAD engineering  
> **Last updated:** June 2026

---

## En este capítulo

Este capítulo cubre todo lo necesario para instalar y configurar DADman y su software de controlador asociado en su computadora. Está organizado para la instalación por primera vez; si está actualizando una instalación existente, consulte [Capítulo 10, Sección 10.1 — Actualizar DADman y Firmware].

| Sección             | Cubos                                                               | Relevante para                                    |
| ------------------- | ------------------------------------------------------------------- | ------------------------------------------------- |
| 3.1 | Resumen de instalación                                              | Todos los usuarios                                |
| 3.2 | Obteniendo el software                                              | Todos los usuarios                                |
| 3.3 | Instalando DADman                                                   | Todos los usuarios                                |
| 3.4 | Instalar el controlador Thunderbolt 3                               | AX64, AX Center, Core 256, solo serie Avid MTRX   |
| 3.5 | Configurar el controlador Thunderbolt 3                             | AX64, AX Center, Core 256, solo serie Avid MTRX   |
| 3.6 | macOS Sequoia: configuración de seguridad adicional | macOS 15 (Sequoia) y posterior |
| 3.7 | Configurando la conexión de red                                     | Todos los usuarios conectados a Ethernet          |
| 3.8 | Verificando la instalación                                          | Todos los usuarios                                |

---

## 3.1 Vista general de instalación

### 3.1.1 Componentes de Software

DADman y el controlador DAD Thunderbolt 3 son **dos aplicaciones independientes y separadas**. Si necesita ambos — o sólo DADman — depende de cómo se conecte su hardware a la computadora.

| Componente                        | Propósito                                                                                                                                                                                | Requerido para                                       |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **DADman**                        | Configura y controla todas las unidades de hardware conectadas DAD, NTP y Avid sobre Ethernet                                                                                            | Todo el hardware soportado                           |
| **Controlador DAD Thunderbolt 3** | Expone la interfaz Thunder\|Core como un dispositivo de audio central (macOS) o dispositivo ASIO (Windows) para uso de DAW y aplicaciones de audio | Sólo productos AX64, AX Center, Core 256 y Avid MTRX |

> **NOTA:** El controlador Thunderbolt 3 proporciona el _transporte_ de audio entre tu computadora y el hardware — tu DAW lo ve como una interfaz de audio. DADman proporciona la capa _control_ — enrutamiento, ganancia, monitorización y configuración. Ambos pueden ser instalados y ejecutados en el mismo ordenador simultáneamente sin conflicto.

Si su hardware sólo se conecta al ordenador a través de Ethernet (por ejemplo, una unidad AX32, DX32R o Penta), sólo necesita DADman.

### 3.1.2 Topología de conexión

DADman se comunica con todas las unidades conectadas a través de la red de su computadora utilizando el protocolo Ethernet (IP), independientemente de si esas unidades también se conectan a través de Thunderbolt 3. Consulte [Sección 3.7 — Configurar la conexión de red] para obtener orientación antes de la instalación.

---

## 3.2 Obteniendo el Software

### 3.2.1 Usuarios de hardware de DAD y NTP

Descargue DADman y el controlador Thunderbolt 3 desde el portal de soporte DAD:

**[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)**

Se requiere una cuenta gratuita de Tecnología DAD / NTP para acceder al Centro de Descarga. Si no tienes una cuenta:

1. Vaya al portal de soporte y seleccione **Crear cuenta**.
2. Complete el formulario de inscripción.
3. Después de verificar tu dirección de correo electrónico, inicia sesión y navega a **Download Centre**.
4. Localice la entrada de DADman para su sistema operativo y descargue el instalador.
5. Si su hardware es un producto Thunder\|Core (AX64, AX Center o Core 256), también descargue el controlador Thunderbolt 3 para su sistema operativo.

> **NOTA:** Comprueba siempre las notas de la versión en el Centro de descargas antes de instalar. Las notas de lanzamiento documentan las versiones comprobadas del sistema operativo, cualquier problema conocido con nuevas versiones del sistema operativo, y los requisitos de compatibilidad del firmware para esa versión de DADman.

### 3.2.2 Usuarios de Hardware Avid

Si está usando DADman con un Avid MTRX, MTRX II, o MTRX Studio:

1. Inicie sesión en su **Cuenta Avid Master** en [https://avid.com](https://avid.com).
2. Navega a tus descargas y localiza la versión de DADman aprobada para tu hardware Avid.
3. Descargue el instalador desde su cuenta Avid.

> **NOTA:** Las versiones de DADman aprobadas por Avid, pueden diferir de la última versión disponible en el portal de soporte para DAD. Utilice siempre la versión de la cuenta Avid Master para el hardware Avid para asegurar la compatibilidad.

---

## 3.3 Instalando DADman

### 3.3.1 macOS

**Antes de empezar:** Asegúrate de haber iniciado sesión en una cuenta con privilegios de Administrador. Salir de cualquier aplicación de audio que pueda estar ejecutándose.

1. Localice el archivo descargado del instalador de DADman (formato `.pkg`) y haga doble clic en él para iniciar el instalador.
2. Lea el acuerdo de licencia y haga clic en **Continuar**, luego en **Acuerdo** para aceptar.
3. Click **Install**. Cuando se le solicite, introduzca su contraseña de administrador y haga clic en **Instalar software**.
4. Haga clic en **Cerrar** cuando se complete la instalación.
5. Vaya a la carpeta **Aplicaciones** y confirme que **DADman.app** está presente.

DADman está instalado. No lo inicie aún si necesita instalar el controlador Thunderbolt 3 — proceda a [Sección 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

Si su hardware se conecta únicamente a través de Ethernet, ahora puede iniciar DADman. Proceda a [Sección 3.7 — Configurar la conexión de red](#37-configuring-the-network-connection).

### 3.3.2 Windows

**Antes de empezar:** Asegúrate de haber iniciado sesión en una cuenta con privilegios de Administrador. Salir de cualquier aplicación de audio que pueda estar ejecutándose.

1. Localice el archivo descargado del instalador de DADman (formato `.exe` o `.msi`) y haga doble clic en él.
2. Si aparece un aviso de control de cuentas de usuario, haga clic en **Sí** para permitir que el instalador se ejecute.
3. Siga las instrucciones del instalador, haciendo clic en **Siguiente** en cada paso.
4. Haga clic en **Instalar** para iniciar la instalación.
5. Haga clic en **Finalizar** cuando se complete la instalación.
6. Confirme que DADman aparece en su menú Inicio.

Si su hardware se conecta sólo a través de Ethernet, proceda a [Sección 3.7](#37-configuring-the-network-connection). Si necesita el controlador Thunderbolt 3, proceda a [Sección 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

---

## 3.4 Instalando el Driver Trueno 3 (Sólo Productos Principales)

> **NOTA:** Esta sección sólo se aplica si su hardware es un producto AX64, AX Center, Core 256 o Avid MTRX. Si su hardware se conecta sólo a la computadora a través de Ethernet, pase a [Sección 3.7](#37-configuring-the-network-connection).

El controlador DAD Thunderbolt 3 permite que tu interfaz de Thunder\|Core aparezca como un dispositivo de audio en macOS Core Audio (visible en **Configuración de Audio MIDI**) o como un dispositivo ASIO en Windows, poniéndola a disposición de tu DAW y de otras aplicaciones de audio. Instalar el controlador no afecta la capacidad de DADman de comunicarse con la unidad sobre Ethernet — estas son rutas de conexión independientes.

> **NOTA:** No conecte su hardware de Thunder\|Core al puerto Thunderbolt de la computadora hasta que el procedimiento de instalación del controlador le indique que lo haga.

### 3.4.1 macOS

**Antes de empezar:** Asegúrate de que estás ejecutando macOS 11 Big Sur o posterior. Asegúrese de que DADman v5.6.7.1 o posterior ya está instalado (vea [Sección 3.3.1](#331-macos)).

1. Localice el instalador descargado del controlador Thunderbolt 3 (formato `.pkg`) y cópielo en su Escritorio.
2. Haga doble clic en el archivo `.pkg` para iniciar el instalador.
3. Siga las instrucciones en pantalla. Haga clic en **Siguiente**, luego en **Instalar**.
4. Introduzca su contraseña de administrador cuando se le solicite y haga clic en **Instalar software**.
5. Si esta es la primera vez que el controlador ha sido instalado en esta computadora, macOS mostrará una notificación **"Bloqueado de extensión del sistema"**.
   - Haga clic en **Abrir preferencias de seguridad** (o en **Abrir ajustes del sistema** en macOS Ventura y posteriores).
6. En el panel **Privacidad y Seguridad**:
   - Haga clic en el icono de bloqueo en la parte inferior de la ventana e introduzca su contraseña para desbloquear la configuración.
   - Haga clic en **Permitir** junto a la extensión bloqueada de Digital Audio Dinamarca / NTP Technology.
7. Cuando se le solicite, haga clic en **Reiniciar** para reiniciar la computadora.

> **NOTA:** La notificación "System Extension Blocked" es una parte normal de la instalación de primera vez en macOS. No es un error. La extensión debe ser permitida antes de que el controlador funcione.

8. Después de reiniciar, abre **DADDriverSetup** desde tu carpeta de aplicaciones.
9. Conecte su hardware Thunder\|Core al puerto de la computadora Thunderbolt 3 o USB-C mediante un cable de 20 Gbps.

El controlador está instalado. Proceder a [Sección 3.5.1](#351-macos-daddriversetup) para configurar la configuración del controlador.

> **NOTICE — macOS Sequoia (15) y posteriores:** Apple ha reforzado significativamente los permisos de seguridad de los accesorios de Thunderbolt comenzando con macOS Sequoia. Se requieren pasos adicionales. Vea [Sección 3.6 — macOS Sequoia: Configuración de seguridad adicional](#36-macos-sequoia-additional-security-configuration) antes de proceder.

### 3.4.2 Windows

**Antes de empezar:** Asegúrese de que está ejecutando Windows 10 o Windows 11 (64 bits). Asegúrese de que DADman v5.6.7.1 o posterior ya está instalado (vea [Sección 3.3.2](#332-windows)).

1. Localice el instalador descargado del controlador Thunderbolt 3 (formato `.msi`) y cópielo en su Escritorio.
2. Haga doble clic en el archivo `.msi` para iniciar el instalador.
3. Si aparece un aviso de control de cuentas de usuario, haga clic en **Sí**.
4. Siga las instrucciones en pantalla. Haga clic en **Siguiente**, luego en **Instalar**.
5. Haga clic en **Finalizar** cuando se complete la instalación.
6. Conecte su hardware Thunder\|Core al puerto de la computadora Thunderbolt 3 o USB-C mediante un cable de 20 Gbps.

El controlador está instalado. Proceda a [Sección 3.5.2](#352-windows-asio-configuration) para configurar el controlador en su aplicación de audio.

---

## 3.5 Configurando el controlador de Thunderbolt 3

### 3.5.1 macOS — DADDriverSetup {#351-macos-daddriversetup}

La aplicación **DADDriverSetup** controla el número de canales y la selección de dispositivos para el controlador de audio Thunderbolt 3 en macOS. Los cambios realizados aquí se reflejan inmediatamente en la **Configuración de Audio MIDI** y son visibles para cualquier aplicación compatible con el audio del núcleo en el ordenador.

> **NOTA:** La tasa de muestreo del controlador de audio Thunderbolt es configurable tanto desde DADDriverSetup como directamente desde DADman. En funcionamiento normal, no necesita abrir DADDriverSetup para cambiar la tasa de muestreo.

\*\*En macOS, la única razón para abrir DADDriverSetup es cambiar el número de canales Thunderbolt presentados al host. \* Todos los demás parámetros se pueden establecer desde dentro de DADman.

> **NOTICE — Intel vs. Apple Silicon Macs:** Apple M1 y posteriores computadoras manejan 256 canales bidireccionales de Thunderbolt sin dificultad. En Macs basados en Intel, el rendimiento del sistema puede beneficiarse de reducir el recuento de canales si su flujo de trabajo no requiere los 256 canales completos — particularmente a mayores velocidades de muestreo o con grandes cargas de CPU.

**Para cambiar la cuenta del canal:**

1. Abre **DADDriverSetup** desde tu carpeta de aplicaciones.
2. Asegúrese de que su hardware de Thunder\|Core está conectado y encendido.
3. Configurar los siguientes ajustes:

| Parámetro                    | Opciones                                                                                                       | Notas                                                                                                                                                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Selección de dispositivo** | Lista desplegable de Trueno conectado\|Unidades del núcleo                                                     | Si varias unidades están encadenadas a cenizas en el bus Thunderbolt 3, cada unidad puede ser seleccionada individualmente                                                                                                                                 |
| **Tasa de muestra**          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | También configurable desde DADman; los cambios aquí se reflejan inmediatamente en el Audio Principal                                                                                                                                                       |
| **Canales**                  | 16, 64, 128, 256 (bidireccional)                                                            | Todas las interfaces del núcleo soportan 256 canales bidireccionales en hardware. Los Macs M1 y posteriores manejan 256 canales sin problema. En Intel Macs, reducir este valor reduce la carga de la CPU. |

> **NOTA:** La configuración de los canales controla cuántos canales son visibles para el Audio Principal y tu DAW. No afecta el número de canales disponibles internamente dentro de la matriz de ruta de DADman.

4. Después de realizar los cambios, abrir **Configuración de Audio MIDI** (**Aplicaciones > Utilidades > Configuración de Audio MIDI**) para confirmar que la interfaz de DAD Thunder\|Core aparece con el formato correcto. El formato mostrado debe coincidir con el número de canales y la velocidad de muestra configurada en DADDriverSetup.

> **TIP:** Si DADDriverSetup abre y tu unidad de tronco conectada aparece en el desplegable Selección de dispositivo, el controlador Thunderbolt está instalado y funcionando correctamente. Esta es la forma más rápida de confirmar la operación del controlador en macOS sin necesidad de abrir un DAW.

### 3.5.2 Windows — Configuración ASIO {#352-windows-asio-configuration}

El controlador ASIO Thunderbolt 3 está configurado desde el diálogo de configuración ASIO de tu aplicación de audio.

**Para configurar el driver:**

1. Abre tu DAW o aplicación de audio.
2. En la configuración del dispositivo de audio, seleccione **Dinamarca de audio digital** como controlador ASIO.
3. Abrir el diálogo de configuración ASIO. Configurar los siguientes parámetros:

| Parámetro                    | Opciones                                                                                                       | Notas                                                                                                                                                                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Selección de dispositivo** | Lista desplegable de Trueno conectado\|Unidades del núcleo                                                     | Seleccione la unidad a usar como dispositivo ASIO primario                                                                                                                                                                           |
| **Tamaño del búfer**         | 16, 32, 64, 256, 512, 1024 muestras                                                                            | Comience con un valor grande (512 o 1024) para asegurar una ruta de audio estable; reduzca una vez que el sistema sea estable                                                                                     |
| **Tasa de muestra**          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Controlado por su aplicación de audio; listado aquí para referencia                                                                                                                                                                  |
| **Canales**                  | 16, 64, 128 (bidireccional)                                                                 | El controlador ASIO Thunderbolt de Windows soporta un máximo de 128 canales bidireccionales. Reduce desde el máximo, si no todos los canales son necesarios para mejorar el rendimiento del sistema. |

> **NO:** Si el diálogo de configuración de ASIO se abre y tu unidad Thunder\|Core aparece en la lista desplegable Selección de dispositivos, el controlador Thunderbolt ASIO está instalado y funcionando correctamente. Esta es la forma más rápida de confirmar la operación del controlador en Windows sin necesidad de iniciar la reproducción de audio.

**Diagnóstico de controladores: sólo para Windows:**

La ventana de configuración del controlador ASIO incluye tres indicadores de rendimiento en tiempo real. Controlar estos problemas durante la configuración inicial y si experimenta problemas de audio:

| Indicador                                                               | Valor aceptable                                                              | Si está fuera de rango                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **IRs perdidos** (interrupciones de audio perdidas)  | 0                                                                            | Las interrupciones de audio están siendo eliminadas por procesos de sistema Windows que compiten entre sí. Aumentar el tamaño del búfer o reducir la carga de la CPU en segundo plano.                                                                                                                                              |
| **Carga de PCIe**                                                       | Porcentaje bajo; escalas con conteo de canales                               | Los valores altos indican que el bus PCIe está saturado. Reducir el recuento de canales o investigar otros consumidores de ancho de banda de PCIe.                                                                                                                                                                                  |
| **Latencia DPC** (llamada de Procedimiento Aplazado) | Baja (< ~500 μs) | La programación de interrupciones del sistema operativo de Windows está introduciendo latencia. Utilice una herramienta de analizador de latencia DPC para identificar el controlador ofensivo. Desactivar Wi-Fi, administración de energía USB, u otros controladores que generen interrupciones como primer paso. |

> **NOTA:** Inicie con un tamaño de búfer grande (512 o 1024 muestras) al configurar por primera vez el controlador ASIO. Una vez que el sistema está confirmado que se está ejecutando sin interrupciones perdidas, puede reducir el tamaño del búfer al valor estable más bajo de su flujo de trabajo.

---

## 3.6 macOS Sequoia: Configuración de seguridad adicional

> **Se aplica a:** macOS 15 (Sequoia) y todas las macOS posteriores lanzan  
> **Fuente:** Boletín de soporte técnico DAD, enero de 2026

Iniciando con macOS Sequoia, Apple ha reforzado significativamente los controles de seguridad que rigen las conexiones Thunderbolt y accesorios USB. Este cambio afecta a todas las interfaces Thunderbolt de todos los fabricantes — no es específico del hardware o software DAD.

Si está instalando en macOS Sequoia o posterior, realice los siguientes pasos **además de** la instalación estándar del controlador en [Sección 3.4.1](#341-macos).

### 3.6.1 Ajuste de Permisos Accesorios

1. Abre **Configuración del sistema** menú desplegable > Configuración del sistema).
2. Vaya a **Privacidad y Seguridad**.
3. Desplácese hasta la sección **Accesorios**.
4. Ajuste el permiso de conexión de accesorio a dos:
   - **Permitir automáticamente la conexión de nuevos accesorios** - recomendado para computadoras de estudio que no dejan un entorno controlado
   - **Permitimos siempre**: máximo permiso; apropiado si conectas varios dispositivos Thunderbolt diferentes
5. Cuando se le solicite, apruebe el cambio con su contraseña o Touch ID.

### 3.6.2 Reinstalando el controlador en Sequoia

Si tienes una versión previamente instalada del controlador Thunderbolt 3 y estás actualizando a una nueva versión en macOS Sequoia:

> **AVISO:** El modelo de seguridad de Apple requiere eliminar el controlador antiguo antes de instalar el nuevo. Simplemente ejecutar el nuevo instalador sobre la instalación existente no dará como resultado un controlador que funcione correctamente en Sequoia.

1. Localice **DADDriverSetup.app** en su carpeta de aplicaciones.
2. Muévelo a la papelera (**clic derecho > Mover a la papelera** o arrastre a la papelera).
3. macOS mostrará una advertencia indicando que la extensión del sistema será eliminada. Este es el resultado esperado y deseado — haga clic para confirmar la eliminación.
4. Descarga el último controlador Thunderbolt 3 desde el portal de soporte DAD en [https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com).
5. Instala el nuevo controlador siguiendo el procedimiento en [Sección 3.4.1](#341-macos).
6. Cuando el instalador termine, macOS mostrará un diálogo pidiéndote que apruebe la nueva conexión Thunderbolt. Haga clic en **Permitir** (o equivalente) y permita que la computadora se reinicie.

Después de reiniciar, el hardware de Thunder\|Core debería conectarse correctamente.

### 3.6.3 macOS Sequoia — Problema de Conexión de Red Conocida

> **Afectos:** Todas las versiones de DADman en macOS Sequoia; se espera que se resuelvan en una futura actualización de DADman  
> **Notada versión:** A partir de DADman v5.8.1.6

En macOS Sequoia, DADman puede fallar en conectarse a dispositivos de la red cuando la aplicación se inicia por primera vez. Los dispositivos de audio conectados a través de Thunderbolt 3 no se ven afectados por este problema.

**Trabajo:**

1. Lanzar DADman y dejarlo funcionando aunque no aparezcan dispositivos en la lista de dispositivos.
2. Cerrar sesión de tu cuenta de usuario de macOS (**menú de Apple > Cerrar sesión**).
3. Vuelve a iniciar sesión en tu cuenta de usuario macOS.
4. DADman se conectará con éxito a dispositivos de red.

> **NOTA:** Configurar DADman para que se ejecute automáticamente al iniciar sesión elimina la necesidad de realizar esta solución manualmente en cada arranque. Consulte [Capítulo 8 — Características avanzadas, Sección 8.X — Configurar DADman para que se ejecute en el arranque del sistema].

---

## 3.7 Configurando la conexión de red

### 3.7.1 Vista general de red

DADman se comunica con todas las unidades conectadas a través de Ethernet utilizando el protocolo IP. Esto incluye unidades que también se conectan al ordenador a través de Thunderbolt 3 — ambas rutas de conexión están activas simultáneamente y sirven diferentes propósitos (Thunderbolt transporta audio; Ethernet transporta datos de control).

DADman utiliza la red de su ordenador para descubrir y comunicarse con las unidades de hardware. Los ajustes de cada unidad se almacenan en la propia unidad; DADman lee y escribe esos ajustes sobre la conexión de red. Si se pierde la conexión de red, DADman pierde el control de la unidad, pero el audio pasa por la unidad sin interrupción.

### 3.7.2 Red dedicada fuertemente recomendada

> **NOTA: Aislamiento de red:** Para operaciones fiables, DAD recomienda utilizar una **red Ethernet dedicada** para el control de DADman. separados de su red general de estudios o instalaciones. Al compartir la red de control con Audio over IP (Dante, AES67), EuControl, o el tráfico general de oficina/internet introduce el riesgo de que el audio y el control se abandonen.

Topología de red recomendada para una instalación típica de estudio:

| Red                       | Propósito                         | Conexión con el ordenador                         |
| ------------------------- | --------------------------------- | ------------------------------------------------- |
| Red de control dedicada   | DADman ↔️ unidades de hardware    | Puerto Ethernet dedicado / USB–Adaptador Ethernet |
| Red de audio Studio/IP    | Transporte de audio Dante / AES67 | Puerto de Ethernet dedicado                       |
| Oficina / red de internet | Uso general del ordenador         | Wi-Fi o tercer puerto Ethernet                    |

Un simple sistema de dos unidades (una computadora + una unidad de hardware) puede usar una conexión Ethernet directa con un solo cable entre el puerto Ethernet de la computadora y el puerto de red de la unidad — no es necesario cambiar si ambos están configurados en la misma subred.

### 3.7.3 Configuración de dirección IP

DADman descubre unidades por dirección IP. Las unidades pueden configurarse con una dirección IP estática o con una dirección asignada por DHCP, dependiendo de su entorno de red.

**Para configuraciones simples de red dedicada** (no servidor DHCP en la red de control), configure direcciones IP estáticas:

| Dispositivo                                | Ejemplo dirección IP                                         | Máscara de subred                                             |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Ordenador (control NIC) | 192.168.1.1  | 255.255.255.0 |
| Unidad de hardware 1                       | 192.168.1.10 | 255.255.255.0 |
| Unidad de hardware 2                       | 192.168.1.11 | 255.255.255.0 |

Las direcciones IP se establecen en la unidad de hardware usando DADman, la pantalla del panel frontal de la unidad, o una interfaz del navegador web, dependiendo del modelo de hardware. Consulte la guía de instalación de su unidad de hardware específica para obtener instrucciones sobre cómo establecer su dirección IP.

> **NOTA:** Después de cambiar la dirección IP de una unidad de hardware, debe actualizar la lista de dispositivos de DADman para reflejar la nueva dirección antes de que se restablezca la conexión.

**Para redes de instalación con un servidor DHCP:** Las unidades pueden ser configuradas para usar DHCP. Sin embargo, si cambian las ligas DHCP, DADman perderá el seguimiento de las unidades en su dirección anterior. Para evitar esto se recomienda asignar reservas DHCP (mapeo fijo MAC-to-IP) en el interruptor o enrutador.

---

## 3.8 Verificando la instalación

Una vez que DADman y (si aplica) el controlador Thunderbolt 3 están instalados y la red está configurada, realizar las siguientes comprobaciones para confirmar que la instalación es correcta antes de proceder a [Capítulo 6 — Comenzar].

### 3.8.1 Verificando DADman

1. Inicie **DADman** desde su carpeta de aplicaciones (macOS) o menú de inicio (Windows).
2. Espere hasta 30 segundos para que se complete el descubrimiento del dispositivo.
3. Confirme que sus unidades de hardware aparecen en la **Lista de dispositivos** en la parte superior de la ventana de DADman.
4. Confirme que la versión actual del firmware de la unidad se muestra y se ajusta a sus expectativas.

Si no aparecen dispositivos, consulte [Capítulo 9 — Resolución de problemas, Sección 9.2 — Problemas de red y conectividad].

### 3.8.2 Verificación del Driver Thunderbolt 3 (macOS)

1. Abre **Configuración de Audio MIDI** (**Aplicaciones > Utilidades > Configuración de Audio MIDI**).
2. Confirme que la interfaz **DAD Thunder\|Core** aparece en la lista de dispositivos de la izquierda.
3. Confirme que el formato mostrado (por ej., "256 ch, 48000 Hz") coincide con la configuración configurada en DADDriverSetup.

Si la interfaz no aparece, confirmar:

- La unidad está encendida y conectada mediante un cable Thunderbolt de 20 Gbps.
- La extensión del sistema estaba permitida en **Privacidad y Seguridad** (ver [Sección 3.4.1](#341-macos), paso 6).
- Si en macOS Sequoia: el permiso de accesorios está configurado correctamente (ver [Sección 3.6.1](#361-setting-accessory-permissions)).

### 3.8.3 Verificación del controlador de Thunderbolt 3 (Windows)

1. Abre tu DAW o aplicación de audio.
2. En la configuración del dispositivo de audio, confirma que **Dinamarca de audio digital** es seleccionable como el controlador ASIO.
3. Abre el diálogo de configuración de ASIO y confirma que tu dispositivo aparece en el menú desplegable Selección de dispositivos.
4. Confirme que el contador **IRs perdidos** lee **0** después de unos segundos de operación inactiva.

---

## Resumen de archivos instalados

| Archivo / Aplicación      | Plataforma | Ubicación                            | Propósito                                                                           |
| ------------------------- | ---------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| `DADman.app`              | macOS      | `/Aplicaciones/`                     | Aplicación de control principal                                                     |
| `DADman.exe`              | Ventanas   | `C:\Archivos de programa\DADman\` | Aplicación de control principal                                                     |
| `DADDriverSetup.app`      | macOS      | `/Aplicaciones/`                     | Configuración del controlador Thunderbolt 3                                         |
| Controlador DAD ASIO      | Ventanas   | Instalado vía `.msi`                 | Controlador de audio ASIO para uso DAW                                              |
| Extensión del sistema DAD | macOS      | Sistema — no accesible al usuario    | Extensión de Kernel que permite el dispositivo de audio de 3 núcleos de Thunderbolt |

---

## Referencias cruzadas

- **Capítulo 1 — Introducción:** Resumen de Architectura; comprensión de cómo se comunica DADman, el controlador TB3 y la red
- **Capítulo 2 — Requerimientos del sistema:** Compatibilidad del sistema operativo y especificaciones mínimas de hardware
- **Capítulo 6 — Empezando:** Primeros pasos después de la instalación — conectándose a su consola y verificando la señal
- **Capítulo 9 — Resolución de problemas:** Pasos de diagnóstico si la instalación no se completa con éxito o si no se descubren dispositivos
- **Capítulo 10 — Mantenimiento:** Actualizando DADman y firmware

---

_[Marcador de posición: figuras a ser insertadas — Capturas de pantalla de instalación del controlador TB3 (macOS y Windows), ventana de configuración de DADDriverSetup, Configuración de audio MIDI mostrando la interfaz DAD, pantalla de privacidad y seguridad de macOS, Windows ASIO (menú de Windows]_

_[Pendiente de Ingeniería DAD: referencia cruzada del procedimiento de actualización del firmware, instrucciones de dirección IP confirmadas por modelo de hardware]_
