import type { Metadata } from "next";
import PageIntro from "@/components/laja/PageIntro";
import { MediaFrame } from "@/components/laja/Media";
import { Method } from "@/components/laja/Journey";
import { FinalCTA } from "@/components/laja/Footer";
export const metadata:Metadata={title:"L’agence",description:"LAJA Agency : une approche créative et concrète de la communication, dans le Nord de la France.",alternates:{canonical:"/a-propos"}};
export default function About(){return <main id="main"><PageIntro title={<>PROCHES DU TERRAIN.<br/><span>PROCHES DE VOUS.</span></>}><p>Une communication qui commence par comprendre votre activité. Et qui ne perd jamais votre business de vue.</p></PageIntro><section className="wrap about-story"><div className="about-media"><MediaFrame name="restaurant"/><span>Aperçu Instagram LAJA</span></div><div><h2>De la personnalité.<br/>Et une direction.</h2><p>LAJA Agency accompagne les commerces, les marques et les entreprises dans leur communication. Stratégie, création de contenu, réseaux sociaux et vidéo : nous construisons une présence qui vous ressemble.</p><p>Notre approche 360° relie cette visibilité à la suite du parcours : un site pour convaincre, un contact simple et un assistant WhatsApp pour accompagner les premières questions.</p><p>Basée dans le Nord de la France, LAJA garde un principe : votre communication doit être belle. Mais surtout utile.</p><div className="about-principles"><span>Créer avec vous.</span><span>Parler à vos clients.</span><span>Relier les actions.</span></div></div></section><Method/><FinalCTA/></main>}

