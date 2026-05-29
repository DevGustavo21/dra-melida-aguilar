import Image from "next/image";
import type { Metadata } from "next";
import {
  Award,
  Handshake,
  Heart,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Reveal } from "@/components/Reveal";
import { timeline, values } from "@/lib/data";
import { doctorImages } from "@/lib/images";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  handshake: Handshake,
  lightbulb: Lightbulb,
  heart: Heart,
};

const doctorImage = doctorImages.selfie;

const galleryImages = [
  {
    src: doctorImages.cirugiaProcedimiento,
    alt: "Dra. Melida Aguilar durante un procedimiento quirúrgico con su equipo",
    caption: "En el quirófano",
  },
  {
    src: doctorImages.cirugiaLamparas,
    alt: "Dra. Aguilar concentrada durante una cirugía bajo lámparas quirúrgicas",
    caption: "Procedimiento en equipo",
  },
  {
    src: doctorImages.cirugiaEquipo,
    alt: "Equipo quirúrgico realizando una cirugía mínimamente invasiva",
    caption: "Cirugía mínimamente invasiva",
  },
  {
    src: doctorImages.mascarilla,
    alt: "Dra. Melida Aguilar preparada en quirófano antes de un procedimiento",
    caption: "Preparación quirúrgica",
  },
  {
    src: doctorImages.consultorioEquipo,
    alt: "Dra. Aguilar y su equipo en el consultorio de urología",
    caption: "Atención en consultorio",
  },
];

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la trayectoria y el compromiso de la Dra. Melida Aguilar Chamorro con la salud urológica en Nicaragua.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Sobre Nosotros"
        description="Conoce la trayectoria y el compromiso de la Dra. Melida Aguilar Chamorro con la salud urológica en Nicaragua."
      />

      {/* BIO */}
      <section className="py-20">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={doctorImage}
                    alt="Retrato profesional de la Dra. Melida Aguilar Chamorro en quirófano"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div>
                <span className="section-eyebrow">Biografía</span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                  Dra. Melida Aguilar Chamorro
                </h2>
                <p className="mt-5 leading-relaxed text-brand-950/75">
                  La Dra. Melida Aguilar Chamorro es médico especializada en
                  Cirugía Urológica con más de una década de experiencia atendiendo
                  pacientes en Nicaragua. Su formación médica y constante actualización profesional le permiten ofrecer tratamientos de vanguardia con un enfoque humano y cercano.
                </p>
                <p className="mt-4 leading-relaxed text-brand-950/75">
                  A lo largo de su carrera ha atendido a cientos de pacientes en sus consultas de Managua y Granada, especializándose en el diagnóstico y tratamiento de condiciones urológicas en hombres y mujeres, así como en procedimientos quirúrgicos mínimamente invasivos.
                </p>
                <p className="mt-4 leading-relaxed text-brand-950/75">
                  Cree firmemente en una medicina centrada en el paciente, donde la información clara, el respeto y la empatía son tan importantes como la pericia técnica.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 px-5 py-3 text-sm font-semibold text-brand-700">
                  <ShieldCheck className="h-5 w-5" />
                  Certificación médica verificada
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-brand-50/40 py-20">
        <div className="container-site">
          <Reveal direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Misión</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                Atención de calidad con calidez humana
              </h2>
              <p className="mt-5 leading-relaxed text-brand-950/75">
                Nuestra misión es proporcionar atención médica urológica de excelencia, combinando conocimiento técnico actualizado con un trato cálido y personalizado. Buscamos que cada paciente se sienta escuchado, respetado y seguro en su proceso de diagnóstico y tratamiento.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Galería profesional"
              title="La Dra. Aguilar en acción"
              description="Momentos reales de su práctica médica en quirófano y consultorio. Fotos auténticas, no ilustrativas."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {galleryImages.map((img, i) => {
              const isLastOdd =
                i === galleryImages.length - 1 &&
                galleryImages.length % 2 === 1;
              return (
              <Reveal
                key={img.src}
                delay={i * 80}
                direction={i % 2 === 0 ? "up" : "scale"}
                className={
                  isLastOdd ? "col-span-2 sm:col-span-1" : undefined
                }
              >
                <figure className="group relative h-full overflow-hidden rounded-3xl bg-brand-50 shadow-card">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-sm font-semibold leading-tight text-white">
                      {img.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Valores"
              title="Los principios que nos guían"
              description="Una práctica médica basada en pilares sólidos que orientan cada consulta."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon] ?? Heart;
              return (
                <Reveal key={v.title} delay={i * 100} direction="up">
                  <article className="group flex h-full flex-col items-start rounded-3xl border border-brand-50 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-brand-950">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-950/70">
                      {v.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-brand-50/40 py-20">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              eyebrow="Trayectoria"
              title="Nuestra historia profesional"
              description="Un camino dedicado al aprendizaje continuo y al servicio del paciente."
            />
          </Reveal>
          <div className="mt-14">
            <ol className="relative mx-auto flex max-w-3xl flex-col gap-10 border-l-2 border-brand-100 pl-8 sm:gap-12">
              {timeline.map((entry, i) => (
                <Reveal
                  key={entry.year}
                  delay={i * 100}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <li className="relative">
                    <span
                      className="absolute -left-[37px] top-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-brand-600 shadow-soft"
                      aria-hidden
                    />
                    <div className="rounded-2xl bg-white p-6 shadow-card">
                      <span className="badge">{entry.year}</span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-brand-950">
                        {entry.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-950/70">
                        {entry.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Conozcamos juntos tu situación"
        description="Agenda una valoración personalizada con la Dra. Aguilar y recibe un plan claro y cercano."
      />
    </>
  );
}
