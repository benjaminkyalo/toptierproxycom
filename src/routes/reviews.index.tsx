import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProviderLogo } from "@/components/provider-logo";
import { providers } from "@/data/providers";

export const Route = createFileRoute("/reviews/")({
  head: () => ({
    meta: [
      { title: "All Proxy Provider Reviews — ToptierProxy.com" },
      { name: "description", content: "Browse our complete library of in-depth, hands-on proxy provider reviews. Updated for 2026 with pricing, pool size and performance benchmarks." },
      { property: "og:title", content: "All Proxy Provider Reviews | ToptierProxy.com" },
      { property: "og:description", content: "In-depth reviews of every major residential, datacenter, ISP, mobile and scraping API provider." },
    ],
  }),
  component: ReviewsIndex,
});

function ReviewsIndex() {
  return (
    <PageShell
      title="Proxy Provider Reviews"
      intro="In-depth, hands-on reviews of every major proxy provider. Updated for 2026 with pricing, pool size, geographic coverage and performance benchmarks."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/reviews", label: "Reviews" }]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {providers.map((p) => (
          <Link
            key={p.slug}
            to="/reviews/$slug"
            params={{ slug: p.slug }}
            className="group flex items-start gap-5 rounded-md border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <ProviderLogo provider={p} size="lg" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold group-hover:text-primary">{p.name} Review</h2>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-bold">{p.rating}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-foreground/80">{p.shortDescription}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span>From ${p.startingPriceGB}/GB</span>
                <span>•</span>
                <span>{p.poolSize}</span>
                <span>•</span>
                <span>{p.countries}+ countries</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
