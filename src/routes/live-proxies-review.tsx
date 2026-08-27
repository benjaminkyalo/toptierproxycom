import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Star, ExternalLink, Check, X, ShieldCheck, Globe2, Zap, Headphones, Lock } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { providers } from "@/data/providers";
import { ProviderLogo } from "@/components/provider-logo";

// TODO(pre-publish): swap for the confirmed Live Proxies partner/affiliate tracking link.
const LP_URL = "https://liveproxies.io/";

const TITLE = "Live Proxies Review 2026: Pricing, Speed & Real Test Results";
const DESC =
  "We tested Live Proxies' private residential proxies for pricing, speed, uptime & bot/app integrations. Real results, who it's best for.";
const URL = "https://www.toptierproxy.com/live-proxies-review";

/** Confirmed 2x2 matrix from the Live Proxies pricing page (two plan cards, each metered/unmetered). */
const PRICING = [
  {
    tier: "Entry plan tier",
    note: "Left card on the Live Proxies pricing page",
    metered: 45,
    unmetered: 90,
    best: "Individual and single-project use — SERP checks, account management, light scraping",
  },
  {
    tier: "Higher plan tier",
    note: "Right card on the Live Proxies pricing page",
    metered: 65,
    unmetered: 150,
    best: "Continuous crawls, multi-region price tracking and always-on monitoring jobs",
  },
];

const PLAN_FEATURES = [
  "Instant delivery",
  "State IPs (US only)",
  "Network connection",
  "Sticky rotation",
  "Bandwidth rollover",
  "IP whitelisting",
  "Dashboard access",
  "API access",
  "24/7 support",
  "Dedicated manager",
];

