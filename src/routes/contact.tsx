import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ToptierProxy.com — Editorial, Partnerships, Affiliate & Press Inquiries" },
      { name: "description", content: "Contact the ToptierProxy.com team — editorial tips & corrections, affiliate & partnership deals, press requests, ethics disclosures, advertising and reader support. Response within 48 hours." },
      { property: "og:title", content: "Contact ToptierProxy.com — Get in Touch" },
      { property: "og:description", content: "Reach our editorial, partnership, press and reader-support teams. We answer every email within 48 business hours." },
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
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      title="Contact ToptierProxy.com"
      intro="Whether you're a reader with a question, a provider looking to partner, or a journalist on deadline — here's the fastest way to reach the right team. We respond to every email within 48 business hours."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/contact", label: "Contact" }]}
    >
      <Prose>
        <h2>How can we help you today?</h2>
        <p>
          ToptierProxy.com is read by data engineers, growth marketers, sneaker resellers, SEO agencies,
          QA teams and enterprise procurement managers in 190+ countries. The questions we receive every
          week are surprisingly consistent — so before you email, scan the most common ones below. You may
          find your answer in 10 seconds instead of waiting 48 hours.
        </p>

        <h2>📧 Email the right team directly</h2>
        <ul>
          <li><strong>Editorial tips, corrections & fact-checks:</strong> <a href="mailto:editor@toptierproxy.com">editor@toptierproxy.com</a></li>
          <li><strong>Affiliate, partnership & advertising:</strong> <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a></li>
          <li><strong>Press, interviews & analyst briefings:</strong> <a href="mailto:press@toptierproxy.com">press@toptierproxy.com</a></li>
          <li><strong>Reader support & buying advice:</strong> <a href="mailto:hello@toptierproxy.com">hello@toptierproxy.com</a></li>
          <li><strong>Privacy, GDPR & data requests:</strong> <a href="mailto:privacy@toptierproxy.com">privacy@toptierproxy.com</a></li>
          <li><strong>Security disclosure (responsible reporting):</strong> <a href="mailto:security@toptierproxy.com">security@toptierproxy.com</a></li>
        </ul>

        <h2>Frequently asked questions</h2>

        <h3>Which proxy provider should I actually buy?</h3>
        <p>
          It depends on your workload. For enterprise scraping with strict compliance, start with our{" "}
          <Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data review</Link> or{" "}
          <Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs review</Link>. For best price-to-performance,
          read the <Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo review</Link>. For non-expiring
          pay-as-you-go traffic, see <Link to="/reviews/$slug" params={{ slug: "iproyal" }}>IPRoyal</Link>. Hobbyists
          and devs on a budget should look at <Link to="/reviews/$slug" params={{ slug: "webshare" }}>Webshare</Link>.
        </p>

        <h3>What is the difference between residential, datacenter, ISP and mobile proxies?</h3>
        <p>
          A full breakdown lives in our <Link to="/guides/$slug" params={{ slug: "residential-vs-datacenter" }}>Residential vs Datacenter guide</Link>.
          Short version: residential = real home IPs (highest stealth), datacenter = cloud-hosted IPs (cheapest & fastest),
          ISP = static residential routed through a datacenter (best of both), mobile = 4G/5G carrier IPs (highest trust score).
        </p>

        <h3>Are the rankings on this site sponsored?</h3>
        <p>
          No. Rankings are produced by our independent test team using 225+ evaluation criteria across pool size,
          unblock success rate, latency, cost-per-successful-request and customer support response. Some outbound
          links are affiliate links — when you sign up via one of them we may earn a commission, at no extra cost
          to you. This never changes the order or content of our reviews. Read the full{" "}
          <Link to="/disclaimers">affiliate disclaimer</Link> and our{" "}
          <Link to="/how-we-test">how-we-test methodology</Link>.
        </p>

        <h3>I'm a provider — how do I get reviewed?</h3>
        <p>
          Email <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a> with a product overview,
          a test account (50 GB residential or equivalent), and your network sourcing documentation. We test every
          provider hands-on for at least 30 days before publishing. Editorial control remains 100% with our team —
          we cannot accept "approval rights" or "draft review" requests.
        </p>

        <h3>I'm being blocked by Cloudflare / DataDome / PerimeterX. Which proxy fixes this?</h3>
        <p>
          For Cloudflare-protected targets, residential or mobile rotating proxies paired with a real browser fingerprint
          (e.g. Bright Data Scraping Browser, Oxylabs Web Unlocker, Decodo Site Unblocker) usually work out of the box.
          See our <Link to="/use-cases/$slug" params={{ slug: "web-scraping" }}>web scraping use case</Link> and{" "}
          <Link to="/guides/$slug" params={{ slug: "best-scraping-apis" }}>best scraping APIs guide</Link>.
        </p>

        <h3>Are proxies legal?</h3>
        <p>
          Using proxies is legal in virtually every jurisdiction. What matters is <em>what</em> you do with them:
          scraping public data is legal in the US (hiQ Labs v. LinkedIn), but you must still respect robots.txt,
          rate limits, copyright, GDPR and the target site's Terms of Service. We are not lawyers — when in doubt,
          consult one in your jurisdiction.
        </p>

        <h3>Can I get a refund on a provider I bought through your link?</h3>
        <p>
          Refund policies are set by the provider, not by us. Most reputable vendors offer a 3- to 7-day money-back
          guarantee on residential plans. Email the provider's support first; if you've been ignored for more than
          5 business days, forward the thread to <a href="mailto:hello@toptierproxy.com">hello@toptierproxy.com</a>{" "}
          and we'll escalate through our partnership channel.
        </p>

        <h3>Do you offer custom procurement consulting for enterprise teams?</h3>
        <p>
          Yes — for teams spending $10k+/month on proxies, we run paid 60-minute vendor-selection consultations
          (network ethics, contract terms, multi-vendor failover design). Email{" "}
          <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a> with "Enterprise consult" in the subject.
        </p>

        <h2>Mailing address</h2>
        <p>
          ToptierProxy.com<br />
          Editorial Office<br />
          1209 Mountain Road Pl NE, Suite R<br />
          Albuquerque, NM 87110, United States
        </p>

        <h2>Response times</h2>
        <ul>
          <li>Editorial & reader support: within 48 business hours</li>
          <li>Partnerships & advertising: within 3 business days</li>
          <li>Press requests on deadline: same day if marked <code>[DEADLINE]</code> in the subject line</li>
          <li>Security disclosures: acknowledged within 24 hours</li>
        </ul>

        <h2>Stay in the loop</h2>
        <p>
          New reviews, benchmark refreshes and breaking proxy-industry news drop weekly on our{" "}
          <Link to="/blog">blog</Link>. Bookmark our{" "}
          <Link to="/reviews">reviews hub</Link>,{" "}
          <Link to="/countries">country guides</Link> and{" "}
          <Link to="/use-cases">use-case library</Link> — they're the same pages our own team uses on procurement calls.
        </p>
      </Prose>
    </PageShell>
  );
}
