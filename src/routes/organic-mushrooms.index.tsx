import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BadgeCheck, Calendar, PackageCheck } from "lucide-react";
import shiitakeImg from "@/assets/shiitake.jpg";
import oysterImg from "@/assets/oyster.jpg";
import reishiImg from "@/assets/reishi.jpg";
import cordycepsImg from "@/assets/cordyceps.jpg";
import otherImg from "@/assets/other-mushrooms.jpg";

export const Route = createFileRoute("/organic-mushrooms/")({
  head: () => ({
    meta: [
      { title: "Organic Mushrooms — APF Organic" },
      { name: "description", content: "Bulk organic Shiitake, Oyster, Reishi, Cordyceps and specialty mushrooms — available fresh year-round." },
    ],
  }),
  component: OrganicMushrooms,
});

const products = [
  { slug: "shittake-mushroom", name: "Shiitake Mushrooms", img: shiitakeImg, sci: "Lentinula edodes", packs: "70g · 100g · 1/2lb · 3lbs · 5lbs" },
  { slug: "oyster-mushroom", name: "Oyster Mushrooms", img: oysterImg, sci: "Pleurotus ostreatus", packs: "70g · 100g · 1/2lb · 3lbs · 5lbs" },
  { slug: "reishi-mushroom", name: "Reishi Mushrooms", img: reishiImg, sci: "Ganoderma lucidum", packs: "Bulk & specialty packs" },
  { slug: "cordyceps-mushroom", name: "Cordyceps Mushrooms", img: cordycepsImg, sci: "Cordyceps militaris", packs: "Bulk & specialty packs" },
  { slug: "other-mushrooms", name: "Other Specialty Mushrooms", img: otherImg, sci: "Pom-Pom · King · Linz-jhi", packs: "Custom retail & bulk" },
];

function OrganicMushrooms() {
  return (
    <div>
      <PageHero
        eyebrow="Available Year-Round"
        title="Certified organic specialty mushrooms — at supply scale"
        subtitle="From spawn to 'shroom, our mushrooms are free of pesticides, manure and unnatural chemicals. Available fresh year-round in retail and bulk formats."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Calendar, title: "Year-round availability", desc: "Continuous weekly production cycles." },
            { icon: PackageCheck, title: "Retail & bulk pack sizes", desc: "From 70g consumer packs to 5lb foodservice." },
            { icon: BadgeCheck, title: "Dual-certified organic", desc: "COABC #03-100 · FVOPA #14-100." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
              <f.icon className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/organic-mushrooms/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-xs italic text-muted-foreground">{p.sci}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.packs}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
