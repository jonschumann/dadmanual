---
id: ch06-getting-started
title: "Chapter 6 — Getting Started"
sidebar_label: "Ch. 6 — Getting Started"
sidebar_position: 8
slug: /getting-started
---

# Chapter 6 — Getting Started

> **Document:** DADman User Manual  
> **Software version covered:** DADman v5.8.2 build 2  
> **Primary example hardware:** DAD AX Center  
> **Chapter status:** Draft v0.2 — Screenshots pending (Steps 1, 2, 4, 5, 6, 7, 9 and interface orientation annotated screenshot)  
> **Last updated:** June 2026

---

## Purpose

This chapter walks you through a complete, working DADman setup — from first launch to confirmed audio — in the shortest path possible. It assumes DADman is already installed on your computer. If it is not, complete [Chapter 3 — Installation] first.

Each step states what to do, what you should see, and where to find the full reference when you need more detail.

**Estimated time:** 15–20 minutes for a first-time setup on a single unit.

---

## Before You Begin

Confirm the following before launching DADman:

| Requirement | Check |
|-------------|-------|
| DADman v5.8.2 build 2 (or later) is installed | [Chapter 3, Section 3.4] |
| The hardware unit is powered on | Refer to your hardware installation guide |
| The hardware unit is connected to the same Ethernet network as your computer | Direct cable or shared switch |
| If using Thunderbolt 3 audio: the TB3 driver is installed and the unit is connected via Thunderbolt | [Chapter 3, Section 3.5–3.6] |
| You have noted the unit's current IP address (check the front panel display) | — |

> **NOTE — macOS Sequoia (v15) users:** DADman may fail to discover units on the network when it first launches on macOS Sequoia. If no units appear after 30 seconds, log out of your macOS account and log back in. This is a known OS-level issue; Thunderbolt connections are unaffected. See [Chapter 3, Section 3.7] for the full workaround.

---

## The DADman Interface at a Glance

When DADman opens, the main window shows all connected hardware units arranged left to right in the **Device List** area. Each unit is displayed as a column of channel strips, bordered in the unit's assigned colour, with five tabs that provide access to different control domains.

### The Five Tabs

| Tab | Full name | What it controls |
|-----|-----------|-----------------|
| **AD** | Analogue to Digital | Analogue input channels — mic/line gain, +48 V phantom power, phase invert (Ø), mute, peak metering, channel labels |
| **DA** | Digital to Analogue | Analogue output channels — output level faders, mute, signal/clip metering, channel labels |
| **Con** | Connections | The full signal routing matrix — a grid where clicking a crosspoint connects any input to any output |
| **Conf** | Configuration | Per-unit settings — clock source, sample rate, Adapt To, MADI frame rate, Dante configuration, port-level options |
| **Mon** | Monitor | Monitor controller — loaded from a Monitor Profile; shows source selection, speaker set buttons, level fader, Ref/Dim/Cut controls, talkback |

> **NOTE:** The **Mon** tab displays active controls only when a Monitor Profile (`.dmprof` file) is loaded. See Step 9 for how to load or create one.

Clicking a section header button collapses or expands that section *(v5.7.2 and later)*. This is useful on smaller screens or when working with multiple units simultaneously.

*[Placeholder: annotated screenshot — DADman main window showing all five tabs, Device List, and unit border colour]*

### The Device List

Open the Device List via **Settings > Device List** or **⌘⇧L** (macOS) / **Ctrl+Shift+L** (Windows). The Device List shows all units DADman has discovered on the network, with their name, unit ID, IP address, and firmware version. Right-clicking a unit in the Device List gives access to Network Settings, Update Firmware, Factory Reset, Clone, and Disconnect.

### File Types

DADman uses two file types:

| Extension | Name | Stores |
|-----------|------|--------|
| `.dms` | DADman Settings File | All unit settings — routing, gains, labels, Conf tab parameters |
| `.dmprof` | DADman Monitor Profile | Monitor controller configuration — sources, speaker sets, fold-downs, talkback |

These files are independent. Saving one does not automatically save the other. Both should be saved and backed up.

---

## Step-by-Step Walkthrough

### Step 1 — Launch DADman

Open **DADman** from your Applications folder (macOS) or Start menu (Windows).

**Expected result:** The DADman main window opens. If no units are found immediately, the **Device List** window opens automatically.

> **NOTE:** From DADman v5.7.0, the application continuously retries connecting to units — there is no timeout. If your unit is powered on and reachable on the network, it will appear in the Device List without any manual action required.

*[Placeholder: screenshot — DADman main window at launch with empty Device List]*

