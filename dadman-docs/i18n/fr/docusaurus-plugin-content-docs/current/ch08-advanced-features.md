---
title: "Chapitre 8 — Fonctionnalités avancées"
sidebar_label: "Ch. 8 — Fonctionnalités avancées"
sidebar_position: 10
---

# Chapitre 8 — Fonctionnalités avancées

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte:** DADman v5.8. build 2  
> **Principal exemple hardware:** DAD AX Center  
> **Statut du chapitre :** Brouillon v0. — Sections 8.1–8. 5 brouillons; PRO\|MON et Cue\|Mix en attente de documentation d'ingénierie DAD ; tables de paramètres SPQ et MIDI en attente ; captures d'écran en attente  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section              | Fonctionnalités                                                        | Version requise                                                 |
| -------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------- |
| 8.1  | Profils du moniteur – configuration et gestion                         | Toutes les versions                                             |
| 8.2  | Groupes de Micro Gain                                                  | v5.8.1 et plus tard             |
| 8.3  | Paramètres de clonage entre les unités                                 | v5.6.9 et plus tard             |
| 8.4  | Pack — Préréglages de routage                                          | v5.8.0 et plus tard             |
| 8.5  | Intégration de EuCon                                                   | Toutes les versions                                             |
| 8.6  | DADLink                                                                | v5.6.9 et plus tard             |
| 8.7  | Exécuter DADman dans la barre de menus ou dans la zone de notification | v5.7.0 et plus tard             |
| 8.8  | Gestion des fichiers et accès en ligne de commande                     | v5.7.0 et plus tard             |
| 8.9  | Référence des préférences DADman                                       | Toutes les versions                                             |
| 8.10 | Carte de son virtuelle Dante comme source de moniteur                  | Toutes les versions                                             |
| 8.11 | Configuration du niveau de sortie analogique                           | Toutes les versions                                             |
| 8.12 | Carte de traitement des haut-parleurs SPQ                              | Toutes les versions (nécessite la carte SPQ) |
| 8.13 | Workflow de surveillance Dolby Atmos                                   | Toutes les versions                                             |
| 8.14 | LTC sur Dante                                                          | Toutes les versions                                             |
| 8.15 | Contrôle MIDI et outils Pro PRE Emulation                              | Toutes les versions                                             |
| —                    | Système de moniteur MON                                                | _(documentation en attente)_                 |
| —                    | Mixte Zéro Latence Mixte                                               | _(documentation en attente)_                 |

---

## 8.1 Profils de moniteur — Configuration et gestion

### 8.1.1 Concept

Un **Profil Monitor** (extension de fichier `. mprof`) définit la configuration complète du contrôleur de moniteur pour une unité matérielle contrôlée par DADman : quelles sources peuvent être surveillées, quels sont les ensembles de sortie de haut-parleurs sont disponibles, comment sont gérés les doublons et les correspondances hautes, les paramètres de délai, le routage de talkback et les sorties de comptage externe.

Un profil de moniteur est entièrement séparé du fichier de configuration de l'unité (`.dms`). Le même routage physique et la même configuration de gain peuvent être utilisés avec plusieurs configurations de surveillance différentes en chargeant différents profils, sans modifier aucun autre paramètre d'unité.

> **REMARQUE:** Les profils de moniteurs sont stockés sur l'ordinateur et non dans l'unité matérielle. Ils doivent être chargés dans DADman chaque fois que l'application est lancée (sauf si **Ouvrir le dernier fichier au démarrage** est activé pour les profils). Si DADman est fermé ou que l'ordinateur est éteint, le contrôleur de moniteur continue à fonctionner dans le dernier état envoyé à l'unité, mais aucun contrôle supplémentaire du moniteur n'est possible jusqu'à ce que DADman relance avec le profil chargé.

### 8.1.2 Ouverture de l'éditeur de profil de moniteur

Ouvrez l'éditeur de profil de moniteur via **Paramètres > Profil de surveillance** (macOS: **文 M** / Windows: **Ctrl+Maj+M**).

L'éditeur a cinq onglets : **Sources**, **Sorties**, **Downs**, **Delay**, et **MOM**.

### 8.1.3 Configuration des Sources

Une source est tout chemin de signal que les opérateurs devraient pouvoir sélectionner pour surveiller. Les sources typiques incluent la sortie stéréo d'un DAW, un flux Dante, une source invitée, ou un flux de confiance.

**Pour ajouter une source:**

1. Dans l'onglet \*\*Sources \*\*, cliquez avec le bouton droit de la souris et sélectionnez **Ajouter une nouvelle source**.
2. Double-cliquez sur le nom de la source pour la renommer (par exemple, `Pro Tools`, `Guest`, `Dante Player`).
3. Faites un clic droit sous **Mode** et sélectionnez **Set Group Format** — choisissez le nombre de canaux et le format (Mono, Stereo, 5.1, 7.1.4, etc.).
4. Pour chaque canal de la source, cliquez avec le bouton droit sur le champ d'affectation du canal et sélectionnez l'entrée correspondante dans la matrice de routage. Utilisez des entrées Dante, MADI, AES3 ou analogiques comme disponibles sur le matériel connecté.

_[Placeholder: screenshot — Onglet Sources avec deux sources configurées (Pro Tools stéréo, Dante 7.1)]_

### 8.1.4 Configuration des ensembles de sortie

Un **ensemble de sorties** définit un groupe de canaux de sortie physiques utilisés comme configuration de haut-parleurs. Plusieurs ensembles de sortie peuvent être définis en utilisant des sorties physiques différentes (par exemple, stéréo à proximité de champ vs. environ), ou les mêmes sorties physiques avec des niveaux de découpe différents (par exemple, 85 dB SPL vs. 75 dB SPL).

**Pour ajouter un ensemble de sorties:**

1. Dans l'onglet **Sorties**, faites un clic droit et sélectionnez **Ajouter un nouvel ensemble de sorties**.
2. Nommez le jeu de sortie (par exemple, `Near Field`, `5.1 Surround`, `85 dB SPL`).
3. Assigner un **Format de Groupe** correspondant à la configuration du haut-parleur.
4. Assigner chaque canal à une sortie analogique physique sur le matériel.
5. Définit une valeur **Trim** si cet ensemble de sortie nécessite un décalage de niveau fixe (utile pour les préréglages de niveau de référence).

> **NOTE:** Une fois que les canaux de sortie sont alloués à un préréglage de routage dans Control\|Pack, elles sont verrouillées et ne peuvent pas être connectées via la matrice de routage DADman ou le profil de moniteur. Voir [Section 8.4 — Contrôle\|Pack].

_[Placeholder: screenshot — Onglet Sortie montrant la stéréo et les ensembles de sortie 5.1]_

### 8.1.5 Niveaux de référence et préréglages SPL multiples

La fonction de niveau de référence verrouille la sortie du moniteur sur une SPL calibrée sans risque d'ajustement accidentel.

**Pour configurer un niveau de référence :**

