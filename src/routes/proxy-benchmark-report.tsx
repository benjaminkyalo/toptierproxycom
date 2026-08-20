import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { speakablePage, benchmarkDataset } from "@/lib/schema";
import { ProviderLogo } from "@/components/provider-logo";
import { getProvider } from "@/data/providers";
import {
  benchmark,
  meanSuccess,
  regionalResults,
  verticalResults,
  BENCHMARK_CYCLE,
  BENCHMARK_WINDOW,
  BENCHMARK_TEMPORAL,
  BENCHMARK_UPDATED,
  BENCHMARK_REQUESTS_PER_PROVIDER,
  BENCHMARK_URL,
} from "@/data/benchmark-q3-2026";
import { Trophy, Gauge, DollarSign, Globe2, ShieldCheck, Download, ArrowRight } from "lucide-react";

const TITLE = `Proxy Benchmark Report ${BENCHMARK_CYCLE} — 120,000 Requests, 12 Providers, Real Success Rates`;
const DESC = `Independent proxy benchmark: ${BENCHMARK_REQUESTS_PER_PROVIDER.toLocaleString()} identical requests per provider against live Cloudflare, DataDome, PerimeterX and Akamai targets from 4 regions. Success rate, P50/P95 latency, session stability and cost per 1,000 successful responses for all 12 major providers.`;

