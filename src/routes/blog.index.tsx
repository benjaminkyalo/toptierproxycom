import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Proxy & Web Scraping Blog 2026 | ToptierProxy.com" },
      { name: "description", content: "Expert articles on residential proxies, web scraping, anti-bot bypass and proxy pricing. Updated weekly by the ToptierProxy.com research team." },
      { property: "og:title", content: "Proxy & Web Scraping Blog" },
      { property: "og:description", content: "Long-form expert content on proxies and web scraping." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell
      title="The ToptierProxy Blog"
      intro="Deep dives on proxies, web scraping, anti-bot defenses and the data collection industry — updated weekly by our research team."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/blog", label: "Blog" }]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group flex flex-col rounded-md border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="text-xs font-bold tracking-wider text-primary">{post.category.toUpperCase()}</div>
            <h2 className="mt-2 text-xl font-bold group-hover:text-primary">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm text-foreground/80">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.datePublished}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
              <span>by {post.author}</span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
