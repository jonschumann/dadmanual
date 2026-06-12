---
title: "Chapitre 6 — Pour commencer"
sidebar_label: "Ch. 6 — Pour commencer"
sidebar_position: 8
---

# Chapitre 6 — Pour commencer

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte:** DADman v5.8. build 2  
> **Principal exemple hardware:** DAD AX Center  
> **Statut du chapitre :** Brouillon v0. — Captures d'écran en attente (mises à jour 1, 2, 4, 5, 6, 7, 9 et capture d'écran annotée de l'orientation de l'interface)  
> **Dernière mise à jour :** Juin 2026

---

## Objectif

Ce chapitre vous guide à travers une configuration DADman complète, du premier lancement au son confirmé, dans le chemin le plus court possible. Il suppose que DADman est déjà installé sur votre ordinateur. Si ce n'est pas le cas, complétez [Chapitre 3 — Installation] d'abord.

Chaque étape indique ce qu'il faut faire, ce que vous devriez voir, et où trouver la référence complète quand vous avez besoin de plus de détails.

**Durée estimée :** 15-20 minutes pour une première installation sur une seule unité.

---

## Avant de commencer

Confirmez ce qui suit avant de lancer DADman :

| Exigences                                                                                                                 | Contrôler                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| DADman v5.8.2 version 2 (ou ultérieure) est installé                   | [Chapitre 3, Section 3.4]                     |
| L'unité matérielle est alimentée                                                                                          | Reportez-vous au guide d'installation de votre matériel                                                           |
| L'unité matérielle est connectée au même réseau Ethernet que votre ordinateur                                             | Câble direct ou interrupteur partagé                                                                              |
| Si vous utilisez Thunderbolt 3 audio: le pilote TB3 est installé et l'unité est connectée via Thunderbolt | [Chapitre 3, Section 3.5–3.6] |
| Vous avez noté l'adresse IP actuelle de l'unité (vérifiez l'affichage du panneau d'accueil)            | —                                                                                                                 |

> **NOTE — utilisateurs de macOS Sequoia (v15) :** DADman peut ne pas découvrir d'unités sur le réseau lors de son premier lancement sur macOS Sequoia. Si aucune unité n'apparaît après 30 secondes, déconnectez-vous de votre compte macOS et reconnectez-vous. Il s'agit d'un problème connu au niveau de l'OS; les connexions Thunderbolt ne sont pas affectées. Voir [Chapitre 3, Section 3.7] pour la solution complète.

---

## L’interface DADman en un coup d’œil

Lorsque DADman s'ouvre, la fenêtre principale affiche toutes les unités matérielles connectées disposées de gauche à droite dans la zone **Liste de périphériques**. Chaque unité est affichée sous la forme d'une colonne de bandes de canaux, bordée de la couleur assignée à l'unité, avec cinq onglets qui permettent d'accéder à différents domaines de contrôle.

### Les cinq onglets

| Tab              | Nom complet               | Ce qu'il contrôle                                                                                                                                                                            |
| ---------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AD**           | Analogue vers Numérique   | Canaux d'entrée analogique — gain de micro/ligne, puissance fantôme +48 V, inversion de phase (Ø), muet, indicateur de crête, étiquette de canal                          |
| **DA**           | Numérique vers analogique | Chaînes de sortie analogiques — faders de sortie, muet, compteur de signaux/clip, étiquettes de canaux                                                                                       |
| **Con**          | Connexions                | La matrice de routage du signal complet — une grille où cliquer sur un point de croix connecte n'importe quelle entrée à n'importe quelle sortie                                             |
| \*\*Conflit \*\* | Configuration             | Réglages par unité — horloge source, taux d'échantillon, Adapt To, taux d'images MADI, configuration Dante, options au niveau du port                                                        |
| **Mon**          | Moniteur                  | Contrôleur du moniteur — chargé à partir d'un profil du moniteur; affiche la sélection de la source, les boutons du haut-parleur, le fondu de niveau, les contrôles Ref/Dim/Cut, le talkback |

> **REMARQUE:** L'onglet **Mon** n'affiche les contrôles actifs que lorsqu'un profil de moniteur (fichier `.dmprof`) est chargé. Voir Étape 9 pour savoir comment charger ou en créer un.

