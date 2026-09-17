import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useState } from "react";
import { Star, ExternalLink, Check, X, Copy, Globe2, ShieldCheck, Clock, Building2 } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ProviderLogo } from "@/components/provider-logo";

const AFF = "https://proxys.io/?refid=389543";
const PROMO = "HEAT_RES";
const RATING = 4.3;

const TITLE = "PROXYS.IO Review 2026: Pricing, Pool Size & 35% Promo Code";
const DESC =
  "PROXYS.IO review: residential from $1.50/GB, 100M+ IPs in 195 countries, mobile in 14 countries, static IPv4/IPv6 per address, plus the HEAT_RES 35% code.";
const URL = "https://www.toptierproxy.com/proxys-io-review";

const CLD = "https://res.cloudinary.com/dkcqakosa/image/upload";
const IMG = {
  screen1: `${CLD}/f_auto,q_auto,w_1280/v1789525867/proxys.io_img_1_csnkxl.jpg`,
  screen2: `${CLD}/f_auto,q_auto,w_1280/v1789525867/proxy.io_image2_qgiqqr.jpg`,
};

/** Traffic-billed products (per GB). */
const TRAFFIC = [
  {
    product: "Residential rotating",
    price: "$1.50/GB",
    terms: "30, 60 or 90 day plans",
    notes: "No IP or session cap. Country, region and city targeting. Rotation timer 2-60 minutes.",
  },
  {
    product: "Mobile rotating (3G/4G/LTE/5G)",
    price: "Calculated in cart",
    terms: "Pay-as-you-go over 30, 60 or 90 days",
    notes: "PROXYS.IO prices mobile traffic with a volume slider at checkout instead of publishing a single per-GB figure.",
  },
];

/** Everything billed per address per month. */
const PER_ADDRESS = [
  { product: "Individual IPv6", price: 0.13, best: "Cheap bulk addresses for targets that accept IPv6" },
  { product: "Dynamic IP", price: 0.27, best: "Low-cost rotating address for light automation" },
  { product: "Shared IPv4 (up to 3 users)", price: 0.67, best: "Budget datacenter work where sharing is acceptable" },
  { product: "Foreign individual IPv4", price: 1.47, best: "Dedicated non-local IPv4 for geo-specific tasks" },
  { product: "IPv4 with Windows OS fingerprint", price: 1.87, best: "Sessions where the OS fingerprint should read as Windows" },
  { product: "Premium static residential IPv4", price: 3.6, best: "Long-lived accounts needing a stable residential identity" },
  { product: "Dedicated mobile IPv4, unlimited traffic", price: 56.79, best: "Private channel, session-heavy mobile work" },
];

const MOBILE_COUNTRIES = [
  "United States", "United Kingdom", "France", "Spain", "Poland", "Romania", "Bulgaria",
  "Estonia", "Moldova", "Armenia", "Ukraine", "Indonesia", "Thailand",
];

const STATIC_COUNTRIES = [
  "Ukraine", "United Kingdom", "United States", "Germany", "India", "Poland", "Spain", "Belarus",
  "Netherlands", "Kazakhstan", "France", "Turkey", "Romania", "Italy", "Brazil", "Canada",
  "Slovenia", "Lithuania", "Bangladesh", "Argentina", "Sweden", "Hong Kong", "Australia", "South Africa",
];

const PROS = [
  "Residential rotating from $1.50/GB, below most mainstream residential pricing",
  "100M+ residential addresses across 195 countries with country, region and city targeting",
  "HTTP, HTTPS and SOCKS5 issued together on every plan, no protocol upsell",
  "Per-address products from $0.13/month sit alongside traffic plans, so you can mix billing models",
  "Up to 100 saved targeting parameter sets per account and a 2-60 minute rotation timer",
  "Trading since 2016 under a registered UK company",
];

const CONS = [
  "Mobile traffic pricing is calculated by a cart slider rather than published as a starting rate",
  "Mobile pools run roughly 2,000-5,000 addresses per country and carrier combination",
  "Refund window is 24 hours, shorter than the multi-day trials some rivals offer",
  "Minimum static rental is one month, so there is no hourly or daily static testing option",
  "We have not independently benchmarked its success rates, so specifications here are provider-reported",
];

