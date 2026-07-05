import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { ProviderLogo } from "@/components/provider-logo";
import { providers } from "@/data/providers";
import { popularMatchups } from "@/data/matchups";
import { Star, Check, Trophy, DollarSign, Globe2, Shield, Zap, Users, TrendingUp, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Proxy Providers 2026 — Side-by-Side (Pricing, Pools, Ratings) | ToptierProxy.com" },
      { name: "description", content: "Compare every major proxy provider side-by-side in 2026 — Bright Data, Oxylabs, Decodo, SOAX, IPRoyal, Webshare, NetNut & more. Pricing per GB, pool size, country coverage, proxy types, Trust Score and hands-on ratings in one interactive table." },
      { property: "og:title", content: "Compare Proxy Providers 2026 — Side-by-Side" },
      { property: "og:description", content: "All major proxy providers compared on pricing, pool size, coverage and features. Independent, hands-on tested." },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "compare proxy providers, proxy comparison 2026, best proxy provider, proxy pricing comparison, residential proxy comparison" },
    ],
  }),
  component: ComparePage,
});

const types = [
  { key: "residential", label: "Residential" },
  { key: "datacenter", label: "Datacenter" },
  { key: "isp", label: "ISP" },
  { key: "mobile", label: "Mobile" },
  { key: "scraping-api", label: "Scraping API" },
] as const;

const faqs = [
  {
    q: "Which proxy provider is best overall in 2026?",
    a: "For most enterprise workloads, Bright Data leads on pool size (150M+ IPs), coverage (195+ countries) and success rates against hard anti-bot targets. Oxylabs is the closest peer with better ML-driven scraping APIs. For SMB budgets, Decodo (formerly Smartproxy) delivers 90% of the quality at 40% of the price. See our full head-to-head Bright Data vs Oxylabs and Bright Data vs Decodo breakdowns.",
  },
  {
    q: "What's the cheapest reliable proxy provider?",
    a: "Webshare ($1.40/GB residential, free datacenter tier) and Proxy-Cheap ($2.99/GB) are the two cheapest credible options in 2026. IPRoyal ($1.75/GB) sits just above with better session control. Below $1.40/GB you're almost always looking at recycled or grey-market pools — check our Trust Score before committing.",
  },
  {
    q: "Residential vs datacenter vs ISP vs mobile — which type do I actually need?",
    a: "Residential = highest trust, works on Amazon/Instagram/sneakers, $2-15/GB. Datacenter = fastest & cheapest ($0.20-1/GB) but easily blocked on protected sites. ISP (static residential) = residential IPs on datacenter infrastructure, great for account management, $2-4/IP/month. Mobile (4G/5G) = highest trust score, $8-25/GB, only for the hardest targets. Read our full residential proxies guide and mobile proxies guide.",
  },
  {
    q: "Are these proxy comparisons independent or affiliate-driven?",
    a: "Every provider on this page has been tested hands-on by our team using paid customer accounts. Scoring follows our published 225-criterion methodology. We do earn affiliate commissions on some links, but rankings are locked before commercial terms are discussed — see our how we test page and Trust Score explainer.",
  },
  {
    q: "What is a good price per GB for residential proxies in 2026?",
    a: "$3-5/GB is the sweet spot for production-grade residential traffic. Under $2/GB is either promotional pricing (Webshare, IPRoyal starter tiers) or a signal to inspect the pool origin. Over $8/GB you should be getting enterprise SLAs, dedicated IPs, or specialty unblocking (Bright Data Web Unlocker tier).",
  },
  {
    q: "Which providers have the largest IP pools?",
    a: "Bright Data (150M+), Oxylabs (100M+), SOAX (155M+ claimed, ~8.5M concurrent), NetNut (85M ISP-sourced), Decodo (65M+), Nimbleway (70M+). Pool size matters for high-concurrency scraping and geo-diversity, but concurrent-available IPs and rotation logic matter more day-to-day.",
  },
  {
    q: "Do these providers offer free trials?",
    a: "Yes — most credible vendors offer trials in 2026. Decodo and SOAX have 3-day money-back trials, Webshare has a permanent 10-proxy free tier, ScraperAPI offers 5,000 free credits, Bright Data offers a $5 test credit, and Oxylabs runs a 7-day trial for businesses. Always test on your actual target sites before committing to volume.",
  },
  {
    q: "Which proxy provider is best for web scraping specifically?",
    a: "For unblocking-heavy scraping, ScraperAPI, Bright Data Web Unlocker and Oxylabs Web Scraper API dominate. For raw proxy scraping where you control the browser, Decodo and SOAX give the best price/success ratio. See our scraper API deep-dive.",
  },
  {
    q: "Are cheap proxies safe to use?",
    a: "Cheap ≠ unsafe, but very cheap can be. Providers under $1.50/GB residential should be scrutinized for: (1) how they source IPs (SDK bundling vs. paid opt-in), (2) whether they publish an ethics/KYC page, and (3) their Trust Score. Webshare, IPRoyal, Proxy-Cheap and Rayobyte are the cheap providers we currently consider safe.",
  },
  {
    q: "Can I use these proxies for sneakers, ticketing or streaming?",
    a: "Yes — but pick carefully. Sneaker/ticketing: NetNut, SOAX, IPRoyal ISP. Streaming (Netflix, DAZN): residential from Bright Data, Oxylabs or Decodo with sticky sessions. Never use datacenter proxies for these — you'll burn accounts. See our use-cases directory.",
  },
];

