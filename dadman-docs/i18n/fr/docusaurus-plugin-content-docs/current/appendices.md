---
title: "Annexes"
sidebar_label: "Annexes"
sidebar_position: 13
---

# Annexes

> **Document:** Manuel utilisateur DADman  
> **Statut du chapitre :** Brouillon v0. — App G (Glossaire) terminée ; App E (Changelog) a compilé la source ; Apps A, B, C, F en attente d'ingénierie DAD et légal; Application H (Index) pour générer à partir du document final  
> **Dernière mise à jour :** Juin 2026

---

## Annexe A — Caractéristiques techniques

Cette annexe fournit des spécifications techniques complètes pour tous les matériels contrôlés par DADman dans la gamme actuelle de produits actifs. Les spécifications sont obtenues à partir de la documentation officielle des produits DAD. Tous les compteurs de canaux reflètent le nombre maximum de chiffres au taux d'échantillonnage indiqué; le nombre réel dépend des cartes d'extension installées.

> **NOTE:** AX32 (BASE1/BASE2) n'est plus en production active et n'est pas inclus ici. Reportez-vous au manuel du matériel d'AX32 pour connaître les spécifications héritées.

---

### Centre AX A.1 (AXCNTR-BASE)

**Aperçu du produit:** Interface audio modulaire compacte 1U, 2 emplacements avec E/S analogique native. Idéal en tant que centre de studio pour l'enregistrement, le contrôle du moniteur et les applications audio immersives. Comprend à bord Thunderbolt 3, Dante, MADI et ADAT, avec deux emplacements de cartes d'extension pour les E/S supplémentaires.

#### Matrice de routage

| Ressource                         | Capacité        |
| --------------------------------- | --------------- |
| Matrice de routage                | 1,006 × 1,112   |
| Processeur de somme MON           | 512 × 64 canaux |
| égaliseur SPQ                     | 1 024 filtres   |
| Emplacements de carte d'extension | 2               |

#### E/S autochtone

| Interface                                 | Nombre de canaux                                           |
| ----------------------------------------- | ---------------------------------------------------------- |
| Microphone / Ligne / Entrée d'instruments | 2 (sélectionnable par canal)            |
| Sorties d'écouteurs stéréo                | 2                                                          |
| Stereo monitor outputs                    | 2                                                          |
| Éclair de tonnerre 3                      | 256 ch @ 48 & 96 kHz      |
| Dante AoIP                                | 256 ch @ 48 kHz; 128 ch @ 96 kHz |
| MADI I/O                                  | 64 ch @ 48 kHz                                |
| ADAT I/O                                  | 16 ch / S/PDIF 2 ch                                        |
| DADlink (via SFP)      | Jusqu'à 256 × 256 ch                                       |

#### Spécifications analogiques

**Sortie du casque**

| Paramètre                                   | Valeur                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Plage dynamique                             | > 120 dB                                                                                          |
| THD+N (pondéré)          | < −100 dB @ −3 dBFS                                         |
| Traverser                                   | < -110 dB                                                                |
| Charger l'impédance                         | 18 – 600 Ω                                                                                        |
| Impédance de sortie                         | < 1                                                            |
| Niveau de sortie max                        | Ajustable -80 à +19 dBu (pas de 0,1 dB)                                        |
| latence de conversion @ 96 kHz | 450 μs (filtre à haute rétractation) / 150 μs (délai court) |

**Sortie du moniteur analogique**

| Paramètre                          | Valeur                                                     |
| ---------------------------------- | ---------------------------------------------------------- |
| Plage dynamique                    | > 128 dB                                                   |
| THD+N (pondéré) | < -115 dB @ -3 dBFS  |
| Traverser                          | < −115 dB                         |
| Niveau de sortie max               | Ajustable -60 à +24 dBu (pas de 0,1 dB) |
| latence de conversion              | 450 μs @ 96 kHz                               |

**Microphone / instrument d'entrée**

| Paramètre                                      | Valeur                                                               |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| Plage dynamique                                | > 124 dB                                                             |
| THD+N (pondéré)             | < -115 dB @ -3 dBFS            |
| Traverser                                      | < −115 dB                                   |
| Impédance d'entrée                             | 2 kΩ(Mic) / > 1 MΩ(Instrument) |
| Gamme de gain du microphone                    | -21 à +100 dB (pas de 0,1 dB)                     |
| EIN du microphone (pondéré) | < -131 dBu                                  |
| latence de conversion                          | 350 μs @ 96 kHz                                         |

#### E/S numériques et synchronisation

| Paramètre                             | Valeur                                                                                                                                                                                             |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taux d'échantillonnage pris en charge | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| latence interne du système            | 7 échantillons (réglables entre 3 et 31 échantillons)                                                                                                                           |
| DADlink format                        | Point flottant 28 bits, latence zéro échantillon                                                                                                                                                   |
| Synchronisation sources               | Horloge de mot, rafale de vidéo noire, Dante, ADAT, MADI                                                                                                                                           |
| Interface réseau                      | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Éclair de tonnerre 3                  | 2 × USB-C, lien + 15 W de puissance par port                                                                                                                                                       |

#### Caractéristiques Électriques

| Paramètre                                                  | Valeur                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------- |
| Notation principale max                                    | 90 W                                                                |
| Tension d'entrée                                           | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusion réseau réseau                                       | 1 T T, connecteur IEC monté                                         |
| Connecteur réseau                                          | IEC 60309                                                           |
| Alimentation de la section numérique                       | 15 W                                                                |
| Puissance de la carte d'extension (max) | 30W                                                                 |
| Puissance d'Eclair de tonnerre (max)    | 2 × 15 W                                                            |

#### Spécifications Mécaniques

| Paramètre             | Valeur                                           |
| --------------------- | ------------------------------------------------ |
| Facteur de formulaire | Chevalet 19", 1 RU (44,4 mm)  |
| Profondeur du châssis | 320 mm                                           |
| Largeur du corps      | 435 mm                                           |
| Poids                 | 3.2 kg / 7.1 lbs |

#### Environnement et conformité

| Paramètre                     | Valeur                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Température de fonctionnement | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                |
| Humidité                      | 20 – 85%, non-condensation                                                                                                                                                                                                                                                                                                             |
| Conformité EMC                | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Part 15 Subpart B |
| Conformité de sécurité        | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                       |

---

### A.2 AX64 (AX64-BASE)

**Aperçu du produit:** Interface audio modulaire 2U à 8 emplacements. Conçue pour des applications de studio grand format et en direct nécessitant une extension étendue des E/S. Prise en charge de l'alimentation redondante optionnelle (AX64-RPS).

#### Matrice de routage

| Ressource                         | Capacité        |
| --------------------------------- | --------------- |
| Matrice de routage                | 1,872 × 1,872   |
| Processeur de somme MON           | 512 × 64 canaux |
| égaliseur SPQ                     | 1 024 filtres   |
| Emplacements de carte d'extension | 8               |

#### E/S autochtone

| Interface                                           | Nombre de canaux                                                     |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| Éclair de tonnerre 3                                | 256 ch @ 48 & 96 kHz                |
| Dante AoIP                                          | 256 ch @ 48 kHz; 128 ch @ 96 kHz           |
| MADI I/O                                            | 64 ch @ 48 kHz                                          |
| ADAT I/O                                            | 16 ch / S/PDIF 2 ch                                                  |
| Via les cartes d'extension (max) | Jusqu'à 1 024 × 1 024 ch                                             |
| DADlink / MADI via SFP (max)     | Jusqu'à 256 × 256 DADlink ou 128 × 128 MADI ch @ 48 kHz |

#### E/S numériques et synchronisation

| Paramètre                             | Valeur                                                                                                                                                                                             |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taux d'échantillonnage pris en charge | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| latence interne du système            | 7 échantillons (réglables entre 3 et 31 échantillons)                                                                                                                           |
| DADlink format                        | Point flottant 28 bits, latence zéro échantillon                                                                                                                                                   |
| Synchronisation sources               | Horloge de mot, rafale de vidéo noire, Dante, ADAT, MADI, DADlink                                                                                                                                  |
| Interface réseau                      | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Éclair de tonnerre 3                  | 2 × USB-C, lien + 15 W de puissance par port                                                                                                                                                       |

#### Caractéristiques Électriques

| Paramètre                                                  | Valeur                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------- |
| Connexion d'alimentation                                   | Entrée simple ou double ; double PSU toujours ajustée               |
| Notation principale max                                    | 120 W                                                               |
| Tension d'entrée                                           | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusion réseau réseau                                       | 1,5 A T, connecteur IEC monté                                       |
| Connecteur réseau                                          | IEC 60309                                                           |
| Alimentation de la section numérique                       | 15 W                                                                |
| Puissance de la carte d'extension (max) | 70 W                                                                |
| Puissance d'Eclair de tonnerre (max)    | 2 × 15 W                                                            |

#### Spécifications Mécaniques

| Paramètre             | Valeur                                            |
| --------------------- | ------------------------------------------------- |
| Facteur de formulaire | Chevalet 19", 2 RU (88,9 mm)   |
| Profondeur du châssis | 345 mm                                            |
| Largeur du corps      | 435 mm                                            |
| Poids                 | 5.5 kg / 12.2 lbs |

#### Environnement et conformité

| Paramètre                     | Valeur                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Température de fonctionnement | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                |
| Humidité                      | 20 – 85%, non-condensation                                                                                                                                                                                                                                                                                                             |
| Conformité EMC                | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Part 15 Subpart B |
| Conformité de sécurité        | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                       |

---

### A.3 Core 256 (CORE256-BASE)

**Aperçu du produit:** Unité compacte de demi-largeur (hauteur totale de 1U) combinant les E/S de Thunderbolt 3, Dante, MADI et ADAT avec une grande matrice de routage interne. Montre sur un support standard de 19 pouces via le C256-2MOUNT-BRACKET optionnel (un ou deux unités par 1 U). Propulsé par 12 V DC.

#### Matrice de routage

| Ressource               | Capacité        |
| ----------------------- | --------------- |
| Matrice de routage      | 848 × 848       |
| Processeur de somme MON | 512 × 64 canaux |
| égaliseur SPQ           | 1 024 filtres   |

#### E/S autochtone

| Interface                                       | Nombre de canaux                                                     |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| Éclair de tonnerre 3                            | 256 ch @ 48 & 96 kHz                |
| Dante AoIP                                      | 256 ch @ 48 kHz; 128 ch @ 96 kHz           |
| MADI I/O                                        | 64 ch @ 48 kHz                                          |
| ADAT I/O                                        | 16 ch / S/PDIF 2 ch                                                  |
| DADlink / MADI via SFP (max) | Jusqu'à 256 × 256 DADlink ou 128 × 128 MADI ch @ 48 kHz |

#### E/S numériques et synchronisation

| Paramètre                             | Valeur                                                                                                                                                                                             |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taux d'échantillonnage pris en charge | 44.1 – 384 kHz (TB3, MADI, DADlink); 44.1 – 192 kHz (Dante, ADAT); 44.1 – 96 kHz (S/PDIF) |
| latence interne du système            | 7 échantillons (réglables entre 3 et 31 échantillons)                                                                                                                           |
| DADlink format                        | Point flottant 28 bits, latence zéro échantillon                                                                                                                                                   |
| Synchronisation sources               | Horloge de mot, rafale de vidéo noire, Dante, ADAT, MADI, DADlink                                                                                                                                  |
| Interface réseau                      | 1000BASE-T, RJ45                                                                                                                                                                                   |
| Éclair de tonnerre 3                  | 2 × USB-C, lien + 15 W de puissance par port                                                                                                                                                       |

#### Caractéristiques Électriques

