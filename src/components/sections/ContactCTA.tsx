import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BannerDecor } from "@/components/BannerDecor";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

type ContactCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
};

export function ContactCTA({
  title = "Tu salud urológica en manos de confianza",
  description = "Agenda tu consulta hoy y recibe atención personalizada. Estamos aquí para cuidarte.",
  primaryLabel = "Agendar consulta",
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-24">
      <BannerDecor />
      <div className="container-site relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal direction="up">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[42px] text-balance">
              {title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <p className="mt-4 text-white/80 sm:text-lg">{description}</p>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {primaryLabel}
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver formulario
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
