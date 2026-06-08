---
title: "Chapter 5 — Clocking & Synchronisation"
sidebar_label: "Ch. 5 — Clocking"
sidebar_position: 6
---

# Chapter 5 — Clocking & Synchronisation

> **Product:** Digital Audio Denmark AX Center

---

## 5.1 Overview

The AX Center supports multiple clock reference sources. The active clock source is selected in DADman. Only one device in a DADman session should be the clock master; all other devices should slave to it.

---

## 5.2 Internal Clock

*[Placeholder — describe internal crystal oscillator specification, accuracy, and when to use internal clock.]*

> **NOTE:** Use the internal clock only when no external reference is available, or when this unit is the designated clock master for the entire system.

---

## 5.3 External Word Clock

*[Placeholder — word clock input specification, accepted rates, BNC termination.]*

| Accepted format | Connector |
|-----------------|-----------|
| Word clock (1× sample rate) | BNC (WC/VBB IN) |
| 256× word clock | BNC (WC/VBB IN) |
| Video Black Burst | BNC (WC/VBB IN) |

---

## 5.4 MADI Embedded Clock

*[Placeholder — clocking from MADI embed or AES11 reference signal.]*

---

## 5.5 ADAT Embedded Clock

*[Placeholder — clocking from ADAT embed or network PTP source.]*

---



## 5.6 Clock Configuration in DADman

*[Placeholder — how to select clock source and verify lock in DADman. Cross-reference DADman manual Ch. 5.]*

1. In DADman, open the Device Configuration for the AX Center.
2. Navigate to the **Clock** section.
3. Select the desired clock source from the drop-down.
4. Verify that the front-panel **Ext.** LED illuminates (for external reference) or **Int.** LED (for internal).

---

## Cross-References

- [Ch. 2 — Panel Description](./ax-center/ch02-panel-description) — Clock LED states
- [DADman User Manual — Ch. 5 — Signal Flow](../ch05-signal-flow) — System clock topology
