// /best/$slug — e.g. /best/united-states-proxies
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { ProviderBadge } from "@/components/provider-logo";
import { LongFormSection } from "@/components/long-form";
import { Flag } from "@/components/flag";
import { countries } from "@/data/countries";
import { providers } from "@/data/providers";

export const Route = createFileRoute("/best/$slug")({
  loader: ({ params }) => {
    const m = params.slug.match(/^(.+)-proxies$/);
    if (!m) throw notFound();
    const country = countries.find((c) => c.slug === m[1]);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { country } = loaderData;
    const title = `Best ${country.name} Proxies in 2026 — Top 5 Providers Ranked`;
    const description = `The best ${country.name} proxy providers for 2026. ${country.poolDepth}, city-level targeting in ${country.topCities.slice(0, 3).join(", ")}. Pricing, pool size & verdict.`;
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: country.primaryKeywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => <PageShell title="Not found"><Link to="/countries" className="text-primary underline">Browse countries</Link></PageShell>,
  errorComponent: ({ error }) => <PageShell title="Error"><p>{error.message}</p></PageShell>,
  component: BestPage,
});

function BestPage() {
  const { country } = Route.useLoaderData();
  const top = country.topProviders.map((s) => providers.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <PageShell title={`Best ${country.name} Proxies for 2026`} intro={`Top-ranked residential, mobile and ISP proxy providers offering ${country.poolDepth} in ${country.name}.`} breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }]}>
      <div className="mb-8 flex items-center gap-4 rounded-md border border-border bg-card p-5 shadow-card">
        <Flag code={country.code} name={country.name} size="lg" />
        <div>
          <div className="text-sm text-muted-foreground">{country.region} · {country.population} population · {country.internetUsers} online</div>
          <div className="mt-1 font-bold">{country.poolDepth} available across the top vendors</div>
        </div>
      </div>

      <ol className="space-y-4">
        {top.map((p, i) => (
          <li key={p.slug} className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
              <ProviderBadge provider={p} />
              <span className="ml-auto text-sm font-bold">{p.rating} ★</span>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{p.shortDescription}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>From ${p.startingPriceGB}/GB</span><span>•</span><span>{p.poolSize}</span><span>•</span><span>Best for {p.bestFor.toLowerCase()}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <Link to="/reviews/$slug" params={{ slug: p.slug }} className="rounded bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">Read review</Link>
              <a href={p.visitUrl} target="_blank" rel="noopener noreferrer sponsored" className="rounded border border-border px-4 py-2 text-xs font-bold">Visit {p.name}</a>
            </div>
          </li>
        ))}
      </ol>

      <Prose>
        <h2>{country.name} proxy market overview</h2>
        <p>{country.notes}</p>
        <p><strong>Market size:</strong> {country.marketSize}</p>
        <p><strong>Average broadband:</strong> {country.averageSpeed}. <strong>IPv6 adoption:</strong> {country.ipv6Adoption}.</p>
        <h2>Dominant ISPs and mobile carriers</h2>
        <ul>{country.carriers.map((c) => <li key={c}>{c}</li>)}</ul>
        <h2>Top searches we answer on this page</h2>
        <ul>{country.searchIntents.map((s) => <li key={s}>{s}</li>)}</ul>
        <h2>Legal & compliance notes</h2>
        <p>{country.legalNote}</p>
        <h2>City-level coverage</h2>
        <p>City-level targeting available in: {country.topCities.join(", ")}. See our <Link to="/countries/$slug" params={{ slug: country.slug }}>full {country.name} country guide</Link> for per-city pages.</p>
      </Prose>

      <LongFormSection variant="best" topic={`${country.name} proxies`} />
    </PageShell>
  );
}
