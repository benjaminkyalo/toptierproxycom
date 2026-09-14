import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  benchmark,
  meanSuccess,
  BENCHMARK_CYCLE,
  BENCHMARK_WINDOW,
  BENCHMARK_UPDATED,
} from "@/data/benchmark-q3-2026";
import { providers } from "@/data/providers";

type Shield = "cloudflare" | "datadome" | "perimeterx" | "akamai" | "mixed";

const SHIELDS: { id: Shield; label: string; hint: string }[] = [
  { id: "mixed", label: "Mixed / general web", hint: "Average across all four protections we test" },
  { id: "cloudflare", label: "Cloudflare protected", hint: "Most common protection on the open web" },
  { id: "datadome", label: "DataDome protected", hint: "Common on e-commerce and classifieds" },
  { id: "perimeterx", label: "PerimeterX / HUMAN", hint: "Common on retail and sneaker targets" },
  { id: "akamai", label: "Akamai Bot Manager", hint: "Hardest tier: travel, airline, banking" },
];

const priceFor = (slug: string) => providers.find((p) => p.slug === slug)?.startingPriceGB;

const successFor = (slug: string, shield: Shield) => {
  const row = benchmark.find((b) => b.slug === slug);
  if (!row) return null;
  return shield === "mixed" ? meanSuccess(row) : row[shield];
};

const usd = (n: number) =>
  n >= 100 ? `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}` : `$${n.toFixed(2)}`;

interface Row {
  slug: string;
  name: string;
  price: number;
  success: number;
  p50: number;
  sessionStability: number;
  gbBilled: number;
  cost: number;
  naiveCost: number;
  blockWaste: number;
  per1k: number;
}

function num(sp: URLSearchParams, key: string, fallback: number) {
  const v = Number(sp.get(key));
  return Number.isFinite(v) && v > 0 ? v : fallback;
}

