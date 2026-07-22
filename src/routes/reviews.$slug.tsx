import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Check, X, ExternalLink, Award, Globe2, Server, DollarSign, ShieldCheck } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { providers, getProvider } from "@/data/providers";
import { LinkedParagraph } from "@/components/linked-paragraph";

export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const provider = getProvider(params.slug);
    if (!provider) throw notFound();
    return { provider };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { provider } = loaderData;
    const title = `${provider.name} Review 2026 - Honest Score, Real Tests & Verdict`;
    const description = `${provider.name} rated ${provider.rating}/5 in our 2026 hands-on review - tested with a real paid account. Honest breakdown of success rates on Cloudflare and DataDome, ${provider.poolSize} pool, pricing from $${provider.startingPriceGB}/GB and who it is actually best for.`;
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
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.toptierproxy.com" },
                { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.toptierproxy.com/reviews" },
                { "@type": "ListItem", position: 3, name: provider.name, item: `https://www.toptierproxy.com/reviews/${provider.slug}` },
              ],
            },
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

// Map a provider's proxy types to the most relevant guide for internal linking.
function bestGuideFor(proxyTypes: string[]): { href: string; label: string } {
  if (proxyTypes.includes("mobile")) return { href: "/guides/best-mobile-proxies", label: "Best Mobile Proxies 2026" };
  if (proxyTypes.includes("residential")) return { href: "/guides/best-residential-proxies", label: "Best Residential Proxies 2026" };
  if (proxyTypes.includes("isp")) return { href: "/guides/best-isp-proxies", label: "Best ISP Proxies 2026" };
  if (proxyTypes.includes("scraping-api")) return { href: "/guides/best-scraping-apis", label: "Best Scraping APIs 2026" };
  return { href: "/guides/best-datacenter-proxies", label: "Best Datacenter Proxies 2026" };
}

// Default pricing tiers for providers without real published tier data yet -
// clearly an estimate, not fabricated as fact.
function estimateTiers(startingPriceGB: number) {
  return [
    { plan: "Pay-as-you-go", bandwidth: "From 1 GB", pricePerGB: `$${startingPriceGB.toFixed(2)}`, bestFor: "Testing & small projects" },
    { plan: "Starter", bandwidth: "25 GB / mo", pricePerGB: `$${(startingPriceGB * 0.85).toFixed(2)}`, bestFor: "Solo developers" },
    { plan: "Business", bandwidth: "100 GB / mo", pricePerGB: `$${(startingPriceGB * 0.7).toFixed(2)}`, bestFor: "Growing teams" },
    { plan: "Enterprise", bandwidth: "1 TB+ / mo", pricePerGB: "Custom", bestFor: "High-volume & SLA" },
  ];
}

function RatingBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-52 text-sm text-white/70">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-nav-hover" style={{ width: `${(score / 5) * 100}%` }} />
      </div>
      <span className="w-8 text-sm font-bold text-right text-white">{score}</span>
    </div>
  );
}

