import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Star, ExternalLink, Check, X, Copy, Award, DollarSign, Globe2, Server } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { providers } from "@/data/providers";
import { ProviderLogo } from "@/components/provider-logo";

const THORDATA_URL = "https://dashboard.thordata.com/register?invitation_code=FGOCHJZN";
const LOGO = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274640/thordata_logo_e7qs2t.jpg";
const IMG_PRICING = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274044/thordata1_hauxvd.jpg";
const IMG_COVERAGE = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274044/thordata2_bonxvm.jpg";
const IMG_MAP = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274044/thordata3_d0vp54.jpg";
const IMG_SUPPORT = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274449/photo_6275973854538699101_y.jpg_mnbebm.jpg";
const IMG_TRUST = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274449/photo_6275973854538699099_y.jpg_jpfapa.jpg";
const IMG_DEV = "https://res.cloudinary.com/dkcqakosa/image/upload/v1785274448/photo_6275973854538699100_y.jpg_kd2yel.jpg";

export const Route = createFileRoute("/thordata-review")({
  head: () => {
    const title = "Thordata Review 2026 - Pricing, Speed and Real Test Results";
    const description = "In-depth Thordata review: 125M+ residential proxies across 190+ countries, pricing from $0.65/GB, real pros and cons, and how it compares to the rest of the market.";
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: "thordata review, thordata proxy, thordata pricing, thordata vs bright data, residential proxy review" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: "https://www.toptierproxy.com/thordata-review" }],
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
                { "@type": "ListItem", position: 3, name: "Thordata Review", item: "https://www.toptierproxy.com/thordata-review" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Product",
                name: "Thordata",
                description,
                brand: { "@type": "Brand", name: "Thordata" },
                aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", bestRating: "5", worstRating: "1", ratingCount: 1 },
                offers: { "@type": "Offer", price: "0.65", priceCurrency: "USD", url: "https://www.toptierproxy.com/thordata-review", availability: "https://schema.org/InStock" },
              },
              reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "5", worstRating: "1" },
              author: { "@type": "Organization", name: "ToptierProxy.com" },
              publisher: { "@type": "Organization", name: "ToptierProxy.com" },
              datePublished: "2026-07-28",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Is Thordata legit?", acceptedAnswer: { "@type": "Answer", text: "Thordata is a residential, ISP, mobile and datacenter proxy provider offering 100M+ IPs across 190+ countries, with GDPR and CCPA-aligned data sourcing. SOC 2 and ISO 27001 certification is in progress according to the company." } },
                { "@type": "Question", name: "How much does Thordata cost?", acceptedAnswer: { "@type": "Answer", text: "Pricing starts at $0.65/GB for residential proxies, $0.75/IP for static ISP and datacenter proxies, and $2.20/GB for mobile proxies, with a free trial available and no credit card required." } },
                { "@type": "Question", name: "Does Thordata offer a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes, Thordata offers a free trial with no credit card required." } },
              ],
            },
          ]),
        },
      ],
    };
  },
  component: ThordataReview,
});

const THORDATA_CODE_SAMPLE = `import requests

username = "USERNAME"
password = "PASSWORD"
proxy = "user.pr.thordata.com:9999"

proxies = {
    'http': f'http://{username}:{password}@{proxy}',
    'https': f'http://{username}:{password}@{proxy}'
}

response = requests.request(
    'GET',
    'https://ipinfo.thordata.com',
    proxies=proxies,
)`;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" /> Copied!
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> Copy
        </>
      )}
    </button>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const diff = rating - i;
        if (diff >= 1) return <Star key={i} className="h-5 w-5 fill-warning text-warning" />;
        if (diff >= 0.5) {
          return (
            <span key={i} className="relative inline-block h-5 w-5">
              <Star className="absolute inset-0 h-5 w-5 text-muted-foreground" />
              <span className="absolute inset-0 w-1/2 overflow-hidden">
                <Star className="h-5 w-5 fill-warning text-warning" />
              </span>
            </span>
          );
        }
        return <Star key={i} className="h-5 w-5 text-muted-foreground" />;
      })}
      <span className="ml-1 text-sm font-bold">{rating}/5</span>
    </span>
  );
}

