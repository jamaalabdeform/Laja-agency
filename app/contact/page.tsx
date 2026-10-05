import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/laja/PageIntro";
import ContactForm from "@/components/laja/ContactForm";
import { site,whatsappUrl } from "@/data/site";
export const metadata:Metadata={title:"Parlons de votre projet",description:"Communication, contenu, site ou agent IA : préparez votre demande pour LAJA Agency.",alternates:{canonical:"/contact"}};
export default async function Contact({searchParams}:{searchParams:Promise<{besoin?:string;secteur?:string}>}){const params=await searchParams;return <main id="main"><PageIntro title={<>VOTRE PROJET.<br/><span>ON EN PARLE ?</span></>}><p>Une idée précise ou une envie de faire mieux ? C’est un bon début.</p></PageIntro><section className="contact-layout wrap"><aside><h2>Tout commence<br/>par un échange.</h2><p>Parlez-nous de votre activité et de ce dont vous avez besoin. Nous pourrons construire la suite ensemble.</p><a className="contact-channel" href={site.instagram} target="_blank" rel="noreferrer"><span>Sur Instagram<strong>@laja_agency</strong></span><ArrowUpRight size={23}/></a>{site.whatsapp&&<a className="contact-channel" href={whatsappUrl()}><span>Sur WhatsApp<strong>+33 6 16 59 23 63</strong></span><ArrowUpRight size={23}/></a>}{site.email&&<a className="contact-channel" href={`mailto:${site.email}`}><span>Par email<strong>{site.email}</strong></span><ArrowUpRight size={23}/></a>}<p className="small-note">Vous préférez un message direct ? Écrivez à Sofiane sur WhatsApp ou retrouvez LAJA sur Instagram.</p></aside><ContactForm initialNeed={params.besoin} initialSector={params.secteur}/></section></main>}


