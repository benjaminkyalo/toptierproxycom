import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, Trophy, Smartphone, Server, Globe2, ShoppingBag, Code2, Zap,
  CheckCircle2, BarChart3, Star, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AwardCard } from "@/components/award-card";
import { PartnerRow } from "@/components/partner-row";
import { ProviderLogo } from "@/components/provider-logo";
import { providers, editorChoice } from "@/data/providers";
import { countries } from "@/data/countries";
import { guides } from "@/data/guides";
import { useCases } from "@/data/use-cases";
import { blogPosts } from "@/data/blog";
import { popularMatchups } from "@/data/matchups";
import { cityToSlug } from "@/data/countries";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ToptierProxy.com — Find the Best Proxy Provider in 2026" },
      {
        name: "description",
        content:
          "Independent reviews, rankings and comparisons of the top residential, datacenter, ISP, mobile and scraping API providers. Trusted by 9M+ data professionals.",
      },
      { property: "og:title", content: "ToptierProxy.com — Best Proxy Providers 2026" },
      {
        property: "og:description",
        content:
          "Compare the world's leading proxy providers — Bright Data, Oxylabs, Decodo, IPRoyal, SOAX and more — with hands-on reviews and pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ToptierProxy.com",
          url: "https://toptierproxy.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://toptierproxy.com/search?q={query}",
            "query-input": "required name=query",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const heroCards = [
  { to: "/guides/best-proxies-2026", title: "Best Proxy Providers for 2026", icon: <Trophy className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/guides/best-residential-proxies", title: "Best Residential Proxies for 2026", icon: <Globe2 className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/guides/best-datacenter-proxies", title: "Best Datacenter Proxies for 2026", icon: <Server className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/guides/best-proxies-for-beginners", title: "Best Proxies for Beginners 2026", icon: <Award className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/guides/best-mobile-proxies", title: "Best Mobile Proxies for 2026", icon: <Smartphone className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/guides/best-isp-proxies", title: "Best ISP (Static Residential) Proxies", icon: <Zap className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/reviews/bright-data", title: "Bright Data Review", icon: <Star className="h-7 w-7" strokeWidth={1.5} /> },
  { to: "/reviews/oxylabs", title: "Oxylabs Review", icon: <Star className="h-7 w-7" strokeWidth={1.5} /> },
] as const;

const tradingStyles = [
  { id: "beginner", label: "Beginner", sub: "First-time proxy buyers" },
  { id: "everyday", label: "Everyday", sub: "Mid-volume scraping" },
  { id: "active", label: "Active", sub: "High-volume teams" },
  { id: "platforms", label: "Platforms", sub: "Top scraping APIs" },
] as const;

const styleGuides: Record<string, { feature: { title: string; minRead: string; blurb: string; to: string }; side: { title: string; minRead: string; to: string }[] }> = {
  beginner: {
    feature: {
      title: "Best Proxies for Beginners 2026",
      minRead: "20 MIN READ",
      blurb: "Our team has spent countless hours testing the most beginner-friendly proxy dashboards, free trials, and pay-as-you-go plans so you can start scraping in minutes — not weeks.",
      to: "/guides/best-proxies-for-beginners",
    },
    side: [
      { title: "Best Free Proxy Trials for 2026", minRead: "8 MIN READ", to: "/guides/best-free-proxy-trials" },
      { title: "Best Pay-As-You-Go Proxy Plans 2026", minRead: "12 MIN READ", to: "/guides/best-payg-proxies" },
      { title: "Best Free Web Scraping Courses 2026", minRead: "7 MIN READ", to: "/guides/best-scraping-courses" },
    ],
  },
  everyday: {
    feature: {
      title: "Best Residential Proxies for 2026",
      minRead: "22 MIN READ",
      blurb: "For everyday scraping, monitoring and ad verification, residential proxies offer the best balance of stealth, geo-coverage and cost. Here's how the top providers stack up.",
      to: "/guides/best-residential-proxies",
    },
    side: [
      { title: "Best Proxies for Web Scraping 2026", minRead: "18 MIN READ", to: "/guides/best-proxies-for-scraping" },
      { title: "Best Proxies for SEO Monitoring 2026", minRead: "10 MIN READ", to: "/guides/best-seo-proxies" },
      { title: "Best Proxies for Ad Verification 2026", minRead: "9 MIN READ", to: "/guides/best-ad-verification-proxies" },
    ],
  },
  active: {
    feature: {
      title: "Best Enterprise Proxy Networks 2026",
      minRead: "25 MIN READ",
      blurb: "When you're moving terabytes of traffic per month, the choice of vendor — and contract terms — matters more than headline price-per-GB. Our enterprise breakdown.",
      to: "/guides/best-enterprise-proxies",
    },
    side: [
      { title: "Best Mobile Proxies for 2026", minRead: "14 MIN READ", to: "/guides/best-mobile-proxies" },
      { title: "Best ISP Proxies for 2026", minRead: "13 MIN READ", to: "/guides/best-isp-proxies" },
      { title: "Best Sneaker Proxies for 2026", minRead: "11 MIN READ", to: "/guides/best-sneaker-proxies" },
    ],
  },
  platforms: {
    feature: {
      title: "Best Web Scraping APIs for 2026",
      minRead: "19 MIN READ",
      blurb: "Web Scraping APIs handle proxy rotation, JS rendering and anti-bot bypass for you. We rank Oxylabs, Bright Data, Decodo, ScrapingBee, ZenRows and more.",
      to: "/guides/best-scraping-apis",
    },
    side: [
      { title: "Best SERP APIs for 2026", minRead: "10 MIN READ", to: "/guides/best-serp-apis" },
      { title: "Best E-Commerce Scraping APIs", minRead: "12 MIN READ", to: "/guides/best-ecommerce-apis" },
      { title: "Best Headless Browser Tools", minRead: "9 MIN READ", to: "/guides/best-headless-browsers" },
    ],
  },
};

function HomePage() {
  const [style, setStyle] = useState<keyof typeof styleGuides>("beginner");
  const featured = providers.slice(0, 6);
  const reviewGrid = providers.slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Find the best proxy provider for you
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90 md:text-xl">
            Read and compare proxy provider reviews, rankings, and features
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroCards.map((c) => (
              <AwardCard key={c.to} to={c.to} title={c.title} icon={c.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold">Trusted proxy partners</h2>
          <p className="mt-1 text-muted-foreground">Explore these featured providers to get started.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <PartnerRow key={p.slug} provider={p} />
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS BANNER */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-lg bg-award-bg p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[minmax(200px,300px)_1fr] md:items-center md:gap-14">
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dkcqakosa/image/upload/f_auto,q_auto,w_600/v1777963719/ChatGPT_Image_May_5_2026_09_40_59_AM-Photoroom_1__11zon_1_trvtpp.png"
                  alt="ToptierProxy.com 2026 Annual Awards — Best Proxy Provider of the Year"
                  width={300}
                  height={300}
                  loading="lazy"
                  className="h-auto w-full max-w-[260px] sm:max-w-[300px] object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-primary">BEST PROXY PROVIDER OF 2026</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  {editorChoice.name} named #1 proxy provider of the year
                </h2>
                <p className="mt-4 text-foreground/80">
                  <Link to="/reviews/$slug" params={{ slug: editorChoice.slug }} className="font-bold text-primary underline">
                    {editorChoice.name}
                  </Link>{" "}
                  offers the most comprehensive proxy package in the industry, featuring an ethically-sourced 150M+ residential IP pool, advanced unblocking tools, and enterprise-grade compliance.
                </p>
                <p className="mt-4 font-semibold">For other top-ranking providers, check out the following guides:</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    { to: "/guides/best-residential-proxies", label: "Best Residential Proxies for 2026" },
                    { to: "/guides/best-proxies-for-beginners", label: "Best Proxies for Beginners 2026" },
                    { to: "/guides/best-datacenter-proxies", label: "Best Datacenter Proxies for 2026" },
                    { to: "/guides/best-proxies-2026", label: "ToptierProxy.com 2026 Annual Awards" },
                  ].map((l) => (
                    <Link key={l.to} to={l.to} className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                      <Award className="h-4 w-4" /> {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE TEST */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-xs font-bold tracking-widest text-primary">HOW WE TEST</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                The most thorough proxy review in the industry
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <Stat n="9,000,000" label="visitors" />
                <Stat n="225+" label="Evaluation criteria across networks, pricing, and tools" />
                <Stat n="35" label="Major proxy providers tested hands-on" />
              </div>
              <p className="mt-8 max-w-2xl text-foreground/80">
                Our evaluation process begins with a comprehensive analysis of each provider's network — pool size, ASN diversity, geographic coverage and sourcing ethics. We then run identical benchmark workloads across every vendor, measuring success rates on Cloudflare, DataDome and PerimeterX-protected targets, latency from multiple regions, and total cost per successful request.{" "}
                <Link to="/how-we-test" className="font-semibold text-primary underline">How we test.</Link>
              </p>
            </div>
            <div className="hidden h-72 w-72 shrink-0 rounded-md bg-navy p-6 md:block">
              <div className="grid h-full grid-cols-3 gap-3">
                {providers.slice(0, 9).map((p) => (
                  <div key={p.slug} className="flex items-center justify-center rounded bg-white p-2">
                    <ProviderLogo provider={p} size="lg" className="!h-full !w-full !border-0 !shadow-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-bold tracking-widest text-primary">WHY TRUST US</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Built by experts, trusted by data teams</h2>
              <p className="mt-4 max-w-2xl text-foreground/80">
                Over the years we've conducted thousands of hours of research, scraped tens of millions of pages across every protected target you can think of, and built proprietary benchmarking infrastructure to keep our reviews honest.{" "}
                <Link to="/why-trust-us" className="font-semibold text-primary underline">Why trust us.</Link>
              </p>
            </div>
            <div className="space-y-5">
              <Expert name="Marcus Reiner" role="Director of Network Research" />
              <Expert name="Elena Park" role="Senior Editor" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="bg-muted/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold">Proxy Provider Reviews</h2>
          <p className="mt-2 max-w-3xl text-foreground/80">
            ToptierProxy.com provides unbiased proxy provider reviews and ratings to help individual developers, agencies and enterprise data teams find the best provider for their needs.{" "}
            <Link to="/reviews" className="font-semibold text-primary underline">Read all reviews.</Link>
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {reviewGrid.map((p) => (
              <Link
                key={p.slug}
                to="/reviews/$slug"
                params={{ slug: p.slug }}
                className="flex h-44 flex-col items-center justify-center gap-4 rounded-md bg-card px-4 py-6 text-center shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <ProviderLogo provider={p} size="lg" className="!h-24 !w-24" />
                <span className="text-sm font-semibold text-foreground">{p.name} Review</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES BY STYLE */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Guides made for your use case</h2>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {tradingStyles.map((s) => (
              <button
                key={s.id}
                onClick={() => setStyle(s.id as keyof typeof styleGuides)}
                className={`rounded-md border px-6 py-3 text-center transition-colors ${
                  style === s.id
                    ? "border-primary bg-card text-primary"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                <div className="font-bold">{s.label}</div>
                <div className="text-xs opacity-70">{s.sub}</div>
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              to={styleGuides[style].feature.to}
              className="group block overflow-hidden rounded-md border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex h-64 items-center justify-center bg-navy p-8 text-navy-foreground">
                <div>
                  <div className="text-sm opacity-70">Best</div>
                  <div className="text-3xl font-bold leading-tight">{styleGuides[style].feature.title}</div>
                  <div className="mt-3 text-xs opacity-80">▲ ToptierProxy.com</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold group-hover:text-primary">{styleGuides[style].feature.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{styleGuides[style].feature.blurb}</p>
                <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground">{styleGuides[style].feature.minRead}</p>
              </div>
            </Link>
            <div className="space-y-4">
              {styleGuides[style].side.map((g) => (
                <Link
                  key={g.to}
                  to={g.to}
                  className="flex gap-4 rounded-md border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded bg-navy p-3 text-navy-foreground">
                    <div className="text-center">
                      <div className="text-[10px] opacity-70">Best</div>
                      <div className="text-xs font-bold leading-tight">{g.title}</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold">{g.title}</h4>
                    <p className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground">{g.minRead}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MORE PARTNERS */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold">More trusted proxy partners</h2>
          <p className="mt-1 text-muted-foreground">Explore these featured providers to get started.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {providers.slice(6, 12).map((p) => (
              <PartnerRow key={p.slug} provider={p} />
            ))}
          </div>
        </div>
      </section>

      {/* MORE GREAT PROXY CONTENT — rich expandable link grids */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">More great proxy content</h2>
          <p className="mt-2 max-w-3xl text-foreground/80">
            Hand-picked, SEO-optimized resources covering every proxy network, web scraping workflow,
            anti-bot bypass technique, country-level IP availability, and provider matchup we test.
          </p>
          <div className="mt-8 divide-y divide-border border-y-2 border-border">
            <ContentRow
              title="Reviews"
              defaultOpen
              intro="Each year our team tests and assesses these firms on 225+ variables to formulate star ratings across residential, datacenter, ISP, mobile and scraping API categories."
              groups={[
                {
                  label: "Top-Ranked Proxy Providers",
                  links: [
                    ...providers.map((p) => ({ to: `/reviews/${p.slug}`, label: `${p.name} review` })),
                    { to: "/reviews", label: "All reviews" },
                  ],
                },
              ]}
            />
            <ContentRow
              title="Guides"
              intro="Find the best proxy provider for your use case based on what you scrape, your budget, your target geography, or your preferred protocol — HTTP/S, SOCKS5 or rotating endpoints."
              groups={[
                {
                  label: "Top Proxy Buying Guides",
                  links: [
                    ...guides.map((g) => ({
                      to: `/guides/${g.slug}`,
                      label: g.title.replace(" for 2026", "").replace("Best ", ""),
                    })),
                    { to: "/guides", label: "All guides" },
                  ],
                },
              ]}
            />
            <ContentRow
              title="Countries"
              intro="Find the best providers offering high-quality residential and ISP IPs from your country — over 195 supported globally with city-level targeting."
              groups={[
                {
                  label: "Country Proxy Pages (50+)",
                  links: [
                    ...countries.map((c) => ({ to: `/countries/${c.slug}`, label: `${c.name} proxies` })),
                    { to: "/countries", label: "All countries" },
                  ],
                },
                {
                  label: "Best-of Country Rankings",
                  links: [
                    ...countries.slice(0, 16).map((c) => ({
                      to: `/best/${c.slug}-proxies`,
                      label: `Best ${c.name} proxies 2026`,
                    })),
                  ],
                },
                {
                  label: "City-Level Proxy Pages",
                  links: countries
                    .slice(0, 12)
                    .flatMap((c) =>
                      c.topCities.slice(0, 3).map((city) => ({
                        to: `/countries/${c.slug}/cities/${cityToSlug(city)}`,
                        label: `${city} proxies`,
                      })),
                    ),
                },
              ]}
            />
            <ContentRow
              title="Comparisons"
              intro="Filter providers and compare the most popular features, pricing per GB, geo-coverage, success rates, sticky-session length and authentication methods side by side."
              groups={[
                {
                  label: "Most-Searched Proxy Comparisons",
                  links: [
                    ...popularMatchups.map((m) => ({ to: `/vs/${m.slug}`, label: m.label })),
                    { to: "/compare", label: "All comparisons" },
                  ],
                },
              ]}
            />
            <ContentRow
              title="Use Cases"
              intro="Specialized proxy stacks for the highest-intent commercial workloads — scraping protected targets, ad verification, SERP tracking, sneaker copping, market research and AI training data."
              groups={[
                {
                  label: "High-Intent Proxy Use Cases",
                  links: [
                    ...useCases.map((u) => ({
                      to: `/use-cases/${u.slug}`,
                      label: u.title.replace("Best Proxies for ", "").replace(" in 2026", ""),
                    })),
                    { to: "/use-cases", label: "All use cases" },
                  ],
                },
              ]}
            />
            <ContentRow
              title="Blog & Tutorials"
              intro="In-depth tutorials covering anti-bot bypass, rotating vs sticky sessions, scraping with Python, Playwright and Puppeteer, and the legal & ethical landscape of web data collection."
              groups={[
                {
                  label: "Latest Long-Form Articles",
                  links: [
                    ...blogPosts.map((b) => ({ to: `/blog/${b.slug}`, label: b.title })),
                    { to: "/blog", label: "All articles" },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold md:text-3xl">{n}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Expert({ name, role }: { name: string; role: string }) {
  const initials = name.split(" ").map((s) => s[0]).join("");
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-navy-foreground">
        {initials}
      </div>
      <div>
        <div className="text-lg font-bold">{name}</div>
        <div className="text-sm italic text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}

type ContentLink = { to: string; label: string };
type ContentGroup = { label: string; links: ContentLink[] };

function ContentRow({
  title,
  intro,
  groups,
  defaultOpen = false,
}: {
  title: string;
  intro: string;
  groups: ContentGroup[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-2xl font-bold md:text-3xl">{title}</span>
        <ChevronDown
          className={`h-6 w-6 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-4">
          <p className="text-foreground/80">{intro}</p>
          {groups.map((g) => (
            <div key={g.label} className="mt-6">
              <h3 className="text-base font-bold text-foreground">{g.label}</h3>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <a
                      href={l.to}
                      className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
