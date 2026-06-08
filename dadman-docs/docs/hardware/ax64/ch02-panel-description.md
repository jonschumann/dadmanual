---
title: "Chapter 2 — Panel Description"
sidebar_label: "Ch. 2 — Panel Description"
sidebar_position: 3
---

# Chapter 2 — Panel Description

> **Product:** Digital Audio Denmark AX64

> **How to use this chapter:** This chapter identifies every control and connector on the AX64. For signal levels and connection procedures, see [Ch. 4 — Signal Connections](./ax64/ch04-connections). For LED state meanings, see [Section 2.3](#23-led-state-reference) and [Ch. 6 — Operation](./ax64/ch06-operation).

---

## 2.1 Front Panel

![AX64 front panel](/img/ch04-fig05-ax64-front-panel.png)
*Figure 2.1 — AX64 front panel*

*[Placeholder — complete callout table drawn from panel diagram. Reference ch04 for existing content.]*

| Ref | Label | Type | Function |
|-----|-------|------|----------|
| 1 | *TBC* | *TBC* | *TBC* |


---

## 2.2 Rear Panel

![AX64 rear panel](/img/ch04-fig06-ax64-rear-panel.png)
*Figure 2.2 — AX64 rear panel*

*[Placeholder — complete callout table.]*

| Ref | Label | Connector | Function |
|-----|-------|-----------|----------|
| 1 | *TBC* | *TBC* | *TBC* |


---

## 2.3 LED State Reference

*[Placeholder — complete LED state table. Migrate content from DADman manual Ch. 4.7 and expand with device-specific states.]*

### Clock Reference LEDs

| Int. | Ext. | Err. | Meaning |
|------|------|------|---------|
| ● | ○ | ○ | Locked to internal clock reference — clock master mode |
| ○ | ● | ○ | Locked to external clock reference — clock slave mode |
| ○ | ○ | ● | **Clock error** — cannot lock to selected reference |
| ● | ○ | ● | **Internal fault** — power-cycle and contact support if persistent |
| Slow flash | — | — | Firmware update in progress — do not power off |

### Power Button States

| State | Meaning |
|-------|---------|
| Off | Unit powered off |
| Steady | Unit powered on, normal operation |
| Slow pulse | Shutdown sequence in progress |

---

## Cross-References

- [Ch. 4 — Signal Connections](./ax64/ch04-connections) — Signal levels and connection procedures
- [Ch. 6 — Operation](./ax64/ch06-operation) — Controls and display operation
- [App. A — Connector Pinouts](./ax64/appa-connector-pinouts) — Pin assignments
