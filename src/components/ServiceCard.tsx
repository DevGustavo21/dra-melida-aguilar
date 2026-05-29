import Image from "next/image";
import {
  Stethoscope,
  Microscope,
  Syringe,
  Droplet,
  Shield,
  Scissors,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import type { Service } from "@/lib/data";
import { buildServiceWhatsAppLink } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  microscope: Microscope,
  syringe: Syringe,
  droplet: Droplet,
  shield: Shield,
  scissors: Scissors,
  "heart-pulse": HeartPulse,
};

type ServiceCardProps = {
  service: Service;
  layout?: "vertical" | "horizontal";
  imageSide?: "left" | "right";
};

export function ServiceCard({
  service,
  layout = "vertical",
  imageSide = "left",
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Stethoscope;
  const whatsappHref = buildServiceWhatsAppLink(service.title);

  const objectPositionClass =
    service.imagePosition === "top"
      ? "object-top"
      : service.imagePosition === "bottom"
        ? "object-bottom"
        : "object-center";

  if (layout === "horizontal") {
    return (
      <article
        id={service.slug}
        className={`group flex flex-col overflow-hidden rounded-3xl border border-brand-50 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft lg:items-stretch ${
          imageSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="relative h-64 w-full overflow-hidden bg-brand-50 sm:h-80 lg:h-auto lg:min-h-[400px] lg:w-1/2 lg:flex-shrink-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover ${objectPositionClass} transition-transform duration-700 group-hover:scale-105`}
          />
          <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand-700 shadow-soft">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7 lg:p-10 lg:w-1/2">
          <span className="section-eyebrow">Servicio</span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-brand-950 lg:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-brand-950/70 lg:text-base">
            {service.description}
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-brand-950/80">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <span className="mt-[7px] inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-7">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={service.slug}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-50 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-50">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover ${objectPositionClass} transition-transform duration-700 group-hover:scale-105`}
        />
        <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-brand-700 shadow-soft">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-brand-950">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-950/70">
          {service.description}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-brand-950/80">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
