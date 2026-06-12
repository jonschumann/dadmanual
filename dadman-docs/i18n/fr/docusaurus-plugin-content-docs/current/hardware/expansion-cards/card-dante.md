---
title: "CARD-DANTE — Interface Dante / AES67 à 128 canaux"
sidebar_label: "DANTE DE CARTE"
sidebar_position: 5
---

# CARD-DANTE — Carte d’interface Dante / AES67 à 128 canaux

> **RESPONSABIL:** CARD-DANTE  
> **Source:** Feuille de spécification CARD-DANTE, Émission juin 2026

---

## Aperçu

La CARD-DANTE fournit 128 canaux bidirectionnels Dante et AES67 audio sur la connectivité IP pour tout châssis DAD compatible. Deux ports réseau RJ45 peuvent être configurés comme un réseau commuté (daisy-chain) ou comme un réseau Dante redondant avec des connexions indépendantes primaire et secondaire.

La carte est entièrement compatible avec l'écosystème Dante développé par Audinate, y compris Dante Domain Manager. La conversion de taux d'échantillonnage (SRC) peut être activée indépendamment pour les chemins d'entrée et de sortie, permettant à la carte de fonctionner de manière asynchrone à partir de la fréquence d'échantillonnage du châssis de l'hôte.

---

## Caractéristiques techniques

| Paramètre                                                          | Valeur                                                                             | Conditions / Notes                           |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| Chaînes d'entrée                                                   | 128                                                                                | À 44,1 kHz / 48 kHz (1FS) |
| Chaînes de sortie                                                  | 128                                                                                | À 44,1 kHz / 48 kHz (1FS) |
| Canaux à 2FS (88,2 / 96 kHz)                    | 64 en / 64 en sortie                                                               |                                              |
| Chaînes à 4FS (176.4 / 192 kHz) | 32 en sortie                                                                       |                                              |
| Flux dante                                                         | Jusqu'à 128 directions                                                             |                                              |
| Taux d'échantillonnage                                             | 44.1, 48, 88.2, 96, 176.4, 192 kHz |                                              |
| Norme réseau                                                       | 1000BASE-T                                                                         |                                              |
| Ports réseau                                                       | 2 × RJ45                                                                           | Basculé ou redondant                         |
| Mode réseau                                                        | Basculé ou redondant                                                               | Configurable dans le contrôleur Dante        |
| AES67                                                              | Supporté                                                                           | Découverte SAP                               |
| Gestionnaire de domaine Dante                                      | Supporté                                                                           |                                              |
| Conversion de taux d'échantillonnage                               | Sélectionnable sur entrée et sortie indépendamment                                 |                                              |
| Plage dynamique du SRC                                             | > 125 dB                                                                           | Point flottant 64 bits                       |
| latence du SRC (48 → 96 kHz)                    | Environ 0,8 ms d'entrée / sortie de 1,1 ms                                         |                                              |
| latence du SRC (96 → 48 kHz)                    | Environ 0,8 ms d'entrée / sortie de 1,1 ms                                         |                                              |
| Synchronisation                                                    | Horloge réseau Dante ou horloge système interne                                    |                                              |
| Consommation d'énergie                                             | 4,5 W                                                                              |                                              |

---

## Connexions

| Port                                         | Connecteur | Signal     | Notes                       |
| -------------------------------------------- | ---------- | ---------- | --------------------------- |
| Réseau (Dante principale) | RJ45       | 1000BASE-T | Port principal ou basculé   |
| Réseau (Dante secondaire) | RJ45       | 1000BASE-T | Port secondaire / redondant |

---

## Configuration du réseau

Les deux ports RJ45 sur CARD-DANTE peuvent être configurés en deux modes :

**Mode commuté** — Les deux ports servent de commutateur intégré à deux ports, permettant des topologies réseau en daisy-chain sans interrupteur externe. Les deux ports se connectent au même réseau Dante.

**Mode redondant** — Chaque port se connecte à un réseau Dante indépendant (primaire et secondaire). Dante échoue automatiquement sur le réseau secondaire si le chemin primaire échoue. Le mode redondant nécessite un commutateur sur chaque réseau.

Configurer le mode réseau en utilisant Dante Controller ou DADman.

---

## Installation

> **AVERTISSEMENT :** Toujours éteindre le châssis et débrancher le câble réseau avant d'installer ou de retirer les cartes d'extension.

1. Retirez le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la CARD-DANTE dans les guides de créneaux jusqu'à ce que les sièges du connecteur de bord soient complets.
4. Fixer le support avant avec la vis retenue.
5. Connectez les câbles Ethernet aux ports RJ45 au besoin.
6. Rebranchez le câble réseau et l'alimentation sur le châssis.
7. Ouvrir DADman et/ou Dante Controller — la carte apparaît comme un appareil Dante sur le réseau.

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
