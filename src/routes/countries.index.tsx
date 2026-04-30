import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { title: "Best Proxies by Country — ToptierProxy.com" },
      { name: "description", content: "Find the best residential, datacenter, ISP and mobile proxies for every country. 50+ country guides updated for 2026." },
      { property: "og:title", content: "Best Proxies by Country" },
      { property: "og:description", content: "Country-specific proxy recommendations for 50+ countries." },
    ],
  }),
  component: CountriesIndex,
});

function CountriesIndex() {
  return (
    <PageShell title="Best proxies by country" intro="Find the best providers offering high-quality residential, ISP and mobile IPs from your country — 50+ guides updated for 2026." breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }]}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {countries.map((c) => (
          <Link
            key={c.slug}
            to="/countries/$slug"
            params={{ slug: c.slug }}
            className="flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="text-2xl">{c.flag}</span>
            <span className="font-bold">{c.name}</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
