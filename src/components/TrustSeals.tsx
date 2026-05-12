import bcCert from "@/assets/certs/bc-certified.png";
import usdaOrganic from "@/assets/certs/usda-organic.png";

const seals = [
  {
    src: bcCert,
    alt: "Certified Organic British Columbia",
    title: "Certified Organic BC",
    sub: "COABC #03-100",
  },
  {
    src: usdaOrganic,
    alt: "USDA Organic seal",
    title: "USDA Organic",
    sub: "Export-grade certified",
  },
];

const textSeals = [
  { title: "FVOPA Certified", sub: "#14-100" },
  { title: "100% Chemical-Free", sub: "Spawn to harvest" },
  { title: "Largest in W. Canada", sub: "Since 1996" },
];

export function TrustSeals() {
  return (
    <section className="border-y border-border bg-secondary/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Certifications & Trust
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Independently certified organic
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Every batch is grown, harvested and packed under recognized organic standards —
            audited annually for retail, foodservice and export buyers.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {seals.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-5 text-center shadow-sm"
            >
              <img src={s.src} alt={s.alt} className="h-20 w-auto object-contain" />
              <div>
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
          {textSeals.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary/30 bg-background p-5 text-center shadow-sm"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-9 w-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