---

### Step 2 — Verify Device Discovery

Wait up to 30 seconds. Your AX Center (or other connected unit) should appear in the **Device List** as a row with a coloured border.

**Expected result:** The unit row shows the unit name, unit ID number, and firmware version. The connection indicator is active (not greyed out).

*[Placeholder: screenshot — Device List showing one connected AX Center with coloured border]*

If no units appear after 30 seconds:

- Confirm the unit is powered on and its front panel **Ready** LED is solid green.
- Confirm the Ethernet cable is connected between the unit and your computer (or switch).
- Confirm the unit's IP address is on the same subnet as your computer's network interface. Check via the unit's front panel display.
- On Windows, confirm that your firewall is not blocking DADman. Add a firewall exception if needed.
- See [Chapter 9 — Troubleshooting, Section 9.2 — Network and Connectivity Issues] for a full diagnostic table.

> **TIP:** Use **Settings > Device List** or **⌘⇧L** (macOS) / **Ctrl+Shift+L** (Windows) to open the Device List directly if it is not visible.

---

### Step 3 — Name the Unit

Click the unit's **name field** in the Device List and type a descriptive name — for example, `AX Center - Studio A`.

**Expected result:** The name updates immediately and is stored in the unit itself. It will appear on units with front panel displays and persist across DADman sessions on any computer.

> **NOTE:** Unit names are stored in the hardware unit. Channel labels assigned in Step 5 are stored in the `.dms` settings file on the computer — not in the unit.

---

### Step 4 — Set the Clock Source and Sample Rate

> **This step must be completed before patching.** All digital audio devices in your system must share a common sample clock. Configuring routing before confirming clock settings can cause clicks, pops, or silence that are harder to diagnose after the fact.

1. Click the **Conf** tab.
2. In the **Synchronisation** section, set **Source** to match your system:

| System configuration | Source setting |
|---------------------|---------------|
| This unit is the system clock master | **Internal** |
| Clocking from a word clock signal | **Word Clock** |
| Clocking from Dante network | **Dante** |
| Matching a connected DAW's sample rate automatically | **Adapt To** → **Thunderbolt 3** (or relevant digital input) |

3. Set **Sampling Rate** to match your session — typically **48 kHz** for broadcast or post-production, **44.1 kHz** for music.
4. If using word clock input, set **Sync termination** to **75 Ω**.

**Expected result:** The sample rate shown in the **Conf** tab matches your intended rate. If **Adapt To** is set to an external source, the displayed rate updates automatically to match the detected external rate.

*[Placeholder: screenshot — Conf tab showing Source and Sample Rate configured]*

> **TIP:** If your AX Center is the only digital device in your system, set **Source** to **Internal** and select your sample rate manually. This gives you full control without dependency on an external clock.

Full reference: [Chapter 7, Section 7.3 — Clock and Synchronisation]

---

### Step 5 — Label and Configure Analogue Inputs

1. Click the **AD** tab.
2. For each active input channel:
   - Click the **channel label** field and type a name (e.g., `Kick`, `OH L`, `Room`).
   - Select input type: **MIC** or **LINE**.
   - For condenser microphones: enable **+48V** phantom power. Do not enable phantom power on ribbon microphones unless the manufacturer confirms compatibility.
   - Set the **MIC gain** slider to a conservative starting level. Adjust upward during soundcheck.
   - Enable **Ø** (phase invert) if needed.

**Expected result:** The **Signal** LED (green) illuminates when audio is present above −42 dBFS. The **Clip** LED should not illuminate during normal signal levels.

*[Placeholder: screenshot — AD tab with two mic channels configured, Signal LED lit]*

> **TIP:** With a channel selected, use **↑/↓** arrow keys to adjust gain in 0.1 dB increments. Add **Shift** for even finer resolution. This is more precise than mouse-dragging (0.5 dB steps).

Full reference: [Chapter 7, Section 7.4 — Gain and Level Management]

---

### Step 6 — Route Inputs to Outputs

1. Click the **Con** tab.
2. The routing matrix displays **inputs as rows** on the left and **outputs as columns** across the top.
3. Click the crosspoint at the intersection of an input row and output column to connect them. A **filled blue square** confirms the connection.

| Action | Shortcut |
|--------|----------|
| Connect one channel | Single click |
| Connect a stereo pair | **Shift** + click first channel |
| Connect same-numbered I/O diagonal | **Ctrl/Cmd** + click |
| Disconnect | Click the filled blue square again |

