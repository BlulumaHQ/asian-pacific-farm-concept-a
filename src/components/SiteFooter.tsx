import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-4 lg:pr-8">
          <div className="flex items-center gap-3 font-semibold">
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary-foreground/10 p-1.5">
              <img src={logo} alt="APF Organic logo" className="h-full w-auto" />
            </span>
            <span className="text-lg font-bold">APF Organic</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            Canada's largest organic specialty mushroom producer. Reliable, certified, year-round
            supply for supermarkets, distributors and bulk food buyers since 1996.
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about-us" className="hover:text-primary-foreground">About Us</Link></li>
            <li><Link to="/organic-mushrooms" className="hover:text-primary-foreground">Organic Mushrooms</Link></li>
            <li><Link to="/mushroom-health" className="hover:text-primary-foreground">Mushroom Health</Link></li>
            <li><Link to="/faq" className="hover:text-primary-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Partner With Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/become-a-distributor" className="hover:text-primary-foreground">Become a Distributor</Link></li>
            <li><Link to="/contact-us" className="hover:text-primary-foreground">Contact Sales</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <address className="mt-4 space-y-1 text-sm not-italic text-primary-foreground/75">
            <p>3577-268 Street</p>
            <p>Aldergrove, BC V4W 3G8</p>
            <p>Canada</p>
            <p className="pt-2">Tel: (604) 856-8558</p>
            <p>Fax: (604) 856-6989</p>
            <p>
              <a href="mailto:Farm@APForganic.com" className="hover:text-primary-foreground">
                Farm@APForganic.com
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/65 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © 2026 Asian Pacific Farm. All rights reserved. | Website Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-foreground hover:underline"
            >
              Bluluma
            </a>
          </p>
          <p>Certified Organic — COABC #03-100 · FVOPA #14-100</p>
        </div>
      </div>
    </footer>
  );
}
