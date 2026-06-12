---
id: opération ch07-
title: "Chapitre 7 — Opération"
sidebar_label: "Ch. 7 — Opération"
sidebar_position: 9
slug: /opération
---

# Chapitre 7 — Opération

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte:** DADman v5.8. build 2  
> **Primary reference hardware:** DAD AX Center, Core 256, AX64 (Thunder\|Core generation)  
> **Chapter status:** Draft v0. — Captures d'écran en attente; Paramètres de l'onglet Dante/TB3 en attente d'ingénierie DAD ; PRO\|MON et SPQ en attente de  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section              | Couvertures                                               | Quand consulter                                                                                              |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 7.1  | Gestion de session — fichiers, enregistrement, démarrage  | Début et fin des sessions                                                                                    |
| 7.2  | Disposition et navigation de la fenêtre                   | Orientation ; première utilisation                                                                           |
| 7.3  | Liste des périphériques                                   | Gestion des unités connectées                                                                                |
| 7.4  | Entrées analogiques (onglet AD)        | Réglage du gain de micro/ligne, puissance fantôme, phase                                                     |
| 7.5  | Sorties analogiques (onglet DA)        | Réglage des niveaux de sortie et de la plage                                                                 |
| 7.6  | Matrice de routage (onglet Con)        | Mise à jour des entrées aux sorties                                                                          |
| 7.7  | Horloge et configuration (onglet Conf) | Horloge, fréquence d'échantillon, paramètres du port d'E/S numérique                                         |
| 7.8  | Contrôle du moniteur (onglet Lun)      | Affichage du profil du moniteur actif; sélection de la source et de la sortie                                |
| 7.9  | Contrôle\|Bande d'emballage                               | Contrôle du préréglage de routage _(v5.8.0 et ultérieur)_ |
| 7.10 | Contrôle de la souris et du clavier                       | Raccourcis d'efficacité                                                                                      |

> **NOTE — Variation matérielle :** Les onglets et paramètres affichés dans DADman reflètent les capacités du matériel connecté. Une unité sans entrées analogiques montre l'onglet **AD** mais ses commandes seront absentes ou grisées. Les paramètres marqués _[AX32 / Famille 1]_ s'appliquent spécifiquement aux séries AX32, DX32R et Penta. Les paramètres non marqués s'appliquent à tous les matériels Thunder\|Core (AX Center, Core 256, AX64) sauf indication contraire.

