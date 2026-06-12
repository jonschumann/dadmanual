---
title: "Chapter 1 — Introduction & Product Overview"
sidebar_label: "Ch. 1 — Introduction"
sidebar_position: 3
---

# Chapter 1 — Introduction & Product Overview

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0.1 — Pending technical review by DAD engineering  
> **Last updated:** June 2026

---

## In This Chapter

| Section             | Covers                                      | Relevant for |
| ------------------- | ------------------------------------------- | ------------ |
| 1.1 | What DADman is and what it does             | All users    |
| 1.2 | Key capabilities                            | All users    |
| 1.3 | Software components and their relationships | All users    |
| 1.4 | Compatible hardware                         | All users    |
| 1.5 | Hardware families and cloning compatibility | All users    |
| 1.6 | How to use this manual                      | All users    |
| 1.7 | About DAD / NTP Technology                  | All users    |

> **NOTE — Scope of this manual:** This manual is written for users of DAD (Digital Audio Denmark) hardware. All worked examples, screenshots, and procedures use DAD products — primarily the AX Center, Core 256, and AX64 — as the reference platform. Avid MTRX, MTRX II, and MTRX Studio are OEM products that use DADman software and are functionally identical from a DADman control perspective; the procedures in this manual apply equally to those products. Avid-hardware-specific topics (iLok, Pro Tools integration, Avid Master Account downloads) are noted where relevant but are not the focus of this document.

---

## 1.1 What Is DADman?

DADman is a software application that configures and controls professional audio hardware from DAD (Digital Audio Denmark), NTP Technology, and Avid over a standard Ethernet network. It is the single control point for all connected units — providing access to analogue input gain, output levels, routing, clocking, synchronisation, and monitor control from one unified interface.

DADman is a **channel strip-oriented** interface. Each connected unit appears in the Device List, and its inputs, outputs, and routing controls are presented as a set of vertical channel strips — similar in concept to the channel strips on a mixing console. This means that regardless of which hardware unit you are working with, the DADman interface follows a consistent layout.

### 1.1.1 The Fundamental Principle: Settings Live in the Unit

> **NOTE:** This is the single most important architectural concept to understand before using DADman.

All settings configured in DADman — routing, gain, output levels, clock source, channel labels, and all other parameters — are **stored in the hardware unit itself**, not in the DADman software or on the computer running it. DADman reads the current state of the unit from the network and displays it; when you make a change, DADman sends that change to the unit, which stores it.

This has practical consequences:

- If DADman is closed or the computer is shut down, the hardware unit continues operating with its last-stored settings. Audio passes through uninterrupted.
- If DADman is opened and a unit is found on the network, DADman immediately shows the unit's current state — even if those settings were last configured on a different computer.
- To recover settings after a factory reset or firmware update, you must reload a saved configuration file. See [Chapter 7, Section 7.1 — Session Management].

---

## 1.2 Key Capabilities

DADman provides the following control capabilities across compatible hardware:

| Capability                                             | Description                                                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Analogue input control**                             | Mic/line gain, phantom power (+48 V), pad, phase inversion, channel labelling                                                             |
| **Analogue output control**                            | Output level, mute, channel labelling, output range selection (+18/+24 dBu)                                                               |
| **Routing matrix**                                     | Full crosspoint routing matrix — up to 1,500 × 1,500 crosspoints on supported hardware                                                                       |
| **Clock and synchronisation**                          | Sample rate selection, sync source selection, clock adaptation                                                                                               |
| **Monitor control**                                    | Monitor profiles with sources, outputs, fold-downs, delay, and talkback                                                                                      |
| **Multi-unit control**                                 | Control multiple hardware units simultaneously from a single DADman window                                                                                   |
| **EuCon integration**                                  | Compatible with Avid EuControl for control surface integration                                                                                               |
| **Pro Tools PRE emulation**                            | MIDI-controlled preamp emulation for MTRX units                                                                                                              |
| **Routing presets (Control\|Pack)** | Up to 32 routing presets per unit with automated trigger switching _(v5.8.0 and later)_                   |
| **Mic gain groups**                                    | Group multiple mic input channels for simultaneous gain adjustment _(v5.8.1.6 and later)_ |
| **Settings backup**                                    | Save and restore all unit settings to DADman Settings Files (`.dms`) on the computer                                                      |
| **Unit cloning**                                       | Copy all settings from one unit to another within the same hardware family                                                                                   |

---

## 1.3 Software Components and Their Relationships

