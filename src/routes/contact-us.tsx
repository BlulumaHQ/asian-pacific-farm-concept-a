import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Printer, Mail } from "lucide-react";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us — APF Organic" },
      { name: "description", content: "Contact our sales team for bulk and wholesale organic specialty mushroom inquiries. Aldergrove, BC, Canada." },
    ],
  }),
  component: Page,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

function Page() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { name: String(fd.get("name") || ""), email: String(fd.get("email") || ""), message: String(fd.get("message") || "") };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <div>
      <PageHero eyebrow="Contact Our Sales Team" title="Wholesale & bulk inquiries welcome" subtitle="For supermarket, distributor and bulk-buyer inquiries — get in touch and our sales team will respond promptly. Typical response within 24–48 hours." />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Asia Pacific Farm Enterprises Inc.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sales contact for supermarkets, distributors and wholesale buyers across Western Canada.</p>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>3577-268 Street<br />Aldergrove, BC V4W 3G8<br />Canada</span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>(604) 856-8558</span></li>
            <li className="flex gap-3"><Printer className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>(604) 856-6989</span></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><a href="mailto:Farm@APForganic.com" className="text-foreground hover:text-primary">Farm@APForganic.com</a></li>
          </ul>
          <p className="text-xs text-muted-foreground">For website-related questions: <a href="mailto:APFweb@APForganic.com" className="hover:text-primary">APFweb@APForganic.com</a></p>
        </div>
        <form onSubmit={submit} className="lg:col-span-3 space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div>
            <label className="text-sm font-medium text-foreground">Name</label>
            <input name="name" required maxLength={100} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Email Address</label>
            <input name="email" type="email" required maxLength={255} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Your Message</label>
            <textarea name="message" required rows={6} maxLength={1000} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Send Message
          </button>
          {status === "ok" && <p className="text-sm text-primary">Thank you — we'll be in touch shortly.</p>}
        </form>
      </section>
    </div>
  );
}
