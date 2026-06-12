---
title: "Chapitre 9 — Dépannage"
sidebar_label: "Ch. 9 — Dépannage"
sidebar_position: 11
---

# Chapitre 9 — Dépannage

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte :** DADman v5.8.2 build 2  
> **Statut du chapitre :** Brouillon v0. — Accès au fichier journal documenté (9.9.1–9.9. ); catalogue de messages d'erreur et tables d'état LED toujours en attente de l'ingénierie DAD  
> **Dernière mise à jour :** Juin 2026

---

## Comment utiliser ce chapitre

Trouvez la section correspondant à la catégorie de votre problème, puis trouvez le symptôme qui décrit le plus attentivement ce que vous ressentez. Chaque ligne donne la cause probable et réparation. Lorsque la mesure corrective implique une procédure en plusieurs étapes, une référence croisée est fournie plutôt que de répéter les étapes ici.

**Avant de contacter le support**, récoltez les informations de diagnostic en utilisant  
**Menu DADman > À propos de DADman > Copier les informations** _(v5.7. et plus tard)_  
Cette copie de la version DADman, de la liste des périphériques connectés, de la version OS et de la version du pilote Thunderbolt dans le presse-papiers. Inclure cela dans toute demande de support.

| Section             | Catégorie                           |
| ------------------- | ----------------------------------- |
| 9.1 | Connectivité réseau et périphérique |
| 9.2 | Problèmes audio                     |
| 9.3 | Logiciel et démarrage               |
| 9.4 | Éclair de tonnerre et conducteur    |
| 9.5 | Horloge et synchronisation          |
| 9.6 | Contrôle du moniteur                |
| 9.7 | Réinitialiser les procédures        |
| 9.8 | Problèmes connus par version        |
| 9.9 | Obtenir de l'assistance             |

---

## 9.1 Connectivité réseau et périphérique

_Catégorie la plus commune pour les nouvelles installations et après les changements de réseau ou de matériel._

| Symptôme                                                                             | Cause probable                                                                                                     | Mécanisme                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aucune unité n'apparaît dans la liste des périphériques après le lancement de DADman | Unité non alimentée                                                                                                | Allumer l'unité; confirmer que le panneau avant **Prêt** LED est vert solide                                                                                                                                                                                                                                                                           |
|                                                                                      | L'unité n'est pas sur le même réseau Ethernet                                                                      | Connectez l'unité et l'ordinateur au même commutateur ou via câble direct; confirmez que le câble est Cat5e ou Cat6                                                                                                                                                                                                                                    |
|                                                                                      | Unité et ordinateur sur différents sous-réseaux                                                                    | Définit l'interface réseau de l'ordinateur sur le même sous-réseau que l'unité (par exemple, les deux `192.168.1.x`). Contrôler l'IP de l'unité via son affichage frontal                                                                                                                                           |
|                                                                                      | macOS Sequoia (v15): Problème de découverte au niveau du système d'exploitation | Déconnectez-vous du compte d'utilisateur macOS et reconnectez-vous. Les connexions de Foudre ne sont pas affectées. Voir [Section 9.3] et [Ch. 3, Section 3.7] |
|                                                                                      | Windows: pare-feu bloquant DADman                                                                  | Ajouter une exception de pare-feu pour DADman. Avec BitDefender, mettez à jour vers la version 5.7.2 ou ultérieure                                                                                                                                                                                     |
| L'unité apparaît dans la liste des périphériques mais apparaît comme déconnectée     | Câble Ethernet déconnecté ou défectueux                                                                            | Vérifiez le câble aux deux extrémités; remplacez si endommagé                                                                                                                                                                                                                                                                                          |
|                                                                                      | Redémarrage de l'unité (par exemple, après la mise à jour du firmware)                          | Attendez jusqu'à 60 secondes; confirmez que la LED Prêt est verte solide                                                                                                                                                                                                                                                                               |
|                                                                                      | Conflit d'adresse IP — deux appareils partageant la même IP                                                        | Vérifier tous les périphériques réseau pour les adresses IP dupliquées ; attribuer des adresses IP statiques uniques                                                                                                                                                                                                                                   |
| Unité connectée, puis disparue                                                       | Interruption du réseau                                                                                             | Vérifiez le commutateur, le câble et le port. DADman recommence continuellement _(v5.7.0+)_ — l'unité réapparaît automatiquement une fois la connexion restaurée                                                                                                                    |
| Seules certaines unités apparaissent (système multi-unités)       | Incompatibilité du masque du sous-réseau                                                                           | Confirmer toutes les unités et l'ordinateur partagent le même masque de sous-réseau (par exemple, `255.255.255.0`)                                                                                                                                                                                                                  |
|                                                                                      | Dupliquer les adresses IP                                                                                          | Connectez et configurez une unité à la fois; assignez des adresses IP uniques                                                                                                                                                                                                                                                                          |
| L'unité est visible mais les paramètres diffèrent de ceux prévus                     | Fichier `.dms` appliqué au lancement avec différents paramètres                                                    | Si "Ouvrir le dernier fichier au démarrage" est activé, DADman applique le fichier sauvegardé aux unités au démarrage. Vérifiez **Fichier > Ouvrir** pour confirmer quel fichier est chargé                                                                                                                                            |