| Paramètre                                               | Valeur                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------- |
| Tension d'alimentation                                  | 12 V DC                                                    |
| Connecteur DC                                           | Baril de 5,5 × 2,5 mm (pointe positive) |
| Courant d'entrée max                                    | 5 A                                                        |
| Notation principale max                                 | 60 W                                                       |
| Alimentation de la section numérique                    | 15 W                                                       |
| Puissance d'Eclair de tonnerre (max) | 2 × 15 W                                                   |

#### Spécifications Mécaniques

| Paramètre             | Valeur                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| Facteur de formulaire | Demi-rack de largeur, 1 RU (44,4 mm) — nécessite C256-2MOUNT-BRACKET pour rack de 19" |
| Profondeur du châssis | 231 mm                                                                                                   |
| Largeur du corps      | 211 mm                                                                                                   |
| Poids                 | 1.3 kg / 2.9 lbs                                                         |

#### Environnement et conformité

| Paramètre                     | Valeur                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Température de fonctionnement | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                                                                                |
| Humidité                      | 20 – 85%, non-condensation                                                                                                                                                                                                                                                                                                             |
| Conformité EMC                | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017), ICES-003, AS/NZS CISPR 32, FCC Part 15 Subpart B |
| Conformité de sécurité        | IEC 62368-1:2018                                                                                                                                                                                                                                                                                                       |

---

### A.4 Penta 720 (PENTA720-BASE)

**Aperçu du produit:** Routeur audio modulaire 2U, 8 emplacements dans un sous-rack 19" avec baies de carte d'extension à hot-swap, accès frontal. Conçu pour l'installation de diffusions et de médias. Les E/S standards comprennent 8 paires AES3 stéréo (16 canaux) et un port MADI. Module Dante optionnel (MOD-DANTE-BK3) et module double MADI/DADlink (MOD-MADI-DADLNK) disponible. Ne comprend pas Thunderbolt 3.

#### Matrice de routage

| Ressource                         | Capacité                                                                   |
| --------------------------------- | -------------------------------------------------------------------------- |
| Matrice de routage                | 1,424 × 1,424                                                              |
| Processeur de somme MON           | 256 × 32 canaux                                                            |
| Emplacements de carte d'extension | 8 (jusqu'à 6 cartes analogiques ou 8 cartes numériques) |

#### E/S autochtone

| Interface                                           | Nombre de canaux                                                             |
| --------------------------------------------------- | ---------------------------------------------------------------------------- |
| AES3 I/O                                            | 16 ch @ 48 kHz (8 stereo pairs)              |
| MADI I/O                                            | 64 ch @ 48 kHz                                                  |
| Via les cartes d'extension (max) | Jusqu'à 1 024 × 1 024 ch                                                     |
| DADlink / MADI via SFP (max)     | Jusqu'à 256 × 256 DADlink ou 128 × 128 MADI/HotLink ch @ 48 kHz |

#### E/S numériques et synchronisation

| Paramètre                             | Valeur                                                                                                                                    |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Taux d'échantillonnage pris en charge | 44.1 - 384 kHz (AES3, MADI, DADlink); HotLink fixe 48 kHz; option Dante 44.1 – 192 kHz |
| latence interne du système            | 7 échantillons (réglables entre 3 et 31 échantillons)                                                                  |
| DADlink format                        | Point flottant 28 bits, latence zéro échantillon                                                                                          |
| Synchronisation sources               | Horloge mot, rafale noire vidéo, AES11, AES3, MADI, DADlink, HotLink                                                                      |
| Interface réseau                      | 1000BASE-T, RJ45                                                                                                                          |

#### Caractéristiques Électriques

| Paramètre                                                  | Valeur                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------- |
| Connexion d'alimentation                                   | Double entrée, double UPS                                           |
| Notation principale max                                    | 90 W                                                                |
| Tension d'entrée                                           | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusion réseau réseau                                       | 1 T T, connecteur IEC monté                                         |
| Connecteur réseau                                          | IEC 60309                                                           |
| Alimentation de la section numérique                       | 15 W                                                                |
| Puissance de la carte d'extension (max) | 65 W                                                                |

#### Spécifications Mécaniques

| Paramètre             | Valeur                                            |
| --------------------- | ------------------------------------------------- |
| Facteur de formulaire | Chevalet 19", 2 RU (88,9 mm)   |
| Profondeur du châssis | 350 mm                                            |
| Largeur du corps      | 435 mm                                            |
| Poids                 | 5.0 kg / 11.0 lbs |
| Refroidissement       | 2 × ventilateurs internes                         |

#### Environnement et conformité

| Paramètre                     | Valeur                                              |
| ----------------------------- | --------------------------------------------------- |
| Température de fonctionnement | 0 – 45 °C / 32 – 113 °F                             |
| Humidité                      | 20 – 85%, non-condensation                          |
| Conformité EMC                | EN 55103-1, EN 55103-2, FCC partie 15 sous-partie B |
| Conformité de sécurité        | FR 60950-1:2006                     |

---

### A.5 Penta 721S (PENTA721S-BASE)

**Aperçu du produit :** Compact 2U, interface audio simple et routeur. Comprend le module Dante standard et le module double MADI/DADlink tel qu'il est installé en usine. Conçu pour la diffusion et l'installation de médias là où une empreinte plus petite est requise. Un emplacement de carte d'extension pour les E/S supplémentaires.

#### Matrice de routage

| Ressource                         | Capacité        |
| --------------------------------- | --------------- |
| Matrice de routage                | 528 × 528       |
| Processeur de somme MON           | 256 × 32 canaux |
| Emplacements de carte d'extension | 1               |

#### E/S autochtone

| Interface                                      | Nombre de canaux                                                             |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| AES3 I/O                                       | 16 ch @ 48 kHz (8 stereo pairs)              |
| MADI I/O                                       | 64 ch @ 48 kHz                                                  |
| Dante AoIP                                     | 64 ch @ 48 kHz                                                  |
| Carte d'extension via (max) | Jusqu'à 128 × 128 ch supplémentaires                                         |
| DADlink / MADI via SFP                         | Jusqu'à 256 × 256 DADlink ou 128 × 128 MADI/HotLink ch @ 48 kHz |

#### E/S numériques et synchronisation

| Paramètre                             | Valeur                                                                                                                              |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Taux d'échantillonnage pris en charge | 44.1 – 384 kHz (AES3, MADI, DADlink); HotLink fixed 48 kHz; Dante 44.1 – 192 kHz |
| latence interne du système            | 7 échantillons (réglables entre 3 et 31 échantillons)                                                            |
| DADlink format                        | Point flottant 28 bits, latence zéro échantillon                                                                                    |
| Synchronisation sources               | Word Clock, Vidéo Black Burst, AES11, Dante, MADI, DADlink, HotLink                                                                 |
| Interface réseau                      | 1000BASE-T, RJ45                                                                                                                    |

#### Caractéristiques Électriques

| Paramètre                                                  | Valeur                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------- |
| Connexion d'alimentation                                   | Double entrée, double UPS                                           |
| Notation principale max                                    | 45 W                                                                |
| Tension d'entrée                                           | 90 – 260 VAC (100 – 240 VAC nominal), 47 – 63 Hz |
| Fusion réseau réseau                                       | 1 T T, connecteur IEC monté                                         |
| Connecteur réseau                                          | IEC 60309                                                           |
| Alimentation de la section numérique                       | 15 W                                                                |
| Puissance de la carte d'extension (max) | 15 W                                                                |

#### Spécifications Mécaniques

| Paramètre             | Valeur                                           |
| --------------------- | ------------------------------------------------ |
| Facteur de formulaire | Chevalet 19", 2 RU (88,9 mm)  |
| Profondeur du châssis | 320 mm                                           |
| Largeur du corps      | 435 mm                                           |
| Poids                 | 3.3 kg / 7.3 lbs |
| Refroidissement       | 1 × ventilateur interne à faible bruit           |

#### Environnement et conformité

| Paramètre                     | Valeur                                              |
| ----------------------------- | --------------------------------------------------- |
| Température de fonctionnement | 0 – 45 °C / 32 – 113 °F                             |
| Humidité                      | 20 – 85%, non-condensation                          |
| Conformité EMC                | EN 55103-1, EN 55103-2, FCC partie 15 sous-partie B |
| Conformité de sécurité        | FR 60950-1:2006                     |

---

### A.6 Junior Control\|Contrôleur de Pack (JUNIOR-BASE)

**Aperçu du produit:** Unité de commande compacte alimentée par PoE pour le contrôle manuel direct de DADman Control\|Préréglages et compartiments de routage des paquets. Se connecte via Ethernet directement à n'importe quelle unité Thunder\|Core. Compatible avec CORE256-BASE, AXCNTR-Base et AX64-BASE. Fonctionne indépendamment du logiciel DADman une fois configuré.

#### Fonctionnalités

- 6 boutons RGB illuminés par des LEDs
- 6 RGB status LEDs
- 6 caractères OLED affichage par bouton
- Connexion directe à l'IP vers l'unité Thunder\|Core

#### Caractéristiques

| Paramètre                                       | Valeur                                                                                                                                                                                                                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interface réseau                                | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                             | IEEE 802.3af, classe 0                                                                                                                                                                                                                                               |
| Entrée d'alimentation DC                        | Baril 12 V, 5.5/2.1 mm (pointe +5 V)                                                                                                                                                                                              |
| Consommation d'énergie (max) | 2,5 W                                                                                                                                                                                                                                                                                |
| Dimensions                                      | 116 × 48 × 40 mm / 4,6" × 1,9" × 1,6"                                                                                                                                                                                                                                                |
| Poids                                           | 0.16 kg / 0.35 lbs                                                                                                                                                                                                                                   |
| Température de fonctionnement                   | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Humidité                                        | 20 – 85%, non-condensation                                                                                                                                                                                                                                                           |
| Conformité EMC                                  | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Conformité de sécurité                          | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

### A.7 MOM – Moniteur du module d'exploitation (MOM-BASE)

**Aperçu du produit:** Contrôleur de moniteur à distance alimenté par PoE avec encodeur de grand volume, 10 boutons définissables pour l'utilisateur sur 4 calques (jusqu'à 40 fonctions) et une entrée GPI externe pour le talkback de footswitch. Se connecte via Ethernet à DADman pour contrôler n'importe quel périphérique NTP/DAD avec la capacité PRO\|MON.

#### Fonctionnalités

- Encodeur rotatif de grand volume avec anneau à 27 LED (résolution de 0,5 dB)
- 10 clés définissables par l'utilisateur × 4 couches (40 au total)
- Fonctions préconfigurées : 3 ensembles de haut-parleurs, 3 sources, Talkback, Dim, Cut, niveau de référence
- Entrée GPI (3,5 mm mini-jack) pour les pieds externes

#### Caractéristiques

| Paramètre                                       | Valeur                                                                                                                                                                                                                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interface réseau                                | 1000BASE-T, RJ45                                                                                                                                                                                                                                                                     |
| PoE                                             | IEEE 802.3af, classe 0                                                                                                                                                                                                                                               |
| Entrée d'alimentation DC                        | Tonneau 5 V, 5,5/2.1 mm (pointe +5 V)                                                                                                                                                                                                             |
| GPI input                                       | Mini jack 3,5 mm                                                                                                                                                                                                                                                                     |
| Consommation d'énergie (max) | 5W                                                                                                                                                                                                                                                                                   |
| Dimensions                                      | 172 × 110 × 50 mm / 6,8" × 4,3" × 2,0"                                                                                                                                                                                                                                               |
| Poids                                           | 1.0 kg / 2.2 lbs                                                                                                                                                                                                                                     |
| Température de fonctionnement                   | 0 – 45 °C / 32 – 113 °F                                                                                                                                                                                                                                                              |
| Humidité                                        | 20 – 85%, non-condensation                                                                                                                                                                                                                                                           |
| Conformité EMC                                  | CISPR 32:2015 (+AMD1:2019), CISPR 35:2016, IEC 61000-3-2:2018 (+AMD1:2020), IEC 61000-3-3:2013 (+AMD1:2017) |
| Conformité de sécurité                          | IEC 62368-1:2018                                                                                                                                                                                                                                                     |

