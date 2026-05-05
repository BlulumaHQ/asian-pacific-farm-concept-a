import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import otherImg from "@/assets/other-mushrooms.jpg";

export const Route = createFileRoute("/organic-mushrooms/other-mushrooms")({
  head: () => ({
    meta: [
      { title: "Other Specialty Mushrooms — APF Organic" },
      { name: "description", content: "Pom-Pom (Lion's Mane), King Oyster and other certified-organic specialty mushrooms grown at APF." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <PageHero eyebrow="Specialty Varieties" title="Pom-Pom, King Oyster & more" subtitle="Beyond our core lines, APF cultivates a rotating selection of premium specialty mushrooms for retail and foodservice partners." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={otherImg} alt="APF specialty mushrooms" loading="lazy" width={1024} height={768} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
        <div className="space-y-4 text-base text-muted-foreground">
          <p>Our specialty range includes Pom-Pom (Lion's Mane), King Oyster, and Linz-jhi varieties — all grown to the same dual-certified organic standard as our core lines.</p>
          <p>These varieties are popular with chefs and premium retail programs for their distinctive textures and flavors. Talk to our sales team about availability windows and bulk formats.</p>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