Cliquer sur un bouton d'en-tête de section réduit ou agrandit cette section _(v5.7.2 et plus tard)_. Ceci est utile sur les écrans plus petits ou lorsque vous travaillez avec plusieurs unités simultanément.

_[Placeholder: capture d'écran annotée — fenêtre principale DADman montrant les cinq onglets, la liste des périphériques et la couleur de la bordure de l'unité]_

### La liste des périphériques

Ouvrez la liste des périphériques via **Paramètres > Liste des périphériques** ou **文 L** (macOS) / **Ctrl+Maj+L** (Windows). La liste des périphériques montre toutes les unités découvertes par DADman sur le réseau, avec leur nom, leur ID d'unité, leur adresse IP et leur version de firmware. Faire un clic droit sur une unité dans la liste des périphériques donne accès aux paramètres réseau, à la mise à jour du microprogramme, à la réinitialisation d'usine, au clonage et à la déconnexion.

### Types de fichiers

DADman utilise deux types de fichiers :

| Extension | Nom                              | Magasins                                                                              |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| `.dms`    | Fichier des paramètres de DADman | Tous les paramètres de l'unité — routage, gains, labels, paramètres d'onglets Conf    |
| `.dmprof` | Profil du moniteur DADman        | Configuration du contrôleur de moniteur — sources, haut-parleurs, pli-downs, Talkback |

Ces fichiers sont indépendants. L'enregistrement de l'un n'enregistre pas automatiquement l'autre. Les deux doivent être sauvegardés et sauvegardés.

---

## Pas à pas

### Étape 1 — Lancez DADman

Ouvrez **DADman** depuis le dossier Applications (macOS) ou le menu Démarrer (Windows).

**Résultat attendu :** La fenêtre principale DADman s'ouvre. Si aucune unité n'est trouvée immédiatement, la fenêtre **Liste des périphériques** s'ouvre automatiquement.

> **REMARQUE:** Depuis DADman v5.7.0, l'application essaie de se connecter en permanence aux unités — il n'y a pas de délai. Si votre appareil est allumé et joignable sur le réseau, il apparaîtra dans la liste des périphériques sans aucune action manuelle.

