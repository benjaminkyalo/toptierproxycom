import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { ProviderLogo } from "@/components/provider-logo";
import { providers } from "@/data/providers";

const STANDALONE_REVIEWS: {
  to: string;
  slug: string;
  name: string;
  initials: string;
  rating: number;
  description: string;
  facts: string[];
}[] = [
  {
    to: "/thordata-review",
    slug: "thordata",
    name: "Thordata",
    initials: "TD",
    rating: 4,
    description:
      "125M+ residential IPs from $0.65/GB with ISP, mobile and datacenter plans — strong value for high-volume scraping.",
    facts: ["From $0.65/GB", "125M+ IPs", "190+ countries"],
  },
  {
    to: "/proxy-seller-review",
    slug: "proxy-seller",
    name: "Proxy-Seller",
    initials: "PS",
    rating: 4.8,
    description:
      "Residential $1.3/GB, ISP $0.98/IP, mobile $10/IP, IPv4 $0.49/IP and IPv6 $0.02/IP across 220+ locations.",
    facts: ["From $1.3/GB", "220+ locations", "IPv4 · IPv6 · ISP · mobile"],
  },
  {
    to: "/gologin-review",
    slug: "gologin",
    name: "GoLogin",
    initials: "GL",
    rating: 4.3,
    description:
      "Antidetect browser with cloud profiles — pairs with residential proxies for multi-account management.",
    facts: ["From $24/mo", "Antidetect browser", "Cloud profiles"],
  },
  {
    to: "/multilogin-review",
    slug: "multilogin",
    name: "Multilogin",
    initials: "ML",
    rating: 4.5,
    description:
      "Source-level fingerprint spoofing, the most robust antidetect browser for agencies and automation teams.",
    facts: ["From €1.99/profile", "Mimic & Stealthfox", "Team workspaces"],
  },
  {
    to: "/2captcha-review",
    slug: "2captcha",
    name: "2Captcha",
    initials: "2C",
    rating: 4.4,
    description:
      "CAPTCHA solving API for reCAPTCHA, hCaptcha, Cloudflare Turnstile and image challenges at scale.",
    facts: ["From $0.50/1k", "reCAPTCHA · hCaptcha", "API + SDKs"],
  },
  {
    to: "/scrapy-review",
    slug: "scrapy",
    name: "Scrapy",
    initials: "SC",
    rating: 4.6,
    description:
      "Open-source Python scraping framework — free to run, needs proxies and a headless layer for hard targets.",
    facts: ["Free / open source", "Python", "Proxy middleware"],
  },
];

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title: "All Proxy Provider Reviews — Hands-On Tested for 2026" },
      { name: "description", content: "Browse hands-on reviews of every major proxy provider — Bright Data, Oxylabs, Decodo, IPRoyal, SOAX, NetNut, Webshare, Rayobyte, ProxyEmpire, Nimbleway, Proxy-Cheap, Infatica. Pricing, pool size, success rates and Trust Score for 2026." },
      { property: "og:title", content: "All Proxy Provider Reviews | ToptierProxy.com" },
      { property: "og:description", content: "In-depth reviews of every major residential, datacenter, ISP, mobile and scraping API provider." },
      { tagName: "link", rel: "canonical", href: "https://www.toptierproxy.com/reviews" },
      { property: "og:url", content: "https://www.toptierproxy.com/reviews" },
      { property: "og:site_name", content: "ToptierProxy.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
  }),
  component: ReviewsIndex,
});

function ReviewsIndex() {
  return (
    <PageShell
      title="Proxy Provider Reviews"
      intro="In-depth, hands-on reviews of every major proxy provider. Updated for 2026 with pricing, pool size, geographic coverage, anti-bot success rates and Trust Score."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/reviews", label: "Reviews" }]}
    >
      <Prose>
        <p>
          Every provider below has been tested hands-on by our team using a paid customer account.
          Scoring follows our published{" "}
          <Link to="/how-we-test">225-criterion methodology</Link>; institutional trust is captured separately by the{" "}
          <Link to="/trust-score">Trust Score</Link>. Use the cards to jump into a specific review,
          or compare any two vendors side-by-side on the{" "}
          <Link to="/compare">comparison tool</Link>.
        </p>
      </Prose>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {STANDALONE_REVIEWS.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="group flex items-start gap-5 rounded-md border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-border bg-background">
              <ProviderLogo provider={{ slug: p.slug, name: p.name }} size="md" className="!bg-transparent" />
            </div>
            <div className="flex-1">

              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold group-hover:text-primary">{p.name} Review</h2>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-bold">{p.rating}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-foreground/80">{p.description}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {p.facts.map((f, i) => (
                  <span key={f} className="flex gap-2">
                    {i > 0 && <span>•</span>}
                    <span>{f}</span>
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
        {providers.map((p) => (
          <Link
            key={p.slug}
            to="/reviews/$slug"
            params={{ slug: p.slug }}
            className="group flex items-start gap-5 rounded-md border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <ProviderLogo provider={p} size="lg" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold group-hover:text-primary">{p.name} Review</h2>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-bold">{p.rating}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-foreground/80">{p.shortDescription}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span>From ${p.startingPriceGB}/GB</span>
                <span>•</span>
                <span>{p.poolSize}</span>
                <span>•</span>
                <span>{p.countries}+ countries</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Prose>
          <h2>How our reviews are scored</h2>
          <p>
            Each review combines a <strong>star rating</strong> (product quality) and a{" "}
            <strong>Trust Score</strong> (institutional trust). A vendor can earn 5 stars on benchmarks and
            a moderate Trust Score — that combination tells you the product works but procurement should ask
            additional questions. Read the full{" "}
            <Link to="/how-we-test">testing methodology</Link> and the{" "}
            <Link to="/trust-score">Trust Score breakdown</Link>.
          </p>

          <h2>Compare by category</h2>
          <ul>
            <li><Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }}>Best residential proxy providers</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-datacenter-proxies" }}>Best datacenter proxy providers</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-isp-proxies" }}>Best ISP (static residential) providers</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }}>Best mobile (4G/5G) providers</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>Best scraping API providers</Link></li>
          </ul>

          <h2>Popular head-to-head matchups</h2>
          <ul>
            <li><Link to="/vs/$matchup" params={{ matchup: "bright-data-vs-oxylabs" }}>Bright Data vs Oxylabs</Link></li>
            <li><Link to="/vs/$matchup" params={{ matchup: "oxylabs-vs-decodo" }}>Oxylabs vs Decodo</Link></li>
            <li><Link to="/vs/$matchup" params={{ matchup: "bright-data-vs-decodo" }}>Bright Data vs Decodo</Link></li>
            <li><Link to="/vs/$matchup" params={{ matchup: "webshare-vs-iproyal" }}>IPRoyal vs Webshare</Link></li>
            <li><Link to="/vs/$matchup" params={{ matchup: "soax-vs-netnut" }}>SOAX vs NetNut</Link></li>
          </ul>
        </Prose>
      </div>
    </PageShell>
  );
}
