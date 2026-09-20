import Image from "next/image";
const frames = {
  food: {x:123,y:0,alt:"Aperçu Instagram LAJA : présentation de plats chez La Bonne Graille"},
  restaurant: {x:434,y:0,alt:"Aperçu Instagram LAJA : scène au restaurant La Bonne Graille"},
  creator: {x:745,y:0,alt:"Aperçu Instagram LAJA : prise de parole face caméra"},
  loisirs: {x:434,y:422,alt:"Aperçu Instagram LAJA : véhicule de loisirs KLS Loisirs"},
  lifestyle: {x:745,y:422,alt:"Aperçu Instagram LAJA : scène de contenu incarné"},
};
export type FrameName=keyof typeof frames;
export function MediaFrame({name,className="",priority=false}: {name:FrameName;className?:string;priority?:boolean}){
  const f=frames[name];
  return <div className={`media-frame ${className}`}><Image src="/media/laja/instagram-grid.png" alt={f.alt} width={1249} height={863} unoptimized priority={priority} style={{width:"401.6077%",maxWidth:"none",height:"auto",position:"absolute",left:`${-f.x/311*100}%`,top:`${-f.y/421*100}%`}}/></div>;
}


