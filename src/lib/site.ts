const WHATSAPP_PHONE = "50584400220";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Dra. Melida, me interesa agendar una consulta";

/**
 * Build a wa.me link with an optional custom message.
 * If no message is provided, the default booking message is used.
 */
export function buildWhatsAppLink(message?: string): string {
  const text = message?.trim() ? message.trim() : DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

/** Pre-formatted message for booking a specific service. */
export function buildServiceWhatsAppLink(serviceName: string): string {
  return buildWhatsAppLink(
    `Hola Dra. Melida, me interesa agendar una consulta para el servicio: "${serviceName}". ¿Cuál sería el siguiente paso?`,
  );
}

export const siteConfig = {
  name: "Dra. Melida Aguilar",
  tagline: "Cirugía Urológica",
  fullName: "Dra. Melida Aguilar Chamorro",
  description:
    "Médico especializado en Urología, brindando atención integral a hombres y mujeres en Nicaragua.",
  phones: {
    claro: "8440-0220",
    tigo: "8968-7269",
    whatsapp: `+${WHATSAPP_PHONE}`,
  },
  whatsappLink: buildWhatsAppLink(),
  locations: [
    {
      city: "Managua",
      address: "Tica Bus Bolonia 1/2 c al Lago, Clínica Senior",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Senior+Bolonia+Managua",
    },
    {
      city: "Granada",
      address:
        "Antiguo Hospital San Juan de Dios 1 c al Sur, contiguo a farmacia Buena Fe",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Antiguo+Hospital+San+Juan+de+Dios+Granada+Nicaragua",
    },
  ],
  schedule: [
    { day: "Lunes a Viernes", hours: "8:00 AM - 5:00 PM" },
    { day: "Sábados", hours: "8:00 AM - 12:00 PM" },
  ],
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Paquetes", href: "/paquetes" },
    { name: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
