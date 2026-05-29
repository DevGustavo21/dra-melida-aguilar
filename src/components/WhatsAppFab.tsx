import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_15px_40px_-10px_rgba(16,185,129,0.55)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
      aria-label="Escribirnos por WhatsApp"
    >
      <span
        className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping"
        aria-hidden
      />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
