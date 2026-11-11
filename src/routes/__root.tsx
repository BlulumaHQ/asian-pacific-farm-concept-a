import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

// platform-noindex: block search indexing on *.lovable.app / *.workers.dev / *.pages.dev / *.netlify.app only; custom domains stay indexable.
const PLATFORM_NOINDEX_SCRIPT =
  '(function(){try{var h=location.hostname.toLowerCase().replace(/\\.$/,"");if(/(^|\\.)(lovable\\.app|workers\\.dev|pages\\.dev|netlify\\.app)$/.test(h)){var m=document.createElement("meta");m.name="robots";m.content="noindex, nofollow";document.head.appendChild(m);}}catch(e){}})();';

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "APF Organic — Canada's Leading Organic Mushroom Supplier" },
      { name: "description", content: "Asia Pacific Farm Enterprises — Western Canada's largest certified-organic specialty mushroom producer. Reliable bulk supply for supermarkets and distributors." },
      { name: "author", content: "Asia Pacific Farm Enterprises Inc." },
      { property: "og:title", content: "APF Organic — Canada's Leading Organic Mushroom Supplier" },
      { property: "og:description", content: "Asia Pacific Farm Enterprises — Western Canada's largest certified-organic specialty mushroom producer. Reliable bulk supply for supermarkets and distributors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "APF Organic — Canada's Leading Organic Mushroom Supplier" },
      { name: "twitter:description", content: "Asia Pacific Farm Enterprises — Western Canada's largest certified-organic specialty mushroom producer. Reliable bulk supply for supermarkets and distributors." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/204812aa-7e5c-4410-b9da-46f121271bf9/id-preview-83785f01--7dfd1e22-951c-45f3-b3a7-af77ff818eac.lovable.app-1778002208234.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/204812aa-7e5c-4410-b9da-46f121271bf9/id-preview-83785f01--7dfd1e22-951c-45f3-b3a7-af77ff818eac.lovable.app-1778002208234.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://www.apforganic.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Asia Pacific Farm Enterprises Inc.",
              alternateName: "APF Organic",
              url: "https://www.apforganic.com/",
              logo: "https://www.apforganic.com/logo.svg",
              foundingDate: "1996",
              sameAs: ["https://www.apforganic.com/"],
            },
            {
              "@type": "LocalBusiness",
              name: "Asia Pacific Farm Enterprises Inc.",
              image: "https://www.apforganic.com/logo.svg",
              telephone: "+1-604-856-8558",
              email: "Farm@APForganic.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3577-268 Street",
                addressLocality: "Aldergrove",
                addressRegion: "BC",
                postalCode: "V4W 3G8",
                addressCountry: "CA",
              },
              areaServed: "CA",
              priceRange: "$$",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: PLATFORM_NOINDEX_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
