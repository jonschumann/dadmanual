---
title: "Chapitre 1 — Aperçu de l'introduction et du produit"
sidebar_label: "Ch. 1 — Introduction"
sidebar_position: 3
---

# Chapitre 1 — Aperçu de l'introduction et du produit

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte :** DADman v5.8.2 build 2  
> **Statut du chapitre :** Brouillon v0. — En attente d'examen technique par l'ingénierie DAD  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section             | Couvertures                                               | Pertinent pour        |
| ------------------- | --------------------------------------------------------- | --------------------- |
| 1.1 | Ce qu'est DADman et ce qu'il fait                         | Tous les utilisateurs |
| 1.2 | Capacités clés                                            | Tous les utilisateurs |
| 1.3 | Composants logiciels et leurs relations                   | Tous les utilisateurs |
| 1.4 | Matériel compatible                                       | Tous les utilisateurs |
| 1.5 | Compatibilité avec les familles de matériel et le clonage | Tous les utilisateurs |
| 1.6 | Comment utiliser ce manuel                                | Tous les utilisateurs |
| 1.7 | À propos de la technologie DAD / NTP                      | Tous les utilisateurs |

> **NOTE — Portée de ce manuel :** Ce manuel est écrit pour les utilisateurs du matériel DAD (Digital Audio Danemark). Tous les exemples utilisés, les captures d'écran et les procédures utilisent les produits DAD — principalement le Centre AX, le Core 256 et l'AX64 — comme plate-forme de référence. Avid MTRX, MTRX II et MTRX Studio sont des produits OEM qui utilisent le logiciel DADman et sont fonctionnellement identiques du point de vue du contrôle DADman ; les procédures de ce manuel s'appliquent de la même façon à ces produits. Les sujets spécifiques à Avid-hardware-specific (iLok, intégration Pro Tools, téléchargement du compte principal d'Avid) sont notés le cas échéant, mais ne sont pas au centre de ce document.

---

## 1.1 Qu'est-ce que DADman?

DADman est une application logicielle qui configure et contrôle le matériel audio professionnel du DAD (Digital Audio Danemark), Technologie NTP et Avid sur un réseau Ethernet standard. C'est le point de contrôle unique pour toutes les unités connectées — fournissant l'accès au gain d'entrée analogique, niveaux de sortie, routage, horloge, synchronisation et contrôle à partir d'une seule interface unifiée.

DADman est une interface **orientée sur les canaux**. Chaque unité connectée apparaît dans la liste des périphériques, et ses entrées, sorties, et les commandes de routage sont présentées comme un ensemble de bandes verticales — similaires dans le concept des bandes de canaux sur une console de mixage. Cela signifie que quelle que soit l'unité matérielle avec laquelle vous travaillez, l'interface DADman suit une mise en page cohérente.

### 1.1.1 Le principe fondamental : les paramètres en direct dans l'unité

> **REMARQUE:** C'est le concept architectural le plus important à comprendre avant d'utiliser DADman.

Tous les paramètres configurés dans DADman — routage, gain, niveaux de sortie, source de l'horloge, étiquettes de canaux, et tous les autres paramètres — sont **stockés dans l'unité matérielle elle-même**, pas dans le logiciel DADman ou sur l'ordinateur qui l'exécute. DADman lit l'état actuel de l'unité depuis le réseau et l'affiche ; quand vous faites un changement, DADman envoie ce changement à l'unité, qui le stock.

Cela a des conséquences pratiques:

- Si DADman est fermé ou que l'ordinateur est éteint, l'unité matérielle continue à fonctionner avec ses derniers paramètres enregistrés. L'audio passe sans interruption.
- Si DADman est ouvert et qu'une unité est trouvée sur le réseau, DADman affiche immédiatement l'état actuel de l'unité — même si ces paramètres ont été configurés pour la dernière fois sur un autre ordinateur.
- Pour récupérer les paramètres après une réinitialisation d'usine ou une mise à jour du firmware, vous devez recharger un fichier de configuration enregistré. Voir [Chapitre 7, Section 7.1 — Gestion de la session].

---

## 1.2 Capacités clés

DADman fournit les fonctionnalités de contrôle suivantes à travers le matériel compatible:

