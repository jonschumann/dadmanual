---
title: "Chapter 8 — Advanced Features"
sidebar_label: "Ch. 8 — Advanced Features"
sidebar_position: 10
---

# Chapter 8 — Advanced Features

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Primary example hardware:** DAD AX Center  
> **Chapter status:** Draft v0.2 — Sections 8.1–8.15 drafted; PRO\|MON and Cue\|Mix pending DAD engineering documentation; SPQ and MIDI parameter tables pending; screenshots pending  
> **Last updated:** June 2026

---

## In This Chapter

| Section              | Feature                                         | Version required                                    |
| -------------------- | ----------------------------------------------- | --------------------------------------------------- |
| 8.1  | Monitor Profiles — configuration and management | All versions                                        |
| 8.2  | Mic Gain Groups                                 | v5.8.1 and later    |
| 8.3  | Cloning Settings Between Units                  | v5.6.9 and later    |
| 8.4  | Control\|Pack — Routing Presets                 | v5.8.0 and later    |
| 8.5  | EuCon Integration                               | All versions                                        |
| 8.6  | DADLink                                         | v5.6.9 and later    |
| 8.7  | Running DADman in Menu Bar or System Tray       | v5.7.0 and later    |
| 8.8  | File Management and Command-Line Access         | v5.7.0 and later    |
| 8.9  | DADman Preferences Reference                    | All versions                                        |
| 8.10 | Dante Virtual Soundcard as a Monitor Source     | All versions                                        |
| 8.11 | Analogue Output Level Configuration             | All versions                                        |
| 8.12 | SPQ Speaker Processing Card                     | All versions (requires SPQ card) |
| 8.13 | Dolby Atmos Monitoring Workflow                 | All versions                                        |
| 8.14 | LTC over Dante                                  | All versions                                        |
| 8.15 | MIDI Control and Pro Tools PRE Emulation        | All versions                                        |
| —                    | PRO\|MON Monitor System                         | _(pending documentation)_        |
| —                    | Cue\|Mix Zero-Latency Mixer                     | _(pending documentation)_        |

---

## 8.1 Monitor Profiles — Configuration and Management

### 8.1.1 Concept

A **Monitor Profile** (file extension `.dmprof`) defines the complete monitor controller configuration for a DADman-controlled hardware unit: what sources can be monitored, which speaker output sets are available, how fold-downs and up-matches are handled, delay settings, talkback routing, and external metering outputs.

A Monitor Profile is entirely separate from the unit settings file (`.dms`). The same physical routing and gain configuration can be used with multiple different monitoring setups by loading different profiles, without changing any other unit settings.

> **NOTE:** Monitor Profiles are stored on the computer, not in the hardware unit. They must be loaded into DADman each time the application is launched (unless **Open last file at startup** is enabled for profiles). If DADman is closed or the computer is shut down, the monitor controller continues operating in the last state sent to the unit, but no further monitor control is possible until DADman relaunches with the profile loaded.

### 8.1.2 Opening the Monitor Profile Editor

Open the Monitor Profile editor via **Settings > Monitor Profile** (macOS: **⌘⇧M** / Windows: **Ctrl+Shift+M**).

The editor has five tabs: **Sources**, **Outputs**, **Fold Downs**, **Delay**, and **MOM**.

### 8.1.3 Configuring Sources

A source is any signal path that operators should be able to select for monitoring. Typical sources include a DAW's stereo output, a Dante stream, a guest source, or a confidence feed.

**To add a source:**

1. In the **Sources** tab, right-click and select **Add New Source**.
2. Double-click the source name to rename it (e.g., `Pro Tools`, `Guest`, `Dante Player`).
3. Right-click under **Mode** and select **Set Group Format** — choose the channel count and format (Mono, Stereo, 5.1, 7.1.4, etc.).
4. For each channel in the source, right-click the channel assignment field and select the corresponding input from the routing matrix. Use Dante, MADI, AES3, or analogue inputs as available on the connected hardware.

_[Placeholder: screenshot — Sources tab with two sources configured (Pro Tools stereo, Dante 7.1)]_

### 8.1.4 Configuring Output Sets

An **output set** defines a group of physical output channels used as a speaker configuration. Multiple output sets can be defined using different physical outputs (e.g., near-field stereo vs. surround), or the same physical outputs with different trim levels (e.g., 85 dB SPL vs. 75 dB SPL reference levels).

**To add an output set:**

1. In the **Outputs** tab, right-click and select **Add New Output Set**.
2. Name the output set (e.g., `Near Field`, `5.1 Surround`, `85 dB SPL`).
3. Assign a **Group Format** matching the speaker configuration.
4. Assign each channel to a physical analogue output on the hardware.
5. Set a **Trim** value if this output set requires a fixed level offset (useful for multiple reference level presets).

> **NOTE:** Once output channels are allocated to a routing preset in Control\|Pack, they are locked and cannot be connected via the DADman routing matrix or monitor profile. See [Section 8.4 — Control\|Pack].

_[Placeholder: screenshot — Outputs tab showing stereo and 5.1 output sets]_

### 8.1.5 Reference Levels and Multiple SPL Presets

The reference level function locks the monitor output to a calibrated SPL without risk of accidental adjustment.

**To configure a reference level:**

