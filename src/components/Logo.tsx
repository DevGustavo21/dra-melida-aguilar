import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "dark" | "light";
};

export function Logo({ variant = "dark" }: LogoProps) {
  const colors =
    variant === "light"
      ? {
          frame:
            "bg-white/15 ring-1 ring-white/30 group-hover:bg-white/25",
          title: "text-white",
          subtitle: "text-white/70",
        }
      : {
          frame:
            "bg-white ring-1 ring-brand-100 group-hover:ring-brand-200",
          title: "text-brand-950",
          subtitle: "text-brand-700/70",
        };

  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span
        className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full p-1 transition-all duration-300 ${colors.frame}`}
        aria-hidden
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={64}
          height={64}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-sm font-bold tracking-tight ${colors.title}`}
        >
          {siteConfig.name}
        </span>
        <span className={`text-[11px] font-medium ${colors.subtitle}`}>
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
