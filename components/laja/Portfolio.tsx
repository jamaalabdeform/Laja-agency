import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { MediaFrame } from "./Media";
import { SectionTitle } from "./Primitives";
export function PortfolioGrid(){return <div className="portfolio-grid">{projects.map(p=><article className="portfolio-project" key={p.id}><a href={site.instagram} target="_blank" rel="noreferrer" aria-label={`Voir le compte Instagram LAJA — ${p.title}`}><div className="project-image"><MediaFrame name={p.frame}/><span className="project-open"><ArrowUpRight size={24}/></span><span className="project-format">{p.format}</span></div><div className="project-title"><h3>{p.title}</h3><span>{p.sector}</span></div></a><p>{p.description}</p></article>)}</div>}
export function Showreel(){return <section className="portfolio-section wrap"><SectionTitle text="Des gens, des lieux, des idées. La communication prend vie sur le terrain.">Moins de discours.<br/>Plus de terrain.</SectionTitle>{site.showreel?<video className="showreel" controls preload="metadata" aria-label="Showreel officiel LAJA"><source src={site.showreel} type="video/mp4"/><track kind="captions" label="Français" src="/media/laja/showreel-fr.vtt" srcLang="fr"/></video>:<PortfolioGrid/>}<div className="portfolio-bottom"><p>Une sélection d’aperçus des contenus Instagram LAJA.</p><Link className="text-link" href="/realisations">Explorer les réalisations <ArrowUpRight size={17}/></Link></div></section>}