---

## 9.2 Problèmes Audio

| Symptôme                                                      | Cause probable                                                                                                             | Mécanisme                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pas de son en sortie analogique                               | Entrée non routée en sortie                                                                                                | Ouvrir l'onglet **Con** ; vérifier qu'un point carré bleu existe entre l'entrée et la sortie requise                                                                                                                                                                                                                    |
|                                                               | Canal de sortie mis en sourdine                                                                                            | Vérifiez l'onglet **DA** ; confirmez que **Mute** n'est pas engagé                                                                                                                                                                                                                                                      |
|                                                               | Canal d'entrée mis en sourdine                                                                                             | Vérifier l'onglet **AD** ; confirmer **Mute** n'est pas engagé                                                                                                                                                                                                                                                          |
|                                                               | Fader de niveau de sortie au minimum                                                                                       | Augmentez le déchargement du niveau de sortie du DA au réglage approprié pour l'équipement en aval                                                                                                                                                                                                                      |
|                                                               | Incompatibilité de l'horloge causant le silence                                                                            | Dans l'onglet **Con** : indicateur d'état jaune sur une ligne d'entrée = perte de synchronisation. Allez à l'onglet **Confôt** et vérifiez la fréquence source et l'échantillon. Voir [Section 9.5] |
| Audio distordu à des niveaux de signal élevés                 | Le niveau de sortie est trop élevé pour l'équipement en aval                                                               | Dans l'onglet **DA**, réduisez la luminosité de la sortie. Exemple: une sortie de +24 dBu dans un périphérique d'entrée maximum de +18 dBu cliche l'équipement en aval à environ -6 dBFS                                                                                                |
| Le signal LED ne s'allume pas malgré le signal connu          | Le gain d'entrée est trop faible pour dépasser le seuil -42 dBFS                                                           | Augmentez le **gain MIC** dans l'onglet **AD**                                                                                                                                                                                                                                                                          |
|                                                               | Mauvais type d'entrée sélectionné                                                                                          | Vérifier que MIC ou LINE est sélectionné correctement                                                                                                                                                                                                                                                                   |
|                                                               | Câble source défectueux ou déconnecté                                                                                      | Vérifier les connexions physiques                                                                                                                                                                                                                                                                                       |
| Eclairage de la LED pendant les niveaux normaux               | Gain d'entrée trop élevé                                                                                                   | Réduire le gain MIC dans l'onglet **AD**                                                                                                                                                                                                                                                                                |
|                                                               | Clipping de l'équipement en aval                                                                                           | Réduire le niveau de sortie en DA — voir "Distorted audio" ci-dessus                                                                                                                                                                                                                                                    |
| Clics ou pops dans l'audio                                    | Taux d'échantillonnage ou horloge incompatible                                                                             | Voir [Section 9.5 — Horloge et synchronisation]                                                                                                                                                                                                     |
|                                                               | Taille du tampon trop petite (Foudre de tonnerre)                                                       | Augmenter la taille du tampon ASIO ; voir [Section 9.4]                                                                                                                                                                                             |
| Une seule chaîne d'une paire stéréo transporte de l'audio     | Lien stéréo non activé                                                                                                     | Activer le lien Mono/Stéréo dans l'onglet **AD** ou **DA** pour la paire de canaux                                                                                                                                                                                                                                      |
|                                                               | Un seul point d'intersection connecté                                                                                      | Dans l'onglet **Con** , **Shift + clic** pour connecter simultanément les deux canaux de la paire                                                                                                                                                                                                                       |
| Les entrées analogiques AX Center ne passent pas d'audio      | Erreur de timing ADC dans le firmware avant la version 1.1.0.4             | Mettre à jour le firmware AX Center vers la version 1.1.0.4 ou ultérieure _(correctif de janvier 2025)_                                                                                                                                              |
| Erreur de phase AX Center / Thunder\|Core DA card channel 8   | Bug dans le firmware avant la version 1.0.6.3                              | Mise à jour du firmware Thunder\|Core vers la version 1.0.6.3 ou ultérieure _(Septembre 2024)_                                                                                                                                                       |
| Le canal ADAT 3 ne fonctionne pas à 88,2 ou 96 kHz            | Bug dans le firmware avant la version 1.0.6.3                              | Mettre à jour le firmware Thunder\|Core vers la version 1.0.6.3 ou ultérieure                                                                                                                                                                                           |
| Délai non appliqué sur les canaux supérieurs à 16             | Bug dans le firmware avant la version 1.0.6.3                              | Mettre à jour le firmware Thunder\|Core vers la version 1.0.6.3 ou ultérieure                                                                                                                                                                                           |
| Les canaux 3G SDI ne sont pas activés après la mise en marche | Bogue de chronométrage dans la famille 1 firmware avant la version 2.3.6.1 | Mettre à jour AX32 / DX32R / Penta firmware en v2.3.6.1 ou supérieur _(Décembre 2022)_                                                                                                                                                               |

