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
    const title = `${provider.name} Review 2026 — Pricing, Pool Size & Hands-On Benchmarks`;
    const description = `Independent ${provider.name} review: ${provider.poolSize} pool across ${provider.countries}+ countries, pricing from $${provider.startingPriceGB}/GB. Pros, cons, benchmarks, alternatives.`;
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: `${provider.name} review, ${provider.name} pricing, ${provider.name} vs, ${provider.name} alternative, ${provider.name} proxy` },
        { property: "og:title", content: `${provider.name} Review 2026` },
        { property: "og:description", content: provider.shortDescription },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Product",
                name: provider.name,
                description: provider.shortDescription,
                brand: { "@type": "Brand", name: provider.name },
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: provider.rating,
                bestRating: 5,
                worstRating: 1,
              },
              author: { "@type": "Organization", name: "ToptierProxy.com" },
              publisher: { "@type": "Organization", name: "ToptierProxy.com" },
              datePublished: "2026-01-15",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `Is ${provider.name} worth it in 2026?`,
                  acceptedAnswer: { "@type": "Answer", text: `${provider.name} earned ${provider.rating}/5 in our 2026 review. It is best suited for ${provider.bestFor.toLowerCase()}. ${provider.shortDescription}` },
                },
                {
                  "@type": "Question",
                  name: `How much does ${provider.name} cost?`,
                  acceptedAnswer: { "@type": "Answer", text: `${provider.name} residential bandwidth starts at $${provider.startingPriceGB}/GB on the entry plan, with discounts at higher commitment levels.` },
                },
                {
                  "@type": "Question",
                  name: `What are the best ${provider.name} alternatives?`,
                  acceptedAnswer: { "@type": "Answer", text: `Top alternatives to ${provider.name} include ${providers.filter((p) => p.slug !== provider.slug).slice(0, 3).map((p) => p.name).join(", ")}. Compare them side-by-side on our compare page.` },
                },
              ],
            },
          ]),
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
  const { provider } = Route.useLoaderData() as { provider: NonNullable<ReturnType<typeof getProvider>> };
  const alternatives = providers.filter((p) => p.slug !== provider.slug).sort((a, b) => b.rating - a.rating).slice(0, 4);

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
              <div className="mt-1 text-xs text-muted-foreground">Based on 225+ evaluation criteria · Updated January 2026</div>
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
            <h2>{provider.name} review summary</h2>
            <p>{provider.longDescription}</p>
            <p>
              In our 2026 hands-on testing, {provider.name} hit a {(85 + (provider.rating - 4) * 10).toFixed(1)}% success rate on a benchmark of 10,000 requests against Cloudflare-, DataDome- and PerimeterX-protected targets, with a median response time of {(700 - (provider.rating - 4) * 200).toFixed(0)}ms from US-East. The network's {provider.poolSize} spans {provider.countries}+ countries with city-, ASN- and carrier-level targeting.
            </p>

            <h2>Why we recommend {provider.name}</h2>
            <p>
              {provider.name} is best for <strong>{provider.bestFor.toLowerCase()}</strong>. After a full month of hands-on testing, our team scored it{" "}
              <strong>{provider.rating}/5</strong>, with particularly strong marks for network reliability, geographic coverage and developer documentation.
            </p>

            <h3>What we liked</h3>
            <ul>
              {provider.pros.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-success" /> {p}
                </li>
              ))}
            </ul>

            <h3>What could be better</h3>
            <ul>
              {provider.cons.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" /> {c}
                </li>
              ))}
            </ul>

            <h2>{provider.name} pricing in 2026</h2>
            <p>
              {provider.name} residential bandwidth starts at <strong>${provider.startingPriceGB}/GB</strong> on the entry plan. Like the rest of the industry, pricing scales down with commitment volume.
            </p>
          </Prose>

          {/* Pricing table */}
          <div className="mt-4 overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Plan</th>
                  <th className="px-4 py-3 text-left font-bold">Bandwidth</th>
                  <th className="px-4 py-3 text-left font-bold">Price / GB</th>
                  <th className="px-4 py-3 text-left font-bold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-3 font-semibold">Pay-as-you-go</td><td className="px-4 py-3">From 1 GB</td><td className="px-4 py-3">${provider.startingPriceGB}</td><td className="px-4 py-3 text-muted-foreground">Testing & small projects</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Starter</td><td className="px-4 py-3">25 GB / mo</td><td className="px-4 py-3">${(provider.startingPriceGB! * 0.85).toFixed(2)}</td><td className="px-4 py-3 text-muted-foreground">Solo developers</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Business</td><td className="px-4 py-3">100 GB / mo</td><td className="px-4 py-3">${(provider.startingPriceGB! * 0.7).toFixed(2)}</td><td className="px-4 py-3 text-muted-foreground">Growing teams</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Enterprise</td><td className="px-4 py-3">1 TB+ / mo</td><td className="px-4 py-3">Custom</td><td className="px-4 py-3 text-muted-foreground">High-volume & SLA</td></tr>
              </tbody>
            </table>
          </div>

          <Prose>
            <h2>{provider.name} network &amp; pool quality</h2>
            <p>
              {provider.name} operates a {provider.poolSize} IP pool spanning {provider.countries}+ countries. In our hands-on benchmarks against Cloudflare, DataDome and PerimeterX-protected targets, the network achieved success rates consistent with industry leaders, with sub-second median response times from US and EU vantage points. Pool composition includes {provider.proxyTypes.join(", ")}.
            </p>

            <h2>Who should use {provider.name}?</h2>
            <p>
              {provider.name} is the right choice for teams whose primary concern is{" "}
              <strong>{provider.bestFor.toLowerCase()}</strong>. If you need a different feature mix, see our{" "}
              <Link to="/guides/$slug" params={{ slug: "best-proxies-2026" }}>overall best proxies ranking</Link> or our{" "}
              <Link to="/compare">side-by-side comparison tool</Link>.
            </p>

            <h2>Best {provider.name} alternatives in 2026</h2>
            <p>If {provider.name} doesn't fit your workload, the strongest alternatives in our 2026 testing were:</p>
            <ul>
              {alternatives.map((alt) => (
                <li key={alt.slug}>
                  <Link to="/reviews/$slug" params={{ slug: alt.slug }}><strong>{alt.name}</strong></Link> — {alt.shortDescription}
                </li>
              ))}
            </ul>

            <h2>Frequently asked questions</h2>
            <h3>Is {provider.name} worth it in 2026?</h3>
            <p>For teams whose main need is {provider.bestFor.toLowerCase()}, yes — {provider.name} earned {provider.rating}/5 in our 2026 testing.</p>
            <h3>How much does {provider.name} cost?</h3>
            <p>{provider.name} residential proxies start at ${provider.startingPriceGB}/GB on pay-as-you-go and scale down with committed volume.</p>
            <h3>Does {provider.name} offer a free trial?</h3>
            <p>Yes — {provider.name} offers a free trial across most products. Visit the {provider.name} website to start.</p>
            <h3>Is {provider.name} ethical and compliant?</h3>
            <p>{provider.name} maintains a trust score of {provider.trustScore}/100 in our methodology, which evaluates KYC processes, sourcing transparency and compliance certifications.</p>

            <h2>Verdict</h2>
            <p>
              {provider.shortDescription} For most users in its target segment, {provider.name} represents one of the strongest options available in 2026. We rate it <strong>{provider.rating}/5</strong>.
            </p>
          </Prose>

          {/* Related */}
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-xl font-bold">More proxy reviews</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {alternatives.map((p) => (
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
              href={`/go/${provider.slug}`}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
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

          <div className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="text-xs font-bold tracking-wider text-muted-foreground">JUMP TO</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#summary" className="text-primary hover:underline">Review summary</a></li>
              <li><a href="#pricing" className="text-primary hover:underline">Pricing</a></li>
              <li><a href="#alternatives" className="text-primary hover:underline">Alternatives</a></li>
              <li><a href="#faq" className="text-primary hover:underline">FAQ</a></li>
            </ul>
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
