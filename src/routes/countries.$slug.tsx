import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { Flag } from "@/components/flag";
import { ProviderBadge } from "@/components/provider-logo";
import { LongFormSection } from "@/components/long-form";
import { getCountry, countries, cityToSlug } from "@/data/countries";
import { providers } from "@/data/providers";
import { Star, MapPin, Users, Wifi, Globe2 } from "lucide-react";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const country = getCountry(params.slug);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { country } = loaderData;
    const title = `Best Proxies for ${country.name} 2026 — Residential, Mobile & ISP IPs`;
    const description = `The best ${country.name} proxy providers for 2026. ${country.poolDepth} available across major vendors with city-level targeting in ${country.topCities.slice(0, 3).join(", ")} and more.`;
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: `${country.name} proxies, ${country.name} residential proxy, ${country.name} IP, buy ${country.name} proxy, ${country.name} mobile proxy` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { rel: "canonical", href: `https://toptierproxy.com/countries/${country.slug}` } as never,
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What is the best proxy provider for ${country.name}?`,
                acceptedAnswer: { "@type": "Answer", text: `Bright Data, Oxylabs and Decodo all offer deep ${country.name} residential pools. For most workloads we recommend Bright Data for the largest pool, Oxylabs for scraping APIs, and Decodo for best price-to-performance.` },
              },
              {
                "@type": "Question",
                name: `How many ${country.name} residential IPs are available?`,
                acceptedAnswer: { "@type": "Answer", text: `Across the top vendors, approximately ${country.poolDepth} are available with city-level targeting in ${country.topCities.slice(0, 4).join(", ")}.` },
              },
              {
                "@type": "Question",
                name: `Is it legal to use proxies in ${country.name}?`,
                acceptedAnswer: { "@type": "Answer", text: `Yes — using proxies for legitimate purposes such as market research, SEO monitoring, ad verification and brand protection is legal in ${country.name}. Always comply with the target site's Terms of Service and applicable data protection law.` },
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Country not found"><p>That country page doesn't exist.</p><Link to="/countries" className="font-bold text-primary underline">Back to all countries</Link></PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell title="Something went wrong"><p>{error.message}</p></PageShell>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country } = Route.useLoaderData();
  const top = country.topProviders
    .map((s) => providers.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const related = countries.filter((c) => c.region === country.region && c.slug !== country.slug).slice(0, 6);

  return (
    <PageShell
      title={`Best Proxies for ${country.name}`}
      intro={`The top providers offering residential, datacenter, ISP and mobile IPs in ${country.name}, independently ranked for 2026.`}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }]}
    >
      {/* Country header card */}
      <div className="mb-10 flex flex-col gap-6 rounded-md border border-border bg-card p-6 shadow-card md:flex-row md:items-center">
        <Flag code={country.code} name={country.name} size="xl" />
        <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-4">
          <Stat icon={<Users className="h-4 w-4" />} label="Population" value={country.population} />
          <Stat icon={<Wifi className="h-4 w-4" />} label="Internet users" value={country.internetUsers} />
          <Stat icon={<Globe2 className="h-4 w-4" />} label="IP pool depth" value={country.poolDepth} />
          <Stat icon={<MapPin className="h-4 w-4" />} label="Capital" value={country.capital} />
        </div>
      </div>

      <Prose>
        <p>{country.notes}</p>
        <h2>Top {top.length} proxy providers for {country.name}</h2>
      </Prose>

      <ol className="mt-6 space-y-4">
        {top.map((p, idx) => (
          <li key={p.slug} className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{idx + 1}</span>
                <ProviderBadge provider={p} />
                <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-sm font-semibold text-primary hover:underline">Read review →</Link>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-bold">{p.rating}</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{p.shortDescription}</p>
            <div className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-3">
              <div><strong className="text-foreground">From:</strong> ${p.startingPriceGB}/GB</div>
              <div><strong className="text-foreground">Pool:</strong> {p.poolSize}</div>
              <div><strong className="text-foreground">Best for:</strong> {p.bestFor}</div>
            </div>
            <Link to="/reviews/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover">Read full review</Link>
          </li>
        ))}
      </ol>

      <Prose>
        <h2>Top cities with {country.name} IP coverage</h2>
        <p>Modern proxy providers offer city-level targeting across {country.name}. The deepest IP density is found in:</p>
        <ul>
          {country.topCities.map((c) => <li key={c}><strong>{c}</strong> — large residential cluster, available across all top vendors.</li>)}
        </ul>
        <h2>Most common use cases in {country.name}</h2>
        <ul>
          {country.primaryUseCases.map((u) => <li key={u}>{u}</li>)}
        </ul>
        <h2>Frequently asked questions</h2>
        <h3>What is the best proxy provider for {country.name}?</h3>
        <p>For most teams, <Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data</Link> offers the largest {country.name} residential pool, while <Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo</Link> delivers the best price-to-performance ratio at half the cost.</p>
        <h3>Are {country.name} proxies legal?</h3>
        <p>Yes. Using proxies for market research, SEO monitoring, ad verification and brand protection is legal in {country.name}. You should always comply with the target site's Terms of Service and applicable data protection laws.</p>
        <h3>How much do {country.name} residential proxies cost?</h3>
        <p>Entry-level pricing for {country.name} residential bandwidth starts at $1.75/GB on pay-as-you-go plans, and drops below $4/GB on most committed plans across the top vendors.</p>
      </Prose>

      {/* City deep-link cluster — adds dozens of internal SEO links per page */}
      <div className="mt-10 rounded-md border border-border bg-card p-6">
        <h3 className="text-lg font-bold">Buy {country.name} proxies by city</h3>
        <p className="mt-1 text-sm text-muted-foreground">Drill into city-level IP density and per-metro proxy guides.</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
          {country.topCities.map((c) => (
            <li key={c}>
              <Link
                to="/countries/$slug/cities/$city"
                params={{ slug: country.slug, city: cityToSlug(c) }}
                className="text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                {c} proxies
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <LongFormSection variant="country" topic={country.name} />

      {/* Related countries */}
      {related.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-xl font-bold">More countries in {country.region}</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {related.map((c) => (
              <Link key={c.slug} to="/countries/$slug" params={{ slug: c.slug }} className="flex items-center gap-3 rounded-md border border-border bg-card p-3 hover:border-primary">
                <Flag code={c.code} name={c.name} size="sm" />
                <span className="font-bold text-sm">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 text-sm font-bold">{value}</div>
    </div>
  );
}
