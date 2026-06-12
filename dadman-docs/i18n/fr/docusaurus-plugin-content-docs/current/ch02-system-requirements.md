---
id: ch02-pré-requis du système
title: "Chapitre 2 — Configuration requise"
sidebar_label: "Ch. 2 — Exigences système"
sidebar_position: 4
slug: /fr/system-requirements
---

# Chapitre 2 — Configuration requise et contenu des paquets

> **Document:** Manuel utilisateur DADman  
> **Version du logiciel couverte:** DADman v5.8.1.  
> **TB3 Driver version couverte :** Dernière — voir Centre de téléchargement à la prise en charge audio numérique.  
> **Statut du Chapitre:** Brouillon v0. — Minimum de RAM/stockage requis et contenu du paquet en attente de DAD engineering  
> **Dernière mise à jour :** Juin 2026

---

## Dans ce chapitre

| Section             | Couvertures                                   | Pertinent pour                                        |
| ------------------- | --------------------------------------------- | ----------------------------------------------------- |
| 2.1 | Configuration requise pour le logiciel DADman | Tous les utilisateurs                                 |
| 2.2 | DAD Thunderbolt 3 exigences de conducteur     | AX64, AX Center, Core 256, Avid MTRX série uniquement |
| 2.3 | Contenu du paquet                             | Tous les utilisateurs                                 |

---

## 2.1 Exigences du système DADman

### 2.1.1 Système d'exploitation et plate-forme

| Exigences                      | macOS                                                                                                                                                        | Fenêtres                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **Versions OS supportées**     | MacOS 10.13 Haute Sierra à 15 Sequoia (Intel et Apple Silicon)                                                            | Windows 10 (64-bit), Windows 11 (64-bit)         |
| **Architecture du processeur** | x86-64 (Intel) et ARM64 (Apple Silicon M1 et plus) — support natif de la version 5.5.0 | x86-64                                                                                 |
| **RAM minimale**               | [A confirmer par l'ingénierie DAD]                                                                       | [A confirmer par l'ingénierie DAD] |
| **Stockage minimum**           | [A confirmer par l'ingénierie DAD]                                                                       | [A confirmer par l'ingénierie DAD] |
| **Réseau**                     | Port Ethernet requis (voir Chapitre 3, Section 3.5) ; Wi-Fi non recommandé pour une utilisation en production             | Port Ethernet requis ; Wi-Fi non recommandé                                            |
| **Version actuelle**           | 5.8.2 version 2                                                                                                              | 5.8.2 version 2                                        |

> **AVIS — Prise en charge de l'héritage Windows :** DADman v5.7.0 était la version finale prenant en charge Windows 7 et Windows 8. Toutes les versions suivantes nécessitent Windows 10 ou Windows 11.

> **AVIS — Utilisateurs matériels Avid :** Si vous utilisez DADman avec un Avid MTRX, MTRX II, ou MTRX Studio, vous devez utiliser la version de DADman approuvée pour votre matériel Avid. Téléchargez cette version à partir de votre compte principal Avid, pas à partir du portail de support DAD. L'utilisation d'une version non approuvée peut causer des problèmes de compatibilité avec votre matériel Avid.

---

## 2.2 DAD Thunderbolt 3 Configuration requise

> **AVIS :** Cette section s'applique uniquement si votre matériel est un AX64, un AX Center, un Core 256 ou un Avid MTRX. Si votre matériel se connecte à l'ordinateur par Ethernet uniquement (par exemple, AX32, DX32R, Penta), le pilote Thunderbolt 3 n'est pas nécessaire.

| Exigences                           | macOS                                                                                     | Fenêtres                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Versions OS supportées**          | MacOS 11 Big Sur et plus tard (Intel et Apple Silicon)                 | Windows 10, Windows 11                                               |
| \*\*Version minimale de DADman \*\* | 5.6.7.1 ou ultérieur                      | 5.6.7.1 ou ultérieur |
| **Câble éclair de tonnerre**        | Câble Thunderbolt 3 ou USB-C évalué à 20 Gbps minimum                                     | Câble Thunderbolt 3 ou USB-C évalué à 20 Gbps minimum                |
| **Matériel compatible**             | AX64, AX Center, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio, Dynaudio Control 01 | AX64, AX Center, Core 256, Avid MTRX, Avid MTRX II, Avid MTRX Studio |

> **ATTENTION — Spécification du câble :** L'utilisation d'un câble qui n'est pas évalué à au moins 20 Gbps peut entraîner des connexions instables ou échouées. Les câbles standard USB-C qui ne sont pas certifiés Thunderbolt ne sont pas suffisants. Vérifiez votre câble avant l'installation.

---

## 2.3 Contenu du paquet

> **AVIS — Contenu du paquet en attente**  
> Le contenu du paquet matériel pour chaque produit doit être confirmé par l'ingénierie DAD. Une table pour chaque produit de la gamme compatible DADman sera insérée ici.

_[Placeholder : table de contenu pour chaque produit — à fournir par l'ingénierie DAD. Devrait inclure : unité de matériel, alimentation / câble IEC, oreilles de rack, vis, tout câble inclus, carte de documentation, tout logiciel inclus ou documentation de licence.]_

### 2.3.1 Logiciel

Le logiciel DADman et le pilote Thunderbolt 3 ne sont pas fournis sur un support physique. Ils sont téléchargés à partir du portail de support DAD ou de votre compte principal Avid. Voir [Chapitre 3, Section 3.2 — Obtention du logiciel].

---

## Références croisées

- **Chapitre 1 — Introduction :** Liste de matériels compatibles ; familles de matériels
- **Chapitre 3 — Installation :** Téléchargement et installation de DADman et du pilote Thunderbolt 3 ; configuration du réseau
- **Annexe A - Spécifications :** Caractéristiques techniques complètes par produit

---

_[En attente de l'ingénierie DAD :]_  
_— Exigences minimales de RAM et de stockage pour DADman sur macOS et Windows_  
_— Contenu des paquets pour chaque modèle matériel (Core 256, Centre AX, AX64, MOM, DAD Junior)_
