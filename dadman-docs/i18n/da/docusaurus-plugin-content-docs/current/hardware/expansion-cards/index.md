---
title: "Ekspansion Kort"
sidebar_label: "Oversigt"
sidebar_position: 1
---

# Ekspansion Kort

DAD ekspansionskort slot ind i kortet bugter på kompatibelt chassis at udvide I / O kapacitet. Hvert kort indtager en plads og er hot-plug kapacitet. Flere kort af de samme eller forskellige typer kan installeres samtidigt, med forbehold af det samlede magt budget af værten chassis.

## Kompatibel Chassis

| Chassiser    | Tilgængelige Slots |
| ------------ | ------------------ |
| AX64         | 8                  |
| Penta 720    | 8                  |
| AX Centreret | 2                  |
| Penta 721S   | 1                  |
| AX32         | 8                  |

> Core 256 har ingen ekspansion slots. MOM har ingen udvidelses slots.

---

## Kortsammenligning

| Kort                             | Varenummer    | Type                         | Kanaler                | Forbindelse                      | Effekt |
| -------------------------------- | ------------- | ---------------------------- | ---------------------- | -------------------------------- | ------ |
| [CARD-DA8](./card-da8)           | CARD-DA8      | Analog DA output             | 8 ch out               | DB25 (Tascam) | 11 W   |
| [CARD-L8](./card-l8)             | CARD-L8       | Analog AD linjeinput         | 8 lm om                | DB25 (Tascam) | 9 W    |
| [CARD-M8](./card-m8)             | CARD-M8       | Analog AD mic/line input     | 8 lm om                | DB25 (Tascam) | 11 W   |
| [CARD-DANTE](./card-dante)       | CARD-DANTE    | Dante / AES67 AoIP           | 128 lm i + 128 lm ud   | 2 × RJ45                         | 4,5 W  |
| [CARD-2MADI-SO](./card-2madi-so) | CARD-2MADI-SO | Dobbelt MADI via SFP         | 2 × 64 lm i + 64 lm ud | 2 × SFP                          | 4,5 W  |
| [CARD-RAVENNA](./card-ravenna)   | CARD-RAVENNA  | Ravenna / AES67 / ST 2110-30 | 128 lm i + 128 lm ud   | 2 × RJ45                         | 7,5 W  |
| [CARD-8AES](./card-8aes)         | CARD-8AES     | AES3 digital I/O             | 8 lm i + 8 lm ud       | TBC                              | TBC    |
| [CARD-AVB](./card-avb)           | CARD-AVB      | AVB / Milano netværkslyd     | TBC                    | 2 × RJ45                         | TBC    |

---

## Slot Power Budget

Hvert chassis har en maksimal effekt budget for sin ekspansionskort slots. Sørg for, at det kombinerede strømforbrug på installerede kort ikke overskrider chassisgrænsen.

| Chassiser    | Kort slot magt budget                   |
| ------------ | --------------------------------------- |
| AX64         | 70 W på tværs af 8 pladser              |
| Penta 720    | Se Penta 720-specifikationerne          |
| AX Centreret | Henvis til AX Center specifikationer    |
| Penta 721S   | Se Penta 721S-specifikationerne         |
| AX32         | Der henvises til AX32-specifikationerne |

> **ADVARSEL:** Overskridelse af slotstrømsbudgettet kan forårsage ustabil drift eller termisk nedlukning. Beregn det samlede kort strøm, før du installerer flere high-power kort (CARD-DA8, CARD-M8) i det samme chassis.

---

## Installations Oversigt

Alle udvidelseskort har samme installationsprocedure. For detaljerede trin, se installationsafsnittet på hver kortside.

1. Tænd chassiset helt ned og frakobl netledningen.
2. Fjern det blanke panel fra målpladsen (behold skruen).
3. Skub kortet ind i slot guider indtil kantstikket sæder fuldt ud.
4. Sikre kortets forbeslag med den bevarede skrue.
5. Genopret netledningen og strømmen på chassiset.
6. Åbn DADman - kortet vises automatisk i I/O-konfigurationen.
