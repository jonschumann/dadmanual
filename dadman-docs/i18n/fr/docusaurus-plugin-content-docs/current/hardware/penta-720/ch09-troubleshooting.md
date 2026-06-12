---
title: "Chapitre 9 — Dépannage"
sidebar_label: "Ch. 9 — Dépannage"
sidebar_position: 10
---

# Chapitre 9 — Dépannage

> **Produit :** Penta 720 Digital Audio Danemark

> Si vous ne pouvez pas résoudre un problème en utilisant ce chapitre, contactez le support de Digital Audio Danemark à [digitalaudio.dk/support](https://digitalaudio.dk/support). Lorsque vous contactez le support, ayez le numéro de série de l'unité, la version du microprogramme et la version DADman disponible.

---

## 9.1 Référence Rapide

| Symptôme                               | Première vérification                                                  | Référence                                                   |
| -------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| Aucune alimentation / unité ne démarre | Contrôler le câble d'alimentation et la prise secteur. | [Ch. 3 — Installation](./ch03-installation) |

\| Unité non découverte par DADman | Vérifier la connexion du câble et du commutateur Ethernet. Vérifiez que le NIC hôte est sur le même sous-réseau. Vérifier les paramètres QoS sur le commutateur géré. | [Ch. 3 — Installation](./ch03-installation#34-network-setup) |
\| Audiodropouts sur Ethernet | Interrupteur réseau dédié requis — ne partagez pas avec le trafic informatique. Vérifier la configuration du commutateur QoS. | [Ch. 3 — Installation](./ch03-installation) |
\| Erreur horloge (Err. LED lit) | Vérifiez que la source de référence externe est présente et à la bonne fréquence d'échantillon. Vérifier la fin de l'horloge de mots. | [Ch. 5 — Clocking](./ch05-clocking) |
\| Silence audio sur tous les canaux | Vérifier le routage en DADman. Vérifier la session de correspondances au taux d'échantillon. Vérifier les connexions physiques. | [Ch. 4 — Connexion](./ch04-connections) |
\| Mise à jour du firmware échouée | Ne pas éteindre. Attendez 5 minutes pour que l'unité expire. Contactez le support DAD si l'unité ne redémarre pas. | [Ch. 8 — Entretien](./ch08-maintenance) |

---

## 9.2 Dépannage détaillé

### 9.2.1 L'unité ne fonctionne pas

_[Placeholder — diagnostic étape par étape pour les conditions d'aucune alimentation.]_

1. Confirmez que la sortie réseau est en direct à l'aide d'un appareil de bonne qualité.
2. Vérifiez que le câble d'alimentation IEC est entièrement installé aux deux extrémités.
3. Vérifiez que le bouton d'alimentation du panneau avant fonctionne (appuyez et maintenez 2 secondes).
4. Si l'unité ne démarre toujours pas, contactez le support DAD.

---

### 9.2.2 Unité non détectée dans DADman

_[Placeholder — arbre de décision pour l'échec de la détection.]_

---

### 9.2.3 Erreurs d'horloge

_[Placeholder — procédure systématique de dépannage de l'horloge.]_

---

### 9.2.4 Problèmes Audio

_[Placeholder — silence, distorsion, bruit, flux de diagnostique de swap.]_

---

## Références croisées

- [Ch. 2 — Description du panneau](./ch02-panel-description) — Référence d'état LED
- [Ch. 5 — Horloge](./ch05-clocking)
- [Manuel de l'utilisateur DADman — Ch. 9](/troubleshooting) — dépannage côté logiciel
