---
title: "Capítulo 2 — Requisitos del sistema"
sidebar_label: "Ch. 2 — Requisitos del sistema"
sidebar_position: 4
---

# Capítulo 2 — Requisitos del sistema y Contenido del Paquete

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.1.6  
> **TB3 Driver version covered:** Latest — see Download Centre at digitalaudiosupport.com  
> **Chapter status:** Draft v0.1 — Minimum RAM/storage requirements and package contents pending from DAD engineering  
> **Last updated:** June 2026

---

## En este capítulo

| Sección             | Cubos                                       | Relevante para                                  |
| ------------------- | ------------------------------------------- | ----------------------------------------------- |
| 2.1 | Requisitos del sistema de software DADman   | Todos los usuarios                              |
| 2.2 | Requisitos de controlador DAD Thunderbolt 3 | AX64, AX Center, Core 256, solo serie Avid MTRX |
| 2.3 | Contenido del paquete                       | Todos los usuarios                              |

---

## 2.1 Requisitos del Sistema de Software de DADman

### 2.1.1 Sistema Operativo y Plataforma

| Requisito                                      | macOS                                                                                                                                    | Ventanas                                                                                   |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Versiones del sistema operativo soportadas** | macOS 10.13 Alta Sierra a 15 Sequoia (Intel y Apple Silicon)                                          | Windows 10 (64 bits), Windows 11 (64 bits)           |
| **Arquitectura de CPU**                        | x86-64 (Intel) y ARM64 (M1 y posterior) — soporte nativo de v5.5.0 | x86-64                                                                                     |
| **RAM mínima**                                 | [A ser confirmado por DAD Engineering]                                               | [A ser confirmado por DAD Engineering] |
| **Almacenamiento mínimo**                      | [A ser confirmado por DAD Engineering]                                               | [A ser confirmado por DAD Engineering] |
| **Red**                                        | Puerto Ethernet requerido (ver Capítulo 3, Sección 3.5); Wi-Fi no recomendado para uso en producción  | Puerto Ethernet requerido; Wi-Fi no recomendado                                            |
| **Versión actual**                             | 5.8.2 Construcción 2                                                                                     | 5.8.2 Construcción 2                                       |

> **NOTICE — Soporte heredado de Windows:** DADman v5.7.0 fue la versión final compatible con Windows 7 y Windows 8. Todas las versiones posteriores requieren Windows 10 o Windows 11.

> **NOTICE — Usuarios de hardware ávidos:** Si está usando DADman con un Avid MTRX, MTRX II, o MTRX Studio, debe utilizar la versión de DADman aprobada para su hardware Avid. Descargue esta versión desde su cuenta principal de Avid, no desde el portal de soporte de DAD. Usar una versión no aprobada puede causar problemas de compatibilidad con su hardware Avid.

---

## 2.2 Requisitos del Sistema de Conductor 3 DAD

> **NOTA:** Esta sección sólo se aplica si su hardware es un producto AX64, AX Center, Core 256 o Avid MTRX. Si su hardware sólo se conecta al ordenador a través de Ethernet (por ejemplo, AX32, DX32R, serie Penta), el controlador Thunderbolt 3 no es necesario.

| Requisito                                      | macOS                                                                                     | Ventanas                                                             |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Versiones del sistema operativo soportadas** | macOS 11 Big Sur y posterior (Intel y Apple Silicon)                   | Windows 10, Windows 11                                               |
| **Versión mínima de DADman**                   | 5.6.7.1 o posterior                       | 5.6.7.1 o posterior  |
| \*\*Cabina de Trueno \*\*                      | Cable Trueno de 3 o USB-C con una puntuación mínima de 20 Gbps                            | Cable Trueno de 3 o USB-C con una puntuación mínima de 20 Gbps       |
| **Hardware compatible**                        | AX64, AX Center, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio, Dynaudio Control 01 | AX64, AX Center, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio |

> **CAUCIÓN — Especificación de cables:** Usar un cable que no tenga al menos 20 Gbps puede resultar en conexiones inestables o fallidas de Thunderbolt. Los cables estándar USB-C que no llevan la certificación Thunderbolt no son suficientes. Verifique su cable antes de la instalación.

---

## 2.3 Contenido del Paquete

> **NOTICE — Contenido del paquete pendiente**  
> Los contenidos del paquete de hardware para cada producto deben ser confirmados por la ingeniería de DAD. Aquí se insertará una tabla para cada producto en la línea compatible con DADman.

_[Placeholder: Tabla(s) de contenidos del paquete para cada producto — a ser proporcionado por DAD engineering. Debe incluir: unidad de hardware, fuente de alimentación / cable IEC, orejas de rack, tornillos, cualquier cable incluido, tarjeta de documentación, cualquier software incluido o documentación de licencia.]_

### 2.3.1 Software

El software DADman y el controlador Thunderbolt 3 no se suministran en medios físicos. Se descargan del portal de soporte de DAD o de tu cuenta de Avid Master. Consulte [Capítulo 3, Sección 3.2 — Obteniendo el Software].

---

## Referencias cruzadas

- **Capítulo 1 — Introducción:** Lista de hardware compatible; familias de hardware
- **Capítulo 3 — Instalación:** Descargando e instalando DADman y el controlador Thunderbolt 3; configuración de red
- **Apéndice A — Especificaciones:** Especificaciones técnicas completas por producto

---

_[Pendiente de Ingeniería DAD:]_  
_— RAM mínima y requerimientos de almacenamiento para DADman en macOS y Windows_  
_— Contenido del paquete para cada modelo de hardware (Core 256, Centro AX, AX64, MOM, DAD)_
