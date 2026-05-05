import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ToptierProxy.com — Free Proxy Buying Advice, Support & Partnerships" },
      { name: "description", content: "Get free, unbiased help choosing a proxy provider. Talk to real proxy experts about scraping, sneaker bots, ad verification, SEO, geo-unblocking, Cloudflare bypass, refunds, GDPR, enterprise procurement and more. Reply within 48 hours." },
      { name: "keywords", content: "contact proxy expert, free proxy advice, proxy buying help, proxy support, which proxy should I buy, proxy refund help, proxy provider comparison" },
      { property: "og:title", content: "Contact ToptierProxy — Free Proxy Buying Help & Expert Support" },
      { property: "og:description", content: "Real humans answer real proxy questions in under 48 hours. Buying advice, technical troubleshooting, refunds, partnerships, press, GDPR." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact ToptierProxy.com",
          url: "https://toptierproxy.com/contact",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Which proxy provider should I buy?", acceptedAnswer: { "@type": "Answer", text: "It depends on workload. Bright Data and Oxylabs lead enterprise compliance, Decodo wins price-to-performance, IPRoyal is best for non-expiring traffic, Webshare is best for budget and beginners." } },
            { "@type": "Question", name: "Are proxies legal?", acceptedAnswer: { "@type": "Answer", text: "Yes — using proxies is legal in virtually every jurisdiction. What you do with them must still respect copyright, GDPR, robots.txt and target-site Terms of Service." } },
            { "@type": "Question", name: "How do I bypass Cloudflare with proxies?", acceptedAnswer: { "@type": "Answer", text: "Use rotating residential or mobile proxies paired with a real-browser fingerprint such as Bright Data Scraping Browser, Oxylabs Web Unlocker or Decodo Site Unblocker." } },
            { "@type": "Question", name: "Can I get a refund if a provider doesn't work?", acceptedAnswer: { "@type": "Answer", text: "Most reputable providers offer 3–7 day money-back guarantees on residential plans. Contact provider support first; we can escalate via partner channels if you are ignored." } },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      title="Contact ToptierProxy.com — Talk to a Real Proxy Expert"
      intro="Free, unbiased proxy buying advice from the team that tests every major provider hands-on. Whether you're picking your first proxy plan, debugging a scraper that just broke, comparing two enterprise vendors, or trying to get a refund — we've answered the same question hundreds of times. Email us and a real human replies within 48 hours."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/contact", label: "Contact" }]}
    >
      <Prose>
        <h2>Why thousands of buyers email us before they buy</h2>
        <p>
          Choosing a proxy provider is harder than it should be. Pricing pages hide per-GB costs behind
          enterprise-only quotes, "150M residential IPs" claims are rarely auditable, and the difference
          between a $1.50/GB and a $15/GB residential plan can be the difference between a successful
          scrape and a banned account. We've been independently testing proxy networks since 2019 — over
          <strong> 9 million data professionals, growth marketers, sneaker resellers, SEO agencies and
          enterprise procurement teams</strong> have used our reviews to make a decision. When the FAQ
          isn't enough, this page is how you reach us directly.
        </p>

        <h2>📧 Email the right team — replies within 48 hours</h2>
        <ul>
          <li><strong>Free buying advice & "which proxy should I pick?"</strong> — <a href="mailto:hello@toptierproxy.com">hello@toptierproxy.com</a></li>
          <li><strong>Editorial tips, corrections, fact-checks & data disputes</strong> — <a href="mailto:editor@toptierproxy.com">editor@toptierproxy.com</a></li>
          <li><strong>Affiliate, partnership, sponsorship & advertising</strong> — <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a></li>
          <li><strong>Press, interviews, podcast & analyst briefings</strong> — <a href="mailto:press@toptierproxy.com">press@toptierproxy.com</a></li>
          <li><strong>Privacy, GDPR, CCPA & data subject requests</strong> — <a href="mailto:privacy@toptierproxy.com">privacy@toptierproxy.com</a></li>
          <li><strong>Responsible security disclosure</strong> — <a href="mailto:security@toptierproxy.com">security@toptierproxy.com</a></li>
          <li><strong>Enterprise procurement consults ($10k+/mo proxy spend)</strong> — <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a> with subject "Enterprise consult"</li>
        </ul>

        <h2>Most-asked questions — solved in 60 seconds</h2>

        <h3>1. "Which proxy provider should I actually buy?"</h3>
        <p>
          The honest answer depends on three things: your <em>target site</em>, your <em>monthly traffic
          volume</em>, and your <em>budget tolerance</em>. Quick decision tree:
        </p>
        <ul>
          <li><strong>Enterprise scraping with strict compliance / SOC 2 required</strong> → <Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data</Link> or <Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs</Link></li>
          <li><strong>Best price-to-performance for mid-size scraping (10–500 GB/mo)</strong> → <Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo</Link> or <Link to="/reviews/$slug" params={{ slug: "smartproxy" }}>Smartproxy</Link></li>
          <li><strong>Pay-as-you-go, traffic that never expires</strong> → <Link to="/reviews/$slug" params={{ slug: "iproyal" }}>IPRoyal</Link></li>
          <li><strong>Sneaker copping, ticketing, releases</strong> → <Link to="/use-cases/$slug" params={{ slug: "sneaker-copping" }}>Sneaker proxies guide</Link> (IPRoyal, Bright Data ISP, Live Proxies)</li>
          <li><strong>Beginners, hobbyists, low-volume use under $20/mo</strong> → <Link to="/reviews/$slug" params={{ slug: "webshare" }}>Webshare</Link></li>
          <li><strong>Geo-unlocking streaming or testing localized SERPs</strong> → see our <Link to="/countries">country-by-country guides</Link></li>
        </ul>

        <h3>2. "Residential vs Datacenter vs ISP vs Mobile — which one do I need?"</h3>
        <ul>
          <li><strong>Residential</strong>: real home IPs from ISP-assigned pools — highest stealth, best for protected sites (Amazon, Google, Instagram, Cloudflare-fronted targets). Costs $1.5–$15 per GB.</li>
          <li><strong>Datacenter</strong>: cloud-hosted IPs — cheapest and fastest, great for unprotected APIs, internal monitoring, SEO rank tracking on Google (in many regions). $0.20–$2 per IP/month.</li>
          <li><strong>ISP (static residential)</strong>: residential IPs hosted in datacenters — speed of datacenter + trust of residential. Best for long-lived sessions, sneaker copping, account farming.</li>
          <li><strong>Mobile (4G/5G)</strong>: carrier-assigned IPs shared across thousands of real devices — highest trust score, almost never blocked. Most expensive ($5–$30 per GB).</li>
        </ul>
        <p>Read the full breakdown in our <Link to="/blog/$slug" params={{ slug: "datacenter-vs-residential-proxies" }}>residential vs datacenter guide</Link>.</p>

        <h3>3. "I'm being blocked by Cloudflare / DataDome / PerimeterX / Akamai"</h3>
        <p>
          Plain rotating residential proxies are rarely enough against modern WAFs. You also need a
          real-browser TLS/JA3 fingerprint, JavaScript execution, and human-like timing. The fastest
          fixes:
        </p>
        <ul>
          <li>Bright Data <em>Scraping Browser</em> or <em>Web Unlocker</em></li>
          <li>Oxylabs <em>Web Unlocker</em> or <em>Scraper APIs</em></li>
          <li>Decodo <em>Site Unblocker</em></li>
          <li>For DIY: residential rotating + <Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>headless browser stack</Link> (Playwright + curl_cffi + JA3 spoofing)</li>
        </ul>
        <p>Background: <Link to="/use-cases/$slug" params={{ slug: "web-scraping" }}>web scraping use case</Link> · <Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>best scraping APIs</Link>.</p>

        <h3>4. "Are proxies legal?"</h3>
        <p>
          Using proxies is legal in virtually every jurisdiction including the US, UK, EU, Canada,
          Australia and most of Asia. The leading US case (<em>hiQ Labs v. LinkedIn</em>) confirmed that
          scraping <strong>publicly available</strong> data does not violate the Computer Fraud and Abuse
          Act. What you do <em>with</em> proxies must still respect copyright law, the GDPR/CCPA when
          personal data is involved, the target site's Terms of Service when you have an account, and
          any rate limits. We are not lawyers — for borderline cases (price intelligence on logged-in
          B2B SaaS, scraping behind paywalls, reselling competitor data) consult counsel in your
          jurisdiction.
        </p>

        <h3>5. "Can I get a refund? The provider isn't working for my site."</h3>
        <p>
          Almost every reputable provider offers a money-back window — typically 3 days for residential
          and 7 days for datacenter. Email the provider's support first with a clear test transcript
          (URL, request count, error rate). If you've been ghosted for more than 5 business days,
          forward the entire thread to <a href="mailto:hello@toptierproxy.com">hello@toptierproxy.com</a>
          and we'll escalate through our partner manager channel. We've recovered six-figures in refunds
          for readers who got stonewalled by sales reps.
        </p>

        <h3>6. "How much do proxies cost in 2026?"</h3>
        <ul>
          <li>Datacenter shared: $0.50 – $2 per IP/month</li>
          <li>Datacenter dedicated: $1 – $5 per IP/month</li>
          <li>Residential rotating (entry): $3 – $8 per GB at 50–100 GB/mo</li>
          <li>Residential rotating (enterprise, 1 TB+): $1.50 – $4 per GB</li>
          <li>ISP static: $1.50 – $5 per IP/month</li>
          <li>Mobile rotating: $6 – $25 per GB</li>
          <li>Web Unlocker / scraper API: $1.50 – $8 per 1,000 successful requests</li>
        </ul>
        <p>For up-to-date numbers across every provider, see our <Link to="/compare">side-by-side comparison</Link>.</p>

        <h3>7. "Are the rankings on this site sponsored?"</h3>
        <p>
          No. Rankings come from our independent test team using 225+ criteria — pool size audits,
          unblock success on the top 100 protected domains, latency P50/P95, cost-per-successful-request,
          support response time, and ethics audits of network sourcing. Some outbound links are
          affiliate links and we may earn a commission at no extra cost to you. <strong>This never
          changes the order or content of our reviews.</strong> See <Link to="/disclaimers">disclaimers</Link>,
          <Link to="/how-we-test">how we test</Link>, and <Link to="/why-trust-us">why trust us</Link>.
        </p>

        <h3>8. "I'm a provider — how do I get reviewed?"</h3>
        <p>
          Email <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a> with: a product
          one-pager, a test account (50 GB residential or equivalent), and your network sourcing
          documentation (consent flows, opt-in mechanism, KYC for end users). We test every provider
          hands-on for at least 30 days before publishing. We do not accept "approval rights" or
          "pre-publication review" requests — editorial control stays with our team.
        </p>

        <h3>9. "Do you do custom enterprise procurement?"</h3>
        <p>
          Yes — for teams spending $10k+/month on proxies we run paid 60-minute consultations covering
          network ethics due diligence, contract terms (egress fees, IP-substitution clauses, SLA
          credits, indemnification), multi-vendor failover architecture, and a written vendor
          recommendation. Email "Enterprise consult" in the subject.
        </p>

        <h3>10. "Help me debug — my scraper worked yesterday and broke today"</h3>
        <p>Send us:</p>
        <ul>
          <li>Target URL (or a redacted version)</li>
          <li>HTTP status / error code returned</li>
          <li>Provider, plan and proxy type (residential/datacenter/ISP/mobile)</li>
          <li>Sample headers and JA3/TLS fingerprint if you have it</li>
          <li>Request volume in the last 24h</li>
        </ul>
        <p>Most "sudden block" cases are one of: target rolled out a new fingerprint check, your sticky session expired, you're cycling IPs too fast (rate-limited per-IP), or your provider rotated a sub-pool that's burned.</p>

        <h2>Helpful starting points (skip the email, find your answer faster)</h2>
        <ul>
          <li>📖 <Link to="/reviews">Every proxy review we've published</Link></li>
          <li>🌍 <Link to="/countries">Best proxies by country (30+ guides)</Link></li>
          <li>🛠️ <Link to="/use-cases">Use-case library — scraping, SEO, sneakers, ad verification, brand protection</Link></li>
          <li>📚 <Link to="/guides">Long-form buyer guides for 2026</Link></li>
          <li>⚖️ <Link to="/compare">Side-by-side provider comparison</Link></li>
          <li>📰 <Link to="/blog">Blog — weekly industry analysis & tutorials</Link></li>
          <li>🔬 <Link to="/how-we-test">Our 225-point testing methodology</Link></li>
          <li>🛡️ <Link to="/trust-score">How the ToptierProxy Trust Score works</Link></li>
          <li>👥 <Link to="/about">About our team</Link> · <Link to="/why-trust-us">Why trust us</Link></li>
          <li>📄 <Link to="/disclaimers">Affiliate disclaimer</Link> · <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></li>
        </ul>

        <h2>Mailing address</h2>
        <p>
          ToptierProxy Media Group LLC<br />
          Editorial Office<br />
          1209 Mountain Road Pl NE, Suite R<br />
          Albuquerque, NM 87110, United States
        </p>

        <h2>Response times you can rely on</h2>
        <ul>
          <li>Reader buying advice & support — within 48 business hours</li>
          <li>Editorial tips & corrections — within 48 business hours</li>
          <li>Partnerships, advertising, sponsorship — within 3 business days</li>
          <li>Press on deadline (mark <code>[DEADLINE]</code> in subject) — same day</li>
          <li>Security disclosures — acknowledged within 24 hours</li>
          <li>GDPR / CCPA data requests — fulfilled within 30 days as required by law</li>
        </ul>

        <h2>Stay in the loop</h2>
        <p>
          New reviews, refreshed benchmarks and breaking proxy-industry news drop weekly on our{" "}
          <Link to="/blog">blog</Link>. Bookmark <Link to="/reviews">reviews</Link>,{" "}
          <Link to="/countries">country guides</Link>, <Link to="/use-cases">use-cases</Link> and{" "}
          <Link to="/guides">guides</Link> — they're the same pages our team uses on procurement calls.
        </p>
      </Prose>
    </PageShell>
  );
}
