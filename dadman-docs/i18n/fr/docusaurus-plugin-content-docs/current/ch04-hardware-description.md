---
id: format@@0 ch04-hardware-description
title: "Chapitre 4 — Description du matériel"
sidebar_label: "Ch. 4 — Description du matériel"
sidebar_position: 6
slug: /fr/hardware-description
---

# Chapitre 4 — Description du matériel

> **Document:** Manuel utilisateur DADman  
> **Statut du chapitre :** Brouillon v0. — Photos de panneaux et données de port intégrées ; Photo du panneau arrière Core 256 et section junior DAD en attente de  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section             | Couvertures                                                      | Pertinent pour           |
| ------------------- | ---------------------------------------------------------------- | ------------------------ |
| 4.1 | AX Center — panneau avant et arrière                             | Utilisateurs AX Center   |
| 4.2 | Core 256 — panneau avant et arrière                              | Utilisateurs du cœur 256 |
| 4.3 | AX 64 — panneau avant et arrière                                 | Utilisateurs AX 64       |
| 4.4 | MOM — contrôle la référence                                      | Utilisateurs MOM         |
| 4.5 | DAD Junior — panneau avant et arrière                            | Utilisateurs DAD Junior  |
| 4.6 | Penta 720 / 721 s — panneau avant et arrière                     | Penta users              |
| 4.7 | Référence d'état de la LED (tous les modèles) | Tous les utilisateurs    |

> **AVIS — Comment utiliser ce chapitre :** Ce chapitre est une référence matérielle. Il identifie chaque contrôle physique et chaque connecteur de chaque produit pris en charge. Pour les procédures de routage et de configuration du signal, voir [Chapitre 7 — Opération]. Pour l'installation et le câblage, voir [Chapitre 3 — Installation].

---

## Centre AX 4.1

### Aperçu de la version 4.1.1

Le AX Center est une interface audio Thunderbolt à montage en rack de 1U dans la famille de produits Thunder\|Core. Il fournit deux entrées micro/ligne/instrument et sorties de moniteur stéréo directement sur le panneau avant, avec MADI, ADAT, horloge à mots, slots d'extension analogiques, et deux ports Thunderbolt 3 à l'arrière. Toutes les opérations de routage, de gain, de surveillance et de configuration sont effectuées via DADman via Ethernet. Le Centre AX héberge également le MOM (Monitor Operating Module) lorsqu'il est utilisé comme contrôleur de moniteur de bureau — le MOM se connecte au Centre AX via USB-C.

### Aperçu du panneau 4.1.2

![AX Center front panel](/img/panel-ax-center-front.png)
_Figure 4.1 — AX Center front panel. Les appels numérotés correspondent à la Section 4.1.3._

![AX Center rear panel](/img/panel-ax-center-rear.png)
_Figure 4.2 — Panneau arrière AX Center. Les appels numérotés correspondent à la Section 4.1.4._

### 4.1.3 Contrôles du panneau avant

