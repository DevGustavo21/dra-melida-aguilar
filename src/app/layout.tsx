import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "urología Nicaragua",
    "urólogo Managua",
    "urólogo Granada",
    "Dra. Melida Aguilar",
    "cirugía urológica",
    "chequeo prostático",
    "vasectomía",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "es_NI",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white font-sans text-brand-950" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
