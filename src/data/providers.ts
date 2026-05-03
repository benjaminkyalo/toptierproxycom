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
  trustScore: number; // 0-100
  badge?: string; // e.g. "Editor's Choice"
}

export const providers: Provider[] = [
  {
    slug: "bright-data",
    name: "Bright Data",
    tagline: "Industry-leading enterprise proxy network",
    rating: 4.9,
    startingPriceGB: 4.2,
    poolSize: "150M+ IPs",
    countries: 195,
    bestFor: "Enterprise scraping & compliance",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2014,
    hq: "Netanya, Israel",
    pros: [
      "Largest residential pool in the industry",
      "KYC-vetted, ethically sourced IPs",
      "Powerful Web Unlocker & Scraping Browser",
      "City-, ASN- and carrier-level targeting",
    ],
    cons: ["Premium pricing vs budget providers", "Steep learning curve for new users"],
    shortDescription:
      "Bright Data operates the world's largest ethically-sourced proxy network with 150M+ residential IPs across every country.",
    longDescription:
      "Founded in 2014 (originally as Luminati Networks), Bright Data is widely regarded as the gold standard in the proxy industry. The company runs a strict KYC compliance program, holds SOC 2 Type II and ISO 27001 certifications, and powers data collection for thousands of Fortune 500 companies. Its product stack spans residential, ISP, datacenter and mobile proxies, alongside higher-level products like the Web Unlocker, Scraping Browser, and pre-built dataset marketplace.",
    visitUrl: "https://get.brightdata.com/68a0yf9mr2cl",
    trustScore: 98,
    badge: "Editor's Choice",
  },
  {
    slug: "oxylabs",
    name: "Oxylabs",
    tagline: "Premium proxies & AI-powered scraping APIs",
    rating: 4.8,
    startingPriceGB: 4,
    poolSize: "175M+ IPs",
    countries: 195,
    bestFor: "Large-scale data collection",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2015,
    hq: "Vilnius, Lithuania",
    pros: [
      "175M+ residential IP pool",
      "Best-in-class scraper APIs (SERP, E-commerce, Web)",
      "Patented next-gen residential proxies",
      "24/7 dedicated account managers",
    ],
    cons: ["Minimum commitments on some plans", "Dashboard can feel enterprise-heavy"],
    shortDescription:
      "Oxylabs combines a 175M+ residential pool with industry-leading scraper APIs and is a top pick for serious data teams.",
    longDescription:
      "Oxylabs has grown into one of the two undisputed leaders of the premium proxy market. Its residential network covers every country with city-level targeting, and its SERP, E-Commerce and Web Scraper APIs deliver structured JSON output with built-in unblocking. Oxylabs holds SOC 2 Type II certification and is a founding member of the Ethical Web Data Collection Initiative.",
    visitUrl: "https://oxylabs.hasoffers.com/signup/2192",
    trustScore: 97,
    badge: "Top Rated",
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
    startingPriceGB: 3.6,
    poolSize: "15M+ IPs",
    countries: 100,
    bestFor: "Mid-budget residential needs",
    proxyTypes: ["residential", "datacenter", "isp", "mobile", "scraping-api"],
    founded: 2019,
    hq: "Singapore",
    pros: [
      "Transparent SDK-based sourcing",
      "Pay-as-you-go option",
      "Decent global coverage",
      "Scraper API included",
    ],
    cons: ["Pool smaller than market leaders", "Speeds vary by region"],
    shortDescription:
      "Infatica runs an opt-in peer network with transparent sourcing and competitive mid-tier pricing.",
    longDescription:
      "Infatica's residential pool is sourced via an opt-in SDK with clear user disclosure, and its pricing sits comfortably in the mid-tier. A solid all-rounder for teams that need decent scale without enterprise budgets.",
    visitUrl: "https://infatica.io",
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