export function TrueCostCalculator() {
  const [requests, setRequests] = useState(100000);
  const [pageKb, setPageKb] = useState(250);
  const [shield, setShield] = useState<Shield>("mixed");
  const [copied, setCopied] = useState(false);

  // Restore a shared scenario from the URL, so results are linkable.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    setRequests(num(sp, "req", 100000));
    setPageKb(num(sp, "kb", 250));
    const s = sp.get("target") as Shield | null;
    if (s && SHIELDS.some((x) => x.id === s)) setShield(s);
  }, []);

  const rows = useMemo<Row[]>(() => {
    const out: Row[] = [];
    for (const b of benchmark) {
      const price = priceFor(b.slug);
      const success = successFor(b.slug, shield);
      if (!price || !success) continue;
      const attempts = requests / (success / 100);
      const gbBilled = (attempts * pageKb) / 1048576;
      const cost = gbBilled * price;
      const naiveCost = ((requests * pageKb) / 1048576) * price;
      out.push({
        slug: b.slug,
        name: b.name,
        price,
        success,
        p50: b.p50,
        sessionStability: b.sessionStability,
        gbBilled,
        cost,
        naiveCost,
        blockWaste: cost - naiveCost,
        per1k: cost / (requests / 1000),
      });
    }
    return out.sort((a, b) => a.cost - b.cost);
  }, [requests, pageKb, shield]);

  const cheapest = rows[0];
  const highestSuccess = useMemo(
    () => rows.reduce((a, b) => (b.success > a.success ? b : a), rows[0]),
    [rows],
  );
  const fastest = useMemo(() => rows.reduce((a, b) => (b.p50 < a.p50 ? b : a), rows[0]), [rows]);
  const headlineOnly = useMemo(() => [...rows].sort((a, b) => a.price - b.price)[0], [rows]);

  const share = async () => {
    if (typeof window === "undefined") return;
    const url = `https://www.toptierproxy.com/resources/cost-calculator?req=${requests}&kb=${pageKb}&target=${shield}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!cheapest) return null;

  const badge = (slug: string) => {
    const labels: string[] = [];
    if (slug === cheapest.slug) labels.push("Lowest true cost");
    if (slug === highestSuccess.slug) labels.push("Highest success rate");
    if (slug === fastest.slug) labels.push("Fastest response");
    return labels;
  };

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-md border border-border bg-card p-6">
        <h2 className="text-lg font-bold text-foreground">Your workload</h2>
        <p className="mt-1 text-sm text-foreground/70">
          We price your job against our own {BENCHMARK_CYCLE} measurements, so blocked requests are
          counted as money spent - because they are.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="text-sm font-semibold text-foreground">Successful requests per month</span>
            <input
              type="number"
              min={1000}
              step={1000}
              value={requests}
              onChange={(e) => setRequests(Math.max(1, Number(e.target.value) || 0))}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-foreground">Average response size (KB)</span>
            <input
              type="number"
              min={1}
              step={10}
              value={pageKb}
              onChange={(e) => setPageKb(Math.max(1, Number(e.target.value) || 0))}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-foreground">Target protection</span>
            <select
              value={shield}
              onChange={(e) => setShield(e.target.value as Shield)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              {SHIELDS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-3 text-xs text-foreground/60">
          {SHIELDS.find((s) => s.id === shield)?.hint}. Typical response sizes: JSON API 20-80 KB,
          product page 150-400 KB, full HTML with assets 800 KB+.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-md border border-primary/40 bg-primary/10 p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
            Cheapest true cost
          </div>
          <div className="mt-1 text-2xl font-extrabold text-primary">{cheapest.name}</div>
          <div className="mt-1 text-3xl font-extrabold text-foreground">{usd(cheapest.cost)}/mo</div>
          <div className="mt-1 text-xs text-foreground/70">
            {usd(cheapest.per1k)} per 1,000 successful requests at {cheapest.success}% success
          </div>
        </div>
        <div className="rounded-md border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
            Headline price would pick
          </div>
          <div className="mt-1 text-2xl font-extrabold text-foreground">{headlineOnly.name}</div>
          <div className="mt-1 text-sm text-foreground/70">
            ${headlineOnly.price.toFixed(2)}/GB sticker price, {headlineOnly.success}% success on this
            target, {usd(headlineOnly.cost)}/mo real cost
          </div>
          <div className="mt-2 text-xs font-semibold text-foreground">
            {headlineOnly.slug === cheapest.slug
              ? "Cheapest per GB and cheapest in reality on this workload."
              : `Picking on sticker price alone costs ${usd(headlineOnly.cost - cheapest.cost)} more per month here.`}
          </div>
        </div>
        <div className="rounded-md border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
            Bandwidth you actually pay for
          </div>
          <div className="mt-1 text-2xl font-extrabold text-foreground">
            {cheapest.gbBilled.toFixed(1)} GB
          </div>
          <div className="mt-1 text-sm text-foreground/70">
            of which {(cheapest.gbBilled - (requests * pageKb) / 1048576).toFixed(1)} GB is retries on
            blocked requests
          </div>
          <button
            onClick={share}
            className="mt-3 rounded-md bg-navy px-3 py-2 text-xs font-semibold text-navy-foreground"
          >
            {copied ? "Link copied" : "Copy shareable result link"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[880px] text-sm">
          <thead className="bg-navy text-navy-foreground">
            <tr>
              <th className="px-3 py-3 text-left">#</th>
              <th className="px-3 py-3 text-left">Provider</th>
              <th className="px-3 py-3 text-right">$/GB</th>
              <th className="px-3 py-3 text-right">Success</th>
              <th className="px-3 py-3 text-right">GB billed</th>
              <th className="px-3 py-3 text-right">True monthly cost</th>
              <th className="px-3 py-3 text-right">Per 1k success</th>
              <th className="px-3 py-3 text-right">Median TTFB</th>
              <th className="px-3 py-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.slug} className={i % 2 ? "bg-card" : "bg-background"}>
                <td className="px-3 py-3 font-bold text-foreground/60">{i + 1}</td>
                <td className="px-3 py-3 font-semibold">
                  <Link
                    to="/reviews/$slug"
                    params={{ slug: r.slug }}
                    className="text-primary hover:underline"
                  >
                    {r.name}
                  </Link>
                </td>
                <td className="px-3 py-3 text-right">${r.price.toFixed(2)}</td>
                <td className="px-3 py-3 text-right">{r.success}%</td>
                <td className="px-3 py-3 text-right">{r.gbBilled.toFixed(1)}</td>
                <td className="px-3 py-3 text-right font-bold text-foreground">{usd(r.cost)}</td>
                <td className="px-3 py-3 text-right">{usd(r.per1k)}</td>
                <td className="px-3 py-3 text-right">{r.p50} ms</td>
                <td className="px-3 py-3 text-xs text-foreground/70">
                  {badge(r.slug).join(" | ") ||
                    `${r.sessionStability}% sticky-session stability`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-foreground/60">
        Method: success rates, median TTFB and session stability come from our own {BENCHMARK_CYCLE}{" "}
        benchmark ({BENCHMARK_WINDOW}, 10,000 identical requests per provider from four regions,
        updated {BENCHMARK_UPDATED}) - see{" "}
        <Link to="/proxy-benchmark-report" className="text-primary hover:underline">
          the full benchmark report
        </Link>{" "}
        and{" "}
        <Link to="/how-we-test" className="text-primary hover:underline">
          how we test
        </Link>
        . Per-GB rates are published entry pricing; committed-volume plans are cheaper, so treat these
        as upper bounds and compare with{" "}
        <Link to="/compare" className="text-primary hover:underline">
          the full provider comparison
        </Link>
        .
      </p>
    </div>
  );
}