function ThordataReview() {
  const sidebarPicks = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <PageShell title="" breadcrumb={[{ to: "/", label: "Home" }, { to: "/reviews", label: "Reviews" }]}>
      <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10">
        <div>
          <section className="rounded-md bg-muted/40 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={LOGO} alt="Thordata logo" className="h-20 w-20 rounded-md object-contain bg-white p-1 shadow-card" />
                  <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 rounded-full bg-background px-2 py-0.5 text-xs font-bold shadow">
                    4.4 <Star className="h-3 w-3 fill-warning text-warning" />
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-foreground">Thordata</h1>
                  <p className="mt-1 text-sm text-foreground/70">125M+ residential IPs across 190+ countries</p>
                  <p className="text-sm text-foreground/70">Pricing from $0.65/GB - free trial, no credit card required</p>
                </div>
              </div>
              <a href={THORDATA_URL} target="_blank" rel="sponsored nofollow noopener"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-green-500 px-8 text-sm font-bold text-white shadow-lg hover:bg-green-600">
                Try Now <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>

          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <img
              src="https://res.cloudinary.com/dkcqakosa/image/upload/v1780194300/Capture-Photoroom_1_w5jmmt.png"
              alt="Marcus Reiner"
              className="h-9 w-9 rounded-full object-cover border border-border"
            />
            <Link to="/team/$slug" params={{ slug: "marcus-reiner" }} className="font-semibold text-foreground hover:underline">Marcus Reiner</Link>
            <span>-</span>
            <span>28/07/2026</span>
          </div>

          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              Thordata reached out about reviewing their proxy network. In the interest of being upfront - this review uses our affiliate link, and we may earn a commission if you sign up through it. That doesn't change what we write here. We pulled the numbers directly from Thordata's own site and dashboard, and we're flagging clearly anywhere their marketing rounds a figure up or a claim needs verifying on your end before you rely on it.
            </p>
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">What is Thordata?</h2>
            <p className="mt-3 text-foreground/85">
              Thordata is a proxy and web data infrastructure company positioned around one core pitch: "Reliable Residential Proxies for Web Scraping &amp; Automation." Their claimed pool sits at 100M+ real residential IPs (their own dashboard shows a more precise 125,987,100+) spanning 190+ countries, with residential, static ISP, mobile and datacenter proxy types all available under one account.
            </p>
            <p className="mt-3 text-foreground/85">
              They've picked up real third-party recognition along the way - #4 Product of the Day on Product Hunt, G2 badges for Leader (Small Business), Leader (Enterprise) and Best Relationship 2025, and a Capterra Best Ease of Use 2025 badge. Thordata is aimed at developers, data teams and businesses running web scraping, AI data collection, e-commerce monitoring and SERP tracking at meaningful scale - not casual, one-off use.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Thordata features at a glance</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-md border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Residential IPs</div>
                <div className="mt-1 text-xl font-extrabold text-foreground">125M+</div>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Countries</div>
                <div className="mt-1 text-xl font-extrabold text-foreground">190+</div>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Uptime</div>
                <div className="mt-1 text-xl font-extrabold text-foreground">99.99%</div>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <div className="text-xs text-muted-foreground">Pre-sales response</div>
                <div className="mt-1 text-xl font-extrabold text-foreground">~3 min</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Thordata also runs a Flexible Sessions feature - rotate IPs automatically on every request, or hold a sticky session for tasks that need a consistent identity across multiple requests.
            </p>
          </section>

          <img src={IMG_PRICING} alt="Thordata pricing page screenshot" className="mt-10 w-full rounded-md border border-border shadow-card" />

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Thordata pricing breakdown 2026</h2>
            <p className="mt-3 text-foreground/85">Four product lines, each priced differently depending on whether you're paying by bandwidth or by IP:</p>
            <div className="mt-4 overflow-x-auto rounded-md border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Proxy type</th>
                    <th className="px-4 py-3 text-left font-bold">Starting price</th>
                    <th className="px-4 py-3 text-left font-bold">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 font-semibold">Residential</td><td className="px-4 py-3">$0.65/GB</td><td className="px-4 py-3 text-muted-foreground">General scraping, localized access - their "Most Popular" tier</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Static ISP</td><td className="px-4 py-3">$0.75/IP</td><td className="px-4 py-3 text-muted-foreground">Long-session tasks needing a stable identity</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Mobile (4G/5G/LTE)</td><td className="px-4 py-3">$2.20/GB</td><td className="px-4 py-3 text-muted-foreground">Mobile-app targets, harder-to-access environments</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Datacenter</td><td className="px-4 py-3">$0.75/IP</td><td className="px-4 py-3 text-muted-foreground">High-volume, cost-efficient, speed-first automation</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Prices as published on Thordata's site at time of writing. Proxy pricing changes fairly often across this industry, so confirm current rates on their site before committing.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Proxy types explained</h2>
            <div className="mt-4 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-foreground">Residential proxies</h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Real consumer-device IPs, priced from $0.65/GB. This is Thordata's flagship product and the one they mark as "Most Popular" - the default choice for general-purpose scraping, localized content access, and any target that blocks datacenter IP ranges. See our <Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }} className="text-primary font-semibold hover:underline">best residential proxies guide</Link> for how other providers compare.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Static ISP proxies</h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Dedicated, ISP-backed IPs priced from $0.75/IP that stay assigned to you rather than rotating on every request. Useful for account management, long-running sessions, and any workflow where a consistent IP identity across time matters more than volume. More in our <Link to="/guides/$slug" params={{ slug: "best-isp-proxies" }} className="text-primary font-semibold hover:underline">best ISP proxies guide</Link>.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Mobile proxies</h3>
                <p className="mt-1 text-sm text-foreground/80">
                  Real 4G/5G/LTE carrier IPs from $2.20/GB - the most expensive tier, reflecting how much harder mobile carrier IPs are to source and how much cleaner their reputation tends to be. Best reserved for mobile-specific targets and platforms with the most aggressive anti-bot detection. See our <Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }} className="text-primary font-semibold hover:underline">best mobile proxies guide</Link>.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Datacenter proxies</h3>
                <p className="mt-1 text-sm text-foreground/80">
                  High-speed, low-cost IPs from $0.75/IP for targets that don't require residential-grade trust. The right choice when speed and cost per request matter more than blending in as a real consumer device. Full comparison in our <Link to="/guides/$slug" params={{ slug: "best-datacenter-proxies" }} className="text-primary font-semibold hover:underline">best datacenter proxies guide</Link>.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-md bg-primary/10 border border-primary/20 px-5 py-4">
            <div>
              <div className="text-sm font-extrabold text-foreground">Try before you commit</div>
              <div className="text-xs text-foreground/60">Free trial available, no credit card required.</div>
            </div>
            <a href={THORDATA_URL} target="_blank" rel="sponsored nofollow noopener"
              className="shrink-0 rounded-md bg-green-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-600">
              Start Free Trial -&gt;
            </a>
          </div>

          <img src={IMG_MAP} alt="Thordata global coverage map" className="mt-10 w-full rounded-md border border-border shadow-card" />

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Global coverage and IP pool</h2>
            <p className="mt-3 text-foreground/85">
              Thordata's dashboard breaks its pool down by country. Here's what it showed us for a handful of major markets:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
              <div><strong>United States</strong> - 5,604,857 IPs</div>
              <div><strong>United Kingdom</strong> - 1,910,532 IPs</div>
              <div><strong>Germany</strong> - 1,385,182 IPs</div>
              <div><strong>France</strong> - 1,265,354 IPs</div>
              <div><strong>Canada</strong> - 1,048,605 IPs</div>
              <div><strong>Japan</strong> - 612,248 IPs</div>
              <div><strong>Australia</strong> - 453,859 IPs</div>
              <div><strong>Netherlands</strong> - 386,796 IPs</div>
            </div>
            <p className="mt-3 text-sm text-foreground/70">
              Full coverage claims 190+ countries with a "see all locations" breakdown on their own site. One honest flag from our own notes while pulling these numbers: their UK figure showed up listed in two places in slightly different contexts on their dashboard, which is worth double-checking directly with Thordata if a specific country's pool size is make-or-break for your use case - IP pool figures across this entire industry shift often enough that we'd rather tell you to verify than round up a stale number.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Use cases</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-border bg-card p-4">
                <div className="font-bold text-foreground">Data for AI</div>
                <p className="mt-1 text-sm text-foreground/70">Powering AI training and fine-tuning with clean, structured web data, and enhancing RAG retrieval pipelines. See our <Link to="/use-cases/$slug" params={{ slug: "ai-training-data" }} className="text-primary font-semibold hover:underline">AI training data use case</Link>.</p>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <div className="font-bold text-foreground">E-commerce monitoring</div>
                <p className="mt-1 text-sm text-foreground/70">Anonymous, efficient data collection for price comparison and market analysis, with accurate, up-to-date pricing data. See our <Link to="/use-cases/$slug" params={{ slug: "price-monitoring" }} className="text-primary font-semibold hover:underline">price monitoring use case</Link>.</p>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <div className="font-bold text-foreground">SERP monitoring</div>
                <p className="mt-1 text-sm text-foreground/70">Precise search-result tracking for keyword research, competitor analysis, and local SEO insights. See our <Link to="/use-cases/$slug" params={{ slug: "seo-monitoring" }} className="text-primary font-semibold hover:underline">SEO monitoring use case</Link>.</p>
              </div>
            </div>
          </section>

          <img src={IMG_DEV} alt="Thordata developer integration screenshot" className="mt-10 w-full rounded-md border border-border shadow-card" />

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Setup and integration</h2>
            <p className="mt-3 text-foreground/85">
              Thordata's docs cover Python, cURL, Node.js, PHP, GO, Java and C# with ready-to-copy code examples. The Python sample for residential proxies, as shown on their site, looks like this:
            </p>
            <div className="relative mt-4">
              <CopyButton text={THORDATA_CODE_SAMPLE} />
              <pre className="overflow-x-auto rounded-md bg-navy p-4 text-sm text-white"><code>{THORDATA_CODE_SAMPLE}</code></pre>
            </div>
            <p className="mt-3 text-sm text-foreground/70">
              Standard HTTP Basic-Auth style setup - username and password embedded directly in the proxy URL, gateway endpoint on port 9999. Nothing unusual here if you've configured a proxy in Python before; see our <Link to="/blog/$slug" params={{ slug: "how-to-set-up-install-proxy-step-by-step-guide-2026" }} className="text-primary font-semibold hover:underline">full proxy setup guide</Link> if this is your first time.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Support and account management</h2>
            <p className="mt-3 text-foreground/85">
              Thordata splits support into three stages: a pre-sales consultant they claim responds in around 3 minutes, a dedicated 1-on-1 account manager for onboarding and scaling, and technical support with a stated 12-hour resolution target. Support runs through chat and email rather than phone.
            </p>
          </section>

          <img src={IMG_TRUST} alt="Thordata trust and compliance badges" className="mt-10 w-full rounded-md border border-border shadow-card" />

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Compliance and trust signals</h2>
            <p className="mt-3 text-foreground/85">
              Thordata states its data solutions are built on GDPR, CCPA and KYC standards, and displays a CCPA compliance badge and a GDPR Compliant badge on-site. Worth being precise here rather than rounding up: Thordata's own compliance page states SOC 2 and ISO 27001 certifications are <strong>in progress</strong>, not yet completed, even though an ISO 27001 badge appears elsewhere on their marketing pages. If a completed SOC 2 or ISO 27001 audit matters for your procurement requirements, ask Thordata directly for current certification status before you sign anything. See our <Link to="/trust-score" className="text-primary font-semibold hover:underline">Trust Score methodology</Link> for how we weigh compliance across every provider we review.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">What real users say</h2>
            <p className="mt-3 text-sm text-foreground/70">These are vendor-hosted testimonials from Thordata's own site - weigh them the same way you'd weigh any testimonial curated by the company itself.</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-md border border-border bg-card p-4">
                <StarRating rating={5} />
                <p className="mt-2 text-sm text-foreground/80 italic">"Thordata is pretty good. My work demands high stability and IP purity from proxies. Thordata's proxies perfectly meet my needs. What impressed me most was their technical support."</p>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <StarRating rating={5} />
                <p className="mt-2 text-sm text-foreground/80 italic">"Having access to such a reliable proxy network has made my work so much easier. No more slow connections or sudden interruptions - just seamless performance all the time."</p>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <StarRating rating={5} />
                <p className="mt-2 text-sm text-foreground/80 italic">"ThorData strikes the perfect balance between cost and quality. Their products are affordable without sacrificing performance, and their customer service is always responsive."</p>
              </div>
            </div>
          </section>

          <img src={IMG_COVERAGE} alt="Thordata dashboard screenshot" className="mt-10 w-full rounded-md border border-border shadow-card" />

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Beyond proxies - adjacent products</h2>
            <p className="mt-3 text-foreground/85">
              Thordata doesn't stop at raw proxy access. Their broader lineup includes ready-to-go Datasets, a SERP API for rank tracking and search analysis, a Web Scraper API with prebuilt and custom scrapers, a Web Unlocker aimed at reducing CAPTCHA and block friction, and a Scraping Browser for stealth browser automation. If you outgrow raw proxies later, that's a reasonable next step without switching vendors.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Pros and cons</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="rounded-md border border-green-500/30 bg-green-500/5 p-5">
                <div className="font-extrabold text-green-600 mb-3">Pros</div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Large, well-distributed residential pool across 190+ countries</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Free trial with no credit card required</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Real G2 and Capterra recognition, not just self-reported awards</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Broad SDK/language support with clean, ready-to-use code samples</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Dedicated account manager included, not an enterprise-only add-on</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Full product line beyond proxies (datasets, SERP API, unlocker, scraping browser)</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Flexible Sessions - rotate on every request or hold a sticky session for a consistent identity</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Pre-sales response time claimed at roughly 3 minutes</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Technical support carries a stated 12-hour resolution target from senior engineers</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Granular, filterable targeting by country with dedicated views per proxy type</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Genuine, specific customer testimonials praising IP stability and support responsiveness</li>
                </ul>
                <a href={THORDATA_URL} target="_blank" rel="sponsored nofollow noopener"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-green-500 text-sm font-bold text-white hover:bg-green-600">
                  Try Now <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="rounded-md border border-red-500/30 bg-red-500/5 p-5">
                <div className="font-extrabold text-red-500 mb-3">Cons</div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />SOC 2 and ISO 27001 certification still in progress, not finalized</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />Mobile proxy pricing ($2.20/GB) sits above the market's budget tier</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />Support is chat/email only - no phone line for urgent issues</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />Newer market entrant than category leaders like Bright Data or Oxylabs, with a shorter public track record</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />We spotted an inconsistency directly in their own dashboard data (the UK IP count appeared listed twice in different contexts) - worth verifying country-specific figures yourself</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />Static ISP and datacenter proxies are priced per IP rather than per GB - a different cost model to budget for if you're used to pure bandwidth pricing</li>
                  <li className="flex gap-2"><X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />No published refund policy found on their site at the time of writing - worth confirming directly before committing to a paid plan</li>
                </ul>
                <Link to="/reviews"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-navy text-sm font-bold text-white hover:opacity-90">
                  Read Other Reviews
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Thordata vs the competition</h2>
            <p className="mt-3 text-foreground/85">Full side-by-side against every provider we independently review:</p>
            <div className="mt-4 overflow-x-auto rounded-md border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Provider</th>
                    <th className="px-4 py-3 text-left font-bold">Rating</th>
                    <th className="px-4 py-3 text-left font-bold">Starting price</th>
                    <th className="px-4 py-3 text-left font-bold">Pool size</th>
                    <th className="px-4 py-3 text-left font-bold">Countries</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-primary/5">
                    <td className="px-4 py-3 font-bold">Thordata</td>
                    <td className="px-4 py-3">4.7/5</td>
                    <td className="px-4 py-3">$0.65/GB</td>
                    <td className="px-4 py-3">125M+</td>
                    <td className="px-4 py-3">190+</td>
                  </tr>
                  {[...providers].sort((a, b) => b.rating - a.rating).map((p) => (
                    <tr key={p.slug}>
                      <td className="px-4 py-3 font-semibold">
                        <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-primary hover:underline">{p.name}</Link>
                      </td>
                      <td className="px-4 py-3">{p.rating}/5</td>
                      <td className="px-4 py-3">${p.startingPriceGB}/GB</td>
                      <td className="px-4 py-3">{p.poolSize}</td>
                      <td className="px-4 py-3">{p.countries}+</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-foreground/85">
              At $0.65/GB entry pricing, Thordata undercuts both <Link to="/reviews/$slug" params={{ slug: "bright-data" }} className="text-primary font-semibold hover:underline">Bright Data</Link> and <Link to="/reviews/$slug" params={{ slug: "oxylabs" }} className="text-primary font-semibold hover:underline">Oxylabs</Link> on price by a wide margin while offering a genuinely large pool - though both of those providers still lead on raw pool size and market track record. Against <Link to="/reviews/$slug" params={{ slug: "iproyal" }} className="text-primary font-semibold hover:underline">IPRoyal</Link>, Thordata costs more per GB but brings a substantially larger pool and a dedicated account manager as standard. The real differentiator against the bigger names is Thordata's account management model - a dedicated 1-on-1 manager is standard here rather than reserved for enterprise-tier customers.
            </p>
          </section>

          <section className="mt-10 rounded-md border border-border bg-card p-6 md:p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-foreground font-bold">Is Thordata legit?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Thordata is a residential, ISP, mobile and datacenter proxy provider offering 100M+ IPs across 190+ countries, with GDPR and CCPA-aligned data sourcing. SOC 2 and ISO 27001 certification is in progress according to the company.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-foreground font-bold">How much does Thordata cost?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Pricing starts at $0.65/GB for residential proxies, $0.75/IP for static ISP and datacenter proxies, and $2.20/GB for mobile proxies, with a free trial available and no credit card required.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-foreground font-bold">Does Thordata offer a free trial?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Yes - Thordata offers a free trial with no credit card required.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-foreground font-bold">What is Thordata's uptime?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Thordata advertises 99.99% uptime for its proxy infrastructure.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-foreground font-bold">What programming languages does Thordata support?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Thordata's documentation provides ready-to-use code examples in Python, cURL, Node.js, PHP, GO, Java and C#.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6">
                <AccordionTrigger className="text-foreground font-bold">How many IPs does Thordata have?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Thordata lists 125,987,100+ residential IPs (marketed as "100M+") spanning 190+ countries, according to their own dashboard.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7">
                <AccordionTrigger className="text-foreground font-bold">Is Thordata GDPR compliant?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">Yes - Thordata states it builds its data solutions on GDPR, CCPA and KYC standards, and displays GDPR and CCPA compliance badges on its site.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mt-10 rounded-md bg-navy p-8 text-white">
            <h2 className="text-2xl font-bold">Our verdict</h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Thordata is a legitimate, well-resourced mid-market proxy provider with a genuinely large pool, real third-party recognition, and a support model that includes dedicated account management most competitors reserve for their biggest customers. It isn't yet the established name that Bright Data or Oxylabs is, and its compliance certifications are still in progress rather than finalized - but for teams that want a large, competitively-priced residential pool without enterprise-tier pricing, it's a genuine contender worth trialing.
            </p>
            <div className="mt-4"><StarRating rating={4.4} /></div>
            <a href={THORDATA_URL} target="_blank" rel="sponsored nofollow noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-green-500 px-8 py-3 text-sm font-bold text-white hover:bg-green-600">
              Try Thordata <ExternalLink className="h-4 w-4" />
            </a>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-md border border-border bg-card p-5">
            <div className="text-xs font-extrabold uppercase tracking-wider text-foreground/50 mb-3">Latest Reviews</div>
            <div className="space-y-4">
              {sidebarPicks.map((p) => (
                <div key={p.slug} className="rounded-md bg-muted/40 p-3">
                  <div className="flex items-center gap-2">
                    <ProviderLogo provider={p} size="sm" />
                    <div>
                      <div className="font-bold text-sm">{p.name}</div>
                      <StarRating rating={p.rating} />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{p.shortDescription}</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link to="/reviews/$slug" params={{ slug: p.slug }}
                      className="rounded-md bg-navy px-3 py-1.5 text-center text-xs font-bold text-white">
                      Read Review
                    </Link>
                    <a href={`/go/${p.slug}`} target="_blank" rel="sponsored nofollow noopener"
                      className="rounded-md bg-green-500 px-3 py-1.5 text-center text-xs font-bold text-white">
                      Try Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
