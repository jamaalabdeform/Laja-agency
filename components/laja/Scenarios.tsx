"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/data/sectors";
import { Action, SectionTitle } from "./Primitives";
export default function SectorScenarios(){return <section className="sector-section wrap"><SectionTitle text="Votre activité a ses codes. Votre parcours digital aussi.">Et pour votre business ?</SectionTitle><Tabs defaultValue="restaurant" className="sector-tabs"><TabsList className="sector-tablist" aria-label="Votre secteur">{sectors.map(s=><TabsTrigger className="sector-tab" value={s.id} key={s.id}>{s.name}</TabsTrigger>)}</TabsList>{sectors.map(s=><TabsContent key={s.id} value={s.id} className="sector-panel"><div><h3>{s.title}</h3><p>{s.description}</p><Action href={`/contact?secteur=${encodeURIComponent(s.name)}`}>Parlons de votre activité</Action></div><div><ol className="scenario-steps">{s.steps.map((step,i)=><li key={step}><span>0{i+1}</span><strong>{step}</strong>{i<3&&<ArrowRight size={18}/>}</li>)}</ol><p className="small-note">Parcours illustratif, adapté aux outils et aux besoins de votre entreprise.</p></div></TabsContent>)}</Tabs></section>}

