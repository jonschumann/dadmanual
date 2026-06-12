---
id: ch05-flux de signal
title: "Chapitre 5 — Flux de signaux et architecture"
sidebar_label: "Ch. 5 — Flux de signal"
sidebar_position: 7
slug: /fr-fr/signal-flow
---

# Chapitre 5 — Flux de signaux et architecture

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte :** DADman v5.8.2 build 2  
> **Statut du chapitre :** Brouillon v0. — Bloquer les diagrammes et les figures de topologie en attente; En attente d'examen technique par l'ingénierie DAD  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section             | Couvertures                                              | Pertinent pour        |
| ------------------- | -------------------------------------------------------- | --------------------- |
| 5.1 | Architecture de contrôle basée sur Ethernet              | Tous les utilisateurs |
| 5.2 | La liste des périphériques                               | Tous les utilisateurs |
| 5.3 | Recommandations réseau                                   | Tous les utilisateurs |
| 5.4 | Adresse IP                                               | Tous les utilisateurs |
| 5.5 | Vue d'ensemble de l'horloge et du taux d'échantillonnage | Tous les utilisateurs |
| 5.6 | Taux d'échantillonnage et capacité de canal              | Tous les utilisateurs |

---

## 5.1 Architecture de contrôle basée sur Ethernet

DADman communique avec toutes les unités matérielles connectées via Ethernet en utilisant le protocole TCP/IP. Ceci s'applique à tous les matériels pris en charge — y compris les unités qui se connectent également via Thunderbolt 3. La connexion Ethernet ne dispose que de données de contrôle (changements de configuration, surveillance d'état, compteur) ; l'audio est transporté séparément par MADI, Dante, AES3 ou Thunderbolt 3 selon le matériel.

Parce que DADman utilise un réseau Ethernet standard, un seul ordinateur fonctionnant sous DADman peut contrôler plusieurs unités simultanément, à condition que toutes les unités soient accessibles sur le même réseau. Les unités apparaissent dans la **Liste des périphériques** DADman de gauche à droite, ordonnées par leur numéro d'identification d'unité.

_[Placeholder: diagramme de topologie du système — ordinateur fonctionnant sous DADman connecté à un commutateur réseau, avec plusieurs unités matérielles DAD sur le même sous-réseau Ethernet ; Câble Thunderbolt affiché séparément pour les unités Thunder\|Core ]_

### 5.1.1 Dual Communication Paths for Thunder|Core Hardware

Une unité Thunder\|Core connectée à un ordinateur utilise deux chemins de communication simultanés indépendants :

| Chemin d'accès           | Protocol     | Objectif                                                                   |
| ------------------------ | ------------ | -------------------------------------------------------------------------- |
| **Ethernet**             | TCP/IP       | Contrôle DADman — routage, gain, configuration                             |
| **Eclair de tonnerre 3** | PCIe sur TB3 | Transport audio — l'interface visible par votre DAW via Core Audio ou ASIO |

Le matériel uniquement Ethernet (AX32, DX32R, série Penta) n'utilise que le chemin Ethernet. Il n'y a pas de pilote Thunderbolt 3 pour ces unités, et elles n'apparaissent pas comme des interfaces audio sur l'ordinateur. L'audio de ces unités est transporté sur MADI, Dante ou AES3.