---

## Annexe B — Pinouts de connecteur

_[Placeholder: broche des diagrammes pour tous les types de connecteurs sur tous les matériels pris en charge — XLR, DB25, BNC (MADI), BNC (Word Clock), RJ45, SFP, Thunderbolt 3, USB. A fournir par l'ingénierie DAD.]_

---

## Annexe C — Formats et protocoles audio pris en charge

Cette annexe résume les formats audio et les protocoles supportés par le matériel contrôlé par DADman, y compris le nombre de canaux à chaque fréquence d'échantillon. Tous les chiffres sont des maximums; le nombre réel de canaux dépend des cartes d'extension spécifiques installées dans chaque unité.

> **REMARQUE:** Le nombre de canaux sur les interfaces multiplexées (MADI, ADAT, DADLink) diminue à des fréquences d'échantillonnage plus élevées car une plus grande bande passante est consommée par canal. Le nombre de canaux Dante et AES67 dépend de la configuration du réseau et des paramètres du contrôleur Dante.

---

### C.1 MADI (AES10)

MADI est pris en charge sur toutes les familles de matériels DAD / NTP Technologie comme option de carte d'extension (Double carte MADI Module MADI) ou intégré sur certaines unités.

**Capacité du canal par port MADI :**

| Taux d'échantillonnage          | Mode hérité (56-ch frame) | Mode haute vitesse (64-ch frame) |
| ------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| 44.1 / 48 kHz   | 56 canaux                                    | 64 canaux                                           |
| 88.2 / 96 kHz   | 28 canaux                                    | 32 canaux                                           |
| 176.4 / 192 kHz | 14 canaux                                    | 16 canaux                                           |

**Standard:** AES10-2008 (MADI Serial) et AES10-2003 (MADI-E étendu).

**Interfaces Physiques:**

- BNC Coaxial (75 €), — longueur maximale du câble d'environ 100 m (coax)
- SFP optique — fibre multimode ou mono-mode selon le type de module SFP ; jusqu'à plusieurs kilomètres avec SFP

**Modes de fréquence d'images :**

- **Mode hérité :** Longueur de cadre fixée à la taille de l'image de 48 kHz. À 88,2/96 kHz, les paires de canaux adjacentes sont multiplexées par temps (S/MUX2), réduisant de moitié le nombre de canaux. À 176.4/192 kHz, les groupes de quatre canaux sont multiplexés (S/MUX4). Compatible avec la majorité des équipements MADI.
- **Mode Haute Vitesse:** La longueur du cadre suit la fréquence d'échantillonnage réelle, réduisant la latence à 88,2 kHz et plus. Les deux extrémités du lien MADI doivent être réglées sur le même mode.

> **IMPORTANT:** Les deux extrémités de chaque connexion MADI doivent utiliser le même mode de fréquence d’images et le même paramètre de taille d’image. Aucune erreur audio ou horloge ne sera détectée. Vérifiez les paramètres dans l'onglet Conf sur les deux appareils connectés.

---

### C.2 ADAT (S/PDIF Optical, ADAT Lightpipe)

Les interfaces optiques ADAT sont prises en charge sur certaines cartes d'extension matérielles DAD. ADAT utilise S/MUX (multiplexage d'échantillon) pour transporter l'audio à des taux d'échantillonnage plus élevés.

| Taux d'échantillonnage          | Chaînes (par port ADAT) | Mode          |
| ------------------------------- | ------------------------------------------ | ------------- |
| 44.1 / 48 kHz   | 8 canaux                                   | ADAT Standard |
| 88.2 / 96 kHz   | 4 canaux                                   | S/MUX2        |
| 176.4 / 192 kHz | 2 canaux                                   | S/MUX4        |

**Interface physique:** Connecteur optique TOSLINK.

**Standard:** Protocole optique Alesis ADAT.

> **REMARQUE:** L'ADAT n'est pas défini au dessus de 96 kHz dans la norme d'origine. La prise en charge du S/MUX4 à 176.4/192 kHz nécessite que les deux périphériques connectés prennent en charge cette extension. Vérifier la compatibilité avec l'équipement connecté.

---

### C.3 AES3 (AES/EBU)

L'audio numérique AES3 transporte deux canaux par paire de câbles (une paire stéréo). Le matériel DAD fournit généralement des E/S AES3 via des connecteurs d'arrachage DB25, qui transportent chacun huit paires stéréo (16 canaux).

| Taux d'échantillonnage          | Canaux par paire AES3                              | Canaux par DB25 (8 paires) |
| ------------------------------- | -------------------------------------------------- | --------------------------------------------- |
| 44.1 / 48 kHz   | 2                                                  | 16                                            |
| 88.2 / 96 kHz   | 2 _(Double Wire / Double Wire)_ | 16                                            |
| 176.4 / 192 kHz | 2 _(Quad Wire)_                 | 16                                            |

**Standard:** AES3-2009.

**Interfaces Physiques:**

- XLR équilibré (professionnel — standard AES3)
- Déclenchement DB25 (via un câblage TASCAM ou Yamaha)

**Taux d'échantillonnage élevé :** À 88,2/96 kHz, certaines implémentations AES3 utilisent **Double Wire** (deux paires AES3 par canal pour augmenter la bande passante). À 176.4/192 kHz, **Quad Wire** utilise quatre paires par canal. Les détails de l'implémentation AES3 de DADman sont dépendants du modèle matériel — reportez-vous au guide d'installation du matériel pour l'unité spécifique.

---

### C.4 Dante (Audinate)

Dante est un protocole audio-sur-IP qui transporte de l'audio sur une infrastructure Ethernet standard. Les unités DADman supportent Dante via des cartes d'extension et des modules intégrés.

**Capacité de canal par implémentation Dante:**

| Implémentation                                                                                            | Chaînes max (Tx + Rx)      | Matériel typique                                       |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------ |
| Carte d'extension Dante (Brooklyn 2/3)                                                 | 128 Tx + 128 Rx (per card) | AX32 · DX32R · Penta 720 · Penta 721s · MTRX · MTRX II |
| Module Dante 64 canaux                                                                                    | 64 Tx + 64 Rx                                 | AX32 · Penta 720 · Penta 721s · MTRX                   |
| Dante 256 IPCore _(v5.8.1.6 firmware)_ | 256 Tx + 256 Rx                               | AX64 · Centre AX · Core 256 · MTRX II                  |
| Carte Dante _(standalone)_                                                             | 512 Tx + 512 Rx                               | Sélectionner une unité de la famille 1                 |

**Le nombre de canaux est indépendant du taux d'échantillon** — Les canaux Dante ne sont pas réduits à des taux d'échantillonnage plus élevés. Au lieu de cela, des taux d'échantillonnage plus élevés consomment plus de bande passante réseau par canal. La capacité du réseau doit être dimensionnée en conséquence.

**Exigences de réseau:**

- Gigabit Ethernet recommandé pour toutes les installations Dante
- Commutateur réseau dédié recommandé pour le trafic audio
- Les commutateurs doivent prendre en charge le multicast (mise en veille IGMP recommandée)
- PTP (IEEE 1588) utilisé pour la synchronisation de l'horloge sur tous les appareils Dante

**Protocoles et normes :**

