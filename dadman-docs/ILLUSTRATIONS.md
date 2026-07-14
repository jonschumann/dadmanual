# Illustrations Manifest

Track illustrations that need to be added to the manual.
Use the **Illustrations Manager** at `https://illustrations.evangelaudio.com` to drag-and-drop images
directly into the repo — each upload is auto-committed and the checkbox updated.

**Naming convention:**
- Software chapters: `ch{01–10}-{descriptor}.ext`
- Hardware manuals: `hw-{device}-{descriptor}.ext`
- Appendices: `app-{a–h}-{descriptor}.ext`
- All lowercase, hyphens only, no spaces

---

## DADman Software Manual

### Chapter 1 — Introduction

- [ ] `ch01-product-family-overview.jpg` — Product family group photo: AX Center, Core 256, AX64, AX32, MOM, Penta 720 and 721s on a rack shelf

### Chapter 2 — System Requirements

- [ ] `ch02-mac-audio-midi-setup.png` — Screenshot of macOS Audio MIDI Setup showing a DAD device selected as the Core Audio device
- [ ] `ch02-windows-device-manager.png` — Screenshot of Windows Device Manager showing DADman USB/Thunderbolt driver installed and enumerated

### Chapter 3 — Installation

- [x] `ch03-installer-welcome.png` — DADman installer welcome screen (macOS or Windows) *(added 2026-07-14)*
- [ ] `ch03-installer-complete.png` — DADman installer completion screen confirming successful install
- [ ] `ch03-first-launch.png` — DADman at first launch with no hardware connected (empty device panel)
- [ ] `ch03-thunderbolt-device-discovered.png` — DADman with a newly discovered AX Center or Core 256 shown in the device list

### Chapter 5 — Signal Flow & Architecture

- [ ] `ch05-signal-flow-overview.png` — Full DADman signal chain block diagram: inputs → routing matrix → processing → outputs, with clock domains labelled
- [ ] `ch05-clock-hierarchy.png` — Clocking hierarchy diagram showing master/slave relationships and sync source options (internal, word clock, AES11, video)
- [ ] `ch05-madi-loop-topology.png` — MADI loop topology diagram: two devices connected in a daisy-chain with primary/secondary port labelling
- [ ] `ch05-dante-network-topology.png` — Dante network topology: switch-connected devices with primary and secondary Gigabit ports
- [ ] `ch05-monitor-controller-signal-path.png` — Monitor controller signal path diagram: source selector → summing → SPQ → speaker outputs with dim/mute control points labelled

### Chapter 6 — Getting Started

- [ ] `ch06-device-panel-overview.png` — DADman main window with device panel annotated: device name, status indicator, sample rate, clock source
- [x] `ch06-routing-matrix-empty.png` — Empty routing matrix before any sources are connected — shows the grid layout *(added 2026-07-14)*
- [x] `ch06-first-patch.png` — Routing matrix with a simple first patch applied: two inputs connected to two outputs *(added 2026-07-14)*
- [x] `ch06-monitor-profile-new.png` — New Monitor Profile dialog with fields for name, speaker configuration, and output assignment *(added 2026-07-14)*
- [x] `ch06-output-trim-controls.png` — Output Trim section of the monitor controller showing level knobs and channel labels *(added 2026-07-14)*

### Chapter 7 — Operation

- [ ] `ch07-routing-matrix-full.png` — Routing matrix with a multi-source, multi-destination patch showing multiple active crosspoints
- [ ] `ch07-routing-matrix-drag.png` — Routing matrix during a drag operation: user adding a new connection between a source and destination
- [ ] `ch07-spq-equaliser.png` — SPQ parametric EQ panel with a 3-band curve applied (boost at 80 Hz, cut at 2 kHz, boost at 12 kHz)
- [ ] `ch07-spq-dynamics.png` — SPQ dynamics section: compressor with threshold, ratio, attack, release, gain controls visible
- [ ] `ch07-monitor-profile-manager.png` — Monitor Profile Manager panel listing multiple speaker profiles (Stereo, LCR, 5.1, 7.1)
- [ ] `ch07-dim-solo-controls.png` — Monitor controller transport bar: DIM, MONO, MUTE, SOLO buttons and the master level control
- [ ] `ch07-clock-source-menu.png` — Clock Source dropdown menu open, showing all available sync options (Internal, Word Clock, AES Ref, Video, MADI)
- [ ] `ch07-sample-rate-menu.png` — Sample Rate menu showing all supported rates (44.1, 48, 88.2, 96, 176.4, 192 kHz)
- [ ] `ch07-headphone-assignment.png` — Headphone output assignment dialog: source selector and level control
- [ ] `ch07-talkback-config.png` — Talkback configuration panel: mic input selection, level, latching vs. momentary mode

### Chapter 8 — Advanced Features

- [ ] `ch08-redundant-madi-config.png` — Redundant MADI setup: primary and secondary port assignment, failover timeout setting
- [ ] `ch08-dante-device-view.png` — DADman Dante device view showing subscriptions and transmitter channels
- [ ] `ch08-gpio-config.png` — GPIO configuration panel: pin direction, function assignment, and logic level settings
- [ ] `ch08-preset-manager.png` — Preset Manager panel listing saved presets with load, save, rename, and delete controls
- [ ] `ch08-osc-config.png` — OSC control configuration: IP address, port, and command mapping interface
- [ ] `ch08-multi-device-sync.png` — Two devices synchronised in DADman: word clock master/slave link shown in device panel

