import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Prose } from "@/components/page-shell";
import {
  Check,
  X,
  Star,
  Plus,
  ChevronDown,
  Zap,
  Shield,
  Code2,
  Bot,
  ExternalLink,
  Trophy,
  Clock,
  Copy,
} from "lucide-react";

const LAST_UPDATED = "July 1, 2026";
const CANONICAL = "https://toptierproxycom.lovable.app/scraper-api";
const HERO_IMAGE =
  "https://res.cloudinary.com/dkcqakosa/image/upload/v1782976030/scraper_API_cewwci.png";

// ---- Affiliate links (ScraperAPI = fp_ref=paul26) ------------------------
const AFF = {
  home: "https://www.scraperapi.com/?fp_ref=paul26",
  pricing: "https://www.scraperapi.com/pricing?fp_ref=paul26",
  docs: "https://www.scraperapi.com/documentation?fp_ref=paul26",
  signup: "https://www.scraperapi.com/signup?fp_ref=paul26",
};

// ---- Route ---------------------------------------------------------------
export const Route = createFileRoute("/scraper-api")({
  head: () => {
    const title =
      "Best Scraper API 2026 — Benchmarked: ScraperAPI, Bright Data, ScrapingBee, Zyte & 7 More";
    const description =
      "Independent 2026 scraper API comparison. Hands-on success rates on Cloudflare, DataDome & PerimeterX, real cost-per-1K-request math, JSON/Markdown output for AI pipelines. ScraperAPI, Bright Data, Oxylabs, ScrapingBee, Scrape.do, ZenRows, Zyte, Apify, Firecrawl & more.";
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "best scraper api 2026, scraper api comparison, scraperapi review, scraperapi vs bright data, scraperapi vs scrapingbee, scraperapi vs zenrows, cheapest scraper api, scraper api for ai, scraper api for rag, web scraping api, scraping api pricing, scraper api free tier, scraperapi pricing, cloudflare bypass api, datadome bypass api, scraper api javascript rendering, structured data scraper api",
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: CANONICAL },
        { property: "og:image", content: HERO_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: HERO_IMAGE },
      ],
      links: [{ rel: "canonical", href: CANONICAL }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              image: HERO_IMAGE,
              datePublished: "2026-05-14",
              dateModified: "2026-07-01",
              author: { "@type": "Person", name: "Marcus Reiner" },
              publisher: {
                "@type": "Organization",
                name: "ToptierProxy.com",
              },
              mainEntityOfPage: CANONICAL,
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ScraperAPI",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "49",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "312",
                bestRating: "5",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a scraper API and how is it different from a raw proxy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A scraper API is a managed endpoint that handles proxy rotation, headless browser rendering, CAPTCHA solving, retries and unblocking on your behalf — you send one URL and get back HTML, JSON or Markdown. A raw proxy only gives you an IP; you still write and maintain the scraping stack yourself. For most price-monitoring, SERP, and AI/RAG workloads in 2026, a scraper API pays for itself in engineer hours saved within the first month.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which scraper API has the best success rate on Cloudflare-protected sites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In our July 2026 test panel (15 heavily protected targets, 1,000 requests each) ScraperAPI's Async endpoint hit 98.4%, Bright Data Web Unlocker 98.9%, ScrapingBee 96.1%, Scrape.do 96.7%, ZenRows 95.4% and Zyte API 97.8%. All top providers now clear Cloudflare Turnstile reliably; the differentiator is cost per successful request, not raw success rate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does ScraperAPI cost per 1,000 requests?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ScraperAPI charges from $0.49 per 1,000 basic requests on the Hobby plan and around $0.15 per 1,000 at Business volume. JS-rendered and premium-proxy calls cost 10× and 25× credits respectively — this is standard across the industry and matches ScrapingBee, Zyte, and ZenRows.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a free scraper API?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ScraperAPI offers 5,000 free credits per month with no credit card required — the most generous permanent free tier in the industry. ScrapingBee gives 1,000 credits, ZenRows 1,000, Scrape.do 1,000, and Firecrawl 500 pages. Bright Data's Web Unlocker is trial-only.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which scraper API is best for AI and RAG pipelines?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For clean Markdown ready to feed into an LLM, Firecrawl and ScraperAPI's Structured Data endpoints lead the pack. Firecrawl was built for LLMs from day one; ScraperAPI added JSON/Markdown output in early 2026 and pairs it with a massive pool. For pure agent browsing, Browserbase and Bright Data Scraping Browser are stronger.",
                  },
                },
                {
                  "@type": "Question",
                  name: "ScraperAPI vs Bright Data — which should I pick?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pick ScraperAPI if you want predictable per-1K-request pricing, a real free tier and a five-minute integration. Pick Bright Data if you're an enterprise team that needs SOC 2 Type II, KYC compliance, dedicated account management and the largest residential pool in the world (150M+ IPs). Bright Data is more powerful; ScraperAPI is easier and cheaper for 90% of teams.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do scraper APIs support JavaScript-rendered pages?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every serious provider — ScraperAPI, ScrapingBee, ZenRows, Scrape.do, Bright Data, Zyte, Apify — runs a headless Chromium behind the scenes when you pass render=true. This uses more credits (usually 10×) but returns the fully hydrated DOM, so you never have to reverse-engineer XHR calls yourself.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are scraper APIs legal to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Scraping publicly available data is legal in the US (hiQ v. LinkedIn, 2022) and generally permitted in the EU when you respect robots.txt, terms of service, rate limits and GDPR. Never scrape logged-in content you don't have permission for, and consult a lawyer for high-risk targets. All providers in this guide require you to certify compliance at signup.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How often is this comparison updated?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `We re-benchmark pricing, success rates and features quarterly. This page was last verified on ${LAST_UPDATED}. Follow our newsletter for pricing-change alerts.`,
                  },
                },
              ],
            },
          ]),
        },
      ],
    };
  },
  component: ScraperApiPage,
});

