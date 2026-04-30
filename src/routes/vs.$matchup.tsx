import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { providers, getProvider } from "@/data/providers";
import { Star, Check, X } from "lucide-react";

export const Route = createFileRoute("/vs/$matchup")({
  loader: ({ params }) => {
    const [a, b] = params.matchup.split("-vs-");
    const A = getProvider(a);
    const B = getProvider(b);
    if (!A || !B) throw notFound();
    return { A, B };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { A, B } = loaderData;
    const title = `${A.name} vs ${B.name} 2026 — Side-by-Side Comparison`;
    const description = `${A.name} vs ${B.name}: pricing, pool size, country coverage, success rates and verdict. Independent 2026 comparison.`;
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Comparison not found">
      <p>That comparison doesn't exist.</p>
      <Link to="/compare" className="font-bold text-primary underline">Back to compare</Link>
    </PageShell>
  ),
  errorComponent: ({ error }) => <PageShell title="Error"><p>{error.message}</p></PageShell>,
  component: VsPage,
});

function VsPage() {
  const { A, B } = Route.useLoaderData();
  const winner = A.rating >= B.rating ? A : B;

  return (
    <PageShell
      title={`${A.name} vs ${B.name}`}
      intro={`Independent 2026 head-to-head comparison: pricing, pool size, country coverage, success rates and verdict.`}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/compare", label: "Compare" }]}
    >
      <Prose>
        <p>
          Looking to choose between <Link to="/reviews/$slug" params={{ slug: A.slug }}>{A.name}</Link> and{" "}
          <Link to="/reviews/$slug" params={{ slug: B.slug }}>{B.name}</Link>? Both are credible proxy providers, but they target different segments. Here's our 2026 hands-on comparison.
        </p>
      </Prose>

      <div className="mt-8 overflow-x-auto rounded-md border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-bold">Feature</th>
              <th className="px-4 py-3 text-left font-bold">{A.name}</th>
              <th className="px-4 py-3 text-left font-bold">{B.name}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <Row label="Overall rating" a={`${A.rating} / 5`} b={`${B.rating} / 5`} />
            <Row label="Starting price" a={`$${A.startingPriceGB}/GB`} b={`$${B.startingPriceGB}/GB`} />
            <Row label="Pool size" a={A.poolSize ?? "—"} b={B.poolSize ?? "—"} />
            <Row label="Countries" a={`${A.countries}+`} b={`${B.countries}+`} />
            <Row label="Trust score" a={`${A.trustScore}/100`} b={`${B.trustScore}/100`} />
            <Row label="Founded" a={`${A.founded}`} b={`${B.founded}`} />
            <Row label="HQ" a={A.hq ?? "—"} b={B.hq ?? "—"} />
            <Row label="Best for" a={A.bestFor} b={B.bestFor} />
            <Row label="Proxy types" a={A.proxyTypes.join(", ")} b={B.proxyTypes.join(", ")} />
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ProviderColumn p={A} />
        <ProviderColumn p={B} />
      </div>

      <Prose>
        <h2>Verdict: who wins?</h2>
        <p>
          For most workloads in 2026, <strong>{winner.name}</strong> takes the edge based on overall rating ({winner.rating}/5) and trust score ({winner.trustScore}/100). However, the right choice depends on your priority — {A.bestFor.toLowerCase()} for {A.name}, or {B.bestFor.toLowerCase()} for {B.name}.
        </p>
        <h2>When to pick {A.name}</h2>
        <p>{A.shortDescription}</p>
        <h2>When to pick {B.name}</h2>
        <p>{B.shortDescription}</p>
      </Prose>
    </PageShell>
  );
}

function Row({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <tr>
      <td className="px-4 py-3 font-semibold">{label}</td>
      <td className="px-4 py-3">{a}</td>
      <td className="px-4 py-3">{b}</td>
    </tr>
  );
}

function ProviderColumn({ p }: { p: typeof providers[number] }) {
  return (
    <div className="rounded-md border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-xl font-bold hover:text-primary">{p.name}</Link>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="font-bold">{p.rating}</span>
        </div>
      </div>
      <h4 className="mt-4 text-sm font-bold text-success">Pros</h4>
      <ul className="mt-2 space-y-1 text-sm">
        {p.pros.map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />{x}</li>)}
      </ul>
      <h4 className="mt-4 text-sm font-bold text-destructive">Cons</h4>
      <ul className="mt-2 space-y-1 text-sm">
        {p.cons.map((x) => <li key={x} className="flex gap-2"><X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />{x}</li>)}
      </ul>
    </div>
  );
}
