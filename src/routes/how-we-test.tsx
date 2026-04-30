import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/how-we-test")({
  head: () => ({
    meta: [
      { title: "How We Test Proxy Providers — ToptierProxy.com Methodology" },
      { name: "description", content: "Our full proxy testing methodology — 225+ criteria across network quality, pricing, geographic coverage and anti-bot success rates." },
      { property: "og:title", content: "How We Test Proxy Providers" },
      { property: "og:description", content: "225+ criteria, hands-on benchmarks, monthly re-tests." },
    ],
  }),
  component: () => (
    <PageShell title="How we test" intro="Our full methodology for evaluating proxy providers — 225+ criteria, monthly re-benchmarks, and identical workloads across vendors." breadcrumb={[{ to: "/", label: "Home" }, { to: "/how-we-test", label: "How We Test" }]}>
      <Prose>
        <h2>1. Network quality</h2>
        <p>We measure pool size (verified, not quoted), ASN diversity, country coverage, sticky session stability and average IP age. Pools are sampled with 50,000-IP draws per provider per month.</p>
        <h2>2. Anti-bot success rates</h2>
        <p>Every provider runs the same 10,000-request workload against Cloudflare, DataDome, PerimeterX and Akamai-protected reference targets. Success rate is the percentage of requests returning a non-blocked HTTP 200.</p>
        <h2>3. Latency &amp; reliability</h2>
        <p>Median, p95 and p99 response times are measured from US-East, US-West, EU-Central and APAC vantage points. Failed requests count toward the latency budget.</p>
        <h2>4. Pricing &amp; total cost of ownership</h2>
        <p>We compute cost per successful request — not just per GB — so providers with higher block rates are appropriately penalized.</p>
        <h2>5. Compliance &amp; ethics</h2>
        <p>Sourcing methodology, KYC programs, certification status (SOC 2, ISO 27001) and member status in the Ethical Web Data Collection Initiative are all factored in.</p>
        <h2>6. Dashboard &amp; developer experience</h2>
        <p>Time-to-first-request, documentation quality, API design, support response time and billing clarity are assessed against a published rubric.</p>
      </Prose>
    </PageShell>
  ),
});
