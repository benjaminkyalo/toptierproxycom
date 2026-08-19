import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Prose } from "@/components/page-shell";
import { getResourceContent } from "@/data/resources-content";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const resource = getResourceContent(params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { resource } = loaderData;
    return {
      meta: [
        { title: `${resource.metaTitle} | ToptierProxy.com` },
        { name: "description", content: resource.metaDescription },
        { property: "og:title", content: resource.metaTitle },
        { property: "og:description", content: resource.metaDescription },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://www.toptierproxy.com/resources/${resource.slug}` }],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Resource not found">
      <p>That resource page does not exist. <Link to="/resources" className="text-primary hover:underline">Back to all resources</Link>.</p>
    </PageShell>
  ),
  component: ResourcePage,
});

function CostCalculator() {
  const [gb, setGb] = useState(50);
  const [price, setPrice] = useState(4);
  const monthly = (gb * price).toFixed(2);
  return (
    <div className="mt-6 rounded-md border border-border bg-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-foreground">Estimated GB per month</span>
          <input
            type="number"
            min={1}
            value={gb}
            onChange={(e) => setGb(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-foreground">Price per GB ($)</span>
          <input
            type="number"
            min={0}
            step={0.1}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </label>
      </div>
      <div className="mt-5 rounded-md bg-primary/10 p-4 text-center">
        <div className="text-xs font-semibold text-foreground/60">Estimated monthly cost</div>
        <div className="mt-1 text-3xl font-extrabold text-primary">${monthly}</div>
      </div>
      <p className="mt-4 text-xs text-foreground/60">
        Real 2026 residential pricing ranges from roughly $1.75/GB (IPRoyal) to $8/GB (Bright Data, Oxylabs pay-as-you-go). Datacenter and ISP proxies are typically priced per IP instead of per GB - see our{" "}
        <Link to="/resources/$slug" params={{ slug: "proxy-type-cheatsheet" }} className="text-primary hover:underline">proxy type cheatsheet</Link> for those numbers.
      </p>
    </div>
  );
}

function ResourcePage() {
  const { resource } = Route.useLoaderData();
  return (
    <PageShell
      title={resource.title}
      intro={resource.intro}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }]}
    >
      {resource.slug === "cost-calculator" && <CostCalculator />}
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
