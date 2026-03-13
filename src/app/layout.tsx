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
  "New Hair | Mega Hair e transformacoes em Campos dos Goytacazes RJ";
const metadataDescription =
  "Base estrutural da landing page New Hair com foco em mega hair, prova social, atendimento personalizado e conversao local em Campos dos Goytacazes RJ.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  keywords: [
    "mega hair campos dos goytacazes rj",
    "alongamento capilar campos dos goytacazes rj",
    "new hair campos dos goytacazes rj",
    "salvao de beleza campos dos goytacazes rj",
    "aplique de cabelo campos dos goytacazes rj",
  ],
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    type: "website",
    locale: "pt_BR",
    siteName: "New Hair",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
  },
  robots: {
    index: true,
    follow: true,
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
