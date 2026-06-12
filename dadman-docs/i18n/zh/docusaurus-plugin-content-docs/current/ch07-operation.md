---
title: "Chapter 7 — Operation"
sidebar_label: "Ch. 7 — Operation"
sidebar_position: 9
---

# Chapter 7 — Operation

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Primary reference hardware:** DAD AX Center, Core 256, AX64 (Thunder\|Core generation)  
> **Chapter status:** Draft v0.2 — Screenshots pending; Conf tab Dante/TB3 parameters pending DAD engineering; PRO\|MON and SPQ sections pending  
> **Last updated:** June 2026

---

## In This Chapter

| Section              | Covers                                                   | When to consult                                                                                |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 7.1  | Session management — files, saving, startup              | Beginning and end of sessions                                                                  |
| 7.2  | Window layout and navigation                             | Orientation; first use                                                                         |
| 7.3  | Device List                                              | Managing connected units                                                                       |
| 7.4  | Analogue inputs (AD tab)              | Setting mic/line gain, phantom power, phase                                                    |
| 7.5  | Analogue outputs (DA tab)             | Setting output levels and range                                                                |
| 7.6  | Routing matrix (Con tab)              | Patching inputs to outputs                                                                     |
| 7.7  | Clocking and configuration (Conf tab) | Clock, sample rate, digital I/O port settings                                                  |
| 7.8  | Monitor control (Mon tab)             | Active monitor profile display; source and output selection                                    |
| 7.9  | Control\|Pack strip                                      | Routing preset control _(v5.8.0 and later)_ |
| 7.10 | Mouse and keyboard controls                              | Efficiency shortcuts                                                                           |

> **NOTE — Hardware variation:** The tabs and parameters shown in DADman reflect the capabilities of the connected hardware. A unit without analogue inputs shows the **AD** tab but its controls will be absent or greyed out. Parameters marked _[AX32 / Family 1]_ apply specifically to the AX32, DX32R, and Penta series. Parameters not marked apply to all current Thunder\|Core hardware (AX Center, Core 256, AX64) unless otherwise noted.

_[Placeholder: annotated full-window screenshot of DADman v5.8.2 with callout numbers for each major area]_

---

## 7.1 Session Management

### 7.1.1 Configuration Files and Monitor Profiles

DADman uses two distinct file types to save and restore system state. Understanding the difference between them is essential for session management.

#### DADman Settings File (.dms)

A **DADman Settings File** (file extension `.dms`) stores a snapshot of all settings on all connected units at the time of saving. This includes:

- Analogue input gain, phantom power, pad, phase, and channel labels (AD section)
- Analogue output levels, mutes, and channel labels (DA section)
- Complete routing matrix state (Con section)
- Clock source, sample rate, and format settings (Conf section)
- Network configuration and unit ID assignments
- Control\|Pack routing preset configurations _(v5.8.0 and later)_

Settings files are saved via **File > Save** or **File > Save As** and are stored on the computer. They do not affect the unit directly until loaded — at which point DADman applies the stored settings to the connected unit(s) over the network.

> **CAUTION:** Firmware updates reset all settings stored on the unit to factory defaults. Always save a `.dms` file before performing a firmware update. See [Chapter 10, Section 10.1 — Updating Firmware].

#### DADman Monitor Profile File (.dmprof)

A **Monitor Profile File** (file extension `.dmprof`) stores the monitor controller configuration independently of the unit settings. A monitor profile defines:

- Monitor sources (inputs assigned to the monitor controller)
- Speaker output sets (mono, stereo, surround, immersive — up to 64 channels)
- Fold-down matrices (e.g., 5.1 to stereo, custom up-match presets)
- Delay settings per output set
- Talkback routing and level
- Reference level settings

Monitor profiles are managed via **Settings > Monitor Profile** and are saved as separate files from the `.dms` settings file. This separation allows the same physical routing and gain configuration to be used with different monitoring setups.

A default stereo monitor profile is available for download from the DAD support portal.

#### Relationship Between the Two File Types

|                                 | Settings File (.dms)         | Monitor Profile (.dmprof) |
| ------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------ |
| **Stores**                      | All hardware settings (gain, routing, clock) | Monitor controller configuration only                        |
| **Scope**                       | All connected units                                             | One monitor profile at a time                                |
| **Load via**                    | File > Open                                                     | Settings > Monitor Profile > Load                            |
| **Auto-load on startup**        | Optional                                                        | Optional                                                     |
| **Affected by firmware update** | Yes — unit reset clears settings                                | No — stored on computer only                                 |