1. Using test tones and a calibrated SPL meter, set the Mon tab main level fader to the desired monitoring SPL.
2. In **Settings > Monitor Profile**, open the relevant output set.
3. Enter the calibrated level as the **Reference Level** for that output set.
4. Press **Ref** in the Mon tab during sessions to instantly return to this level.

**To create multiple reference level presets on the same physical outputs:**

Define two output sets pointing to the same physical outputs but with different Trim values. For example:

| Output set name  | Outputs | Trim   | Calibrated SPL |
| ---------------- | ------- | ------ | -------------- |
| Near Field 85 dB | DA 1–2  | 0 dB   | 85 dB SPL      |
| Near Field 75 dB | DA 1–2  | −10 dB | 75 dB SPL      |

Both output sets appear as selectable speaker options in the Mon tab. Switching between them provides instant SPL level switching without touching physical gain controls.

### 8.1.6 Fold-Downs and Up-Matching

The **Fold Downs** tab defines matrices that convert between speaker formats — for example, folding a 7.1 mix down to stereo for a compatibility check, or up-matching a stereo source to a custom speaker layout.

**Standard fold-down:** DADman includes standard fold-down matrices (e.g., 5.1 to stereo). Select the input and output format and DADman generates the appropriate mixing coefficients.

**Custom matrices (up-match or selective routing):** Right-click an existing fold-down entry and select **Add new matrix**. You can set the input and output format to the same value — effectively creating a custom routing preset within the monitor path. This technique enables creative fold-down applications:

_Example — Speaker subset selection:_ Define a `Tops Only` matrix at 7.1.4 → 7.1.4. In the matrix editor, route only the four overhead channels (Lt1, Rt1, Ltm, Rtm) to their corresponding outputs, leaving all other channels silent. Selecting this "fold-down" in the Mon tab effectively solos the ceiling speakers without changing the main mix.

_Example — Bass management:_ Define custom fold-down matrices that route low-frequency content to a sub output with appropriate rolloff coefficients, even when the source format does not include an LFE channel.

### 8.1.7 Talkback Configuration

Talkback routes a microphone or other source into the talent's headphone feeds when activated. Configure talkback in **Settings > Monitor Profile > Outputs**.

**Talkback modes** _(v5.7.0 and later):_

| Mode             | Behaviour                                                                                                                              | When to use                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Toggle/Latch** | First press activates talkback; second press deactivates. Holding longer toggles between latch states. | Studio environments where the engineer needs hands-free talkback     |
| **RAW**          | Talkback is active only while the button is held; releases when the button is released.                                | Broadcast environments where accidental latching would be disruptive |

> **NOTE:** RAW mode applies to MOM hardware control and MTRX Studio front panel talkback button. EuCon control surfaces always use Toggle/Latch mode regardless of this setting.

### 8.1.8 Headphone Follows Control Room

By default, the headphone output is a separate **Cue** mix, independent of the control room speaker selection. To have the headphone output automatically track whatever source is selected on the main control room speakers:

1. In **Settings > Monitor Profile > Outputs**, set the headphone output's **Monitor Mode** to **Master**.
2. Set the control room speaker output set's **Monitor Mode** to **Cue**.

**Result:** The headphone output is now assigned to the monitor feed selection — whichever source is active on the control room speakers, the same source plays through the headphones. Source selection, fold-down, and dim/cut all follow the control room.

> **NOTE — Limitation:** When DADman is not running, the hardware unit falls back to its default operating mode. In this fallback, the Cue group routing does not translate to the hardware's default state, so the headphone may not follow the control room when DADman is offline. As a workaround, configure DADman to launch automatically at login. See [Section 8.7 — Running DADman in Menu Bar or System Tray].

### 8.1.9 Saving and Loading Monitor Profiles

| Action                                                       | macOS                               | Windows                             |
| ------------------------------------------------------------ | ----------------------------------- | ----------------------------------- |
| Open Profile                                                 | ⌥⌘O                                 | Ctrl+Alt+O                          |
| Import Profile (from any compatible unit) | ⌥⌘I                                 | Ctrl+Alt+I                          |
| Save Profile                                                 | ⌥⌘S                                 | Ctrl+Alt+S                          |
| Save Profile As…                                             | ⌥⌘⇧S                                | Ctrl+Alt+Shift+S                    |
| Close Profile                                                | ⌥⌘W                                 | Ctrl+Alt+W                          |
| Open Recent Profile                                          | Main menu → **Open Recent Profile** | Main menu → **Open Recent Profile** |

**Import Profile:** The **File > Import Profile…** function imports a Monitor Profile from any compatible connected unit and performs a best-fit mapping to the current hardware's available I/O. This is useful when migrating a profile between units with different I/O configurations.

---

## 8.2 Mic Gain Groups _(v5.8.1 build 6 and later)_

### 8.2.1 Concept

Mic Gain Groups allow multiple analogue input channels to be linked so that adjusting the gain or mute on any one channel moves all channels in the group simultaneously, while preserving the relative gain offsets between channels. This is designed for multi-mic setups — drums, orchestral ensembles, choir, or location recording arrays — where consistent relative gain relationships between channels must be maintained across adjustments.

Mic Gain Groups are supported on all hardware **except MTRX Studio**. A firmware update is required (Family 1: v2.4.5.1 or later; Thunder\|Core: v1.1.1.1 or later).

