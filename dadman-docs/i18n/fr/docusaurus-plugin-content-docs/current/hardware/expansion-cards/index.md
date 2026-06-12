---
title: "Cartes d'extension"
sidebar_label: "Aperçu"
sidebar_position: 1
---

# Cartes d'extension

L'emplacement des cartes d'extension DAD dans les baies de la carte sur un châssis compatible pour étendre la capacité d'E/S. Chaque carte occupe un emplacement et peut être branchée à chaud. Plusieurs cartes de même ou de différents types peuvent être installées simultanément, sous réserve du budget total de puissance du châssis hôte.

## châssis compatible

| Châssis      | Emplacements disponibles |
| ------------ | ------------------------ |
| AX64         | 8                        |
| Penta 720    | 8                        |
| AX au centre | 2                        |
| Penta 721S   | 1                        |
| HAC32        | 8                        |

> Le Core 256 n'a pas d'emplacement d'extension. Le MOM n'a pas d'emplacement d'extension.

---

## Comparaison de la carte

| Cartes                           | UGS            | Type de texte                      | Canaux                       | Connecteur                       | Électricité |
| -------------------------------- | -------------- | ---------------------------------- | ---------------------------- | -------------------------------- | ----------- |
| [CARD-DA8](./card-da8)           | CARTE DA8      | Sortie de DA analogique            | 8 ch out                     | DB25 (Tascam) | 11 W        |
| [CARD-L8](./card-l8)             | CARTE L8       | Saisie de ligne AD analogique      | 8 ch en                      | DB25 (Tascam) | 9 W         |
| [CARD-M8](./card-m8)             | CARTE M8       | Entrée micro / ligne analogique AD | 8 ch en                      | DB25 (Tascam) | 11 W        |
| [CARD-DANTE](./card-dante)       | DANTE DE CARTE | Dante / AES67 AoIP                 | 128 ch en + 128 ch en sortie | 2 × RJ45                         | 4,5 W       |
| [CARD-2MADI-SO](./card-2madi-so) | CARD-2MADI-SO  | Double MADI via SFP                | 2 × 64 ch en + 64 ch         | 2 × SFP                          | 4,5 W       |
| [CARD-RAVENNA](./card-ravenna)   | RAVENNE CARTE  | Ravenna / AES67 / ST 2110-30       | 128 ch en + 128 ch en sortie | 2 × RJ45                         | 7,5 W       |
| [CARD-8AES](./card-8aes)         | CARTE 8AES     | E/S numériques AES3                | 8 ch en + 8 ch en sortie     | TBC                              | TBC         |
| [CARD-AVB](./card-avb)           | CARTE AVB      | Audio réseau AVB / Milan           | TBC                          | 2 × RJ45                         | TBC         |

---

## Slot de budget d'énergie

Chaque châssis a un budget de puissance maximum pour ses emplacements de carte d'extension. Assurez-vous que la consommation combinée des cartes installées ne dépasse pas la limite du châssis.

| Châssis      | Budget d'alimentation des emplacements de carte |
| ------------ | ----------------------------------------------- |
| AX64         | Un total de 70 W sur 8 emplacements             |
| Penta 720    | Reportez-vous aux spécifications du Penta 720   |
| AX au centre | Reportez-vous aux spécifications d'AX Center    |
| Penta 721S   | Reportez-vous aux spécifications du Penta 721S  |
| HAC32        | Reportez-vous aux spécifications d'AX32         |

> **ATTENTION:** Le dépassement du budget de la puissance de la fente peut causer un fonctionnement instable ou une arrêt thermique. Calculez la puissance totale de la carte avant d'installer plusieurs cartes haute puissance (CARD-DA8, CARD-M8) dans le même châssis.

---

## Aperçu de l'installation

Toutes les cartes d'extension partagent la même procédure d'installation. Pour des étapes détaillées, voir la section Installation sur la page de chaque carte.

1. Retirez complètement le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la carte dans les guides de créneaux jusqu'à ce que le connecteur de bord s'assied complètement.
4. Fixer le support avant de la carte avec la vis retenue.
5. Rebranchez le câble réseau et l'alimentation sur le châssis.
6. Ouvrir DADman — la carte apparaîtra automatiquement dans la configuration d'E/S.
