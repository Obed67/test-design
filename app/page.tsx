import type { ReactNode } from "react";

const PHONE_DISPLAY = "+229 01 00 00 00 01";
const PHONE_TEL = "+2290100000001";
const WHATSAPP_URL = `https://wa.me/2290100000001?text=${encodeURIComponent(
  "Bonjour Maison Dossou, je voudrais commander : ",
)}`;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Haie+Vive%2C+Cotonou%2C+B%C3%A9nin";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Haie+Vive,+Cotonou,+B%C3%A9nin&z=15&hl=fr&output=embed";

const products = [
  {
    kind: "pain",
    name: "Pain au levain",
    description:
      "Croûte épaisse, mie irrégulière, avec de la farine de manioc.",
    price: "2\u00a0500\u00a0FCFA",
    alt: "Miche de pain au levain à la croûte dorée.",
  },
  {
    kind: "croissant",
    name: "Croissant beurre",
    description: "Feuilletage au beurre, à manger encore tiède.",
    price: "800\u00a0FCFA",
    alt: "Croissant au beurre doré et feuilleté.",
  },
  {
    kind: "brioche",
    name: "Brioche au bissap",
    description: "Brioche moelleuse, hibiscus infusé dans la pâte.",
    price: "1\u00a0500\u00a0FCFA",
    alt: "Brioche au bissap, à la mie rosée par l’hibiscus.",
  },
  {
    kind: "tarte",
    name: "Tarte ananas-gingembre",
    description:
      "Ananas pain de sucre et gingembre frais, à partager à table.",
    price: "6\u00a0000\u00a0FCFA",
    alt: "Tarte à l’ananas pain de sucre et au gingembre.",
  },
  {
    kind: "mie",
    name: "Pain de mie complet",
    description: "Tranches tendres, pour les petits-déjeuners de la semaine.",
    price: "2\u00a0000\u00a0FCFA",
    alt: "Pain de mie complet, tranché.",
  },
  {
    kind: "cookie",
    name: "Cookie coco-chocolat",
    description: "Cookie épais, noix de coco râpée et chocolat.",
    price: "700\u00a0FCFA",
    alt: "Cookie à la noix de coco et au chocolat.",
  },
] as const;

type ProductKind = (typeof products)[number]["kind"];

function Picture({
  id,
  label,
  viewBox = "0 0 200 200",
  className,
  children,
}: {
  id: string;
  label: string;
  viewBox?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      id={id}
      role="img"
      aria-labelledby={`${id}-titre`}
      viewBox={viewBox}
      className={`min-w-0 ${className ?? ""}`}
    >
      <title id={`${id}-titre`}>{label}</title>
      {children}
    </svg>
  );
}

