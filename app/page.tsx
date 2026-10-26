const PHONE_DISPLAY = "+229 01 97 45 20 19";
const PHONE_HREF = "tel:+2290197452019";
const WHATSAPP_URL = `https://wa.me/2290197452019?text=${encodeURIComponent(
  "Bonjour Maison Dossou, je voudrais commander.",
)}`;
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Haie+Vive+Cotonou+Benin";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Haie%20Vive%2C%20Cotonou%2C%20B%C3%A9nin&z=15&output=embed";

const products = [
  {
    name: "Pain au levain",
    description:
      "Mie irrégulière, croûte épaisse, blé et un peu de farine de manioc.",
    price: "2\u202f500\u00a0FCFA",
  },
  {
    name: "Croissant beurre",
    description: "Feuilletage au beurre, cuit dans la matinée.",
    price: "800\u00a0FCFA",
  },
  {
    name: "Brioche au bissap",
    description: "Pâte moelleuse, infusée aux fleurs d’hibiscus.",
    price: "1\u202f500\u00a0FCFA",
  },
  {
    name: "Tarte ananas-gingembre",
    description: "Ananas pain de sucre et gingembre frais, sur pâte brisée.",
    price: "6\u202f000\u00a0FCFA",
  },
  {
    name: "Pain de mie complet",
    description: "Tranches régulières, farines complètes, pour la maison.",
    price: "2\u202f000\u00a0FCFA",
  },
  {
    name: "Cookie coco-chocolat",
    description: "Noix de coco râpée et chocolat, sorti l’après-midi.",
    price: "700\u00a0FCFA",
  },
] as const;

const sectionLinks = [
  { href: "#histoire", label: "Histoire" },
  { href: "#produits", label: "Produits" },
  { href: "#horaires", label: "Horaires" },
  { href: "#contact", label: "Contact" },
] as const;

const ctaClassName =
  "btn-order inline-flex min-h-12 items-center justify-center px-5 font-display text-lg font-semibold";

const headingClassName =
  "shop-text font-display text-[2rem] leading-tight font-semibold tracking-tight md:text-5xl";

function WhatsAppLink({ className }: { className: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      Commander sur WhatsApp
      <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="skip-link sr-only font-display"
      >
        Aller au contenu
      </a>

      <header className="tone-indigo sticky top-0 z-20">
        <div className="site-bar mx-auto max-w-6xl px-5 py-1 md:px-10 md:py-2">
          <a
            href="#haut"
            className="inline-flex min-h-11 items-center text-lg font-semibold"
          >
            Maison Dossou
          </a>
          <nav aria-label="Sections" className="section-nav">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline hover:underline-offset-4">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="contenu">
        <section id="haut" className="tone-indigo">
          <div className="hero-grid mx-auto max-w-6xl gap-10 px-5 pt-6 pb-14 md:px-10 md:pt-12 md:pb-20">
            <div>
              <h1 className="sign-in font-display text-[clamp(2.75rem,14vw,7rem)] leading-[0.88] font-semibold tracking-[-0.03em]">
                <span className="block">Maison</span>
                <span className="block">Dossou</span>
              </h1>
              <p className="mt-6 max-w-prose font-body text-xl leading-relaxed">
                Du pain au levain, des viennoiseries, et le goût du Bénin dans
                la pâte.
              </p>
              <WhatsAppLink className={`${ctaClassName} mt-8`} />
            </div>
            <img
              src="/pagne.svg"
              alt="Carré de pagne jaune ananas, avec des losanges indigo et un cœur rouge bissap."
              width={640}
              height={760}
              className="w-full max-w-xs justify-self-start md:max-w-none"
            />
          </div>
        </section>

        <section id="histoire" className="scroll-mt-20 px-5 py-16 md:px-10 md:py-24">
          <div className="story-grid mx-auto max-w-6xl gap-10">
            <div>
              <h2 className={headingClassName}>Notre histoire</h2>
              <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed">
                <p>
                  La famille Dossou tient la boutique depuis 2019, au quartier
                  Haie Vive. Le levain est nourri sur place, chaque jour, dans
                  le même seau depuis l’ouverture.
                </p>
                <p>
                  Les recettes viennent d’une formation en France, et les
                  ingrédients du marché d’ici : farine de manioc, ananas pain
                  de sucre, gingembre, fleurs de bissap. Les premiers pains
                  sortent du four avant six heures, pour ceux qui passent avant
                  le travail.
                </p>
              </div>
            </div>
            <img
              src="/levain.svg"
              alt="Bocal de levain maison, pâte jaune et bulleuse, couvercle en tissu bissap."
              width={480}
              height={640}
              className="w-full max-w-xs"
            />
          </div>
        </section>

        <section
          id="produits"
          className="scroll-mt-20 px-5 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className={headingClassName}>Produits phares</h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed">
              Les croissants et les brioches partent souvent avant 10 h. Pour
              une tarte, écrivez la veille.
            </p>
            <ul className="price-list mt-8 max-w-3xl">
              {products.map((product) => (
                <li key={product.name} className="py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl leading-snug font-semibold md:text-2xl">
                      {product.name}
                    </h3>
                    <p className="shop-text shrink-0 font-display text-lg font-semibold tabular-nums md:text-xl">
                      {product.price}
                    </p>
                  </div>
                  <p className="mt-2 max-w-prose text-lg leading-relaxed">
                    {product.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="horaires"
          className="band-hours scroll-mt-20 px-5 py-16 md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className={headingClassName}>Horaires</h2>
            <dl className="hours-grid mt-8 gap-10">
              <div>
                <dt className="text-lg">Lundi au samedi</dt>
                <dd className="shop-text mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  6 h 30 – 20 h
                </dd>
              </div>
              <div>
                <dt className="text-lg">Dimanche</dt>
                <dd className="shop-text mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  7 h – 13 h
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-5 py-16 md:px-10 md:py-24">
          <div className="contact-grid mx-auto max-w-6xl gap-10">
            <div>
              <h2 className={headingClassName}>Contact</h2>
              <address className="mt-6 text-lg leading-relaxed not-italic">
                Maison Dossou
                <br />
                Quartier Haie Vive
                <br />
                Cotonou, Bénin
              </address>
              <p className="mt-6">
                <a
                  href={PHONE_HREF}
                  className="shop-text font-display text-2xl font-semibold underline decoration-2 underline-offset-4"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="mt-6">
                <WhatsAppLink className={ctaClassName} />
              </p>
              <p className="mt-5">
                <a
                  href={MAPS_URL}
                  className="shop-text text-lg underline decoration-1 underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir sur Google Maps
                  <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
                </a>
              </p>
            </div>
            <iframe
              title="Carte du quartier Haie Vive à Cotonou, où se trouve Maison Dossou"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame h-72 w-full sm:h-96"
            />
          </div>
        </section>
      </main>

      <footer className="tone-indigo mt-auto px-5 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-2xl font-semibold">Maison Dossou</p>
          <p className="mt-2 max-w-prose text-lg leading-relaxed">
            Boulangerie artisanale, quartier Haie Vive, Cotonou. Depuis 2019.
          </p>
        </div>
      </footer>
    </>
  );
}
