import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { LongFormSection } from "@/components/long-form";
import { getBlogPost, blogPosts } from "@/data/blog";
import { providers } from "@/data/providers";
import { ProviderLogo } from "@/components/provider-logo";
import { Calendar, Clock, User } from "lucide-react";


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

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: NonNullable<ReturnType<typeof getBlogPost>> };
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell
      title={post.title}
      intro={post.excerpt}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/blog", label: "Blog" }]}
    >
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.datePublished}</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">{post.category}</span>
        </div>

        <Prose>
          {post.body.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              {section.list && <ul>{section.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </div>
          ))}
        </Prose>

        {/* Recommended provider CTA */}
        {(() => {
          const rec = post.recommendedProvider
            ? providers.find((p) => p.slug === post.recommendedProvider)
            : null;
          if (!rec) return null;
          return (
            <aside className="mt-10 rounded-md border-2 border-primary/30 bg-card p-6 shadow-card">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">Editor&apos;s pick</div>
              <div className="mt-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <ProviderLogo provider={rec} size="lg" />
                <div className="flex-1">
                  <div className="text-lg font-bold">{rec.name}</div>
                  <div className="text-sm text-foreground/80">{rec.tagline}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {"⭐".repeat(Math.round(rec.rating))} {rec.rating}/5
                    {rec.startingPriceGB ? ` · From $${rec.startingPriceGB}/GB` : ""}
                  </div>
                </div>
                <a
                  href={`/go/${rec.slug}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover"
                >
                  Visit Site →
                </a>
              </div>
            </aside>
          );
        })()}

        {/* FAQ section (also emitted as FAQPage JSON-LD for rich results) */}
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
    </PageShell>
  );
}
