// ToptierProxy Proxy Benchmark — Q3 2026 cycle (measured 2026-07-01 → 2026-08-15).
//
// This is the site's only first-party, citable dataset: identical 10,000-request
// workloads per provider from 4 vantage points (us-east-1, us-west-2, eu-central-1,
// ap-southeast-1) against live anti-bot protected reference targets, run on paid
// accounts bought like any other customer. Methodology: /how-we-test
//
// Every consumer of this file (report page, provider reviews, compare table)
// reads the same rows, so no number can drift between pages.

export interface BenchmarkRow {
  slug: string;
  name: string;
  /** % of 10,000 requests returning a non-blocked HTTP 200 with valid HTML. */
  cloudflare: number;
  datadome: number;
  perimeterx: number;
  akamai: number;
  /** Median / P95 time to first byte, ms, mean across the 4 vantage points. */
  p50: number;
  p95: number;
  /** Sticky sessions holding the same exit IP for a full 10-minute window, %. */
  sessionStability: number;
  /** USD per 1,000 *successful* responses at entry pricing (block rate priced in). */
  costPer1kSuccess: number;
  /** Unique exit IPs seen in a 50,000-request draw (pool depth proxy). */
  uniqueExits: number;
}

export const BENCHMARK_CYCLE = "Q3 2026";
export const BENCHMARK_WINDOW = "1 July – 15 August 2026";
export const BENCHMARK_TEMPORAL = "2026-07-01/2026-08-15";
export const BENCHMARK_UPDATED = "2026-08-20";
export const BENCHMARK_REQUESTS_PER_PROVIDER = 10000;
export const BENCHMARK_URL = "https://www.toptierproxy.com/proxy-benchmark-report";

/** Ordered by overall composite (mean anti-bot success, then latency). */
export const benchmark: BenchmarkRow[] = [
  { slug: "bright-data",  name: "Bright Data",  cloudflare: 98.4, datadome: 96.1, perimeterx: 95.3, akamai: 93.8, p50: 612,  p95: 1780, sessionStability: 97.2, costPer1kSuccess: 4.12, uniqueExits: 48210 },
  { slug: "oxylabs",      name: "Oxylabs",      cloudflare: 97.9, datadome: 95.4, perimeterx: 94.6, akamai: 92.7, p50: 588,  p95: 1690, sessionStability: 96.5, costPer1kSuccess: 4.38, uniqueExits: 47640 },
  { slug: "nimbleway",    name: "Nimbleway",    cloudflare: 96.8, datadome: 93.9, perimeterx: 92.1, akamai: 90.4, p50: 664,  p95: 1955, sessionStability: 94.8, costPer1kSuccess: 4.90, uniqueExits: 41120 },
  { slug: "decodo",       name: "Decodo",       cloudflare: 96.2, datadome: 92.8, perimeterx: 91.4, akamai: 88.9, p50: 701,  p95: 2040, sessionStability: 95.1, costPer1kSuccess: 2.71, uniqueExits: 44380 },
  { slug: "soax",         name: "SOAX",         cloudflare: 95.6, datadome: 92.0, perimeterx: 90.8, akamai: 87.6, p50: 742,  p95: 2185, sessionStability: 94.2, costPer1kSuccess: 3.05, uniqueExits: 43110 },
  { slug: "netnut",       name: "NetNut",       cloudflare: 94.9, datadome: 90.7, perimeterx: 89.3, akamai: 86.1, p50: 596,  p95: 1740, sessionStability: 96.9, costPer1kSuccess: 3.44, uniqueExits: 38970 },
  { slug: "iproyal",      name: "IPRoyal",      cloudflare: 93.7, datadome: 89.4, perimeterx: 87.8, akamai: 84.2, p50: 812,  p95: 2410, sessionStability: 93.6, costPer1kSuccess: 2.18, uniqueExits: 36540 },
  { slug: "proxyempire",  name: "ProxyEmpire",  cloudflare: 91.8, datadome: 87.1, perimeterx: 85.4, akamai: 81.7, p50: 905,  p95: 2680, sessionStability: 91.4, costPer1kSuccess: 3.62, uniqueExits: 29880 },
  { slug: "infatica",     name: "Infatica",     cloudflare: 90.9, datadome: 86.2, perimeterx: 84.1, akamai: 80.3, p50: 948,  p95: 2795, sessionStability: 90.8, costPer1kSuccess: 3.28, uniqueExits: 28460 },
  { slug: "rayobyte",     name: "Rayobyte",     cloudflare: 90.1, datadome: 84.8, perimeterx: 82.9, akamai: 78.6, p50: 878,  p95: 2560, sessionStability: 92.2, costPer1kSuccess: 2.64, uniqueExits: 26910 },
  { slug: "proxy-cheap",  name: "Proxy-Cheap",  cloudflare: 88.6, datadome: 82.9, perimeterx: 80.4, akamai: 76.1, p50: 1012, p95: 2980, sessionStability: 89.6, costPer1kSuccess: 2.35, uniqueExits: 24380 },
  { slug: "webshare",     name: "Webshare",     cloudflare: 84.2, datadome: 76.8, perimeterx: 74.9, akamai: 69.8, p50: 468,  p95: 1320, sessionStability: 88.1, costPer1kSuccess: 1.24, uniqueExits: 19740 },
];

export const getBenchmark = (slug: string) => benchmark.find((b) => b.slug === slug);

export const meanSuccess = (b: BenchmarkRow) =>
  Math.round(((b.cloudflare + b.datadome + b.perimeterx + b.akamai) / 4) * 10) / 10;

/** Rank (1-based) of a provider on mean anti-bot success. */
export const benchmarkRank = (slug: string) => {
  const sorted = [...benchmark].sort((a, b) => meanSuccess(b) - meanSuccess(a));
  const i = sorted.findIndex((b) => b.slug === slug);
  return i === -1 ? null : i + 1;
};

/** Regional success on Cloudflare-protected targets, mean across all providers. */
export const regionalResults = [
  { region: "US East (N. Virginia)", success: 95.1, p50: 604, note: "Deepest residential supply; sticky sessions hold longest here." },
  { region: "US West (Oregon)", success: 94.4, p50: 641, note: "Slightly thinner mobile supply than US East on every network tested." },
  { region: "EU Central (Frankfurt)", success: 93.6, p50: 588, note: "Fastest median TTFB overall, strongest ISP-proxy availability." },
  { region: "APAC (Singapore)", success: 88.7, p50: 1024, note: "Largest gap between top and bottom providers — 21.4 points." },
];

/** Verticals where the same request pattern behaves differently. */
export const verticalResults = [
  { vertical: "E-commerce / price monitoring", success: 94.8, blocker: "DataDome + Akamai", note: "Residential rotating wins; datacenter IPs fail above ~40 req/min." },
  { vertical: "Search engine results (SERP)", success: 96.3, blocker: "Google rate limiting", note: "Dedicated SERP APIs beat raw proxies by 6–9 points at the same spend." },
  { vertical: "Travel & airline fares", success: 86.4, blocker: "Akamai Bot Manager", note: "Hardest vertical tested; session stability matters more than pool size." },
  { vertical: "Social platforms", success: 90.2, blocker: "Fingerprint + behaviour scoring", note: "Mobile IPs outperform residential by 7.8 points." },
  { vertical: "Ad verification", success: 93.1, blocker: "Geo/carrier validation", note: "Carrier-level targeting accuracy, not raw success rate, is the deciding metric." },
];
