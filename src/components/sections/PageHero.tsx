import { BannerDecor } from "@/components/BannerDecor";
import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative isolate -mt-20 overflow-hidden bg-brand-900 pt-20">
      <BannerDecor />
      <div className="container-site relative">
        <div
          className={`flex min-h-[340px] flex-col justify-center py-24 ${
            align === "center" ? "items-center text-center" : "items-start text-left"
          }`}
        >
          {eyebrow ? (
            <Reveal direction="fade">
              <span className="badge bg-white/10 text-white/90 ring-1 ring-white/20">
                {eyebrow}
              </span>
            </Reveal>
          ) : null}
          <Reveal direction="up" delay={80}>
            <h1
              className={`mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl ${
                align === "center" ? "max-w-3xl text-balance" : "max-w-3xl"
              }`}
            >
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal direction="up" delay={180}>
              <p
                className={`mt-5 text-base leading-relaxed text-white/80 sm:text-lg ${
                  align === "center" ? "max-w-2xl" : "max-w-2xl"
                }`}
              >
                {description}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
