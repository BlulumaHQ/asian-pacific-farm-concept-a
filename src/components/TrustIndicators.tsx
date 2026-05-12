import { Award, MapPin, Warehouse } from "lucide-react";

const items = [
  { icon: Award, value: "30+ Years", label: "Experience growing certified organic mushrooms" },
  { icon: MapPin, value: "Canada-Wide", label: "Distribution to retailers and bulk buyers" },
  { icon: Warehouse, value: "Wholesale & Retail", label: "Bulk supply with retail-ready packaging" },
];

export function TrustIndicators() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((it) => (
          <div key={it.value} className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <it.icon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-bold leading-tight text-foreground">{it.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{it.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
