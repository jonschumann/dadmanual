---
title: "Capítulo 5 — Flujo de señales y archivo"
sidebar_label: "Ch. 5 — Flujo de señal"
sidebar_position: 7
---

# Capítulo 5 — Flujo de señales y archivo

> **Documento:** Manual de usuario de DADman  
> **Versión de software cubierta:** DADman v5.8.2 build 2  
> **Estado del capítulo:** Borrador v0. — Diagramas de bloque y cifras de topología pendientes; revisión técnica pendiente por ingeniería DAD  
> **Última actualización:** junio de 2026

---

## En este capítulo

| Sección             | Cubos                                           | Relevante para     |
| ------------------- | ----------------------------------------------- | ------------------ |
| 5.1 | Arquitectura de control basada en Ethernet      | Todos los usuarios |
| 5.2 | Lista de dispositivos                           | Todos los usuarios |
| 5.3 | Recomendaciones de red                          | Todos los usuarios |
| 5.4 | Dirección IP                                    | Todos los usuarios |
| 5.5 | Resumen de velocidad de relojamiento y muestreo | Todos los usuarios |
| 5.6 | Tasa de muestreo y capacidad de canal           | Todos los usuarios |

---

## 5.1 Arquometría de Control Ethernet-Based

DADman se comunica con todas las unidades de hardware conectadas a través de Ethernet utilizando el protocolo TCP/IP. Esto se aplica a todo el hardware soportado, incluidas las unidades que también se conectan a través de Thunderbolt 3. La conexión Ethernet sólo lleva datos de control (cambios de configuración, monitorización de estado, medida); el audio es llevado por separado por MADI, Dante, AES3 o Thunderbolt 3 dependiendo del hardware.

Debido a que DADman utiliza la red Ethernet estándar, una computadora que ejecuta DADman puede controlar varias unidades simultáneamente, siempre que todas sean accesibles en la misma red. Las unidades aparecen en la **Lista de Dispositivos** de DADman de izquierda a derecha, ordenadas por su número de ID unitario.

_[Placeholder: diagrama de topología de sistema — computadora corriendo DADman conectado a un interruptor de red, con múltiples unidades de hardware DAD en la misma subred Ethernet; Cable de tornillo de trueno que se muestra por separado para las unidades de trineo\|núcleo]_

### 5.1.1 Caminos de comunicación dual para el Trueno | Hardware del núcleo

Una unidad de núcleo conectada a una computadora utiliza dos rutas de comunicación simultáneas e independientes:

| Ruta           | Protocol       | Propósito                                                                        |
| -------------- | -------------- | -------------------------------------------------------------------------------- |
| **Ethernet**   | TCP/IP         | Control de DADman — enrutamiento, ganancia, configuración                        |
| **Tornillo 3** | PCIe sobre TB3 | Transporte de audio — la interfaz visible para tu DAW vía Audio Principal o ASIO |

El hardware sólo Ethernet-only (AX32, DX32R, serie Penta) utiliza sólo la ruta Ethernet. No hay ningún controlador Thunderbolt 3 para estas unidades, y no aparecen como interfaces de audio en el ordenador. El audio de estas unidades se transporta a través de MADI, Dante o AES3.

_[Marcador de posición: diagrama que muestra DADman y controlador TB3 como rutas paralelas entre la computadora y una unidad Thunder\|Core — DADman que se comunica sobre Ethernet, Controlador TB3 comunicándose sobre Thunderbolt 3; contrastado con una unidad sólo Ethernet que muestra sólo la ruta Ethernet]_

---

## 5.2 La Lista de dispositivos

La Lista de Dispositivos es la vista de nivel superior de DADman que muestra todas las unidades descubiertas y conectadas. Cada unidad se muestra con un borde de color que lo identifica visualmente y separa sus controles de los de las unidades adyacentes.

Cuando DADman se lanza, intenta volver a conectar a unidades encontradas en la última sesión. Si un archivo de configuración de DADman (`.dms`) está configurado para cargar automáticamente al inicio, se aplicará a unidades conectadas. Si no se carga ningún archivo de configuración al iniciar, las conexiones a unidades de la Lista de Dispositivos deben volver a establecerse manualmente.

Consulte [Capítulo 7, Sección 7.3 — Lista de dispositivos] para hacer referencia completa a la lista de dispositivos.

---

## 5.3 Recomendaciones de Red

> **NOTA:** Para un control fiable, DAD recomienda encarecidamente utilizar una red Ethernet dedicada a DADman, separada de su red general de estudios o instalaciones. Consulte [Capítulo 3, Sección 3.7 — Configurar la conexión de red] para obtener una guía topológica detallada.

El control de DADman es ligero. Sin embargo, compartiendo la red de control con Audio over IP (Dante, AES67), EuControl, o el tráfico general de Internet puede causar caídas de conectividad intermitentes que interrumpen las actualizaciones de parámetros en tiempo real. Un conmutador Gigabit Ethernet dedicado o una conexión directa por cable entre el ordenador y la unidad es la topología recomendada para todas las instalaciones profesionales.