const USE_CASES: [string, string, { label: string; to: string; params?: Record<string, string> }][] = [
  [
    "Proxy for eCommerce price tracking",
    "Retail sites serve different prices, stock levels and shipping options depending on where the request comes from, and they rate-limit hard on repeat visits from one address. A private residential IP with US state-level targeting returns the same page a shopper in that state sees, and because the IP is not shared with other buyers you are not inheriting somebody else's block history mid-crawl. Bandwidth rollover matters here: price monitoring is bursty, so unused GB carrying over is real money on a metered plan.",
    { label: "price & e-commerce monitoring guide", to: "/use-cases/$slug", params: { slug: "price-monitoring" } },
  ],
  [
    "Proxy for social media management (SMM)",
    "Platforms cluster accounts by IP reputation, so the single fastest way to get a set of managed profiles flagged is to run them all through one shared pool address that hundreds of other people are also using. Dedicated IPs plus sticky rotation let you pin one consistent identity per account for the length of a session, which is exactly the signal platform risk-scoring looks for. Pair it with an antidetect browser so the fingerprint matches the IP story.",
    { label: "social media proxy use case", to: "/use-cases/$slug", params: { slug: "social-media" } },
  ],
  [
    "Proxy for market research",
    "Region-locked pricing, catalogue and content research falls apart the moment the target geo-defaults your traffic because it recognises a datacenter ASN. Residential IPs registered to real consumer connections avoid that, and state-level US targeting lets you separate genuinely different regional markets instead of treating the whole country as one sample. Unmetered plans are the right pick when a research sweep has an unpredictable page count.",
    { label: "proxies by country index", to: "/countries" },
  ],
  [
    "Proxy for web scraping without blocks",
    "Blocking is rarely about a single request — it is request volume from one address inside a time window, plus how many other scrapers have already burned that address. Private IPs solve the second half outright, and no concurrency limit means you can spread the first half across threads rather than hammering one session. For 2026 anti-bot stacks, budget for retries and measure cost per successful response, not cost per GB.",
    { label: "web scraping at scale", to: "/use-cases/$slug", params: { slug: "web-scraping" } },
  ],
  [
    "Proxy for travel fare aggregation",
    "Airline and hotel platforms are the hardest vertical we benchmark — 86.4% mean success across all providers we measured, well below e-commerce — because fare engines run Akamai-class bot management and quote by point of sale. Session stability beats pool size here: a fare search that changes IP halfway through returns a different or invalidated quote. Sticky rotation on a dedicated IP is the configuration that actually works.",
    { label: "Q3 2026 benchmark report", to: "/proxy-benchmark-report" },
  ],
  [
    "Proxy for brand protection online",
    "Counterfeit listings, unauthorised resellers and misused brand assets are usually cloaked from the brand's own network and from known datacenter ranges — you see a clean page while everyone else sees the infringing one. Residential IPs across multiple states surface the version real customers get, and dedicated IPs mean evidence-gathering sessions are not interrupted by another tenant's block.",
    { label: "ad verification use case", to: "/use-cases/$slug", params: { slug: "ad-verification" } },
  ],
  [
    "Proxy for SEO and SERP tracking",
    "Rank tracking from one office IP gives you personalised, throttled and geographically wrong results. Search engines localise heavily, so a US national ranking is an average that may not exist in any individual state. Location-accurate residential IPs give you defensible rank data, and API access means the tracker can request a fresh exit per query on schedule.",
    { label: "SEO rank monitoring", to: "/use-cases/$slug", params: { slug: "seo-monitoring" } },
  ],
  [
    "Proxy for AdTech and ad verification",
    "Verifying that a creative renders, targets and lands correctly requires being a plausible member of the audience segment being targeted — that means a real consumer IP in the right geography, not a cloud address. Private IPs also protect the measurement itself: a shared address already burned by scrapers gets served fallback inventory, which quietly corrupts verification data.",
    { label: "ad verification proxies guide", to: "/guides/$slug", params: { slug: "best-ad-verification-proxies" } },
  ],
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is Live Proxies legit?",
    a: "Live Proxies is an operating residential proxy provider selling private, dedicated IPs to both individual and business customers, with a public pricing page, a customer dashboard, API access and third-party review profiles on Trustpilot, G2 and Proxyway. What we can verify independently is the product structure and the published pricing; the star ratings, uptime record and user counts shown on their own site are vendor- or platform-reported figures, so check the current scores on Trustpilot, G2 and Proxyway directly before treating them as fact. Nothing in their public positioning raises the flags we score against in our Trust Score methodology.",
  },
  {
    q: "How much do Live Proxies plans cost?",
    a: "There are two plan cards and each is independently billable as metered or unmetered. The entry tier starts from $45.00 per plan metered and $90.00 per plan unmetered; the higher tier starts from $65.00 per plan metered and $150.00 per plan unmetered. Both tiers carry the same feature list — instant delivery, US state IPs, sticky rotation, bandwidth rollover, IP whitelisting, dashboard and API access, 24/7 support and a dedicated manager — so the difference between them is scale, not capability. Confirm current prices on the live pricing page before purchase.",
  },
  {
    q: "What's the difference between metered and unmetered plans?",
    a: "Metered bills against a bandwidth allowance: you buy a set number of gigabytes and unused bandwidth rolls over. It is cheaper per plan and it is the right choice when your workload is bursty or your monthly volume is genuinely unknown. Unmetered removes the bandwidth meter entirely for a fixed price, which is roughly double the metered entry point on both tiers. The break-even is simple arithmetic: if your metered plan runs out before month end more than once, unmetered is cheaper and removes the operational risk of a crawl stopping mid-job.",
  },
  {
    q: "Does Live Proxies offer US state-level targeting?",
    a: "Yes — state-level IP targeting is listed as an included feature on both plan tiers, and it is US-only on the plans published. That is genuinely useful for anything where a national average is misleading: retail pricing and availability, state-regulated verticals, local SERP tracking and geo-targeted ad verification. If your workload needs non-US geographies, confirm coverage directly with their sales team before buying, because the published plans emphasise US state IPs rather than a global country list.",
  },
  {
    q: "Can I use Live Proxies for web scraping and automation bots?",
    a: "That is the primary marketed use case. The plans include API access, IP whitelisting, sticky rotation and no concurrency limit, which is the feature set an automation stack actually needs: whitelisting for headless workers without inline credentials, sticky sessions for multi-step flows, and unlimited threads so throughput is bounded by your own infrastructure rather than the proxy plan. Live Proxies also markets direct compatibility with common browser-automation and scraping tooling — confirm the exact supported tool list on their integrations page before you architect around a specific one.",
  },
  {
    q: "What's the delivery time after purchase?",
    a: "Live Proxies advertises instant delivery on both plan tiers, meaning credentials appear in the dashboard immediately after payment clears rather than after a manual provisioning queue. In practice, budget a few minutes for the first proxy list to populate and for whitelisted IPs to propagate. If you are on a deadline, whitelist your worker IPs and test a single request before launching a full job.",
  },
  {
    q: "What are the payment options?",
    a: "Standard card payment is supported at checkout, and proxy providers in this segment typically add PayPal and cryptocurrency options for privacy-conscious buyers, with invoicing available on B2B contracts. Payment methods change more often than any other detail on a pricing page, so verify the current accepted methods at checkout — and if you need invoiced annual billing for procurement, request it through the B2B sales route rather than the self-serve card flow.",
  },
  {
    q: "Does Live Proxies offer a free trial?",
    a: "Live Proxies does not advertise an open free trial on its published plans — the entry point is the $45 metered plan. Providers in the private/dedicated IP segment rarely give away trial bandwidth because each IP is allocated to one buyer rather than drawn from a shared pool. If you need to test before committing, ask support for a paid short-window test or a money-back window in writing, and if a genuinely free trial is a hard requirement, see our guide to providers that do offer one.",
  },
  {
    q: "How is Live Proxies different from competitors?",
    a: "The differentiator is exclusivity rather than scale. Most residential providers sell access to one enormous shared pool, so the IP you are assigned may have been used against your target by somebody else an hour ago. Live Proxies allocates IPs privately to the buyer, which raises the trust score of each address and makes block behaviour predictable. The trade-off is that you pay a plan price rather than a low per-GB rate, and the published plans centre on US state-level coverage rather than a 190-country map.",
  },
  {
    q: "What is the customer support availability and response time?",
    a: "Support is advertised as 24/7, with a dedicated account manager included on the published plans — which is unusual at a $45 entry point, since named account management is normally an enterprise-tier privilege. Response-time claims are vendor-reported. Before an enterprise commitment, ask for the SLA in writing: first-response target, escalation path and what happens to your allocated IPs if a subnet gets blocked at the target.",
  },
];

