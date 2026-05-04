import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/disclaimers")({
  head: () => ({
    meta: [
      { title: "Disclaimers & Affiliate Disclosure — ToptierProxy.com" },
      { name: "description", content: "Full affiliate disclosure, editorial independence statement, content accuracy policy and legal disclaimers for ToptierProxy.com — the independent proxy provider review site." },
      { property: "og:title", content: "Disclaimers & Affiliate Disclosure" },
      { property: "og:description", content: "How ToptierProxy.com handles affiliate links, editorial independence and content accuracy." },
    ],
  }),
  component: () => (
    <PageShell title="Disclaimers" intro="Affiliate disclosure, editorial-independence statement, content-accuracy policy and legal disclaimers — in plain English." breadcrumb={[{ to: "/", label: "Home" }, { to: "/disclaimers", label: "Disclaimers" }]}>
      <Prose>
        <h2>Affiliate disclosure (FTC compliant)</h2>
        <p>
          ToptierProxy.com participates in affiliate programs operated by some — not all — of the providers we cover.
          When you click an outbound link marked <code>rel="sponsored"</code> and subsequently sign up to a paid plan,
          we may earn a referral commission <strong>at no additional cost to you</strong>. The commission rate varies
          by provider and has no influence on our scoring or ranking. This disclosure complies with the U.S. FTC's
          Endorsement Guides (16 CFR Part 255), the UK CMA's hidden-advertising guidance and the EU's UCPD.
        </p>

        <h2>Editorial independence</h2>
        <p>
          Our editorial team operates independently of the commercial team. Affiliate relationships have no influence
          on our scoring, ranking or whether a provider appears in our reviews at all. Several top-ranked providers
          on{" "}
          <Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }}>our residential rankings</Link> and{" "}
          <Link to="/guides/$slug" params={{ slug: "best-mobile-proxies" }}>mobile rankings</Link> do not pay us a single cent.
          The full firewall is documented on{" "}
          <Link to="/why-trust-us">why trust us</Link> and{" "}
          <Link to="/how-we-test">how we test</Link>.
        </p>

        <h2>Content accuracy</h2>
        <p>
          Pricing, pool sizes, country coverage and feature availability change regularly — sometimes weekly.
          We re-verify pricing every 7 days and re-benchmark performance every 30 days, but you should always
          confirm current details on the provider's official website before purchasing. We accept no liability
          for purchase decisions made on the basis of out-of-date information; if you spot an error, email{" "}
          <a href="mailto:editor@toptierproxy.com">editor@toptierproxy.com</a> and we will publish a correction.
        </p>

        <h2>No legal advice</h2>
        <p>
          Articles on this site discuss the legality of web scraping, data collection and proxy use under various
          jurisdictions. <strong>This is not legal advice.</strong> Consult a qualified attorney in your jurisdiction
          before relying on any statement made on this site for a commercial decision.
        </p>

        <h2>No financial or investment advice</h2>
        <p>
          References to vendor funding, valuation, acquisitions or financial stability are provided for context only
          and do not constitute investment advice or a recommendation to buy, sell or hold any security.
        </p>

        <h2>Trademarks</h2>
        <p>
          All product and company names mentioned on this site are trademarks or registered trademarks of their
          respective owners. Use of these names does not imply endorsement.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Proxies are powerful infrastructure. You are solely responsible for complying with applicable laws,
          robots.txt, rate limits, copyright, GDPR, CCPA and the Terms of Service of any site you access.
          We do not condone the use of proxies for fraud, account abuse, credential stuffing, denial-of-service
          attacks or any activity that violates the Computer Fraud and Abuse Act or equivalent legislation
          in your jurisdiction.
        </p>

        <h2>Changes to this page</h2>
        <p>
          This disclaimer was last reviewed in April 2026 and is updated whenever our commercial or editorial
          policies change. Material changes are noted with a date stamp at the top of the page.
        </p>
      </Prose>
    </PageShell>
  ),
});
