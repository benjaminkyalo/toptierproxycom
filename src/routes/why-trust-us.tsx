import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/why-trust-us")({
  head: () => ({
    meta: [
      { title: "Why Trust ToptierProxy.com — Our Editorial Independence" },
      { name: "description", content: "Why ToptierProxy.com is the most trusted source for proxy provider reviews. Editorial independence, hands-on testing, transparent methodology." },
      { property: "og:title", content: "Why Trust ToptierProxy.com" },
      { property: "og:description", content: "Editorial independence and hands-on testing." },
    ],
  }),
  component: () => (
    <PageShell title="Why trust ToptierProxy.com" intro="Editorial independence, hands-on testing, and a methodology refined over 6 years and 35+ vendors." breadcrumb={[{ to: "/", label: "Home" }, { to: "/why-trust-us", label: "Why Trust Us" }]}>
      <Prose>
        <h2>Hands-on, not handed-down</h2>
        <p>Every provider we cover is tested by a member of our team using a paid account — not a vendor-supplied trial. We sign up like any other customer, run identical workloads, and document what we find.</p>
        <h2>225+ data points per review</h2>
        <p>Our scoring rubric covers pool size, ASN diversity, geographic depth, success rates against major anti-bot vendors, latency, dashboard UX, documentation, support response time, billing transparency and ethical sourcing.</p>
        <h2>No "sponsored top spots"</h2>
        <p>We do not sell editorial placement. Commercial relationships exist (affiliate commissions support the site) but they have zero influence on rankings.</p>
        <h2>Updated continuously</h2>
        <p>Proxy networks change weekly. We re-benchmark our top 12 providers every month and publish the results. Older reviews are date-stamped and refreshed at least every quarter.</p>
      </Prose>
    </PageShell>
  ),
});
