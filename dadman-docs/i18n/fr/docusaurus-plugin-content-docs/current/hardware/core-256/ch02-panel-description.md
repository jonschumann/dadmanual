---
title: "Chapitre 2 — Description du panneau"
sidebar_label: "Ch. 2 — Description du panneau"
sidebar_position: 3
---

# Chapitre 2 — Description du panneau

> **Produit :** Digital Audio Danemark Core 256

> **Comment utiliser ce chapitre :** Ce chapitre identifie chaque contrôle et connecteur du Core 256. Pour les niveaux de signal et les procédures de connexion, voir [Ch. 4 — Connexions de signaux](ch04-connections). Pour la signification de l'état de la LED, voir [Section 2.3](#23-led-state-reference).

---

## 2.1 panneau avant

![Core 256 front panel](/img/panel-core256-front.png)
_Figure 2.1 — Core 256 front panel._

> **AVIS :** Le panneau avant du noyau 256 ne fournit que des indicateurs de statut. Il n'y a pas de connecteur d'E/S audio sur le panneau avant.

| Réf. | Étiquette                   | Type de texte                             | Fonction                                                                                                                                 | Point                                                                                                                                                                                                                                                     |
| -------------------- | --------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **DAD**                     | Logo lumineux                             | Éclairage bleu; indique la mise sous tension                                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#2563EB'}}></span> |
| 2                    | **Puissance**               | Bouton poussoir lumineux                  | Lance la séquence de mise sous tension/arrêt contrôlé                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1F2937'}}></span> |
| 3                    | **Int.**    | Indicateur LED                            | Lit lorsque verrouillé sur la référence interne de l'horloge                                                                             | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#10B981'}}></span> |
| 4                    | **Ext.**    | Indicateur LED (vert)  | Lit lorsque verrouillé à la source de l'horloge externe                                                                                  | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0EA5E9'}}></span> |
| 5                    | **Erreur.** | Indicateur LED (rouge) | Lit sur erreur d'horloge ou erreur interne. Voir [Section 2.3](#23-led-state-reference). | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#F97316'}}></span> |

---

## 2.2 Panneau arrière

![Panneau arrière Core 256](/img/panel-core256-rear.png)
_Figure 2.2 — Panneau arrière Core 256. Les appels numérotés correspondent à la table ci-dessous._

Le panneau arrière Core 256 possède le même ensemble de connecteurs que le centre AX avec les différences suivantes :

| Différence               | AX au centre                                            | Noyau 256                                                        |
| ------------------------ | ------------------------------------------------------- | ---------------------------------------------------------------- |
| Électricité              | IEC C14 mains inlet (100–240 V AC)   | Connecteur canon 12 V DC (ASU externe requis) |
| Surveiller les sorties   | 2x stéréo TRS (MONITOR 1, MONITOR 2) | N'est pas présent                                                |
| Emplacements d'extension | 2× (ARRÊTE 1, EMPLACEMENT 2)         | 2× (SLOT 1, EMPLACEMENT 2) — même             |

Tous les autres connecteurs du panneau arrière (EXPANSION / baies SFP, NET 1/NET 2, THUNDERBOLT 1/2, WC/VBB IN, Les WC OUT, MADI IN, MADI OUT, ADAT OUT 1/2, ADAT IN 1/2) sont identiques au Centre AX. Reportez-vous à [Ch. 4 — Panneau arrière AX](../ax-center/ch04-connections) pour la fonction et la spécification de ces connecteurs.

