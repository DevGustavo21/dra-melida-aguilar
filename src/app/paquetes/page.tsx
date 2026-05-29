import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PackageCard } from "@/components/PackageCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { comparisonRows, packages } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paquetes",
  description:
    "Elige el plan que mejor se adapte a tus necesidades. Todos incluyen atención directa de la Dra. Aguilar.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        title="Paquetes de Salud"
        description="Elige el plan que mejor se adapte a tus necesidades. Todos incluyen atención directa de la Dra. Aguilar."
      />

      {/* CARDS */}
      <section className="py-20">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120} direction="up">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-brand-50/40 py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Comparativa"
              title="¿Qué incluye cada paquete?"
              description="Una vista detallada para que elijas con confianza la mejor opción."
            />
          </Reveal>

          <Reveal direction="up">
            <div className="mt-12 overflow-hidden rounded-3xl border border-brand-50 bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-brand-50 text-left text-brand-950">
                      <th className="px-6 py-4 font-semibold">Característica</th>
                      <th className="px-6 py-4 text-center font-semibold text-brand-700">
                        Básico
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-brand-700">
                        Completo
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-brand-700">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-brand-50 last:border-0 ${
                          i % 2 === 1 ? "bg-brand-50/40" : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-brand-950/85">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Cell value={row.basico} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Cell value={row.completo} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Cell value={row.premium} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar por paquetes
              </a>
              <Link href="/contacto" className="btn-secondary">
                Hablar con la clínica
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Preguntas frecuentes"
              title="Lo que necesitás saber"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {[
              {
                q: "¿Cómo se realiza el pago?",
                a: "Aceptamos efectivo, transferencias y tarjetas. Te confirmamos el método al momento de agendar tu cita.",
              },
              {
                q: "¿Puedo cambiar de paquete después?",
                a: "Sí, podés actualizar tu paquete según evolucione tu plan terapéutico. Te orientamos en cada paso.",
              },
              {
                q: "¿Los paquetes son por persona?",
                a: "Sí, cada paquete corresponde a un paciente. Si necesitás atención para más personas, consulta condiciones especiales.",
              },
              {
                q: "¿Atienden ambas ciudades?",
                a: "Sí. Atendemos en Managua (Clínica Senior, Bolonia) y Granada (Antiguo Hospital San Juan de Dios).",
              },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 80} direction="up">
                <details className="group rounded-2xl border border-brand-50 bg-white p-5 shadow-card open:border-brand-100">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-brand-950">
                    {item.q}
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-brand-950/70">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function Cell({ value }: { value: boolean }) {
  return value ? (
    <span className="mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
      <Check className="h-4 w-4" />
    </span>
  ) : (
    <span className="mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-300">
      <X className="h-4 w-4" />
    </span>
  );
}
