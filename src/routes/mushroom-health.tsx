import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/mushroom-health")({
  head: () => ({
    meta: [
      { title: "Mushroom & Health — APF Organic" },
      { name: "description", content: "How specialty mushrooms grown at APF can benefit health — taste, nutrition and traditional uses." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Mushroom & Health" title="How specialty mushrooms benefit you" subtitle="Top-quality organic mushrooms deliver superior taste — and well-established health benefits valued for centuries." />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose-sm space-y-5 text-base text-muted-foreground">
          <p>Unlike the rubber chunks floating in canned soups or inferior products in mainstream supermarkets, Asia Pacific Farm mushrooms pack a wallop of health benefits.</p>
          <p>Though you won't find any hallucinogenic varieties at APF (one of the first questions people ask), mushrooms <em>are</em> magic. In Asia that statement is understood as validating: fungi have healing attributes and properties that enhance health.</p>
          <p>Traditional Chinese medicine is not separate from food — chefs understand the health benefits of their dishes. In contrast, Westerners often plate their food and pop their pills. Top quality mushrooms such as those produced at APF deliver superior taste while offering well-established health benefits for the people who use them.</p>
          <p>Read more about each variety on our <a href="/organic-mushrooms" className="font-semibold text-primary hover:underline">Organic Mushrooms</a> page.</p>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
