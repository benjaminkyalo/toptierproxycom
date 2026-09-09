import { Link } from "@tanstack/react-router";
import { Triangle, Linkedin, Twitter, Youtube } from "lucide-react";

type LinkItem = { label: string; href: string };

type Column = {
  title: string;
  items: LinkItem[];
};

const columns: Column[] = [
  {
    title: "PROXY REVIEWS",
    items: [
      { label: "Proxy-Seller Review", href: "/proxy-seller-review" },
      { label: "Live Proxies Review", href: "/live-proxies-review" },
      { label: "GoLogin Review", href: "/gologin-review" },
      { label: "Multilogin Review", href: "/multilogin-review" },
      { label: "2Captcha Review", href: "/2captcha-review" },
      { label: "All Reviews", href: "/reviews" },
    ],
  },
  {
    title: "PROXIES",
    items: [
      { label: "Best VPN Deals", href: "/vpn-deals" },
      { label: "Compare Providers", href: "/compare" },
      { label: "Proxy Benchmark Report", href: "/proxy-benchmark-report" },
    ],
  },
  {
    title: "SCRAPERS",
    items: [
      { label: "Scraper API", href: "/scraper-api" },
      { label: "Scrapy", href: "/scrapy-review" },
      { label: "All Guides", href: "/guides" },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { label: "About", href: "/about" },
      { label: "Why Trust Us", href: "/why-trust-us" },
      { label: "How We Test", href: "/how-we-test" },
      { label: "Blog", href: "/blog" },
      { label: "Sponsors", href: "/sponsors" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function FooterLink({ item }: { item: LinkItem }) {
  const isInternal = item.href.startsWith("/");
  const className =
    "inline-block py-1 text-sm text-foreground/80 transition-colors hover:text-primary";

  if (isInternal) {
    return (
      <Link to={item.href} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} rel="nofollow noopener">
      {item.label}
    </a>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top bar */}
        <div className="flex flex-col items-start justify-between gap-6 pb-10 sm:flex-row sm:items-center">
          <Link to="/" className="flex items-center gap-2">
            <Triangle className="h-6 w-6 fill-current text-primary" strokeWidth={1.5} />
            <span className="text-xl font-bold tracking-tight">
              ToptierProxy<span className="font-normal opacity-80">.com</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <SocialIcon href="#" label="X (Twitter)">
              <Twitter className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        {/* Four-column directory */}
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-foreground underline decoration-2 underline-offset-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} ToptierProxy Media Group LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/terms" className="hover:text-foreground">
              Terms of Use
            </Link>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/disclaimers" className="hover:text-foreground">
              Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
