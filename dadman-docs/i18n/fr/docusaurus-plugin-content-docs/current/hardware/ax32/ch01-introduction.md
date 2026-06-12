---
title: "Chapitre 1 — Introduction"
sidebar_label: "Ch. 1 — Introduction"
sidebar_position: 2
---

# Chapitre 1 — Introduction

> **Produit :** Digital Audio Danemark AX32  
> **REF :** AX32-BASE2

---

## Aperçu du produit 1.1

L'AX32 est une plate-forme d'E/S modulaires et de conversion de format 2U en rackmount. Il fournit jusqu'à 32 canaux d'E/S analogiques (16 en / 16 en sortie) via ses huit emplacements de carte d'extension à prise chaude, ainsi que les I/O coaxiaux MADI et les E/S AES3 intégrées. L'AX32 n'inclut pas d'interface d'hôte Thunderbolt ; il se connecte au réseau et est géré par DADman sur Gigabit Ethernet. L'AX32-BASE2 est la variante d'expédition actuelle.

**Connexion à l'hôte :** Gigabit Ethernet (contrôle DADman et audio du réseau)
**Facteur de forme:** 2U full-rack, 19"
**Canaux audio :** Jusqu'à 32 canaux analogiques (via des cartes d'extension) ; MADI 64 ch ; 16 ch AES3 intégré ; voies supplémentaires via des cartes d'extension audio réseau optionnelles

---

## 1.2 Fonctionnalités clés

![AX32 — front panel](/img/panel-ax32-front-clean.png)
_AX32 — front panel_

- **Facteur de forme:** 2U rackmount, 19"
- **Extension :** 8 emplacements de carte d'extension de la prise chaude — jusqu'à 1,024×1,024 canaux d'E/S
- **MADI:** MADI / O coaxial intégré — 64 canaux à 48 kHz
- **AES3:** I/O AES3 intégré — 16 canaux via 2 × DB25 (Tascam pinout)
- **Dante (facultatif) :** Via le module MOD-DANTE-BK3
- **DADlink (facultatif) :** Via le module MOD-MADI-DADLNK + SFP — jusqu'à 256×256 canaux
- **Synchronisation :** E/S d'horloge Word (BNC, 75 €), Entrée de rafale noire vidéo, entrée AES11
- **Routage :** Matrice 1,424×1,424 ; processeur de somme 256×32 ; virgule flottante 28 bits
- **Latence:** 7 échantillons de retard interne, 3–31 échantillons réglables; toutes les sorties alignées sur le temps et la phase
- **Contrôle :** Logiciel DADman (macOS et Windows); Compatible Avid EuCon ; Gigabit Ethernet
- **Alimentation:** Une seule entrée principale; une double norme PSU ; une entrée redondante optionnelle (AX32-RPS)
- **Refroidissement:** 2 × Ventilateurs internes à très faible bruit
- **Poids / profondeur:** 5.0 kg / 11.0 lbs; profondeur de châssis 35 cm / 13.8"

---

## 1.3 Contenu de la Boîte

_[Placeholder — liste tous les articles inclus dans la boîte de livraison standard. Vérifier par rapport à la liste d'emballage actuelle des opérations.]_

| Élément                                                                            | Quantité |
| ---------------------------------------------------------------------------------- | -------- |
| Unité AX32                                                                         | 1        |
| Câble d'alimentation IEC C13                                                       | 1        |
| Guide de démarrage rapide                                                          | 1        |
| _[Objets supplémentaires TBC]_ | —        |

---

## 1.4 Numéros de pièce et commande

| Numéro de la pièce | Libellé                                                               |
| ------------------ | --------------------------------------------------------------------- |
| AX32-BASE2         | AX32 — standard (sans interface hôte propriétaire) |

> **AVIS — Cycle de vie du produit.** L'AX32-BASE2 est un produit actif et est disponible auprès de distributeurs autorisés. Elle n'est plus activement commercialisée. Communiquez avec Digital Audio Danemark ou votre distributeur local pour connaître la disponibilité.

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

| Composant     | Version minimale                  |
| ------------- | --------------------------------- |
| Firmware AX32 | TBC                               |
| DADman        | v5.8 ou ultérieur |

---

## Références croisées

- [Recueil — Sécurité & Conventions] (./fm-safety) — Lire avant l'installation
- [Ch. 3 — Installation](./ch03-installation) — Installation et configuration initiale
- [Manuel utilisateur DADman — Chapitre 4](/hardware-description) — Aperçu de l'intégration des logiciels
