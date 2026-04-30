import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/disclaimers")({
  head: () => ({
    meta: [
      { title: "Disclaimers & Affiliate Disclosure — ToptierProxy.com" },
      { name: "description", content: "Affiliate disclosure, editorial independence statement and content disclaimers for ToptierProxy.com." },
    ],
  }),
  component: () => (
    <PageShell title="Disclaimers" breadcrumb={[{ to: "/", label: "Home" }, { to: "/disclaimers", label: "Disclaimers" }]}>
      <Prose>
        <h2>Affiliate disclosure</h2>
        <p>ToptierProxy.com participates in affiliate programs operated by some of the providers we cover. When you click an outbound link and sign up to a paid plan, we may earn a commission at no extra cost to you.</p>
        <h2>Editorial independence</h2>
        <p>Our editorial team operates independently of the commercial team. Affiliate relationships have no influence on our scoring, ranking or whether a provider appears in our reviews at all. Several top-ranked providers do not pay us a single cent.</p>
        <h2>Content disclaimer</h2>
        <p>Pricing, pool sizes and features change regularly. Always verify current details on the provider's official website before purchasing.</p>
      </Prose>
    </PageShell>
  ),
});
