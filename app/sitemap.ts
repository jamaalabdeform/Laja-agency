import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/services","/realisations","/assistant-whatsapp","/a-propos","/contact","/mentions-legales","/confidentialite","/cookies"].map(p=>({url:site.origin+p,changeFrequency:"monthly" as const,priority:p===""?1:.7}))}
