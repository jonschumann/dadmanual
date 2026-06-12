---
title: "CARD-L8 — Entrée ligne AD analogique 8 canaux"
sidebar_label: "CARTE L8"
sidebar_position: 3
---

# CARD-L8 — Carte d'entrée en ligne AD intacte à 8 canaux

> **RESKU :** CARD-L8  
> **Source:** Feuille de spécification CARD-L8, Edition Juin 2026

---

## Aperçu

La CARD-L8 offre huit canaux de conversion analogique-numérique haute performance au niveau de ligne pour tout châssis DAD compatible. Toutes les entrées sont équilibrées, livrées sur un connecteur DB25 unique en utilisant le pinceau Tascam standard.

La conversion utilise un modulateur delta-sigma à deux bits avec un filtrage basé sur FPGA à une profondeur de traitement 32 bits. Le staging de gain d'entrée est basé sur des relais sans composants électroniques actifs, fournissant le meilleur du bruit et de la linéarité dans la gamme complète des gains.

La carte supporte tous les taux d'échantillonnage PCM de 44,1 kHz à DXD (352,8/384 kHz), ainsi que DSD 64 et DSD 128.

---

## Caractéristiques techniques

| Paramètre                                       | Valeur                                                                                                         | Conditions / Notes                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Chaînes d'entrée                                | 8                                                                                                              | Équilibres, niveau de ligne                                         |
| Plage dynamique (pondérée)   | > 123 dB                                                                                                       |                                                                     |
| THD+N (pondéré)              | < -117 dB / 0.00014%                                                  | À -3 dBFS                                                           |
| Fréquence de réponse                            | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Tous les paramètres de gain                                         |
| Précision du gain                               | ±0,1 dB                                                                                                        | Tous les paramètres de gain                                         |
| Niveau de saisie maximum                        | -9 à +30 dBu                                                                                                   | Ajustable en 0.1 dB pas                             |
| Gagner des étapes pour 0 dBFS                   | 9, 12, 15, 18, 21, 24, 27, 30 dBu                                                                              | Étapes de 3 dB basées sur le Relais ; réglage interétapes numérique |
| Impédance d'entrée                              | > 10 kΩ.                                                                                       |                                                                     |
| CMRR                                            | > 120 dB                                                                                                       | À 1 kHz                                                             |
| Taux d'échantillonnage (PCM) | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                     |
| Taux d'échantillonnage (DSD) | 2,8224 MHz (DSD 64), 5,6448 MHz (DSD 128)                                |                                                                     |
| Résolution d'échantillonnage                    | 5 bits sigma-delta à 5,645 ou 6,144 MHz ; sortie PCM 24 bits                                                   |                                                                     |
| Longueur du mot en cours de traitement          | 32 bits                                                                                                        | Filtrage basé sur FPGA                                              |
| Consommation d'énergie                          | 9 W max                                                                                                        |                                                                     |

---

## Connexions

| Port                       | Connecteur | Signal                          | Notes                                                 |
| -------------------------- | ---------- | ------------------------------- | ----------------------------------------------------- |
| Saisie de ligne analogique | Femme DB25 | 8 ch équilibré, niveau de ligne | Tascam pinout; -9 à +30 dBu, > 10 kΩ. |

### Pinout d'entrée DB25 (Tascam)

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

> **AVERTISSEMENT :** Toujours éteindre le châssis et débrancher le câble réseau avant d'installer ou de retirer les cartes d'extension.

1. Retirez le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la CARD-L8 dans les guides de créneaux, étiquetez le côté vers le haut, jusqu'à ce que les sièges du connecteur de bord soient complets.
4. Fixer le support avant avec la vis retenue.
5. Rebranchez le câble réseau et l'alimentation sur le châssis.
6. Ouvrir DADman — la carte apparaît automatiquement sous forme d'entrées de ligne dans la vue de routage d'E/S.

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
