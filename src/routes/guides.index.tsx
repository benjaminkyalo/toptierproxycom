import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "All Proxy Guides — ToptierProxy.com" },
      { name: "description", content: "Browse our complete library of proxy buying guides — residential, datacenter, ISP, mobile, scraping APIs and more." },
      { property: "og:title", content: "All Proxy Guides | ToptierProxy.com" },
      { property: "og:description", content: "Expert proxy buying guides for every use case." },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <PageShell
      title="Proxy Buying Guides"
      intro="Expert guides for every proxy use case — from beginner tutorials to enterprise rankings."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/guides", label: "Guides" }]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            to="/guides/$slug"
            params={{ slug: g.slug }}
            className="group rounded-md border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <h2 className="text-lg font-bold group-hover:text-primary">{g.title}</h2>
            <p className="mt-2 text-sm text-foreground/80">{g.intro}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
