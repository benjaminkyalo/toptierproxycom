import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ToptierProxy.com — Independent Proxy Reviews Since 2020" },
      { name: "description", content: "ToptierProxy.com is the world's most-trusted independent review site for residential, datacenter, ISP and mobile proxy providers. Meet our team, read our methodology and see how 9M+ data professionals use our rankings every year." },
      { property: "og:title", content: "About ToptierProxy.com — Independent Proxy Reviews" },
      { property: "og:description", content: "Independent, hands-on proxy provider reviews trusted by 9M+ data professionals." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About ToptierProxy.com",
          url: "https://toptierproxy.com/about",
          publisher: { "@type": "Organization", name: "ToptierProxy.com" },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      title="About ToptierProxy.com"
      intro="Independent, hands-on reviews of every major proxy provider — trusted by 9 million data professionals each year across 190+ countries."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/about", label: "About" }]}
    >
      <Prose>
        <h2>Our mission: fix proxy buying for the next decade</h2>
        <p>
          ToptierProxy.com was founded in 2020 with a single mission: bring radical transparency to a market where pricing is opaque,
          marketing claims are inflated, and most "comparison" sites are thinly-disguised affiliate funnels for whichever vendor pays the highest commission.
          We do things differently. Every provider on this site has been tested hands-on against the same workload, on the same day,
          using a paid customer account — not a vendor-supplied trial.
        </p>
        <p>
          We've reviewed{" "}
          <Link to="/reviews">35+ proxy providers</Link>, written{" "}
          <Link to="/guides">100+ buying guides</Link>, mapped IP availability across{" "}
          <Link to="/countries">190+ countries</Link> and benchmarked vendors against every major{" "}
          <Link to="/use-cases">use case</Link> from web scraping and SEO tracking to sneaker copping and AI training-data collection.
        </p>

        <h2>Who reads ToptierProxy.com?</h2>
        <ul>
          <li><strong>Data engineers and scraping teams</strong> at growth-stage SaaS companies and Fortune 500 enterprises.</li>
          <li><strong>SEO agencies</strong> running rank-tracking, SERP-monitoring and competitor-intelligence at scale.</li>
          <li><strong>Ad-verification and brand-protection</strong> vendors who need geo-distributed traffic for compliance audits.</li>
          <li><strong>Sneaker, ticketing and reseller communities</strong> evaluating residential and ISP proxies for high-demand drops.</li>
          <li><strong>Procurement and InfoSec leads</strong> running vendor due diligence on SOC 2, ISO 27001 and GDPR posture before signing six-figure contracts.</li>
          <li><strong>AI/ML teams</strong> sourcing training datasets that require ethical, opt-in residential bandwidth.</li>
        </ul>

        <h2>Our editorial principles</h2>
        <ol>
          <li><strong>Hands-on first.</strong> Every score originates from a live test, not a vendor pitch deck.</li>
          <li><strong>Methodology before money.</strong> Editorial scoring is locked before any commercial conversation with a vendor.</li>
          <li><strong>Transparency on incentives.</strong> Affiliate links are disclosed inline; rankings are never sold.</li>
          <li><strong>Continuous re-testing.</strong> The top 12 providers are re-benchmarked monthly. Older reviews are date-stamped.</li>
          <li><strong>Reader-first conflict resolution.</strong> When a provider disputes our findings, we publish the dispute and our evidence side by side.</li>
        </ol>

        <h2>How we make money (and how we don't)</h2>
        <p>
          ToptierProxy.com is supported by affiliate commissions. When a reader signs up to a provider via one of our links,
          we may earn a referral fee at no cost to the reader. <strong>Commercial relationships never affect editorial scoring.</strong>{" "}
          Several of our top-ranked providers do not pay us a cent. We do not sell sponsored review slots, sponsored top-of-list
          placements, or "approval rights" on draft content. Read the full{" "}
          <Link to="/disclaimers">affiliate disclaimer</Link> and our{" "}
          <Link to="/how-we-test">how-we-test methodology</Link>.
        </p>

        <h2>Our team</h2>
        <p>
          Our editorial team combines decades of experience in web scraping, network engineering, anti-bot research, e-commerce
          intelligence and SaaS journalism. We hire researchers who have actually run scraping infrastructure at scale —
          not generalist content marketers. Every long-form review goes through a three-stage process: hands-on testing,
          peer review by a second researcher, and a final editorial pass before publication.
        </p>

        <h2>Frequently asked questions</h2>
        <h3>How is ToptierProxy.com different from other proxy review sites?</h3>
        <p>
          Most "top 10 proxy" lists you find on Google are written by freelancers who have never used the products,
          ranked in order of affiliate payout. We test every provider in production for at least 30 days before publishing,
          and our rankings are stable across affiliate-payout changes — because we don't reorder for money.
        </p>

        <h3>Can I trust the rankings if you make money from affiliates?</h3>
        <p>
          Yes — and the proof is in the data. Several of our top 5 providers in{" "}
          <Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }}>best residential proxies</Link> pay below-average
          commissions. If we ranked by payout, you'd see a very different list. We publish our rubric on{" "}
          <Link to="/how-we-test">how we test</Link> so anyone can audit our methodology.
        </p>

        <h3>Do you accept guest posts or sponsored content?</h3>
        <p>
          No. Every word on this site is written by our in-house editorial team. We do not accept guest posts, sponsored articles,
          or backlink exchanges.
        </p>

        <h3>Where do I report a factual error or outdated price?</h3>
        <p>
          Email <a href="mailto:editor@toptierproxy.com">editor@toptierproxy.com</a> with the URL and the correction.
          We respond within 48 business hours and post a public correction note when we update the page.
        </p>

        <h2>Start with our most-read pages</h2>
        <ul>
          <li><Link to="/guides/$slug" params={{ slug: "best-proxies-2026" }}>Best Proxy Providers for 2026</Link></li>
          <li><Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }}>Best Residential Proxies for 2026</Link></li>
          <li><Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }}>Best Mobile Proxies for 2026</Link></li>
          <li><Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data Review</Link>, <Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs Review</Link>, <Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo Review</Link></li>
          <li><Link to="/use-cases/$slug" params={{ slug: "web-scraping" }}>Best proxies for web scraping</Link></li>
          <li><Link to="/countries/$slug" params={{ slug: "united-states" }}>USA proxies</Link>, <Link to="/countries/$slug" params={{ slug: "united-kingdom" }}>UK proxies</Link>, <Link to="/countries/$slug" params={{ slug: "germany" }}>Germany proxies</Link></li>
        </ul>
      </Prose>
    </PageShell>
  );
}
