import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { useCases } from "@/data/use-cases";

export const Route = createFileRoute("/use-cases/")({
  head: () => ({
    meta: [
      { title: "Best Proxy by Use Case — Web Scraping, SEO, Sneakers, Ads, AI" },
      { name: "description", content: "Find the best proxy provider for your specific workload — web scraping, SEO rank tracking, ad verification, sneaker copping, social media automation, AI training data, brand protection and more. Hands-on tested for 2026." },
      { property: "og:title", content: "Proxy Use Cases — Best Provider by Workload" },
      { property: "og:description", content: "12+ in-depth proxy use case guides. Pick the right vendor for your workload." },
    ],
  }),
  component: () => (
    <PageShell title="Best proxies by use case" intro="Pick the right proxy for your workload — from web scraping and SEO tracking to ad verification, sneaker copping, social media automation and AI training-data collection." breadcrumb={[{ to: "/", label: "Home" }, { to: "/use-cases", label: "Use Cases" }]}>
      <Prose>
        <p>
          The "best" proxy provider depends entirely on what you're doing with it. A vendor that dominates SERP scraping
          may be a terrible choice for sneaker copping. A network optimised for high-volume ad verification can be
          overkill — and overpriced — for a hobbyist building a price-tracker. The guides below rank vendors against
          the specific anti-bot stack, latency profile and unit-economics of each workload.
        </p>
        <p>
          Each guide is built on the same{" "}
          <Link to="/how-we-test">225-criterion methodology</Link> we use across the site, but with category-specific
          weightings — for example, sneaker guides weight pool freshness and IP reputation higher than raw bandwidth cost,
          while AI training-data guides weight ethical sourcing above everything else.
        </p>
      </Prose>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {useCases.map((u) => (
          <Link key={u.slug} to="/use-cases/$slug" params={{ slug: u.slug }} className="rounded-md border border-border bg-card p-5 shadow-card hover:shadow-card-hover">
            <h2 className="text-lg font-bold text-primary">{u.title}</h2>
            <p className="mt-2 text-sm text-foreground/80">{u.intro}</p>
            <div className="mt-3 text-xs text-muted-foreground">Recommended: <strong className="text-foreground">{u.recommendedType}</strong></div>
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <Prose>
          <h2>How to choose the right proxy type for your use case</h2>
          <p>
            Three decisions narrow the vendor list by 90%: <strong>proxy type</strong> (residential, ISP, datacenter, mobile),
            <strong>session model</strong> (rotating per request vs sticky for the duration of a session), and{" "}
            <strong>delivery layer</strong> (raw proxy endpoint, headless browser with proxy injection, or a fully-managed
            scraping API). Read{" "}
            <Link to="/guides/$slug" params={{ slug: "residential-vs-datacenter" }}>residential vs datacenter</Link> for
            the type decision and{" "}
            <Link to="/blog/$slug" params={{ slug: "rotating-vs-sticky-sessions" }}>rotating vs sticky sessions</Link> for
            the session model.
          </p>
          <h2>Most-searched use cases in 2026</h2>
          <ul>
            <li><Link to="/use-cases/$slug" params={{ slug: "web-scraping" }}>Best proxies for web scraping</Link> — residential rotating with anti-bot bypass.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "seo-monitoring" }}>SEO rank tracking</Link> — geo-targeted residential, low-volume per IP.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "ad-verification" }}>Ad verification</Link> — global mobile + residential mix.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "sneaker-copping" }}>Sneaker copping</Link> — fresh ISP + mobile, region-specific.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "social-media" }}>Social media automation</Link> — sticky mobile, one IP per account.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "ai-training-data" }}>AI training data</Link> — ethically-sourced residential at scale.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "brand-protection" }}>Brand protection</Link> — geo-distributed residential.</li>
            <li><Link to="/use-cases/$slug" params={{ slug: "price-monitoring" }}>Price monitoring</Link> — high-volume residential rotating.</li>
          </ul>
        </Prose>
      </div>
    </PageShell>
  ),
});
