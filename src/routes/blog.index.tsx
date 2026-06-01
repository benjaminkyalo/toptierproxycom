import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Proxy & Web Scraping Blog 2026  Expert Articles | ToptierProxy.com" },
      { name: "description", content: "Expert long-form articles on residential proxies, web scraping, Cloudflare bypass, DataDome bypass, anti-bot defenses, proxy pricing and the data collection industry. Updated weekly." },
      { property: "og:title", content: "Proxy & Web Scraping Blog | ToptierProxy.com" },
      { property: "og:description", content: "Long-form expert content on proxies, web scraping and anti-bot bypass." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell
      title="The ToptierProxy Blog"
      intro="Deep dives on proxies, web scraping, anti-bot defenses and the data collection industry  updated weekly by our research team."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/blog", label: "Blog" }]}
      bgImage="https://res.cloudinary.com/dkcqakosa/image/upload/v1778336545/ChatGPT_Image_May_9_2026_05_09_45_PM_1_qy6y0t.png"
    >
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 min-w-0">
          <Prose>
            <p>
              Tutorials, technical deep-dives and industry analysis from the people who actually run our benchmarks.
              Every article is written by a practitioner who ships production scrapers  not a freelance content marketer.
            </p>
            <h2>Most-read articles</h2>
            <ul>
              <li><Link to="/blog/$slug" params={{ slug: "how-to-bypass-cloudflare" }}>How to bypass Cloudflare bot management in 2026</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "datacenter-vs-residential-proxies" }}>Datacenter vs residential proxies  which should you use?</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "is-web-scraping-legal" }}>Is web scraping legal in 2026?</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "rotating-vs-sticky-sessions" }}>Rotating vs sticky proxy sessions  when to use each</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "proxy-pricing-explained" }}>Why proxy pricing varies 10  explained</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "best-proxy-for-amazon-scraping" }}>Best proxy for Amazon scraping</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "best-proxy-for-instagram-tiktok" }}>Best proxy for Instagram & TikTok</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "how-to-scrape-google-search" }}>How to scrape Google Search reliably</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "ethical-proxy-sourcing" }}>What ethical residential-proxy sourcing actually looks like</Link></li>
              <li><Link to="/blog/$slug" params={{ slug: "proxy-glossary" }}>The complete proxy glossary (ASN, JA3, CGNAT and more)</Link></li>
            </ul>
          </Prose>
        </div>
        <div className="w-full md:w-5/12 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dkcqakosa/image/upload/v1778336544/ChatGPT_Image_May_9_2026_05_07_34_PM_1_tjvsqh.png"
            alt="Proxy network illustration"
            className="w-full h-auto block rounded-lg"
          />
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
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
