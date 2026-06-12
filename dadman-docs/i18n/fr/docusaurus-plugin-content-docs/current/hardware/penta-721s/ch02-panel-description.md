---
title: "Chapitre 2 — Description du panneau"
sidebar_label: "Ch. 2 — Description du panneau"
sidebar_position: 3
---

# Chapitre 2 — Description du panneau

> **Produit :** Digital Audio Danemark Penta 721s

> **Comment utiliser ce chapitre :** Ce chapitre identifie chaque contrôle et connecteur du Penta 721s. Pour les niveaux de signal et les procédures de connexion, voir [Ch. 4 — Connexions de signaux](ch04-connections). Pour la signification de l'état de la LED, voir [Section 2.3](#23-led-state-reference).

---

## 2.1 panneau avant

![Penta 721s front panel](/img/panel-penta721s-front.png)
_Figure 2.1 — Penta 721s front panel. Les appels numérotés correspondent à la table de référence ci-dessous._

| Réf. | Étiquette  | Type de texte                             | Fonction                                                                                                                                                                                                              | Point |
| -------------------- | ---------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1                    | **Prêt**   | Indicateur LED (vert)  | L'unité a terminé la séquence de démarrage et est prête à fonctionner                                                                                                                                                 | Gris  |
| 2                    | **Erreur** | Indicateur LED (rouge) | Une erreur interne ou une erreur de configuration a été détectée                                                                                                                                                      | Gris  |
| 3                    | **PSU OK** | Indicateur LED (vert)  | L'alimentation principale fonctionne correctement. Sur les unités avec une UPS redondante, un deuxième indicateur de conformité de l'UPS confirme l'état de la fourniture de secours. | Gris  |

---

## 2.2 Panneau arrière

![Panneau arrière Penta 721s](/img/panel-penta721s-rear.png)
_Figure 2.2 — panneau arrière Penta 721s. Les appels numérotés correspondent à la table ci-dessous._

> **AVIS :** La disposition du panneau arrière du Penta 721 varie en fonction des cartes d'extension installées. Le complément de connecteur ci-dessous reflète une configuration typique. Vérifiez la disposition réelle de votre carte dans votre unité avant de vous connecter.

| Réf. | Étiquette                                                                   | Connecteur                              | Fonction                                                                                                                                                                                                          | Point   |
| -------------------- | --------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1                    | **Puissance (primaire)**                                 | Entrée IEC C14                          | Entrée(s) électrique(s) 100–240 V AC, 50/60 Hz, 0.45–0.20 A. Fuse: T1AH/250VAC.             | Sombre  |
| 2                    | **Alimentation (sauvegarde)**                            | Entrée IEC C14                          | Entrée d'alimentation réseau redondante (où elle est installée). Fournit une redondance de l'UPS à chaud.                                                      | Sombre  |
| 3                    | **AES/EBU I/O 1–4**                                                         | DB25 (Tascam pinout) | E/S audio numériques AES/EBU, canaux 1–4 (4 paires stéréo = 8 canaux).                                                                                                         | Orange  |
| 4                    | **AES/EBU I/O 5–8**                                                         | DB25 (Tascam pinout) | E/S audio numériques AES/EBU, canaux 5–8 (4 paires stéréo = 8 canaux).                                                                                                         | Orange  |
| 5                    | \*\*MADI DANS \*\*                                                          | BNC, 75 Ω.              | Entrée coaxiale MADI. Conformité AES10.                                                                                                                                           | Bleu    |
| 6                    | **MADI HOR**                                                                | BNC, 75 Ω.              | Sortie coaxiale MADI.                                                                                                                                                                             | Bleu    |
| 7                    | **I/O optique**                                                             | TOSLINK (optique)    | Optique MADI ou ADAT I/O (card-dependent).                                                                                                                                     | Cyan    |
| 8                    | **WC/VBB IN**                                                               | BNC, 75 Ω.              | Horloge Word ou Vidéo Black Burst.                                                                                                                                                                | Violet  |
| 9                    | **WC HAUT**                                                                 | BNC, 75 Ω.              | Sortie de l'horloge de mot.                                                                                                                                                                       | Violet  |
| 10                   | \*\*AES11 DANS \*\*                                                         | XLR (femelle)        | Entrée de signal audio de référence AES11.                                                                                                                                                        | Vert    |
| 11                   | **NET 1**                                                                   | RJ45 (1000BASE-T)    | Contrôle Ethernet et/ou réseau audio Dante, port 1.                                                                                                                                               | Ardoise |
| 12                   | **NET 2**                                                                   | RJ45 (1000BASE-T)    | Contrôle Ethernet et/ou réseau audio Dante, port 2.                                                                                                                                               | Ardoise |
| 13                   | **SLOT 1** _(typique : Dante/AES67 I/O)_ | 2× SFP                                  | Emplacement de carte d'extension 1. Lorsqu'elle est équipée d'une carte d'E/S Dante/AES67 : deux ports SFP pour les connexions de réseau optique ou cuivre Dante. | Cyan    |

---

## 2.3 LED de référence d'état

### État des LEDs

| LED                             | Couleur                             | Sens                                                                                            |
| ------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| Prêt                            | Vert (régulier)  | Séquence de démarrage terminée - unité prête pour le fonctionnement                             |
| Erreur                          | Rouge (constant) | Défaut interne ou erreur de configuration détectée                                              |
| PSU OK                          | Vert (régulier)  | Alimentation primaire fonctionnant correctement                                                 |
| PSU OK (2nd) | Vert (régulier)  | UPS redondante présente et fonctionnelle (unités avec double PSU uniquement) |

---

## Références croisées

- [Ch. 4 — Connexions Signal](ch04-connections) — Niveaux de signaux et procédures de connexion
- [Ch. 6 — Opération](ch06-operation) — Fonctionnement de contrôle et d'affichage
- [App. A — Épinglés de connecteurs](appa-connector-pinouts) — Affectations de broches
