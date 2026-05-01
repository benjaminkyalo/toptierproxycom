import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { useCases } from "@/data/use-cases";

export const Route = createFileRoute("/use-cases/")({
  head: () => ({
    meta: [
      { title: "Proxy Use Cases — 12+ Workloads Compared | ToptierProxy.com" },
      { name: "description", content: "Find the best proxy provider for your use case — web scraping, SEO tracking, ad verification, sneaker copping, social media, AI training and more." },
      { property: "og:title", content: "Proxy Use Cases — Compare by Workload" },
      { property: "og:description", content: "Pick the right proxy for your workload. 12+ in-depth use case guides." },
    ],
  }),
  component: () => (
    <PageShell title="Proxy use cases" intro="Pick the right proxy for your workload — from web scraping and SEO tracking to ad verification, sneaker copping and AI training." breadcrumb={[{ to: "/", label: "Home" }, { to: "/use-cases", label: "Use Cases" }]}>
      <div className="grid gap-4 md:grid-cols-2">
        {useCases.map((u) => (
          <Link key={u.slug} to="/use-cases/$slug" params={{ slug: u.slug }} className="rounded-md border border-border bg-card p-5 shadow-card hover:shadow-card-hover">
            <h2 className="text-lg font-bold text-primary">{u.title}</h2>
            <p className="mt-2 text-sm text-foreground/80">{u.intro}</p>
            <div className="mt-3 text-xs text-muted-foreground">Recommended: <strong className="text-foreground">{u.recommendedType}</strong></div>
          </Link>
        ))}
      </div>
    </PageShell>
  ),
});
