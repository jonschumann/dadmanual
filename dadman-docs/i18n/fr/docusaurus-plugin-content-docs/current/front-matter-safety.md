---
title: "Vêtement avant & Sécurité"
sidebar_label: "FM — matière première et sécurité"
sidebar_position: 2
---

# Avant - Avis de sécurité et conformité

> **Document:** DADman User Manual  
> **S'applique à:** DADman software and all compatible DAD / NTP Technology hardware  
> **Standards:** IEC/IEEE 82079-1:2019 · IEC 62368-1:2018 · UL 62368-1 · CSA C22. N° 62368-1  
> **État:** Brouillon v0. — Déclarations réglementaires en attente du DAD / NTP Technology engineering  
> **Dernière mise à jour :** Juin 2026

---

> **READ AND RETAIN THESE INSTRUCTIONS BEFORE OPERATING ANY EQUIPMENT.**  
> This section contains safety information that must be read, understood, and followed before installing, configuring, or operating any hardware controlled by DADman software. Le non-respect de ces instructions peut entraîner des décharges électriques, des incendies, des dommages auditifs, des dommages matériels ou une annulation de la garantie.

---

## Définitions de mot de signal FM.1

Les mots de signal suivants sont utilisés dans ce manuel pour indiquer la gravité des dangers. Elles apparaissent dans les avis formatés comme indiqué ci-dessous et doivent toujours être lues et observées.

| Mot de signal | Niveau de danger                                                | Sens                                                                                                                                                                                                                                                                            |
| ------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DANGER**    | Mort immédiate ou blessure grave                                | Ce mot de signal indique une situation imminente qui, si elle n'est pas évitée, **vont** entraîner la mort ou de graves blessures corporelles.                                                                                                                  |
| **ATTENTION** | Mort possible ou blessure grave                                 | Ce mot de signal indique une situation potentiellement dangereuse qui, si elle n'est pas évitée, **pourrait** entraîner une mort ou une blessure corporelle grave.                                                                                              |
| **ATTENTION** | Probabilité de blessure mineure ou d'endommagement d'équipement | Ce mot de signal indique une situation potentiellement dangereuse qui, si elle n'est pas évitée, **pourrait** entraîner des blessures corporelles mineures ou des dommages à l'équipement.                                                                      |
| \*\*AVIS \*\* | Sans risque de blessure                                         | Ce mot de signal indique des informations opérationnelles importantes qui, si elles ne sont pas suivies, peuvent entraîner une perte de données, mauvais fonctionnement ou dommage à l'équipement, mais ne présente pas de risque pour la sécurité personnelle. |

Les avis de sécurité **apparaissent toujours avant** l'action ou la situation à laquelle ils se rapportent.

---

## Symboles de sécurité FM.2

Les symboles suivants peuvent apparaître sur le matériel DAD / NTP Technologie, sur les alimentations, ou dans cette documentation. Chaque symbole est reproduit ici avec sa signification.

| Symbole                                                        | Référence IEC 60417             | Sens                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚠                                                              | IEC 60417-5036                  | **Attention générale / attention nécessaire.** Reportez-vous au texte qui l'accompagne pour connaître le danger précis.                                                                                                                                     |
| ⚡                                                              | IEC 60417-5031                  | **Risque de choc électrique.** Tension dangereuse à l'intérieur. Risque de choc électrique. Ne pas ouvrir.                                                                                                                  |
| ⏚                                                              | IEC 60417-5019                  | **Protection de la terre / du sol.** Ce terminal doit être connecté à un conducteur de terre protecteur.                                                                                                                                                    |
| **~**                                          | IEC 60417-5032                  | **Courant alternatif (AC).** Indique l'entrée d'alimentation du courant alternatif.                                                                                                                                                      |
| **⏻**                                                          | IEC 60417-5009                  | **Puissance / Veille.**                                                                                                                                                                                                                                                     |
| ♻                                                              | Directive DEEE                  | **Ne pas se débarrasser des déchets ménagers.** Ce produit doit être éliminé par le biais d'un système autorisé de recyclage ou de collecte des déchets. Voir [Section FM.8 — Disposition et WEEE](#fm8-disposal-and-weee). |
| **[RoHS]** | Directive européenne 2011/65/UE | **Respect de la LdSD.** Ce produit est conforme à la directive sur la restriction des substances dangereuses.                                                                                                                                               |

> **AVIS :** Si un symbole apparaît sur le matériel ou l'emballage et n'est pas listé dans le tableau ci-dessus, reportez-vous au guide d'installation fourni avec cette unité matérielle spécifique.

---

## Sécurité électrique FM.3

