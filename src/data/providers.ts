// Central data source for all proxy providers reviewed on ToptierProxy.com.
// Used across reviews, comparisons, category pages and the homepage.

export type ProxyType =
  | "residential"
  | "datacenter"
  | "isp"
  | "mobile"
  | "scraping-api"
  | "sneaker";

export interface Provider {
  slug: string;
  name: string;
  tagline: string;
  rating: number; // 0-5
  startingPriceGB?: number; // USD per GB for residential
  poolSize?: string; // e.g. "150M+ IPs"
  countries?: number;
  bestFor: string;
  proxyTypes: ProxyType[];
  founded?: number;
  hq?: string;
  pros: string[];
  cons: string[];
  shortDescription: string;
  longDescription: string;
  visitUrl: string;
  pricingTiers?: { plan: string; bandwidth: string; pricePerGB: string; bestFor: string }[]; // real published pricing, when we have it
  realTestNotes?: string; // genuine testing observations, replaces the fabricated formula stat
  featureDeepDive?: { title: string; body: string }[]; // real feature breakdown
  setupSteps?: string[]; // real getting-started steps
  richFaq?: { q: string; a: string }[]; // provider-specific FAQ, overrides generic FAQ when present
  trustScore: number; // 0-100
  badge?: string; // e.g. "Editor's Choice"
}

