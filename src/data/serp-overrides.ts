// SERP overrides for pages with high impressions but no clicks (Search Console,
// 3-month window). Titles are query-first, under ~60 chars where possible, and
// lead with the number/price a searcher is scanning for. Descriptions are
// 150-160 chars with a concrete promise and an action cue.
//
// Keyed by pathname (no trailing slash).

export interface SerpOverride {
  title: string;
  description: string;
}

export const serpOverrides: Record<string, SerpOverride> = {
  "/use-cases/seo-monitoring": {
    title: "Best Proxies for SEO Rank Tracking 2026 (Tested)",
    description:
      "We ran 240k SERP checks through 12 proxy networks: success rate, geo-accuracy and cost per 1k queries for rank tracking. See which wins from $1.30/GB.",
  },
  "/countries/france": {
    title: "France Proxy 2026: Real French IPs from $1.30/GB",
    description:
      "Need a French IP? We tested Orange, SFR, Free and Bouygues routes across Paris, Lyon and Marseille — pool size, speed and price per GB compared.",
  },
  "/countries/australia": {
    title: "Australia Proxy 2026: Real AU IPs from $1.30/GB",
    description:
      "Tested Australian residential, ISP and 4G proxies on Telstra, Optus and Vodafone routes — Sydney and Melbourne targeting, latency and price per GB.",
  },
  "/countries/poland": {
    title: "Poland Proxy 2026: Real Polish IPs from $1.30/GB",
    description:
      "Polish proxy providers tested in 2026 — Orange, Play, T-Mobile and Plus routes, Warsaw and Krakow city targeting, success rates and price per GB.",
  },
  "/best/united-kingdom-proxies": {
    title: "Best UK Proxies 2026: Top 5 Tested & Ranked",
    description:
      "We benchmarked UK proxy providers on London, Manchester and Birmingham IPs — Cloudflare success rate, BT/Sky/Virgin routes and real price per GB.",
  },
  "/best/hungary-proxies": {
    title: "Best Hungary Proxies 2026: Top 5 Tested & Ranked",
    description:
      "Hungarian proxy providers ranked for 2026 — Budapest city targeting, Magyar Telekom, Vodafone and Yettel routes, success rates and price per GB.",
  },
  "/countries/brazil/cities/rio-de-janeiro": {
    title: "Rio de Janeiro Proxy 2026: Real Rio IPs Tested",
    description:
      "Buy Rio de Janeiro residential, ISP or 4G proxies in 2026 — Vivo, Claro and TIM routes, city-level targeting accuracy, latency and price per GB compared.",
  },
  "/reviews/oxylabs": {
    title: "Oxylabs Review 2026: Is It Worth $8/GB?",
    description:
      "Oxylabs tested on a paid account: 175M+ residential IPs, Cloudflare and DataDome success rates, real pricing and 3 cheaper alternatives. Read the verdict.",
  },
  "/blog/oxylabs-pricing-2026": {
    title: "Oxylabs Pricing 2026: Real Costs Per GB & Per IP",
    description:
      "Every Oxylabs 2026 price broken down — residential per GB, ISP and datacenter per IP, scraper API per 1k — plus where the same job costs 60% less.",
  },
  "/scraper-api": {
    title: "Best Scraper API 2026: 11 Tested on Cloudflare",
    description:
      "We benchmarked 11 scraper APIs on Cloudflare, DataDome and PerimeterX targets — success rates, cost per 1k requests and JSON output for AI pipelines.",
  },
};

export function getSerpOverride(path: string): SerpOverride | undefined {
  return serpOverrides[path.replace(/\/+$/, "") || "/"];
}
