---
title: "Chapter 3 — Installation"
sidebar_label: "Ch. 3 — Installation"
sidebar_position: 5
slug: /installation
---

# Chapter 3 — Installation

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.1.6  
> **TB3 Driver version covered:** Latest — see Download Centre at digitalaudiosupport.com  
> **Chapter status:** Draft v0.1a — Pending technical review by DAD engineering  
> **Last updated:** June 2026

---

## In This Chapter

This chapter covers everything required to install and configure DADman and its associated driver software on your computer. It is organised for first-time installation; if you are upgrading an existing installation, see [Chapter 10, Section 10.1 — Updating DADman and Firmware].

| Section | Covers | Relevant for |
|---------|--------|-------------|
| 3.1 | Installation overview | All users |
| 3.2 | Obtaining the software | All users |
| 3.3 | Installing DADman | All users |
| 3.4 | Installing the Thunderbolt 3 driver | AX64, AX Center, Core 256, Avid MTRX series only |
| 3.5 | Configuring the Thunderbolt 3 driver | AX64, AX Center, Core 256, Avid MTRX series only |
| 3.6 | macOS Sequoia: additional security configuration | macOS 15 (Sequoia) and later |
| 3.7 | Configuring the network connection | All Ethernet-connected users |
| 3.8 | Verifying the installation | All users |

---

## 3.1 Installation Overview

### 3.1.1 Software Components

DADman and the DAD Thunderbolt 3 driver are **two separate, independent applications**. Whether you need both — or only DADman — depends on how your hardware connects to the computer.

| Component | Purpose | Required for |
|-----------|---------|-------------|
| **DADman** | Configures and controls all connected DAD, NTP, and Avid hardware units over Ethernet | All supported hardware |
| **DAD Thunderbolt 3 driver** | Exposes the Thunder\|Core interface as a Core Audio device (macOS) or ASIO device (Windows) for DAW and audio application use | AX64, AX Center, Core 256, and Avid MTRX products only |

> **NOTICE:** The Thunderbolt 3 driver provides the audio *transport* between your computer and the hardware — your DAW sees it as an audio interface. DADman provides the *control* layer — routing, gain, monitoring, and configuration. Both can be installed and run on the same computer simultaneously without conflict.

If your hardware connects to the computer over Ethernet only (for example, an AX32, DX32R, or Penta unit), you need DADman only.

### 3.1.2 Connection Topology

DADman communicates with all connected units over your computer's network using the Ethernet (IP) protocol, regardless of whether those units also connect via Thunderbolt 3. See [Section 3.7 — Configuring the Network Connection] for guidance before installation.

---

## 3.2 Obtaining the Software

### 3.2.1 DAD and NTP Hardware Users

Download DADman and the Thunderbolt 3 driver from the DAD support portal:

**[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)**

A free DAD / NTP Technology account is required to access the Download Centre. If you do not have an account:

1. Navigate to the support portal and select **Create account**.
2. Complete the registration form.
3. After verifying your email address, log in and navigate to **Download Centre**.
4. Locate the DADman entry for your operating system and download the installer.
5. If your hardware is a Thunder\|Core product (AX64, AX Center, or Core 256), also download the Thunderbolt 3 driver for your operating system.

> **NOTICE:** Always check the release notes in the Download Centre before installing. Release notes document the tested OS versions, any known issues with new OS releases, and firmware compatibility requirements for that DADman version.

### 3.2.2 Avid Hardware Users

If you are using DADman with an Avid MTRX, MTRX II, or MTRX Studio:

