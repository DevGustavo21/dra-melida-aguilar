import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Star,
} from "lucide-react";
import { PackageCard } from "@/components/PackageCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  packages,
  services,
  stats,
  testimonials,
} from "@/lib/data";
import { doctorImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

const featuredServiceSlugs = [
  "consulta-general",
  "deteccion-oncologica",
  "cirugia-minimamente-invasiva",
  "chequeo-prostatico",
];

const heroImage = doctorImages.cirugiaProcedimiento;
const doctorImage = doctorImages.consultorioEquipo;

export default function HomePage() {
  const featured = featuredServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <>
      {/* HERO */}
      <section className="relative isolate -mt-20 overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt="Dra. Melida Aguilar y su equipo médico durante un procedimiento urológico"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-brand-800/80" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="container-site relative">
          <div className="flex min-h-[640px] flex-col items-center justify-center py-24 text-center text-white">
            <Reveal direction="fade">
              <span className="badge bg-white/10 text-white/90 ring-1 ring-white/20">
                <HeartPulse className="h-3.5 w-3.5" /> Urología en Nicaragua
              </span>
            </Reveal>
            <Reveal direction="up" delay={80}>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Cuidando tu salud urológica con{" "}
                <span className="gradient-text bg-gradient-to-r from-brand-200 to-white bg-clip-text">
                  experiencia y dedicación
                </span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="mt-6 max-w-2xl text-lg text-white/85">
                Atención médica especializada y profesional para hombres y mujeres
                en Managua y Granada. Tu bienestar es nuestra prioridad.
              </p>
            </Reveal>
            <Reveal direction="up" delay={320}>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar por WhatsApp
                </a>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Conocer servicios
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-12 pb-16">
        <div className="container-site">
          <Reveal direction="up">
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-brand-50 bg-white p-6 shadow-soft sm:p-8 md:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} direction="scale" delay={i * 90}>
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-50/60 p-5 text-center">
                    <Counter
                      value={s.value}
                      suffix={s.suffix}
                      duration={1600 + i * 150}
                      className="font-display text-3xl font-bold tabular-nums text-brand-700 sm:text-4xl"
                    />
                    <span className="mt-1 text-xs font-medium text-brand-950/70">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={doctorImage}
                    alt="Dra. Melida Aguilar Chamorro junto a su equipo en el consultorio de urología"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-soft sm:left-10 sm:right-auto sm:max-w-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Award className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-950">
                        Certificación médica
                      </p>
                      <p className="text-xs text-brand-950/60">
                        Más de 10 años de experiencia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div>
                <span className="section-eyebrow">Sobre Nosotros</span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl md:text-[42px]">
                  Médico especializado en Urología, brindando atención integral a
                  hombres y mujeres
                </h2>
                <p className="mt-5 leading-relaxed text-brand-950/70">
                  La Dra. Melida Aguilar Chamorro es médico especialista en Cirugía Urológica con más de una década de experiencia atendiendo pacientes en Nicaragua. Su formación médica y constante actualización profesional le permiten ofrecer tratamientos de vanguardia con un enfoque humano y cercano.
                </p>
                <p className="mt-4 leading-relaxed text-brand-950/70">
                  A lo largo de su carrera ha atendido a cientos de pacientes en sus consultas de Managua y Granada, especializándose en el diagnóstico y tratamiento de condiciones urológicas en hombres y mujeres, así como en procedimientos quirúrgicos mínimamente invasivos.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: ShieldCheck, label: "Práctica certificada" },
                    { icon: HeartPulse, label: "Trato humano y cercano" },
                    { icon: Stethoscope, label: "Tecnología actualizada" },
                    { icon: Calendar, label: "Citas flexibles" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-2xl border border-brand-50 bg-brand-50/40 p-3 text-sm font-medium text-brand-950"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/sobre-nosotros" className="btn-primary">
                    Conocer más
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Hablar con la doctora
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Servicios"
              title="Atención urológica completa"
              description="Cada servicio está diseñado para brindarte la mejor atención con un enfoque personalizado y profesional."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100} direction="up">
                <Link
                  href={`/servicios#${service.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-brand-50 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Stethoscope className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-brand-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-950/70">
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Ver detalle <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex justify-center">
              <Link href="/servicios" className="btn-secondary">
                Ver todos los servicios
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />

      {/* PACKAGES PREVIEW */}
      <section className="bg-brand-50/40 py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Paquetes"
              title="Opciones para tu cuidado urológico"
              description="Elegí el plan que mejor se adapte a tus necesidades. Todos incluyen atención directa de la Dra. Aguilar."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 120} direction="up">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex justify-center">
              <Link href="/paquetes" className="btn-secondary">
                Ver tabla comparativa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Testimonios"
              title="Lo que dicen nuestros pacientes"
              description="Confianza, profesionalismo y resultados que hablan por sí mismos."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} direction="up">
                <article className="flex h-full flex-col rounded-3xl border border-brand-50 bg-white p-6 shadow-card">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-950/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-brand-50 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-950">
                        {t.name}
                      </p>
                      <p className="text-xs text-brand-950/60">{t.context}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-brand-50/40 py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Ubicaciones"
              title="Atención en dos ciudades"
              description="Te atendemos en Managua y Granada. Horarios flexibles para tu comodidad."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siteConfig.locations.map((loc, i) => (
              <Reveal
                key={loc.city}
                delay={i * 140}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <article className="flex h-full flex-col rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-brand-950">
                    {loc.city}
                  </h3>
                  <p className="mt-2 text-sm text-brand-950/70">{loc.address}</p>
                  <div className="mt-6 grid gap-2 text-sm text-brand-950/70">
                    {siteConfig.schedule.map((s) => (
                      <div key={s.day} className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-brand-500" />
                        <span>
                          <strong className="text-brand-950">{s.day}:</strong>{" "}
                          {s.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      Ver en Maps
                    </a>
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <Phone className="h-4 w-4" />
                      Llamar
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Contacto rápido"
              title="Estamos aquí para ayudarte"
              description="Comunicate con nosotros por cualquier canal. Tu consulta es nuestra prioridad."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="space-y-5">
                <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    Números de contacto
                  </h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Claro", number: siteConfig.phones.claro },
                      { label: "Tigo", number: siteConfig.phones.tigo },
                    ].map((p) => (
                      <div
                        key={p.label}
                        className="flex items-center justify-between rounded-2xl bg-brand-50/40 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                            <WhatsAppIcon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-brand-950">
                              {p.label}
                            </p>
                            <p className="text-xs text-brand-950/60">
                              {p.number}
                            </p>
                          </div>
                        </div>
                        <a
                          href={siteConfig.whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-brand-700 hover:text-brand-800"
                        >
                          Contactar
                        </a>
                      </div>
                    ))}
                  </div>
                </article>
                <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    ¿Por qué elegirnos?
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-brand-950/80">
                    {[
                      "Atención personalizada y privada",
                      "Profesional certificado en Nicaragua",
                      "Equipamiento de última generación",
                      "Seguimiento clínico continuo",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
            <Reveal direction="right">
              <article className="rounded-3xl border border-brand-50 bg-white p-7 shadow-card">
                <h3 className="font-display text-lg font-semibold text-brand-950">
                  Envíanos un mensaje
                </h3>
                <p className="mt-1 text-sm text-brand-950/70">
                  Te respondemos en menos de 24 horas hábiles.
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
                        Nombre
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
                        placeholder="Tu teléfono"
                        className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                        required
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs font-semibold text-brand-950">
                      Motivo
                    </span>
                    <select
                      name="motivo"
                      className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona un motivo
                      </option>
                      <option>Consulta general</option>
                      <option>Chequeo prostático</option>
                      <option>Vasectomía</option>
                      <option>Cirugía mínimamente invasiva</option>
                      <option>Otro</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-brand-950">
                      Mensaje
                    </span>
                    <textarea
                      name="mensaje"
                      rows={4}
                      placeholder="Describe brevemente tu consulta..."
                      className="mt-1 w-full rounded-xl border border-brand-100 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100"
                    />
                  </label>
                  <button type="submit" className="btn-primary w-full">
                    Enviar mensaje
                  </button>
                </form>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