1. À l'aide de tonalités de test et d'un compteur SPL calibré, réglez le niveau principal de l'onglet Mon sur le SPL de monitoring souhaité.
2. Dans **Paramètres > Profil du moniteur**, ouvrez l'ensemble de sortie correspondant.
3. Entrez le niveau calibré comme **Niveau de référence** pour ce jeu de sortie.
4. Appuyez sur **Ref** dans l'onglet Mon pendant les sessions pour revenir instantanément à ce niveau.

**Pour créer plusieurs préréglages de niveau de référence sur les mêmes sorties physiques:**

Définissez deux jeux de sortie pointant vers les mêmes sorties physiques, mais avec des valeurs de coupe différentes. Par exemple :

| Nom de l'ensemble de sortie | Outputs | Ajuster | SPL étalonné |
| --------------------------- | ------- | ------- | ------------ |
| Près du champ 85 dB         | 1-2 DA  | 0 dB    | SPL 85 dB    |
| Près du champ 75 dB         | 1-2 DA  | -10 dB  | SPL 75 dB    |

Les deux ensembles de sortie apparaissent comme des options de haut-parleurs sélectionnables dans l'onglet Lun. Basculer entre eux permet de changer instantanément de niveau SPL sans toucher aux contrôles de gain physique.

### 8.1.6 Fold-Downs et Up-Matching

L'onglet **Plier** définit les matrices qui convertissent entre les formats de haut-parleurs — par exemple, pliant un 7. mixez en stéréo pour une vérification de la compatibilité, ou en fonction d'une source stéréo à une disposition personnalisée du haut-parleur.

**Standard fold-down :** DADman inclut des matrices pliées standard (par exemple, 5.1 vers stéréo). Sélectionnez le format d'entrée et de sortie et DADman génère les coefficients de mixage appropriés.

**Matrices personnalisées (routage sélectif ou haut) :** Faites un clic droit sur une entrée pliable existante et sélectionnez **Ajouter une nouvelle matrice**. Vous pouvez définir le format d'entrée et de sortie à la même valeur — en créant effectivement un préréglage de routage personnalisé dans le chemin du moniteur. Cette technique permet des applications créatives repliées :

_Exemple — Sélection du sous-ensemble des haut-parleurs :_ Définissez une matrice `Tops seulement` à 7.1.4 → 7.1.4. Dans l'éditeur de la matrice, acheminez seulement les quatre canaux généraux (Lt1, Rt1, Ltm, Rtm) vers leurs sorties correspondantes, laissant tous les autres canaux silencieux. En sélectionnant ce "pli-down" dans la patte lun, on calcule efficacement les haut-parleurs du plafond sans modifier le mixage principal.

_Exemple — Gestion des basses :_ Définissez des matrices pliées personnalisées qui acheminent le contenu de basse fréquence vers une sous-sortie avec des coefficients de rolloff appropriés, même si le format source ne contient pas de canal LFE.

### 8.1.7 Configuration Talkback

Talkback achemine un microphone ou une autre source dans le casque du talentueux lorsqu'il est activé. Configurer Talkback dans **Réglages > Profil du moniteur > Sorties**.

**Modes de Talkback** _(v5.7.0 et ultérieur):_

| Mode             | Comportement                                                                                                                                                                       | Quand utiliser                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Active/Latch** | La première pression active Talkback ; la seconde pression désactive la synthèse. Maintenir les interrupteurs plus longs entre les états de latch. | Environnements de studio où l'ingénieur a besoin d'un talkback mains libres         |
| **RAW**          | Talkback n'est actif que lorsque le bouton est maintenu; relâche lorsque le bouton est relâché.                                                                    | Diffusion dans des environnements où le verrouillage accidentel serait perturbateur |

> **REMARQUE:** Le mode RAW s'applique au contrôle du matériel MOM et au bouton de talkback du panneau avant MTRX Studio. Les surfaces de contrôle EuCon utilisent toujours le mode Active/Latch quel que soit ce paramètre.

### 8.1.8 Salle de contrôle des écouteurs

Par défaut, la sortie du casque est un mixage **Cue** séparé, indépendant de la sélection du haut-parleur de la salle de contrôle. Pour que la sortie du casque surveille automatiquement la source sélectionnée sur les haut-parleurs de la salle de contrôle principale:

1. Dans **Réglages > Profil du moniteur > Sorties**, définissez le **Mode moniteur** de la sortie du casque à **Maître**.
2. Définit le **mode moniteur** du set de sortie du haut-parleur de la salle de contrôle en **Cue**.

**Résultat :** La sortie du casque est maintenant affectée à la sélection du moniteur — quelle que soit la source active sur les haut-parleurs de la salle de contrôle, la même source joue à travers les écouteurs. La sélection de la source, le rabais, et la coupure/atténue tous les éléments suivent la salle de contrôle.

