---
title: "CARD-DA8 — Sortie DA analogique 8 voies"
sidebar_label: "CARTE DA8"
sidebar_position: 2
---

# CARD-DA8 — Carte de sortie DA immaculée à 8 canaux

> **RESPONSABIL:** CARD-DA8  
> **Source:** Feuille de spécification CARD-DA8, Émission juin 2026

---

## Aperçu

La CARD-DA8 offre huit canaux de conversion numérique vers analogique haute performance pour tout châssis DAD compatible. Toutes les sorties sont équilibrées et livrées sur un connecteur DB25 unique en utilisant le pinceau Tascam standard.

La conversion utilise un DAC 32 fois suréchantillonnage Burr Brown 32 bits avec un filtrage basé sur FPGA à une profondeur de traitement 32 bits. Le staging de gain de sortie est basé sur des relais sans composants électroniques de gain actifs, assurant une plage dynamique maximale et une concordance de niveau précis avec tout système analogique en aval.

La carte supporte tous les taux d'échantillonnage PCM de 44,1 kHz à DXD (352,8/384 kHz), ainsi que DSD 64 et DSD 128.

---

## Caractéristiques techniques

| Paramètre                                       | Valeur                                                                                                         | Conditions / Notes                                               |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Chaînes de sortie                               | 8                                                                                                              | Équilibres, niveau de ligne                                      |
| Plage dynamique (pondérée)   | > 128 dB                                                                                                       |                                                                  |
| THD+N (pondéré)              | < -115 dB / 0,00017%                                                                  | À -3 dBFS                                                        |
| Fréquence de réponse                            | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Tous les paramètres de gain                                      |
| Précision du gain                               | ±0,1 dB                                                                                                        | Tous les paramètres de gain                                      |
| Niveau de sortie maximum                        | 0 à +24 dBu                                                                                                    | Ajustable en 0.1 dB pas                          |
| Gagner des étapes pour 0 dBFS                   | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                              | Étapes 6 dB basées sur le Relais ; réglage interétapes numérique |
| Impédance de sortie                             | < 100 Ω                                                                               |                                                                  |
| Taux d'échantillonnage (PCM) | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                  |
| Taux d'échantillonnage (DSD) | 2,8224 MHz (DSD 64), 5,6448 MHz (DSD 128)                                |                                                                  |
| Longueur du mot en cours de traitement          | 32 bits                                                                                                        | Filtrage basé sur FPGA                                           |
| Consommation d'énergie                          | 11 W max                                                                                                       |                                                                  |

---

## Connexions

| Port                       | Connecteur | Signal                          | Notes          |
| -------------------------- | ---------- | ------------------------------- | -------------- |
| Sortie de ligne analogique | Femme DB25 | 8 ch équilibré, niveau de ligne | Pinceau Tascam |

### DB25 Output Pinout (Tascam)

| Broche DB25 | Signal |
| ----------- | ------ |
| 1           | Ch 1 + |
| 14          | Ch 1 − |
| 2           | Ch 2 + |
| 15          | Ch 2 − |
| 3           | Ch 3 + |
| 16          | Ch 3 − |
| 4           | Ch 4 + |
| 17          | Ch 4 − |
| 5           | Ch 5 + |
| 18          | Ch 5 − |
| 6           | Ch 6 + |
| 19          | Ch 6 − |
| 7           | Ch 7 + |
| 20          | Ch 7 − |
| 8           | Ch 8 + |
| 21          | Ch 8 − |
| 25          | Sol    |

---

## Installation

> **AVERTISSEMENT :** Toujours éteindre le châssis et débrancher le câble réseau avant d'installer ou de retirer les cartes d'extension. Insérer une carte dans un châssis alimenté peut endommager la carte et le châssis.

1. Retirez le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la CARD-DA8 dans les guides de créneaux, étiquetez le côté vers le haut, jusqu'à ce que les sièges du connecteur de bord soient complets.
4. Fixer le support avant avec la vis retenue. Il suffit de se serrer le doigt.
5. Rebranchez le câble réseau et l'alimentation sur le châssis.
6. Ouvrir DADman — la carte apparaît automatiquement sous forme de sortie de DA dans la vue de routage d'E/S.

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