const USE_CASES: { title: string; body: string; link: { label: string; to: string; params?: Record<string, string> } }[] = [
  {
    title: "City-level residential scraping",
    body: "The residential product targets country, region and city and lets you store up to 100 parameter sets, which is the practical way to run one crawler across many localities without rebuilding the request config each time. At $1.50/GB the bandwidth cost of retries hurts less than on premium networks, though you should still measure cost per successful response rather than cost per gigabyte.",
    link: { label: "web scraping use case", to: "/use-cases/$slug", params: { slug: "web-scraping" } },
  },
  {
    title: "Local SERP and rank tracking",
    body: "Search results are localised well below country level, so a national ranking is often an average that no individual city actually sees. Region and city targeting on a residential exit gives defensible local rank data, and the rotation timer can be stretched to 60 minutes so a tracker keeps one address for a batch of queries.",
    link: { label: "SEO rank monitoring", to: "/use-cases/$slug", params: { slug: "seo-monitoring" } },
  },
  {
    title: "Account management on static residential IPv4",
    body: "Premium static residential IPv4 at $3.60 per address per month is the product to use when an account must keep the same consumer-looking identity for weeks. Static rental has a one month minimum, so plan the address count before you buy rather than churning addresses mid-month.",
    link: { label: "social media proxies", to: "/use-cases/$slug", params: { slug: "social-media" } },
  },
  {
    title: "Carrier-specific mobile testing",
    body: "Mobile covers 14 countries with city and carrier selection inside each, and a single country plus carrier combination holds roughly 2,000-5,000 addresses. That is enough for app and ad checks on a named carrier, but it is a narrow pool for session-heavy jobs pinned to one location, so spread work across carriers where the task allows.",
    link: { label: "ad verification proxies", to: "/guides/$slug", params: { slug: "best-ad-verification-proxies" } },
  },
  {
    title: "Bulk low-cost address work on IPv6",
    body: "Individual IPv6 addresses from $0.13 per month are the cheapest entry point here by a wide margin. They only help when the target actually answers over IPv6, which many large sites still do not, so test a handful against your real target before buying a block.",
    link: { label: "datacenter proxy guide", to: "/guides/$slug", params: { slug: "best-datacenter-proxies" } },
  },
  {
    title: "Cost modelling against measured alternatives",
    body: "Headline per-gigabyte price is not the number that decides your bill: blocked requests are billed bandwidth too. Run your monthly volume through our calculator, which uses our own measured success rates for the providers we benchmark, then compare the result with the $1.50/GB residential entry point here.",
    link: { label: "true cost calculator", to: "/resources/$slug", params: { slug: "cost-calculator" } },
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is PROXYS.IO legit?",
    a: "PROXYS.IO is operated by ONLINE CONNECT LTD, a UK-registered company with company number 15419378, registered at 85 Great Portland Street, First Floor, London, W1W 7LT, and the service has been trading since 2016. A named legal entity, a public product catalogue with per-product pricing and a stated refund window are the basics we look for. We have not run PROXYS.IO through our own benchmark suite yet, so every performance and pool figure on this page is provider-reported rather than independently measured by us.",
  },
  {
    q: "How much does PROXYS.IO cost per GB?",
    a: "Residential rotating traffic starts at $1.50 per GB, sold in 30, 60 and 90 day plans with no IP or session cap. Mobile rotating traffic is also pay-as-you-go over 30, 60 and 90 days, but PROXYS.IO calculates the mobile rate with a volume slider in the cart instead of publishing a single starting figure, so check the cart for your volume before budgeting. Every other product is billed per address per month, not per gigabyte.",
  },
  {
    q: "What does the HEAT_RES promo code do?",
    a: "HEAT_RES gives 35% off residential proxies on pay-per-traffic pricing. Apply it at checkout on a residential traffic plan; it does not apply to the per-address static, dynamic, IPv6 or dedicated mobile products. Promo terms are set by the provider and can change, so confirm the discount is showing in the cart total before you pay.",
  },
  {
    q: "How large is the PROXYS.IO residential pool?",
    a: "The provider reports over 100 million ISP addresses across 195 countries, targetable by country, region and city, with up to 100 saved parameter sets per account and rotation on a 2 to 60 minute timer. Pool size claims across this industry are self-reported and count addresses seen over a period rather than addresses available at one moment, so treat the figure as scale positioning and test availability in the specific city you care about.",
  },
  {
    q: "Which countries have mobile proxies?",
    a: "Mobile covers 14 countries with city and carrier selection inside each, including the United States, United Kingdom, France, Spain, Poland, Romania, Bulgaria, Estonia, Moldova, Armenia, Ukraine, Indonesia and Thailand. A single country plus carrier combination holds roughly 2,000 to 5,000 addresses, which is worth knowing before you pin a session-heavy job to one narrow location.",
  },
  {
    q: "Does PROXYS.IO support SOCKS5?",
    a: "Yes. HTTP, HTTPS and SOCKS5 are issued together on every plan, so there is no separate protocol tier to buy. That matters for tooling that only speaks SOCKS5, and for non-HTTP workloads where an HTTP-only proxy would be a dead end.",
  },
  {
    q: "What is the refund policy?",
    a: "PROXYS.IO states a 24 hour refund window, and the minimum rental period on static addresses is one month. A 24 hour window is short, so treat the first day as an active test: run your real target, your real concurrency and your real geography rather than a generic connectivity check, and decide inside that window.",
  },
  {
    q: "How does PROXYS.IO compare with the providers you benchmark?",
    a: "On price, its $1.50/GB residential entry point undercuts most of the residential networks in our Q3 2026 benchmark. On evidence, those networks have measured success rates and response times from our own testing and PROXYS.IO does not yet, so the honest comparison is cheaper on paper, unproven in our lab. If your workload targets heavily protected sites, compare true cost per successful request in our calculator before switching.",
  },
];

