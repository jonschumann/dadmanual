---
id: front-matter-safety
title: "Front Matter & Safety"
sidebar_label: "FM — Front Matter & Safety"
sidebar_position: 2
slug: /front-matter-safety
---

# Front Matter — Safety Notices and Compliance

> **Document:** DADman User Manual  
> **Applies to:** DADman software and all compatible DAD / NTP Technology hardware  
> **Standards:** IEC/IEEE 82079-1:2019 · IEC 62368-1:2018 · UL 62368-1 · CSA C22.2 No. 62368-1  
> **Status:** Draft v0.1 — Regulatory declarations pending from DAD / NTP Technology engineering  
> **Last updated:** June 2026

---

> **READ AND RETAIN THESE INSTRUCTIONS BEFORE OPERATING ANY EQUIPMENT.**  
> This section contains safety information that must be read, understood, and followed before installing, configuring, or operating any hardware controlled by DADman software. Failure to observe these instructions may result in electric shock, fire, hearing damage, equipment damage, or voiding of warranty.

---

## FM.1 Signal Word Definitions

The following signal words are used throughout this manual to indicate hazard severity. They appear in notices formatted as shown below and must always be read and observed.

| Signal word | Hazard level | Meaning |
|-------------|-------------|---------|
| **DANGER** | Immediate death or serious injury | This signal word indicates an imminently hazardous situation which, if not avoided, **will** result in death or serious personal injury. |
| **WARNING** | Possible death or serious injury | This signal word indicates a potentially hazardous situation which, if not avoided, **could** result in death or serious personal injury. |
| **CAUTION** | Possible minor injury or equipment damage | This signal word indicates a potentially hazardous situation which, if not avoided, **may** result in minor personal injury or damage to equipment. |
| **NOTICE** | No injury risk | This signal word indicates important operational information which, if not followed, may result in data loss, incorrect operation, or damage to equipment, but does not present a personal safety hazard. |

Safety notices **always appear before** the action or situation they relate to.

---

## FM.2 Safety Symbols

The following symbols may appear on DAD / NTP Technology hardware, power supplies, or in this documentation. Each symbol is reproduced here with its meaning.

