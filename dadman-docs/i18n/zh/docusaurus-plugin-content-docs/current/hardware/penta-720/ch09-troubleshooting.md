---
title: "Chapter 9 — Troubleshooting"
sidebar_label: "Ch. 9 — Troubleshooting"
sidebar_position: 10
---

# Chapter 9 — Troubleshooting

> **Product:** Digital Audio Denmark Penta 720

> If you cannot resolve an issue using this chapter, contact Digital Audio Denmark support at [digitalaudio.dk/support](https://digitalaudio.dk/support). When contacting support, have the unit serial number, firmware version, and DADman version available.

---

## 9.1 Quick Reference

| Symptom                        | First check                                         | Reference                                                   |
| ------------------------------ | --------------------------------------------------- | ----------------------------------------------------------- |
| No power / unit does not start | Check power cable and mains outlet. | [Ch. 3 — Installation](./ch03-installation) |

\| Unit not discovered by DADman | Check Ethernet cable and switch connection. Verify host NIC is on the same subnet. Verify QoS settings on managed switch. | [Ch. 3 — Installation](./ch03-installation#34-network-setup) |
\| Audio dropouts on Ethernet | Dedicated network switch required — do not share with IT traffic. Check switch QoS configuration. | [Ch. 3 — Installation](./ch03-installation) |
\| Clock error (Err. LED lit) | Verify external reference source is present and at the correct sample rate. Check word clock termination. | [Ch. 5 — Clocking](./ch05-clocking) |
\| Audio silence on all channels | Check routing in DADman. Verify sample rate matches session. Check physical connections. | [Ch. 4 — Connections](./ch04-connections) |
\| Firmware update failed | Do not power off. Wait 5 minutes for the unit to timeout. Contact DAD support if the unit does not restart. | [Ch. 8 — Maintenance](./ch08-maintenance) |

---

## 9.2 Detailed Troubleshooting

### 9.2.1 Unit Does Not Power On

_[Placeholder — step-by-step diagnostic for no-power condition.]_

1. Confirm the mains outlet is live using a known-good device.
2. Check the IEC power cable is fully seated at both ends.
3. Check the front-panel Power button is functioning (press and hold 2 seconds).
4. If the unit still does not start, contact DAD support.

---

### 9.2.2 Unit Not Detected in DADman

_[Placeholder — decision tree for detection failure.]_

---

### 9.2.3 Clock Errors

_[Placeholder — systematic clock troubleshooting procedure.]_

---

### 9.2.4 Audio Problems

_[Placeholder — silence, distortion, noise, channel swap diagnostic flow.]_

---

## Cross-References

- [Ch. 2 — Panel Description](./ch02-panel-description) — LED state reference
- [Ch. 5 — Clocking](./ch05-clocking)
- [DADman User Manual — Ch. 9](/troubleshooting) — Software-side troubleshooting