**Expected result:** Blue squares appear at each connected crosspoint. The output column header shows a blue indicator confirming the output is patched.

*[Placeholder: screenshot — Con tab with crosspoints connected showing overview and detail matrix]*

> **NOTE:** The number of inputs and outputs shown in the matrix reflects your hardware configuration and current sample rate. At higher sample rates, some formats (MADI, ADAT) carry fewer channels — the matrix adjusts automatically.

Full reference: [Chapter 7, Section 7.2 — I/O Configuration and Patching]

---

### Step 7 — Set Output Levels

1. Click the **DA** tab.
2. Set the **output level fader** for each active output channel to match the input specification of the downstream equipment.

The fader value is the **analogue output level in dBu that corresponds to 0 dBFS digital full scale** — not a volume control. Common settings:

| Downstream equipment | Typical output level setting |
|---------------------|------------------------------|
| Professional power amplifiers (+4 dBu nominal) | **+18 dBu** |
| Broadcast equipment (EBU R68 alignment) | **+18 dBu** |
| Semi-pro / prosumer equipment (−10 dBV nominal) | **+4 to +8 dBu** |

> **CAUTION:** Setting the output level higher than the maximum input of your downstream equipment will clip that equipment even when the DADman signal shows no overload. Always verify the output level does not exceed the downstream device's maximum input specification.

*[Placeholder: screenshot — DA tab with output level faders set]*

Full reference: [Chapter 7, Section 7.4 — Gain and Level Management]

---

### Step 8 — Verify Audio End-to-End

With signal present at the inputs, confirm audio flows through the system:

1. **AD tab:** Signal LEDs (green) illuminate on active inputs.
2. **Con tab:** Input status indicators on the left side of the detail matrix show green (valid signal). Yellow indicates a sync/clock mismatch — return to Step 4.
3. **DA tab:** Signal LEDs illuminate on active outputs.
4. **At the destination:** Audio is audible or measurable at your speakers, recorder, or metering system.

**If signal LEDs are green but no audio reaches the output:**
- Verify the routing crosspoints in the **Con** tab.
- Confirm **Mute** is not engaged on the relevant AD or DA channel.
- Check that the **Source** clock setting in **Conf** tab is correct — a yellow status in the Con matrix signals a clock problem.

**If Clip LED illuminates:**
- Reduce **MIC gain** in the **AD** tab.
- If downstream equipment is clipping, reduce the output level fader in the **DA** tab.

---

### Step 9 — Load or Create a Monitor Profile

If you are using DADman's monitor controller (PRO\|MON), you need a Monitor Profile before the **Mon** tab shows active controls.

**To load an existing profile:**
1. **File > Open Profile…** (macOS: **⌥⌘O** / Windows: **Ctrl+Alt+O**)
2. Select your `.dmprof` file.

**To create a new profile:**
1. **Settings > Monitor Profile** to open the editor.
2. Right-click **Sources** → **Add New Source** → assign inputs from your routing.
3. Right-click **Outputs** → **Add New Output Set** → assign analogue outputs for each speaker configuration.
4. **File > Save Profile As…** (macOS: **⌥⌘⇧S** / Windows: **Ctrl+Alt+Shift+S**)

**Expected result:** The **Mon** tab shows the source selector, speaker output buttons, main level fader, and **Ref**, **Dim**, and **Cut** controls.

*[Placeholder: screenshot — Mon tab with a monitor profile loaded]*

Full reference: [Chapter 8, Section 8.1 — Monitor Profiles]

---

### Step 10 — Set a Reference Level (Optional)

If your room has been acoustically calibrated:

1. Using test tones and a calibrated SPL meter, set the main level fader in the **Mon** tab to your target reference SPL (85 dB SPL is standard for most broadcast and post-production environments).
2. In **Settings > Monitor Profile**, record this level as the **Reference Level** for the active speaker set.
3. During sessions, press **Ref** in the **Mon** tab to instantly return to the calibrated level.

> **TIP:** Multiple speaker output sets can share the same physical outputs but have different trim offsets — creating named "85 dB SPL" and "75 dB SPL" presets you can switch between without recalibrating.

---

### Step 11 — Save the Configuration

> **CAUTION:** Unit settings are stored in the hardware. A factory reset or firmware update will erase them. The `.dms` file on your computer is the only backup.

1. **File > Save As…** (macOS: **⌘⇧S** / Windows: **Ctrl+Shift+S**)
2. Use a descriptive filename: `StudioA_AXCenter_2026-06.dms`
3. Save to a location that is backed up regularly.

