import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function Action({href="/contact", children="Parlons de votre projet", light=false, outline=false}: {href?:string;children?:ReactNode;light?:boolean;outline?:boolean}) {
  return <Link className={`action ${light?"light":""} ${outline?"outline":""}`} href={href}>{children}<ArrowUpRight size={19} aria-hidden="true"/></Link>;
}
export function SectionTitle({children, text}: {children:ReactNode;text?:string}) {
  return <div className="section-heading"><h2>{children}</h2>{text&&<p>{text}</p>}</div>;
}