- Protocole natif de Dante (propriétaire d'Audinate)
- Mode d'interopérabilité AES67 (réduit le nombre de canaux à la limite AES67)
- ST 2110-30 _(via DDM depuis le firmware v1.1.2.4; Brooklyn 3 sans DDM depuis v1.1.0.3)_

---

### DADLink C.5

DADLink est une interconnexion optique propriétaire DAD à l'aide de la fente de module mini MADI avec émetteurs optiques SFP. Il fournit une interconnexion unitaire directe à l'unité à très faible latence.

| Taux d'échantillonnage          | Chaînes par connexion DADLink |
| ------------------------------- | ----------------------------- |
| 44.1 / 48 kHz   | 128                           |
| 88.2 / 96 kHz   | 64                            |
| 176.4 / 192 kHz | 32                            |

**Latence:** Environ 1 microseconde (efficacement zéro — toutes les entrées et sorties sur les unités connectées à DADLink sont alignées sur la phase, à condition que l'horloge soit correcte).

**Interface physique:** SFP optique — modules d’émetteur SFP compatibles requis aux deux extrémités.

**Matériel compatible :** AX64 · AX Center · Core 256 · MTRX II · AX32 · DX32R · Penta 720 · Penta 721s _(Family 1 from firmware v2. .1.2)_

**Exigences de synchronisation :** Les unités connectées à DADLink doivent partager une horloge commune. Utiliser l'horloge DADLink ou Word comme source de synchronisation entre unités.

---

### C6 Éclair de tonnerre 3 (Thunder\|Core)

Les E/S audio Thunderbolt 3 sont supportées exclusivement sur le matériel de génération Thunder\|Core (AX64, AX Center, Core 256) via le pilote DAD Thunderbolt 3.

| Matériel      | 3 canaux de foudre | Notes           |
| ------------- | ------------------ | --------------- |
| **AX64**      | 64 Tx + 64 Rx      | À 44,1 / 48 kHz |
| **Centre AX** | 128 Tx + 128 Rx    | À 44,1 / 48 kHz |
| **Core 256**  | 256 Tx + 256 Rx    | À 44,1 / 48 kHz |

**À des taux d'échantillonnage plus élevés:** Le nombre de voies de Foudre 3 diminue proportionnellement. À 88,2/96 kHz le nombre de moitiés; à 176,4/192 kHz ils trimestriels.

**Pilote :**

- macOS : Core Audio driver (DADDriverSetup) — version actuelle v1.2.2
- Windows: pilote ASIO — version actuelle v1.1.2

**Câble:** Câble certifié Thunderbolt 3 évalué à 20 Gbit/s minimum. Les câbles passifs supportent environ 0,5 m ; les câbles optiques actifs prennent en charge des longueurs plus longues.

---

### C.7 AES67 et ST 2110-30

AES67 et ST 2110-30 sont des standards audio IP pris en charge via les interfaces Dante et Ravenna sur le matériel DAD compatible.

| Standard            | Transport                        | Nombre de canaux                                     | Disponible à partir de                                                                                                                      |
| ------------------- | -------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **AES67**           | IP (couche 3) | Jusqu'à 512 (dépendant du réseau) | Tous les matériels équipés de Dante _(mode d'interopérabilité AES67)_                                                    |
| **ST 2110-30**      | IP (couche 3) | Jusqu'à 512 (dépendant du réseau) | firmware 5.8.2 via DDM ; Brooklyn 3 sans DDM de la v1.1.0.3 |
| **Ravenna / AES67** | IP (couche 3) | Jusqu'à 512 (dépendant du réseau) | Carte Ravenna \*(option matérielle v5.8.2) \*                                            |

**Exigences réseau pour ST 2110-30:** Interrupteurs de niveau professionnel gérés avec l'horodatage matériel PTP (IEEE 1588) . Extinction IGMP nécessaire. Consultez SMPTE TR-2110 pour obtenir des conseils sur l'architecture du réseau.

---

### Matrice de support du Format Matériel C.8

La matrice suivante montre quels formats sont disponibles pour chaque famille de matériel en standard ou via des cartes d'extension. ✓ = standard / intégré; E = option carte d'extension; — = non pris en charge.

| Formater                                   | AX au centre | Noyau 256 | AX64 | HAC32 | DX32R | Penta 720 | Penta 721s | MTRX II | Studio MTRX |
| ------------------------------------------ | ------------ | --------- | ---- | ----- | ----- | --------- | ---------- | ------- | ----------- |
| MADI (coaxial)          | E            | E         | E    | ✓     | ✓     | ✓         | ✓          | ✓       | —           |
| MADI (optique SFP)      | E            | E         | E    | E     | —     | E         | E          | E       | —           |
| ADAT                                       | E            | E         | E    | E     | —     | —         | —          | E       | ✓           |
| AES3 (carte analogique) | E            | E         | E    | E     | ✓     | E         | E          | E       | ✓           |
| Dante                                      | E            | E         | E    | E     | ✓     | E         | ✓          | ✓       | ✓           |
| Dante 256 IPCore                           | ✓            | ✓         | ✓    | —     | —     | —         | —          | ✓       | —           |
| DADLink                                    | E            | E         | E    | E     | E     | E         | E          | E       | —           |
| Éclair de tonnerre 3                       | ✓            | ✓         | ✓    | —     | —     | —         | —          | —       | —           |
| Carte Ravenne                              | E            | E         | E    | —     | —     | —         | —          | —       | —           |
| AES67                                      | E            | E         | E    | E     | ✓     | E         | ✓          | ✓       | ✓           |
| ST 2110-30                                 | E            | E         | E    | E     | —     | —         | —          | ✓       | —           |
| E/S de l'horloge du mot                    | ✓            | ✓         | ✓    | ✓     | ✓     | ✓         | ✓          | ✓       | ✓           |

_E = nécessite une carte d'extension ou un module. Les options d'extension varient selon la génération de produits et les emplacements de cartes disponibles. Reportez-vous au guide d'installation du matériel spécifique pour plus de détails sur la configuration des emplacements._

> **REMARQUE:** Cette matrice reflète les capacités matérielles de DADman v5.8.2 build 2 (Janvier 2026). De nouvelles options de carte d'extension peuvent être introduites dans les versions ultérieures du microprogramme ou du matériel. Vérifiez [digitalaudiosupport.com](https://www.digitalaudiosupport.com) pour le configurateur de produit actuel.

---

## Annexe D — Raccourcis clavier

Voir [Chapitre 7, Section 7.10.3] pour la référence complète des raccourcis clavier.

---

## Annexe E — Journal des modifications

Cette annexe documente la publication du logiciel DADman à partir de 2019 à la version couverte par ce manuel. Les entrées sont listées les plus récentes en premier. Chaque entrée montre la version du logiciel, les versions accompagnées du firmware, les nouvelles fonctionnalités et les corrections de bugs notables. Les versions Firmware-only sont indiquées séparément.

Les notes de version complètes, y compris les journaux détaillés des changements de micrologiciels, sont disponibles dans le Centre de téléchargement à [digitalaudiosupport.com](https://www.digitalaudiosupport.com).

---

### DADman v5.8.2 build 2 — 2026-01-19 _(Version courante)_

| Composant                   | Version                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| DADman                      | v5.8.2 b2 — macOS 10.13–15, Windows 10/11 |
| Pilote TB3 — macOS          | v1.2.2 _(sans changement)_             |
| Pilote TB3 — Windows        | v1.1.2 _(sans changement)_             |
| Firmware Thunder\|Core      | 1.1.2.4                                   |
| Dante 256 IPCore            | v1.0.3.1                                  |
| Firmware Famille 1          | v2.4.6.4                                  |
| Module Brooklyn 2 Dante     | v1.0.3.1                                  |
| Module Brooklyn 3 Dante     | v1.1.0.3                                  |
| Firmware MTRX Studio        | 1.1.6.3                                   |
| MTRX Studio Dante 64 IPCore | v1.0.3.1                                  |
| Firmware de la carte Dante  | v1.0.3.1 _(nouveau)_   |

**Nouveau dans DADman :**

- Carte Ravenna maintenant prise en charge par DADman
- Carte Dante et Carte Ravenna : le taux d'échantillonnage du réseau est maintenant configurable lorsque SRC est activé
- Eucon : nombre de mètres augmenté à 16

**Nouveau firmware :**

- Tous les firmware Dante ont été mis à jour vers les dernières versions
- ST 2110-30 et AES67 amélioré disponibles pour toutes les implémentations Dante via DDM
- Module Brooklyn 3 : ST 2110-30 maintenant disponible sans DDM (nécessite le dernier contrôleur Dante)
- Support de la nouvelle carte Ravenna (RAVENNA / AES67 / ST 2110-30)
- Dynaudio Control 02 est maintenant pris en charge à côté de Control 01

**Corrections de bugs :**

- macOS : le menu Talkback n'affiche pas la valeur sélectionnée correcte dans la boîte de dialogue Profil du moniteur
- Eucon : Le niveau de la salle de contrôle n'est pas réactivé après avoir éteint le niveau Ref
- macOS: Amélioration de la stabilité de la communication de Thunderbolt
- Diverses corrections mineures

---

### DADman v5.8.1 build 6 — 2025-05-01

| Composant              | Version                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| DADman                 | v5.8.1 b6 — macOS 10.13–15, Windows 10/11       |
| Pilote TB3 — macOS     | v1.2.2 _(sans changement)_                   |
| Pilote TB3 — Windows   | v1.1.2 _(sans changement)_                   |
| Firmware Thunder\|Core | 1.1.1.1                                         |
| Firmware Famille 1     | v2.4.5.1                                        |
| Firmware MTRX Studio   | v1.1.5.1 _(sans changement)_ |

**Nouveau dans DADman :**

- **Groupes de micro gains** — plusieurs canaux d'entrée micro peuvent être reliés de sorte que le réglage du gain ou du muet sur n'importe quel canal peut déplacer tous les canaux du groupe simultanément, préservant les décalages relatifs entre les canaux. Prise en charge sur tous les produits **sauf MTRX Studio**. Nécessite une mise à jour du firmware. La puissance fantôme et l'inversion de phase ne sont pas regroupées. Maintenez Alt/Option pour ajuster un canal individuel dans un groupe sans affecter les autres.
- Control\|Pack : Les préréglages de routage peuvent maintenant être réordonnés dans la boîte de dialogue des préréglages de routage _(mise à jour du micrologiciel)_
- Control\|Pack : Le statut de déclenchement est maintenant affiché dans la boîte de dialogue Pré-réglage de routage
- macOS : Les colonnes de la liste des périphériques peuvent être triées en cliquant sur les en-têtes des colonnes

**Corrections de bugs :**

- Control\|Pack : Corrections variées de la boîte de dialogue de préréglage de routage
- Windows: Amélioration des graphiques de compteur de préréglage de routage
- Windows: Crash lors de la gestion de MIDI résolu
- macOS : Problèmes graphiques sur les écrans à l'échelle avec de grandes fenêtres DADman
- macOS : Erreur de mise à jour de la couleur dans la boîte de dialogue du préréglage de routage

---

### Version Firmware-only — 2025-01-09

| Composant              | Version                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| DADman                 | v5.8.0 b8 _(sans changement)_                  |
| Firmware Thunder\|Core | v1.1.0.4 _(correction de bug)_ |

**Corrections de bugs dans le firmware :**

- Centre AX : erreur de synchronisation de la puce ADC qui a empêché l'audio de passer dans certains cas — corrigée
- Carte AX Center Dante : La synchronisation externe avec la carte réseau Dante n'est pas correctement configurée — corrigée

---

### DADman v5.8.0 build 8 — 2024-12-01

| Composant              | Version                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| DADman                 | v5.8.0 b8 — macOS 10.13–15, Windows 10/11 |
| Pilote TB3 — macOS     | v1.2.2 _(nouveau)_                     |
| Pilote TB3 — Windows   | v1.1.2 _(sans changement)_             |
| Firmware Thunder\|Core | v1.1.0.3                                  |
| Firmware Famille 1     | v2.4.4.1                                  |
| Firmware MTRX Studio   | 1.1.5.1                                   |

**Nouveau dans DADman :**

- **Control\|Pack** — système de routage prédéfini pour Thunder\|unités de base (AX64, AX Center, Coeur 256) avec jusqu'à 32 presets par unité, chacun prenant en charge jusqu'à quatre compartiments d'entrée commutables. Comprend la commutation automatique via la détection du niveau du signal, l'intégrité de la tonalité du pilote AE6 et les déclencheurs de connectivité du port. Nécessite une mise à jour du firmware.
- Prise en charge de CARD-2MADI-SO (720251A) — carte MADI avec conversion bidirectionnelle du taux d'échantillonnage
- Vue de l'écran : les contrôles déroulants s'affichent maintenant dans les colonnes lorsque de nombreux dépliants sont configurés
- Windows : L'OS minimal pris en charge est maintenant Windows 10 (Windows 7 et 8 ne sont plus pris en charge)

**Nouveau dans TB3 Driver (v1.2.2):**

- Lorsque l'extension DriverKit n'est pas correctement activée, des instructions et une capture d'écran sont affichées pour guider l'utilisateur
- Une fois l'installation terminée et que l'extension est activée, le pilote amène l'installateur au premier plan et quitte proprement
- Quand aucun périphérique n'est connecté : un message "Aucun périphérique connecté" est affiché au lieu de listes déroulantes vides

**Corrections de bugs :**

- Profil du moniteur : Le chargement puis l'annulation d'un profil corromprait le fichier lors de la prochaine sauvegarde — réparé
- macOS : Défilement d'artefacts sur les résolutions d'affichage mises à l'échelle — corrigé
- macOS : Crash quand DADman a été ouvert en double-cliquant sur un fichier dans le Finder — corrigé
- macOS : Problème de communication Rare Thunderbolt — corrigé _(nécessite également la mise à jour du pilote TB3 vers la v1.2.2)_
- macOS : Les boîtes de dialogue d'ouverture de fichier ne permettent plus de sélectionner des répertoires

> **Problème connu (macOS 15 Sequoia):** DADman peut ne pas se connecter aux périphériques réseau au premier lancement sur macOS 15. Solution de contournement : déconnectez-vous et reconnectez-vous. Les connexions de Foudre ne sont pas affectées. Voir : _Chapitre 9, Section 9.3_.

---

### DADman v5.7.2 build 1 — 2024-09-25

| Composant              | Version                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DADman                 | v5.7.2 b1 — macOS 10.13–15 (incluant Sequoia), Windows 10/11 |
| Pilote TB3 — macOS     | 1.1.26                                                                                          |
| Pilote TB3 — Windows   | v1.1.2 _(sans changement)_                                                   |
| Firmware Thunder\|Core | v1.0.6.3                                                                        |
| Firmware Famille 1     | v2.4.3.1                                                                        |
| Firmware MTRX Studio   | v1.0.4.2                                                                        |

**Prise en charge du nouveau matériel :** Contrôleur de moniteur Dynaudio 01.

**Nouveau dans DADman :**

- Support de Sequoia macOS 15 _(problème connu de connectivité réseau — voir v5.8.0)_
- Prise en charge du module Thunderbolt 722150B
- Les boutons d'en-tête de section (AD / DA / Mon / Con / Conf) affichent maintenant les infobulles; cliquer sur un en-tête de section réduit ou agrandit cette section
- "À propos de DADman" a maintenant un bouton **Copier les informations** — copie la version DADman, la liste des périphériques connectés, Version de l'OS et versions du pilote du presse-papiers pour une utilisation dans les requêtes de support
- Menu "Ouvrir le profil récent" ajouté à la barre de menu principale
- macOS : la fenêtre de profil Monitor est maintenant redimensionnable; le dernier onglet actif est restauré à la réouverture
- Windows: option "Minimiser dans la corbeille" remplacée par l'option **Afficher dans** avec trois options : la barre des tâches seulement · la barre des tâches et la zone de notification · la barre des tâches seulement
- Symbole d'inversion de phase changé de "Ph" à "Ø" pour éviter la confusion avec la puissance fantôme

**Corrections de bugs :**

- Surveiller l'erreur de mappage des paramètres EQ lors du changement entre les ensembles de sortie du moniteur - corrigé
- Windows : DADman n'a pas pu être lancé sur certains systèmes en raison de l'absence de `VCRUNTIME140_1.DLL` - corrigé
- Windows : Verrouillage de l'appareil avec le pare-feu BitDefender dans certaines plages IP — corrigé
- macOS : Les erreurs de lecture/écriture du fichier alertent maintenant l'utilisateur
- Rapport de fréquence d'images MADI corrigé pour DSD sur PCM
- Délai d'erreur de traitement pour les canaux supérieurs à 16 — corrigé

**Nouveau firmware (Thunder\|Core v1.0.6.3):**

- ADAT canal 3 à 88.2/96 kHz fixe; ADAT PLL et verrouillage amélioré
- Erreur de phase de la carte DA sur le canal 8 corrigé (carte de base analogique AX Centre)
- Filtrage de la fréquence d'échantillonnage DADLink corrigé
- Dante: Faux alarme de carte corrigée ; Surveillance FPGA ajoutée
- Prise en charge du module Thunderbolt 722150B ajouté

---

### Version Firmware-only — 2024-03-06

| Composant          | Version                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| DADman             | v5.7.0 b1 _(sans changement)_                  |
| Firmware Famille 1 | v2.4.2.2 _(correction de bug)_ |

**Correction de bugs :** Erreur de synchronisation et de format de l'interface DigiLink introduite dans la version 2.4.1.2 du firmware de la famille 1 — corrigée. Non applicable au matériel de marque DAD.

---

### DADman v5.7.0 build 1 — 2023-11-15

| Composant              | Version                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| DADman                 | v5.7.0 b1 — macOS 10.13–14, Windows 10/11 |
| Pilote TB3 — macOS     | v1.1.26 _(sans changement)_            |
| Pilote TB3 — Windows   | v1.1.2 _(sans changement)_             |
| Firmware Thunder\|Core | v1.0.5.2                                  |
| Firmware Famille 1     | 2.4.1.2                                   |
| Firmware MTRX Studio   | 1.1.3.1                                   |

> **Note:** macOS 10.10 (Yosemite), 10.11 (El Capitan), et 10.12 (Sierra) ne sont plus supportés depuis cette version.

**Nouveau dans DADman :**

_Modes de la barre de menu et de la zone de notification :_ DADman peut maintenant s'exécuter en arrière-plan avec une présence minimale sur le bureau. macOS : trois modes d'affichage — Dock uniquement, barre de menus et Dock, et barre de menu uniquement (masque depuis le Dock; Restaurer avec la commande  1 ou en lançant DADman à nouveau). Windows: Mode de la barre d'état système ajouté - clic gauche pour afficher/masquer; clic droit pour Afficher/Masquer/Quitter les options.

_Mode RAW de Talkback :_ Un nouveau mode de talkback dans lequel talkback n'est actif que lorsque le bouton est maintenu et se termine lorsqu'il est relâché (pousser-parler). Le mode précédent de bascule ou de loquet reste disponible. Le mode RAW s'applique au matériel MOM et au contrôle du panneau avant MTRX Studio. Les surfaces EuCon utilisent toujours le mode activer/latch.

_DADLink pour tous les produits:_ DADLink est maintenant disponible sur le matériel de la famille 1 (AX32, DX32, Penta 720, Penta 721s) via firmware v2. .1.2, en plus des unités Thunder\|Core.

_Amélioration de la vue de la matrice :_ La taille maximale de la vue de la matrice est maintenant configurable dans Préférences (32×32, 64×64, 128×128 ou 256×256). Les info-bulles sur la matrice montrent les numéros de chaîne et les étiquettes. Trackpad / scroll wheel fait maintenant défiler la vue de la matrice plutôt que la fenêtre complète. Les noms des ports DADLink sont affichés dans les infobulles.

_Gestion des fichiers:_ Les fichiers `.dms` et `.dmprof` peuvent maintenant être ouverts directement depuis Finder ou l'explorateur Windows en double-cliquant dessus. Ouverture de fichier en ligne de commande supportée: `open -a DADman settings.dms profile.dmprof` (macOS); `DADman.exe settings.dms profile.dmprof` (Windows). DADman essaye maintenant en permanence les connexions des unités plutôt que de les mettre en attente. Windows : DADman enregistre automatiquement les fichiers lors de la déconnexion, de l'arrêt ou du redémarrage.

**Raccourcis clavier (d'abord formellement documentés dans cette version) :**

| Action                                | macOS               | Fenêtres       |
| ------------------------------------- | ------------------- | -------------- |
| Fichier > Ouvrir…                     |  O             | Ctrl+O         |
| Fichier > Enregistrer                 |  S             | Ctrl+S         |
| Fichier > Enregistrer sous…           |   S       | Ctrl+Maj+S     |
| Fichier > Ouvrir le profil…           |   O       | Ctrl+Alt+O     |
| Fichier > Importer le profil…         |   I       | Ctrl+Alt+I     |
| Fichier > Enregistrer le profil       |   S       | Ctrl+Alt+S     |
| Fichier > Enregistrer le profil sous… |    S | Ctrl+Alt+Maj+S |
| Fichier > Fermer le profil            |   W       | Ctrl+Alt+W     |
| Afficher la fenêtre principale        | ⌘⇧1                 | —              |
| Liste des périphériques               |   L       | Ctrl+Maj+L     |
| Profil du moniteur                    |  M             | Ctrl+Maj+M     |
| Paramètres / Options                  | ⌘,                  | Ctrl+,         |

**Corrections de bugs :**

- Correction de la corruption des données lors de l'ajout de matrices pliées avec plus de 1 024 éléments

---

### DADman v5.6.9 build 1 — 2023-06-14 _(approximatif)_

| Composant              | Version                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| DADman                 | v5.6.9 b1 — macOS 10.10–13, Windows 10/11       |
| Pilote TB3 — macOS     | 1.1.26                                                          |
| Pilote TB3 — Windows   | v1.1.2 _(première version officielle)_       |
| Firmware Thunder\|Core | v1.0.3.4                                        |
| Firmware Famille 1     | v2.3.6.1 _(sans changement)_ |

**Nouveau dans DADman :**

- **Avid MTRX II** ajouté à la liste des matériels pris en charge
- **Cloner les paramètres** — copiez tous les paramètres d'une unité matérielle vers une autre dans le même groupe de famille. Trois groupes familiaux définis : Famille 1 (MTRX · AX32 · DX32 · Penta 720 · Penta 721 · Penta 721s), Famille 2 (MTRX II · AX64 · Centre AX · Core 256), Famille 3 (MTRX Studio)
- **DADLink** — Interconnexion audio optique propriétaire à grand nombre de canaux pour AX64, AX Center, Core 256 et MTRX II via un module MADI avec émetteurs optiques SFP. Jusqu'à 128 canaux à 48 kHz, 64 canaux à 96 kHz, 32 canaux à 192 kHz par lien. latence approximative de 1 μs.
- Pilote Windows ASIO — première version officielle (non-bêta)

---

### DADman v5.6.7 build 1 — 2023-02-06

| Composant            | Version                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------- |
| DADman               | v5.6.7 b1 — macOS 10.10–12, Windows 10/11 |
| Pilote TB3 — macOS   | 1.1.22                                                    |
| Pilote TB3 — Windows | v1.0.8                                                    |

> **Note:** Le support de Windows 7 a été retiré de cette version.

**Nouveau dans DADman :**

- Le **centre DAD AX Center** a été ajouté à la liste des matériels pris en charge
- Le pilote Windows ASIO est officiellement publié (hors bêta)

---

### Version Firmware-only — 2022-12-05

| Composant          | Version                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- |
| DADman             | v5.6.5 b1 _(sans changement)_        |
| Firmware Famille 1 | v2.3.6.1 _(nouveau)_ |

**Nouveau firmware :**

- Le module Brooklyn 3 Dante est maintenant pris en charge aux côtés de Brooklyn 2
- Le mécanisme de réinitialisation de la carte SDI 3G a été amélioré — corrige un problème de chronométrage qui pourrait empêcher les canaux SDI de s'activer correctement après la mise en marche

---

### DADman v5.6.3 build 8/23 — 2022-07-01

| Composant          | Version                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| DADman             | macOS v5.6.3 b8 · Windows v5.6.3 b23 |
| Pilote TB3 — macOS | v1.1.9.4 _(bêta)_                 |

**Nouvelles fonctionnalités :**

- Support de **Windows 11** ajouté
- L'ordre de la source et de la sortie dans la configuration du profil de moniteur peut maintenant être réarrangé après la configuration initiale
- Windows : DADman recherche maintenant automatiquement les périphériques réseau lorsque les connexions réseau changent

**Corrections de bugs :**

- Mode sombre : les étiquettes déroulantes s'affichent maintenant correctement

---

### DADman v5.6.2 build 13b — 2022-05-27

| Composant          | Version                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| DADman             | v5.6.2 b13b — macOS 10.10–12, Windows 7/8/10 _(beta)_ |
| Pilote TB3 — macOS | v1.1.9.4 _(première version — bêta)_                  |

**Nouvelles fonctionnalités :**

- **Thunder\|Support du matériel du noyau** — première version prenant en charge AX64, AX Center et Core 256 via Thunderbolt 3
- Support de MacOS 12 Monterey
- Ouvrir automatiquement la liste des périphériques lorsque DADman démarre sans aucune unité connectée
- **Profil d'importation** ajouté au menu Fichier — importe un profil de moniteur à partir de n'importe quelle unité connectée et applique une configuration la mieux adaptée aux E/S de l'unité actuelle
- Mode Sombre: rendu des étiquettes pliées amélioré

---

### DADman v5.5.0 build 2 — 2021-06-03

| Composant | Version                                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.5.0 b2 — macOS 10.10–11 (Intel et Apple Silicon M1), Windows 7/8/10 |

**Nouvelles fonctionnalités :**

- \*\*Support natif Apple Silicon (M1) — DADman fonctionne nativement sur Apple Silicon sans traduction Rosetta 2
- MOM: La gestion des basses et les boutons d'activation/désactivation de l'EQ sont maintenant disponibles en tant que clés MOM assignables dans PRO\|MON

---

### DADman v5.4.5 build 1 — 2021-01-10 / 2021-03-18

| Composant | Version                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.4.5 b1 — macOS 10.10–11 (Intel), Windows 7/8/10 |

**Nouvelles fonctionnalités :**

- NTP Penta 721s ajouté à la liste des matériels pris en charge _(build de Janvier 2021)_
- Support de MacOS 11 Big Sur (Intel seulement) _(Version de Mars 2021)_

---

### DADman v5.4.4 build 2 — 2020-09-30

**Corrections de bugs uniquement :** Comportement de gestion des basses sur plusieurs sous-sorties ; rappel EuCon sur Avid S6 ; erreur de configuration SPQ introduite dans la v5. .4 b1; MTRX Studio met à jour la correction du chronométrage.

---

### DADman v5.4.3 build 2 — 2020-08-20

| Composant | Version                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.4.3 b2 — macOS 10.10–15 _(Nouveau de Catalogne)_, Windows 7/8/10 |

**Nouvelles fonctionnalités :**

- Prise en charge de Catalina macOS 10.15
- Info-bulles sur les boutons et boutons à travers l'interface DADman
- Affectation automatique des canaux successifs dans la boîte de dialogue Groupes de profils de moniteurs
- AD / DA / Lun / Con / Conf section étendu/réduit état stocké dans les préférences
- Coche des valeurs sélectionnées dans les menus contextuels
- Avertissement affiché lors du téléchargement du microprogramme antérieur ou identique à la version actuellement installée
- Compteur de pointe/maintien sur les canaux AD et DA pour le matériel AX32, Penta et MTRX _(nécessite le firmware v2.3.2.1 ou ultérieur)_
- Étiquettes longues tronquées avec ellipse pour éviter le débordement de mise en page

---

### DADman v5.3.4 build 3 — 2019-08-01

| Composant | Version                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DADman    | v5.3.4 b3 — macOS 10.10–14 _(Mojave new)_, Windows 7/8/10 |

**Nouvelles fonctionnalités :**

- **Étiquetage du port pour les cartes d'E/S numériques** — chaque port physique (MADI, Dante, AES3) peut être assigné à une étiquette de texte individuelle; les étiquettes sont stockées dans l'unité matérielle et affichées dans la vue de la matrice
- Prise en charge de la carte DigiLink _(Avid MTRX uniquement — non applicable au matériel DAD)_
- Prise en charge de macOS 10.14 Mojave _(ne nécessite plus de contournement du profil couleur)_
- Lancement plus rapide de l'application sur macOS; réduction de la charge générale du CPU

---

## Annexe F — Déclarations de conformité

Voir [Front Matter, Section FM.9 — Conformité réglementaire] pour les déclarations CE, FCC, ICES-003, UKCA et RoHS.

_[Déclarations finales devant être insérées par DAD / NTP Technology Engineering et légales avant publication.]_

---

## Appendix G — Glossary

Les termes sont listés par ordre alphabétique. Lorsqu'un terme a une abréviation commune, l'entrée apparaît sous la forme complète avec l'abréviation mentionnée, et une référence croisée est placée à la position alphabétique de l'abréviation. Les noms de produits DAD et les termes de marque déposée sont présentés tels quels sur le produit ou dans DADman.

---

Onglet **AD**
L'onglet _Analogue à Digital_ dans DADman. Affiche la bande de canal pour tous les canaux d'entrée analogiques sur l'unité matérielle connectée, fournissant des commandes pour le gain d'entrée de micro/ligne, le muet, l'inversion de phase, la puissance fantôme (+48 V), et les étiquettes de canaux. La mesure pour chaque entrée est affichée dans cet onglet. Voir aussi: _onglet DD_.

**ADAT** (Alesis Digital Audio Tape optique)
Une interface audio numérique optique transmettant jusqu'à 8 canaux audio à 44. ou 48 kHz, ou 4 canaux à 88,2 ou 96 kHz, sur un seul câble de fibre optique TOSLINK. Supporté en tant qu'option d'E/S sur certains matériels DAD. À double taux d'échantillon, le nombre de canaux est divisé de moitié, ce qui est appelé _S/MUX_. Voir aussi: _S/MUX_.

**AES3** (AES/EBU)
Une norme d'interface audio professionnelle équilibrée définie par la Société d'Ingénierie Audio (AES) et l'Union Européenne de radiodiffusion (UE). Transporte deux canaux audio PCM sur un seul câble XLR équilibré. communément appelé AES/EBU. Prise en charge sur le matériel DAD au format d'E/S discret, généralement via des connecteurs d'arrachage DB25 transportant plusieurs paires AES3. Voir aussi: _AES67_.

**AES67**
Une norme d'interopérabilité pour l'audio-sur-IP (AoIP) définie par la Société d'Ingénierie Audio. AES67 définit une couche de transport commune permettant à Dante, Ravenna, WNEU et à d'autres implémentations AoIP d'échanger des flux audio. Le matériel DAD avec les interfaces Dante ou Ravenna peut être configuré pour le mode AES67. Voir aussi: _Dante_, _Ravenna_, _ST 2110-30_.

**ASIO** (Entrée / Sortie Audio Stream)
Une architecture de pilote audio à faible latence pour Windows développée par Steinberg. Le pilote DAD Thunderbolt 3 ASIO expose les interfaces Thunder\|Core (AX64, AX Center, Core 256) en tant que périphériques ASIO dans les DAW Windows. Configuré via le panneau de commande du pilote DAD ASIO, qui fournit la taille du tampon, le taux d'échantillonnage et les paramètres de nombre de canaux.

**Autoboot**
La configuration de DADman pour se lancer automatiquement lorsque l'ordinateur démarre, chargeant éventuellement un fichier de paramètres spécifié et surveillant le profil sans interaction utilisateur. Sur macOS, le démarrage automatique est réalisé via les éléments de connexion ou un lanceur de délais AppleScript. Sous Windows, via le dossier de démarrage de Windows ou le planificateur de tâches. Voir : _Chapitre 8, Section 8.7_.

**Centre AX**
Une interface audio DAD dans la famille de produits Thunder\|Core. Combine la conversion A/D et D/A à bord avec une interface réseau Dante et une connectivité Thunderbolt 3. Supporte jusqu'à 128 canaux sur Thunderbolt à 44,1/48 kHz. Contrôlé et configuré via DADman.

**AX32**
Un routeur et convertisseur audio DAD. Le produit phare du groupe matériel de la famille 1, prenant en charge jusqu'à 256×256 routage par l'intermédiaire d'une matrice basée sur Ethernet, avec des emplacements de cartes d'extension pour MADI, Dante, AES3, E/S analogiques, SDI, et SPQ. Contrôlé via DADman.

**AX64**
Une interface audio DAD dans la famille de produits Thunder\|Core. Fournit 64 canaux de connectivité Thunderbolt 3 plus options d'extension pour MADI, Dante, AES3 et E/S analogiques. Contrôlé via DADman.

**Bucket**
In Control\|Pack routing presets, a _bucket_ is one of up to four independent input layers within a single routing preset. Chaque segment définit un ensemble complet de canaux source qui peuvent être basculés sur les sorties du préréglage en une seule action. Les seaux sont activés manuellement ou automatiquement en fonction des déclencheurs du détecteur de signaux. Voir aussi: _Control\|Pack_, _Préréglage de routage_, _Déclencher_. Voir : _Chapitre 8, Section 8.4_.

**CE** (Conformité Européenne)
Un marquage de produit obligatoire pour les biens vendus dans l'Espace Economique Européen, en indiquant que le produit répond à toutes les directives européennes applicables en matière de sécurité, de compatibilité électromagnétique et d'autres exigences réglementaires. Le matériel DAD / NTP Technology porte le marquage CE. La déclaration complète de conformité est disponible auprès du DAD et reproduite à l'annexe F\*.

\*\*Cloner / Cloner
Une opération DADman qui copie tous les paramètres d'une unité matérielle connectée à une autre dans le même groupe de la famille matérielle. Le clonage est effectué via le menu contextuel de la liste des périphériques. Les unités doivent être dans le même groupe de famille ; les paramètres pour les cartes d'E/S non présentes dans l'unité cible sont définis par défaut à l'usine. Voir : _Chapitre 8, Section 8.3_. Voir aussi: _Groupe familial_.

**Onglet Con Onglet**
L'onglet _Connexion_ dans DADman. Affiche la matrice de routage des points d'intersection pour l'unité connectée, avec des entrées sur un axe et des sorties sur l'autre. Les carrés bleus indiquent les connexions actives. Les connexions se font en cliquant sur des points croisés, plusieurs connexions peuvent être faites simultanément en utilisant Maj+clic pour les paires stéréo. Voir aussi: _Crosspoint_, _Matrice de routage_.

**Conf tab**
L'onglet _Configuration_ dans DADman. Fournit le contrôle des paramètres de synchronisation (source de verrouillage, taux d'échantillon, Adapt To), des paramètres spécifiques au format (taux d'images (MADI, configuration Dante, options AES3) et la configuration au niveau du port. Le contenu de l'onglet Conf varie selon le modèle matériel et les cartes d'extension installées.

**Contrôle 01 / Contrôle 02**
contrôleurs de moniteur matériel DAD. Unités matérielles compactes et dédiées pour le contrôle pratique des fonctions de moniteur DADman sans avoir besoin d'une surface de contrôle tierce. Supporté par DADman v5.8.2 build 2 (Control 01) et v5.8.2 build 2 (Control 02, introduit janvier 2026).

**Control\|Pack**
Un système de préréglage de routage pour le matériel Thunder\|Core (AX64, AX Center, Core 256) introduit dans la version 8 de DADman v5.8.0. Permet jusqu'à 32 préréglages de routage par unité, chacun avec jusqu'à quatre segments d'entrée qui basculent simultanément dans un seul échantillon audio. Interrupteur automatique basé sur la détection du niveau du signal, l'intégrité de la tonalité du pilote AE6 ou l'état de connectivité du port. Voir : _Chapitre 8, Section 8.4_. Voir aussi: _Bucket_, _Préréglage de routage_, _Déclencher_.

**Core 256**
Une interface audio DAD dans la famille de produits Thunder\|Core. Prise en charge jusqu'à 256 canaux sur Thunderbolt 3 à 44,1/48 kHz, avec de nombreuses options de carte d'extension. Le membre de la plus grande capacité de la famille Thunder\|Core au moment de la publication. Contrôlé via DADman.

**Core Audio**
Architecture d'E/S audio d'Apple pour macOS. DAD Thunder\|Les unités de base apparaissent comme périphériques audio de base lorsque le pilote DAD Thunderbolt 3 Core Audio est installé, les rendre disponibles pour n'importe quelle application audio macOS. Voir aussi: _ASIO_.

**Crosspoint**
Une intersection unique dans la matrice de routage DADman représentant une connexion entre une entrée et une sortie. L'activation d'un point de croisement achemine le signal de cette entrée vers cette sortie. Un carré bleu dans l'onglet Con indique une croix active. Plusieurs points de croisement peuvent partager la même entrée (ventilateur). Voir aussi: _Onglet Con_, _Matrice de routage_.

**Cue\|Mix**
Une fonctionnalité de mixeur de moniteur auditif à latence nulle dans DADman. Permet la création de mixages individuels ou IEM indépendamment du mélange de salle de contrôle principale. _Documentation en attente — nécessite une entrée d'ingénierie DAD. Voir : Chapitre 8, Document en attente._

**Tableau DD**
L'onglet _Numérique à Analogue_ dans DADman. Affiche des bandes de canaux pour tous les canaux de sortie analogiques sur unité(s) matérielle(s) connectée(s), fournissant des commandes pour les fondus de niveau de sortie, les mutes et les étiquettes de canaux. L'onglet DA contient également les commandes d'étalonnage du niveau de sortie analogique (alignement dBu). See also: _AD tab_.

**DAD** (Digital Audio Danemark)
La marque utilisée pour le matériel audio et les produits logiciels développés par NTP Technology A/S, une société danoise de technologie audio. Les produits DAD incluent l'AX32, l'AX64, AX Center, le Core 256, le DX32R, le MOM, et le logiciel de contrôle DADman. Voir aussi: _NTP Technology A/S_.

**DADLink**
Un format d'interconnexion audio à grand nombre de canaux propriétaire développé par DAD. Utilise la fente de module mini MADI sur du matériel compatible avec les émetteurs SFP optiques. Fournit jusqu'à 128 canaux à 44.1/48 kHz avec environ 1 microseconde de latence entre les unités connectées. Compatible avec AX32, AX64, AX Center, Core 256, DX32R, Penta 720, Penta 721 et MTRX/MTRX II. Voir : _Chapitre 8, Section 8.6_.

**DADman**
L'application logicielle de contrôle développée par NTP Technology A/S (DAD) pour la configuration, la surveillance, et contrôlant tous les produits matériels DAD et NTP Technologie, ainsi que les interfaces audio Avid MTRX, MTRX II et MTRX Studio. Disponible pour macOS et Windows. DADman communique avec les unités connectées via Ethernet (et éventuellement via Thunderbolt 3 pour les unités Thunder\|Core). L'application comprend des commandes de bande de canaux (AD, DA, Con, Conf, Conf, Mon tabulations), la liste des périphériques, la gestion des profils, la configuration prédéfinie de routage, et les paramètres de préférences.

**DAW** (Digital Audio Workstation)
Une application logicielle utilisée pour l'enregistrement, l'édition, le mixage et la production audio numérique. Pro Tools, Logic Pro, Nuendo, Reaper, et Cubase sont des exemples courants. DADman s'intègre avec les DAWs via Ethernet (EuCon), MIDI, Dante et Thunderbolt 3.

**dBFS** (décibels par rapport à l'échelle pleine)
Une unité de mesure pour le niveau du signal audio numérique. 0 dBFS est le niveau numérique maximum possible; tous les niveaux de signaux pratiques sont des valeurs négatives (par exemple, -18 dBFS, -6 dBFS). La mesure DADman affiche les niveaux de signal en dBFS. Voir aussi: _dBu_.

**dBu**
Une unité de mesure pour le niveau du signal audio analogique, référencée à 0,775 V RMS. Les équipements audio professionnels fonctionnent généralement à +4 dBu nominal avec une tête de table à +18 dBu ou +24 dBu. Les commandes de sortie DADman DADman Dtab définissent le niveau analogique qui correspond à 0 dBFS, alignant les domaines du signal numérique et analogique. Voir aussi: _dBFS_.

**DDM** (Dante Domain Manager)
Le système de gestion centralisée d'Audinate pour les réseaux Dante à l'échelle de l'entreprise, fournissant l'authentification, la segmentation du réseau et le routage inter-sous-réseau. Certaines fonctionnalités avancées de Dante (comme la ST 2110-30 sur certains types de modules) nécessitent un DDM. Voir aussi: _Dante_.

**Liste de périphériques**
La zone d'affichage de l'unité principale dans DADman, montrant toutes les unités matérielles connectées de gauche à droite dans l'ordre de leurs numéros d'identification. Chaque unité est affichée avec une bordure colorée, montrant ses commandes AD, DA, et Con/Conf courantes sous forme de bandes de canaux. La liste des périphériques fournit l'interface principale pour les opérations au niveau du périphérique (mise à jour du firmware, réinitialisation d'usine, clone, paramètres réseau).

**DMS** (DADman Settings File)
Le format de fichier (extension `. ms`) utilisé par DADman pour enregistrer la configuration complète de toutes les unités matérielles connectées — connexions de routage, paramètres de gain, libellés de canaux, paramètres d'onglets Conf et tous les autres paramètres de niveau unit. Les paramètres sont stockés sur l'unité matérielle elle-même; un fichier `.dms` est une sauvegarde de ces paramètres conservés sur l'ordinateur. Voir aussi: _DMPROF_.

**DMPROF** (DADman Monitor Profile File)
Le format de fichier (extension `. mprof`) utilisé par DADman pour enregistrer un profil de moniteur — la configuration complète du contrôleur de moniteur pour une unité matérielle, y compris les sources, les ensembles de sortie, les dépliants, le routage de retour, et les affectations de compteur. Un fichier `.dmprof` est stocké sur l'ordinateur et non dans l'unité matérielle. Voir aussi: _Profil du moniteur_, _DMS_.

**Latence DPC** (Latence d'appel d'appel différé A)
Une métrique de performance du système Windows mesurant le temps pris par les pilotes matériels et les processus système pour traiter les demandes d'interruption. La latence élevée du DPC provoque des décrochages audio dans les applications audio en temps réel. Les causes courantes sont les pilotes de réseau sans fil, les paramètres de gestion de l'alimentation USB et les logiciels antivirus. Pertinent aux performances de Thunder\|Core ASIO sous Windows. Voir : _Chapitre 9, Section 9.4_.

**DVS** (Dante Virtual Soundcard)
Une application logicielle d'Audinate qui fait qu'un Mac ou un PC apparaît comme un périphérique audio Dante sur le réseau, acheminer le système audio de l'ordinateur vers Dante. Utilisé pour introduire la sortie de n'importe quelle application audio de l'ordinateur dans le système de contrôle DADman comme source. Voir : _Chapitre 8, Section 8.10_.

**DX32R**
Un routeur audio numérique DAD et un pont. Supporte le routage entre les formats AES3, MADI et Dante dans un boîtier 1RU. Membre du groupe matériel de la famille 1. Contrôlé via DADman.

**EuCon**
Protocole de surface de contrôle propriétaire d'Avid, utilisé pour la communication entre DAWs (notamment Pro Tools) et les surfaces de contrôle Avid (S1, S6, S6L) et l'application Avid Control. DADman implémente EuCon pour exposer les fonctions de contrôle du moniteur — sélection de la source, volume, dim, coupe, talkback et replié — à toute surface EuCon connectée. Activé dans DADman via _Paramètres > Activer EuCon_. Voir : _Chapitre 8, Section 8.5_.

**Groupe de Famille**
Un regroupement de compatibilité matérielle utilisé par DADman pour la fonction Cloner et pour identifier les unités qui partagent la même branche de micrologiciel. Il existe trois groupes familiaux : famille 1 (MTRX, AX32, DX32, Penta 720, Penta 721s) ; Famille 2 (MTRX II, AX64, AX Center, Core 256) ; Famille 3 (MTRX Studio). Voir aussi: _Cloner / Cloner_.

**FCC** (FFederal Communications Commission)
L'agence de régulation des États-Unis chargée des normes de compatibilité électromagnétique et de fréquence radio. DAD / NTP Technology hardware sold in the USA must comply with FCC Part 15 (unintentional radiators). Voir : _Annexe F_.

**Firmware**
Logiciel embarqué stocké sur la mémoire flash interne de l'unité matérielle qui contrôle les fonctions de base du traitement audio, du routage et des E/S. Le microprogramme est séparé de DADman (qui fonctionne sur l'ordinateur hôte). Les mises à jour du microprogramme sont appliquées via DADman à partir d'un fichier de microprogramme téléchargé à partir du portail de support DAD. Voir : _Chapitre 10, Section 10.2_.

**Fold-Down**
Une matrice de mixage dans un profil de moniteur DADman qui convertit une source audio de plus grand nombre de canaux en un format de nombre inférieur pour la surveillance de la compatibilité. Par exemple, un dépliant 7.1 vers la stéréo permet de vérifier comment un mixage ambiant se traduit par une lecture à deux voies. Des matrices pliables personnalisées peuvent également être utilisées pour la sélection des sous-ensembles des haut-parleurs et la correspondance vers le haut. Voir : _Chapitre 8, Section 8.1.6_. Voir aussi: _Up-Match_, _Monitor Profile_.

**LTC** (Linear Timecode)
SMPTE timecode encodé comme un signal de fréquence audio qui peut être transporté sur n'importe quelle connexion audio analogique ou numérique, y compris un canal Dante. LTC encode les heures, les minutes, les secondes et les images pour synchroniser les équipements audio et vidéo. Voir : _Chapitre 8, Section 8.14_.

**MADI** (Multichannel Audio Digital Interface, AES10)
Une norme d'interface audio numérique professionnelle définie par la Société d'Ingénierie Audio (AES10). Transmet jusqu'à 64 canaux audio à 44,1 ou 48 kHz (32 canaux à 88,2/96 kHz en mode Haute Vitesse; 16 canaux à 176. /192 kHz) sur un seul câble coaxial ou câble fibre optique à l'aide de modules SFP. MADI utilise deux modes de fréquence d'images : Legacy (56 canaux) et High Speed (64 canaux). Les deux extrémités d'une connexion MADI doivent utiliser le même mode de fréquence d'images.

**Mode barre de menus**
Un mode d'affichage macOS pour DADman dans lequel l'application se cache du Dock lorsque sa fenêtre principale est fermée et n'est accessible que via une icône dans la barre de menu du système macOS. Utilisé dans des environnements d'installation permanents où DADman devrait s'exécuter en arrière-plan. Voir : _Chapitre 8, Section 8.7_.

**Mic Gain Group**
Une fonctionnalité DADman (v5.8. construire 6 et plus) qui relie plusieurs canaux d'entrée analogique de sorte que les ajustements de gain et de muet sur n'importe quel canal affectent tous les canaux du groupe simultanément, tout en préservant les décalages relatifs de gain entre les canaux. La puissance fantôme et l'inversion de phase ne sont pas regroupées. Prise en charge sur tous les matériels, sauf MTRX Studio. Voir : _Chapitre 8, Section 8.2_.

**MOM** (Monitor Operating Module)
Un contrôleur de moniteur matériel DAD — un compact, unité matérielle montable en rack ou ordinateur de bureau fournissant des boutons et boutons physiques pour contrôler les fonctions de moniteur DADman (volume, sélection de la source, dim, coupe, talkback, mute). MOM communique avec DADman via Ethernet. Voir : _Chapitre 8, Section 8.5_.

Onglet **Lun**
L'onglet _Moniteur_ dans DADman. Affiche les contrôles du moniteur pour le profil du moniteur actuellement chargé : les boutons de sélection de la source, sélection des haut-parleurs de sortie, sélection de niveau principal, atténuation, coupe, bouton Ref, talkback et sélecteurs rabattables. L'onglet Mon est seulement rempli quand un fichier `.dmprof` Monitor Profile est chargé. Voir aussi: _Profil du moniteur_.

**Profil de surveillance**
Un fichier de configuration DADman (`. mprof`) définissant la configuration complète du contrôleur de moniteur: les sources disponibles, les ensembles de sortie physiques, les matrices pliées, le routage de talkback, les paramètres de délai et les sorties de compteur. Un profil de moniteur est entièrement séparé du fichier de configuration de l'unité (`.dms`). Les profils sont stockés sur l'ordinateur et doivent être chargés dans DADman au lancement. Voir : _Chapitre 8, Section 8.1_. Voir aussi: _DMPROF_, _Source (monitor)_, _Ensemble de sortie_.

**MTRX / MTRX II / MTRX Studio**
Les produits d’interface audio de marque Avid développés par NTP Technology A/S (DAD) sous contrat OEM. MTRX et MTRX II font partie des groupes matériels de la famille 1 et de la famille 2. MTRX Studio est la famille 3. Tous les trois sont configurés et contrôlés par DADman. Pour les flux de travail spécifiques à Avid, reportez-vous à la documentation Avid pertinente. Voir: _Première affaire, Section FM.3_.

**NTP Technology A/S**
La société danoise (NTP Technology A/S, Copenhague) qui développe et fabrique du matériel DAD et des produits logiciels. Anciennement connue sous le nom de technologie NTP / NEVE. Développe également des produits audio sous la marque NTP Penta. DAD est la marque de référence pour le consommateur; NTP Technology A/S est l’entité légale. Voir aussi: _DAD_.

**Ensemble de sorties**
Dans un profil de moniteur DADman, un groupe de canaux de sortie physiques représentant une configuration de haut-parleur — par exemple, `Near Field`, `5. Surround`, ou `85 dB SPL`. Plusieurs ensembles de sortie peuvent être définis en utilisant des sorties physiques différentes ou les mêmes sorties avec des niveaux de découpe différents pour créer plusieurs préréglages de niveau de référence. Voir : _Chapitre 8, Section 8.1.4_. Voir aussi: _Niveau de référence_, _Couper_.

**Penta 720 / Penta 721 s**
NTP Technologie A/S routeur audio et produits convertisseur. Membres du groupe matériel de la famille 1. Comprend les mêmes options de carte d'extension que l'AX32. Contrôlé via DADman. Fabriqué par NTP Technology A/S ; distribué sous la marque NTP Penta.

**PCIe** (Peripheral Component Interconnect Express)
Un bus d'ordinateur haute vitesse utilisé en interne dans les ordinateurs pour la communication entre le CPU, la RAM et les périphériques périphériques. Thunderbolt 3 expose de façon externe la bande passante PCI; c'est ainsi que les périphériques Thunder\|Core communiquent avec l'ordinateur hôte à une latence proche de zéro.

**PoE** (Power over Ethernet)
A standard (IEEE 802. af/at) permettant aux commutateurs réseau de fournir de l'alimentation électrique aux périphériques connectés par le même câble Ethernet utilisé pour les données. Le contrôleur de moniteur MOM et certains accessoires DAD supportent le PoE, éliminant ainsi la nécessité d'une alimentation séparée.

**PRE Emulation**
Une fonctionnalité DADman permettant à Pro Tools de contrôler les gains de préampli connectés au DADman via MIDI, traitant le matériel comme une unité de préampli _Avid PRE_. Permet de régler le gain micro à partir de la configuration d'E/S de Pro Tools ou d'une surface de contrôle connectée sans passer à DADman. Voir : _Chapitre 8, Section 8.15_.

**PRO\|MON**
Une licence logicielle DADman facultative qui étend le système de contrôle du moniteur au-delà du jeu de fonctionnalités basiques de profil de moniteur. Ajout de fonctionnalités avancées de routage du moniteur, de talkback, de bus de cue et d'intégration pour les environnements complexes de surveillance du studio et de la diffusion. Utilisé principalement avec AX32, DX32R, Penta 720 et MTRX Studio. _Toute la documentation en attente — nécessite une entrée d'ingénierie DAD. Voir : Chapitre 8, Document en attente._

**PTP** (Precision Time Protocol, IEEE 1588)
Un protocole réseau pour synchroniser des horloges sur un réseau local avec une précision de sous-microseconde. Utilisé dans les réseaux Dante et Ravenne pour aligner les flux audio à partir de différents périphériques de réseau sans nécessiter un câblage de l'horloge de mot dédié. Voir aussi: _Dante_, _Ravenna_.

**Ravenna**
Un protocole de transport audio-sur-IP développé par la ALC NetworX. Utilisé dans des applications audio haut de gamme et haut de gamme. Interopérable avec AES67. La carte DAD Ravenna (prise en charge par DADman v5.8.2 build 2) ajoute la connectivité Ravenna/AES67/ST 2110-30 aux unités Thunder\|Core compatibles. Voir aussi: _AES67_, _ST 2110-30_.

**LEDs Prêtes**
Un indicateur de statut du panneau avant présent sur toutes les unités de matériel DAD / NTP Technologie. Lorsque le vert est solide, l’unité est sous tension, démarrée et communique normalement. Une LED clignotante ou non verte indique un démarrage en cours, une mise à jour du microprogramme ou une condition de défaut.

**Niveau de référence**
Dans un profil de moniteur DADman, un niveau de sortie calibré pour un ensemble de sortie spécifique, établi avec des tons de test et un compteur SPL. Une fois défini, appuyer sur le bouton **Ref** de l'onglet Mon verrouille le moniteur à ce niveau, évitant ainsi les changements de volume accidentels lors de l'écoute critique. Voir : _Chapitre 8, Section 8.1.5_.

**Matrice de routage**
Le moteur de routage du signal d'une unité matérielle contrôlée par DADman, permettant à toute entrée d'être connectée à n'importe quelle sortie. La matrice de routage est affichée et éditée dans l'onglet **Con** de DADman comme une grille de points croisés. Le matériel DAD prend en charge les matrices jusqu'à 1 500×1 500 points de passage (dépendants du modèle). Voir aussi: _Onglet Con_, _Crosspoint_.

**Préréglage de routage**
Dans Control\|Pack, une configuration nommée définissant quels canaux de sortie sont contrôlés par le préréglage et quels segments de source sont disponibles pour le changement. Jusqu'à 32 préréglages de routage peuvent être configurés par unité Thunder\|Core. Voir aussi: _Control\|Pack_, _Bucket_. Voir : _Chapitre 8, Section 8.4_.

**RoHS** (Restriction of Hazardous Substances)
Directive européenne 2011/65/UE limitant l'utilisation de substances dangereuses spécifiques (plomb, mercure, cadmium, chrome hexavalent, certains retardateurs de flammes) dans les équipements électriques et électroniques. La technologie DAD / NTP est conforme à la norme RoHS. Voir : _Annexe F_.

**Taux d'échantillonnage**
Le nombre d'échantillons audio capturés ou lus par seconde, exprimés en kHz. Tarifs standard : 44,1 kHz, 48 kHz (définition standard); 88,2 kHz, 96 kHz (haute définition); 176,4 kHz, 192 kHz (très haute définition). Des taux d'échantillonnage plus élevés réduisent le nombre de canaux sur des interfaces multiplexées (MADI, ADAT, DADLink). La fréquence d'échantillonnage est configurée par unité dans l'onglet DADman **Conf**.

**SFP** (Small Form-factor Pluggable)
Un module d'émetteur compact, à chaud ou à chaud utilisé dans les connexions MADI et DADLink sur le matériel DAD. Les modules SFP sont disponibles dans diverses configurations pour les fibres multimode ou mono-mode, ou MADI coaxial. Le type SFP détermine le type de câble et la distance de transmission maximale.

**S/MUX** (Multiplexage d'échantillon)
Une technique pour transmettre une fréquence d'échantillonnage plus élevée sur ADAT en utilisant plusieurs canaux ADAT pour transporter des données d'un seul canal. Au 88.2/96 kHz, S/MUX réduit de moitié le nombre de canaux ADAT à 4 canaux (S/MUX2). Avec 176.4/192 kHz, le S/MUX4 réduit encore le nombre à 2 canaux. Voir aussi: _ADAT_.

**Source** _(monitor)_
Dans un profil de moniteur DADman, un chemin de signal d'entrée nommé disponible pour la sélection du moniteur. Les sources sont assignées à des canaux d'entrée spécifiques sur l'unité matérielle (analogique, Dante, MADI, AES3, etc.) et apparaissent comme des options sélectionnables dans l'onglet Mon . Exemples: `Pro Tools`, `DVS`, `Dante Player`, `Guest`. Voir : _Chapitre 8, Section 8.1.3_. Voir aussi: _Profil du moniteur_.

**SPQ** (Signal Processing card)
Une carte d'extension DSP facultative pour le matériel DAD compatible (AX32 variants) fournissant l'EQ paramétrique par voie sur les sorties de moniteurs analogiques. Utilisé pour la correction des haut-parleurs et des pièces. Les données de filtrage SPQ sont généralement générées à partir de mesures acoustiques faites avec l'Assistant Espace EQ (ou des outils similaires) et importées dans DADman via l'onglet SPQ. Voir : _Chapitre 8, Section 8.12_.

**SRC** (Convertisseur d'échantillons)
Un composant matériel ou logiciel qui convertit l'audio numérique entre différentes fréquences d'échantillon. L'insertion d'un SRC dans un chemin de signal rompt toute relation de phase cohérente avec l'horloge d'échantillon d'origine, qui peuvent corrompre des signaux sensibles au temps tels que LTC et le ton pilote AE6. Les unités DADman prennent en charge SRC sur certaines interfaces I/O lorsqu'elles sont configurées dans l'onglet Conf.

**ST 2110-30**
Une norme SMPTE (SMPTE ST 2110-30) pour le transport de l'audio non compressé sur les réseaux IP, dérivée du standard AES67. Utilisé dans des environnements de diffusion professionnelle. Pris en charge sur les interfaces DAD Dante et Ravenna depuis le firmware v1.1.2.4 (Janvier 2026). Brooklyn 3 modules prennent en charge ST 2110-30 sans DDM depuis le firmware v1.1.0.3. Voir aussi: _AES67_, _Ravenna_, _DDM_.

**Thunder\|Core**
Le terme DAD pour la technologie d’interface Thunderbolt 3 intégrée dans les unités AX64, AX Center et Core 256. Thunder\|Core fournit des E/S audio à très faible latence entre l'unité matérielle et l'ordinateur hôte sur un câble Thunderbolt 3, en plus du contrôle DADman basé sur Ethernet.

**Thunderbolt 3**
standard d'interface périphérique haute vitesse d'Intel, fournissant jusqu'à 40 Gbps de bande passante sur un connecteur USB-C. Utilisé par DAD Thunder\|Unités de base pour les E/S audio vers l'ordinateur hôte. Nécessite le pilote DAD Thunderbolt 3 (Core Audio sur macOS; ASIO sous Windows). La spécification minimale du câble pour un fonctionnement correct est un câble certifié Thunderbolt 3 évalué à 20 Gbps. Voir : _Chapitre 3, Section 3.2_ et _Chapitre 9, Section 9.4_.

**Trim**
Dans un ensemble de sortie de profil de moniteur DADman, un décalage de niveau fixe appliqué à cet ensemble de sortie par rapport au fader du moniteur principal. Utilisé pour créer des préréglages de niveau de référence multiples sur les mêmes sorties physiques sans matériel supplémentaire. Par exemple, un découpage -10 dB sur un deuxième ensemble de sortie pointant vers les mêmes haut-parleurs que l'ensemble primaire fournit un décalage instantané de niveau de référence de 10 dB. Voir aussi: _Ensemble de sortie_, _Niveau de référence_.

**Déclenche**
Dans Control\|Pack de présélections de routage, un _déclencheur_ est une condition de détection assignée à un segment qui détermine si la source de ce segment est considérée comme valide. Types de déclenchement : Niveau de signal (signal audio supérieur à -40 dBFS seuil); AE6 (intégrité de la tonalité du pilote numérique AE6); Port (état de la connectivité du port physique). Voir : _Chapitre 8, Section 8.4.4_. Voir aussi: _Bucket_, _Control\|Pack_.

**UKCA** (UK Conformity Assessed)
Une marque de produit requise pour les biens vendus en Grande-Bretagne (Angleterre, Ecosse, Pays de Galles) à partir du 1er janvier 2021, remplaçant le marquage CE pour le marché britannique après le Brexit. Equivalent dans le champ d'application à CE. Le matériel DAD / NTP Technology vendu en Grande-Bretagne porte le marquage UKCA. Voir : _Annexe F_.

**Up-Match**
Une matrice pliée personnalisée dans un profil de moniteur DADman qui roule un format source de moins grand nombre de canaux vers une sortie plus élevée — par exemple, en étendant un 5. à travers une mise en page 7.1.4. Configuré dans l’onglet Plier vers le bas de l’éditeur de profil du moniteur. Voir aussi: _Fold-Down_. Voir : _Chapitre 8, Section 8.1.6_.

**WEEE** (Waste Electrical and Electronic Equipment)
Directive européenne 2012/19/UE régissant la collecte, le recyclage et l'élimination des équipements électriques et électroniques. Le matériel de la technologie DAD / NTP porte le symbole WEEE (bobine de roues croisées), indiquant qu'il ne doit pas être éliminé dans des déchets ménagers non triés. Voir: _Chapitre 10, Section 10.8_ et _Front Matter, Section FM.8_.

**Horloge de mot**
Un signal de synchronisation à ondes carrées utilisé pour verrouiller progressivement l'équipement audio numérique à une référence de fréquence d'échantillonnage partagée. L'horloge de mot est distribuée à la fréquence d'échantillonnage (par exemple, 48 kHz) de plus de 75 €), câbles BNC. Le matériel DAD prend en charge Word Clock in et out pour une intégration dans les systèmes de synchronisation des installations. Les connexions d'horloge à mot requièrent une terminaison de 75  , au dispositif final de la chaîne. Voir : _Chapitre 9, Section 9.5_.

---

## Annexe H - Index

_[Placeholder: index à générer à partir du document compilé final.]_
