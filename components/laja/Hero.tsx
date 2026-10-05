import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Action } from "./Primitives";
export default function Hero(){return <section className="studio-hero"><div className="wrap"><div className="studio-hero-title"><h1>VOTRE MARQUE.<br/><span>ON LA FAIT VIVRE.</span></h1><p>Communication, création<br/>et présence digitale.<br/><strong>LAJA Agency.</strong></p></div><div className="studio-hero-bottom"><p>Des idées qui captent l’attention.<br/>Des contenus qui donnent envie.<br/>Une communication qui vous ressemble.</p><div><Action light>Parlons de votre projet</Action><Link className="text-link" href="#films">Voir nos films <ArrowDown size={17}/></Link></div></div></div></section>}