> **NOTE — Limitation:** Lorsque DADman ne fonctionne pas, l'unité matérielle revient à son mode de fonctionnement par défaut. Dans ce repli, le routage du groupe Cue ne se traduit pas par l'état par défaut du matériel, de sorte que le casque peut ne pas suivre la salle de contrôle lorsque DADman est hors ligne. Comme solution de contournement, configurez DADman pour le lancer automatiquement à la connexion. Voir [Section 8.7 — Exécution de DADman dans la barre de menu ou dans la barre de menu de la barre de menu ou dans la barre d'état système].

### 8.1.9 Sauvegarde et chargement des profils de moniteur

| Action                                                                                | macOS                                        | Fenêtres                                     |
| ------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| Ouvrir le profil                                                                      |   O                                | Ctrl+Alt+O                                   |
| Importer un profil (à partir de n'importe quelle unité compatible) |   I                                | Ctrl+Alt+I                                   |
| Enregistrer le profil                                                                 |   S                                | Ctrl+Alt+S                                   |
| Enregistrer le profil sous…                                                           |    S                          | Ctrl+Alt+Maj+S                               |
| Fermer le profil                                                                      |   W                                | Ctrl+Alt+W                                   |
| Ouvrir le profil récent                                                               | Menu principal → **Ouvrir le profil récent** | Menu principal → **Ouvrir le profil récent** |

**Profil Importer:** La fonction **Fichier > Profil Importation…** importe un Profil de Surveillance à partir de n’importe quelle unité connectée compatible et effectue une correspondance optimale avec les E/S disponibles du matériel actuel. Ceci est utile lors de la migration d'un profil entre unités avec différentes configurations d'E/S.

---

## 8.2 Groupes de Mic Gain _(v5.8.1 build 6 and later)_

### 8.2.1 Concept

Les groupes de Gain de Micro permettent de relier plusieurs canaux d'entrée analogique de sorte que l'ajustement du gain ou du muet sur n'importe quel canal unique déplace tous les canaux du groupe simultanément, tout en préservant les décalages relatifs de gain entre les canaux. Ceci est conçu pour des installations multi-micro — batteries, ensembles d'orchestre, chœur ou des tableaux d'enregistrement de l'emplacement — où des relations de gain entre les canaux doivent être maintenues entre les ajustements.

Les groupes Mic Gain sont supportés sur tous les matériels **excepté MTRX Studio**. Une mise à jour du firmware est requise (Family 1: v2.4.5.1 ou ultérieur; Thunder\|Core: v1.1.1.1 ou ultérieur).

**Paramètres groupés :** Gain et muet.  
**Non groupé:** Puissance fantôme (+48 V) et inversion de phase (Ø). Elles restent contrôlées individuellement même lorsque les canaux sont en groupe.

### 8.2.2 Création et gestion de groupes

**Pour ajouter un salon à un groupe:**

1. Dans l'onglet **AD**, faites un clic droit sur le contrôle de gain d'un canal (ou utilisez le menu contextuel du canal).
2. Sélectionnez **Ajouter au groupe de gains** et choisissez un numéro de groupe (les groupes sont numérotés; vous pouvez créer plusieurs groupes indépendants).
3. Répétez pour chaque canal à inclure dans le groupe.

**Pour retirer un salon d'un groupe:**

Faites un clic droit sur le contrôle du gain et sélectionnez **Supprimer du groupe de Gains**.

### 8.2.3 Comportement du Groupe

Lorsque plusieurs canaux partagent un groupe:

- Déplacer le curseur de gain sur n'importe quel canal groupé déplace **tous les canaux du groupe** par le même incrément. Le décalage relatif entre les canaux est préservé.
- La mise en sourdine de tout canal groupé rend muet tous les canaux du groupe.

**Substitution de canal individuel — Modificateur Alt/Option :**

Maintenir **Alt** (Windows) ou **Option** (macOS) en ajustant le gain ou le muet d'un canal uniquement sur ce canal, en contournant le groupe:

| Action                                                           | Avec Alt/Option                               |
| ---------------------------------------------------------------- | --------------------------------------------- |
| Glisser la souris sur le curseur de gain                         | Ajuste seulement le canal sélectionné         |
| Clavier  /文(curseur de gain sélectionné) | Ajuste seulement le canal sélectionné         |
| Cliquer sur le champ de valeur de gain sous le curseur           | Ajuste seulement le canal sélectionné         |
| Click Mute                                                       | Muet/réactive uniquement le canal sélectionné |

### 8.2.4 Comportement EuCon

Lors du contrôle des canaux groupés via une surface Avid EuControl :

- Les curseurs et boutons obtenus sur les surfaces EuCon affectent le groupe (tous les canaux se déplacent ensemble).
- Mute d'une surface EuCon affecte tous les canaux groupés simultanément.

> **REMARQUE :** La substitution Alt/Option par canal n'est disponible que via la souris/clavier dans DADman — elle ne peut pas être déclenchée à partir d'une surface EuCon.

---

## 8.3 Paramètres de clonage entre les unités _(v5.6.9 et ultérieur)_

### 8.3.1 Concept

La fonction **Clone** copie tous les paramètres d'une unité matérielle à une autre dans la même famille de matériels. Il est utile pour dupliquer une configuration connue vers une seconde unité identique, restauration des paramètres à une unité de remplacement ou initialisation d'une nouvelle unité à partir d'un profil existant.

Le clonage n'est autorisé qu'entre les unités du même groupe familial :

| Famille   | Membres                                                 |
| --------- | ------------------------------------------------------- |
| Famille 1 | MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s |
| Famille 2 | MTRX II · AX64 · AX Center · Core 256                   |
| Famille 3 | Studio MTRX                                             |

### 8.3.2 Procédure de clonage

**Pour cloner d'une unité connectée à une autre:**

1. Dans la liste des périphériques, cliquez avec le bouton droit de la souris sur l'unité **target** (celle qui reçoit les paramètres).
2. Sélectionnez **Cloner à partir de…** et choisissez l'unité source dans la liste.
3. Confirmez l'opération de clonage.

**Pour cloner à partir d'un fichier de paramètres enregistré vers une unité connectée :**

1. Ouvrez le fichier de configuration `.dms` via **Fichier > Ouvrir…**.
2. Cliquez avec le bouton droit de la souris sur l'unité cible dans la liste des périphériques.
3. Sélectionnez **Cloner à partir du fichier** et choisissez l'unité de la source dans le fichier de configuration chargé.

> **PRÉCAUTION :** Le clonage écrase tous les paramètres de l'unité cible. Assurez-vous que les paramètres de l'unité cible ont été enregistrés dans un fichier `.dms` avant de continuer si la récupération est nécessaire.

### 8.3.3 Comportement d'unités non identiques

Pour de meilleurs résultats, les unités source et cible doivent être configurées de manière identique, les mêmes types de cartes installées dans les mêmes positions de créneaux. Lorsque les configurations diffèrent :

- Les paramètres pour les cartes présentes dans la source mais absents dans la **même position d'emplacement** sur la cible sont définis aux valeurs par défaut de la cible.
- Les paramètres des cartes présentes dans la cible mais absents dans la source ne sont pas modifiés.

---

## 8.4 Control|Pack — Préréglages de routage _(v5.8.0 build 8 and later)_

### 8.4.1 Concept

Control\|Pack fournit un système de préréglage de routage pour les produits Thunder\|Core (AX64, AX Center, Core 256). Jusqu'à 32 préréglages de routage peuvent être définis par unité, avec jusqu'à quatre couches d'entrée indépendantes — appelées **seaux** — qui changent simultanément jusqu'à 256 sources vers 256 destinations simultanément dans un seul échantillon audio.

Le changement entre les segments peut être :

- **Manuel** — déclenché par l'opérateur de la Control\|Bande de Pack de DADman
- **Automatisé** — déclenché par des détecteurs de signaux intégrés qui surveillent les canaux d'entrée pour la présence de signaux, l'intégrité de la tonalité du pilote AE6 ou la connectivité au niveau du port

Les préréglages du pack sont stockés dans l'unité matérielle Thunder\|Core. Ils peuvent être contrôlés à partir de plusieurs instances DADman simultanément, et à partir d'un panneau matériel dédié Control\|Pack sans aucune connexion DADman.

**Firmware requis :** Thunder\|Core firmware v1.1.0.3 ou supérieur.

### 8.4.2 Caractéristiques clés

| Paramètre                                                                       | Valeur                                                            |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Nombre maximum de présélections par unité                                       | 32                                                                |
| Nombre maximum de segments (calques d'entrée) par préréglage | 4                                                                 |
| Sources maximum par segment                                                     | 256                                                               |
| Sorties maximum par préréglage                                                  | 256                                                               |
| Temps de commutation (commutateur de bucket, automatique)    | Dans 1 échantillon audio                                          |
| Temps de commutation (manuel, sélection directe)             | 0 échantillons audio                                              |
| Détection du signal / temps de réponse du déclencheur                           | < 1 ms                                   |
| Générateurs de signaux (intégrés)                            | Tonalité du pilote sinusoïdale · Tonalité du pilote numérique AE6 |

### 8.4.3 Générateurs de Signal

Chaque unité Thunder\|Core comprend deux générateurs de signaux intégrés :

| Générateur                        | Type de texte                                                           | Paramètres                                                                      |
| --------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Sine wave pilot tone**          | sinus continu                                                           | Niveau: -60 à 0 dBFS; Fréquence: 20 Hz à 20 kHz |
| **Tonalité pilote numérique AE6** | Signal répétitif binaire (valeur hexadécimale 0xAE6) | Schéma fixe                                                                     |

Les générateurs de signaux peuvent être acheminés vers n'importe quelle sortie de l'unité via la matrice de routage. Le signal AE6 est conçu pour une vérification d'intégrité — il peut être détecté à l'extrémité de la réception pour confirmer que la chaîne du signal n'est pas traitée et non modifiée. Si le signal AE6 passe par un convertisseur de fréquence d'échantillonnage, un stade analogique ou un changement de niveau, son modèle est modifié et il ne peut pas être reconnu.

### 8.4.4 Trigger Types

Chaque segment peut être assigné jusqu'à quatre sources de déclenchement. Trois types de déclenchement sont disponibles :

| Type de déclencheur  | Détecte                                                                 | Notes                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Niveau de Signal** | Présence de signal audio au-dessus de -40 dBFS dans une fenêtre de 1 ms | Fonctionne avec n'importe quelle entrée analogique ou numérique                                                        |
| **AE6**              | Intégrité du ton du pilote numérique AE6 sur une entrée numérique       | Le signal doit être non traité (pas de SRC, pas de changement de niveau) pour une détection réussie |
| **Port**             | Etat de connectivité du port physique                                   | Thunderbolt 3, MADI, DADLink, ADAT ou les ports AES3                                                                   |

### 8.4.5 Configuration des préréglages de routage

Ouvrez l'éditeur de préréglage de routage dans **Paramètres > Préréglages de routage**.

La configuration suit quatre étapes:

**Étape 1 : Sélectionnez l'unité cible**

Dans la liste déroulante en haut de la fenêtre de préréglage de routage, sélectionnez l'unité Thunder\|Core à configurer. Si l'unité n'est pas connectée, cliquez sur **Ouvrir la liste des périphériques** pour la connecter d'abord.

**Étape 2: Ajoute un préréglage de routage**

Faites un clic droit dans la liste de préréglage et sélectionnez **Ajouter un préréglage**. Entrez un nom et le nombre de canaux de sortie pour le préréglage. Activez le préréglage en cochant sa case à cocher. Les préréglages peuvent être réordonnés dans la liste _(v5.8.1 et ultérieur)_.

**Étape 3 : Configurer les segments et les déclencheurs**

Pour chaque segment du préréglage :

1. Faites un clic droit sur le champ **Source Set Name** et entrez un nom pour le bucket (par exemple, `Pro Tools`, `Backup DAW`, `Test Generator`).
2. Définit la **priorité de déclenchement** pour le segment. Les seaux avec un numéro de priorité plus élevé sont préférés lorsque leurs détecteurs signalent un signal valide. Si tous les segments ont la même priorité, le changement est manuel seulement.
3. Sélectionnez jusqu'à quatre **Sources de déclenchement** à partir des entrées disponibles. Combinaison de types de déclencheur (Signal Level + AE6) pour une détection robuste des défaillances.

**Changement automatique de logique :**

- Le segment avec la **priorité la plus élevée** où tous les détecteurs assignés rapport OK sont acheminés vers les sorties.
- Si les détecteurs du segment actif signalent une erreur, le système passe au segment suivant avec tous les détecteurs OK.
- La substitution manuelle est toujours disponible — double-cliquez sur un bouton de bucket pour le forcer quel que soit le statut du détecteur.

**Étape 4: Attribuer des canaux d'entrée et de sortie**

Cliquez avec le bouton droit sur la colonne du canal de sortie pour sélectionner les canaux de sortie disponibles sur l'unité. Cliquez avec le bouton droit de la souris sur chaque colonne d'entrée (seaux) pour assigner les canaux source. Une fois que les sorties sont assignées à un preset, ils sont **verrouillés** — ils ne peuvent pas être connectés via la matrice de routage DADman ou le profil de moniteur lorsque le préréglage est actif.

_[Placeholder: screenshot — Éditeur de préréglage de routage montrant un préréglage à deux compartiments avec des sources de déclenchement configurées]_

### 8.4.6 Operation

Une fois configuré, la bande Control\|Pack apparaît sous les bandes de canal DADman principales. Chaque préréglage est affiché avec des boutons de bucket, des compteurs PPM de source, des compteurs PPM de sortie et des indicateurs de statut de déclenchement.

**État de la couleur du bouton du seau :**

| Couleur   | Sens                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| **Bleu**  | Ce seau est actif — mode manuel (pas de commutation automatisée)        |
| **Vert**  | Ce bucket est actif — mode automatisé, armé et prêt à changer                              |
| **Rouge** | Erreur de détecteur de signal sur ce segment - perte de signal ou défaillance AE6 détectée |

**Basculer entre le mode manuel et le mode automatisé :**

- **Double-cliquer sur un bouton vert** → bascule vers manuel (bouton devient bleu)
- **Double-cliquez sur un bouton bleu** → Automatisation des armes (bouton devient vert)

**Déclencher les indicateurs de statut** en dessous de chaque bouton de bucket affiche le statut pass/échec en temps réel pour chaque détecteur assigné (0-4 indicateurs par segment).

_[Placeholder: capture d'écran — Contrôle\|Bande de pack montrant deux présets, une automatisée (vert), une manuelle (bleu)]_

> **ASTUCE :** Lors d'événements en direct ou de diffusions, l'automatisation des bras (**vert**) pendant la vérification en ligne lorsque le signal est confirmé sur toutes les entrées. Si une entrée échoue pendant la série, le préréglage bascule automatiquement sans intervention de l'opérateur. Double-cliquer sur le segment préféré à tout moment le force quel que soit l'état d'automatisation.

---

## 8.5 Intégration d'EuCon

### 8.5.1 Activer EuCon

DADman communique avec Avid EuControl via le protocole EuCon, activant les surfaces de contrôle Avid (S1, S6, S6L, MTRX Studio avant panneau) et l'application Avid Control pour contrôler les fonctions de surveillance de DADman.

**Pour activer EuCon :**

1. Dans DADman, allez dans **Paramètres > Activer EuCon**.
2. Assurez-vous qu'EuControl fonctionne sur le même ordinateur et est connecté à la surface de contrôle ou à l'application.

### 8.5.2 Lier la surveillance DADman à EuControl

Pour que les contrôles de surveillance apparaissent sur une surface de contrôle Avid ou sur l'application Avid Control, DADman doit être lié à EuControl:

1. Apportez DADman au premier plan (cliquez sur la fenêtre DADman pour en faire l'application active).
2. Dans EuControl, ouvrez l'onglet **Assigner**.
3. Activez la case à cocher de surveillance pour DADman (elle apparaît parce que DADman est au premier plan).

> **ASTUCE:** Si la page de surveillance de Avid Control ne montre qu'un fader maître et aucun autre contrôle, l'étape de liaison n'est pas terminée. Apportez DADman au premier plan et répétez la procédure Assigner onglet.

### 8.5.3 Verrouillage de la surveillance pour DADman

Une fois que la surveillance est liée à DADman, vous pouvez verrouiller la section de surveillance, donc elle reste sous contrôle DADman, quelle que soit l'application actuellement au premier plan:

1. Dans l'onglet EuControl **Assigner**, avec la section de surveillance liée à DADman, cliquez sur **Verrouiller** (ou l'équivalent de votre modèle de surface).
2. Passez à votre application DAW. La section de surveillance de la surface continue de contrôler DADman.

Cela permet aux commandes de transport et de canal de suivre le DAW tandis que la section de surveillance reste assignée en permanence à DADman — le flux de travail standard pour les environnements de post-production et de suivi de musique.

### 8.5.4 EuCon and Mic Gain Groupes

Quand les groupes de Gain de Micro sont configurés :

- Gagnez des curseurs et gagnez des boutons sur les surfaces EuCon déplacent tous les canaux groupés ensemble.
- Mute d'une surface EuCon rend muet tous les canaux groupés.
- La substitution par canal via Alt/Option n'est pas disponible sur les surfaces EuCon.

### 8.5.5 Élargir le bouton Talkback sur un écran tactile

Si le bouton Talkback de l'application Avid Control tactile est trop petit, utilisez la page des **Touches logicielles** et assignez plusieurs boutons de touche programmable à la fonction talkback. Plusieurs boutons adjacents donnent une plus grande efficacité à la cible.

---

## 8.6 DADLink _(v5.6.9 et ultérieur)_

### 6.1 Concept

DADLink est un format d’interconnexion propriétaire à grand nombre de canaux développé par DAD. Il utilise la fente de module mini MADI sur des unités compatibles avec des modules optiques SFP pour transporter l'audio entre les unités à très faible latence.

DADLink est conçu pour connecter directement plusieurs unités DAD — par exemple, reliant un centre AX à un AX64 pour étendre le nombre total de canaux, ou des unités de connexion à différents emplacements physiques au sein d'une installation.

**Matériel compatible :** AX64 · AX Center · Core 256 · AX32 · DX32R · Penta 720 · Penta 721 _(à partir de firmware v2.4.1.2 pour la famille 1)_

### 8.6.2 Capacité du canal

| Taux d'échantillonnage          | Chaînes par connexion DADLink |
| ------------------------------- | ----------------------------- |
| 44.1 / 48 kHz   | Jusqu'à 128 canaux            |
| 88.2 / 96 kHz   | Jusqu'à 64 canaux             |
| 176.4 / 192 kHz | Jusqu'à 32 canaux             |

### 8.6.3 Latence

La latence DADLink est d'environ **1 microseconde** — en fait zéro du point de vue de l'alignement audio. Toutes les entrées et sorties sur les unités connectées via DADLink sont alignées sur la phase à condition que le **Délai Digi** soit réglé sur la même valeur sur chaque unité.

### 8.6.4 Exigences de synchronisation

> **NOTE:** Pour un alignement correct des entrées et sorties entre les unités connectées à DADLink, utiliser **DADLink** ou **Horloge de mot** comme source de synchronisation entre l'unité principale de l'horloge et toutes les unités suivantes. Toutes les unités d'un réseau DADLink doivent partager une source d'horloge commune.

### 8.6.5 Installation matérielle

DADLink nécessite le **mini module MADI** installé dans l'emplacement mini MADI de chaque unité connectée, équipé de modules d'émetteur SFP optiques. Connectez les unités avec des câbles en fibres optiques entre les émetteurs SFP. Reportez-vous au Guide d'installation des modules DADLink et Mini MADI (disponible auprès de [digitalaudiosupport.com](https://www.digitalaudiosupport.com)) pour les types de modules SFP spécifiques et la procédure d'installation.

Une fois installé, les entrées et sorties DADLink apparaissent dans la matrice de routage DADman aux côtés de MADI, Dante et d'autres entrées de format. Le format est visible dans l'onglet Conf où DADLink apparaît comme une option d'interface.

---

## 8.7 Exécuter DADman dans la barre de menu ou dans la zone de notification _(v5.7.0 et ultérieur)_

### 8.7.1 macOS — Menu Bar Modes

DADman peut être configuré pour minimiser sa présence sur le bureau macOS, ce qui le rend approprié pour des installations permanentes où il devrait s'exécuter en arrière-plan. Trois modes sont disponibles dans **DADman > Préférences**:

| Mode                         | Comportement                                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dock uniquement**          | DADman se comporte comme une application macOS normale — visible dans le Dock et la barre des tâches. Par défaut.                                                                                                       |
| **Barre de menu et Dock**    | DADman affiche également une icône dans la barre de menu du système macOS pour un accès rapide.                                                                                                                                         |
| **Barre de menu uniquement** | DADman se cache du Dock lorsque sa fenêtre principale est fermée. Seule l'icône de la barre de menu système est visible. Cliquez dessus pour révéler le menu DADman (Show, Quitter). |

**Pour afficher la fenêtre principale depuis le mode Barre de menu uniquement :**

- Cliquez sur l'icône de la barre de menu DADman → **Afficher**
- Double-cliquez sur un fichier `.dms` ou `.dmprof` dans le Finder
- Appuyez sur **Ω 1**
- Lancez DADman à nouveau depuis les applications

> **REMARQUE :** En mode Barre de menu seulement, si DADman apparaît toujours dans le Dock après avoir changé le paramètre, Faites un clic droit sur l'icône du Dock → **Options > Garder dans Dock** et désactivez-le.

> **NOTE:** En mode barre de menu uniquement avec DADman masqué, DADman n'enregistre pas les fichiers lorsque l'utilisateur se déconnecte ou que le système s'arrête, sauf si **Always Save File** est activé dans les préférences.

### 8.7.2 Windows — System Tray Modes

Sous Windows, configurez le comportement de la zone de notification dans **Paramètres > Options**:

| Mode                                                            | Comportement                                                                                                                                                                                                            |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Barre des tâches uniquement (par défaut)** | DADman se comporte comme une application Windows normale.                                                                                                                                               |
| **Barre des tâches et plateau système**                         | DADman affiche également une icône dans la barre d'état pour un accès rapide.                                                                                                                           |
| **Zone de notification uniquement**                             | DADman ne lance que dans le tiroir. Cliquez avec le bouton gauche de la barre d'état pour afficher la fenêtre principale; cliquez avec le bouton droit pour Afficher/Masquer / Quitter. |

### 8.7.3 Auto-Launch at Login (macOS)

Pour que DADman soit lancé automatiquement à la connexion et charger un fichier de configuration :

**Méthode 1 – Éléments de connexion macOS :**

1. Ouvrez **Paramètres Système > Général > Éléments de connexion**.
2. Cliquez sur **+** et ajoutez **DADman.app** depuis votre dossier Applications.
3. Activez **Ouvrir le dernier fichier au démarrage** dans Préférences pour que DADman charge automatiquement le fichier `.dms` correct.

**Méthode 2 — Lanceur de délai AppleScript** _(pour Sonoma et plus tard, où le masquage des éléments de connexion est restreint) :_

Puisque macOS Sonoma a supprimé la possibilité de masquer les éléments de connexion, utilisez un script de délai pour lancer DADman après la connexion:

```applescript
délai 5
dire à l'application "Finder"
  activer
  ouvrir le fichier d'application "DADman. pp" du dossier "Applications" du disque de démarrage
fin dire
retard 8
dire à l'application "Événements système"
  définir visible du processus "DADman" à faux
dire fin
```

Pour utiliser ce script:

1. Ouvrez **Éditeur de script** (Applications > Utilitaires > Éditeur de scripts).
2. Collez le script, en ajustant les valeurs de délai au besoin.
3. Exporter en tant que **Application** (**Fichier > Exporter** → Format: Application).
4. Ajoutez l'application résultante à **Paramètres Système > Général > Éléments de connexion**.

Le script lance DADman après un délai de 5 secondes, puis le cache après 8 secondes. Ajustez les délais selon la durée de démarrage de votre matériel.

---

## 8.8 Gestion des fichiers et accès à la ligne de commande _(v5.7.0 et ultérieur)_

### 8.8.1 Ouverture de fichiers depuis le Finder ou l'explorateur Windows

Depuis DADman v5.7.0, les fichiers `.dms` et `.dmprof` peuvent être ouverts directement en double-cliquant sur eux dans Finder (macOS) ou Windows Explorer. DADman ouvre, charge le fichier et applique les paramètres aux unités connectées.

Si un fichier `.dms` et un fichier `.dmprof` sont sélectionnés et ouverts simultanément, DADman charge le premier `. fichier ms` trouvé et le premier fichier `.dmprof` trouvé, ignorant les fichiers supplémentaires.

### 8.8.2 Ouverture de fichier en ligne de commande

Ouvrir DADman avec des fichiers spécifiques depuis un terminal ou un script :

**macOS:**

```bash
ouvrir -a DADman /path/to/settings.dms /path/to/profile.dmprof
```

Le `-a DADman` est optionnel, mais garantit que DADman est utilisé même si d'autres applications sont enregistrées pour les fichiers `.dms`.

**Fenêtres:**

```cmd
DADman.exe C:\path\to\settings.dms C:\path\to\profile.dmprof
```

Cela active l'intégration avec les systèmes de contrôle externes, affiche les lanceurs de fichiers, ou les scripts de connexion qui ont besoin de charger une configuration DADman spécifique au démarrage.

### 8.8.3 Ouverture de plusieurs instances DADman (Windows)

Par défaut, l'ouverture de DADman lorsqu'il est déjà lancé amène l'instance existante au premier plan plutôt que de lancer une seconde copie. Pour lancer explicitement une seconde instance indépendante :

```cmd
DADman.exe -m
```

---

## 8.9 Référence des préférences DADman

Accédez aux préférences via **DADman > Préférences** (macOS) ou **Paramètres > Options** (Windows).

| Préférence                                                     | Libellé                                                                                                                                                    | Notes                                                                                                                                                                                                                         |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ouvrir le dernier fichier au démarrage**                     | Charge automatiquement le dernier fichier de configuration `.dms` et l'applique aux unités connectées au lancement                                         | Recommandé pour des installations permanentes; utilisé avec prudence dans les environnements multi-opérateurs                                                                                                                 |
| **Mise en page GUI**                                           | Sélectionne l'un des trois schémas de couleurs de l'interface DADman                                                                                       | Stocké localement ; n'affecte pas le matériel                                                                                                                                                                                 |
| **Taille maximale de la matrice**                              | Définit la taille maximale de la vue détaillée de la matrice de routage : 32×32 (par défaut), 64×64, 128×128 ou 256×256 | Des tailles plus importantes permettent de visualiser plus de la matrice de routage en même temps ; peuvent affecter les performances sur les anciens systèmes _(v5.7.0+)_ |
| **Show Mode** (macOS)                       | Dock uniquement · Barre de menu et Dock · Barre de menu uniquement                                                                                         | Voir [Section 8.7.1]                                                                                                                      |
| **Afficher dans** (Windows)                 | Barre des tâches seulement · Barre des tâches et barre système · Bac système uniquement                                                                    | Voir [Section 8.7.2]                                                                                                                      |
| **Toujours enregistrer le fichier** (macOS) | Enregistre automatiquement le fichier `.dms` actuel lors de la déconnexion, du redémarrage ou de l'arrêt                                                   | Requis pour un fonctionnement fiable en mode barre de menu uniquement                                                                                                                                                         |

---

## 8.10 Carte de son virtuelle Dante en tant que source de moniteur

La **carte de son virtuelle Dante (DVS)** de l'Audinate permet à un Mac ou un PC d'apparaître comme un périphérique audio Dante sur le réseau, routage de la sortie audio système de l'ordinateur vers le réseau Dante et vers n'importe quelle unité matérielle contrôlée par DADman. Ceci est utile pour surveiller la lecture DAW via un DAW qui prend en charge Dante, ou pour utiliser le système audio macOS/Windows (YouTube, Spotify, pistes de référence) à travers le système de moniteur principal sans E/S additionnelles.

### 6.10.1 Prérequis

- Carte de son virtuelle Dante installée et sous licence sur l'ordinateur hôte
- Contrôleur Dante installé (gratuit d'Audinate)
- Une unité contrôlée par DADman avec une entrée Dante (AX Center, Core 256, AX64, AX32 avec carte dante dante, etc.)

### 8.10.2 Procédure de configuration

**Étape 1 — Lancez et configurez DVS**

1. Ouvrez l'application de la carte de son virtuelle Dante.
2. Définit le nombre de canaux requis (par exemple, **8×8** pour une source 7.1 ou 7.1.2).
3. Appuyez sur **Démarrer** pour activer le service DVS. L'ordinateur apparaît maintenant comme un périphérique Dante sur le réseau.

**Étape 2 — Patch DVS to the hardware unit in Dante Controller**

1. Ouvrez le **contrôleur Dante**.
2. Dans la matrice **Routing**, localisez l'émetteur DVS (il apparaîtra sous le nom d'hôte de l'ordinateur).
3. Routez les sorties DVS vers les canaux d'entrée Dante désirés sur l'unité matérielle DADman (e. ., DVS donne 1–8 → MTRX Dante entrées 1–8, ou les entrées AX Center Dante 1-8).

**Étape 3 — Définit la sortie audio du système en DVS (macOS)**

Maintenez **Option** et cliquez sur l'icône de volume macOS dans la barre de menus, puis sélectionnez la carte audio virtuelle Dante comme périphérique de sortie système. Alternativement, définissez-le dans **Paramètres de la console > Son > Sortie**.

\*\*Étape 4 — Ajouter une source de DVS dans le profil du moniteur DADman \*\*

1. Dans DADman, allez dans **Paramètres > Profil du moniteur**.
2. Dans l'onglet \*\*Sources \*\*, cliquez avec le bouton droit de la souris et sélectionnez **Ajouter une nouvelle source**.
3. Nommez la source (par exemple, `DVS`, `System Audio`, `Mac Output`).
4. Faites un clic droit sur la colonne **Mode** et sélectionnez **Set Group Format** — choisissez le nombre de canaux correspondant à votre configuration DVS (Stereo, 5.1, 7.1, etc.).
5. Pour chaque canal, cliquez avec le bouton droit sur l'assignation du canal et sélectionnez le canal d'entrée Dante correspondant qui reçoit le signal DVS (comme patché dans Dante Controller).

**Étape 5 — Vérifiez**

Retournez à l'onglet DADman **Mon**. La source DVS devrait maintenant apparaître comme une source de moniteur sélectionnable. Écouter de l'audio sur l'ordinateur — vous devriez voir le compteur sur la ligne source DVS.

> **NOTE :** La source du DVS n'apparaîtra dans la liste des sources du moniteur que lorsque DADman aura un profil de moniteur actif chargé avec la source de DVS configurée. Si un autre profil est chargé, la source DVS n'est pas accessible tant que le profil correct n'est pas rechargé.

---

## 8.11 Configuration de niveau de sortie analogique

Le niveau de sortie analogique de l'onglet **DA** définit l'alignement du signal entre le domaine numérique de l'unité matérielle (en dBFS) et son niveau de sortie analogique (en dBu). Il s'agit d'un réglage d'étalonnage - il ne s'agit pas d'un contrôle de niveau opérationnel.

### 8.11.1 Concept

Le curseur de niveau de sortie DA spécifie quel niveau analogique correspond à 0 dBFS. Il ne contrôle pas le niveau de monitoring ; le volume de monitoring est contrôlé par le fader dans l'onglet **Mon**. Le réglage du niveau de sortie en DA existe uniquement pour aligner la sortie analogique du matériel sur les exigences de la salle de tête de l'équipement en aval.

**Exemple:** Si le niveau de sortie DA est défini à +18 dBu, un signal numérique dBFS 0 produit +18 dBu sur la sortie analogique. Si équipement en aval (amplificateur de puissance ou moniteur actif) clips à +18 dBu, un signal à 0 dBFS va couper l'amplificateur — donc le niveau DA doit correspondre à la spécification d'entrée maximale de l'équipement en aval.

> **PRÉCAUTION :** Définir un niveau de sortie de DA élevé n'est pas toujours avantageux. Réglage de +24 dBu lorsque les clips de l'équipement en aval à +18 dBu provoqueront le clip de l'entrée de 6 dB avant l'échelle numérique. Toujours correspondre au niveau de sortie en DA à la spécification d'entrée maximale des amplificateurs ou moniteurs connectés.

### 8.11.2 Plage de niveau de sortie

Les sorties de la ligne DA (sur les connecteurs DB25) offrent deux plages de niveau de sortie maximum sélectionnables :

| Range                 | Portée du slider                   |
| --------------------- | ---------------------------------- |
| -66 dBu à **+18 dBu** | Par défaut                         |
| -60 dBu à **+24 dBu** | Activé par le bouton **Gain 6 dB** |

Activer le bouton **Gain de 6 dB** sur un canal pour étendre sa plage de sortie à +24 dBu. Ceci est approprié lorsque vous vous connectez à un équipement professionnel avec des entrées maximales de +24 dBu.

### 8.11.3 Configuration par canal

Différents canaux de sortie peuvent être réglés à différents niveaux analogiques, ce qui permet de connecter des équipements mixtes à partir d'une seule unité. Par exemple, les moniteurs de proximité alimentés par un amplificateur de puissance stéréo clipping à +18 dBu peuvent être configurés à +18 dBu, alors que les haut-parleurs ambiophoniques alimentés à partir d'amplificateurs avec une tête de +24 dBu peuvent être réglés sur +24 dBu sur la même unité.

_[Placeholder: capture d'écran — onglet DA affichant des curseurs de niveau de sortie par canal avec des valeurs de calibration différentes]_

---

## 8.12 Carte de traitement des haut-parleurs SPQ

La carte **SPQ (Speaker Processing)** est une carte d'extension DSP optionnelle pour les unités matérielles DAD compatibles (variantes AX32 et MTRX). Il fournit l'EQ paramétrique par voie voie sur les sorties du moniteur analogique, permettant la correction de haut-parleur intégré et de salle sans processeur externe dans le chemin du signal.

> **REMARQUE:** La carte SPQ est une option matérielle. Il doit être installé physiquement dans l'unité. Si aucune carte SPQ n'est présente, l'onglet SPQ n'apparaît pas dans DADman.

### 8.12.1 Aperçu du flux de travail SPQ

Le workflow SPQ typique est :

1. **Mesurez la pièce** à l'aide d'un logiciel de mesure acoustique (par exemple, l'**Assistant EQ de pièce** gratuit, disponible sur roomeqwizard.com). Utilisez un microphone de mesure calibrée à la position d'écoute.
2. **Générer des filtres de correction de QE** à partir des résultats de mesure dans le logiciel de mesure.
3. **Importer les filtres** dans DADman via l'onglet SPQ. DADman accepte les données EQ dans un format d'exportation compatible avec l'assistant Room EQ.
4. **Appliquer la correction** — la carte SPQ traite les sorties analogiques en temps réel en utilisant les coefficients de filtres importés.

### 8.12.2 Onglet SPQ à DADman

L'onglet SPQ apparaît dans DADman quand une carte SPQ compatible est détectée dans l'unité connectée. Dans l'onglet SPQ, vous pouvez:

- Voir et éditer les courbes EQ par sortie
- Importer des données de mesure depuis l'Assistant EQ de la salle
- Activer ou contourner le traitement SPQ par canal de sortie
- Enregistrer les configurations SPQ dans le fichier de configuration de l'unité (`.dms`)

> **REMARQUE:** Les paramètres SPQ sont stockés sur l'unité matérielle, pas dans le profil du moniteur. Ils persistent à travers les sessions DADman sans avoir à charger un profil.

_[Placeholder : référence complète des paramètres SPQ et procédure d'importation étape par étape de l'assistant EQ — documentation technique en attente de DAD]_

---

## 8.13 Dolby Atmos Monitoring Workflow

Le système de profil de DADman prend en charge la surveillance Dolby Atmos depuis la configuration d'une seule unité jusqu'à la configuration 64 voies. Ce qui suit est une vue d'ensemble conceptuelle d'un chemin de signalisation typique Dolby Atmos à l'aide d'une unité contrôlée par DADman.

### 8.13.1 Aperçu du Signal Flow

Une chaîne de surveillance typique Dolby Atmos :

```
Pro Tools (Atmos session)
      Ω(DADLink / MADI / Dante)
Dolby Renderer (e. ., Dolby Atmos Mastering Suite / Renderer)
      文(speaker feeds — up to 9. .6 ou au-delà)
Unité matérielle DADman (DA sorties)
      Ω(analogique)
amplificateurs et haut-parleurs haut-parleurs
```

DADman gère la couche de contrôle du moniteur final — sélection de la source, niveau, pliage et dim/cut — sur les flux de sortie des haut-parleurs.

### 8.13.2 Créer un format de groupe personnalisé

Les formats standard du groupe DADman couvrent jusqu'à 7.1.4. Pour les configurations Atmos plus grandes (9.1.6, 7.1.6, etc.), un **format de groupe personnalisé** doit être défini :

1. Dans **Paramètres > Profil du moniteur**, allez dans l'onglet **Sorties**.
2. Faites un clic droit et sélectionnez **Ajouter un format de groupe personnalisé**.
3. Définissez le nombre de canaux et les étiquettes de mise en page des haut-parleurs (ex: L, C, R, Ls, Lss, Rss, Lts, Rts…).
4. Enregistrez le format, puis assignez-le à l'ensemble de sortie approprié.

### 8.13.3 Sources et retours du moteur de rendu Dolby

Ajouter chaque ensemble de sorties de rendu comme source séparée dans le profil du moniteur :

| Source                      | Canaux                                                                      | Objectif                                               |
| --------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| Atmos plein                 | 9.1.6 (ou lit configuré) | Flux de haut-parleurs Atmos complet du moteur de rendu |
| Stereo Downmix              | 2.0                                                         | Renvoi du mix stéréo stéréo ITU du générateur          |
| Binaurale                   | 2.0                                                         | Retour binaural casque du lecteur de rendu             |
| 5.1 Downmix | 5.1                                                         | Compatibilité 5.1 du moteur de rendu   |

### 8.13.4 Fold-Downs pour Atmos

Utilisez l'onglet **Replier vers le bas** pour ajouter des options de surveillance de compatibilité qui ne nécessitent pas de changement de source sur le moteur de rendu — par exemple, plid-downs qui appliquent une somme stéréo des canaux de haut-parleurs Atmos directement dans DADman pour une vérification rapide de mono ou de stéréo étroit. Ces compléments, plutôt que de remplacer, les sorties de downmix du moteur de rendu.

> **REMARQUE:** Pour les vrais mixages Dolby-specification, utilisez toujours les sorties de downmix Dolby Renderer plutôt que DADman fold-downs. Les dépliants DADman ne sont pas des processus certifiés Dolby.

_[Placeholder: capture d'écran — profil de moniteur 9.1.6 avec les sources Atmos configurées]_

---

## 8,14 LTC sur Dante

Les unités contrôlées par DADman avec une interface Dante peuvent transporter **LTC (Linear Timecode)** dans un canal audio Dante. Cela permet de distribuer une source de code temporel à travers le réseau Dante à n'importe quelle unité sur le même réseau sans câblage de timecode dédié.

### 8.14.1 Concept

LTC est un signal de fréquence audio qui encode le code temporel SMPTE sous forme d'onde audio. Parce qu'il occupe la même plage de fréquences que l'audio, il peut être acheminé à travers n'importe quel canal Dante comme s'il s'agissait d'un signal audio mono — il ne nécessite aucune configuration Dante spéciale.

### 8.14.2 Configuration

**Pour envoyer de LTC sur Dante :**

1. Connectez la source LTC (générateur de code temporel matériel, sortie DAW, etc.) à une entrée analogique ou numérique disponible sur l'unité matérielle DADman.
2. Dans l'onglet **Con** de DADman, acheminez l'entrée LTC vers un canal de sortie Dante.
3. Dans **Dante Controller**, acheminez ce canal Dante vers n'importe quelle unité réceptrice du réseau.

**Pour recevoir LTC sur une unité connectée :**

1. Dans Dante Controller, acheminez le canal LTC Dante à une entrée appropriée sur l'unité de réception.
2. Connectez cette entrée au timecode de n'importe quel périphérique en aval qui accepte LTC.

> **REMARQUE:** LTC est une forme d'onde analogue. S'il passe par un convertisseur de fréquence d'échantillon, le signal timecode peut être corrompu. Assurez-vous que toutes les unités du réseau Dante partagent la même source d'horloge (par exemple, Word Clock, PTP/IEEE 1588) pour éviter l'insertion du SRC sur le canal timecode. Voir [Section 8.6.4 — Exigences de synchronisation DADLink].

---

## 8.15 MIDI Control and Pro Tools PRE Emulation

DADman peut être connecté via MIDI à Pro Tools, permettant à Pro Tools de traiter les commandes de gain de préampli sur une unité connectée à DADman comme s'il s'agissait de commandes de préampli matériel **Avid PRE** . Cela permet à la fonction de contrôle du préampli à distance intégrée de Pro Tools d'ajuster directement le gain d'entrée sur le matériel DADman à partir de la configuration d'E/S de Pro Tools ou d'une surface de contrôle compatible — sans passer par DADman.

### Aperçu 8.15.1

Quand l'émulation du PRE Pro Tools est active :

- Pro Tools envoie des messages de changement de gain MIDI à DADman
- DADman les traduit en réglages de gain sur les entrées analogiques de l'unité matérielle connectée
- L'onglet DADman AD affiche les valeurs de gain actuelles ; les changements de Pro Tools se reflètent en temps réel

### 8.15.2 Configuration

**Pour activer le contrôle MIDI pour l'émulation PRE Pro Tools:**

1. Assurez-vous qu'une connexion MIDI existe entre l'ordinateur DADman et le système Pro Tools (réseau MIDI, USB MIDI ou IAC Driver sur macOS).
2. Dans DADman, allez dans **Paramètres > MIDI** et configurez les ports d'entrée et de sortie MIDI pour correspondre à la connexion.
3. Dans le **I/O Setup** de Pro Tools, configurez la page de préampli pour utiliser la connexion MIDI correspondant à DADman.

> **REMARQUE:** L'assignation exacte des canaux MIDI et le mapping des contrôleurs dépendent de la version Pro Tools et de la configuration de l'unité MTRX/DAD. Reportez-vous à la documentation Avid MTRX ou au support DAD pour la table de paramètres MIDI correcte pour votre modèle matériel.

_[Placeholder: table de paramètres MIDI détaillée et procédure étape par étape — documentation technique en attente de DAD]_

---

## Documentation en attente

Les sujets de fonctionnalités avancées suivantes nécessitent des informations supplémentaires de la part de l'ingénierie DAD avant de pouvoir être documentés :

| Fonctionnalités                              | Statut                                                                               | Notes                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PRO\|MON Monitor System**                  | Placeholder — pas encore documenté                                                   | PRO\|MON est le contrôleur de moniteur étendu utilisé avec AX32, DX32R, Penta et MTRX Studio. La documentation complète nécessite une entrée d'ingénierie DAD sur le flux de travail de configuration PRO\|MON, la référence des paramètres et l'intégration Cue\|Mix.                                                                                                  |
| **Cue\|Mixer Mixeur Zéro Latence**           | Placeholder — pas encore documenté                                                   | Listé comme une fonctionnalité DADman ; aucune documentation source disponible. Demande de l'ingénierie DAD.                                                                                                                                                                                                                                                            |
| **Configuration de la carte SPQ**            | Brouillon dans la Section 8.12 — table de paramètres en attente      | Résumé du flux de travail brouillé. Procédure complète étape par étape avec référence par paramètre requise par DAD. Le format d'importation de Room EQ Wizard doit être confirmé avec l'ingénierie DAD.                                                                                                                                                |
| **MIDI Control and Pro Tools PRE Emulation** | Brouillon dans la Section 8.15 — Table de paramètres MIDI en attente | Présentation du concept et de la configuration élaborée. Tableau complet de contrôleur MIDI / table de mapping de canaux pour chaque modèle matériel pris en charge requis par DAD.                                                                                                                                                                                     |
| **Captures d'écran — toutes les sections**   | En attente                                                                           | Tous les espaces réservés pour les captures d'écran (8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13) nécessitent une version live de DADman v5.8.2 avec AX Center connectée. |

---

_[En attente: des captures d'écran pour Sections 8.1.3, 8.1.4, 8.4.5, 8.4.6, 8.11, 8.13 — toutes requièrent une version live de DADman 5.8.2 avec AX Center ou AX64]_
