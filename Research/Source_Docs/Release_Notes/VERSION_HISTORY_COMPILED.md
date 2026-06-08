# DADman — Compiled Version History
**Source:** Official NTP Technology A/S SW/FW Release Notes, 2019–2026  
**Compiled:** June 2026  
**Purpose:** Appendix E source material; chapter version tagging reference; manual front matter update

---

## ⚠ Current Version Note

The most recent release note in this set is **v5.8.2 build 2 (2026-01-19)**. Previous manual drafts referenced v5.8.1 build 6 as the current version. All chapter front matter and version references must be updated to **DADman v5.8.2 build 2**.

---

## Complete Version History (newest first)

---

### DADman v5.8.2 build 2 · 2026-01-19 · *Current release*

**DADman:** v5.8.2 b2 (macOS 10.13–15, Windows 10/11)  
**TB3 Driver:** macOS v1.2.2 · Windows v1.1.2 *(no change)*  
**Thunder\|Core firmware:** v1.1.2.4 · Dante 256 IPCore v1.0.3.1  
**Family 1 firmware:** v2.4.6.4 · Brooklyn 2 v1.0.3.1 · Brooklyn 3 v1.1.0.3  
**MTRX Studio firmware:** v1.1.6.3 · Dante 64 IPCore v1.0.3.1  
**NEW: Dante Card firmware:** v1.0.3.1

**New in DADman:**
- Ravenna Card supported in DADman
- Dante Card and Ravenna Card: configurable network sample rate when SRC is enabled
- EuCon: number of meters increased to 16

**New in firmware:**
- All Dante firmware updated to latest versions
- **ST 2110-30** and enhanced **AES67** available for all Dante implementations via DDM
- Brooklyn 3 module: ST 2110 available without DDM (requires latest Dante Controller)
- Support for new **Ravenna Card** (RAVENNA/AES67/ST 2110-30)
- **Dynaudio Control 02** now supported (in addition to Control 01)

**Bug fixes:**
- macOS: Talkback menu not showing correct selected value in Monitor Profile dialog
- EuCon: Control Room level not re-enabled after switching Ref level off
- macOS: Improved Thunderbolt communication stability
- Various minor fixes

---

### DADman v5.8.1 build 6 · 2025-05-01

**DADman:** v5.8.1 b6 (macOS 10.13–15, Windows 10/11)  
**TB3 Driver:** macOS v1.2.2 · Windows v1.1.2 *(no change)*  
**Thunder\|Core firmware:** v1.1.1.1  
**Family 1 firmware:** v2.4.5.1  
**MTRX Studio firmware:** v1.1.5.1 *(no change)*

**New in DADman:**
- **Mic Gain Groups** — group multiple mic input channels for simultaneous gain/mute adjustment. Supported on all products **except MTRX Studio**. Requires firmware update.
  - Grouped parameters: gain and mute (phantom power and phase are NOT grouped)
  - Channel-to-channel offset is maintained when group gain is adjusted
  - **Alt/Option + drag/click** adjusts individual channel only within a group
  - EuCon: gain sliders affect the group; mute affects all grouped channels simultaneously
- **Control\|Pack:** Reordering of routing presets in the Routing Preset dialog *(requires firmware update)*
- **Control\|Pack:** Trigger status now visible in the Routing Preset dialog
- **macOS only:** Device List column sorting by clicking column headers

**Keyboard modifier reference (confirmed v5.8.1):**
| Modifier | Action |
|----------|--------|
| Shift + drag/arrow | Increased resolution |
| Ctrl (Win) / Cmd (Mac) + click | Set slider to default value |
| Alt/Option | Apply to selected channel only (ignores group) |
| Alt/Option + Shift/Ctrl/Cmd | Per-channel fine adjustment |

**Bug fixes:**
- Control\|Pack: Various Routing Preset dialog fixes
- Windows: Routing Preset meter graphics improved
- Windows: Crash on MIDI handling resolved
- macOS: Graphics problems on scaled displays with large DADman windows
- macOS: Status colour update error in Routing Preset dialog

