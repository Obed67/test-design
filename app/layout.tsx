import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Literata } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Dossou — boulangerie artisanale à Cotonou",
  description:
    "Pain au levain, viennoiseries et pâtisseries au quartier Haie Vive, à Cotonou. Passez en boutique ou commandez sur WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: "#173560",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-chalk font-body text-ink">
        {children}
      </body>
    </html>
  );
}