DADman is one part of a two-component software system. Understanding the distinction between the two components is essential for correct installation and troubleshooting.

### 1.3.1 The Two Components

| Component                    | What it does                                                                                                                                                           | Required for                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **DADman**                   | Configures and controls hardware units over Ethernet — routing, gain, monitoring, clocking                                                                             | All supported hardware                           |
| **DAD Thunderbolt 3 driver** | Makes the Thunder\|Core interface visible to the computer as a Core Audio (macOS) or ASIO (Windows) audio device for use in DAWs | AX64, AX Center, Core 256, Avid MTRX series only |

These two applications are **independent**. They do not communicate with each other. The Thunderbolt 3 driver is not required for DADman to function, and DADman is not required for the Thunderbolt 3 driver to present the audio interface to a DAW. However, for complete operation of Thunder\|Core hardware — configuring the unit _and_ recording or playing back audio through it — both must be installed.

_[Placeholder: diagram showing DADman and TB3 driver as parallel paths between the computer and hardware unit — DADman communicating over Ethernet, TB3 driver communicating over Thunderbolt 3]_

### 1.3.2 Communication Paths

A Thunder\|Core unit connected to a computer uses two simultaneous, independent communication paths:

| Path              | Protocol      | Purpose                                                                    |
| ----------------- | ------------- | -------------------------------------------------------------------------- |
| **Ethernet**      | TCP/IP        | DADman control — routing, gain, configuration                              |
| **Thunderbolt 3** | PCIe over TB3 | Audio transport — the interface visible to your DAW via Core Audio or ASIO |

Ethernet-only hardware (AX32, DX32R, Penta series) uses only the Ethernet path. There is no Thunderbolt 3 driver for these units, and they do not appear as audio interfaces on the computer. Audio from these units is transported over MADI, Dante, or AES3.

### 1.3.3 Version History

| Requirement                                                         | Minimum version                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------- |
| DADman for Thunderbolt 3 driver support                             | v5.6.7.1 |
| DADman with Apple Silicon (ARM64) native support | v5.5.0                   |
| DADman with Control\|Pack                                           | v5.8.0                   |
| DADman with Mic Gain Groups                                         | v5.8.1 build 6           |
| DADman with Ravenna Card and ST 2110-30 support                     | v5.8.2 build 2           |
| Last DADman version supporting Windows 7 / 8                        | v5.7.0                   |
| Current release (at time of publication)         | v5.8.2 build 2           |

---

## 1.4 Compatible Hardware

DADman controls hardware from three product families: DAD/NTP Technology products, and Avid MTRX products. The complete list of supported hardware at the time of publication (DADman v5.8.2 build 2) is shown below.

> **NOTE:** Always consult the release notes for your specific DADman version to confirm compatibility with newer hardware revisions. The supported hardware list may be updated between manual revisions.

### 1.4.1 DAD / NTP Technology Hardware

| Product       | Category                                                 | Connection to computer   | Thunder\|Core | Routing matrix                                                   |
| ------------- | -------------------------------------------------------- | ------------------------ | ------------- | ---------------------------------------------------------------- |
| **AX Center** | Modular analogue & digital interface | Thunderbolt 3 + Ethernet | Yes           | 1,024 × 1,024                                                    |
| **Core 256**  | Digital audio interface                                  | Thunderbolt 3 + Ethernet | Yes           | [To confirm] |
| **AX64**      | Modular audio interface                                  | Thunderbolt 3 + Ethernet | Yes           | [To confirm] |
| **AX32**      | AD/DA converter system                                   | Ethernet only            | No            | [To confirm] |
| **DX32R**     | Digital I/O and router                                   | Ethernet only            | No            | 400 inputs                                                       |
| **AX24**      | Audio interface                                          | Ethernet only            | No            | [To confirm] |

### 1.4.2 NTP Technology Penta Series

| Product        | Category                                             | Connection to computer | Thunder\|Core |
| -------------- | ---------------------------------------------------- | ---------------------- | ------------- |
| **Penta 720**  | Modular I/O base unit                                | Ethernet only          | No            |
| **Penta 721s** | Modular audio router & interface | Ethernet only          | No            |

### 1.4.3 Third-Party Products

| Product                 | Manufacturer | Connection to computer   | Thunder\|Core | DADman version required                          |
| ----------------------- | ------------ | ------------------------ | ------------- | ------------------------------------------------ |
| **Dynaudio Control 01** | Dynaudio     | Thunderbolt 3 + Ethernet | Yes           | v5.7.2 and later |
| **Dynaudio Control 02** | Dynaudio     | Thunderbolt 3 + Ethernet | Yes           | v5.8.2 and later |

