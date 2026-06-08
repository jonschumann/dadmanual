---
id: ch10-maintenance
title: "Chapter 10 — Maintenance"
sidebar_label: "Ch. 10 — Maintenance"
sidebar_position: 12
slug: /maintenance
---

# Chapter 10 — Maintenance

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0.1 — Hardware-specific environmental specifications pending per-model confirmation from DAD engineering  
> **Last updated:** June 2026

---

## In This Chapter

| Section | Covers |
|---------|--------|
| 10.1 | Updating DADman software |
| 10.2 | Updating hardware firmware |
| 10.3 | Updating Dante firmware |
| 10.4 | Updating the Thunderbolt 3 driver |
| 10.5 | Verifying current software and firmware versions |
| 10.6 | Cleaning |
| 10.7 | Storage |
| 10.8 | End-of-life and disposal |

---

## 10.1 Updating DADman Software

DADman updates are distributed as complete installer packages — not incremental patches. Installing a new version replaces the existing installation.

### 10.1.1 Before Updating

- Review the **release notes** for the new version before installing. Release notes document tested OS versions, firmware compatibility requirements, changed behaviours, and any known issues with new OS releases. Release notes are available in the Download Centre at [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
- Confirm your operating system is listed as supported for the new DADman version. Refer to the release notes — not all DADman versions support all OS versions.

### 10.1.2 Updating DADman — macOS

1. Download the new DADman installer (`.pkg`) from the DAD support portal or your Avid Master Account.
2. Quit DADman if it is running.
3. Double-click the installer and follow the on-screen prompts. The new version replaces the existing installation automatically.
4. After installation, launch DADman and confirm the version number in **DADman > About DADman**.

### 10.1.3 Updating DADman — Windows

1. Download the new DADman installer (`.exe` or `.msi`) from the DAD support portal.
2. Close DADman if it is running.
3. Double-click the installer and follow the on-screen prompts. Click **Yes** if a User Account Control prompt appears.
4. After installation, launch DADman and confirm the version number in **Help > About DADman**.

> **NOTE:** Updating DADman does not update hardware firmware. These are separate operations requiring separate procedures. Always check the release notes to determine whether a DADman update recommends or requires a corresponding firmware update.

---

## 10.2 Updating Hardware Firmware

### 10.2.1 Critical: Save Configuration Before Updating

> **WARNING — Settings will be lost**  
> **Firmware updates reset all settings stored on the hardware unit to factory default values.** Routing configurations, gain settings, channel labels, monitor profiles, routing presets, and all other stored parameters are permanently erased during a firmware update. The only way to recover these settings is to reload a previously saved DADman Settings File (`.dms`).

**Before updating any hardware firmware:**

1. Open DADman and confirm the unit to be updated is connected and visible in the Device List.
2. Go to **File > Save As…** and save the current settings to a `.dms` file with a clear filename (e.g., `StudioA_AXCenter_pre-update_2026-06.dms`).
3. If a Monitor Profile is loaded, save it separately: **File > Save Profile As…**
4. Confirm both files are saved to a location that is backed up.

> **TIP:** The firmware update warning dialog in DADman *(v5.7.2 and later)* includes a reminder to back up settings before proceeding. Do not dismiss this dialog without confirming the backup is complete.

### 10.2.2 Obtaining Firmware Files

Firmware files for all DAD and NTP Technology hardware are available in the Download Centre at [digitalaudiosupport.com](https://www.digitalaudiosupport.com). A free account is required.

Download the firmware file for your specific hardware model. Do not use firmware from one model on a different model — firmware is not interchangeable between hardware families.

### 10.2.3 Performing the Firmware Update via DADman

1. Open DADman. Confirm the unit to be updated is connected and visible in the Device List.
2. In the Device List, right-click the unit (Windows) or use the Action button (macOS).
3. Select **Update Firmware**.
4. Click **Acknowledge** or **Continue** when the backup reminder dialog appears (after confirming your backup is complete).
5. Browse to the downloaded firmware file and select it.
6. The firmware update begins. A progress indicator shows the update status.
7. Do not interrupt power to the unit or close DADman during the update. An interrupted firmware update may render the unit unbootable and require factory recovery.
8. After the update completes, the unit automatically reboots. The Device List shows the unit disconnecting and reconnecting. Wait for the **Ready** LED to return to solid green (up to 60 seconds).
9. Confirm the new firmware version in the Device List. Reload your `.dms` settings file via **File > Open…**.

> **CAUTION:** Do not interrupt power to the hardware unit during a firmware update under any circumstances. If a power failure occurs mid-update, contact DAD support at support@ntp.dk before powering the unit back on.

### 10.2.4 Firmware Version History Reference

For a complete record of firmware versions, release dates, and what changed in each release, refer to the **Version History** compiled document:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

The current firmware versions for each hardware family at the time of publication (DADman v5.8.2 build 2):

| Hardware family | Current firmware |
|----------------|-----------------|
| AX64, AX Center, Core 256, MTRX II, Control 01/02 | v1.1.2.4 |
| Dante 256 IPCore (Thunder\|Core gen) | v1.0.3.1 |
| AX32, DX32R, Penta 720, Penta 721s, Avid MTRX | v2.4.6.4 |
| Brooklyn 2 Dante module | v1.0.3.1 |
| Brooklyn 3 Dante module | v1.1.0.3 |
| MTRX Studio | v1.1.6.3 |
| MTRX Studio Dante 64 IPCore | v1.0.3.1 |
| Dante Card | v1.0.3.1 |

---

## 10.3 Updating Dante Firmware

Dante firmware (for Dante modules and IPCore hardware in DAD units) is updated separately from the main board firmware, using the **Dante Updater** tool within **Dante Controller** — not via DADman.

### 10.3.1 Requirements

- **Dante Controller** must be installed on the computer. Download from [audinate.com](https://www.audinate.com).
- The DAD unit must be connected to the Dante network and visible in Dante Controller.
- Download the appropriate Dante firmware file (`.dnt`) from the DAD support portal. Dante firmware files are bundled with each DADman software release.

### 10.3.2 Dante Firmware Update Procedure

1. Open **Dante Controller**.
2. Navigate to **Device > Dante Updater** to open the Dante Updater tool.
3. In the Dante Updater **Advanced Settings**, enable **Allow Imported Firmware**. This is required to load DAD-supplied firmware files.
4. In the Dante Updater, select the **Library** tab and click **Imported Files**.
5. Import the `.dnt` firmware files downloaded from the DAD support portal by clicking **Import**.
6. Return to the Dante Updater **Home** tab and select **Imported Firmware Files** from the firmware source selector.
7. Select the DAD unit to be updated from the device list.
8. Follow the on-screen prompts to begin the update.
9. Wait for the update to complete. The Dante module reboots automatically.

> **NOTE:** Brooklyn 3 Dante module users: from firmware v1.1.0.3 (released January 2026), the Brooklyn 3 supports **ST 2110** protocol without DDM (Dante Domain Manager). This requires both the updated Dante firmware and the latest version of Dante Controller. See the release notes for details.

---

## 10.4 Updating the Thunderbolt 3 Driver

*Applies to AX64, AX Center, Core 256 users only. Skip for Ethernet-only hardware.*

The DAD Thunderbolt 3 driver (DADDriverSetup) is updated separately from DADman. Driver updates are released alongside firmware updates when Thunderbolt functionality improvements are included.

### 10.4.1 macOS — Driver Update Procedure

> **NOTE:** On macOS, the old driver version must be removed before installing the new one. Installing over an existing driver without removing it first does not result in a correctly functioning driver on macOS Sequoia or later.

1. Download the new Thunderbolt 3 driver installer (`.pkg`) from [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Locate **DADDriverSetup.app** in your Applications folder.
3. Move it to the Trash (**right-click > Move to Trash**). macOS displays a warning that the system extension will be removed — confirm to continue.
4. Run the new driver installer: double-click the downloaded `.pkg` and follow the on-screen prompts.
5. When prompted, approve the new system extension in **System Settings > Privacy & Security**.
6. Restart the computer when prompted.
7. After restart, open **DADDriverSetup** from Applications and confirm the version number shown.
8. Connect your Thunder\|Core hardware and confirm it appears in **Audio MIDI Setup**.

### 10.4.2 Windows — Driver Update Procedure

1. Download the new ASIO driver installer (`.msi`) from [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Quit any audio applications using the ASIO driver.
3. Open **Settings > Apps** (or **Control Panel > Programs**) and uninstall the existing DAD Thunderbolt 3 ASIO driver.
4. Restart the computer.
5. Run the new driver installer (`.msi`) and follow the on-screen prompts.
6. Open your audio application and confirm the updated driver version is visible in the ASIO device settings.

### 10.4.3 Current Driver Versions

| Driver | Platform | Current version |
|--------|----------|----------------|
| DAD Thunderbolt 3 Core Audio Driver (DADdriver) | macOS | v1.2.2 |
| DAD Thunderbolt 3 ASIO Driver | Windows | v1.1.2 |

*Current as of DADman v5.8.2 build 2 (January 2026).*

---

## 10.5 Verifying Current Software and Firmware Versions

### 10.5.1 DADman Version

- **macOS:** **DADman menu > About DADman**
- **Windows:** **Help > About DADman**

The About DADman dialog shows the DADman version number and build. From v5.7.2, the **Copy Information** button copies the complete diagnostic information — DADman version, OS version, connected device list, and Thunderbolt driver versions — to the clipboard.

### 10.5.2 Hardware Firmware Version

The firmware version for each connected unit is displayed in the **Device List** alongside the unit name and ID. Hover over the firmware version field for additional detail where available.

### 10.5.3 Thunderbolt Driver Version

The Thunderbolt driver version is included in the **About DADman > Copy Information** output *(v5.7.2 and later)*. It can also be found in **DADDriverSetup** (macOS) or the ASIO driver configuration dialog (Windows).

### 10.5.4 Release Notes and Update History

All release notes are archived at [digitalaudiosupport.com](https://www.digitalaudiosupport.com) in the Download Centre. A compiled version history is also maintained in:  
`Research/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

---

## 10.6 Cleaning

**Cleaning materials:** Use only a soft, dry cloth to clean the front and rear panels and enclosure of all DAD hardware. Do not use:
- Liquid cleaners, solvents, or spray cleaners of any kind
- Abrasive cloths or pads
- Compressed air directed into ventilation openings or connector apertures

**Connectors:** Do not insert objects into connector apertures for cleaning purposes. If a connector appears contaminated, consult qualified service personnel.

> **CAUTION:** Disconnect the unit from the mains power supply before cleaning. Do not allow any liquid to enter the enclosure through ventilation openings or connector apertures.

**Screens and displays:** Units with front panel LCD displays (AX Center, MTRX Studio) may be cleaned with a soft, dry cloth. Do not use screen cleaning fluids.

**Frequency:** Inspect and clean the front panel and ventilation openings as part of a regular maintenance schedule — at minimum, once per year in a clean studio environment; more frequently in environments with elevated dust levels.

---

## 10.7 Storage

If a hardware unit is to be stored for an extended period (more than a few weeks), the following conditions should be maintained:

| Parameter | Condition |
|-----------|-----------|
| **Temperature** | −20°C to +60°C (−4°F to +140°F) |
| **Humidity** | 10% to 80% relative humidity, non-condensing |
| **Packaging** | Store in the original packaging if available. If the original packaging is not available, use anti-static packaging for any exposed circuit boards or connector interfaces |
| **Orientation** | Store rackmount units horizontally with the front panel facing up |
| **Power** | Disconnect from mains power before storage |

> **NOTE:** Allow the unit to reach room temperature before powering on after storage in cold conditions. Powering on a cold unit in a warm environment can cause condensation to form on internal components.

---

## 10.8 End-of-Life and Disposal

DAD / NTP Technology hardware and associated cables are subject to the European WEEE Directive (Waste Electrical and Electronic Equipment, Directive 2012/19/EU) and equivalent national and regional regulations.

**Do not dispose of this equipment in unsorted household waste.**

At end of life, the equipment must be:
- Returned to an authorised dealer or distributor for recycling, or
- Delivered to an authorised local recycling collection point, or
- Returned to DAD / NTP Technology for proper disposal

Contact DAD / NTP Technology for disposal guidance:  
Email: info@digitalaudio.dk  
Web: www.digitalaudio.dk

The WEEE symbol (crossed-out wheelie bin) on the product or its packaging identifies it as subject to separate collection requirements. See also [Front Matter, Section FM.8 — Disposal and WEEE].

---

*[Pending from DAD engineering:]*  
*— Per-model confirmed operating and storage temperature / humidity ranges (values above are indicative)*  
*— Fan filter cleaning interval and procedure for units with replaceable fan filters (if applicable)*  
*— Fuse type and replacement procedure per hardware model (to be added per model as applicable)*
