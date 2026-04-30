import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { providers } from "@/data/providers";
import { Star, Check } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Proxy Providers Side-by-Side — ToptierProxy.com" },
      { name: "description", content: "Compare the world's leading proxy providers side-by-side. Pricing, pool size, country coverage, proxy types and ratings in one table." },
      { property: "og:title", content: "Compare Proxy Providers — Side-by-Side" },
      { property: "og:description", content: "All major proxy providers compared on pricing, pool size and features." },
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

function ComparePage() {
  return (
    <PageShell title="Compare proxy providers" intro="Side-by-side comparison of every major proxy vendor — pricing, pool size, country coverage, proxy types and ratings." breadcrumb={[{ to: "/", label: "Home" }, { to: "/compare", label: "Compare" }]}>
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
            {providers.map((p) => (
              <tr key={p.slug} className="hover:bg-muted/50">
                <td className="px-4 py-4">
                  <Link to="/reviews/$slug" params={{ slug: p.slug }} className="font-bold text-primary hover:underline">{p.name}</Link>
                  <div className="text-xs text-muted-foreground">{p.bestFor}</div>
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
                  <Link to="/reviews/$slug" params={{ slug: p.slug }} className="inline-flex h-8 items-center rounded bg-primary px-3 text-xs font-bold text-primary-foreground">Review</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Popular head-to-head comparisons</h2>
        <p className="mt-2 text-muted-foreground">The most-searched proxy provider matchups, with full side-by-side breakdowns.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            ["bright-data", "oxylabs"],
            ["bright-data", "decodo"],
            ["oxylabs", "decodo"],
            ["decodo", "iproyal"],
            ["soax", "decodo"],
            ["bright-data", "soax"],
            ["webshare", "decodo"],
            ["iproyal", "webshare"],
            ["netnut", "bright-data"],
          ].map(([a, b]) => {
            const A = providers.find((p) => p.slug === a)!;
            const B = providers.find((p) => p.slug === b)!;
            return (
              <Link key={`${a}-${b}`} to="/vs/$matchup" params={{ matchup: `${a}-vs-${b}` }} className="rounded-md border border-border bg-card p-4 hover:border-primary">
                <div className="font-bold">{A.name} <span className="text-muted-foreground">vs</span> {B.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">Pricing, pool size & verdict</div>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
