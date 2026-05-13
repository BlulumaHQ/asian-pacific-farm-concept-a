import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import kingOysterImg from "@/assets/king-oyster.jpg";

export const Route = createFileRoute("/organic-mushrooms/king-oyster-mushroom")({
  head: () => ({
    meta: [
      { title: "Organic King Oyster Mushrooms (杏鮑菇) — Wholesale Supply | APF Organic" },
      { name: "description", content: "Certified-organic King Oyster mushrooms (Pleurotus eryngii / 杏鮑菇) with thick meaty stems and rich umami. Year-round bulk supply for retail and foodservice." },
      { property: "og:title", content: "Organic King Oyster Mushrooms — Wholesale | APF Organic" },
      { property: "og:description", content: "Meaty, umami-rich king oyster mushrooms — perfect for grilling, pan searing and plant-based menus." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Pleurotus eryngii · 杏鮑菇"
        title="Organic King Oyster Mushrooms"
        subtitle="Thick, meaty stems with a rich umami flavor — excellent for grilling, pan searing and vegetarian dishes."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
            <div className="aspect-[3/4] w-full">
              <img
                src={kingOysterImg}
                alt="APF certified-organic King Oyster mushrooms"
                loading="lazy"
                width={768}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-6">
            <ProductSpecs
              chineseName="杏鮑菇 (Xìngbàogū)"
              scientific="Pleurotus eryngii"
              origin="Aldergrove, British Columbia, Canada"
              availability="Year-round, fresh harvest weekly"
              packaging="100g · 1/2lb · 3lb · 5lb retail packs · custom bulk"
              storage="Refrigerated 2–4°C · shelf life 7–10 days"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>
            King Oysters are prized for their dense, meaty stems and clean umami flavor. With minimal moisture loss in
            cooking, they hold their shape beautifully when sliced into medallions or scored and pan-seared.
          </p>
          <p>
            Cultivated on our balanced organic substrate under tightly controlled humidity and temperature, every batch
            arrives with consistent caliber and color — week after week.
          </p>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-foreground">Cooking suggestions</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Slice lengthwise and sear with butter and garlic · score and grill as a vegetarian "scallop" · braise into
              ramen and noodle bowls.
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
      <RelatedProducts currentSlug="/organic-mushrooms/king-oyster-mushroom" />
      <CTASection />
    </div>
  );
}
