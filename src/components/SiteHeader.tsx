import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { TopStrip } from "./TopStrip";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/organic-mushrooms", label: "Organic Mushrooms" },
  { to: "/mushroom-health", label: "Mushroom Health" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact-us", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
    <TopStrip />
    <header className="border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-semibold text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight">APF Organic</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Asia Pacific Farm
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/become-a-distributor"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Become a Distributor
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/become-a-distributor"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Become a Distributor
            </Link>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}