### 7.1.2 Startup and Auto-Load

DADman can be configured to **automatically load the last used settings file** at launch. If this option is enabled, DADman will apply the stored settings to connected units on startup without requiring manual action.

> **NOTE:** The "Open last file at startup" option causes DADman to immediately write the stored settings to all connected units on launch. In multi-operator environments where different users may be making real-time changes, enabling this option will overwrite any changes made since the last save.

To enable or disable auto-load: **DADman > Preferences** (macOS) or **Settings > Options** (Windows), then **Open last file at startup**.

### 7.1.3 File Menu Reference

| Menu item               | Action                                                                                                                                                                                                                                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **New**                 | Clears the current configuration in DADman. Does not change any settings on connected units.                                                                                                                                                                                         |
| **Open…**               | Opens a DADman Settings File (`.dms`) and applies its stored settings to connected units.                                                                                                                                                                                         |
| **Save**                | Saves the current state of all connected units to the currently open `.dms` file.                                                                                                                                                                                                                    |
| **Save As…**            | Saves the current state to a new `.dms` file at a location you specify.                                                                                                                                                                                                                              |
| **Open Profile…**       | Opens a Monitor Profile (`.dmprof`) file from disk and loads it into the Mon tab.                                                                                                                                                                                                 |
| **Import Profile…**     | Imports a Monitor Profile from any currently connected unit and performs a best-fit mapping to the current unit's I/O. Useful when migrating a profile between units with different hardware configurations. _(v5.6.2 and later)_ |
| **Save Profile**        | Saves the currently loaded Monitor Profile to its existing `.dmprof` file.                                                                                                                                                                                                                           |
| **Save Profile As…**    | Saves the Monitor Profile to a new `.dmprof` file at a location you specify.                                                                                                                                                                                                                         |
| **Close Profile**       | Unloads the current Monitor Profile. The Mon tab shows no active controls until a new profile is loaded.                                                                                                                                                                             |
| **Open Recent Profile** | Opens a submenu of recently used `.dmprof` files for quick access. _(v5.7.2 and later)_                                                                                                                                                           |

> **TIP:** Use **File > Save As** at the end of every session, even if settings have not changed. The `.dms` file is the only recovery path after a unit factory reset or firmware update.

---

## 7.2 Window Layout and Navigation

The DADman main window is divided into four horizontal zones, stacked from top to bottom.

| Zone                                                    | Contents                                                                          |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Menu bar**                                            | **File** and **Settings** menus (and **DADman** menu on macOS) |
| **Device List**                                         | One row per connected unit, each in a coloured border                             |
| **Tab row**                                             | **AD · DA · Con · Conf · Mon** tab selectors                                      |
| **Channel strip area**                                  | The parameter display for the selected tab, spanning all connected units          |
| **Control\|Pack strip** _(optional)_ | Appears below the channel strip area when routing presets are configured          |

Clicking a tab switches the entire channel strip area to display that tab's controls for all connected units simultaneously. Each unit's controls remain grouped within its coloured border regardless of which tab is active.

Individual sub-sections within a unit's display can be collapsed or expanded by clicking the **section header button** (AD, DA, Con, Conf, or Mon) _(v5.7.2 and later)_. Tooltips appear when hovering over section header buttons to describe their function. This is useful when working with large numbers of units to reduce vertical scroll.

### 7.2.1 The Five Main Tabs

| Tab      | Full name           | What it shows                                                                                          |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------ |
| **AD**   | Analogue-to-Digital | Metering and control for all analogue inputs: gain, phantom power, mute, phase, labels |
| **DA**   | Digital-to-Analogue | Metering and control for all analogue outputs: level, mute, labels, output range       |
| **Con**  | Connections         | The routing crosspoint matrix — inputs as rows, outputs as columns                                     |
| **Conf** | Configuration       | Clock source, sample rate, Adapt To, Dante and digital I/O port settings                               |
| **Mon**  | Monitor             | The active monitor profile: sources, outputs, fold-downs, delay, talkback              |

### 7.2.2 Multi-Unit View

When multiple units are connected, DADman displays them all within the same window, separated by their coloured borders. Tabs apply globally — selecting **AD** shows the analogue input controls for all connected units simultaneously. This allows a single operator to manage a complex multi-unit system from one view without switching between separate application windows.

