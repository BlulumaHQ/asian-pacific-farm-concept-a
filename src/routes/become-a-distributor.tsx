import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Clock, Truck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/become-a-distributor")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — APF Organic" },
      { name: "description", content: "Partner with Western Canada's largest organic specialty mushroom producer. Reliable bulk supply for supermarkets, distributors and bulk food buyers." },
    ],
  }),
  component: Page,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  phone: z.string().trim().min(7, "Invalid phone").max(30),
  ext: z.string().trim().max(10).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional(),
  position: z.string().trim().max(100).optional(),
  interest: z.array(z.string()).optional(),
  source: z.string().trim().max(150).optional(),
});

const interests = [
  { id: "shiitake", label: "Shiitake Mushrooms" },
  { id: "oyster", label: "Oyster Mushrooms" },
  { id: "cordyceps", label: "Cordyceps Mushrooms" },
  { id: "reishi", label: "Reishi Mushrooms" },
  { id: "other", label: "Other / Specialty" },
];

function Page() {
  const [status, setStatus] = useState<null | "ok">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      phone: String(fd.get("phone") || ""),
      ext: String(fd.get("ext") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      position: String(fd.get("position") || ""),
      interest: fd.getAll("interest").map(String),
      source: String(fd.get("source") || ""),
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
        eyebrow="B2B Partnership"
        title="Become an APF distributor"
        subtitle="Partner with Western Canada's largest organic specialty mushroom producer. Submit your inquiry and our sales team will respond promptly."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <aside className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Who this is for</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                Supermarkets, distributors & bulk buyers
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                If you operate retail chains, foodservice distribution, or bulk procurement programs
                requiring consistent organic specialty mushroom supply — let's talk.
              </p>
            </div>
            <ul className="space-y-4 text-sm">
              {[
                { icon: Truck, title: "Reliable supply capacity", desc: "Year-round volumes from Western Canada's largest organic specialty mushroom facility." },
                { icon: ShieldCheck, title: "Dual-certified organic", desc: "COABC #03-100 and FVOPA #14-100 documentation provided." },
                { icon: Clock, title: "Fast sales response", desc: "Inquiries reviewed by our sales team and answered promptly." },
                { icon: CheckCircle2, title: "Flexible formats", desc: "Retail packs (70g–5lb) and custom bulk for distribution." },
              ].map((f) => (
                <li key={f.title} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <f.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{f.title}</p>
                    <p className="mt-0.5 text-muted-foreground">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <form onSubmit={submit} className="lg:col-span-3 space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First Name" name="firstName" required err={errors.firstName} />
              <Field label="Last Name" name="lastName" required err={errors.lastName} />
              <Field label="Phone Number" name="phone" required err={errors.phone} />
              <Field label="Extension" name="ext" />
              <Field label="Your Email" name="email" type="email" required err={errors.email} />
              <Field label="Company Name" name="company" />
              <div className="sm:col-span-2">
                <Field label="Position in Company" name="position" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Which Organic Mushrooms interest you?</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {interests.map((i) => (
                  <label key={i.id} className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm">
                    <input type="checkbox" name="interest" value={i.id} className="h-4 w-4 accent-[var(--color-primary)]" />
                    {i.label}
                  </label>
                ))}
              </div>
            </div>

            <Field label="Where did you hear about us?" name="source" />

            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              Submit Distributor Inquiry
            </button>
            {status === "ok" && (
              <p className="rounded-md bg-secondary p-3 text-sm text-primary">
                Thank you — your inquiry has been received. Our sales team will be in touch shortly.
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
      <label className="text-sm font-medium text-foreground">
        {label}{required && <span className="text-destructive"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
      />
      {err && <p className="mt-1 text-xs text-destructive">{err}</p>}
    </div>
  );
}
