---
id: installation de ch03-
title: "Chapitre 3 — Installation"
sidebar_label: "Ch. 3 — Installation"
sidebar_position: 5
slug: /installation
---

# Chapitre 3 — Installation

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte:** DADman v5.8.1.  
> **TB3 Driver version couverte :** Dernière — voir Centre de téléchargement à la prise en charge audio numérique.  
> **Statut du chapitre :** Brouillon v0.1 — Examen technique en attente par l'ingénierie DAD  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

Ce chapitre couvre tout ce qui est nécessaire pour installer et configurer DADman et ses pilotes associés sur votre ordinateur. Il est organisé pour une première installation ; si vous mettez à jour une installation existante, voir [Chapitre 10, Section 10.1 — Mise à jour DADman et Firmware].

| Section             | Couvertures                                                              | Pertinent pour                                        |
| ------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| 3.1 | Aperçu de l'installation                                                 | Tous les utilisateurs                                 |
| 3.2 | Obtention du logiciel                                                    | Tous les utilisateurs                                 |
| 3.3 | Installation de DADman                                                   | Tous les utilisateurs                                 |
| 3.4 | Installation du pilote Thunderbolt 3                                     | AX64, AX Center, Core 256, Avid MTRX série uniquement |
| 3.5 | Configuration du driver Thunderbolt 3                                    | AX64, AX Center, Core 256, Avid MTRX série uniquement |
| 3.6 | macOS Sequoia : configuration de sécurité supplémentaire | macOS 15 (Sequoia) et plus tard    |
| 3.7 | Configuration de la connexion réseau                                     | Tous les utilisateurs connectés à Ethernet            |
| 3.8 | Vérification de l'installation                                           | Tous les utilisateurs                                 |

---

## Aperçu de l'installation de la 3.1

### 3.1.1 Composants Logiciels

DADman et le driver DAD Thunderbolt 3 sont **deux applications indépendantes et séparées**. Que vous ayez besoin des deux — ou seulement de DADman — dépend de la façon dont votre matériel se connecte à l'ordinateur.

| Composant                        | Objectif                                                                                                                                                                              | Requis pour                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **DADman**                       | Configure et contrôle toutes les unités matérielles DAD, NTP et Avid connectées sur Ethernet                                                                                          | Tous les matériels supportés                                   |
| **DAD Thunderbolt 3 conducteur** | Expose l'interface Thunder\|Core comme un périphérique audio Core (macOS) ou ASIO (Windows) pour l'utilisation du DAW et de l'application audio | Uniquement les produits AX64, AX Center, Core 256 et Avid MTRX |

> **AVIS :** Le pilote Thunderbolt 3 fournit le _transport_ audio entre l'ordinateur et le matériel — votre DAW le considère comme une interface audio. DADman fournit la couche de _contrôle_ — routage, gain, surveillance et configuration. Les deux peuvent être installés et exécutés simultanément sur le même ordinateur sans conflit.

Si votre matériel se connecte à l'ordinateur par Ethernet uniquement (par exemple, une unité AX32, DX32R ou Penta), vous n'avez besoin que de DADman.

### 3.1.2 Topologie de connexion

DADman communique avec toutes les unités connectées sur le réseau de votre ordinateur à l'aide du protocole Ethernet (IP), que ces unités se connectent également via Thunderbolt 3. Voir [Section 3.7 — Configuration de la connexion réseau] pour obtenir des conseils avant l'installation.

---

## 3.2 Obtention du logiciel

### Utilisateurs DAD et NTP matériels 3.2.1

Télécharger DADman et le pilote Thunderbolt 3 depuis le portail de support DAD :

**[https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com)**

Un compte DAD / NTP Technology gratuit est requis pour accéder au Centre de téléchargement. Si vous n'avez pas de compte :

1. Accédez au portail d'assistance et sélectionnez **Créer un compte**.
2. Remplissez le formulaire d'inscription.
3. Après avoir vérifié votre adresse e-mail, connectez-vous et accédez à **Centre de téléchargement**.
4. Repérez l'entrée DADman de votre système d'exploitation et téléchargez l'installateur.
5. Si votre matériel est un produit Thunder\|Core (AX64, AX Center, ou Core 256), téléchargez également le pilote Thunderbolt 3 pour votre système d'exploitation.