| Capacités                                                     | Libellé                                                                                                                                                                |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contrôle d'entrée analogique**                              | Gain micro/ligne, puissance fantôme (+48 V), pad, inversion de phase, étiquette de canal                                                            |
| **Contrôle de sortie analogique**                             | Niveau de sortie, muet, étiquetage de canaux, sélection de la plage de sortie (+18/+24 dBu)                                                         |
| **Matrice de routage**                                        | Matrice de routage de point de croix complet — jusqu'à 1 500 × 1 500 points de croix sur le matériel pris en charge                                                    |
| **Horloge et synchronisation**                                | Sélection du taux d'échantillon, sélection de la source de synchronisation, adaptation de l'horloge                                                                    |
| **Contrôle du moniteur**                                      | Surveiller les profils avec les sources, les sorties, les dépliants, le retard et le talkback                                                                          |
| **Contrôle multi-unités**                                     | Contrôlez plusieurs unités matérielles simultanément à partir d'une seule fenêtre DADman                                                                               |
| **Intégration EuCon**                                         | Compatible avec Avid EuControl pour contrôler l'intégration de la surface                                                                                              |
| **Pro Tools PRE emulation**                                   | Émulation de préampli MIDI pour unités MTRX                                                                                                                            |
| **Préréglages de routage (Control\|Pack)** | Jusqu'à 32 préréglages de routage par unité avec un changement automatique de déclenchement _(v5.8.0 et ultérieur)_ |
| **Groupes de gain de micros**                                 | Grouper plusieurs canaux d'entrée micro pour régler le gain simultané _(v5.8.1.6 et ultérieur)_     |
| **Sauvegarde des paramètres**                                 | Enregistrer et restaurer tous les paramètres de l'unité sur DADman Settings Files (`.dms`) sur l'ordinateur                                         |
| **clonage unité**                                             | Copier tous les paramètres d'une unité vers une autre dans la même famille de matériel                                                                                 |

---

## 1.3 Composants logiciels et leurs relations

DADman est une partie d'un système logiciel à deux composants. Comprendre la distinction entre les deux composants est essentiel pour une installation et un dépannage corrects.

### 1.3.1 Les deux composants

| Composant                        | Ce qu'il fait                                                                                                                                                                    | Requis pour                                           |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **DADman**                       | Configure et contrôle les unités matérielles sur Ethernet — routage, gain, surveillance, horloge                                                                                 | Tous les matériels supportés                          |
| **DAD Thunderbolt 3 conducteur** | Rend l'interface Thunder\|Core visible par l'ordinateur en tant que périphérique audio Core (macOS) ou ASIO (Windows) à utiliser dans DAWs | AX64, AX Center, Core 256, Avid MTRX série uniquement |

Ces deux applications sont **indépendantes**. Ils ne communiquent pas entre eux. Le pilote Thunderbolt 3 n'est pas nécessaire pour que DADman fonctionne, et DADman n'est pas nécessaire pour que le pilote Thunderbolt 3 présente l'interface audio à un DAW. Cependant, pour le fonctionnement complet du matériel Thunder\|Core — la configuration de l'unité _et_ l'enregistrement ou la lecture audio à travers celui-ci — les deux doivent être installés.

_[Placeholder: diagramme montrant les pilotes DADman et TB3 comme chemins parallèles entre l'ordinateur et l'unité matérielle — DADman communiquant par Ethernet, Pilote TB3 communiquant sur Thunderbolt 3]_

### 1.3.2 Chemins de Communication

Une unité Thunder\|Core connectée à un ordinateur utilise deux chemins de communication simultanés indépendants :

| Chemin d'accès           | Protocol     | Objectif                                                                   |
| ------------------------ | ------------ | -------------------------------------------------------------------------- |
| **Ethernet**             | TCP/IP       | Contrôle DADman — routage, gain, configuration                             |
| **Eclair de tonnerre 3** | PCIe sur TB3 | Transport audio — l'interface visible par votre DAW via Core Audio ou ASIO |

Le matériel uniquement Ethernet (AX32, DX32R, série Penta) n'utilise que le chemin Ethernet. Il n'y a pas de pilote Thunderbolt 3 pour ces unités, et elles n'apparaissent pas comme des interfaces audio sur l'ordinateur. L'audio de ces unités est transporté sur MADI, Dante ou AES3.

### 1.3.3 Historique des versions

