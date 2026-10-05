import type { Metadata } from "next";
import PageIntro from "@/components/laja/PageIntro";
import FeaturedReel from "@/components/laja/FeaturedReel";
import { FinalCTA } from "@/components/laja/Footer";
export const metadata:Metadata={title:"Nos films et réalisations",description:"RIVA Denain, BAO Marrakech et Forum Arabo-Amazigh : trois univers à découvrir en vidéo avec LAJA Agency.",alternates:{canonical:"/realisations"}};
export default function Work(){return <main id="main" className="studio-work"><PageIntro title={<>DES HISTOIRES.<br/><span>QUI PRENNENT VIE.</span></>}><p>Restauration, contenus incarnés, événementiel : une sélection vidéo pour découvrir notre univers créatif.</p></PageIntro><FeaturedReel/><FinalCTA/></main>}
