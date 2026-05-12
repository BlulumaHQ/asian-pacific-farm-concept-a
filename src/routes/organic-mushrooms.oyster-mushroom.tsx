import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import oysterImg from "@/assets/oyster.jpg";

export const Route = createFileRoute("/organic-mushrooms/oyster-mushroom")({
  head: () => ({
    meta: [
      { title: "Organic Oyster Mushrooms (蠔菇) — Wholesale Supply | APF Organic" },
      { name: "description", content: "Certified-organic Oyster mushrooms (Pleurotus ostreatus / 蠔菇) cultivated in climate-controlled rooms in BC. Year-round bulk supply for retail and foodservice." },
      { property: "og:title", content: "Organic Oyster Mushrooms — Wholesale | APF Organic" },
      { property: "og:description", content: "Tender, velvety, climate-controlled oyster mushrooms for supermarkets and foodservice across Canada." },
      { property: "og:image", content: "https://www.apforganic.com/og/oyster.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Pleurotus ostreatus · 蠔菇" title="Organic Oyster Mushrooms" subtitle="Tender, velvety, and rich in flavor — cultivated in our climate-controlled rooms on organic sawdust substrate." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={oysterImg} alt="APF certified-organic Oyster mushrooms" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
          <div className="mt-6">
            <ProductSpecs
              chineseName="蠔菇 / 平菇 (Hégū / Pínggū)"
              scientific="Pleurotus ostreatus"
              origin="Aldergrove, British Columbia, Canada"
              availability="Year-round, fresh harvest weekly"
              packaging="70g · 100g · 1/2lb · 3lb · 5lb · custom bulk formats"
              storage="Refrigerated 2–4°C · shelf life 5–7 days"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>Oyster mushrooms are one of the most popular mushrooms in the genus Pleurotus. Their broad, oyster-shaped cap and off-centered stipe gives them their familiar look — and their name.</p>
          <p>At APF, oysters are cultivated in sawdust substrate bags containing a balanced mixture of organic carbon and nitrogen sources, under precisely tuned temperature and humidity at each growth stage. The result is consistent quality, week after week.</p>
          <p>Once cooked, oyster mushrooms have a tender, velvety texture and delicate flavor. They are high in fiber, protein and contain the eight amino acids essential to the human body.</p>
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
      <RelatedProducts currentSlug="/organic-mushrooms/oyster-mushroom" />
      <CTASection />
    </div>
  );
}