| Réf. | Étiquette                   | Type de texte                                   | Fonction                                                                                                                                                                                                                                                                                                                          |
| -------------------- | --------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —                    | **DAD**                     | Logo lumineux                                   | Éclairage bleu; indique la mise sous tension                                                                                                                                                                                                                                                                                      |
| 1                    | **Puissance**               | Bouton poussoir lumineux                        | Lance la séquence de mise sous tension/arrêt contrôlée. Maintenir pendant 5 secondes pour forcer l'extinction forcée.                                                                                                                                                                             |
| —                    | **Int.**    | Indicateur LED                                  | Laisser lorsque l'appareil est verrouillé sur sa propre référence d'horloge interne                                                                                                                                                                                                                                               |
| —                    | **Ext.**    | Indicateur LED (vert)        | Laisser lorsque l'unité est verrouillée à une source d'horloge externe (horloge de mot, MADI, ADAT, ou Dante)                                                                                                                                                                                                  |
| —                    | **Erreur.** | Indicateur LED (rouge)       | Lit lorsqu'une erreur d'horloge, une perte de synchronisation ou une erreur interne est détectée. Voir [Section 4.7 — Référence d'état LED ] et [Chapitre 9 — Dépannage]. |
| 2                    | **Mic/Inst 1**              | Combo XLR/TRS (verrouillage) | Entrée micro/ligne/instrument, canal 1. Accepte XLR (mic/ligne équilibrée) ou TRS/TS de 6,35 mm (ligne/instrument).                                                                                                                                         |
| —                    | **P48**                     | Indicateur LED                                  | Lit lorsque la puissance fantôme (+48V) est active sur ce canal d'entrée                                                                                                                                                                                                                                       |
| —                    | \*\*Micro \*\*              | Indicateur LED                                  | Lit lorsque l'entrée est configurée comme une entrée de microphone                                                                                                                                                                                                                                                                |
| —                    | **Installer**               | Indicateur LED                                  | Lit lorsque l'entrée est configurée comme une entrée haute impédance                                                                                                                                                                                                                                                              |
| 3                    | **Mic/Inst 2**              | Combo XLR/TRS (verrouillage) | Entrée micro/ligne/instrument, canal 2. Même spécification que le canal 1.                                                                                                                                                                                                                        |
| 4                    | **PV 1**                    | Jack TRS 6,35 mm                                | Sortie casque 1. Niveau contrôlé par DADman ou MOM.                                                                                                                                                                                                                                               |
| 5                    | **PV 2**                    | Jack TRS 6,35 mm                                | Sortie du casque 2. Niveau contrôlé par DADman ou MOM.                                                                                                                                                                                                                                            |

### 4.1.4 Panneau arrière

| Réf. | Étiquette                                           | Connecteur                                           | Fonction                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1                    | **Puissance**                                       | Entrée IEC C14                                       | Entrée(s) électrique(s) 100-240 V AC, 50/60 Hz, RPF interne. Connectez un câble d'alimentation IEC C13 standard.                                                                                                                                                                                         |
| 2                    | **EXPANSION** (paire supérieure) | Baie de 2× SFP                                       | DADLink / extension optique MADI. Accepte les modules SFP pour la connexion à d'autres unités DAD via le câble optique actif (DADLink câble) ou pour les E/S MADI optiques.                                                                                                                                                 |
| 3                    | **NET 1 / NET 2**                                   | 2× RJ45 + baie SFP                                   | Réseau de contrôle Ethernet (NET 1, NET 2: 100/1000BASE-T). La baie SFP au-dessous de NET 1/NET 2 accepte un module SFP pour une connexion optionnelle au réseau fibre. Connectez NET 1 ou NET 2 à votre réseau de contrôle DADman — un seul port est requis pour le fonctionnement normal. |
| 4                    | **THUNDERBOLT 1** (upper)        | USB-C (Thunderbolt 3)             | Connexion Primaire Thunderbolt 3 à l'ordinateur. Connectez ce port au port Thunderbolt 3 ou USB4 de l'ordinateur à l'aide d'un câble évalué à 20 Gbps. Transporte jusqu'à 256 canaux audio bidirectionnels à fréquence d'échantillonnage standard.                                                                             |
| 5                    | **THUNDERBOLT 2** (inférieur)    | USB-C (Thunderbolt 3)             | Bras de tonnerre 3 chaîne de marguerite / passthrough. Connectez le prochain dispositif Thunderbolt dans la chaîne.                                                                                                                                                                                                                            |
| 6                    | **WC/VBB IN**                                       | BNC, 75 Ω.                           | Horloge Word ou Vidéo Black Burst. Accepte l'horloge mot (1×, 256×, ou les formats de synchronisation vidéo). Engager la résiliation de 75 €), sur le dernier appareil dans une chaîne d'horloge de mots.                                                                                                   |
| 7                    | **WC HAUT**                                         | BNC, 75 Ω.                           | Sortie de l'horloge de mot. Affiche la référence actuelle de synchronisation de l'unité comme un signal d'horloge mot.                                                                                                                                                                                                                         |
| 8                    | \*\*MADI DANS \*\*                                  | BNC, 75 Ω.                           | MADI input (coaxial). Accepte AES10 MADI au format image 56- ou 64 canaux. À 96 kHz, le nombre maximum de canaux est de 32.                                                                                                                                                                                 |
| 9                    | **MADI HOR**                                        | BNC, 75 Ω.                           | MADI output (coaxial). Transmet MADI au format d'images configuré et à la fréquence d'échantillon.                                                                                                                                                                                                                          |
| 10                   | **ADAT OUT 1 / 2**                                  | 2× TOSLINK (optique)              | Sorties de Lightpipe ADAT. Jusqu'à 8 canaux par port à 44,1/48 kHz; 4 canaux par port à 88,2/96 kHz (S/MUX).                                                                                                                                                                                                                |
| 11                   | **ADAT DANS 1 / 2**                                 | 2× TOSLINK (optique)              | ADAT entrées Lightpipe Le même nombre de canaux que les sorties ADAT.                                                                                                                                                                                                                                                                                          |
| 12                   | **MONITEUR 1**                                      | 2× TRS 6,35 mm (L/R)              | Sortie du moniteur stéréo équilibré 1. Niveau contrôlé par DADman ou MOM.                                                                                                                                                                                                                                                                      |
| 13                   | **MONITEUR 2**                                      | 2× TRS 6,35 mm (L/R)              | Ecran stéréo équilibré sortie 2. Niveau contrôlé par DADman ou MOM.                                                                                                                                                                                                                                                                            |
| 14                   | **EMPLACEMENT 1 / EMPLACEMENT 2**                   | Emplacement d'extension 2x (DB25) | Emplacements d'extension d'E/S analogiques. Chaque emplacement accepte une carte d'extension DAD fournissant 8 canaux A/D, D/A ou E/S numériques. Le type de carte et l'assignation de canal sont configurés dans DADman.                                                                                                      |

> **AVIS — Câble de foudre requis :** La connexion Thunderbolt 3 nécessite un câble évalué à 20 Gbps ou plus. Les câbles standard USB-C ne sont pas évalués pour les vitesses Thunderbolt 3 et ne fonctionneront pas de manière fiable. Utilisez le câble fourni avec l'unité ou un câble certifié Thunderbolt 3 / Thunderbolt 4.

> **AVIS — Arrêt de l'horloge du mot :** Le port WC/VBB IN doit être terminé (75 €), lorsque le Centre AX est le dernier appareil d'une chaîne d'horloge à mots. Ne pas terminer peut causer des reflets qui déstabilisent la référence de l'horloge pour tous les périphériques connectés. Le commutateur de terminaison se trouve à côté du connecteur BNC.

---

## 4.2 Core 256

### Aperçu 4.2.1

Le Core 256 est une interface audio à demi-rack Thunderbolt dans la famille de produits Thunder\|Core. Il partage le même connecteur de panneau arrière que le AX Center mais omet les entrées de micro/instrument du panneau avant et les sorties de casque. Il est conçu pour les installations où un noyau audio Thunderbolt compact et montable en rack est nécessaire sans E/S du panneau avant. Le Core 256 est alimenté par une alimentation DC 12 V externe.

> **AVIS — Emballage du Core 256 :** Le Core 256 est une unité de demi-largeur de rack. Une étagère dédiée en 1U ou l'accessoire de support Core 256 est nécessaire pour le monter dans un rack standard de 19 pouces. Voir [Chapitre 2 — Exigences de système] pour les options d'embrochage.

### Aperçu du panneau 4.2.2

![Core 256 front panel](/img/panel-core256-front.png)
_Figure 4.3 — Core 256 front panel. Les appels numérotés correspondent à la Section 4.2.3._

![Panneau arrière Core 256](/img/panel-core256-rear.png)
_Figure 4.4 — Panneau arrière Core 256. Les appels numérotés correspondent à la Section 4.2.4._

### 4.2.3 Contrôles du panneau avant

| Réf. | Étiquette                   | Type de texte                             | Fonction                                                     |
| -------------------- | --------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| —                    | **DAD**                     | Logo lumineux                             | Éclairage bleu; indique la mise sous tension                 |
| 1                    | **Puissance**               | Bouton poussoir lumineux                  | Lance la séquence de mise sous tension/arrêt contrôlé        |
| —                    | **Int.**    | Indicateur LED                            | Lit lorsque verrouillé sur la référence interne de l'horloge |
| —                    | **Ext.**    | Indicateur LED (vert)  | Lit lorsque verrouillé à la source de l'horloge externe      |
| —                    | **Erreur.** | Indicateur LED (rouge) | Allumer l'erreur de l'horloge ou le défaut interne           |

### 4.2.4 Panneau arrière

Le panneau arrière Core 256 possède le même connecteur que le centre AX (voir [Section 4.1.3]), avec les différences suivantes :

| Différence               | AX au centre                                            | Noyau 256                                                        |
| ------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------- |
| Électricité              | IEC C14 mains inlet (100–240 V AC)   | Connecteur canon 12 V DC (ASU externe requis) |
| Surveiller les sorties   | 2x stéréo TRS (MONITOR 1, MONITOR 2) | N'est pas présent                                                |
| Emplacements d'extension | 2× (ARRÊTE 1, EMPLACEMENT 2)         | 2× (SLOT 1, EMPLACEMENT 2) — même             |

Tous les autres connecteurs du panneau arrière (EXPANSION / baies SFP, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, Les WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) sont identiques au Centre AX. Reportez-vous à la table de connecteurs du panneau arrière AX [Section 4.1.3] pour la fonction et la spécification de ces connecteurs.

---

## 4,3 AX 64

### Aperçu 4.3.1

L'AX 64 est une interface audio Thunderbolt en rack 2U avec jusqu'à huit emplacements de carte d'extension, fournissant jusqu'à 64 canaux d'E/S analogiques dans une seule unité (selon les cartes d'extension installées). Tout comme le centre AX, tous les contrôles se font via DADman sur Ethernet. L'AX 64 possède la même connectivité de base que le centre AX (MADI, ADAT, horloge à mots, boulon de tonnerre 3, le double Ethernet) mais ajoute jusqu'à huit emplacements de carte d'extension analogique au format DB25 à la place des E/S du panneau frontal fixe du AX Center.

