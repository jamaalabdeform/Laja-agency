import Link from "next/link";
import { Camera, ArrowUpRight, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/data/site";
import { Action } from "./Primitives";
export function FinalCTA(){return <section className="final-cta"><div className="wrap final-inner"><h2>On parle de<br/>votre <span>business ?</span></h2><div><p>Votre prochaine campagne, votre nouveau site ou votre prochaine automatisation commence par une conversation.</p><Action light/><Link className="text-link" href={whatsappUrl()}>Écrire sur WhatsApp <ArrowUpRight size={17}/></Link></div></div></section>}
export default function Footer(){return <><footer className="footer wrap"><div className="footer-top"><Link className="footer-wordmark" href="/">LAJA<span>AGENCY</span></Link><p>De la première vue<br/>à la première vente.</p><a className="instagram-link" href={site.instagram} target="_blank" rel="noreferrer"><Camera size={19}/> Retrouvez-nous sur Instagram <ArrowUpRight size={17}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LAJA Agency</span><div><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link><Link href="/cookies">Cookies</Link></div><span>Nord de la France</span></div></footer><Link className="floating-contact" href={whatsappUrl()} aria-label="Écrire à Sofiane sur WhatsApp"><MessageCircle size={21}/><span>WhatsApp</span></Link></>}


