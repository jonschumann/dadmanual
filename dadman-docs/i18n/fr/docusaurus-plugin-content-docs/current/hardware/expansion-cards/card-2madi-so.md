---
title: "CARD-2MADI-SO — Interface double MADI avec SRC"
sidebar_label: "CARD-2MADI-SO"
sidebar_position: 6
---

# CARD-2MADI-SO — Double carte d’interface MADI avec SRC

> **RESPONSABIL:** CARD-2MADI-SO  
> **Source:** Feuille de spécification CARD-MADI-SO, Edition Juin 2026

---

## Aperçu

La CARD-2MADI-SO fournit deux connexions MADI bidirectionnelles indépendantes via des modules SFP pour tout châssis DAD compatible. Chaque port MADI fournit 64 canaux dans et 64 canaux à 48 kHz, pour un total de 128 canaux par carte et par direction.

Les modules SFP sont vendus séparément et peuvent être optiques (LC, mode simple ou multimode) ou électriques (HD-BNC coaxial). Cette flexibilité permet à la carte de se connecter à pratiquement toutes les infrastructures MADI existantes. La conversion de taux d'échantillonnage (SRC) peut être activée indépendamment pour l'entrée et la sortie de chaque port.

---

## Caractéristiques techniques

| Paramètre                                       | Valeur                                                                                                         | Conditions / Notes                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Ports MADI                                      | 2                                                                                                              | Ports bidirectionnels indépendants                              |
| Canaux par port                                 | 64 en / 64 en sortie                                                                                           | À 44,1 kHz / 48 kHz (1FS)                    |
| Nombre total de canaux                          | 128 en sortie                                                                                                  | Les deux ports combinés                                         |
| Canaux par port à 2FS                           | 32 en sortie                                                                                                   | À 88,2 kHz / 96 kHz                                             |
| Canaux par port à 4FS                           | 16 pouces                                                                                                      | À 176,4 kHz / 192 kHz                                           |
| Canaux par port à 8FS                           | 8 en / 8 en sortie                                                                                             | À 352,8 kHz / 384 kHz                                           |
| Taux d'échantillonnage                          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                 |
| Frame modes                                     | Héritage (SMUX) et vitesse                                                                  |                                                                 |
| Modes de nombre de canaux                       | 54 canaux et 64 canaux                                                                                         |                                                                 |
| Interface SFP                                   | Cage de 2 × SFP                                                                                                | Coax optique LC ou HD-BNC (vendu séparément) |
| Conversion de taux d'échantillonnage            | Sélectionnable par port, entrée et sortie indépendamment                                                       |                                                                 |
| latence du SRC (48 → 96 kHz) | Environ 0,8 ms d'entrée / sortie de 1,1 ms                                                                     | Par port                                                        |
| latence du SRC (96 → 48 kHz) | Environ 0,8 ms d'entrée / sortie de 1,1 ms                                                                     | Par port                                                        |
| Synchronisation                                 | MADI entrée ou horloge système interne                                                                         | Par port                                                        |
| Consommation d'énergie                          | 4,5 W                                                                                                          |                                                                 |

---

## Connexions

| Port              | Connecteur | Signal     | Notes                       |
| ----------------- | ---------- | ---------- | --------------------------- |
| MADI I/O — Port A | SFP cage   | AES10 MADI | Module SFP vendu séparément |
| MADI I/O — Port B | SFP cage   | AES10 MADI | Module SFP vendu séparément |

---

## Modules SFP

Les modules SFP ne sont **pas inclus** et doivent être commandés séparément. Deux types sont disponibles depuis DAD:

| UGS                  | Libellé                                                         |
| -------------------- | --------------------------------------------------------------- |
| MOD-SFP-COAX         | SFP émetteur électrique pour MADI — connecteur HD-BNC           |
| MOD-SFP-1300-LD      | émetteur optique SFP pour MADI — 1310 nm, 100BASE multi-mode LC |
| CON-2BNC-HD/STD-0,5M | Câble d'adaptateur HD-BNC vers BNC (0,5 m)   |

> **Note:** Le MOD-SFP-COAX utilise des connecteurs HD-BNC. Utilisez les câbles d'adaptateur CON-2BNC-HD/STD-0,5M pour connecter à l'équipement MADI BNC standard.

---

## Installation

> **AVERTISSEMENT :** Toujours éteindre le châssis et débrancher le câble réseau avant d'installer ou de retirer les cartes d'extension.

> **PRÉCAUTION :** Les modules SFP peuvent être insérés et retirés avec la carte alimentée. Cependant, pour éviter d'endommager la cage SFP, insérez toujours des modules droite et avec une pression uniforme. Ne forcez pas un module qui ne peut pas s'asseoir facilement.

1. Retirez le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la CARD-2MADI-SO dans les guides à créneaux jusqu'à ce que les sièges du connecteur de bord soient complets.
4. Fixer le support avant avec la vis retenue.
5. Rebranchez le câble réseau et l'alimentation sur le châssis.
6. Insérez les modules SFP appropriés dans les cages SFP et connectez les câbles MADI.
7. Ouvrir DADman — Les deux ports MADI apparaissent dans la vue de routage d'E/S.

---

## Compatibilité

| Châssis      | Compatible                          |
| ------------ | ----------------------------------- |
| AX64         | Oui                                 |
| AX au centre | Oui                                 |
| Penta 720    | Oui                                 |
| Penta 721S   | Oui                                 |
| HAC32        | Oui                                 |
| Noyau 256    | Non — aucun emplacement d'extension |
| MOM          | Non — aucun emplacement d'extension |