_[Placeholder: capture d'écran — fenêtre principale DADman au lancement avec liste de périphériques vide]_

---

### Étape 2 — Vérifier la découverte de l'appareil

Attendez jusqu'à 30 secondes. Votre AX Center (ou une autre unité connectée) devrait apparaître dans la **Liste des Périphériques** comme une ligne avec une bordure colorée.

**Résultat attendu :** La ligne de l'unité montre le nom de l'unité, le numéro de l'unité, et la version du firmware. L'indicateur de connexion est actif (non grisé).

_[Placeholder: capture d'écran — Liste de périphériques montrant un centre AX connecté avec une bordure coloré]_

Si aucune unité n'apparaît après 30 secondes:

- Confirmez que l'appareil est allumé et que le panneau avant **Prêt** LED est vert solide.
- Confirmez que le câble Ethernet est connecté entre l'unité et l'ordinateur (ou l'interrupteur).
- Confirmez que l'adresse IP de l'unité est sur le même sous-réseau que l'interface réseau de votre ordinateur. Vérifiez via l'affichage du panneau avant de l'unité.
- Sur Windows, confirmez que votre pare-feu ne bloque pas DADman. Ajouter une exception de pare-feu si nécessaire.
- Voir [Chapitre 9 — Dépannage, Section 9.2 — Problèmes de réseau et de connectivité] pour un tableau complet du diagnostic.

> **ASTUCE :** Utilisez **Paramètres > Liste des Périphériques** ou **Ω L** (macOS) / **Ctrl+Maj+L** (Windows) pour ouvrir la liste des Périphériques directement si elle n'est pas visible.

---

### Étape 3 — Nommez l'unité

Cliquez sur le **champ nom** de l'unité dans la liste des périphériques et tapez un nom descriptif — par exemple, `AX Center - Studio A`.

**Résultat attendu :** Le nom se met à jour immédiatement et est stocké dans l'unité elle-même. Il apparaîtra sur les unités avec affichage du panneau avant et persiste à travers les sessions DADman sur n'importe quel ordinateur.

> **REMARQUE :** Les noms d'unités sont stockés dans l'unité matérielle. Les étiquettes de canaux assignées à l'étape 5 sont stockées dans le fichier de configuration `.dms` de l'ordinateur — pas dans l'unité.

---

### Étape 4 — Définir la source de l'horloge et le taux d'échantillonnage

> **Cette étape doit être terminée avant de procéder à la mise à jour.** Tous les périphériques audio numériques de votre système doivent partager un exemple d'horloge. Configurer le routage avant de confirmer les paramètres de l'horloge peut causer des clics, des pops ou un silence qui sont plus difficiles à diagnostiquer après le fait.

1. Cliquez sur l'onglet **Conflit**.
2. Dans la section **Synchronisation**, définissez **Source** pour correspondre à votre système:

| Configuration du système                                          | Réglage de la source                                                               |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Cette unité est le maître d'horloge du système                    | **Internal**                                                                       |
| Horloge à partir d'un signal d'horloge verbale                    | **Horloge du mot**                                                                 |
| Horloge depuis le réseau Dante                                    | **Dîner**                                                                          |
| Correspondance automatique du taux d'échantillonnage DAW connecté | **Adapter à** → **Tonnerre 3** (ou entrée numérique pertinente) |

3. Définissez **Taux d'échantillonnage** pour correspondre à votre session — typiquement **48 kHz** pour diffusion ou post-production, **44.1 kHz** pour la musique.
4. Si vous utilisez l'entrée horloge de mot, définissez **Arrêt de synchronisation** à \*\*75 €), \*\*.

**Résultat attendu :** La fréquence d'échantillonnage affichée dans l'onglet **Conf** correspond à votre taux prévu. Si **Adapt To** est défini sur une source externe, le taux affiché se met à jour automatiquement pour correspondre au débit externe détecté.

_[Placeholder: screenshot — Conf tab showing Source and Sample Rate configured]_

> **ASTUCE :** Si votre centre AX est le seul périphérique numérique de votre système, réglez **Source** sur **Internal** et sélectionnez votre taux d'échantillonnage manuellement. Cela vous donne un contrôle total sans dépendance sur une horloge externe.

Référence complète : [Chapitre 7, Section 7.3 — Horloge et synchronisation]

---

### Étape 5 — Libérer et configurer les entrées analogiques

1. Cliquez sur l'onglet **AD**.
2. Pour chaque canal d'entrée actif:
   - Cliquez sur le champ **étiquette de canal** et tapez un nom (par exemple, `Kick`, `OH L`, `Room`).
   - Sélectionnez le type d'entrée : **MIC** ou **LINE**.
   - Pour les microphones condenseurs: activez **+48V** puissance fantôme. N'activez pas l'alimentation fantôme sur les micros à ruban à moins que le fabricant ne confirme la compatibilité.
   - Définit le curseur **MIC gain** à un niveau de départ conservateur. Ajuster vers le haut lors de la vérification du son.
   - Activer **Ø** (phase inverse) si nécessaire.

**Résultat attendu :** La LED **Signal** s'allume lorsque l'audio est présent au-dessus de -42 dBFS. La LED **Clip** ne doit pas s'allumer pendant les niveaux de signal normaux.

_[Placeholder: screenshot — onglet AD avec deux canaux micro configurés, Signal LED lit]_

> **Astuce :** Avec un canal sélectionné, utilisez les touches fléchées ** /文** pour ajuster le gain par incréments de 0,1 dB. Ajouter **Maj** pour une résolution encore plus fine. Ceci est plus précis que le glissement de souris (pas de 0,5 dB).

Référence complète : [Chapitre 7, Section 7.4 — Gain et gestion du niveau]

---

### Étape 6 — Router les entrées vers les sorties

1. Cliquez sur l'onglet **Con**.
2. La matrice de routage affiche **les entrées comme des lignes** sur la gauche et **les colonnes** sur le haut.
3. Cliquez sur le point de croix à l'intersection d'une ligne d'entrée et d'une colonne de sortie pour les connecter. Un **carré bleu** confirme la connexion.

| Action                                                | Raccourci                                  |
| ----------------------------------------------------- | ------------------------------------------ |
| Connecter un canal                                    | Simple clic                                |
| Connecter une paire stéréo                            | **Maj** + cliquer sur le premier canal     |
| Connecter la diagonale d'E/S à numérotation identique | **Ctrl/Cmd** + clic                        |
| Déconnecter                                           | Cliquez à nouveau sur le carré bleu rempli |

**Résultat attendu :** Les carrés bleus apparaissent à chaque point de croix connecté. L'en-tête de la colonne de sortie montre un indicateur bleu confirmant que la sortie est corrigée.

_[Placeholder: capture d'écran — onglet Con avec points d'intersection connectés affichant la matrice de détail et d'aperçu]_

> **NOTE:** Le nombre d'entrées et de sorties affichées dans la matrice reflète votre configuration matérielle et votre fréquence d'échantillonnage actuelle. À des taux d'échantillonnage plus élevés, certains formats (MADI, ADAT) transportent moins de canaux — la matrice s'ajuste automatiquement.

Référence complète : [Chapitre 7, Section 7.2 — Configuration E/S et correctif]

---

### Étape 7 — Définir les niveaux de sortie

1. Cliquez sur l'onglet **DA**.
2. Définit le **fader de niveau de sortie** pour chaque canal de sortie actif correspondant à la spécification d'entrée de l'équipement en aval.

La valeur de fader est le **niveau de sortie analogique dans dBu qui correspond à 0 dBFS numérique à l'échelle entière** — pas un contrôle de volume. Paramètres communs :

| Équipement en aval                                                             | Réglage de niveau de sortie typique |
| ------------------------------------------------------------------------------ | ----------------------------------- |
| amplificateurs de puissance professionnels (+4 dBu nominal) | **+18 dBu**                         |
| Équipement de diffusion (EBU R68)                           | **+18 dBu**                         |
| Semi-pro / équipement de prosumer (-10 dBV nominal)         | **+4 à +8 dBu**                     |

> **ATTENTION :** Définir le niveau de sortie supérieur à l'entrée maximale de votre équipement en aval va couper cet équipement même lorsque le signal DADman ne montre aucune surcharge. Vérifiez toujours que le niveau de sortie ne dépasse pas la spécification d'entrée maximale de l'appareil en aval.

_[Placeholder: capture d'écran — onglet DA avec réglage des fondus de niveau de sortie]_

Référence complète : [Chapitre 7, Section 7.4 — Gain et gestion du niveau]

---

### Étape 8 — Vérifier l'audio de bout en bout

Avec le signal présent aux entrées, confirmez les flux audio à travers le système :

1. Onglet **AD :** Les LEDs de signal (vert) s'illuminent sur les entrées actives.
2. **Onglet cône :** Les indicateurs d'état d'entrée sur le côté gauche de la matrice de détail montrent du vert (signal valide). Jaune indique un décalage de synchronisation/horloge — retour à l'étape 4.
3. **Onglet DA :** Les LEDs de Signal s'illuminent sur les sorties actives.
4. **À la destination:** L'audio est audible ou mesurable sur vos haut-parleurs, votre enregistreur ou votre système de mesure.

**Si les LEDs du signal sont vertes mais qu'aucun son n'atteint la sortie:**

- Vérifiez les points de passage de routage dans l'onglet **Con**.
- La confirmation **Mute** n'est pas engagée sur le canal AD ou DA concerné.
- Vérifiez que le réglage de l'horloge **Source** dans l'onglet **Conf** est correct — un état jaune dans la matrice Con signale un problème d'horloge.

**Si le clip LED s'allume :**

- Réduire le **gain MIC** dans l'onglet **AD**.
- Si l'équipement en aval est coupé, réduisez le dégradé de niveau de sortie dans l'onglet **DA**.

---

### Étape 9 — Charger ou créer un profil de moniteur

Si vous utilisez le contrôleur de moniteur DADman (PRO\|MON), vous avez besoin d'un profil de moniteur avant que l'onglet **Mon** n'affiche les contrôles actifs.

**Pour charger un profil existant :**

1. **Fichier > Ouvrir Profil…** (macOS : ** 文O** / Fenêtres : **Ctrl+Alt+O**)
2. Sélectionnez votre fichier `.dmprof`.

**Pour créer un nouveau profil :**

1. **Paramètres > Profil Monitor** pour ouvrir l'éditeur.
2. Cliquez avec le bouton droit de la souris sur \*\*Sources \*\* → **Ajouter une nouvelle source** → assigner des entrées depuis votre routage.
3. Clic droit **Sorties** → **Ajouter un nouvel ensemble de sorties** → assigner des sorties analogiques pour chaque configuration du haut-parleur.
4. **Fichier > Enregistrer le profil sous…** (macOS : ** 文 S** / Fenêtres : **Ctrl+Alt+Shift+S**)

**Résultat attendu :** L'onglet **Mon** montre le sélecteur de la source, les boutons de sortie du haut-parleur, et **Ref**, **Dim**, et **Cut**.

_[Placeholder: capture d'écran — onglet Mon avec un profil de moniteur chargé]_

Référence complète : [Chapitre 8, Section 8.1 — Profils du moniteur]

---

### Étape 10 — Définir un niveau de référence (facultatif)

Si votre pièce a été calibrée acoustiquement:

1. À l'aide de tonalités de test et d'un compteur SPL calibré, définissez le fader de niveau principal dans l'onglet **Mon** à votre référence cible SPL (85 dB SPL est standard pour la plupart des environnements de diffusion et de post-production).
2. Dans **Paramètres > Profil du moniteur**, enregistrez ce niveau comme le **Niveau de référence** pour le jeu de haut-parleurs actif.
3. Pendant les sessions, appuyez sur **Ref** dans l'onglet **Mon** pour revenir instantanément au niveau calibré.

> **CONSEIL :** Plusieurs ensembles de sorties de haut-parleurs peuvent partager les mêmes sorties physiques mais ont des décalages de découpe différents — créant des préréglages nommés "85 dB SPL" et "75 dB SPL" que vous pouvez basculer sans recalibrer.

---

### Étape 11 — Enregistrer la configuration

> **PRÉCAUTION :** Les paramètres des unités sont stockés dans le matériel. Une réinitialisation d'usine ou une mise à jour du firmware les effacera. Le fichier `.dms` sur votre ordinateur est la seule sauvegarde.

1. **Fichier > Enregistrer sous…** (macOS : **文 S** / Fenêtres : **Ctrl+Maj+S**)
2. Utilisez un nom de fichier descriptif : `StudioA_AXCenter_2026-06.dms`
3. Enregistrer dans un emplacement qui est sauvegardé régulièrement.

Si vous avez un profil de moniteur, enregistrez-le séparément :
**Fichier > Enregistrer le profil…** (macOS: **   S** / Windows: **Ctrl+Alt+Maj+S**)

> **ASTUCE :** Activez **Ouvrir le dernier fichier au démarrage** dans **DADman > Préférences** (macOS) ou **Paramètres > Options** (Windows) pour restaurer cette configuration automatiquement à chaque lancement. Recommandé pour les installations permanentes.

---

### Étape 12 — Confirmer le rechargement

1. Fermer DADman.
2. Rouvrir DADman.
3. Confirmer le rechargement des paramètres correctement — tous les paramètres de routage, de gain et d'étiquettes de canal doivent être restaurés exactement comme enregistrés.

**Résultat attendu :** Unités qui sont mises à jour en ligne immédiatement lorsque le fichier `.dms` se charge. L'onglet Mon affiche votre profil de moniteur enregistré si "Ouvrir le dernier fichier au démarrage" a également été activé pour les profils.

---

## Installation terminée

Vous avez maintenant un système DADman fonctionnant avec :

- Unités découvertes, connectées et nommées
- Source de l'horloge et taux d'échantillonnage confirmés
- Entrées étiquetées, gagnées et patchées aux sorties
- Niveaux de sortie alignés sur l'équipement en aval
- Audio vérifié de bout en bout
- Configuration enregistrée et rechargée vérifiée

---

## Référence du clavier et de la souris

### Touches de modificateur de curseur

Tous les curseurs de gain, de niveau et de fader de DADman prennent en charge les touches de modification suivantes :

| Modifier                                                                              | Effet                                                                            |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Glisser** (sans modificateur)                                    | Résolution normale — environ 0,5 dB par pixel                                    |
| **Maj + Glisser**                                                                     | Précision augmentée — environ 0,1 dB par pixel                                   |
| Touches fléchées \*\* / \*\* (focus du curseur)                    | Étapes de 0,1 dB                                                                 |
| **Shift +  /文**                                                                  | Étapes fines (0,01 dB)                                        |
| **Ctrl** (Windows) / **Cmd** (macOS) **+ clic** | Rétablir la valeur par défaut                                                    |
| **Alt** (Windows) / **Option** (macOS)          | Par canal seulement — contourne Mic Gain Group, ajuste le canal sélectionné seul |
| **Alt/Option + Maj**                                                                  | Réglage par canal                                                                |

### Raccourcis clavier

| Action                                                                            | macOS               | Fenêtres       |
| --------------------------------------------------------------------------------- | ------------------- | -------------- |
| **Fichier**                                                                       |                     |                |
| Ouvrir le fichier de paramètres                                                   |  O             | Ctrl+O         |
| Enregistrer le fichier de paramètres                                              |  S             | Ctrl+S         |
| Enregistrer le fichier de paramètres comme…                                       |   S       | Ctrl+Maj+S     |
| Ouvrir le profil du moniteur                                                      |   O       | Ctrl+Alt+O     |
| Profil du moniteur d'importation                                                  |   I       | Ctrl+Alt+I     |
| Enregistrer le profil du moniteur                                                 |   S       | Ctrl+Alt+S     |
| Enregistrer le profil du moniteur comme…                                          |    S | Ctrl+Alt+Maj+S |
| Fermer le profil du moniteur                                                      |   W       | Ctrl+Alt+W     |
| **Voir**                                                                          |                     |                |
| Afficher la fenêtre principale (depuis le mode barre de menus) | ⌘⇧1                 | —              |
| Ouvrir la liste des périphériques                                                 |   L       | Ctrl+Maj+L     |
| Ouvrir l'éditeur de profil du moniteur                                            |  M             | Ctrl+Maj+M     |
| Ouvrir Préférences / Options                                                      | ⌘,                  | Ctrl+,         |

### Raccourcis de la matrice de routage

| Action                                                      | Méthode                                                                                   |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Connecter un point de croix                                 | Cliquez à l'intersection                                                                  |
| Connecter une paire stéréo simultanément                    | Maj + clic sur le premier canal                                                           |
| Connecter les entrées numérotées mêmes→diagonales de sortie | Ctrl/Cmd + clic                                                                           |
| Déconnecter                                                 | Cliquez sur le point de croix actif (bleu)                             |
| Défiler la vue de la matrice                                | Roue de défilement / trackpad (ne fait pas défiler la fenêtre entière) |

### Outil de diagnostic

**Menu DADman > À propos de DADman > Copier les informations** _(v5.7.2 et ultérieur)_

Copie la version DADman, la liste des périphériques connectés, la version de l'OS et les versions du pilote dans le presse-papiers. Inclure cela dans toute demande de soutien au DAD.

---

## Étapes suivantes

| Vers…                                                                                                                       | Voir…                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Configurer en profondeur les paramètres du port MADI, Dante ou AES3                                                         | Ch. 7, Section 7.3 — Onglet Conf                              |
| Travailler avec la matrice de routage complète                                                                              | Ch. 7, Section 7.2 — Configuration I/O et patching            |
| Configurer la surveillance immersive (5.1, 7.1.4, Atmos) | Ch. 8, Section 8.1 — Surveiller les profils                   |
| Configurer les préréglages de routage avec un basculement automatique du signal                                             | Ch. 8, Section 8.4 — Contrôle\|Pack                           |
| Gains de microphone de groupe pour batteries, orchestre ou multi-micro                                                      | Ch. 8, Section 8.2 — Groupes de micro                         |
| Connectez DADman à une surface Avid EuControl                                                                               | Ch. 8, Section 8.5 — Intégration de EuCon                     |
| Diagnostiquer un problème de connexion ou audio                                                                             | Ch. 9 — Dépannage                                                             |
| Mettre à jour le logiciel DADman ou le firmware matériel                                                                    | Ch. 10, Section 10.1 — Mise à jour du logiciel et du firmware |

---

_[En attente: les captures d'écran pour les étapes 1, 2, 4, 5, 6, 7, 9 — toutes nécessitent un centre AX connecté à DADman v5.8.2]_
