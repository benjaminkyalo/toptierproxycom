import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/how-we-test")({
  head: () => ({
    meta: [
      { title: "How We Test Proxy Providers — 225+ Criteria | ToptierProxy.com" },
      { name: "description", content: "Our full proxy testing methodology — 225+ evaluation criteria, monthly re-benchmarks, identical workloads against Cloudflare, DataDome, PerimeterX and Akamai. See exactly how we score every provider." },
      { property: "og:title", content: "How We Test Proxy Providers — Full Methodology" },
      { property: "og:description", content: "225+ criteria, hands-on benchmarks, monthly re-tests across every major provider." },
    ],
  }),
  component: () => (
    <PageShell title="How we test proxy providers" intro="Our full methodology for evaluating proxy providers — 225+ criteria, monthly re-benchmarks, and identical workloads across every vendor in the market." breadcrumb={[{ to: "/", label: "Home" }, { to: "/how-we-test", label: "How We Test" }]}>
      <Prose>
        <p>
          Most "top proxy" lists on Google rank vendors by affiliate payout. We rank by data. This page documents
          exactly how we score every provider in our database — the same rubric we use to update our{" "}
          <Link to="/reviews">reviews hub</Link>, our{" "}
          <Link to="/guides">buying guides</Link>, and our{" "}
          <Link to="/countries">country-by-country</Link> recommendations.
        </p>

        <h2>1. Network quality (35% of total score)</h2>
        <p>
          We measure pool size (verified via 50,000-IP draws per provider per month, not quoted from marketing pages),
          ASN diversity, country coverage, sticky session stability, peer freshness (median time since each IP last entered
          the pool) and average IP age. Vendors that count the same IP across multiple sub-products are deduplicated.
          Our pool-depth figures are independent estimates, not vendor self-reporting.
        </p>

        <h2>2. Anti-bot success rates (25%)</h2>
        <p>
          Every provider runs an identical 10,000-request workload against:
        </p>
        <ul>
          <li><strong>Cloudflare</strong>-protected references (Turnstile, Bot Management, JS challenges)</li>
          <li><strong>DataDome</strong>-protected e-commerce and ticketing targets</li>
          <li><strong>PerimeterX / HUMAN</strong>-protected travel and retail sites</li>
          <li><strong>Akamai Bot Manager</strong>-protected airline and banking pages</li>
          <li><strong>Imperva, Kasada and Shape Security</strong>-protected fintech endpoints</li>
        </ul>
        <p>
          Success is defined as a non-blocked HTTP 200 with valid HTML. CAPTCHA challenges, 403s, 429s and silent
          honeypots all count as failures. See our category pages on{" "}
          <Link to="/use-cases/$slug" params={{ slug: "web-scraping" }}>web scraping</Link> and{" "}
          <Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>scraping APIs</Link> for category-specific results.
        </p>

        <h2>3. Latency &amp; reliability (15%)</h2>
        <p>
          Median, P95 and P99 response times are measured from US-East (N. Virginia), US-West (Oregon),
          EU-Central (Frankfurt) and APAC (Singapore) vantage points. Failed requests are counted toward the
          latency budget — vendors cannot game the metric by silently dropping slow responses.
        </p>

        <h2>4. Pricing &amp; total cost of ownership (10%)</h2>
        <p>
          We compute <strong>cost per 1,000 successful responses</strong> — not just dollars per GB —
          so providers with high block rates are appropriately penalized. We also model
          tiered-discount break-even points and document hidden fees: overage rates, port concurrency caps,
          minimum commitments, and SKU-fragmentation (vendors who quote one price but require multiple SKUs
          to actually achieve the advertised functionality).
        </p>

        <h2>5. Compliance &amp; ethics (10%)</h2>
        <p>
          Sourcing methodology, KYC programs, certification status (SOC 2 Type II, ISO 27001, ISO 27701),
          GDPR posture and membership in the Ethical Web Data Collection Initiative are all factored in.
          Vendors without documented opt-in for residential peers are excluded from any "best" ranking
          regardless of price-performance.
        </p>

        <h2>6. Dashboard &amp; developer experience (5%)</h2>
        <p>
          Time-to-first-request, documentation depth, code-sample quality (Python, Node, Go, Ruby),
          API design, support response time across email/chat/Slack, and billing clarity are all assessed
          against a published rubric.
        </p>

        <h2>Our test infrastructure</h2>
        <p>
          We run our benchmarks on a dedicated cluster of 24 EC2 instances (6 per region) using
          our open-source benchmark harness. Each test cycle generates ~3 million requests across
          all providers in approximately 36 hours. Raw logs are retained for 24 months and made available
          to vendors on request to verify results.
        </p>

        <h2>Re-test cadence</h2>
        <ul>
          <li><strong>Top 12 providers:</strong> full re-benchmark every 30 days.</li>
          <li><strong>Long-tail providers:</strong> re-benchmarked every 90 days.</li>
          <li><strong>Country pages:</strong> per-country sampling every 60 days.</li>
          <li><strong>Pricing:</strong> verified weekly via vendor dashboards.</li>
        </ul>

        <h2>What we deliberately do NOT test</h2>
        <p>
          We do not run benchmarks against private targets, gated APIs, paywalled content, or any site
          whose Terms of Service prohibit automated traffic. We do not test against domains that route
          to consumer banking, healthcare or other regulated infrastructure. Every reference target in
          our suite is publicly accessible and chosen specifically because automated traffic is permitted
          or commercially routine.
        </p>

        <h2>Editorial firewall</h2>
        <p>
          Our commercial team — the people who manage affiliate relationships — has zero visibility into
          benchmark results until publication. The two functions are siloed in separate systems with
          separate access controls. This is the simplest, hardest-to-corrupt firewall we know how to build.
        </p>

        <h2>Frequently asked questions</h2>
        <h3>Can a provider pay you to be ranked higher?</h3>
        <p>No. We do not sell editorial placement. Several of our top 5 providers pay below-average commissions.</p>
        <h3>Do you accept vendor-supplied test accounts?</h3>
        <p>No. We sign up like any other paying customer. Vendor accounts are configured for promotional success and would distort results.</p>
        <h3>How do you handle provider disputes?</h3>
        <p>We publish the dispute and our raw logs side by side. Readers can audit our evidence themselves.</p>
        <h3>Where can I see the raw scoring rubric?</h3>
        <p>The full 225-criterion rubric is available on request to enterprise readers — email <a href="mailto:editor@toptierproxy.com">editor@toptierproxy.com</a>.</p>
      </Prose>
    </PageShell>
  ),
});