### Aperçu du panneau 4.3.2

![AX 64 front panel](/img/panel-ax64-front.png)
_Figure 4.5 — AX 64 front panel. Les appels numérotés correspondent à la Section 4.3.3._

![panneau arrière AX 64](/img/panel-ax64-rear.png)
_Figure 4.6 — panneau arrière AX 64. Les appels numérotés correspondent à la Section 4.3.4._

### 4.3.3 Contrôles du panneau avant

| Réf. | Étiquette                   | Type de texte                             | Fonction                                                     |
| -------------------- | --------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| —                    | **DAD**                     | Logo lumineux                             | Éclairage bleu; indique la mise sous tension                 |
| 1                    | **Puissance**               | Bouton poussoir lumineux                  | Lance la séquence de mise sous tension/arrêt contrôlé        |
| —                    | **Int.**    | Indicateur LED                            | Lit lorsque verrouillé sur la référence interne de l'horloge |
| —                    | **Ext.**    | Indicateur LED (vert)  | Lit lorsque verrouillé à la source de l'horloge externe      |
| —                    | **Erreur.** | Indicateur LED (rouge) | Allumer l'erreur de l'horloge ou le défaut interne           |

> **AVIS :** Le panneau avant AX 64 ne fournit que des indicateurs de statut. Toutes les connexions d'E/S audio sont effectuées sur le panneau arrière (figure 4.6).

