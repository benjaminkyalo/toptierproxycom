import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { PromoBanner } from "@/components/promo-banner";
import { SiteFooter } from "@/components/site-footer";
import { ContextualLinkHub } from "@/components/related-links";
import { ProviderLogo } from "@/components/provider-logo";

export const Route = createFileRoute("/sponsors")({
  head: () => {
    const title = "Become a Sponsor — Reach Proxy & Web Scraping Buyers";
    const description =
      "Sponsor ToptierProxy and put your product in front of developers, data teams and proxy buyers. Sidebar, newsletter and bundle placements from $29 — limited slots.";
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.toptierproxy.com/sponsors" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: "https://www.toptierproxy.com/sponsors" }],
    };
  },
  component: SponsorsPage,
});

const benefits = [
  "Featured on our homepage sidebar.",
  "Visible on every provider and blog page.",
  "Reach a dedicated audience of developers, data teams and tech buyers.",
  "Direct link to your website.",
];

const sidebarPlans = [
  {
    name: "1 Month",
    price: "$29",
    unit: "/ 1 month",
    blurb: "Ideal for short-term campaigns or specific announcements.",
    perk: "1 month of visibility",
    cta: "Sponsor for a month",
    best: false,
  },
  {
    name: "3 Months",
    price: "$59",
    unit: "/ 3 months",
    blurb: "Maximize exposure with sustained visibility and best value.",
    perk: "3 months of visibility",
    cta: "Sponsor for 3 Months",
    best: true,
  },
  {
    name: "12 Months",
    price: "$199",
    unit: "/ 1 year",
    blurb: "Secure long-term visibility with our most cost-effective annual plan.",
    perk: "1 year of visibility",
    cta: "Sponsor for a Year",
    best: false,
  },
];

const activeSponsors = [
  { name: "Thordata", slug: "thordata", slot: "sidebar" },
  { name: "Proxy-Seller", slug: "proxy-seller", slot: "sidebar" },
  { name: "Live Proxies", slug: "live-proxies", slot: "sidebar" },
];

const inlineLink =
  "font-semibold text-primary underline underline-offset-2 hover:text-brand-blue-hover";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How do I send product info?",
    a: (
      <>
        After the payment is successful, you will receive an email collecting your logo, destination
        URL and a short description (if you do not receive it, please check your spam folder). You can
        also send everything through our{" "}
        <Link to="/contact" className={inlineLink}>
          contact page
        </Link>{" "}
        and reference your sponsorship.
      </>
    ),
  },
  {
    q: "How quickly will my sponsorship go live?",
    a: (
      <>
        Most placements go live within 24 hours of us receiving your assets. Newsletter placements go
        live in the next scheduled issue. Need a specific launch date? Tell us on the{" "}
        <Link to="/contact" className={inlineLink}>
          contact page
        </Link>{" "}
        and we will hold the slot.
      </>
    ),
  },
  {
    q: "What do I need to provide?",
    a: "A square logo (PNG or SVG, transparent background preferred), your destination URL and a one-line description of up to 90 characters.",
  },
  {
    q: "Where exactly will my logo appear?",
    a: (
      <>
        Sidebar sponsors appear in the homepage sidebar and on every provider review and article page
        — for example our{" "}
        <Link to="/reviews" className={inlineLink}>
          provider reviews
        </Link>
        ,{" "}
        <Link to="/compare" className={inlineLink}>
          comparison hub
        </Link>{" "}
        and{" "}
        <Link to="/blog" className={inlineLink}>
          blog articles
        </Link>
        , directly above the related links block.
      </>
    ),
  },
  {
    q: "How many issues are included in the newsletter plan?",
    a: "The newsletter plan covers every issue published in your sponsored month — typically four weekly issues, each sent to roughly 10,000 subscribers.",
  },
  {
    q: "What kind of traffic and audience will I reach?",
    a: (
      <>
        Developers, data teams, SEO agencies and proxy buyers researching pricing and performance.
        Most of them arrive through our{" "}
        <Link to="/proxy-benchmark-report" className={inlineLink}>
          independent benchmark report
        </Link>{" "}
        and{" "}
        <Link to="/how-we-test" className={inlineLink}>
          testing methodology
        </Link>
        .
      </>
    ),
  },
  {
    q: "Are sponsorships the same as reviews or rankings?",
    a: (
      <>
        No. Sponsorships are clearly labelled placements and never change scores or ordering — see our{" "}
        <Link to="/why-trust-us" className={inlineLink}>
          editorial independence policy
        </Link>{" "}
        and{" "}
        <Link to="/disclaimers" className={inlineLink}>
          disclaimers
        </Link>
        .
      </>
    ),
  },
  {
    q: "Which payment methods do you accept, and can I get an invoice?",
    a: (
      <>
        Card and bank transfer, with a VAT-ready invoice issued for every placement. All plans are
        one-time payments, not subscriptions. Request an invoice or a purchase order via the{" "}
        <Link to="/contact" className={inlineLink}>
          contact page
        </Link>
        .
      </>
    ),
  },
  {
    q: "Can I cancel, pause or swap my creative mid-flight?",
    a: (
      <>
        You can swap your logo, link or copy at any time at no cost. Placements are non-refundable
        once live, but unused months can be paused and resumed within 12 months — just{" "}
        <Link to="/contact" className={inlineLink}>
          message us
        </Link>
        .
      </>
    ),
  },
];

function SponsorsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <SiteHeader />
        <PromoBanner />
      </div>

      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14">
          {/* Hero */}
          <header className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Become a Sponsor
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Support ToptierProxy and gain visibility. Limited sponsorship slots for maximum impact.
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">Currently, 1 slot is available!</p>
          </header>

          {/* Body */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* Sidebar plans */}
            <section className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
              <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
                Sidebar Plans
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
                Choose the plan that fits your budget. These are one-time payments, not a recurring
                subscription.
              </p>

              <div className="mt-8 rounded-lg border border-border p-6">
                <h3 className="text-center text-lg font-bold text-foreground">
                  Key Benefits &amp; Audience Reach
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-primary p-0.5 text-primary-foreground" />
                      <span>{b}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-primary p-0.5 text-primary-foreground" />
                    <span>
                      <strong>18,400</strong> Unique Visitors{" "}
                      <span className="text-muted-foreground">(last 30 days)</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-primary p-0.5 text-primary-foreground" />
                    <span>
                      <strong>46,900</strong> Page Views{" "}
                      <span className="text-muted-foreground">(last 30 days)</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {sidebarPlans.map((p) => (
                  <div
                    key={p.name}
                    className={`relative flex flex-col rounded-lg border p-5 text-center ${
                      p.best ? "border-primary shadow-card-hover" : "border-border"
                    }`}
                  >
                    {p.best && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Best Value
                      </span>
                    )}
                    <p
                      className={`text-lg font-bold ${p.best ? "text-primary" : "text-foreground"}`}
                    >
                      {p.name}
                    </p>
                    <p className="mt-2">
                      <span
                        className={`text-3xl font-extrabold ${p.best ? "text-primary" : "text-foreground"}`}
                      >
                        {p.price}
                      </span>{" "}
                      <span className="text-sm text-muted-foreground">{p.unit}</span>
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.blurb}</p>
                    <p className="mt-4 flex items-center justify-center gap-2 text-xs text-foreground/85">
                      <Check className="h-3.5 w-3.5 shrink-0 rounded-full bg-muted p-0.5 text-foreground" />
                      {p.perk}
                    </p>
                    <button
                      type="button"
                      className={`mt-5 inline-flex h-10 w-full items-center justify-center rounded-md border px-3 text-xs font-bold transition-colors ${
                        p.best
                          ? "border-primary bg-primary text-primary-foreground hover:bg-brand-blue-hover"
                          : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {p.cta}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Right rail */}
            <aside className="space-y-6">
              <div className="rounded-lg border border-border bg-muted/30 p-5">
                <h2 className="text-center text-base font-bold text-foreground">Active Sponsors</h2>
                <div className="mt-4 space-y-3">
                  {activeSponsors.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-3 rounded-md border border-border bg-card p-3"
                    >
                      <ProviderLogo
                        provider={{ slug: s.slug, name: s.name }}
                        size="sm"
                        className="rounded-md bg-background"
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold text-foreground">
                          {s.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{s.slot}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 shadow-card">
                <h2 className="text-center text-base font-bold text-foreground">Newsletter Plan</h2>
                <div className="mt-4 rounded-lg border border-primary p-5 text-center">
                  <p>
                    <span className="text-3xl font-extrabold text-primary">$89</span>{" "}
                    <span className="text-sm text-muted-foreground">/ 1 month</span>
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Featured placement in our weekly newsletter for 1 month.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-3 inline-block text-xs font-semibold text-primary underline"
                  >
                    See example
                  </Link>
                  <ul className="mt-4 space-y-3 text-left text-xs text-foreground/85">
                    {[
                      "~10,000 engaged subscribers with ~33% open rate",
                      "Audience of developers, data teams and growth engineers",
                      "Your product featured near the top of the newsletter",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full bg-primary p-0.5 text-primary-foreground" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md border border-border bg-card px-3 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Sponsor Newsletter
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5 shadow-card">
                <h2 className="text-center text-base font-bold text-foreground">Bundle Plan</h2>
                <div className="mt-4 rounded-lg border border-primary p-5 text-center">
                  <p>
                    <span className="text-3xl font-extrabold text-primary">$99</span>{" "}
                    <span className="text-sm text-muted-foreground">/ 1 month</span>
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    Get both sidebar and newsletter plan for maximum reach.
                  </p>
                  <ul className="mt-4 space-y-3 text-left text-xs text-foreground/85">
                    {["Sidebar Plan (1 month)", "Newsletter Plan (1 month)"].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-full bg-primary p-0.5 text-primary-foreground" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-3 text-xs font-bold text-primary-foreground transition-colors hover:bg-brand-blue-hover"
                  >
                    Get Bundle
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* FAQ */}
          <section className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
              {faqs.map((f, i) => (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-muted/40"
                  >
                    {f.q}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open === i && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-foreground/80">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <ContextualLinkHub
            heading="Continue researching"
            intro="Provider reviews, benchmarks and guides our sponsors' audience reads most."
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
