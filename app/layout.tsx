import type { Metadata } from "next";
import { Literata, Zilla_Slab } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-zilla",
});

const literata = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Maison Dossou — Boulangerie à Cotonou",
  description:
    "Boulangerie artisanale à Haie Vive, Cotonou. Pain au levain, viennoiseries et pâtisseries. Commandez sur WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${zilla.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-limewash font-sans text-base leading-relaxed text-ink">
        {children}
      </body>
    </html>
  );
}
