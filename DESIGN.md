---
name: LAJA Agency
description: Une affiche de studio créatif, ancrée dans des contenus réels.
colors:
  paper: "#f7f7f2"
  ink: "#142735"
  muted: "#51606a"
  line: "#d6dad5"
  aqua: "#9fe8db"
  coral: "#ea6851"
  action-hover: "#294858"
typography:
  display:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(76px, 8.8vw, 126px)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-.025em"
  headline:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(42px, 5.4vw, 76px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  square: "0"
  message: "10px"
  pill: "30px"
  phone: "36px"
  circle: "50%"
spacing:
  gap-small: "12px"
  gap-medium: "20px"
  gap-large: "30px"
  section-compact: "65px"
  section-large: "90px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "17px 24px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "17px 24px"
---

# Design System: LAJA Agency

## Overview

**Creative North Star : « Une affiche de studio créatif »**

Titres condensés, papier clair, encre bleu nuit, aplats aqua et ponctuation corail composent une identité éditoriale franche. Le logo original et les photographies verticales ancrent cette présence dans le travail réel.

Caractéristiques : hiérarchie forte, contours nets, espaces généreux et interactions légères. Extraction de app/globals.css ; les compositions propres aux pages restent dans docs/SURFACE.md.

## Colors

- **Primary — ink** : textes, actions principales, sections sombres.
- **Secondary — aqua** : aplats, offre mise en avant, sélection.
- **Tertiary — coral** : ponctuation expressive et soulignement.
- **Neutral — paper, muted, line** : fond, explications et séparateurs.

**Règle des accents.** Garder l'encre pour la lecture longue. Les verts locaux des titres et les couleurs du simulateur ne remplacent pas cette palette.

## Typography

Barlow Condensed est déclaré sous le nom CSS Barlow (700) et DM Sans sous DM (400 et fichier 600 déclaré pour 600–800). Les polices locales utilisent font-display: swap. Le display porte les titres et certains prix ; DM porte le corps et les libellés. Paragraphes limités à (70ch), actions en (14px, 600). Les titres de pages emploient aussi (clamp(55px, 6.7vw, 96px)).

## Layout

Conteneur centré (1320px maximum, largeur disponible moins 104px). Header : (1420px maximum, retrait total 80px). Grilles souvent asymétriques et espacements de (10% à 12%). Les valeurs du frontmatter sont des espacements récurrents observés, pas une échelle CSS centralisée.

- Minimum (1600px) : respiration accrue du héros.
- Maximum (1100px) : retrait total du conteneur (64px), colonnes resserrées.
- Maximum (800px) : retrait total (40px), header (76px), menu mobile, majorité des compositions sur une colonne ; portfolio encore sur trois colonnes.
- Maximum (520px) : portfolio, parcours et formulaire sur une colonne ; champs en (16px) ; légendes du triptyque masquées.
- Maximum (440px) : contenu du héros sur une colonne, titre en (12.3vw).

Les déclarations finales priment sur les premières règles, notamment pour les médias verticaux.

## Elevation & Depth

Aplats et filets (1px) structurent les sections. Deux ombres ciblées : contact flottant (0 5px 20px #14273520) et téléphone (10px 22px 36px #14273518). Les offres et projets ne reçoivent pas d'ombre généralisée.

## Shapes

Angles droits pour boutons, champs et offres. Cercles pour avatars et commandes ; arrondis réservés aux messages, au téléphone et au contact flottant. Médias du portfolio au ratio vertical (311/421).

## Components

**Actions.** Variante principale pleine, claire et contour. Survol : déplacement (-2px) et transition (.2s) ; la variante claire devient aqua. Liens textuels soulignés avec décalage (6px).

**Navigation.** Header sticky, filet inférieur, soulignement animé (.2s) sur survol et route courante. Menu mobile à (800px).

**Projets et offres.** Séparateurs francs, offre sélectionnée en aqua, images verticales avec agrandissement au survol (1.035 sur .5s).

**Champs.** Fond transparent, bordure (#9aa79f), angles droits, padding (13px 14px). Erreur : fond (#f7dfd8), texte (#862818). Résultat préparé sur (#e3eee4), sans fausse confirmation d'envoi.

**Focus.** Boutons, liens et champs : contour (3px solid #167f70), décalage (5px). Le jeton ring (#187e70) reste distinct de ce contour global. Lien d'évitement visible au focus.

**Mouvement.** Messages : entrée (.4s, cubic-bezier(.16,1,.3,1)), déplacement (7px). Sous prefers-reduced-motion: reduce : défilement auto, animations et transitions désactivées ; transformations de survol du héros, des actions et des projets neutralisées.

## Do's and Don'ts

- **Do** préserver le contraste papier/encre, les titres condensés et les filets.
- **Do** vérifier clavier, mouvement réduit et écrans (375px), (390px), (430px).
- **Do** conserver le logo original et le statut explicite des démonstrations.
- **Don't** généraliser arrondis et ombres du simulateur aux sections.
- **Don't** inventer des preuves, résultats ou confirmations d'envoi.
