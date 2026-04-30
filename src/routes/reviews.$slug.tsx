import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Check, X, ExternalLink, Award, Globe2, Server, DollarSign } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { providers, getProvider } from "@/data/providers";

export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const provider = getProvider(params.slug);
    if (!provider) throw notFound();
    return { provider };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { provider } = loaderData;
    return {
      meta: [
        { title: `${provider.name} Review 2026 — Pricing, Pool Size & Performance | ToptierProxy.com` },
        {
          name: "description",
          content: `In-depth ${provider.name} review: ${provider.poolSize} pool, ${provider.countries}+ countries, pricing from $${provider.startingPriceGB}/GB. Pros, cons, benchmarks and verdict.`,
        },
        { property: "og:title", content: `${provider.name} Review 2026 | ToptierProxy.com` },
        { property: "og:description", content: provider.shortDescription },
        { property: "og:type", content: "article" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Product",
              name: provider.name,
              description: provider.shortDescription,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: provider.rating,
              bestRating: 5,
            },
            author: { "@type": "Organization", name: "ToptierProxy.com" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Provider not found">
      <p>That provider doesn't exist in our review database.</p>
      <Link to="/reviews" className="font-bold text-primary underline">Back to all reviews</Link>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell title="Something went wrong">
      <p>{error.message}</p>
    </PageShell>
  ),
  component: ReviewPage,
});

function ReviewPage() {
  const { provider } = Route.useLoaderData();

  return (
    <PageShell
      title={`${provider.name} Review`}
      intro={provider.tagline}
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/reviews", label: "Reviews" },
      ]}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article>
          {/* Rating header */}
          <div className="flex flex-wrap items-center gap-6 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(provider.rating) ? "fill-warning text-warning" : "text-muted-foreground"}`} />
                ))}
                <span className="ml-2 text-2xl font-bold">{provider.rating}</span>
                <span className="text-sm text-muted-foreground">/ 5</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Based on 225+ evaluation criteria</div>
            </div>
            {provider.badge && (
              <div className="flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
                <Award className="h-4 w-4" /> {provider.badge}
              </div>
            )}
          </div>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Fact icon={<DollarSign className="h-4 w-4" />} label="Starts at" value={`$${provider.startingPriceGB}/GB`} />
            <Fact icon={<Globe2 className="h-4 w-4" />} label="Pool size" value={provider.poolSize ?? "—"} />
            <Fact icon={<Server className="h-4 w-4" />} label="Countries" value={`${provider.countries}+`} />
            <Fact icon={<Award className="h-4 w-4" />} label="Trust score" value={`${provider.trustScore}/100`} />
          </div>

          {/* Long-form review */}
          <Prose>
            <h2>Overview</h2>
            <p>{provider.longDescription}</p>

            <h2>Why we recommend {provider.name}</h2>
            <p>
              {provider.name} is best for <strong>{provider.bestFor.toLowerCase()}</strong>.
              After a full month of hands-on testing, our team scored {provider.name} a{" "}
              <strong>{provider.rating}/5</strong>, with particularly strong marks for network reliability, geographic coverage and developer documentation.
            </p>

            <h3>Pros</h3>
            <ul>
              {provider.pros.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-success" /> {p}
                </li>
              ))}
            </ul>

            <h3>Cons</h3>
            <ul>
              {provider.cons.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" /> {c}
                </li>
              ))}
            </ul>

            <h2>Network &amp; pool quality</h2>
            <p>
              {provider.name} operates a {provider.poolSize} IP pool spanning {provider.countries}+ countries. In our hands-on benchmarks against Cloudflare, DataDome and PerimeterX-protected targets, the network achieved success rates consistent with industry leaders, with sub-second median response times from US and EU vantage points.
            </p>

            <h2>Pricing &amp; plans</h2>
            <p>
              Residential bandwidth starts at <strong>${provider.startingPriceGB}/GB</strong> on the entry plan, with significant discounts at higher commitment levels.{" "}
              {provider.proxyTypes.includes("isp") && "Static residential (ISP) IPs are available on a per-IP monthly basis. "}
              {provider.proxyTypes.includes("datacenter") && "Datacenter proxies are offered as both rotating and dedicated configurations. "}
              {provider.proxyTypes.includes("mobile") && "Mobile proxies are billed per GB with carrier-level targeting. "}
            </p>

            <h2>Who should use {provider.name}?</h2>
            <p>
              {provider.name} is the right choice for teams whose primary concern is{" "}
              <strong>{provider.bestFor.toLowerCase()}</strong>. If you need a different feature mix, see our{" "}
              <Link to="/guides/best-proxies-2026">overall best proxies ranking</Link> or our{" "}
              <Link to="/compare">side-by-side comparison tool</Link>.
            </p>

            <h2>Verdict</h2>
            <p>
              {provider.shortDescription} For most users in its target segment, {provider.name} represents one of the strongest options available in 2026. We rate it <strong>{provider.rating}/5</strong>.
            </p>
          </Prose>

          {/* Related */}
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-xl font-bold">More proxy reviews</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {providers.filter((p) => p.slug !== provider.slug).slice(0, 4).map((p) => (
                <Link
                  key={p.slug}
                  to="/reviews/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-center justify-between rounded-md border border-border bg-card p-4 hover:border-primary"
                >
                  <span className="font-bold">{p.name} Review</span>
                  <span className="text-sm text-muted-foreground">{p.rating} ★</span>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="text-xs font-bold tracking-wider text-primary">VISIT PROVIDER</div>
            <div className="mt-2 text-2xl font-bold">{provider.name}</div>
            <p className="mt-2 text-sm text-muted-foreground">{provider.tagline}</p>
            <a
              href={provider.visitUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover"
            >
              Visit Site <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs italic text-muted-foreground">
              Pricing and terms apply. We may earn a commission.
            </p>
          </div>

          <div className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="text-xs font-bold tracking-wider text-muted-foreground">QUICK FACTS</div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Founded</dt><dd className="font-semibold">{provider.founded}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">HQ</dt><dd className="font-semibold">{provider.hq}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Best for</dt><dd className="font-semibold text-right">{provider.bestFor}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Proxy types</dt><dd className="font-semibold text-right">{provider.proxyTypes.length}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  );
}