export const Route = createFileRoute("/proxys-io-review")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "proxys.io review, proxys io review, is proxys.io legit, proxys.io pricing, proxys.io promo code, HEAT_RES code, residential proxies from 1.50 per gb, cheap residential proxies 2026, mobile proxies by carrier, static residential ipv4, individual ipv6 proxies, socks5 residential proxy, proxys.io alternative, proxys.io vs bright data",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "ToptierProxy.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.toptierproxy.com" },
              { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.toptierproxy.com/reviews" },
              { "@type": "ListItem", position: 3, name: "PROXYS.IO Review", item: URL },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Review",
            name: TITLE,
            url: URL,
            itemReviewed: {
              "@type": "Product",
              name: "PROXYS.IO",
              description:
                "Residential and mobile rotating proxies billed by traffic, plus static IPv4, IPv6, dynamic and dedicated mobile addresses billed per address per month, with HTTP, HTTPS and SOCKS5 on every plan.",
              brand: { "@type": "Brand", name: "PROXYS.IO" },
              offers: [
                {
                  "@type": "Offer",
                  name: "Residential rotating, per GB",
                  price: "1.50",
                  priceCurrency: "USD",
                  url: URL,
                  availability: "https://schema.org/InStock",
                },
                ...PER_ADDRESS.map((p) => ({
                  "@type": "Offer",
                  name: `${p.product}, per address per month`,
                  price: p.price.toFixed(2),
                  priceCurrency: "USD",
                  url: URL,
                  availability: "https://schema.org/InStock",
                })),
              ],
            },
            reviewRating: { "@type": "Rating", ratingValue: String(RATING), bestRating: "5", worstRating: "1" },
            author: { "@type": "Organization", name: "ToptierProxy.com" },
            publisher: { "@type": "Organization", name: "ToptierProxy.com" },
            datePublished: "2026-09-17",
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PROXYS.IO",
            legalName: "ONLINE CONNECT LTD",
            url: "https://proxys.io/",
            email: "mail@proxys.io",
            foundingDate: "2016",
            identifier: "15419378",
            address: {
              "@type": "PostalAddress",
              streetAddress: "85 Great Portland Street, First Floor",
              addressLocality: "London",
              postalCode: "W1W 7LT",
              addressCountry: "GB",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: URL,
            name: TITLE,
            speakable: { "@type": "SpeakableSpecification", cssSelector: [".tt-speakable"] },
          },
        ]),
      },
    ],
  }),
  component: ProxysIoReview,
});

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const diff = rating - i;
        if (diff >= 1) return <Star key={i} className="h-5 w-5 fill-warning text-warning" />;
        if (diff >= 0.5)
          return (
            <span key={i} className="relative inline-block h-5 w-5">
              <Star className="absolute inset-0 h-5 w-5 text-muted-foreground" />
              <span className="absolute inset-0 w-1/2 overflow-hidden">
                <Star className="h-5 w-5 fill-warning text-warning" />
              </span>
            </span>
          );
        return <Star key={i} className="h-5 w-5 text-muted-foreground" />;
      })}
      <span className="ml-1 text-sm font-bold">{rating}/5</span>
    </span>
  );
}

