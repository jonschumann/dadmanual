---
title: "CARD-RAVENNA — Interface 128-canal Ravenne / AES67 / ST 2110-30"
sidebar_label: "RAVENNE CARTE"
sidebar_position: 7
---

# CARD-RAVENNA — RAVENNE à 128 canaux / Carte d’interface AES67 / ST 2110-30

> **RESPONSABIL:** CARD-RAVENNA  
> **Source:** Feuille de spécification CARD-RAVENNA, Émission juin 2026

---

## Aperçu

La CARD-RAVENNA fournit 128 canaux bidirectionnels Ravenna, AES67 et SMPTE ST 2110-30 sur connectivité IP pour tout châssis DAD compatible. Deux ports réseau RJ45 peuvent être configurés en tant que réseau commuté ou avec ST 2022-7 Seamless Protection Switching (SPS) pour une redondance sans hitless sur les installations à double réseau.

La carte est entièrement interopérable avec Ravenne, AES67, et ST 2110-30 écosystèmes et supporte la découverte et le contrôle standards de l'industrie via WebUI, NMOS IS-04/IS-05, SAP, ANEMAN et JSON API. PTPv2 (IEEE 1588-2008) est supporté en mode Master et Slave.

La conversion de débit d'échantillonnage (SRC) peut être activée sur les chemins d'entrée et de sortie conjointement, ce qui permet à la carte de fonctionner de manière asynchrone à partir de la fréquence d'échantillonnage du châssis de l'hôte.

---

## Caractéristiques techniques

| Paramètre                                       | Valeur                                                                                                         | Conditions / Notes                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Chaînes d'entrée                                | 128                                                                                                            | À 44,1 kHz / 48 kHz (1FS)                                  |
| Chaînes de sortie                               | 128                                                                                                            | À 44,1 kHz / 48 kHz (1FS)                                  |
| Mise à l'échelle du nombre de canaux            | Écailles avec taux d'échantillonnage                                                                           | Des taux d'échantillonnage plus élevés réduisent le nombre de canaux par flux |
| Flux de Ravenne / AES67                         | Jusqu'à 64 bidirectionnels                                                                                     |                                                                               |
| Taux d'échantillonnage                          | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |                                                                               |
| Norme réseau                                    | 1000BASE-T                                                                                                     |                                                                               |
| Ports réseau                                    | 2 × RJ45                                                                                                       | Basculé ou ST 2022-7 SPS redondant                                            |
| Redondance                                      | ST 2022-7 Interrupteur de Protection sans fil                                                                  | Basculement immaculé sur le double réseau                                     |
| Synchronisation                                 | PTPv2 (IEEE 1588-2008) — Maître ou esclave                                                  | Ou l'horloge interne du système                                               |
| AES67                                           | Supporté                                                                                                       |                                                                               |
| ST 2110-30                                      | Supporté                                                                                                       |                                                                               |
| NMOS                                            | IS-04 (découverte) et IS-05 (gestion de connexion)                       |                                                                               |
| Découverte / Contrôle                           | WebUI, NMOS, Ravenna, SAP, ANEMAN, JSON API                                                                    |                                                                               |
| Conversion de taux d'échantillonnage            | Sélectionnable en entrée et en sortie conjointement                                                            |                                                                               |
| latence du SRC (48 → 96 kHz) | Environ 0,8 ms d'entrée / sortie de 1,1 ms                                                                     |                                                                               |
| latence du SRC (96 → 48 kHz) | Environ 0,8 ms d'entrée / sortie de 1,1 ms                                                                     |                                                                               |
| Consommation d'énergie                          | 7,5 W                                                                                                          |                                                                               |

---

## Connexions

| Port                                   | Connecteur | Signal     | Notes                                 |
| -------------------------------------- | ---------- | ---------- | ------------------------------------- |
| Réseau (principal)  | RJ45       | 1000BASE-T | Ravenne / AES67 / ST 2110-30 primaire |
| Réseau (secondaire) | RJ45       | 1000BASE-T | ST 2022-7 port redondant ou commuté   |

---

## Configuration du réseau

**Mode commuté** — Les deux ports fonctionnent comme un commutateur intégré, permettant la topologie en marguerite sans interrupteur externe.

**ST 2022-7 SPS mode** — Chaque port se connecte à un réseau indépendant. ST 2022-7 Le commutateur de protection sans heurt fournit un basculement sans hitless — si un chemin réseau échoue, l'audio continue sans interruption par l'autre. Ce mode nécessite un commutateur dédié à chaque réseau.

Configurez le mode réseau et le rôle PTP (Master / Slave) via l'interface WebUI de la carte ou le contrôleur NMOS.

---

## Découverte et contrôle

CARD-RAVENNA prend en charge plusieurs interfaces de découverte et de contrôle :

| Interface  | Objectif                                            |
| ---------- | --------------------------------------------------- |
| WebUI      | Configuration et statut basés sur le navigateur     |
| NMOS IS-04 | Découverte d'appareils et de ressources             |
| NMOS IS-05 | Gestion des connexions (routage) |
| Ravenne    | Découverte et contrôle natifs de Ravenne            |
| SAP        | Annonce de session (AES67 / SDP) |
| ANNEE      | Intégration du gestionnaire de réseau ANEMAN        |
| JSON API   | Configuration programmatique                        |

---

## Installation

> **AVERTISSEMENT :** Toujours éteindre le châssis et débrancher le câble réseau avant d'installer ou de retirer les cartes d'extension.

1. Retirez le châssis et débranchez le câble secteur.
2. Retirez le panneau de vidange de la fente cible (conserver la vis).
3. Faites glisser la CARD-RAVENNA dans les guides de créneaux jusqu'à ce que les sièges du connecteur de bord soient complets.
4. Fixer le support avant avec la vis retenue.
5. Connectez les câbles Ethernet aux ports RJ45 comme requis pour la topologie de votre réseau.
6. Rebranchez le câble réseau et l'alimentation sur le châssis.
7. Ouvrir DADman — la carte apparaît comme une interface AoIP dans la vue de routage d'E/S.
8. Accédez à l'interface WebUI de la carte pour une configuration avancée du réseau et du PTP.

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
