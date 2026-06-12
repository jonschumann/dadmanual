---
title: "Chapter 9 — Troubleshooting"
sidebar_label: "Ch. 9 — Troubleshooting"
sidebar_position: 11
---

# Chapter 9 — Troubleshooting

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Chapter status:** Draft v0.2 — Log file access documented (9.9.1–9.9.2); error message catalogue and LED state tables still pending from DAD engineering  
> **Last updated:** June 2026

---

## How to Use This Chapter

Find the section matching the category of your problem, then locate the symptom that most closely describes what you are experiencing. Each row gives the probable cause and remedy. Where the remedy involves a multi-step procedure, a cross-reference is provided rather than repeating the steps here.

**Before contacting support**, gather diagnostic information using:  
**DADman menu > About DADman > Copy Information** _(v5.7.2 and later)_  
This copies DADman version, connected device list, OS version, and Thunderbolt driver version to the clipboard. Include this in any support request.

| Section             | Category                        |
| ------------------- | ------------------------------- |
| 9.1 | Network and Device Connectivity |
| 9.2 | Audio Issues                    |
| 9.3 | Software and Startup            |
| 9.4 | Thunderbolt and Driver          |
| 9.5 | Clock and Synchronisation       |
| 9.6 | Monitor Control                 |
| 9.7 | Reset Procedures                |
| 9.8 | Known Issues by Version         |
| 9.9 | Getting Support                 |

---

## 9.1 Network and Device Connectivity

_Most common category for new installations and after network or hardware changes._

| Symptom                                                       | Probable cause                                                                                  | Remedy                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No units appear in Device List after launching DADman         | Unit not powered on                                                                             | Power on the unit; confirm the front panel **Ready** LED is solid green                                                                                                                                                                                                                                                       |
|                                                               | Unit not on the same Ethernet network                                                           | Connect unit and computer to the same switch or via direct cable; confirm cable is Cat5e or Cat6                                                                                                                                                                                                                              |
|                                                               | Unit and computer on different subnets                                                          | Set computer network interface to the same subnet as the unit (e.g., both `192.168.1.x`). Check unit IP via its front panel display                                                                                                                        |
|                                                               | macOS Sequoia (v15): OS-level discovery issue                | Log out of the macOS user account and log back in. Thunderbolt connections are unaffected. See [Section 9.3] and [Ch. 3, Section 3.7] |
|                                                               | Windows: firewall blocking DADman                                               | Add a firewall exception for DADman. With BitDefender, update to v5.7.2 or later                                                                                                                                                                                              |
| Unit appears in Device List but shows as disconnected         | Ethernet cable disconnected or faulty                                                           | Check cable at both ends; replace if damaged                                                                                                                                                                                                                                                                                  |
|                                                               | Unit rebooting (e.g., after firmware update) | Wait up to 60 seconds; confirm Ready LED is solid green                                                                                                                                                                                                                                                                       |
|                                                               | IP address conflict — two devices sharing the same IP                                           | Check all network devices for duplicate IPs; assign unique static IPs                                                                                                                                                                                                                                                         |
| Unit connected, then disappeared                              | Network interruption                                                                            | Check switch, cable, and port. DADman retries continuously _(v5.7.0+)_ — the unit reappears automatically once the connection is restored                                                                                                                  |
| Only some units appear (multi-unit system) | Subnet mask mismatch                                                                            | Confirm all units and the computer share the same subnet mask (e.g., `255.255.255.0`)                                                                                                                                                                                      |
|                                                               | Duplicate IP addresses                                                                          | Connect and configure one unit at a time; assign unique IPs                                                                                                                                                                                                                                                                   |
| Unit visible but settings differ from expected                | `.dms` file applied on launch with different settings                                           | If "Open last file at startup" is enabled, DADman applies the saved file to units on launch. Check **File > Open** to confirm which file is loaded                                                                                                                                                            |

---

## 9.2 Audio Issues

