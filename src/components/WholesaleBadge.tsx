import { Calendar, Boxes, PackageCheck, Truck, Store, Building2 } from "lucide-react";

export function WholesaleBadge() {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
      <div className="flex flex-wrap items-center gap-3">
        {[
          { icon: PackageCheck, label: "Available for Wholesale" },
          { icon: Calendar, label: "Year-Round Supply" },
          { icon: Boxes, label: "Bulk Packaging Options" },
        ].map((b) => (
          <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            <b.icon className="h-3.5 w-3.5 text-primary" /> {b.label}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">Suitable for</p>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {[
          { icon: Store, label: "Retail" },
          { icon: Building2, label: "Foodservice" },
          { icon: Truck, label: "Distribution" },
        ].map((u) => (
          <span key={u.label} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1">
            <u.icon className="h-3.5 w-3.5 text-primary" /> {u.label}
          </span>
        ))}
      </div>
    </div>
  );
}