### 7.2.3 Colour Schemes

Three colour schemes are available via **Settings > Options** (Windows) or **DADman > Preferences** (macOS). The default scheme is used in all examples in this manual. The scheme selection is a local preference stored on the computer and does not affect any connected unit.

### 7.2.4 Settings Menu Reference

| Menu item                                                                                        | Action                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Options…** (Windows) / **DADman > Preferences…** (macOS) | Opens the Preferences window                                                                                                                                                                 |
| **Monitor Profile**                                                                              | Opens the Monitor Profile editor — see [Section 7.8] and [Chapter 8] |
| **Routing Presets**                                                                              | Opens the Control\|Pack Routing Preset configuration window _(v5.8.0 and later)_                                                          |
| **Enable EuCon**                                                                                 | Enables EuControl integration for Avid control surface connectivity                                                                                                                          |
| **Device List**                                                                                  | Opens the Device List management window                                                                                                                                                      |

---

## 7.3 Device List

The Device List is the horizontal strip at the top of the DADman window showing all discovered hardware units. Units appear **left to right in ascending unit ID order**.

_[Placeholder: annotated Device List screenshot showing two units with coloured borders, unit ID fields, unit name fields, and connection status indicators]_

### 7.3.1 Device List Columns

| Element               | Description                                                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Unit ID**           | A number that determines the unit's position in the Device List (left to right). Editable — click the ID field to change it. The ID is stored in the unit. |
| **Unit name**         | A user-assigned name for the unit. Editable — click the name field to rename. Stored in the unit and shown on units with front panel displays.                                |
| **Connection status** | Indicates whether DADman has an active connection to the unit. A disconnected unit is shown greyed out.                                                                                       |
| **Firmware version**  | Displays the current firmware version running on the unit.                                                                                                                                                    |

> **TIP (v5.8.1.6, macOS only):** The Device List can be sorted by clicking column headers — unit name, ID, firmware version, and other columns. This is useful when managing large numbers of units. Sorting is a display preference only and does not change unit IDs.

### 7.3.2 Device List Context Menu

Right-clicking a unit row (Windows) or using the **Action** button (macOS) opens a context menu with the following options:

| Option               | Action                                                                         |
| -------------------- | ------------------------------------------------------------------------------ |
| **Network Settings** | Opens the IP address and network configuration dialog for the selected unit    |
| **Clone from…**      | Copies all settings from another unit in the same hardware family to this unit |
| **Firmware Update**  | Initiates a firmware update for the selected unit                              |
| **Factory Reset**    | Resets all settings on the unit to factory defaults                            |
| **Disconnect**       | Removes the unit from the active Device List without deleting it               |

> **CAUTION:** **Factory Reset** and **Firmware Update** both clear all settings stored on the unit. Save a `.dms` file before using either option.

### 7.3.3 Channel Names

Channel names (labels for individual input and output channels) are assigned in the AD and DA tabs.

> **NOTE — Important:** Channel names are stored in the **DADman Settings File (`.dms`)** on the computer, **not** in the hardware unit. This means channel names are lost if DADman is used without loading a `.dms` file, or if a different computer connects to the unit. Always include channel names when saving configuration files.

---

## 7.4 AD Tab — Analogue Inputs

The **AD** tab displays metering and control for all analogue input channels — mic, DI, and line level — on connected units. If a unit has no analogue input cards installed, this tab will be present but empty for that unit.

_[Placeholder: annotated AD tab screenshot showing mic channel with gain slider, phantom, phase, mute, and clip/signal indicators]_

### 7.4.1 Channel Strip Controls

Each analogue input channel displays the following controls from top to bottom:

| Control                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Input type selector**                      | Switches the input between **MIC** (microphone preamplifier) and **LINE** (line level). Available only on channels with mic preamp hardware.                                                                                                                                                                                                 |
| **Phantom power (+48 V)** | Enables 48 V phantom power on the selected channel. Only available in MIC mode. Apply to condenser microphones only — do not enable on ribbon microphones unless the manufacturer specifies compatibility.                                                                                                                                                         |
| **Phase invert (Ø)**      | Inverts the polarity of the input signal by 180°.                                                                                                                                                                                                                                                                                                                                                  |
| **Mono / stereo link**                       | Links adjacent odd/even channel pairs for stereo operation. Controls for the pair are ganged when linked.                                                                                                                                                                                                                                                                          |
| **MIC gain slider**                          | Sets the microphone preamplifier gain. See [Section 7.4.2] for adjustment increments.                                                                                                                                                                                                          |
| **Mute**                                     | Mutes the input channel. The mute state is stored in the unit.                                                                                                                                                                                                                                                                                                                     |
| **Signal LED**                               | Illuminates when the input signal exceeds −42 dBFS. Indicates signal presence; does not indicate the signal is at a useful level.                                                                                                                                                                                                                                                  |
| **Clip LED**                                 | Illuminates when the input signal exceeds −0.5 dBFS. Indicates imminent or actual digital clipping. Reduce gain immediately if this LED is lit during normal operation.                                                                                                                                                                            |
| **Peak hold**                                | The highest signal level reached is held on the meter bar, decaying slowly. Provides a visual record of transient peaks without continuous monitoring. Available on AX32, Penta, and MTRX hardware _(requires firmware v2.3.2.1 or later, from DADman v5.4.3)_. |
| **Channel label**                            | User-assigned name for the channel. Stored in the `.dms` file. Click to edit.                                                                                                                                                                                                                                                                                      |

### 7.4.2 Gain Adjustment

The MIC gain slider can be adjusted using the following methods:

| Method                                                   | Increment                                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------------------- |
| Mouse drag                                               | 0.5 dB per step                                           |
| Keyboard **↑ / ↓** (channel selected) | 0.1 dB per step                                           |
| Keyboard **Page Up / Page Down**                         | Larger step (value to be confirmed by DAD engineering) |

> **TIP:** Select a channel strip by clicking it, then use keyboard arrows for fine gain adjustment during a session without moving your hands to the mouse.

### 7.4.3 Mic Gain Groups _(v5.8.1.6 and later)_

Mic Gain Groups allow multiple input channels to be adjusted simultaneously — useful for multi-mic setups on drums, orchestral sessions, or any situation requiring consistent relative gain relationships across a group.

**To create a Mic Gain Group:**

1. Right-click on a channel's gain control (or use the channel context menu).
2. Select **Add to Gain Group** and assign a group number.
3. Repeat for each channel to include in the group.

**Group behaviour:**

- Moving the gain control on any grouped channel moves all channels in the group by the same amount.
- **Alt / Option key + drag** adjusts only the channel under the cursor, allowing individual fine-tuning without breaking the group.
- Mute applies to all grouped channels simultaneously, regardless of modifier keys.

> **NOTE:** Mic Gain Groups work as expected when DADman is controlled via EuControl — gain sliders and knobs on Avid surfaces affect all grouped channels. Mute from a control surface mutes all grouped channels simultaneously.

> **NOTE:** Mic Gain Groups are not supported on the MTRX Studio. _(v5.8.1.6)_

---

## 7.5 DA Tab — Analogue Outputs

The **DA** tab displays metering and control for all analogue output channels on connected units. If a unit has no analogue output cards installed, the tab will be present but empty for that unit.

_[Placeholder: annotated DA tab screenshot showing output channel with level fader, mute, carrier/signal/clip indicators]_

### 7.5.1 Channel Strip Controls

| Control                | Description                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Output level fader** | Sets the analogue output level. The value corresponds to the analogue level in dBu that is produced when a 0 dBFS digital signal is applied. See [Section 7.5.2] for range details. |
| **Mute**               | Mutes the output channel.                                                                                                                                                                                                                                                                               |
| **Mono / stereo link** | Links adjacent odd/even channel pairs for stereo operation.                                                                                                                                                                                                                                             |
| **Valid carrier LED**  | On digital output channels: illuminates when a valid digital signal is present at the output. On analogue output cards: illuminates when the output card is present and active.                                                                         |
| **Signal LED**         | Illuminates when the output signal exceeds −42 dBFS.                                                                                                                                                                                                                                                    |
| **Clip LED**           | Illuminates when the output signal exceeds −0.5 dBFS.                                                                                                                                                                                                                                   |
| **Peak hold**          | Holds the highest output level reached on the meter bar. Same availability as AD tab — AX32, Penta, and MTRX with firmware v2.3.2.1 or later.                                                                                           |
| **Channel label**      | User-assigned name. Stored in the `.dms` file. Click to edit.                                                                                                                                                                                                           |

### 7.5.2 Output Level Range and Alignment