1. Log in to your **Avid Master Account** at [https://avid.com](https://avid.com).
2. Navigate to your downloads and locate the DADman version approved for your Avid hardware.
3. Download the installer from your Avid account.

> **NOTICE:** Avid-approved DADman versions may differ from the latest version available on the DAD support portal. Always use the Avid Master Account version for Avid hardware to ensure compatibility.

---

## 3.3 Installing DADman

### 3.3.1 macOS

**Before you begin:** Ensure you are logged in to an account with Administrator privileges. Quit any audio applications that may be running.

1. Locate the downloaded DADman installer file (`.pkg` format) and double-click it to launch the installer.
2. Read the licence agreement and click **Continue**, then **Agree** to accept.
3. Click **Install**. When prompted, enter your Administrator password and click **Install Software**.
4. Click **Close** when installation completes.
5. Navigate to your **Applications** folder and confirm that **DADman.app** is present.

DADman is now installed. Do not launch it yet if you need to install the Thunderbolt 3 driver — proceed to [Section 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

If your hardware connects over Ethernet only, you may launch DADman now. Proceed to [Section 3.7 — Configuring the Network Connection](#37-configuring-the-network-connection).

### 3.3.2 Windows

**Before you begin:** Ensure you are logged in to an account with Administrator privileges. Quit any audio applications that may be running.

1. Locate the downloaded DADman installer file (`.exe` or `.msi` format) and double-click it.
2. If a User Account Control prompt appears, click **Yes** to allow the installer to run.
3. Follow the installer prompts, clicking **Next** at each step.
4. Click **Install** to begin installation.
5. Click **Finish** when installation completes.
6. Confirm that DADman appears in your Start menu.

If your hardware connects over Ethernet only, proceed to [Section 3.7](#37-configuring-the-network-connection). If you need the Thunderbolt 3 driver, proceed to [Section 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

---

## 3.4 Installing the Thunderbolt 3 Driver (Thunder|Core Products Only)

> **NOTICE:** This section applies only if your hardware is an AX64, AX Center, Core 256, or an Avid MTRX product. If your hardware connects to the computer over Ethernet only, skip to [Section 3.7](#37-configuring-the-network-connection).

The DAD Thunderbolt 3 driver enables your Thunder\|Core interface to appear as an audio device in macOS Core Audio (visible in **Audio MIDI Setup**) or as an ASIO device in Windows, making it available to your DAW and other audio applications. Installing the driver does not affect DADman's ability to communicate with the unit over Ethernet — these are independent connection paths.

> **NOTICE:** Do not connect your Thunder\|Core hardware to the computer's Thunderbolt port until the driver installation procedure instructs you to do so.

### 3.4.1 macOS

**Before you begin:** Ensure you are running macOS 11 Big Sur or later. Ensure DADman v5.6.7.1 or later is already installed (see [Section 3.3.1](#331-macos)).

1. Locate the downloaded Thunderbolt 3 driver installer (`.pkg` format) and copy it to your Desktop.
2. Double-click the `.pkg` file to launch the installer.
3. Follow the on-screen prompts. Click **Next**, then **Install**.
4. Enter your Administrator password when prompted and click **Install Software**.
5. If this is the first time the driver has been installed on this computer, macOS will display a **"System Extension Blocked"** notification.
   - Click **Open Security Preferences** (or **Open System Settings** on macOS Ventura and later).
6. In the **Privacy & Security** pane:
   - Click the lock icon at the bottom of the window and enter your password to unlock settings.
   - Click **Allow** next to the blocked extension from Digital Audio Denmark / NTP Technology.
7. When prompted, click **Restart** to restart the computer.

> **NOTICE:** The "System Extension Blocked" notification is a normal part of first-time installation on macOS. It is not an error. The extension must be allowed before the driver will function.

8. After restart, open **DADDriverSetup** from your Applications folder.
9. Connect your Thunder\|Core hardware to the computer's Thunderbolt 3 or USB-C port using a 20 Gbps-rated cable.

The driver is now installed. Proceed to [Section 3.5.1](#351-macos-daddriversetup) to configure the driver settings.

> **NOTICE — macOS Sequoia (15) and later:** Apple significantly tightened Thunderbolt accessory security permissions beginning with macOS Sequoia. Additional steps are required. See [Section 3.6 — macOS Sequoia: Additional Security Configuration](#36-macos-sequoia-additional-security-configuration) before proceeding.

### 3.4.2 Windows

**Before you begin:** Ensure you are running Windows 10 or Windows 11 (64-bit). Ensure DADman v5.6.7.1 or later is already installed (see [Section 3.3.2](#332-windows)).

1. Locate the downloaded Thunderbolt 3 driver installer (`.msi` format) and copy it to your Desktop.
2. Double-click the `.msi` file to launch the installer.
3. If a User Account Control prompt appears, click **Yes**.
4. Follow the on-screen prompts. Click **Next**, then **Install**.
5. Click **Finish** when installation completes.
6. Connect your Thunder\|Core hardware to the computer's Thunderbolt 3 or USB-C port using a 20 Gbps-rated cable.

The driver is now installed. Proceed to [Section 3.5.2](#352-windows-asio-configuration) to configure the driver in your audio application.

---

## 3.5 Configuring the Thunderbolt 3 Driver

### 3.5.1 macOS — DADDriverSetup {#351-macos-daddriversetup}

The **DADDriverSetup** application controls the channel count and device selection for the Thunderbolt 3 audio driver on macOS. Changes made here are immediately reflected in **Audio MIDI Setup** and are visible to any Core Audio–compatible application on the computer.

> **NOTICE:** The sample rate of the Thunderbolt audio driver is configurable both from within DADDriverSetup and directly from DADman. In normal operation, you do not need to open DADDriverSetup to change the sample rate.

**On macOS, the only reason to open DADDriverSetup is to change the number of Thunderbolt channels presented to the host.** All other parameters can be set from within DADman.

> **NOTICE — Intel vs. Apple Silicon Macs:** Apple M1 and later computers handle 256 bi-directional Thunderbolt channels without difficulty. On Intel-based Macs, system performance may benefit from reducing the channel count if your workflow does not require the full 256 channels — particularly at higher sample rates or with large CPU loads.

**To change the channel count:**

1. Open **DADDriverSetup** from your Applications folder.
2. Ensure your Thunder\|Core hardware is connected and powered on.
3. Configure the following settings:

| Parameter | Options | Notes |
|-----------|---------|-------|
| **Device Selection** | Drop-down list of connected Thunder\|Core units | If multiple units are daisy-chained on the Thunderbolt 3 bus, each unit can be selected individually |
| **Sample Rate** | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Also configurable from DADman; changes here are reflected immediately in Core Audio |
| **Channels** | 16, 64, 128, 256 (bi-directional) | All Thunder\|Core interfaces support 256 bi-directional channels in hardware. M1 and later Macs handle 256 channels without issue. On Intel Macs, reducing this value lowers CPU overhead. |

> **NOTICE:** The Channels setting controls how many channels are visible to Core Audio and your DAW. It does not affect the number of channels available internally within DADman's routing matrix.

4. After making changes, open **Audio MIDI Setup** (**Applications > Utilities > Audio MIDI Setup**) to confirm that the DAD Thunder\|Core interface appears with the correct format. The format shown should match the channel count and sample rate configured in DADDriverSetup.

> **TIP:** If DADDriverSetup opens and your connected Thunder\|Core unit appears in the Device Selection dropdown, the Thunderbolt driver is installed and functioning correctly. This is the quickest way to confirm driver operation on macOS without needing to open a DAW.

### 3.5.2 Windows — ASIO Configuration {#352-windows-asio-configuration}

The Thunderbolt 3 ASIO driver is configured from within your audio application's ASIO settings dialogue.

**To configure the driver:**

1. Open your DAW or audio application.
2. In the audio device settings, select **Digital Audio Denmark** as the ASIO driver.
3. Open the ASIO configuration dialogue. Configure the following parameters:

| Parameter | Options | Notes |
|-----------|---------|-------|
| **Device Selection** | Drop-down list of connected Thunder\|Core units | Select the unit to use as the primary ASIO device |
| **Buffer Size** | 16, 32, 64, 256, 512, 1024 samples | Start with a large value (512 or 1024) to ensure a stable audio path; reduce once the system is confirmed stable |
| **Sample Rate** | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Controlled by your audio application; listed here for reference |
| **Channels** | 16, 64, 128 (bi-directional) | The Windows Thunderbolt ASIO driver supports a maximum of 128 bi-directional channels. Reduce from maximum if not all channels are needed to improve system performance. |

> **TIP:** If the ASIO configuration dialogue opens and your Thunder\|Core unit appears in the Device Selection dropdown, the Thunderbolt ASIO driver is installed and functioning correctly. This is the quickest way to confirm driver operation on Windows without needing to initiate audio playback.

**Driver diagnostics — Windows only:**

The ASIO driver configuration window includes three real-time performance indicators. Monitor these during initial setup and if you experience audio issues:

| Indicator | Acceptable Value | If out of range |
|-----------|-----------------|-----------------|
| **Missed IRs** (missed audio interrupts) | 0 | Audio interrupts are being dropped by competing Windows system processes. Increase the buffer size or reduce background CPU load. |
| **PCIe Load** | Low percentage; scales with channel count | High values indicate the PCIe bus is saturated. Reduce channel count or investigate other PCIe bandwidth consumers. |
| **DPC Latency** (Deferred Procedure Call) | Low (< ~500 µs) | Windows OS interrupt scheduling is introducing latency. Use a DPC latency analyser tool to identify the offending driver. Disable Wi-Fi, USB power management, or other interrupt-generating drivers as a first step. |

> **NOTICE:** Start with a large buffer size (512 or 1024 samples) when first configuring the ASIO driver. Once the system is confirmed to be running without missed interrupts, you may reduce the buffer size to the lowest stable value for your workflow.

---

## 3.6 macOS Sequoia: Additional Security Configuration

> **Applies to:** macOS 15 (Sequoia) and all subsequent macOS releases  
> **Source:** DAD Technical Support Bulletin, January 2026

Beginning with macOS Sequoia, Apple significantly tightened the security controls governing Thunderbolt and USB accessory connections. This change affects all Thunderbolt interfaces from all manufacturers — it is not specific to DAD hardware or software.

If you are installing on macOS Sequoia or later, perform the following steps **in addition to** the standard driver installation in [Section 3.4.1](#341-macos).

### 3.6.1 Setting Accessory Permissions

1. Open **System Settings** (Apple menu > System Settings).
2. Navigate to **Privacy & Security**.
3. Scroll down to the **Accessories** section.
4. Set the accessory connection permission to either:
   - **Automatically allow new accessories to connect** — recommended for studio computers that do not leave a controlled environment
   - **Always Allow** — maximum permissiveness; appropriate if you connect multiple different Thunderbolt devices
5. When prompted, approve the change with your password or Touch ID.

### 3.6.2 Reinstalling the Driver on Sequoia

If you have a previously installed version of the Thunderbolt 3 driver and are upgrading to a new version on macOS Sequoia:

> **NOTICE:** Apple's security model requires removing the old driver before installing the new one. Simply running the new installer over the existing installation will not result in a correctly functioning driver on Sequoia.

1. Locate **DADDriverSetup.app** in your Applications folder.
2. Move it to the Trash (**right-click > Move to Trash** or drag to Trash).
3. macOS will display a warning indicating that the system extension will be removed. This is the expected and desired outcome — click to confirm removal.
4. Download the latest Thunderbolt 3 driver from the DAD support portal at [https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com).
5. Install the new driver following the procedure in [Section 3.4.1](#341-macos).
6. When the installer completes, macOS will display a dialogue asking you to approve the new Thunderbolt connection. Click **Allow** (or equivalent) and permit the computer to restart.

After restart, your Thunder\|Core hardware should connect correctly.

### 3.6.3 macOS Sequoia — Known Network Connection Issue

> **Affects:** All DADman versions on macOS Sequoia; expected to be resolved in a future DADman update  
> **Version noted:** As of DADman v5.8.1.6

On macOS Sequoia, DADman may fail to connect to devices on the network when the application first launches. Audio devices connected via Thunderbolt 3 are not affected by this issue.

**Workaround:**

1. Launch DADman and leave it running even if no devices appear in the Device List.
2. Log out of your macOS user account (**Apple menu > Log Out**).
3. Log back in to your macOS user account.
4. DADman will now successfully connect to network devices.

> **NOTICE:** Setting DADman to launch automatically at login eliminates the need to perform this workaround manually on each boot. See [Chapter 8 — Advanced Features, Section 8.X — Configuring DADman to Launch at System Startup].

---

## 3.7 Configuring the Network Connection

### 3.7.1 Network Overview

DADman communicates with all connected units over Ethernet using the IP protocol. This includes units that also connect to the computer via Thunderbolt 3 — both connection paths are active simultaneously and serve different purposes (Thunderbolt carries audio; Ethernet carries control data).

DADman uses your computer's network to discover and communicate with hardware units. The settings of each unit are stored on the unit itself; DADman reads and writes those settings over the network connection. If the network connection is lost, DADman loses control of the unit, but audio passes through the unit uninterrupted.

### 3.7.2 Dedicated Network Strongly Recommended

> **NOTICE — Network isolation:** For reliable operation, DAD strongly recommends using a **dedicated Ethernet network** for DADman control, separate from your general studio or facility network. Sharing the control network with Audio over IP traffic (Dante, AES67), EuControl, or general office/internet traffic introduces the risk of audio and control dropouts.

Recommended network topology for a typical studio installation:

| Network | Purpose | Computer connection |
|---------|---------|-------------------|
| Dedicated control network | DADman ↔ hardware units | Dedicated Ethernet port / USB–Ethernet adapter |
| Studio/IP audio network | Dante / AES67 audio transport | Dedicated Ethernet port |
| Office / internet network | General computer use | Wi-Fi or third Ethernet port |

A simple two-unit system (one computer + one hardware unit) can use a direct Ethernet connection with a single cable between the computer's Ethernet port and the unit's network port — no switch required if both are configured on the same subnet.

### 3.7.3 IP Address Configuration

DADman discovers units by IP address. Units can be configured with either a static IP address or DHCP-assigned address, depending on your network environment.

**For simple dedicated-network setups** (no DHCP server on the control network), configure static IP addresses:

| Device | Example IP address | Subnet mask |
|--------|-------------------|-------------|
| Computer (control NIC) | 192.168.1.1 | 255.255.255.0 |
| Hardware unit 1 | 192.168.1.10 | 255.255.255.0 |
| Hardware unit 2 | 192.168.1.11 | 255.255.255.0 |

IP addresses are set on the hardware unit using DADman, the unit's front panel display, or a web browser interface, depending on the hardware model. Refer to the installation guide for your specific hardware unit for instructions on setting its IP address.

> **NOTICE:** After changing the IP address of a hardware unit, you must update DADman's device list to reflect the new address before the connection will be re-established.

**For facility networks with a DHCP server:** Units can be configured to use DHCP. However, if DHCP leases change, DADman will lose track of units at their previous address. Assigning DHCP reservations (fixed MAC-to-IP mappings) on the switch or router is recommended to prevent this.

---

## 3.8 Verifying the Installation

Once DADman and (if applicable) the Thunderbolt 3 driver are installed and the network is configured, perform the following checks to confirm the installation is correct before proceeding to [Chapter 6 — Getting Started].

### 3.8.1 Verifying DADman

1. Launch **DADman** from your Applications folder (macOS) or Start menu (Windows).
2. Wait up to 30 seconds for device discovery to complete.
3. Confirm that your hardware unit(s) appear in the **Device List** at the top of the DADman window.
4. Confirm that the unit's current firmware version is displayed and matches your expectations.

If no devices appear, see [Chapter 9 — Troubleshooting, Section 9.2 — Network and Connectivity Issues].

### 3.8.2 Verifying the Thunderbolt 3 Driver (macOS)

1. Open **Audio MIDI Setup** (**Applications > Utilities > Audio MIDI Setup**).
2. Confirm that the **DAD Thunder\|Core** interface appears in the device list on the left.
3. Confirm that the format shown (e.g., "256 ch, 48000 Hz") matches the settings configured in DADDriverSetup.

If the interface does not appear, confirm:
- The unit is powered on and connected via a 20 Gbps-rated Thunderbolt cable.
- The system extension was allowed in **Privacy & Security** (see [Section 3.4.1](#341-macos), step 6).
- If on macOS Sequoia: the Accessories permission is set correctly (see [Section 3.6.1](#361-setting-accessory-permissions)).

### 3.8.3 Verifying the Thunderbolt 3 Driver (Windows)

1. Open your DAW or audio application.
2. In the audio device settings, confirm that **Digital Audio Denmark** is selectable as the ASIO driver.
3. Open the ASIO configuration dialogue and confirm your device appears in the Device Selection dropdown.
4. Confirm that the **Missed IRs** counter reads **0** after a few seconds of idle operation.

---

## Summary of Files Installed

| File / Application | Platform | Location | Purpose |
|-------------------|----------|----------|---------|
| `DADman.app` | macOS | `/Applications/` | Main control application |
| `DADman.exe` | Windows | `C:\Program Files\DADman\` | Main control application |
| `DADDriverSetup.app` | macOS | `/Applications/` | Thunderbolt 3 driver configuration |
| DAD ASIO driver | Windows | Installed via `.msi` | ASIO audio driver for DAW use |
| DAD system extension | macOS | System — not user-accessible | Kernel extension enabling Thunderbolt 3 Core Audio device |

---

## Cross-References

- **Chapter 1 — Introduction:** Architecture overview; understanding how DADman, the TB3 driver, and network communicate
- **Chapter 2 — System Requirements:** OS compatibility and minimum hardware specifications
- **Chapter 6 — Getting Started:** First steps after installation — connecting to your device and verifying signal
- **Chapter 9 — Troubleshooting:** Diagnostic steps if installation does not complete successfully or devices are not discovered
- **Chapter 10 — Maintenance:** Updating DADman and firmware

---

*[Placeholder: figures to be inserted — TB3 driver installation screenshots (macOS and Windows), DADDriverSetup configuration window, Audio MIDI Setup showing the DAD interface, macOS Privacy & Security / Accessories screen, Windows ASIO dialogue]*

*[Pending from DAD engineering: full firmware update procedure cross-reference, confirmed IP addressing instructions per hardware model]*