| Exigences                                                          | Version minimale                                         |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| DADman pour Thunderbolt 3 support chauffeur                        | v5.6.7.1 |
| Support natif DADman avec Apple Silicon (ARM64) | 5.5.0                    |
| DADman avec Control\|Pack                                          | 5.8.0                    |
| DADman with Mic Gain Groupes                                       | v5.8.1 build 6           |
| DADman avec Ravenna Card et ST 2110-30 support                     | v5.8.2 version 2         |
| Dernière version DADman prenant en charge Windows 7 / 8            | 7.0 v5.0                 |
| Version actuelle (au moment de la publication)  | v5.8.2 version 2         |

---

## 1.4 Matériel Compatible

DADman contrôle le matériel de trois familles de produits : les produits DAD/NTP Technology et les produits Avid MTRX. La liste complète du matériel pris en charge au moment de la publication (DADman v5.8.2 build 2) est affichée ci-dessous.

> **NOTE :** Consultez toujours les notes de publication de votre version DADman spécifique pour confirmer la compatibilité avec les dernières révisions matérielles. La liste des matériels supportés peut être mise à jour entre les révisions manuelles.

### 1.4.1 DAD / NTP Technology Hardware

| Produit       | Catégorie                                   | Connexion à l'ordinateur        | Thunder\|Noyau | Matrice de routage                                                   |
| ------------- | ------------------------------------------- | ------------------------------- | -------------- | -------------------------------------------------------------------- |
| **Centre AX** | Interface analogique et numérique modulaire | Éclair de tonnerre 3 + Ethernet | Oui            | 1,024 × 1,024                                                        |
| **Core 256**  | Interface audio numérique                   | Éclair de tonnerre 3 + Ethernet | Oui            | [Pour confirmer] |
| **AX64**      | Interface audio modulaire                   | Éclair de tonnerre 3 + Ethernet | Oui            | [Pour confirmer] |
| **AX32**      | Système de conversion AD/DA                 | Ethernet uniquement             | Non            | [Pour confirmer] |
| **DX32R**     | E/S numériques et routeur                   | Ethernet uniquement             | Non            | 400 inputs                                                           |
| **AX24**      | Interface audio                             | Ethernet uniquement             | Non            | [Pour confirmer] |

### 1.4.2 NTP Technology Penta Series

| Produit        | Catégorie                            | Connexion à l'ordinateur | Thunder\|Noyau |
| -------------- | ------------------------------------ | ------------------------ | -------------- |
| **Penta 720**  | Unité de base d'E/S Modulaire        | Ethernet uniquement      | Non            |
| **Penta 721s** | Routeur et interface audio modulaire | Ethernet uniquement      | Non            |

### 1.4.3 Produits tiers

| Produit                 | Fabricant | Connexion à l'ordinateur        | Thunder\|Noyau | Version DADman requise                              |
| ----------------------- | --------- | ------------------------------- | -------------- | --------------------------------------------------- |
| **Dynaudio Control 01** | Dynaudio  | Éclair de tonnerre 3 + Ethernet | Oui            | v5.7.2 et plus tard |
| **Dynaudio Control 02** | Dynaudio  | Éclair de tonnerre 3 + Ethernet | Oui            | v5.8.2 et plus tard |

### 1.4.4 Avid MTRX Series

Les Avid MTRX, MTRX II et MTRX Studio sont des produits OEM fabriqués par DAD / NTP Technology et vendus par Avid. Ils utilisent DADman comme logiciel de contrôle et sont fonctionnellement identiques au matériel DAD du point de vue DADman. Ce manuel ne couvre pas des sujets spécifiques à Avid tels que la licence iLok, l'intégration de Pro Tools ou la gestion de comptes Master Avid.

> **NOTE:** Pour Avid MTRX, MTRX II et MTRX Studio, n'utiliser que la version de DADman approuvée pour votre matériel Avid, disponible sur votre compte principal Avid. Voir [Chapitre 3, Section 3.2 — Obtention du logiciel].

| Produit              | Connexion à l'ordinateur        | Thunder\|Noyau |
| -------------------- | ------------------------------- | -------------- |
| **Avid MTRX**        | Ethernet uniquement             | Non            |
| **Avid MTRX II**     | Éclair de tonnerre 3 + Ethernet | Oui            |
| **Studio MTRX Avid** | Éclair de tonnerre 3 + Ethernet | Oui            |