| Symptom                                                      | Probable cause                                                                                  | Remedy                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No audio at analogue output                                  | Input not routed to output                                                                      | Open **Con** tab; verify a blue square crosspoint exists between the input and required output                                                                                                                                                                   |
|                                                              | Output channel muted                                                                            | Check **DA** tab; confirm **Mute** is not engaged                                                                                                                                                                                                                |
|                                                              | Input channel muted                                                                             | Check **AD** tab; confirm **Mute** is not engaged                                                                                                                                                                                                                |
|                                                              | Output level fader at minimum                                                                   | Raise DA output level fader to appropriate setting for the downstream equipment                                                                                                                                                                                  |
|                                                              | Clock mismatch causing silence                                                                  | In **Con** tab: yellow status indicator on an input row = sync loss. Go to **Conf** tab and verify Source and Sample Rate. See [Section 9.5] |
| Distorted audio at high signal levels                        | Output level set too high for downstream equipment                                              | In **DA** tab, reduce output level fader. Example: +24 dBu output into a +18 dBu maximum input device clips the downstream equipment at approximately −6 dBFS                                                                    |
| Signal LED not illuminating despite known signal             | Input gain too low to exceed −42 dBFS threshold                                                 | Increase **MIC gain** in **AD** tab                                                                                                                                                                                                                              |
|                                                              | Wrong input type selected                                                                       | Verify MIC or LINE is selected correctly                                                                                                                                                                                                                         |
|                                                              | Source cable faulty or disconnected                                                             | Check physical connections                                                                                                                                                                                                                                       |
| Clip LED illuminating during normal levels                   | Input gain too high                                                                             | Reduce MIC gain in **AD** tab                                                                                                                                                                                                                                    |
|                                                              | Downstream equipment clipping                                                                   | Reduce DA output level — see "Distorted audio" above                                                                                                                                                                                                             |
| Clicks or pops in audio                                      | Sample rate or clock mismatch                                                                   | See [Section 9.5 — Clock and Synchronisation]                                                                                                                                                |
|                                                              | Buffer size too small (Thunderbolt)                                          | Increase ASIO buffer size; see [Section 9.4]                                                                                                                                                 |
| Only one channel of a stereo pair carries audio              | Stereo link not enabled                                                                         | Enable Mono/Stereo link in **AD** or **DA** tab for the channel pair                                                                                                                                                                                             |
|                                                              | Only one crosspoint connected                                                                   | In **Con** tab, **Shift + click** to connect both channels of the pair simultaneously                                                                                                                                                                            |
| AX Center analogue inputs not passing audio                  | ADC timing error in firmware before v1.1.0.4    | Update AX Center firmware to v1.1.0.4 or later _(January 2025 hotfix)_                                                                                                                        |
| AX Center / Thunder\|Core DA card channel 8 phase error      | Bug in firmware before v1.0.6.3                 | Update Thunder\|Core firmware to v1.0.6.3 or later _(September 2024)_                                                                                                                         |
| ADAT channel 3 not working at 88.2 or 96 kHz | Bug in firmware before v1.0.6.3                 | Update Thunder\|Core firmware to v1.0.6.3 or later                                                                                                                                                               |
| Delay not applied on channels above 16                       | Bug in firmware before v1.0.6.3                 | Update Thunder\|Core firmware to v1.0.6.3 or later                                                                                                                                                               |
| 3G SDI channels not enabled after power-up                   | Timing bug in Family 1 firmware before v2.3.6.1 | Update AX32 / DX32R / Penta firmware to v2.3.6.1 or later _(December 2022)_                                                                                                                   |

---

## 9.3 Software and Startup

