import { ShieldCheck, Award, Leaf, MapPin } from "lucide-react";

export function CertBar() {
  const items = [
    { icon: ShieldCheck, label: "COABC Certified", sub: "#03-100" },
    { icon: Award, label: "FVOPA Certified", sub: "#14-100" },
    { icon: Leaf, label: "100% Chemical-Free", sub: "Spawn to 'shroom" },
    { icon: MapPin, label: "Largest in W. Canada", sub: "Aldergrove, BC" },
  ];
  return (
    <div className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{it.label}</p>
              <p className="text-xs text-muted-foreground">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