> **AVIS :** Vérifiez toujours les notes de publication dans le Centre de téléchargement avant d'installer. Les notes de publication documentent les versions testées de l'OS, tous les problèmes connus avec les nouvelles versions du système et les exigences de compatibilité du firmware pour cette version DADman.

### 3.2.2 Utilisateurs matériels Avid

Si vous utilisez DADman avec un Studio Avid MTRX, MTRX II ou MTRX :

1. Connectez-vous à votre **Compte Maître Avid** à [https://avid.com](https://avid.com).
2. Naviguez vers vos téléchargements et trouvez la version DADman approuvée pour votre matériel Avid.
3. Téléchargez l'installateur depuis votre compte Avid.

> **AVIS :** Les versions DADman approuvées par Avid peuvent différer de la dernière version disponible sur le portail de support DAD. Utilisez toujours la version du compte principal Avid pour le matériel Avid pour vous assurer de la compatibilité.

---

## 3.3 Installation de DADman

### 3.3.1 macOS

**Avant de commencer :** Assurez-vous que vous êtes connecté à un compte avec les privilèges d'administrateur. Quitter toutes les applications audio qui peuvent être en cours d'exécution.

1. Localisez le fichier d'installation DADman téléchargé (format `.pkg`) et double-cliquez dessus pour lancer l'installateur.
2. Lisez le contrat de licence et cliquez sur **Continuer**, puis **Accepter** pour accepter.
3. Click **Install**. Quand vous y êtes invité, entrez votre mot de passe Administrateur et cliquez sur **Installer le logiciel**.
4. Cliquez sur **Fermer** une fois l'installation terminée.
5. Naviguez vers votre dossier **Applications** et confirmez que **DADman.app** est présent.

DADman est maintenant installé. Ne le lancez pas encore si vous avez besoin d'installer le pilote Thunderbolt 3 — passez à [Section 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

Si votre matériel se connecte uniquement par Ethernet, vous pouvez lancer DADman maintenant. Procédez à [Section 3.7 — Configuration de la connexion réseau](#37-configuring-the-network-connection).

### Windows 3.3.2

**Avant de commencer :** Assurez-vous que vous êtes connecté à un compte avec les privilèges d'administrateur. Quitter toutes les applications audio qui peuvent être en cours d'exécution.

1. Localisez le fichier d'installation DADman téléchargé (format `.exe` ou `.msi`) et double-cliquez dessus.
2. Si une invite de contrôle de compte d'utilisateur apparaît, cliquez sur **Oui** pour permettre à l'installateur de fonctionner.
3. Suivez les instructions de l'installateur, cliquez sur **Suivant** à chaque étape.
4. Cliquez sur **Installer** pour commencer l'installation.
5. Cliquez sur **Terminer** une fois l'installation terminée.
6. Confirmez que DADman apparaît dans votre menu Démarrer.

Si votre matériel se connecte uniquement via Ethernet, procédez à [Section 3.7](#37-configuring-the-network-connection). Si vous avez besoin du pilote Thunderbolt 3, procédez à [Section 3.4](#34-installing-the-thunderbolt-3-driver-thundercore-products-only).

---

## 3.4 Installer le pilote Thunderbolt 3 (produits Thunder|Core uniquement)

> **AVIS :** Cette section s'applique uniquement si votre matériel est un AX64, un AX Center, un Core 256 ou un Avid MTRX. Si votre matériel se connecte à l'ordinateur uniquement via Ethernet, passez à [Section 3.7](#37-configuring-the-network-connection).

Le pilote DAD Thunderbolt 3 permet à votre interface Thunder\|Core d'apparaître comme un périphérique audio dans macOS Core Audio (visible dans **Configuration MIDI audio**) ou comme un périphérique ASIO dans Windows, le rendre disponible pour vos applications DAW et autres applications audio. L'installation du pilote n'affecte pas la capacité de DADman à communiquer avec l'unité via Ethernet — ce sont des chemins de connexion indépendants.

> **AVIS :** Ne connectez pas votre matériel Thunder\|Core au port Thunderbolt de l'ordinateur jusqu'à ce que la procédure d'installation du pilote vous le demande.

### 3.4.1 macOS

**Avant de commencer :** Assurez-vous que vous utilisez macOS 11 Big Sur ou supérieur. Assurez-vous que DADman v5.6.7.1 ou ultérieur est déjà installé (voir [Section 3.3.1](#331-macos)).

1. Localisez le pilote téléchargé de Thunderbolt 3 (format `.pkg`) et copiez-le sur votre bureau.
2. Double-cliquez sur le fichier `.pkg` pour lancer l'installateur.
3. Suivez les instructions à l'écran. Cliquez sur **Suivant**, puis sur **Installer**.
4. Entrez votre mot de passe administrateur lorsque vous y êtes invité et cliquez sur **Installer le logiciel**.
5. Si c'est la première fois que le pilote est installé sur cet ordinateur, macOS affichera une notification **"System Extension Blocked"**.
   - Cliquez sur **Ouvrir les préférences de sécurité** (ou sur **Ouvrir les paramètres du système** sur macOS Ventura et plus tard).
6. Dans le volet **Confidentialité et Sécurité** :
   - Cliquez sur l'icône de verrouillage en bas de la fenêtre et entrez votre mot de passe pour déverrouiller les paramètres.
   - Cliquez sur **Autoriser** à côté de l'extension bloquée de la Technologie Digital Audio Danemark / NTP.
7. Lorsque vous y êtes invité, cliquez sur **Redémarrer** pour redémarrer l'ordinateur.

> **AVIS :** La notification « Extension système bloquée » est une partie normale de la première installation sur macOS. Ce n'est pas une erreur. L'extension doit être autorisée avant que le pilote ne fonctionne.

8. Après le redémarrage, ouvrez **DADDriverSetup** depuis votre dossier Applications.
9. Connectez votre matériel Thunder\|Core au port Thunderbolt 3 ou USB-C de l'ordinateur à l'aide d'un câble évalué à 20 Gbps.

Le pilote est maintenant installé. Procédez à [Section 3.5.1](#351-macos-daddriversetup) pour configurer les paramètres du pilote.

> **AVIS — macOS Sequoia (15) et plus tard :** Apple a resserré considérablement les autorisations de sécurité des accessoires Thunderbolt à partir de macOS Sequoia. Des étapes supplémentaires sont requises. Voir [Section 3.6 — macOS Sequoia: Configuration de sécurité supplémentaire](#36-macos-sequoia-additional-security-configuration) avant de continuer.

### 3.4.2 Windows

**Avant de commencer :** Assurez-vous que vous utilisez Windows 10 ou Windows 11 (64-bit). Assurez-vous que DADman v5.6.7.1 ou ultérieur est déjà installé (voir [Section 3.3.2](#332-windows)).

1. Localisez le pilote téléchargé de Thunderbolt 3 (format `.msi`) et copiez-le sur votre bureau.
2. Double-cliquez sur le fichier `.msi` pour lancer l'installateur.
3. Si une invite de contrôle de compte d'utilisateur apparaît, cliquez sur **Oui**.
4. Suivez les instructions à l'écran. Cliquez sur **Suivant**, puis sur **Installer**.
5. Cliquez sur **Terminer** une fois l'installation terminée.
6. Connectez votre matériel Thunder\|Core au port Thunderbolt 3 ou USB-C de l'ordinateur à l'aide d'un câble évalué à 20 Gbps.

Le pilote est maintenant installé. Procédez à [Section 3.5.2](#352-windows-asio-configuration) pour configurer le pilote dans votre application audio.

---

## 3.5 Configuration du pilote Thunderbolt 3

### 3.5.1 macOS — DADDriverSetup {#351-macos-daddriversetup}

L'application **DADDriverSetup** contrôle le nombre de canaux et la sélection de périphériques pour le pilote audio Thunderbolt 3 sur macOS. Les modifications faites ici sont immédiatement reflétées dans **Configuration MIDI audio** et sont visibles par n'importe quelle application compatible Core Audio sur l'ordinateur.

> **AVIS :** La fréquence d'échantillonnage du pilote audio Thunderbolt est configurable à la fois depuis DADDriverSetup et directement depuis DADman. En fonctionnement normal, vous n'avez pas besoin d'ouvrir DADDriverSetup pour modifier le taux d'échantillon.

\*\*Sur macOS, la seule raison pour ouvrir DADDriverSetup est de changer le nombre de canaux Thunderbolt présentés à l'hôte. \* Tous les autres paramètres peuvent être définis à partir de DADman.

> **AVIS — Les ordinateurs Intel vs. Apple Silicon Mac :** Apple M1 et ultérieurs prennent sans difficulté 256 canaux bidirectionnels Thunderbolt. Sur Mac Intel, les performances du système peuvent bénéficier de la réduction du nombre de canaux si votre flux de travail ne nécessite pas les 256 canaux complets — en particulier à des taux d'échantillonnage plus élevés ou avec des charges importantes du processeur.

**Pour changer le nombre de canaux :**

1. Ouvrez **DADDriverSetup** depuis votre dossier Applications.
2. Assurez-vous que votre matériel Thunder\|Core est connecté et allumé.
3. Configurer les paramètres suivants :

| Paramètre                      | Options                                                                                                        | Notes                                                                                                                                                                                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sélection de Périphériques** | Liste déroulante des unités connectées au Thunder\|Core                                                        | Si plusieurs unités sont enchaînées de marguerite sur le bus Thunderbolt 3, chaque unité peut être sélectionnée individuellement                                                                                                                                                                 |
| **Taux d'échantillonnage**     | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Également configurable à partir de DADman; les changements ici sont immédiatement reflétés dans le Core Audio                                                                                                                                                                                    |
| **Canaux**                     | 16, 64, 128, 256 (bidirectionnel)                                                           | Toutes les interfaces Thunder\|Core prennent en charge 256 canaux bidirectionnels dans le matériel. Les Mac M1 et ultérieurs gèrent sans problème 256 canaux. Sur les Mac Intel, la réduction de cette valeur réduit la surcharge du processeur. |

> **AVIS :** Le paramètre Chaînes contrôle combien de canaux sont visibles pour le Core Audio et votre DAW. Cela n'affecte pas le nombre de canaux disponibles en interne dans la matrice de routage de DADman.

4. Après avoir effectué des modifications, Ouvrez **Configuration Audio MIDI** (**Applications > Utilitaires > Configuration MIDI audio**) pour confirmer que l'interface DAD Thunder\|Core apparaît au format correct. Le format indiqué doit correspondre au nombre de canaux et au taux d'échantillonnage configuré dans DADDriverSetup.

> **Astuce :** Si DADDriverSetup s'ouvre et que votre unité Thunder\|Core connectée apparaît dans le menu déroulant Sélection de périphériques, le pilote Thunderbolt est installé et fonctionne correctement. C'est la façon la plus rapide de confirmer le fonctionnement du pilote sur macOS sans avoir à ouvrir un DAW.

### 3.5.2 Windows — Configuration ASIO {#352-windows-asio-configuration}

Le pilote ASIO Thunderbolt 3 est configuré à partir des paramètres ASIO de votre application audio.

**Pour configurer le pilote :**

1. Ouvrez votre application DAW ou audio.
2. Dans les paramètres du périphérique audio, sélectionnez **Digital Audio Danemark** comme pilote ASIO.
3. Ouvrez le dialogue de configuration ASIO. Configurer les paramètres suivants :

| Paramètre                      | Options                                                                                                        | Notes                                                                                                                                                                                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sélection de Périphériques** | Liste déroulante des unités connectées au Thunder\|Core                                                        | Sélectionnez l'unité à utiliser comme périphérique ASIO principal                                                                                                                                                                   |
| **Taille du tampon**           | 16, 32, 64, 256, 512, 1024 échantillons                                                                        | Commencez avec une grande valeur (512 ou 1024) pour assurer un chemin audio stable; réduisez une fois que le système est confirmé stable                                                                         |
| **Taux d'échantillonnage**     | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz | Contrôlé par votre application audio; listé ici pour référence                                                                                                                                                                      |
| **Canaux**                     | 16, 64, 128 (bidirectionnel)                                                                | Le pilote ASIO Windows Thunderbolt prend en charge un maximum de 128 canaux bidirectionnels. Réduire du maximum si pas tous les canaux sont nécessaires pour améliorer les performances du système. |

> **Astuce :** Si la boîte de dialogue de configuration ASIO s'ouvre et que votre unité Thunder\|Core apparaît dans la liste déroulante Sélection de périphériques, le pilote ASIO de Thunderbolt est installé et fonctionne correctement. C'est la façon la plus rapide de confirmer le fonctionnement du pilote sous Windows sans avoir à lancer la lecture audio.

**Diagnostic des pilotes — Windows uniquement :**

La fenêtre de configuration du pilote ASIO comprend trois indicateurs de performance en temps réel. Surveiller ces éléments lors de la configuration initiale et si vous rencontrez des problèmes sonores :

| Indicateur                                                        | Valeur Acceptable                                                           | En dehors des limites                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **IRs manqués** (interruptions audio manquées) | 0                                                                           | Les interruptions audio sont interrompues par la concurrence des processus système Windows. Augmentez la taille du tampon ou réduisez la charge du processeur en arrière-plan.                                                                                                                                          |
| **Charge PCI**                                                    | Pourcentage faible; échelle avec nombre de canaux                           | Des valeurs élevées indiquent que le bus PCIe est saturé. Réduire le nombre de canaux ou enquêter sur d'autres consommateurs de bande passante PCII.                                                                                                                                                                    |
| **Latence DPC** (appel de procédure différée)  | Bas (< ~500 μs) | La planification de l'interruption de Windows OS est en train d'introduire la latence. Utilisez un outil d'analyseur de latence DPC pour identifier le pilote en infraction. Désactiver le Wi-Fi, la gestion de l'alimentation USB ou d'autres pilotes générateurs d'interruption comme première étape. |

> **AVIS :** Commencez avec une grande taille de tampon (512 ou 1024 échantillons) lors de la première configuration du pilote ASIO. Une fois que le système est confirmé fonctionner sans interruptions manquées, vous pouvez réduire la taille du tampon à la valeur stable la plus faible de votre flux de travail.

---

## 3.6 macOS Sequoia : Configuration de sécurité supplémentaire

> **S'applique à:** macOS 15 (Sequoia) et toutes les versions suivantes de macOS  
> **Source:** Bulletin de Support Technique DAD, Janvier 2026

A partir de macOS Sequoia, Apple a considérablement renforcé les contrôles de sécurité régissant les connexions Thunderbolt et USB accessoires. Ce changement affecte toutes les interfaces de Thunderbolt de tous les fabricants — il n'est pas spécifique au matériel DAD ou aux logiciels.

Si vous installez sur macOS Sequoia ou une version plus récente, effectuez les étapes suivantes **en plus de** l'installation du pilote standard dans [Section 3.4.1](#341-macos).

### 3.6.1 Réglage des permissions d'accessoire

1. Ouvrez **Paramètres Système** (Menu Apple > Paramètres Système).
2. Accédez à **Confidentialité et Sécurité**.
3. Faites défiler vers le bas jusqu'à la section **Accessoires**.
4. Définissez les droits d'accès à l'accessoire :
   - **Autoriser automatiquement les nouveaux accessoires à se connecter** — recommandé pour les ordinateurs de studio qui ne laissent pas un environnement contrôlé
   - **Toujours autoriser** - permissivité maximale; approprié si vous connectez plusieurs périphériques différents de Thunderbolt
5. Lorsque vous y êtes invité, approuvez le changement avec votre mot de passe ou Touch ID.

### 3.6.2 Réinstallation du pilote sur Sequoia

Si vous avez une version précédemment installée du pilote Thunderbolt 3 et que vous mettez à jour vers une nouvelle version sur macOS Sequoia :

> **AVIS :** Le modèle de sécurité d'Apple nécessite la suppression de l'ancien pilote avant d'installer le nouveau. Le simple fait d'exécuter le nouvel installateur sur l'installation existante ne donnera pas le bon fonctionnement du pilote sur Sequoia.

1. Localisez **DADDriverSetup.app** dans le dossier Applications.
2. Déplacez-le dans la corbeille (**clic droit > Déplacer vers la corbeille** ou faites glisser vers la corbeille).
3. macOS affichera un avertissement indiquant que l'extension système sera supprimée. Ceci est le résultat attendu et désiré — cliquez pour confirmer la suppression.
4. Téléchargez le dernier driver Thunderbolt 3 depuis le portail de support DAD à [https://www.digitalaudiosupport.com](https://www.digitalaudiosupport.com).
5. Installez le nouveau pilote suivant la procédure dans [Section 3.4.1](#341-macos).
6. Une fois l'installateur terminé, macOS affichera une boîte de dialogue vous demandant d'approuver la nouvelle connexion Thunderbolt. Cliquez sur **Autoriser** (ou équivalent) et permettez à l'ordinateur de redémarrer.

Après le redémarrage, votre matériel Thunder\|Core devrait se connecter correctement.

### 3.6.3 macOS Sequoia — Problème de connexion réseau connu

> **Affectes :** Toutes les versions de DADman sur macOS Sequoia ; attendues à être résolues dans une future mise à jour DADman  
> **Version notée :** Depuis DADman v5.8.1.6

Sur macOS Sequoia, DADman peut ne pas se connecter aux périphériques du réseau au premier lancement de l'application. Les périphériques audio connectés via Thunderbolt 3 ne sont pas affectés par ce problème.

**Solution de contournement :**

1. Lancez DADman et laissez-le fonctionner même si aucun périphérique n'apparaît dans la liste des périphériques.
2. Déconnexion de votre compte utilisateur macOS (**Menu Apple > Déconnexion**).
3. Reconnectez-vous à votre compte d'utilisateur macOS.
4. DADman va maintenant se connecter avec succès aux périphériques réseau.

> **AVIS :** Définir DADman à se lancer automatiquement à la connexion élimine la nécessité d'effectuer cette solution manuellement à chaque démarrage. Voir [Chapitre 8 — Fonctionnalités avancées, Section 8.X — Configurer DADman pour démarrer au démarrage du système].

---

## 3.7 Configuration de la connexion réseau

### 3.7.1 Aperçu du réseau

DADman communique avec toutes les unités connectées via Ethernet en utilisant le protocole IP. Cela inclut les unités qui se connectent également à l'ordinateur via Thunderbolt 3 — les deux chemins de connexion sont actifs simultanément et servent des objectifs différents (Thunderbolt transporte de l'audio ; Ethernet transporte les données de contrôle).

DADman utilise le réseau de votre ordinateur pour découvrir et communiquer avec des unités matérielles. Les paramètres de chaque unité sont stockés sur l'unité elle-même; DADman lit et écrit ces paramètres sur la connexion réseau. Si la connexion réseau est perdue, DADman perd le contrôle de l'unité, mais l'audio passe à travers l'unité ininterrompue.

### 3.7.2 Réseau dédié fortement recommandé

> **AVIS — Isolation du réseau :** Pour une opération fiable, DAD recommande fortement d'utiliser un **réseau Ethernet dédié** pour le contrôle DADman. séparément de votre réseau général de studios ou d'installations. Le partage du réseau de contrôle avec Audio sur IP (Dante, AES67), EuControl, ou le trafic bureau/Internet introduit le risque de décrocheurs audio et de contrôle.

Topologie réseau recommandée pour une installation typique de studio :

| Réseau                   | Objectif                             | Connexion à l'ordinateur                      |
| ------------------------ | ------------------------------------ | --------------------------------------------- |
| Réseau de contrôle dédié | DADman ↔️ unités matérielles         | Port Ethernet dédié / adaptateur USB–Ethernet |
| Réseau audio Studio/IP   | Transport audio Dante / AES67        | Port Ethernet dédié                           |
| Réseau bureau/internet   | Utilisation générale de l'ordinateur | Wi-Fi ou troisième port Ethernet              |

Un simple système à deux unités (un ordinateur + une unité matérielle) peut utiliser une connexion Ethernet directe avec un câble unique entre le port Ethernet de l'ordinateur et le port réseau de l'unité — aucun commutateur n'est requis si les deux sont configurés sur le même sous-réseau.

### 3.7.3 Configuration des adresses IP

DADman découvre des unités par adresse IP. Les unités peuvent être configurées avec une adresse IP statique ou une adresse DHCP, selon votre environnement réseau.

**Pour de simples configurations réseau dédiées** (aucun serveur DHCP sur le réseau de contrôle), configurez les adresses IP statiques :

| Appareil                                     | Exemple d'adresse IP                                         | Masque de sous-réseau                                         |
| -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Ordinateur (contrôle NIC) | 192.168.1.1  | 255.255.255.0 |
| Unité de matériel 1                          | 192.168.1.10 | 255.255.255.0 |
| Unité de matériel 2                          | 192.168.1.11 | 255.255.255.0 |

Les adresses IP sont définies sur l'unité matérielle en utilisant DADman, l'affichage du panneau principal de l'unité, ou une interface de navigateur Web, selon le modèle matériel. Reportez-vous au guide d'installation pour obtenir des instructions sur la configuration de l'adresse IP.

> **AVIS :** Après avoir changé l'adresse IP d'une unité matérielle, vous devez mettre à jour la liste des périphériques DADman pour refléter la nouvelle adresse avant que la connexion ne soit rétablie.

**Pour les réseaux d'installations avec un serveur DHCP :** les unités peuvent être configurées pour utiliser DHCP. Cependant, si les baux DHCP changent, DADman perdra la trace des unités à leur adresse précédente. Il est recommandé d'assigner des réservations DHCP (mappings MAC-to-IP fixes) à l'interrupteur ou au routeur pour éviter cela.

---

## 3.8 Vérification de l'installation

Une fois DADman et (le cas échéant) le pilote Thunderbolt 3 sont installés et le réseau est configuré, effectuez les vérifications suivantes pour confirmer que l'installation est correcte avant de passer au [Chapitre 6 — Démarrage].

### 3.8.1 Vérification de DADman

1. Lancez **DADman** depuis le dossier Applications (macOS) ou le menu Démarrer (Windows).
2. Attendez jusqu'à 30 secondes pour que la découverte de l'appareil soit terminée.
3. Confirmez que votre ou vos unités matérielles apparaissent dans la **Liste des Périphériques** en haut de la fenêtre DADman.
4. Confirmez que la version actuelle du firmware de l'unité est affichée et correspond à vos attentes.

Si aucun périphérique n'apparaît, voir [Chapitre 9 — Dépannage, Section 9.2 — Problèmes de réseau et de connectivité].

### 3.8.2 Vérification du pilote Thunderbolt 3 (macOS)

1. Ouvrez **Configuration MIDI audio** (**Applications > Utilitaires > Configuration MIDI audio**).
2. Confirmez que l'interface **DAD Thunder\|Core** apparaît dans la liste des périphériques à gauche.
3. Confirmez que le format affiché (par exemple, "256 ch, 48000 Hz") correspond aux paramètres configurés dans DADDriverSetup.

Si l'interface n'apparaît pas, confirmez:

- L'unité est alimentée et connectée via un câble Thunderbolt évalué à 20 Gbps.
- L'extension système a été autorisée dans **Privacy & Security** (voir [Section 3.4.1](#341-macos), étape 6).
- Si sur macOS Sequoia : la permission Accessoires est réglée correctement (voir [Section 3.6.1](#361-setting-accessory-permissions)).

### 3.8.3 Vérification du pilote Thunderbolt 3 (Windows)

1. Ouvrez votre application DAW ou audio.
2. Dans les paramètres du périphérique audio, confirmez que **Digital Audio Danemark** est sélectionnable comme pilote ASIO.
3. Ouvrez la boîte de dialogue de configuration ASIO et confirmez que votre appareil apparaît dans la liste déroulante Sélection de périphériques.
4. Confirmez que le compteur **IRs manqués** lit **0** après quelques secondes d'inactivité.

---

## Résumé des fichiers installés

| Fichier / Application    | Plateforme | Localisation                             | Objectif                                                           |
| ------------------------ | ---------- | ---------------------------------------- | ------------------------------------------------------------------ |
| `DADman.app`             | macOS      | `/Applications/`                         | Application de contrôle principal                                  |
| `DADman.exe`             | Fenêtres   | `C:\Program Files\DADman\`            | Application de contrôle principal                                  |
| `DADDriverSetup.app`     | macOS      | `/Applications/`                         | Configuration du pilote Thunderbolt 3                              |
| Pilote DAD ASIO          | Fenêtres   | Installé via `.msi`                      | Pilote audio ASIO pour utilisation DAW                             |
| Extension du système DAD | macOS      | Système — non accessible à l'utilisateur | Extension Kernel activant le périphérique audio Thunderbolt 3 Core |

---

## Références croisées

- **Chapitre 1 — Introduction :** Aperçu de l'architecture ; compréhension de la façon dont DADman, le pilote TB3 et le réseau communiquent
- **Chapitre 2 — Exigences système :** Compatibilité avec OS et spécifications matérielles minimales
- **Chapitre 6 — Démarrage :** Premiers pas après l'installation — connexion à votre console et vérification du signal
- **Chapitre 9 — Dépannage :** Étapes de diagnostic si l'installation n'est pas terminée avec succès ou si les périphériques ne sont pas découverts
- **Chapitre 10 — Maintenance :** Mise à jour de DADman et firmware

---

_[Placeholder: figures à insérer — TB3 driver installation screenshots (macOS et Windows), DADDriverSetup configuration window, Configuration audio MIDI montrant l'interface DAD, la confidentialité et la sécurité macOS / l'écran Accessoires, dialogue Windows ASIO]_

_[En attente de l'ingénierie DAD : Référence croisée de la procédure de mise à jour du firmware, instructions d'adressage IP confirmées par modèle matériel]_