| Symptom                                                                                         | Probable cause                                                                                                                                      | Remedy                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DADman does not launch on Windows                                                               | Missing `VCRUNTIME140_1.DLL`                                                                                                                        | Update to DADman v5.7.2 or later                                                                                                                                                                                                                          |
|                                                                                                 | Incomplete installation                                                                                                                             | Uninstall, restart, reinstall from [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                         |
| macOS Sequoia: DADman cannot connect to units on the network at launch          | macOS 15 OS-level device discovery issue                                                                                                            | **Workaround:** Log out (**Apple menu > Log Out**), then log back in. Thunderbolt connections are unaffected. _(Known open issue as of v5.8.2; fix in development)_ |
| DADman crashes when double-clicking a `.dms` file in Finder (macOS)          | Bug before v5.8.0                                                                                                   | Update to DADman v5.8.0 or later                                                                                                                                                                                                                          |
| Monitor Profile file becomes corrupted after cancelling a load                                  | Bug before v5.8.0                                                                                                   | Update to DADman v5.8.0 or later; restore from a backup `.dmprof` file                                                                                                                                                                                    |
| Windows: MIDI crash in DADman                                                   | Bug before v5.8.1                                                                                                   | Update to DADman v5.8.1 build 6 or later                                                                                                                                                                                                                  |
| macOS: Display scaling artefacts (thin lines when scrolling) | Bug before v5.8.0 on scaled displays                                                                                | Update to DADman v5.8.0 or later                                                                                                                                                                                                                          |
| DADman not saving files on macOS logout or shutdown                                             | Bug before v5.7.0 (general); before v5.8.0 in Menu Bar Only mode | Update to DADman v5.8.0 or later; enable **Always Save File** in Preferences                                                                                                                                                                              |
| macOS: DADman won't become frontmost from tray icon (Sonoma) | Bug before v5.8.0                                                                                                   | Update to DADman v5.8.0 or later                                                                                                                                                                                                                          |
| Windows: BitDefender firewall causing device lock-up                            | Known conflict before v5.7.2                                                                                        | Update to DADman v5.7.2 or later                                                                                                                                                                                                                          |
| Fold-down data corruption with matrices > 1024 elements                                         | Bug before v5.7.0                                                                                                   | Update to DADman v5.7.0 or later                                                                                                                                                                                                                          |

---

## 9.4 Thunderbolt and Driver

_Applies to AX64, AX Center, Core 256 only. Skip for Ethernet-only hardware._

| Symptom                                                                     | Probable cause                                                                  | Remedy                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit not appearing in macOS Audio MIDI Setup                                | System extension not allowed                                                    | Open **System Settings > Privacy & Security**; allow the extension from Digital Audio Denmark / NTP Technology A/S; restart                                                                                                                               |
|                                                                             | macOS Sequoia: tightened accessory security                     | Set **System Settings > Privacy & Security > Accessories** to **Automatically allow** or **Always Allow**. See [Ch. 3, Section 3.7]                   |
|                                                                             | Driver not installed                                                            | Install the DAD Thunderbolt 3 driver from [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                      |
|                                                                             | Old driver version conflicting with macOS update                                | Remove old `DADDriverSetup.app` (drag to Trash; approve removal), then reinstall the latest driver                                                                                                                                                         |
| Device appears in Audio MIDI Setup with no channels                         | Sample rate or channel count mismatch                                           | Open **DADDriverSetup** and verify Sample Rate and Channels settings match your DAW's expected format                                                                                                                                                                         |
| Windows ASIO: **Missed IRs** counter non-zero               | System interrupt contention                                                     | Increase ASIO Buffer Size (512 or 1024 samples); close unnecessary background applications; disable Wi-Fi                                                                                                                                                  |
| Windows ASIO: High **PCIe Load**                            | Too many channels configured                                                    | Reduce Channels setting in ASIO driver configuration                                                                                                                                                                                                                          |
| Windows ASIO: High **DPC Latency**                          | Windows scheduling delays from third-party drivers                              | Use a DPC Latency analyser to identify the offending driver. Common causes: wireless adapters, USB power management, antivirus. Enable high-performance power plan                                                            |
| macOS: DADman cannot communicate with unit over Thunderbolt | Thunderbolt communication stack issue                                           | Update DAD Thunderbolt 3 driver to v1.2.2 or later **and** update Thunder\|Core firmware to v1.1.0.3 or later. Both updates are required _(December 2024)_ |
| Audio dropouts over Thunderbolt                                             | Thunderbolt cable below 20 Gbps                                                 | Replace cable with a certified Thunderbolt 3 cable rated to 20 Gbps minimum                                                                                                                                                                                                   |
| Windows: ASIO driver not visible in audio application       | Driver not installed                                                            | Install the DAD Thunderbolt 3 ASIO driver — it is a separate installer from DADman                                                                                                                                                                                            |
| AX Center Dante Card: external Dante sync not working       | Bug in firmware before v1.1.0.4 | Update AX Center firmware to v1.1.0.4 or later _(January 2025)_                                                                                                                                            |

---

## 9.5 Clock and Synchronisation

| Symptom                                                        | Probable cause                                          | Remedy                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yellow status indicator on a Con tab input row                 | Sync loss or sample rate mismatch on that digital input | Verify the source device sample rate matches the DAD unit. In **Conf** tab, confirm Source and Sample Rate are correct. If this input should be the clock master, set **Source** to that input (e.g., MADI Coax, Dante, Word Clock) |
| Clicks and pops throughout audio                               | Unit not locked to a stable clock                       | In **Conf** tab, verify Source is set correctly and the selected source is active and stable                                                                                                                                                                                                                           |
|                                                                | Network overloaded affecting Dante clock stability      | Place DADman control traffic and Dante audio on separate dedicated networks                                                                                                                                                                                                                                            |
| Word clock input will not lock                                 | Sync termination incorrect                              | Set **Sync termination** to **75 Ω** in **Conf** tab                                                                                                                                                                                                                                                                   |
|                                                                | Word clock cable too long or of poor quality            | Use 75 Ω coaxial cable; maximum reliable length is approximately 30 m                                                                                                                                                                                                                                                  |
| MADI input shows yellow status but sample rate appears correct | MADI Frame rate mismatch                                | In **Conf** tab, verify the **Frame rate** setting (Legacy vs. High Speed) matches the sending device. Both ends of a MADI link must use the same Frame Rate setting                                                                                                |
| "Adapt To" not following DAW sample rate changes               | Adapt To set to the wrong input                         | Set **Adapt To** to the digital input connected to the DAW (e.g., **Thunderbolt 3**)                                                                                                                                                                                |
|                                                                | DAW not updating Core Audio / ASIO device sample rate   | Close and reopen the DAW's audio device settings to force a refresh                                                                                                                                                                                                                                                    |

---

## 9.6 Monitor Control

| Symptom                                                                              | Probable cause                                          | Remedy                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mon tab shows no controls                                                            | No Monitor Profile loaded                               | Load a `.dmprof` file via **File > Open Profile…** or create a new profile in **Settings > Monitor Profile**                                                                                                                                                    |
| Blank monitoring page in Avid Control or Avid control surface                        | DADman not bound to EuControl                           | In EuControl **Assign** tab, with DADman in the foreground, enable monitoring assignment for DADman. Confirm **Enable EuCon** is ticked in DADman **Settings** menu                                                                             |
| EuCon: Control Room level not re-enabled after Ref toggle            | Bug before v5.8.2       | Update to DADman v5.8.2 build 2 or later                                                                                                                                                                                        |
| macOS: Talkback menu shows incorrect value in Monitor Profile dialog | Bug before v5.8.2       | Update to DADman v5.8.2 build 2 or later                                                                                                                                                                                        |
| Headphone not following control room speaker selection                               | Monitor mode for headphone set to Cue instead of Master | In **Settings > Monitor Profile**, set the headphone output monitor mode to **Master**; set control room speakers to **Cue** mode. See [Ch. 8, Section 8.2] |
| Ref button has no effect                                                             | No Reference Level defined in Monitor Profile           | In **Settings > Monitor Profile**, enter the calibrated reference level value for the active output set                                                                                                                                                         |
| Monitor Profile corrupted on next save after a cancelled load                        | Bug before v5.8.0       | Update to DADman v5.8.0 or later; restore from backup `.dmprof`                                                                                                                                                                 |

---

## 9.7 Reset Procedures

Attempt resets in the order listed — softest first.

### 9.7.1 Reload Configuration File

Restores saved settings without affecting hardware:

1. Go to **File > Open…** and select the most recent `.dms` file.
2. Confirm all parameters update in the DADman window.

### 9.7.2 Factory Reset via DADman

> **CAUTION:** Erases all settings stored on the hardware unit. Save a `.dms` file first.

1. In the Device List, right-click the unit (or use the Action button on macOS).
2. Select **Factory Reset** and confirm when prompted.
3. After the unit reboots (up to 60 seconds), reload the `.dms` file via **File > Open…**.

### 9.7.3 Front Panel IP Reset

If the unit's IP address is unknown or misconfigured and you cannot connect via DADman:

- The **Reconfig** button (accessed via a small hole on the rear panel with a pen or pointed object) resets the unit to its factory default IP address when pressed during power-on.
- Factory default IP for most DAD hardware: `10.0.7.20` — confirm in your hardware installation guide.
- After resetting, reconnect via DADman and reconfigure via Device List **> Network Settings**.

### 9.7.4 Power Cycle

If the unit is unresponsive and cannot be reset via DADman:

1. In DADman Device List: right-click the unit **> Disconnect**.
2. Power off the hardware unit at the mains switch.
3. Wait 10 seconds.
4. Power the unit back on.
5. Wait up to 60 seconds for the Ready LED to show solid green.
6. The unit reappears in the Device List automatically.

---

## 9.8 Known Issues by Version

| Symptom                                                                                         | Affected versions                                                                            | Fixed in                                                                                                            |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Windows: DADman fails to launch (VCRUNTIME DLL missing)      | Before v5.7.2                                                | v5.7.2 (Sep 2024)                                                |
| macOS: Crash when double-clicking .dms in Finder                | Before v5.8.0                                                | v5.8.0 (Dec 2024)                                                |
| Monitor Profile corrupted after cancelled load                                                  | Before v5.8.0                                                | v5.8.0 (Dec 2024)                                                |
| macOS: Display scaling artefacts                                                | Before v5.8.0                                                | v5.8.0 (Dec 2024)                                                |
| macOS: DADman won't become frontmost from tray (Sonoma)      | Before v5.8.0                                                | v5.8.0 (Dec 2024)                                                |
| macOS: Rare Thunderbolt communication failure                                   | Before v5.8.0 + driver 1.2.2 | v5.8.0 + driver 1.2.2 (Dec 2024) |
| Windows: MIDI crash                                                             | Before v5.8.1                                                | v5.8.1 b6 (May 2025)                                             |
| macOS: Graphics issues on scaled displays with large windows                    | Before v5.8.1                                                | v5.8.1 b6 (May 2025)                                             |
| EuCon: Control Room level not re-enabled after Ref toggle                       | Before v5.8.2                                                | v5.8.2 b2 (Jan 2026)                                             |
| macOS: Talkback menu incorrect selected value                                   | Before v5.8.2                                                | v5.8.2 b2 (Jan 2026)                                             |
| Windows: BitDefender firewall device lock-up                                    | Before v5.7.2                                                | v5.7.2 (Sep 2024)                                                |
| **Firmware:** AX Center ADC not passing audio (timing error) | Before firmware v1.1.0.4                     | v1.1.0.4 (Jan 2025)                              |
| **Firmware:** AX Center Dante Card external sync incorrect                      | Before firmware v1.1.0.4                     | v1.1.0.4 (Jan 2025)                              |
| **Firmware:** DA card channel 8 phase error                                     | Before firmware v1.0.6.3                     | v1.0.6.3 (Sep 2024)                              |
| **Firmware:** ADAT channel 3 at 88.2/96 kHz                     | Before firmware v1.0.6.3                     | v1.0.6.3 (Sep 2024)                              |
| **Firmware:** Delay not applied on channels > 16                                | Before firmware v1.0.6.3                     | v1.0.6.3 (Sep 2024)                              |
| **Firmware:** 3G SDI channels not enabling after power-up                       | Before Family 1 firmware v2.3.6.1            | v2.3.6.1 (Dec 2022)                              |

**Open known issue (as of v5.8.2 build 2):**

| Symptom                                                                                                          | Status                    | Workaround                                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| macOS Sequoia (v15): DADman cannot connect to network devices at first launch | Open — fix in development | Log out and log back in to the macOS user account. Thunderbolt connections are unaffected |

---

## 9.9 Getting Support

**DAD Support Portal**  
[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)  
Knowledge base, firmware downloads, technical bulletins, and community forum.  
A free account is required.

**Email**  
support@ntp.dk

**When contacting support, include:**

1. **DADman > About DADman > Copy Information** output _(v5.7.2+)_
2. Hardware unit model and firmware version (visible in Device List)
3. Description of the symptom, when it started, and what changed before it appeared
4. Any error messages displayed on screen
5. Relevant log output (see below)

### 9.9.1 Accessing DADman Logs — macOS

DADman writes log entries via the macOS Unified Logging system. Logs are not stored as plain text files; use the following methods to collect them.

**Console.app (simplest method):**

1. Open **Console.app** (Applications > Utilities > Console).
2. In the search field, type `DADman` and press Return.
3. Reproduce the problem. Console shows DADman log entries in real time.
4. Select the relevant entries, right-click, and choose **Copy** to paste into a support ticket.

**Terminal (time-ranged log export):**

```bash
log show --predicate 'process == "DADman"' --info --last 1h > ~/Desktop/dadman-log.txt
```

Adjust `--last 1h` as needed (e.g., `--last 30m`, `--last 2h`). The resulting file can be attached to a support ticket.

**Crash reports:**  
If DADman crashed, a crash report is written to:

```
~/Library/Logs/DiagnosticReports/
```

Look for files named `DADman_<date>_<hostname>.ips` or `DADman_<date>.crash`. These are also visible in Console.app under **Crash Reports**.

**TB3 Driver logs:**  
To collect Thunderbolt driver log entries:

```bash
log show --predicate 'process == "DADThunderboltDriver" OR subsystem CONTAINS "ntp"' --info --last 1h > ~/Desktop/tb3-driver-log.txt
```

### 9.9.2 Accessing DADman Logs — Windows

**Windows Event Viewer:**

1. Open **Event Viewer** (Start → search "Event Viewer").
2. Navigate to **Windows Logs > Application**.
3. Click **Filter Current Log…** and enter `DADman` in the **Event sources** field.
4. Copy or export the filtered entries for the support ticket.

**Application data folder:**  
DADman stores settings and may store log files at:

```
%AppData%\NTP Technology\DADman\
```

Open this path in Windows Explorer (`Win + R` → paste the path → Enter) and include any `.log` files found there when contacting support.

> **NOTE:** The exact log file paths above have been verified for standard installations. If DADman was installed to a non-default location or run under a different user account, paths may differ. DAD support can provide guidance if these locations do not contain the expected files.

---

_[Pending from DAD engineering:]_  
_— Error message catalogue (on-screen alert text → cause → remedy)_  
_— Front panel LED state tables per hardware model_