**Grouped parameters:** Gain and mute.  
**Not grouped:** Phantom power (+48 V) and phase invert (Ø). These remain individually controlled even when channels are in a group.

### 8.2.2 Creating and Managing Groups

**To add a channel to a group:**

1. In the **AD** tab, right-click the gain control of a channel (or use the channel context menu).
2. Select **Add to Gain Group** and choose a group number (groups are numbered; you can create multiple independent groups).
3. Repeat for each channel to include in the group.

**To remove a channel from a group:**

Right-click the gain control and select **Remove from Gain Group**.

### 8.2.3 Group Behaviour

When multiple channels share a group:

- Moving the gain slider on any grouped channel moves **all channels in the group** by the same increment. The relative offset between channels is preserved.
- Muting any grouped channel mutes all channels in the group.

**Individual channel override — Alt/Option modifier:**

Holding **Alt** (Windows) or **Option** (macOS) while adjusting a channel's gain or mute acts on that channel only, bypassing the group:

| Action                                                 | With Alt/Option                     |
| ------------------------------------------------------ | ----------------------------------- |
| Mouse drag on gain slider                              | Adjusts selected channel only       |
| ↑/↓ keyboard (gain slider selected) | Adjusts selected channel only       |
| Click gain value field below slider                    | Adjusts selected channel only       |
| Click Mute                                             | Mutes/unmutes selected channel only |

### 8.2.4 EuCon Behaviour

When controlling grouped channels via an Avid EuControl surface:

- Gain sliders and knobs on EuCon surfaces affect the group (all channels move together).
- Mute from a EuCon surface affects all grouped channels simultaneously.

> **NOTE:** Alt/Option per-channel override is only available via mouse/keyboard in DADman — it cannot be triggered from a EuCon surface.

---

## 8.3 Cloning Settings Between Units _(v5.6.9 and later)_

### 8.3.1 Concept

The **Clone** function copies all settings from one hardware unit to another within the same hardware family. It is useful for duplicating a known-good configuration to a second identical unit, restoring settings to a replacement unit, or initialising a new unit from an existing profile.

Cloning is only permitted between units within the same family group:

| Family   | Members                                                 |
| -------- | ------------------------------------------------------- |
| Family 1 | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s |
| Family 2 | MTRX II · AX64 · AX Center · Core 256                   |
| Family 3 | MTRX Studio                                             |

### 8.3.2 Clone Procedure

**To clone from one connected unit to another:**

1. In the Device List, right-click the **target** unit (the one to receive the settings).
2. Select **Clone from…** and choose the source unit from the list.
3. Confirm the clone operation.

**To clone from a saved settings file to a connected unit:**

1. Open the `.dms` settings file via **File > Open…**.
2. Right-click the target unit in the Device List.
3. Select **Clone from file** and choose the relevant source unit within the loaded settings file.

> **CAUTION:** Cloning overwrites all settings on the target unit. Ensure the target unit's settings have been saved to a `.dms` file before proceeding if recovery may be needed.

### 8.3.3 Non-Identical Unit Behaviour

For best results, source and target units should be identically configured — the same card types installed in the same slot positions. When configurations differ:

- Settings for cards present in the source but absent in the **same slot position** on the target are set to factory defaults on the target.
- Settings for cards present in the target but absent in the source are not modified.

---

## 8.4 Control|Pack — Routing Presets _(v5.8.0 build 8 and later)_

### 8.4.1 Concept

Control\|Pack provides a routing preset system for Thunder\|Core products (AX64, AX Center, Core 256). Up to 32 routing presets can be defined per unit, each with up to four independent input layers — called **buckets** — that switch up to 256 sources to 256 destinations simultaneously within a single audio sample.

Switching between buckets can be:

- **Manual** — triggered by the operator from the Control\|Pack strip in DADman
- **Automated** — triggered by built-in signal detectors monitoring input channels for signal presence, AE6 pilot tone integrity, or port-level connectivity

Control\|Pack presets are stored in the Thunder\|Core hardware unit. They can be controlled from multiple DADman instances simultaneously, and from a dedicated Control\|Pack hardware panel without any DADman connection.

**Firmware required:** Thunder\|Core firmware v1.1.0.3 or later.

### 8.4.2 Key Specifications

| Parameter                                                    | Value                                         |
| ------------------------------------------------------------ | --------------------------------------------- |
| Maximum presets per unit                                     | 32                                            |
| Maximum buckets (input layers) per preset | 4                                             |
| Maximum sources per bucket                                   | 256                                           |
| Maximum outputs per preset                                   | 256                                           |
| Switching time (bucket switch, automated) | Within 1 audio sample                         |
| Switching time (manual, direct selection) | 0 audio samples                               |
| Signal detection / trigger response time                     | < 1 ms               |
| Signal generators (built-in)              | Sine wave pilot tone · AE6 digital pilot tone |

### 8.4.3 Signal Generators

Each Thunder\|Core unit includes two built-in signal generators:

| Generator                  | Type                                                          | Parameters                                                                       |
| -------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Sine wave pilot tone**   | Continuous sine wave                                          | Level: −60 to 0 dBFS; Frequency: 20 Hz to 20 kHz |
| **AE6 digital pilot tone** | Binary repetitive signal (hex value 0xAE6) | Fixed pattern                                                                    |

