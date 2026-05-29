import type { Metadata } from "next";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Estamos listos para atender tu consulta. Contáctanos directamente por WhatsApp o envíanos un mensaje.",
};

const managuaEmbedUrl =
  "https://www.google.com/maps?q=Cl%C3%ADnica+Senior+Bolonia+Managua&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        description="Estamos listos para atender tu consulta. Contáctanos directamente por WhatsApp o envíanos un mensaje."
      />

      <section className="py-20">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* LEFT */}
            <Reveal direction="left">
              <div className="space-y-6">
                <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    Números de contacto
                  </h3>
                  <div className="mt-5 space-y-3">
                    {[
                      {
                        label: "Claro",
                        number: siteConfig.phones.claro,
                        icon: WhatsAppIcon,
                        color: "text-emerald-500 bg-emerald-50",
                      },
                      {
                        label: "Tigo",
                        number: siteConfig.phones.tigo,
                        icon: WhatsAppIcon,
                        color: "text-emerald-500 bg-emerald-50",
                      },
                      {
                        label: "Llamada directa",
                        number: `Claro: ${siteConfig.phones.claro} | Tigo: ${siteConfig.phones.tigo}`,
                        icon: Phone,
                        color: "text-brand-700 bg-brand-50",
                      },
                    ].map((p) => (
                      <div
                        key={p.label}
                        className="flex items-center gap-3 rounded-2xl bg-brand-50/40 p-4"
                      >
                        <span
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${p.color}`}
                        >
                          <p.icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-brand-950">
                            {p.label}
                          </p>
                          <p className="truncate text-xs text-brand-950/70">
                            {p.number}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    Ubicaciones
                  </h3>
                  <div className="mt-5 space-y-4">
                    {siteConfig.locations.map((loc) => (
                      <div key={loc.city} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-brand-950">
                            {loc.city}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-brand-950/70">
                            {loc.address}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    Horarios
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm">
                    {siteConfig.schedule.map((s) => (
                      <li
                        key={s.day}
                        className="flex items-center gap-3 text-brand-950/80"
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <Clock className="h-4 w-4" />
                        </span>
                        <span>
                          <strong className="text-brand-950">{s.day}:</strong>{" "}
                          {s.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal direction="right">
              <div className="space-y-6">
                <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    Envíanos un mensaje
                  </h3>
                  <p className="mt-1 text-sm text-brand-950/70">
                    Te respondemos lo antes posible. Tu información es confidencial.
                  </p>
                  <form
                    className="mt-6 space-y-4"
                    action={siteConfig.whatsappLink}
                    method="get"
                    target="_blank"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-semibold text-brand-950">
                          Nombre completo
                        </span>
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Tu nombre"
                          className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                          required
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-brand-950">
                          Teléfono
                        </span>
                        <input
                          type="tel"
                          name="telefono"
                          placeholder="Tu número de teléfono"
                          className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                          required
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-xs font-semibold text-brand-950">
                        Motivo de consulta
                      </span>
                      <select
                        name="motivo"
                        defaultValue=""
                        required
                        className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                      >
                        <option value="" disabled>
                          Selecciona un motivo
                        </option>
                        <option>Consulta general</option>
                        <option>Chequeo prostático</option>
                        <option>Cirugía mínimamente invasiva</option>
                        <option>Vasectomía</option>
                        <option>Detección oncológica</option>
                        <option>Otro</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-xs font-semibold text-brand-950">
                        Mensaje
                      </span>
                      <textarea
                        name="mensaje"
                        rows={5}
                        maxLength={500}
                        placeholder="Describe brevemente tu consulta..."
                        className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                      />
                      <span className="mt-1 block text-right text-[10px] text-brand-950/50">
                        Máx. 500 caracteres
                      </span>
                    </label>
                    <button type="submit" className="btn-primary w-full">
                      <Mail className="h-4 w-4" />
                      Enviar mensaje
                    </button>
                    <p className="text-center text-[11px] text-brand-950/60">
                      Tu información es confidencial y solo será utilizada para atender tu consulta médica.
                    </p>
                  </form>
                </article>

                <article className="overflow-hidden rounded-3xl border border-brand-50 bg-white shadow-card">
                  <div className="flex items-center justify-between px-6 py-4">
                    <h3 className="font-display text-base font-semibold text-brand-950">
                      Ubicación en Maps
                    </h3>
                    <a
                      href={siteConfig.locations[0].mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Abrir en Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="relative aspect-[16/10] w-full bg-brand-50">
                    <iframe
                      src={managuaEmbedUrl}
                      title="Ubicación Clínica Senior, Managua"
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