---

### Firmware-only release · 2025-01-09

**DADman:** v5.8.0 b8 *(no change)*  
**Thunder\|Core firmware:** v1.1.0.4 *(new — bug fix only)*

**Bug fixes in firmware:**
- AX Center: ADC chipset timing error caused audio to not pass in some cases — fixed
- AX Center Dante Card: External sync to Dante network card not set up correctly — fixed

---

### DADman v5.8.0 build 8 · 2024-12-01

**DADman:** v5.8.0 b8 (macOS 10.13–15, Windows 10/11)  
**TB3 Driver:** macOS v1.2.2 *(new)* · Windows v1.1.2 *(no change)*  
**Thunder\|Core firmware:** v1.1.0.3  
**Family 1 firmware:** v2.4.4.1  
**MTRX Studio firmware:** v1.1.5.1

**New in DADman:**
- **Control\|Pack** — Routing Presets for Thunder\|Core (AX Core) devices *(requires firmware update)*
- Support for CARD-2MADI-SO (720251A) — MADI card with bidirectional SRC
- Monitor view: fold-down controls now displayed in columns when many fold-downs are configured
- Windows: Minimum OS is now Windows 10 (Windows 7/8 no longer supported)

**Known issue (Sequoia):** DADman may not connect to network devices on macOS 15. Workaround: log out and log back in. Thunderbolt devices unaffected.

**New in TB3 driver (v1.2.2):**
- When DriverKit extensions not properly activated, instructions shown with screenshot
- When installation completes and extension activates, driver brings installer to front and exits
- When no device connected: "No device connected" message instead of empty dropdowns

**Bug fixes:**
- Monitor Profile: Loading then cancelling would corrupt the file on next save
- macOS: Scrolling artefacts on scaled display resolutions
- macOS: Crash when DADman started by double-clicking a file in Finder
- macOS: Rare Thunderbolt communication issue fixed *(also requires driver update to 1.2.2)*
- macOS: File open dialogs no longer allow selecting directories

---

### DADman v5.7.2 build 1 · 2024-09-25

**DADman:** v5.7.2 b1 (macOS 10.13–15 incl. **Sequoia**, Windows 10/11)  
**TB3 Driver:** macOS v1.1.26 · Windows v1.1.2 *(no change)*  
**Thunder\|Core firmware:** v1.0.6.3  
**Family 1 firmware:** v2.4.3.1  
**MTRX Studio firmware:** v1.0.4.2  
**NEW: Dynaudio Control 01** — added to supported product list

**New in DADman:**
- macOS 15 (Sequoia) support *(with network connectivity known issue — see v5.8.0)*
- Support for Thunderbolt module 722150B
- Section buttons (AD/DA/Mon/Con/Conf) now have tooltips; clicking collapses/expands the section
- "About DADman" now has "Copy Information" button (copies version info, connected device list, OS info, driver versions to clipboard)
- "Open Recent Profile" menu in main menu
- macOS: Monitor Profile window is now resizable; last active tab restored on re-open
- Windows: "Minimize to Tray" replaced by "Show In" with three options: Taskbar only · Taskbar and tray · System tray only
- **Phase invert symbol changed from "Ph" to "Ø"** to avoid ambiguity with phantom power

**Bug fixes:**
- Monitor EQ parameter mapping error when switching between monitor output sets
- Windows: DADman failed to launch on some systems due to missing VCRUNTIME140_1.DLL
- Windows: Device lock-up in certain IP ranges with BitDefender firewall — resolved
- macOS: File read/write failure now alerts the user
- MADI output frame rate reporting corrected for DSD over PCM
- Delay processing errors for channels > 16 fixed

**New in firmware (Thunder\|Core):**
- ADAT ch.3 at 88.2/96 kHz fix; ADAT PLL and locking improved
- DA card phase error on channel 8 corrected (AX Center analogue base board)
- DADLink sample rate output filtering corrected
- Dante: False card error alarm corrected; FPGA supervision added
- Support for 722150B Thunderbolt module

