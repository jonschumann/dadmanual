---
title: "Chapitre 1 — Introduction"
sidebar_label: "Ch. 1 — Introduction"
sidebar_position: 2
---

# Chapitre 1 — Introduction

> **Produit :** Digital Audio Danemark AX64

---

## Aperçu du produit 1.1

L'AX64 est une interface audio en rackmount Thunderbolt 3 ou Ethernet 2U avec jusqu'à huit emplacements de carte d'extension analogique DB25. Il est couramment utilisé comme boîtier d'étage, unité d'E/S satellite, ou point de terminaison audio Ethernet autonome dans les systèmes distribués.

**Connexion à l'hôte :** Thunderbolt 3 ou Ethernet
**Facteur de forme :** 2U rackmount
**Canaux audio :** Jusqu'à 64×64 canaux analogiques (dépendants)

---

## 1.2 Fonctionnalités clés

![AX64 — panneau frontal](/img/panel-ax64-front-clean.png)
_AX64 — panneau frontal_

![AX64 — panneau arrière](/img/panel-ax64-rear-clean.png)
_AX64 — panneau arrière_

- **Facteur de forme:** 2U rackmount, 19"
- **Extension :** 8 emplacements de carte d'extension de la prise chaude — jusqu'à 1,024×1,024 canaux d'E/S
- **Thunderbolt 3:** 2 × USB-C — 256 canaux à 48/96 kHz; puissance du bus de 15 W par port
- **Dante AoIP:** Intégrée — 256 canaux à 48 kHz, 128 canaux à 96 kHz
- **MADI:** MADI / O coaxial intégré — 64 canaux à 48 kHz
- **ADAT / S/PDIF :** ADAT/SMUX intégrés (16 ch) et S/PDIF (2 ch)
- **DADlink:** 2 × Cages SFP — DADlink (jusqu'à 256×256 ch) ou MADI optical
- **Synchronisation :** E/S d'horloge Word (BNC, 75 €), entrée de rafale noire vidéo
- **Routage :** 1 872×1,872 matrice; processeur de somme 512×64 ; égaliseur SPQ de 1 024-filtres ; virgule flottante de 28 bits
- **Latence:** 7 échantillons de retard interne, 3–31 échantillons réglables; toutes les sorties alignées sur le temps et la phase
- **Contrôle :** Logiciel DADman (macOS et Windows); Compatible Avid EuCon ; Gigabit Ethernet
- **Alimentation:** Norme Dual PSU; entrée réseau redondante optionnelle (AX64-BASE-RPS)
- **Poids / profondeur:** 5,5 kg / 12,2 lbs; profondeur de châssis 34,5 cm / 13,6 cm

---

## 1.3 Contenu de la Boîte

_[Placeholder — liste tous les articles inclus dans la boîte de livraison standard. Vérifier par rapport à la liste d'emballage actuelle des opérations.]_

| Élément                                                                            | Quantité |
| ---------------------------------------------------------------------------------- | -------- |
| Unité AX64                                                                         | 1        |
| Câble d'alimentation IEC C13                                                       | 1        |
| Guide de démarrage rapide                                                          | 1        |
| _[Objets supplémentaires TBC]_ | —        |

---

## 1.4 Numéros de pièce et commande

| Numéro de la pièce | Libellé                                                  |
| ------------------ | -------------------------------------------------------- |
| BASE AX64          | AX64 — PSU simple et standard                            |
| AX64-RPS de base   | AX64 — avec une PSU redondante (dual) |

### Accessoires optionnels

Cartes d'extension (8 emplacements disponibles) :

| Numéro de la pièce | Libellé                                          |
| ------------------ | ------------------------------------------------ |
| CARTE L8           | Carte d'entrée ligne AD 8 canaux                 |
| CARTE M8           | Carte d'entrée de micro / ligne 8 canaux AD      |
| CARTE DA8          | Carte de sortie DA 8 canaux                      |
| DANTE DE CARTE     | Carte audio réseau 128 canaux Dante / AES67      |
| CARD-2MADI-SO      | Carte d'interface MADI double 64 canaux avec SRC |
| RAVENNE CARTE      | Carte 128-Canal Ravenne / AES67 / ST 2110-30     |

Pour les spécifications et l’installation de la carte, voir [Cartes d’extension] (../../expansion-cards/).

---

## 1.5 Firmware and Software Compatibility

_[Placeholder — version minimale du micrologiciel, version DADman compatible).]_

| Composant              | Version minimale                  |   |
| ---------------------- | --------------------------------- | - |
| Firmware AX64          | TBC                               |   |
| DADman                 | v5.8 ou ultérieur |   |
| Pilote DAD Thunderbolt | TBC                               |   |

---

## Références croisées

- [Recueil — Sécurité & Conventions] (./fm-safety) — Lire avant l'installation
- [Ch. 3 — Installation](./ch03-installation) — Installation et configuration initiale
- [Manuel utilisateur DADman — Chapitre 4](/hardware-description) — Aperçu de l'intégration des logiciels
