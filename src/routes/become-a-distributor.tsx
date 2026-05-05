import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Clock, Truck, ShieldCheck, Store, Boxes, Building2, Sprout, Microscope, ClipboardCheck, Package, Send } from "lucide-react";

export const Route = createFileRoute("/become-a-distributor")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — APF Organic" },
      { name: "description", content: "Partner with Western Canada's largest organic specialty mushroom producer. Reliable bulk supply, certified organic, response within 24–48 hours." },
    ],
  }),
  component: Page,
});

const schema = z.object({
  company: z.string().trim().min(1, "Company name required").max(150),
  contact: z.string().trim().min(1, "Contact name required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(30),
  businessType: z.string().min(1, "Please select a business type"),
  volume: z.string().min(1, "Please select estimated volume"),
  message: z.string().trim().max(1000).optional(),
});

function Page() {
  const [status, setStatus] = useState<null | "ok">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      company: String(fd.get("company") || ""),
      contact: String(fd.get("contact") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      businessType: String(fd.get("businessType") || ""),
      volume: String(fd.get("volume") || ""),
      message: String(fd.get("message") || ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <div>
      <PageHero
        eyebrow="B2B Wholesale Partnership"
        title="Partner With a Trusted Organic Mushroom Supplier"
        subtitle="Submit your inquiry and our sales team will respond within 24–48 hours. No-obligation — we'll assess your needs and respond accordingly."
      />

      {/* Qualification + supply reassurance */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Who this is for</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Built for serious wholesale buyers</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { icon: Store, label: "Supermarkets & grocery chains" },
                { icon: Truck, label: "Wholesale distributors" },
                { icon: Boxes, label: "Bulk food buyers & processors" },
                { icon: Building2, label: "Foodservice & retail programs" },
              ].map((i) => (
                <li key={i.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary"><i.icon className="h-4 w-4" /></span>
                  <span className="font-medium text-foreground">{i.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Supply Reassurance</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Why partners trust APF</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { icon: Sprout, title: "Large-scale production", desc: "Western Canada's largest organic specialty mushroom facility." },
                { icon: Clock, title: "Reliable fulfillment", desc: "Year-round weekly volumes — no seasonal gaps." },
                { icon: ShieldCheck, title: "Consistent quality", desc: "Dual-certified organic, controlled environment." },
              ].map((i) => (
                <li key={i.title} className="flex gap-3">
                  <i.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{i.title}</p>
                    <p className="text-muted-foreground">{i.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process explanation */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">How Partnership Works</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">A simple 5-step supply process</h2>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Sprout, t: "Growing" },
              { icon: Microscope, t: "Harvesting" },
              { icon: ClipboardCheck, t: "Quality Control" },
              { icon: Package, t: "Packaging" },
              { icon: Send, t: "Distribution" },
            ].map((s, i) => (
              <li key={s.t} className="rounded-xl border border-border bg-card p-5 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs font-bold text-accent">STEP {i + 1}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{s.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form */}
      <section id="inquiry" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Distributor Inquiry</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">Tell us about your business</h2>
          <p className="mt-2 text-sm text-muted-foreground">We typically respond within 24–48 hours. No-obligation inquiry — we'll assess your needs and respond accordingly.</p>

          <form onSubmit={submit} className="mt-6 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Company Name" name="company" required err={errors.company} />
              <Field label="Contact Name" name="contact" required err={errors.contact} />
              <Field label="Email" name="email" type="email" required err={errors.email} />
              <Field label="Phone" name="phone" required err={errors.phone} />
              <Select label="Business Type" name="businessType" required err={errors.businessType} options={["Supermarket / Grocery Chain", "Wholesale Distributor", "Bulk Food Buyer / Processor", "Foodservice", "Retail Independent", "Other"]} />
              <Select label="Estimated Monthly Volume" name="volume" required err={errors.volume} options={["Under 100 lbs", "100 – 500 lbs", "500 – 2,000 lbs", "2,000 – 10,000 lbs", "10,000+ lbs"]} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea name="message" rows={5} maxLength={1000} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="Varieties of interest, delivery region, timing, anything else we should know…" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Submit Inquiry
              </button>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> We respond within 24–48 hours
              </p>
            </div>
            {status === "ok" && (
              <p className="rounded-md bg-secondary p-3 text-sm text-primary">
                Thank you — your inquiry has been received. Our sales team will be in touch within 24–48 hours.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, err }: { label: string; name: string; type?: string; required?: boolean; err?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input name={name} type={type} required={required} maxLength={255} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
      {err && <p className="mt-1 text-xs text-destructive">{err}</p>}
    </div>
  );
}
function Select({ label, name, options, required, err }: { label: string; name: string; options: string[]; required?: boolean; err?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}{required && <span className="text-destructive"> *</span>}</label>
      <select name={name} required={required} defaultValue="" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {err && <p className="mt-1 text-xs text-destructive">{err}</p>}
    </div>
  );
}
