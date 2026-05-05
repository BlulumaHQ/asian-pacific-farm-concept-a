import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — APF Organic" },
      { name: "description", content: "Frequently asked questions for buyers, distributors and consumers of APF organic specialty mushrooms." },
    ],
  }),
  component: Page,
});

const faqs = [
  {
    q: "What are your minimum order quantities for distributors?",
    a: "Bulk minimums depend on variety, format and delivery region. Contact our sales team — most retail and distributor programs start at standard pallet quantities with weekly replenishment.",
  },
  {
    q: "Which regions do you deliver to?",
    a: "We supply distributors and retail chains across British Columbia and Western Canada, with additional reach via partner distributors. Get in touch for delivery scheduling in your region.",
  },
  {
    q: "What certifications do you hold?",
    a: "APF is dual-certified organic by the Certified Organic Associations of British Columbia (COABC #03-100) and the Fraser Valley Organic Producers Association (FVOPA #14-100).",
  },
  {
    q: "Is supply available year-round?",
    a: "Yes — our climate-controlled greenhouses and continuous production cycles allow us to supply consistent volumes of fresh organic mushrooms 52 weeks a year.",
  },
  {
    q: "How should mushrooms be stored?",
    a: "Store in the fridge at 1–4°C (33–40°F). Paper bags are good (mushrooms may dry slightly — that's natural). Sealed plastic bags are not recommended.",
  },
  {
    q: "How long do APF mushrooms stay fresh?",
    a: "Once a package is opened, consume as soon as possible. Unopened, Shiitake stay fresh 2–3 weeks refrigerated; Oysters stay fresh 1–2 weeks refrigerated.",
  },
  {
    q: "Does mushroom size affect quality?",
    a: "No. There is no quality difference based on size — size variation is for culinary preference. Some chefs like them big, others like bite-sized.",
  },
  {
    q: "There's a fine fur on my Shiitake — is that normal?",
    a: "Yes. It only appears when shiitake are at their freshest state, gathered through delicate hand-picking. Give it a few rubs and it disappears.",
  },
  {
    q: "Does APF sell directly to the public?",
    a: "Yes — pick-up at our farm is available, and limited delivery for orders over $20 within Metro Vancouver on specific delivery days. Some conditions apply, please inquire.",
  },
  {
    q: "Are farm tours available?",
    a: "We no longer offer public tours due to the food-safety standards required to consistently supply our valued customers with assured quality.",
  },
];

function Page() {
  return (
    <div>
      <PageHero eyebrow="Frequently Asked" title="Answers for buyers, distributors and customers" subtitle="Common questions about supply, certifications, storage and ordering. Don't see what you need? Contact our team." />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <dl className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-elegant)]">
              <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="mt-1 text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <dd className="mt-3 text-sm text-muted-foreground">{f.a}</dd>
            </details>
          ))}
        </dl>
      </section>
      <CTASection />
    </div>
  );
}
