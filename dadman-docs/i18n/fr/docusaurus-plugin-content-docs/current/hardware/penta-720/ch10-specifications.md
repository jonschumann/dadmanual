---
title: "Chapitre 10 — Caractéristiques techniques"
sidebar_label: "Ch. 10 – Spécifications"
sidebar_position: 11
---

# Chapitre 10 — Caractéristiques techniques

> **Produit :** Digital Audio Danemark Penta 720  
> **REF :** PENTA720-BASE  
> **Source :** Feuille de spécification PENTA720-BASE, Edition Juin 2026

---

## 10.1 E/S numériques

| Paramètre                         | Valeur                  | Conditions / Notes                                            |
| --------------------------------- | ----------------------- | ------------------------------------------------------------- |
| MADI                              | 64 ch en / 64 ch        | À 48 kHz; BNC coaxial et optique via SFP                      |
| AES3 (intégré) | 16 ch / 16 ch de sortie | 2 × DB25 (épinglage Tascam)                |
| Via les cartes d'extension        | Jusqu'à 8 cartes        | Voir Section 10.5 pour les cartes compatibles |

---

## 10.2 Taux d'échantillonnage pris en charge

| Formater           | Taux d'échantillonnage                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| MADI               | 44.1, 48, 88.2, 96, 176.4, 192, 352.8, 384 kHz |
| AES3               | 44.1, 48, 88.2, 96, 176.4, 192 kHz                             |
| Cartes d'extension | Dépendant du type de carte                                                                                     |

---

## 10.3 Routage and Processing

| Paramètre                              | Valeur                                              |
| -------------------------------------- | --------------------------------------------------- |
| Matrice de routage                     | 1,424×1,424                                         |
| Longueur du mot en cours de traitement | Point flottant 28 bits                              |
| Alignement de sortie                   | Toutes les sorties alignées sur l'heure et la phase |

---

## 10.4 Synchronisation

| Source                                      | Notes                |
| ------------------------------------------- | -------------------- |
| Horloge du mot                              | Entrée et sortie BNC |
| Rafale vidéo noire (VBB) | Input                |
| MADI                                        | Via port MADI        |
| AES3                                        | Via AES3 input       |

---

## 10.5 Emplacements d'extension

| Paramètre             | Valeur                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| Nombre d'emplacements | 8                                                                                                     |
| Cartes compatibles    | CARD-L8, CARD-M8, CARD-DA8, CARD-2SDI, CARD-8AES, CARD-2MADI, CARD-2MADI-SO, CARD-DANTE, CARD-RAVENNA |

---

## 10.6 Puissance

| Paramètre                  | Valeur      | Notes                            |
| -------------------------- | ----------- | -------------------------------- |
| Tension d'entrée           | AC 90-260 V | CNC nominale 100-240 V, 47-63 Hz |
| Consommation d'énergie max | 90 W        |                                  |

---

## 10.7 Mécanique

| Paramètre             | Valeur                                            |
| --------------------- | ------------------------------------------------- |
| Facteur de formulaire | Chevalet 19", 2RU (88,9 mm)    |
| Profondeur du châssis | 35 cm / 13.8"                     |
| Largeur du corps      | 43,5 cm / 17,2 cm                                 |
| Poids                 | 5.0 kg / 11.0 lbs |

---

## 10.8 Environnement

| Paramètre                     | Valeur                   |
| ----------------------------- | ------------------------ |
| Température de fonctionnement | 0-45 °C / 32-113 °F      |
| Humidité                      | 20–85%, non-condensation |

---

## 10.9 Conformité réglementaire

| Standard                                                                                                                                  | Périmètre d'application               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| EN 60950-1:2006 + A11:2009 + A1:2010 + A12:2011 + A2:2013 | Sécurité — Equipement informatique    |
| CISPR 32                                                                                                                                  | Emissions — équipement multimédia     |
| CISPR 35                                                                                                                                  | Immunité — équipement multimédia      |
| Partie 15 de la FCC, sous-partie B                                                                                                        | États-Unis — radiateurs involontaires |
| ICES-003                                                                                                                                  | Le Canada                             |

---

## Références croisées

- [App. A — Pints de connecteurs](./appa-connector-pinouts)
- [App. C — Dessins mécaniques](./appc-mechanical-drawings)
