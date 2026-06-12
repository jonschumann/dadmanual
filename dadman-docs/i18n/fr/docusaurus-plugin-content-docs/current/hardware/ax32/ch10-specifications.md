---
title: "Chapitre 10 — Caractéristiques techniques"
sidebar_label: "Ch. 10 – Spécifications"
sidebar_position: 11
---

# Chapitre 10 — Caractéristiques techniques

> **Produit :** Digital Audio Danemark AX32  
> **REF :** AX32-BASE2  
> **Source :** Feuille de spécification AX32-BASE, Émission Juin 2026

---

## 10.1 E/S numériques

| Paramètre                                        | Valeur                  | Conditions / Notes                             |
| ------------------------------------------------ | ----------------------- | ---------------------------------------------- |
| MADI                                             | 64 ch en / 64 ch        | À 48 kHz; BNC coaxial                          |
| AES3 (intégré)                | 16 ch / 16 ch de sortie | 2 × DB25 (épinglage Tascam) |
| DADlink (via MOD-MADI-DADLNK) | Jusqu'à 256 x 256 ch    | À 48 kHz; via SFP                              |
| Via les cartes d'extension                       | Jusqu'à 1,024×1,024 ch  | Cartes optionnelles                            |

---

## 10.2 Taux d'échantillonnage pris en charge

| Formater                                               | Taux d'échantillonnage                                                                                         |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| MADI                                                   | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3                                                   | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| DADlink                                                | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| Dante (via MOD-DANTE-BK3 optionnel) | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Cartes d'extension                                     | Dépendant du type de carte                                                                                     |

---

## 10.3 Routage and Processing

| Paramètre                              | Valeur                                                           |
| -------------------------------------- | ---------------------------------------------------------------- |
| Matrice de routage                     | 1,424×1,424                                                      |
| Résumé du processeur                   | Chaînes 256×32                                                   |
| Longueur du mot en cours de traitement | Point flottant 28 bits                                           |
| Délai du système interne               | 7 échantillons (échantillons réglables 3-31 ) |
| Alignement de sortie                   | Toutes les sorties alignées sur l'heure et la phase              |

---

## 10.4 DADlink

| Paramètre | Valeur                                 |
| --------- | -------------------------------------- |
| Formater  | Point flottant 28 bits                 |
| Latence   | 0 échantillons                         |
| Nécessite | Module optionnel MOD-MADI-DADLNK + SFP |

---

## 10.5 Synchronisation

| Source                                      | Notes                                   |
| ------------------------------------------- | --------------------------------------- |
| Horloge du mot                              | Entrée et sortie BNC                    |
| Rafale vidéo noire (VBB) | Input                                   |
| AES11                                       | Input                                   |
| MADI                                        | Via port MADI                           |
| AES3                                        | Via l'entrée AES3 intégrée              |
| ADAT                                        | Par carte optionnelle                   |
| Dante                                       | Via le module MOD-DANTE-BK3 optionnel   |
| DADlink                                     | Via le module MOD-MADI-DADLNK optionnel |

---

## Interface réseau 10.6

| Paramètre  | Valeur                                                          |
| ---------- | --------------------------------------------------------------- |
| Standard   | 1000BASE-T                                                      |
| Connecteur | RJ45, 4-pair                                                    |
| Objectif   | Contrôle DADman ; audio réseau optionnel via cartes d'extension |

---

## 10.7 Emplacements d'extension

| Paramètre             | Valeur                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| Nombre d'emplacements | 8                                                                                                     |
| Cartes compatibles    | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.8 Modules optionnels

| Module          | Fonction                                  |
| --------------- | ----------------------------------------- |
| MOD-MADI-DADLNK | Double MADI et DADlink via SFP            |
| MOD-DANTE-BK3   | Audio réseau Dante 64 ch                  |
| MOD-SFP-1300-LZ | DADlink SFP                               |
| MOD-SFP-1300-LD | MADI SFP (mode unique) |
| MOD-SFP-COAX    | MADI SFP (coaxial)     |

---

## 10.9 Puissance

| Paramètre                                   | Valeur                                      | Notes                                          |
| ------------------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| Entrées de puissance                        | Simple                                      | L'option AX32-RPS ajoute une entrée redondante |
| Alimentation                                | Double (toujours ajusté) |                                                |
| Tension d'entrée                            | AC 90-260 V                                 | CNC nominale 100-240 V, 47-63 Hz               |
| Connecteur réseau                           | IEC 60309                                   |                                                |
| Fusion réseau réseau                        | 1.0 A, T1AH/250 V           | Monté dans le connecteur IEC                   |
| Notation principale max                     | 90 W                                        |                                                |
| Section numérique                           | 15 W                                        |                                                |
| Cartes d'extension (max) | 65 W                                        |                                                |

---

## 10.10 Mécanique

| Paramètre             | Valeur                                            |
| --------------------- | ------------------------------------------------- |
| Facteur de formulaire | Chevalet 19", 2RU (88,9 mm)    |
| Profondeur du châssis | 35 cm / 13.8"                     |
| Largeur du corps      | 43,5 cm / 17,2 cm                                 |
| Poids                 | 5.0 kg / 11.0 lbs |
| Refroidissement       | 2 × ventilateurs internes super faible bruit      |

---

## 10.11 Environnement

| Paramètre                     | Valeur                   |
| ----------------------------- | ------------------------ |
| Température de fonctionnement | 0-45 °C / 32-113 °F      |
| Humidité                      | 20–85%, non-condensation |

---

## 10.12 Conformité réglementaire

| Standard                           | Périmètre d'application                                 |
| ---------------------------------- | ------------------------------------------------------- |
| FR 55103-1                         | Emissions — équipement audio/vidéo et de divertissement |
| FR 55103-2                         | Immunité — équipement audio/vidéo et de divertissement  |
| Partie 15 de la FCC, sous-partie B | États-Unis — radiateurs involontaires                   |
| FR 60950-1:2006    | Sécurité — Equipement informatique                      |

---

## Références croisées

- [App. A — Pints de connecteurs](./appa-connector-pinouts)
- [App. C — Dessins mécaniques](./appc-mechanical-drawings)