---

## 9.3 Logiciel et Démarrage

| Symptôme                                                                                                                 | Cause probable                                                                                                                                                                   | Mécanisme                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DADman ne se lance pas sous Windows                                                                                      | `VCRUNTIME140_1.DLL` manquant                                                                                                                                                    | Mise à jour vers DADman v5.7.2 ou ultérieur                                                                                                                                                                                                                                                                            |
|                                                                                                                          | Installation incomplète                                                                                                                                                          | Désinstaller, redémarrer, réinstaller depuis [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                                                            |
| macOS Sequoia : DADman ne peut pas se connecter aux unités du réseau au lancement                        | Problème de découverte de périphérique Mac OS 15                                                                                                                                 | **Solution de contournement :** Déconnexion (**Menu Apple > Déconnexion**), puis reconnectez-vous. Les connexions de Foudre ne sont pas affectées. _(Problème ouvert connu sous le nom de v5.8.2 ; correction en développement)_ |
| DADman plante en double-cliquant sur un fichier `.dms` dans Finder (macOS)                            | Bug avant la version 5.8.0                                                                                                                       | Mettre à jour vers DADman v5.8.0 ou ultérieur                                                                                                                                                                                                                                                                          |
| Le fichier de profil du moniteur est corrompu après avoir annulé une charge                                              | Bug avant la version 5.8.0                                                                                                                       | Mettre à jour vers DADman v5.8.0 ou ultérieur; restaurer à partir d'un fichier `.dmprof` de sauvegarde                                                                                                                                                                                                                 |
| Windows : plantage MIDI dans DADman                                                                      | Bug avant la version 5.8.1                                                                                                                       | Mise à jour vers DADman v5.8.1 version 6 ou ultérieure                                                                                                                                                                                                                                                                 |
| macOS : Afficher la mise à l'échelle des artefacts (lignes minces lors du défilement) | Bug avant la version 5.8.0 sur les écrans mis à l'échelle                                                                                        | Mettre à jour vers DADman v5.8.0 ou ultérieur                                                                                                                                                                                                                                                                          |
| DADman n'enregistre pas les fichiers lors de la déconnexion ou de l'arrêt de macOS                                       | Bug avant la version 5.7.0 (général); avant la version 5.8.0 en mode barre de menu uniquement | Mettre à jour vers DADman v5.8.0 ou ultérieur ; activez **Toujours enregistrer le fichier** dans les préférences                                                                                                                                                                                                       |
| macOS : DADman ne deviendra pas le plus proche de l'icône de la barre d'état (Sonoma) | Bug avant la version 5.8.0                                                                                                                       | Mettre à jour vers DADman v5.8.0 ou ultérieur                                                                                                                                                                                                                                                                          |
| Windows: pare-feu BitDefender causant le verrouillage de l'appareil                                      | Conflit connu avant la version 5.7.2                                                                                                             | Mise à jour vers DADman v5.7.2 ou ultérieur                                                                                                                                                                                                                                                                            |
| corruption des données déroulantes avec des matrices > 1024 éléments                                                     | Bug avant la version 5.7.0                                                                                                                       | Mettre à jour vers DADman v5.7.0 ou ultérieur                                                                                                                                                                                                                                                                          |

---

## 9.4 Foudre et Chauffeur

_S'applique uniquement à AX64, AX Center, Core 256. Ignorer pour le matériel uniquement Ethernet._

| Symptôme                                                                                   | Cause probable                                                                                | Mécanisme                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| L'unité n'apparaît pas dans la configuration MIDI audio macOS                              | Extension système non autorisée                                                               | Ouvrez **Paramètres Système > Confidentialité et Sécurité**; Autorisez l'extension de Digital Audio Danemark/Technologie NTP A/S; redémarrez                                                                                                                                                                                              |
|                                                                                            | macOS Sequoia : renforcement de la sécurité des accessoires                   | Définissez **Paramètres Système > Confidentialité & Sécurité > Accessoires** à **Autorisez automatiquement** ou **Toujours autoriser**. Voir [Ch. 3, Section 3.7]                                                 |
|                                                                                            | Pilote non installé                                                                           | Installez le pilote DAD Thunderbolt 3 depuis [digitalaudiosupport.com](https://www.digitalaudiosupport.com)                                                                                                                                                                                                               |
|                                                                                            | Ancienne version du pilote en conflit avec la mise à jour macOS                               | Retirer l'ancien `DADDriverSetup.app` (glisser dans la corbeille; approuver la suppression), puis réinstaller le dernier pilote                                                                                                                                                                                        |
| L'appareil apparaît dans la configuration Audio MIDI sans canaux                           | Taux d'échantillonnage ou décalage du nombre de canaux                                        | Ouvrez **DADDriverSetup** et vérifiez que les paramètres de taux d'échantillonnage et de canaux correspondent au format attendu de votre DAW                                                                                                                                                                                              |
| Windows ASIO: **IRs manqués** compteur non zéro                            | Interruption du système                                                                       | Augmenter la taille du tampon ASIO (512 ou 1024 échantillons) ; fermer les applications en arrière-plan inutiles ; désactiver le Wi-Fi                                                                                                                                                                                 |
| Windows ASIO : **Charge PCIe élevée**                                      | Trop de canaux configurés                                                                     | Réduire les paramètres des canaux dans la configuration du pilote ASIO                                                                                                                                                                                                                                                                    |
| Windows ASIO: Haute **latence DPC**                                        | Délai de planification Windows pour les pilotes tiers                                         | Utilisez un analyseur de latence DPC pour identifier le pilote en infraction. Causes courantes : adaptateurs sans fil, gestion de l'alimentation USB, antivirus. Activer le plan de puissance haute performance                                                                           |
| macOS : DADman ne peut pas communiquer avec l'unité via Thunderbolt        | Problème de pile de communication de foudre                                                   | Mettez à jour le pilote DAD Thunderbolt 3 vers la version 1.2.2 ou ultérieure **et** mettre à jour Thunder\|Core firmware vers la version 1.1.0.3 ou ultérieure. Les deux mises à jour sont requises _(Décembre 2024)_ |
| Détruire l'audio sur le verrou de tonnerre                                                 | Câble de Foudre inférieur à 20 Gbps                                                           | Remplacer le câble par un câble certifié Thunderbolt 3 évalué à 20 Gbps minimum                                                                                                                                                                                                                                                           |
| Windows : pilote ASIO non visible dans l'application audio                 | Pilote non installé                                                                           | Installez le pilote ASIO DAD Thunderbolt 3 — c'est un installateur séparé de DADman                                                                                                                                                                                                                                                       |
| Carte AX Center Dante : la synchronisation Dante externe ne fonctionne pas | Bug dans le firmware avant la version 1.1.0.4 | Mettre à jour le firmware AX Center vers la version 1.1.0.4 ou ultérieure _(Janvier 2025)_                                                                                                                                                                             |

---

## 9.5 Horloge et synchronisation

| Symptôme                                                                             | Cause probable                                                                              | Mécanisme                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Indicateur de statut jaune sur une ligne d’entrée d’onglet Con                       | Synchroniser la perte ou l'incohérence du taux d'échantillonnage sur cette entrée numérique | Vérifiez que le taux d'échantillonnage de l'appareil source correspond à l'unité DAD. Dans l'onglet **Confôt**, confirmer la source et le taux d'échantillonnage sont corrects. Si cette entrée doit être le maître de l'horloge, définissez **Source** sur cette entrée (par exemple, MADI Coax, Dante, Horloge Word) |
| Clics et pops tout au long de l'audio                                                | Unité non verrouillée à une horloge stable                                                  | Dans l'onglet **Confôt**, vérifiez que Source est correctement définie et que la source sélectionnée est active et stable                                                                                                                                                                                                                                                 |
|                                                                                      | Réseau surchargé affectant la stabilité de l'horloge Dante                                  | Placer le trafic de contrôle DADman et l'audio Dante sur des réseaux dédiés séparés                                                                                                                                                                                                                                                                                       |
| L'entrée de l'horloge du mot ne sera pas verrouillée                                 | Fin de synchronisation incorrecte                                                           | **Arrêt de la synchronisation** défini à \*\*75 €), dans l'onglet **Conf**                                                                                                                                                                                                                                                                                                |
|                                                                                      | Câble de l'horloge du mot trop long ou de mauvaise qualité                                  | Utiliser un câble coaxial de 75 °; la longueur de fiabilité maximale est d'environ 30 m                                                                                                                                                                                                                                                                                   |
| L'entrée MADI affiche le statut jaune, mais le taux d'échantillonnage semble correct | Incompatibilité de la fréquence d'images MADI                                               | Dans l'onglet **Conflit**, vérifiez que le paramètre **fréquence par images** (Legacy vs. Haute Vitesse) correspond à l'appareil d'envoi. Les deux extrémités d'un lien MADI doivent utiliser le même paramètre de fréquence d'images                                                                                  |
| "Adapter à" ne suit pas les changements de taux d'échantillonnage DAW                | Adapter pour définir à la mauvaise entrée                                                   | Set **Adapt to** à l'entrée numérique connectée au DAW (par exemple, **Thunderbolt 3**)                                                                                                                                                                                                                                                                |
|                                                                                      | DAW ne met pas à jour la fréquence d'échantillonnage de l'appareil Core Audio / ASIO        | Fermer et rouvrir les paramètres du périphérique audio DAW pour forcer la mise à jour                                                                                                                                                                                                                                                                                     |

---

## 9.6 Contrôle du moniteur

| Symptôme                                                                                                            | Cause probable                                              | Mécanisme                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| L'onglet Mon n'affiche aucun contrôle                                                                               | Aucun profil de moniteur chargé                             | Charger un fichier `.dmprof` via **Fichier > Ouvrir Profil…** ou créer un nouveau profil dans **Paramètres > Profil de Surveillance**                                                                                                                                                                        |
| Page de surveillance vierge dans la surface de contrôle Avid Control ou Avid Control                                | DADman non lié à EuControl                                  | Dans l'onglet EuControl **Assigner**, avec DADman au premier plan, activer l'affectation de suivi pour DADman. Confirmer **Activer EuCon** est coché dans le menu **Paramètres** de DADman                                                                                                   |
| Eucon : Le niveau de la salle de contrôle n'est pas réactivé après bascule de Réf                   | Bug avant la version 5.8.2  | Mise à jour vers DADman v5.8.2 version 2 ou ultérieure                                                                                                                                                                                                                       |
| macOS : Le menu Talkback affiche une valeur incorrecte dans la boîte de dialogue Profil du moniteur | Bug avant la version 5.8.2  | Mise à jour vers DADman v5.8.2 version 2 ou ultérieure                                                                                                                                                                                                                       |
| Casque ne suivant pas la sélection des haut-parleurs de salle de contrôle                                           | Mode moniteur pour casque défini sur Cue au lieu de Master  | Dans **Paramètres > Profil du moniteur**, réglez le mode du moniteur de sortie du casque sur **Maître**; réglez les haut-parleurs de la salle de contrôle sur le mode **Cue**. Voir [Ch. 8, Section 8.2] |
| Le bouton Réf n'a pas d'effet                                                                                       | Aucun niveau de référence défini dans le profil du moniteur | Dans **Paramètres > Profil du moniteur**, entrez la valeur de niveau de référence calibrée pour l'ensemble de sortie actif                                                                                                                                                                                   |
| Profil de surveillance corrompu lors de la prochaine sauvegarde après une charge annulée                            | Bug avant la version 5.8.0  | Mettre à jour vers DADman v5.8.0 ou ultérieur; restaurer à partir de la sauvegarde `.dmprof`                                                                                                                                                                                 |

---

## 9.7 Réinitialiser les procédures

Tentative de réinitialisation dans l'ordre listé — d'abord le plus souple.

### 9.7.1 Recharger le fichier de configuration

Restaure les paramètres enregistrés sans affecter le matériel:

1. Allez dans **Fichier > Ouvrir…** et sélectionnez le fichier `.dms` le plus récent.
2. Confirmer la mise à jour de tous les paramètres dans la fenêtre DADman.

### 9.7.2 Factory Reset via DADman

> **ATTENTION :** Efface tous les paramètres stockés sur l'unité matérielle. Enregistrez d'abord un fichier `.dms`.

1. Dans la liste des périphériques, cliquez avec le bouton droit de la souris sur l'unité (ou utilisez le bouton Action sur macOS).
2. Sélectionnez **Réinitialisation d'usine** et confirmez lorsque vous y êtes invité.
3. Après le redémarrage de l'unité (jusqu'à 60 secondes), rechargez le fichier `.dms` via **Fichier > Ouvrir…**.