The output level fader sets the **analogue output level corresponding to 0 dBFS digital full scale**. This is a gain structure alignment setting that determines the conversion factor between the digital domain (dBFS) and the analogue domain (dBu).

**Output level range:** Two ranges are available, selectable via the **6 dB Gain** button:

| Mode               | Range              | Maximum output    |
| ------------------ | ------------------ | ----------------- |
| Standard           | −66 dBu to +18 dBu | +18 dBu at 0 dBFS |
| +6 dB Gain enabled | −60 dBu to +24 dBu | +24 dBu at 0 dBFS |

> **CAUTION:** Setting a high output level is not always appropriate. If the downstream equipment has a maximum input level lower than the DADman output level setting, the downstream equipment will clip even when the DADman signal is clean. Always verify that the output level setting does not exceed the maximum input specification of the equipment being fed. Example: setting +24 dBu output into equipment with a +18 dBu maximum input will cause clipping at approximately −6 dBFS on the DADman signal.

> **TIP:** Match the output level to the nominal input level of the downstream equipment for best gain structure. For example, if your monitor amplifier's input sensitivity is +4 dBu, setting the DADman output level to +18 dBu gives approximately 14 dB of headroom above nominal — a comfortable margin for most monitoring workflows.

---

## 7.6 Con Tab — Routing Matrix

The **Con** tab displays the routing crosspoint matrix — the complete signal routing engine of the connected hardware. Every input can be routed to any output, and any number of outputs can receive the same input simultaneously.

_[Placeholder: annotated Con tab screenshot showing overview matrix (left), detailed matrix (right), and input/output status indicators]_

### 7.6.1 Matrix Layout

The routing matrix is presented in two panels side by side:

| Panel               | Contents                                                                                     | Purpose                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Overview matrix** | All inputs (rows) × all outputs (columns), small scale | Navigate to a section of the matrix; shows overall routing state at a glance |
| **Detailed matrix** | Expanded view of the area selected in the overview                                           | Make or remove individual crosspoint connections                             |

In both panels, **inputs are displayed as rows on the left** and **outputs are displayed as columns across the top**. A connection is made at the intersection (crosspoint) of an input row and an output column.

> **NOTE:** The inputs and outputs shown in the matrix reflect the actually installed hardware options and the number of channels available at the current sample rate. At higher sample rates, some formats (MADI, ADAT) carry fewer channels, reducing the number of rows and columns shown.

### 7.6.2 Making and Removing Connections

| Action                                 | Result                                                                                                            |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Single click** on a crosspoint       | Connects that input to that output (or disconnects if already connected)                       |
| **Shift + click** on a crosspoint      | Connects the clicked channel and the next consecutive channel simultaneously (one stereo pair) |
| **Ctrl / Cmd + click** on a crosspoint | Connects a complete diagonal — maps inputs to their same-numbered outputs from the clicked point                  |

A connected crosspoint is shown as a **filled blue square**.

### 7.6.3 Connection Status Indicators

**In the output column headers (top row):**

| Indicator         | Meaning                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------- |
| No mark           | Output is not connected to any input                                                      |
| Light blue square | Output is connected to an input that is not currently visible in the detailed matrix view |
| Dark blue square  | Output is connected to an input visible in the current detailed matrix view               |

> **NOTE:** An existing connection is always overridden when you click a new crosspoint on the same output column. The output is reassigned to the new input; the previous connection is removed.

**In the input row labels (left side of detailed matrix):**

| Colour     | Meaning                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Green**  | Valid digital carrier present on the input (or analogue card is installed and active for analogue channels) |
| **Yellow** | Sync loss or sample rate mismatch on this input                                                                                |
| **Red**    | Error — no valid input signal detected                                                                                         |

> **TIP:** Yellow status on a digital input usually indicates a sample rate mismatch between the source and the unit's current clock setting. Check the **Conf** tab and verify that the unit's sample rate matches the source, or enable **Adapt To** for that input.

---

## 7.7 Conf Tab — Clocking and Configuration

The **Conf** tab controls the unit's digital infrastructure — clock source, sample rate, synchronisation behaviour, and the configuration of digital I/O ports (MADI, Dante, Word Clock, AES3).

_[Placeholder: annotated Conf tab screenshot for AX Center, showing Synchronization, Dante, and MADI sub-sections]_

