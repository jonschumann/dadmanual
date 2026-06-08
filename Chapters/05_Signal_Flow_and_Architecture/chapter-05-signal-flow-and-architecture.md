# Chapter 5 — Signal Flow & Architecture

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0.1 — Block diagrams and topology figures pending; Pending technical review by DAD engineering  
> **Last updated:** June 2026

---

## In This Chapter

| Section | Covers | Relevant for |
|---------|--------|-------------|
| 5.1 | Ethernet-based control architecture | All users |
| 5.2 | The Device List | All users |
| 5.3 | Network recommendations | All users |
| 5.4 | IP addressing | All users |
| 5.5 | Clocking and sample rate overview | All users |
| 5.6 | Sample rate and channel capacity | All users |

---

## 5.1 Ethernet-Based Control Architecture

DADman communicates with all connected hardware units over Ethernet using the TCP/IP protocol. This applies to all supported hardware — including units that also connect via Thunderbolt 3. The Ethernet connection carries only control data (configuration changes, status monitoring, metering); audio is carried separately by MADI, Dante, AES3, or Thunderbolt 3 depending on the hardware.

Because DADman uses standard Ethernet networking, a single computer running DADman can control multiple units simultaneously, provided all units are reachable on the same network. Units appear in the DADman **Device List** from left to right, ordered by their unit ID number.

*[Placeholder: system topology diagram — computer running DADman connected to a network switch, with multiple DAD hardware units on the same Ethernet subnet; Thunderbolt cable shown separately for Thunder\|Core units]*

### 5.1.1 Dual Communication Paths for Thunder|Core Hardware

A Thunder\|Core unit connected to a computer uses two simultaneous, independent communication paths:

| Path | Protocol | Purpose |
|------|----------|---------|
| **Ethernet** | TCP/IP | DADman control — routing, gain, configuration |
| **Thunderbolt 3** | PCIe over TB3 | Audio transport — the interface visible to your DAW via Core Audio or ASIO |

Ethernet-only hardware (AX32, DX32R, Penta series) uses only the Ethernet path. There is no Thunderbolt 3 driver for these units, and they do not appear as audio interfaces on the computer. Audio from these units is transported over MADI, Dante, or AES3.

*[Placeholder: diagram showing DADman and TB3 driver as parallel paths between the computer and a Thunder\|Core unit — DADman communicating over Ethernet, TB3 driver communicating over Thunderbolt 3; contrasted with an Ethernet-only unit showing only the Ethernet path]*

---

## 5.2 The Device List

The Device List is the top-level view in DADman showing all discovered and connected units. Each unit is displayed with a coloured border that identifies it visually and separates its controls from those of adjacent units.

When DADman launches, it attempts to reconnect to units found in the last session. If a DADman Settings File (`.dms`) is configured to load automatically at launch, it will be applied to connected units. If no configuration file is loaded at launch, connections to units in the Device List must be re-established manually.

See [Chapter 7, Section 7.3 — Device List] for complete Device List reference.

---

## 5.3 Network Recommendations

> **NOTE:** For reliable control, DAD strongly recommends using a dedicated Ethernet network for DADman, separate from your general studio or facility network. See [Chapter 3, Section 3.7 — Configuring the Network Connection] for a detailed topology guide.

DADman control traffic is lightweight. However, sharing the control network with Audio over IP (Dante, AES67), EuControl, or general internet traffic can cause intermittent connectivity drops that interrupt real-time parameter updates. A dedicated Gigabit Ethernet switch or a direct cable connection between the computer and the unit is the recommended topology for all professional installations.

---

## 5.4 IP Addressing

Each hardware unit requires a unique IP address on the same subnet as the computer running DADman. Units can be configured with static IP addresses (recommended for dedicated control networks) or DHCP-assigned addresses.

IP addresses are configured either via the unit's front panel display, via a web browser interface, or through DADman after initial connection. Refer to the installation guide for your specific hardware model for the first-time IP assignment procedure.

---

## 5.5 Clocking and Sample Rate Overview

Clocking determines the sample rate at which all audio in the system operates. Because DADman-controlled hardware typically sits at the centre of a larger audio infrastructure — receiving and routing audio from multiple sources — clock configuration is one of the most important aspects of system setup.

### 5.5.1 The Clock Hierarchy

All digital audio devices in a connected system must share a common sample clock to avoid clicks, pops, and audio artefacts caused by sample rate mismatch. One device acts as the **clock master**; all others are **clock slaves** that synchronise to it.

DADman-controlled hardware can act as either master or slave, and can derive its clock from multiple sources:

| Clock source | Description |
|-------------|-------------|
| **Internal** | The unit generates its own clock at the selected sample rate — use when the unit is the system clock master |
| **Word clock** | An external word clock signal on the BNC word clock input |
| **MADI** | Clock extracted from an incoming MADI stream |
| **Dante** | Clock derived from the Dante audio network (PTP-based) |
| **AES3** | Clock extracted from an incoming AES3 signal |
| **Thunderbolt 3** | Clock derived from the connected computer *(Thunder\|Core hardware)* |
| **Adapt To** | DADman automatically matches the sample rate of an incoming digital signal — useful for adapting to Pro Tools or other DAW sample rate changes |

*[Placeholder: clock hierarchy diagram showing clock master → word clock bus → clock slaves; with Dante PTP as an alternative reference]*

Clock source and sample rate are configured in DADman's **Conf** tab. See [Chapter 7, Section 7.5 — Clocking and Configuration] for the full reference.

---

## 5.6 Sample Rate and Channel Capacity

Some audio formats carry fewer channels at higher sample rates. The table below shows how channel capacity changes with sample rate for the most common formats on DAD hardware.

| Format | Channels at 44.1 / 48 kHz | Channels at 88.2 / 96 kHz | Channels at 176.4 / 192 kHz |
|--------|---------------------------|---------------------------|------------------------------|
| MADI (standard) | 64 | 32 (S/MUX 2) | 16 (S/MUX 4) |
| MADI (High Speed) | 64 | 64 | 32 |
| Dante (standard) | 64 | 32 | 16 |
| Dante 256 IPCore *(v5.8.1.6)* | 256 | 128 | 64 |
| ADAT Lightpipe | 8 | 4 (S/MUX 2) | — |
| Thunderbolt 3 (DAD driver) | Up to 256 | Up to 256 | Up to 256 |

> **NOTE:** Channel capacity values in the table above are typical; actual values depend on your specific hardware model and firmware version. Confirm the capacity for your unit in the Technical Specifications in Appendix A.

---

## Cross-References

- **Chapter 1 — Introduction:** Compatible hardware list; hardware families overview
- **Chapter 3 — Installation:** Installing DADman and configuring the network
- **Chapter 4 — Hardware Description:** Front and rear panel connectors; physical I/O
- **Chapter 7 — Operation:** Conf tab reference for clock source and sample rate settings
- **Appendix A — Specifications:** Full hardware specification tables including routing matrix capacities

---

*[Pending from DAD engineering:]*  
*— DADman TCP/UDP port numbers used for unit discovery and control (needed for Ch. 9 firewall troubleshooting)*  
*— Dante 256 IPCore supported unit list confirmation (v5.8.1.6)*  
*— Three block diagram figures noted as placeholders above*