### 4.3.4 Panneau arrière

| Réf. | Étiquette                                        | Connecteur                               | Fonction                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Puissance**                                    | Entrée IEC C14                           | Entrée(s) électrique(s) 100-240 V AC, 50/60 Hz, auto-rangement.                                                                                                                                                                                                                                                                                                                     |
| 1a                   | _(Facultatif)_                | Entrée IEC C14                           | Entrée d'alimentation redondante (option configurée en usine). Lorsque la PSU optionnelle redondante est installée, une seconde entrée C14 apparaît à côté du primaire.                                                                                                                                                                                                                |
| 2, 3                 | **EXPANSION**                                    | Baie de 2× SFP                           | DADLink / MADI extension optique, identique à AX Center. Accepte les modules SFP pour DADLink ou les E/S MADI optiques.                                                                                                                                                                                                                                                                                   |
| 4, 5                 | **NET 1 / NET 2**                                | 2× RJ45 + baie SFP                       | Réseau de contrôle Ethernet. Identique à AX Center. Connectez NET 1 ou NET 2 au réseau de contrôle DADman.                                                                                                                                                                                                                                                                                |
| 6                    | **THUNDERBOLT 1** (upper)     | USB-C (Thunderbolt 3) | Connexion Primaire Thunderbolt 3 à l'ordinateur.                                                                                                                                                                                                                                                                                                                                                                          |
| 7                    | **THUNDERBOLT 2** (inférieur) | USB-C (Thunderbolt 3) | Bras de tonnerre 3 chaîne de marguerite / passthrough.                                                                                                                                                                                                                                                                                                                                                                    |
| 8                    | **WC IN**                                        | BNC, 75 Ω.               | Saisie de l'horloge du mot.                                                                                                                                                                                                                                                                                                                                                                                               |
| 9                    | **WC HAUT**                                      | BNC, 75 Ω.               | Sortie de l'horloge de mot.                                                                                                                                                                                                                                                                                                                                                                                               |
| 10                   | \*\*MADI DANS \*\*                               | BNC, 75 Ω.               | Entrée coaxiale MADI. Conformité AES10.                                                                                                                                                                                                                                                                                                                                                                   |
| 11                   | **MADI HOR**                                     | BNC, 75 Ω.               | Sortie coaxiale MADI.                                                                                                                                                                                                                                                                                                                                                                                                     |
| 12, 14               | **ADAT OUT 1 / 2**                               | 2× TOSLINK (optique)  | Sorties de Lightpipe ADAT.                                                                                                                                                                                                                                                                                                                                                                                                |
| 13, 15               | **ADAT DANS 1 / 2**                              | 2× TOSLINK (optique)  | ADAT entrées Lightpipe                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 16–23                | **Emplacement 1 – Emplacement 8**                | Jusqu'à 8× DB25                          | Emplacements de carte d'extension analogique. Chaque emplacement accepte une carte d'extension DAD 8 canaux (A/D, D/A ou E/S numériques). La numérotation des emplacements se fait de droite à gauche comme vu depuis l'arrière (l'emplacement 1 est le plus à droite). Le type de carte et le routage sont configurés dans DADman. |

> **AVIS — Emplacements de cartes d'extension :** L'AX 64 est livré avec le nombre de cartes d'extension spécifiées au moment de la commande. Les emplacements non peuplés sont couverts par une plaque de découpage. Ne retirez pas les plaques de découpage des emplacements vides — elles sont nécessaires pour un bon flux d'air. Les cartes d'extension ne doivent être installées ou retirées que lorsque l'appareil est éteint.

> **AVIS — Convention de numérotation des créneaux :** Sur le panneau arrière, les numéros d'emplacement sont en sérigraphie au-dessus de chaque emplacement et courent de droite (emplacement 1) à gauche (emplacement 8) comme vu depuis l'arrière de l'unité. Dans DADman, les créneaux sont étiquetés pour correspondre à cette numérotation physique. Vérifier les affectations de créneaux dans DADman lors de la première connexion d'une unité avec des cartes d'extension.

---

## 4.4 MOM — Surveiller le module d'exploitation

### Aperçu 4.4.1

Le MOM (Monitor Operating Module) est un contrôleur de moniteur de bureau qui se connecte à un AX Center ou AX 64 via USB-C. Il fournit un contrôle physique sur la sélection des haut-parleurs du moniteur, la sélection de la source, le niveau du maître, la luminosité, coupe, talkback et niveau de référence sans avoir besoin d'interaction avec la fenêtre du logiciel DADman. Le MOM communique avec l'hôte AX Center ou AX 64 sur USB et ne contient pas de circuit audio de sa propre façon. Il s'agit d'une surface de contrôle uniquement. Les signaux audio ne sont pas acheminés à travers le MOM.

> **AVIS :** Le MOM se connecte à l'ordinateur fonctionnant avec DADman via le port USB-C à l'arrière de l'AX Center ou AX 64. Il ne se connecte pas directement au port USB de l'ordinateur. DADman doit fonctionner pour que le MOM fonctionne.

### 4.4.2 Référence des contrôles

![MOM control face](/img/panel-mom.png)
_Figure 4.7 — MoM control face. Les appels numérotés correspondent à la table de référence ci-dessous._

| Réf. | Étiquette                   | Type de texte                            | Fonction                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | --------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Spkr. 1** | Bouton poussoir lumineux                 | Sélectionne l'ensemble de sortie du haut-parleur 1 (par exemple, les moniteurs principaux). Correspond à un ensemble de sortie de haut-parleur configuré dans le profil de moniteur actif dans DADman.                                                                                         |
| 2                    | **Spkr. 2** | Bouton poussoir lumineux                 | Sélectionne le jeu de sortie de haut-parleur 2 (par exemple, moniteurs à proximité du champ).                                                                                                                                                                                                                  |
| 3                    | **Spkr. 3** | Bouton poussoir lumineux                 | Sélectionne le jeu de sortie de haut-parleurs 3 (par exemple, le haut-parleur de traduction ou le lit Atmos).                                                                                                                                                                                                  |
| 4                    | **Src. A**  | Bouton poussoir lumineux                 | Sélectionne la source de surveillance A telle que définie dans le profil de moniteur actif.                                                                                                                                                                                                                                       |
| 5                    | **Src. B**  | Bouton poussoir lumineux                 | Sélectionne la source de surveillance B.                                                                                                                                                                                                                                                                                          |
| 6                    | **Src. C**  | Bouton poussoir lumineux                 | Sélectionne la source de surveillance C.                                                                                                                                                                                                                                                                                          |
| 7                    | **Couche**                  | Bouton poussoir lumineux                 | Bascule le MOM entre les calques de contrôle. Lorsque plusieurs calques sont configurés dans DADman, appuyer sur Layer les traverse, réassignant le Spkr. et Src. pour différents ensembles de haut-parleurs et sources.                                                          |
| —                    | **Statut des LEDs 1–4**     | Indicateurs LED                          | Indiquez l'état des quatre calques ou préréglages de surveillance actifs. Illuminé lorsque le calque correspondant est actif.                                                                                                                                                                                     |
| —                    | **Stat.**   | Indicateur LED (vert) | Indique que MOM est connecté au AX Center / AX 64 et communique correctement. Flasher lors de l'initialisation. Désactivé lorsque déconnecté.                                                                                                                                                     |
| 8                    | \*\*To \*\*                 | Bouton Push                              | Reparler. Route le microphone talkback (configuré en DADman) vers le talent.                                                                                                                                                                                                                   |
| 9                    | **Ref**                     | Bouton Push                              | Niveau de référence. Bascule la sortie du moniteur au niveau de référence calibré défini dans le profil du moniteur actif. Appuyez à nouveau pour revenir au niveau précédent.                                                                                                                    |
| 10                   | **Couper**                  | Bouton poussoir lumineux                 | Coupe (muet) la sortie du moniteur. Éclaire le rouge lorsqu'il est actif.                                                                                                                                                                                                                      |
| 11                   | **Dim**                     | Bouton poussoir lumineux                 | Atténue la sortie du moniteur par la quantité Dim configurée dans le profil de moniteur actif (typiquement -20 dB). Éclaire l'ambre lorsqu'il est actif.                                                                                                                                       |
| 12                   | **Niveau**                  | Codeur rotatif avec anneau LED           | Contrôle du niveau du moniteur principal. Tourner pour ajuster le niveau de sortie. La bague LED indique la position du niveau actuel par rapport au niveau de référence (0 = Ref). Plage : environ -40 dB à +6 dB par rapport à la référence. |

> **AVIS — Profils MOM et Moniteur :** Les fonctions des boutons Spkr., Src., et Layer sont déterminées par le Profil de Moniteur chargé en DADman. Un MOM sans profil de moniteur actif configuré aura un Spkr. et Src. boutons. Configurer les profils de moniteur avant d'utiliser le MOM dans une session. Voir [Chapitre 8 — Fonctionnalités avancées, Section 8.1 — Profils de moniteur].

---

## 4.5 DAD Junior

### 4.5.1 Aperçu

_[Placeholder: Vue d'ensemble junior du DAD — version en attente et documentation d'ingénierie.]_

### 4.5.2 Front Panel

_[Placeholder: diagramme en panneau avant annoté — DAD Junior]_

### 4.5.3 Panneau arrière

_[Placeholder : diagramme de panneau arrière annoté — DAD Junior]_

---

## 4.6 Penta 720 / 721s

### 4.6.1 Aperçu

Les Penta 720 et Penta 721 sont des interfaces audio modulaires et des plateformes de conversion de signaux de la technologie NTP. Contrairement aux produits Thunder\|Core (AX Center, AX 64, Core 256), les unités Penta se connectent uniquement à l'ordinateur par Ethernet — il n'y a pas de connexion Thunderbolt. DADman communique avec les unités Penta sur le réseau de contrôle pour le routage, la conversion de format et la configuration. Les unités Penta sont généralement utilisées pour le grand nombre de canaux AES/EBU et MADI I/O, la conversion de formats et la distribution audio réseau dans les environnements de diffusion et de post-production.

Le Penta 720 est un châssis à montage en rack de 2U qui accepte les cartes d'extension dans ses emplacements internes. Le Penta 721s est une variante plus mince de 1U. Le complément de connecteur du panneau arrière dépend des cartes d'extension installées ; la disposition indiquée dans la section 4. .3 reflète une configuration typique avec une carte d'E/S Dante/AES67 dans l'emplacement 1.

### Aperçu du panneau 4.6.2

![Penta 720 front panel](/img/panel-penta720.png)
_Figure 4.8 — panneau Penta 720. Les appels numérotés correspondent à la table de référence de la Section 4.6.3._

![Penta 721s front panel](/img/panel-penta721s-front.png)
_Figure 4.9 — Penta 721s front panel._

![Panneau arrière Penta 721s](/img/panel-penta721s-rear.png)
_Figure 4.10 — Panneau arrière Penta 721s. Les appels numérotés correspondent à la table de référence de la Section 4.6.4._

| Réf. | Étiquette  | Type de texte                             | Fonction                                                                                                                                                                                                                     |
| -------------------- | ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| —                    | **Prêt**   | Indicateur LED (vert)  | L'unité a terminé la séquence de démarrage et est prête à fonctionner                                                                                                                                                        |
| —                    | **Erreur** | Indicateur LED (rouge) | Une erreur interne ou une erreur de configuration a été détectée                                                                                                                                                             |
| —                    | **PSU OK** | Indicateur LED (vert)  | L'alimentation principale fonctionne correctement. En ce qui concerne les unités avec une UPS redondante, un deuxième indicateur de présence confirme l'état de la fourniture de sauvegarde. |

### 4.6.4 Panneau arrière

| Réf. | Étiquette                                        | Connecteur                              | Fonction                                                                                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Puissance (primaire)**      | Entrée IEC C14                          | Entrée(s) électrique(s) 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.                                                               |
| 2                    | **Alimentation (sauvegarde)** | Entrée IEC C14                          | Entrée d'alimentation réseau redondante (où elle est installée). Fournit une redondance de l'UPS à chaud.                                                                                                        |
| 3                    | **AES/EBU I/O 1–4**                              | DB25 (Tascam pinout) | E/S audio numériques AES/EBU, canaux 1–4 (4 paires stéréo = 8 canaux).                                                                                                                                                           |
| 4                    | **AES/EBU I/O 5–8**                              | DB25 (Tascam pinout) | E/S audio numériques AES/EBU, canaux 5–8 (4 paires stéréo = 8 canaux).                                                                                                                                                           |
| 5                    | \*\*MADI DANS \*\*                               | BNC, 75 Ω.              | Entrée coaxiale MADI. Conformité AES10.                                                                                                                                                                                             |
| 6                    | **MADI HOR**                                     | BNC, 75 Ω.              | Sortie coaxiale MADI.                                                                                                                                                                                                                               |
| 7                    | **I/O optique**                                  | TOSLINK (optique)    | Optique MADI ou ADAT I/O (card-dependent).                                                                                                                                                                                       |
| 8                    | **WC/VBB IN**                                    | BNC, 75 Ω.              | Horloge Word ou Vidéo Black Burst.                                                                                                                                                                                                                  |
| 9                    | **WC HAUT**                                      | BNC, 75 Ω.              | Sortie de l'horloge de mot.                                                                                                                                                                                                                         |
| 10                   | \*\*AES11 DANS \*\*                              | XLR (femelle)        | Entrée de signal audio de référence AES11. Utilisé pour synchroniser l'unité avec une source de référence AES11.                                                                                                                    |
| 11                   | **NET 1**                                        | RJ45 (1000BASE-T)    | Contrôle Ethernet et/ou réseau audio Dante, port 1.                                                                                                                                                                                                 |
| 12                   | **NET 2**                                        | RJ45 (1000BASE-T)    | Contrôle Ethernet et/ou réseau audio Dante, port 2.                                                                                                                                                                                                 |
| 13                   | **SLOT 1** (Dante/AES67 I/O)  | 2× SFP                                  | Emplacement de carte d'extension 1. Présenté avec une carte d'E/S Dante/AES67 fournissant deux ports SFP pour les connexions de réseau optique ou cuivre Dante. Le contenu du créneau varie selon la configuration. |

---

## 4.7 LED de référence d'état

Le tableau suivant couvre les indicateurs LED du panneau avant communs à tous les appareils Thunder\|Core rack (AX Center, Core 256, AX 64). Les unités Penta utilisent un ensemble d'indicateurs distincts couverts dans la section Penta ci-dessus.

### 4.7.1 LEDs de référence de l'horloge — Thunder|Core Units

| Int.                 | Ext.                 | Err.                 | Sens                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ● (lit)           | <unk> (désactivé) | <unk> (désactivé) | L'unité est verrouillée à son propre oscillateur interne. Aucune référence externe n'est connectée ou sélectionnée. État normal pour un maître d'horloge.                                                                                                                                                                                        |
| <unk> (désactivé) | ● (allumé, vert)  | <unk> (désactivé) | L'unité est verrouillée à la référence externe sélectionnée (horloge de mot, MADI embed, ADAT embed, ou Dante PTP). Etat normal pour un esclave de l'horloge.                                                                                                                                                                                 |
| ● (lit)           | ● (lit)           | <unk> (désactivé) | L'unité est en cours de verrouillage à une référence externe. L'oscillateur interne est en cours d'exécution pendant que le verrou est acquis. L'état transitoire est généralement résolu en quelques secondes.                                                                                                                                  |
| <unk> (désactivé) | <unk> (désactivé) | ● (allumé, rouge) | **Erreur de l'horloge.** L'unité ne peut pas verrouiller la référence externe sélectionnée. Vérifiez que la source de référence est présente, au taux d'échantillonnage correct, et connectée à la bonne entrée. Voir [Chapitre 9 — Dépannage, Section 9.3]. |
| ● (lit)           | <unk> (désactivé) | ● (allumé, rouge) | **Défaut interne.** L'unité a détecté une erreur interne non liée à l'horloge externe. Notez l'état du panneau avant et le cycle d'alimentation de l'unité. Si l'erreur persiste, contactez le support DAD.                                                                                                                      |
| Clignotement lent                    | —                                    | —                                    | L'unité effectue une mise à jour du firmware. N'éteignez pas l'unité pendant une mise à jour du firmware.                                                                                                                                                                                                                                                        |

### 4.7.2 Bouton d'alimentation

| État                            | Sens                                                  |
| ------------------------------- | ----------------------------------------------------- |
| Désactivé                       | L'unité est éteinte                                   |
| Lit (stable) | L'unité est alimentée et fonctionne normalement       |
| Impulsion lente                 | L'unité est en veille ou exécute une séquence d'arrêt |

### 4.7.3 LEDs d'état MOM

| Stat.                       | Sens                                                            |
| ------------------------------------------- | --------------------------------------------------------------- |
| ● (allumé, vert, stable) | MOM est connecté et communique avec l'hôte AX Center / AX 64    |
| Ralentissement (vert)    | MOM est en train d'initialiser ou d'attendre que DADman réponde |
| <unk> (désactivé)        | MOM n'est pas connecté, ou l'unité hôte est éteinte             |

_[Placeholder: tables LED pour chaque canal/OL/opérateur — applicables aux cartes d'extension AX 64 qui incluent la jauge du panneau avant. En attente de documentation.]_

---

## Références croisées

- **Chapitre 1 — Introduction :** Liste matérielle compatible; familles de matériels et compatibilité de clonage
- **Chapitre 2 — Exigences système :** Contenu du paquet par modèle; versions OS prises en charge
- **Chapitre 3 — Installation du pilote Thunderbolt :** ; configuration du réseau
- **Chapitre 5 — Flux de signaux et architecture :** Comment chaque type de connecteur s'intègre dans le chemin du signal et de l'horloge
- **Chapitre 7 — Opération:** Configuration des entrées, des sorties, du routage et du suivi des profils dans DADman
- **Chapitre 8 — Fonctionnalités avancées :** Profils du moniteur, configuration du MOM, Control\|Pack
- **Annexe A – Spécifications :** Caractéristiques électriques et mécaniques complètes par produit
- **Annexe B — Affectations de connecteurs :** Affectations de broches pour DB25, XLR, BNC et autres types de connecteurs

---
