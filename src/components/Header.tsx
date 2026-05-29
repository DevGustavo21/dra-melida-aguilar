"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // When the menu is open we treat the header as opaque so the close icon
  // never blends into the page background.
  const isOpaque = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isOpaque
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <div className={isOpaque ? "text-brand-950" : "text-white"}>
          <Logo variant={isOpaque ? "dark" : "light"} />
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isOpaque
                    ? isActive
                      ? "text-brand-700"
                      : "text-brand-950/80 hover:text-brand-700"
                    : isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                {isActive ? (
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${
                      isOpaque ? "bg-brand-600" : "bg-white"
                    }`}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-xl p-2 lg:hidden ${
            isOpaque
              ? "text-brand-950 hover:bg-brand-50"
              : "text-white hover:bg-white/10"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden">
          <div className="container-site pb-4">
            <div className="overflow-hidden rounded-2xl border border-brand-100/60 bg-white shadow-soft">
              <nav
                className="flex flex-col divide-y divide-brand-50"
                aria-label="Móvil"
              >
                {siteConfig.navigation.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-5 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-brand-50/60 text-brand-700"
                          : "text-brand-950/80 hover:bg-brand-50/40"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 px-5 py-3 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
