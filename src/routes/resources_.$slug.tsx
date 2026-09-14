import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { getResourceContent } from "@/data/resources-content";
import { FingerprintChecker } from "@/components/tools/fingerprint-checker";
import { WhatIsMyIp } from "@/components/tools/what-is-my-ip";
import { UserAgentGenerator } from "@/components/tools/user-agent-generator";
import { TrueCostCalculator } from "@/components/tools/true-cost-calculator";
import { benchmarkDataset, speakablePage } from "@/lib/schema";
import { benchmark, BENCHMARK_TEMPORAL, BENCHMARK_UPDATED } from "@/data/benchmark-q3-2026";


export const Route = createFileRoute("/resources_/$slug")({
  loader: ({ params }) => {
    const resource = getResourceContent(params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { resource } = loaderData;
    const url = `https://www.toptierproxy.com/resources/${resource.slug}`;
    return {
      meta: [
        { title: `${resource.metaTitle} | ToptierProxy.com` },
        { name: "description", content: resource.metaDescription },
        { property: "og:title", content: resource.metaTitle },
        { property: "og:description", content: resource.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: resource.tool ? "website" : "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: resource.tool
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: resource.tool.name,
                url,
                description: resource.metaDescription,
                applicationCategory: resource.tool.category,
                operatingSystem: "Any",
                browserRequirements: "Requires JavaScript",
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                publisher: {
                  "@type": "Organization",
                  name: "ToptierProxy.com",
                  url: "https://www.toptierproxy.com",
                },
              }),
            },
          ]
        : undefined,
    };
  },
  notFoundComponent: () => (
    <PageShell title="Resource not found">
      <p>That resource page does not exist. <Link to="/resources" className="text-primary hover:underline">Back to all resources</Link>.</p>
    </PageShell>
  ),
  component: ResourcePage,
});

function ResourcePage() {
  const { resource } = Route.useLoaderData() as {
    resource: NonNullable<ReturnType<typeof getResourceContent>>;
  };
  return (
    <PageShell
      title={resource.title}
      intro={resource.intro}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }]}
    >
      {resource.slug === "cost-calculator" && <TrueCostCalculator />}
      {resource.slug === "fingerprint-checker" && <FingerprintChecker />}
      {resource.slug === "what-is-my-ip" && <WhatIsMyIp />}
      {resource.slug === "user-agent-generator" && <UserAgentGenerator />}

      <Prose>
        {resource.sections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </Prose>
      <div className="mt-10 rounded-md border border-border bg-card p-5">
        <Link to="/resources" className="text-sm font-semibold text-primary hover:underline">
          - Back to all resources
        </Link>
      </div>
    </PageShell>
  );
}
