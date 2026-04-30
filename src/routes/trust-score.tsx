import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/trust-score")({
  head: () => ({
    meta: [
      { title: "Trust Score Methodology — How ToptierProxy.com Rates Providers" },
      { name: "description", content: "Learn how the ToptierProxy.com Trust Score is calculated — compliance, sourcing, transparency, financial stability and customer outcomes." },
      { property: "og:title", content: "Trust Score Methodology" },
      { property: "og:description", content: "How we calculate the ToptierProxy Trust Score (0-100)." },
    ],
  }),
  component: () => (
    <PageShell title="Trust Score methodology" intro="A 0-100 score that captures compliance posture, sourcing ethics, transparency, financial stability and customer outcomes." breadcrumb={[{ to: "/", label: "Home" }, { to: "/trust-score", label: "Trust Score" }]}>
      <Prose>
        <p>The ToptierProxy Trust Score (0-100) sits alongside our editorial star rating to capture trust signals that go beyond network performance.</p>
        <h2>Components</h2>
        <ul>
          <li><strong>Compliance (30 pts)</strong> — SOC 2, ISO 27001, GDPR posture, KYC programs.</li>
          <li><strong>Sourcing transparency (25 pts)</strong> — How residential IPs are obtained and disclosed.</li>
          <li><strong>Corporate transparency (15 pts)</strong> — Public ownership, leadership team, jurisdiction.</li>
          <li><strong>Financial stability (15 pts)</strong> — Funding, profitability signals, time in market.</li>
          <li><strong>Customer outcomes (15 pts)</strong> — Independent reviews, dispute history, refund policy.</li>
        </ul>
      </Prose>
    </PageShell>
  ),
});
