import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  { name: "Consulta General", href: "/servicios#consulta-general" },
  {
    name: "Cirugía Mínimamente Invasiva",
    href: "/servicios#cirugia-minimamente-invasiva",
  },
  { name: "Chequeo Prostático", href: "/servicios#chequeo-prostatico" },
  { name: "Vasectomía", href: "/servicios#vasectomia" },
  { name: "Detección Oncológica", href: "/servicios#deteccion-oncologica" },
];

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Enlaces
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Servicios
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 text-emerald-300" />
                <span>Claro: {siteConfig.phones.claro}</span>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 text-emerald-300" />
                <span>Tigo: {siteConfig.phones.tigo}</span>
              </li>
              {siteConfig.locations.map((loc) => (
                <li key={loc.city} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                  <span>
                    <span className="font-medium text-white">{loc.city}</span>:{" "}
                    {loc.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Atención médica de confianza en Nicaragua
          </p>
        </div>
      </div>
    </footer>
  );
}
