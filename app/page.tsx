import type { Metadata } from "next";
import Link from "next/link";
import FeaturedReel from "@/components/laja/FeaturedReel";
import Hero from "@/components/laja/Hero";
import { FinalCTA } from "@/components/laja/Footer";
import { ServicesJourney,Method } from "@/components/laja/Journey";
import WhatsAppDemo from "@/components/laja/WhatsAppDemo";
import { WebsiteOffer } from "@/components/laja/Offers";
import { site } from "@/data/site";
export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <main id="main" className="studio-home"><Hero/><FeaturedReel/><section className="studio-statement wrap" id="approche"><h2>Une idée forte.<br/>Toute une équipe<br/><span>pour lui donner vie.</span></h2><div><p>Positionnement, concepts, scénarios, tournage, montage : LAJA relie la stratégie à la création. Selon votre projet, vidéaste, acteur, monteur et graphiste réunissent leurs talents.</p><Link className="text-link" href="/a-propos">Découvrir l’agence ↗</Link></div></section><ServicesJourney/><section className="studio-more"><div className="wrap"><h2>À l’écran.<br/>Et sur le terrain.</h2><div><Link href="/services#supports"><strong>Supports de communication</strong><span>Flyers, affiches, signalétique, stands et PLV.<br/>Avec ou sans création graphique. ↗</span></Link><Link href="/services#formation"><strong>Formation réseaux sociaux</strong><span>Apprendre à communiquer.<br/>Prendre la main, à votre rythme. ↗</span></Link></div></div></section><WebsiteOffer/><WhatsAppDemo/><Method/><FinalCTA/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:site.name,url:site.origin,logo:site.origin+"/brand/logo.jpg",sameAs:[site.instagram],description:"Agence de communication : réseaux sociaux, stratégie marketing, branding, vidéo, formation, supports de communication, sites et agent IA."})}}/></main>}