### FM.3.1 Puissance principale et mise à la terre

> **DANGER — Risque de choc électrique**  
> \*\*La connexion incorrecte du conducteur de mise à la terre de l'équipement entraîne un risque de décharges électriques. \* Ne modifiez pas la fiche fournie avec le produit. Si la prise ne tient pas la prise, demandez à un électricien qualifié d'installer une prise appropriée. N'utilisez pas un adaptateur qui défait la fonction du conducteur de mise à la terre de l'équipement. Si vous n'êtes pas certain que le produit est correctement mis à la terre, consultez un électricien qualifié avant d'exécuter l'équipement.

Tout le matériel propulsé par DAD / NTP Technology doit **être mis à la section**. En cas de dysfonctionnement ou de rupture, la mise à la terre fournit un chemin de moindre résistance au courant de défaillance, réduisant le risque de choc électrique. Chaque produit alimenté par les mains est fourni avec un câble d'alimentation muni d'un conducteur de mise à la terre de l'équipement et d'une prise de mise à la terre. La prise doit être insérée dans une prise correctement installée et mise à la terre conforme à tous les codes et ordonnances électriques locaux applicables.

> **AVERTISSEMENT**  
> Ne défaites pas l'objectif de sécurité de la prise de courant polarisée ou terrestre. Une prise polarisée a deux pales plus larges que l'autre. Une fiche de type sol a deux pales et une troisième pince de mise à la terre. La grande lame et le troisième prong sont fournis pour votre sécurité. Si la prise fournie ne correspond pas à votre prise, consultez un électricien pour le remplacement de la prise obsolète. Cette instruction s'applique dans toutes les régions et remplace toute pratique locale de commodité.

### Protection contre les cordons de puissance FM.3.2

> **AVERTISSEMENT**  
> Protège le cordon d'alimentation contre la marche ou le pincement, en particulier dans les prises, les prises de raccordement et au point où les cordons sortent du châssis de l'équipement. Un cordon d'alimentation endommagé doit être remplacé par un technicien d'entretien qualifié avant que l'équipement ne soit remis en service. N'utilisez pas d'équipement avec un cordon d'alimentation visiblement endommagé ou abradé.

### Déconnexion et éclairage FM.3.3

- Débranchez tous les équipements alimentés par les mains pendant les tempêtes de foudre.
- Débranchez tous les équipements alimentés par les mains quand ils seront inutilisés pendant une période prolongée.
- Lorsque vous déconnectez un cordon d'alimentation, saisissez fermement le corps de la prise — ne tirez pas sur le cordon lui-même.

### Périphériques FM.3.4 sur Ethernet (PoE)

