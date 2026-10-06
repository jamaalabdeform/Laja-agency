---
name: LAJA Agency
description: Un studio vidéo bleu nuit, ancrée dans des contenus réels.
colors:
  paper: "#f7f7f2"
  ink: "#142735"
  muted: "#51606a"
  line: "#d6dad5"
  aqua: "#9fe8db"
  coral: "#ea6851"
  action-hover: "#294858"
  studio-line: "#3e535f"
  studio-muted: "#bfd0ce"
  film-surface: "#203a48"
  support-surface: "#dde8de"
typography:
  display:
    fontFamily: 'Barlow, "Arial Narrow", sans-serif'
    fontSize: "clamp(64px, 7.3vw, 104px)"
    fontWeight: 700
    lineHeight: 0.98
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

**Creative North Star : « Un studio vidéo bleu nuit »**

Direction retenue le 5 octobre 2026 : titres condensés, surfaces bleu nuit, accents aqua et trois films réels au premier plan. Logo original conservé, sections papier pour les explications et offres.

Caractéristiques : hiérarchie forte, contours nets, espaces généreux et interactions légères. Extraction de app/globals.css ; les compositions propres aux pages restent dans docs/SURFACE.md.

## Colors

- **Primary — ink** : fond du héros, des films, du header et du footer ; textes et actions sur papier.
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

Les règles studio finales remplacent les adaptations du héros et du portfolio historique ci-dessus : films en trois colonnes, gap (30px), écrans (9/16). À (1000px), gap (20px), aparté du héros masqué. À (800px), films sur une colonne de (460px) maximum, gap (42px), hauteur écran limitée à (690px) ; héros (clamp(54px, 9vw, 76px)). À (480px), héros (13vw), commande lecture (62px), supports et formation en une colonne. Padding héros (64px 0 56px), films (24px 0 72px), équipe (90px 0 80px).

## Elevation & Depth

Aplats et filets (1px) structurent les sections. Deux ombres ciblées : contact flottant (0 5px 20px #14273520) et téléphone (10px 22px 36px #14273518). Les offres et projets ne reçoivent pas d'ombre généralisée.

## Shapes

Angles droits pour boutons, champs et offres. Cercles pour avatars et commandes ; arrondis réservés aux messages, au téléphone et au contact flottant. Médias du portfolio au ratio vertical (311/421).

## Components

**Actions.** Variante principale pleine, claire et contour. Survol : déplacement (-2px) et transition (.2s) ; la variante claire devient aqua. Liens textuels soulignés avec décalage (6px).

**Navigation.** Header sticky bleu nuit, texte papier, filet studio-line, soulignement animé (.2s) sur survol et route courante. Menu mobile à (800px).

**Films.** Titres section (clamp(36px, 4vw, 56px)), line-height (1.05) ; titres film (34px), line-height (1.12). Écrans droits (9/16), fond film-surface, lecture ronde papier/encre (70px). Un clic charge le lecteur Instagram natif ; un seul actif, fermeture vers couverture, lien direct et information cookies disponibles. Aucun autoplay du site. RIVA est une capture verticale autonome ; BAO et Forum recadrent des captures Instagram complètes en CSS : width (379.822%), left (-87.8338%), top (-14.3207%). Coordonnées propres aux sources actuelles. Zoom RIVA (1.025) sur (.45s) ; aucun zoom des captures recadrées. Reduced-motion désactive zoom et transition.

**Projets et offres.** Séparateurs francs, offre sélectionnée en aqua, images verticales avec agrandissement au survol (1.035 sur .5s).

**Champs.** Fond transparent, bordure (#9aa79f), angles droits, padding (13px 14px). Erreur : fond (#f7dfd8), texte (#862818). Résultat préparé sur (#e3eee4), sans fausse confirmation d'envoi.

**Focus.** La commande film utilise un contour aqua de (4px), décalage (-6px), pour rester visible dans le cadre rogné. Boutons, liens et champs : contour (3px solid #167f70), décalage (5px). Le jeton ring (#187e70) reste distinct de ce contour global. Lien d'évitement visible au focus.

**Mouvement.** Messages : entrée (.4s, cubic-bezier(.16,1,.3,1)), déplacement (7px). Sous prefers-reduced-motion: reduce : défilement auto, animations et transitions désactivées ; transformations de survol du héros, des actions et des projets neutralisées.

## Do's and Don'ts

- **Do** préserver le contraste papier/encre, les titres condensés et les filets.
- **Do** vérifier clavier, mouvement réduit et écrans (375px), (390px), (430px).
- **Do** conserver le logo original et le statut explicite des démonstrations.
- **Don't** généraliser arrondis et ombres du simulateur aux sections.
- **Don't** inventer des preuves, résultats ou confirmations d'envoi.

## Hero — correction du 6 octobre 2026
Le hero retrouve la composition claire d’origine : titre condensé, texte à gauche et trois captures verticales décalées à droite. RIVA, BAO et Forum ouvrent chacun leur propre Reel. Les lecteurs intégrés restent sur Réalisations.
