# Appendices

> **Document:** DADman User Manual  
> **Chapter status:** Draft v0.1 — App G (Glossary) complete; App E (Changelog) compiled source ready; Apps A, B, C, F pending DAD engineering and legal; App H (Index) to generate from final document  
> **Last updated:** June 2026

---

## Appendix A — Technical Specifications

*[Placeholder: full hardware specification tables per product — electrical, mechanical, I/O counts, supported formats, routing matrix capacities, environmental specs. To be provided by DAD engineering.]*

---

## Appendix B — Connector Pinouts

*[Placeholder: pinout diagrams for all connector types on all supported hardware — XLR, DB25, BNC (MADI), BNC (Word Clock), RJ45, SFP, Thunderbolt 3, USB. To be provided by DAD engineering.]*

---

## Appendix C — Supported Audio Formats and Protocols

This appendix summarises the audio formats and protocols supported by DADman-controlled hardware, including channel counts at each sample rate. All figures are maximums; actual channel counts depend on the specific expansion cards installed in each unit.

> **NOTE:** Channel counts on time-division-multiplexed interfaces (MADI, ADAT, DADLink) decrease at higher sample rates because more bandwidth is consumed per channel. Dante and AES67 channel counts depend on network configuration and Dante Controller settings.

---

### C.1 MADI (AES10)

MADI is supported on all DAD / NTP Technology hardware families as an expansion card option (Dual MADI card, MADI Module) or built-in on select units.

**Channel capacity per MADI port:**

| Sample rate | Legacy mode (56-ch frame) | High Speed mode (64-ch frame) |
|-------------|--------------------------|-------------------------------|
| 44.1 / 48 kHz | 56 channels | 64 channels |
| 88.2 / 96 kHz | 28 channels | 32 channels |
| 176.4 / 192 kHz | 14 channels | 16 channels |

**Standard:** AES10-2008 (MADI Serial) and AES10-2003 (MADI-E extended).

**Physical interfaces:**
- Coaxial BNC (75 Ω) — maximum cable length approximately 100 m (standard coax)
- Optical SFP — multimode or single-mode fibre depending on SFP module type; up to several kilometres with single-mode SFP

**Frame Rate modes:**
- **Legacy mode:** Frame length fixed at the 48 kHz frame size. At 88.2/96 kHz, adjacent channel pairs are time-multiplexed (S/MUX2), halving the channel count. At 176.4/192 kHz, groups of four channels are multiplexed (S/MUX4). Compatible with the majority of MADI equipment.
- **High Speed mode:** Frame length follows the actual sample rate, reducing latency at 88.2 kHz and above. Both ends of the MADI link must be set to the same mode.

> **IMPORTANT:** Both ends of every MADI connection must use the same Frame Rate mode and Frame Size setting. Mismatch will result in no audio or clock errors. Verify settings in the Conf tab on both connected devices.

---

### C.2 ADAT (S/PDIF Optical, ADAT Lightpipe)

ADAT optical interfaces are supported on select DAD hardware expansion cards. ADAT uses S/MUX (sample multiplexing) to carry audio at higher sample rates.

| Sample rate | Channels (per ADAT port) | Mode |
|-------------|--------------------------|------|
| 44.1 / 48 kHz | 8 channels | Standard ADAT |
| 88.2 / 96 kHz | 4 channels | S/MUX2 |
| 176.4 / 192 kHz | 2 channels | S/MUX4 |

**Physical interface:** TOSLINK optical connector.

**Standard:** Alesis ADAT optical protocol.

> **NOTE:** ADAT is not defined above 96 kHz in the original standard. S/MUX4 support at 176.4/192 kHz requires both connected devices to support this extension. Verify compatibility with connected equipment.

---

### C.3 AES3 (AES/EBU)

AES3 digital audio carries two channels per cable pair (one stereo pair). DAD hardware typically provides AES3 I/O via DB25 breakout connectors, each carrying eight stereo pairs (16 channels).

| Sample rate | Channels per AES3 pair | Channels per DB25 (8 pairs) |
|-------------|------------------------|------------------------------|
| 44.1 / 48 kHz | 2 | 16 |
| 88.2 / 96 kHz | 2 *(Double Wire / Dual Wire)* | 16 |
| 176.4 / 192 kHz | 2 *(Quad Wire)* | 16 |

**Standard:** AES3-2009.

**Physical interfaces:**
- Balanced XLR (professional — standard AES3)
- DB25 breakout (via industry-standard TASCAM or Yamaha pinout wiring)

**High sample rate operation:** At 88.2/96 kHz, some AES3 implementations use **Double Wire** (two AES3 pairs per channel for increased bandwidth). At 176.4/192 kHz, **Quad Wire** uses four pairs per channel. DADman's AES3 implementation details are hardware-model dependent — refer to the hardware installation guide for the specific unit.

---

### C.4 Dante (Audinate)

Dante is an audio-over-IP protocol that transports audio over standard Ethernet infrastructure. DADman units support Dante via expansion cards and integrated modules.

**Channel capacity by Dante implementation:**

| Implementation | Max channels (Tx + Rx) | Typical hardware |
|---------------|------------------------|-----------------|
| Dante Expansion Card (Brooklyn 2/3) | 128 Tx + 128 Rx (per card) | AX32 · DX32R · Penta 720 · Penta 721s · MTRX · MTRX II |
| Dante 64-Channel Module | 64 Tx + 64 Rx | AX32 · Penta 720 · Penta 721s · MTRX |
| Dante 256 IPCore *(v5.8.1.6 firmware)* | 256 Tx + 256 Rx | AX64 · AX Center · Core 256 · MTRX II |
| Dante Card *(standalone)* | 512 Tx + 512 Rx | Select Family 1 units |

**Channel counts are sample rate independent** — Dante channels are not reduced at higher sample rates. Instead, higher sample rates consume more network bandwidth per channel. Network capacity must be sized accordingly.

**Network requirements:**
- Gigabit Ethernet recommended for all Dante installations
- Dedicated network switch recommended for audio traffic
- Switches must support multicast (IGMP snooping recommended)
- PTP (IEEE 1588) used for clock synchronisation across all Dante devices

**Protocols and standards:**
- Dante native protocol (Audinate proprietary)
- AES67 interoperability mode (reduces channel count to AES67 limits)
- ST 2110-30 *(via DDM from firmware v1.1.2.4; Brooklyn 3 without DDM from v1.1.0.3)*

---

### C.5 DADLink

DADLink is a DAD proprietary optical interconnect using the mini MADI module slot with SFP optical transceivers. It provides ultra-low-latency direct unit-to-unit interconnection.

| Sample rate | Channels per DADLink connection |
|-------------|--------------------------------|
| 44.1 / 48 kHz | 128 |
| 88.2 / 96 kHz | 64 |
| 176.4 / 192 kHz | 32 |

