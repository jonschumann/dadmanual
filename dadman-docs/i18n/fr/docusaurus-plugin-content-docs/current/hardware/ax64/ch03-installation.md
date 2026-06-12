---
title: "Chapitre 3 — Installation"
sidebar_label: "Ch. 3 — Installation"
sidebar_position: 4
---

# Chapitre 3 — Installation

> **Produit :** Digital Audio Danemark AX64

> **Avant de commencer:** Lisez [le devant- la sécurité et les conventions](./fm-safety) avant d'installer cette unité.

---

## 3.1 Exigences du site

_[Placeholder — exigences environnementales : température, humidité, évacuation de ventilation.]_

| Paramètre                     | Caractéristiques                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------- |
| Température de fonctionnement | 0 °C à 40 °C (32 °F à 104 °F)                                 |
| Température du stockage       | -20 °C à 60 °C                                                                   |
| Humidité relative             | 20 % à 80 % (non-condensation)                                |
| Délai de ventilation          | Minimum 1U (44 mm) au-dessus et au-dessous de l'unité en rack |

---

## 3.2 Montage de Rack

_[Placeholder — procédure de montage de rack. Inclure les numéros de pièce et les spécifications de couple du matériel.]_

L'AX64 est une unité de montage en rack de 2U qui se monte directement dans un rack de 19 pouces standard avec les oreilles de rack fournies.

1. Attachez les oreilles de la rampe à l’unité à l’aide des vis fournies.
2. Placez l'unité dans le porte-bagages à l'endroit souhaité.
3. Fixez avec des vis de rack dans des écrous de cage ou des bandes de rack filetées.

> **PRÉCAUTION :** Utilisez les quatre vis de rack. Ne comptez pas sur moins de quatre points d'attachement.

---

## 3.3 Connexion d'alimentation

_[Placeholder — procédure de raccordement.]_

Internal. IEC C14 inlet. 100-240 V AC, 50/60 Hz, auto-rangement. UPS facultative redondante disponible.

1. Connectez un câble d'alimentation C13 IEC approprié à l'entrée C14 de l'appareil.
2. Connectez l'autre extrémité à une prise réseau mise à la terre.
3. Allumez l'appareil à l'aide du bouton d'alimentation du panneau avant.

> **AVERTISSEMENT :** Se connecte uniquement à une prise principale correctement mise à la terre ou à la terre. Ne défaites pas la connexion au sol.

---

## 3.4 Installation du pilote Thunderbolt

Le pilote DAD Thunderbolt doit être installé sur l'ordinateur hôte avant que l'unité ne soit détectée par DADman.

_[Placeholder — procédure d'installation du pilote. Référence croisée vers le manuel DADman Ch. 3.]_

1. Téléchargez le Pilote DAD Thunderbolt à partir de [digitalaudio.dk](https://digitalaudio.dk/support).
2. Exécutez l'installateur et suivez les instructions à l'écran.
3. Redémarrez l'ordinateur lorsque vous y êtes invité.
4. Allumez l'unité et connectez le câble de Thunderbolt.
5. Ouvrir DADman — l'unité devrait apparaître dans la liste des périphériques.

> **AVIS :** Les paramètres de sécurité de Thunderbolt sur macOS peuvent obliger l'utilisateur à approuver le nouvel appareil Thunderbolt lors de la première connexion. Voyez le chapitre Installation de DADman pour plus de détails.

---

## 3.5 Démarrage initial

_[Placeholder — procédure de première puissance et étapes de vérification.]_

1. Confirmez que tous les câbles de signal sont déconnectés avant le premier démarrage d'alimentation.
2. Appliquer le pouvoir.
3. Observer les LED du panneau avant — voir [Ch. 2 — Description du panneau](./ch02-panel-description) pour les états LED attendus.
4. Connectez l'unité à l'ordinateur hôte (Thunderbolt 3 ou Ethernet).
5. Ouvrez DADman et confirmez que l'unité apparaît dans la liste des périphériques.

---

## Références croisées

- [Affaires premières — Sécurité](./fm-safety)
- [Ch. 2 — Description du panneau](./ch02-panel-description)
- [Manuel de l'utilisateur DADman — Ch. 3 — Installation](/installation) — Configuration de l'ordinateur hôte