_[Placeholder: diagramme montrant le pilote DADman et TB3 comme chemin parallèle entre l'ordinateur et une unité Thunder\|Core — DADman communiquant par Ethernet, Le conducteur TB3 communique sur Thunderbolt 3 ; contrasté avec une unité uniquement Ethernet ne montrant que le chemin Ethernet]_

---

## 5.2 La liste des périphériques

La liste des périphériques est la vue de haut niveau dans DADman montrant toutes les unités découvertes et connectées. Chaque unité est affichée avec une bordure colorée qui l'identifie visuellement et sépare ses contrôles de ceux des unités adjacentes.

Quand DADman démarre, il tente de se reconnecter aux unités trouvées lors de la dernière session. Si un fichier de paramètres DADman (`.dms`) est configuré pour se charger automatiquement au démarrage, il sera appliqué aux unités connectées. Si aucun fichier de configuration n'est chargé au démarrage, les connexions aux unités de la liste des périphériques doivent être rétablies manuellement.

Voir [Chapitre 7, Section 7.3 — Liste des périphériques] pour une référence complète de la liste des périphériques.

---

## 5.3 Recommandations réseau

> **REMARQUE:** Pour un contrôle fiable, DAD recommande fortement d'utiliser un réseau Ethernet dédié pour DADman, séparé de votre studio général ou réseau d'installations. Voir [Chapitre 3, Section 3.7 — Configuration de la connexion réseau] pour un guide de topologie détaillé.

DADman contrôle le trafic est léger. Cependant, le partage du réseau de contrôle avec Audio over IP (Dante, AES67), EuControl, ou le trafic Internet général peut causer des chutes de connectivité intermittentes qui interrompent les mises à jour des paramètres en temps réel. Un commutateur Gigabit Ethernet dédié ou une connexion directe par câble entre l'ordinateur et l'unité est la topologie recommandée pour toutes les installations professionnelles.

---

## 5.4 Adresse IP

Chaque unité matérielle nécessite une adresse IP unique sur le même sous-réseau que l'ordinateur exécutant DADman. Les unités peuvent être configurées avec des adresses IP statiques (recommandées pour les réseaux de contrôle dédiés) ou des adresses attribuées par DHCP.

Les adresses IP sont configurées soit via l'affichage du panneau frontal de l'unité, via une interface de navigateur Web, soit via DADman après la connexion initiale. Reportez-vous au guide d'installation pour connaître votre modèle matériel spécifique pour la première fois de la procédure d'attribution d'adresses IP.

---

## Aperçu de l'horloge et du taux d'échantillonnage 5.5

L'horloge détermine la fréquence d'échantillonnage à laquelle tout le son du système fonctionne. Parce que le matériel contrôlé par DADman se trouve généralement au centre d'une infrastructure audio plus grande — la réception et le routage de l'audio à partir de sources multiples — la configuration de l'horloge est l'un des aspects les plus importants de la configuration du système.

### 5.5.1 La hiérarchie de l'horloge

Tous les périphériques audio numériques d'un système connecté doivent partager un exemple d'horloge commun pour éviter les clics, pops, et artefacts audio causés par l'incompatibilité du taux d'échantillon. Une console agit en tant que **maître de l'horloge**; tous les autres sont **esclaves de l'horloge** qui se synchronisent avec elle.

Le matériel contrôlé par DADman peut agir en tant que maître ou esclave et peut dériver son horloge à partir de plusieurs sources :

| Source de l'horloge      | Libellé                                                                                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Internal**             | L'unité génère sa propre horloge à la fréquence d'échantillonnage sélectionnée — utiliser lorsque l'unité est le maître d'horloge du système                                  |
| **Horloge du mot**       | Un signal d'horloge mot externe sur l'entrée de l'horloge BNC mot                                                                                                             |
| **MADI**                 | Horloge extraite d'un flux MADI entrant                                                                                                                                       |
| **Dîner**                | Horloge dérivée du réseau audio Dante (basé sur PTP)                                                                                                       |
| **AES3**                 | Horloge extraite d'un signal entrant AES3                                                                                                                                     |
| **Eclair de tonnerre 3** | Horloge dérivée de l'ordinateur connecté _(Thunder\|Core hardware)_                                                                                        |
| **Adapter à**            | DADman correspond automatiquement à la fréquence d'échantillonnage d'un signal numérique entrant — utile pour s'adapter aux modifications de la vitesse d'échantillonnage DAW |

_[Placeholder: Schéma de la hiérarchie de l'horloge montrant l'horloge master → word clock bus → clock slaves; avec Dante PTP comme référence alternative]_

La source de l'horloge et le taux d'échantillonnage sont configurés dans l'onglet **Conflits** de DADman. Voir [Chapitre 7, Section 7.5 — Horloge et configuration] pour la référence complète.

---

## 5.6 Taux d'échantillonnage et capacité de canal

Certains formats audio offrent moins de canaux à des taux d'échantillonnage plus élevés. Le tableau ci-dessous montre comment la capacité des canaux change avec le taux d'échantillonnage pour les formats les plus courants sur le matériel DAD.

| Formater                                                                                         | Canaux à 44,1 / 48 kHz | Canaux à 88,2 kHz / 96 kHz      | Canaux à 176,4 / 192 kHz        |
| ------------------------------------------------------------------------------------------------ | ---------------------- | ------------------------------- | ------------------------------- |
| MADI (standard)                                                               | 64                     | 32 (S/MUX 2) | 16 (S/MUX 4) |
| MADI (vitesse élevée)                                                         | 64                     | 64                              | 32                              |
| Dante (standard)                                                              | 64                     | 32                              | 16                              |
| Dante 256 IPCore _(v5.8.1.6)_ | 256                    | 128                             | 64                              |
| ADAT Lightpipe                                                                                   | 8                      | 4 (S/MUX 2)  | —                               |
| Bras de tonnerre 3 (pilote DAD)                                               | Jusqu'à 256            | Jusqu'à 256                     | Jusqu'à 256                     |

> **REMARQUE:** Les valeurs de capacité du canal dans le tableau ci-dessus sont typiques; les valeurs réelles dépendent de votre modèle matériel spécifique et de la version du micrologiciel. Confirmez la capacité de votre unité dans les spécifications techniques de l'annexe A.

---

## Références croisées

- **Chapitre 1 — Introduction :** Liste de matériel compatible; Vue d'ensemble des familles de matériel
- **Chapitre 3 — Installation :** Installation de DADman et configuration du réseau
- **Chapitre 4 — Description du matériel :** Connecteurs du panneau avant et arrière ; E/S physique
- **Chapitre 7 — Opération:** Conf tab reference for clock source and sample rate settings
- **Annexe A — Spécifications :** Tableaux de spécifications matérielles complets incluant les capacités de la matrice de routage

---

_[En attente de l'ingénierie DAD :]_  
_— Numéro de port DADman TCP/UDP utilisé pour la découverte et le contrôle d'unités (nécessaire pour Ch. 9 pannage de pare-feu)_  
_— Dante 256 IPCore pris en charge la confirmation de la liste des unités (v5. .1.6)_  
_— Trois figures du diagramme de blocs notées comme marqueurs ci-dessus_
