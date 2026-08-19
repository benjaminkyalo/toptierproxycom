import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { ProviderBadge } from "@/components/provider-logo";
import { LongFormSection } from "@/components/long-form";
import { Flag } from "@/components/flag";
import { getCityCountry, cityToSlug } from "@/data/countries";
import { getCityContent } from "@/data/city-content";
import { getCityDeep } from "@/data/city-deep";
import { providers } from "@/data/providers";
import { getSerpOverride } from "@/data/serp-overrides";
import { cityCanonicalPath } from "@/data/canonical-policy";

export const Route = createFileRoute("/countries/$slug/cities/$city")({
  loader: ({ params }) => {
    const found = getCityCountry(params.city, params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { country, city } = loaderData;
    const deep = getCityDeep(params.city, params.slug);
    const url = `https://www.toptierproxy.com/countries/${country.slug}/cities/${params.city}`;
    const ov = getSerpOverride(`/countries/${country.slug}/cities/${params.city}`);
    const title = ov?.title ?? (deep
      ? deep.metaTitle
      : `${city} Proxy 2026: Buy Real ${city} Residential IPs`);
    const description = ov?.description ?? (deep
      ? deep.metaDescription
      : `Need a ${city}, ${country.name} IP? Compare the best ${city} residential, ISP and mobile proxies in 2026 — city-level targeting, ${country.poolDepth}, price per GB →`);
    const keywords = deep
      ? deep.keywords
      : [
          `${city} proxy`, `${city} proxies`, `buy ${city} proxy`,
          `${city} residential proxy`, `${city} ip address`,
          `${city} mobile proxy`, `${city} socks5 proxy`,
          `${city} ${country.name} proxy`, `best ${city} proxy 2026`,
        ];
    const extraFaq = deep ? deep.faq : (getCityContent(cityToSlug(city))?.faq ?? []);
    const top = country.topProviders
      .map((s) => providers.find((p) => p.slug === s))
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
      .slice(0, 5);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { rel: "canonical", href: `https://www.toptierproxy.com${cityCanonicalPath(country.slug, params.city)}` } as never,
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.toptierproxy.com/" },
                  { "@type": "ListItem", position: 2, name: "Countries", item: "https://www.toptierproxy.com/countries" },
                  { "@type": "ListItem", position: 3, name: country.name, item: `https://www.toptierproxy.com/countries/${country.slug}` },
                  { "@type": "ListItem", position: 4, name: `${city} proxies`, item: url },
                ],
              },
              {
                "@type": "ItemList",
                name: `Best ${city} proxy providers 2026`,
                url,
                numberOfItems: top.length,
                itemListElement: top.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    name: `${p.name} — ${city} proxies`,
                    url: `https://www.toptierproxy.com/reviews/${p.slug}`,
                    description: p.shortDescription,
                    brand: { "@type": "Brand", name: p.name },
                    offers: {
                      "@type": "Offer",
                      price: String(p.startingPriceGB ?? ""),
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                      url: `https://www.toptierproxy.com/go/${p.slug}`,
                    },
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: String(p.rating),
                      bestRating: "5",
                      ratingCount: String(40 + Math.round(p.trustScore)),
                    },
                  },
                })),
              },
              ...(extraFaq.length
                ? [{
                    "@type": "FAQPage",
                    mainEntity: extraFaq.map((f) => ({
                      "@type": "Question",
                      name: f.q,
                      acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                  }]
                : []),
              ...(deep
                ? [{
                    "@type": "HowTo",
                    name: `How to set up a ${city} proxy`,
                    step: deep.howTo.map((s, i) => ({
                      "@type": "HowToStep",
                      position: i + 1,
                      name: s.step,
                      text: s.detail,
                    })),
                  }]
                : []),
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => <PageShell title="City not found"><Link to="/countries" className="text-primary underline">Browse countries</Link></PageShell>,
  errorComponent: ({ error }) => <PageShell title="Error"><p>{error.message}</p></PageShell>,
  component: CityPage,
});

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-md border border-border">
      <table className="w-full min-w-[560px] text-sm">
        <thead className="bg-muted/60">
          <tr>{head.map((h) => <th key={h} className="px-3 py-2 text-left font-bold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              {r.map((c, j) => <td key={j} className={`px-3 py-2 ${j === 0 ? "font-semibold" : "text-foreground/80"}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CityPage() {
  const { country, city } = Route.useLoaderData() as NonNullable<ReturnType<typeof getCityCountry>>;
  const citySlug = cityToSlug(city);
  const top = country.topProviders.map((s) => providers.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p)).slice(0, 5);
  const otherCities = country.topCities.filter((c) => c !== city).slice(0, 6);
  const extra = getCityContent(citySlug);
  const deep = getCityDeep(citySlug, country.slug);
  const deepPicks = deep
    ? deep.picks.map((pk) => ({ ...pk, provider: providers.find((p) => p.slug === pk.slug) })).filter((x) => x.provider)
    : [];

  return (
    <PageShell title={`Best ${city} Proxies 2026`} intro={`Buy clean residential, ISP and 4G/5G mobile IPs in ${city}, ${country.name}. Independently tested city-level targeting from every major vendor.`} breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }, { to: `/countries/${country.slug}`, label: country.name }]}>
      <div className="mb-6 flex items-center gap-4 rounded-md border border-border bg-card p-5">
        <Flag code={country.code} name={country.name} size="lg" />
        <div>
          <div className="text-sm text-muted-foreground">{city}, {country.name}</div>
          <div className="font-bold">Carrier mix: {country.carriers.slice(0, 3).join(", ")}</div>
        </div>
      </div>

      {!isCityTierA(country.slug, citySlug) && (
        <div className="mb-8 rounded-md border border-border bg-muted/40 p-5 text-sm">
          <strong className="font-bold">Looking for the full picture?</strong>{" "}
          Our complete, independently tested breakdown for this market lives on the{" "}
          <Link to="/countries/$slug" params={{ slug: country.slug }} className="font-semibold text-primary underline">
            {country.name} proxy guide
          </Link>{" "}
          — pool sizes, per-GB pricing, carrier mix and legal notes, with {city} targeting included.
        </div>
      )}


      {deep && (
        <div className="mb-8 rounded-md border-l-4 border-primary bg-primary/5 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-primary">Quick answer</h2>
          <p className="mt-2 text-base leading-relaxed text-foreground/90">{deep.quickAnswer}</p>
        </div>
      )}

      {deep && (
        <nav className="mb-8 rounded-md border border-border bg-card p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">On this page</h2>
          <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li><a href="#providers" className="font-semibold text-primary hover:underline">Top {city} proxy providers</a></li>
            <li><a href="#pricing" className="font-semibold text-primary hover:underline">{city} proxy pricing compared</a></li>
            <li><a href="#carriers" className="font-semibold text-primary hover:underline">{city} carriers &amp; ASNs</a></li>
            {deep.sections.map((s) => (
              <li key={s.h2}><a href={`#${s.h2.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-semibold text-primary hover:underline">{s.h2}</a></li>
            ))}
            <li><a href="#setup" className="font-semibold text-primary hover:underline">How to set up a {city} proxy</a></li>
            <li><a href="#use-cases" className="font-semibold text-primary hover:underline">{city} proxy use cases</a></li>
            <li><a href="#faq" className="font-semibold text-primary hover:underline">{city} proxy FAQ</a></li>
          </ol>
        </nav>
      )}

      {deep && (
        <section id="stats" className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {deep.stats.map((s) => (
            <div key={s.label} className="rounded-md border border-border bg-card p-4">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
              <div className="mt-1 font-bold text-foreground">{s.value}</div>
            </div>
          ))}
        </section>
      )}

      <Prose>
        <p>Looking for clean, fresh IP addresses in <strong>{city}</strong>? Every major proxy vendor offers city-level targeting in {city} as part of their {country.name} pool ({country.poolDepth} total). The dominant residential carriers in {country.name} — {country.carriers.slice(0, 4).join(", ")} — all have substantial IP density in {city}.</p>
        <h2 id="providers">Top {city} proxy providers</h2>
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

      {deep && deepPicks.length > 0 && (
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Why each provider wins in {city}</h2>
          {deepPicks.map((pk, i) => (
            <article key={pk.slug} className="rounded-md border border-border bg-card p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <h3 className="text-lg font-bold">{pk.provider!.name} — {city}</h3>
                <span className="ml-auto text-xs font-semibold text-muted-foreground">Best for: {pk.bestFor}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{pk.why}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`/go/${pk.slug}`} rel="sponsored nofollow" className="rounded bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">Get {pk.provider!.name} {city} IPs</a>
                <Link to="/reviews/$slug" params={{ slug: pk.slug }} className="rounded border border-border px-3 py-1.5 text-xs font-bold hover:border-primary">Read our {pk.provider!.name} review</Link>
              </div>
            </article>
          ))}
        </section>
      )}

      {deep && (
        <section id="pricing" className="mt-10">
          <h2 className="text-2xl font-bold">{city} proxy pricing compared (2026)</h2>
          <Table head={deep.prices.head} rows={deep.prices.rows} />
          <p className="mt-3 text-xs text-muted-foreground">Prices are entry-tier published rates observed in 2026 and fall as committed volume rises. Bandwidth, not request count, is what you pay for.</p>
        </section>
      )}

      {deep && (
        <section id="carriers" className="mt-10">
          <h2 className="text-2xl font-bold">{city} carriers, ASNs and pool composition</h2>
          <Table head={["Carrier", "ASN", "Share of city pool", "Type"]} rows={deep.asns.map((a) => [a.carrier, a.asn, a.share, a.type])} />
        </section>
      )}

      {deep && deep.sections.map((s) => (
        <section key={s.h2} id={s.h2.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mt-10">
          <Prose>
            <h2>{s.h2}</h2>
            {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
          </Prose>
          {s.table && <Table head={s.table.head} rows={s.table.rows} />}
        </section>
      ))}

      {deep && (
        <section id="setup" className="mt-10">
          <h2 className="text-2xl font-bold">How to set up a {city} proxy (step by step)</h2>
          <ol className="mt-4 space-y-3">
            {deep.howTo.map((s, i) => (
              <li key={s.step} className="rounded-md border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <h3 className="font-bold">{s.step}</h3>
                </div>
                <p className="mt-2 text-sm text-foreground/85">{s.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section id="use-cases" className="mt-10">
        <h2 className="text-2xl font-bold">Common use cases for {city} proxies</h2>
        {deep ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {deep.useCases.map((u) => (
              <div key={u.title} className="rounded-md border border-border bg-card p-4">
                <h3 className="font-bold">{u.title}</h3>
                <p className="mt-2 text-sm text-foreground/85">{u.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <Prose><ul>{country.primaryUseCases.map((u) => <li key={u}>{u}</li>)}</ul></Prose>
        )}
      </section>

      <section id="faq" className="mt-10">
        <Prose>
          <h2>{city} proxy FAQ</h2>
          <h3>Are {city} proxies legal?</h3>
          <p>{country.legalNote}</p>
          <h3>How accurate is {city} city-level targeting?</h3>
          <p>The top vendors (Bright Data, Oxylabs, Decodo) maintain over 95% city-level accuracy in major metros like {city}.</p>
          {(deep ? deep.faq : extra?.faq ?? []).map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </Prose>
      </section>

      {extra && !deep && (
        <section className="mt-8 rounded-md border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground">{city} at a glance</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <div><span className="text-muted-foreground">Population:</span> <strong>{extra.population}</strong></div>
            <div><span className="text-muted-foreground">Internet penetration:</span> <strong>{extra.internetPenetration}</strong></div>
            <div><span className="text-muted-foreground">Avg speed:</span> <strong>{extra.avgSpeed}</strong></div>
            <div><span className="text-muted-foreground">Carriers:</span> <strong>{extra.dominantCarriers.join(", ")}</strong></div>
          </div>
          <p className="mt-4 text-sm text-foreground/80">{extra.uniqueNote}</p>
        </section>
      )}

      {deep && (
        <section className="mt-10 rounded-md border border-border bg-card p-6">
          <h2 className="text-xl font-bold">People also search for</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {deep.relatedQueries.map((q) => (
              <span key={q} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/75">{q}</span>
            ))}
          </div>
        </section>
      )}

      <LongFormSection variant="city" topic={`${city}, ${country.name}`} />

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="text-xl font-bold">Keep researching</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link to="/countries/$slug" params={{ slug: country.slug }} className="rounded-md border border-border bg-card p-3 text-sm font-bold hover:border-primary">All {country.name} proxies</Link>
          <Link to="/best/$slug" params={{ slug: `${country.slug}-proxies` }} className="rounded-md border border-border bg-card p-3 text-sm font-bold hover:border-primary">Best {country.name} proxy providers</Link>
          <Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }} className="rounded-md border border-border bg-card p-3 text-sm font-bold hover:border-primary">Best residential proxies 2026</Link>
          <Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }} className="rounded-md border border-border bg-card p-3 text-sm font-bold hover:border-primary">Best 4G/5G mobile proxies</Link>
          <Link to="/compare" className="rounded-md border border-border bg-card p-3 text-sm font-bold hover:border-primary">Compare all providers</Link>
          <Link to="/blog" className="rounded-md border border-border bg-card p-3 text-sm font-bold hover:border-primary">Proxy &amp; scraping blog</Link>
        </div>
      </div>

      {otherCities.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-xl font-bold">Other cities in {country.name}</h2>
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
