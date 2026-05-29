import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Atención médica urológica integral para hombres y mujeres en Nicaragua. Conoce nuestras 7 especialidades urológicas.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Nuestros Servicios"
        description="Atención médica urológica integral para hombres y mujeres. Tecnología moderna, experiencia comprobada y trato humano."
      />

      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Servicios médicos"
              title="7 especialidades urológicas"
              description="Cada servicio está diseñado para brindarte la mejor atención con un enfoque personalizado y profesional."
            />
          </Reveal>

          <div className="mt-14 flex flex-col gap-8">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <ServiceCard
                  service={service}
                  layout="horizontal"
                  imageSide={i % 2 === 0 ? "left" : "right"}
                />
              </Reveal>
            ))}
          </div>

          <Reveal direction="up">
            <div className="mt-16 rounded-3xl border border-brand-100 bg-brand-50/50 p-8 sm:p-10">
              <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <h3 className="font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                    ¿No estás seguro qué servicio necesitas?
                  </h3>
                  <p className="mt-3 text-brand-950/70">
                    Escribinos por WhatsApp y la Dra. Aguilar te orientará sin compromiso. Atendemos consultas de Managua y Granada.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Consultar
                  </a>
                  <Link href="/paquetes" className="btn-secondary">
                    Ver paquetes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Listo para empezar tu evaluación"
        description="Atención médica especializada con respeto, discreción y resultados claros."
      />
    </>
  );
}