### 9.7.3 Front Panel IP Reset

Si l'adresse IP de l'unité est inconnue ou mal configurée et que vous ne pouvez pas vous connecter via DADman:

- Le bouton **Reconfigurer** (accessible par un petit trou sur le panneau arrière avec un stylo ou un objet pointé) réinitialise l'appareil à son adresse IP par défaut lorsqu'elle est appuyée lors de la mise sous tension.
- IP par défaut d'usine pour la plupart des matériels DAD : `10.0.7.20` - confirmez dans votre guide d'installation matérielle.
- Après la réinitialisation, reconnectez-vous via DADman et reconfigurez via la liste des périphériques **> Paramètres réseau**.

### 9.7.4 Cycle de Puissance

Si l'unité ne répond pas et ne peut pas être réinitialisée via DADman :

1. Dans la liste des périphériques DADman : cliquez avec le bouton droit sur l'unité **> Déconnecter**.
2. Éteignez le quincaillerie du commutateur principal.
3. Attendez 10 secondes.
4. Rallumer l'unité.
5. Attendez jusqu'à 60 secondes pour que la LED Prêt pour montrer le vert solide.
6. L'unité réapparaît automatiquement dans la liste des périphériques.

---

## 9.8 Problèmes connus par version

| Symptôme                                                                                                      | Versions affectées                                                                                    | Fixé dans                                                                                                           |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Windows : DADman ne parvient pas à lancer la DLL (VCRUNTIME manquant)      | Avant la v5.7.2                                                       | v5.7.2 (sept. 2024)                              |
| macOS : Crash en double-cliquant sur .dms dans le Finder                      | Avant la version 5.8.0                                                | v5.8.0 (décembre 2024)                                           |
| Profil du moniteur corrompu après annulation de la charge                                                     | Avant la version 5.8.0                                                | v5.8.0 (décembre 2024)                                           |
| macOS : Afficher les artefacts de mise à l'échelle                                            | Avant la version 5.8.0                                                | v5.8.0 (décembre 2024)                                           |
| macOS : DADman ne deviendra pas le plus proche de la barre d'état (Sonoma) | Avant la version 5.8.0                                                | v5.8.0 (décembre 2024)                                           |
| macOS : Échec de la communication de Thunderbolt rare                                         | Avant la version 5.8.0 + pilote 1.2.2 | v5.8.0 + driver 1.2.2 (déc 2024) |
| Fenêtre : plantage MIDI                                                                       | Avant la version 5.8.1                                                | v5.8.1 b6 (Mai 2025)                                             |
| macOS : Problèmes graphiques sur les écrans mis à l'échelle avec de grandes fenêtres          | Avant la version 5.8.1                                                | v5.8.1 b6 (Mai 2025)                                             |
| Eucon : Le niveau de la salle de contrôle n'est pas réactivé après bascule de Réf             | Avant la version 5.8.2                                                | v5.8.2 b2 (Jan 2026)                                             |
| macOS : menu Talkback valeur sélectionnée incorrecte                                          | Avant la version 5.8.2                                                | v5.8.2 b2 (Jan 2026)                                             |
| Fenêtres: Verrouillage du dispositif de pare-feu BitDefender                                  | Avant la v5.7.2                                                       | v5.7.2 (sept. 2024)                              |
| **Firmware:** AX Center ADC ne passe pas l'audio (erreur de chronomètre)   | Avant le firmware v1.1.0.4                            | v1.1.0.4 (Jan 2025)                              |
| **Firmware:** Synchronisation externe incorrecte de la carte AX Center Dante                  | Avant le firmware v1.1.0.4                            | v1.1.0.4 (Jan 2025)                              |
| **Firmware:** Erreur de phase de la carte DA canal 8 de la carte DA                           | Avant le firmware v1.0.6.3                            | v1.0.6.3 (Sep 2024)                              |
| **Firmware:** ADAT canal 3 à 88,2/96 kHz                                                      | Avant le firmware v1.0.6.3                            | v1.0.6.3 (Sep 2024)                              |
| **Firmware:** Délai non appliqué sur les canaux > 16                                          | Avant le firmware v1.0.6.3                            | v1.0.6.3 (Sep 2024)                              |
| **Firmware:** Les canaux SDI 3G ne sont pas activés après la mise en marche                   | Avant Famille 1 firmware v2.3.6.1                     | v2.3.6.1 (décembre 2022)                         |

