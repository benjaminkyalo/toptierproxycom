import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "All Proxy Buying Guides — 18+ Expert Rankings | ToptierProxy.com" },
      { name: "description", content: "Browse 18+ expert proxy buying guides — best residential, datacenter, ISP, mobile, sneaker, SEO, scraping APIs, SERP APIs, free trials and pay-as-you-go plans. Updated for 2026." },
      { property: "og:title", content: "All Proxy Buying Guides | ToptierProxy.com" },
      { property: "og:description", content: "Expert proxy buying guides for every category and use case." },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <PageShell
      title="Proxy Buying Guides"
      intro="Expert guides for every proxy category and use case — from beginner-friendly walkthroughs to enterprise vendor rankings. Updated monthly."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/guides", label: "Guides" }]}
    >
      <Prose>
        <p>
          Our buying guides answer the question Google can't: <em>which proxy provider is actually best for what I'm doing?</em>{" "}
          Each guide is built on{" "}
          <Link to="/how-we-test">our 225-criterion methodology</Link> and re-benchmarked at least quarterly.
          We rank vendors against the workload the guide targets — not against generic averages.
        </p>
      </Prose>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
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
      <div className="mt-12">
        <Prose>
          <h2>Most-read guides this month</h2>
          <ul>
            <li><Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }}>Best residential proxies for 2026</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }}>Best mobile (4G/5G) proxies</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-isp-proxies" }}>Best ISP (static residential) proxies</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>Best web scraping APIs</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-sneaker-proxies" }}>Best sneaker proxies</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-free-proxy-trials" }}>Best free proxy trials</Link></li>
            <li><Link to="/guides/$slug" params={{ slug: "best-payg-proxies" }}>Best pay-as-you-go proxy plans</Link></li>
          </ul>
          <h2>Not sure where to start?</h2>
          <p>
            Read{" "}
            <Link to="/blog/$slug" params={{ slug: "datacenter-vs-residential-proxies" }}>residential vs datacenter</Link>{" "}
            for the type decision, then jump into the{" "}
            <Link to="/use-cases">use-case library</Link> to find the guide for your specific workload.
            For pricing context, our deep-dive on{" "}
            <Link to="/blog/$slug" params={{ slug: "proxy-pricing-explained" }}>why proxy pricing varies 10×</Link>{" "}
            explains exactly what you're paying for at each tier.
          </p>
        </Prose>
      </div>
    </PageShell>
  );
}
