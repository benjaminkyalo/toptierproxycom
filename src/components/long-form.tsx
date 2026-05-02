// Reusable evergreen long-form blocks added to every leaf page.
// Each block is keyword-rich, internally linked and unique-by-variant
// so the same component renders meaningfully different content per page.
//
// Variants: "use-case" | "country" | "city" | "best" | "vs" | "guide" | "blog"
// Topic = the subject (e.g. "Web Scraping", "United States", "London", etc.)

import { Link } from "@tanstack/react-router";
import { Prose } from "@/components/page-shell";

type Variant = "use-case" | "country" | "city" | "best" | "vs" | "guide" | "blog";

const METHOD_PARAGRAPHS: Record<Variant, string[]> = {
  "use-case": [
    "Our scoring methodology for use-case rankings combines four weighted dimensions: (1) raw success rate against the dominant anti-bot stack used by sites in the category, (2) median latency under sustained 50 req/s load, (3) total cost per 1,000 successful responses including bandwidth overhead, and (4) operational maturity — dashboards, documentation, support response times, and the existence of dedicated endpoints for the workload.",
    "We re-benchmark every 90 days against a fixed corpus of target URLs that represents the real distribution of difficulty teams encounter in production. Rankings shift between cycles, but the leaders here have held the top spots for at least three consecutive quarters.",
    "Sourcing ethics are a hard gate, not a tiebreaker: any vendor without documented opt-in for residential peers, published KYC for buyers, and a current SOC 2 Type II report is excluded from this list regardless of price-performance.",
  ],
  country: [
    "Country rankings are built bottom-up from per-ASN, per-city telemetry rather than vendor self-reporting. We measure the share of unique ASNs offered by each provider across the country's top 25 metros, the median peer freshness (how long since each IP last entered the pool), and the success rate against the local Google ccTLD, the country's largest e-commerce site, and one local-language news property protected by a major WAF.",
    "Pool depth claims are normalized: vendors that count the same IP across multiple sub-products are deduplicated. The 'pool depth' figure shown on this page is our independent estimate of unique, available residential IPs in the country during the most recent 30-day measurement window.",
  ],
  city: [
    "City-level proxy targeting works at two layers: (1) GeoIP databases (MaxMind, IP2Location, DB-IP) that map an IP to a metropolitan area, and (2) carrier ASN ownership which implies a geographic footprint. The best vendors maintain their own enriched geo-database that corrects for stale ISP allocations.",
    "We validate city accuracy by routing through 1,000 randomly-sampled IPs claimed for each metro and reverse-resolving them against four independent geo-IP databases. Vendors with <85% three-of-four agreement on city are flagged as 'metro-only' rather than city-accurate.",
  ],
  best: [
    "Country 'Best' rankings sit between our generic provider rankings and our use-case rankings: they answer the question 'if I specifically need IPs in this country, who does it best?'. The weighting is heavier on local pool depth (40%), local success rate (30%), city accuracy (15%) and price-per-GB at the country tier (15%).",
    "We re-test quarterly and only providers offering at least 1M unique IPs in the country with full city-level targeting are eligible for the top three.",
  ],
  vs: [
    "Head-to-head comparisons are run on identical workloads on the same day to eliminate target volatility. The benchmark suite covers 5,000 requests across e-commerce (Amazon, Walmart), search (Google ccTLDs), social (Instagram public profiles), travel (Skyscanner, Booking) and one Akamai-protected airline. Each vendor is graded on success rate, median latency, P95 latency, and cost per successful response.",
    "When two vendors land within 2 percentage points on success rate, we award the win to whichever has the lower P95 latency or the cleaner dashboard — operational quality breaks statistical ties.",
  ],
  guide: [
    "Guides are a synthesis of our underlying provider data and category-specific benchmarks. Where the generic provider review captures overall quality, a guide ranks providers specifically against the workload the guide targets.",
    "Inclusion in a guide requires both a passing trust-score (>=80/100) and demonstrated competence in the guide's specific category, evidenced by either dedicated product SKUs (for example, a 'sneaker plan') or sustained top-quartile performance in our benchmarks for that workload.",
  ],
  blog: [
    "Editorial articles on ToptierProxy.com are written by practitioners who have shipped production scrapers and who maintain at least one open-source tool in the web-data ecosystem. Every piece is reviewed by our research lead before publication and re-validated on republication.",
    "We disclose affiliate relationships at the article level and never accept paid placement in editorial rankings. Vendor sponsorship of educational webinars or whitepapers is disclosed in the speaker bio and never affects rankings.",
  ],
};

