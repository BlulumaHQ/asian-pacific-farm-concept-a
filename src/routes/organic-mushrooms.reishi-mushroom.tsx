import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { CTASection } from "@/components/CTASection";
import reishiImg from "@/assets/reishi.jpg";

export const Route = createFileRoute("/organic-mushrooms/reishi-mushroom")({
  head: () => ({
    meta: [
      { title: "Reishi (Ling-Zhi) Mushrooms — APF Organic" },
      { name: "description", content: "Certified-organic Reishi (Ganoderma lucidum) — the 'mushroom of immortality', cultivated for functional and supplement applications." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Ganoderma lucidum" title="Reishi Mushroom (Ling-Zhi)" subtitle="A revered functional mushroom used in Traditional Chinese medicine for over 3,000 years — grown to the highest organic standards at APF." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={reishiImg} alt="APF Reishi mushroom" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
        <div className="space-y-4 text-base text-muted-foreground">
          <p>Mostly fan-shaped and red in color, the Reishi is known as "Ling-Zhi" in Chinese. It was used as a medicinal mushroom for more than 3,000 years and was once consumed only by royalty as the "mushroom of immortality".</p>
          <p>The three main compounds in Reishi — polysaccharides, triterpenoids and adenosine — are associated with immune support and a range of pharmacological effects studied in the literature.</p>
          <p>To absorb the active ingredients effectively, Reishi is traditionally extracted by boiling in hot water and served as tea or soup. Today it is also available in tablet and granular form as a daily supplement.</p>
                  <WholesaleBadge />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
