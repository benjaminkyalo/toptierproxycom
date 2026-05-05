import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Award } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { LongFormSection } from "@/components/long-form";
import { providers } from "@/data/providers";
import { getGuide, guides } from "@/data/guides";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { guide } = loaderData;
    return {
      meta: [
        { title: `${guide.title} | ToptierProxy.com` },
        { name: "description", content: guide.description },
        { name: "keywords", content: `${guide.shortLabel}, best ${guide.shortLabel}, ${guide.shortLabel} 2026, top ${guide.shortLabel}` },
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: guide.title,
            numberOfItems: guide.providerSlugs.length,
            itemListElement: guide.providerSlugs.map((slug, i) => {
              const p = providers.find((x) => x.slug === slug);
              return {
                "@type": "ListItem",
                position: i + 1,
                name: p?.name,
                url: `https://toptierproxy.com/reviews/${slug}`,
              };
            }),
          }),
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
        <p>{guide.body}</p>
        <p>Below, our team's 2026 ranking — based on 1,000+ hours of hands-on testing across 35 vendors, with success rates measured on Cloudflare-, DataDome- and PerimeterX-protected targets.</p>
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
            <Link
              to="/reviews/$slug"
              params={{ slug: p.slug }}
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover"
            >
              Read full {p.name} review
            </Link>
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
