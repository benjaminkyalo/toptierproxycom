import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Flag } from "@/components/flag";
import { countries } from "@/data/countries";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { title: "Best Proxies by Country 2026 — 30+ Country Guides | ToptierProxy.com" },
      { name: "description", content: "Find the best residential, datacenter, ISP and mobile proxies for every country. 30+ in-depth country guides updated for 2026 with pool sizes, pricing and city coverage." },
      { property: "og:title", content: "Best Proxies by Country — 30+ Guides" },
      { property: "og:description", content: "Country-specific proxy recommendations for 30+ countries with pool sizes and city-level targeting data." },
    ],
  }),
  component: CountriesIndex,
});

function CountriesIndex() {
  const regions = Array.from(new Set(countries.map((c) => c.region)));
  return (
    <PageShell
      title="Best proxies by country"
      intro="Find the best providers offering high-quality residential, ISP and mobile IPs from your country — 30+ guides updated for 2026."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }]}
    >
      {regions.map((region) => (
        <section key={region} className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">{region}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.filter((c) => c.region === region).map((c) => (
              <Link
                key={c.slug}
                to="/countries/$slug"
                params={{ slug: c.slug }}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <Flag code={c.code} name={c.name} size="md" />
                <div className="min-w-0">
                  <div className="text-base font-bold">{c.name} proxies</div>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {c.poolDepth} · residential, mobile &amp; ISP IPs in {c.topCities.slice(0, 3).join(", ")}. {c.primaryUseCases[0]}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