**Ouvrir un problème connu (à partir de la version 2 de la v5.8.2) :**

| Symptôme                                                                                                                              | Statut                                        | Solution                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| macOS Sequoia (v15): DADman ne peut pas se connecter aux périphériques réseau au premier lancement | Ouvert — correction en cours de développement | Déconnectez-vous et reconnectez-vous au compte d'utilisateur macOS. Les connexions de Foudre ne sont pas affectées |

---

## 9.9 Obtenir de l'assistance

\*\*Portail de support DAD  
[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)  
Base de connaissances, téléchargements de micrologiciels, bulletins techniques et forum communautaire.  
Un compte gratuit est requis.

**Email**  
support@ntp.dk

**En contactant le support, include:**

1. **DADman > À propos de DADman > Copier les informations** en sortie _(v5.7.2+)_
2. Modèle d'unité matérielle et version du firmware (visible dans la liste des périphériques)
3. Description du symptôme, quand il a commencé, et ce qui a changé avant son apparition
4. Tous les messages d'erreur affichés à l'écran
5. Sortie du journal pertinente (voir ci-dessous)

### 9.9.1 Accès aux logs DADman — macOS

DADman écrit des entrées de log via le système de journalisation unifié macOS. Les journaux ne sont pas stockés en tant que fichiers texte bruts ; utilisez les méthodes suivantes pour les collecter.