function CTA({ label = "Visit PROXYS.IO", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={AFF}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={`inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg transition-opacity hover:opacity-90 ${className}`}
    >
      {label} <ExternalLink className="h-4 w-4" />
    </a>
  );
}

function PromoCode({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(PROMO).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          },
          () => setCopied(false),
        );
      }}
      aria-label={`Copy PROXYS.IO promo code ${PROMO}`}
      className={`inline-flex items-center gap-2 rounded-md border-2 border-dashed border-primary bg-primary/5 font-mono font-bold text-primary transition-colors hover:bg-primary/10 ${
        compact ? "h-10 px-4 text-sm" : "h-12 px-6 text-base"
      }`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Code copied" : PROMO}
    </button>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl font-bold text-foreground md:text-3xl">
      {children}
    </h2>
  );
}

function Figure({ src, alt, caption, eager = false }: { src: string; alt: string; caption: string; eager?: boolean }) {
  return (
    <figure className="mt-6">
      <img
        src={src}
        alt={alt}
        width={1280}
        height={694}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="w-full rounded-md border border-border bg-card shadow-card"
      />
      <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function ProxysIoReview() {
  return (
    <PageShell
      title=""
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/reviews", label: "Reviews" },
      ]}
    >
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="flex items-center gap-4">
            <ProviderLogo provider={{ slug: "proxys-io", name: "PROXYS.IO" }} size="lg" eager />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                PROXYS.IO Review 2026
              </h1>
              <div className="mt-2 flex items-center gap-3">
                <StarRating rating={RATING} />
                <span className="text-sm text-muted-foreground">Provider-reported specs, not yet lab-tested by us</span>
              </div>
            </div>
          </div>

          <p className="tt-speakable mt-6 text-lg leading-relaxed text-foreground/85">
            PROXYS.IO sells rotating residential traffic from <strong>$1.50 per GB</strong> across a reported{" "}
            <strong>100 million+ ISP addresses in 195 countries</strong>, and pairs it with something most residential
            networks do not offer: a full catalogue of addresses billed per address per month, starting at{" "}
            <strong>$0.13 for an individual IPv6</strong> and running up to a{" "}
            <strong>$56.79 dedicated mobile IPv4 with unlimited traffic</strong>. HTTP, HTTPS and SOCKS5 come together on
            every plan. It is a good fit if you want cheap city-targetable residential bandwidth plus a handful of stable
            static identities on one invoice, and a weaker fit if you need published mobile per-GB pricing, a long refund
            window, or independent benchmark evidence before you commit.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Globe2, label: "195 countries", sub: "Residential coverage" },
              { icon: ShieldCheck, label: "100M+ IPs", sub: "Provider-reported pool" },
              { icon: Clock, label: "2-60 min", sub: "Rotation timer" },
              { icon: Building2, label: "Since 2016", sub: "UK-registered company" },
            ].map((f) => (
              <div key={f.label} className="rounded-md border border-border bg-card p-4 shadow-card">
                <f.icon className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-bold text-foreground">{f.label}</p>
                <p className="text-xs text-muted-foreground">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Offer card */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-md border-2 border-primary bg-card p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Reader offer</p>
            <p className="mt-2 text-2xl font-extrabold text-foreground">35% off residential</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Applies to residential proxies on pay-per-traffic pricing. Enter the code at checkout.
            </p>
            <div className="mt-4">
              <PromoCode />
            </div>
            <CTA className="mt-4 w-full" />
            <p className="mt-3 text-xs text-muted-foreground">
              Affiliate link. We may earn a commission at no extra cost to you. See our{" "}
              <Link to="/disclaimers" className="underline hover:text-primary">
                disclaimers
              </Link>
              .
            </p>
          </div>
        </aside>
      </div>

      <Figure
        src={IMG.screen1}
        alt="PROXYS.IO website showing its proxy product range and pricing entry points"
        caption="The PROXYS.IO product range: traffic-billed residential and mobile plans alongside per-address IPv4, IPv6 and dynamic products."
        eager
      />

      {/* Pricing */}
      <section className="mt-14">
        <H2 id="pricing">PROXYS.IO pricing in 2026</H2>
        <p className="mt-3 max-w-3xl text-foreground/85">
          PROXYS.IO runs two separate billing models, and mixing them up is the easiest way to misread its pricing. Two
          products are metered by traffic; everything else is a monthly rental per address.
        </p>

        <h3 className="mt-8 text-xl font-bold text-foreground">Billed by traffic</h3>
        <div className="mt-4 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Product</th>
                <th className="px-4 py-3 text-left font-bold">Price</th>
                <th className="px-4 py-3 text-left font-bold">Plan lengths</th>
                <th className="px-4 py-3 text-left font-bold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {TRAFFIC.map((t) => (
                <tr key={t.product}>
                  <td className="px-4 py-3 font-semibold text-foreground">{t.product}</td>
                  <td className="px-4 py-3 font-bold text-primary">{t.price}</td>
                  <td className="px-4 py-3 text-foreground/80">{t.terms}</td>
                  <td className="px-4 py-3 text-foreground/80">{t.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          We are not quoting a mobile per-GB figure because PROXYS.IO does not publish one: the rate is produced by a
          volume slider in the cart. Check the cart total for your own volume before budgeting.
        </p>

        <h3 className="mt-10 text-xl font-bold text-foreground">Billed per address, per month</h3>
        <div className="mt-4 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[680px] text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Product</th>
                <th className="px-4 py-3 text-left font-bold">From (per address / month)</th>
                <th className="px-4 py-3 text-left font-bold">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {PER_ADDRESS.map((p) => (
                <tr key={p.product}>
                  <td className="px-4 py-3 font-semibold text-foreground">{p.product}</td>
                  <td className="px-4 py-3 font-bold text-primary">${p.price.toFixed(2)}</td>
                  <td className="px-4 py-3 text-foreground/80">{p.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-foreground/85">
          <li>HTTP, HTTPS and SOCKS5 are issued together on every plan.</li>
          <li>Minimum static rental period is one month.</li>
          <li>The refund window is 24 hours from purchase.</li>
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CTA label="Check current PROXYS.IO pricing" />
          <PromoCode compact />
        </div>
      </section>

      {/* Coverage */}
      <section className="mt-14">
        <H2 id="coverage">Pool size and country coverage</H2>
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          <div className="rounded-md border border-border bg-card p-5 shadow-card">
            <h3 className="text-lg font-bold text-foreground">Residential</h3>
            <p className="mt-2 text-sm text-foreground/85">
              Over 100 million ISP addresses across 195 countries, targetable by country, region and city. Up to 100
              saved parameter sets per account, and rotation on a 2 to 60 minute timer with no IP or session cap.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-card">
            <h3 className="text-lg font-bold text-foreground">Mobile</h3>
            <p className="mt-2 text-sm text-foreground/85">
              14 countries with city and carrier selection inside each. A single country plus carrier combination holds
              roughly 2,000 to 5,000 addresses, which is the number that matters for session-heavy work in one narrow
              location.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{MOBILE_COUNTRIES.join(", ")}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-card">
            <h3 className="text-lg font-bold text-foreground">Static IPv4</h3>
            <p className="mt-2 text-sm text-foreground/85">
              Static addresses are available in 24 countries, rented monthly per address rather than metered by traffic.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{STATIC_COUNTRIES.join(", ")}</p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Pool and coverage figures on this page are reported by PROXYS.IO. Every provider in this market counts
          addresses seen over a period rather than addresses live at one instant, so treat the number as scale
          positioning and verify availability in the specific city or carrier you need. Compare against the networks we
          have measured in our{" "}
          <Link to="/proxy-benchmark-report" className="font-semibold text-primary hover:underline">
            Q3 2026 benchmark report
          </Link>
          .
        </p>
        <Figure
          src={IMG.screen2}
          alt="PROXYS.IO proxy configuration and location targeting interface"
          caption="Location and rotation settings: residential targeting narrows to city level, and saved parameter sets keep configurations reusable."
        />
      </section>

      {/* Pros / cons */}
      <section className="mt-14">
        <H2 id="verdict">Where PROXYS.IO wins and where it does not</H2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-bold text-foreground">Strengths</h3>
            <ul className="mt-4 space-y-3">
              {PROS.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-bold text-foreground">Limitations</h3>
            <ul className="mt-4 space-y-3">
              {CONS.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-foreground/85">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mt-14">
        <H2 id="use-cases">What PROXYS.IO is good for</H2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {USE_CASES.map((u) => (
            <div key={u.title} className="rounded-md border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-bold text-foreground">{u.title}</h3>
              <p className="mt-2 text-sm text-foreground/85">{u.body}</p>
              <Link
                to={u.link.to}
                params={u.link.params}
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Read our {u.link.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Company */}
      <section className="mt-14">
        <H2 id="company">Company and policies</H2>
        <div className="mt-4 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[560px] text-sm">
            <tbody className="divide-y divide-border">
              {[
                ["Operator", "ONLINE CONNECT LTD"],
                ["Company number", "15419378"],
                ["Registered address", "85 Great Portland Street, First Floor, London, W1W 7LT, United Kingdom"],
                ["Trading since", "2016"],
                ["Protocols", "HTTP, HTTPS and SOCKS5 on every plan"],
                ["Minimum static rental", "One month"],
                ["Refund window", "24 hours"],
                ["Reader discount", "HEAT_RES, 35% off residential pay-per-traffic plans"],
                ["Contact", "mail@proxys.io"],
              ].map(([k, v]) => (
                <tr key={k}>
                  <th scope="row" className="w-56 bg-muted px-4 py-3 text-left font-bold">
                    {k}
                  </th>
                  <td className="px-4 py-3 text-foreground/85">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <H2 id="faq">PROXYS.IO FAQ</H2>
        <Accordion type="single" collapsible className="mt-4">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-foreground/85">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Closing CTA */}
      <section className="mt-14 rounded-md border border-border bg-card p-8 text-center shadow-card">
        <h2 className="text-2xl font-bold text-foreground">Ready to test PROXYS.IO?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/85">
          Start on a short residential traffic plan with the HEAT_RES code, run your real target inside the 24 hour
          refund window, and only then commit to static addresses.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <CTA label="Get 35% off residential" />
          <PromoCode compact />
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          <Link to="/reviews" className="font-semibold text-primary hover:underline">
            All proxy reviews
          </Link>
          <Link to="/compare" className="font-semibold text-primary hover:underline">
            Compare providers
          </Link>
          <Link to="/resources/$slug" params={{ slug: "cost-calculator" }} className="font-semibold text-primary hover:underline">
            True cost calculator
          </Link>
          <Link to="/how-we-test" className="font-semibold text-primary hover:underline">
            How we test
          </Link>
        </div>
      </section>

      {/* Mobile action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-border bg-card px-4 py-3 shadow-lg lg:hidden">
        <div className="min-w-0">
          <p className="truncate text-xs font-bold uppercase tracking-wider text-primary">35% off residential</p>
          <p className="truncate text-xs text-muted-foreground">Code HEAT_RES at checkout</p>
        </div>
        <CTA label="Visit" className="h-10 px-5" />
      </div>
    </PageShell>
  );
}