> **NOTE — AX32 / Family 1 hardware:** The Conf tab on AX32, DX32R, and Penta units is labelled **General** and organised into sub-sections (Synchronisation, MADI Coax Interface, Optical 1/2 Interface). The parameters are functionally equivalent to those described here. AX32-specific parameters are noted below where they differ.

### 7.7.1 Synchronisation Parameters

| Parameter            | Options                                                                                                                                  | Description                                                                                                                                                                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Source**           | Internal · Word Clock · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical 1/2 · Dante · Thunderbolt 3                                       | Selects the clock master source for the unit. Use **Internal** when this unit is the system clock master.                                                                                                     |
| **Sampling Rate**    | 44.1 · 48 · 88.2 · 96 · 176.4 · 192 kHz _(and DXD / 384 kHz on AX32)_ | Sets the operating sample rate when **Adapt To** is set to **Internal**. When **Adapt To** is set to a digital input, this field shows the detected sample rate of that input (read-only). |
| **Adapt To**         | Internal · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical · Dante · Thunderbolt 3                                                        | When set to a digital input, the unit automatically matches the sample rate of that input. When set to **Internal**, the **Sampling Rate** parameter above is used.                                           |
| **Word Clock Out**   | Word Clock (base rate) · Word Clock (actual rate)                                                  | Determines whether the BNC Word Clock output follows only the base sample rate or the actual operating rate.                                                                                                                  |
| **Sync termination** | High Z · 75 Ω                                                                                                                            | Sets whether the Word Clock input is terminated internally with 75 Ω. **Strongly recommended: always use 75 Ω termination** for optimum clock stability.                                      |

> **TIP:** When using Dante as the audio network and the unit is not the Dante clock master, set **Source** to **Dante** and **Adapt To** to **Dante**. This ensures the unit tracks the Dante PTP clock and avoids sample rate conversion in the audio path.

### 7.7.2 MADI Port Configuration

These settings apply to each MADI port individually (Coaxial BNC and Optical SFP ports are configured separately).

| Parameter                      | Options               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frame rate**                 | Legacy · High Speed   | **Legacy:** MADI frame length is maintained at 48 kHz frame length, and adjacent channels are merged at higher sample rates (S/MUX). **High Speed:** Frame length follows the actual sample rate — lower latency at 88.2 kHz and above. At 44.1 or 48 kHz, Legacy is always used regardless of this setting. |
| **Frame size**                 | Normal · Extended     | **Normal:** 56-channel MADI (standard). **Extended:** 64-channel MADI. Verify that connected MADI equipment supports 64-channel extended mode before enabling.                                                                                                                                                                               |
| **Ch. status** | Default · Transparent | **Default:** the unit defines the channel status bits of the outgoing MADI signal. **Transparent:** channel status bits from the source are passed through unchanged. Leave on **Default** in most installations.                                                                                                                                               |
| **Input rate**                 | Auto · As AD          | **Auto:** the unit detects the sample rate of the incoming MADI signal automatically. Recommended: **Auto**.                                                                                                                                                                                                                                                                    |

> **NOTE — High Speed vs. Legacy MADI:** Most MADI devices in the market use Legacy mode. Enabling High Speed mode on one end of a MADI link without enabling it on the other will result in no audio or clock errors. Verify that both the transmitting and receiving device are set to the same Frame Rate mode before operating above 48 kHz.

### 7.7.3 Optical MADI Interface _(AX32)_

_Applies to AX32 units fitted with an SFP optical MADI module._

| Parameter                      | Options                       | Description                                                                                                                                                                                                |
| ------------------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mode**                       | Disabled · MADI · NTP HotLink | Selects the operating mode of the optical SFP interface. Set to **Disabled** if no SFP module is installed. **NTP HotLink** mode is reserved — do not use. |
| **Frame rate**                 | Legacy · High Speed           | Same as MADI Coaxial — see above.                                                                                                                                                          |
| **Frame size**                 | Normal · Extended             | Same as MADI Coaxial — see above.                                                                                                                                                          |
| **Ch. status** | Default · Transparent         | Same as MADI Coaxial — see above.                                                                                                                                                          |
| **Input rate**                 | Auto · As AD                  | Same as MADI Coaxial — see above.                                                                                                                                                          |

### 7.7.4 Dante Configuration

Dante configuration parameters visible in DADman's Conf tab control aspects of Dante operation that are managed at the hardware level. Full Dante routing and subscription management is performed in the **Dante Controller** application (a separate application from Audinate, not part of DADman).

