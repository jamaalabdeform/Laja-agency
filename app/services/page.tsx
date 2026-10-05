import type { Metadata } from "next";
import CommunicationExtras from "@/components/laja/CommunicationExtras";
import PageIntro from "@/components/laja/PageIntro";
import { services } from "@/data/services";
import { Action } from "@/components/laja/Primitives";
import { Offers,WebsiteOffer } from "@/components/laja/Offers";
import { FinalCTA } from "@/components/laja/Footer";
export const metadata:Metadata={title:"Nos expertises",description:"Réseaux sociaux, stratégie, branding, production vidéo, formation et supports de communication : découvrez les activités de LAJA.",alternates:{canonical:"/services"}};
export default function Services(){return <main id="main"><PageIntro title={<>DE L’ATTENTION.<br/>À <span> L’ACTION.</span></>}><p>Votre communication ne s’arrête pas à la publication. Nous pensons ce qui vient avant. Et ce qui se passe après.</p></PageIntro><div className="wrap expertise-list">{services.map(s=><section className="expertise" id={s.id} key={s.id}><div><span className="service-number">{s.number}</span><h2>{s.title}</h2><p>{s.line}</p></div><div><p>{s.detail}</p><ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul><Action href={`/contact?besoin=${encodeURIComponent(s.id==="convertir"?"Site internet":s.id==="repondre"?"Agent IA":"Communication")}`}>Parlons de votre besoin</Action></div></section>)}</div><CommunicationExtras/><WebsiteOffer/><Offers/><FinalCTA/></main>}