_[Placeholder: annoté une capture d'écran plein écran de DADman v5.8.2 avec des numéros de rappel pour chaque zone principale]_

---

## 6.1 Gestion des sessions

### 7.1.1 Fichiers de configuration et profils de moniteur

DADman utilise deux types de fichiers distincts pour enregistrer et restaurer l'état du système. Comprendre la différence entre elles est essentiel pour la gestion des sessions.

#### Fichier des paramètres DADman (.dms)

Un **fichier DADman Settings File** (extension de fichier `.dms`) stocke un instantané de tous les paramètres sur toutes les unités connectées au moment de l'enregistrement. Cela comprend :

- Gain d'entrée analogique, puissance fantôme, pad, phase, et étiquettes de canaux (section AD)
- Niveaux de sortie analogiques, muets et étiquettes de canaux (section DA)
- État complet de la matrice de routage (section Con)
- Source de l'horloge, fréquence d'échantillonnage et paramètres de format (Conf section)
- Configuration du réseau et assignations d'ID d'unité
- Contrôle\|Configuration prédéfinie du routage des paquets _(v5.8.0 et ultérieur)_

Les fichiers de configuration sont enregistrés via **Fichier > Enregistrer** ou **Fichier > Enregistrer sous** et sont stockés sur l'ordinateur. Elles n'affectent pas l'unité directement jusqu'à ce qu'elle soit chargée — à ce moment-là, DADman applique les paramètres enregistrés aux unités connectées sur le réseau.

> **ATTENTION:** Le microprogramme met à jour tous les paramètres stockés sur l’unité à des valeurs par défaut. Sauvegardez toujours un fichier `.dms` avant d'effectuer une mise à jour du firmware. Voir [Chapitre 10, Section 10.1 — Mise à jour du micrologiciel].

#### Fichier de profil DADman Monitor (.dmprof)

Un **fichier de profil de surveillance** (extension de fichier `.dmprof`) stocke la configuration du contrôleur de moniteur indépendamment des paramètres de l'unité. Définition d'un profil de moniteur:

- Sources du moniteur (entrées assignées au contrôleur)
- Ensemble de sortie des haut-parleurs (mono, stéréo, entouré, immersif — jusqu'à 64 canaux)
- Matrices déroulantes (ex: 5.1 en stéréo, préréglages personnalisés)
- Délai des paramètres par ensemble de sortie
- Routage et niveau de Talkback
- Réglages du niveau de référence

Les profils du moniteur sont gérés via **Paramètres > Profil du moniteur** et sont enregistrés en tant que fichiers séparés du fichier de configuration `.dms`. Cette séparation permet d'utiliser le même routage physique et la même configuration de gain avec différentes configurations de surveillance.

Un profil de moniteur stéréo par défaut est disponible à télécharger depuis le portail de support DAD.

#### Relation entre les deux types de fichiers

|                                            | Fichier de paramètres (.dms)           | Profil du moniteur (.dmprof) |
| ------------------------------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Magasins**                               | Tous les paramètres matériels (gain, routage, horloge) | Configuration du contrôleur de moniteur uniquement              |
| **Portée**                                 | Toutes les unités connectées                                              | Un profil de moniteur à la fois                                 |
| **Charge via**                             | Fichier > Ouvrir                                                          | Paramètres > Profil du moniteur > Charger                       |
| **Auto-load on startup**                   | Optionnel                                                                 | Optionnel                                                       |
| **Affecté par la mise à jour du firmware** | Oui — les paramètres de réinitialisation de l'unité effacent              | Non — stocké uniquement sur l'ordinateur                        |

### 7.1.2 Startup and Auto-Load

DADman peut être configuré pour **charger automatiquement le dernier fichier de configuration utilisé** au lancement. Si cette option est activée, DADman appliquera les paramètres enregistrés aux unités connectées au démarrage sans nécessiter une action manuelle.

> **REMARQUE:** L'option "Ouvrir le dernier fichier au démarrage" permet à DADman d'écrire immédiatement les paramètres enregistrés sur toutes les unités connectées au démarrage. Dans les environnements multi-opérateurs où différents utilisateurs peuvent effectuer des changements en temps réel, activer cette option écrasera tous les changements effectués depuis la dernière sauvegarde.

Pour activer ou désactiver le chargement automatique : **DADman > Préférences** (macOS) ou **Paramètres > Options** (Windows), puis **Ouvrir le dernier fichier au démarrage**.

### 6.1.3 File Menu Reference

| Élément de menu                 | Action                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nouveau**                     | Efface la configuration actuelle dans DADman. Ne modifie pas les paramètres des unités connectées.                                                                                                                                                                                                                                            |
| **Ouvrir…**                     | Ouvre un fichier de paramètres DADman (`.dms`) et applique ses paramètres enregistrés aux unités connectées.                                                                                                                                                                                                                               |
| **Enregistrer**                 | Enregistre l'état actuel de toutes les unités connectées dans le fichier `.dms` actuellement ouvert.                                                                                                                                                                                                                                                          |
| **Enregistrer sous…**           | Enregistre l'état actuel dans un nouveau fichier `.dms` à un emplacement que vous spécifiez.                                                                                                                                                                                                                                                                  |
| **Ouvrir le profil…**           | Ouvre un fichier de profil de moniteur (`.dmprof`) depuis le disque et le charge dans l'onglet Mon .                                                                                                                                                                                                                                       |
| **Importer le profil…**         | Importe un profil de moniteur à partir de n'importe quelle unité actuellement connectée et effectue une correspondance optimale avec les E/S de l'unité actuelle. Utile lors de la migration d'un profil entre unités avec différentes configurations matérielles. _(v5.6.2 et ultérieur)_ |
| **Enregistrer le profil**       | Enregistre le profil de moniteur actuellement chargé dans son fichier `.dmprof` existant.                                                                                                                                                                                                                                                                     |
| **Enregistrer le profil sous…** | Enregistre le profil du moniteur dans un nouveau fichier `.dmprof` à un endroit que vous spécifiez.                                                                                                                                                                                                                                                           |
| **Fermer le profil**            | Décharge le profil actuel du moniteur. L'onglet Mon n'affiche aucun contrôle actif tant qu'un nouveau profil n'est pas chargé.                                                                                                                                                                                                                |
| **Ouvrir le profil récent**     | Ouvre un sous-menu de fichiers `.dmprof` récemment utilisés pour un accès rapide. _(v5.7.2 et ultérieur)_                                                                                                                                                                                                  |

> **Astuce :** Utilisez **Fichier > Enregistrer sous** à la fin de chaque session, même si les paramètres n'ont pas changé. Le fichier `.dms` est le seul chemin de récupération après une réinitialisation d'usine ou une mise à jour du firmware.

---

## 6.2 Window Layout and Navigation

La fenêtre principale DADman est divisée en quatre zones horizontales, empilées de haut en bas.

| Zone                                                     | Contenus                                                                                            |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Barre de menus**                                       | Menus **Fichier** et **Paramètres** (et menu **DADman** sur macOS)               |
| **Liste de périphériques**                               | Une ligne par unité connectée, chacune dans une bordure colorée                                     |
| **Ligne d'onglets**                                      | **AD · DA · Con · Conf · Mon** tab selectors                                                        |
| **Zone de la bande de canaux**                           | L'affichage des paramètres pour l'onglet sélectionné, en fonction de toutes les unités connectées   |
| **Control\|Pack strip** _(optionnel)_ | Apparait en dessous de la zone de bande de canal lorsque les préréglages de routage sont configurés |

En cliquant sur un onglet, vous basculez toute la zone de bande de canaux pour afficher les commandes de cet onglet pour toutes les unités connectées simultanément. Les commandes de chaque unité restent regroupées dans sa bordure colorée, quel que soit l'onglet actif.

Les sous-sections individuelles dans l'affichage d'une unité peuvent être réduites ou étendues en cliquant sur le **bouton d'en-tête de section** (AD, DA, Con, Conf ou Mon) _(v5. .2 et ultérieur)_. Les infobulles apparaissent lorsque vous survolez les boutons d'en-tête de section pour décrire leur fonction. Ceci est utile lorsque vous travaillez avec un grand nombre d'unités pour réduire le défilement vertical.

### 6.2.1 Les cinq onglets principaux

| Tab              | Nom complet            | Ce qu'il montre                                                                                                           |
| ---------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **AD**           | Analogie-to-Numérique  | Mesure et contrôle pour toutes les entrées analogiques : gain, puissance fantôme, muet, phase, étiquettes |
| **DA**           | Numérique à analogique | Mesure et contrôle pour toutes les sorties analogiques: niveau, muet, étiquettes, plage de sortie         |
| **Con**          | Connexions             | La matrice de point de passage de routage — entrées comme des lignes, sorties en tant que colonnes                        |
| \*\*Conflit \*\* | Configuration          | Réglages de la source de l'horloge, du taux d'échantillon, du port Adapt To, du port Dante et des E/S numériques          |
| **Mon**          | Moniteur               | Le profil du moniteur actif: sources, sorties, dépliants, retard, Talkback                                |

### 6.2.2 Multi-Unit View

Lorsque plusieurs unités sont connectées, DADman les affiche toutes dans la même fenêtre, séparées par leurs bordures colorées. Les onglets s'appliquent globalement — en sélectionnant **AD** affiche les commandes d'entrée analogiques pour toutes les unités connectées simultanément. Cela permet à un seul opérateur de gérer un système complexe multi-unités d'une seule vue sans basculer entre des fenêtres d'application séparées.

### 6.2.3 Colour Schemes

Trois modèles de couleurs sont disponibles via **Paramètres > Options** (Windows) ou **DADman > Préférences** (macOS). Le schéma par défaut est utilisé dans tous les exemples de ce manuel. La sélection du schéma est une préférence locale stockée sur l'ordinateur et n'affecte aucune unité connectée.

### 6.2.4 Settings Menu Reference

| Élément de menu                                                                                  | Action                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Options…** (Windows) / **DADman > Préférences…** (macOS) | Ouvre la fenêtre Préférences                                                                                                                                                                       |
| **Profil du moniteur**                                                                           | Ouvre l'éditeur de profil de moniteur — voir [Section 7.8] et [Chapitre 8] |
| **Préréglages de routage**                                                                       | Ouvre la fenêtre Control\|Pack Routing Preset de configuration _(v5.8.0 et ultérieur)_                                                          |
| **Activer EuCon**                                                                                | Active l'intégration EuControl pour la connectivité de surface de contrôle Avid                                                                                                                    |
| **Liste de périphériques**                                                                       | Ouvre la fenêtre de gestion de la liste de périphériques                                                                                                                                           |

---

## 7.3 Liste de périphériques

La liste des périphériques est la bande horizontale en haut de la fenêtre DADman montrant toutes les unités matérielles découvertes. Les unités apparaissent **de gauche à droite dans l'ordre de l'ID de l'unité ascendante**.

_[Placeholder: capture d'écran de la liste de périphériques annotée montrant deux unités avec des bordures colorées, des champs ID d'unité, des champs de nom d'unité et des indicateurs d'état de connexion]_

### 6.3.1 Device List Columns

| Élément                      | Libellé                                                                                                                                                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ID d'unité**               | Un nombre qui détermine la position de l'unité dans la liste des périphériques (de gauche à droite). Modifiable — cliquez sur le champ ID pour le modifier. L'ID est stocké dans l'unité. |
| **Nom de l'unité**           | Un nom assigné par l'utilisateur pour l'unité. Modifiable — cliquez sur le champ de nom à renommer. Enregistré dans l’unité et affiché sur les unités avec des écrans frontaux.                              |
| **Statut de la connexion**   | Indique si DADman a une connexion active à l'unité. Une unité déconnectée est montrée grisée.                                                                                                                                |
| **Version du micrologiciel** | Affiche la version actuelle du microprogramme exécutée sur l'unité.                                                                                                                                                                          |

> **Astuce (v5.8.1.6, macOS uniquement) :** La liste des périphériques peut être triée en cliquant sur les en-têtes des colonnes - nom de l'unité, ID, version du microprogramme et autres colonnes. Ceci est utile lorsque vous gérez un grand nombre d'unités. Le tri est une préférence d'affichage seulement et ne change pas les identifiants d'unité.

### 6.3.2 Device List Context Menu

Faire un clic droit sur une ligne d'unité (Windows) ou en utilisant le bouton **Action** (macOS) ouvre un menu contextuel avec les options suivantes :

| Option                           | Action                                                                                       |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **Paramètres réseau**            | Ouvre la boîte de dialogue d'adresse IP et de configuration réseau pour l'unité sélectionnée |
| **Cloner depuis…**               | Copie tous les paramètres d'une autre unité de la même famille matérielle vers cette unité   |
| **Mise à jour du micrologiciel** | Lance une mise à jour du firmware pour l'unité sélectionnée                                  |
| **Réinitialisation d'usine**     | Réinitialiser tous les paramètres de l’unité aux valeurs par défaut                          |
| **Déconnecter**                  | Supprime l'unité de la liste des périphériques actifs sans la supprimer                      |

> **ATTENTION :** **Réinitialisation d'usine** et **Mise à jour du Firmware** effacent tous les deux tous les paramètres stockés sur l'unité. Enregistrez un fichier `.dms` avant d'utiliser l'une ou l'autre des options.

### 6.3.3 Channel Names

Les noms de canaux (libellés pour les canaux d'entrée et de sortie individuels) sont attribués dans les onglets AD et DA.

> **NOTE — Important:** Les noms des canaux sont stockés dans le fichier **DADman Settings File (`.dms`)** sur l'ordinateur, **pas** dans l'unité matérielle. Cela signifie que les noms de canaux sont perdus si DADman est utilisé sans charger un fichier `.dms`, ou si un autre ordinateur se connecte à l'unité. Toujours inclure le nom des canaux lors de l'enregistrement des fichiers de configuration.

---

## 7.4 AD Tab — Entrées Analogue

L'onglet **AD** affiche la mesure et le contrôle de tous les canaux d'entrée analogiques — souris, DI, et niveau de ligne — sur les unités connectées. Si une unité n'a pas de carte d'entrée analogique installée, cet onglet sera présent mais vide pour cette unité.

_[Placeholder: annotée AD tab screenshot showing mic channel with gain slider, fantantom, phase, mute and clip/signators]_

### 6.4.1 Channel Strip Controls

Chaque canal d'entrée analogique affiche les commandes suivantes de haut en bas :

| Contrôle                                         | Libellé                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sélecteur de type d'entrée**                   | Bascule l'entrée entre **MIC** (préampli micro) et **LINE** (niveau de ligne). Disponible uniquement sur les canaux avec matériel de préampli micro.                                                                                                                                                                                                                     |
| **Puissance fantôme (+48 V)** | Active la puissance fantôme 48 V sur le canal sélectionné. Uniquement disponible en mode MIC. Appliquer uniquement aux microphones condenseurs — ne pas activer sur les micros à ruban à moins que le fabricant ne spécifie la compatibilité.                                                                                                                                                  |
| **Inversion de phase (Ø)**    | Inverse la polarité du signal d'entrée de 180°.                                                                                                                                                                                                                                                                                                                                                                                |
| **Mono / stereo link**                           | Liens paires de canaux impair/pair adjacents pour le fonctionnement stéréo. Les commandes de la paire sont regroupées lorsqu'elles sont liées.                                                                                                                                                                                                                                                                 |
| **Curseur de gain MIC**                          | Définit le gain de préampli du micro. Voir [Section 7.4.2] pour les incréments d'ajustement.                                                                                                                                                                                                                               |
| **Muet**                                         | Met en sourdine le canal d'entrée. L'état muet est stocké dans l'unité.                                                                                                                                                                                                                                                                                                                                        |
| **Signal LED**                                   | Illumine lorsque le signal d'entrée dépasse -42 dBFS. Indique la présence du signal ; n'indique pas que le signal est à un niveau utile.                                                                                                                                                                                                                                                                       |
| **Clip LED**                                     | Illumine lorsque le signal d'entrée dépasse -0,5 dBFS. Indique les coupures numériques imminentes ou réelles. Réduire le gain immédiatement si cette LED est allumée pendant le fonctionnement normal.                                                                                                                                                                                         |
| **Pic maintenu**                                 | Le niveau de signal le plus élevé atteint se tient sur la barre de compteur, se dégrade lentement. Fournit un enregistrement visuel de pics transitoires sans surveillance continue. Disponible sur AX32, Penta, et MTRX _(nécessite le firmware v2.3.2.1 ou supérieur, de DADman v5.4.3)_. |
| **Étiquette de salon**                           | Nom attribué à l'utilisateur pour le canal. Stocké dans le fichier `.dms`. Cliquez pour modifier.                                                                                                                                                                                                                                                                                              |

### 6.4.2 Gain Adjustment

Le curseur de gain MIC peut être ajusté en utilisant les méthodes suivantes :

| Méthode                                                 | Incrément                                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Glisser la souris                                       | 0,5dB par étape                                                                |
| Clavier **文/ 文** (canal sélectionné) | 0,1 dB par étape                                                               |
| Clavier **Page Haut / Page Bas**                        | Étape plus grande (valeur à confirmer par l'ingénierie DAD) |

> **Astuce :** Sélectionnez une bande de canal en cliquant dessus, puis utilisez les flèches du clavier pour obtenir un ajustement plus fin pendant une session sans déplacer vos mains à la souris.

### 6.4.3 Mic Gain Groups _(v5.8.1.6 and later)_

Les groupes de micro Gain permettent de régler simultanément plusieurs canaux d'entrée — utile pour les configurations multi-micro à la batterie, des sessions d'orchestre, ou toute situation nécessitant des relations de gain relatif cohérentes à travers un groupe.

**Pour créer un groupe de micro :**

1. Faites un clic droit sur le contrôle de gain d'un canal (ou utilisez le menu contextuel d'un canal).
2. Sélectionnez **Ajouter au Groupe de Gains** et assignez un numéro de groupe.
3. Répétez pour chaque canal à inclure dans le groupe.

**Comportement du groupe :**

- Le déplacement du contrôle du gain sur n'importe quel canal groupé déplace tous les canaux du groupe de la même quantité.
- **Alt / Option key + glisser** ajuste seulement le canal sous le curseur, permettant un réglage individuel sans casser le groupe.
- Muet s'applique à tous les canaux groupés simultanément, indépendamment des touches de modificateur.

> **REMARQUE:** Les groupes de Mic Gain fonctionnent comme prévu lorsque DADman est contrôlé via EuControl — les curseurs de gain et les boutons sur les surfaces Avid affectent tous les canaux groupés. Met en sourdine à partir d'une surface de contrôle masque tous les canaux groupés simultanément.

> **NOTE:** Les groupes Mic Gain ne sont pas pris en charge sur le Studio MTRX. _(v5.8.1.6)_

---

## 7.5 DA Tab — Analogue Outputs

L'onglet **DA** affiche la mesure et le contrôle de tous les canaux de sortie analogiques sur les unités connectées. Si une unité n'a pas de carte de sortie analogique installée, l'onglet sera présent mais vide pour cette unité.

_[Placeholder: annoté la capture d'écran de l'onglet DA montrant le canal de sortie avec des indicateurs de niveau fader, muet, porteur/signal/clip indicateurs]_

### 6.5.1 Channel Strip Controls

| Contrôle                      | Libellé                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fader de niveau de sortie** | Définit le niveau de sortie analogique. La valeur correspond au niveau analogique en dBu qui est produit lorsqu'un signal numérique de 0 dBFS est appliqué. Voir [Section 7.5.2] pour plus de détails sur l'intervalle. |
| **Muet**                      | Rend muet le canal de sortie.                                                                                                                                                                                                                                                                                                               |
| **Mono / stereo link**        | Liens paires de canaux impair/pair adjacents pour le fonctionnement stéréo.                                                                                                                                                                                                                                                                 |
| **Transporteur valide LED**   | Sur les canaux de sortie numérique: s'allume lorsqu'un signal numérique valide est présent à la sortie. Sur les cartes de sortie analogiques: s'illumine lorsque la carte de sortie est présente et active.                                                                                 |
| **Signal LED**                | Illumine lorsque le signal de sortie dépasse -42 dBFS.                                                                                                                                                                                                                                                                                      |
| **Clip LED**                  | Illumine lorsque le signal de sortie dépasse -0,5 dBFS.                                                                                                                                                                                                                                                                                     |
| **Pic maintenu**              | Contient le niveau de sortie le plus élevé atteint sur la barre de compteur. Même disponibilité que l’onglet AD — AX32, Penta et MTRX avec firmware v2.3.2.1 ou supérieur.                                                                                                  |
| **Étiquette de salon**        | Nom assigné à l'utilisateur. Stocké dans le fichier `.dms`. Cliquez pour modifier.                                                                                                                                                                                                                          |

### 6.5.2 Output Level Range and Aligment

Le niveau de sortie fader définit le **niveau de sortie analogique correspondant à 0 dBFS digital full scale**. Il s'agit d'un paramètre d'alignement de la structure de gain qui détermine le facteur de conversion entre le domaine numérique (dBFS) et le domaine analogique (dBu).

**Plage de niveau de sortie :** Deux plages sont disponibles, sélectionnables via le bouton **Gain de 6 dB** :

| Mode              | Range             | Sortie maximale  |
| ----------------- | ----------------- | ---------------- |
| Standard          | -66 dBu à +18 dBu | +18 dBu à 0 dBFS |
| Gain +6 dB activé | -60 dBu à +24 dBu | +24 dBu à 0 dBFS |

> **PRÉCAUTION :** Définir un niveau de sortie élevé n'est pas toujours approprié. Si l'équipement en aval a un niveau d'entrée maximum inférieur au niveau de sortie DADman, l'équipement en aval se clipera même lorsque le signal DADman est propre. Vérifiez toujours que le réglage du niveau de sortie ne dépasse pas la spécification d'entrée maximale de l'équipement qui est nourri. Exemple: régler la sortie de +24 dBu dans l'équipement avec une entrée maximale de +18 dBu provoquera le clipping à environ -6 dBFS sur le signal DADman.

> **CONSEIL :** Associe le niveau de sortie au niveau nominal d'entrée de l'équipement en aval pour une meilleure structure de gain. Par exemple, si la sensibilité d'entrée de votre moniteur est de +4 dBu, régler le niveau de sortie DADman à +18 dBu donne environ 14 dB de tête au-dessus de la valeur nominale — une marge confortable pour la plupart des flux de travail.

---

## 6.6 Con Tab — Routing Matrix

L'onglet **Con** affiche la matrice de point de passage de routage — le moteur de routage complet du matériel connecté. Chaque entrée peut être acheminée vers n'importe quelle sortie, et n'importe quel nombre de sorties peuvent recevoir la même entrée simultanément.

_[Placeholder: capture d'écran de l'onglet Con annotée montrant la matrice d'aperçu (à gauche), la matrice détaillée (à droite) et les indicateurs d'état d'entrée/sortie]_

### 6.1 Matrix Layout

La matrice de routage est présentée en deux panneaux côte à côte :

| Panneau               | Contenus                                                                                                          | Objectif                                                                                    |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Matrice d'aperçu**  | Toutes les entrées (lignes) × toutes les sorties (colonnes), petite échelle | Naviguez vers une section de la matrice ; affiche l'état global du routage en un coup d'œil |
| **Matrice détaillée** | Vue étendue de la zone sélectionnée dans la vue d'ensemble                                                        | Créer ou supprimer des connexions individuelles de points de passage                        |

Dans les deux panneaux, les **entrées sont affichées sous la forme de lignes à gauche** et les **sorties sont affichées sous la forme de colonnes en haut**. Une connexion est faite à l'intersection (point croisé) d'une ligne d'entrée et d'une colonne de sortie.

> **REMARQUE:** Les entrées et sorties affichées dans la matrice reflètent les options matérielles réellement installées et le nombre de canaux disponibles à la fréquence d'échantillonnage actuelle. À des taux d'échantillonnage plus élevés, certains formats (MADI, ADAT) transportent moins de canaux, réduisant le nombre de lignes et de colonnes affichés.

### 6.2 Making and Reremove Connections

| Action                                         | Résultat                                                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Un simple clic** sur un point d'intersection | Connecte cette entrée à cette sortie (ou se déconnecte si déjà connecté)                        |
| **Shift + clic** sur une croix                 | Connecte le canal cliqué et le canal consécutif suivant simultanément (une paire stéréo)        |
| **Ctrl / Cmd + clic** sur une croix            | Connecte une diagonale complète — mappe les entrées à leurs sorties numérotées identiques à partir du point cliqué |

Un point de croix connecté est affiché comme un **carré bleu**.

### 6.3 Connection Status Indicators

**Dans les en-têtes de la colonne de sortie (ligne du haut):**

| Indicateur       | Sens                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| Pas de marque    | La sortie n'est connectée à aucune entrée                                                                   |
| Carré bleu clair | La sortie est connectée à une entrée qui n'est pas actuellement visible dans la vue de la matrice détaillée |
| Carré bleu foncé | La sortie est connectée à une entrée visible dans la vue actuelle de la matrice détaillée                   |

> **NOTE:** Une connexion existante est toujours remplacée lorsque vous cliquez sur un nouveau point de croix sur la même colonne de sortie. La sortie est réaffectée à la nouvelle entrée ; la connexion précédente est supprimée.

**Dans les libellés de la ligne d'entrée (côté gauche de la matrice détaillée):**

| Couleur   | Sens                                                                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vert**  | Transporteur numérique valide présent sur l'entrée (ou une carte analogique est installée et active pour les canaux analogiques) |
| **Jaune** | Synchroniser la perte ou l'incompatibilité de taux d'échantillonnage sur cette entrée                                                               |
| **Rouge** | Erreur — aucun signal d'entrée valide détecté                                                                                                       |

> **Astuce :** Le statut jaune sur une entrée numérique indique généralement une différence de taux d'échantillonnage entre la source et le réglage actuel de l'horloge de l'unité. Vérifiez l'onglet **Conflit** et vérifiez que le taux d'échantillonnage de l'unité correspond à la source, ou activez **Adapter à** pour cette entrée.

---

## 6.7 Conf Tab — Clocking and Configuration

L'onglet **Conf** contrôle l'infrastructure numérique de l'unité — la source de l'horloge, le taux d'échantillonnage comportement de synchronisation, et la configuration des ports d'E/S numériques (MADI, Dante, Word Horloge, AES3).

_[Placeholder: annotated Conf tab screenshot for AX Center, showing Synchronization, Dante, and MADI sub-sections]_

> **NOTE — Matériel AX32 / Famille 1 :** L'onglet Conf sur AX32, DX32R, et les unités Penta sont étiquetées **Générales** et organisées en sous-sections (Synchronisation, Interface MADI Coax, Interface Optique 1/2). Les paramètres sont fonctionnellement équivalents à ceux décrits ici. Les paramètres spécifiques à AX32 sont indiqués ci-dessous là où ils diffèrent.

### 6.7.1 Synchronisation Parameters

| Paramètre                       | Options                                                                                                  | Libellé                                                                                                                                                                                                                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Source**                      | Interne · Horloge Word · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical 1/2 · Dante · Thunderbolt 3      | Sélectionne la source principale de l'horloge pour l'unité. Utilisez **Internal** lorsque cette unité est le maître d'horloge du système.                                                                                                                |
| **Taux d'échantillonnage**      | 44.1 · 48 · 88,2 · 96 · 176,4 · 192 kHz _(et DXD / 384 kHz sur AX32)_ | Définit la fréquence d'échantillonnage lorsque **Adapt to** est défini sur **Internal**. Lorsque **Adapt To** est défini sur une entrée numérique, ce champ montre le taux d'échantillonnage détecté de cette entrée (lecture seule). |
| **Adapter à**                   | Interne · AES11 · AES/EBU 1–8 · MADI Coax · MADI Optical · Dante · Thunderbolt 3                         | Lorsqu'elle est définie sur une entrée numérique, l'unité correspond automatiquement au taux d'échantillonnage de cette entrée. Quand réglé sur **Internal**, le paramètre **Taux d'échantillonnage** ci-dessus est utilisé.                             |
| **Horloge de mots**             | Horloge à mot (taux de base) · Horloge à mot (taux réel)           | Détermine si la sortie de l'horloge BNC Word suit uniquement le taux d'échantillonnage de base ou le taux de fonctionnement réel.                                                                                                                                        |
| **Arrêt de la synchronisation** | Haut Z · 75 Ω.                                                                           | Définit si l'entrée Horloge Word est terminée en interne avec 75 Ω. \*\*Fortement recommandé : toujours utiliser la terminaison de 75 €), pour une stabilité optimale de l'horloge.                                                      |

> **Astuce :** Lorsque vous utilisez Dante comme réseau audio et l'unité n'est pas le maître de l'horloge Dante, définir **Source** à **Dante** et **Adapter à** à **Dante**. Cela assure que l'unité suit l'horloge PTP Dante et évite la conversion de la fréquence d'échantillonnage dans le chemin audio.

### 6.7.2 MADI Port Configuration

Ces paramètres s'appliquent à chaque port MADI individuellement (les ports Coaxial BNC et Optical SFP sont configurés séparément).

| Paramètre                      | Options                  | Libellé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fréquence par images**       | Héritage · Haute Vitesse | **Legacy:** La longueur de la trame MADI est maintenue à 48 kHz de longueur d’image et les canaux adjacents sont fusionnés à des taux d’échantillonnage plus élevés (S/MUX). **Haute Vitesse:** La longueur du cadre suit la fréquence d'échantillonnage réelle — une latence plus faible à 88,2 kHz et plus. Avec 44,1 ou 48 kHz, Legacy est toujours utilisé quel que soit ce paramètre. |
| **Frame size**                 | Normale · Étendue        | **Normal:** 56 canaux MADI (standard). **Étendu :** 64 canaux MADI. Vérifiez que l'équipement MADI connecté prend en charge le mode étendu 64 canaux avant de l'activer.                                                                                                                                                                                                                   |
| **Ch. statut** | Par défaut · Transparent | **Par défaut:** l'unité définit les bits de statut du canal du signal MADI sortant. Les bits de statut du canal **Transparent:** de la source sont passés inchangés. Laissez sur **Default** dans la plupart des installations.                                                                                                                                                                               |
| **Taux d'entrée**              | Auto · En tant que AD    | **Auto:** l'unité détecte automatiquement la fréquence d'échantillonnage du signal MADI entrant. Recommandé : **Auto**.                                                                                                                                                                                                                                                                                                       |

> **NOTE — MADI haute vitesse vs. MADI hérité :** La plupart des appareils MADI sur le marché utilisent le mode Legacy. Activer le mode haute vitesse à une extrémité d'un lien MADI sans l'activer sur l'autre ne donnera lieu à aucune erreur audio ou horloge. Vérifiez que le périphérique de transmission et de réception est réglé sur le même mode de fréquence d’images avant de fonctionner à plus de 48 kHz.

### 6.7.3 Optical MADI Interface _(AX32)_

_S'applique aux unités AX32 équipées d'un module MADI optique SFP._

| Paramètre                      | Options                        | Libellé                                                                                                                                                                                                                              |
| ------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mode**                       | Désactivé · MADI · NTP HotLink | Sélectionne le mode de fonctionnement de l'interface SFP optique. Réglé sur **Désactivé** si aucun module SFP n'est installé. Le mode **NTP HotLink** est réservé — ne pas utiliser. |
| **Fréquence par images**       | Héritage · Haute Vitesse       | Identique à MADI Coaxial — voir ci-dessus.                                                                                                                                                                           |
| **Frame size**                 | Normale · Étendue              | Identique à MADI Coaxial — voir ci-dessus.                                                                                                                                                                           |
| **Ch. statut** | Par défaut · Transparent       | Identique à MADI Coaxial — voir ci-dessus.                                                                                                                                                                           |
| **Taux d'entrée**              | Auto · En tant que AD          | Identique à MADI Coaxial — voir ci-dessus.                                                                                                                                                                           |

### 6.7.4 Dante Configuration

Les paramètres de configuration de Dante sont visibles dans les aspects de contrôle de l'onglet Conf de DADman de l'opération Dante qui sont gérés au niveau du matériel. Le routage complet Dante et la gestion des abonnements sont effectués dans l'application **Dante Controller** (une application séparée de l'Audinate, pas de DADman).

_[En attente de l'ingénierie DAD : liste complète des paramètres Dante visibles dans l'onglet Conf pour AX Center / Core 256 — y compris le taux d'échantillonnage Dante, le mode redondance, et les paramètres IPCore introduits dans la v5. .1.6]_

> **NOTE — Dante 256 IPCore _(v5.8.1. )_:** AX64, AX Center et Core 256 unités équipées du module Dante 256 IPCore prennent en charge jusqu'à 256 canaux de Dante à 48 kHz. Cette configuration Dante étendue nécessite à la fois le firmware et le logiciel à la version 5.8.1.6 ou ultérieure.

---

## 7.8 Mon Tab — Monitor Control

L'onglet **Mon** fournit le contrôle en temps réel du contrôleur de moniteur défini dans le profil de moniteur actif. C'est l'interface quotidienne de l'opérateur pour la surveillance — la sélection de la source, le basculement du haut-parleur, le dépliage et le dépliage.

> **REMARQUE :** L'onglet Mon affiche les _contrôles_ définis dans le Profil du moniteur; la _configuration_ des sources, des sorties, des dépliants et du routage se fait dans l'éditeur de profil du moniteur, accessible via **Paramètres > Profil du moniteur**. Cette section ne couvre que les contrôles de l'onglet Mon . Pour la configuration du profil du moniteur, voir [Chapitre 8 — Fonctionnalités avancées, Section 8.1 — Profils du moniteur].

_[Placeholder: capture d'écran annotée de l'onglet Mon montrant le sélecteur de source, les boutons de sortie du haut-parleur, le sélecteur du menu déroulant, le dégradé du niveau principal, la luminosité, la coupe, le talkback et le bouton de niveau de référence]_

### 7.8.1 Mon Tab Controls

| Contrôle                                         | Libellé                                                                                                                                                                                                               |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sélecteur de source**                          | Sélectionne la source de surveillance active à partir de celles définies dans le profil du moniteur.                                                                                                  |
| **Speaker output buttons**                       | Sélectionne le jeu de haut-parleurs actif (par exemple, Near, Mid, Far; ou Stereo, 5.1, 7.1.4).                                    |
| **Sélecteur de liste déroulante**                | Applique une matrice déroulante ou à partir de celle définie dans le profil du moniteur.                                                                                                              |
| **Fader de niveau principal**                    | Contrôle le niveau de surveillance maître du haut-parleur actif. Affiché en dB par rapport au niveau de référence.                                                                    |
| **Réf (Niveau de référence)** | Verrouille le dégradé de niveau principal sur le niveau de référence calibrée défini dans le profil du moniteur. Appuyez une fois pour vous engager; appuyez à nouveau pour relâcher. |
| **Dim**                                          | Applique une atténuation fixe (typiquement -20 dB) à la sortie de monitoring sans modifier la position du fader.                                                                   |
| **Couper**                                       | Met en sourdine toutes les sorties de monitoring immédiatement.                                                                                                                                       |
| **Parlez-vous**                                  | Active le chemin du signal talkback défini dans le profil du moniteur.                                                                                                                                |
| **Section Compteur**                             | Affiche la mesure en temps réel de la source et des sorties du moniteur actif, tel que configuré dans le profil du moniteur.                                                                          |

### 6.8.2 Reference Level

La fonction de niveau de référence permet de surveiller à un SPL pré-calibré, sans risque de changement de niveau accidentel.

**Pour définir un niveau de référence :**

1. À l'aide de tonalités de test et d'un compteur SPL calibré, réglez le niveau de sortie de la surveillance sur le SPL de référence souhaité.
2. Notez la valeur de la dB affichée sur le fader de niveau principal — c'est votre décalage de référence.
3. Dans l'éditeur de profil Monitor (**Paramètres > Profil Moniteur**), entrez cette valeur comme **Niveau de référence** pour le jeu de haut-parleurs.
4. Lors de l'opération normale, appuyez sur **Ref** pour revenir instantanément au niveau calibré après tout ajustement manuel.

> **Astuce :** Les ensembles d'enceintes multiples peuvent chacun avoir leur propre niveau de référence. Par exemple, un ensemble "Près du champ 85 dB" et un ensemble "Près du champ 75 dB" peuvent partager les mêmes sorties physiques, ne diffèrent que dans leur réglage de garnitures.

---

## format@@0 7.9 Control|Pack Strip _(v5.8.0 and later)_

La commande \|Pack de la bande apparaît **ci-dessous** la zone principale de bande de canal lorsque les préréglages de routage ont été configurés pour une ou plusieurs unités connectées. Il fournit un contrôle en temps réel et une surveillance de l'état de tous les préréglages de routage configurés.

> **REMARQUE:** La commande \|la bande du pack n'est visible qu'après avoir créé des préréglages de routage dans l'éditeur de préréglage de routage (**Paramètres > Préréglages de routage**). Si aucun préréglage n'est configuré, cette zone est absente de la fenêtre DADman. Voir [Chapitre 8, Section 8.4 — Contrôle\|Pack] pour une documentation de configuration complète.

_[Placeholder: Contrôle annotée\|Capture d'écran de la bande d'emballage montrant les boutons de nom prédéfinis, les compteurs PPM et les indicateurs de statut de déclenchement]_

### 7.9.1 Control|Pack Strip Elements

La bande affiche une section par unité Thunder\|Core avec des préréglages de routage configurés. Dans chaque section de l'unité, chaque préréglage configuré est affiché avec les éléments suivants :

| Élément                                   | Libellé                                                                                                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nom du préréglage**                     | Le nom assigné au préréglage dans l'éditeur de préréglage de routage                                                                                        |
| **Boutons Seau (1–4)** | Sélectionne le jeu d'entrée actif (secket) pour le préréglage. Couleur indique l'état — voir ci-dessous. |
| **Source de compteurs PPM**               | Compteurs de crête en temps réel montrant le niveau de toutes les chaînes dans le seau.                                                     |
| **Compteurs PPM de sortie**               | Compteurs du programme de pointe en temps réel montrant le niveau de tous les canaux de sortie pour le préréglage.                          |
| **Déclencher les indicateurs de statut**  | Affiche l'état des détecteurs de signaux assignés comme déclencheurs pour chaque segment.                                                   |

### 6.9.2 Bucket Button States

| Couleur   | État                                  | Sens                                                                                                                                                                          |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bleu**  | Actif (manuel)     | Ce bucket est actuellement routé. Le préréglage est en mode manuel — pas de commutation automatique.                                          |
| **Vert**  | Armé (automatique) | Ce bucket est la route active actuelle. Le préréglage est en mode automatique et prêt à basculer en fonction des conditions de déclenchement. |
| **Rouge** | Erreur de déclenchement               | Un détecteur de signal assigné à ce segment a signalé une erreur (perte de signal, échec d'intégrité AE6).                                 |

**Basculer entre le mode manuel et le mode automatisé :**

- **Double-cliquez** un bouton vert (automatique) pour basculer en mode manuel — le bouton devient bleu.
- **Double-cliquez** un bouton de seau bleu (manuel) pour réarmer l'automatisation — le bouton devient vert.

> **ASTUCE:** Lors d'événements en direct ou de diffusions, l'automatisation des bras lors de la vérification de ligne. Si une entrée échoue, le préréglage bascule automatiquement sans intervention de l'opérateur. Vous pouvez remplacer le changement automatique à tout moment en double-cliquant sur le bouton désiré.

---

## 6.10 Contrôles de la souris et du clavier

### 6.10.1 Gain and Level Ajustment

| Action                                          | Modifier                                                         | Résultat                                                                |
| ----------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Glisser la souris sur le curseur de gain MIC    | —                                                                | 0,5dB par étape                                                         |
| **文/ 文** (canal sélectionné) | —                                                                | 0,1 dB par étape                                                        |
| **文/ 文** (canal sélectionné) | **Maj**                                                          | Résolution augmentée (plus fine que 0,1 dB)          |
| **Cliquez** sur le contrôle de gain             | **Ctrl (Win) / Cmd (Mac)** | Rétablir la valeur par défaut                                           |
| Chacune des propositions ci-dessus              | **Alt / Option**                                                 | Appliquer uniquement au canal sélectionné - contourne le Mix-Gain Group |

### 6.10.2 Routing Matrix

| Action                   | Résultat                                                                       |
| ------------------------ | ------------------------------------------------------------------------------ |
| Simple clic sur la croix | Connecter / déconnecter                                                        |
| **Maj** + clic           | Connectez deux canaux consécutifs (une paire stéréo)        |
| **Ctrl / Cmd** + clic    | Connecter une diagonale complète (E/S à partir de ce point) |

### 6.10.3 Raccourcis clavier _(v5.7.0 et ultérieur)_

| Action                                    | macOS               | Fenêtres       |
| ----------------------------------------- | ------------------- | -------------- |
| **Fichier > Ouvrir…**                     | <unk> O             | Ctrl+O         |
| **Fichier > Enregistrer**                 | <unk> S             | Ctrl+S         |
| **Fichier > Enregistrer sous…**           | <unk> <unk> S       | Ctrl+Maj+S     |
| **Fichier > Ouvrir Profil…**              | <unk> <unk> O       | Ctrl+Alt+O     |
| **Fichier > Importer le profil…**         | <unk> <unk> I       | Ctrl+Alt+I     |
| **Fichier > Enregistrer le profil**       | <unk> <unk> S       | Ctrl+Alt+S     |
| **Fichier > Enregistrer le profil sous…** | <unk> <unk> <unk> S | Ctrl+Alt+Maj+S |
| **Fichier > Fermer le profil**            | <unk> <unk> W       | Ctrl+Alt+W     |
| Ouvrir / activer la fenêtre principale    | ⌘⇧1                 | —              |
| Ouvrir la liste des périphériques         | <unk> <unk> L       | Ctrl+Maj+L     |
| Ouvrir le profil du moniteur              | <unk> M             | Ctrl+Maj+M     |
| Ouvrir Paramètres / Options               | ⌘,                  | Ctrl+,         |

> **NOTE:** Ces raccourcis ont été introduits dans DADman v5.7.0. Les versions antérieures ne prennent pas en charge les raccourcis clavier pour les opérations de fichiers et fenêtres.

---

## Références croisées

- **Chapitre 1 — Introduction :** Explication conceptuelle de ce que chaque onglet contrôle et de la relation entre les types de fichiers
- **Chapitre 5 — Flux de signaux et architecture :** Architecture réseau et horloge
- **Chapitre 6 — Pour commencer :** Pour la première fois pas à pas en utilisant ces contrôles dans la séquence
- **Chapitre 8 — Fonctionnalités avancées :** Configuration du profil du moniteur; Control\|Configuration du pack; Groupes de Mi; Intégration EuCon ; alignement du niveau de sortie

---

_[En attente de DAD engineering:]_  
_— Liste des paramètres de l'onglet Full Conf pour AX Center / Core 256 (paramètres Dante, Thunderbolt 3 clock params)_  
_— Dante 256 IPCore Conf tab parameters (v5. .1. )_  
_— Compléter la liste des raccourcis clavier_  
_— Onglet de carte SPQ / contrôles (sous-section séparée à ajouter lorsque documenté)_  
_— PRO\|MON contrôles dans l'onglet Mon (nécessite une documentation dédiée de DAD)_  
_— Toutes les captures d'écran_
