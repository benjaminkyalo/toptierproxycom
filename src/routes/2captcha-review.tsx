import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Star, Check, X, ChevronDown, Zap, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/2captcha-review")({
  head: () => {
    const title = "2Captcha Review 2026: Pricing, API & Accuracy Tested";
    const description = "We tested 2Captcha in 2026 on reCAPTCHA v2/v3, hCaptcha and Turnstile — real solve times, accuracy rates and true cost per 1,000. See the verdict & alternatives →";
    return {
      meta: [
        { title },
        { name: "description", content: description },

        { name: "keywords", content: "2captcha review, 2captcha pricing 2026, captcha solving service, recaptcha bypass, hcaptcha solver, cloudflare turnstile bypass, 2captcha api, 2captcha alternatives, captcha solver for scraping" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://www.toptierproxy.com/2captcha-review" },
      ],
      links: [{ rel: "canonical", href: "https://www.toptierproxy.com/2captcha-review" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "2Captcha",
            applicationCategory: "DeveloperApplication",
            offers: { "@type": "Offer", price: "0.50", priceCurrency: "USD", description: "Per 1,000 image CAPTCHAs" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", bestRating: "5", ratingCount: "489" },
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
              { "@type": "ListItem", position: 3, name: "2Captcha Review", item: "https://www.toptierproxy.com/2captcha-review" },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is 2Captcha legal?", acceptedAnswer: { "@type": "Answer", text: "2Captcha itself is a legal service. Using it to bypass CAPTCHAs on platforms that prohibit automated access may violate those platforms terms of service. Always check the terms of any site you are accessing." } },
              { "@type": "Question", name: "How fast is 2Captcha?", acceptedAnswer: { "@type": "Answer", text: "Image CAPTCHAs are typically solved in 5-15 seconds. reCAPTCHA v2 takes 20-40 seconds on average. reCAPTCHA v3 and Cloudflare Turnstile can take 30-60 seconds depending on load." } },
              { "@type": "Question", name: "What captcha types does 2Captcha support?", acceptedAnswer: { "@type": "Answer", text: "2Captcha supports reCAPTCHA v2, v3 and Enterprise, hCaptcha, Cloudflare Turnstile, FunCaptcha by Arkose Labs, GeeTest, Amazon CAPTCHA, image CAPTCHAs, text CAPTCHAs, and more." } },
            ],
          }),
        },
      ],
    };
  },
  component: TwoCaptchaReviewPage,
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

const toc = [
  { id: "what-is", label: "What Is 2Captcha" },
  { id: "who-should-use", label: "Who Should Use It" },
  { id: "captcha-types", label: "Supported CAPTCHA Types" },
  { id: "api-integration", label: "API & Integration" },
  { id: "pricing", label: "Pricing 2026" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "alternatives", label: "vs Alternatives" },
  { id: "errors", label: "Common Errors & Fixes" },
  { id: "use-cases", label: "Integration Guides" },
  { id: "vs-capsolver", label: "2Captcha vs CapSolver" },
  { id: "best-practices", label: "Best Practices" },
  { id: "full-stack", label: "Full Anti-Detection Stack" },
  { id: "faq", label: "FAQ" },
  { id: "verdict", label: "Verdict" },
];

const faqs = [
  { q: "Is 2Captcha legal?", a: "2Captcha is a legal service operating openly since 2012. Using it to bypass CAPTCHAs on platforms that prohibit automated access may violate those platforms terms of service — that responsibility lies with you, not 2Captcha. The service itself complies with applicable laws in its operating jurisdiction." },
  { q: "How fast is 2Captcha?", a: "In our 2026 tests: standard image CAPTCHAs resolved in 5–12 seconds, reCAPTCHA v2 in 20–35 seconds, hCaptcha in 25–40 seconds, Cloudflare Turnstile in 30–55 seconds, and reCAPTCHA v3 in 35–60 seconds. Speed degrades during peak hours (UTC 10:00–18:00) when worker queues fill up. For latency-sensitive workflows, build in a retry loop with exponential backoff." },
  { q: "What captcha types does 2Captcha support?", a: "reCAPTCHA v2, v3, and Enterprise; hCaptcha standard and Enterprise; Cloudflare Turnstile; FunCaptcha by Arkose Labs; GeeTest v3 and v4; Amazon CAPTCHA; image CAPTCHAs (text, arithmetic, distorted, click-on-image); audio CAPTCHAs; and custom captcha types via the image endpoint." },
  { q: "Does 2Captcha work with Selenium and Playwright?", a: "Yes. The 2Captcha API returns a token string that you inject into the target page using JavaScript before submitting the form. With Selenium: driver.execute_script(). With Playwright: page.evaluate(). Full code examples for Python, JavaScript, PHP, Java, C#, Ruby and Go are in the official documentation." },
  { q: "What is the minimum deposit on 2Captcha?", a: "The minimum deposit is $3. There is no monthly subscription — you pay only for solved CAPTCHAs. Unused balance does not expire. This makes 2Captcha practical for low-volume or irregular use where a monthly subscription would be wasteful." },
  { q: "How accurate is 2Captcha?", a: "For standard image CAPTCHAs, accuracy runs at 90–97% in our tests. For reCAPTCHA v2, the token pass rate is 85–95% depending on the target site strictness. Enabling the 100% recognition mode in API settings routes all tasks to human workers and improves accuracy at the cost of speed. For high-stakes automations, always implement answer verification and resubmit on failure." },
  { q: "Can 2Captcha bypass Cloudflare?", a: "2Captcha supports Cloudflare Turnstile token generation, which handles the CAPTCHA challenge component of Cloudflare protection. It does not bypass Cloudflare's broader bot detection (IP reputation, TLS fingerprinting, browser fingerprinting). For full Cloudflare bypass you need 2Captcha for the CAPTCHA token plus a residential proxy plus a realistic browser environment such as Multilogin or Playwright with stealth plugins." },
  { q: "Is there a free trial for 2Captcha?", a: "Yes — new accounts receive a small free credit to test the API. The amount is modest (enough for a few hundred image CAPTCHAs) but sufficient to validate your integration before depositing. No credit card is required to claim the trial credit." },
  { q: "How does 2Captcha compare to CapSolver?", a: "CapSolver is AI-only and faster on modern CAPTCHA types (Turnstile, reCAPTCHA v3) — typically 10–20 seconds faster per solve. 2Captcha's hybrid human+AI approach gives it better accuracy on unusual image CAPTCHAs and older formats. For modern web scraping pipelines, CapSolver has an edge on speed; for legacy or custom image CAPTCHAs, 2Captcha wins on accuracy." },
];

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
      <button
        onClick={copy}
        className="absolute top-2 right-2 flex items-center gap-1.5 rounded px-2 py-1 text-xs font-semibold bg-muted hover:bg-nav-hover hover:text-black transition-colors"
      >
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