_[Pending from DAD engineering: complete list of Dante parameters visible in the Conf tab for AX Center / Core 256 — including Dante sample rate, redundancy mode, and IPCore parameters introduced in v5.8.1.6]_

> **NOTE — Dante 256 IPCore _(v5.8.1.6)_:** AX64, AX Center, and Core 256 units fitted with the Dante 256 IPCore module support up to 256 channels of Dante at 48 kHz. This expanded Dante configuration requires both firmware and software at v5.8.1.6 or later.

---

## 7.8 Mon Tab — Monitor Control

The **Mon** tab provides real-time control of the monitor controller defined in the active Monitor Profile. It is the operator's day-to-day interface for monitoring — source selection, speaker switching, fold-downs, and talkback.

> **NOTE:** The Mon tab displays the _controls_ defined in the Monitor Profile; the _configuration_ of sources, outputs, fold-downs, and routing is done in the Monitor Profile editor, accessed via **Settings > Monitor Profile**. This section covers the Mon tab controls only. For Monitor Profile configuration, see [Chapter 8 — Advanced Features, Section 8.1 — Monitor Profiles].

_[Placeholder: annotated Mon tab screenshot showing source selector, speaker output buttons, fold-down selector, main level fader, dim, cut, talkback, and reference level button]_

### 7.8.1 Mon Tab Controls

| Control                                      | Description                                                                                                                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Source selector**                          | Selects the active monitoring source from those defined in the Monitor Profile.                                                                                                  |
| **Speaker output buttons**                   | Selects the active speaker set (e.g., Near, Mid, Far; or Stereo, 5.1, 7.1.4). |
| **Fold-down selector**                       | Applies a fold-down or up-match matrix from those defined in the Monitor Profile.                                                                                                |
| **Main level fader**                         | Controls the master monitoring level for the active speaker set. Shown in dB relative to the reference level.                                                    |
| **Ref (Reference level)** | Locks the main level fader to the calibrated reference level defined in the Monitor Profile. Press once to engage; press again to release.                       |
| **Dim**                                      | Applies a fixed attenuation (typically −20 dB) to the monitoring output without changing the fader position.                                                  |
| **Cut**                                      | Mutes all monitoring outputs immediately.                                                                                                                                        |
| **Talkback**                                 | Activates the talkback signal path defined in the Monitor Profile.                                                                                                               |
| **Meter section**                            | Displays real-time metering of the active monitor source and outputs, as configured in the Monitor Profile.                                                                      |

### 7.8.2 Reference Level

The reference level function allows monitoring at a pre-calibrated SPL without risk of accidental level changes.

**To set a reference level:**

1. Using test tones and a calibrated SPL meter, set the monitoring output level to the desired reference SPL.
2. Note the dB value shown on the main level fader — this is your reference offset.
3. In the Monitor Profile editor (**Settings > Monitor Profile**), enter this value as the **Reference Level** for the speaker set.
4. During normal operation, press **Ref** to instantly return to the calibrated level after any manual adjustments.

> **TIP:** Multiple speaker sets can each have their own reference level. For example, a "Near Field 85 dB" set and a "Near Field 75 dB" set can share the same physical outputs, differing only in their trim setting.

---

## 7.9 Control|Pack Strip _(v5.8.0 and later)_

The Control\|Pack strip appears **below** the main channel strip area when routing presets have been configured for one or more connected units. It provides real-time control and status monitoring for all configured routing presets.

> **NOTE:** The Control\|Pack strip is only visible after routing presets have been created in the Routing Preset editor (**Settings > Routing Presets**). If no presets are configured, this area is absent from the DADman window. See [Chapter 8, Section 8.4 — Control\|Pack] for complete configuration documentation.

_[Placeholder: annotated Control\|Pack strip screenshot showing preset name buttons, PPM meters, and trigger status indicators]_

### 7.9.1 Control|Pack Strip Elements

The strip displays one section per Thunder\|Core unit with routing presets configured. Within each unit section, each configured preset is shown with the following elements:

| Element                                     | Description                                                                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Preset name**                             | The name assigned to the preset in the Routing Preset editor                                                                                 |
| **Bucket buttons (1–4)** | Selects the active input set (bucket) for the preset. Colour indicates state — see below. |
| **Source PPM meters**                       | Real-time peak programme meters showing the level of all channels in the bucket.                                             |
| **Output PPM meters**                       | Real-time peak programme meters showing the level of all output channels for the preset.                                     |
| **Trigger status indicators**               | Shows the status of signal detectors assigned as triggers for each bucket.                                                   |

