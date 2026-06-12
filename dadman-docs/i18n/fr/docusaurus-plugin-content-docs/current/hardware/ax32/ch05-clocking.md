---
title: "Chapitre 5 — Horloge et synchronisation"
sidebar_label: "Ch. 5 — Horloge"
sidebar_position: 6
---

# Chapitre 5 — Horloge et synchronisation

> **Produit :** Digital Audio Danemark AX32  
> **REF :** AX32-BASE2

---

## 5.1 Aperçu de la synchronisation

_[Placeholder — vue d'ensemble conceptuelle de l'horloge dans un système DAD. Synchronisation de la référence, rôles maîtres/esclave et comment l'AX32 s'adapte.]_

---

## 5.2 Sources de synchronisation disponibles

| Source                | Connecteur     | Notes                                                                                         |
| --------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| Interne               | —              | AX32 agit en tant que maître de synchronisation                                               |
| Horloge du mot        | WC BNC EN      | Saisie de l'horloge de mot externe                                                            |
| MADI                  | BNC MADI EN    | Synchroniser depuis le flux MADI entrant                                                      |
| Éclair de tonnerre    | Via l'hôte TB3 | Synchroniser via le pilote DAD Thunderbolt                                                    |
| Via carte d'extension | —              | Les cartes Dante, Ravenna, MADI-SO fournissent des sources de synchronisation supplémentaires |

---

## 5.3 Configuration de la source de synchronisation

_[Placeholder — procédure étape par étape pour sélectionner la source de synchronisation dans DADman.]_

---

## Références croisées

- [Ch. 4 — Connexions de signaux](./ch04-connections) — Connexion de l'horloge de mot
- [Ch. 7 — Intégration DADman ](./ch07-dadman-integration) — Configuration de la synchronisation dans le logiciel