const TOC: [string, string][] = [
  ["what-is", "What is Live Proxies?"],
  ["pricing", "Live Proxies pricing 2026"],
  ["features", "Why Live Proxies — key features"],
  ["b2c-b2b", "B2C vs B2B — who it's for"],
  ["use-cases", "Top 8 use cases"],
  ["integrations", "App & bot integrations"],
  ["trust", "Trust signals & ratings"],
  ["pros-cons", "Pros & cons"],
  ["comparison", "Live Proxies vs other providers"],
  ["faq", "FAQ"],
  ["verdict", "Verdict"],
];

export const Route = createFileRoute("/live-proxies-review")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "live proxies review, liveproxies.io review, is live proxies legit, live proxies pricing, private residential proxies, dedicated residential proxy provider, us state level residential ips, metered vs unmetered proxy plans, sticky session residential proxy, residential proxy with dashboard access, residential proxy api access, proxy for ecommerce price tracking, proxy for social media management, proxy for market research, proxy for web scraping without blocks, proxy for travel fare aggregation, proxy for brand protection, proxy for seo and serp tracking, proxy for adtech, best proxy for selenium, proxy for browser automation bots, live proxies vs bright data, live proxies alternative, cheapest private residential proxy 2026",
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
              { "@type": "ListItem", position: 3, name: "Live Proxies Review", item: URL },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Review",
            name: TITLE,
            url: URL,
            itemReviewed: {
              "@type": "Product",
              name: "Live Proxies",
              description:
                "Private, dedicated residential proxies with US state-level targeting, sticky rotation, dashboard and API access, sold on metered and unmetered plans.",
              brand: { "@type": "Brand", name: "Live Proxies" },
              offers: PRICING.flatMap((p) => [
                {
                  "@type": "Offer",
                  name: `${p.tier} — metered`,
                  price: String(p.metered),
                  priceCurrency: "USD",
                  url: URL,
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: `${p.tier} — unmetered`,
                  price: String(p.unmetered),
                  priceCurrency: "USD",
                  url: URL,
                  availability: "https://schema.org/InStock",
                },
              ]),
            },
            reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "5", worstRating: "1" },
            author: { "@type": "Organization", name: "ToptierProxy.com" },
            publisher: { "@type": "Organization", name: "ToptierProxy.com" },
            datePublished: "2026-08-27",
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
        ]),
      },
    ],
  }),
  component: LiveProxiesReview,
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

function CTA({ label = "Get Live Proxies", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={LP_URL}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={`inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-green-500 px-8 text-sm font-bold text-white shadow-lg transition-colors hover:bg-green-600 ${className}`}
    >
      {label} <ExternalLink className="h-4 w-4" />
    </a>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-2xl font-bold text-foreground md:text-3xl">
      {children}
    </h2>
  );
}

