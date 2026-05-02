import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { LongFormSection } from "@/components/long-form";
import { getBlogPost, blogPosts } from "@/data/blog";
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
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: "ToptierProxy.com" },
            datePublished: post.datePublished,
            dateModified: post.datePublished,
            keywords: post.tags.join(", "),
          }),
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
  const { post } = Route.useLoaderData();
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
