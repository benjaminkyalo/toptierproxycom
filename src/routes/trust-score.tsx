import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/trust-score")({
  head: () => ({
    meta: [
      { title: "ToptierProxy Trust Score — How We Rate Provider Trust (0-100)" },
      { name: "description", content: "The ToptierProxy Trust Score (0-100) captures compliance, sourcing ethics, transparency, financial stability and customer outcomes for every major proxy provider. See the full methodology and current scores." },
      { property: "og:title", content: "ToptierProxy Trust Score Methodology" },
      { property: "og:description", content: "How we calculate the Trust Score (0-100) for every proxy provider." },
    ],
  }),
  component: () => (
    <PageShell title="Trust Score methodology" intro="A 0-100 score that captures compliance posture, sourcing ethics, transparency, financial stability and customer outcomes — referenced in enterprise RFPs worldwide." breadcrumb={[{ to: "/", label: "Home" }, { to: "/trust-score", label: "Trust Score" }]}>
      <Prose>
        <p>
          The ToptierProxy Trust Score (0-100) sits alongside our editorial star rating to capture trust signals
          that go beyond raw network performance. A vendor can have excellent benchmark numbers and still fail the
          Trust Score if its sourcing is opaque, its corporate structure is hidden, or its refund policy is hostile.
        </p>

        <h2>Components and weighting</h2>
        <ul>
          <li>
            <strong>Compliance (30 pts)</strong> — Active SOC 2 Type II, ISO 27001, ISO 27701 reports;
            documented GDPR / CCPA posture; published KYC program for buyers; data-processing agreements available on request.
          </li>
          <li>
            <strong>Sourcing transparency (25 pts)</strong> — How residential IPs are obtained and disclosed.
            Vendors that publish their SDK opt-in flow, peer compensation model and removal-on-request process score highest.
            See our deep-dive on <Link to="/blog/$slug" params={{ slug: "ethical-proxy-sourcing" }}>ethical residential sourcing</Link>.
          </li>
          <li>
            <strong>Corporate transparency (15 pts)</strong> — Public ownership, identifiable leadership team,
            verifiable jurisdiction of incorporation, and a real (non-virtual) operational HQ.
          </li>
          <li>
            <strong>Financial stability (15 pts)</strong> — Disclosed funding, profitability signals, time in market,
            employee count, and acquisition/IPO history. New entrants can still score well; opaque ones cannot.
          </li>
          <li>
            <strong>Customer outcomes (15 pts)</strong> — Independent reviews on Trustpilot, G2 and Capterra;
            dispute history with payment processors; published refund policy and historical refund-rate data.
          </li>
        </ul>

        <h2>Score bands</h2>
        <ul>
          <li><strong>90-100 (Exemplary)</strong> — Industry reference vendors. Safe for regulated workloads.</li>
          <li><strong>75-89 (Strong)</strong> — Suitable for production use at any scale. Minor gaps in disclosure.</li>
          <li><strong>60-74 (Acceptable)</strong> — Fine for non-regulated workloads. Procurement should ask follow-up questions.</li>
          <li><strong>40-59 (Caution)</strong> — Material gaps. Recommended only after a dedicated due-diligence call.</li>
          <li><strong>Below 40 (Avoid)</strong> — Excluded from our "best" rankings regardless of price-performance.</li>
        </ul>

        <h2>How the Trust Score interacts with star ratings</h2>
        <p>
          Star ratings reflect product quality. Trust Scores reflect institutional trust. A vendor can earn 5 stars
          on benchmarks and a 50/100 Trust Score — that combination tells you the product works, but you should treat
          procurement as a higher-risk decision. We display both side by side on every{" "}
          <Link to="/reviews">provider review</Link> so you can decide which dimension matters most for your use case.
        </p>

        <h2>Refresh cadence</h2>
        <p>
          Trust Scores are reviewed quarterly and updated whenever a vendor experiences a material event —
          a new SOC 2 report, a leadership change, a publicly disclosed incident, or a refund-policy change.
          We publish change logs so readers can see how scores have moved over time.
        </p>

        <h2>Vendor right of reply</h2>
        <p>
          Vendors are notified before any negative Trust Score change is published and given 10 business days to
          provide additional documentation. We adjust scores based on new evidence; we do not adjust them based on
          marketing arguments.
        </p>

        <h2>See it in action</h2>
        <ul>
          <li><Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data Trust Score</Link></li>
          <li><Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs Trust Score</Link></li>
          <li><Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo Trust Score</Link></li>
          <li><Link to="/how-we-test">Full testing methodology</Link></li>
        </ul>
      </Prose>
    </PageShell>
  ),
});