---

### Firmware-only release · 2024-03-06

**DADman:** v5.7.0 b1 *(no change)*  
**Family 1 firmware:** v2.4.2.2 *(new — bug fix only)*

**Bug fix:** DigiLink interface timing/format error in Family 1 firmware (v2.4.1.2 introduced a DigiLink bug; this corrects it). Not relevant to DAD hardware.

---

### DADman v5.7.0 build 1 · 2023-11-15

**DADman:** v5.7.0 b1 (macOS 10.13–14, Windows 10/11)  
**TB3 Driver:** macOS v1.1.26 · Windows v1.1.2 *(no change)*  
**Thunder\|Core firmware:** v1.0.5.2  
**Family 1 firmware:** v2.4.1.2  
**MTRX Studio firmware:** v1.1.3.1  
**NOTE: macOS 10.10/11/12 (Yosemite/El Capitan/Sierra) no longer supported**

**Major new features:**

**1. Run DADman in Menu Bar / System Tray:**
- macOS: Three modes — Dock Only · Menu Bar and Dock · **Menu Bar Only** (hides from Dock; ⌘⇧1 or "Show" to restore)
- Windows: Add "Minimize to Tray" option — left-click tray icon to show/hide; right-click for Show/Hide/Quit
- macOS: Main window can now be closed (re-open via Dock/Finder, .dms/.dmprof file, or ⌘⇧1)

**2. DADLink on all products** (AX32, DX32, Penta now have DADLink support via firmware v2.4.1.2)

**3. Talkback RAW mode** — talkback active while button held, ends on release. Previous toggle/latch mode still available. RAW mode applies to MOM and MTRX Studio hardware control only; EuCon always uses toggle/latch.

**4. Complete keyboard shortcuts (first documented in this release):**

| Action | macOS | Windows |
|--------|-------|---------|
| File > Open… | ⌘O | Ctrl+O |
| File > Save | ⌘S | Ctrl+S |
| File > Save As… | ⌘⇧S | Ctrl+Shift+S |
| File > Open Profile… | ⌥⌘O | Ctrl+Alt+O |
| File > Import Profile… | ⌥⌘I | Ctrl+Alt+I |
| File > Save Profile | ⌥⌘S | Ctrl+Alt+S |
| File > Save Profile As… | ⌥⌘⇧S | Ctrl+Alt+Shift+S |
| File > Close Profile | ⌥⌘W | Ctrl+Alt+W |
| Open/activate main window | ⌘⇧1 | — |
| Device List | ⌘⇧L | Ctrl+Shift+L |
| Monitor Profile | ⌘⇧M | Ctrl+Shift+M |
| Settings / Options | ⌘, | Ctrl+, |

**5. Matrix view enhancements:**
- Max matrix view size configurable in Preferences: 32×32 (default), 64×64, 128×128, 256×256
- Tooltips on matrix hover show corresponding input/output channel numbers and labels
- Trackpad/scroll wheel scrolls the matrix view (not the full window)
- DADLink port name shown in tooltip when hovering over a DADLink input group

**6. File handling improvements:**
- .dms and .dmprof files can now be opened from Finder / Windows Explorer (double-click)
- Command-line file opening: `open -a DADman <settings.dms> <profile.dmprof>` (macOS); `DADman.exe <settings.dms> <profile.dmprof>` (Windows)
- Continuous connection retry replaces old 10-second timeout + Retry button behaviour
- Windows: DADman now saves files on sign-out, shutdown, or restart

**Bug fixes:**
- Fixed data corruption when adding fold-down matrices with more than 1024 elements

---

### DADman v5.6.9 build 1 · 2023-06-14

**DADman:** v5.6.9 b1 (macOS 10.10–13, Windows 10/11)  
**TB3 Driver:** macOS v1.1.26 · Windows v1.1.2 *(new — Windows ASIO first official release)*  
**Thunder\|Core firmware:** v1.0.3.4 *(new)*  
**Family 1 firmware:** v2.3.6.1 *(no change)*

