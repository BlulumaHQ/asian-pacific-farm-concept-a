import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, BadgeCheck, Calendar, PackageCheck } from "lucide-react";
import shiitakeImg from "@/assets/shiitake.jpg";
import oysterImg from "@/assets/oyster.jpg";
import kingOysterImg from "@/assets/king-oyster.jpg";
import pompomImg from "@/assets/pompom.jpg";

export const Route = createFileRoute("/organic-mushrooms/")({
  head: () => ({
    meta: [
      { title: "Organic Mushrooms — Oyster, King Oyster, Shiitake & Pompom | APF Organic" },
      { name: "description", content: "Bulk certified-organic Oyster, King Oyster, Shiitake and Pompom (Lion's Mane) mushrooms — grown year-round in Aldergrove, BC for retail and foodservice." },
    ],
  }),
  component: OrganicMushrooms,
});

const products = [
  {
    slug: "oyster-mushroom",
    name: "Oyster Mushroom",
    chinese: "蠔菇",
    img: oysterImg,
    sci: "Pleurotus ostreatus",
    packs: "70g · 100g · 1/2lb · 3lbs · 5lbs",
    blurb: "Delicate texture and mild umami — perfect for stir fry, soups, noodles and roasting.",
  },
  {
    slug: "king-oyster-mushroom",
    name: "King Oyster Mushroom",
    chinese: "杏鮑菇",
    img: kingOysterImg,
    sci: "Pleurotus eryngii",
    packs: "100g · 1/2lb · 3lbs · 5lbs",
    blurb: "Meaty texture with rich umami — excellent for grilling, pan searing and vegetarian dishes.",
  },
  {
    slug: "shittake-mushroom",
    name: "Shiitake Mushroom",
    chinese: "香菇",
    img: shiitakeImg,
    sci: "Lentinula edodes",
    packs: "70g · 100g · 1/2lb · 3lbs · 5lbs",
    blurb: "Deep earthy flavor with dense texture — ideal for Asian cuisine, soups and hot pot.",
  },
  {
    slug: "pompom-mushroom",
    name: "Pompom Mushroom",
    chinese: "猴頭菇",
    img: pompomImg,
    sci: "Hericium erinaceus (Lion's Mane)",
    packs: "Whole heads · 1/2lb · 3lbs · 5lbs",
    blurb: "Soft, fluffy texture with a unique seafood-like bite — popular for wellness and gourmet cooking.",
  },
];

function OrganicMushrooms() {
  return (
    <div>
      <PageHero
        eyebrow="Available Year-Round"
        title="Four signature organic mushrooms — at supply scale"
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

      {/* Premium vertical product grid (3:4 imagery) */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to="/organic-mushrooms/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                  0{i + 1} · Organic
                </p>
                <h3 className="text-xl font-bold leading-tight text-foreground">
                  {p.name}
                  <span className="ml-2 text-base font-normal text-muted-foreground">{p.chinese}</span>
                </h3>
                <p className="text-xs italic text-muted-foreground">{p.sci}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-3 flex items-center gap-2 rounded-md bg-secondary/60 px-3 py-2 text-xs font-medium text-foreground">
                  <PackageCheck className="h-4 w-4 text-primary" /> {p.packs}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
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
