import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Award } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { providers } from "@/data/providers";
import { getGuide } from "@/data/guides";

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
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.description },
        { property: "og:type", content: "article" },
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
  const { guide } = Route.useLoaderData();
  const ranked = guide.providerSlugs
    .map((s) => providers.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <PageShell
      title={guide.title}
      intro={guide.intro}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/guides", label: "Guides" }]}
    >
      <Prose>
        <p>{guide.body}</p>
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
        <h2>Related guides</h2>
      </Prose>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {guide.related.map((r) => (
          <Link key={r.to} to="/guides/$slug" params={{ slug: r.to }} className="rounded-md border border-border bg-card p-4 hover:border-primary">
            <span className="font-bold">{r.label}</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
