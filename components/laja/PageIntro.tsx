import type { ReactNode } from "react";
export default function PageIntro({title,children}:{title:ReactNode;children:ReactNode}){return <section className="page-intro wrap"><h1>{title}</h1><div>{children}</div></section>}