_[En attente de l'ingénierie DAD : capacités de routage pour AX32, AX64, Core 256, AX24, Penta 720, Penta 721 ; confirmation de la méthode de connexion AX24]_

---

## 1.5 Familles matérielles et compatibilité de clonage

DADman organise du matériel compatible en trois **familles**. L'appartenance à la famille détermine quelles unités peuvent échanger les paramètres les uns avec les autres en utilisant la fonction **Clone**.

Le clonage permet de copier tous les paramètres d'une unité vers une autre. Ceci est utile pour dupliquer une configuration fiable sur plusieurs unités identiques, ou pour restaurer les paramètres sur une unité de remplacement. Le clonage n'est autorisé qu'entre les unités de la **même famille**.

| Famille       | Membres                                                 | Notes                                           |
| ------------- | ------------------------------------------------------- | ----------------------------------------------- |
| **Famille 1** | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s | Architecture de routage de génération originale |
| **Famille 2** | MTRX II · AX64 · AX Center · Core 256                   | Génération de Noyau Thunder\|Génération         |
| **Famille 3** | Studio MTRX                                             | Autonomie                                       |

> **NOTE — Clonage entre les unités non identiques :** Pour de meilleurs résultats, les unités source et cible doivent être configurées de manière identique (les mêmes cartes dans les mêmes emplacements). Les paramètres pour les cartes présentes dans l'unité source mais absents dans la même position d'emplacement dans l'unité cible sont réglés à des valeurs par défaut sur la cible. Les paramètres pour les cartes présentes dans la cible mais absents dans la source ne sont pas affectés.

---

## 1.6 Comment utiliser ce manuel

Ce manuel est organisé pour supporter la lecture séquentielle et de type référence.

**Si vous êtes nouveau sur DADman :** Lisez les Chapitres 1 à 3 dans l'ordre, puis suivez le Chapitre 6 (Getting Started) pas à pas. Retournez aux chapitres 4 à 5 pour l'arrière-plan matériel et au chapitre 7 lorsque vous avez besoin de conseils opérationnels détaillés.

**Si vous êtes un utilisateur expérimenté à la recherche d'un sujet spécifique :** Utilisez l'index de la section en haut de chaque chapitre, ou l'indice complet de l'annexe H.

**Conventions de documents utilisées tout au long de ce manuel :**

| Convention                                                                 | Sens                                                                                       |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Bold text**                                                              | Noms de contrôle matériel, éléments de menu, étiquettes de boutons, noms d'onglets         |
| `Texte Monoespace`                                                         | Noms de fichiers, extensions de fichiers, chemins de dossiers, entrée en ligne de commande |
| _[Placeholder]_        | Contenu à confirmer par l'ingénierie DAD ou ajouté lors de l'examen                        |
| _(v5.8.0 et ultérieur)_ | Disponibilité des fonctionnalités — indique la version DADman minimale requise             |
| _(AX32 / Famille 1)_                                    | Variation matérielle — le paramètre s'applique spécifiquement au matériel nommé            |

Les **Références croisées** utilisent le format [Chapitre X, Section X.X — Titre] pour pointer vers le contenu lié dans ce manuel.

---

## 1.7 A propos de DAD / Technologie NTP

Digital Audio Danemark (DAD) est une marque de NTP Technology A/S, basée à Gentofte, au Danemark. NTP Technology conçoit et fabrique du matériel audio professionnel pour les applications de diffusion, de post-production, de son live et de studio.

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

Web: www.digitalaudio.dk  
Support : www.digitalaudiosupport.com  
E-mail: info@digitalaudio.dk

---

## Références croisées

- **Chapitre 2 — Exigences du système :** Compatibilité de l'OS, spécifications matérielles minimales, contenu du paquet
- **Chapitre 3 — Installation :** Installation de DADman et du driver Thunderbolt 3
- **Chapitre 5 — Flux de signaux et architecture :** Comment DADman communique avec le matériel; Aperçu de l'horloge
- **Chapitre 6 — Pour commencer :** Première utilisation étape par étape
- **Chapitre 7 — Opération:** Référence complète de l'interface et workflows opérationnels
- **Annexe A — Spécifications :** Compléter les tables de spécifications matérielles

---

_[En attente d'ingénierie DAD :]_  
_— Capacités de matrice de routage pour AX32, AX64, Core 256, AX24, Penta 720, Penta 721s_  
_— Confirmation de la méthode de connexion AX24_  
_— Texte d'introduction pour la section About DAD / NTP Technology section_
