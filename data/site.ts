export const site = {
  name: "LAJA Agency", origin: "https://laja-agency.jamaalabdeform.chatgpt.site",
  instagram: "https://www.instagram.com/laja_agency/",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "33616592363",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  siteCheckout: process.env.NEXT_PUBLIC_SITE_CHECKOUT_URL || "",
  assistantCheckout: process.env.NEXT_PUBLIC_JAWABOT_CHECKOUT_URL || "",
  showreel: "", // Set to "/media/laja/showreel.mp4" after adding the official video.
};
export function whatsappUrl(message = "Bonjour Sofiane, je souhaite parler de mon projet avec LAJA.") {
  const number = site.whatsapp.replace(/[^0-9]/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "/contact?besoin=Assistant%20WhatsApp";
}
export const navigation = [
  { href: "/services", label: "Expertises" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/assistant-whatsapp", label: "Assistant WhatsApp" },
  { href: "/a-propos", label: "L’agence" },
];