**Console.app (méthode la plus simple) :**

1. Ouvrez **Console.app** (Applications > Utilitaires > Console).
2. Dans le champ de recherche, tapez `DADman` et appuyez sur Return.
3. Reproduire le problème. La console affiche les entrées de log DADman en temps réel.
4. Sélectionnez les entrées pertinentes, faites un clic droit et choisissez **Copier** pour coller dans un ticket de support.

**Terminal (export des journaux à intervalles de temps):**

```bash
log show --predicate 'process == "DADman"' --info --last 1h > ~/Desktop/dadman-log.txt
```

Ajustez `--last 1h` si nécessaire (par exemple, `--last 30m`, `--last 2h`). Le fichier résultant peut être attaché à un ticket de support.

**Rapports de plantage:**  
Si DADman a planté, un rapport de plantage est écrit à:

```
~/Library/Logs/DiagnosticReports/
```

Recherchez les fichiers nommés `DADman_<date>_<hostname>.ips` ou `DADman_<date>.crash`. Celles-ci sont également visibles dans Console.app sous **Rapports de plantage**.

**Bûches TB3 Driver :**  
Pour collecter les entrées de journal du conducteur de Thunderbolt :

```bash
log show --predicate 'process == "DADThunderboltDriver" OU subsystem CONTAINS "ntp"' --info --last 1h > ~/Desktop/tb3-driver-log.txt
```

