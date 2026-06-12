---
id: seguridad frontal
title: "Material delantero y seguridad"
sidebar_label: "FM — Material delantero y seguridad"
sidebar_position: 2
slug: /front-matter-safety
---

# Front Matter — Avisos de seguridad y cumplimiento

> **Documento:** Manual de usuario de DADman  
> **Se aplica a:** software de DADman y todo el hardware de tecnología DAD / NTP  
> **Estándares:** IEC/IEEE 82079-1:2019 · IEC 62368-1:2018 · UL 62368-1 · CSA C22. No. 62368-1  
> **Estado:** Borrador v0. — Declaraciones regulatorias pendientes de DAD / NTP Tecnología Ingeniería  
> **Última actualización:** junio de 2026

---

> \*\*LLEGADO Y RETAIN ESTAS INSTRUCIONES OFRECEN CUALQUIER EQUIPAMENTO. \*  
> Esta sección contiene información de seguridad que debe leerse, entenderse, y seguido antes de instalar, configurar o operar cualquier hardware controlado por el software DADman. El incumplimiento de estas instrucciones puede dar lugar a descargas eléctricas, incendios, daños auditivos, daños en el equipo o anulación de la garantía.

---

## Definiciones de palabras de señal FM.1

Las siguientes palabras de señal se utilizan a lo largo de este manual para indicar gravedad de peligro. Aparecen en avisos formateados como se muestra a continuación y deben ser siempre leídos y observados.

| Palabra señal   | Nivel de peligro                       | Comenzando                                                                                                                                                                                                                         |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DANGER**      | Muerte inmediata o lesión grave        | Esta palabra indica una situación inminentemente peligrosa que, si no se evita, **causará** muerte o lesiones personales graves.                                                                                   |
| **ADVERTENCIA** | Posible muerte o lesión grave          | Esta palabra indica una situación potencialmente peligrosa que, si no se evita, **podría** causar muerte o lesiones personales graves.                                                                             |
| **PRECAUCIÓN**  | Posible daño menor por lesión o equipo | Esta palabra de señal indica una situación potencialmente peligrosa que, si no se evita, **puede** causar lesiones personales menores o daños en el equipo.                                                        |
| **NOTA**        | Sin riesgo de lesión                   | Esta palabra de señal indica información operativa importante que, si no se sigue, puede resultar en pérdida de datos, operación incorrecta, o daño al equipo, pero no representa un riesgo de seguridad personal. |

Los avisos de seguridad **siempre aparecen antes** de la acción o situación a la que se refieren.

---

## Símbolos de seguridad FM.2

Los siguientes símbolos pueden aparecer en el hardware de tecnología DAD / NTP, fuentes de energía o en esta documentación. Cada símbolo se reproduce aquí con su significado.

