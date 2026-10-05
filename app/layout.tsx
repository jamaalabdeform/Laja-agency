import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/laja/Header";
import Footer from "@/components/laja/Footer";
import { site } from "@/data/site";
export const metadata:Metadata={
 metadataBase:new URL(site.origin),
 title:{default:"LAJA Agency — De la première vue à la première vente",template:"%s | LAJA Agency"},
 description:"Agence de communication 360° dans le Nord : stratégie, réseaux sociaux, vidéo, sites internet et agent IA.",
 robots:{index:false,follow:false},
 openGraph:{type:"website",locale:"fr_FR",siteName:"LAJA Agency",title:"LAJA Agency — De la première vue à la première vente",description:"Stratégie, contenu, vidéo, sites et automatisation."},
 twitter:{card:"summary",title:"LAJA Agency",description:"De la première vue à la première vente."},
 icons:{icon:"/brand/logo.jpg",shortcut:"/brand/logo.jpg"}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body className="studio-theme"><a className="skip-link" href="#main">Aller au contenu</a><Header/>{children}<Footer/></body></html>}

