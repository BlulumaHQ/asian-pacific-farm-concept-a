import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import otherImg from "@/assets/other-mushrooms.jpg";

export const Route = createFileRoute("/organic-mushrooms/other-mushrooms")({
  head: () => ({
    meta: [
      { title: "Pom-Pom, King Oyster & Specialty Mushrooms — Wholesale | APF Organic" },
      { name: "description", content: "Certified-organic Pom-Pom (Lion's Mane / 猴頭菇), King Oyster (杏鮑菇) and other specialty mushrooms grown at APF for retail and foodservice partners." },
      { property: "og:title", content: "Specialty Organic Mushrooms — Wholesale | APF Organic" },
      { property: "og:description", content: "Pom-Pom (Lion's Mane), King Oyster and rotating specialty varieties — same dual-certified organic standard as our core lines." },
      { property: "og:image", content: "https://www.apforganic.com/og/specialty.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Specialty Varieties · 特色菇類" title="Pom-Pom, King Oyster & More" subtitle="Beyond our core lines, APF cultivates a rotating selection of premium specialty mushrooms for retail and foodservice partners." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={otherImg} alt="APF specialty organic mushrooms" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
          <div className="mt-6">
            <ProductSpecs
              chineseName="猴頭菇 (Lion's Mane) · 杏鮑菇 (King Oyster)"
              origin="Aldergrove, British Columbia, Canada"
              availability="Rotating · contact sales for current varieties"
              packaging="Retail trays · 1/2lb · 3lb · 5lb · custom bulk"
              storage="Refrigerated 2–4°C · shelf life 5–10 days"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>Our specialty range includes Pom-Pom (Lion's Mane / 猴頭菇), King Oyster (杏鮑菇), and Linz-jhi varieties — all grown to the same dual-certified organic standard as our core lines.</p>
          <p>These varieties are popular with chefs and premium retail programs for their distinctive textures and flavors. Talk to our sales team about availability windows and bulk formats.</p>
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
      <RelatedProducts currentSlug="/organic-mushrooms/other-mushrooms" />
      <CTASection />
    </div>
  );
}
