import type { Metadata } from "next";
import FeaturedReel from "@/components/laja/FeaturedReel";
import PageIntro from "@/components/laja/PageIntro";
import { PortfolioGrid } from "@/components/laja/Portfolio";
import { FinalCTA } from "@/components/laja/Footer";
import { Action } from "@/components/laja/Primitives";
import { site } from "@/data/site";
export const metadata:Metadata={title:"Réalisations et contenus",description:"Découvrez les aperçus des contenus LAJA Agency : restauration, loisirs et vidéos incarnées.",alternates:{canonical:"/realisations"}};
export default function Work(){return <main id="main"><PageIntro title={<>ÇA SE PASSE<br/><span>SUR LE TERRAIN.</span></>}><p>Des visages, de l’énergie et des histoires à raconter. Un aperçu de l’univers LAJA.</p></PageIntro><FeaturedReel/><section className="wrap work-page"><PortfolioGrid/><div className="portfolio-disclaimer"><h2>La suite se voit<br/>en mouvement.</h2><div><p>Ces images sont issues des captures Instagram fournies. Retrouvez les publications sur le compte de l’agence. Les missions détaillées et résultats chiffrés ne sont pas documentés ici.</p><Action href={site.instagram}>Voir le compte Instagram</Action></div></div></section><FinalCTA/></main>}

