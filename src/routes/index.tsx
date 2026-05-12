import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, FlaskConical, Snowflake, PackageCheck, ShieldCheck, Truck, Calendar, BadgeCheck, Building2, Store, Boxes, Microscope, ClipboardCheck, Package, Send } from "lucide-react";
import heroImg from "@/assets/hero-greenhouse.jpg";
import facilityImg from "@/assets/facility.jpg";
import packingImg from "@/assets/packing.jpg";
import shiitakeImg from "@/assets/shiitake.jpg";
import oysterImg from "@/assets/oyster.jpg";
import reishiImg from "@/assets/reishi.jpg";
import cordycepsImg from "@/assets/cordyceps.jpg";
import otherImg from "@/assets/other-mushrooms.jpg";
import { CertBar } from "@/components/CertBar";
import { TrustSeals } from "@/components/TrustSeals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APF Organic — Canada's Leading Organic Mushroom Supplier" },
      { name: "description", content: "Western Canada's largest certified-organic specialty mushroom producer. Reliable, year-round bulk supply for supermarkets and distributors." },
    ],
  }),
  component: HomePage,
});

const products = [
  { slug: "shittake-mushroom", name: "Shiitake", img: shiitakeImg, desc: "King of mushrooms — meaty, umami-rich." },
  { slug: "oyster-mushroom", name: "Oyster", img: oysterImg, desc: "Tender, velvety, versatile." },
  { slug: "reishi-mushroom", name: "Reishi (Ling-Zhi)", img: reishiImg, desc: "Functional medicinal mushroom." },
  { slug: "cordyceps-mushroom", name: "Cordyceps", img: cordycepsImg, desc: "Highly prized adaptogen." },
  { slug: "other-mushrooms", name: "Pom-Pom & King", img: otherImg, desc: "Specialty varieties year-round." },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="APF organic mushroom greenhouse" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground backdrop-blur">
            <BadgeCheck className="h-3.5 w-3.5" /> Certified Organic Since 1996
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Canada's Leading Organic Specialty Mushroom Supplier
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 sm:text-xl">
            Reliable, certified, large-scale supply for supermarkets and distributors across North
            America — grown chemical-free in Aldergrove, British Columbia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/become-a-distributor" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:opacity-90">
              Become a Distributor <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/15">
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>

      <CertBar />

      {/* Capability */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Supply Capability</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for scale. Engineered for consistency.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              From our climate-controlled greenhouses in Aldergrove, BC, we produce certified organic
              specialty mushrooms at a scale that meets the demands of national retailers and bulk
              distributors — every week of the year.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Sprout, title: "Large-scale greenhouses", desc: "Climate-controlled production rooms purpose-built for specialty mushrooms." },
                { icon: Snowflake, title: "Refrigerated storage", desc: "Cold chain maintained from harvest to dispatch." },
                { icon: Calendar, title: "Year-round supply", desc: "Continuous production cycles for predictable weekly volumes." },
                { icon: FlaskConical, title: "In-house spawn lab", desc: "Proprietary high-yield spawn developed on-site." },
              ].map((f) => (
                <div key={f.title} className="rounded-lg border border-border bg-card p-5">
                  <f.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={facilityImg} alt="APF greenhouse facility" loading="lazy" width={1600} height={900} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our Mushrooms</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Certified organic specialty varieties
              </h2>
            </div>
            <Link to="/organic-mushrooms" className="text-sm font-semibold text-primary hover:underline">
              View all varieties →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why APF */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why Choose APF</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A supplier your customers can trust
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Chemical-Free", desc: "No pesticides, no manure, no synthetic chemicals — from spawn to 'shroom." },
            { icon: BadgeCheck, title: "Dual-Certified Organic", desc: "COABC #03-100 and FVOPA #14-100 fully compliant." },
            { icon: Truck, title: "Stable Supply Chain", desc: "Predictable weekly volumes for retail and wholesale partners." },
            { icon: PackageCheck, title: "Premium Quality", desc: "Hand-graded and packed in a controlled environment." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facility */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <img src={packingImg} alt="APF packing facility" loading="lazy" width={1280} height={800} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Inside the Farm</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Lab. Greenhouses. Storage. Packing.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Our integrated facility includes office space, an on-site laboratory developing
                high-yield spawn, large-scale climate-controlled greenhouses, and refrigerated
                storage and packing rooms — all on one site for full quality control.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {["On-site spawn development laboratory", "Climate-controlled greenhouse production", "Refrigerated cold-chain storage", "In-house grading & packing"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Supply Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our Supply Process</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From spawn to your distribution center
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            A fully integrated five-step process — controlled end-to-end on a single site for
            consistent quality and reliable fulfillment.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: Sprout, title: "Growing", desc: "Climate-controlled greenhouses, organic substrate." },
            { icon: Microscope, title: "Harvesting", desc: "Hand-picked at peak freshness." },
            { icon: ClipboardCheck, title: "Quality Control", desc: "Inspected & graded in-house." },
            { icon: Package, title: "Packaging", desc: "Retail and bulk formats, cold-chain." },
            { icon: Send, title: "Distribution", desc: "Scheduled delivery to partners." },
          ].map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-border bg-card p-5">
              <span className="absolute right-4 top-4 text-xs font-bold text-accent">0{i + 1}</span>
              <s.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Who We Work With */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Who We Work With</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted by the partners who feed Western Canada
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We supply organic specialty mushrooms — at retail and bulk volumes — to the
                operators that power Canadian grocery and foodservice. We're built for long-term
                wholesale partnerships.
              </p>
              <Link to="/become-a-distributor" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Request wholesale pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Store, label: "Supermarkets" },
                { icon: Truck, label: "Distributors" },
                { icon: Building2, label: "Retail Chains" },
                { icon: Boxes, label: "Bulk Buyers" },
                { icon: PackageCheck, label: "Foodservice" },
                { icon: ShieldCheck, label: "Organic Programs" },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center">
                  <t.icon className="h-7 w-7 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strong B2B CTA Block */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Long-Term Wholesale Partnerships</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Looking for a Reliable Organic Supplier?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80">
            We support long-term wholesale partnerships with predictable supply, dual-certified
            organic compliance, and a sales team that responds within 24–48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/become-a-distributor" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:opacity-90">
              Request Wholesale Pricing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10">
              Contact Sales Team
            </Link>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">No-obligation inquiry · Typical response 24–48 hours</p>
        </div>
      </section>
    </div>
  );
}
