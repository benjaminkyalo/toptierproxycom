import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { getCountry } from "@/data/countries";
import { providers } from "@/data/providers";
import { Star } from "lucide-react";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const country = getCountry(params.slug);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { country } = loaderData;
    return {
      meta: [
        { title: `Best Proxies for ${country.name} 2026 — ToptierProxy.com` },
        { name: "description", content: `The best residential, datacenter and mobile proxies with IPs in ${country.name}. Pool sizes, pricing and city-level coverage compared.` },
        { property: "og:title", content: `Best Proxies for ${country.name} 2026` },
        { property: "og:description", content: `Compare top proxy providers with ${country.name} IPs.` },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Country not found"><p>That country page doesn't exist.</p><Link to="/countries" className="font-bold text-primary underline">Back to all countries</Link></PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell title="Something went wrong"><p>{error.message}</p></PageShell>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country } = Route.useLoaderData();
  const top = country.topProviders
    .map((s) => providers.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <PageShell
      title={`Best Proxies for ${country.name} ${country.flag}`}
      intro={`The top providers offering residential, datacenter, ISP and mobile IPs in ${country.name}, ranked for 2026.`}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/countries", label: "Countries" }]}
    >
      <Prose>
        <p>
          {country.name} is one of the {country.region} region's most-targeted geographies for web scraping, ad verification and SEO monitoring. The providers below all maintain substantial {country.name} residential IP pools with city-level targeting available.
        </p>
        <h2>Top {top.length} proxy providers for {country.name}</h2>
      </Prose>

      <ol className="mt-6 space-y-4">
        {top.map((p, idx) => (
          <li key={p.slug} className="rounded-md border border-border bg-card p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{idx + 1}</span>
                <Link to="/reviews/$slug" params={{ slug: p.slug }} className="text-xl font-bold hover:text-primary">{p.name}</Link>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-bold">{p.rating}</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{p.shortDescription}</p>
            <Link to="/reviews/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover">Read full review</Link>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
