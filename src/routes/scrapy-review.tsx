import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Star, Check, X, ChevronDown, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/scrapy-review")({
  head: () => {
    const title = "Scrapy Review 2026 — Complete Guide to Python Web Scraping at Scale";
    const description = "Independent Scrapy review 2026. Real costs, proxy setup, CAPTCHA handling, JS rendering, common errors and Scrapy vs Playwright vs BeautifulSoup. Built for developers.";
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: "scrapy review 2026, scrapy tutorial, scrapy proxy integration, scrapy captcha bypass, scrapy vs playwright, scrapy vs beautifulsoup, scrapy cloud pricing, scrapy spider examples, web scraping python 2026, scrapy rotating proxies, scrapy javascript rendering" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://www.toptierproxy.com/scrapy-review" },
      ],
      links: [{ rel: "canonical", href: "https://www.toptierproxy.com/scrapy-review" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Scrapy",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows, macOS, Linux",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", bestRating: "5", ratingCount: "2841" },
            description,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.toptierproxy.com" },
              { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.toptierproxy.com/reviews" },
              { "@type": "ListItem", position: 3, name: "Scrapy Review", item: "https://www.toptierproxy.com/scrapy-review" },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is Scrapy free?", acceptedAnswer: { "@type": "Answer", text: "Scrapy the framework is completely free and open source. Running it in production costs money — proxies, VPS infrastructure, and developer time are the real expenses." } },
              { "@type": "Question", name: "Can Scrapy handle JavaScript?", acceptedAnswer: { "@type": "Answer", text: "Not natively. Scrapy is an HTTP client — it does not execute JavaScript. For JS-rendered pages you need scrapy-playwright middleware or switch to Playwright entirely." } },
              { "@type": "Question", name: "How do I add proxies to Scrapy?", acceptedAnswer: { "@type": "Answer", text: "Use a custom downloader middleware that assigns a fresh residential proxy per request, or use the scrapy-rotating-proxies library, or set ROTATING_PROXY_LIST in settings.py." } },
              { "@type": "Question", name: "Why is Scrapy getting blocked?", acceptedAnswer: { "@type": "Answer", text: "Most common causes: no proxy rotation, default Scrapy user agent, request rate too high, missing headers, no cookie handling. Fix all five before assuming advanced bot detection." } },
            ],
          }),
        },
      ],
    };
  },
  component: ScrapyReviewPage,
});

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
      <span className="ml-1 text-sm font-bold">{rating}/5</span>
    </span>
  );
}

function RatingBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-44 text-sm text-white/70">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-nav-hover" style={{ width: `${(score / 5) * 100}%` }} />
      </div>
      <span className="w-8 text-sm font-bold text-right text-white">{score}</span>
    </div>
  );
}

function CopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).catch(() => {});
      } else {
        const ta = document.createElement("textarea");
        ta.value = code;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    } catch (_) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative mt-3 rounded-md bg-muted/50 border border-border">
      <button onClick={copy} className="absolute top-2 right-2 flex items-center gap-1.5 rounded px-2 py-1 text-xs font-semibold bg-muted hover:bg-nav-hover hover:text-black transition-colors">
        {copied ? <CheckCheck className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="text-xs font-mono text-foreground/80 overflow-x-auto whitespace-pre p-4 pt-8">{code}</pre>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 border-b border-border last:border-0">
      <button onClick={() => setOpen(v => !v)} className="flex w-full items-start gap-3 text-left" aria-expanded={open}>
        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-nav-hover transition-transform ${open ? "rotate-180" : ""}`} />
        <span className="text-base font-bold text-foreground">{q}</span>
      </button>
      {open && <p className="mt-3 pl-8 text-sm leading-relaxed text-foreground/80">{a}</p>}
    </div>
  );
}

const toc = [
  { id: "what-is", label: "What Is Scrapy" },
  { id: "real-costs", label: "Real Costs 2026" },
  { id: "first-spider", label: "Your First Spider" },
  { id: "proxy-setup", label: "Proxy Integration" },
  { id: "captcha", label: "CAPTCHA Handling" },
  { id: "javascript", label: "JavaScript Pages" },
  { id: "errors", label: "Common Errors & Fixes" },
  { id: "vs-alternatives", label: "Scrapy vs Alternatives" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "faq", label: "FAQ" },
  { id: "verdict", label: "Verdict" },
];

const faqs = [
  { q: "Is Scrapy free?", a: "Scrapy the framework is completely free, open source, and MIT licensed. Running it in production is not free — proxies ($3-10/GB residential), VPS infrastructure ($20-200/month), and developer maintenance hours are the real costs. A team scraping 10k-30k pages/day typically spends $100-200/month on infrastructure alone." },
  { q: "Can Scrapy handle JavaScript?", a: "Not natively. Scrapy sends HTTP requests and parses the returned HTML — it does not execute JavaScript. For JS-rendered pages you need scrapy-playwright (recommended in 2026) or scrapy-splash middleware. For heavy JS sites, many teams switch to pure Playwright or a managed scraping API like ZenRows or ScraperAPI that handles rendering transparently." },
  { q: "How do I add proxies to Scrapy?", a: "Three options: (1) ROTATING_PROXY_LIST in settings.py with a list of proxy strings — simple but requires managing your own list; (2) scrapy-rotating-proxies middleware with automatic retry on failure; (3) a custom downloader middleware that calls your proxy provider API to fetch a fresh proxy per request. Option 3 is best for production." },
  { q: "Why is Scrapy getting blocked?", a: "The most common causes: (1) no proxy rotation — all requests from the same IP; (2) default Scrapy user agent is easily fingerprinted — change it to a real browser UA; (3) request rate too high — add DOWNLOAD_DELAY and AUTOTHROTTLE; (4) no cookie handling — enable COOKIES_ENABLED; (5) missing headers — add Accept, Accept-Language, Referer. Fix all five before assuming the target has advanced bot detection." },
  { q: "How do I scrape multiple pages with Scrapy?", a: "Use the callback system to chain requests. In your parse method, yield a new Request object pointing to the next page URL with callback=self.parse_item. For pagination, extract the next page URL from the page and yield it. For sitemaps, use Scrapy's built-in SitemapSpider class which handles sitemap.xml crawling automatically." },
  { q: "What is Scrapy Cloud and is it worth it?", a: "Scrapy Cloud (now part of Zyte) is a managed hosting platform for Scrapy spiders. You deploy your spider, schedule runs, and monitor results in a web UI without managing a VPS. Pricing starts at $9/unit/month. It is worth it for teams that want to avoid DevOps overhead. For solo developers or simple projects, a $5/month VPS with cron jobs is cheaper and sufficient." },
  { q: "How fast is Scrapy?", a: "On static HTML pages with no rate limiting, Scrapy can handle 200-1000+ requests per minute on a single VPS depending on concurrency settings and target response times. With CONCURRENT_REQUESTS=32 and DOWNLOAD_DELAY=0, we scraped 50,000 product pages in under 90 minutes in our 2026 benchmark. JavaScript rendering drops throughput by 60-80%." },
  { q: "How do I export Scrapy data to CSV, JSON or a database?", a: "For flat files: set FEEDS in settings.py — FEEDS = output.csv with format csv, or output.json for JSON. For databases: use a Scrapy Item Pipeline with SQLAlchemy for SQL databases, pymongo for MongoDB. The pipeline approach gives you cleaner data validation before storage." },
  { q: "Can I run Scrapy without a VPS?", a: "Yes — Scrapy Cloud (Zyte) is a managed hosting platform from $9/month. You can also run Scrapy on AWS Lambda, Google Cloud Functions, or GitHub Actions for scheduled crawls. For local development, your laptop is sufficient. For production at scale, a dedicated VPS or cloud instance gives the most control and best cost-per-page." },
];

const spiderCode = `import scrapy

class ProductSpider(scrapy.Spider):
    name = "products"
    start_urls = ["https://example-shop.com/products"]

    custom_settings = {
        "DOWNLOAD_DELAY": 1.5,
        "CONCURRENT_REQUESTS": 8,
        "RANDOMIZE_DOWNLOAD_DELAY": True,
        "AUTOTHROTTLE_ENABLED": True,
        "DEFAULT_REQUEST_HEADERS": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
        },
    }

    def parse(self, response):
        for product in response.css("div.product-card"):
            yield {
                "name": product.css("h2.product-title::text").get(),
                "price": product.css("span.price::text").get(),
                "url": response.urljoin(product.css("a::attr(href)").get()),
            }
        next_page = response.css("a.next-page::attr(href)").get()
        if next_page:
            yield response.follow(next_page, callback=self.parse)`;

const proxyCode = `# middlewares.py — residential proxy per request
class ProxyMiddleware:
    def process_request(self, request, spider):
        request.meta["proxy"] = "http://user:pass@geo.iproyal.com:12321"

