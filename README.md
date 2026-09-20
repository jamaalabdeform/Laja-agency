# LAJA Agency
Site vitrine React / TypeScript construit sur le socle Sites compatible Next.js (Vinext).
## Développement
Node >= 22.13 (version LTS recommandée). npm ci, puis npm run dev. Le serveur utilise le port 5173.
npm run build pour produire le Worker Cloudflare ; npm run lint et npx tsc --noEmit pour vérifier le code.
Sur cette machine, le lanceur npm Windows nécessite parfois l'appel direct à C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js.
## Éditer les contenus
data/services.ts : services et méthode.
data/projects.ts : références, secteurs et champs futurs problem, solution, results, videos, photos.
data/sectors.ts : parcours sectoriels.
data/site.ts : nom, URL, liens et showreel.
components/laja : composants par fonction ; app : pages.
docs/PROMPT-AMELIORE.md : brief consolidé.
## Médias
public/brand/logo.jpg : logo exact fourni, sans retouche.
public/media/laja/instagram-grid.png : capture utilisateur, cadrée par CSS. Pas de vidéo ni de lecture fictive. Les légendes identifient des aperçus Instagram.
Ajouter les vidéos originales dans public/media/laja puis définir site.showreel. Prévoir un poster, une version légère mobile et les sous-titres showreel-fr.vtt.
Les variantes logo-light, logo-dark et le logo vectoriel n'ont pas été fournis : ne pas les inventer. Le favicon reprend le logo existant.
Avant ouverture publique, vérifier les droits de diffusion des médias et remplacer les captures par les fichiers originaux.
## Contact, WhatsApp et paiements
Copier .env.example vers .env.local et renseigner uniquement les valeurs confirmées.
NEXT_PUBLIC_WHATSAPP_NUMBER : numéro international, chiffres seuls. Valeur confirmée par l’utilisateur : 33616592363. La configuration data/site.ts utilise ce numéro par défaut. Une valeur explicitement vide désactive le lien et renvoie vers contact.
NEXT_PUBLIC_CONTACT_EMAIL : adresse de contact facultative.
NEXT_PUBLIC_FORM_ENDPOINT : endpoint HTTPS acceptant un POST JSON. Sans endpoint, aucun envoi automatique : le formulaire prépare un message à ouvrir dans WhatsApp puis à envoyer manuellement. Avec endpoint, seules les réponses HTTP 2xx sont considérées comme un envoi réussi. Le backend doit valider les champs, le consentement, limiter les abus et gérer la conservation ; aucun backend n'est créé par cette version.
NEXT_PUBLIC_SITE_CHECKOUT_URL et NEXT_PUBLIC_JAWABOT_CHECKOUT_URL : véritables checkouts. Absence : contact.
Toutes ces valeurs sont publiques et ne doivent jamais contenir de secret. Recompiler après modification. Mettre à jour la confidentialité AVANT activation de l'envoi.
## Version de préparation
Le site est privé et noindex. robots.ts interdit l'indexation. Lors d'une ouverture publique demandée, vérifier les mentions légales, confidentialité, coordonnées, droits médias, fiscalité et conditions des offres, puis adapter robots et metadata.
Les prix sont ceux fournis : 299 € minimum et 49 €/mois. Aucune hypothèse HT/TTC ou engagement.
Les démos ne se connectent à aucun stock ni réservation. Sofiane prévoit d’utiliser Jawabot sur ce numéro : la connexion, le routage et les réponses de Jawabot se configurent côté service WhatsApp/Jawabot, pas dans un lien wa.me. Aucune connexion Jawabot active n’est revendiquée par cette version.
## Accessibilité
Navigation clavier, lien d'évitement, labels, focus visibles, tabs et selects Radix, préférence reduced-motion. Images locales et polices auto-hébergées ; aucun tracker ajouté.

