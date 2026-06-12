---
title: "Chapitre 10 — Maintenance"
sidebar_label: "Ch. 10 — Maintenance"
sidebar_position: 12
---

# Chapitre 10 — Maintenance

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte :** DADman v5.8.2 build 2  
> **Statut du chapitre :** Brouillon v0. — Spécifications environnementales spécifiques au matériel en attente de confirmation par modèle de la part de l'ingénierie DAD  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section              | Couvertures                                                    |
| -------------------- | -------------------------------------------------------------- |
| 10.1 | Mise à jour du logiciel DADman                                 |
| 10.2 | Mise à jour du firmware matériel                               |
| 10.3 | Mise à jour du firmware Dante                                  |
| 10.4 | Mise à jour du driver Thunderbolt 3                            |
| 10.5 | Vérification des versions actuelles du logiciel et du firmware |
| 10.6 | Nettoyage                                                      |
| 10.7 | Stockage                                                       |
| 10.8 | Fin de vie et élimination                                      |

---

## 10.1 Mise à jour du logiciel DADman

Les mises à jour DADman sont distribuées en tant que paquets complets de l'installateur — pas des correctifs incrémentaux. L'installation d'une nouvelle version remplace l'installation existante.

### 10.1.1 Avant la mise à jour

- Consultez les **notes de publication** de la nouvelle version avant de l'installer. Les notes de publication documentent les versions testées du système d'exploitation, les exigences de compatibilité du microprogramme, les comportements modifiés et tout problème connu avec les nouvelles versions du système d'exploitation. Les notes de version sont disponibles dans le Centre de téléchargement à [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
- Confirmez que votre système d'exploitation est listé comme pris en charge pour la nouvelle version DADman. Reportez-vous aux notes de publication — toutes les versions de DADman ne prennent pas en charge toutes les versions d'OS.

### 10.1.2 Mise à jour de DADman — macOS

1. Téléchargez le nouvel installateur DADman (`.pkg`) depuis le portail de support DAD ou votre compte Avid Master.
2. Quittez DADman s'il est en cours d'exécution.
3. Double-cliquez sur l'installateur et suivez les instructions à l'écran. La nouvelle version remplace automatiquement l'installation existante.
4. Après l'installation, lancez DADman et confirmez le numéro de version dans **DADman > About DADman**.

### 10.1.3 Mise à jour de DADman — Windows

1. Téléchargez le nouvel installateur DADman (`.exe` ou `.msi`) depuis le portail de support DADD.
2. Fermer DADman s'il est en cours d'exécution.
3. Double-cliquez sur l'installateur et suivez les instructions à l'écran. Cliquez sur **Oui** si une invite de contrôle de compte d'utilisateur apparaît.
4. Après l'installation, lancez DADman et confirmez le numéro de version dans **Aide > À propos de DADman**.

> **NOTE:** La mise à jour de DADman ne met pas à jour le firmware du matériel. Il s'agit d'opérations distinctes nécessitant des procédures distinctes. Vérifiez toujours les notes de publication pour déterminer si une mise à jour DADman recommande ou nécessite une mise à jour du firmware correspondante.

---

## 10.2 Mise à jour du firmware matériel

### 10.2.1 Critique : Enregistrer la configuration avant la mise à jour

> **ATTENTION — Les paramètres seront perdus**  
> \*\*Les mises à jour du microprogramme réinitialisent tous les paramètres stockés sur l'unité matérielle aux valeurs par défaut d'usine. \* Les configurations de routage, les paramètres de gain, les étiquettes de canaux, les profils de moniteur, les préréglages de routage et tous les autres paramètres stockés sont définitivement effacés lors d'une mise à jour du firmware. La seule façon de récupérer ces paramètres est de recharger un fichier de configuration DADman (`.dms`).

**Avant de mettre à jour un firmware matériel:**

1. Ouvrez DADman et confirmez que l'unité à mettre à jour est connectée et visible dans la liste des périphériques.
2. Allez dans **Fichier > Enregistrer sous…** et enregistrez les paramètres actuels dans un fichier `.dms` avec un nom de fichier clair (par exemple, `StudioA_AXCenter_pre-update_2026-06.dms`).
3. Si un profil de moniteur est chargé, enregistrez-le séparément : **Fichier > Enregistrer le profil sous…**
4. Confirmez que les deux fichiers sont enregistrés à un emplacement qui est sauvegardé.

> **ASTUCE :** Le dialogue d'avertissement de mise à jour du firmware dans DADman _(v5.7.2 et ultérieur)_ inclut un rappel de sauvegarder les paramètres avant de continuer. Ne fermez pas ce dialogue sans confirmer que la sauvegarde est terminée.

