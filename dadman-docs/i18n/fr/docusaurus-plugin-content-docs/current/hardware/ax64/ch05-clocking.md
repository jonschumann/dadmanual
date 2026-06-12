---
title: "Chapitre 5 — Horloge et synchronisation"
sidebar_label: "Ch. 5 — Horloge"
sidebar_position: 6
---

# Chapitre 5 — Horloge et synchronisation

> **Produit :** Digital Audio Danemark AX64

---

## Aperçu 5.1

L'AX64 prend en charge les sources de référence multi-horloges. La source de l'horloge active est sélectionnée dans DADman. Un seul appareil dans une session DADman devrait être le maître de l'horloge ; tous les autres appareils devraient l'esclaver.

---

## 5.2 Horloge interne

_[Placeholder — décrit les spécifications internes de l'oscillateur de cristal, la précision et quand utiliser l'horloge interne.]_

> **REMARQUE:** Utilisez l'horloge interne uniquement si aucune référence externe n'est disponible, ou si cette unité est le maître d'horloge désigné pour l'ensemble du système.

---

## 5.3 Horloge de mot externe

_[Placeholder — spécification d'entrée de l'horloge de mot, taux acceptés, terminaison BNC.]_

| Format accepté                                                     | Connecteur                         |
| ------------------------------------------------------------------ | ---------------------------------- |
| Horloge du mot (1× fréquence d'échantillonnage) | BNC (WC/VBB IN) |
| 256× horloge mot                                                   | BNC (WC/VBB IN) |
| Rafale vidéo noire                                                 | BNC (WC/VBB IN) |

---

## 5.4 Horloge embarquée MADI

_[Placeholder — horloge depuis MADI embed ou signal de référence AES11.]_

---

## 5.5 ADAT Embedded Clock

_[Placeholder — horloge depuis ADAT embed ou source PTP du réseau.]_

---

## 5.6 Configuration de l'horloge dans DADman

_[Placeholder — comment sélectionner la source de l'horloge et vérifier le verrou dans DADman. Référence croisée DADman manuel Ch. 5.]_

1. Dans DADman, ouvrez la Configuration des périphériques pour l'AX64.
2. Naviguez vers la section **Horloge**.
3. Sélectionnez la source de l'horloge désirée dans la liste déroulante.
4. Vérifiez que le panneau avant **Ext.** LED s'allume (pour référence externe) ou **Int.** LED (pour intérieur).

---

## Références croisées

- [Ch. 2 — Description du panneau](./ch02-panel-description) — états LED de l'horloge
- [Manuel de l'utilisateur DADman — Ch. 5 — Signal Flow](/signal-flow) — topologie de l'horloge système
