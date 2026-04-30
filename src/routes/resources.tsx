import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Proxy Resources & Tools — ToptierProxy.com" },
      { name: "description", content: "Free proxy tools, calculators, glossaries and reference guides — everything you need to choose, configure and benchmark proxies." },
      { property: "og:title", content: "Proxy Resources & Tools" },
      { property: "og:description", content: "Free proxy tools, calculators and reference guides." },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  { title: "Proxy Glossary", desc: "Every proxy term explained in plain English.", to: "/resources/glossary" },
  { title: "Bandwidth Cost Calculator", desc: "Estimate monthly proxy spend from your scrape volume.", to: "/resources/cost-calculator" },
  { title: "Proxy Type Cheatsheet", desc: "Residential vs datacenter vs ISP vs mobile — when to use what.", to: "/resources/proxy-type-cheatsheet" },
  { title: "Anti-Bot Reference", desc: "How Cloudflare, DataDome, PerimeterX and Akamai actually work.", to: "/resources/anti-bot-reference" },
  { title: "HTTP vs SOCKS5 Guide", desc: "When each protocol matters — and when it doesn't.", to: "/resources/http-vs-socks5" },
  { title: "Sticky vs Rotating Sessions", desc: "Pick the right session strategy for your workload.", to: "/resources/sticky-vs-rotating" },
];

function ResourcesPage() {
  return (
    <PageShell title="Resources & tools" intro="Free tools, calculators and reference guides for picking, configuring and benchmarking proxies." breadcrumb={[{ to: "/", label: "Home" }, { to: "/resources", label: "Resources" }]}>
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((r) => (
          <a key={r.to} href={r.to} className="rounded-md border border-border bg-card p-6 shadow-card hover:shadow-card-hover">
            <h2 className="text-lg font-bold">{r.title}</h2>
            <p className="mt-2 text-sm text-foreground/80">{r.desc}</p>
          </a>
        ))}
      </div>
      <Prose>
        <h2>Why we built these tools</h2>
        <p>Picking the right proxy is hard because the industry intentionally keeps things confusing. Every tool on this page exists to make one specific decision easier — whether that's understanding terminology, estimating cost or picking the right protocol.</p>
      </Prose>
    </PageShell>
  );
}
