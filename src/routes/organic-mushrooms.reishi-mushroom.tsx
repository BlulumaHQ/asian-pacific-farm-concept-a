import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import reishiImg from "@/assets/reishi.jpg";

export const Route = createFileRoute("/organic-mushrooms/reishi-mushroom")({
  head: () => ({
    meta: [
      { title: "Organic Reishi Mushrooms (靈芝) — Wholesale Supply | APF Organic" },
      { name: "description", content: "Certified-organic Reishi (Ganoderma lucidum / 靈芝) — the 'mushroom of immortality', cultivated in BC for functional, supplement and tea applications." },
      { property: "og:title", content: "Organic Reishi (Ling-Zhi) Mushrooms — Wholesale | APF Organic" },
      { property: "og:description", content: "Premium certified-organic Reishi for supplement makers, herbal brands and specialty retail." },
      { property: "og:image", content: "https://www.apforganic.com/og/reishi.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Ganoderma lucidum · 靈芝" title="Organic Reishi Mushroom (Ling-Zhi)" subtitle="A revered functional mushroom used in Traditional Chinese medicine for over 3,000 years — grown to the highest organic standards at APF." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={reishiImg} alt="APF certified-organic Reishi mushroom" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
          <div className="mt-6">
            <ProductSpecs
              chineseName="靈芝 (Língzhī)"
              scientific="Ganoderma lucidum"
              origin="Aldergrove, British Columbia, Canada"
              availability="Seasonal · pre-orders accepted year-round"
              packaging="Whole dried · sliced · powder · bulk by request"
              storage="Cool, dry, sealed · shelf life 24 months"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>Mostly fan-shaped and red in color, the Reishi is known as "Ling-Zhi" in Chinese. It was used as a medicinal mushroom for more than 3,000 years and was once consumed only by royalty as the "mushroom of immortality".</p>
          <p>The three main compounds in Reishi — polysaccharides, triterpenoids and adenosine — are associated with immune support and a range of pharmacological effects studied in the literature.</p>
          <p>To absorb the active ingredients effectively, Reishi is traditionally extracted by boiling in hot water and served as tea or soup. Today it is also available in tablet and granular form as a daily supplement.</p>
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
      <RelatedProducts currentSlug="/organic-mushrooms/reishi-mushroom" />
      <CTASection />
    </div>
  );
}