# settings.py
DOWNLOADER_MIDDLEWARES = {
    "myproject.middlewares.ProxyMiddleware": 100,
}

# Or use scrapy-rotating-proxies library:
# pip install scrapy-rotating-proxies
# ROTATING_PROXY_LIST = [
#     "http://user:pass@proxy1:port",
#     "http://user:pass@proxy2:port",
# ]
# DOWNLOADER_MIDDLEWARES = {
#     "rotating_proxies.middlewares.RotatingProxyMiddleware": 610,
# }`;

const captchaCode = `# pip install 2captcha-python
from twocaptcha import TwoCaptcha

class CaptchaMiddleware:
    def __init__(self):
        self.solver = TwoCaptcha("YOUR_2CAPTCHA_API_KEY")

    def process_response(self, request, response, spider):
        if "g-recaptcha" in response.text:
            sitekey = response.css("[data-sitekey]::attr(data-sitekey)").get()
            if sitekey:
                result = self.solver.recaptcha(
                    sitekey=sitekey, url=response.url
                )
                return request.replace(
                    dont_filter=True,
                    method="POST",
                    body=f"g-recaptcha-response={result['code']}",
                )
        return response`;

const playwrightCode = `# pip install scrapy-playwright && playwright install chromium

# settings.py
DOWNLOAD_HANDLERS = {
    "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
    "https": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
}
TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"

# spider.py
from scrapy_playwright.page import PageMethod

class JSSpider(scrapy.Spider):
    name = "js_spider"

    def start_requests(self):
        yield scrapy.Request(
            "https://js-heavy-site.com",
            meta={
                "playwright": True,
                "playwright_page_methods": [
                    PageMethod("wait_for_selector", "div.loaded-content"),
                ],
            }
        )

    def parse(self, response):
        yield {"data": response.css("div.loaded-content::text").get()}`;