---

## 5.4 dirección IP

Cada unidad de hardware requiere una dirección IP única en la misma subred que el ordenador corriendo DADman. Las unidades pueden ser configuradas con direcciones IP estáticas (recomendadas para redes de control dedicadas) o direcciones asignadas por DHCP.

Las direcciones IP se configuran a través del panel frontal de la unidad, a través de una interfaz de navegador web, o a través de DADman después de la conexión inicial. Consulte la guía de instalación para su modelo de hardware específico para el procedimiento de asignación de IP por primera vez.

---

## 5.5 Relojes y Ejemplo

El bloqueo determina la velocidad de muestreo a la que funciona todo el audio del sistema. Debido a que el hardware controlado por DADman suele estar en el centro de una infraestructura de audio más grande —recibir y enrutar audio de múltiples fuentes— la configuración del reloj es uno de los aspectos más importantes de la configuración del sistema.

### 5.5.1 The Clock Hierarchy

Todos los dispositivos de audio digitales en un sistema conectado deben compartir una muestra común de reloj para evitar clics, pops, y artefactos de audio causados por el desajuste de tasa de muestra. Un dispositivo actúa como el **reloj maestro**; todos los demás son **esclavos de reloj** que lo sincronizan.

El hardware controlado por DADman puede actuar como maestro o esclavo, y puede derivar su reloj de múltiples fuentes:

| Fuente del reloj     | Descripción                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Internacional**    | La unidad genera su propio reloj al ritmo de muestra seleccionado — usarlo cuando la unidad es el reloj maestro del sistema                                                             |
| **Reloj de palabra** | Una señal de reloj de palabra externa en la entrada de reloj palabra BNC                                                                                                                |
| **MADI**             | Reloj extraído de un flujo MADI entrante                                                                                                                                                |
| **Dante**            | Reloj derivado de la red de audio Dante (basada en PTP)                                                                                                              |
| **AES3**             | Reloj extraído de una señal AES3 entrante                                                                                                                                               |
| **Tornillo 3**       | Reloj derivado de la computadora conectada _(Thunder\|Hardware central)_                                                                                             |
| **Adaptar a**        | DADman coincide automáticamente con la velocidad de muestreo de una señal digital entrante — útil para adaptarse a las herramientas Pro u otros cambios en la velocidad de muestreo DAW |

_[Marcador de posición: Diagrama de jerarquía de reloj que muestra reloj maestro → palabra bus reloj → reloj esclavizador; con Dante PTP como referencia alternativa]_

El origen del reloj y la frecuencia de muestreo están configurados en la pestaña **Conf** de DADman. Consulte [Capítulo 7, Sección 7.5 — Bloqueo y Configuración] para la referencia completa.

---

## 5.6 Tasa de muestreo y capacidad de canal

Algunos formatos de audio transportan menos canales a tasas de muestra más altas. La siguiente tabla muestra cómo cambia la capacidad del canal con la velocidad de muestreo para los formatos más comunes en el hardware DAD.

| Formatear                                                                                        | Canales a 44.1 / 48 kHz | Canales en 88.2 / 96 kHz | Canales a 176.4 / 192 kHz |
| ------------------------------------------------------------------------------------------------ | --------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| MADI (standard)                                                               | 64                                      | 32 (S/MUX 2)          | 16 (S/MUX 4)           |
| MADI (alta velocidad)                                                         | 64                                      | 64                                       | 32                                        |
| Dante (estándar)                                                              | 64                                      | 32                                       | 16                                        |
| Dante 256 IPCore _(v5.8.1.6)_ | 256                                     | 128                                      | 64                                        |
| AÑADIR tubería                                                                                   | 8                                       | 4 (S/MUX 2)           | —                                         |
| Tornillo 3 (controlador DAD)                                                  | Hasta 256                               | Hasta 256                                | Hasta 256                                 |

> **NOTA:** Los valores de capacidad del canal en la tabla anterior son típicos; los valores reales dependen de tu modelo de hardware específico y versión del firmware. Confirme la capacidad de su unidad en las especificaciones técnicas del Apéndice A.

---

## Referencias cruzadas

- **Capítulo 1 — Introducción:** Lista de hardware compatible; Resumen de familias de hardware
- **Capítulo 3 — Instalación:** Instalando DADman y configurando la red
- **Capítulo 4 — Descripción de Hardware:** Conectores de panel delantero y trasero; E/S física
- **Capítulo 7 — Operación:** Referencia de la pestaña de Conf para la configuración de fuente de reloj y frecuencia de muestra
- **Apéndice A — Especificaciones:** Tablas de especificaciones completas de hardware, incluyendo capacidades de matriz de enrutamiento

---

_[Pendiente de Ingeniería DAD:]_  
_— números de puerto de DADman TCP/UDP usados para descubrimiento y control de unidades (necesario para Ch. 9 cortafuegos solución de problemas)_  
_— Confirmación de lista de unidades compatible con Dante 256 IPCore (v5. .1.6)_  
_— Tres figuras del diagrama de bloques anotadas como marcadores de posición anteriores_