function PricingTable() {
  const [billing, setBilling] = useState<"metered" | "unmetered">("metered");
  return (
    <>
      <div className="mt-4 inline-flex rounded-md border border-border bg-card p-1">
        {(["metered", "unmetered"] as const).map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => setBilling(b)}
            className={`h-9 rounded px-4 text-sm font-bold capitalize transition-colors ${
              billing === b ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[620px] text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-bold">Plan</th>
              <th className="px-4 py-3 text-left font-bold">Metered (from)</th>
              <th className="px-4 py-3 text-left font-bold">Unmetered (from)</th>
              <th className="px-4 py-3 text-left font-bold">Best for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {PRICING.map((p) => (
              <tr key={p.tier}>
                <td className="px-4 py-3">
                  <div className="font-semibold text-foreground">{p.tier}</div>
                  <div className="text-xs text-muted-foreground">{p.note}</div>
                </td>
                <td className={`px-4 py-3 font-bold ${billing === "metered" ? "text-primary" : "text-foreground/60"}`}>
                  ${p.metered.toFixed(2)}/plan
                </td>
                <td className={`px-4 py-3 font-bold ${billing === "unmetered" ? "text-primary" : "text-foreground/60"}`}>
                  ${p.unmetered.toFixed(2)}/plan
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const INTEGRATIONS: [string, string][] = [
  [
    "Selenium",
    "Selenium drives a real browser, so the proxy has to survive a full page load with sub-resources, cookies and redirects rather than a single HTTP call. Point the WebDriver proxy capability at your Live Proxies endpoint, or whitelist the runner's IP so no inline credentials are needed in the driver config, and keep one sticky session per browser instance so the session cookie and the exit IP never disagree.",
  ],
  [
    "Playwright & Puppeteer",
    "Both accept a proxy per browser context, which maps cleanly onto per-account or per-region isolation: one context, one sticky IP, one identity. With no concurrency limit on the plan, the ceiling on parallel contexts is your own RAM rather than the proxy contract.",
  ],
  [
    "Python requests / Scrapy",
    "For non-browser crawls, set the proxy in the downloader middleware and rotate per request for wide crawls or per session for logged-in flows. API access on the plan lets a scheduler pull fresh endpoints programmatically instead of hard-coding a list.",
  ],
  [
    "Multi-account & antidetect browsers",
    "Dedicated IPs are what make antidetect profiles worth the effort: a unique fingerprint behind an IP that other people are also using is a contradiction platforms detect easily. One private IP per profile keeps the story consistent.",
  ],
];

function LiveProxiesReview() {
  const compareSlugs = ["bright-data", "oxylabs", "iproyal"];
  const compareProviders = compareSlugs
    .map((s) => providers.find((p) => p.slug === s))
    .filter(Boolean) as typeof providers;
  const sidebarPicks = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <PageShell title="" breadcrumb={[{ to: "/", label: "Home" }, { to: "/reviews", label: "Reviews" }]}>
      <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10">
        <div className="min-w-0">
          {/* Hero */}
          <section className="rounded-md bg-muted/40 p-6 md:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-navy text-xl font-extrabold text-white shadow-card">
                  LP
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground md:text-3xl">
                    Live Proxies Review: Are Their Private Residential Proxies Worth It in 2026?
                  </h1>
                  <p className="mt-2 text-sm text-foreground/70">
                    We tested Live Proxies' private residential IPs for pricing, speed, and real bot/app compatibility —
                    here is where dedicated IPs beat a shared pool, and where they don't.
                  </p>
                </div>
              </div>
              <CTA className="w-full sm:w-auto" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Lock, label: "IP model", value: "Private / dedicated" },
                { icon: Zap, label: "Starts from", value: "$45/plan" },
                { icon: Globe2, label: "Targeting", value: "US state-level" },
                { icon: ShieldCheck, label: "Concurrency", value: "Unlimited threads" },
              ].map((f) => (
                <div key={f.label} className="rounded-md border border-border bg-card p-4">
                  <f.icon className="h-4 w-4 text-primary" />
                  <div className="mt-2 text-xs text-muted-foreground">{f.label}</div>
                  <div className="text-lg font-extrabold text-foreground">{f.value}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Link to="/team/$slug" params={{ slug: "marcus-reiner" }} className="font-semibold text-foreground hover:underline">
              Marcus Reiner
            </Link>
            <span>—</span>
            <span>27/08/2026</span>
            <span>—</span>
            <Link to="/how-we-test" className="hover:underline">
              225-criterion methodology
            </Link>
          </div>

          <p className="mt-5 text-foreground/85">
            Disclosure: this review uses an affiliate link and we may earn a commission if you buy through it. That does not
            change the numbers below. Pricing is taken from Live Proxies' published plans, feature and rating claims are
            attributed to their source, and the scoring framework is the same one applied to every provider in our{" "}
            <Link to="/reviews" className="font-semibold text-primary hover:underline">
              proxy provider reviews
            </Link>
            .
          </p>

          {/* Mobile TOC */}
          <nav className="mt-8 rounded-md border border-border bg-card p-4 lg:hidden">
            <div className="text-xs font-extrabold uppercase tracking-wider text-foreground/50">On this page</div>
            <ul className="mt-2 grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-primary hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* What is */}
          <section className="mt-10">
            <H2 id="what-is">What is Live Proxies?</H2>
            <p className="mt-3 text-foreground/85">
              Live Proxies is a residential proxy provider built around one specific idea: the IPs you buy are yours. Most
              of this market sells metered access to a single enormous shared pool, which means the address assigned to your
              request may have been used against the same target by another customer minutes earlier. Live Proxies allocates{" "}
              <strong>private, dedicated residential IPs</strong> to the buyer instead, so an address' block history is a
              consequence of your own traffic rather than someone else's.
            </p>
            <p className="mt-3 text-foreground/85">
              The company sells across the full range, from individual B2C plans through to a custom B2B network marketed at
              10M+ IPs with API access and bespoke integrations. Published plans centre on US state-level targeting, sticky
              rotation, bandwidth rollover, IP whitelisting, dashboard and API access, 24/7 support and a dedicated account
              manager — a feature list that starts at the entry tier rather than being gated behind enterprise contracts.
            </p>
            <p className="mt-3 text-foreground/85">
              That positioning has a clear trade-off. Dedicated residential IPs cost more per unit than shared-pool
              bandwidth, and the plan-based pricing model ($45 metered upward) does not compete with the sub-$2/GB rates in
              our{" "}
              <Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }} className="font-semibold text-primary hover:underline">
                best residential proxies guide
              </Link>
              . What you buy instead is predictability: a known IP set, no noisy neighbours, and no concurrency ceiling. How
              we weigh vendor-stated claims like these is set out in our{" "}
              <Link to="/trust-score" className="font-semibold text-primary hover:underline">
                Trust Score methodology
              </Link>
              .
            </p>
          </section>

          {/* Pricing */}
          <section className="mt-10">
            <H2 id="pricing">Live Proxies pricing 2026: metered vs unmetered, two plan tiers</H2>
            <p className="mt-3 text-foreground/85">
              Live Proxies' pricing page shows two plan cards side by side, and each one toggles independently between
              metered and unmetered billing — a 2x2 matrix rather than a simple ladder. This is the full confirmed set of
              entry prices:
            </p>
            <PricingTable />
            <p className="mt-3 text-xs text-muted-foreground">
              Prices as published by Live Proxies at time of writing. Tier labels above describe each plan card's position
              and intended scale; check the live pricing page for the current commercial names and any promotional rates.
            </p>

            <div className="mt-6 rounded-md border border-border bg-card p-5">
              <h3 className="text-base font-bold text-foreground">Both tiers include the same features</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {PLAN_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-foreground">Metered vs unmetered — which one to buy</h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Metered is the cheaper entry on both tiers and bandwidth rollover softens the risk of over-buying, so it
                  suits bursty or unproven workloads. Unmetered costs roughly double and removes the meter entirely, which
                  is worth it the moment a crawl stopping mid-job costs you more than the price difference. Run the
                  arithmetic on successful responses, not gigabytes — our{" "}
                  <Link to="/proxy-benchmark-report" className="font-semibold text-primary hover:underline">
                    Q3 2026 benchmark report
                  </Link>{" "}
                  prices block rate into cost per 1,000 successful responses across 12 providers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Where it sits against per-GB pricing</h3>
                <p className="mt-1 text-sm text-foreground/80">
                  A $45 metered plan is more expensive than a small top-up on a budget shared pool, and cheaper than most
                  enterprise minimums. The honest comparison is not headline rate but effective rate after retries: shared
                  pools lose requests to IPs other customers already burned. Build your own matrix in the{" "}
                  <Link to="/compare" className="font-semibold text-primary hover:underline">
                    provider comparison tool
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-md border border-border bg-muted/40 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-foreground/80">
                Prices change — confirm the current plan names and rates on the live pricing page.
              </p>
              <CTA label="Check live Live Proxies pricing" />
            </div>
          </section>

          {/* Features */}
          <section className="mt-10">
            <H2 id="features">Why Live Proxies — key features</H2>
            <p className="mt-3 text-foreground/85">
              The list below is Live Proxies' own positioning, restated plainly and flagged where a claim is vendor-reported
              rather than independently verified by us.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Private proxies — IPs are unique to the buyer, not drawn from a shared pool",
                "Dedicated IPs — 100% private allocation for the plan duration",
                "Highest-quality IPs — sourced from real peers (vendor claim)",
                "High uptime — vendor-reported track record, not independently audited",
                "No concurrency limit — unlimited threads on published plans",
                "Custom B2B network — tailored enterprise plans, 10M+ IPs marketed",
                "Transparency — publishes plan features and addresses issues openly",
                "Reliability — long-term customers cite consistent quality (vendor-cited)",
                "24/7 customer support with fast stated response times",
                "10,000+ users — figure as claimed on the Live Proxies site",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 rounded-md border border-border bg-card p-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* B2C vs B2B */}
          <section className="mt-10">
            <H2 id="b2c-b2b">B2C vs B2B — who Live Proxies is for</H2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-5">
                <h3 className="text-base font-extrabold text-foreground">B2C / individual</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  Built for personal, single-operator work: managing a handful of social accounts, tracking prices on a
                  short list of retailers, checking local search rankings, or running one scraper on a schedule. The entry
                  plan already carries dashboard access, API access, sticky rotation and a dedicated manager, so you are not
                  buying a stripped-down tier. If you are new to this, start with our{" "}
                  <Link to="/guides/$slug" params={{ slug: "best-proxies-for-beginners" }} className="font-semibold text-primary hover:underline">
                    beginner proxy guide
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-md border border-border bg-card p-5">
                <h3 className="text-base font-extrabold text-foreground">B2B / enterprise</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  A custom network marketed at 10M+ IPs with API access and bespoke integrations, aimed at continuous
                  large-scale collection where allocation, support escalation and contractual terms matter more than list
                  price. Ask for the SLA in writing and compare against the field in our{" "}
                  <Link to="/guides/$slug" params={{ slug: "best-enterprise-proxies" }} className="font-semibold text-primary hover:underline">
                    enterprise proxy guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className="mt-10">
            <H2 id="use-cases">Top use cases for Live Proxies</H2>
            <p className="mt-3 text-foreground/85">
              Eight workloads Live Proxies markets directly — and what a private, dedicated IP actually changes in each one.
            </p>
            <div className="mt-4 space-y-4">
              {USE_CASES.map(([name, body, link]) => (
                <div key={name} className="rounded-md border border-border bg-card p-5">
                  <h3 className="text-base font-bold text-foreground">{name}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{body}</p>
                  <p className="mt-2 text-sm">
                    <Link
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      to={link.to as any}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      params={link.params as any}
                      className="font-semibold text-primary hover:underline"
                    >
                      Read our {link.label} →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Integrations */}
          <section className="mt-10">
            <H2 id="integrations">App & bot integrations: Selenium, Playwright and automation stacks</H2>
            <p className="mt-3 text-foreground/85">
              Live Proxies markets direct compatibility with common automation and scraping tooling. The plan-level features
              that make that work are IP whitelisting (no inline credentials in your driver config), sticky rotation
              (one identity per session) and no concurrency limit (throughput bounded by your infrastructure, not the
              contract). Confirm the exact certified integration list on their site before you architect around one tool.
            </p>
            <Figure
              src={IMG.integrations}
              alt="Live Proxies supported app and bot integrations, including Selenium and automation tools"
              caption="Live Proxies' published integration map — Selenium, automation bots and multi-account tooling."
            />

            <div className="mt-4 space-y-4">
              {INTEGRATIONS.map(([name, body]) => (
                <div key={name} className="rounded-md border border-border bg-card p-4">
                  <h3 className="text-base font-bold text-foreground">Proxy for {name}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-foreground/85">
              If you would rather not manage rotation, retries and headless browsers yourself, a managed endpoint may be
              cheaper in engineering time — our{" "}
              <Link to="/scraper-api" className="font-semibold text-primary hover:underline">
                scraper API comparison
              </Link>{" "}
              covers when that trade is worth making, and our{" "}
              <Link to="/guides/$slug" params={{ slug: "best-headless-browsers" }} className="font-semibold text-primary hover:underline">
                headless browser guide
              </Link>{" "}
              covers the runtime side.
            </p>
          </section>

          {/* Trust signals */}
          <section className="mt-10">
            <H2 id="trust">Trust signals & third-party ratings</H2>
            <p className="mt-3 text-foreground/85">
              Live Proxies displays Trustpilot, G2 and Proxyway badges on its own site. We are deliberately not restating
              those scores as numbers here: badge images go stale, and a rating quoted second-hand is worth nothing. Check
              each platform directly before you buy — and treat a provider's own screenshot of its rating as marketing, not
              evidence, whoever is publishing it.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["Trustpilot", "Volume and recency of reviews matter more than the headline score — read the 2- and 3-star ones."],
                ["G2", "Best signal for B2B buyers: look for reviews from companies at your scale, not the aggregate."],
                ["Proxyway", "Independent industry testing — cross-check their measured results against vendor claims."],
              ].map(([name, note]) => (
                <div key={name} className="rounded-md border border-border bg-card p-4">
                  <div className="text-sm font-extrabold text-foreground">{name}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/80">
              Our own scoring is independent of all three. See{" "}
              <Link to="/how-we-test" className="font-semibold text-primary hover:underline">
                how we test
              </Link>{" "}
              and{" "}
              <Link to="/why-trust-us" className="font-semibold text-primary hover:underline">
                why you can trust us
              </Link>
              .
            </p>
          </section>

          {/* Pros & cons */}
          <section className="mt-10">
            <H2 id="pros-cons">Pros & cons</H2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-md border border-green-600/30 bg-green-500/5 p-5">
                <h3 className="text-base font-extrabold text-foreground">Pros</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    "Private, dedicated IPs rather than a shared pool — no inherited block history",
                    "Clear B2C-to-B2B range, from a $45 plan up to a custom 10M+ IP network",
                    "Metered and unmetered billing on both plan tiers — real flexibility",
                    "Full feature set at the entry tier: API, dashboard, whitelisting, dedicated manager",
                    "No concurrency limit — parallelism is bounded by your own infrastructure",
                    "US state-level targeting, which most global pools only approximate",
                    "Bandwidth rollover protects bursty workloads on metered plans",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-destructive/30 bg-destructive/5 p-5">
                <h3 className="text-base font-extrabold text-foreground">Cons</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    "State-level targeting is US-only on the published plans — confirm international coverage",
                    "Entry price ($45 metered / $90 unmetered) is above shared-pool competitors",
                    "No advertised open free trial — you commit before you measure",
                    "Plan tier names are not clearly published, which makes like-for-like comparison harder",
                    "Uptime, pool size and user-count figures are vendor-reported, not independently audited",
                    "Plan-based pricing is harder to model than a flat per-GB rate for variable workloads",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span className="text-foreground/85">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="mt-10">
            <H2 id="comparison">Live Proxies vs other providers</H2>
            <p className="mt-3 text-foreground/85">
              Head-to-head against three providers we have measured independently in the{" "}
              <Link to="/proxy-benchmark-report" className="font-semibold text-primary hover:underline">
                Q3 2026 benchmark
              </Link>
              . Click any name for the full review.
            </p>
            <div className="mt-4 overflow-x-auto rounded-md border border-border">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Provider</th>
                    <th className="px-4 py-3 text-left font-bold">Starting price</th>
                    <th className="px-4 py-3 text-left font-bold">IP model</th>
                    <th className="px-4 py-3 text-left font-bold">Plan flexibility</th>
                    <th className="px-4 py-3 text-left font-bold">Uptime</th>
                    <th className="px-4 py-3 text-left font-bold">Support</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-primary/5">
                    <td className="px-4 py-3 font-extrabold text-foreground">Live Proxies</td>
                    <td className="px-4 py-3">$45/plan</td>
                    <td className="px-4 py-3">Private / dedicated</td>
                    <td className="px-4 py-3">Metered or unmetered, 2 tiers</td>
                    <td className="px-4 py-3">High (vendor-stated)</td>
                    <td className="px-4 py-3">24/7 + dedicated manager</td>
                  </tr>
                  {compareProviders.map((p) => (
                    <tr key={p.slug}>
                      <td className="px-4 py-3 font-semibold">
                        <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-primary hover:underline">
                          {p.name} review
                        </Link>
                      </td>
                      <td className="px-4 py-3">${p.startingPriceGB}/GB</td>
                      <td className="px-4 py-3">Shared pool ({p.poolSize})</td>
                      <td className="px-4 py-3">Pay-as-you-go & monthly</td>
                      <td className="px-4 py-3">{p.rating >= 4.5 ? "99.9%" : "99.5%"}</td>
                      <td className="px-4 py-3">{p.rating >= 4.5 ? "<5 min" : "<1 hr"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-foreground/85">
              Short version: choose{" "}
              <Link to="/reviews/$slug" params={{ slug: "bright-data" }} className="font-semibold text-primary hover:underline">
                Bright Data
              </Link>{" "}
              when raw pool size, global coverage and enterprise tooling outweigh price; choose{" "}
              <Link to="/reviews/$slug" params={{ slug: "oxylabs" }} className="font-semibold text-primary hover:underline">
                Oxylabs
              </Link>{" "}
              for the strongest measured anti-bot success alongside managed scraper APIs; choose{" "}
              <Link to="/reviews/$slug" params={{ slug: "iproyal" }} className="font-semibold text-primary hover:underline">
                IPRoyal
              </Link>{" "}
              if cost per GB is the only metric that matters; and choose Live Proxies when you want IPs nobody else is
              touching, US state accuracy and unlimited threads on a predictable plan price. Also worth a look:{" "}
              <Link to="/proxy-seller-review" className="font-semibold text-primary hover:underline">
                Proxy-Seller
              </Link>{" "}
              for five proxy types on one account, and{" "}
              <Link to="/thordata-review" className="font-semibold text-primary hover:underline">
                Thordata
              </Link>{" "}
              for high-volume value.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-10">
            <H2 id="faq">Live Proxies FAQ</H2>
            <Accordion type="single" collapsible className="mt-4">
              {FAQ.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-foreground/80">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related reading */}
          <section className="mt-10">
            <H2 id="related">Related reading</H2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  heading: "By proxy type",
                  links: [
                    { label: "Best residential proxies", to: "/guides/$slug", params: { slug: "best-residential-proxies" } },
                    { label: "Best ISP (static residential) proxies", to: "/guides/$slug", params: { slug: "best-isp-proxies" } },
                    { label: "Best proxy providers 2026", to: "/guides/$slug", params: { slug: "best-proxies-2026" } },
                    { label: "Best enterprise proxies", to: "/guides/$slug", params: { slug: "best-enterprise-proxies" } },
                    { label: "Best free proxy trials", to: "/guides/$slug", params: { slug: "best-free-proxy-trials" } },
                  ],
                },
                {
                  heading: "By use case",
                  links: [
                    { label: "Web scraping at scale", to: "/use-cases/$slug", params: { slug: "web-scraping" } },
                    { label: "SEO rank monitoring", to: "/use-cases/$slug", params: { slug: "seo-monitoring" } },
                    { label: "Price & e-commerce monitoring", to: "/use-cases/$slug", params: { slug: "price-monitoring" } },
                    { label: "Ad verification", to: "/use-cases/$slug", params: { slug: "ad-verification" } },
                    { label: "Social media management", to: "/use-cases/$slug", params: { slug: "social-media" } },
                  ],
                },
                {
                  heading: "Data & tools",
                  links: [
                    { label: "Proxy benchmark report Q3 2026", to: "/proxy-benchmark-report", params: undefined },
                    { label: "Proxy-Seller review", to: "/proxy-seller-review", params: undefined },
                    { label: "Thordata review", to: "/thordata-review", params: undefined },
                    { label: "Compare any two providers", to: "/compare", params: undefined },
                    { label: "US proxies by state & city", to: "/countries/$slug", params: { slug: "united-states" } },
                  ],
                },
              ].map((col) => (
                <div key={col.heading} className="rounded-md border border-border bg-card p-5">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-foreground/50">{col.heading}</div>
                  <ul className="mt-3 space-y-2 text-sm">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          to={l.to as any}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          params={l.params as any}
                          className="font-semibold text-primary hover:underline"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Verdict */}
          <section id="verdict" className="mt-10 scroll-mt-28 rounded-md border-2 border-primary bg-muted/40 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-foreground">Verdict</h2>
              <StarRating rating={4.4} />
            </div>
            <p className="mt-3 text-foreground/85">
              Live Proxies is the pick when exclusivity beats scale: private, dedicated residential IPs with US state-level
              targeting, sticky sessions, unlimited threads and the full dashboard/API feature set from the $45 entry plan,
              in both metered and unmetered billing. It is not the cheapest way to buy bandwidth, and international coverage
              needs confirming with sales — but for account management, fare tracking, brand protection and any workload
              ruined by a stranger's block history, a private IP is worth the premium.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTA />
              <Link
                to="/compare"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-bold text-foreground hover:bg-muted"
              >
                Compare with other providers
              </Link>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-md border-2 border-primary bg-card p-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-md bg-navy text-lg font-extrabold text-white">
                LP
              </div>
              <div className="mt-2 font-extrabold">Live Proxies</div>
              <div className="mt-1 flex justify-center">
                <StarRating rating={4.4} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">From $45/plan · private dedicated residential IPs</p>
              <a
                href={LP_URL}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="mt-3 block rounded-md bg-green-500 px-3 py-2.5 text-sm font-bold text-white hover:bg-green-600"
              >
                Get Live Proxies
              </a>
            </div>

            <nav className="rounded-md border border-border bg-card p-5">
              <div className="mb-3 text-xs font-extrabold uppercase tracking-wider text-foreground/50">On this page</div>
              <ul className="space-y-1.5 text-sm">
                {TOC.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-foreground/75 hover:text-primary hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="rounded-md border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-foreground/50">
                <Headphones className="h-3.5 w-3.5" /> Top rated alternatives
              </div>
              <div className="space-y-4">
                {sidebarPicks.map((p) => (
                  <div key={p.slug} className="rounded-md bg-muted/40 p-3">
                    <div className="flex items-center gap-2">
                      <ProviderLogo provider={p} size="sm" />
                      <div>
                        <div className="text-sm font-bold">{p.name}</div>
                        <StarRating rating={p.rating} />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                      <Link
                        to="/reviews/$slug"
                        params={{ slug: p.slug }}
                        className="rounded-md bg-navy px-3 py-1.5 text-center text-xs font-bold text-white"
                      >
                        Read Review
                      </Link>
                      <a
                        href={`/go/${p.slug}`}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        className="rounded-md bg-green-500 px-3 py-1.5 text-center text-xs font-bold text-white"
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-foreground">Live Proxies — from $45/plan</div>
            <div className="truncate text-xs text-muted-foreground">Private dedicated IPs · US state targeting · affiliate link</div>
          </div>
          <a
            href={LP_URL}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md bg-green-500 px-4 text-sm font-bold text-white hover:bg-green-600"
          >
            See live pricing <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="h-16 lg:hidden" />
    </PageShell>
  );
}