If you have a Monitor Profile, save it separately:
**File > Save Profile As…** (macOS: **⌥⌘⇧S** / Windows: **Ctrl+Alt+Shift+S**)

> **TIP:** Enable **Open last file at startup** in **DADman > Preferences** (macOS) or **Settings > Options** (Windows) to restore this configuration automatically on every launch. Recommended for permanent installations.

---

### Step 12 — Confirm Reload

1. Close DADman.
2. Reopen DADman.
3. Confirm settings reload correctly — all routing, gain settings, and channel labels should be restored exactly as saved.

**Expected result:** Units that are online update immediately when the `.dms` file loads. The Mon tab shows your saved Monitor Profile if "Open last file at startup" was enabled for profiles as well.

---

## Setup Complete

You now have a working DADman system with:

- Units discovered, connected, and named
- Clock source and sample rate confirmed
- Inputs labelled, gained, and patched to outputs  
- Output levels aligned to downstream equipment
- Audio verified end-to-end
- Configuration saved and reload-verified

---

## Keyboard and Mouse Reference

### Slider Modifier Keys

All gain, level, and fader sliders in DADman support the following modifier keys:

| Modifier | Effect |
|----------|--------|
| **Drag** (no modifier) | Normal resolution — approximately 0.5 dB per pixel |
| **Shift + drag** | Increased precision — approximately 0.1 dB per pixel |
| **↑ / ↓ arrow keys** (slider focused) | 0.1 dB steps |
| **Shift + ↑/↓** | Fine steps (0.01 dB) |
| **Ctrl** (Windows) / **Cmd** (macOS) **+ click** | Reset to default value |
| **Alt** (Windows) / **Option** (macOS) | Per-channel only — bypasses Mic Gain Group, adjusts selected channel alone |
| **Alt/Option + Shift** | Per-channel fine adjustment |

### Keyboard Shortcuts

| Action | macOS | Windows |
|--------|-------|---------|
| **File** | | |
| Open settings file | ⌘O | Ctrl+O |
| Save settings file | ⌘S | Ctrl+S |
| Save settings file As… | ⌘⇧S | Ctrl+Shift+S |
| Open Monitor Profile | ⌥⌘O | Ctrl+Alt+O |
| Import Monitor Profile | ⌥⌘I | Ctrl+Alt+I |
| Save Monitor Profile | ⌥⌘S | Ctrl+Alt+S |
| Save Monitor Profile As… | ⌥⌘⇧S | Ctrl+Alt+Shift+S |
| Close Monitor Profile | ⌥⌘W | Ctrl+Alt+W |
| **View** | | |
| Show main window (from Menu Bar mode) | ⌘⇧1 | — |
| Open Device List | ⌘⇧L | Ctrl+Shift+L |
| Open Monitor Profile editor | ⌘⇧M | Ctrl+Shift+M |
| Open Preferences / Options | ⌘, | Ctrl+, |

### Routing Matrix Shortcuts

| Action | Method |
|--------|--------|
| Connect one crosspoint | Click at the intersection |
| Connect a stereo pair simultaneously | Shift + click the first channel |
| Connect same-numbered input→output diagonal | Ctrl/Cmd + click |
| Disconnect | Click the active (blue) crosspoint |
| Scroll the matrix view | Scroll wheel / trackpad (does not scroll the full window) |

### Diagnostic Tool

**DADman menu > About DADman > Copy Information** *(v5.7.2 and later)*

Copies DADman version, connected device list, OS version, and driver versions to the clipboard. Include this in any support request to DAD.

---

## Next Steps

| To… | See… |
|-----|------|
| Configure MADI, Dante, or AES3 port settings in depth | Ch. 7, Section 7.3 — Conf Tab |
| Work with the full routing matrix | Ch. 7, Section 7.2 — I/O Configuration and Patching |
| Set up immersive monitoring (5.1, 7.1.4, Atmos) | Ch. 8, Section 8.1 — Monitor Profiles |
| Configure routing presets with automated signal failover | Ch. 8, Section 8.4 — Control\|Pack |
| Group microphone gains for drums, orchestral, or multi-mic | Ch. 8, Section 8.2 — Mic Gain Groups |
| Connect DADman to an Avid EuControl surface | Ch. 8, Section 8.5 — EuCon Integration |
| Diagnose a connection or audio problem | Ch. 9 — Troubleshooting |
| Update DADman software or hardware firmware | Ch. 10, Section 10.1 — Updating Software and Firmware |

---

*[Pending: screenshots for Steps 1, 2, 4, 5, 6, 7, 9 — all require an AX Center connected to DADman v5.8.2]*