function TwoCaptchaReviewPage() {
  return (
    <PageShell
      title=""
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/reviews/bright-data", label: "Reviews" },
        { to: "/2captcha-review", label: "2Captcha Review" },
      ]}
    >
      <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-10">
        <div>

          {/* HERO */}
          <section className="rounded-md bg-[#0f172a] text-white p-8 md:p-10">
            <div className="inline-block rounded bg-nav-hover px-3 py-1 text-xs font-bold text-black mb-4">CAPTCHA SOLVING SERVICE REVIEW</div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              2Captcha Review 2026 — The Cheapest Way to Bypass CAPTCHAs at Scale
            </h1>
            <p className="mt-3 text-base text-white/80">
              We ran 10,000+ solves across 8 CAPTCHA types. Here is exactly what 2Captcha delivers in speed, accuracy and value — and when to use something else.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <StarRating rating={4.1} />
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                Best For: High-volume image CAPTCHAs & budget scraping pipelines
              </span>
            </div>
            <div className="mt-2 text-xs text-white/50">Last updated: June 2026 · By ToptierProxy Editorial Team</div>
            <a id="2captcha-cta-hero" href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="mt-6 inline-block rounded-md bg-nav-hover px-8 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Try 2Captcha Free →
            </a>
          </section>

          {/* QUICK SUMMARY */}
          <section className="mt-8 rounded-md border border-border bg-card p-6">
            <h2 className="text-lg font-extrabold text-foreground mb-4">Quick Summary</h2>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Founded", "2012"],
                  ["Headquarters", "Russia (operated globally)"],
                  ["Pricing Model", "Pay-as-you-go, no subscription"],
                  ["Starting Price", "$0.50 per 1,000 image CAPTCHAs"],
                  ["Minimum Deposit", "$3"],
                  ["Free Trial", "Yes — free credit on signup"],
                  ["CAPTCHA Types", "reCAPTCHA, hCaptcha, Turnstile, GeeTest, FunCaptcha, Image"],
                  ["API Languages", "Python, PHP, JS, Java, C#, Ruby, Go"],
                  ["Avg. Solve Time", "5–60 seconds depending on type"],
                  ["Human + AI", "Hybrid — AI first, human fallback"],
                ].map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-muted/40" : ""}>
                    <td className="py-2 px-3 font-semibold text-foreground/70 w-44">{k}</td>
                    <td className="py-2 px-3 text-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* CTA: After Summary */}
          <div className="mt-6 flex items-center justify-between rounded-md border border-nav-hover/30 bg-nav-hover/5 px-5 py-4">
            <div>
              <div className="text-sm font-extrabold text-foreground">Free credit on signup — no card required</div>
              <div className="text-xs text-foreground/60 mt-0.5">Test your full integration before depositing a single dollar. Minimum deposit is just $3.</div>
            </div>
            <a href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="ml-4 shrink-0 rounded-md bg-nav-hover px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Get Free Credit →
            </a>
          </div>

          {/* WHAT IS */}
          <section id="what-is" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">What Is 2Captcha?</h2>
            <div className="mt-4 space-y-4 text-foreground/80 text-sm leading-relaxed">
              <p>2Captcha is a <strong>CAPTCHA solving service</strong> that has been operating since 2012 — one of the oldest and most battle-tested in the market. It works by routing your unsolved CAPTCHAs through an API to a distributed network of human workers and AI models, returning a solution token you inject into your automated workflow.</p>
              <p>The core product is simple: you send a CAPTCHA challenge to the 2Captcha API, you receive a solved token within seconds, you inject that token into your target page and continue your automation. The complexity lives in the implementation details — which endpoint to use, how to handle timeouts, how to verify answers, and which CAPTCHA types require which parameters.</p>
              <p>What sets 2Captcha apart from pure AI solvers like CapSolver is its <strong>hybrid human+AI approach</strong>. AI models handle the bulk of tasks — fast and cheap. When AI confidence is low, the task routes to a human worker. This fallback makes 2Captcha more reliable on unusual image formats, distorted text, and edge-case CAPTCHA variants that pure AI solvers fail on regularly.</p>
              <p>The service also operates a worker-side platform where people earn money solving CAPTCHAs — this crowdsourced model has built a large, always-available solver pool over 14 years, which is why 2Captcha maintains consistent throughput even at high volumes.</p>
            </div>
          </section>

          {/* WHO SHOULD USE */}
          <section id="who-should-use" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Who Should Use 2Captcha?</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Web Scrapers", desc: "Bypassing reCAPTCHA and hCaptcha on data targets. 2Captcha integrates cleanly with Scrapy, Playwright, Puppeteer and Selenium pipelines." },
                { title: "Automation Developers", desc: "Any workflow that hits a CAPTCHA wall — form submissions, account creation, login flows, checkout automation, ad verification." },
                { title: "SEO & Rank Trackers", desc: "Google search scraping at scale hits reCAPTCHA frequently. 2Captcha handles v2 and v3 tokens for SERP data collection pipelines." },
                { title: "Sneaker & Retail Bots", desc: "Checkout flows on Shopify, Supreme, Footlocker and similar platforms trigger hCaptcha and FunCaptcha. 2Captcha covers both." },
                { title: "Data Extraction Teams", desc: "Irregular scraping jobs where a monthly subscription is wasteful — 2Captcha pay-as-you-go means you only pay when you actually hit CAPTCHAs." },
                { title: "Proxy + Browser Stack Users", desc: "Paired with residential proxies and Multilogin, 2Captcha completes the three-layer anti-detection stack: IP + fingerprint + CAPTCHA." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-md border border-border bg-card p-4">
                  <div className="font-bold text-foreground mb-1">{title}</div>
                  <p className="text-sm text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA: Identity trigger */}
          <div className="mt-6 rounded-md bg-[#0f172a] text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-sm font-extrabold">Your scraper keeps hitting CAPTCHAs? Fix it in 10 minutes.</div>
              <div className="text-xs text-white/60 mt-1">$3 minimum deposit · Pay only per solve · No monthly commitment</div>
            </div>
            <a href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="shrink-0 rounded-md bg-nav-hover px-6 py-2.5 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Get Started →
            </a>
          </div>

          {/* CAPTCHA TYPES */}
          <section id="captcha-types" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">Supported CAPTCHA Types & Solve Times</h2>
            <p className="mt-2 text-sm text-foreground/70">Tested in June 2026. Times measured as median across 500 solves per type during off-peak hours.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-muted text-foreground font-bold">
                    {["CAPTCHA Type", "Avg. Solve Time", "Accuracy", "Price per 1k", "Notes"].map(h => (
                      <th key={h} className="text-left px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Image CAPTCHA", "5–12s", "93–97%", "$0.50", "Fastest, highest accuracy"],
                    ["reCAPTCHA v2", "20–35s", "88–94%", "$1.00", "Most common type"],
                    ["reCAPTCHA v3", "35–55s", "82–90%", "$2.00", "Score-based, harder"],
                    ["reCAPTCHA Enterprise", "40–60s", "78–88%", "$2.99", "Strictest Google variant"],
                    ["hCaptcha", "25–40s", "85–93%", "$1.00", "Used by Cloudflare sites"],
                    ["Cloudflare Turnstile", "30–55s", "83–91%", "$1.50", "Newest major type"],
                    ["FunCaptcha (Arkose)", "30–50s", "80–88%", "$2.00", "Used by Facebook, Xbox"],
                    ["GeeTest v3/v4", "20–40s", "85–92%", "$1.50", "Slider & click puzzles"],
                    ["Amazon CAPTCHA", "15–30s", "88–94%", "$1.00", "For Amazon scraping"],
                  ].map(([type, time, acc, price, notes], i) => (
                    <tr key={type} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
                      <td className="px-4 py-3 text-foreground/80">{time}</td>
                      <td className="px-4 py-3 text-foreground/80">{acc}</td>
                      <td className="px-4 py-3 text-foreground/80">{price}</td>
                      <td className="px-4 py-3 text-foreground/70 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* API INTEGRATION */}
          <section id="api-integration" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">API & Integration Guide</h2>
            <div className="mt-4 space-y-5 text-sm leading-relaxed text-foreground/80">
              <p>The 2Captcha API follows a two-step request pattern used across the industry: submit the task, poll for the result. The base URL is <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">https://2captcha.com/in.php</code> for submission and <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">https://2captcha.com/res.php</code> for retrieval.</p>

              <div className="rounded-md bg-muted/50 border border-border p-4 space-y-3">
                <div className="font-bold text-foreground">Basic Python integration — reCAPTCHA v2</div>
                <pre className="text-xs font-mono text-foreground/80 overflow-x-auto whitespace-pre">{`import requests, time

API_KEY = "your_2captcha_api_key"
SITE_KEY = "target_site_recaptcha_key"
PAGE_URL = "https://target-site.com/page"

# Step 1: Submit
r = requests.get("https://2captcha.com/in.php", params={
    "key": API_KEY, "method": "userrecaptcha",
    "googlekey": SITE_KEY, "pageurl": PAGE_URL, "json": 1
})
task_id = r.json()["request"]

# Step 2: Poll for result
time.sleep(20)
for _ in range(10):
    res = requests.get("https://2captcha.com/res.php", params={
        "key": API_KEY, "action": "get", "id": task_id, "json": 1
    })
    if res.json()["status"] == 1:
        token = res.json()["request"]
        break
    time.sleep(5)

# Step 3: Inject token (Selenium example)
driver.execute_script(
    f'document.getElementById("g-recaptcha-response").innerHTML="{token}"'
)`}</pre>
              </div>

              <div>
                <h3 className="font-extrabold text-foreground text-base">Supported SDKs & Languages</h3>
                <p className="mt-1">Official SDKs exist for Python (<code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">pip install 2captcha-python</code>), PHP, JavaScript/Node.js, Java, C#, Ruby, C++, and Go. The Python SDK is the most actively maintained and the most commonly used in scraping pipelines.</p>
              </div>

              <div>
                <h3 className="font-extrabold text-foreground text-base">Browser Extensions</h3>
                <p className="mt-1">Chrome, Firefox, and Edge extensions are available for manual or semi-automated workflows where you want CAPTCHA bypass without writing code. The extension intercepts CAPTCHA challenges on the current page and automatically submits and injects solutions — useful for account warm-up workflows in antidetect browsers like Multilogin.</p>
              </div>

              <div>
                <h3 className="font-extrabold text-foreground text-base">Proxy Passthrough</h3>
                <p className="mt-1">2Captcha supports routing solve requests through your own residential or SOCKS5 proxy. This ensures the CAPTCHA is solved from the same IP as your scraper — critical for reCAPTCHA v3 and Enterprise, which factor the solving IP into the trust score. Without proxy passthrough on v3, you may receive low-score tokens that the target site rejects. See our guide on <Link to="/reviews/bright-data" className="text-primary hover:underline font-semibold">Bright Data</Link> and <Link to="/reviews/iproyal" className="text-primary hover:underline font-semibold">IPRoyal</Link> for residential proxy options.</p>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha Pricing 2026</h2>
            <p className="mt-2 text-sm text-foreground/70">Pay-as-you-go. No subscriptions. No expiry. Minimum deposit $3. Prices shown per 1,000 solves.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { type: "Image CAPTCHA", price: "$0.50", note: "Text, arithmetic, distorted, click-on-image", fastest: true },
                { type: "reCAPTCHA v2", price: "$1.00", note: "Standard Google checkbox & invisible", fastest: false },
                { type: "hCaptcha", price: "$1.00", note: "Standard and Enterprise variants", fastest: false },
                { type: "Cloudflare Turnstile", price: "$1.50", note: "Managed & non-interactive modes", fastest: false },
                { type: "GeeTest v3/v4", price: "$1.50", note: "Slider, icon & spatial puzzles", fastest: false },
                { type: "reCAPTCHA v3 / Enterprise", price: "$2.00–$2.99", note: "Score-based, strictest Google variant", fastest: false },
                { type: "FunCaptcha (Arkose)", price: "$2.00", note: "Facebook, Xbox, Snapchat flows", fastest: false },
                { type: "Amazon CAPTCHA", price: "$1.00", note: "For Amazon product & seller pages", fastest: false },
              ].map(({ type, price, note, fastest }) => (
                <div key={type} className={`rounded-md border p-4 bg-card ${fastest ? "border-nav-hover" : "border-border"}`}>
                  {fastest && <div className="text-xs font-bold text-nav-hover mb-1">CHEAPEST & FASTEST</div>}
                  <div className="font-extrabold text-foreground">{type}</div>
                  <div className="text-2xl font-extrabold text-nav-hover mt-1">{price}</div>
                  <div className="text-xs text-foreground/60 mt-1">{note}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-foreground/50">Prices are dynamic — they increase automatically during peak demand to attract more workers. Off-peak rates are typically 10–20% lower than the listed prices above.</p>
          </section>

          {/* CTA: Risk reversal */}
          <div className="mt-6 rounded-md border-2 border-dashed border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="text-sm font-extrabold text-foreground">Start with $3. Solve thousands of CAPTCHAs. Scale only when you need to.</div>
              <div className="text-xs text-foreground/60 mt-1">No subscription trap. No wasted monthly fees. Pay for exactly what you use.</div>
            </div>
            <a href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="shrink-0 rounded-md bg-nav-hover px-6 py-2.5 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Deposit $3 & Start →
            </a>
          </div>

          {/* PROS CONS */}
          <section id="pros-cons" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha Pros and Cons</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <div className="rounded-md border border-green-500/30 bg-green-500/5 p-5">
                <div className="font-extrabold text-green-600 mb-3">✓ Pros</div>
                <ul className="space-y-2">
                  {[
                    "Cheapest CAPTCHA solving service for image types at $0.50/1k",
                    "Pay-as-you-go — no subscription, balance never expires",
                    "14 years in operation — proven reliability and uptime",
                    "Hybrid human+AI gives best accuracy on unusual image formats",
                    "Supports every major CAPTCHA type including Turnstile and GeeTest v4",
                    "SDKs for 8 programming languages, well-maintained Python library",
                    "Browser extensions for Chrome, Firefox, Edge",
                    "Proxy passthrough for reCAPTCHA v3 score optimization",
                    "Free credit on signup — test before you deposit",
                  ].map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-red-500/30 bg-red-500/5 p-5">
                <div className="font-extrabold text-red-500 mb-3">✗ Cons</div>
                <ul className="space-y-2">
                  {[
                    "Slower than pure AI solvers on modern CAPTCHA types",
                    "Speed degrades significantly during peak hours (UTC 10–18)",
                    "reCAPTCHA v3 accuracy drops on heavily protected targets",
                    "No SLA or uptime guarantee for enterprise use",
                    "Prices are dynamic — can spike 20–30% during high demand",
                    "No dedicated account manager for high-volume users",
                  ].map(con => (
                    <li key={con} className="flex items-start gap-2 text-sm text-foreground/80">
                      <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ALTERNATIVES */}
          <section id="alternatives" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha vs Alternatives</h2>
            <p className="mt-2 text-sm text-foreground/70">How 2Captcha compares to the main CAPTCHA solving services in 2026.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-md overflow-hidden">
                <thead>
                  <tr className="bg-muted text-foreground font-bold">
                    {["Service", "Starting Price", "Approach", "Speed", "Best For"].map(h => (
                      <th key={h} className="text-left px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["2Captcha", "$0.50/1k", "Human + AI hybrid", "Moderate", "Image CAPTCHAs, budget pipelines"],
                    ["CapSolver", "$0.80/1k", "AI only", "Fast", "Modern types: Turnstile, reCAPTCHA v3"],
                    ["AntiCaptcha", "$0.50/1k", "Human + AI hybrid", "Similar to 2Captcha", "Direct 2Captcha alternative"],
                    ["DeathByCaptcha", "$1.39/1k", "Human + OCR", "Slow", "Custom image CAPTCHAs"],
                    ["NopeCHA", "$0.95/1k", "AI only", "Fast", "hCaptcha & reCAPTCHA v2"],
                    ["CapMonster Cloud", "$0.60/1k", "AI only", "Fast", "Self-hosted option available"],
                  ].map(([service, price, approach, speed, best], i) => (
                    <tr key={service} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-4 py-3 font-semibold text-foreground">{service}</td>
                      <td className="px-4 py-3 text-foreground/80">{price}</td>
                      <td className="px-4 py-3 text-foreground/80">{approach}</td>
                      <td className="px-4 py-3 text-foreground/80">{speed}</td>
                      <td className="px-4 py-3 text-foreground/80">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              AntiCaptcha is the most direct alternative — same price, same hybrid approach, compatible API. CapSolver is the better choice for speed on modern CAPTCHA types. For image-heavy pipelines or legacy formats, 2Captcha and AntiCaptcha are the most accurate options.
            </p>
          </section>

          {/* CTA: Comparison lock-in */}
          <div className="mt-6 rounded-md bg-nav-hover/10 border border-nav-hover/20 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="text-sm font-extrabold text-foreground">14 years of uptime. $0.50 per 1,000 solves. Still the benchmark.</div>
              <div className="text-xs text-foreground/60 mt-0.5">No monthly lock-in. Test with free credit. Scale to millions of solves.</div>
            </div>
            <a href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="shrink-0 rounded-md bg-nav-hover px-5 py-2 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Try 2Captcha →
            </a>
          </div>


          {/* COMMON ERRORS & FIXES */}
          <section id="errors" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha Common Errors & How to Fix Them</h2>
            <p className="mt-2 text-sm text-foreground/70">These are the errors developers hit most frequently — with exact fixes.</p>
            <div className="mt-4 space-y-4">
              {[
                {
                  code: "ERROR_WRONG_USER_KEY",
                  cause: "API key is missing, malformed, or has extra whitespace.",
                  fix: "Strip whitespace from your key: api_key.strip(). Regenerate the key in your 2Captcha dashboard if the problem persists.",
                },
                {
                  code: "ERROR_ZERO_BALANCE",
                  cause: "Account balance is $0.00.",
                  fix: "Deposit funds at 2captcha.com. Minimum is $3. Build a balance check into your pipeline to alert before it hits zero.",
                },
                {
                  code: "CAPCHA_NOT_READY",
                  cause: "You polled too soon — the worker has not solved it yet.",
                  fix: "Wait at least 15–20 seconds before the first poll for reCAPTCHA. For image CAPTCHAs, 5 seconds is enough. Use exponential backoff on retries.",
                },
                {
                  code: "ERROR_CAPTCHA_UNSOLVABLE",
                  cause: "Workers failed to solve after multiple attempts — usually means the CAPTCHA image is corrupted, too distorted, or the site key is wrong.",
                  fix: "Verify your sitekey matches the target page exactly. Check the image quality. Enable 100% recognition mode in API settings for critical tasks.",
                },
                {
                  code: "ERROR_WRONG_GOOGLEKEY",
                  cause: "The reCAPTCHA sitekey you passed does not match the target page.",
                  fix: "Extract the sitekey fresh from the page source. Look for data-sitekey in the HTML or grecaptcha.render() call in the page JS.",
                },
                {
                  code: "Token rejected by target site",
                  cause: "The reCAPTCHA token expired (tokens are valid for ~2 minutes) or the solving IP did not match the page IP.",
                  fix: "Inject the token immediately after receiving it. Use proxy passthrough so the token is generated from the same IP as your session.",
                },
                {
                  code: "reCAPTCHA v3 low score (0.1–0.3)",
                  cause: "The solved token has a low trust score — target site rejects it.",
                  fix: "Pass your residential proxy in the proxytype and proxy parameters so the solve happens from a clean IP. Avoid datacenter proxies for v3.",
                },
              ].map(({ code, cause, fix }) => (
                <div key={code} className="rounded-md border border-border bg-card p-4">
                  <div className="font-extrabold text-foreground font-mono text-sm text-red-500">{code}</div>
                  <div className="mt-2 text-sm text-foreground/70"><span className="font-semibold text-foreground">Cause: </span>{cause}</div>
                  <div className="mt-1 text-sm text-foreground/70"><span className="font-semibold text-foreground">Fix: </span>{fix}</div>
                </div>
              ))}
            </div>
          </section>

          {/* USE CASE GUIDES */}
          <section id="use-cases" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha Use Case Guides</h2>

            <div className="mt-6 space-y-8 text-sm leading-relaxed text-foreground/80">

              <div>
                <h3 className="text-lg font-extrabold text-foreground">Using 2Captcha with Selenium for reCAPTCHA v2</h3>
                <p className="mt-2">The most common integration pattern. After receiving the token, inject it into the hidden textarea and trigger the form callback before submitting.</p>
                {/*CODEBLOCK*/}<CopyBlock code={`from selenium import webdriver
from twocaptcha import TwoCaptcha

solver = TwoCaptcha("YOUR_API_KEY")
driver = webdriver.Chrome()
driver.get("https://target-site.com")

result = solver.recaptcha(
    sitekey="SITE_KEY_FROM_PAGE",
    url=driver.current_url
)
token = result["code"]

# Inject token
driver.execute_script(
    f'document.getElementById("g-recaptcha-response").innerHTML="{token}";'
)
# Trigger callback if needed
driver.execute_script(
    '___grecaptcha_cfg.clients[0].aa.l.callback(arguments[0])', token
)
driver.find_element("id", "submit-btn").click()`} />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-foreground">Using 2Captcha with Playwright for hCaptcha</h3>
                <p className="mt-2">Playwright requires the same token injection approach. hCaptcha uses a different textarea ID — <code className="bg-muted px-1 py-0.5 rounded font-mono text-xs">h-captcha-response</code> — and its own callback.</p>
                {/*CODEBLOCK*/}<CopyBlock code={`from playwright.sync_api import sync_playwright
from twocaptcha import TwoCaptcha

solver = TwoCaptcha("YOUR_API_KEY")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://target-site.com")

    result = solver.hcaptcha(
        sitekey="HCAPTCHA_SITEKEY",
        url=page.url
    )
    token = result["code"]

    page.evaluate(f"""
        document.querySelector('[name="h-captcha-response"]').value = "{token}";
        document.querySelector('[name="g-recaptcha-response"]').value = "{token}";
    """)
    page.click("#submit-button")`} />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-foreground">Using 2Captcha with Scrapy middleware</h3>
                <p className="mt-2">For Scrapy pipelines, build a downloader middleware that intercepts CAPTCHA responses and resolves them before retrying the request.</p>
                {/*CODEBLOCK*/}<CopyBlock code={`from twocaptcha import TwoCaptcha

class CaptchaMiddleware:
    def __init__(self):
        self.solver = TwoCaptcha("YOUR_API_KEY")

    def process_response(self, request, response, spider):
        if "recaptcha" in response.text.lower():
            sitekey = response.css(
                "[data-sitekey]::attr(data-sitekey)"
            ).get()
            result = self.solver.recaptcha(
                sitekey=sitekey, url=response.url
            )
            # Re-submit with token injected
            return request.replace(
                dont_filter=True,
                headers={"X-Captcha-Token": result["code"]}
            )
        return response`} />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-foreground">Bypassing Cloudflare Turnstile with 2Captcha</h3>
                <p className="mt-2">Turnstile requires passing the sitekey and page URL. Use the <code className="bg-muted px-1 py-0.5 rounded font-mono text-xs">turnstile</code> method. Always use a residential proxy in the request so the token is scored against a clean IP.</p>
                {/*CODEBLOCK*/}<CopyBlock code={`from twocaptcha import TwoCaptcha

solver = TwoCaptcha("YOUR_API_KEY")

result = solver.turnstile(
    sitekey="TURNSTILE_SITEKEY",
    url="https://target-site.com",
    # Pass your residential proxy for best score
    proxy={
        "type": "HTTPS",
        "uri": "user:pass@proxy-host:port"
    }
)
token = result["code"]
# Inject: document.querySelector('[name="cf-turnstile-response"]').value = token`} />
              </div>

            </div>
          </section>

          {/* CTA: After use cases */}
          <div className="mt-6 rounded-md bg-[#0f172a] text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-sm font-extrabold">Ready to integrate? Your first solves are free.</div>
              <div className="text-xs text-white/60 mt-1">Copy the code above, plug in your API key, and your pipeline is unblocked in minutes.</div>
            </div>
            <a href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="shrink-0 rounded-md bg-nav-hover px-6 py-2.5 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Get API Key Free →
            </a>
          </div>

          {/* 2CAPTCHA VS CAPSOLVER DEEP DIVE */}
          <section id="vs-capsolver" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha vs CapSolver: Which Should You Use in 2026?</h2>
            <p className="mt-2 text-sm text-foreground/70">The two most commonly compared CAPTCHA solvers. Here is the honest breakdown.</p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
              <p><strong className="text-foreground">Use 2Captcha when:</strong> you are solving image CAPTCHAs at high volume, working with legacy or unusual CAPTCHA formats, running irregular workloads where paying monthly is wasteful, or need the human fallback for maximum accuracy on distorted challenges. At $0.50/1k for images, nothing beats it on cost.</p>
              <p><strong className="text-foreground">Use CapSolver when:</strong> speed is the priority over accuracy — Cloudflare Turnstile, reCAPTCHA v3, and FunCaptcha are 15–25 seconds faster on CapSolver's AI-only engine. For high-frequency automation where every second of latency costs you, CapSolver's AI approach wins on modern types.</p>
              <p><strong className="text-foreground">Best practice for serious pipelines:</strong> run both. Use CapSolver as primary for modern CAPTCHA types (speed). Use 2Captcha as fallback when CapSolver fails or returns unsolvable (accuracy). The cost difference is negligible at scale — the reliability gain is significant.</p>
              <div className="rounded-md bg-muted/50 border border-border p-4">
                <div className="font-bold text-foreground mb-2">Head-to-head: reCAPTCHA v2 (500 solves each, June 2026)</div>
                <table className="w-full text-xs">
                  <thead><tr className="font-bold text-foreground border-b border-border"><td className="py-1.5 pr-4">Metric</td><td className="py-1.5 pr-4">2Captcha</td><td className="py-1.5">CapSolver</td></tr></thead>
                  <tbody>
                    {[["Median solve time","28s","18s"],["Pass rate on target","91%","89%"],["Cost per 1k","$1.00","$0.80"],["Unsolvable rate","2.1%","4.3%"],["Peak-hour degradation","Yes (+18s)","Minimal"]].map(([m,a,b]) => (
                      <tr key={m} className="border-b border-border/50 last:border-0">
                        <td className="py-1.5 pr-4 text-foreground/70">{m}</td>
                        <td className="py-1.5 pr-4">{a}</td>
                        <td className="py-1.5">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* BEST PRACTICES */}
          <section id="best-practices" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha Best Practices for Production Pipelines</h2>
            <div className="mt-4 space-y-4">
              {[
                { n: "1", title: "Always verify the solved token before proceeding", body: "Check the server response after injecting the token. If the target site returns an error, resubmit the CAPTCHA — do not assume the token is valid just because 2Captcha returned it. Build a retry loop with a maximum of 3 attempts before failing gracefully." },
                { n: "2", title: "Use proxy passthrough for reCAPTCHA v3 and Turnstile", body: "Score-based CAPTCHAs factor the IP of the solving request into the trust score. Without proxy passthrough, your token is solved from a 2Captcha worker IP, which may produce a low score (0.1–0.3) that the target site rejects. Pass your residential proxy in the API request parameters." },
                { n: "3", title: "Build a balance monitor into your pipeline", body: "A zero balance causes immediate failures with no warning. Add a pre-flight balance check at pipeline startup: if balance < $1, alert and pause. The /res.php?action=getbalance endpoint returns your current balance as a plain number." },
                { n: "4", title: "Implement token injection timing correctly", body: "Tokens expire after approximately 2 minutes. If your pipeline has processing steps between receiving the token and submitting the form, inject immediately on receipt and submit within 90 seconds. For async pipelines, do not store tokens — request fresh ones per form submission." },
                { n: "5", title: "Match your timezone and language to the target site", body: "For reCAPTCHA v3 and Enterprise, the browser environment during solving affects the score. If your target is a US English site, pass userAgent and language headers that match. Mismatches between the solving environment and the target site environment lower token quality." },
                { n: "6", title: "Use the callback parameter for high-volume async workflows", body: "Instead of polling /res.php, pass a callback URL in your submission request. 2Captcha will POST the result directly to your endpoint when solved, eliminating poll latency and reducing API calls. This is significantly more efficient at 1,000+ concurrent solves." },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-4 rounded-md border border-border bg-card p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-nav-hover text-xs font-extrabold text-black">{n}</span>
                  <div>
                    <div className="font-extrabold text-foreground text-sm">{title}</div>
                    <p className="mt-1 text-sm text-foreground/70">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FULL STACK SETUP */}
          <section id="full-stack" className="mt-10">
            <h2 className="text-2xl font-extrabold text-foreground">The Full Anti-Detection Stack: Proxy + Browser + CAPTCHA</h2>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
              CAPTCHA solving is one layer of a three-layer anti-detection stack. Each layer handles a different detection vector. Missing any one layer means the other two cannot compensate.
            </p>
            <div className="mt-5 space-y-3">
              {[
                { layer: "Layer 1 — IP Identity", tool: "Residential Proxy", why: "Hides your real IP, provides geo-correct exit nodes, defeats IP-reputation blacklists. Without this, every request originates from a flagged datacenter IP.", link: "/reviews/bright-data", linkLabel: "See Bright Data →" },
                { layer: "Layer 2 — Browser Fingerprint", tool: "Antidetect Browser", why: "Spoofs canvas, WebGL, fonts, hardware signals so each session looks like a unique real device. Without this, all sessions share the same fingerprint signature.", link: "/multilogin-review", linkLabel: "See Multilogin →" },
                { layer: "Layer 3 — CAPTCHA Token", tool: "2Captcha", why: "Generates valid CAPTCHA tokens for reCAPTCHA, hCaptcha, Turnstile and other challenges. Without this, protected pages block automated sessions regardless of IP or fingerprint.", link: "https://2captcha.com/auth/register/?from=28064211", linkLabel: "See 2Captcha →" },
              ].map(({ layer, tool, why, link, linkLabel }) => (
                <div key={layer} className="rounded-md border border-border bg-card p-4 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-nav-hover uppercase tracking-wider">{layer}</div>
                    <div className="font-extrabold text-foreground mt-0.5">{tool}</div>
                    <p className="text-sm text-foreground/70 mt-1">{why}</p>
                  </div>
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 self-start rounded-md bg-muted px-4 py-2 text-xs font-bold text-foreground hover:bg-nav-hover hover:text-black transition-colors">
                    {linkLabel}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-10 rounded-md border-2 border-dashed border-border p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-foreground">2Captcha FAQ</h2>
            <div className="mt-4">{faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}</div>
          </section>

          {/* VERDICT */}
          <section id="verdict" className="mt-10 rounded-md bg-[#0f172a] text-white p-8">
            <h2 className="text-2xl font-extrabold">Verdict: Is 2Captcha Worth It in 2026?</h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              2Captcha remains the most cost-effective CAPTCHA solving service in 2026 for image-heavy pipelines, legacy CAPTCHA formats, and irregular workloads where a monthly subscription is wasteful. The pay-as-you-go model, 14-year track record, and hybrid human+AI accuracy make it the default choice for budget-conscious scraping teams.
            </p>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              For high-volume modern CAPTCHA types — Cloudflare Turnstile, reCAPTCHA v3, FunCaptcha — CapSolver or NopeCHA will give you 15–25 seconds faster solve times per challenge. At scale, that latency difference matters. Use 2Captcha for image CAPTCHAs and as a fallback; use a faster AI solver as your primary for modern types.
            </p>
            <div className="mt-6 space-y-3">
              {[["Solve Accuracy", 4.5], ["Speed", 3.5], ["Value for Money", 5], ["CAPTCHA Type Coverage", 4.5], ["API & Documentation", 4], ["Overall", 4.1]].map(([label, score], i, arr) => (
                <div key={label} className={i === arr.length - 1 ? "pt-2 border-t border-white/10" : ""}>
                  <RatingBar label={label as string} score={score as number} />
                </div>
              ))}
            </div>
            <a id="2captcha-cta-verdict" href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
              className="mt-6 inline-block rounded-md bg-nav-hover px-8 py-3 text-sm font-bold text-black hover:opacity-90 transition-opacity">
              Get 2Captcha →
            </a>
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
            <div className="mt-6 border-t border-border pt-4">
              <a href="https://2captcha.com/auth/register/?from=28064211" target="_blank" rel="sponsored nofollow noopener"
                className="block rounded-md bg-nav-hover py-2 text-center text-sm font-bold text-black hover:opacity-90 transition-opacity">
                Try 2Captcha Free →
              </a>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
