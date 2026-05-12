type Spec = { label: string; value: string };

export function ProductSpecs({
  chineseName,
  origin,
  availability,
  packaging,
  storage,
  scientific,
}: {
  chineseName: string;
  origin: string;
  availability: string;
  packaging: string;
  storage: string;
  scientific?: string;
}) {
  const rows: Spec[] = [
    { label: "Chinese Name", value: chineseName },
    ...(scientific ? [{ label: "Scientific Name", value: scientific }] : []),
    { label: "Origin", value: origin },
    { label: "Availability", value: availability },
    { label: "Packaging", value: packaging },
    { label: "Storage", value: storage },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border bg-secondary/40 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Product Specifications
        </p>
      </div>
      <dl className="divide-y divide-border text-sm">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-3 gap-3 px-5 py-3">
            <dt className="font-medium text-muted-foreground">{r.label}</dt>
            <dd className="col-span-2 font-medium text-foreground">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