### Chapter 9 — Troubleshooting

- [ ] `ch09-no-sync-indicator.png` — DADman status bar showing a red SYNC LOST indicator
- [ ] `ch09-madi-status-ok.png` — MADI status indicator showing a locked, active connection (green)
- [ ] `ch09-dante-status-err.png` — Dante status panel showing a subscription error or network fault

### Chapter 10 — Maintenance & Firmware

- [ ] `ch10-firmware-update-dialog.png` — Firmware Update dialog in DADman showing current version and available update
- [ ] `ch10-firmware-progress.png` — Firmware update progress bar during a successful update

---

## Hardware Manuals

### AX Center

- [ ] `hw-ax-center-rear-connections.jpg` — AX Center rear panel with cables attached: Thunderbolt 3, word clock BNC, MADI SFP, AES I/O
- [ ] `hw-ax-center-block-diagram.png` — AX Center internal block diagram: I/O → FPGA core → Thunderbolt 3 host → output paths
- [ ] `hw-ax-center-rack-installation.jpg` — AX Center installed in a 19″ rack with rails and cable management

### AX64

- [ ] `hw-ax64-rear-connections.jpg` — AX64 rear panel with cables attached: Thunderbolt 3, MADI SFP primary/secondary, word clock BNC, AES
- [ ] `hw-ax64-block-diagram.png` — AX64 internal block diagram: 64-channel I/O → FPGA core → dual Thunderbolt 3 host

### AX32

- [ ] `hw-ax32-rear-panel.jpg` — AX32 rear panel photo (no DigiLink connectors — BASE2 variant only)
- [ ] `hw-ax32-rear-connections.jpg` — AX32 rear panel with cables attached: USB, MADI BNC, word clock, AES I/O
- [ ] `hw-ax32-block-diagram.png` — AX32 internal block diagram: 32-channel MADI/AES I/O → FPGA → USB host

### Core 256

- [ ] `hw-core256-rear-connections.jpg` — Core 256 rear panel with cables attached: Thunderbolt 3 ×2, expansion card slot, word clock
- [ ] `hw-core256-block-diagram.png` — Core 256 internal block diagram: Thunderbolt 3 host (×2) → FPGA 256-channel matrix → expansion slots
- [ ] `hw-core256-rack-installation.jpg` — Core 256 installed in a 2U rack slot with thermal clearance visible

### MOM

- [ ] `hw-mom-rear-connections.jpg` — MOM rear panel with cables attached: MADI BNC, AES/EBU, word clock, GPI/O, USB
- [ ] `hw-mom-block-diagram.png` — MOM internal block diagram: monitoring I/O → summing matrix → SPQ → speaker outputs

### Penta 720

- [ ] `hw-penta720-rear-connections.jpg` — Penta 720 rear panel with MADI BNC, word clock, and analogue I/O cables attached
- [ ] `hw-penta720-block-diagram.png` — Penta 720 internal block diagram: MADI → format conversion → analogue I/O

### Penta 721s

- [ ] `hw-penta721s-rear-connections.jpg` — Penta 721s rear panel with MADI, AES, word clock, and analogue I/O cables attached
- [ ] `hw-penta721s-block-diagram.png` — Penta 721s internal block diagram: dual MADI + AES → format conversion → analogue I/O

---

## Expansion Cards

- [ ] `hw-card-dante-front.jpg` — Dante expansion card front face showing RJ45 primary and secondary ports
- [ ] `hw-card-8aes-front.jpg` — 8AES card front face showing DB25 connectors
- [ ] `hw-card-2madi-so-front.jpg` — 2×MADI S/OPTX card front face showing SFP cages and BNC connectors
- [ ] `hw-card-avb-front.jpg` — AVB card front face showing RJ45 ports
- [ ] `hw-card-installation-sequence.jpg` — Expansion card installation photo sequence: slot cover removed, card aligned, card seated, screw installed

---

## Appendices

### Appendix B — Block Diagrams

- [ ] `app-b-system-block-diagram.png` — Full system block diagram: multiple DAD devices networked via MADI, Dante, and Thunderbolt with a DAW workstation

### Appendix C — Mechanical Drawings

- [ ] `app-c-ax-center-mechanical.png` — AX Center 1U chassis mechanical drawing with dimensions (mm and inches)
- [ ] `app-c-core256-mechanical.png` — Core 256 2U chassis mechanical drawing with dimensions
- [ ] `app-c-ax64-mechanical.png` — AX64 1U chassis mechanical drawing with dimensions
- [ ] `app-c-ax32-mechanical.png` — AX32 1U chassis mechanical drawing with dimensions
- [ ] `app-c-mom-mechanical.png` — MOM 1U chassis mechanical drawing with dimensions
- [ ] `app-c-penta720-mechanical.png` — Penta 720 1U chassis mechanical drawing with dimensions
- [ ] `app-c-penta721s-mechanical.png` — Penta 721s 1U chassis mechanical drawing with dimensions
