import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-pd",
  subsets: ["latin"],
  weight: ["700", "500"],
});

const metadataTitle =
  "New Hange Hair | Salão de Beleza em Campos dos Goytacazes RJ - Liso Perfeito e Gloss Express";
const metadataDescription =
  "Salao de beleza em Campos dos Goytacazes RJ com equipe especialista em loiro, liso perfeito, correcao de cor, alisamento sem formol, tratamento capilar profissional, manicure, pedicure e maquiagem.";

const metadataBase = (() => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (siteUrl) {
    try {
      return new URL(siteUrl);
    } catch {
      // Fallback seguro para ambientes sem URL publica configurada.
    }
  }

  return new URL("http://localhost:3000");
})();

const seoKeywords = [
  "salao de beleza em campos dos goytacazes",
  "melhor salao de beleza em campos dos goytacazes",
  "salao especialista em loiro em campos dos goytacazes",
  "especialista em loiro em campos dos goytacazes",
  "especialista em loiro em campos rj",
  "cabeleireiro especialista em campos rj",
  "morena iluminada em campos dos goytacazes",
  "mechas e coloracao profissional em campos rj",
  "correcao de cor no cabelo em campos dos goytacazes",
  "como corrigir cabelo manchado em campos rj",
  "correcao de loiro mal feito em campos dos goytacazes",
  "alisamento de cabelo em campos rj",
  "melhor alisamento em campos dos goytacazes",
  "alisamento sem formol em campos rj",
  "alisamento sem danificar o cabelo em campos dos goytacazes",
  "onde fazer progressiva em campos dos goytacazes",
  "liso perfeito em campos dos goytacazes",
  "liso perfeito no rio de janeiro",
  "tratamento para cabelo danificado em campos rj",
  "tratamento capilar profissional em campos dos goytacazes",
  "tratamento de cabelo com quimica em campos rj",
  "como recuperar cabelo danificado em campos dos goytacazes",
  "tratamento para cabelo quebradico em campos rj",
  "reconstrucao capilar profunda em campos dos goytacazes",
  "hidratacao para cabelo profissional em campos dos goytacazes",
  "manicure e pedicure em campos dos goytacazes",
  "maquiagem profissional em campos rj",
  "salao de cabelo perto de mim em campos",
  "salao no centro de campos dos goytacazes",
  "tinta camuflagem em campos dos goytacazes",
  "como tirar os cabelos brancos com mechas",
  "mega hair em campos dos goytacazes",
  "alongamento capilar em campos dos goytacazes",
  "gloss express em campos dos goytacazes",
  "new hange hair campos dos goytacazes rj",
];

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: metadataTitle,
    template: "%s | New Hange Hair",
  },
  description: metadataDescription,
  applicationName: "New Hange Hair",
  alternates: {
    canonical: "/",
  },
  keywords: seoKeywords,
  category: "beauty",
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    type: "website",
    locale: "pt_BR",
    siteName: "New Hange Hair",
    url: "/",
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "New Hange Hair em Campos dos Goytacazes RJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: ["/assets/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR-RJ",
    "geo.placename": "Campos dos Goytacazes",
    "geo.position": "-21.7780375;-41.3164947",
    ICBM: "-21.7780375, -41.3164947",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${playfair.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
