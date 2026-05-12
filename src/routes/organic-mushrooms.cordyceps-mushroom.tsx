import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { ProductSpecs } from "@/components/ProductSpecs";
import { RelatedProducts } from "@/components/RelatedProducts";
import { CTASection } from "@/components/CTASection";
import cordycepsImg from "@/assets/cordyceps.jpg";

export const Route = createFileRoute("/organic-mushrooms/cordyceps-mushroom")({
  head: () => ({
    meta: [
      { title: "Organic Cordyceps Mushrooms (冬蟲夏草) — Wholesale | APF Organic" },
      { name: "description", content: "Certified-organic Cordyceps militaris (冬蟲夏草) cultivated under controlled lab conditions in BC for premium functional and supplement applications." },
      { property: "og:title", content: "Organic Cordyceps Mushrooms — Wholesale | APF Organic" },
      { property: "og:description", content: "Lab-cultivated Cordyceps militaris with consistent active-compound profile, in bulk for supplement and herbal brands." },
      { property: "og:image", content: "https://www.apforganic.com/og/cordyceps.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Cordyceps militaris · 冬蟲夏草" title="Organic Cordyceps Mushroom" subtitle="The highly-prized 'Chinese caterpillar mushroom' — successfully cultivated at APF under controlled conditions." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img src={cordycepsImg} alt="APF Cordyceps militaris cultivation" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
          <div className="mt-6">
            <ProductSpecs
              chineseName="冬蟲夏草 / 蛹蟲草 (Dōngchóng Xiàcǎo)"
              scientific="Cordyceps militaris"
              origin="Lab-cultivated in Aldergrove, BC, Canada"
              availability="Year-round, controlled-environment harvest"
              packaging="Whole fruiting bodies · powder · bulk by request"
              storage="Cool, dry, sealed · shelf life 24 months"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground">
          <p>Also called the "Chinese caterpillar mushroom" — or "winter worm, summer grass" in Chinese — Cordyceps has a long history in Traditional Chinese and Tibetan medicine, used to support the immune system and respiratory health.</p>
          <p>Cordyceps militaris contains the highest amount of nutritional components among the 400 species in the genus Cordyceps. Once exclusive to royalty due to its rarity in the wild, it is now successfully cultivated under controlled conditions.</p>
          <p>Traditionally prepared as a soup with wolfberries, ginger, red dates or other Chinese herbs added to chicken — and pairs beautifully with Reishi.</p>
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
      <RelatedProducts currentSlug="/organic-mushrooms/cordyceps-mushroom" />
      <CTASection />
    </div>
  );
}
