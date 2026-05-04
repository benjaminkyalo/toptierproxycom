import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/why-trust-us")({
  head: () => ({
    meta: [
      { title: "Why Trust ToptierProxy.com — Editorial Independence Explained" },
      { name: "description", content: "Why ToptierProxy.com is the most-trusted source for proxy provider reviews. Editorial independence, hands-on testing, transparent methodology, and a track record of calling out the industry's worst practices since 2020." },
      { property: "og:title", content: "Why Trust ToptierProxy.com" },
      { property: "og:description", content: "Editorial independence, hands-on testing, and a six-year track record." },
    ],
  }),
  component: () => (
    <PageShell title="Why trust ToptierProxy.com" intro="Editorial independence, hands-on testing, and a methodology refined over 6 years and 35+ vendors — the same rubric used by Fortune 500 procurement teams." breadcrumb={[{ to: "/", label: "Home" }, { to: "/why-trust-us", label: "Why Trust Us" }]}>
      <Prose>
        <h2>Hands-on, not handed-down</h2>
        <p>
          Every provider we cover is tested by a member of our team using a paid account — not a vendor-supplied trial.
          We sign up like any other customer, run identical benchmark workloads, and document what we find. When a vendor
          refuses to sell us a paid plan (it has happened), we publicly note it on the review page.
        </p>

        <h2>225+ data points per review</h2>
        <p>
          Our scoring rubric covers pool size, ASN diversity, geographic depth, success rates against major anti-bot vendors
          (Cloudflare, DataDome, PerimeterX, Akamai, Imperva, Kasada), latency from four global regions, dashboard UX,
          documentation, support response time, billing transparency and ethical sourcing. Read the full breakdown on{" "}
          <Link to="/how-we-test">our methodology page</Link>.
        </p>

        <h2>No "sponsored top spots"</h2>
        <p>
          We do not sell editorial placement. Commercial relationships exist — affiliate commissions support the site —
          but they have <strong>zero influence on rankings</strong>. Several of our top 5 providers in{" "}
          <Link to="/guides/$slug" params={{ slug: "best-residential-proxies" }}>best residential proxies</Link> pay
          below-average commissions. If we ranked by payout, you'd see a very different list.
        </p>

        <h2>Updated continuously</h2>
        <p>
          Proxy networks change weekly. We re-benchmark our top 12 providers every 30 days and publish the results.
          Older reviews are date-stamped and refreshed at least every quarter. Our{" "}
          <Link to="/blog">blog</Link> documents network shifts, ASN deprecations and new product launches in real time.
        </p>

        <h2>A track record of calling things out</h2>
        <p>
          When a major provider had an undisclosed network breach in 2023, we covered it before any other industry publication.
          When a "free" proxy app was discovered to be installing residential SDKs without informed consent, we removed every
          provider from our rankings that sourced bandwidth from it — and we named names. Readers come to us because we tell
          them what other review sites won't.
        </p>

        <h2>Used by procurement teams at scale</h2>
        <p>
          Our enterprise readers include data and security leadership at Fortune 500 retailers, top-10 ad-verification vendors,
          AAA gaming studios running anti-cheat infrastructure, and several of the largest SEO platforms in the world.
          Our{" "}
          <Link to="/trust-score">Trust Score</Link> is referenced in vendor RFPs at companies you've heard of.
        </p>

        <h2>Editorial firewall</h2>
        <p>
          Our commercial team — the people who manage affiliate relationships — has zero visibility into benchmark results
          until publication. The two functions are siloed in separate systems with separate access controls. This is the
          simplest, hardest-to-corrupt firewall we know how to build.
        </p>

        <h2>Where to start</h2>
        <ul>
          <li><Link to="/how-we-test">Read the full testing methodology</Link></li>
          <li><Link to="/trust-score">Understand the Trust Score</Link></li>
          <li><Link to="/disclaimers">Read our affiliate disclaimer</Link></li>
          <li><Link to="/about">Learn about the team behind ToptierProxy.com</Link></li>
        </ul>
      </Prose>
    </PageShell>
  ),
});
