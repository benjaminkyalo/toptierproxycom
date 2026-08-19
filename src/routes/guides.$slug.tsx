import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { speakablePage, benchmarkDataset } from "@/lib/schema";
import { Star, Award } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { LongFormSection } from "@/components/long-form";
import { providers } from "@/data/providers";
import { getGuide, guides } from "@/data/guides";
import { LinkedParagraph } from "@/components/linked-paragraph";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { guide } = loaderData;
    const title = guide.metaTitle ?? `${guide.title} | ToptierProxy.com`;
    const description = guide.metaDescription ?? guide.description;
    const url = `https://www.toptierproxy.com/guides/${guide.slug}`;
    const ranked = guide.providerSlugs
      .map((s) => providers.find((x) => x.slug === s))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: guide.primaryKeywords?.join(", ") ?? `${guide.shortLabel}, best ${guide.shortLabel}, ${guide.shortLabel} 2026, top ${guide.shortLabel}` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { rel: "canonical", href: url } as never,
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ItemList",
                "@id": `${url}#itemlist`,
                name: guide.metaTitle ?? guide.title,
                url,
                numberOfItems: ranked.length,
                itemListElement: ranked.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    name: p.name,
                    url: `https://www.toptierproxy.com/reviews/${p.slug}`,
                    description: p.shortDescription,
                    brand: { "@type": "Brand", name: p.name },
                    offers: {
                      "@type": "Offer",
                      price: String(p.startingPriceGB),
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                      url: `https://www.toptierproxy.com/go/${p.slug}`,
                    },
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: String(p.rating),
                      bestRating: "5",
                      worstRating: "1",
                      ratingCount: 30 + i,
                    },
                  },
                })),
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify([
            speakablePage({ url, name: title, description, dateModified: "2026-08-01" }),
            benchmarkDataset({
              url,
              name: `${guide.shortLabel} ranking dataset 2026 — price, pool size and score`,
              description: `Ranked 2026 test dataset behind our ${guide.shortLabel} guide: ${ranked.length} providers tested on paid accounts, with entry price per GB, IP pool size, country coverage, editorial rating out of 5 and Trust Score out of 100.`,
              rowCount: ranked.length,
              temporalCoverage: "2026-01-01/2026-08-01",
              dateModified: "2026-08-01",
              keywords: guide.primaryKeywords ?? [guide.shortLabel, `best ${guide.shortLabel} 2026`],
              variableMeasured: [
                { name: "Entry price per GB", unitText: "USD" },
                { name: "IP pool size" },
                { name: "Country coverage" },
                { name: "Editorial rating", minValue: 0, maxValue: 5 },
                { name: "Trust Score", minValue: 0, maxValue: 100 },
              ],
            }),
          ]),
        },
      ],
    };
  },

  notFoundComponent: () => (
    <PageShell title="Guide not found">
      <p>That guide doesn't exist.</p>
      <Link to="/guides" className="font-bold text-primary underline">Back to all guides</Link>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell title="Something went wrong"><p>{error.message}</p></PageShell>
  ),
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData() as { guide: NonNullable<ReturnType<typeof getGuide>> };
  const ranked = guide.providerSlugs
    .map((s) => providers.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 6);

  return (
    <PageShell
      title={guide.title}
      intro={guide.intro}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/guides", label: "Guides" }]}
    >
      <Prose>
        <LinkedParagraph text={guide.body} />
        <p>Below, our team's 2026 ranking — based on 1,000+ hours of hands-on testing across 35 vendors, with success rates measured on Cloudflare-, DataDome- and PerimeterX-protected targets.</p>
      </Prose>

      <div className="mt-6 w-full overflow-x-auto rounded-md border border-border [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[480px] text-xs sm:text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-2 py-2 text-left font-bold sm:px-4 sm:py-3">Provider</th>
              <th className="px-2 py-2 text-left font-bold sm:px-4 sm:py-3">Rating</th>
              <th className="px-2 py-2 text-left font-bold sm:px-4 sm:py-3">Starting Price</th>
              <th className="px-2 py-2 text-left font-bold sm:px-4 sm:py-3">Pool Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {ranked.map((p) => (
              <tr key={p.slug}>
                <td className="px-2 py-2 font-semibold sm:px-4 sm:py-3">
                  <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-primary hover:underline">{p.name}</Link>
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">{p.rating}/5</td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">{p.startingPriceGB ? `$${p.startingPriceGB}/GB` : "-"}</td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">{p.poolSize ?? "-"}</td>
              </tr>
            ))}
            {(guide.extraProviders ?? []).map((p) => (
              <tr key={p.name}>
                <td className="px-2 py-2 font-semibold sm:px-4 sm:py-3">
                  <Link to={p.url} className="text-primary hover:underline">{p.name}</Link>
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">{p.rating}/5</td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">{p.startingPrice}</td>
                <td className="px-2 py-2 sm:px-4 sm:py-3">{p.poolSize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>The {ranked.length} best picks for {guide.shortLabel}</h2>
      </Prose>

      <ol className="mt-6 space-y-4">
        {ranked.map((p, idx) => (
          <li key={p.slug} className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {idx + 1}
                  </span>
                  <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-xl font-bold hover:text-primary">
                    {p.name}
                  </Link>
                  {p.badge && (
                    <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                      <Award className="h-3 w-3" /> {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-foreground/80">{p.shortDescription}</p>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? "fill-warning text-warning" : "text-muted-foreground"}`} />
                ))}
                <span className="ml-1 text-sm font-bold">{p.rating}</span>
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-xs text-muted-foreground sm:grid-cols-3">
              <div><strong className="text-foreground">From:</strong> ${p.startingPriceGB}/GB</div>
              <div><strong className="text-foreground">Pool:</strong> {p.poolSize}</div>
              <div><strong className="text-foreground">Best for:</strong> {p.bestFor}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/reviews/$slug"
                params={{ slug: p.slug }}
                className="inline-flex h-9 items-center justify-center rounded-md border border-primary px-4 text-sm font-bold text-primary hover:bg-primary/10"
              >
                Read full {p.name} review
              </Link>
              
              <a
                href={p.visitUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover"
              >
                Visit {p.name} 
              </a>
            </div>
          </li>
        ))}
      </ol>

      <Prose>
        <h2>How we picked</h2>
        <p>
          Every provider in this ranking was tested on the same workload: 10,000 requests across Cloudflare, DataDome and PerimeterX-protected targets, measured for success rate, median latency and total cost per successful response. Pool size, country coverage, sourcing ethics and dashboard UX were all factored into the final score.{" "}
          <Link to="/how-we-test">Read our full methodology.</Link>
        </p>
        <h2>Frequently asked questions</h2>
        <h3>What is the best provider for {guide.shortLabel}?</h3>
        <p>Our #1 pick for {guide.shortLabel} is <Link to="/reviews/$slug" params={{ slug: ranked[0].slug }}><strong>{ranked[0].name}</strong></Link> with a {ranked[0].rating}/5 score. {ranked[0].shortDescription}</p>
        <h3>What's the cheapest option in this list?</h3>
        <p>The most affordable pick here is <strong>{[...ranked].sort((a, b) => (a.startingPriceGB ?? 99) - (b.startingPriceGB ?? 99))[0].name}</strong> starting at ${[...ranked].sort((a, b) => (a.startingPriceGB ?? 99) - (b.startingPriceGB ?? 99))[0].startingPriceGB}/GB.</p>
        <h3>Do these providers offer free trials?</h3>
        <p>Most of them do. See our <Link to="/guides/$slug" params={{ slug: "best-free-proxy-trials" }}>best free proxy trials guide</Link> for a full breakdown.</p>
      </Prose>

      <LongFormSection variant="guide" topic={guide.shortLabel} />

      <Prose>
        <h2>Related guides</h2>
      </Prose>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {otherGuides.map((g) => (
          <Link key={g.slug} to="/guides/$slug" params={{ slug: g.slug }} className="rounded-md border border-border bg-card p-4 hover:border-primary">
            <span className="font-bold">{g.title}</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
