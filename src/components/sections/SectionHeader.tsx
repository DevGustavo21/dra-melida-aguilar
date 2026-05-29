type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? (
        <span
          className={
            invert
              ? "text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
              : "section-eyebrow"
          }
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-[42px] ${
          invert ? "text-white" : "text-brand-950"
        } ${align === "center" ? "max-w-2xl text-balance" : "max-w-3xl"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 leading-relaxed sm:text-lg ${
            invert ? "text-white/80" : "text-brand-950/70"
          } ${align === "center" ? "max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