| Réf. | Étiquette                                        | Connecteur                                           | Fonction                                                                                                                                                                                 | Point                                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                    | **Puissance**                                    | Canon DC 12V                                         | Entrée d'alimentation continu. Connectez l'alimentation externe 12 V fournie. Ne remplacez pas par une fourniture par une tierce partie. | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1E293B'}}></span> |
| 2                    | **EXPANSION**                                    | Baie de 2× SFP                                       | DADLink / extension optique MADI. Identique à AX Center.                                                                                                 | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0891B2'}}></span> |
| 3                    | **NET 1 / NET 2**                                | 2× RJ45 + baie SFP                                   | Réseau de contrôle Ethernet (100/1000BASE-T) + fibre SFP optionnelle. Identique à AX Center.                                          | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#456678'}}></span> |
| 4                    | **THUNDERBOLT 1** (upper)     | USB-C (Thunderbolt 3)             | Connexion Primaire Thunderbolt 3 à l'ordinateur.                                                                                                                         | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 5                    | **THUNDERBOLT 2** (inférieur) | USB-C (Thunderbolt 3)             | Bras de tonnerre 3 chaîne de marguerite / passthrough.                                                                                                                   | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#D97706'}}></span> |
| 6                    | **WC/VBB IN**                                    | BNC, 75 Ω.                           | Horloge Word ou Vidéo Black Burst.                                                                                                                                       | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 7                    | **WC HAUT**                                      | BNC, 75 Ω.                           | Sortie de l'horloge de mot.                                                                                                                                              | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#7C3AED'}}></span> |
| 8                    | \*\*MADI DANS \*\*                               | BNC, 75 Ω.                           | MADI input (coaxial). Conformité AES10.                                                                                               | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 9                    | **MADI HOR**                                     | BNC, 75 Ω.                           | MADI output (coaxial).                                                                                                                                | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#1D4ED8'}}></span> |
| 10                   | **ADAT OUT 1 / 2**                               | 2× TOSLINK (optique)              | Sorties de Lightpipe ADAT. Jusqu'à 8 ch à 44,1/48 kHz; 4 ch à 88,2/96 kHz (S/MUX).                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 11                   | **ADAT DANS 1 / 2**                              | 2× TOSLINK (optique)              | ADAT entrées Lightpipe Le même nombre de canaux que les sorties ADAT.                                                                                                    | <span style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',margin:'0 6px',background:'#0D9488'}}></span> |
| 12                   | **EMPLACEMENT 1 / EMPLACEMENT 2**                | Emplacement d'extension 2x (DB25) | Emplacements d'extension d'E/S analogiques. Chacune accepte une carte d'extension DAD 8 canaux.                                                          | —                                                                                                                                                                                                                                                         |

---

## 2.3 LED de référence d'état

### LED de référence de l'horloge

| Int. | Ext. | Err. | Sens                                                                             |
| -------------------- | -------------------- | -------------------- | -------------------------------------------------------------------------------- |
| ●                    | ○                    | ○                    | Verrouillé sur la référence interne de l'horloge — mode maître de l'horloge      |
| ○                    | ●                    | ○                    | Verrouillé sur la référence externe d'horloge — mode esclave de l'horloge        |
| ●                    | ●                    | ○                    | Acquisition du verrou vers la référence externe (transitoire) |
| ○                    | ○                    | ●                    | **Erreur de l'horloge** — impossible de verrouiller la référence sélectionnée    |
| ●                    | ○                    | ●                    | **Défaut interne** — Cycle d'alimentation ; Contactez le support si persistant   |
| Clignotement lent    | —                    | —                    | Mise à jour du firmware en cours — ne pas éteindre                               |

### États du bouton d'alimentation

| État            | Sens                                           |
| --------------- | ---------------------------------------------- |
| Désactivé       | Unité éteinte                                  |
| Stabilité       | Unité allumée, fonctionnement normal           |
| Impulsion lente | Séquence de mise en veille ou d'arrêt en cours |

---

## Références croisées

- [Ch. 4 — Connexions Signal](ch04-connections) — Niveaux de signaux et procédures de connexion
- [Ch. 6 — Opération](ch06-operation) — Fonctionnement de contrôle et d'affichage
- [App. A — Épinglés de connecteurs](appa-connector-pinouts) — Affectations de broches