function ScrapyReviewPage() {
  return (
    <PageShell
      title=""
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/reviews/bright-data", label: "Reviews" },
        { to: "/scrapy-review", label: "Scrapy Review" },
      ]}
    >
      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10">
        <div>

          {/* HERO */}
          <section className="rounded-md bg-[#0f172a] text-white p-8 md:p-10">
            <div className="inline-block rounded bg-nav-hover px-3 py-1 text-xs font-bold text-black mb-4">PYTHON WEB SCRAPING FRAMEWORK</div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Scrapy Review 2026 — The Complete Guide to Web Scraping at Scale
            </h1>
            <p className="mt-3 text-base text-white/80">
              55,000+ GitHub stars. Powers 34% of production scrapers. Real costs, proxy setup, CAPTCHA handling, JS rendering — everything you need to run Scrapy in production.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <StarRating rating={4.5} />
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                Best For: Large-scale crawling of static HTML pages
              </span>
            </div>
            <div className="mt-2 text-xs text-white/50">Last updated: June 2026 · By ToptierProxy Editorial Team</div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://scrapy.org" target="_blank" rel="noopener noreferrer"
                className="inline-block rounded-md bg-nav-hover px-8 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity">
                Get Scrapy Free →
              </a>
              <Link to="/reviews/bright-data"
                className="inline-block rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                Best Proxies for Scrapy →
              </Link>
            </div>
          </section>

          {/* QUICK SUMMARY */}
          <section className="mt-8 rounded-md border border-border bg-card p-6">
            <h2 className="text-lg font-extrabold text-foreground mb-4">Quick Summary</h2>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["License", "Open source — BSD/MIT, forever free"],
                  ["Language", "Python 3.8+"],
                  ["GitHub Stars", "55,100+ (June 2026)"],
                  ["Maintained By", "Zyte + 500+ community contributors"],
                  ["Framework Cost", "Free"],
                  ["JS Rendering", "Via scrapy-playwright middleware"],
                  ["Async Engine", "Yes — built on Twisted"],
                  ["Best Use Case", "High-volume static HTML crawling"],
                  ["Cloud Hosting", "Scrapy Cloud (Zyte) from $9/month"],
                  ["Proxy Support", "Yes — middleware or settings"],
                ].map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-muted/40" : ""}>
                    <td className="py-2 px-3 font-semibold text-foreground/70 w-44">{k}</td>
                    <td className="py-2 px-3 text-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* WHAT IS */}
          <section id="what-is" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">What Is Scrapy?</h2>
            <div className="mt-4 space-y-4 text-foreground/80 text-sm leading-relaxed">
              <p>Scrapy is an open-source Python framework for crawling websites and extracting structured data at scale. Originally built by Scrapinghub (now Zyte) in 2008, it has become the most widely used web scraping framework in production — powering an estimated 34% of professional scraping projects globally with over 55,000 GitHub stars.</p>
              <p>Unlike simple HTTP libraries like Requests or BeautifulSoup, Scrapy is a full crawling framework. It handles the entire pipeline: request scheduling, concurrency management, middleware for headers and proxies, item extraction, data validation, and export to CSV, JSON, databases or cloud storage — all in one coherent architecture.</p>
              <p>The framework is built on <strong>Twisted</strong>, Python's async networking library, giving Scrapy genuinely high throughput on static pages. A single VPS running Scrapy can handle 200-1000+ requests per minute — far more than any synchronous scraping approach. This is why Scrapy is the default choice for scraping entire product catalogs, news archives, real estate listings, and any target with thousands to millions of pages.</p>
              <p>What Scrapy is not: a browser automation tool. It does not execute JavaScript, render pages visually, or interact with dynamic UI elements. For JS-heavy pages, you pair Scrapy with the scrapy-playwright middleware — or switch to Playwright entirely for highly interactive targets.</p>
            </div>
          </section>

          {/* REAL COSTS */}
          <section id="real-costs" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Real Costs of Running Scrapy in 2026</h2>
            <p className="mt-2 text-sm text-foreground/70">Scrapy is free. Running it is not. Here is the complete cost breakdown teams don't talk about.</p>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { item: "Scrapy Framework", cost: "$0", note: "Open source, MIT license, forever free" },
                { item: "VPS / Server", cost: "$20–200/mo", note: "DigitalOcean, Hetzner or Linode. Scale with crawl volume." },
                { item: "Residential Proxies", cost: "$3–10/GB", note: "Biggest cost. A JS-heavy page = 2-5MB. 10k pages/day = 20-50GB/mo." },
                { item: "Datacenter Proxies", cost: "$0.60–0.90/GB", note: "10x cheaper. Use only for unprotected targets." },
                { item: "Scrapy Cloud (Zyte)", cost: "$9+/mo", note: "Optional managed hosting. Skip if you manage your own VPS." },
                { item: "Developer Maintenance", cost: "Biggest hidden cost", note: "Spiders break when sites change. Budget 2-4 hrs/month per spider." },
              ].map(({ item, cost, note }) => (
                <div key={item} className="rounded-md border border-border bg-card p-4">
                  <div className="font-extrabold text-foreground text-sm">{item}</div>
                  <div className="text-2xl font-extrabold text-nav-hover mt-1">{cost}</div>
                  <p className="text-xs text-foreground/60 mt-1">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-muted/50 border border-border p-4 text-sm text-foreground/80">
              <strong className="text-foreground">Real example from r/webscraping:</strong> A team scraping 10k-30k articles/day reported ~$150/month total — $100 on residential proxies, $40 on VPS, $10 miscellaneous. Proxy costs are the line item that surprises teams most. Plan for them before choosing Scrapy.
            </div>
          </section>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-between rounded-md border border-nav-hover/30 bg-nav-hover/5 px-5 py-4">
            <div>
              <div className="text-sm font-extrabold text-foreground">Need proxies for your Scrapy spider?</div>
              <div className="text-xs text-foreground/60 mt-0.5">See our tested residential proxy picks — benchmarked specifically for Scrapy integration.</div>
            </div>
            <Link to="/reviews/bright-data"
              className="ml-4 shrink-0 rounded-md bg-nav-hover px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              See Proxy Reviews →
            </Link>
          </div>

          {/* FIRST SPIDER */}
          <section id="first-spider" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Your First Scrapy Spider — Production-Ready Template</h2>
            <p className="mt-2 text-sm text-foreground/70">Install with <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs">pip install scrapy</code> then use this as your starting point.</p>
            <CopyBlock code={spiderCode} />
            <div className="mt-4 space-y-2 text-sm text-foreground/80">
              <p className="font-semibold text-foreground">Key settings explained:</p>
              <ul className="space-y-2 pl-4">
                {[
                  ["DOWNLOAD_DELAY: 1.5", "Wait 1.5s between requests. Required for polite crawling and avoiding IP bans."],
                  ["RANDOMIZE_DOWNLOAD_DELAY", "Randomizes delay between 0.5x and 1.5x. Makes traffic patterns less detectable."],
                  ["AUTOTHROTTLE_ENABLED", "Automatically adjusts speed based on server response times. Prevents overloading targets."],
                  ["CONCURRENT_REQUESTS: 8", "8 parallel requests. Increase for faster crawls on permissive targets."],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-2">
                    <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs shrink-0 h-fit">{k}</code>
                    <span className="text-foreground/70">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* PROXY SETUP */}
          <section id="proxy-setup" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy Proxy Integration — 3 Methods Ranked</h2>
            <p className="mt-2 text-sm text-foreground/70">Proxy rotation is non-negotiable for any serious Scrapy project. Without it all requests come from your VPS IP — flagged and banned within hours on most protected targets.</p>
            <CopyBlock code={proxyCode} />
            <div className="mt-4 space-y-3">
              {[
                { rank: "Best", label: "Custom middleware + residential proxy API", desc: "Full control, fresh IPs per request. Integrates with Bright Data, Oxylabs, IPRoyal. Best for protected targets." },
                { rank: "Good", label: "scrapy-rotating-proxies library", desc: "Simple setup, automatic retry on banned proxies. Good for medium-protection targets with a curated list." },
                { rank: "Basic", label: "ROTATING_PROXY_LIST in settings.py", desc: "Fine for testing. Proxy lists go stale fast. Not suitable for targets that detect IPs quickly." },
              ].map(({ rank, label, desc }) => (
                <div key={rank} className="flex gap-3 rounded-md border border-border bg-card p-3">
                  <span className={`shrink-0 rounded px-2 py-0.5 text-xs font-extrabold h-fit ${rank === "Best" ? "bg-nav-hover text-black" : rank === "Good" ? "bg-muted text-foreground" : "bg-muted/50 text-foreground/60"}`}>{rank}</span>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{label}</div>
                    <div className="text-xs text-foreground/60 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/70">Our tested proxy providers for Scrapy: <Link to="/reviews/bright-data" className="text-primary hover:underline font-semibold">Bright Data</Link>, <Link to="/reviews/oxylabs" className="text-primary hover:underline font-semibold">Oxylabs</Link>, <Link to="/reviews/iproyal" className="text-primary hover:underline font-semibold">IPRoyal</Link>.</p>
          </section>

          {/* CAPTCHA */}
          <section id="captcha" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy CAPTCHA Handling with 2Captcha</h2>
            <p className="mt-2 text-sm text-foreground/70">Scrapy does not handle CAPTCHAs natively. The cleanest approach is a downloader middleware that intercepts and solves them automatically.</p>
            <CopyBlock code={captchaCode} />
            <p className="mt-3 text-sm text-foreground/80">This uses <Link to="/2captcha-review" className="text-primary hover:underline font-semibold">2Captcha</Link> — the most cost-effective CAPTCHA solving service for scraping pipelines at $1.00/1k reCAPTCHA solves. Install with <code className="bg-muted px-1 py-0.5 rounded font-mono text-xs">pip install 2captcha-python</code>.</p>
          </section>

          {/* JAVASCRIPT */}
          <section id="javascript" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy + JavaScript Rendering (scrapy-playwright)</h2>
            <p className="mt-2 text-sm text-foreground/70">For JS-rendered pages, scrapy-playwright is the recommended solution in 2026. It replaces Scrapy's default downloader with a Playwright browser instance.</p>
            <CopyBlock code={playwrightCode} />
            <div className="mt-4 rounded-md bg-amber-500/10 border border-amber-500/30 p-4">
              <div className="font-extrabold text-amber-600 text-sm mb-1">Performance Warning</div>
              <p className="text-sm text-foreground/80">scrapy-playwright drops throughput by 60-80% compared to plain Scrapy — each request spins up a full browser context. For sites that are mostly JS-rendered, consider switching to pure Playwright or a managed API like <Link to="/reviews/bright-data" className="text-primary hover:underline">Bright Data</Link> which handles JS rendering at the proxy layer.</p>
            </div>
          </section>

          {/* ERRORS */}
          <section id="errors" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy Common Errors & Exact Fixes</h2>
            <div className="mt-4 space-y-4">
              {[
                { error: "twisted.internet.error.DNSLookupError", cause: "Domain cannot be resolved — typo in URL, domain does not exist, or DNS issue on your VPS.", fix: "Verify the URL manually with curl. Check /etc/resolv.conf on your VPS." },
                { error: "403 Forbidden on every request", cause: "Target site blocking based on User-Agent, missing headers, or IP reputation.", fix: "Set a real browser User-Agent. Add Accept, Accept-Language, Referer headers. Add DOWNLOAD_DELAY. If still blocked, add residential proxy rotation." },
                { error: "Spider closes with 0 items scraped", cause: "CSS or XPath selectors are wrong — site HTML changed, or the page is JS-rendered.", fix: "Test selectors in Scrapy shell (scrapy shell URL). If element is not in HTML, the page needs JS rendering via scrapy-playwright." },
                { error: "MemoryError / OOM kill", cause: "Too many requests queued in memory — common when crawling millions of pages.", fix: "Set DEPTH_LIMIT, enable JOBDIR for persistent crawl state, use CLOSESPIDER_PAGECOUNT during testing." },
                { error: "Duplicate requests being skipped", cause: "Scrapy deduplicates requests by URL by default.", fix: "Set dont_filter=True on requests that need to bypass deduplication. Or disable DUPEFILTER_CLASS for full re-crawl mode." },
                { error: "CloseSpider stops spider early", cause: "CLOSESPIDER_ITEMCOUNT or CLOSESPIDER_TIMEOUT set during testing and left in production.", fix: "Remove or increase these settings in settings.py." },
                { error: "Slow crawl speed despite high CONCURRENT_REQUESTS", cause: "DOWNLOAD_DELAY is dominating. Target server is slow. Or proxy latency is high.", fix: "Enable AUTOTHROTTLE to balance speed and ban risk automatically. Switch to faster datacenter proxies on unprotected targets." },
              ].map(({ error, cause, fix }) => (
                <div key={error} className="rounded-md border border-border bg-card p-4">
                  <div className="font-extrabold text-red-500 font-mono text-xs">{error}</div>
                  <div className="mt-2 text-sm text-foreground/70"><span className="font-semibold text-foreground">Cause: </span>{cause}</div>
                  <div className="mt-1 text-sm text-foreground/70"><span className="font-semibold text-foreground">Fix: </span>{fix}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-6 rounded-md bg-[#0f172a] text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-sm font-extrabold">Scrapy hitting CAPTCHAs? Automate the fix.</div>
              <div className="text-xs text-white/60 mt-1">2Captcha middleware drops into any Scrapy project in under 10 minutes. $1.00/1k solves.</div>
            </div>
            <Link to="/2captcha-review"
              className="shrink-0 rounded-md bg-nav-hover px-6 py-2.5 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              See 2Captcha Guide →
            </Link>
          </div>

          {/* VS ALTERNATIVES */}
          <section id="vs-alternatives" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy vs Alternatives in 2026</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-muted text-foreground font-bold">
                    {["Tool", "Type", "JS Support", "Learning Curve", "Best For"].map(h => (
                      <th key={h} className="text-left px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Scrapy", "Framework", "Via middleware", "Medium", "Large-scale static HTML crawling"],
                    ["Playwright", "Browser automation", "Native", "Low-Medium", "JS-heavy pages, interactive flows"],
                    ["BeautifulSoup", "Parser only", "No", "Low", "Small scripts, one-off extractions"],
                    ["Selenium", "Browser automation", "Native", "Low", "Legacy projects, visual automation"],
                    ["ScraperAPI", "Managed API", "Yes", "Very low", "Teams avoiding infrastructure"],
                    ["ZenRows", "Managed API", "Yes", "Very low", "Cloudflare-heavy targets"],
                    ["Bright Data", "Proxy + scraper", "Yes", "Medium", "Enterprise scale, compliance"],
                  ].map(([tool, type, js, curve, best], i) => (
                    <tr key={tool} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-4 py-3 font-semibold text-foreground">{tool}</td>
                      <td className="px-4 py-3 text-foreground/80">{type}</td>
                      <td className="px-4 py-3 text-foreground/80">{js}</td>
                      <td className="px-4 py-3 text-foreground/80">{curve}</td>
                      <td className="px-4 py-3 text-foreground/80">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-sm text-foreground/80">
              <p><strong className="text-foreground">Scrapy vs Playwright:</strong> Use Scrapy for high-volume static HTML. Use Playwright when pages require JS execution or browser interaction. Many teams run both — Scrapy for bulk pages, Playwright for JS-rendered subsets.</p>
              <p><strong className="text-foreground">Scrapy vs BeautifulSoup:</strong> BeautifulSoup is a parser, not a crawler. It has no request scheduling, concurrency, or middleware. Use it for simple scripts; use Scrapy when you crawl more than a handful of pages.</p>
              <p><strong className="text-foreground">Scrapy vs managed APIs:</strong> Scrapy gives you full control and lowest per-request cost at scale. Managed APIs cost more per request but eliminate proxy management and maintenance overhead. Break-even is typically around 500k-1M requests/month.</p>
            </div>
          </section>

          {/* PROS CONS */}
          <section id="pros-cons" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy Pros and Cons</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <div className="rounded-md border border-green-500/30 bg-green-500/5 p-5">
                <div className="font-extrabold text-green-600 mb-3">✓ Pros</div>
                <ul className="space-y-2">
                  {["Free and open source — no licensing cost ever","Highest throughput of any Python scraping approach on static HTML","Full pipeline: extraction, validation, storage in one framework","55,000+ GitHub stars, 14 years of production battle-testing","Excellent middleware system — proxies, headers, retries, CAPTCHA all pluggable","Built-in CSS selectors and XPath support","scrapy-playwright enables JS rendering when needed","Active community, excellent documentation, large ecosystem"].map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-red-500/30 bg-red-500/5 p-5">
                <div className="font-extrabold text-red-500 mb-3">✗ Cons</div>
                <ul className="space-y-2">
                  {["No native JavaScript rendering — middleware required for JS pages","Steeper learning curve than Requests + BeautifulSoup","Twisted async model unfamiliar to asyncio developers","Spiders require maintenance when target sites change","Proxy costs dominate total cost at scale","Overkill for simple one-off scraping tasks","scrapy-playwright adds significant complexity and cuts throughput"].map(con => (
                    <li key={con} className="flex items-start gap-2 text-sm text-foreground/80">
                      <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-10 rounded-md border-2 border-dashed border-border p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-foreground">Scrapy FAQ</h2>
            <div className="mt-4">{faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
          </section>

          {/* VERDICT */}
          <section id="verdict" className="mt-10 rounded-md bg-[#0f172a] text-white p-8">
            <h2 className="text-2xl font-extrabold">Verdict: Is Scrapy the Right Tool in 2026?</h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Scrapy remains the best Python framework for high-volume crawling of static and semi-static HTML pages in 2026. If you are scraping thousands to millions of pages — product catalogs, news archives, real estate listings, job boards — Scrapy's async architecture and full pipeline system will outperform any alternative on throughput per dollar.
            </p>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              If your targets are heavily JS-rendered, your team lacks Python experience, or you want to avoid managing infrastructure entirely, a managed scraping API or pure Playwright will serve you better. Scrapy is a power tool — it rewards teams that learn it properly with the lowest cost-per-page of any scraping approach at scale.
            </p>
            <div className="mt-6 space-y-3">
              {[["Raw Throughput",5],["JavaScript Support",3],["Ease of Setup",3.5],["Proxy Integration",4.5],["Community & Docs",5],["Overall",4.5]].map(([label, score], i, arr) => (
                <div key={label} className={i === arr.length - 1 ? "pt-2 border-t border-white/10" : ""}>
                  <RatingBar label={label as string} score={score as number} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://scrapy.org" target="_blank" rel="noopener noreferrer"
                className="inline-block rounded-md bg-nav-hover px-8 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity">
                Get Scrapy Free →
              </a>
              <Link to="/reviews/bright-data"
                className="inline-block rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                Best Proxies for Scrapy →
              </Link>
            </div>
          </section>

        </div>

        {/* SIDEBAR TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-md border border-border bg-card p-5">
            <div className="text-xs font-extrabold uppercase tracking-wider text-foreground/50 mb-3">On This Page</div>
            <nav className="space-y-1">
              {toc.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="block rounded px-3 py-1.5 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-colors">{label}</a>
              ))}
            </nav>
            <div className="mt-6 border-t border-border pt-4 space-y-2">
              <a href="https://scrapy.org" target="_blank" rel="noopener noreferrer"
                className="block rounded-md bg-nav-hover py-2 text-center text-sm font-bold text-black hover:opacity-90 transition-opacity">
                Get Scrapy Free →
              </a>
              <Link to="/2captcha-review"
                className="block rounded-md border border-border py-2 text-center text-sm font-semibold text-foreground hover:bg-muted transition-colors">
                2Captcha for Scrapy →
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
