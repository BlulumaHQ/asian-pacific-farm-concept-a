import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to source certified organic mushrooms at scale?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80">
          Partner with Western Canada's largest organic specialty mushroom producer. Year-round
          supply, consistent quality, fast response from our sales team.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/become-a-distributor"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:opacity-90"
          >
            Become a Distributor
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </div>
    </section>
  );
}