Signal generators can be routed to any output in the unit via the routing matrix. The AE6 signal is designed for integrity checking — it can be detected on the receiving end to confirm the signal chain is unprocessed and unmodified. If the AE6 signal passes through a sample rate converter, analogue stage, or any level change, its pattern is altered and it cannot be recognised.

### 8.4.4 Trigger Types

Each bucket can be assigned up to four trigger sources. Three trigger types are available:

| Trigger type     | Detects                                                    | Notes                                                                                                |
| ---------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Signal Level** | Audio signal presence above −40 dBFS within a 1 ms window  | Works with any analogue or digital input                                                             |
| **AE6**          | Integrity of the AE6 digital pilot tone on a digital input | The signal must be unprocessed (no SRC, no level change) for successful detection |
| **Port**         | Physical port connectivity status                          | Thunderbolt 3, MADI, DADLink, ADAT, or AES3 ports                                                    |

### 8.4.5 Configuring Routing Presets

Open the Routing Preset editor via **Settings > Routing Presets**.

Configuration follows four steps:

**Step 1: Select the target unit**

From the dropdown at the top of the Routing Preset window, select the Thunder\|Core unit to configure. If the unit is not connected, click **Open Device List** to connect it first.

**Step 2: Add a routing preset**

Right-click in the preset list and select **Add Preset**. Enter a name and the number of output channels for the preset. Enable the preset by checking its checkbox. Presets can be reordered within the list _(v5.8.1 and later)_.

**Step 3: Configure buckets and triggers**

For each bucket in the preset:

1. Right-click the **Source Set Name** field and enter a name for the bucket (e.g., `Pro Tools`, `Backup DAW`, `Test Generator`).
2. Set the **Trigger Priority** for the bucket. Buckets with a higher priority number are preferred when their detectors report a valid signal. If all buckets have equal priority, switching is manual only.
3. Select up to four **Trigger Sources** from the available inputs. Combine trigger types (Signal Level + AE6) for robust failover detection.

**Automated switching logic:**

- The bucket with the **highest priority** where all assigned detectors report OK is routed to the outputs.
- If the active bucket's detectors report an error, the system switches to the next highest-priority bucket with all detectors OK.
- Manual override is always available — double-click a bucket button to force it regardless of detector status.

**Step 4: Assign input and output channels**

Right-click the output channel column to select output channels from the available outputs on the unit. Right-click each input (bucket) column to assign source channels. Once outputs are assigned to a preset, they are **locked** — they cannot be connected via the DADman routing matrix or monitor profile while the preset is active.

_[Placeholder: screenshot — Routing Preset editor showing a two-bucket preset with trigger sources configured]_

### 8.4.6 Operation

Once configured, the Control\|Pack strip appears below the main DADman channel strips. Each preset is shown with bucket buttons, source PPM meters, output PPM meters, and trigger status indicators.

**Bucket button colour states:**

| Colour    | Meaning                                                                         |
| --------- | ------------------------------------------------------------------------------- |
| **Blue**  | This bucket is active — manual mode (no automated switching) |
| **Green** | This bucket is active — automated mode, armed and ready to switch               |
| **Red**   | Signal detector error on this bucket — signal loss or AE6 failure detected      |

**Switching between manual and automated mode:**

- **Double-click a green button** → switches to manual (button turns blue)
- **Double-click a blue button** → re-arms automation (button turns green)

**Trigger status indicators** below each bucket button show real-time pass/fail status for each assigned detector (0–4 indicators per bucket).

_[Placeholder: screenshot — Control\|Pack strip showing two presets, one automated (green), one manual (blue)]_

> **TIP:** In live events or broadcast, arm automation (**green**) during line check when signal is confirmed on all inputs. If an input fails during the show, the preset switches automatically without operator intervention. Double-clicking the preferred bucket at any time forces it regardless of automation state.

---

## 8.5 EuCon Integration

### 8.5.1 Enabling EuCon

DADman communicates with Avid EuControl via the EuCon protocol, enabling Avid control surfaces (S1, S6, S6L, MTRX Studio front panel) and the Avid Control app to control DADman's monitoring functions.

**To enable EuCon:**

1. In DADman, go to **Settings > Enable EuCon**.
2. Ensure EuControl is running on the same computer and is connected to the control surface or app.

### 8.5.2 Binding DADman Monitoring to EuControl

For monitoring controls to appear on an Avid control surface or the Avid Control app, DADman must be bound to EuControl:

1. Bring DADman to the foreground (click the DADman window to make it the active application).
2. In EuControl, open the **Assign** tab.
3. Enable the monitoring assignment checkbox for DADman (it appears because DADman is in the foreground).

> **TIP:** If the monitoring page in Avid Control shows only a master fader and no other controls, the binding step has not been completed. Bring DADman to the foreground and repeat the Assign tab procedure.

### 8.5.3 Locking Monitoring to DADman

Once monitoring is bound to DADman, you can lock the monitoring section so it remains under DADman control regardless of which application is currently in the foreground:

1. In EuControl **Assign** tab, with the monitoring section bound to DADman, click **Lock** (or the equivalent for your surface model).
2. Switch to your DAW application. The monitoring section on the surface continues to control DADman.

This allows the transport and channel controls to follow the DAW while the monitoring section remains permanently assigned to DADman — the standard workflow for post-production and music tracking environments.

### 8.5.4 EuCon and Mic Gain Groups

