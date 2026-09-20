import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Action } from "./Primitives";
import { MediaFrame } from "./Media";
export default function Hero(){return <section className="hero wrap">
 <div className="hero-heading"><h1>ON NE FAIT PAS<br/>JUSTE DU <span className="noise-word">BRUIT<svg viewBox="0 0 320 30" aria-hidden="true"><path d="M4 20 Q140 -4 312 10 M40 27 Q180 9 305 18"/></svg></span><span className="coral">.</span></h1>
 <div className="hero-side"><span className="hero-seal" aria-hidden="true">360<span>°</span></span><p>De la première vue<br/><strong>à la première vente.</strong></p></div></div>
 <div className="hero-bottom"><div className="hero-copy"><p>On transforme l’attention<br/>en clients.</p><div className="hero-description">Stratégie, contenu, vidéo, sites et automatisation. Toute votre communication. Une seule agence.</div><Action/><Link className="text-link" href="#laja360">Découvrir LAJA 360 <ArrowDown size={17}/></Link></div>
 <div className="hero-media"><div className="hero-shot shot-one"><MediaFrame name="food" priority/><span>DU CONTENU QUI DONNE ENVIE.</span></div><div className="hero-shot shot-two"><MediaFrame name="creator" priority/><span>DES HISTOIRES QUI RAPPROCHENT.</span></div><div className="hero-shot shot-three"><MediaFrame name="loisirs" priority/><span>DES MARQUES EN MOUVEMENT.</span></div><Link className="work-sticker" href="/realisations"><ArrowUpRight size={24}/><span>LE TERRAIN.<br/>NOTRE STUDIO.</span></Link><p className="media-credit">Aperçus des contenus Instagram LAJA</p></div></div>
 <div className="hero-baseline"><span>CRÉATIVITÉ SUR LE TERRAIN. IMPACT SUR VOTRE BUSINESS.</span><a href="#approche">LA SUITE <ArrowDown size={14}/></a></div>
 </section>}