**Latency:** Approximately 1 microsecond (effectively zero — all inputs and outputs across DADLink-connected units are phase-aligned provided clocking is correct).

**Physical interface:** Optical SFP — compatible SFP transceiver modules required at both ends.

**Compatible hardware:** AX64 · AX Center · Core 256 · MTRX II · AX32 · DX32R · Penta 720 · Penta 721s *(Family 1 from firmware v2.4.1.2)*

**Synchronisation requirement:** DADLink-connected units must share a common clock. Use DADLink or Word Clock as the sync source between units.

---

### C.6 Thunderbolt 3 (Thunder\|Core)

Thunderbolt 3 audio I/O is supported exclusively on Thunder\|Core generation hardware (AX64, AX Center, Core 256) via the DAD Thunderbolt 3 driver.

| Hardware | Thunderbolt 3 channels | Notes |
|----------|----------------------|-------|
| **AX64** | 64 Tx + 64 Rx | At 44.1 / 48 kHz |
| **AX Center** | 128 Tx + 128 Rx | At 44.1 / 48 kHz |
| **Core 256** | 256 Tx + 256 Rx | At 44.1 / 48 kHz |

**At higher sample rates:** The Thunderbolt 3 channel count reduces proportionally. At 88.2/96 kHz the counts halve; at 176.4/192 kHz they quarter.

**Driver:**
- macOS: Core Audio driver (DADDriverSetup) — current version v1.2.2
- Windows: ASIO driver — current version v1.1.2

**Cable:** Certified Thunderbolt 3 cable rated to 20 Gbps minimum. Passive cables support up to approximately 0.5 m; active optical cables support longer runs.

---

### C.7 AES67 and ST 2110-30

AES67 and ST 2110-30 are IP audio standards supported via the Dante and Ravenna interfaces on compatible DAD hardware.

| Standard | Transport | Channel count | Available from |
|----------|-----------|--------------|----------------|
| **AES67** | IP (Layer 3) | Up to 512 (network dependent) | All Dante-equipped hardware *(AES67 interoperability mode)* |
| **ST 2110-30** | IP (Layer 3) | Up to 512 (network dependent) | v5.8.2 firmware via DDM; Brooklyn 3 without DDM from v1.1.0.3 |
| **Ravenna / AES67** | IP (Layer 3) | Up to 512 (network dependent) | Ravenna Card *(v5.8.2 hardware option)* |

**Network requirements for ST 2110-30:** Professional-grade managed switches with PTP (IEEE 1588) hardware timestamping. IGMP snooping required. Consult SMPTE TR-2110 for network architecture guidance.

---

### C.8 Hardware Format Support Matrix

The following matrix shows which formats are available on each hardware family as standard or via expansion cards. ✓ = standard / built-in; E = expansion card option; — = not supported.

| Format | AX Center | Core 256 | AX64 | AX32 | DX32R | Penta 720 | Penta 721s | MTRX II | MTRX Studio |
|--------|-----------|----------|------|------|-------|-----------|------------|---------|-------------|
| MADI (coaxial) | E | E | E | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| MADI (optical SFP) | E | E | E | E | — | E | E | E | — |
| ADAT | E | E | E | E | — | — | — | E | ✓ |
| AES3 (analogue card) | E | E | E | E | ✓ | E | E | E | ✓ |
| Dante | E | E | E | E | ✓ | E | ✓ | ✓ | ✓ |
| Dante 256 IPCore | ✓ | ✓ | ✓ | — | — | — | — | ✓ | — |
| DADLink | E | E | E | E | E | E | E | E | — |
| Thunderbolt 3 | ✓ | ✓ | ✓ | — | — | — | — | — | — |
| Ravenna Card | E | E | E | — | — | — | — | — | — |
| AES67 | E | E | E | E | ✓ | E | ✓ | ✓ | ✓ |
| ST 2110-30 | E | E | E | E | — | — | — | ✓ | — |
| Word Clock I/O | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

*E = requires expansion card or module. Expansion options vary by product generation and available card slots. Refer to the specific hardware installation guide for slot configuration details.*

