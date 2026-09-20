"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/site";
export default function Header(){
 const [open,setOpen]=useState(false);const path=usePathname();
 return <header className="header"><div className="header-inner">
 <Link href="/" className="brand" aria-label="LAJA Agency, accueil" onClick={()=>setOpen(false)}><Image src="/brand/logo.jpg" alt="" width={46} height={46} unoptimized/><span>LAJA<span className="brand-agency">AGENCY</span></span></Link>
 <nav className="desktop-nav" aria-label="Navigation principale">{navigation.map(n=><Link key={n.href} href={n.href} aria-current={path===n.href?"page":undefined}>{n.label}</Link>)}</nav>
 <Link className="header-contact" href="/contact">Parlons de votre projet <ArrowUpRight size={17}/></Link>
 <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Fermer le menu":"Ouvrir le menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav id="mobile-menu" className="mobile-nav" aria-label="Navigation mobile">{[...navigation,{href:"/contact",label:"Parlons de votre projet"}].map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}<ArrowUpRight size={20}/></Link>)}</nav>}</header>
}