| Symbol | IEC 60417 reference | Meaning |
|--------|-------------------|---------|
| ⚠ | IEC 60417-5036 | **General caution / attention required.** Refer to the accompanying text for the specific hazard. |
| ⚡ | IEC 60417-5031 | **Electrical shock hazard.** Dangerous voltage inside. Risk of electric shock. Do not open. |
| ⏚ | IEC 60417-5019 | **Protective earth / ground.** This terminal must be connected to a protective earth conductor. |
| **~** | IEC 60417-5032 | **Alternating current (AC).** Indicates AC power input. |
| **⏻** | IEC 60417-5009 | **Power / standby.** |
| ♻ | WEEE Directive | **Do not dispose of in household waste.** This product must be disposed of through an authorised recycling or waste collection scheme. See [Section FM.8 — Disposal and WEEE](#fm8-disposal-and-weee). |
| **[RoHS]** | EU Directive 2011/65/EU | **RoHS compliant.** This product complies with the Restriction of Hazardous Substances Directive. |

> **NOTICE:** If a symbol appears on the hardware or packaging and is not listed in the table above, refer to the installation guide supplied with that specific hardware unit.

---

## FM.3 Electrical Safety

### FM.3.1 Mains Power and Grounding

> **DANGER — Electric shock hazard**  
> **Improper connection of the equipment-grounding conductor results in a risk of electric shock.** Do not modify the plug provided with the product. If the plug does not fit the outlet, have a qualified electrician install a suitable outlet. Do not use an adapter that defeats the function of the equipment-grounding conductor. If you are uncertain whether the product is properly grounded, consult a qualified electrician before operating the equipment.

All DAD / NTP Technology mains-powered hardware **must be grounded**. In the event of a malfunction or breakdown, grounding provides a path of least resistance for fault current, reducing the risk of electric shock. Each mains-powered product is supplied with a power cord fitted with an equipment-grounding conductor and a grounding plug. The plug must be inserted into a properly installed and grounded outlet that complies with all applicable local electrical codes and ordinances.

> **WARNING**  
> Do not defeat the safety purpose of the polarised or grounding-type power plug. A polarised plug has two blades with one wider than the other. A grounding-type plug has two blades and a third grounding prong. The wide blade and the third prong are provided for your safety. If the supplied plug does not fit your outlet, consult an electrician for replacement of the obsolete outlet. This instruction applies in all regions and supersedes any local convenience practice.

### FM.3.2 Power Cord Protection

> **WARNING**  
> Protect the power cord from being walked on or pinched, particularly at plugs, mains outlets, and at the point where cords exit the equipment chassis. A damaged power cord must be replaced by a qualified service technician before the equipment is returned to service. Do not operate equipment with a visibly damaged or abraded power cord.

### FM.3.3 Disconnection and Lightning

- Unplug all mains-powered equipment during lightning storms.
- Unplug all mains-powered equipment when it will be unused for an extended period of time.
- When disconnecting a power cord, grasp the plug body firmly — do not pull on the cord itself.

### FM.3.4 Power over Ethernet (PoE) Devices

Some DAD hardware (including the MOM Monitor Operating Module) is powered via Power over Ethernet (PoE) rather than a mains power cord. The following applies to PoE-powered devices:

- Connect PoE-powered devices only to network switches or injectors that comply with IEEE 802.3af (15.4 W) or IEEE 802.3at (30 W) as appropriate for the device.
- Do not connect PoE-powered devices to standard data-only network ports not capable of supplying PoE power.
- The PoE power supply within the network switch or injector is subject to the general mains safety instructions in [Section FM.3.1](#fm31-mains-power-and-grounding).

---

## FM.4 Environmental Safety

### FM.4.1 Moisture and Liquids

> **WARNING**  
> Do not use any DAD / NTP Technology hardware near water or in locations where condensation, rain, or liquid spills may occur. Liquid ingress can cause electric shock, fire, or irreparable damage to the electronics.

- Keep liquids away from all equipment.
- Take care to ensure that objects do not fall and liquids are not spilled into equipment through ventilation openings or connector apertures.
- If liquid has been spilled on or into the equipment, disconnect mains power immediately and refer to [Section FM.6 — Service Conditions](#fm6-service-conditions) before returning the equipment to service.

### FM.4.2 Ventilation and Heat

> **WARNING**  
> This equipment generates heat during normal operation. Obstruction of ventilation openings may cause overheating, fire, or premature failure of internal components.

- Do not block any ventilation openings. Install equipment in accordance with the manufacturer's instructions and the clearances specified in the installation guide for your hardware model.
- Do not install equipment near heat sources such as radiators, heat registers, stoves, or other apparatus — including power amplifiers — that produce significant heat.
- The product should be located so that its position does not interfere with its proper ventilation.
- Observe the minimum rack clearances and operating temperature range specified in the Technical Specifications for your hardware. In general, DAD rack hardware requires a minimum of 1U of free space above and below the unit unless otherwise specified.

### FM.4.3 Mechanical Stability

> **CAUTION**  
> Equipment that falls may cause personal injury and severe equipment damage. When mounting hardware in a rack or on a cart, ensure the mounting structure is stable, rated to the load, and properly secured before releasing the equipment.

- Use only rack enclosures, stands, carts, or mounting brackets specified by the manufacturer or supplied with the equipment.
- When using a wheeled equipment cart, exercise caution when moving the cart and equipment combination to avoid tip-over.
- Rackmount units must be secured with all supplied rack-mount screws before operation.

---

## FM.5 Hearing Safety

> **WARNING — Risk of permanent hearing damage**  
> DADman software controls the analogue and digital output levels of connected hardware. This equipment, whether used alone or in combination with power amplifiers and loudspeakers or headphones, is capable of producing sound pressure levels (SPL) that can cause **permanent hearing loss**.

- Do not operate at output levels that are uncomfortable. If in doubt about safe monitoring levels, consult professional guidance on SPL limits for extended listening (a common reference is 85 dB SPL as a continuous safe level for professional monitoring).
- Reduce output levels before connecting new signal sources, making routing changes, or reloading configuration files.
- If you experience any hearing loss, tinnitus (ringing in the ears), or increased sensitivity to sound after a listening session, consult an audiologist promptly. These can be early indicators of noise-induced hearing damage.

> **NOTICE:** DADman's output level controls and monitor profile reference level function (the **Ref** button) are specifically designed to allow output levels to be set and locked at calibrated SPL values. Using these features for disciplined gain structure management significantly reduces the risk of inadvertent exposure to unsafe SPL. See [Chapter 8 — Advanced Features, Section 8.X — Monitor Profiles and Reference Levels] for guidance.

---

## FM.6 Service Conditions

> **WARNING**  
> There are no user-serviceable parts inside DAD / NTP Technology hardware. Opening the enclosure exposes dangerous voltages. Refer all servicing beyond that described in this manual to qualified service personnel.

Hardware must be taken out of service and referred to qualified service personnel when any of the following conditions exist:

1. The mains power cord or plug has been physically damaged.
2. Objects have fallen into, or liquid has been spilled into, the equipment.
3. The equipment has been exposed to rain or moisture.
4. The equipment does not appear to operate normally or exhibits a marked change in performance.
5. The equipment has been dropped or the enclosure has been physically damaged.

Do not attempt to service the product beyond the user maintenance procedures described in [Chapter 10 — Maintenance] of this manual. Unauthorised service will void the warranty and may create additional safety hazards.

> **WARNING — Moving parts**  
> Some DAD rack units (including the AX32) contain cooling fans with **hazardous moving parts** accessible when the unit cover is removed. Keep fingers and all other body parts away from internal fan assemblies at all times.

---

## FM.7 Software and Data Safety

The following NOTICE-level guidance applies to DADman software operation and does not involve personal safety hazards. Failure to observe these practices may result in loss of configuration data.

> **NOTICE — Save configuration before firmware updates**  
> Firmware updates reset all settings stored on the hardware unit to factory default values. Routing configurations, gain settings, monitor profiles, channel labels, and all other stored parameters will be lost unless saved first. Always save a DADman Settings File (`.dms`) using **File > Save As** before initiating any firmware update. See [Chapter 3, Section 3.X — Updating DADman and Firmware] for the complete procedure.

> **NOTICE — Configuration file backups**  
> DADman Settings Files (`.dms`) and Monitor Profile Files (`.dmprof`) represent significant setup investment. Maintain regular backups of these files to a location separate from the computer running DADman (for example, cloud storage or an external drive). These files are the only means of recovering your configuration after a factory reset.

> **NOTICE — Network security**  
> DADman communicates with hardware units over the network without authentication by default. In environments with multiple users or network access from outside the studio, place DADman-controlled hardware on a dedicated, isolated network segment to prevent unauthorised access to unit configuration.

---

## FM.8 Disposal and WEEE

DAD / NTP Technology products are subject to the European WEEE Directive (Waste Electrical and Electronic Equipment, Directive 2012/19/EU) and equivalent national and regional regulations.

> **Do not dispose of this equipment in unsorted municipal waste (household waste/general refuse).**

Electrical and electronic equipment must be collected and disposed of separately through authorised collection points or returned to an authorised distributor or the manufacturer for proper recycling. Contact your local authority, waste management service, or DAD / NTP Technology for disposal guidance.

The crossed-out wheelie bin symbol (♻ with an X) printed on or affixed to the product identifies it as subject to separate collection requirements.

---

## FM.9 Regulatory Compliance

> **NOTICE — Declarations pending**  
> The regulatory compliance declarations in this section are provided as placeholders. Final declarations, including applicable directive versions, notified body information (if applicable), and authorised representative details, must be confirmed and inserted by DAD / NTP Technology engineering and legal prior to publication.

### FM.9.1 CE Declaration of Conformity (European Union)

DAD / NTP Technology declares that the hardware products controlled by DADman software comply with the requirements of the following European Union directives:

- **Radio Equipment Directive (RED) 2014/53/EU** — *[Applicable to products with radio/Wi-Fi; confirm applicability per product]*
- **Low Voltage Directive (LVD) 2014/35/EU** — Applicable to mains-powered hardware
- **Electromagnetic Compatibility Directive (EMC) 2014/30/EU**
- **RoHS Directive 2011/65/EU** — Restriction of Hazardous Substances
- **WEEE Directive 2012/19/EU** — Waste Electrical and Electronic Equipment

*[Complete Declaration of Conformity document to be inserted here. Must include: product name(s), model number(s), authorised signatory, date, and list of harmonised standards applied (EN 55032, EN 55035, EN IEC 62368-1, etc.).]*

**Authorised Representative (EU):**  
NTP Technology A/S  
Nybrovej 99, DK-2820 Gentofte, Denmark  
Email: info@digitalaudio.dk

### FM.9.2 FCC Declaration of Conformity (United States)

*[FCC declaration to be inserted by DAD engineering. Must include: FCC ID (if applicable), responsible party name and address, and compliance statement per 47 CFR Part 15.]*

This device complies with Part 15 of the FCC Rules. Operation is subject to the following two conditions:
1. This device may not cause harmful interference.
2. This device must accept any interference received, including interference that may cause undesired operation.

> **NOTICE:** Changes or modifications not expressly approved by NTP Technology A/S could void the user's authority to operate the equipment.

### FM.9.3 ICES-003 (Canada)

*[Industry Canada ICES-003 compliance statement to be inserted.]*

This Class B digital apparatus complies with Canadian ICES-003.

### FM.9.4 RoHS Compliance

DAD / NTP Technology hardware is manufactured in compliance with EU Directive 2011/65/EU (RoHS 2) and its amendment Directive 2015/863/EU (RoHS 3), which restrict the use of hazardous substances including lead, mercury, cadmium, hexavalent chromium, polybrominated biphenyls (PBB), polybrominated diphenyl ethers (PBDE), and four phthalates in electrical and electronic equipment.

*[RoHS compliance certificate or declaration reference to be inserted.]*

### FM.9.5 UK Conformity Assessed (UKCA) — Great Britain

*[UKCA declaration to be inserted for products placed on the GB market post-Brexit, if applicable.]*

---

## FM.10 Legal Notices

### Copyright

© 2026 NTP Technology A/S. All rights reserved.

DAD — Digital Audio Denmark is a registered trademark of NTP Technology A/S. All other trademarks are the property of their respective owners.

No part of this manual may be reproduced, transmitted, or translated in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — without the prior written permission of NTP Technology A/S.

### Disclaimer

NTP Technology A/S reserves the right to make changes to hardware products and software without notice. Product features and specifications described in this manual are subject to change.

NTP Technology A/S shall not be liable for technical or editorial errors or omissions contained herein, nor for incidental or consequential damages resulting from the furnishing, performance, or use of this manual or the products it describes.

### Contact

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark  

Email: info@digitalaudio.dk  
Web: www.digitalaudio.dk  
Support: www.digitalaudiosupport.com

---

## Summary of Safety Notices

Per IEC/IEEE 82079-1:2019, all DANGER and WARNING notices in this document are collected here for quick reference. Individual notices also appear in-context throughout the chapters where the relevant hazard applies.

| Location | Signal word | Summary |
|----------|------------|---------|
| Section FM.3.1 | **DANGER** | Improper grounding — risk of electric shock |
| Section FM.3.1 | **WARNING** | Do not defeat the safety purpose of the power plug |
| Section FM.3.2 | **WARNING** | Protect and do not operate with a damaged power cord |
| Section FM.4.1 | **WARNING** | Do not use near water — risk of electric shock and fire |
| Section FM.4.2 | **WARNING** | Do not obstruct ventilation — risk of fire and overheating |
| Section FM.5 | **WARNING** | Output levels capable of causing permanent hearing loss |
| Section FM.6 | **WARNING** | No user-serviceable parts — dangerous voltages inside |
| Section FM.6 | **WARNING** | Hazardous moving parts (AX32 and units with internal fans) |

---

*[Pending from DAD / NTP Technology legal and engineering:]*  
*— Final CE Declaration of Conformity text and signatory*  
*— FCC ID numbers and compliance statements per product model*  
*— ICES-003 declaration*  
*— UKCA declaration (if applicable)*  
*— RoHS certificate reference*  
*— Confirmation of applicable harmonised standards (EN series)*
