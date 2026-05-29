type BannerDecorProps = {
  variant?: "default" | "soft";
};

/**
 * Decorative overlay for solid-color hero banners. Includes:
 * - subtle dotted-squares grid
 * - large floating blurred orbs
 * - geometric rotated frames
 * - diagonal accent lines
 */
export function BannerDecor({ variant = "default" }: BannerDecorProps) {
  const lineOpacity = variant === "soft" ? "stroke-white/[0.04]" : "stroke-white/[0.06]";
  return (
    <>
      {/* Dotted squares pattern */}
      <div className="pointer-events-none absolute inset-0 squares-pattern opacity-70" aria-hidden />

      {/* Diagonal lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="diag-lines"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <line x1="0" y1="0" x2="0" y2="80" className={lineOpacity} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-lines)" />
      </svg>

      {/* Floating blurred orbs */}
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-brand-700/40 blur-3xl animate-float-rev"
        aria-hidden
      />

      {/* Rotated squares */}
      <div
        className="pointer-events-none absolute right-[6%] top-[18%] h-24 w-24 rotate-[18deg] rounded-2xl border border-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[8%] bottom-[20%] h-16 w-16 rotate-[35deg] rounded-xl border border-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[14%] bottom-[14%] h-10 w-10 -rotate-12 rounded-md bg-white/[0.06]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[16%] top-[24%] h-3 w-3 rounded-full bg-white/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[26%] top-[34%] h-2 w-2 rounded-full bg-white/20"
        aria-hidden
      />
    </>
  );
}