When Mic Gain Groups are configured:

- Gain sliders and gain knobs on EuCon surfaces move all grouped channels together.
- Mute from a EuCon surface mutes all grouped channels.
- Per-channel override via Alt/Option is not available from EuCon surfaces.

### 8.5.5 Expanding the Talkback Button on a Touchscreen

If the talkback button on the Avid Control app touchscreen is too small, use the **Soft Keys** page and assign multiple soft key buttons to the talkback function. Multiple adjacent buttons all triggering talkback gives a larger effective touch target.

---

## 8.6 DADLink _(v5.6.9 and later)_

### 8.6.1 Concept

DADLink is a proprietary high-channel-count interconnect format developed by DAD. It uses the mini MADI module slot on compatible units with optical SFP modules to transport audio between units at very low latency.

DADLink is designed for connecting multiple DAD units directly — for example, linking an AX Center to an AX64 to expand the total channel count, or connecting units in different physical locations within a facility.

**Compatible hardware:** AX64 · AX Center · Core 256 · AX32 · DX32R · Penta 720 · Penta 721s _(from firmware v2.4.1.2 for Family 1)_

### 8.6.2 Channel Capacity

| Sample rate                     | Channels per DADLink connection |
| ------------------------------- | ------------------------------- |
| 44.1 / 48 kHz   | Up to 128 channels              |
| 88.2 / 96 kHz   | Up to 64 channels               |
| 176.4 / 192 kHz | Up to 32 channels               |

### 8.6.3 Latency

DADLink latency is approximately **1 microsecond** — effectively zero from an audio alignment perspective. All inputs and outputs on units connected via DADLink are phase-aligned provided the **Digi delay** is set to the same value on each unit.

### 8.6.4 Synchronisation Requirement

> **NOTE:** For proper phase alignment of inputs and outputs across DADLink-connected units, use either **DADLink** or **Word Clock** as the sync source between the clock master unit and all follower units. All units in a DADLink network must share a common clock source.

### 8.6.5 Hardware Installation

