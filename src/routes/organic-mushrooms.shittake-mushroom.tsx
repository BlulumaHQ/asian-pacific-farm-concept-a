import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import shiitakeImg from "@/assets/shiitake.jpg";

export const Route = createFileRoute("/organic-mushrooms/shittake-mushroom")({
  head: () => ({
    meta: [
      { title: "Organic Shiitake Mushrooms (香菇) — Wholesale Supply | APF Organic" },
      { name: "description", content: "Certified-organic Shiitake mushrooms (Lentinula edodes / 香菇) grown in Aldergrove, BC. Year-round bulk supply in 70g, 100g, 1/2lb, 3lb and 5lb packs for distributors and retailers." },
      { property: "og:title", content: "Organic Shiitake Mushrooms — Wholesale | APF Organic" },
      { property: "og:description", content: "Year-round bulk supply of certified-organic Shiitake mushrooms for supermarkets and distributors across Canada." },
      { property: "og:image", content: "https://www.apforganic.com/og/shiitake.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Lentinula edodes · 香菇" title="Organic Shiitake Mushrooms" subtitle="The 'King of Mushrooms' — meaty, umami-rich, and grown in near-spotless conditions on West Coast sawdust and prairie bran." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={shiitakeImg} alt="APF certified-organic Shiitake mushrooms" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
          <div className="mt-6">
            <ProductSpecs
              chineseName="香菇 (Xiānggū)"
              scientific="Lentinula edodes"
              origin="Aldergrove, British Columbia, Canada"
              availability="Year-round, fresh harvest weekly"
              packaging="70g · 100g · 1/2lb · 3lb · 5lb retail packs · custom bulk for distributors"
              storage="Refrigerated 2–4°C · shelf life 7–10 days"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>The Shiitake mushroom is native to East Asia and known as the "King of Mushrooms" — especially in China and Japan. It has been grown and used in China for over 6,000 years and prized as both a delicious food and traditional medicinal treatment.</p>
          <p>Fresh shiitake is soft but firm; dried has a meatier texture and smoky flavor. At APF our Shiitake mushrooms are grown in near spotless conditions on a special natural mixture of West Coast sawdust and prairie bran — no straw or manure used.</p>
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
      <RelatedProducts currentSlug="/organic-mushrooms/shittake-mushroom" />
      <CTASection />
    </div>
  );
}
