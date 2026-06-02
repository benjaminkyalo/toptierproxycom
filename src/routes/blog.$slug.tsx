import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageShell, Prose } from "@/components/page-shell";
import { LongFormSection } from "@/components/long-form";
import { getBlogPost, blogPosts } from "@/data/blog";
import { providers } from "@/data/providers";
import { ProviderLogo } from "@/components/provider-logo";
import { Calendar, Clock, User, ListOrdered } from "lucide-react";


export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | ToptierProxy.com` },
        { name: "description", content: post.description },
        { name: "keywords", content: post.tags.join(", ") },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.datePublished },
        { property: "article:author", content: post.author },
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
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.toptierproxy.com/blog" },
                { "@type": "ListItem", position: 3, name: post.title, item: `https://www.toptierproxy.com/blog/${post.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              author: { "@type": "Person", name: post.author },
              publisher: { "@type": "Organization", name: "ToptierProxy.com", url: "https://www.toptierproxy.com", logo: { "@type": "ImageObject", url: "https://www.toptierproxy.com/favicon.svg" } },
              datePublished: post.datePublished,
              dateModified: post.datePublished,
              mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.toptierproxy.com/blog/${post.slug}` },
              keywords: post.tags.join(", "),
            },
            ...(post.faq && post.faq.length > 0
              ? [{
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faq.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }]
              : []),
          ]),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Article not found">
      <p>That article doesn't exist.</p>
      <Link to="/blog" className="font-bold text-primary underline">Back to all articles</Link>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell title="Something went wrong"><p>{error.message}</p></PageShell>
  ),
  component: BlogPostPage,
});

function slugifyHeading(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function useReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? Math.min(100, Math.max(0, (h.scrollTop / total) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pct;
}

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: NonNullable<ReturnType<typeof getBlogPost>> };
  const progress = useReadingProgress();

  const related = useMemo(() => {
    // Prefer posts that share tags or category
    const others = blogPosts.filter((p) => p.slug !== post.slug);
    const scored = others.map((p) => {
      const shared = p.tags.filter((t) => post.tags.includes(t)).length;
      const catBonus = p.category === post.category ? 1 : 0;
      return { p, score: shared * 2 + catBonus };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 3).map((s) => s.p);
  }, [post]);

  // Top 3 affiliate alternatives (recommended first, then top-rated)
  const topPicks = useMemo(() => {
    const rec = post.recommendedProvider
      ? providers.find((p) => p.slug === post.recommendedProvider)
      : null;
    const sorted = [...providers].sort((a, b) => b.rating - a.rating);
    const picks: typeof providers = [];
    if (rec) picks.push(rec);
    for (const p of sorted) {
      if (picks.length >= 3) break;
      if (!picks.find((x) => x.slug === p.slug)) picks.push(p);
    }
    return picks;
  }, [post]);

  const tocItems = post.body.map((s) => ({ id: slugifyHeading(s.heading), label: s.heading }));
  const midIndex = Math.min(2, Math.max(1, Math.floor(post.body.length / 2)));
  const recProvider = post.recommendedProvider
    ? providers.find((p) => p.slug === post.recommendedProvider)
    : null;

  return (
    <PageShell
      title={post.title}
      intro={post.excerpt}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/blog", label: "Blog" }]}
    >
      {/* Reading progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_260px]">
        <article>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.datePublished}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">{post.category}</span>
          </div>

          <Prose>
            {post.body.map((section, idx) => (
              <div key={section.heading}>
                <h2 id={slugifyHeading(section.heading)}>{section.heading}</h2>
                {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                {section.list && <ul>{section.list.map((l) => <li key={l}>{l}</li>)}</ul>}

                {/* Mid-article inline affiliate CTA */}
                {idx === midIndex && recProvider && (
                  <aside className="not-prose my-8 rounded-md border-l-4 border-primary bg-accent/40 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <ProviderLogo provider={recProvider} size="md" />
                      <div className="flex-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary">Our top pick for this</div>
                        <div className="mt-1 text-base font-bold text-foreground">{recProvider.name} — {recProvider.tagline}</div>
                        {recProvider.startingPriceGB && (
                          <div className="text-xs text-muted-foreground">From ${recProvider.startingPriceGB}/GB · {"⭐".repeat(Math.round(recProvider.rating))} {recProvider.rating}/5</div>
                        )}
                      </div>
                      <a
                        href={`/go/${recProvider.slug}`}
                        target="_blank"
                        rel="noopener noreferrer sponsored nofollow"
                        className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover"
                      >
                        Get Deal →
                      </a>
                    </div>
                  </aside>
                )}
              </div>
            ))}
          </Prose>

          {/* Editor's pick block (full) */}
          {recProvider && (
            <aside className="mt-10 rounded-md border-2 border-primary/30 bg-card p-6 shadow-card">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">Editor&apos;s pick</div>
              <div className="mt-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <ProviderLogo provider={recProvider} size="lg" />
                <div className="flex-1">
                  <div className="text-lg font-bold">{recProvider.name}</div>
                  <div className="text-sm text-foreground/80">{recProvider.tagline}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {"⭐".repeat(Math.round(recProvider.rating))} {recProvider.rating}/5
                    {recProvider.startingPriceGB ? ` · From $${recProvider.startingPriceGB}/GB` : ""}
                  </div>
                </div>
                <a
                  href={`/go/${recProvider.slug}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover"
                >
                  Visit Site →
                </a>
              </div>
            </aside>
          )}

          {/* Top 3 alternatives widget */}
          <section className="mt-10 rounded-md border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-bold">Compare the top 3 providers</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Side-by-side picks our reviewers benchmarked this quarter.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {topPicks.map((p, i) => (
                <a
                  key={p.slug}
                  href={`/go/${p.slug}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="group flex flex-col rounded-md border border-border bg-background p-4 hover:border-primary hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
                      #{i + 1} pick
                    </span>
                    <ProviderLogo provider={p} size="sm" />
                  </div>
                  <div className="mt-3 font-bold text-foreground group-hover:text-primary">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.tagline}</div>
                  <div className="mt-2 text-xs">
                    {"⭐".repeat(Math.round(p.rating))} {p.rating}/5
                    {p.startingPriceGB ? ` · $${p.startingPriceGB}/GB` : ""}
                  </div>
                  <div className="mt-3 text-xs font-bold text-primary group-hover:underline">Visit Site →</div>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-12 border-t border-border pt-8">
              <h2 className="text-2xl font-bold">Frequently asked questions</h2>
              <div className="mt-4 divide-y divide-border">
                {post.faq.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="cursor-pointer list-none text-base font-bold marker:hidden">
                      <span className="mr-2 text-primary group-open:rotate-90 inline-block transition-transform">›</span>
                      {f.q}
                    </summary>
                    <p className="mt-2 pl-5 text-sm leading-relaxed text-foreground/85">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <LongFormSection variant="blog" topic={post.title} />

          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            {post.tags.map((t) => (
              <span key={t} className="rounded bg-muted px-3 py-1 text-xs font-semibold text-foreground">#{t}</span>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-xl font-bold">Related articles</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="rounded-md border border-border bg-card p-4 hover:border-primary">
                  <div className="text-xs font-bold text-primary">{r.category.toUpperCase()}</div>
                  <div className="mt-1 font-bold">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Sticky sidebar: Table of contents + mini affiliate */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <nav className="rounded-md border border-border bg-card p-5 shadow-card">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <ListOrdered className="h-4 w-4" /> On this page
              </div>
              <ol className="space-y-2 text-sm">
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-foreground/80 hover:text-primary"
                    >
                      <span className="mr-1 text-xs text-muted-foreground">{i + 1}.</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {recProvider && (
              <a
                href={`/go/${recProvider.slug}`}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="block rounded-md border-2 border-primary/30 bg-card p-5 text-center shadow-card hover:border-primary"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary">Editor&apos;s pick</div>
                <div className="mt-3 flex justify-center">
                  <ProviderLogo provider={recProvider} size="md" />
                </div>
                <div className="mt-3 text-sm font-bold">{recProvider.name}</div>
                {recProvider.startingPriceGB && (
                  <div className="text-xs text-muted-foreground">From ${recProvider.startingPriceGB}/GB</div>
                )}
                <div className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-brand-blue-hover">
                  Visit Site →
                </div>
              </a>
            )}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
