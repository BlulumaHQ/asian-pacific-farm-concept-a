import { Link } from "@tanstack/react-router";
import shiitakeImg from "@/assets/shiitake.jpg";
import oysterImg from "@/assets/oyster.jpg";
import reishiImg from "@/assets/reishi.jpg";
import otherImg from "@/assets/other-mushrooms.jpg";

const all = [
  { slug: "/organic-mushrooms/shittake-mushroom", name: "Shiitake", img: shiitakeImg },
  { slug: "/organic-mushrooms/oyster-mushroom", name: "Oyster", img: oysterImg },
  { slug: "/organic-mushrooms/reishi-mushroom", name: "Reishi (Ling-Zhi)", img: reishiImg },
  { slug: "/organic-mushrooms/other-mushrooms", name: "Specialty Varieties", img: otherImg },
] as const;

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const items = all.filter((p) => p.slug !== currentSlug).slice(0, 4);
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Related</p>
            <h2 className="mt-1 text-2xl font-bold text-foreground">Explore More Organic Mushrooms</h2>
          </div>
          <Link to="/organic-mushrooms" className="text-sm font-semibold text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <Link
              key={p.slug}
              to={p.slug}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-foreground">{p.name}</p>
                <p className="mt-1 text-sm text-primary">View details →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