> **NOTE:** This matrix reflects hardware capabilities as of DADman v5.8.2 build 2 (January 2026). New expansion card options may be introduced in subsequent firmware or hardware revisions. Check [digitalaudiosupport.com](https://www.digitalaudiosupport.com) for the current product configurator.

---

## Appendix D — Keyboard Shortcuts

See [Chapter 7, Section 7.10.3] for the complete keyboard shortcut reference.

---

## Appendix E — Changelog

This appendix documents DADman software releases from 2019 to the version covered by this manual. Entries are listed newest first. Each entry shows the software version, companion firmware versions, new features, and notable bug fixes. Firmware-only releases are noted separately.

Full release notes, including detailed firmware change logs, are available in the Download Centre at [digitalaudiosupport.com](https://www.digitalaudiosupport.com).

---

### DADman v5.8.2 build 2 — 2026-01-19 *(Current release)*

| Component | Version |
|-----------|---------|
| DADman | v5.8.2 b2 — macOS 10.13–15, Windows 10/11 |
| TB3 Driver — macOS | v1.2.2 *(no change)* |
| TB3 Driver — Windows | v1.1.2 *(no change)* |
| Thunder\|Core firmware | v1.1.2.4 |
| Dante 256 IPCore | v1.0.3.1 |
| Family 1 firmware | v2.4.6.4 |
| Brooklyn 2 Dante module | v1.0.3.1 |
| Brooklyn 3 Dante module | v1.1.0.3 |
| MTRX Studio firmware | v1.1.6.3 |
| MTRX Studio Dante 64 IPCore | v1.0.3.1 |
| Dante Card firmware | v1.0.3.1 *(new)* |

**New in DADman:**
- Ravenna Card now supported in DADman
- Dante Card and Ravenna Card: network sample rate is now configurable when SRC is enabled
- EuCon: number of meters increased to 16

**New in firmware:**
- All Dante firmware updated to latest versions
- ST 2110-30 and enhanced AES67 available for all Dante implementations via DDM
- Brooklyn 3 module: ST 2110-30 now available without DDM (requires latest Dante Controller)
- Support for new Ravenna Card (RAVENNA / AES67 / ST 2110-30)
- Dynaudio Control 02 now supported alongside Control 01

**Bug fixes:**
- macOS: Talkback menu not showing correct selected value in Monitor Profile dialog
- EuCon: Control Room level not re-enabled after switching Ref level off
- macOS: Improved Thunderbolt communication stability
- Various minor fixes

---

### DADman v5.8.1 build 6 — 2025-05-01

| Component | Version |
|-----------|---------|
| DADman | v5.8.1 b6 — macOS 10.13–15, Windows 10/11 |
| TB3 Driver — macOS | v1.2.2 *(no change)* |
| TB3 Driver — Windows | v1.1.2 *(no change)* |
| Thunder\|Core firmware | v1.1.1.1 |
| Family 1 firmware | v2.4.5.1 |
| MTRX Studio firmware | v1.1.5.1 *(no change)* |

**New in DADman:**
- **Mic Gain Groups** — multiple mic input channels can be linked so that adjusting gain or mute on any one channel moves all channels in the group simultaneously, preserving relative offsets between channels. Supported on all products **except MTRX Studio**. Requires firmware update. Phantom power and phase invert are not grouped. Hold Alt/Option to adjust an individual channel within a group without affecting others.
- Control\|Pack: Routing presets can now be reordered within the Routing Preset dialog *(requires firmware update)*
- Control\|Pack: Trigger status is now displayed in the Routing Preset dialog
- macOS: Device List columns can be sorted by clicking column headers

**Bug fixes:**
- Control\|Pack: Various fixes to the Routing Preset dialog
- Windows: Routing Preset meter graphics improved
- Windows: Crash when handling MIDI resolved
- macOS: Graphics issues on scaled displays with large DADman windows
- macOS: Status colour update error in Routing Preset dialog

---

### Firmware-only release — 2025-01-09

| Component | Version |
|-----------|---------|
| DADman | v5.8.0 b8 *(no change)* |
| Thunder\|Core firmware | v1.1.0.4 *(bug fix)* |

**Bug fixes in firmware:**
- AX Center: ADC chipset timing error that prevented audio from passing in some cases — fixed
- AX Center Dante Card: External sync to Dante network card not configured correctly — fixed

---

### DADman v5.8.0 build 8 — 2024-12-01

| Component | Version |
|-----------|---------|
| DADman | v5.8.0 b8 — macOS 10.13–15, Windows 10/11 |
| TB3 Driver — macOS | v1.2.2 *(new)* |
| TB3 Driver — Windows | v1.1.2 *(no change)* |
| Thunder\|Core firmware | v1.1.0.3 |
| Family 1 firmware | v2.4.4.1 |
| MTRX Studio firmware | v1.1.5.1 |

**New in DADman:**
- **Control\|Pack** — routing preset system for Thunder\|Core units (AX64, AX Center, Core 256) with up to 32 presets per unit, each supporting up to four switchable input buckets. Includes automated switching via signal level detection, AE6 pilot tone integrity, and port connectivity triggers. Requires firmware update.
- Support for CARD-2MADI-SO (720251A) — MADI card with bidirectional sample rate conversion
- Monitor view: fold-down controls now displayed in columns when many fold-downs are configured
- Windows: Minimum supported OS is now Windows 10 (Windows 7 and 8 no longer supported)

**New in TB3 Driver (v1.2.2):**
- When DriverKit extension is not properly activated, instructions and a screenshot are shown to guide the user
- When installation completes and the extension activates, the driver brings the installer to the foreground and exits cleanly
- When no device is connected: a "No device connected" message is shown instead of empty dropdowns

**Bug fixes:**
- Monitor Profile: Loading then cancelling a profile would corrupt the file on next save — fixed
- macOS: Scrolling artefacts on scaled display resolutions — fixed
- macOS: Crash when DADman was opened by double-clicking a file in Finder — fixed
- macOS: Rare Thunderbolt communication issue — fixed *(also requires TB3 driver update to v1.2.2)*
- macOS: File open dialogs no longer allow selecting directories

> **Known issue (macOS 15 Sequoia):** DADman may not connect to network devices on first launch on macOS 15. Workaround: log out and log back in. Thunderbolt connections are not affected. See: *Chapter 9, Section 9.3*.

---

### DADman v5.7.2 build 1 — 2024-09-25

| Component | Version |
|-----------|---------|
| DADman | v5.7.2 b1 — macOS 10.13–15 (incl. Sequoia), Windows 10/11 |
| TB3 Driver — macOS | v1.1.26 |
| TB3 Driver — Windows | v1.1.2 *(no change)* |
| Thunder\|Core firmware | v1.0.6.3 |
| Family 1 firmware | v2.4.3.1 |
| MTRX Studio firmware | v1.0.4.2 |

**New hardware support:** Dynaudio Control 01 monitor controller.

**New in DADman:**
- macOS 15 Sequoia support *(network connectivity known issue — see v5.8.0)*
- Support for Thunderbolt module 722150B
- Section header buttons (AD / DA / Mon / Con / Conf) now show tooltips; clicking a section header collapses or expands that section
- "About DADman" now has a **Copy Information** button — copies DADman version, connected device list, OS version, and driver versions to the clipboard for use in support requests
- "Open Recent Profile" menu added to the main menu bar
- macOS: Monitor Profile window is now resizable; the last active tab is restored on re-open
- Windows: "Minimize to Tray" option replaced by **Show In** setting with three options: Taskbar only · Taskbar and system tray · System tray only
- Phase invert symbol changed from "Ph" to "Ø" to avoid confusion with phantom power

**Bug fixes:**
- Monitor EQ parameter mapping error when switching between monitor output sets — fixed
- Windows: DADman failed to launch on some systems due to missing `VCRUNTIME140_1.DLL` — fixed
- Windows: Device lock-up with BitDefender firewall in certain IP ranges — fixed
- macOS: File read/write failures now alert the user
- MADI output frame rate reporting corrected for DSD over PCM
- Delay processing error for channels above 16 — fixed

**New in firmware (Thunder\|Core v1.0.6.3):**
- ADAT channel 3 at 88.2/96 kHz fix; ADAT PLL and locking improved
- DA card phase error on channel 8 corrected (AX Center analogue base board)
- DADLink sample rate output filtering corrected
- Dante: False card error alarm corrected; FPGA supervision added
- Support for Thunderbolt module 722150B added

---

### Firmware-only release — 2024-03-06

| Component | Version |
|-----------|---------|
| DADman | v5.7.0 b1 *(no change)* |
| Family 1 firmware | v2.4.2.2 *(bug fix)* |

**Bug fix:** DigiLink interface timing and format error introduced in Family 1 firmware v2.4.1.2 — corrected. Not applicable to DAD-branded hardware.

---

### DADman v5.7.0 build 1 — 2023-11-15

| Component | Version |
|-----------|---------|
| DADman | v5.7.0 b1 — macOS 10.13–14, Windows 10/11 |
| TB3 Driver — macOS | v1.1.26 *(no change)* |
| TB3 Driver — Windows | v1.1.2 *(no change)* |
| Thunder\|Core firmware | v1.0.5.2 |
| Family 1 firmware | v2.4.1.2 |
| MTRX Studio firmware | v1.1.3.1 |

> **Note:** macOS 10.10 (Yosemite), 10.11 (El Capitan), and 10.12 (Sierra) are no longer supported from this version.

**New in DADman:**

*Menu Bar and System Tray modes:* DADman can now run in the background with minimal desktop presence. macOS: three display modes — Dock Only, Menu Bar and Dock, and Menu Bar Only (hides from the Dock; restore with ⌘⇧1 or by launching DADman again). Windows: System Tray mode added — left-click to show/hide; right-click for Show/Hide/Quit options.

*Talkback RAW mode:* A new talkback mode in which talkback is active only while the button is held and ends when released (push-to-talk). The previous toggle/latch mode remains available. RAW mode applies to MOM hardware and MTRX Studio front panel control; EuCon surfaces always use toggle/latch mode.

*DADLink for all products:* DADLink is now available on Family 1 hardware (AX32, DX32, Penta 720, Penta 721s) via firmware v2.4.1.2, in addition to Thunder\|Core units.

*Matrix view enhancements:* Maximum matrix view size is now configurable in Preferences (32×32, 64×64, 128×128, or 256×256). Tooltips on matrix hover show channel numbers and labels. Trackpad / scroll wheel now scrolls the matrix view rather than the full window. DADLink port names shown in tooltips.

*File handling:* `.dms` and `.dmprof` files can now be opened directly from Finder or Windows Explorer by double-clicking. Command-line file opening supported: `open -a DADman settings.dms profile.dmprof` (macOS); `DADman.exe settings.dms profile.dmprof` (Windows). DADman now continuously retries unit connections rather than timing out. Windows: DADman saves files automatically on sign-out, shutdown, or restart.

**Keyboard shortcuts (first formally documented in this release):**

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
| Show main window | ⌘⇧1 | — |
| Device List | ⌘⇧L | Ctrl+Shift+L |
| Monitor Profile | ⌘⇧M | Ctrl+Shift+M |
| Settings / Options | ⌘, | Ctrl+, |

**Bug fixes:**
- Fixed data corruption when adding fold-down matrices with more than 1,024 elements

---

### DADman v5.6.9 build 1 — 2023-06-14 *(approximate)*

| Component | Version |
|-----------|---------|
| DADman | v5.6.9 b1 — macOS 10.10–13, Windows 10/11 |
| TB3 Driver — macOS | v1.1.26 |
| TB3 Driver — Windows | v1.1.2 *(first official release)* |
| Thunder\|Core firmware | v1.0.3.4 |
| Family 1 firmware | v2.3.6.1 *(no change)* |

**New in DADman:**
- **Avid MTRX II** added to supported hardware list
- **Clone Settings** — copy all settings from one hardware unit to another within the same family group. Three family groups defined: Family 1 (MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s), Family 2 (MTRX II · AX64 · AX Center · Core 256), Family 3 (MTRX Studio)
- **DADLink** — proprietary high-channel-count optical audio interconnect for AX64, AX Center, Core 256, and MTRX II via mini MADI module with SFP optical transceivers. Up to 128 channels at 48 kHz, 64 channels at 96 kHz, 32 channels at 192 kHz per link. Approximately 1 µs latency.
- Windows ASIO driver — first official (non-beta) release

---

### DADman v5.6.7 build 1 — 2023-02-06

| Component | Version |
|-----------|---------|
| DADman | v5.6.7 b1 — macOS 10.10–12, Windows 10/11 |
| TB3 Driver — macOS | v1.1.22 |
| TB3 Driver — Windows | v1.0.8 |

> **Note:** Windows 7 support dropped from this version.

**New in DADman:**
- **DAD AX Center** added to supported hardware list
- Windows ASIO driver officially released (out of beta)

---

### Firmware-only release — 2022-12-05

| Component | Version |
|-----------|---------|
| DADman | v5.6.5 b1 *(no change)* |
| Family 1 firmware | v2.3.6.1 *(new)* |

**New in firmware:**
- Brooklyn 3 Dante module now supported alongside Brooklyn 2
- 3G SDI card reset mechanism improved — corrects a timing issue that could prevent SDI channels from enabling correctly after power-up

---

### DADman v5.6.3 build 8/23 — 2022-07-01

| Component | Version |
|-----------|---------|
| DADman | macOS v5.6.3 b8 · Windows v5.6.3 b23 |
| TB3 Driver — macOS | v1.1.9.4 *(beta)* |

**New features:**
- **Windows 11** support added
- Source and output set order in Monitor Profile configuration can now be rearranged after initial setup
- Windows: DADman now automatically searches for network devices when network connections change

**Bug fixes:**
- Dark Mode: fold-down labels now displaying correctly

---

### DADman v5.6.2 build 13b — 2022-05-27

| Component | Version |
|-----------|---------|
| DADman | v5.6.2 b13b — macOS 10.10–12, Windows 7/8/10 *(beta)* |
| TB3 Driver — macOS | v1.1.9.4 *(first release — beta)* |

**New features:**
- **Thunder\|Core hardware support** — first release supporting AX64, AX Center, and Core 256 via Thunderbolt 3
- macOS 12 Monterey support
- Auto-open Device List when DADman launches with no units connected
- **Import Profile** added to File menu — imports a Monitor Profile from any connected unit and applies a best-fit configuration to the current unit's I/O
- Dark Mode: fold-down label rendering improved

---

### DADman v5.5.0 build 2 — 2021-06-03

| Component | Version |
|-----------|---------|
| DADman | v5.5.0 b2 — macOS 10.10–11 (Intel and Apple Silicon M1), Windows 7/8/10 |

**New features:**
- **Apple Silicon (M1) native support** — DADman runs natively on Apple Silicon without Rosetta 2 translation
- MOM: Bass management on/off and EQ on/off buttons now available as assignable MOM keys in PRO\|MON

---

### DADman v5.4.5 build 1 — 2021-01-10 / 2021-03-18

| Component | Version |
|-----------|---------|
| DADman | v5.4.5 b1 — macOS 10.10–11 (Intel), Windows 7/8/10 |

**New features:**
- NTP Penta 721s added to supported hardware list *(January 2021 build)*
- macOS 11 Big Sur support (Intel only) *(March 2021 build)*

---

### DADman v5.4.4 build 2 — 2020-09-30

**Bug fixes only:** Bass management behaviour on multiple sub outputs; EuCon recall on Avid S6; SPQ configuration error introduced in v5.4.4 b1; MTRX Studio firmware update timing fix.

---

### DADman v5.4.3 build 2 — 2020-08-20

| Component | Version |
|-----------|---------|
| DADman | v5.4.3 b2 — macOS 10.10–15 *(Catalina new)*, Windows 7/8/10 |

**New features:**
- macOS 10.15 Catalina support
- Tooltips on buttons and knobs throughout the DADman interface
- Auto-assignment of successive channels in Monitor Profile Groups dialog
- AD / DA / Mon / Con / Conf section expanded/collapsed state stored in Preferences
- Checkmarks for selected values in popup menus
- Warning displayed when downloading firmware that is older than or the same as the currently installed version
- Peak/hold metering on AD and DA channels for AX32, Penta, and MTRX hardware *(requires firmware v2.3.2.1 or later)*
- Long channel labels truncated with ellipsis to prevent layout overflow

---

### DADman v5.3.4 build 3 — 2019-08-01

| Component | Version |
|-----------|---------|
| DADman | v5.3.4 b3 — macOS 10.10–14 *(Mojave new)*, Windows 7/8/10 |

**New features:**
- **Port labelling for digital I/O cards** — each physical port (MADI, Dante, AES3) can be assigned an individual text label; labels are stored in the hardware unit and displayed in the matrix view
- DigiLink card support *(Avid MTRX only — not applicable to DAD hardware)*
- macOS 10.14 Mojave support *(no longer requires colour profile workaround)*
- Faster application launch on macOS; reduced general CPU load

---

## Appendix F — Compliance Declarations

See [Front Matter, Section FM.9 — Regulatory Compliance] for CE, FCC, ICES-003, UKCA, and RoHS declarations.

*[Final declarations to be inserted by DAD / NTP Technology engineering and legal before publication.]*

---

## Appendix G — Glossary

Terms are listed alphabetically. Where a term has a common abbreviation, the entry appears under the full form with the abbreviation noted, and a cross-reference is placed at the abbreviation's alphabetical position. DAD product names and trademarked terms are presented as they appear on the product or in DADman.

---

**AD tab**
The *Analogue to Digital* tab in DADman. Displays the channel strip for all analogue input channels on the connected hardware unit(s), providing controls for mic/line input gain, mute, phase invert, phantom power (+48 V), and channel labels. Metering for each input is shown in this tab. See also: *DA tab*.

**ADAT** (Alesis Digital Audio Tape optical interface)
An optical digital audio interface standard transmitting up to 8 channels of audio at 44.1 or 48 kHz, or 4 channels at 88.2 or 96 kHz, over a single TOSLINK fibre-optic cable. Supported as an I/O option on select DAD hardware. At double sample rates, the channel count is halved — this is referred to as *S/MUX*. See also: *S/MUX*.

**AES3** (AES/EBU)
A professional balanced digital audio interface standard defined by the Audio Engineering Society (AES) and the European Broadcasting Union (EBU). Carries two channels of PCM audio over a single balanced XLR cable. Commonly referred to as AES/EBU. Supported on DAD hardware as a discrete I/O format, typically via DB25 breakout connectors carrying multiple AES3 pairs. See also: *AES67*.

**AES67**
An interoperability standard for audio-over-IP (AoIP) defined by the Audio Engineering Society. AES67 defines a common transport layer enabling Dante, Ravenna, WNEU, and other AoIP implementations to exchange audio streams. DAD hardware with Dante or Ravenna interfaces can be configured for AES67 mode. See also: *Dante*, *Ravenna*, *ST 2110-30*.

**ASIO** (Audio Stream Input/Output)
A low-latency audio driver architecture for Windows developed by Steinberg. The DAD Thunderbolt 3 ASIO driver exposes Thunder\|Core interfaces (AX64, AX Center, Core 256) as ASIO devices in Windows DAWs. Configured via the DAD ASIO driver control panel, which provides buffer size, sample rate, and channel count settings.

**Autoboot**
The configuration of DADman to launch automatically when the computer starts, optionally loading a specified settings file and monitor profile without user interaction. On macOS, autoboot is achieved via Login Items or an AppleScript delay launcher. On Windows, via the Windows startup folder or task scheduler. See: *Chapter 8, Section 8.7*.

**AX Center**
A DAD audio interface in the Thunder\|Core product family. Combines onboard A/D and D/A conversion with a Dante network interface and Thunderbolt 3 connectivity. Supports up to 128 channels over Thunderbolt at 44.1/48 kHz. Controlled and configured via DADman.

**AX32**
A DAD audio router and converter. The flagship product of the Family 1 hardware group, supporting up to 256×256 crosspoint routing via an Ethernet-based matrix, with expansion card slots for MADI, Dante, AES3, analogue I/O, SDI, and SPQ. Controlled via DADman.

**AX64**
A DAD audio interface in the Thunder\|Core product family. Provides 64 channels of Thunderbolt 3 connectivity plus expansion options for MADI, Dante, AES3, and analogue I/O. Controlled via DADman.

**Bucket**
In Control\|Pack routing presets, a *bucket* is one of up to four independent input layers within a single routing preset. Each bucket defines a complete set of source channels that can be switched to the preset's outputs as a single action. Buckets are switched manually or automatically based on signal detector triggers. See also: *Control\|Pack*, *Routing Preset*, *Trigger*. See: *Chapter 8, Section 8.4*.

**CE** (Conformité Européenne)
A mandatory product marking for goods sold within the European Economic Area, indicating the product meets all applicable EU directives for safety, electromagnetic compatibility, and other regulatory requirements. DAD / NTP Technology hardware carries CE marking. The full Declaration of Conformity is available from DAD and reproduced in *Appendix F*.

**Clone / Cloning**
A DADman operation that copies all settings from one connected hardware unit to another within the same hardware family group. Cloning is performed via the Device List context menu. Units must be in the same family group; settings for I/O cards not present in the target unit are set to factory defaults. See: *Chapter 8, Section 8.3*. See also: *Family Group*.

**Con tab**
The *Connections* tab in DADman. Displays the full crosspoint routing matrix for the connected unit, with inputs on one axis and outputs on the other. Blue squares indicate active connections. Connections are made by clicking crosspoints; multiple connections can be made simultaneously using Shift+click for stereo pairs. See also: *Crosspoint*, *Routing Matrix*.

**Conf tab**
The *Configuration* tab in DADman. Provides control over synchronisation parameters (clock source, sample rate, Adapt To), format-specific settings (MADI frame rate, Dante configuration, AES3 options), and port-level configuration. The Conf tab contents vary by hardware model and installed expansion cards.

**Control 01 / Control 02**
DAD hardware monitor controllers. Compact, dedicated hardware units for hands-on control of DADman monitor functions without requiring a third-party control surface. Supported from DADman v5.8.2 build 2 (Control 01) and v5.8.2 build 2 (Control 02, introduced January 2026).

**Control\|Pack**
A routing preset system for Thunder\|Core hardware (AX64, AX Center, Core 256) introduced in DADman v5.8.0 build 8. Allows up to 32 routing presets per unit, each with up to four input buckets that switch simultaneously within a single audio sample. Automated switching based on signal level detection, AE6 pilot tone integrity, or port connectivity status. See: *Chapter 8, Section 8.4*. See also: *Bucket*, *Routing Preset*, *Trigger*.

**Core 256**
A DAD audio interface in the Thunder\|Core product family. Supports up to 256 channels over Thunderbolt 3 at 44.1/48 kHz, with extensive expansion card options. The largest-capacity member of the Thunder\|Core family at time of publication. Controlled via DADman.

**Core Audio**
Apple's audio I/O architecture for macOS. DAD Thunder\|Core units appear as Core Audio devices when the DAD Thunderbolt 3 Core Audio driver is installed, making them available to any macOS audio application. See also: *ASIO*.

**Crosspoint**
A single intersection in the DADman routing matrix representing a connection between one input and one output. Activating a crosspoint routes the signal from that input to that output. A blue square in the Con tab indicates an active crosspoint. Multiple crosspoints can share the same input (fan-out). See also: *Con tab*, *Routing Matrix*.

**Cue\|Mix**
A zero-latency in-ear monitor mixer feature in DADman. Allows individual headphone or IEM mixes to be created independently of the main control room mix. *Documentation pending — requires DAD engineering input. See: Chapter 8, Pending Documentation.*

**DA tab**
The *Digital to Analogue* tab in DADman. Displays channel strips for all analogue output channels on the connected hardware unit(s), providing controls for output level faders, mutes, and channel labels. The DA tab also contains the analogue output level calibration controls (dBu alignment). See also: *AD tab*.

**DAD** (Digital Audio Denmark)
The brand name used for audio hardware and software products developed by NTP Technology A/S, a Danish audio technology company. DAD products include the AX32, AX64, AX Center, Core 256, DX32R, MOM, and the DADman control software. See also: *NTP Technology A/S*.

**DADLink**
A proprietary high-channel-count audio interconnect format developed by DAD. Uses the mini MADI module slot on compatible hardware with optical SFP transceivers. Provides up to 128 channels at 44.1/48 kHz with approximately 1 microsecond of latency between connected units. Compatible with AX32, AX64, AX Center, Core 256, DX32R, Penta 720, Penta 721s, and MTRX/MTRX II. See: *Chapter 8, Section 8.6*.

**DADman**
The control software application developed by NTP Technology A/S (DAD) for configuring, monitoring, and controlling all DAD and NTP Technology hardware products, as well as Avid MTRX, MTRX II, and MTRX Studio audio interfaces. Available for macOS and Windows. DADman communicates with connected units over Ethernet (and optionally via Thunderbolt 3 for Thunder\|Core units). The application comprises channel strip controls (AD, DA, Con, Conf, Mon tabs), the Device List, monitor profile management, routing preset configuration, and preference settings.

**DAW** (Digital Audio Workstation)
A software application used for recording, editing, mixing, and producing digital audio. Pro Tools, Logic Pro, Nuendo, Reaper, and Cubase are common examples. DADman integrates with DAWs via Ethernet (EuCon), MIDI, Dante, and Thunderbolt 3.

**dBFS** (decibels relative to Full Scale)
A unit of measurement for digital audio signal level. 0 dBFS is the maximum possible digital level; all practical signal levels are negative values (e.g., −18 dBFS, −6 dBFS). DADman metering displays signal levels in dBFS. See also: *dBu*.

**dBu**
A unit of measurement for analogue audio signal level, referenced to 0.775 V RMS. Professional audio equipment typically operates at +4 dBu nominal with headroom to +18 dBu or +24 dBu. DADman DA tab output level controls set the analogue level that corresponds to 0 dBFS, aligning the digital and analogue signal domains. See also: *dBFS*.

**DDM** (Dante Domain Manager)
Audinate's centralised management system for enterprise-scale Dante networks, providing authentication, network segmentation, and cross-subnet routing. Some advanced Dante features (such as ST 2110-30 on certain module types) require DDM. See also: *Dante*.

**Device List**
The main unit display area in DADman, showing all connected hardware units from left to right in order of their unit ID numbers. Each unit is displayed with a coloured border, showing its current AD, DA, and Con/Conf controls as channel strips. The Device List provides the primary interface for device-level operations (firmware update, factory reset, clone, network settings).

**DMS** (DADman Settings File)
The file format (extension `.dms`) used by DADman to save the complete configuration of all connected hardware units — routing connections, gain settings, channel labels, Conf tab parameters, and all other unit-level settings. Settings are stored on the hardware unit itself; a `.dms` file is a backup of those settings held on the computer. See also: *DMPROF*.

**DMPROF** (DADman Monitor Profile File)
The file format (extension `.dmprof`) used by DADman to save a Monitor Profile — the complete monitor controller configuration for a hardware unit, including sources, output sets, fold-downs, talkback routing, and metering assignments. A `.dmprof` file is stored on the computer, not in the hardware unit. See also: *Monitor Profile*, *DMS*.

**DPC Latency** (Deferred Procedure Call Latency)
A Windows system performance metric measuring the time taken by hardware drivers and system processes to handle interrupt requests. High DPC latency causes audio dropouts in real-time audio applications. Common causes include wireless network drivers, USB power management settings, and antivirus software. Relevant to Thunder\|Core ASIO performance on Windows. See: *Chapter 9, Section 9.4*.

**DVS** (Dante Virtual Soundcard)
A software application from Audinate that makes a Mac or PC appear as a Dante audio device on the network, routing the computer's system audio into Dante. Used to bring any computer audio application's output into DADman's monitor system as a source. See: *Chapter 8, Section 8.10*.

**DX32R**
A DAD digital audio router and bridge. Supports routing between AES3, MADI, and Dante formats in a 1RU enclosure. Member of the Family 1 hardware group. Controlled via DADman.

**EuCon**
Avid's proprietary control surface protocol, used for communication between DAWs (particularly Pro Tools) and Avid control surfaces (S1, S6, S6L) and the Avid Control app. DADman implements EuCon to expose monitor control functions — source selection, volume, dim, cut, talkback, and fold-down — to any connected EuCon surface. Enabled in DADman via *Settings > Enable EuCon*. See: *Chapter 8, Section 8.5*.

**Family Group**
A hardware compatibility grouping used by DADman for the Clone function and for identifying units that share the same firmware branch. Three family groups exist: Family 1 (MTRX, AX32, DX32, Penta 720, Penta 721s); Family 2 (MTRX II, AX64, AX Center, Core 256); Family 3 (MTRX Studio). See also: *Clone / Cloning*.

**FCC** (Federal Communications Commission)
The United States regulatory agency responsible for radio frequency and electromagnetic compatibility standards. DAD / NTP Technology hardware sold in the USA must comply with FCC Part 15 (unintentional radiators). See: *Appendix F*.

**Firmware**
Embedded software stored on the hardware unit's internal flash memory that controls the unit's core audio processing, routing, and I/O functions. Firmware is separate from DADman (which runs on the host computer). Firmware updates are applied via DADman from a firmware file downloaded from the DAD support portal. See: *Chapter 10, Section 10.2*.

**Fold-Down**
A mixing matrix within a DADman Monitor Profile that converts a higher-channel-count audio source to a lower-channel-count format for compatibility monitoring. For example, a 7.1 fold-down to stereo enables checking how a surround mix translates to two-channel playback. Custom fold-down matrices can also be used for speaker subset selection and up-matching. See: *Chapter 8, Section 8.1.6*. See also: *Up-Match*, *Monitor Profile*.

**LTC** (Linear Timecode)
SMPTE timecode encoded as an audio-frequency signal that can be carried over any analogue or digital audio connection, including a Dante channel. LTC encodes hours, minutes, seconds, and frames to synchronise audio and video equipment. See: *Chapter 8, Section 8.14*.

**MADI** (Multichannel Audio Digital Interface, AES10)
A professional digital audio interface standard defined by the Audio Engineering Society (AES10). Transmits up to 64 channels of audio at 44.1 or 48 kHz (32 channels at 88.2/96 kHz in High Speed mode; 16 channels at 176.4/192 kHz) over a single coaxial cable or fibre-optic cable using SFP modules. MADI uses two frame rate modes: Legacy (56-channel) and High Speed (64-channel). Both ends of a MADI connection must use the same frame rate mode.

**Menu Bar Mode**
A macOS display mode for DADman in which the application hides from the Dock when its main window is closed and is accessible only via an icon in the macOS system menu bar. Used in permanent installation environments where DADman should run in the background. See: *Chapter 8, Section 8.7*.

**Mic Gain Group**
A DADman feature (v5.8.1 build 6 and later) that links multiple analogue input channels so that gain and mute adjustments on any one channel affect all channels in the group simultaneously, while preserving the relative gain offsets between channels. Phantom power and phase invert are not grouped. Supported on all hardware except MTRX Studio. See: *Chapter 8, Section 8.2*.

**MOM** (Monitor Operating Module)
A DAD hardware monitor controller — a compact, rack-mountable or desktop hardware unit providing physical knobs and buttons for controlling DADman monitor functions (volume, source selection, dim, cut, talkback, mute). MOM communicates with DADman over Ethernet. See: *Chapter 8, Section 8.5*.

**Mon tab**
The *Monitor* tab in DADman. Displays monitor controls for the currently loaded Monitor Profile: source selection buttons, speaker output set selection, main level fader, dim, cut, Ref button, talkback, and fold-down selectors. The Mon tab is only populated when a `.dmprof` Monitor Profile file is loaded. See also: *Monitor Profile*.

**Monitor Profile**
A DADman configuration file (`.dmprof`) defining the complete monitor controller setup: available sources, physical output sets, fold-down matrices, talkback routing, delay settings, and metering outputs. A Monitor Profile is entirely separate from the unit settings file (`.dms`). Profiles are stored on the computer and must be loaded into DADman at launch. See: *Chapter 8, Section 8.1*. See also: *DMPROF*, *Source (monitor)*, *Output Set*.

**MTRX / MTRX II / MTRX Studio**
Avid-branded audio interface products developed by NTP Technology A/S (DAD) under OEM agreement. MTRX and MTRX II are members of the Family 1 and Family 2 hardware groups respectively. MTRX Studio is Family 3. All three are configured and controlled via DADman software. For Avid-specific workflows, refer to the relevant Avid documentation. See: *Front Matter, Section FM.3*.

**NTP Technology A/S**
The Danish company (NTP Technology A/S, Copenhagen) that develops and manufactures DAD hardware and software products. Formerly known as NTP / NEVE Technology. Also develops audio products under the NTP Penta brand. DAD is the consumer-facing brand name; NTP Technology A/S is the legal entity. See also: *DAD*.

**Output Set**
In a DADman Monitor Profile, a named group of physical output channels representing a speaker configuration — for example, `Near Field`, `5.1 Surround`, or `85 dB SPL`. Multiple output sets can be defined using different physical outputs or the same outputs with different trim levels to create multiple reference level presets. See: *Chapter 8, Section 8.1.4*. See also: *Reference Level*, *Trim*.

**Penta 720 / Penta 721s**
NTP Technology A/S audio router and converter products. Members of the Family 1 hardware group. Feature the same expansion card options as the AX32. Controlled via DADman. Manufactured by NTP Technology A/S; distributed under the NTP Penta brand.

**PCIe** (Peripheral Component Interconnect Express)
A high-speed computer bus standard used internally in computers for communication between the CPU, RAM, and peripheral devices. Thunderbolt 3 externally exposes PCIe bandwidth, which is how Thunder\|Core devices communicate with the host computer at near-zero latency.

**PoE** (Power over Ethernet)
A standard (IEEE 802.3af/at) allowing network switches to supply electrical power to connected devices over the same Ethernet cable used for data. The MOM monitor controller and some DAD accessories support PoE, eliminating the need for a separate power supply.

**PRE Emulation**
A DADman feature enabling Pro Tools to control DADman-connected preamp gains via MIDI, treating the hardware as an *Avid PRE* preamp unit. Allows mic gain adjustment from within Pro Tools' I/O Setup or a connected control surface without switching to DADman. See: *Chapter 8, Section 8.15*.

**PRO\|MON**
An optional DADman software licence that extends the monitor control system beyond the basic Monitor Profile feature set, adding advanced monitor routing, talkback, cue bus, and integration capabilities for complex studio and broadcast monitoring environments. Used primarily with AX32, DX32R, Penta 720, and MTRX Studio. *Full documentation pending — requires DAD engineering input. See: Chapter 8, Pending Documentation.*

**PTP** (Precision Time Protocol, IEEE 1588)
A network protocol for synchronising clocks across a local area network with sub-microsecond precision. Used in Dante and Ravenna networks to align audio streams from different network devices without requiring dedicated word clock cabling. See also: *Dante*, *Ravenna*.

**Ravenna**
An audio-over-IP transport protocol developed by ALC NetworX. Used in high-end broadcast and professional audio applications. Interoperable with AES67. The DAD Ravenna Card (supported from DADman v5.8.2 build 2) adds Ravenna/AES67/ST 2110-30 connectivity to compatible Thunder\|Core units. See also: *AES67*, *ST 2110-30*.

**Ready LED**
A front-panel status indicator present on all DAD / NTP Technology hardware units. When solid green, the unit is powered on, booted, and communicating normally. A flashing or non-green Ready LED indicates a boot in progress, a firmware update, or a fault condition.

**Reference Level**
In a DADman Monitor Profile, a calibrated output level for a specific output set, established with test tones and an SPL meter. Once defined, pressing the **Ref** button in the Mon tab locks the monitor fader to this level, preventing accidental volume changes during critical listening. See: *Chapter 8, Section 8.1.5*.

**Routing Matrix**
The signal routing engine of a DADman-controlled hardware unit, enabling any input to be connected to any output. The routing matrix is displayed and edited in the DADman **Con** tab as a grid of crosspoints. DAD hardware supports matrices up to 1,500×1,500 crosspoints (model-dependent). See also: *Con tab*, *Crosspoint*.

**Routing Preset**
In Control\|Pack, a named configuration defining which output channels are controlled by the preset and which source buckets are available for switching. Up to 32 routing presets can be configured per Thunder\|Core unit. See also: *Control\|Pack*, *Bucket*. See: *Chapter 8, Section 8.4*.

**RoHS** (Restriction of Hazardous Substances)
EU Directive 2011/65/EU restricting the use of specific hazardous substances (lead, mercury, cadmium, hexavalent chromium, certain flame retardants) in electrical and electronic equipment. DAD / NTP Technology hardware complies with RoHS. See: *Appendix F*.

**Sample Rate**
The number of audio samples captured or played back per second, expressed in kHz. Standard rates: 44.1 kHz, 48 kHz (standard definition); 88.2 kHz, 96 kHz (high definition); 176.4 kHz, 192 kHz (ultra-high definition). Higher sample rates reduce the channel count on time-multiplexed interfaces (MADI, ADAT, DADLink). The sample rate is configured per unit in the DADman **Conf** tab.

**SFP** (Small Form-factor Pluggable)
A compact, hot-swappable optical or electrical transceiver module used in MADI and DADLink connections on DAD hardware. SFP modules are available in various configurations for multimode or single-mode fibre, or coaxial MADI. The SFP type determines the cable type and maximum transmission distance.

**S/MUX** (Sample Multiplexing)
A technique for transmitting higher sample rate audio over ADAT by using multiple ADAT channels to carry a single channel's data. At 88.2/96 kHz, S/MUX halves the ADAT channel count to 4 channels (S/MUX2). At 176.4/192 kHz, S/MUX4 further reduces the count to 2 channels. See also: *ADAT*.

**Source** *(monitor)*
In a DADman Monitor Profile, a named input signal path available for monitor selection. Sources are assigned to specific input channels on the hardware unit (analogue, Dante, MADI, AES3, etc.) and appear as selectable options in the Mon tab. Examples: `Pro Tools`, `DVS`, `Dante Player`, `Guest`. See: *Chapter 8, Section 8.1.3*. See also: *Monitor Profile*.

**SPQ** (Signal Processing card)
An optional DSP expansion card for compatible DAD hardware (AX32 variants) providing per-channel parametric EQ on analogue monitor outputs. Used for speaker and room correction. SPQ filter data is typically generated from acoustic measurements made with Room EQ Wizard (or similar tools) and imported into DADman via the SPQ tab. See: *Chapter 8, Section 8.12*.

**SRC** (Sample Rate Converter)
A hardware or software component that converts digital audio between different sample rates. Inserting an SRC in a signal path breaks any phase-coherent relationship with the original sample clock, which can corrupt time-sensitive signals such as LTC and the AE6 pilot tone. DADman units support SRC on select I/O interfaces when configured in the Conf tab.

**ST 2110-30**
A SMPTE standard (SMPTE ST 2110-30) for transport of uncompressed audio over IP networks, derived from the AES67 standard. Used in professional broadcast environments. Supported on DAD Dante and Ravenna interfaces from firmware v1.1.2.4 (January 2026). Brooklyn 3 modules support ST 2110-30 without DDM from firmware v1.1.0.3. See also: *AES67*, *Ravenna*, *DDM*.

**Thunder\|Core**
The DAD term for the Thunderbolt 3 interface technology integrated into AX64, AX Center, and Core 256 hardware units. Thunder\|Core provides ultra-low-latency audio I/O between the hardware unit and the host computer over a Thunderbolt 3 cable, in addition to standard Ethernet-based DADman control.

**Thunderbolt 3**
Intel's high-speed peripheral interface standard, providing up to 40 Gbps of bandwidth over a USB-C connector. Used by DAD Thunder\|Core units for audio I/O to the host computer. Requires the DAD Thunderbolt 3 driver (Core Audio on macOS; ASIO on Windows). The minimum cable specification for correct operation is a certified Thunderbolt 3 cable rated to 20 Gbps. See: *Chapter 3, Section 3.2* and *Chapter 9, Section 9.4*.

**Trim**
In a DADman Monitor Profile output set, a fixed level offset applied to that output set relative to the main monitor fader. Used to create multiple reference level presets on the same physical outputs without additional hardware. For example, a −10 dB trim on a second output set pointing to the same speakers as the primary set provides an instant 10 dB reference level shift. See also: *Output Set*, *Reference Level*.

**Trigger**
In Control\|Pack routing presets, a *trigger* is a detection condition assigned to a bucket that determines whether that bucket's source is considered valid. Trigger types: Signal Level (audio signal above −40 dBFS threshold); AE6 (integrity of the AE6 digital pilot tone); Port (physical port connectivity status). See: *Chapter 8, Section 8.4.4*. See also: *Bucket*, *Control\|Pack*.

**UKCA** (UK Conformity Assessed)
A product marking required for goods sold in Great Britain (England, Scotland, Wales) from 1 January 2021, replacing CE marking for the UK market following Brexit. Equivalent in scope to CE. DAD / NTP Technology hardware sold in Great Britain carries UKCA marking. See: *Appendix F*.

**Up-Match**
A custom fold-down matrix in a DADman Monitor Profile that routes a lower-channel-count source format to a higher-channel-count output — for example, spreading a 5.1 source across a 7.1.4 speaker layout. Configured in the Fold Downs tab of the Monitor Profile editor. See also: *Fold-Down*. See: *Chapter 8, Section 8.1.6*.

**WEEE** (Waste Electrical and Electronic Equipment)
EU Directive 2012/19/EU governing the collection, recycling, and disposal of electrical and electronic equipment. DAD / NTP Technology hardware carries the WEEE symbol (crossed-out wheelie bin), indicating it must not be disposed of in unsorted household waste. See: *Chapter 10, Section 10.8* and *Front Matter, Section FM.8*.

**Word Clock**
A square-wave synchronisation signal used to phase-lock digital audio equipment to a shared sample rate reference. Word clock is distributed at the operating sample rate (e.g., 48 kHz) over 75 Ω BNC cables. DAD hardware supports Word Clock in and out for integration into facility synchronisation systems. Word clock connections require 75 Ω termination at the final device in the chain. See: *Chapter 9, Section 9.5*.

---

## Appendix H — Index

*[Placeholder: index to be generated from the final compiled document.]*