### 9.9.2 Accès aux logs DADman — Windows

**Visualiseur d'événements Windows :**

1. Ouvrir **Visualiseur d'événements** (Début → Recherche "Visualiseur d'événements").
2. Naviguez vers **Windows Logs > Application**.
3. Cliquez sur **Filtrer le journal actuel…** et entrez `DADman` dans le champ **Source de l'événement**.
4. Copier ou exporter les entrées filtrées pour le ticket de support.

**Dossier des données de l'application :**  
DADman stocke les paramètres et peut stocker les fichiers journaux à:

```
%AppData%\NTechnologie TP\DADman\
```

Ouvrez ce chemin dans l'Explorateur Windows (`Win + R` → Coller le chemin → Entrée) et incluez tous les fichiers `.log` trouvés lors du contact avec le support.

> **REMARQUE :** Les chemins de fichiers journaux exacts ci-dessus ont été vérifiés pour les installations standard. Si DADman a été installé à un emplacement non par défaut ou exécuté sous un autre compte utilisateur, les chemins peuvent être différents. Le soutien de DAD peut fournir des conseils si ces emplacements ne contiennent pas les fichiers attendus.

---

_[En attente de l'ingénierie DAD :]_  
_— Catalogue de messages d'erreur (texte d'alerte à l'écran → cause → remedy)_  
_— Tableaux d'état de l'état de la LED du panneau frontal par modèle matériel_