### 1.4.4 Avid MTRX Series

The Avid MTRX, MTRX II, and MTRX Studio are OEM products manufactured by DAD / NTP Technology and sold by Avid. They use DADman as their control software and are functionally identical to DAD hardware from a DADman perspective. This manual does not cover Avid-specific topics such as iLok licensing, Pro Tools integration, or Avid Master Account management.

> **NOTE:** For Avid MTRX, MTRX II, and MTRX Studio, use only the version of DADman approved for your Avid hardware, available from your Avid Master Account. See [Chapter 3, Section 3.2 — Obtaining the Software].

| Product              | Connection to computer   | Thunder\|Core |
| -------------------- | ------------------------ | ------------- |
| **Avid MTRX**        | Ethernet only            | No            |
| **Avid MTRX II**     | Thunderbolt 3 + Ethernet | Yes           |
| **Avid MTRX Studio** | Thunderbolt 3 + Ethernet | Yes           |

_[Pending from DAD engineering: routing matrix capacities for AX32, AX64, Core 256, AX24, Penta 720, Penta 721s; confirmation of AX24 connection method]_

---

## 1.5 Hardware Families and Cloning Compatibility

DADman organises compatible hardware into three **families**. Family membership determines which units can exchange settings with each other using the **Clone** function.

Cloning allows all settings from one unit to be copied to another. This is useful for duplicating a known-good configuration across multiple identical units, or for restoring settings to a replacement unit. Cloning is only permitted between units in the **same family**.

| Family       | Members                                                 | Notes                                    |
| ------------ | ------------------------------------------------------- | ---------------------------------------- |
| **Family 1** | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s | Original-generation routing architecture |
| **Family 2** | MTRX II · AX64 · AX Center · Core 256                   | Thunder\|Core generation                 |
| **Family 3** | MTRX Studio                                             | Standalone                               |

> **NOTE — Cloning between non-identical units:** For best results, the source and target units should be identically configured (same cards in the same slots). Settings for cards present in the source unit but absent in the same slot position in the target unit are set to factory defaults on the target. Settings for cards present in the target but absent in the source are unaffected.

---

## 1.6 How to Use This Manual

This manual is organised to support both sequential and reference-style reading.

**If you are new to DADman:** Read Chapters 1–3 in order, then follow Chapter 6 (Getting Started) step by step. Return to Chapters 4–5 for hardware background, and Chapter 7 when you need detailed operational guidance.

**If you are an experienced user looking for a specific topic:** Use the section index at the top of each chapter, or the full index in Appendix H.

**Document conventions used throughout this manual:**

| Convention                                                              | Meaning                                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Bold text**                                                           | Hardware control names, menu items, button labels, tab names              |
| `Monospace text`                                                        | File names, file extensions, folder paths, command-line input             |
| _[Placeholder]_     | Content to be confirmed by DAD engineering or added during review         |
| _(v5.8.0 and later)_ | Feature availability — indicates the minimum DADman version required      |
| _(AX32 / Family 1)_                                  | Hardware variation — parameter applies specifically to the named hardware |

**Cross-references** use the format [Chapter X, Section X.X — Title] to point to related content within this manual.

---

## 1.7 About DAD / NTP Technology

Digital Audio Denmark (DAD) is a brand of NTP Technology A/S, headquartered in Gentofte, Denmark. NTP Technology designs and manufactures professional audio hardware for broadcast, post-production, live sound, and studio applications.

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Web: www.digitalaudio.dk  
Support: www.digitalaudiosupport.com  
Email: info@digitalaudio.dk

---

## Cross-References

- **Chapter 2 — System Requirements:** OS compatibility, minimum hardware specs, package contents
- **Chapter 3 — Installation:** Installing DADman and the Thunderbolt 3 driver
- **Chapter 5 — Signal Flow & Architecture:** How DADman communicates with hardware; clocking overview
- **Chapter 6 — Getting Started:** Step-by-step first use
- **Chapter 7 — Operation:** Full interface reference and operational workflows
- **Appendix A — Specifications:** Complete hardware specification tables

---

_[Pending from DAD engineering:]_  
_— Routing matrix capacities for AX32, AX64, Core 256, AX24, Penta 720, Penta 721s_  
_— Confirmation of AX24 connection method_  
_— Introduction text for About DAD / NTP Technology section_
