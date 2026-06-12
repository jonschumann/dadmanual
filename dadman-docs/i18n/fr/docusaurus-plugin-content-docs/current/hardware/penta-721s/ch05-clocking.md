---
title: "Chapitre 5 — Horloge et synchronisation"
sidebar_label: "Ch. 5 — Horloge"
sidebar_position: 6
---

# Chapitre 5 — Horloge et synchronisation

> **Produit :** Digital Audio Danemark Penta 721s

---

## Aperçu 5.1

Le Penta 721s prend en charge plusieurs sources de référence d'horloge. La source de l'horloge active est sélectionnée dans DADman. Un seul appareil dans une session DADman devrait être le maître de l'horloge ; tous les autres appareils devraient l'esclaver.

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

## 5.4 Référence AES11

_[Placeholder — horloge depuis MADI embed ou signal de référence AES11.]_

---

## 5.5 Network PTP (IEEE 1588)

_[Placeholder — horloge depuis ADAT embed ou source PTP du réseau.]_

---

## 5.6 Convertisseur d'échantillonnage intégré (SRC)

_[Placeholder — Penta 721s seulement. Décrire les capacités du SCR, les conversions de taux pris en charge et la configuration dans DADman.]_

Le Penta 721 comprend un SRC intégré qui permet de connecter des flux audio fonctionnant à différents débits d'échantillon. Cela lui permet de fonctionner comme un périphérique limitrophe entre un réseau audio 48 kHz et une session 96 kHz.

---

## 5.7 Configuration de l'horloge dans DADman

_[Placeholder — comment sélectionner la source de l'horloge et vérifier le verrou dans DADman. Référence croisée DADman manuel Ch. 5.]_

1. Dans DADman, ouvrez la Configuration de l'appareil pour le Penta 721s.
2. Naviguez vers la section **Horloge**.
3. Sélectionnez la source de l'horloge désirée dans la liste déroulante.
4. Vérifiez que le panneau avant **Ext.** LED s'allume (pour référence externe) ou **Int.** LED (pour intérieur).

---

## Références croisées

- [Ch. 2 — Description du panneau](./ch02-panel-description) — états LED de l'horloge
- [Manuel de l'utilisateur DADman — Ch. 5 — Signal Flow](/signal-flow) — topologie de l'horloge système