### 10.2.2 Obtention de fichiers Firmware

Des fichiers microprogrammes pour tous les matériels DAD et NTP sont disponibles dans le Centre de téléchargement à [digitalaudiosupport.com](https://www.digitalaudiosupport.com). Un compte gratuit est requis.

Téléchargez le fichier de microprogramme correspondant à votre modèle matériel spécifique. N'utilisez pas de microprogramme d'un modèle sur un autre modèle — le microprogramme n'est pas interchangeable entre les familles de matériels.

### 10.2.3 Effectuer la mise à jour du firmware via DADman

1. Ouvrir DADman. Confirmez que l'unité à mettre à jour est connectée et visible dans la liste des périphériques.
2. Dans la liste des périphériques, cliquez avec le bouton droit de la souris sur l'unité (Windows) ou utilisez le bouton Action (macOS).
3. Sélectionnez **Mettre à jour le micrologiciel**.
4. Cliquez sur **Remercier** ou **Continuer** lorsque la boîte de dialogue de rappel de sauvegarde apparaît (après confirmation de votre sauvegarde est terminée).
5. Naviguez vers le fichier de microprogramme téléchargé et sélectionnez-le.
6. La mise à jour du firmware commence. Un indicateur de progression montre l'état de la mise à jour.
7. N'interrompez pas l'alimentation de l'unité ou fermez DADman pendant la mise à jour. Une mise à jour du firmware interrompue peut rendre l'unité non amorçable et nécessiter une récupération d'usine.
8. Une fois la mise à jour terminée, l'unité redémarre automatiquement. La liste des périphériques affiche l'unité de déconnexion et de reconnexion. Attendez que la LED **prête** retourne en vert solide (jusqu'à 60 secondes).
9. Confirmez la nouvelle version du firmware dans la liste des périphériques. Rechargez votre fichier de configuration `.dms` via **Fichier > Ouvrir…**.

> **PRÉCAUTION :** N'interrompez pas l'alimentation de l'unité matérielle pendant une mise à jour du firmware en aucune circonstance. Si une panne d'alimentation se produit en cours de mise à jour, contactez le support DAD à support@ntp.dk avant de rallumer l'unité.

### 10.2.4 Référence de l'historique des versions du firmware

Pour un enregistrement complet des versions du micrologiciel, des dates de publication et ce qui a changé dans chaque version, reportez-vous au document compilé **Historique des versions** :  
`Recherche/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

Les versions actuelles du firmware pour chaque famille de matériel au moment de la publication (DADman v5.8.2 build 2):

| Famille de matériel                                     | Firmware actuel                                          |
| ------------------------------------------------------- | -------------------------------------------------------- |
| AX64, AX Center, Core 256, MTRX II, Control 01/02       | 1.1.2.4  |
| Dante 256 IPCore (Thunder\|Core gen) | v1.0.3.1 |
| AX32, DX32R, Penta 720, Penta 721, Avid MTRX            | v2.4.6.4 |
| Module Brooklyn 2 Dante                                 | v1.0.3.1 |
| Module Brooklyn 3 Dante                                 | v1.1.0.3 |
| Studio MTRX                                             | 1.1.6.3  |
| MTRX Studio Dante 64 IPCore                             | v1.0.3.1 |
| Carte Dante                                             | v1.0.3.1 |

---

## 10.3 Mise à jour du firmware Dante

Le firmware Dante (pour les modules Dante et IPCore dans les unités DAD) est mis à jour séparément du firmware de la carte principale, en utilisant l'outil **Dante Updater** dans **Dante Controller** — pas via DADman.

### 6.3.1 Exigences

- Le **contrôleur Dante** doit être installé sur l'ordinateur. Télécharger depuis [audinate.com](https://www.audinate.com).
- L'unité DAD doit être connectée au réseau Dante et visible dans Dante Controller.
- Téléchargez le fichier de firmware Dante approprié (`.dnt`) depuis le portail de support DAD. Les fichiers du firmware Dante sont regroupés avec chaque version du logiciel DADman.

### 10.3.2 Procédure de mise à jour du firmware Dante

1. Ouvrez le **contrôleur Dante**.
2. Naviguez vers **Device > Dante Updater** pour ouvrir l'outil Dante Updater .
3. Dans le Dante Updater **Paramètres avancés**, activez **Autoriser le Firmware importé**. Ceci est nécessaire pour charger les fichiers de microprogramme fournis par DAD.
4. Dans le Dante Updater, sélectionnez l'onglet **Bibliothèque** et cliquez sur **Fichiers importés**.
5. Importez les fichiers firmware `.dnt` téléchargés depuis le portail de support DAD en cliquant sur **Importer**.
6. Retournez à l'onglet Dante Updater **Accueil** et sélectionnez **Fichiers Firmware Importés** à partir du sélecteur source du micrologiciel.
7. Sélectionnez l'unité DAD à mettre à jour dans la liste des périphériques.
8. Suivez les instructions à l'écran pour commencer la mise à jour.
9. Attendez que la mise à jour soit terminée. Le module Dante redémarre automatiquement.

> **NOTE:** Utilisateurs du module Brooklyn 3 Dante : depuis la version 1.1.0.3 du firmware (sortie janvier 2026), le Brooklyn 3 prend en charge le protocole **ST 2110** sans DDM (Dante Domain Manager). Cela nécessite à la fois la mise à jour du firmware Dante et la dernière version de Dante Controller. Voir les notes de publication pour plus de détails.

---

## 10.4 Mise à jour du Driver Thunderbolt 3

_S'applique uniquement aux utilisateurs d'AX64, AX Center, Core 256. Ignorer pour le matériel uniquement Ethernet._

Le pilote DAD Thunderbolt 3 (DADDriverSetup) est mis à jour séparément de DADman. Les mises à jour des pilotes sont publiées parallèlement aux mises à jour du firmware lorsque les améliorations de fonctionnalités de Thunderbolt sont incluses.

### 10.4.1 macOS — Procédure de mise à jour des pilotes

> **NOTE:** Sur macOS, l'ancienne version du pilote doit être retirée avant d'installer la nouvelle. L'installation sur un pilote existant sans le supprimer en premier lieu ne donne pas lieu à un pilote fonctionnant correctement sur macOS Sequoia ou ultérieur.

1. Téléchargez le nouvel installateur de pilotes Thunderbolt 3 (`.pkg`) depuis [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Localisez **DADDriverSetup.app** dans le dossier Applications.
3. Déplacez-le dans la corbeille (**clic droit > Déplacer vers la corbeille**). macOS affiche un avertissement indiquant que l'extension système sera retirée — confirmer pour continuer.
4. Exécutez l'installateur du nouveau pilote : double-cliquez sur le fichier `.pkg` téléchargé et suivez les instructions à l'écran.
5. Lorsque vous y êtes invité, approuvez la nouvelle extension du système dans **Paramètres système > Confidentialité et sécurité**.
6. Redémarrez l'ordinateur lorsque vous y êtes invité.
7. Après le redémarrage, ouvrez **DADDriverSetup** à partir des applications et confirmez le numéro de version affiché.
8. Connectez votre matériel Thunder\|Core et confirmez qu'il apparaît dans **Configuration MIDI audio**.

### 10.4.2 Windows — Procédure de mise à jour des pilotes

1. Téléchargez le nouvel installateur de pilotes ASIO (`.msi`) depuis [digitalaudiosupport.com](https://www.digitalaudiosupport.com).
2. Quitter toutes les applications audio en utilisant le pilote ASIO.
3. Ouvrez **Paramètres > Applications** (ou **Panneau de configuration > Programmes**) et désinstallez le pilote ASIO DAD Thunderbolt 3.
4. Redémarrez l'ordinateur.
5. Exécutez le nouveau pilote installateur (`.msi`) et suivez les instructions à l'écran.
6. Ouvrez votre application audio et confirmez que la version mise à jour du pilote est visible dans les paramètres du périphérique ASIO.

### 10.4.3 Versions actuelles du pilote

| Chauffeur                                                          | Plateforme | Version actuelle                       |
| ------------------------------------------------------------------ | ---------- | -------------------------------------- |
| DAD Thunderbolt 3 Core Audio Driver (DADdriver) | macOS      | v1.2.2 |
| Pilote DAD Thunderbolt 3 ASIO                                      | Fenêtres   | v1.1.2 |

_Courant depuis DADman v5.8.2 build 2 (Janvier 2026)._

---

## 10.5 Vérification des versions actuelles du logiciel et du firmware

### Version 10.5.1 de DADman

- **macOS:** **Menu DADman > À propos de DADman**
- **Windows:** **Aide > À propos de DADman**

La boîte de dialogue À propos de DADman montre le numéro de version DADman et la compilation. À partir de la version 5.7. , le bouton **Copier les informations** copie les informations de diagnostic complètes — version DADman, Version de l'OS, liste des périphériques connectés et versions du pilote Thunderbolt — au presse-papiers.

### 10.5.2 Version du firmware matériel

La version du firmware pour chaque unité connectée est affichée dans la **Liste des Périphériques** à côté du nom et de l'ID de l'unité. Survolez le champ de version du firmware pour plus de détails lorsque disponible.

### 6.5.3 Thunderbolt Driver Version

La version du pilote Thunderbolt est incluse dans la sortie **About DADman > Copy Information** _(v5.7.2 et ultérieur)_. Il peut également être trouvé dans **DADDriverSetup** (macOS) ou dans la boîte de dialogue de configuration du pilote ASIO (Windows).

### 10.5.4 Notes de publication et historique de mise à jour

Toutes les notes de version sont archivées à [digitalaudiosupport.com](https://www.digitalaudiosupport.com) dans le Centre de téléchargement. Un historique de version compilée est également maintenu dans:  
`Recherche/Source_Docs/Release_Notes/VERSION_HISTORY_COMPILED.md`

---

## 10.6 Nettoyage

**Matériaux de nettoyage :** Utilisez uniquement un chiffon sec et doux pour nettoyer les panneaux avant et arrière et l'enveloppe de tous les matériels DAD. Ne pas utiliser :

- Nettoyeurs liquides, solvants ou nettoyants en aérosol de toute sorte
- Tissu ou coussinets abrasifs
- Air comprimé dirigé vers des ouvertures de ventilation ou des ouvertures du connecteur

**Connecteurs :** Ne pas insérer d'objets dans les ouvertures du connecteur à des fins de nettoyage. Si un connecteur semble contaminé, consultez un personnel qualifié de service.

> **PRÉCAUTION :** Déconnectez l'unité de l'alimentation d'alimentation avant le nettoyage. Ne permettez pas à un liquide d'entrer dans l'enceinte par des ouvertures de ventilation ou des ouvertures de connecteur.

**Ecrans et affichages :** Les unités avec des écrans LCD de la face avant (AX Center, MTRX Studio) peuvent être nettoyées avec un chiffon doux et sec. Ne pas utiliser de fluides de nettoyage d'écran.

**Fréquence:** Inspectez et nettoyez le panneau avant et les ouvertures de ventilation dans le cadre d'un calendrier d'entretien régulier — au minimum, une fois par an dans un environnement de studio propre ; plus fréquemment dans les environnements avec des niveaux de poussière élevés.

---

## 10.7 Stockage

Si une unité matérielle doit être stockée pour une période prolongée (plus de quelques semaines), les conditions suivantes doivent être maintenues :

| Paramètre       | Condition                                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Température** | -20°C à +60°C (-4°F à +140°F)                                                                                                                                                                  |
| **Humidité**    | Humidité relative de 10% à 80%, non-condensation                                                                                                                                                                  |
| **Emballage**   | Stocker dans l'emballage d'origine si disponible. Si l'emballage d'origine n'est pas disponible, utilisez l'emballage anti-statique pour toute carte de circuit exposé ou interface de connecteur |
| **Orientation** | Stocker les unités de montage en rack horizontalement avec le panneau avant orienté vers le haut                                                                                                                  |
| **Puissance**   | Déconnecter de l'alimentation réseau avant stockage                                                                                                                                                               |

> **REMARQUE:** Autoriser l'unité à atteindre la température de la pièce avant de s'allumer après le stockage dans des conditions froides. La mise en marche d'une unité froide dans un environnement chaud peut entraîner la condensation sur des composants internes.

---

## 10.8 Fin de vie et élimination

Les matériels de technologie DAD / NTP et les câbles associés sont soumis à la Directive européenne sur les DEEE (équipements électriques et électroniques), Directive 2012/19/UE) et réglementations nationales et régionales équivalentes.

**Ne vous débarrassez pas de cet équipement dans des déchets ménagers non triés.**

À la fin de la vie, l'équipement doit être :

- Retourné à un revendeur ou distributeur autorisé pour le recyclage, ou
- Livré à un point de collecte de recyclage local autorisé, ou
- Retourné à la technologie DAD / NTP pour une élimination adéquate

Contact DAD / Technologie NTP pour les conseils d'élimination:  
Email: info@digitalaudio.dk  
Web: www.digitalaudio.dk

Le symbole WEEE (bobine de roues croisées) sur le produit ou son emballage l'identifie comme étant soumis à des exigences de collecte distinctes. Voir aussi [Front Matter, Section FM.8 — Disposition et WEEE].

---

_[En attente de l'ingénierie DAD :]_  
_— Les plages de température et d'humidité de fonctionnement et de stockage par modèle sont confirmées (les valeurs ci-dessus sont indicatives)_  
_— Intervalle de nettoyage du ventilateur et procédure pour les unités avec filtres de ventilation remplaçables (le cas échéant)_  
_— Type de fusion et procédure de remplacement par modèle matériel (à ajouter par modèle selon le modèle)_