### 7.9.2 Bucket Button States

| Colour    | State                                | Meaning                                                                                                                                               |
| --------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Blue**  | Active (manual)   | This bucket is currently routed. Preset is in manual mode — no automated switching.                                   |
| **Green** | Armed (automated) | This bucket is the current active route. Preset is in automatic mode and ready to switch based on trigger conditions. |
| **Red**   | Trigger error                        | A signal detector assigned to this bucket has reported an error (signal loss, AE6 integrity failure).              |

**Switching between manual and automated mode:**

- **Double-click** a green (automated) bucket button to switch to manual mode — button turns blue.
- **Double-click** a blue (manual) bucket button to re-arm automation — button turns green.

> **TIP:** In live events or broadcast, arm automation during line check. If an input fails, the preset will switch automatically without operator intervention. You can override automated switching at any time by double-clicking the desired bucket button.

---

## 7.10 Mouse and Keyboard Controls

### 7.10.1 Gain and Level Adjustment

| Action                                          | Modifier                                                         | Result                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Mouse drag on MIC gain slider                   | —                                                                | 0.5 dB per step                                             |
| **↑ / ↓** (channel selected) | —                                                                | 0.1 dB per step                                             |
| **↑ / ↓** (channel selected) | **Shift**                                                        | Increased resolution (finer than 0.1 dB) |
| **Click** on gain control                       | **Ctrl (Win) / Cmd (Mac)** | Reset to default value                                                      |
| Any of the above                                | **Alt / Option**                                                 | Apply to selected channel only — bypasses Mic Gain Group                    |

### 7.10.2 Routing Matrix

| Action                     | Result                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Single click on crosspoint | Connect / disconnect                                                               |
| **Shift** + click          | Connect two consecutive channels (one stereo pair)              |
| **Ctrl / Cmd** + click     | Connect a complete diagonal (same-numbered I/O from this point) |

### 7.10.3 Keyboard Shortcuts _(v5.7.0 and later)_

| Action                      | macOS | Windows          |
| --------------------------- | ----- | ---------------- |
| **File > Open…**            | ⌘O    | Ctrl+O           |
| **File > Save**             | ⌘S    | Ctrl+S           |
| **File > Save As…**         | ⌘⇧S   | Ctrl+Shift+S     |
| **File > Open Profile…**    | ⌥⌘O   | Ctrl+Alt+O       |
| **File > Import Profile…**  | ⌥⌘I   | Ctrl+Alt+I       |
| **File > Save Profile**     | ⌥⌘S   | Ctrl+Alt+S       |
| **File > Save Profile As…** | ⌥⌘⇧S  | Ctrl+Alt+Shift+S |
| **File > Close Profile**    | ⌥⌘W   | Ctrl+Alt+W       |
| Open / activate main window | ⌘⇧1   | —                |
| Open Device List            | ⌘⇧L   | Ctrl+Shift+L     |
| Open Monitor Profile        | ⌘⇧M   | Ctrl+Shift+M     |
| Open Settings / Options     | ⌘,    | Ctrl+,           |

> **NOTE:** These shortcuts were introduced in DADman v5.7.0. Earlier versions do not support keyboard shortcuts for file and window operations.

---

## Cross-References

- **Chapter 1 — Introduction:** Conceptual explanation of what each tab controls and how the file types relate
- **Chapter 5 — Signal Flow & Architecture:** Network and clocking architecture
- **Chapter 6 — Getting Started:** Step-by-step walkthrough using these controls in sequence for the first time
- **Chapter 8 — Advanced Features:** Monitor Profile configuration; Control\|Pack setup; Mic Gain Groups; EuCon integration; output level alignment

---

_[Pending from DAD engineering:]_  
_— Full Conf tab parameter list for AX Center / Core 256 (Dante params, Thunderbolt 3 clock params)_  
_— Dante 256 IPCore Conf tab parameters (v5.8.1.6)_  
_— Complete keyboard shortcut list_  
_— SPQ card tab / controls (separate sub-section to be added when documented)_  
_— PRO\|MON controls in Mon tab (requires dedicated documentation from DAD)_  
_— All screenshots_