function ProductMark({ kind }: { kind: ProductKind }) {
  switch (kind) {
    case "pain":
      return (
        <>
          <rect width="200" height="200" fill="#1E5A76" />
          <ellipse cx="100" cy="116" rx="68" ry="44" fill="#F4DC9A" />
          <path
            d="M58 108c18-30 66-32 84 2"
            fill="none"
            stroke="#8E1A38"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M100 74v52"
            fill="none"
            stroke="#8E1A38"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </>
      );
    case "croissant":
      return (
        <>
          <rect width="200" height="200" fill="#1E5A76" />
          <path
            d="M36 132c12-72 116-74 132 2-34-22-98-20-132-2z"
            fill="#FFF8E6"
          />
          <path
            d="M58 118c28-28 70-30 96-6"
            fill="none"
            stroke="#8E1A38"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </>
      );
    case "brioche":
      return (
        <>
          <rect width="200" height="200" fill="#1E5A76" />
          <circle cx="100" cy="112" r="54" fill="#F4DC9A" />
          <circle cx="76" cy="96" r="11" fill="#8E1A38" />
          <circle cx="112" cy="84" r="9" fill="#8E1A38" />
          <circle cx="126" cy="114" r="8" fill="#8E1A38" />
          <circle cx="92" cy="122" r="6" fill="#FFF8E6" />
        </>
      );
    case "tarte":
      return (
        <>
          <rect width="200" height="200" fill="#1E5A76" />
          <circle cx="100" cy="106" r="58" fill="#FFF8E6" />
          <circle cx="100" cy="106" r="40" fill="#F4DC9A" />
          <path
            d="M100 74v64M68 106h64"
            fill="none"
            stroke="#8E1A38"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="100" cy="106" r="7" fill="#8E1A38" />
        </>
      );
    case "mie":
      return (
        <>
          <rect width="200" height="200" fill="#1E5A76" />
          <rect x="46" y="68" width="108" height="80" rx="8" fill="#F4DC9A" />
          <path
            d="M78 68v80M108 68v80M136 68v80"
            fill="none"
            stroke="#1E5A76"
            strokeWidth="4"
          />
        </>
      );
    case "cookie":
      return (
        <>
          <rect width="200" height="200" fill="#1E5A76" />
          <circle cx="100" cy="104" r="56" fill="#F4DC9A" />
          <circle cx="76" cy="90" r="9" fill="#243044" />
          <circle cx="118" cy="82" r="11" fill="#243044" />
          <circle cx="124" cy="118" r="8" fill="#243044" />
          <circle cx="86" cy="124" r="6" fill="#FFF8E6" />
          <circle cx="108" cy="108" r="5" fill="#FFF8E6" />
        </>
      );
  }
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      className={`inline-flex min-h-12 items-center justify-center rounded-md bg-whatsapp px-5 font-display text-lg font-semibold text-paper transition-colors duration-150 hover:bg-[#0b553b] active:bg-[#09462f] ${className}`}
    >
      Commander sur WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:font-display focus:font-semibold"
      >
        Aller au contenu
      </a>

      <header className="sticky top-0 z-30 border-b-4 border-shutter bg-limewash">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-1 px-5 py-2">
          <a
            href="#accueil"
            className="font-display text-2xl font-semibold leading-none tracking-tight"
          >
            Maison Dossou
          </a>
          <nav
            aria-label="Sections"
            className="order-last w-full lg:order-0 lg:w-auto lg:flex-1"
          >
            <ul className="flex flex-wrap gap-x-4">
              {[
                ["#histoire", "Histoire"],
                ["#produits", "Produits"],
                ["#horaires", "Horaires"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center font-display text-base font-semibold text-shutter underline decoration-transparent underline-offset-4 hover:decoration-current"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={WHATSAPP_URL}
            aria-label="Commander sur WhatsApp"
            className="ms-auto inline-flex min-h-11 items-center font-display text-base font-semibold text-whatsapp underline decoration-2 underline-offset-4"
          >
            <span className="lg:hidden">Commander</span>
            <span className="hidden lg:inline">Commander sur WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="contenu">
        <section id="accueil" className="scroll-mt-36 pb-16 pt-8 sm:pb-24 sm:pt-12">
          <h1 className="font-display text-[clamp(3.5rem,15vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.03em]">
            <span className="mx-auto block max-w-6xl px-5">Maison</span>
            <span className="mt-3 block bg-shutter text-paper">
              <span className="mx-auto block max-w-6xl px-5 py-1 sm:py-2">
                Dossou
              </span>
            </span>
          </h1>

          <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-8 md:grid-cols-[minmax(0,34rem)_1fr] md:gap-16 md:pt-12">
            <div className="min-w-0">
              <p className="max-w-full font-display text-3xl leading-tight font-semibold text-pretty sm:text-4xl">
                Le pain du matin, les viennoiseries et les pâtisseries, sortis
                du four à Haie Vive.
              </p>
              <WhatsAppButton className="mt-8 w-full sm:w-fit" />
            </div>
            <Picture
              id="img-comptoir"
              label="Pains au levain et croissant posés sur le comptoir de la boulangerie."
              viewBox="0 0 640 480"
              className="block h-auto w-full max-w-full border-4 border-shutter"
            >
              <rect width="640" height="480" fill="#1E5A76" />
              <rect y="348" width="640" height="132" fill="#243044" />
              <ellipse cx="270" cy="308" rx="156" ry="92" fill="#F4DC9A" />
              <path
                d="M160 292c42-62 176-64 214 10"
                fill="none"
                stroke="#8E1A38"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M270 214v112"
                fill="none"
                stroke="#8E1A38"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M430 312c10-78 112-84 132 2-36-24-98-20-132-2z"
                fill="#FFF8E6"
              />
              <circle cx="520" cy="132" r="34" fill="#8E1A38" />
              <circle cx="520" cy="132" r="12" fill="#F4DC9A" />
              <circle cx="92" cy="390" r="5" fill="#FFF8E6" />
              <circle cx="124" cy="412" r="3" fill="#FFF8E6" />
              <circle cx="560" cy="400" r="4" fill="#F4DC9A" />
            </Picture>
          </div>
        </section>

        <section id="histoire" className="scroll-mt-36 px-5 py-16 sm:py-24">
          <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,38rem)_1fr] md:gap-16">
            <div className="min-w-0">
              <h2 className="font-display text-[2.5rem] leading-none font-semibold tracking-tight sm:text-5xl">
                Notre histoire
              </h2>
              <p className="mt-6 max-w-[62ch] text-lg text-pretty">
                La famille Dossou a ouvert la boutique en 2019, dans le quartier
                Haie Vive. Le levain est nourri chaque matin, dans le même bocal
                depuis le premier four. On y mêle des recettes françaises et ce
                que le marché donne de bon&nbsp;: farine de manioc, ananas pain
                de sucre, gingembre, bissap. Toute la maison s’y met, du
                pétrissage de l’aube à la fermeture.
              </p>
            </div>
            <Picture
              id="img-levain"
              label="Mains qui façonnent une boule de pâte, à côté du bocal de levain."
              viewBox="0 0 400 500"
              className="block h-auto w-full max-w-md border-4 border-shutter"
            >
              <rect width="400" height="500" fill="#1E5A76" />
              <rect x="248" y="86" width="78" height="112" rx="8" fill="#FFF8E6" />
              <rect x="262" y="64" width="50" height="28" rx="4" fill="#F4DC9A" />
              <circle cx="274" cy="128" r="7" fill="#8E1A38" />
              <circle cx="298" cy="150" r="6" fill="#8E1A38" />
              <circle cx="282" cy="168" r="5" fill="#F4DC9A" />
              <ellipse cx="168" cy="318" rx="118" ry="74" fill="#F4DC9A" />
              <ellipse
                cx="78"
                cy="292"
                rx="52"
                ry="34"
                fill="#FFF8E6"
                transform="rotate(-18 78 292)"
              />
              <ellipse
                cx="246"
                cy="336"
                rx="58"
                ry="32"
                fill="#FFF8E6"
                transform="rotate(16 246 336)"
              />
            </Picture>
          </div>
        </section>

        <section id="produits" className="scroll-mt-36 px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-[2.5rem] leading-none font-semibold tracking-tight sm:text-5xl">
              Produits phares
            </h2>
            <ul className="mt-10 flex w-full min-w-0 flex-col gap-8 sm:mt-12 sm:gap-10">
              {products.map((product) => (
                <li
                  key={product.name}
                  className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-4 gap-y-1 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-x-6"
                >
                  <Picture
                    id={`img-${product.kind}`}
                    label={product.alt}
                    className="col-start-1 row-span-3 size-18 self-start border-[3px] border-shutter sm:row-span-2 sm:size-28"
                  >
                    <ProductMark kind={product.kind} />
                  </Picture>
                  <h3 className="col-start-2 min-w-0 font-display text-[1.65rem] leading-tight font-semibold sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="col-start-2 font-display text-xl font-semibold whitespace-nowrap text-bissap tabular-nums sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:self-center sm:text-2xl">
                    {product.price}
                  </p>
                  <p className="col-start-2 min-w-0 max-w-[52ch] text-pretty sm:row-start-2">
                    {product.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="horaires" className="scroll-mt-36 px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-[2.5rem] leading-none font-semibold tracking-tight sm:text-5xl">
              Horaires
            </h2>
            <dl className="mt-8 grid gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-16">
              <div>
                <dt className="text-lg">Lundi – samedi</dt>
                <dd className="mt-2 font-display text-5xl leading-none font-semibold text-shutter sm:text-6xl">
                  6h30 – 20h
                </dd>
              </div>
              <div>
                <dt className="text-lg">Dimanche</dt>
                <dd className="mt-2 font-display text-5xl leading-none font-semibold text-shutter sm:text-6xl">
                  7h – 13h
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-36 px-5 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:items-start md:gap-16">
            <div>
              <h2 className="font-display text-[2.5rem] leading-none font-semibold tracking-tight sm:text-5xl">
                Contact
              </h2>
              <address className="mt-6 text-lg not-italic">
                <p>
                  Quartier Haie Vive
                  <br />
                  Cotonou, Bénin
                </p>
                <p className="mt-4">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-semibold underline decoration-2 underline-offset-4"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </address>
              <WhatsAppButton className="mt-8 w-full sm:w-fit" />
              <p className="mt-5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-shutter underline decoration-2 underline-offset-4"
                >
                  Ouvrir dans Google Maps
                </a>
              </p>
            </div>
            <iframe
              title="Carte du quartier Haie Vive à Cotonou"
              src={MAPS_EMBED}
              className="h-72 w-full border-4 border-shutter bg-paper sm:h-112"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="border-t-8 border-shutter">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl font-semibold">Maison Dossou</p>
            <p className="mt-2 max-w-[36ch]">
              Boulangerie artisanale, quartier Haie Vive, Cotonou.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p>Lundi – samedi, 6h30 – 20h</p>
            <p>Dimanche, 7h – 13h</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 underline decoration-2 underline-offset-4"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              className="font-semibold text-shutter underline decoration-2 underline-offset-4"
            >
              Commander sur WhatsApp
            </a>
            <a href="#accueil" className="mt-3 underline underline-offset-4">
              Haut de la page
            </a>
            <p className="mt-4 text-sm">© 2026 Maison Dossou</p>
          </div>
        </div>
      </footer>
    </>
  );
}
