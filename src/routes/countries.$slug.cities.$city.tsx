import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { ProviderBadge } from "@/components/provider-logo";
import { Flag } from "@/components/flag";
import { getCityCountry, cityToSlug } from "@/data/countries";
import { providers } from "@/data/providers";

export const Route = createFileRoute("/countries/$slug/cities/$city")({
  loader: ({ params }) => {
    const found = getCityCountry(params.city, params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { country, city } = loaderData;
    const title = `Best ${city} Proxies 2026 — Residential & Mobile IPs in ${city}, ${country.name}`;
    const description = `Buy ${city}, ${country.name} residential and mobile proxies. City-level targeting, ${country.poolDepth} across top vendors. 2026 ranking.`;
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: `${city} proxy, ${city} ip address, ${city} residential proxy, ${city} ${country.name} proxy` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => <PageShell title="City not found"><Link to="/countries" className="text-primary underline">Browse countries</Link></PageShell>,
  errorComponent: ({ error }) => <PageShell title="Error"><p>{error.message}</p></PageShell>,
  component: CityPage,
});

function CityPage() {
  const { country, city } = Route.useLoaderData();
  const top = country.topProviders.map((s) => providers.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p)).slice(0, 5);
  const otherCities = country.topCities.filter((c) => c !== city).slice(0, 6);
  return (
    <PageShell title={`Best ${city} Proxies`} intro={`Buy clean residential, mobile and ISP IPs in ${city}, ${country.name}. City-level targeting from every major vendor.`} breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }, { to: `/countries/${country.slug}`, label: country.name }]}>
      <div className="mb-6 flex items-center gap-4 rounded-md border border-border bg-card p-5">
        <Flag code={country.code} name={country.name} size="lg" />
        <div>
          <div className="text-sm text-muted-foreground">{city}, {country.name}</div>
          <div className="font-bold">Carrier mix: {country.carriers.slice(0, 3).join(", ")}</div>
        </div>
      </div>
      <Prose>
        <p>Looking for clean, fresh IP addresses in <strong>{city}</strong>? Every major proxy vendor offers city-level targeting in {city} as part of their {country.name} pool ({country.poolDepth} total). The dominant residential carriers in {country.name} — {country.carriers.slice(0, 4).join(", ")} — all have substantial IP density in {city}.</p>
        <h2>Top {city} proxy providers</h2>
      </Prose>
      <ol className="mt-4 space-y-3">
        {top.map((p, i) => (
          <li key={p.slug} className="flex items-center gap-4 rounded-md border border-border bg-card p-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
            <ProviderBadge provider={p} />
            <span className="ml-auto text-xs text-muted-foreground hidden md:inline">From ${p.startingPriceGB}/GB</span>
            <Link to="/reviews/$slug" params={{ slug: p.slug }} className="rounded bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">Review</Link>
          </li>
        ))}
      </ol>
      <Prose>
        <h2>Common use cases for {city} proxies</h2>
        <ul>{country.primaryUseCases.map((u) => <li key={u}>{u}</li>)}</ul>
        <h2>FAQ</h2>
        <h3>Are {city} proxies legal?</h3>
        <p>{country.legalNote}</p>
        <h3>How accurate is {city} city-level targeting?</h3>
        <p>The top vendors (Bright Data, Oxylabs, Decodo) maintain over 95% city-level accuracy in major metros like {city}.</p>
      </Prose>
      {otherCities.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-xl font-bold">Other cities in {country.name}</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {otherCities.map((c) => (
              <Link key={c} to="/countries/$slug/cities/$city" params={{ slug: country.slug, city: cityToSlug(c) }} className="rounded-md border border-border bg-card p-3 hover:border-primary text-sm font-bold">
                {c}
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