**New features:**
- **MTRX II support** added to DADman
- **Clone Settings** — copy all settings between units within the same family group. Three families defined:
  - Family 1: MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s
  - Family 2: MTRX II · AX64 · AX Center · Core 256
  - Family 3: MTRX Studio
- **DADLink** — new proprietary interface for AX64, AX Center, Core 256, MTRX II via mini MADI module + SFP optical. Up to 128 ch @ 48 kHz, 64 ch @ 96 kHz, 32 ch @ 192 kHz per link. ~1 µs latency. Requires DADLink or WCLK sync for phase alignment.
- **Windows ASIO driver** first official (non-beta) release

---

### DADman v5.6.7 build 1 · 2023-02-06

**DADman:** v5.6.7 b1 (macOS 10.10–12, Windows 10/11)  
**TB3 Driver:** macOS v1.1.22 · Windows v1.0.8 *(first official Windows ASIO release)*  
**NOTE: Windows 7 support dropped in this version**

**New features:**
- **AX Center support** added to DADman
- Windows ASIO driver officially released (out of beta)

---

### Firmware-only release · 2022-12-05

**DADman:** v5.6.5 b1 *(no change)*  
**Family 1 firmware:** v2.3.6.1 *(new)*

**New in firmware:**
- Brooklyn 3 Dante module now supported (alongside Brooklyn 2)
- 3G SDI card reset mechanism improved (previous timing was marginal — could cause SDI channels to not enable correctly after power-up)

---

### DADman v5.6.3 build 8/23 · 2022-07-01

**DADman:** macOS v5.6.3 b8 · Windows v5.6.3 b23  
**TB3 Driver:** macOS v1.1.9.4 beta *(still beta)*  
**Windows 11 support added**

**New features:**
- Source and output order in Monitor Profile configuration can now be rearranged after initial setup
- Windows: DADman now auto-searches for network devices when network connections change

**Bug fixes:**
- Dark Mode: fold-down labels now showing correctly

---

### DADman v5.6.2 build 13b · 2022-05-27

**DADman:** v5.6.2 b13b (macOS 10.10–12, Windows 7/8/10) — *beta*  
**TB3 Driver:** macOS v1.1.9.4 beta *(first release — beta)*

**New features:**
- **Thunder\|Core hardware support** (first release — AX64, AX Center, Core 256)
- macOS 12 Monterey support
- Auto-open Device List when DADman launches with no units connected
- "Import Profile" in File menu — imports Monitor Profile from any unit, applies best-fit configuration
- Dark Mode: fold-down label fix

---

### DADman v5.5.0 build 2 · 2021-06-03

**DADman:** v5.5.0 b2 (macOS 10.10–11 Intel and **M1 Apple Silicon**, Windows 7/8/10)

**New features:**
- **Apple Silicon (M1) native support** — runs natively without Rosetta 2
- MOM: Bass management on/off and EQ on/off buttons now available as assignable MOM keys in Pro\|Mon

---

### DADman v5.4.5 build 1 · 2021-03-18

**New features:** macOS 11 Big Sur support (Intel only at this point)  
*(Earlier v5.4.5 b1 dated 2021-01-10 added Penta 721s support)*

---

### DADman v5.4.4 build 2 · 2020-09-30

**Bug fixes only:** Bass management on multiple subs; EuCon recall on S6; SPQ config error from v5.4.4 b1; MTRX Studio firmware update timing fix

---

### DADman v5.4.3 build 2 · 2020-08-20

**New features:**
- macOS Catalina (10.15) support
- Tooltips on buttons and knobs in the DADman GUI
- Auto-assignment of successive channels in Monitor Profile Groups dialog
- AD/DA/Mon/Con/Conf section expanded/collapsed state now stored in Preferences
- Checkmarks for selected values in popup menus
- Warning added when downloading older or already-installed firmware to a unit
- **Peak/hold** on meters for AX32, Penta, MTRX *(requires firmware v2.3.2.1)*
- Text truncation on long channel labels

