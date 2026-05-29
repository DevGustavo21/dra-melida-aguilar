import Link from "next/link";
import { Check } from "lucide-react";
import type { Pkg } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type PackageCardProps = {
  pkg: Pkg;
};

export function PackageCard({ pkg }: PackageCardProps) {
  const isHighlighted = pkg.highlighted;
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-8 transition-all ${
        isHighlighted
          ? "border-brand-600 shadow-[0_20px_60px_-15px_rgba(29,91,213,0.35)] lg:-translate-y-3"
          : "border-brand-50 shadow-card hover:-translate-y-1 hover:shadow-soft"
      }`}
    >
      {pkg.badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-soft">
          {pkg.badge}
        </span>
      ) : null}

      <div className="text-center">
        <h3
          className={`font-display text-xl font-semibold ${
            isHighlighted ? "text-brand-700" : "text-brand-950"
          }`}
        >
          {pkg.name}
        </h3>
        <div className="mt-3 flex items-baseline justify-center gap-1">
          <span className="font-display text-4xl font-bold text-brand-950">
            {pkg.currency} {pkg.price.toLocaleString("es-NI")}
          </span>
        </div>
        <p className="mt-2 text-sm text-brand-950/70">{pkg.description}</p>
      </div>

      <ul className="mt-8 flex-1 space-y-3 text-sm text-brand-950/80">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                isHighlighted
                  ? "bg-brand-600 text-white"
                  : "bg-brand-50 text-brand-700"
              }`}
            >
              <Check className="h-3 w-3" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {isHighlighted ? (
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full"
          >
            {pkg.ctaLabel}
          </a>
        ) : (
          <Link href="/contacto" className="btn-secondary w-full">
            {pkg.ctaLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