Certains matériels DAD (y compris le module d'exploitation du moniteur MOM) sont alimentés par alimentation sur Ethernet (PoE) plutôt que par câble d'alimentation secteur. Ce qui suit s'applique aux appareils alimentés par PoE :

- Connectez les périphériques PoE uniquement aux commutateurs réseau ou aux injecteurs conformes à IEEE 802. af (15.4 W) or IEEE 802.3at (30 W) as appropriate for the device.
- Ne connectez pas les périphériques PoE à des ports réseau standard qui ne sont pas en mesure de fournir de l'alimentation PoE.
- L'alimentation PoE dans le commutateur ou l'injecteur de réseau est soumise aux instructions générales de sécurité réseau dans [Section FM.3.1](#fm31-mains-power-and-grounding).

---

## Sécurité environnementale FM.4

### Humidité et liquides FM.4.1

> **ATTENTION**  
> N'utilisez aucun matériel de technologie DAD / NTP près de l'eau ou dans les endroits où la condensation, la pluie ou les déversements de liquides peuvent se produire. Les entrées liquides peuvent causer des décharges électriques, des incendies ou des dommages irréparables à l'électronique.

- Évitez les liquides de tout l'équipement.
- Veillez à ce que les objets ne tombent pas et que les liquides ne soient pas renversés dans l'équipement par des ouvertures de ventilation ou des ouvertures de connecteur.
- Si le liquide a été renversé sur ou dans l'équipement, débranchez immédiatement l'alimentation du réseau et reportez-vous à la section FM. — Conditions de service](#fm6-service-conditions) avant de remettre l'équipement en service.

### Ventilation et chaleur FM.4.2

> **ATTENTION**  
> Cet équipement génère de la chaleur pendant le fonctionnement normal. L'obstruction des ouvertures de ventilation peut causer une surchauffe, un incendie ou une défaillance prématurée des composants internes.

- Ne bloquez pas les ouvertures de ventilation. Installez l'équipement conformément aux instructions du fabricant et aux autorisations spécifiées dans le guide d'installation de votre modèle matériel.
- N'installez pas d'équipement à proximité de sources de chaleur telles que les radiateurs, les registres de chaleur, les poêles ou tout autre appareil, y compris les amplificateurs électriques, qui produisent de la chaleur importante.
- Le produit doit être localisé de manière à ce que sa position n'interfère pas avec sa ventilation appropriée.
- Observez les écarts minimums de rack et la plage de température de fonctionnement spécifiée dans les spécifications techniques de votre matériel. En général, le matériel DAD rack nécessite un minimum de 1U d'espace libre au-dessus et au-dessous de l'unité, sauf indication contraire.

### Stabilité mécanique FM.4.3

> **PRÉCAUTION**  
> L'équipement qui tombe peut causer des blessures corporelles et des dommages matériels graves. Lors du montage du matériel sur un support ou sur un chariot, assurez-vous que la structure de montage est stable, évalué à la charge et correctement fixé avant de libérer l'équipement.

- N'utiliser que des boîtiers de rack, des stands, des chariots ou des supports de montage spécifiés par le fabricant ou fournis avec l'équipement.
- Lorsque vous utilisez un chariot d'équipement à roues, faites preuve de prudence lorsque vous déplacez le chariot et la combinaison d'équipement pour éviter les embouts.
- Les unités de montage en rack doivent être fixées avec toutes les vis de montage en rack fournies avant de fonctionner.

---

## Sécurité auditive FM.5

> **AVERTISSEMENT – Risque de dommages auditifs permanents**  
> Le logiciel DADman contrôle les niveaux de sortie analogiques et numériques du matériel connecté. Cet équipement, qu'il soit utilisé seul ou en combinaison avec des amplificateurs de puissance et des haut-parleurs ou des écouteurs, est capable de produire des niveaux de pression sonore (SPL) qui peuvent causer des **pertes auditives permanentes**.

- Ne pas fonctionner à des niveaux de sortie qui ne sont pas à l'aise. En cas de doute sur des niveaux de surveillance sûrs, consulter les conseils professionnels sur les limites SPL pour une écoute prolongée (une référence commune de 85 dB SPL est un niveau de sécurité continu pour la surveillance professionnelle).
- Réduire les niveaux de sortie avant de connecter de nouvelles sources de signaux, de modifier le routage ou de recharger les fichiers de configuration.
- Si vous rencontrez une perte auditive, une teinte (sonne dans les oreilles) ou une sensibilité accrue au son après une séance d'écoute, consultez rapidement un audiologue. Il peut s'agir d'indicateurs précoces de dommages auditifs dus au bruit.

> **AVIS :** Le niveau de sortie de DADman contrôle et surveille la fonction de référence du profil (le bouton **Ref**) est spécifiquement conçu pour permettre de définir et de verrouiller les niveaux de sortie aux valeurs SPL calibrées. L'utilisation de ces fonctionnalités pour une gestion rigoureuse de la structure des gains réduit considérablement le risque d'exposition involontaire à une SPL dangereuse. Voir [Chapitre 8 — Fonctionnalités avancées, Section 8.X — Surveiller les profils et les niveaux de référence] pour obtenir des conseils.

---

## Conditions de service FM.6

> **ATTENTION**  
> Il n'y a aucune pièce utilisable dans le matériel de la technologie DAD / NTP. L'ouverture du boîtier expose des tensions dangereuses. Reportez-vous à un personnel de service qualifié, au-delà de ce qui est décrit dans le présent manuel.

Le matériel doit être retiré du service et fait référence au personnel qualifié lorsque l'une des conditions suivantes existe:

1. Le cordon d'alimentation ou la prise d'alimentation du secteur a été physiquement endommagé.
2. Les objets sont tombés dans l’équipement, ou le liquide a été renversé dans l’équipement.
3. L'équipement a été exposé à la pluie ou à l'humidité.
4. L'équipement ne semble pas fonctionner normalement ou ne présente pas de changement marqué dans le rendement.
5. L'équipement a été lâché ou le boîtier a été physiquement endommagé.

N'essayez pas d'entretenir le produit au-delà des procédures de maintenance décrites dans le chapitre 10 — Maintenance du manuel. Un service non autorisé annulera la garantie et pourrait créer des risques supplémentaires pour la sécurité.

> **AVERTISSEMENT — Les pièces déplacées**  
> Certaines unités de porte-bagages DAD (y compris l'AX32) contiennent des ventilateurs de refroidissement avec des **pièces mobiles dangereuses** accessibles lorsque le capot de l'unité est enlevé. Gardez les doigts et toutes les autres parties du corps à l'écart des assemblages internes de ventilateurs en tout temps.

---

## Logiciel et sécurité des données FM.7

Les directives de niveau AVIS suivantes s'appliquent à l'utilisation du logiciel DADman et n'impliquent pas de risques pour la sécurité personnelle. Le non-respect de ces pratiques peut entraîner une perte de données de configuration.

> **AVIS — Enregistrer la configuration avant les mises à jour du firmware**  
> Le microprogramme met à jour tous les paramètres stockés sur l'unité matérielle aux valeurs par défaut d'usine. Les configurations de routage, les paramètres de gain, les profils de moniteur, les étiquettes de canaux et tous les autres paramètres stockés seront perdus sauf si sauvegardés d'abord. Sauvegardez toujours un fichier de paramètres DADman (`.dms`) en utilisant **Fichier > Enregistrer sous** avant de lancer une mise à jour du firmware. Voir [Chapitre 3, Section 3.X — Mettre à jour DADman et Firmware] pour la procédure complète.

> **AVIS — Les sauvegardes de fichiers de configuration**  
> DADman Settings Files (`.dms`) et Monitor Profile Files (`.dmprof`) représentent un investissement significatif dans la configuration. Maintenir des sauvegardes régulières de ces fichiers à un emplacement distinct de l'ordinateur fonctionnant sous DADman (par exemple, stockage nuagique ou disque externe). Ces fichiers sont le seul moyen de récupérer votre configuration après une réinitialisation d'usine.

> **AVIS — Sécurité du réseau**  
> DADman communique avec des unités matérielles sur le réseau sans authentification par défaut. Dans les environnements avec de multiples utilisateurs ou accès au réseau en dehors du studio, placez du matériel contrôlé par DADman sur un dédié, segment réseau isolé pour empêcher l'accès non autorisé à la configuration de l'unité.

---

## FM.8 Disposation et WEEE

Les produits de la technologie DAD / NTP sont soumis à la Directive Européenne sur les DEEE (Waste Electrical and Electronic Equipment, Directive 2012/19/EU) et aux réglementations nationales et régionales équivalentes.

> **Ne pas se débarrasser de cet équipement dans des déchets municipaux non triés (déchets ménagers/refus général).**

Les équipements électriques et électroniques doivent être collectés et éliminés séparément par des points de collecte autorisés ou retournés à un distributeur autorisé ou au fabricant pour un recyclage approprié. Contactez votre autorité locale, votre service de gestion des déchets ou la technologie DAD / NTP pour obtenir des conseils en matière d'élimination.

Le symbole du bac à roue croisée (♻️ avec un X) imprimé ou apposé sur le produit l'identifie comme étant soumis à des exigences de collecte distinctes.

---

## Conformité réglementaire FM.9

> **AVIS — Déclarations en attente**  
> Les déclarations de conformité réglementaires dans cette section sont fournies en tant que placeholders. Les déclarations finales, y compris les versions applicables de la directive, ont notifié les informations corporelles (le cas échéant), et les informations de représentation autorisées, doivent être confirmées et insérées par le DAD / NTP Technology engineering et légales avant publication.

### Déclaration de conformité FM.9.1 CE (Union européenne)

DAD / NTP Technology déclare que les produits matériels contrôlés par DADman sont conformes aux exigences des directives suivantes de l'Union européenne:

- **Directive sur les équipements radio (RED) 2014/53/EU** — _[Applicable aux produits avec radio/Wi-Fi; confirme l'applicabilité par produit]_
- **Directive de basse tension (LVD) 2014/35/EU** — Applicable au matériel alimenté par des mains
- **Directive sur la compatibilité électromagnétique (CEM) 2014/30/UE**
- **Directive RoHS 2011/65/EU** — Restriction des substances dangereuses
- **Directive DEEE 2012/19/EU** — Déchets d'équipements électriques et électroniques

_[Document complet de déclaration de conformité à insérer ici. Doit inclure : nom(s) de produit(s), numéro(s) de modèle, signataire autorisé, date et liste des normes harmonisées appliquées (EN 55032, EN 55035, EN IEC 62368-1, etc.).]_

**Authorised Representative (EU):**  
NTP Technology A/S  
Nybrovej 99, DK-2820 Gentofte, Denmark  
Email: info@digitalaudio.dk

### FM.9.2 Déclaration de conformité de la FCC (États-Unis)

_[Déclaration de la FCC à insérer par l'ingénierie DAD. Doit inclure : ID FCC (le cas échéant), nom et adresse de la partie responsable, et déclaration de conformité pour 47 CFR Partie 15.]_

Ce dispositif est conforme à la partie 15 des règles de la FCC. L'opération est soumise aux deux conditions suivantes :

1. Cet appareil ne peut pas causer d'interférences nuisibles.
2. Cet appareil doit accepter toute interférence reçue, y compris les interférences qui peuvent causer des opérations non désirées.

> **AVIS :** Les modifications ou modifications qui ne sont pas expressément approuvées par NTP Technology A/S pourraient annuler l'autorisation de l'utilisateur de faire fonctionner l'équipement.

### FM.9.3 ICES-003 (Canada)

_[Déclaration de conformité ICES-003 d'Industrie Canada à insérer.]_

Cet appareil numérique de classe B est conforme à la norme canadienne ICES-003.

### FM.9.4 Conformité RoHS

Le matériel de technologie DAD / NTP est fabriqué conformément à la directive européenne 2011/65/UE (RoHS 2) et à sa modification de la directive 2015/863/UE (RoHS 3), qui restreignent l'utilisation de substances dangereuses, y compris le plomb, mercure, cadmium, chrome hexavalent, biphényles polybromés (PBB), éther polybromés de diphényle (PBDE) et quatre phtalates dans les équipements électriques et électroniques.

_[Certificat de conformité RoHS ou référence de déclaration à insérer.]_

### FM.9.5 UK Conformity Assissed (UKCA) — Grande-Bretagne

_[Déclaration UKCA à insérer pour les produits mis sur le marché après le Brexit, le cas échéant.]_

---

## Mentions légales FM.10

### Droit d'auteur

Technologie NTP 2026 A/S. Tous droits réservés.

DAD — Digital Audio Danemark est une marque déposée de NTP Technology A/S. Toutes les autres marques de commerce sont la propriété de leurs propriétaires respectifs.

Aucune partie de ce manuel ne peut être reproduite, transmise ou traduite sous quelque forme ou par quelque moyen que ce soit — électronique, mécanique, photocopie, enregistrement ou autre — sans la permission écrite préalable de NTP Technology A/S.

### Clause de non-responsabilité

NTP Technology A/S se réserve le droit d'apporter des modifications aux produits matériels et aux logiciels sans préavis. Les caractéristiques et spécifications du produit décrites dans ce manuel peuvent être modifiées.

NTP Technology A/S ne sera pas responsable des erreurs ou omissions techniques ou éditoriales contenues dans les présentes, ni pour les dommages accessoires ou consécutifs résultant de l'ameublement, de la performance ou de l'utilisation du présent manuel ou des produits qu'il décrits.

### Contacter

**NTP Technology A/S**  
Nybrovej 99  
DK-2820 Gentofte  
Denmark

E-mail: info@digitalaudio.dk  
Web: www.digitalaudio.dk  
Support: www.digitalaudiosupport.com

---

## Résumé des avis de sécurité

Par IEC/IEEE 82079-1:2019, tous les avis DANGER et AVERTISSEMENT de ce document sont recueillis ici pour consultation rapide. Les avis individuels apparaissent également dans le contexte des chapitres où le danger pertinent est applicable.

| Localisation                                   | Mot de signal | Summary                                                                                   |
| ---------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------- |
| Section FM.3.1 | **DANGER**    | Mise à la terre incorrecte - risque de choc électrique                                    |
| Section FM.3.1 | **ATTENTION** | Ne défaites pas l'objectif de sécurité de la prise d'alimentation                         |
| Section FM.3.2 | **ATTENTION** | Protéger et ne pas fonctionner avec un cordon d'alimentation endommagé                    |
| Section FM.4.1 | **ATTENTION** | Ne pas utiliser près de l'eau - risque de choc électrique et d'incendie                   |
| Section FM.4.2 | **ATTENTION** | Ne pas entraver la ventilation - risque d'incendie et de surchauffe                       |
| Section FM.5                   | **ATTENTION** | Niveaux de sortie capables de causer une perte auditive permanente                        |
| Section FM.6                   | **ATTENTION** | Pas de pièces utilisables — tensions dangereuses à l'intérieur                            |
| Section FM.6                   | **ATTENTION** | Pièces mobiles dangereuses (AX32 et unités avec ventilateurs internes) |

---

_[En attente de DAD / NTP Technologie légale et d'ingénierie :]_  
_— Texte et signataire final CE de la déclaration de conformité_  
_— Numéro d'identification FCC et déclarations de conformité par modèle de produit_  
_— Déclaration ICES-003_  
_— Déclaration UKCA (le cas échéant)_  
_— Référence du certificat RoHS_  
_— Confirmation des normes applicables (série EN)_