---

### DADman v5.3.4 build 3 · 2019-08-01

**New features:**
- **Port labelling for digital I/O cards** — each port can have an individual text label; labels stored in the unit; shown in matrix view
- DigiLink card support (Avid MTRX only — not applicable to DAD hardware)
- macOS Mojave support (no longer requires workaround colour profile)
- Faster application launch on macOS; reduced general CPU load

---

## Key Findings for Manual Updates

### 1. Version — Update throughout

**All chapter front matter must read:** DADman v5.8.2 build 2 (current as of January 2026)

### 2. New hardware to add to Ch.3 table

| Product | Added in | Notes |
|---------|----------|-------|
| **Dynaudio Control 01** | v5.7.2 (Sept 2024) | Appears in compatible product list |
| **Dynaudio Control 02** | v5.8.2 (Jan 2026) | New variant |
| **Ravenna Card** | v5.8.2 (Jan 2026) | New expansion card: RAVENNA/AES67/ST 2110-30 |
| **CARD-2MADI-SO (720251A)** | v5.8.0 (Dec 2024) | MADI card with bidirectional SRC |

### 3. Keyboard shortcuts — Fill Ch.6 Section 6.10.3

See complete table in v5.7.0 section above. Available from DADman v5.7.0+.

### 4. Slider keyboard modifiers — Confirm Ch.6 Section 6.10.1

From v5.8.1 release notes (now official documentation):
- **Shift**: Increased resolution
- **Ctrl (Win) / Cmd (Mac) + click**: Set to default value
- **Alt/Option**: Individual channel only (within a group)

### 5. Matrix view size — Add to Ch.6 Preferences

Configurable in Preferences: 32×32 (default) · 64×64 · 128×128 · 256×256. Available from v5.7.0+.

### 6. Talkback RAW mode — Add to Ch.6 Mon tab and Ch.8

Three talkback modes now available (v5.7.0+): Toggle/latch · RAW (push-to-talk). Note: RAW mode only applies to MOM and MTRX Studio hardware control; EuCon always uses toggle/latch.

### 7. Phase invert symbol — Confirmed Ch.6

Changed from "Ph" to "Ø" in v5.7.2. Chapter 6 already uses "Ø" — no change needed.

### 8. Section collapse — Add to Ch.6

Section header buttons (AD/DA/Mon/Con/Conf) can be clicked to collapse/expand the section. Added v5.7.2. Tooltips also added to section buttons in v5.7.2.

### 9. "About DADman" copy function — Add to Ch.4 verification section

The "About DADman" dialog has a "Copy Information" button (v5.7.2+) that copies version info, connected device list, OS, and driver versions to clipboard. Useful for support tickets and the verification step in Ch.4.

### 10. Peak/hold meters — Add to Ch.6

Peak/hold metering available on AX32, Penta, MTRX hardware (requires firmware v2.3.2.1+, i.e., from August 2020 release onwards).

### 11. Import Profile — Confirm Ch.6 File menu

"Import Profile" in File menu — imports a Monitor Profile from any unit and applies best-fit configuration. Added v5.6.2.

### 12. Continuous connection retry — Update Ch.4/5

From v5.7.0: DADman continuously retries connection to units rather than timing out after 10 seconds. The old "Retry" button behaviour is replaced by automatic retrying. Update the installation verification steps accordingly.

### 13. ST 2110-30 — Add to Ch.3 and Ch.7

From v5.8.2: ST 2110-30 and enhanced AES67 available for all Dante implementations via DDM. Brooklyn 3 module supports ST 2110 without DDM (requires latest Dante Controller). Cross-reference to the network protocols table in Ch.3.

### 14. Dante Card SRC sample rate — Add to Ch.6 Conf tab

From v5.8.2: When SRC is enabled on a Dante Card or Ravenna Card, the network sample rate is now configurable in the Conf tab settings dialog.