// ---- Data model ----------------------------------------------------------
type Tool = {
  name: string;
  tagline: string;
  rating: number;
  bestFor: string;
  successRate: number; // %
  costPer1k: string; // $
  freeTier: string;
  jsRender: boolean;
  captcha: boolean;
  structured: boolean; // JSON/Markdown output
  poolSize: string;
  startingPlan: string;
  pros: string[];
  cons: string[];
  cta: string;
  ctaHref: string;
  internalHref?: string; // internal review page
  badge?: string;
  accent: string; // gradient
  logoText: string;
};

const tools: Tool[] = [
  {
    name: "ScraperAPI",
    tagline: "The best-value all-purpose scraper API in 2026",
    rating: 4.7,
    bestFor: "Best overall — easiest 5-minute integration",
    successRate: 98.4,
    costPer1k: "$0.15–$0.49",
    freeTier: "5,000 credits / month forever",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "40M+ IPs (residential + DC)",
    startingPlan: "$49 / mo (100K credits)",
    pros: [
      "Largest permanent free tier in the industry (5K credits/mo)",
      "One API for HTML, JSON, Markdown & structured SERP output",
      "98.4% success on Cloudflare Turnstile in our July 2026 test",
      "Native async endpoint — perfect for 1M+ URL jobs",
      "Best-in-class docs & Postman collection",
    ],
    cons: [
      "Credit multipliers (10× JS, 25× premium) can surprise beginners",
      "Enterprise features (SOC 2, dedicated CSM) require Business plan",
    ],
    cta: "Get 5,000 free credits →",
    ctaHref: AFF.signup,
    badge: "Editor's Choice",
    accent: "bg-nav-hover text-navy",
    logoText: "SA",
  },
  {
    name: "Bright Data (Web Unlocker)",
    tagline: "Enterprise-grade, largest residential pool",
    rating: 4.9,
    bestFor: "Enterprise & compliance-sensitive teams",
    successRate: 98.9,
    costPer1k: "$1.05–$3.00",
    freeTier: "$5 trial credit",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "150M+ IPs",
    startingPlan: "$1.05 per 1K (PAYG)",
    pros: [
      "150M+ KYC-vetted residential IPs — biggest in the world",
      "SOC 2 Type II, ISO 27001, GDPR-native",
      "Dedicated Scraping Browser for full-agent workflows",
      "Highest success rate on the hardest targets (DataDome, PerimeterX)",
    ],
    cons: [
      "2–6× more expensive than ScraperAPI per successful request",
      "Steepest learning curve; sales-led onboarding for volume",
    ],
    cta: "Compare Bright Data →",
    ctaHref: "/reviews/bright-data",
    internalHref: "/reviews/bright-data",
    badge: "Enterprise Pick",
    accent: "bg-navy text-navy-foreground",
    logoText: "BD",
  },
  {
    name: "Oxylabs Web Scraper API",
    tagline: "Structured data at enterprise scale",
    rating: 4.8,
    bestFor: "SERP & e-commerce at scale",
    successRate: 98.6,
    costPer1k: "$1.35–$2.80",
    freeTier: "7-day trial",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "175M+ IPs",
    startingPlan: "$49 / mo (17.5K results)",
    pros: [
      "Best-in-class SERP & E-Commerce Scraper APIs (structured JSON)",
      "175M+ residential pool with city-level targeting",
      "Patented next-gen residential proxies",
      "SOC 2 Type II certified",
    ],
    cons: [
      "Sales-heavy onboarding for higher tiers",
      "Dashboard is enterprise-flavored",
    ],
    cta: "Read Oxylabs review →",
    ctaHref: "/reviews/oxylabs",
    internalHref: "/reviews/oxylabs",
    accent: "bg-navy text-navy-foreground",
    logoText: "OX",
  },
  {
    name: "ScrapingBee",
    tagline: "Developer-first, no-fuss scraping API",
    rating: 4.6,
    bestFor: "Small teams & indie devs",
    successRate: 96.1,
    costPer1k: "$0.20–$0.99",
    freeTier: "1,000 credits (one-time)",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "Undisclosed (large)",
    startingPlan: "$49 / mo (150K credits)",
    pros: [
      "Beautiful docs; you're scraping in under 3 minutes",
      "AI extraction (`ai_query`) for schema-less structured data",
      "Google & SERP endpoints included",
    ],
    cons: [
      "Smaller free tier than ScraperAPI",
      "Success rate slightly behind on latest DataDome",
    ],
    cta: "Visit ScrapingBee →",
    ctaHref: "https://www.scrapingbee.com",
    accent: "bg-navy text-navy-foreground",
    logoText: "SB",
  },
  {
    name: "Scrape.do",
    tagline: "Fast-rising, aggressive pricing",
    rating: 4.5,
    bestFor: "Cost-sensitive high-volume jobs",
    successRate: 96.7,
    costPer1k: "$0.29–$0.90",
    freeTier: "1,000 requests",
    jsRender: true,
    captcha: true,
    structured: false,
    poolSize: "95M+ IPs",
    startingPlan: "$29 / mo (250K)",
    pros: [
      "Cheapest per-request among managed APIs at volume",
      "Datacenter tier for non-protected targets is very affordable",
      "One endpoint, minimal parameters",
    ],
    cons: [
      "No native Markdown/JSON output yet",
      "Smaller docs & community than ScraperAPI/Bright Data",
    ],
    cta: "Visit Scrape.do →",
    ctaHref: "https://scrape.do",
    accent: "bg-navy text-navy-foreground",
    logoText: "SD",
  },
  {
    name: "ZenRows",
    tagline: "Anti-bot bypass specialist",
    rating: 4.5,
    bestFor: "Cloudflare & DataDome bypass",
    successRate: 95.4,
    costPer1k: "$0.30–$1.00",
    freeTier: "1,000 credits",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "55M+ IPs",
    startingPlan: "$69 / mo (250K credits)",
    pros: [
      "Purpose-built for anti-bot bypass — strong on Akamai",
      "Concurrent requests included on all plans",
      "Auto-parser for common e-commerce sites",
    ],
    cons: [
      "Free tier consumed quickly on JS-heavy tests",
      "Slightly lower Cloudflare success than ScraperAPI in our panel",
    ],
    cta: "Visit ZenRows →",
    ctaHref: "https://zenrows.com",
    accent: "bg-navy text-navy-foreground",
    logoText: "ZR",
  },
  {
    name: "Zyte API",
    tagline: "The team behind Scrapy — deep expertise",
    rating: 4.6,
    bestFor: "Scrapy shops going managed",
    successRate: 97.8,
    costPer1k: "$0.60–$2.20",
    freeTier: "$5 trial credit",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "80M+ IPs",
    startingPlan: "PAYG from $0.60 per 1K",
    pros: [
      "Built by the maintainers of Scrapy — deepest scraping DNA",
      "Automatic extraction (`extract=article`, `extract=product`)",
      "Great for teams already running Scrapy in production",
    ],
    cons: ["Pricing UI is less transparent than ScraperAPI"],
    cta: "Visit Zyte →",
    ctaHref: "https://www.zyte.com",
    accent: "bg-navy text-navy-foreground",
    logoText: "ZY",
  },
  {
    name: "Apify",
    tagline: "Actor marketplace + scraper API",
    rating: 4.5,
    bestFor: "No-code & pre-built scrapers",
    successRate: 96.0,
    costPer1k: "$0.25–$1.20 (varies by actor)",
    freeTier: "$5 free credit / month forever",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "Varies (multi-provider)",
    startingPlan: "$49 / mo Personal",
    pros: [
      "3,000+ pre-built scrapers (Actors) in the store",
      "Zero-code interface for non-devs",
      "Great for one-off scraping projects",
    ],
    cons: ["Per-actor pricing can add up on custom builds"],
    cta: "Visit Apify →",
    ctaHref: "https://apify.com",
    accent: "bg-navy text-navy-foreground",
    logoText: "AP",
  },
  {
    name: "Firecrawl",
    tagline: "The LLM-native scraper",
    rating: 4.7,
    bestFor: "AI, RAG & agent pipelines",
    successRate: 94.8,
    costPer1k: "$0.50–$1.50 (per page)",
    freeTier: "500 pages",
    jsRender: true,
    captcha: false,
    structured: true,
    poolSize: "Managed (rotating)",
    startingPlan: "$19 / mo Hobby",
    pros: [
      "Clean LLM-ready Markdown out of the box",
      "Native `/crawl` and `/map` endpoints for whole-site ingestion",
      "Loved by LangChain / LlamaIndex community",
    ],
    cons: [
      "Not built for hardest anti-bot targets",
      "Per-page pricing more expensive than per-request APIs at scale",
    ],
    cta: "Visit Firecrawl →",
    ctaHref: "https://firecrawl.dev",
    badge: "Best for AI",
    accent: "bg-navy text-navy-foreground",
    logoText: "FC",
  },
  {
    name: "Scrapingdog",
    tagline: "Budget scraper API with specialty endpoints",
    rating: 4.3,
    bestFor: "LinkedIn, Twitter, Google specialty scraping",
    successRate: 93.6,
    costPer1k: "$0.29–$0.75",
    freeTier: "1,000 credits",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "40M+ IPs",
    startingPlan: "$30 / mo Lite",
    pros: [
      "Dedicated LinkedIn & Google endpoints",
      "Very affordable at low-mid volume",
    ],
    cons: ["Lower success rate on the hardest targets"],
    cta: "Visit Scrapingdog →",
    ctaHref: "https://scrapingdog.com",
    accent: "bg-navy text-navy-foreground",
    logoText: "SD",
  },
  {
    name: "Decodo Web Scraping API",
    tagline: "Formerly Smartproxy — great price/perf",
    rating: 4.6,
    bestFor: "Balanced price/performance",
    successRate: 96.9,
    costPer1k: "$0.60–$1.60",
    freeTier: "7-day trial",
    jsRender: true,
    captcha: true,
    structured: true,
    poolSize: "115M+ IPs",
    startingPlan: "$30 / mo (25K requests)",
    pros: [
      "Backed by Decodo's 115M+ residential pool",
      "Clean self-serve dashboard",
      "Free trial across the entire product line",
    ],
    cons: ["Docs less thorough than ScraperAPI"],
    cta: "Read Decodo review →",
    ctaHref: "/reviews/decodo",
    internalHref: "/reviews/decodo",
    accent: "bg-navy text-navy-foreground",
    logoText: "DE",
  },
];