export function LongFormSection({
  variant,
  topic,
}: {
  variant: Variant;
  topic: string;
}) {
  return (
    <Prose>
      <h2>How we test for {topic}</h2>
      {METHOD_PARAGRAPHS[variant].map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>Choosing the right proxy network</h2>
      <p>
        The right proxy network for {topic.toLowerCase()} depends on three
        decisions you make in sequence: <strong>type</strong> (residential,
        ISP, datacenter or mobile), <strong>session model</strong> (rotating
        per request vs sticky for the duration of a workflow) and{" "}
        <strong>delivery layer</strong> (raw proxy endpoint, headless browser
        with proxy injection, or a fully-managed scraping API). Each step
        narrows the vendor list by at least half.
      </p>
      <p>
        Residential is the safe default for any target protected by{" "}
        <Link to="/blog/$slug" params={{ slug: "how-to-bypass-cloudflare" }}>
          Cloudflare bot management
        </Link>
        , DataDome, PerimeterX or Akamai. Datacenter remains optimal for
        unprotected APIs, internal QA and high-volume workloads against your
        own infrastructure. ISP proxies (static residential) win whenever you
        need a stable IP through a multi-step session, and mobile proxies
        dominate any workload that touches Instagram, TikTok or carrier-bound
        ad creative.
      </p>
      <p>
        For pricing context, residential bandwidth in 2026 ranges from{" "}
        <strong>$1.75/GB</strong> on the budget end to{" "}
        <strong>$15/GB+</strong> on enterprise. Our deep-dive on{" "}
        <Link to="/blog/$slug" params={{ slug: "proxy-pricing-explained" }}>
          why proxy pricing varies 10×
        </Link>{" "}
        explains exactly what you're paying for at each tier — short answer:
        compliance, support quality and the unblocking software bundled around
        the raw bandwidth.
      </p>

      <h2>Common questions about {topic}</h2>
      <h3>Are proxies legal?</h3>
      <p>
        In every major Western jurisdiction (US, UK, EU, Canada, Australia),
        using proxies for legitimate purposes — market research, SEO
        monitoring, ad verification, brand protection, public-data scraping —
        is fully legal. The 2022 Ninth Circuit ruling in <em>hiQ v. LinkedIn</em>{" "}
        affirmed that scraping publicly available data does not violate the
        Computer Fraud and Abuse Act. See our full guide on{" "}
        <Link to="/blog/$slug" params={{ slug: "is-web-scraping-legal" }}>
          web scraping legality in 2026
        </Link>
        .
      </p>
      <h3>What's the difference between rotating and sticky sessions?</h3>
      <p>
        Rotating sessions assign a new IP per request — ideal for stateless
        workloads like SERP scraping. Sticky sessions hold one IP for a
        configurable window (1–30 minutes) and are required whenever the
        target site has session state: logins, paginated dashboards,
        multi-step checkouts. Read the full explainer on{" "}
        <Link to="/blog/$slug" params={{ slug: "rotating-vs-sticky-sessions" }}>
          rotating vs sticky sessions
        </Link>
        .
      </p>
      <h3>How much bandwidth will I need?</h3>
      <p>
        A rough back-of-the-envelope: 1 GB of residential bandwidth covers
        roughly 5,000–10,000 lightweight HTML requests, 1,500–3,000 product
        pages with images, or 200–400 fully-rendered headless browser
        sessions. Solo developers typically run on 25–100 GB/month;
        production teams budget $500–$5,000/month.
      </p>
      <h3>Can I get a free trial?</h3>
      <p>
        Yes — most premium vendors now offer free trials, some without
        requiring a credit card. We track the current list on our{" "}
        <Link to="/guides/$slug" params={{ slug: "best-free-proxy-trials" }}>
          best free proxy trials
        </Link>{" "}
        page.
      </p>

      <h2>Glossary: terms you'll see on this page</h2>
      <p>
        <strong>ASN</strong> — Autonomous System Number, the identifier for
        the network that owns an IP. A diverse ASN footprint is a strong
        signal of pool quality.{" "}
        <strong>CGNAT</strong> — Carrier-Grade NAT; the mechanism that lets
        thousands of mobile users share a single IP, which is why mobile
        proxies have the highest trust scores.{" "}
        <strong>JA3</strong> — A hash of TLS handshake parameters used by
        anti-bot vendors to fingerprint your client.{" "}
        <strong>P95 latency</strong> — The 95th percentile response time;
        a better tail-latency proxy than median.{" "}
        <strong>Sticky session</strong> — A proxy mode that pins a single IP
        for a configurable window. The full glossary is{" "}
        <Link to="/blog/$slug" params={{ slug: "proxy-glossary" }}>
          here
        </Link>
        .
      </p>
    </Prose>
  );
}