export const Route = createFileRoute("/proxy-benchmark-report")({
  head: () => ({
    meta: [
      { title: `${TITLE} | ToptierProxy.com` },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "proxy benchmark, proxy success rate comparison, residential proxy benchmark 2026, proxy latency test, cloudflare proxy success rate, datadome bypass success rate, proxy cost per successful request",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { tagName: "link", rel: "canonical", href: BENCHMARK_URL },
      { property: "og:url", content: BENCHMARK_URL },
      { property: "og:site_name", content: "ToptierProxy.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
  }),
  component: BenchmarkReportPage,
});

const faqs = [
  {
    q: "Which proxy provider has the highest success rate in 2026?",
    a: `Bright Data leads our ${BENCHMARK_CYCLE} cycle with a ${meanSuccess(benchmark[0])}% mean success rate across Cloudflare, DataDome, PerimeterX and Akamai protected targets, followed by Oxylabs at ${meanSuccess(benchmark[1])}% and Nimbleway at ${meanSuccess(benchmark[2])}%. The spread between the best and worst provider tested is ${(meanSuccess(benchmark[0]) - meanSuccess(benchmark[benchmark.length - 1])).toFixed(1)} percentage points.`,
  },
  {
    q: "What is a good proxy success rate?",
    a: "Above 95% on Cloudflare-protected targets is excellent, 90–95% is workable for most scraping projects, and below 85% means you are paying for bandwidth that returns blocked pages. Always judge success rate together with cost per 1,000 successful responses — a cheap proxy with a 15% block rate is rarely cheaper in practice.",
  },
  {
    q: "How is cost per 1,000 successful responses calculated?",
    a: "We take the provider's entry pay-as-you-go price, measure the bytes consumed by our fixed workload, then divide by the number of non-blocked HTTP 200 responses only. Blocked requests still consume bandwidth, so providers with high block rates are penalised exactly as they would be on your invoice.",
  },
  {
    q: "Which proxy is cheapest per successful request?",
    a: `Webshare returns the lowest cost per 1,000 successes ($${benchmark.find((b) => b.slug === "webshare")!.costPer1kSuccess.toFixed(2)}) but also the lowest success rate, so it suits soft targets only. For hard anti-bot targets IPRoyal ($${benchmark.find((b) => b.slug === "iproyal")!.costPer1kSuccess.toFixed(2)}) and Decodo ($${benchmark.find((b) => b.slug === "decodo")!.costPer1kSuccess.toFixed(2)}) give the best success-adjusted economics.`,
  },
  {
    q: "Where does APAC performance differ from US and EU?",
    a: `APAC (Singapore) is the weakest region in every cycle we have run: mean success ${regionalResults[3].success}% versus ${regionalResults[0].success}% in US East, with median latency roughly ${Math.round((regionalResults[3].p50 / regionalResults[0].p50 - 1) * 100)}% higher. Provider choice matters far more in APAC than in North America or Europe.`,
  },
  {
    q: "Can I cite or reuse this benchmark data?",
    a: "Yes. The dataset is published under CC BY 4.0 — quote any figure with a link to this page. Vendors can request the raw request logs for their own network to verify results.",
  },
];

const jsonLd = [
  speakablePage({
    url: BENCHMARK_URL,
    name: TITLE,
    description: DESC,
    dateModified: BENCHMARK_UPDATED,
  }),
  benchmarkDataset({
    url: BENCHMARK_URL,
    name: `ToptierProxy proxy benchmark dataset — ${BENCHMARK_CYCLE}`,
    description: DESC,
    rowCount: benchmark.length,
    temporalCoverage: BENCHMARK_TEMPORAL,
    dateModified: BENCHMARK_UPDATED,
    spatialCoverage: "United States, Germany, Singapore",
    keywords: [
      "proxy benchmark 2026",
      "proxy success rate",
      "Cloudflare proxy success rate",
      "DataDome success rate",
      "proxy latency P95",
      "cost per 1000 successful requests",
    ],
    variableMeasured: [
      { name: "Cloudflare success rate", unitText: "%", minValue: 0, maxValue: 100 },
      { name: "DataDome success rate", unitText: "%", minValue: 0, maxValue: 100 },
      { name: "PerimeterX success rate", unitText: "%", minValue: 0, maxValue: 100 },
      { name: "Akamai success rate", unitText: "%", minValue: 0, maxValue: 100 },
      { name: "Median time to first byte", unitText: "ms" },
      { name: "P95 time to first byte", unitText: "ms" },
      { name: "10-minute sticky session stability", unitText: "%", minValue: 0, maxValue: 100 },
      { name: "Cost per 1,000 successful responses", unitText: "USD" },
      { name: "Unique exit IPs per 50,000-request draw" },
    ],
  }),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: TITLE,
    datePublished: BENCHMARK_UPDATED,
    dateModified: BENCHMARK_UPDATED,
    url: BENCHMARK_URL,
    author: { "@type": "Organization", name: "ToptierProxy.com" },
    publisher: { "@type": "Organization", name: "ToptierProxy.com" },
    about: "Independent performance benchmarking of commercial proxy networks",
  },
];

function pct(n: number) {
  return `${n.toFixed(1)}%`;
}

function Metric({ icon: Icon, label, value, sub }: { icon: typeof Trophy; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-5 shadow-card">
      <Icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
    </div>
  );
}

function BenchmarkReportPage() {
  const sorted = [...benchmark].sort((a, b) => meanSuccess(b) - meanSuccess(a));
  const cheapest = [...benchmark].sort((a, b) => a.costPer1kSuccess - b.costPer1kSuccess)[0];
  const fastest = [...benchmark].sort((a, b) => a.p50 - b.p50)[0];
  const steadiest = [...benchmark].sort((a, b) => b.sessionStability - a.sessionStability)[0];

  return (
    <PageShell
      title={`Proxy Benchmark Report — ${BENCHMARK_CYCLE}`}
      intro={`We sent ${BENCHMARK_REQUESTS_PER_PROVIDER.toLocaleString()} identical requests through each of ${benchmark.length} proxy networks — ${(BENCHMARK_REQUESTS_PER_PROVIDER * benchmark.length).toLocaleString()} in total — against live Cloudflare, DataDome, PerimeterX and Akamai protected targets from four regions between ${BENCHMARK_WINDOW}. These are the raw results.`}
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/proxy-benchmark-report", label: "Benchmark Report" },
      ]}
      linkHubHeading="Use the data"
      linkHubIntro="Provider reviews, buying guides and country pages that build on this benchmark cycle."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Answer box */}
      <div className="rounded-md border-l-4 border-primary bg-muted/60 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Quick answer</p>
        <p className="tt-speakable mt-2 text-lg font-medium leading-relaxed text-foreground">
          Across {(BENCHMARK_REQUESTS_PER_PROVIDER * benchmark.length).toLocaleString()} requests in {BENCHMARK_CYCLE},{" "}
          <strong>{sorted[0].name}</strong> recorded the highest mean success rate ({pct(meanSuccess(sorted[0]))}) against
          Cloudflare, DataDome, PerimeterX and Akamai, ahead of {sorted[1].name} ({pct(meanSuccess(sorted[1]))}) and{" "}
          {sorted[2].name} ({pct(meanSuccess(sorted[2]))}). {cheapest.name} was cheapest per 1,000 successful responses
          (${cheapest.costPer1kSuccess.toFixed(2)}), {fastest.name} fastest at the median ({fastest.p50} ms) and{" "}
          {steadiest.name} the most session-stable ({pct(steadiest.sessionStability)} of sticky sessions held a full 10 minutes).
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metric icon={Trophy} label="Highest success" value={sorted[0].name} sub={`${pct(meanSuccess(sorted[0]))} mean across 4 anti-bot stacks`} />
        <Metric icon={DollarSign} label="Best economics" value={cheapest.name} sub={`$${cheapest.costPer1kSuccess.toFixed(2)} per 1,000 successes`} />
        <Metric icon={Gauge} label="Lowest latency" value={fastest.name} sub={`${fastest.p50} ms median TTFB`} />
        <Metric icon={ShieldCheck} label="Most stable sessions" value={steadiest.name} sub={`${pct(steadiest.sessionStability)} held 10 min`} />
      </div>

      {/* Master table */}
      <h2 className="mt-12 text-2xl font-bold text-foreground">Full results — success rate by anti-bot stack</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Success = non-blocked HTTP 200 with valid HTML. CAPTCHAs, 403s, 429s and honeypot pages count as failures.
        Methodology: <Link to="/how-we-test" className="font-semibold text-primary underline">how we test</Link>.
      </p>
      <div className="mt-4 overflow-x-auto rounded-md border border-border bg-card shadow-card">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Provider</th>
              <th className="px-4 py-3">Mean</th>
              <th className="px-4 py-3">Cloudflare</th>
              <th className="px-4 py-3">DataDome</th>
              <th className="px-4 py-3">PerimeterX</th>
              <th className="px-4 py-3">Akamai</th>
              <th className="px-4 py-3">Review</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((b, i) => {
              const p = getProvider(b.slug);
              return (
                <tr key={b.slug} className="border-t border-border align-middle">
                  <td className="px-4 py-3 font-bold text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <ProviderLogo provider={{ slug: b.slug, name: b.name }} size="sm" />
                      <Link to="/reviews/$slug" params={{ slug: b.slug }} className="font-semibold text-primary hover:underline">
                        {b.name}
                      </Link>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-foreground">{pct(meanSuccess(b))}</td>
                  <td className="px-4 py-3">{pct(b.cloudflare)}</td>
                  <td className="px-4 py-3">{pct(b.datadome)}</td>
                  <td className="px-4 py-3">{pct(b.perimeterx)}</td>
                  <td className="px-4 py-3">{pct(b.akamai)}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`/go/${b.slug}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground hover:opacity-90"
                    >
                      Visit {p?.name ?? b.name} <ArrowRight className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Speed + economics */}
      <h2 className="mt-12 text-2xl font-bold text-foreground">Latency, session stability and cost per success</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Latency is mean time to first byte across us-east-1, us-west-2, eu-central-1 and ap-southeast-1, with failed
        requests counted so providers cannot game the metric by dropping slow responses.
      </p>
      <div className="mt-4 overflow-x-auto rounded-md border border-border bg-card shadow-card">
        <table className="w-full min-w-[820px] text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Provider</th>
              <th className="px-4 py-3">Median TTFB</th>
              <th className="px-4 py-3">P95 TTFB</th>
              <th className="px-4 py-3">10-min session stability</th>
              <th className="px-4 py-3">Cost / 1k successes</th>
              <th className="px-4 py-3">Unique exits / 50k draw</th>
            </tr>
          </thead>
          <tbody>
            {[...benchmark].sort((a, b) => a.costPer1kSuccess - b.costPer1kSuccess).map((b) => (
              <tr key={b.slug} className="border-t border-border">
                <td className="px-4 py-3">
                  <Link to="/reviews/$slug" params={{ slug: b.slug }} className="font-semibold text-primary hover:underline">
                    {b.name}
                  </Link>
                </td>
                <td className="px-4 py-3">{b.p50} ms</td>
                <td className="px-4 py-3">{b.p95} ms</td>
                <td className="px-4 py-3">{pct(b.sessionStability)}</td>
                <td className="px-4 py-3 font-bold text-foreground">${b.costPer1kSuccess.toFixed(2)}</td>
                <td className="px-4 py-3">{b.uniqueExits.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Regional */}
      <h2 className="mt-12 text-2xl font-bold text-foreground">Results by region</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {regionalResults.map((r) => (
          <div key={r.region} className="rounded-md border border-border bg-card p-5 shadow-card">
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-primary" />
              <p className="font-bold text-foreground">{r.region}</p>
            </div>
            <p className="mt-2 text-sm">
              Mean success <strong>{pct(r.success)}</strong> · median TTFB <strong>{r.p50} ms</strong>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Region-level detail per country lives on our{" "}
        <Link to="/countries" className="font-semibold text-primary underline">country proxy pages</Link> — start with{" "}
        <Link to="/countries/$slug" params={{ slug: "united-states" }} className="font-semibold text-primary underline">United States</Link>,{" "}
        <Link to="/countries/$slug" params={{ slug: "germany" }} className="font-semibold text-primary underline">Germany</Link> or{" "}
        <Link to="/countries/$slug" params={{ slug: "japan" }} className="font-semibold text-primary underline">Japan</Link>.
      </p>

      {/* Verticals */}
      <h2 className="mt-12 text-2xl font-bold text-foreground">Results by target vertical</h2>
      <div className="mt-4 overflow-x-auto rounded-md border border-border bg-card shadow-card">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Vertical</th>
              <th className="px-4 py-3">Mean success</th>
              <th className="px-4 py-3">Dominant blocker</th>
              <th className="px-4 py-3">What actually decides the outcome</th>
            </tr>
          </thead>
          <tbody>
            {verticalResults.map((v) => (
              <tr key={v.vertical} className="border-t border-border">
                <td className="px-4 py-3 font-semibold text-foreground">{v.vertical}</td>
                <td className="px-4 py-3 font-bold">{pct(v.success)}</td>
                <td className="px-4 py-3">{v.blocker}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>How to read these numbers before you buy</h2>
        <p>
          Success rate alone sells the wrong proxy. The two columns that decide your invoice are{" "}
          <strong>success rate</strong> and <strong>cost per 1,000 successful responses</strong>, and they rarely point at
          the same provider. {benchmark.find((b) => b.slug === "webshare")!.name} is the cheapest network we tested per
          success, yet it fails roughly one in four Akamai-protected requests — perfect for soft targets and pointless for
          airline fares. {sorted[0].name} costs ~3× more per success but clears every stack above 93%.
        </p>
        <p>
          Our practical rule after this cycle: pick the cheapest provider whose success rate on <em>your</em> hardest
          target exceeds 92%, then buy latency only if your pipeline is latency-bound. If you are unsure which category
          you need, read{" "}
          <Link to="/guides/$slug" params={{ slug: "residential-vs-datacenter-proxies" }}>residential vs datacenter proxies</Link>{" "}
          and then{" "}
          <Link to="/compare">compare the shortlist side by side</Link>.
        </p>

        <h2>What we changed since the last cycle</h2>
        <ul>
          <li>Added Akamai Bot Manager targets in the travel vertical, which is why travel success sits lowest.</li>
          <li>Doubled the sticky-session window from 5 to 10 minutes — three providers lost ground on that change alone.</li>
          <li>Priced blocked requests into the cost column instead of reporting raw $/GB.</li>
          <li>Sampled APAC from Singapore rather than Tokyo to remove a single-carrier bias.</li>
        </ul>

        <h2>Limitations we will not paper over</h2>
        <p>
          These are our targets, our concurrency and our retry policy. Your own success rate will differ if you use
          different headers, browsers or request pacing — a badly configured client will underperform every network in
          this table. We publish the methodology precisely so you can reproduce or dispute it; vendors who dispute a
          figure get our raw logs and, when they are right, a corrected row and a note here.
        </p>

        <h2>Frequently asked questions</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Prose>

      <div className="mt-10 flex flex-wrap items-center gap-3 rounded-md border border-border bg-muted/50 p-6">
        <Download className="h-5 w-5 text-primary" />
        <p className="text-sm font-medium text-foreground">
          Cite this dataset: “ToptierProxy Proxy Benchmark, {BENCHMARK_CYCLE}” — CC BY 4.0, updated {BENCHMARK_UPDATED}.
        </p>
        <Link
          to="/how-we-test"
          className="ml-auto inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground hover:opacity-90"
        >
          Read the 225-criterion methodology
        </Link>
      </div>
    </PageShell>
  );
}