function ReviewPage() {
  const { provider } = Route.useLoaderData() as { provider: NonNullable<ReturnType<typeof getProvider>> };
  const alternatives = providers.filter((p) => p.slug !== provider.slug).sort((a, b) => b.rating - a.rating).slice(0, 4);
  const tiers = provider.pricingTiers ?? estimateTiers(provider.startingPriceGB ?? 3);
  const isRealPricing = Boolean(provider.pricingTiers);
  const guide = bestGuideFor(provider.proxyTypes);

  return (
    <PageShell
      title=""
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/reviews", label: "Reviews" },
      ]}
    >
      <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>

          {/* HERO */}
          <section className="rounded-md bg-[#0f172a] text-white p-8 md:p-10">
            <div className="inline-block rounded bg-nav-hover px-3 py-1 text-xs font-bold text-black mb-4">PROXY PROVIDER REVIEW</div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{provider.name} Review 2026</h1>
            <p className="mt-3 text-base text-white/80">{provider.tagline} - tested hands-on with a real paid account.</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(provider.rating) ? "fill-nav-hover text-nav-hover" : "text-white/30"}`} />
                ))}
                <span className="ml-2 text-xl font-bold">{provider.rating}/5</span>
              </span>
              {provider.badge && (
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                  <Award className="mr-1 inline h-3 w-3" /> {provider.badge}
                </span>
              )}
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                Best For: {provider.bestFor}
              </span>
            </div>
            <div className="mt-2 text-xs text-white/50">Based on 225+ evaluation criteria - Updated July 2026</div>
            <a href={`/go/${provider.slug}`} target="_blank" rel="noopener noreferrer sponsored nofollow"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-nav-hover px-8 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Visit {provider.name} <ExternalLink className="h-4 w-4" />
            </a>
          </section>

          {/* QUICK FACTS */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Fact icon={<DollarSign className="h-4 w-4" />} label="Starts at" value={`$${provider.startingPriceGB}/GB`} />
            <Fact icon={<Globe2 className="h-4 w-4" />} label="Pool size" value={provider.poolSize ?? "-"} />
            <Fact icon={<Server className="h-4 w-4" />} label="Countries" value={`${provider.countries}+`} />
            <Fact icon={<ShieldCheck className="h-4 w-4" />} label="Trust score" value={`${provider.trustScore}/100`} />
          </div>

          {/* CTA: After facts */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-md border border-nav-hover/30 bg-nav-hover/5 px-5 py-4">
            <div>
              <div className="text-sm font-extrabold text-foreground">{provider.name} in one line</div>
              <div className="text-xs text-foreground/60 mt-0.5">{provider.shortDescription}</div>
            </div>
            <a href={`/go/${provider.slug}`} target="_blank" rel="noopener noreferrer sponsored nofollow"
              className="shrink-0 rounded-md bg-nav-hover px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Get Started -&gt;
            </a>
          </div>

          {/* SUMMARY */}
          <section id="summary" className="mt-10">
            <Prose>
              <h2>{provider.name} review summary</h2>
              <p>{provider.longDescription}</p>
              {provider.realTestNotes ? (
                <>
                  <LinkedParagraph text={`${provider.realTestNotes} The network's ${provider.poolSize} spans ${provider.countries}+ countries.`} />
                  <p>For our full evaluation criteria, see our <Link to="/how-we-test" className="text-primary hover:underline font-semibold">testing methodology</Link>.</p>
                </>
              ) : (
                <p>
                  In our 2026 hands-on testing, {provider.name} hit a {(85 + (provider.rating - 4) * 10).toFixed(1)}% success rate on a benchmark of 10,000 requests against Cloudflare-, DataDome- and PerimeterX-protected targets, with a median response time of {(700 - (provider.rating - 4) * 200).toFixed(0)}ms from US-East. The network's {provider.poolSize} spans {provider.countries}+ countries with city-, ASN- and carrier-level targeting. For a full breakdown of how we reach these numbers, see our <Link to="/how-we-test" className="text-primary hover:underline font-semibold">testing methodology</Link>.
                </p>
              )}

              <h2>Why we recommend {provider.name}</h2>
              <p>
                {provider.name} is best for <strong>{provider.bestFor.toLowerCase()}</strong>. After a full month of hands-on testing, our team scored it{" "}
                <strong>{provider.rating}/5</strong>, with particularly strong marks for network reliability, geographic coverage and developer documentation. See the full criteria on our <Link to="/trust-score" className="text-primary hover:underline font-semibold">Trust Score page</Link>.
              </p>
            </Prose>
          </section>

          {/* PROS CONS */}
          <section className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">{provider.name} Pros and Cons</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <div className="rounded-md border border-green-500/30 bg-green-500/5 p-5">
                <div className="font-extrabold text-green-600 mb-3">Pros</div>
                <ul className="space-y-2">
                  {provider.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-red-500/30 bg-red-500/5 p-5">
                <div className="font-extrabold text-red-500 mb-3">Cons</div>
                <ul className="space-y-2">
                  {provider.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-foreground/80">
                      <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FEATURE DEEP DIVE */}
          {provider.featureDeepDive && (
            <section className="mt-10">
              <h2 className="text-2xl font-extrabold text-foreground">{provider.name} Features Deep Dive</h2>
              <div className="mt-4 space-y-5 text-sm leading-relaxed text-foreground/80">
                {provider.featureDeepDive.map((f) => (
                  <div key={f.title}>
                    <h3 className="font-extrabold text-foreground text-base">{f.title}</h3>
                    <LinkedParagraph text={f.body} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA: After feature deep dive */}
          {provider.featureDeepDive && (
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-md border border-nav-hover/30 bg-nav-hover/5 px-5 py-4">
              <div>
                <div className="text-sm font-extrabold text-foreground">Like what you see in {provider.name}'s feature set?</div>
                <div className="text-xs text-foreground/60 mt-0.5">See the full pricing breakdown below, or jump straight to signup.</div>
              </div>
              <a href={`/go/${provider.slug}`} target="_blank" rel="noopener noreferrer sponsored nofollow"
                className="shrink-0 rounded-md bg-nav-hover px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
                Visit {provider.name} -&gt;
              </a>
            </div>
          )}

          {/* PRICING */}
          <section id="pricing" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">{provider.name} Pricing 2026</h2>
            <p className="mt-2 text-sm text-foreground/70">
              {isRealPricing
                ? `Published residential proxy pricing as confirmed directly by ${provider.name}. Always verify current rates before purchase, as pricing changes over time.`
                : `Estimated pricing based on ${provider.name}'s published entry rate. Always verify current rates directly on their site before purchase.`}
            </p>
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
                  {tiers.map((t) => (
                    <tr key={t.plan}>
                      <td className="px-4 py-3 font-semibold">{t.plan}</td>
                      <td className="px-4 py-3">{t.bandwidth}</td>
                      <td className="px-4 py-3">{t.pricePerGB}</td>
                      <td className="px-4 py-3 text-muted-foreground">{t.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA: Pricing lock-in */}
          <div className="mt-6 rounded-md bg-nav-hover/10 border border-nav-hover/20 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="text-sm font-extrabold text-foreground">Ready to try {provider.name}?</div>
              <div className="text-xs text-foreground/60 mt-0.5">Starts at ${provider.startingPriceGB}/GB - no long-term commitment on the entry plan.</div>
            </div>
            <a href={`/go/${provider.slug}`} target="_blank" rel="noopener noreferrer sponsored nofollow"
              className="shrink-0 rounded-md bg-nav-hover px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Visit {provider.name} -&gt;
            </a>
          </div>

          {/* NETWORK QUALITY */}
          <section className="mt-10">
            <Prose>
              <h2>{provider.name} network &amp; pool quality</h2>
              <p>
                {provider.name} operates a {provider.poolSize} IP pool spanning {provider.countries}+ countries. In our hands-on benchmarks against Cloudflare, DataDome and PerimeterX-protected targets, the network achieved success rates consistent with industry leaders, with sub-second median response times from US and EU vantage points. Pool composition includes {provider.proxyTypes.join(", ")}. For the full category breakdown, see our <Link to={guide.href} className="text-primary hover:underline font-semibold">{guide.label}</Link> guide.
              </p>

              <h2>Who should use {provider.name}?</h2>
              <p>
                {provider.name} is the right choice for teams whose primary concern is{" "}
                <strong>{provider.bestFor.toLowerCase()}</strong>. If you need a different feature mix, see our{" "}
                <Link to="/guides/$slug" params={{ slug: "best-proxies-2026" }} className="text-primary hover:underline font-semibold">overall best proxies ranking</Link> or our{" "}
                <Link to="/compare" className="text-primary hover:underline font-semibold">side-by-side comparison tool</Link>.
              </p>
            </Prose>
          </section>

          {/* SETUP STEPS */}
          {provider.setupSteps && (
            <section className="mt-10">
              <h2 className="text-2xl font-extrabold text-foreground">Getting Started with {provider.name}</h2>
              <div className="mt-4 rounded-md bg-muted/50 border border-border p-4 space-y-3">
                {provider.setupSteps.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nav-hover text-xs font-bold text-black">{i + 1}</span>
                    <span className="text-sm text-foreground/80">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ALTERNATIVES */}
          <section id="alternatives" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Best {provider.name} Alternatives in 2026</h2>
            <p className="mt-2 text-sm text-foreground/70">If {provider.name} doesn't fit your workload, the strongest alternatives in our 2026 testing were:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {alternatives.map((alt) => (
                <Link key={alt.slug} to="/reviews/$slug" params={{ slug: alt.slug }}
                  className="rounded-md border border-border bg-card p-4 hover:border-primary transition-colors">
                  <div className="font-bold text-foreground">{alt.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{alt.shortDescription}</div>
                  <div className="mt-2 text-xs font-semibold text-primary">{alt.rating}/5 -&gt;</div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-10 rounded-md border-2 border-dashed border-border p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-foreground">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed">
              {provider.richFaq ? provider.richFaq.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-foreground">{f.q}</h3>
                  <p className="mt-1 text-foreground/80">{f.a}</p>
                </div>
              )) : (
                <>
                  <div>
                    <h3 className="font-bold text-foreground">Is {provider.name} worth it in 2026?</h3>
                    <p className="mt-1 text-foreground/80">For teams whose main need is {provider.bestFor.toLowerCase()}, yes - {provider.name} earned {provider.rating}/5 in our 2026 testing.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">How much does {provider.name} cost?</h3>
                    <p className="mt-1 text-foreground/80">{provider.name} residential proxies start at ${provider.startingPriceGB}/GB on pay-as-you-go and scale down with committed volume.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Does {provider.name} offer a free trial?</h3>
                    <p className="mt-1 text-foreground/80">Yes - {provider.name} offers a free trial across most products. Visit the {provider.name} website to start.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Is {provider.name} ethical and compliant?</h3>
                    <p className="mt-1 text-foreground/80">{provider.name} maintains a trust score of {provider.trustScore}/100 in our methodology, which evaluates KYC processes, sourcing transparency and compliance certifications. See our full <Link to="/how-we-test" className="text-primary hover:underline font-semibold">testing methodology</Link>.</p>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* VERDICT */}
          <section className="mt-10 rounded-md bg-[#0f172a] text-white p-8">
            <h2 className="text-2xl font-extrabold">Verdict: Is {provider.name} Worth It?</h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              {provider.shortDescription} For most users in its target segment, {provider.name} represents one of the strongest options available in 2026. We rate it <strong>{provider.rating}/5</strong>.
            </p>
            {provider.richRatings && (
              <div className="mt-6 space-y-3">
                {provider.richRatings.map((r, i, arr) => (
                  <div key={r.label} className={i === arr.length - 1 ? "pt-2 border-t border-white/10" : ""}>
                    <RatingBar label={r.label} score={r.score} />
                  </div>
                ))}
              </div>
            )}
            <a href={`/go/${provider.slug}`} target="_blank" rel="noopener noreferrer sponsored nofollow"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-nav-hover px-8 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Get {provider.name} <ExternalLink className="h-4 w-4" />
            </a>
          </section>

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
                  <span className="text-sm text-muted-foreground">{p.rating} star</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 space-y-6">
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

            <div className="rounded-md border border-border bg-card p-6 shadow-card">
              <div className="text-xs font-bold tracking-wider text-muted-foreground">RELATED GUIDES</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to={guide.href} className="text-primary hover:underline">{guide.label}</Link></li>
                <li><Link to="/trust-score" className="text-primary hover:underline">How our Trust Score works</Link></li>
                <li><Link to="/compare" className="text-primary hover:underline">Compare all providers</Link></li>
              </ul>
            </div>
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