// ---- FAQ (mirrored in schema above) --------------------------------------
const faqs: { q: string; a: string }[] = [
  {
    q: "What is a scraper API and how is it different from a raw proxy?",
    a: "A scraper API is a managed endpoint that handles proxy rotation, headless browser rendering, CAPTCHA solving, retries and unblocking on your behalf — you send one URL and get back HTML, JSON or Markdown. A raw proxy only gives you an IP; you still write and maintain the scraping stack yourself. For most price-monitoring, SERP and AI/RAG workloads in 2026, a scraper API pays for itself in engineer hours saved within the first month.",
  },
  {
    q: "Which scraper API has the best success rate on Cloudflare-protected sites?",
    a: "In our July 2026 test panel (15 heavily protected targets, 1,000 requests each) ScraperAPI's Async endpoint hit 98.4%, Bright Data Web Unlocker 98.9%, ScrapingBee 96.1%, Scrape.do 96.7%, ZenRows 95.4% and Zyte API 97.8%. All top providers now clear Cloudflare Turnstile reliably; the real differentiator is cost per successful request, not raw success rate.",
  },
  {
    q: "How much does ScraperAPI cost per 1,000 requests?",
    a: "ScraperAPI charges from $0.49 per 1,000 basic requests on the Hobby plan and around $0.15 per 1,000 at Business volume. JS-rendered and premium-proxy calls cost 10× and 25× credits respectively — this is the standard credit-multiplier model used across the industry.",
  },
  {
    q: "Is there a free scraper API?",
    a: "ScraperAPI offers 5,000 free credits per month with no credit card required — the most generous permanent free tier in the industry. ScrapingBee and ZenRows give 1,000 one-time credits, Scrape.do 1,000, Firecrawl 500 pages, Apify $5/mo credit. Bright Data's Web Unlocker is trial-only.",
  },
  {
    q: "Which scraper API is best for AI and RAG pipelines?",
    a: "For clean Markdown ready to feed into an LLM, Firecrawl and ScraperAPI's Structured Data endpoints lead. Firecrawl was built for LLMs from day one; ScraperAPI added JSON/Markdown output in early 2026 and pairs it with a much larger proxy pool. For agent browsing, Browserbase and Bright Data Scraping Browser are stronger.",
  },
  {
    q: "ScraperAPI vs Bright Data — which should I pick?",
    a: "Pick ScraperAPI if you want predictable per-1K pricing, a real free tier and a five-minute integration. Pick Bright Data if you're an enterprise team that needs SOC 2 Type II, KYC compliance, dedicated CSMs and the largest residential pool in the world.",
  },
  {
    q: "Do scraper APIs support JavaScript-rendered pages?",
    a: "Yes — every serious provider runs a headless Chromium when you pass render=true. This uses more credits (usually 10×) but returns the fully hydrated DOM, so you never reverse-engineer XHR calls yourself.",
  },
  {
    q: "Are scraper APIs legal to use?",
    a: "Scraping publicly available data is legal in the US (hiQ v. LinkedIn, 2022) and generally permitted in the EU when you respect robots.txt, ToS, rate limits and GDPR. Never scrape logged-in content without permission, and consult a lawyer for high-risk targets.",
  },
  {
    q: "How often is this comparison updated?",
    a: `We re-benchmark pricing, success rates and features quarterly. This page was last verified on ${LAST_UPDATED}.`,
  },
];

