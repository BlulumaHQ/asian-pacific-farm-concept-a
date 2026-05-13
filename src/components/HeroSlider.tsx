import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import heroMushrooms from "@/assets/hero-greenhouse.jpg";
import heroShelves from "@/assets/hero-shelves.jpg";

type Slide = {
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
};

const slides: Slide[] = [
  {
    img: heroMushrooms,
    alt: "Four signature organic mushroom varieties grown at APF",
    eyebrow: "Certified Organic Since 1996",
    title: "Four Signature Organic Mushrooms — Grown in BC",
    subtitle:
      "Oyster, King Oyster, Shiitake and Pompom — chemical-free, hand-graded, and ready for retail and wholesale across North America.",
    primary: { label: "Explore Our Mushrooms", to: "/organic-mushrooms" },
    secondary: { label: "Contact Our Sales Team", to: "/contact-us" },
  },
  {
    img: heroShelves,
    alt: "APF climate-controlled greenhouse with year-round mushroom production",
    eyebrow: "Built for Wholesale Scale",
    title: "Year-Round Organic Supply, Every Week of the Year",
    subtitle:
      "Western Canada's largest certified-organic specialty mushroom farm — predictable bulk volumes for supermarkets, distributors and foodservice.",
    primary: { label: "Become a Distributor", to: "/become-a-distributor" },
    secondary: { label: "Request Wholesale Pricing", to: "/contact-us" },
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {slides.map((s, idx) => (
        <img
          key={s.img}
          src={s.img}
          alt={s.alt}
          width={1920}
          height={1080}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        {slides.map((s, idx) => (
          <div
            key={s.title}
            className={`transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "pointer-events-none absolute inset-x-4 top-24 opacity-0 sm:inset-x-6 lg:inset-x-8 lg:top-36"
            }`}
            aria-hidden={idx !== i}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5" /> {s.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              {s.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 sm:text-xl">
              {s.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={s.primary.to}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:opacity-90"
              >
                {s.primary.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={s.secondary.to}
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/15"
              >
                {s.secondary.label}
              </Link>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="relative z-10 mt-12 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setI((p) => (p + 1) % slides.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="ml-2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-accent" : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
