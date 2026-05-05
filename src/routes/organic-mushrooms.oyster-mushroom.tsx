import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { CTASection } from "@/components/CTASection";
import oysterImg from "@/assets/oyster.jpg";

export const Route = createFileRoute("/organic-mushrooms/oyster-mushroom")({
  head: () => ({
    meta: [
      { title: "Oyster Mushrooms — APF Organic" },
      { name: "description", content: "Certified-organic Oyster mushrooms (Pleurotus ostreatus) — bulk year-round supply for retail and foodservice." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Pleurotus ostreatus" title="Oyster Mushrooms" subtitle="Tender, velvety, and rich in flavor — cultivated in our climate-controlled rooms on organic sawdust substrate." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={oysterImg} alt="APF Oyster mushrooms" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
        <div className="space-y-4 text-base text-muted-foreground">
          <p>Oyster mushrooms are one of the most popular mushrooms in the genus Pleurotus. Their broad, oyster-shaped cap and off-centered stipe gives them their familiar look — and their name.</p>
          <p>At APF, oysters are cultivated in sawdust substrate bags containing a balanced mixture of organic carbon and nitrogen sources, under precisely tuned temperature and humidity at each growth stage. The result is consistent quality, week after week.</p>
          <p>Once cooked, oyster mushrooms have a tender, velvety texture and delicate flavor. They are high in fiber, protein and contain the eight amino acids essential to the human body.</p>
          <div className="rounded-lg border border-border bg-card p-5 text-foreground">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Available pack sizes</p>
            <p className="mt-2 font-semibold">70g · 100g · 1/2lb · 3lbs · 5lbs</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
