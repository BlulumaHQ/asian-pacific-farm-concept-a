import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, BadgeCheck, Calendar, PackageCheck } from "lucide-react";
import shiitakeImg from "@/assets/shiitake.jpg";
import oysterImg from "@/assets/oyster.jpg";
import reishiImg from "@/assets/reishi.jpg";
import otherImg from "@/assets/other-mushrooms.jpg";

export const Route = createFileRoute("/organic-mushrooms/")({
  head: () => ({
    meta: [
      { title: "Organic Mushrooms — APF Organic" },
      { name: "description", content: "Bulk organic Shiitake, Oyster, Reishi and specialty mushrooms — certified organic, available fresh year-round." },
    ],
  }),
  component: OrganicMushrooms,
});

const products = [
  {
    slug: "shittake-mushroom",
    name: "Shiitake Mushrooms",
    chinese: "香菇",
    img: shiitakeImg,
    sci: "Lentinula edodes",
    packs: "70g · 100g · 1/2lb · 3lbs · 5lbs",
    blurb: "Meaty, umami-rich — the 'king of mushrooms'.",
  },
  {
    slug: "oyster-mushroom",
    name: "Oyster Mushrooms",
    chinese: "蠔菇",
    img: oysterImg,
    sci: "Pleurotus ostreatus",
    packs: "70g · 100g · 1/2lb · 3lbs · 5lbs",
    blurb: "Tender, velvety, foodservice-friendly.",
  },
  {
    slug: "reishi-mushroom",
    name: "Reishi Mushrooms",
    chinese: "靈芝",
    img: reishiImg,
    sci: "Ganoderma lucidum",
    packs: "Whole · sliced · powder · bulk",
    blurb: "Functional medicinal mushroom for supplement brands.",
  },
  {
    slug: "other-mushrooms",
    name: "Specialty Varieties",
    chinese: "猴頭菇 · 杏鮑菇",
    img: otherImg,
    sci: "Pom-Pom · King · Linz-jhi",
    packs: "Custom retail & bulk",
    blurb: "Rotating specialty crops for chefs and retailers.",
  },
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

      {/* Product grid — alternating wide rows for 4 products */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to="/organic-mushrooms/$slug"
              params={{ slug: p.slug }}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-elegant)] md:grid-cols-2"
            >
              <div className={`aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[320px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-8 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  0{i + 1} · Organic
                </p>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {p.name} <span className="ml-1 font-normal text-muted-foreground">{p.chinese}</span>
                </h3>
                <p className="text-sm italic text-muted-foreground">{p.sci}</p>
                <p className="text-base text-muted-foreground">{p.blurb}</p>
                <div className="mt-2 flex items-center gap-2 rounded-md bg-secondary/60 px-3 py-2 text-xs font-medium text-foreground">
                  <PackageCheck className="h-4 w-4 text-primary" /> {p.packs}
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View product details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
