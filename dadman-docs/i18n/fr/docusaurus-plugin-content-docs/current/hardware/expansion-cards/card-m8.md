---
title: "CARD-M8 — Entrée 8 canaux analogue AD/micro / ligne"
sidebar_label: "CARTE M8"
sidebar_position: 4
---

# CARD-M8 — Carte d'entrée de micro / ligne à 8 canaux

> **RESKU :** CARD-M8  
> **Source:** Feuille de spécification CARD-M8, Edition Juin 2026

---

## Aperçu

La CARD-M8 offre huit canaux de conversion analogique/numérique haute performance avec microphone commutable et entrée de niveau de ligne pour tout châssis DAD compatible. Chaque canal peut être réglé de façon indépendante en mode microphone ou ligne. Toutes les entrées sont équilibrées, livrées sur un connecteur DB25 unique en utilisant le pinceau Tascam standard.

La conversion utilise un modulateur delta-sigma à deux bits avec un filtrage basé sur FPGA à une profondeur de traitement 32 bits. Le microphone et le gain de ligne sont basés sur un relais sans composants de gain électronique actifs, fournissant des performances sonores exceptionnelles et EIN de -131 dBu (pondéré) à un gain maximal.

La puissance fantôme 48 V est disponible par voie pour les microphones condenseurs.

---

## Caractéristiques techniques

### Généraux

| Paramètre                                       | Valeur                                                                                                         | Conditions / Notes                           |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Chaînes d'entrée                                | 8                                                                                                              | Balancé ; micro / ligne commutable par canal |
| Plage dynamique (pondérée)   | > 123 dB                                                                                                       |                                              |
| THD+N (pondéré)              | < -117 dB / 0.00014%                                                  | À -3 dBFS                                    |
| Fréquence de réponse                            | 10 Hz – 20 kHz, ±0.1 dB                                                                        | Tous les paramètres de gain                  |
| Précision du gain                               | ±0,1 dB                                                                                                        | Tous les paramètres de gain                  |
| Taux d'échantillonnage (PCM) | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                              |
| Taux d'échantillonnage (DSD) | 2,8224 MHz (DSD 64), 5,6448 MHz (DSD 128)                                |                                              |
| Résolution d'échantillonnage                    | 5 bits sigma-delta à 5,645 ou 6,144 MHz ; sortie PCM 24 bits                                                   |                                              |
| Longueur du mot en cours de traitement          | 32 bits                                                                                                        | Filtrage basé sur FPGA                       |
| Consommation d'énergie                          | 11 W max                                                                                                       |                                              |

### Mode de saisie de ligne

| Paramètre                     | Valeur                            | Conditions / Notes                                                  |
| ----------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| Niveau de saisie maximum      | -9 à +30 dBu                      | Ajustable en 0.1 dB pas                             |
| Gagner des étapes pour 0 dBFS | 9, 12, 15, 18, 21, 24, 27, 30 dBu | Étapes de 3 dB basées sur le Relais ; réglage interétapes numérique |
| Impédance d'entrée            | > 10 kΩ.          |                                                                     |
| CMRR                          | > 120 dB                          | À 1 kHz                                                             |

### Mode de saisie du microphone

| Paramètre                             | Valeur                | Conditions / Notes                                      |
| ------------------------------------- | --------------------- | ------------------------------------------------------- |
| Puissance fantôme                     | 48V                   | Commutable par canal                                    |
| Impédance d'entrée                    | 3 kΩ. |                                                         |
| EIN (pondéré)      | −131 dBu              | À la source de 0 €), (entrée courte) |
| Portée de gain analogique             | -3 à +45 dB           | Étapes de 3 dB basées sur un Relais                     |
| Gamme de gain numérique               | 0 à +39 dB            | Gain numérique supplémentaire                           |
| Portée de gain de DADman totale       | -18 à +72 dB          |                                                         |
| Niveau d'entrée maximum à -18 dB gain | +21 dBu               | Avant de couper                                         |

### Table de gain du microphone

| Gain DADman (dB) | Gain analogique (dB) | Gain numérique (dB) | Input Overload (dBu) | Bruit de sortie (dBFS A) | EIN (dBu A) |
| ----------------------------------- | --------------------------------------- | -------------------------------------- | --------------------------------------- | ------------------------------------------- | ------------------------------ |
| −18                                 | −3                                      | 0                                      | +21                                     | −123.8                      | −102.8         |
| −15                                 | 0                                       | 0                                      | +18                                     | −123.3                      | −105.3         |
| −12                                 | +3                                      | 0                                      | +15                                     | −123.2                      | −108.2         |
| −9                                  | +6                                      | 0                                      | +12                                     | −123.2                      | −111.2         |
| −6                                  | +9                                      | 0                                      | +9                                      | −122.8                      | −113.8         |
| −3                                  | +12                                     | 0                                      | +6                                      | −122.8                      | −116.8         |
| 0                                   | +12                                     | 0                                      | +3                                      | −122.2                      | −119.2         |
| +3                                  | +18                                     | 0                                      | 0                                       | −122.0                      | −122.0         |
| +6                                  | +21                                     | 0                                      | −3                                      | −120.8                      | −123.8         |
| +9                                  | +24                                     | 0                                      | −6                                      | −120.3                      | −126.3         |
| +12                                 | +27                                     | 0                                      | −9                                      | −118.5                      | −127.5         |
| +15                                 | +30                                     | 0                                      | −12                                     | −117.3                      | −129.3         |
| +18                                 | +33                                     | 0                                      | −15                                     | −114.8                      | −129.8         |
| +21                                 | +36                                     | 0                                      | −18                                     | −113.0                      | −131.0         |
| +24                                 | +39                                     | 0                                      | −21                                     | −110.2                      | −131.2         |
| +27                                 | +42                                     | 0                                      | −24                                     | −107.8                      | −131.8         |
| +30                                 | +45                                     | 0                                      | −27                                     | −104.8                      | −131.8         |
| +33                                 | +45                                     | +3                                     | −27                                     | −107.8                      | −131.8         |
| +36                                 | +45                                     | +6                                     | −27                                     | −110.8                      | −131.8         |
| +72                                 | +45                                     | +39                                    | −27                                     | −68.8                       | −131.8         |

> **Note:** Lors des réglages de gain numérique supérieurs à +30 dB DADman, le gain analogique est fixé à +45 dB. L'augmentation du gain numérique au-dessus de ce point réduit la plage dynamique efficace mais maintient le plancher EIN à -131.8 dBu A.

---

## Connexions

| Port                 | Connecteur | Signal         | Notes                                                                              |
| -------------------- | ---------- | -------------- | ---------------------------------------------------------------------------------- |
| Entrée micro / ligne | Femme DB25 | 8 ch équilibré | Tascam pinout; mic: 48 V fantôme; ligne: à +30 dBu |

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

> **ATTENTION :** Si la puissance fantôme de 48 V est activée sur n'importe quel canal, désactivez-le dans DADman avant de brancher ou de déconnecter des micros ou des câbles pour éviter les transitoires qui peuvent endommager les capsules microphones.

1. Retirez le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la CARD-M8 dans les guides de créneaux, étiquetez le côté vers le haut, jusqu'à ce que les sièges du connecteur de bord soient complets.
4. Fixer le support avant avec la vis retenue.
5. Rebranchez le câble réseau et l'alimentation sur le châssis.
6. Ouvrir DADman — la carte apparaît comme des entrées de micro/ligne dans la vue de routage d'E/S. Réglez chaque canal en mode Micro ou Ligne selon les besoins.

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