function ComparePage() {
  const sorted = [...providers].sort((a, b) => b.rating - a.rating);
  const cheapest = [...providers].filter(p => p.startingPriceGB).sort((a, b) => (a.startingPriceGB ?? 99) - (b.startingPriceGB ?? 99)).slice(0, 3);
  const highestTrust = [...providers].sort((a, b) => b.trustScore - a.trustScore).slice(0, 3);
  const largestPools = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageShell
      title="Compare Proxy Providers 2026"
      intro="Side-by-side comparison of every major proxy vendor — pricing, pool size, country coverage, proxy types and hands-on ratings. Independently tested, updated monthly."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/compare", label: "Compare" }]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-md border border-border bg-card shadow-card">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Provider</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">From</th>
              <th className="px-4 py-3">Pool</th>
              <th className="px-4 py-3">Countries</th>
              {types.map((t) => (
                <th key={t.key} className="px-3 py-3 text-center">{t.label}</th>
              ))}
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sorted.map((p) => (
              <tr key={p.slug} className="hover:bg-muted/50">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <ProviderLogo provider={p} size="sm" />
                    <div>
                      <Link to="/reviews/$slug" params={{ slug: p.slug }} className="font-bold text-primary hover:underline">{p.name}</Link>
                      <div className="text-xs text-muted-foreground">{p.bestFor}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-bold">{p.rating}</span>
                  </div>
                </td>
                <td className="px-4 py-4 font-semibold">${p.startingPriceGB}/GB</td>
                <td className="px-4 py-4 text-muted-foreground">{p.poolSize}</td>
                <td className="px-4 py-4 text-muted-foreground">{p.countries}+</td>
                {types.map((t) => (
                  <td key={t.key} className="px-3 py-4 text-center">
                    {p.proxyTypes.includes(t.key) ? <Check className="mx-auto h-4 w-4 text-success" /> : <span className="text-muted-foreground/50">—</span>}
                  </td>
                ))}
                <td className="px-4 py-4">
                  <Link to="/reviews/$slug" params={{ slug: p.slug }} className="inline-flex h-8 items-center rounded bg-primary px-3 text-xs font-bold text-primary-foreground hover:opacity-90">Review</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Category Winners */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-warning" />
          <h2 className="text-2xl font-bold">2026 Category Winners</h2>
        </div>
        <p className="mt-2 text-muted-foreground">Who wins where — based on our hands-on testing across pricing, coverage, trust and specialty use cases.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <WinnerCard icon={<Trophy className="h-5 w-5" />} title="Best Overall" provider={sorted[0]} reason="Highest composite score across price, pool, trust and success rates." />
          <WinnerCard icon={<DollarSign className="h-5 w-5" />} title="Best Value" provider={cheapest[0]} reason={`Cheapest credible entry point at $${cheapest[0].startingPriceGB}/GB.`} />
          <WinnerCard icon={<Shield className="h-5 w-5" />} title="Highest Trust" provider={highestTrust[0]} reason={`Trust Score ${highestTrust[0].trustScore}/100 — compliance, KYC and IP sourcing.`} />
          <WinnerCard icon={<Globe2 className="h-5 w-5" />} title="Widest Coverage" provider={largestPools[0]} reason={`${largestPools[0].countries}+ countries, ${largestPools[0].poolSize}.`} />
          <WinnerCard icon={<Zap className="h-5 w-5" />} title="Best for Scraping" provider={providers.find(p => p.slug === "oxylabs")!} reason="Web Scraper API + AI-driven unblocking beat raw proxies on protected sites." />
          <WinnerCard icon={<Users className="h-5 w-5" />} title="Best for Beginners" provider={providers.find(p => p.slug === "decodo")!} reason="Cleanest dashboard, transparent pricing, 3-day money-back." />
        </div>
      </section>

      {/* Decision Framework */}
      <section className="mt-16 rounded-md border border-border bg-card p-6 md:p-8 shadow-card">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">How to choose between them (60-second framework)</h2>
        </div>
        <p className="mt-2 text-muted-foreground">Answer these three questions in order and 90% of the choice is made.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <FrameworkStep n="1" title="What are you unblocking?" body="Hard targets (Amazon, Instagram, sneakers, ticketing) → residential or mobile. Public data at scale → datacenter. Account management → ISP static residential. Structured web data → scraping API." />
          <FrameworkStep n="2" title="What's your monthly volume?" body="<20GB → Webshare, Proxy-Cheap, IPRoyal starter. 20-500GB → Decodo, SOAX, IPRoyal, NetNut. 500GB+ → Bright Data, Oxylabs (enterprise pricing kicks in)." />
          <FrameworkStep n="3" title="How much compliance do you need?" body="Consumer projects → Trust Score 70+ is fine. B2B / regulated / enterprise → 85+ required. Read our Trust Score explainer." />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/how-we-test" className="inline-flex h-10 items-center rounded-md border border-border bg-background px-4 text-sm font-semibold hover:border-primary">Read our 225-criterion methodology →</Link>
          <Link to="/trust-score" className="inline-flex h-10 items-center rounded-md border border-border bg-background px-4 text-sm font-semibold hover:border-primary">How Trust Score works →</Link>
        </div>
      </section>

      {/* Compare by Type */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Compare by proxy type</h2>
        <p className="mt-2 text-muted-foreground">Filtered rankings for each proxy category we test.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard to="best-residential-proxies" title="Best Residential Proxies" desc="Real IPs from home ISPs — highest trust, works everywhere." count={providers.filter(p => p.proxyTypes.includes("residential")).length} />
          <CategoryCard to="best-datacenter-proxies" title="Best Datacenter Proxies" desc="Fastest & cheapest — great for public data at scale." count={providers.filter(p => p.proxyTypes.includes("datacenter")).length} />
          <CategoryCard to="best-isp-proxies" title="Best ISP Proxies" desc="Static residential IPs — perfect for account management." count={providers.filter(p => p.proxyTypes.includes("isp")).length} />
          <CategoryCard to="best-mobile-proxies" title="Best Mobile (4G/5G) Proxies" desc="Highest trust — for the hardest targets & social media." count={providers.filter(p => p.proxyTypes.includes("mobile")).length} />
          <CategoryCard to="best-scraping-apis" title="Best Scraping APIs" desc="Managed unblocking — JS rendering, CAPTCHAs, retries." count={providers.filter(p => p.proxyTypes.includes("scraping-api")).length} />
          <CategoryCard to="best-residential-proxies" title="Cheapest Proxies" desc="Under $3/GB — Webshare, Proxy-Cheap, IPRoyal, Rayobyte." count={cheapest.length} />
        </div>
      </section>

      {/* Compare by Use Case */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Compare by use case</h2>
        <p className="mt-2 text-muted-foreground">The proxy world isn't one-size-fits-all. These are the workloads we get asked about most.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["web-scraping", "Web Scraping", "Extract structured data at scale."],
            ["price-monitoring", "Price Monitoring", "Track Amazon, Walmart, competitor pricing."],
            ["seo-monitoring", "SEO & SERP Monitoring", "Rank tracking from any geo."],
            ["ad-verification", "Ad Verification", "Detect cloaking, verify creatives globally."],
            ["social-media", "Social Media Management", "Multi-account, geo-targeted."],
            ["sneaker-copping", "Sneaker & Ticketing", "Fast, sticky, low-detection IPs."],
            ["market-research", "Market Research", "Global data collection at scale."],
            ["brand-protection", "Brand Protection", "Counterfeit & IP infringement detection."],
            ["cybersecurity", "Cybersecurity", "Threat intel & pentest reconnaissance."],
          ].map(([slug, title, desc]) => (
            <Link key={slug} to="/use-cases/$slug" params={{ slug }} className="rounded-md border border-border bg-card p-4 transition-shadow hover:border-primary hover:shadow-card-hover">
              <div className="font-bold">{title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Matchups (expanded) */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Popular head-to-head comparisons</h2>
        <p className="mt-2 text-muted-foreground">The most-searched proxy provider matchups in 2026, each with a full side-by-side breakdown — pricing, pool, trust, pros/cons and a verdict.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularMatchups.map((m) => (
            <Link key={m.slug} to="/vs/$matchup" params={{ matchup: m.slug }} className="rounded-md border border-border bg-card p-4 transition-shadow hover:border-primary hover:shadow-card-hover">
              <div className="font-bold">{m.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">Pricing, pool size, trust & verdict</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Reality Check */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Pricing reality check — what you'll actually pay</h2>
        <p className="mt-2 text-muted-foreground">Headline "from $X/GB" pricing rarely matches your invoice. Here's how the tiers actually behave in 2026.</p>
        <div className="mt-6 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Volume tier</th>
                <th className="px-4 py-3">Typical $/GB</th>
                <th className="px-4 py-3">Best fit</th>
                <th className="px-4 py-3">Recommended</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <PriceRow tier="Starter (<5 GB/mo)" range="$4 – $8" fit="Testing, hobby, low-volume scraping" pick={["webshare", "proxy-cheap", "iproyal"]} />
              <PriceRow tier="SMB (5 – 50 GB/mo)" range="$3 – $6" fit="Production scrapers, small SaaS" pick={["decodo", "iproyal", "soax"]} />
              <PriceRow tier="Growth (50 – 500 GB/mo)" range="$2 – $4.5" fit="Data teams, real-time monitoring" pick={["decodo", "soax", "netnut"]} />
              <PriceRow tier="Enterprise (500 GB+ /mo)" range="$1.5 – $3.5" fit="Large-scale scraping, ad verification" pick={["bright-data", "oxylabs", "nimbleway"]} />
            </tbody>
          </table>
        </div>
      </section>

      {/* Long-form buyer content */}
      <section className="mt-16">
        <Prose>
          <h2>What actually matters when comparing proxy providers</h2>
          <p>
            After testing every major proxy vendor hands-on with paid accounts, we've learned that the marketing pages all sound the same — "millions of IPs, 99.9% uptime, best success rates." The reality is that four things separate the winners from the losers in 2026:
          </p>
          <h3>1. Concurrent-available IPs, not pool size</h3>
          <p>
            A "150 million IP pool" is meaningless if only 2 million are online in your target country at the moment you need them. <Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data</Link>, <Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs</Link> and <Link to="/reviews/$slug" params={{ slug: "soax" }}>SOAX</Link> lead on concurrent availability. Cheap providers often quote inflated pool sizes that include stale or churned IPs.
          </p>
          <h3>2. Success rate on YOUR target site</h3>
          <p>
            Aggregate "99% success rate" claims are averaged across easy targets. What matters is success against your actual site. Test with a free trial before committing volume — <Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>scraping APIs</Link> like ScraperAPI and Bright Data Web Unlocker often outperform raw proxies on the hardest 10% of targets (Cloudflare Turnstile, PerimeterX, DataDome).
          </p>
          <h3>3. Session control & rotation logic</h3>
          <p>
            Sticky sessions (same IP for 1–30 minutes) matter for logged-in workflows. Per-request rotation matters for bulk scraping. <Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo</Link> and <Link to="/reviews/$slug" params={{ slug: "soax" }}>SOAX</Link> have the most flexible session APIs; <Link to="/reviews/$slug" params={{ slug: "webshare" }}>Webshare</Link>'s is the most rigid.
          </p>
          <h3>4. IP sourcing ethics & compliance posture</h3>
          <p>
            The residential proxy industry has a history of SDK-bundled IP sourcing (users unwittingly donating their bandwidth). In 2026, credible providers publish KYC processes, opt-in sourcing agreements and legal review workflows. This is what our <Link to="/trust-score">Trust Score</Link> measures — and it's why <Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data</Link> (95/100) and <Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs</Link> (93/100) win enterprise deals despite being the most expensive.
          </p>
          <h2>The 2026 proxy market at a glance</h2>
          <p>
            The market has consolidated to roughly three tiers. <strong>Enterprise:</strong> Bright Data, Oxylabs, Nimbleway. <strong>Mid-market:</strong> Decodo, SOAX, NetNut, IPRoyal. <strong>Budget:</strong> Webshare, Proxy-Cheap, Rayobyte, Infatica. Choose the tier that matches your budget AND compliance requirement — a Fortune 500 buyer picking Webshare will fail procurement review; a solo scraper picking Bright Data will burn credits before shipping.
          </p>
          <h2>Should I use one provider or multiple?</h2>
          <p>
            Serious data teams run 2–3 providers in parallel — one primary for volume, one backup for failover, one specialty for hardest targets. Common stacks in 2026: <em>Decodo (volume) + Bright Data Web Unlocker (hard targets)</em>, or <em>Oxylabs (residential) + Webshare (datacenter) + ScraperAPI (fallback)</em>. Multi-provider setups also give you leverage on annual renegotiations.
          </p>
        </Prose>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <p className="mt-2 text-muted-foreground">The questions buyers actually ask before committing to a proxy provider in 2026.</p>
        <div className="mt-6 divide-y divide-border rounded-md border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 py-4 open:bg-muted/30">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-foreground">
                <span>{f.q}</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related resources */}
      <section className="mt-16 rounded-md border border-border bg-muted/30 p-6 md:p-8">
        <h2 className="text-xl font-bold">Keep exploring</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Reviews</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/reviews" className="text-primary hover:underline">All provider reviews</Link></li>
              <li><Link to="/reviews/$slug" params={{ slug: "bright-data" }} className="text-primary hover:underline">Bright Data review</Link></li>
              <li><Link to="/reviews/$slug" params={{ slug: "oxylabs" }} className="text-primary hover:underline">Oxylabs review</Link></li>
              <li><Link to="/reviews/$slug" params={{ slug: "decodo" }} className="text-primary hover:underline">Decodo review</Link></li>
              <li><Link to="/reviews/$slug" params={{ slug: "soax" }} className="text-primary hover:underline">SOAX review</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Buying guides</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }} className="text-primary hover:underline">Best residential proxies</Link></li>
              <li><Link to="/guides/$slug" params={{ slug: "best-datacenter-proxies" }} className="text-primary hover:underline">Best datacenter proxies</Link></li>
              <li><Link to="/guides/$slug" params={{ slug: "best-isp-proxies" }} className="text-primary hover:underline">Best ISP proxies</Link></li>
              <li><Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }} className="text-primary hover:underline">Best mobile proxies</Link></li>
              <li><Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }} className="text-primary hover:underline">Best scraping APIs</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Trust & methodology</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/how-we-test" className="text-primary hover:underline">How we test proxies</Link></li>
              <li><Link to="/trust-score" className="text-primary hover:underline">Trust Score explained</Link></li>
              <li><Link to="/why-trust-us" className="text-primary hover:underline">Why trust us</Link></li>
              <li><Link to="/scraper-api" className="text-primary hover:underline">Scraper API deep-dive</Link></li>
              <li><Link to="/blog" className="text-primary hover:underline">Latest blog posts</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function WinnerCard({ icon, title, provider, reason }: { icon: React.ReactNode; title: string; provider: typeof providers[number]; reason: string }) {
  return (
    <Link to="/reviews/$slug" params={{ slug: provider.slug }} className="group flex flex-col rounded-md border border-border bg-card p-5 shadow-card transition-all hover:border-primary hover:shadow-card-hover">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
        {icon}
        {title}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <ProviderLogo provider={provider} size="sm" />
        <div>
          <div className="font-bold group-hover:text-primary">{provider.name}</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-warning text-warning" />
            {provider.rating} · Trust {provider.trustScore}/100
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground/75">{reason}</p>
    </Link>
  );
}

function FrameworkStep({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-md border border-border bg-background p-5">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{n}</div>
      <h3 className="mt-3 font-bold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/75">{body}</p>
    </div>
  );
}

function CategoryCard({ to, title, desc, count }: { to: string; title: string; desc: string; count: number }) {
  return (
    <Link to="/guides/$slug" params={{ slug: to }} className="group rounded-md border border-border bg-card p-4 transition-shadow hover:border-primary hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <div className="font-bold group-hover:text-primary">{title}</div>
        <span className="rounded bg-muted px-2 py-0.5 text-xs font-bold text-muted-foreground">{count}</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
    </Link>
  );
}

function PriceRow({ tier, range, fit, pick }: { tier: string; range: string; fit: string; pick: string[] }) {
  return (
    <tr>
      <td className="px-4 py-3 font-semibold">{tier}</td>
      <td className="px-4 py-3 text-muted-foreground">{range}</td>
      <td className="px-4 py-3 text-sm">{fit}</td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-1.5">
          {pick.map(slug => {
            const p = providers.find(x => x.slug === slug);
            if (!p) return null;
            return (
              <Link key={slug} to="/reviews/$slug" params={{ slug }} className="inline-flex items-center rounded border border-border bg-background px-2 py-1 text-xs font-semibold hover:border-primary hover:text-primary">
                {p.name}
              </Link>
            );
          })}
        </div>
      </td>
    </tr>
  );
}
