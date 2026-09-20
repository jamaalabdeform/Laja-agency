import type { ReactNode } from "react";
import Link from "next/link";
export default function LegalPage({title,children}:{title:string;children:ReactNode}){return <main id="main" className="legal-page wrap"><Link href="/" className="text-link">Retour à l’accueil</Link><h1>{title}</h1><p className="legal-status">Version de préparation — informations à compléter avant ouverture publique.</p><div className="legal-content">{children}</div></main>}