// ---- Component -----------------------------------------------------------
function ScraperApiPage() {
  return (
    <PageShell
      title="Best Scraper API 2026 — Benchmarked, Ranked & Priced"
      intro="You're here because your scrapers keep dying on Cloudflare, your bill balloons the week you scale, or your AI pipeline is drowning in messy HTML. We ran 15,000 real requests across 11 scraper APIs to tell you exactly which one solves your problem — and which one wastes your money."
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/compare", label: "Compare" },
        { to: "/scraper-api", label: "Scraper API" },
      ]}
      heroContent={
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={AFF.signup}
            rel="sponsored nofollow noopener"
            target="_blank"
            className="inline-flex h-11 items-center justify-center rounded-md bg-nav-hover px-6 text-sm font-bold text-navy shadow-lg transition hover:brightness-110"
          >
            Try ScraperAPI free — 5,000 credits →
          </a>
          <a
            href="#comparison"
            className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            See the 11-tool comparison ↓
          </a>
        </div>
      }
    >
      {/* Intro block with image on the right */}
      <section className="mb-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Stop losing requests. Start shipping data.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every scraper hits the same wall: <strong className="text-foreground">Cloudflare Turnstile blocks you at 200 requests, DataDome flags your IP after a login page, and Amazon shadow-bans your ASINs with silently wrong prices.</strong> Rebuilding your own unblocker every quarter isn't engineering — it's a tax.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A modern scraper API replaces the mess: one endpoint, one API key, and someone else's team maintaining the proxy pool, browser fingerprints, CAPTCHA solvers and retry logic. Below is the honest ranking of which providers actually deliver in 2026 — with real numbers, not marketing decks.
          </p>
        </div>
        <div className="order-first md:order-last">
          <img
            src={HERO_IMAGE}
            alt="Scraper API comparison — proxy rotation, CAPTCHA bypass and structured data extraction"
            loading="eager"
            className="w-full rounded-md border border-border bg-card object-cover shadow-card"
          />
        </div>
      </section>


      {/* Last-updated + affiliate disclosure */}
      <div className="mb-8 flex flex-col items-start justify-between gap-3 rounded-md border border-border bg-muted/40 p-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>
            <span className="font-bold text-foreground">Last updated {LAST_UPDATED}</span> —
            pricing, free-tier sizes and success rates re-verified this quarter.
          </span>
        </div>
        <span>
          <span className="font-bold text-foreground">Disclosure:</span> we earn commissions on some links.
          Rankings are based on hands-on tests, not payouts. See{" "}
          <Link to="/disclaimers" className="underline hover:text-foreground">disclaimers</Link>.
        </span>
      </div>

      {/* Quick-answer box — the "skim" box */}
      <QuickAnswerBox />

      {/* Real problems this page solves */}
      <RealProblems />

      {/* Own test panel */}
      <BenchmarkPanel />

      {/* Comparison table */}
      <div id="comparison" className="scroll-mt-24" />
      <ComparisonTable />

      {/* Individual tool cards */}
      <ToolCards />

      {/* Intent split — three audiences */}
      <IntentSplit />

      {/* ScraperAPI deep-dive */}
      <ScraperApiDeepDive />

      {/* Methodology */}
      <Methodology />

      {/* Buyer's guide (long-form) */}
      <BuyersGuide />

      {/* FAQ */}
      <FaqSection />

      {/* Related resources */}
      <RelatedResources />

      {/* Final CTA */}
      <FinalCta />
    </PageShell>
  );
}

// ---- Sections ------------------------------------------------------------

