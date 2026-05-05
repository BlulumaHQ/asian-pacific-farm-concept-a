import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { BadgeCheck } from "lucide-react";
import facilityImg from "@/assets/facility.jpg";
import packingImg from "@/assets/packing.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — APF Organic" },
      { name: "description", content: "Founded in 1996 by Jules Hou, APF is Western Canada's largest organic specialty mushroom producer." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Since 1996"
        title="Western Canada's largest organic specialty mushroom producer"
        subtitle="Built over nearly three decades on a single principle — the highest-quality organic mushrooms, grown chemical-free, supplied with consistency."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our Story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">Brief History</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Asia Pacific Farm Enterprises was established by Mr. Jules Hou in 1996, with the goal
              of becoming a leader in the production of specialty mushrooms — to bring people a
              healthy product, at the best possible quality, that can be enjoyed daily by anyone
              from any background.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              With that purpose in mind, today APF has become the largest organic grower of
              specialty mushrooms in Western Canada, supplying retail chains, distributors, and
              bulk food buyers across the region.
            </p>
          </div>
          <img src={facilityImg} alt="APF facility" loading="lazy" width={1600} height={900} className="rounded-xl object-cover shadow-[var(--shadow-elegant)]" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <img src={packingImg} alt="Packing room" loading="lazy" width={1280} height={800} className="order-last rounded-xl object-cover shadow-[var(--shadow-elegant)] lg:order-first" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Certified Organic, Good Neighbor</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">From spawn to 'shroom — chemical-free</h2>
              <p className="mt-4 text-base text-muted-foreground">
                APF is certified organic by the Certified Organic Associations of British Columbia
                (COABC #03-100) and the Fraser Valley Organic Producers Association (FVOPA #14-100),
                fully compliant with organic growing methods.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                APF has pioneered organic growing methods so that our products are free from any
                pesticides, manure, and unnatural chemicals. Because we use no manure, there is no
                need for pesticides or chemicals in the growing process — leading to a better
                tasting product and making APF a good neighbor in the community, releasing no
                hazardous air or soil pollution into the local environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Facilities</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">An integrated production site</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Office & Operations", desc: "Sales, logistics and administration on-site." },
            { title: "Spawn Laboratory", desc: "Developing high-yield specialty mushroom spawn." },
            { title: "Climate-Controlled Greenhouses", desc: "Large-scale production rooms tuned by variety." },
            { title: "Refrigerated Storage & Packing", desc: "Cold-chain handling from harvest to dispatch." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <BadgeCheck className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