| Símbolo                                                        | Referencia IEC 60417          | Comenzando                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚠                                                              | IEC 60417-5036                | **Precaución / atención general requerida.** Consulte el texto adjunto para el peligro específico.                                                                                                                                      |
| ⚡                                                              | IEC 60417-5031                | **choque eléctrico.** Tensión peligrosa dentro. Riesgo de choque eléctrico. No se abran.                                                                                                                |
| ⏚                                                              | IEC 60417-5019                | **Tierra protectora / tierra.** Este terminal debe estar conectado a un conductor de tierra protector.                                                                                                                                  |
| **~**                                          | IEC 60417-5032                | **Alternando corriente (AC).** Indica la entrada de alimentación AC.                                                                                                                                                 |
| **⏻**                                                          | IEC 60417-5009                | **Poder / standby.**                                                                                                                                                                                                                                    |
| ♻                                                              | Directiva sobre RAEE          | **No eliminen los residuos domésticos.** Este producto debe eliminarse mediante un plan de reciclado o recogida de residuos autorizado. Ver [Sección FM.8 — Disposición y RAE](#fm8-disposal-and-weee). |
| **[RoHS]** | Directiva de la UE 2011/65/UE | **Resistente al RUS.** Este producto cumple con la Directiva de Restricción de Sustancias Peligrosas.                                                                                                                                   |

> **NOTA:** Si un símbolo aparece en el hardware o en el embalaje y no aparece en la tabla de arriba, Consulte la guía de instalación suministrada con esa unidad de hardware específica.

---

## Seguridad eléctrica FM.3

### Potencia y Terrenamiento de FM.3.1

> **DANGER — choque eléctrico**  
> \*\*La conexión inadecuada del conductor basado en equipos resulta en un riesgo de choque eléctrico. \* No modifique el enchufe proporcionado con el producto. Si el enchufe no encaja en el outlet, disponga de un equipo eléctrico cualificado y adecuado para instalar. No utilice un adaptador que derrote la función del receptor de la instalación. Si no está seguro de si el producto está bien fundado, consulte a un eléctrico cualificado antes de operar el equipo.

Todo el hardware DAD / NTP Tecnología debe estar basado \*\*. En caso de un mal funcionamiento o avería, la instalación de tierra proporciona una vía de menor resistencia a la corriente defectuosa, reduciendo el riesgo de descargas eléctricas. Cada producto eléctrico se suministra con un cable eléctrico dotado de un conductor de instalación y un enchufe subterráneo. El enchufe debe ser insertado en un tomacorriente debidamente instalado y en tierra que cumpla con todos los códigos y ordenanzas eléctricas locales aplicables.

> **ADVERTENCIA**  
> No derrotes el propósito de seguridad del enchufe polarizado o de tipo tierra. Un enchufe polarizado tiene dos cuchillas con una más amplia que la otra. Un enchufe tipo tierra tiene dos cuchillas y una tercera púa de aterrizaje. La hoja ancha y la tercera oruga se proporcionan para su seguridad. Si el enchufe suministrado no se ajusta a su outlet, consulte a un eléctrico para reemplazar el enchufe obsoleto. Esta instrucción se aplica en todas las regiones y sustituye cualquier práctica local de conveniencia.

### Protección de Power Cord FM.3.2

> **ADVERTENCIA**  
> Proteja que el cable de energía sea caminado o pellizcado, particularmente en enchufes, enchufes, enchufes, y en el punto donde los cordones salen del chasis del equipo. Un cable eléctrico dañado debe ser reemplazado por un técnico de servicio cualificado antes de que el equipo sea devuelto al servicio. No opere equipos con un cable de alimentación visiblemente dañado o abrazado.

### FM.3.3 Desconexión y relámpagos

- Desenchufe todo el equipo eléctrico durante las tormentas.
- Desenchufe todo el equipo eléctrico cuando no se utilice durante un período de tiempo prolongado.
- Al desconectar un cable eléctrico, agite firmemente el cuerpo del enchufe — no tire el cordón mismo.

### FM.3.4 Dispositivos de potencia sobre Ethernet (PoE)

Algún hardware DAD (incluyendo el Módulo Operador MOM) es alimentado a través de Power over Ethernet (PoE) en lugar de un cable eléctrico. Lo siguiente se aplica a los dispositivos potenciados por PoE:

- Conecte los dispositivos PoE-powered sólo a interruptores de red o inyectores que cumplan con IEEE 802. af (15.4 W) o IEEE 802.3at (30 W) según corresponda al dispositivo.
- No conecte dispositivos potenciados por PoE a puertos de red estándar de sólo datos que no sean capaces de suministrar energía PoE.
- La fuente de alimentación PoE dentro del interruptor de red o inyector está sujeta a las instrucciones generales de seguridad de la red en [Sección FM.3.1](#fm31-mains-power-and-grounding).

---

## Seguridad ambiental FM.4

### Humedad y líquidos FM.4.1

> **ADVERTENCIA**  
> No utilice ningún hardware de tecnología DAD / NTP cerca del agua o en lugares donde puedan producirse derrames de condensación, lluvia o líquido. La ingesta líquida puede causar descargas eléctricas, incendios o daños irreparables a la electrónica.

- Mantenga los líquidos alejados de todo el equipo.
- Tenga cuidado de que los objetos no caigan y los líquidos no se derramen en el equipo a través de aberturas o aperturas de conector.
- Si el líquido ha sido derramado en o en el equipo, desconecte inmediatamente la potencia de la red eléctrica y refiérase a [Sección FM. — Condiciones de servicio](#fm6-service-conditions) antes de devolver el equipo al servicio.

### FM.4.2 Ventilación y calor

> **ADVERTENCIA**  
> Este equipo genera calor durante la operación normal. La obstrucción de las aberturas de alineación puede causar un fallo de sobrecalentamiento, incendio o premaduro de los componentes internos.

- No bloquee ninguna apertura de promoción. Instalar el equipo de acuerdo con las instrucciones del fabricante y los márgenes especificados en la guía de instalación de su modelo de hardware.
- No instale equipos cerca de fuentes de calor tales como radiadores, registradores de calor, estufas u otros aparatos —incluyendo amplificadores de energía— que produzcan calor significativo.
- El producto debe ubicarse para que su posición no interfiera con su adecuada promoción.
- Observe el rango de temperatura de funcionamiento mínimo y las especificaciones técnicas para su hardware. En general, el hardware de rack de DAD requiere un mínimo de 1U de espacio libre por encima y por debajo de la unidad a menos que se especifique lo contrario.

### FM.4.3 Estabilidad mecánica

> **CAUCIÓN**  
> El equipo que caiga puede causar lesiones personales y daño severo al equipo. Al montar hardware en un estante o en un carrito, asegúrese de que la estructura de montaje es estable, valorado a la carga, y debidamente asegurado antes de liberar el equipo.

- Utilice sólo tapas de rack, stands, carritos o soportes de montaje especificados por el fabricante o suministrados con el equipo.
- Cuando se utiliza un carro de equipo de ruedas, tenga cuidado al mover la combinación del carrito y el equipo para evitar trucos.
- Las unidades de montaje en roca deben estar aseguradas con todos los tornillos de montaje en rack suministrados antes de la operación.

---

## Seguridad del oído FM.5

> **ADVERTENCIA: riesgo de daño auditivo permanente**  
> El software DADman controla los niveles de salida analógica y digital del hardware conectado. Este equipo, ya sea usado solo o en combinación con amplificadores de potencia y altavoces o auriculares, es capaz de producir niveles de presión de sonido (SPL) que pueden causar **pérdida permanente de audición**.

- No opere a niveles de salida incómodos. Si hay dudas sobre los niveles de control seguros, consultar orientación profesional sobre los límites de SPL para la escucha extendida (una referencia común es 85 dB SPL como un nivel seguro continuo para la supervisión profesional).
- Reducir los niveles de salida antes de conectar nuevas fuentes de señal, hacer cambios de enrutamiento o recargar archivos de configuración.
- Si experimenta alguna pérdida auditiva, tinnitus (sonando en los oídos), o una mayor sensibilidad al sonido después de una sesión de audición, consulte a un audiólogo con rapidez. Estos pueden ser indicadores tempranos de daños auditivos inducidos por ruido.

> **NOTA:** Los controles de nivel de salida de DADman y la función de nivel de referencia de perfil (el botón **Ref**) están diseñados específicamente para permitir que los niveles de salida se establezcan y bloqueen en valores SPL calificados. El uso de estas características para el manejo disciplinado de la estructura reduce significativamente el riesgo de exposición inadvertida a SPL inseguro. Consulte [Capítulo 8 — Características avanzadas, Sección 8.X — Niveles de referencia y perfiles de seguimiento] para obtener orientación.

---

## Condiciones de servicio FM.6

> **ADVERTENCIA**  
> No hay partes útiles para el usuario dentro del hardware de tecnología DAD / NTP. La apertura del recinto expone voltajes peligrosos. Consulte todos los servicios que van más allá de lo descrito en este manual al personal de servicio cualificado.

El hardware debe ser retirado del servicio y remitirse al personal de servicio cualificado cuando exista alguna de las siguientes condiciones:

1. El cable o enchufe de la corriente eléctrica se ha dañado físicamente.
2. Los objetos han caído, o el líquido ha sido derramado a los equipos.
3. El equipo ha sido expuesto a la lluvia o a la humedad.
4. El equipo no parece funcionar normalmente o exhibe un marcado cambio en el rendimiento.
5. El equipo ha sido retirado o el recinto ha sido dañado físicamente.

No intente servir el producto más allá de los procedimientos de mantenimiento del usuario descritos en [Capítulo 10 — Mantenimiento] de este manual. El servicio no autorizado anulará la garantía y podrá crear garantías adicionales de seguridad.

> **ADVERTENCIA: Moviendo partes**  
> Algunas unidades de rack DAD (incluyendo el AX32) contienen ventiladores enfriados con **partes peligrosas en movimiento** accesibles cuando se quita la cubierta unitaria. Mantenga los dedos y todas las demás partes del cuerpo lejos de los ensambles internos en todo momento.

---

## Seguridad de software y datos de FM.7

La siguiente guía de nivel NOTICE se aplica a la operación de software de DADman y no implica la seguridad personal. La falta de observación de estas prácticas puede resultar en la pérdida de datos de configuración.

> **NOTICIA: Guarda la configuración antes de las actualizaciones de firmware**  
> Las actualizaciones de firmware restablecen todos los ajustes almacenados en la unidad de hardware a los valores predeterminados de fábrica. Las configuraciones de enrutamiento, los ajustes de ganancia, los perfiles de monitor, las etiquetas de los canales y todos los demás parámetros almacenados se perderán a menos que se guarden primero. Guarda siempre un archivo de configuración de DADman (`.dms`) usando **Archivo > Guardar como** antes de iniciar cualquier actualización de firmware. Consulte [Capítulo 3, Sección 3.X — Actualizar DADman y Firmware] para ver el procedimiento completo.

> **NOTICE — Copias de seguridad de archivos de configuración**  
> Archivos de configuración de DADman (`.dms`) y Archivos de perfil de Monitor (`.dmprof`) representan una inversión significativa en configuración. Mantener copias de seguridad regulares de estos archivos en una ubicación separada de la computadora que ejecuta DADman (por ejemplo, el almacenamiento en la nube o una unidad externa). Estos archivos son el único medio de recuperar su configuración después de un restablecimiento de fábrica.

> **NOTICE — Seguridad de red**  
> DADman se comunica con unidades de hardware a través de la red sin autenticación por defecto. En entornos con múltiples usuarios o acceso a la red desde fuera del estudio, coloque el hardware controlado por DADman en un dedicado, segmento de red aislado para prevenir el acceso no autorizado a la configuración de unidades.

---

## Disposición y RAEE FM.8

Los productos DAD / NTP Tecnología están sujetos a la Directiva Europea de RAEE (Equipo Electrónico y de Residuos, Directiva 2012/19/UE) y a las regulaciones nacionales y regionales equivalentes.

> **No desecho de este equipo en residuos municipales no clasificados (residuos domésticos/generales).**

Los aparatos electrónicos y electrónicos deben recogerse y eliminarse por separado a través de puntos de recogida autorizados o devolverse a un distribuidor autorizado o al fabricante para un reciclado adecuado. Póngase en contacto con su autoridad local, servicio de gestión de residuos, o Tecnología DAD / NTP para orientación de eliminación.

El símbolo de la rueda cruzada (♻️ con una X) impresa o fijada al producto lo identifica como sujeto a requisitos de recogida separados.

---

## Cumplimiento regular FM.9

> **NOTICE — Declaraciones pendientes**  
> Las declaraciones de cumplimiento de la normativa en esta sección se proporcionan como marcadores de posición. Declaraciones finales, incluyendo versiones de directiva aplicables, información del cuerpo notificada (si corresponde), y los datos representativos autorizados deben ser confirmados e insertados por la ingeniería de tecnología DAD / NTP y legales antes de su publicación.

### Declaración CE de conformidad M.9.1 (Unión Europea)

DAD / NTP Tecnología declara que los productos de hardware controlados por el software DADman cumplen con los requisitos de las siguientes directivas de la Unión Europea:

- **Directiva de equipos de radio (RED) 2014/53/EU** — _[Aplicable a productos con radio/Wi-Fi; confirmar aplicabilidad por producto]_
- **Directiva de bajo voltaje (LVD) 2014/35/UE** — Aplicable a hardware eléctrico
- **Directiva de compatibilidad electromagnética (CEM) 2014/30/UE**
- **Directiva RUSP 2011/65/UE** — Restricción de las sustancias peligrosas
- **Directiva sobre RAEE 2012/19/UE** — Residuos de equipos eléctricos y electrónicos

_[Documento completo de Declaración de Conformidad a ser insertado aquí. Debe incluir: nombre del producto(s), número de modelo(s), firma autorizada, fecha y lista de estándares armonizados aplicados (EN 55032, EN 55035, EN IEC 62368-1, etc.).]_

**Authorised Representative (EU):**  
NTP Technology A/S  
Nybrovej 99, DK-2820 Gentofte, Denmark  
Email: info@digitalaudio.dk

### FM.9.2 Declaración de Conformidad de la FCC (Estados Unidos)

_[Declaración de la FCC a ser insertada por la ingeniería de DAD. Debe incluir: FCC ID (si corresponde), nombre y dirección de la parte responsable y estado de cumplimiento por 47 parte CFR 15.]_

Este dispositivo cumple con la Parte 15 de las Reglas de la FCC. La operación está sujeta a las dos condiciones siguientes:

1. Este dispositivo puede no causar interferencias perjudiciales.
2. Este dispositivo debe aceptar cualquier interferencia recibida, incluyendo interferencia que pueda causar operaciones no deseadas.

> **NOTA:** Los cambios o modificaciones no aprobados expresamente por NTP Technology A/S podrían anular la autoridad del usuario para operar el equipo.

### FM.9.3 ICES-003 (Canada)

_[Estado de conformidad ICES-003 de Canadá para ser insertado.]_

Este aparato digital Clase B cumple con el ICES-003 canadiense.

### Conformidad de RoHS FM.9.4

El hardware DAD / NTP Tecnología se fabrica de conformidad con la Directiva de la UE 2011/65/EU (RoHS 2) y su enmienda Directiva 2015/863/EU (RoHS 3), que restringen el uso de sustancias peligrosas incluyendo plomo, mercurio, cadmio, cromo hexavalente, bifenilos polibrominados (PBB), etros difenílicos polibromados (PBDE) y cuatro ftalatos en aparatos eléctricos y electrónicos.

_[Certificado de cumplimiento de RoHS o referencia de declaración a insertar.]_

### FM.9.5 UK Conformity Assessed (UKCA) — Gran Bretaña

_[Declaración de UKCA que se insertará para los productos colocados en el mercado GB post-Brexit, si es aplicable.]_

---

## Avisos legales FM.10

### Copyright

2026 NTP Tecnología A/S. Todos los derechos reservados.

DAD — Digital Audio Dinamarca es una marca registrada de NTP Technology A/S. Todas las demás marcas comerciales son propiedad de sus respectivos propietarios.

Ninguna parte de este manual puede ser reproducida, transmitida o traducida de ninguna forma o por ningún medio — electrónica, mecánica, fotografiando, grabando o de otro modo — sin el permiso previo por escrito de NTP Tecnología A/S.

### Descargo de responsabilidad

NTP Tecnología A/S se reserva el derecho de realizar cambios en los productos de hardware y software sin previo aviso. Las características del producto y las especificaciones descritas en este manual están sujetas a cambios.

NTP Technology A/S no será responsable de errores técnicos o editoriales o omisiones contenidas en la misma, ni por daños incidentales o consecuentes resultantes del mueble, rendimiento, o uso de este manual o de los productos que describe.

### Contacto

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Correo electrónico: info@digitalaudio.dk  
Web: www.digitalaudio.dk  
Soporte: www.digitalaudiosupport.com

---

## Resumen de avisos de seguridad

Por IEEE 82079-1:2019, todos los avisos de DANGER y ADVERTENCIA en este documento se recogen aquí para una rápida referencia. Los avisos individuales también aparecen en el contexto de los capítulos en los que se aplica el peligro relevante.

| Ubicación                                      | Palabra señal   | Summary                                                                                        |
| ---------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| Sección FM.3.1 | **DANGER**      | Tierras inapropiadas - riesgo de choque eléctrico                                              |
| Sección FM.3.1 | **ADVERTENCIA** | No derrotes el propósito de seguridad del enchufe                                              |
| Sección FM.3.2 | **ADVERTENCIA** | Proteja y no opere con un cable de alimentación dañado                                         |
| Sección FM.4.1 | **ADVERTENCIA** | No usar cerca del agua — riesgo de descargas eléctricas y incendios                            |
| Sección FM.4.2 | **ADVERTENCIA** | No obstruya el riesgo de incendio y sobrecalentamiento                                         |
| Sección FM.5                   | **ADVERTENCIA** | Niveles de salida capaces de causar pérdida auditiva permanente                                |
| Sección FM.6                   | **ADVERTENCIA** | No hay piezas útiles para el usuario — voltajes peligrosos dentro de                           |
| Sección FM.6                   | **ADVERTENCIA** | Partes de movimiento peligrosas (AX32 y unidades con ventiladores internos) |

---

_[Pendiente de DAD / Tecnología NTP legal e ingeniería:]_  
_— Declaración final CE de texto de conformidad y firmante_  
_— Números de identificación FCC y declaraciones de conformidad por modelo de producto_  
\*— Declaración ICES-003  
_— Declaración UKCA (si es aplicable)_  
_— Referencia de certificado RoHS_  
_— Confirmación de estándares armonizados aplicables (ES series)_