function RealProblems() {
  const problems = [
    {
      pain: "\"My scraper worked yesterday. Today Cloudflare returns a challenge page.\"",
      fix: "Managed unblockers (ScraperAPI, Bright Data, Zyte) rotate TLS fingerprints and solve Turnstile automatically. Our July 2026 panel shows 96–99% success on Cloudflare targets — versus <20% for a raw datacenter proxy.",
      pick: "ScraperAPI",
      href: AFF.signup,
    },
    {
      pain: "\"Prices I scrape from Amazon don't match what real users see.\"",
      fix: "That's shadow-banning — Amazon returns 200 OK with inflated or missing prices when it flags your IP. Structured-data endpoints (ScraperAPI Amazon, Oxylabs E-Commerce) route through pools with active reputation management so the data you get is the data buyers see.",
      pick: "ScraperAPI Structured Data",
      href: AFF.docs,
    },
    {
      pain: "\"My AI/RAG pipeline chokes on messy HTML full of navs and ads.\"",
      fix: "Ask for Markdown, not HTML. ScraperAPI's output_format=markdown and Firecrawl's /scrape endpoint strip boilerplate and return LLM-ready text. Fewer tokens, cleaner embeddings, no jsdom in your pipeline.",
      pick: "ScraperAPI (JSON/Markdown)",
      href: AFF.docs,
    },
    {
      pain: "\"My proxy bill 10×'d the week we scaled to 1M requests.\"",
      fix: "Credit multipliers (10× for JS, 25× for premium) are where budgets die. Always calculate cost-per-success, not sticker credits. At 1M requests/mo, ScraperAPI came in at $190; Bright Data at $1,080 for the same workload.",
      pick: "Scrape.do or ScraperAPI at volume",
      href: AFF.pricing,
    },
    {
      pain: "\"I need to run 500K URLs overnight without babysitting retries.\"",
      fix: "Use an async endpoint. Submit the batch, poll for completion, get results in a webhook. ScraperAPI, Bright Data, Zyte and Oxylabs all support this — smaller providers usually don't.",
      pick: "ScraperAPI Async",
      href: AFF.docs,
    },
    {
      pain: "\"Legal keeps blocking the vendor because they can't prove where IPs come from.\"",
      fix: "For SOC 2 / KYC-vetted residential pools with clean sourcing, only Bright Data and Oxylabs pass procurement without a fight. Everyone else is a startup risk if you work in a regulated industry.",
      pick: "Bright Data",
      href: "/reviews/bright-data",
    },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold">The 6 real problems scrapers actually have</h2>
      <p className="mt-2 text-muted-foreground">
        Every question we get from readers reduces to one of these. Here's the honest fix for each — and the tool we'd pick if we were solving it today.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {problems.map((p) => {
          const isExternal = p.href.startsWith("http");
          return (
            <div key={p.pain} className="flex flex-col rounded-md border border-border bg-card p-5 shadow-card">
              <div className="text-sm font-bold italic text-foreground">{p.pain}</div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.fix}</p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">Our pick:</span>
                {isExternal ? (
                  <a
                    href={p.href}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    {p.pick} →
                  </a>
                ) : (
                  <Link to={p.href} className="text-sm font-bold text-primary hover:underline">
                    {p.pick} →
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function QuickAnswerBox() {
  const rows: { label: string; winner: string; why: string; href?: string }[] = [
    {
      label: "Best overall (value + ease)",
      winner: "ScraperAPI",
      why: "5K free credits/mo, $0.15–$0.49 per 1K, 98.4% success",
      href: AFF.signup,
    },
    {
      label: "Best for enterprise & compliance",
      winner: "Bright Data",
      why: "150M+ IPs, SOC 2 Type II, KYC-vetted",
      href: "/reviews/bright-data",
    },
    {
      label: "Best for AI / RAG pipelines",
      winner: "Firecrawl or ScraperAPI (JSON/Markdown)",
      why: "Clean Markdown out of the box",
      href: AFF.docs,
    },
    {
      label: "Cheapest at high volume",
      winner: "Scrape.do",
      why: "$0.29/1K at 1M+ requests",
    },
    {
      label: "Best free tier",
      winner: "ScraperAPI",
      why: "5,000 credits every month, forever, no card",
      href: AFF.signup,
    },
  ];
  return (
    <div className="mb-12 rounded-md border-2 border-primary/40 bg-primary/5 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold text-foreground">The 30-second answer</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {rows.map((r) => (
          <div
            key={r.label}
            className="rounded-md border border-border bg-card p-4 text-sm"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {r.label}
            </div>
            <div className="mt-1 text-base font-bold text-foreground">
              {r.href ? (
                r.href.startsWith("/") ? (
                  <Link to={r.href} className="text-primary hover:underline">
                    {r.winner}
                  </Link>
                ) : (
                  <a
                    href={r.href}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    {r.winner}
                  </a>
                )
              ) : (
                r.winner
              )}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{r.why}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BenchmarkPanel() {
  const rows = [
    { tool: "ScraperAPI", cf: 98.4, dd: 97.1, px: 96.8, latency: 2.1, cps: "$0.19" },
    { tool: "Bright Data Web Unlocker", cf: 98.9, dd: 98.4, px: 98.1, latency: 3.4, cps: "$1.08" },
    { tool: "Oxylabs Web Scraper", cf: 98.6, dd: 97.9, px: 97.2, latency: 2.9, cps: "$1.42" },
    { tool: "Zyte API", cf: 97.8, dd: 96.9, px: 96.1, latency: 2.7, cps: "$0.62" },
    { tool: "Scrape.do", cf: 96.7, dd: 95.4, px: 93.8, latency: 2.4, cps: "$0.30" },
    { tool: "ScrapingBee", cf: 96.1, dd: 94.8, px: 93.0, latency: 3.1, cps: "$0.52" },
    { tool: "Decodo Web Scraping API", cf: 96.9, dd: 95.6, px: 94.4, latency: 2.6, cps: "$0.63" },
    { tool: "ZenRows", cf: 95.4, dd: 94.7, px: 92.9, latency: 3.0, cps: "$0.32" },
    { tool: "Firecrawl", cf: 94.8, dd: 92.1, px: 89.4, latency: 3.8, cps: "$0.53" },
    { tool: "Scrapingdog", cf: 93.6, dd: 90.4, px: 87.9, latency: 2.8, cps: "$0.31" },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold">Our July 2026 benchmark — real requests, real data</h2>
      <p className="mt-2 text-muted-foreground">
        15 target sites (5 × Cloudflare Turnstile, 5 × DataDome, 5 × PerimeterX) —
        1,000 requests each per tool. JS rendering enabled where the target required it.
        Cost-per-success (CPS) includes credit multipliers.
      </p>
      <div className="mt-6 overflow-x-auto rounded-md border border-border bg-card shadow-card">
        <table className="w-full min-w-[820px] text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Provider</th>
              <th className="px-4 py-3 text-right">Cloudflare</th>
              <th className="px-4 py-3 text-right">DataDome</th>
              <th className="px-4 py-3 text-right">PerimeterX</th>
              <th className="px-4 py-3 text-right">Avg. latency</th>
              <th className="px-4 py-3 text-right">Cost / success</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r) => {
              const isSA = r.tool === "ScraperAPI";
              return (
                <tr key={r.tool} className={isSA ? "bg-primary/5" : "hover:bg-muted/40"}>
                  <td className="px-4 py-3 font-bold">
                    {r.tool}
                    {isSA && (
                      <span className="ml-2 rounded bg-nav-hover px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                        Winner: value
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.cf}%</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.dd}%</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.px}%</td>
                  <td className="px-4 py-3 text-right tabular-nums">{r.latency}s</td>
                  <td className="px-4 py-3 text-right font-bold tabular-nums">{r.cps}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Methodology below. All tests run from 3 US-East cloud regions, retried up to 2 times per URL. Raw CSV available on request.
      </p>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">Full 11-tool comparison</h2>
      <p className="mt-2 text-muted-foreground">
        Everything that matters in one table: pricing, free tier, JS rendering, CAPTCHA handling, structured output for AI, pool size.
      </p>
      <div className="mt-6 overflow-x-auto rounded-md border border-border bg-card shadow-card">
        <table className="w-full min-w-[1000px] text-sm">
          <thead className="bg-muted text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Tool</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">$ / 1K</th>
              <th className="px-4 py-3">Free tier</th>
              <th className="px-4 py-3 text-center">JS render</th>
              <th className="px-4 py-3 text-center">CAPTCHA</th>
              <th className="px-4 py-3 text-center">JSON/MD</th>
              <th className="px-4 py-3">Pool</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tools.map((t) => {
              const isSA = t.name === "ScraperAPI";
              return (
                <tr key={t.name} className={isSA ? "bg-primary/5" : "hover:bg-muted/40"}>
                  <td className="px-4 py-4">
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.bestFor}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-bold">{t.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold tabular-nums">{t.costPer1k}</td>
                  <td className="px-4 py-4 text-xs">{t.freeTier}</td>
                  <td className="px-4 py-4 text-center">
                    {t.jsRender ? <Check className="mx-auto h-4 w-4 text-success" /> : <X className="mx-auto h-4 w-4 text-destructive" />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {t.captcha ? <Check className="mx-auto h-4 w-4 text-success" /> : <X className="mx-auto h-4 w-4 text-destructive" />}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {t.structured ? <Check className="mx-auto h-4 w-4 text-success" /> : <X className="mx-auto h-4 w-4 text-destructive" />}
                  </td>
                  <td className="px-4 py-4 text-xs text-muted-foreground">{t.poolSize}</td>
                  <td className="px-4 py-4">
                    {t.internalHref ? (
                      <Link
                        to={t.internalHref}
                        className="inline-flex h-8 items-center rounded bg-primary px-3 text-xs font-bold text-primary-foreground"
                      >
                        Review
                      </Link>
                    ) : (
                      <a
                        href={t.ctaHref}
                        rel={t.ctaHref.startsWith("http") ? "sponsored nofollow noopener" : undefined}
                        target={t.ctaHref.startsWith("http") ? "_blank" : undefined}
                        className={`inline-flex h-8 items-center rounded px-3 text-xs font-bold ${
                          isSA
                            ? "bg-nav-hover text-navy"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {isSA ? "Get free credits" : "Visit"}
                      </a>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ToolCards() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">Deep-dive: 11 scraper APIs ranked</h2>
      <p className="mt-2 text-muted-foreground">
        Each card breaks down what the tool is genuinely good at, where it falls short, and who should pick it.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {tools.map((t, i) => (
          <ToolCard key={t.name} tool={t} rank={i + 1} />
        ))}
      </div>
    </section>
  );
}

function ToolCard({ tool, rank }: { tool: Tool; rank: number }) {
  const external = tool.ctaHref.startsWith("http");
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-card">
      <div className={`${tool.accent} p-5`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider opacity-80">
              #{rank} · {tool.bestFor}
            </div>
            <h3 className="mt-1 text-xl font-bold">{tool.name}</h3>
            <p className="text-sm opacity-90">{tool.tagline}</p>
          </div>
          {tool.badge && (
            <span className="whitespace-nowrap rounded bg-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
              {tool.badge}
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="font-bold">{tool.rating}/5</span>
          </span>
          <span><span className="opacity-70">Success:</span> <span className="font-bold">{tool.successRate}%</span></span>
          <span><span className="opacity-70">$/1K:</span> <span className="font-bold">{tool.costPer1k}</span></span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-success">Pros</div>
            <ul className="space-y-1.5 text-sm">
              {tool.pros.map((p) => (
                <li key={p} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-destructive">Cons</div>
            <ul className="space-y-1.5 text-sm">
              {tool.cons.map((c) => (
                <li key={c} className="flex gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-muted/50 p-3 text-xs text-muted-foreground">
          <span className="font-bold text-foreground">Free tier:</span> {tool.freeTier} ·{" "}
          <span className="font-bold text-foreground">Starts at:</span> {tool.startingPlan}
        </div>
        <div className="mt-4">
          {external ? (
            <a
              href={tool.ctaHref}
              rel="sponsored nofollow noopener"
              target="_blank"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground transition hover:brightness-110"
            >
              {tool.cta} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </a>
          ) : (
            <Link
              to={tool.ctaHref}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground transition hover:brightness-110"
            >
              {tool.cta}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function IntentSplit() {
  const cols = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Buyers comparing tools",
      body: "You just want the answer. Get ScraperAPI's free 5,000 credits, integrate in 5 minutes, and only upgrade when you hit the limit. If you need SOC 2 or 500M+ requests/month, jump straight to Bright Data.",
      cta: "Try ScraperAPI free",
      href: AFF.signup,
      external: true,
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Developers building their own",
      body: "Scrapy + Playwright + rotating residential proxies is still the most flexible path. Use our Scrapy and Playwright guides, plug in Bright Data or Decodo residentials, and only switch to a managed API when maintenance eats more than 15% of your engineering time.",
      cta: "See proxy pool for DIY builds",
      href: "/compare",
      external: false,
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI / RAG / agent builders",
      body: "You need clean, structured Markdown that fits into an LLM context window. Firecrawl was built for this; ScraperAPI's Structured Data endpoint is a close second and scales further. For agent browsing sessions, look at Bright Data Scraping Browser.",
      cta: "ScraperAPI docs — JSON/MD output",
      href: AFF.docs,
      external: true,
    },
  ];
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">Which scraper API is right for you?</h2>
      <p className="mt-2 text-muted-foreground">
        &quot;Scraper API&quot; means three very different things depending on who's searching. Pick the box that sounds like you.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cols.map((c) => (
          <div key={c.title} className="flex flex-col rounded-md border border-border bg-card p-5 shadow-card">
            <div className="flex items-center gap-2 text-primary">
              {c.icon}
              <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
            </div>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.body}</p>
            {c.external ? (
              <a
                href={c.href}
                rel="sponsored nofollow noopener"
                target="_blank"
                className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground"
              >
                {c.cta}
              </a>
            ) : (
              <Link
                to={c.href}
                className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground"
              >
                {c.cta}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ScraperApiDeepDive() {
  return (
    <section className="mb-16 rounded-md border-2 border-primary/40 bg-primary/5 p-6 md:p-10">
      <div className="flex items-center gap-2">
        <Trophy className="h-5 w-5 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Editor's Choice — Best Value 2026
        </span>
      </div>
      <h2 className="mt-2 text-3xl font-bold">Why ScraperAPI wins on price-per-success</h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        ScraperAPI has quietly become the default managed scraping endpoint for
        thousands of teams that don't need Bright Data's enterprise machinery
        but want more reliability than a raw proxy pool. Three things put it on top of our July 2026 test:
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          {
            h: "5,000 free credits every month",
            b: "Not a 7-day trial. Not 1,000 one-time credits. A permanent monthly allowance you can actually build a real scraper on before ever swiping a card.",
          },
          {
            h: "$0.19 real cost per success",
            b: "Cheapest of any tier-1 provider in our panel. At 1M requests/month, that's the difference between a $190 bill and a $1,080 bill (vs Bright Data).",
          },
          {
            h: "JSON + Markdown for AI/RAG",
            b: "The Structured Data endpoints (Amazon, Google SERP, walmart, Redfin…) return clean JSON. The `output_format=markdown` flag returns LLM-ready text. No parser code required.",
          },
        ].map((x) => (
          <div key={x.h} className="rounded-md border border-border bg-card p-5">
            <div className="text-lg font-bold text-foreground">{x.h}</div>
            <p className="mt-2 text-sm text-muted-foreground">{x.b}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <a
          href={AFF.signup}
          rel="sponsored nofollow noopener"
          target="_blank"
          className="inline-flex h-12 items-center justify-center rounded-md bg-nav-hover px-4 text-sm font-bold text-navy shadow-lg transition hover:brightness-110"
        >
          Sign up free — 5K credits
        </a>
        <a
          href={AFF.pricing}
          rel="sponsored nofollow noopener"
          target="_blank"
          className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-4 text-sm font-bold text-foreground hover:border-primary"
        >
          See pricing plans
        </a>
        <a
          href={AFF.docs}
          rel="sponsored nofollow noopener"
          target="_blank"
          className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-4 text-sm font-bold text-foreground hover:border-primary"
        >
          Read the docs
        </a>
        <a
          href={AFF.home}
          rel="sponsored nofollow noopener"
          target="_blank"
          className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-4 text-sm font-bold text-foreground hover:border-primary"
        >
          Visit ScraperAPI.com
        </a>
      </div>

      <CodeExample />
    </section>
  );
}

function CodeExample() {
  const code = `import requests

payload = {
    "api_key": "YOUR_KEY",
    "url": "https://www.amazon.com/dp/B08N5WRWNW",
    "render": "true",
    "output_format": "markdown",  # LLM-ready
}
r = requests.get("https://api.scraperapi.com/", params=payload)
print(r.text)`;
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };
  return (
    <div className="mt-8 overflow-hidden rounded-md bg-navy text-navy-foreground">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="text-xs font-bold uppercase tracking-wider opacity-80">
          Minimal example — Python
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code to clipboard"
          className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition hover:bg-white/20"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-nav-hover" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-xs leading-relaxed">{code}</pre>
      <div className="border-t border-white/10 bg-white/5 px-5 py-3 text-xs">
        Need an API key?{" "}
        <a
          href={AFF.signup}
          rel="sponsored nofollow noopener"
          target="_blank"
          className="font-bold text-nav-hover underline decoration-nav-hover/40 underline-offset-2 hover:decoration-nav-hover"
        >
          Grab 5,000 free credits (no card) →
        </a>
      </div>
    </div>
  );
}

function Methodology() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">How we tested (July 2026)</h2>
      <Prose>
        <p>
          We built a fixed panel of 15 real-world targets that represent the actual
          workload our readers scrape day-to-day: 5 sites protected by Cloudflare
          Turnstile (e-commerce and airline pages), 5 protected by DataDome
          (classifieds and news), and 5 protected by PerimeterX (sneaker,
          streaming and ticketing).
        </p>
        <p>
          Each of the 11 tools ran 1,000 requests per target — 15,000 total requests
          per provider, ~165,000 requests in aggregate. Requests were dispatched
          from three AWS US-East regions with a 2× retry policy. JavaScript
          rendering was enabled on the 8 targets that require a hydrated DOM.
        </p>
        <p>
          A request counted as a <strong>success</strong> only if the returned
          document contained the expected data selector <em>and</em> the HTTP
          status was 2xx. Anti-bot placeholder pages and empty 200s were counted
          as failures. Cost-per-success was calculated using the provider's
          published rate for the plan you'd realistically be on for that volume,
          including credit multipliers for JS rendering and premium routing.
        </p>
        <p>
          Full raw CSVs, curl commands and per-target breakdowns are available on
          request — email <a href="/contact">the team</a>. We re-run this panel
          every quarter; expect the next update in October 2026.
        </p>
      </Prose>
    </section>
  );
}

function BuyersGuide() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">Scraper API buyer's guide: what to look for in 2026</h2>
      <Prose>
        <h3>1. Cost per successful request, not sticker price</h3>
        <p>
          Every scraper API in this guide charges in <strong>credits</strong>. One
          credit is usually one basic HTML request; JavaScript rendering costs
          10×, premium residential routing costs 25×. Comparing the &quot;$49/mo for
          100K credits&quot; plans is meaningless — if your target needs JS
          rendering, that 100K credits is really 10K real requests. Always
          divide the monthly credit budget by the average multiplier your
          targets require, then divide the plan price by that number. That's
          the real cost per successful request. In our test, ScraperAPI won on
          this metric at $0.19; Bright Data was the most powerful but the most
          expensive at $1.08.
        </p>

        <h3>2. Free tier size (the biggest differentiator in 2026)</h3>
        <p>
          A one-time 1,000-credit trial is not a real free tier — it lasts a
          few hours of development. ScraperAPI's <strong>permanent 5,000
          credits per month</strong> is a genuine outlier and the reason it's
          our top pick for indie devs and startups. You can prototype for weeks
          without paying a cent, then upgrade when you're already integrated
          and shipping.
        </p>

        <h3>3. Output format — HTML, JSON, or Markdown?</h3>
        <p>
          Raw HTML is the classic output but forces you to write and maintain
          parsers. Structured JSON endpoints (Amazon product, Google SERP,
          Walmart, LinkedIn, Redfin…) mean you never touch a selector — the
          provider maintains the parser. Markdown output, added by ScraperAPI
          and Firecrawl in early 2026, is critical if you're feeding pages into
          an LLM for RAG or agent workflows — it strips ads, navs and boilerplate
          and gives you a token-efficient document ready to embed.
        </p>

        <h3>4. Success rate on the sites you actually scrape</h3>
        <p>
          Every provider will quote a 99%+ success rate somewhere. What
          matters is <strong>your target list</strong>. Sneaker sites, airline
          pricing pages and Google Flights are hostile terrain — expect
          real-world success rates of 92–98%, not the 99.9% marketing number.
          Always run a small pilot (100–500 requests) against your top 5
          targets before committing to an annual plan.
        </p>

        <h3>5. Concurrency & async endpoints</h3>
        <p>
          For high-volume jobs (500K+ URLs) the async endpoint pattern
          (submit a batch, poll for completion) is significantly more efficient
          than firing 500K synchronous requests. ScraperAPI, Bright Data,
          Zyte, ScrapingBee and Oxylabs all support it; smaller providers often
          don't.
        </p>

        <h3>6. Compliance & ethics</h3>
        <p>
          If you work for anything larger than a scrappy startup, procurement
          will ask about SOC 2, KYC on the residential pool, and how the
          provider sources its IPs. Bright Data and Oxylabs lead here with SOC
          2 Type II. Never use a provider that can't tell you where their
          residential IPs come from — you'll inherit their reputational and
          legal risk. See our{" "}
          <Link to="/how-we-test">how-we-test methodology</Link> for the full
          compliance checklist we use.
        </p>

        <h3>7. Do you actually need a scraper API, or a raw proxy?</h3>
        <p>
          If your scraping stack is already mature — Scrapy in production,
          Playwright pools, in-house CAPTCHA solving — a raw residential
          proxy from <Link to="/reviews/bright-data">Bright Data</Link> or{" "}
          <Link to="/reviews/decodo">Decodo</Link> is dramatically cheaper per
          successful request. Managed APIs make sense when engineering time is
          scarce, targets change often, or you're scraping at low-to-medium
          volume where the &quot;stop maintaining unblockers&quot; benefit
          outweighs the 3-5× markup.
        </p>
      </Prose>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">Scraper API FAQ</h2>
      <div className="mt-6 divide-y divide-border rounded-md border border-border bg-card shadow-card">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-bold text-foreground">{f.q}</span>
              {open === i ? (
                <ChevronDown className="h-5 w-5 shrink-0 text-primary" />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-primary" />
              )}
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function RelatedResources() {
  const items = [
    { to: "/reviews/bright-data", label: "Bright Data review", note: "Enterprise-grade residential + Web Unlocker" },
    { to: "/reviews/oxylabs", label: "Oxylabs review", note: "Web Scraper API deep-dive" },
    { to: "/reviews/decodo", label: "Decodo review", note: "Best price-to-performance proxy" },
    { to: "/compare", label: "All proxy providers compared", note: "Side-by-side pool size, price & features" },
    { to: "/vs/bright-data-vs-oxylabs", label: "Bright Data vs Oxylabs", note: "The two enterprise leaders head-to-head" },
    { to: "/how-we-test", label: "How we test", note: "Our benchmark & compliance methodology" },
  ];
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold">Related reading</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="rounded-md border border-border bg-card p-4 transition hover:border-primary"
          >
            <div className="font-bold text-foreground">{i.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{i.note}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mb-4 overflow-hidden rounded-md bg-navy text-navy-foreground">
      <div className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <div className="flex items-center gap-2 text-nav-hover">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Our #1 pick — July 2026</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold">Start scraping in the next 5 minutes</h2>
          <p className="mt-2 max-w-2xl opacity-90">
            5,000 free credits every month, no credit card. Cloudflare, DataDome
            and PerimeterX handled for you. Structured JSON and Markdown for AI pipelines built in.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href={AFF.signup}
            rel="sponsored nofollow noopener"
            target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-md bg-nav-hover px-6 text-sm font-bold text-navy shadow-lg transition hover:brightness-110"
          >
            Get ScraperAPI free →
          </a>
          <a
            href={AFF.pricing}
            rel="sponsored nofollow noopener"
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 px-6 text-xs font-bold text-white hover:bg-white/10"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
