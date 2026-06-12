---
title: "Chapitre 10 — Caractéristiques techniques"
sidebar_label: "Ch. 10 – Spécifications"
sidebar_position: 11
---

# Chapitre 10 — Caractéristiques techniques

> **Produit :** Digital Audio Danemark AX64  
> **SKU :** AX64-BASE / AX64-BASE-RPS  
> **Source :** Feuille de spécification AX64-BASE, Edition Juin 2026

---

## 10.1 E/S numériques

| Paramètre                            | Valeur                    | Conditions / Notes  |
| ------------------------------------ | ------------------------- | ------------------- |
| Éclair de tonnerre 3                 | 256 ch / 256 ch en sortie | À 48 kHz et 96 kHz  |
| Dante AoIP                           | 256 ch / 256 ch en sortie | À 48 kHz            |
| Dante AoIP                           | 128 ch / 128 ch de sortie | À 96 kHz            |
| MADI                                 | 64 ch en / 64 ch          | À 48 kHz            |
| ADAT / SMUX                          | 16 ch / 16 ch de sortie   |                     |
| S/PDIF                               | 2 ch input                | Via connecteur ADAT |
| DADlink (via SFP) | Jusqu'à 256 x 256 ch      | À 48 kHz            |
| Via les cartes d'extension           | Jusqu'à 1,024×1,024 ch    | Cartes optionnelles |

---

## 10.2 Taux d'échantillonnage pris en charge

| Formater             | Taux d'échantillonnage                                                                                         |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Éclair de tonnerre 3 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| MADI                 | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink              | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante / AES67        | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| ADAT / SMUX          | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| S/PDIF               | 44.1, 48, 88.2, 96 kHz                                                         |

---

## 10.3 Routage and Processing

| Paramètre                              | Valeur                                                           |
| -------------------------------------- | ---------------------------------------------------------------- |
| Matrice de routage                     | 1,872×1,872                                                      |
| Résumé du processeur                   | Canaux 512×64                                                    |
| égaliseur SPQ                          | 1 024 filtres                                                    |
| Longueur du mot en cours de traitement | Point flottant 28 bits                                           |
| Délai du système interne               | 7 échantillons (échantillons réglables 3-31 ) |
| Alignement de sortie                   | Toutes les sorties alignées sur l'heure et la phase              |

---

## 10.4 DADlink

| Paramètre | Valeur                 |
| --------- | ---------------------- |
| Formater  | Point flottant 28 bits |
| Latence   | 0 échantillons         |

---

## 10.5 Synchronisation

| Source                                      | Notes                |
| ------------------------------------------- | -------------------- |
| Horloge du mot                              | Entrée et sortie BNC |
| Rafale vidéo noire (VBB) | Input                |
| Éclair de tonnerre 3                        | Via l'hôte           |
| Dante                                       | Par le réseau        |
| ADAT                                        | Via port ADAT        |
| MADI                                        | Via port MADI        |
| DADlink                                     | Via SFP              |

---

## 10.6 Interface Thunderbolt 3

| Paramètre                  | Valeur                                  |
| -------------------------- | --------------------------------------- |
| Connecteurs                | 2 × USB-C (Foudre 3) |
| Daisy-chain / link         | Supporté                                |
| Sortie de puissance du bus | 15W par port                            |

---

## 10.7 Interface réseau

| Paramètre  | Valeur       |
| ---------- | ------------ |
| Standard   | 1000BASE-T   |
| Connecteur | RJ45, 4-pair |

---

## 10.8 Emplacements d'extension

| Paramètre             | Valeur                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| Nombre d'emplacements | 8                                                                                                     |
| Cartes compatibles    | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.9 Puissance

| Paramètre                                           | Valeur                                      | Notes                            |
| --------------------------------------------------- | ------------------------------------------- | -------------------------------- |
| Entrées de puissance                                | Simple ou double                            | AX64-BASE-RPS a deux entrées     |
| Alimentation                                        | Double (toujours ajusté) |                                  |
| Tension d'entrée                                    | AC 90-260 V                                 | CNC nominale 100-240 V, 47-63 Hz |
| Connecteur réseau                                   | IEC 60309                                   |                                  |
| Fusion réseau réseau                                | 1.5 A, T1AH/250 V           | Monté dans le connecteur IEC     |
| Notation principale max                             | 120 W                                       |                                  |
| Section numérique                                   | 15 W                                        |                                  |
| Cartes d'extension (max)         | 70 W                                        |                                  |
| Puissance du bus de Foudre (max) | 30W                                         | 2 × 15 W                         |

---

## 10.10 Mécanique

| Paramètre             | Valeur                                            |
| --------------------- | ------------------------------------------------- |
| Facteur de formulaire | Chevalet 19", 2RU (88,9 mm)    |
| Profondeur du châssis | 34.5 cm / 13.6"   |
| Largeur du corps      | 43,5 cm / 17,2 cm                                 |
| Poids                 | 5.5 kg / 12.2 lbs |

---

## 10.11 Environnement

| Paramètre                     | Valeur                   |
| ----------------------------- | ------------------------ |
| Température de fonctionnement | 0-45 °C / 32-113 °F      |
| Humidité                      | 20–85%, non-condensation |

---

## 10.12 Conformité réglementaire

| Standard                                                       | Périmètre d'application                           |
| -------------------------------------------------------------- | ------------------------------------------------- |
| CISPR 32:2015 + AMD1:2019      | Emissions — équipement multimédia                 |
| CISPR 35:2016                                  | Immunité — équipement multimédia                  |
| IEC 61000-3-2:2018 + AMD1:2020 | Émissions actuelles harmoniques                   |
| IEC 61000-3-3:2013 + AMD1:2017 | Variations de tension et scintillement            |
| ICES-003                                                       | Le Canada                                         |
| AS/NZS CISPR 32                                                | Australie / Nouvelle-Zélande                      |
| Partie 15 de la FCC, sous-partie B                             | États-Unis — radiateurs involontaires             |
| IEC 62368-1:2018                               | Sécurité — équipement audio/vidéo et informatique |