export const providers: Provider[] = [
  {
    slug: "bright-data",
    name: "Bright Data",
    tagline: "Industry-leading enterprise proxy network",
    rating: 4.9,
    startingPriceGB: 8,
    poolSize: "400M+ IPs",
    countries: 195,
    bestFor: "Enterprise scraping & compliance",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2014,
    hq: "Netanya, Israel",
    pros: [
      "400M+ IP residential pool, the largest in the industry",
      "KYC-vetted, ethically sourced IPs with SOC 2 and ISO 27001",
      "Full product stack: Web Unlocker, Scraping Browser, SERP API, Datasets",
      "City-, ASN- and carrier-level targeting across 195 countries",
    ],
    cons: ["Premium pay-as-you-go pricing vs budget providers", "Product breadth adds a learning curve for new users"],
    shortDescription:
      "Bright Data operates the world's largest ethically-sourced proxy network with 400M+ residential IPs across 195 countries.",
    longDescription:
      "Founded in 2014 as Luminati Networks and rebranded to Bright Data in 2021, the company is widely regarded as the gold standard in the proxy industry, serving more than 20,000 organizations including Fortune 500 enterprises and research institutions. It runs a strict KYC compliance program and holds SOC 2 Type II and ISO 27001 certifications. Where smaller providers sell a single proxy product, Bright Data bundles raw proxy networks (residential, ISP, datacenter, mobile) with a Web Unlocker for automatic CAPTCHA and block handling, a Scraping Browser, a SERP API, a pre-built Dataset Marketplace, and a desktop Proxy Manager - making it the default one-vendor choice for teams that want proxies and anti-bot tooling in a single account.",
    visitUrl: "https://get.brightdata.com/68a0yf9mr2cl",
    trustScore: 98,
    badge: "Editor's Choice",
    pricingTiers: [
      { plan: "Pay-as-you-go", bandwidth: "From 1 GB", pricePerGB: "$8.00", bestFor: "Testing and small projects, no commitment" },
      { plan: "Growth", bandwidth: "Committed monthly volume", pricePerGB: "~$3.50-5.00", bestFor: "Teams past the testing phase" },
      { plan: "Business", bandwidth: "Higher committed volume", pricePerGB: "~$2.50-3.00", bestFor: "Production scraping pipelines" },
      { plan: "Enterprise", bandwidth: "Custom volume", pricePerGB: "Custom quote", bestFor: "20,000+ org customer base, Fortune 500 scale" },
    ],
    realTestNotes: "Bright Data does not publish flat headline pricing - residential proxy cost is consumption-based and drops significantly with committed monthly volume, so the real per-GB rate depends heavily on your actual usage tier. Get an exact quote for your volume directly on their pricing page before committing, since published pay-as-you-go rates are the most expensive entry point by design.",
    featureDeepDive: [
      { title: "Web Unlocker", body: "An automatic CAPTCHA-solving and anti-bot bypass layer that sits in front of the proxy network. You send a URL, Bright Data handles the fingerprinting, retries and block detection, and returns rendered HTML. Priced per successful request (roughly $0.75 per 1,000 for standard domains, up to $2.50 per 1,000 for heavily protected targets like Amazon or Walmart product pages) rather than per GB, which changes the cost calculus for scraping-heavy workloads versus pure proxy bandwidth." },
      { title: "Scraping Browser", body: "A managed, remotely-hosted Chromium browser with built-in proxy rotation, fingerprint randomization and CAPTCHA handling, controlled via the standard Puppeteer or Playwright APIs. Useful when a target requires full JavaScript rendering and you do not want to run and maintain your own headless browser infrastructure." },
      { title: "Dataset Marketplace", body: "Pre-scraped, structured datasets covering e-commerce listings, social profiles, job postings, business directories and more, sold per 1,000 records starting around $2.50/1K. Useful when you need the data itself rather than the scraping infrastructure, and refresh schedules are configurable." },
      { title: "SERP API", body: "Real-time search engine results across Google, Bing and other major engines, returned as structured JSON with location and device targeting. Billed per successful request rather than per GB, with response times typically under 5 seconds." },
    ],
    setupSteps: [
      "Create a free Bright Data account - no credit card required for the trial.",
      "Choose your proxy type from the dashboard: residential, ISP, datacenter, or mobile, based on how protected your target site is.",
      "Configure targeting - country, city, ASN or carrier-level, depending on your use case.",
      "Copy your endpoint, username and password from the dashboard into your scraping script or browser proxy settings.",
      "For heavily protected targets, consider routing through the Web Unlocker instead of raw proxies - it handles CAPTCHA and block detection automatically at a per-request price.",
      "Monitor usage in the dashboard to catch bandwidth overages before they hit your bill, since pricing is consumption-based.",
    ],
    richFaq: [
      { q: "How much does Bright Data actually cost per month?", a: "It depends entirely on your usage. Pay-as-you-go residential proxies start around $8/GB with no commitment, but committed monthly volume plans bring the effective rate down substantially, often into the $2.50-5.00/GB range at real production volume. Get a quote for your specific expected usage rather than budgeting off the entry-level rate." },
      { q: "Is Bright Data worth the premium over budget proxy providers?", a: "For teams scraping heavily protected targets (Amazon, major social platforms, Cloudflare Enterprise sites) or that need SOC 2 / ISO 27001 compliance documentation for procurement, yes - the success rate and compliance posture justify the price. For lighter workloads on less-protected sites, a budget provider like Decodo or IPRoyal will do the job at a fraction of the cost." },
      { q: "What is the difference between Bright Data's proxies and its Web Unlocker?", a: "Raw proxies give you an IP address and you handle fingerprinting, retries and CAPTCHA yourself. The Web Unlocker is a managed layer that handles all of that automatically and is billed per successful request rather than per GB - it costs more per request but can be cheaper overall on heavily protected targets where raw proxies would need many retries." },
      { q: "Does Bright Data offer a free trial?", a: "Yes, a free trial is available on all proxy types with no credit card required at signup, and trial traffic is visible in your dashboard without counting toward billing." },
    ],
  },
  {
    slug: "oxylabs",
    name: "Oxylabs",
    tagline: "Premium proxies & AI-powered scraping APIs",
    rating: 4.8,
    startingPriceGB: 8,
    poolSize: "175M+ IPs",
    countries: 195,
    bestFor: "Large-scale data collection",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2015,
    hq: "Vilnius, Lithuania",
    pros: [
      "175M+ residential IP pool with unlimited concurrent sessions",
      "Best-in-class scraper APIs (SERP, E-commerce, Web)",
      "Proxyway 2025 ranked Oxylabs near the top for performance",
      "24/7 dedicated account managers and live chat support",
    ],
    cons: ["Pay-as-you-go entry rate is steep vs budget providers", "Committed monthly plans required to reach competitive per-GB pricing"],
    shortDescription:
      "Oxylabs combines a 175M+ residential pool with industry-leading scraper APIs and is a top pick for serious data teams.",
    longDescription:
      "Oxylabs has grown into one of the two undisputed leaders of the premium proxy market. Its residential network covers every country with city-level targeting, and its SERP, E-Commerce and Web Scraper APIs deliver structured JSON output with built-in unblocking. Oxylabs holds SOC 2 Type II certification, publishes a KYC policy and Trust Center, and the independent Proxyway 2025 Proxy Market Research report consistently ranks it near the top for response time and success rate.",
    visitUrl: "https://oxylabs.hasoffers.com/signup/2192",
    trustScore: 97,
    badge: "Top Rated",
    pricingTiers: [
      { plan: "Starter", bandwidth: "5 GB / mo", pricePerGB: "$6.00", bestFor: "$30/mo, small test projects" },
      { plan: "Basic", bandwidth: "20 GB / mo", pricePerGB: "$5.00", bestFor: "$100/mo, solo developers" },
      { plan: "Advanced", bandwidth: "125 GB / mo", pricePerGB: "$4.00", bestFor: "$500/mo, serious operations" },
      { plan: "Corporate", bandwidth: "1,000 GB / mo", pricePerGB: "$2.50", bestFor: "$2,500/mo, enterprise scale" },
    ],
    realTestNotes: "Oxylabs pay-as-you-go residential pricing starts around $8/GB, which looks steep next to budget providers, but the self-serve monthly plans (Starter through Corporate) bring the effective rate down to $2.50-6.00/GB depending on committed volume. At 1TB+ monthly usage the Corporate tier becomes genuinely competitive with Bright Data and Decodo. Confirm current rates directly with Oxylabs, as tiered SaaS pricing is revised periodically.",
    featureDeepDive: [
      { title: "Web Scraper API", body: "A managed scraping endpoint with three tiers - Micro ($49/mo, up to ~98,000 results), Starter ($99/mo, ~220,000 results) and Advanced ($249/mo, ~622,500 results) - billed on a per-1,000-results basis that decreases as you commit to a higher tier. Handles JavaScript rendering, proxy rotation and CAPTCHA automatically, with a free trial of up to 2,000 results (1,000 for Google, 2,000 for Amazon) with no expiration." },
      { title: "ISP (Static Residential) Proxies", body: "Dedicated IPs sourced from real ISPs rather than rotating through a shared pool, starting from $1.60/IP. Useful for account management and any workflow that needs a consistent IP across sessions rather than rotation on every request." },
      { title: "OxyCopilot and AI Studio", body: "AI-assisted tooling built into the dashboard for generating scraping selectors and structuring output without writing parsing code by hand - available with a free trial alongside the core proxy and API products." },
      { title: "Dedicated Account Management", body: "All committed monthly plans include a dedicated account manager and 24/7 live chat support, which matters for teams running production scraping pipelines that need fast escalation when a target site changes its anti-bot defenses." },
    ],
    setupSteps: [
      "Sign up for an Oxylabs account and claim the free trial on your chosen product.",
      "Pick your proxy type - residential for general scraping, ISP for account consistency, datacenter for speed on unprotected targets, or the Web Scraper API for a fully managed endpoint.",
      "Generate your access credentials from the dashboard.",
      "For the Web Scraper API, send your target URL to the API endpoint and receive structured, rendered results directly - no proxy configuration needed.",
      "For raw proxies, configure the endpoint, username and password in your scraping script or browser.",
      "Reach out to your dedicated account manager if you are on a committed plan and need help tuning success rates on a specific target.",
    ],
    richFaq: [
      { q: "How much does Oxylabs cost per month?", a: "Pay-as-you-go residential starts around $8/GB. Self-serve monthly plans bring this down: Starter is $30/mo for 5GB ($6/GB), Advanced is $500/mo for 125GB ($4/GB), and Corporate is $2,500/mo for 1TB ($2.50/GB). The Web Scraper API starts separately at $49/mo for the Micro tier." },
      { q: "Is Oxylabs better than Bright Data?", a: "Both are premium, enterprise-grade providers with comparable pricing structures and compliance postures. Oxylabs' Web Scraper API tiers and OxyCopilot AI tooling are a differentiator for teams that want managed scraping over raw proxies; Bright Data's broader product catalog (Scraping Browser, Dataset Marketplace) suits teams that want one vendor for everything. Independent Proxyway benchmarks put both near the top of the market." },
      { q: "Does Oxylabs offer a free trial?", a: "Yes - a free trial is available across proxy services, the Web Scraper API, OxyCopilot and AI Studio, including up to 2,000 free results on the Scraper API with no expiration." },
      { q: "What is the minimum commitment for Oxylabs?", a: "The Starter self-serve plan is $30/month for 5GB with no long-term contract. Higher tiers (Advanced, Corporate) are still monthly plans rather than annual contracts, though the best per-GB rates require committing to higher monthly volume." },
    ],
  },
  {
    slug: "decodo",
    name: "Decodo",
    tagline: "Smartproxy reborn — affordable premium proxies",
    rating: 4.7,
    startingPriceGB: 2,
    poolSize: "115M+ IPs",
    countries: 195,
    bestFor: "Best price-to-performance ratio",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2018,
    hq: "Vilnius, Lithuania",
    pros: [
      "Residential pricing from $2/GB",
      "Excellent self-serve dashboard",
      "Free trial on every product",
      "Strong success rates on Cloudflare-protected sites",
    ],
    cons: ["Smaller pool than Bright Data/Oxylabs", "Mobile pool still growing"],
    shortDescription:
      "Decodo (formerly Smartproxy) delivers premium-grade proxies at half the price of the top two enterprise vendors.",
    longDescription:
      "Rebranded from Smartproxy in late 2024, Decodo has kept everything users loved about the original product while sharpening its focus on developer experience and pricing transparency. Pay-as-you-go residential traffic starts at $2/GB, free trials are available across the entire product catalog, and the dashboard remains one of the cleanest in the industry.",
    visitUrl: "https://decodo.com/?refcode=toptierproxy",
    trustScore: 94,
    badge: "Best Value",
  },
  {
    slug: "iproyal",
    name: "IPRoyal",
    tagline: "Pay-as-you-go residential with no expiry",
    rating: 4.6,
    startingPriceGB: 1.75,
    poolSize: "32M+ IPs",
    countries: 195,
    bestFor: "Budget-conscious developers",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "sneaker"],
    founded: 2020,
    hq: "Wilmington, USA",
    pros: [
      "Bandwidth never expires",
      "Royal Residential pool with sticky sessions",
      "Strong sneaker / streaming success rates",
      "No KYC or minimum commitment",
    ],
    cons: ["Smaller pool size", "Support response slower than top tier"],
    shortDescription:
      "IPRoyal's Royal Residential plan offers true pay-as-you-go bandwidth that never expires, starting at $1.75/GB.",
    longDescription:
      "IPRoyal has carved out a strong position with hobbyists, sneaker resellers and small dev teams thanks to its non-expiring bandwidth model and aggressive pricing. The Royal Residential network spans every country with both rotating and sticky sessions, while dedicated datacenter and ISP plans round out a flexible product line.",
    visitUrl: "https://iproyal.com/?r=1289846",
    trustScore: 91,
  },
  {
    slug: "soax",
    name: "SOAX",
    tagline: "Flexible mobile & residential pools",
    rating: 4.6,
    startingPriceGB: 3.6,
    poolSize: "191M+ IPs",
    countries: 195,
    bestFor: "Mobile proxy specialists",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2019,
    hq: "London, UK",
    pros: [
      "One credit pool across all proxy types",
      "Excellent mobile network with carrier targeting",
      "Granular geo & ASN filtering",
      "Web Data API included",
    ],
    cons: ["Pricing higher than Decodo/IPRoyal", "Pool size smaller than the leaders"],
    shortDescription:
      "SOAX gives you one shared credit pool across residential, mobile, ISP and datacenter proxies plus a Web Data API.",
    longDescription:
      "SOAX's unified credit model is genuinely useful: instead of buying separate plans, you spend one balance across whichever proxy type fits the target. Its mobile pool is particularly strong, with carrier and ASN targeting that few competitors match.",
    visitUrl: "https://soax.com",
    trustScore: 90,
  },
  {
    slug: "netnut",
    name: "NetNut",
    tagline: "ISP-backed residential with no peer-to-peer",
    rating: 4.5,
    startingPriceGB: 4.5,
    poolSize: "85M+ IPs",
    countries: 195,
    bestFor: "Speed-sensitive scraping",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2017,
    hq: "Tel Aviv, Israel",
    pros: [
      "Direct ISP partnerships — no P2P sourcing",
      "Sub-second response times",
      "Static residential (ISP) IPs at scale",
      "99.99% uptime SLA",
    ],
    cons: ["Higher entry price", "Smaller country coverage on some pools"],
    shortDescription:
      "NetNut sources residential IPs directly from ISPs rather than peer-to-peer, delivering best-in-class speeds.",
    longDescription:
      "NetNut differentiates by sourcing its residential IPs through direct ISP partnerships rather than a peer-to-peer SDK. The result is faster, more stable connections — particularly useful for ad verification, brand protection and any workload that's sensitive to latency.",
    visitUrl: "https://netnut.io?ref=mmq0nwq",
    trustScore: 92,
  },
  {
    slug: "webshare",
    name: "Webshare",
    tagline: "The most affordable datacenter proxies",
    rating: 4.5,
    startingPriceGB: 1,
    poolSize: "30M+ IPs",
    countries: 50,
    bestFor: "Cheap datacenter & static residential",
    proxyTypes: ["datacenter", "residential", "isp"],
    founded: 2018,
    hq: "San Francisco, USA",
    pros: [
      "Free 10-proxy plan to start",
      "Datacenter from $0.0008 per IP",
      "Self-serve dashboard with API",
      "Generous bandwidth allowances",
    ],
    cons: ["Residential pool is smaller", "No dedicated mobile network"],
    shortDescription:
      "Webshare is the go-to for cheap, reliable datacenter proxies with a generous free plan and API-first workflow.",
    longDescription:
      "Webshare has built a loyal developer following on the back of unbeatable datacenter pricing and a no-friction signup. The free tier (10 proxies, 1GB/month) is genuinely usable for prototyping, and paid datacenter plans are among the cheapest per-IP in the industry.",
    visitUrl: "https://www.webshare.io/?referral_code=gp0x8ig1cckr",
    trustScore: 88,
  },
  {
    slug: "rayobyte",
    name: "Rayobyte",
    tagline: "US-based, ethical proxy provider",
    rating: 4.4,
    startingPriceGB: 4,
    poolSize: "20M+ IPs",
    countries: 100,
    bestFor: "US-targeted scraping & ethics",
    proxyTypes: ["residential", "datacenter", "isp", "mobile"],
    founded: 2015,
    hq: "Indianapolis, USA",
    pros: [
      "Strong US datacenter & ISP coverage",
      "Banned-domain refunds",
      "Ethically sourced residential pool",
      "Free residential trial",
    ],
    cons: ["Smaller global footprint", "Dashboard could be more polished"],
    shortDescription:
      "Rayobyte (formerly Blazing SEO) is a US-based provider with a strong ethics story and a deep US datacenter pool.",
    longDescription:
      "Rayobyte stands out for its US-focused datacenter and ISP infrastructure, transparent ethics policy, and consumer-friendly touches like banned-domain refunds. It's a great fit for SEO teams, e-commerce monitoring and anyone targeting US audiences.",
    visitUrl: "https://rayobyte.com",
    trustScore: 89,
  },
  {
    slug: "proxyempire",
    name: "ProxyEmpire",
    tagline: "Rolling traffic & sticky sessions",
    rating: 4.3,
    startingPriceGB: 3.5,
    poolSize: "9M+ IPs",
    countries: 170,
    bestFor: "Rolling-bandwidth flexibility",
    proxyTypes: ["residential", "mobile", "datacenter"],
    founded: 2020,
    hq: "Wyoming, USA",
    pros: [
      "Bandwidth rolls over month-to-month",
      "30-min sticky sessions",
      "Good mobile coverage",
      "Country-, region-, city-level targeting",
    ],
    cons: ["Smaller pool than top tier", "Limited static IP options"],
    shortDescription:
      "ProxyEmpire's rollover bandwidth and 30-minute sticky sessions make it a flexible pick for varied workloads.",
    longDescription:
      "ProxyEmpire is a younger provider that wins on flexibility: unused bandwidth rolls over each month, sticky sessions can hold up to 30 minutes, and pricing is competitive across residential and mobile.",
    visitUrl: "https://proxyempire.io/?ref=zjuzmde",
    trustScore: 86,
  },
  {
    slug: "nimbleway",
    name: "Nimbleway",
    tagline: "AI-driven web data platform",
    rating: 4.4,
    startingPriceGB: 5,
    poolSize: "70M+ IPs",
    countries: 195,
    bestFor: "No-code web data pipelines",
    proxyTypes: ["residential", "scraping-api"],
    founded: 2020,
    hq: "Tel Aviv, Israel",
    pros: [
      "Auto-parsing AI engine",
      "Visual pipeline builder",
      "Strong unblocking on JS-heavy sites",
      "SOC 2 compliant",
    ],
    cons: ["More expensive than raw proxies", "Best for full pipelines, not raw IPs"],
    shortDescription:
      "Nimbleway pairs a 70M+ residential pool with an AI parsing engine and visual pipeline builder.",
    longDescription:
      "Nimbleway sits at the intersection of proxies and scraping platforms. Beyond raw residential bandwidth, you get an AI-driven parser that auto-extracts structured data from any page, and a visual pipeline builder that requires zero code.",
    visitUrl: "https://nimbleway.com",
    trustScore: 87,
  },
  {
    slug: "infatica",
    name: "Infatica",
    tagline: "Ethically-sourced peer network",
    rating: 4.2,
    startingPriceGB: 4,
    poolSize: "40M+ IPs",
    countries: 195,
    bestFor: "Mid-budget residential needs",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2019,
    hq: "Singapore",
    pros: [
      "Transparent SDK-based sourcing",
      "Pay-as-you-go option",
      "195+ country coverage",
      "Scraper API included",
    ],
    cons: ["Pool smaller than market leaders", "Speeds vary by region"],
    shortDescription:
      "Infatica runs an opt-in peer network with transparent sourcing and competitive mid-tier pricing across 195+ countries.",
    longDescription:
      "Infatica's residential pool is sourced via an opt-in SDK with clear user disclosure, spans 40M+ IPs across 195+ countries, and its pricing sits comfortably in the mid-tier. A solid all-rounder for teams that need decent scale without enterprise budgets.",
    visitUrl: "https://dashboard.infatica.io/aff.php?aff=845",
    pricingTiers: [
      { plan: "Pay-as-you-go", bandwidth: "From 1 GB", pricePerGB: "$4.00", bestFor: "Testing & small projects" },
      { plan: "Starter", bandwidth: "25 GB / mo", pricePerGB: "$3.84", bestFor: "Solo developers ($96 total)" },
      { plan: "Business", bandwidth: "100 GB / mo", pricePerGB: "$3.60", bestFor: "Growing teams ($360 total)" },
      { plan: "Scale", bandwidth: "1,000 GB / mo", pricePerGB: "$2.60", bestFor: "High-volume ($2,600 total)" },
      { plan: "Custom", bandwidth: "Upon request", pricePerGB: "Contact sales", bestFor: "Enterprise & SLA needs" },
    ],
    trustScore: 84,
  },
  {
    slug: "proxy-cheap",
    name: "Proxy-Cheap",
    tagline: "Budget proxies across every category",
    rating: 4.1,
    startingPriceGB: 2.99,
    poolSize: "9M+ IPs",
    countries: 127,
    bestFor: "Tight budgets, varied needs",
    proxyTypes: ["residential", "datacenter", "isp", "mobile"],
    founded: 2018,
    hq: "Vilnius, Lithuania",
    pros: [
      "Aggressive pricing across all types",
      "ISP proxies from $1/IP",
      "Easy dashboard",
      "Crypto payment support",
    ],
    cons: ["Smaller global pool", "Less polished documentation"],
    shortDescription:
      "Proxy-Cheap lives up to its name — competitive pricing across residential, datacenter, ISP and mobile.",
    longDescription:
      "If price is the deciding factor, Proxy-Cheap is hard to ignore. The provider keeps things simple with transparent flat pricing, supports crypto payments, and ships a usable dashboard for managing rotating and static IP plans.",
    visitUrl: "https://app.proxy-cheap.com/r/nAPT9Q",
    trustScore: 82,
  },
];

export const getProvider = (slug: string) => providers.find((p) => p.slug === slug);

export const editorChoice = providers.find((p) => p.badge === "Editor's Choice")!;
