import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WholesaleBadge } from "@/components/WholesaleBadge";
import { CTASection } from "@/components/CTASection";
import cordycepsImg from "@/assets/cordyceps.jpg";

export const Route = createFileRoute("/organic-mushrooms/cordyceps-mushroom")({
  head: () => ({
    meta: [
      { title: "Cordyceps Mushrooms — APF Organic" },
      { name: "description", content: "Certified-organic Cordyceps militaris cultivated in controlled lab conditions for premium functional applications." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Cordyceps militaris" title="Cordyceps Mushroom" subtitle="The highly-prized 'Chinese caterpillar mushroom' — successfully cultivated at APF under controlled conditions." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={cordycepsImg} alt="APF Cordyceps cultivation" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
        <div className="space-y-4 text-base text-muted-foreground">
          <p>Also called the "Chinese caterpillar mushroom" — or "winter worm, summer grass" in Chinese — Cordyceps has a long history in Traditional Chinese and Tibetan medicine, used to support the immune system and respiratory health.</p>
          <p>Cordyceps militaris contains the highest amount of nutritional components among the 400 species in the genus Cordyceps. Once exclusive to royalty due to its rarity in the wild, it is now successfully cultivated under controlled conditions.</p>
          <p>Traditionally prepared as a soup with wolfberries, ginger, red dates or other Chinese herbs added to chicken — and pairs beautifully with Reishi.</p>
                  <WholesaleBadge />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
