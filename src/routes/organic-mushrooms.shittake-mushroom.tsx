import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { CTASection } from "@/components/CTASection";
import shiitakeImg from "@/assets/shiitake.jpg";

export const Route = createFileRoute("/organic-mushrooms/shittake-mushroom")({
  head: () => ({
    meta: [
      { title: "Shiitake Mushrooms — APF Organic" },
      { name: "description", content: "Certified-organic Shiitake mushrooms (Lentinula edodes) — bulk supply year-round in 70g, 100g, 1/2lb, 3lb and 5lb packs." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Lentinula edodes" title="Shiitake Mushrooms" subtitle="The 'King of Mushrooms' — meaty, umami-rich, and grown in near-spotless conditions on West Coast sawdust and prairie bran." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={shiitakeImg} alt="APF Shiitake mushrooms" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
        <div className="space-y-4 text-base text-muted-foreground">
          <p>The Shiitake mushroom is native to East Asia and known as the "King of Mushrooms" — especially in China and Japan. It has been grown and used in China for over 6,000 years and prized as both a delicious food and traditional medicinal treatment.</p>
          <p>Fresh shiitake is soft but firm; dried has a meatier texture and smoky flavor. At APF our Shiitake mushrooms are grown in near spotless conditions on a special natural mixture of West Coast sawdust and prairie bran — no straw or manure used.</p>
          <div className="rounded-lg border border-border bg-card p-5 text-foreground">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Available pack sizes</p>
            <p className="mt-2 font-semibold">70g · 100g · 1/2lb · 3lbs · 5lbs</p>
            <p className="mt-1 text-sm text-muted-foreground">Custom bulk formats available for distributors.</p>
          </div>
                  <WholesaleBadge />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
