import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import pompomImg from "@/assets/pompom.jpg";

export const Route = createFileRoute("/organic-mushrooms/pompom-mushroom")({
  head: () => ({
    meta: [
      { title: "Organic Pompom / Lion's Mane Mushrooms (猴頭菇) — Wholesale | APF Organic" },
      { name: "description", content: "Certified-organic Pompom (Lion's Mane / Hericium erinaceus / 猴頭菇) — soft, fluffy texture with seafood-like bite. Year-round bulk supply for wellness and gourmet brands." },
      { property: "og:title", content: "Organic Pompom / Lion's Mane — Wholesale | APF Organic" },
      { property: "og:description", content: "Premium certified-organic Lion's Mane for wellness-focused cooking, gourmet menus and functional food brands." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Hericium erinaceus · 猴頭菇"
        title="Organic Pompom Mushrooms (Lion's Mane)"
        subtitle="Soft, fluffy texture with a unique seafood-like bite — popular for wellness-focused cooking and gourmet menus."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
            <div className="aspect-[3/4] w-full">
              <img
                src={pompomImg}
                alt="APF certified-organic Pompom (Lion's Mane) mushrooms"
                loading="lazy"
                width={768}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-6">
            <ProductSpecs
              chineseName="猴頭菇 (Hóutóugū)"
              scientific="Hericium erinaceus"
              origin="Aldergrove, British Columbia, Canada"
              availability="Year-round, fresh harvest weekly"
              packaging="Whole heads · 1/2lb · 3lb · 5lb · custom bulk"
              storage="Refrigerated 2–4°C · shelf life 5–7 days"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>
            Pompom — known internationally as Lion's Mane — produces dramatic cascading white "icicles" with a delicate
            crab-meat texture. It is one of the most sought-after specialty mushrooms in wellness and gourmet kitchens.
          </p>
          <p>
            Grown in our climate-controlled rooms on certified-organic substrate, our Pompom heads are harvested at
            peak density for clean white color and consistent caliber.
          </p>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-foreground">Cooking suggestions</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tear into pieces and pan-fry as a vegetarian crab cake · roast with butter and herbs · finish soups and
              risottos for a delicate seafood-like note.
            </p>
          </div>
          <WholesaleBadge />
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/become-a-distributor" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Request Wholesale Pricing
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
      <RelatedProducts currentSlug="/organic-mushrooms/pompom-mushroom" />
      <CTASection />
    </div>
  );
}
