import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Calendar, Clock, Search, Sparkles } from "lucide-react";
import { PageShell, Prose } from "@/components/page-shell";
import { blogPosts } from "@/data/blog";
import { providers } from "@/data/providers";
import { ProviderLogo } from "@/components/provider-logo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Proxy & Web Scraping Blog 2026 — 100+ Expert Articles | ToptierProxy.com" },
      { name: "description", content: "The largest expert blog on residential proxies, web scraping, anti-bot bypass, proxy pricing and the data collection industry. 100+ guides, reviews and rankings — updated weekly." },
      { property: "og:title", content: "Proxy & Web Scraping Blog | ToptierProxy.com" },
      { property: "og:description", content: "Expert articles on proxies, web scraping and anti-bot bypass." },
      { property: "og:url", content: "https://toptierproxy.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://toptierproxy.com/blog" }],
  }),
  component: BlogIndex,
});

const CATEGORY_ORDER = [
  "All",
  "Reviews",
  "Guides",
  "Comparisons",
  "Use Cases",
  "Legal",
  "Pricing",
  "Engineering",
  "Education",
  "News",
];

const CATEGORY_COLOR: Record<string, string> = {
  Reviews: "bg-amber-100 text-amber-900",
  Guides: "bg-blue-100 text-blue-900",
  Comparisons: "bg-purple-100 text-purple-900",
  "Use Cases": "bg-emerald-100 text-emerald-900",
  Legal: "bg-rose-100 text-rose-900",
  Pricing: "bg-yellow-100 text-yellow-900",
  Engineering: "bg-cyan-100 text-cyan-900",
  Education: "bg-slate-100 text-slate-900",
  News: "bg-pink-100 text-pink-900",
};

const INITIAL_VISIBLE = 6;
const PAGE_SIZE = 12;

function BlogIndex() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const providerBySlug = useMemo(
    () => Object.fromEntries(providers.map((p) => [p.slug, p])),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [category, query]);

  // Reset pagination whenever filters change
  useEffect(() => {
    setVisible(INITIAL_VISIBLE);
  }, [category, query]);

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  // Categories actually present in posts, ordered per CATEGORY_ORDER
  const availableCats = useMemo(() => {
    const set = new Set(blogPosts.map((p) => p.category));
    return CATEGORY_ORDER.filter((c) => c === "All" || set.has(c));
  }, []);

  // Trending tag cloud — top 12 most-used tags across all posts
  const trendingTags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of blogPosts) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([t]) => t);
  }, []);

  return (
    <PageShell
      title="The ToptierProxy Blog"
      intro="Tutorials, deep dives, rankings and industry analysis from the people who actually run our benchmarks. 100+ articles — updated weekly."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/blog", label: "Blog" }]}
      bgImage="https://res.cloudinary.com/dkcqakosa/image/upload/v1778336545/ChatGPT_Image_May_9_2026_05_09_45_PM_1_qy6y0t.png"
    >
      {/* Search bar */}
      <div className="mx-auto mb-8 max-w-2xl">
        <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, keywords…"
            className="w-full rounded-md border border-border bg-card py-3 pl-12 pr-4 text-base shadow-card focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {availableCats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              category === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Prose>
          <p>No posts matched <strong>{query || category}</strong>. Try a different keyword or category.</p>
        </Prose>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((post) => {
              const rec = post.recommendedProvider ? providerBySlug[post.recommendedProvider] : null;
              const badgeCls = CATEGORY_COLOR[post.category] ?? "bg-muted text-foreground";
              return (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-md border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="flex flex-1 flex-col p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeCls}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-bold leading-snug group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-foreground/80">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.datePublished}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> by {post.author}</span>
                    </div>
                    <div className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-bold text-primary group-hover:underline">
                      Read more →
                    </div>
                  </Link>
                  {rec && (
                    <a
                      href={`/go/${rec.slug}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      className="flex items-center justify-between gap-3 border-t border-border bg-muted/40 px-6 py-3 text-xs hover:bg-muted"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <ProviderLogo provider={rec} size="sm" />
                        <span className="truncate">
                          <span className="text-muted-foreground">Recommended: </span>
                          <span className="font-bold text-foreground">{rec.name}</span>
                        </span>
                      </span>
                      <span className="shrink-0 font-bold text-primary">Visit Site →</span>
                    </a>
                  )}
                </article>
              );
            })}
          </div>

          {remaining > 0 && (
            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-xs text-muted-foreground">
                Showing {shown.length} of {filtered.length} articles
              </p>
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue-hover"
              >
                <Sparkles className="h-4 w-4" />
                See more articles ({remaining} left)
              </button>
            </div>
          )}

          {/* Trending topics */}
          <section className="mt-16 rounded-md border border-border bg-card p-6 shadow-card">
            <h2 className="text-lg font-bold">Trending topics</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Jump to the most-searched proxy & scraping topics on our site.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {trendingTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => { setQuery(t); setCategory("All"); }}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground hover:border-primary hover:text-primary"
                >
                  #{t}
                </button>
              ))}
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
}
