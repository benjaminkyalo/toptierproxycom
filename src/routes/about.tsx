import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ToptierProxy.com — Independent Proxy Provider Reviews" },
      { name: "description", content: "ToptierProxy.com is the world's most-trusted independent review site for proxy providers. Learn about our team, mission and methodology." },
      { property: "og:title", content: "About ToptierProxy.com" },
      { property: "og:description", content: "Independent reviews of proxy providers since 2020." },
    ],
  }),
  component: () => (
    <PageShell title="About ToptierProxy.com" intro="Independent, hands-on reviews of every major proxy provider — trusted by 9 million data professionals each year." breadcrumb={[{ to: "/", label: "Home" }, { to: "/about", label: "About" }]}>
      <Prose>
        <p>ToptierProxy.com was founded in 2020 with a single mission: bring transparency to the proxy industry. Pricing is opaque, marketing claims are inflated, and most "comparison" sites are thinly-disguised affiliate funnels for whichever vendor pays the highest commission.</p>
        <p>We do things differently. Every provider is tested hands-on against the same workload. Pool sizes are verified, not quoted from marketing pages. Pricing is updated monthly. And our editorial rankings are decided before — not after — commercial conversations with vendors.</p>
        <h2>Our team</h2>
        <p>Our editorial team combines decades of experience in web scraping, network engineering, anti-bot research and SaaS journalism. We hire researchers who have actually run scraping infrastructure at scale.</p>
        <h2>How we make money</h2>
        <p>ToptierProxy.com is supported by affiliate commissions. When a reader signs up to a provider via our links, we may earn a referral fee. <strong>Commercial relationships never affect our editorial scoring.</strong> Several of our top-ranked providers do not pay us a cent.</p>
      </Prose>
    </PageShell>
  ),
});
