import type { Metadata } from "next";
import Hero from "@/components/laja/Hero";
import { FinalCTA } from "@/components/laja/Footer";
import { Manifesto,ServicesJourney,Laja360Flow,Method,BeforeAfter } from "@/components/laja/Journey";
import SectorScenarios from "@/components/laja/Scenarios";
import WhatsAppDemo from "@/components/laja/WhatsAppDemo";
import { WebsiteOffer,Offers } from "@/components/laja/Offers";
import { Showreel } from "@/components/laja/Portfolio";
import { site } from "@/data/site";
export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <main id="main"><Hero/><Manifesto/><ServicesJourney/><Showreel/><Laja360Flow/><SectorScenarios/><WhatsAppDemo/><WebsiteOffer/><Offers/><BeforeAfter/><Method/><FinalCTA/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:site.name,url:site.origin,logo:site.origin+"/brand/logo.jpg",sameAs:[site.instagram],description:"Agence de communication 360° : stratégie, contenu, vidéo, sites et automatisation."})}}/></main>}