DADLink requires the **mini MADI module** installed in the mini MADI slot of each connected unit, fitted with compatible optical SFP transceiver modules. Connect units with optical fibre cables between the SFP transceivers. Refer to the DADLink and Mini MADI Module Installation Guide (available from [digitalaudiosupport.com](https://www.digitalaudiosupport.com)) for specific SFP module types and installation procedure.

Once installed, DADLink inputs and outputs appear in DADman's routing matrix alongside MADI, Dante, and other format inputs. The format is visible in the Conf tab where DADLink appears as an interface option.

---

## 8.7 Running DADman in Menu Bar or System Tray _(v5.7.0 and later)_

### 8.7.1 macOS — Menu Bar Modes

DADman can be configured to minimise its presence on the macOS desktop, making it suitable for permanent installations where it should run in the background. Three modes are available in **DADman > Preferences**:

| Mode                  | Behaviour                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Dock Only**         | DADman behaves as a normal macOS application — visible in the Dock and taskbar. Default.                                                                                                 |
| **Menu Bar and Dock** | DADman also shows an icon in the macOS system menu bar for quick access.                                                                                                                                 |
| **Menu Bar Only**     | DADman hides from the Dock when its main window is closed. Only the system menu bar icon is visible. Click it to reveal the DADman menu (Show, Quit). |

**To show the main window from Menu Bar Only mode:**

- Click the DADman menu bar icon → **Show**
- Double-click a `.dms` or `.dmprof` file in Finder
- Press **⌘⇧1**
- Launch DADman again from Applications

> **NOTE:** In Menu Bar Only mode, if DADman still appears in the Dock after changing the setting, right-click its Dock icon → **Options > Keep in Dock** and disable it.

> **NOTE:** In Menu Bar Only mode with DADman hidden, DADman does not save files when the user logs out or the system shuts down unless **Always Save File** is enabled in Preferences.

### 8.7.2 Windows — System Tray Modes

On Windows, configure tray behaviour in **Settings > Options**:

| Mode                                          | Behaviour                                                                                                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Taskbar only (default)** | DADman behaves as a normal Windows application.                                                                                         |
| **Taskbar and system tray**                   | DADman also shows a tray icon for quick access.                                                                                         |
| **System tray only**                          | DADman launches to the tray only. Left-click the tray icon to show the main window; right-click for Show / Hide / Quit. |

### 8.7.3 Auto-Launch at Login (macOS)

To have DADman launch automatically at login and load a configuration file:

**Method 1 — macOS Login Items:**

1. Open **System Settings > General > Login Items**.
2. Click **+** and add **DADman.app** from your Applications folder.
3. Enable **Open last file at startup** in Preferences so DADman loads the correct `.dms` file automatically.

**Method 2 — AppleScript delay launcher** _(for Sonoma and later, where hiding login items is restricted):_

Since macOS Sonoma removed the ability to hide login items, use a delay script to launch DADman after login:

```applescript
delay 5
tell application "Finder"
  activate
  open application file "DADman.app" of folder "Applications" of startup disk
end tell
delay 8
tell application "System Events"
  set visible of process "DADman" to false
end tell
```

To use this script:

1. Open **Script Editor** (Applications > Utilities > Script Editor).
2. Paste the script, adjusting delay values as needed.
3. Export as **Application** (**File > Export** → Format: Application).
4. Add the resulting application to **System Settings > General > Login Items**.

The script launches DADman after a 5-second delay, then hides it after a further 8 seconds. Adjust delays to suit the boot time of your hardware.

---

## 8.8 File Management and Command-Line Access _(v5.7.0 and later)_

### 8.8.1 Opening Files from Finder or Windows Explorer

From DADman v5.7.0, `.dms` and `.dmprof` files can be opened directly by double-clicking them in Finder (macOS) or Windows Explorer. DADman opens, loads the file, and applies the settings to connected units.

If both a `.dms` and a `.dmprof` file are selected and opened simultaneously, DADman loads the first `.dms` file found and the first `.dmprof` file found, ignoring additional files.

### 8.8.2 Command-Line File Opening

Open DADman with specific files from a terminal or script:

**macOS:**

```bash
open -a DADman /path/to/settings.dms /path/to/profile.dmprof
```

The `-a DADman` is optional but ensures DADman is used even if other applications are registered for `.dms` files.

**Windows:**

```cmd
DADman.exe C:\path\to\settings.dms C:\path\to\profile.dmprof
```

This enables integration with external control systems, show file launchers, or login scripts that need to load a specific DADman configuration on startup.

### 8.8.3 Opening Multiple DADman Instances (Windows)

By default, opening DADman when it is already running brings the existing instance to the foreground rather than launching a second copy. To explicitly launch a second independent instance:

```cmd
DADman.exe -m
```

---

## 8.9 DADman Preferences Reference

Access preferences via **DADman > Preferences** (macOS) or **Settings > Options** (Windows).

| Preference                                      | Description                                                                                                                             | Notes                                                                                                                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Open last file at startup**                   | Automatically loads the last-used `.dms` settings file and applies it to connected units on launch                                      | Recommended for permanent installations; use with caution in multi-operator environments                                                                              |
| **GUI Layout**                                  | Selects one of three colour schemes for the DADman interface                                                                            | Stored locally; does not affect hardware                                                                                                                              |
| **Max matrix view size**                        | Sets the maximum size of the routing matrix detail view: 32×32 (default), 64×64, 128×128, or 256×256 | Larger sizes allow viewing more of the routing matrix at once; may affect performance on older systems _(v5.7.0+)_ |
| **Show Mode** (macOS)        | Dock Only · Menu Bar and Dock · Menu Bar Only                                                                                           | See [Section 8.7.1]                                                               |
| **Show In** (Windows)        | Taskbar only · Taskbar and system tray · System tray only                                                                               | See [Section 8.7.2]                                                               |
| **Always Save File** (macOS) | Automatically saves the current `.dms` file on logout, restart, or shutdown                                                             | Required for reliable operation in Menu Bar Only mode                                                                                                                 |

---

## 8.10 Dante Virtual Soundcard as a Monitor Source

The **Dante Virtual Soundcard (DVS)** from Audinate allows a Mac or PC to appear as a Dante audio device on the network, routing the computer's system audio output into the Dante network and into any DADman-controlled hardware unit. This is useful for monitoring DAW playback via a DAW that supports Dante, or for using macOS/Windows system audio (YouTube, Spotify, reference tracks) through the main monitor system without additional I/O.

### 8.10.1 Prerequisites

- Dante Virtual Soundcard installed and licensed on the host computer
- Dante Controller installed (free from Audinate)
- A DADman-controlled unit with a Dante input (AX Center, Core 256, AX64, AX32 with Dante expansion card, etc.)

### 8.10.2 Configuration Procedure

**Step 1 — Launch and configure DVS**

1. Open the Dante Virtual Soundcard application.
2. Set the channel count as required (e.g., **8×8** for a 7.1 or 7.1.2 source).
3. Press **Start** to enable the DVS service. The computer now appears as a Dante device on the network.

**Step 2 — Patch DVS to the hardware unit in Dante Controller**

1. Open **Dante Controller**.
2. In the **Routing** matrix, locate the DVS transmitter (it will appear under the computer's hostname).
3. Route the DVS outputs to the desired Dante input channels on the DADman hardware unit (e.g., DVS outputs 1–8 → MTRX Dante inputs 1–8, or AX Center Dante inputs 1–8).

**Step 3 — Set the system audio output to DVS (macOS)**

Hold **Option** and click the macOS volume icon in the menu bar, then select the Dante Virtual Soundcard as the system output device. Alternatively, set it in **System Settings > Sound > Output**.

**Step 4 — Add a DVS source in DADman Monitor Profile**

1. In DADman, go to **Settings > Monitor Profile**.
2. In the **Sources** tab, right-click and select **Add New Source**.
3. Name the source (e.g., `DVS`, `System Audio`, `Mac Output`).
4. Right-click the **Mode** column and select **Set Group Format** — choose the channel count to match your DVS configuration (Stereo, 5.1, 7.1, etc.).
5. For each channel, right-click the channel assignment and select the corresponding Dante input channel that receives the DVS signal (as patched in Dante Controller).

**Step 5 — Verify**

Return to the DADman **Mon** tab. The DVS source should now appear as a selectable monitor source. Play back audio on the computer — you should see metering on the DVS source row.

> **NOTE:** The DVS source will appear in the monitor source list only while DADman has an active Monitor Profile loaded with the DVS source configured. If a different profile is loaded, the DVS source is not accessible until the correct profile is reloaded.

---

## 8.11 Analogue Output Level Configuration

The analogue output level controls in the **DA** tab set the signal alignment between the hardware unit's digital domain (in dBFS) and its analogue output level (in dBu). This is a calibration setting — it is not an operational level control.

### 8.11.1 Concept

The DA output level slider specifies what analogue level corresponds to 0 dBFS. It does not control the monitoring level; the monitoring volume is controlled by the fader in the **Mon** tab. The DA output level setting exists solely to align the hardware's analogue output with the headroom requirements of the downstream equipment.

**Example:** If the DA output level is set to +18 dBu, a 0 dBFS digital signal produces +18 dBu on the analogue output. If downstream equipment (power amplifier or active monitor) clips at +18 dBu, a signal at 0 dBFS will clip the amplifier — so the DA level should be set to match the maximum input specification of the downstream equipment.

> **CAUTION:** Setting a high DA output level is not always advantageous. Setting +24 dBu when the downstream equipment clips at +18 dBu will cause the input to clip 6 dB before digital full scale. Always match the DA output level to the maximum input specification of connected amplifiers or monitors.

### 8.11.2 Output Level Range

The DA line outputs (on DB25 connectors) offer two selectable maximum output level ranges:

| Range                  | Slider span                         |
| ---------------------- | ----------------------------------- |
| −66 dBu to **+18 dBu** | Default                             |
| −60 dBu to **+24 dBu** | Enabled by the **6 dB Gain** button |

Enable the **6 dB Gain** button on a channel to extend its output range to +24 dBu. This is appropriate when connecting to professional equipment with +24 dBu maximum inputs.

### 8.11.3 Per-Channel Configuration

Different output channels can be set to different analogue levels, allowing mixed equipment connections from a single unit. For example, near-field monitors fed from a stereo power amplifier clipping at +18 dBu can be set to +18 dBu, while surround speakers fed from amplifiers with +24 dBu headroom can be set to +24 dBu on the same unit.

_[Placeholder: screenshot — DA tab showing per-channel output level sliders with different calibration values]_

---

## 8.12 SPQ Speaker Processing Card

The **SPQ (Speaker Processing) card** is an optional DSP expansion card for compatible DAD hardware units (AX32 and MTRX variants). It provides per-channel parametric EQ on the analogue monitor outputs, allowing in-hardware speaker and room correction without an external processor in the signal path.

> **NOTE:** The SPQ card is a hardware option. It must be physically installed in the unit. If no SPQ card is present, the SPQ tab does not appear in DADman.

### 8.12.1 SPQ Workflow Overview

The typical SPQ workflow is:

1. **Measure the room** using acoustic measurement software (e.g., the free **Room EQ Wizard**, available at roomeqwizard.com). Use a calibrated measurement microphone at the listening position.
2. **Generate EQ correction filters** from the measurement results within the measurement software.
3. **Import the filters** into DADman via the SPQ tab. DADman accepts EQ data in a compatible export format from Room EQ Wizard.
4. **Apply the correction** — the SPQ card processes the analogue outputs in real-time using the imported filter coefficients.

### 8.12.2 SPQ Tab in DADman

The SPQ tab appears in DADman when a compatible SPQ card is detected in the connected unit. From the SPQ tab you can:

- View and edit per-output EQ curves
- Import measurement data from Room EQ Wizard
- Enable or bypass the SPQ processing per output channel
- Save SPQ configurations as part of the unit settings file (`.dms`)

> **NOTE:** SPQ settings are stored on the hardware unit, not in the monitor profile. They persist across DADman sessions without requiring a profile to be loaded.

_[Placeholder: full SPQ parameter reference and step-by-step Room EQ Wizard import procedure — pending engineering documentation from DAD]_

---

## 8.13 Dolby Atmos Monitoring Workflow

DADman's monitor profile system supports Dolby Atmos monitoring from single-unit setups up to 64-channel configurations. The following is a conceptual overview of a typical Dolby Atmos monitoring signal path using a DADman-controlled unit.

### 8.13.1 Signal Flow Overview

A typical Dolby Atmos monitoring chain:

```
Pro Tools (Atmos session)
      ↓ (DADLink / MADI / Dante)
Dolby Renderer (e.g., Dolby Atmos Mastering Suite / Renderer)
      ↓ (speaker feeds — up to 9.1.6 or beyond)
DADman hardware unit (DA outputs)
      ↓ (analogue)
Speaker amplifiers and speakers
```

DADman handles the final monitor control layer — source selection, level, fold-downs, and dim/cut — on the renderer's speaker output feeds.

### 8.13.2 Creating a Custom Group Format

Standard DADman group formats cover up to 7.1.4. For larger Atmos configurations (9.1.6, 7.1.6, etc.), a **custom group format** must be defined:

1. In **Settings > Monitor Profile**, go to the **Outputs** tab.
2. Right-click and select **Add Custom Group Format**.
3. Define the channel count and speaker layout labels (e.g., L, C, R, Ls, Rs, Lss, Rss, Lts, Rts…).
4. Save the format, then assign it to the relevant output set.

### 8.13.3 Sources and Returns from the Dolby Renderer

Add each set of renderer outputs as a separate source in the monitor profile:

| Source                      | Channels                                                                     | Purpose                                           |
| --------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| Atmos Full                  | 9.1.6 (or configured bed) | Full Atmos speaker feed from the renderer         |
| Stereo Downmix              | 2.0                                                          | Renderer's ITU stereo downmix return              |
| Binaural                    | 2.0                                                          | Renderer's headphone binaural return              |
| 5.1 Downmix | 5.1                                                          | Renderer's 5.1 compatibility fold |

### 8.13.4 Fold-Downs for Atmos

Use the **Fold Downs** tab to add compatibility monitoring options that do not require switching sources on the renderer — for example, fold-downs that apply a stereo sum of the Atmos speaker channels directly in DADman for a quick mono or narrow stereo check. These supplement, rather than replace, the renderer's own downmix outputs.

> **NOTE:** For true Dolby-specification downmixes, always use the Dolby Renderer's downmix outputs rather than DADman fold-downs. DADman fold-downs are not Dolby-certified processes.

_[Placeholder: screenshot — 9.1.6 monitor profile with Atmos sources configured]_

---

## 8.14 LTC over Dante

DADman-controlled units with a Dante interface can carry **LTC (Linear Timecode)** within a Dante audio channel. This allows a timecode source to be distributed across the Dante network to any unit on the same network without dedicated timecode wiring.

### 8.14.1 Concept

LTC is an audio-frequency signal that encodes SMPTE timecode in the audio waveform. Because it occupies the same frequency range as audio, it can be routed through any Dante channel as if it were a mono audio signal — it requires no special Dante configuration.

### 8.14.2 Configuration

**To send LTC over Dante:**

1. Connect the LTC source (hardware timecode generator, DAW output, etc.) to an available analogue or digital input on the DADman hardware unit.
2. In DADman's **Con** tab, route the LTC input to a Dante output channel.
3. In **Dante Controller**, route that Dante channel to any receiving unit on the network.

**To receive LTC on a connected unit:**

1. In Dante Controller, route the LTC Dante channel to a suitable input on the receiving unit.
2. Connect that input to the timecode input of any downstream device that accepts LTC.

> **NOTE:** LTC is an analogue waveform. If it passes through a sample rate converter, the timecode signal may be corrupted. Ensure all units in the Dante network share the same clock source (e.g., Word Clock, PTP/IEEE 1588) to avoid SRC insertion on the timecode channel. See [Section 8.6.4 — DADLink Synchronisation Requirement].

---

## 8.15 MIDI Control and Pro Tools PRE Emulation

DADman can be connected via MIDI to Pro Tools, allowing Pro Tools to treat the preamp gain controls on a DADman-connected unit as if they were **Avid PRE** hardware preamp controls. This enables Pro Tools' built-in remote preamp control functionality to adjust input gain on the DADman hardware directly from Pro Tools' I/O Setup or a compatible control surface — without switching focus to DADman.

### 8.15.1 Overview

When the Pro Tools PRE emulation is active:

- Pro Tools sends MIDI gain change messages to DADman
- DADman translates these into gain adjustments on the analogue inputs of the connected hardware unit
- The DADman AD tab displays the current gain values; changes from Pro Tools are reflected in real time

### 8.15.2 Configuration

**To enable MIDI control for Pro Tools PRE emulation:**

1. Ensure a MIDI connection exists between the DADman computer and the Pro Tools system (network MIDI, USB MIDI, or IAC Driver on macOS).
2. In DADman, go to **Settings > MIDI** and configure the MIDI input and output ports to match the connection.
3. In Pro Tools' **I/O Setup**, configure the preamp page to use the MIDI connection corresponding to DADman.

> **NOTE:** The exact MIDI channel assignment and controller mapping depends on the Pro Tools version and MTRX/DAD unit configuration. Refer to the relevant Avid MTRX documentation or DAD support for the correct MIDI parameter table for your hardware model.

_[Placeholder: detailed MIDI parameter table and step-by-step procedure — pending engineering documentation from DAD]_

---

## Pending Documentation

The following Advanced Features topics require additional information from DAD engineering before they can be documented:

| Feature                                      | Status                                                               | Notes                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **PRO\|MON Monitor System**                  | Placeholder — not yet documented                                     | PRO\|MON is the expanded monitor controller used with AX32, DX32R, Penta, and MTRX Studio. Full documentation requires DAD engineering input on the PRO\|MON configuration workflow, parameter reference, and Cue\|Mix integration.                                                                                          |
| **Cue\|Mix Zero-Latency Mixer**              | Placeholder — not yet documented                                     | Listed as a DADman feature; no source documentation available. Request from DAD engineering.                                                                                                                                                                                                                                 |
| **SPQ Card Configuration**                   | Draft in Section 8.12 — parameter table pending      | Workflow overview drafted. Full step-by-step procedure with per-parameter reference needed from DAD. Room EQ Wizard import format must be confirmed with DAD engineering.                                                                                                                                    |
| **MIDI Control and Pro Tools PRE Emulation** | Draft in Section 8.15 — MIDI parameter table pending | Concept and configuration overview drafted. Full MIDI controller/channel mapping table for each supported hardware model needed from DAD.                                                                                                                                                                                    |
| **Screenshots — all sections**               | Pending                                                              | All screenshot placeholders (8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13) require live DADman v5.8.2 with connected AX Center. |

---

_[Pending: screenshots for Sections 8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13 — all require live DADman v5.8.2 with connected AX Center or AX64]_
