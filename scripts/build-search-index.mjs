#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

async function loadTs(rel) {
  const mod = await import(pathToFileURL(resolve(root, rel)).href);
  return mod;
}

async function run() {
  const { providers } = await loadTs("src/data/providers.ts");
  const { guides } = await loadTs("src/data/guides.ts");
  const { countries, allCityPairs } = await loadTs("src/data/countries.ts");
  const { useCases } = await loadTs("src/data/use-cases.ts");
  const { blogPosts } = await loadTs("src/data/blog.ts");

  const items = [
    // Static pages
    { id: "home", title: "ToptierProxy.com — Best Proxy Providers 2026", description: "Independent reviews, rankings and comparisons of the top proxy providers.", url: "/", type: "page" },
    { id: "reviews", title: "Proxy Provider Reviews 2026", description: "In-depth hands-on reviews of every major proxy provider.", url: "/reviews", type: "page" },
    { id: "guides", title: "Proxy Guides & Tutorials 2026", description: "Expert proxy guides covering residential, datacenter, ISP and mobile proxies.", url: "/guides", type: "page" },
    { id: "countries", title: "Proxy Servers by Country", description: "Find the best proxy providers for every country.", url: "/countries", type: "page" },
    { id: "compare", title: "Compare Proxy Providers", description: "Side-by-side proxy provider comparison.", url: "/compare", type: "page" },
    { id: "blog", title: "Proxy Blog", description: "Latest proxy news, tutorials and expert tips.", url: "/blog", type: "page" },
    { id: "use-cases", title: "Proxy Use Cases", description: "How proxies are used for scraping, SEO, ad verification and more.", url: "/use-cases", type: "page" },

    // Providers
    ...providers.map(p => ({
      id: `review-${p.slug}`,
      title: `${p.name} Review 2026`,
      description: `${p.shortDescription} Pool: ${p.poolSize||""}. Best for: ${p.bestFor}. Rating: ${p.rating}/5.`,
      url: `/reviews/${p.slug}`,
      type: "review",
      keywords: `${p.name} review pricing alternatives ${p.proxyTypes.join(" ")}`
    })),

    // VS matchups
    ...providers.flatMap((a, i) =>
      providers.slice(i + 1).map(b => ({
        id: `vs-${a.slug}-${b.slug}`,
        title: `${a.name} vs ${b.name} 2026`,
        description: `Compare ${a.name} and ${b.name} — pricing, pool size, speed and features.`,
        url: `/vs/${a.slug}-vs-${b.slug}`,
        type: "vs",
        keywords: `${a.name} ${b.name} comparison versus alternative`
      }))
    ),

    // Guides
    ...guides.map(g => ({
      id: `guide-${g.slug}`,
      title: g.title,
      description: g.intro,
      url: `/guides/${g.slug}`,
      type: "guide",
      keywords: g.body
    })),

    // Countries
    ...countries.map(c => ({
      id: `country-${c.slug}`,
      title: `Best ${c.name} Proxies 2026`,
      description: `${c.poolDepth} available. ${c.notes}`,
      url: `/countries/${c.slug}`,
      type: "country",
      keywords: `${c.name} ${c.primaryKeywords.join(" ")} ${c.carriers.join(" ")}`
    })),

    // Best pages
    ...countries.map(c => ({
      id: `best-${c.slug}`,
      title: `Best Proxies for ${c.name} 2026`,
      description: `Top proxy providers with ${c.name} IP addresses.`,
      url: `/best/${c.slug}-proxies`,
      type: "country",
      keywords: `${c.name} proxy best residential datacenter`
    })),

    // Cities
    ...allCityPairs.map(x => ({
      id: `city-${x.countrySlug}-${x.citySlug}`,
      title: `Best ${x.city} Proxies 2026`,
      description: `Proxy providers with ${x.city}, ${x.country.name} IP addresses.`,
      url: `/countries/${x.countrySlug}/cities/${x.citySlug}`,
      type: "country",
      keywords: `${x.city} ${x.country.name} proxy residential ip`
    })),

    // Use cases
    ...useCases.map(u => ({
      id: `usecase-${u.slug}`,
      title: u.title,
      description: u.intro,
      url: `/use-cases/${u.slug}`,
      type: "usecase",
      keywords: u.primaryKeywords.join(" ")
    })),

    // Blog posts
    ...blogPosts.map(b => ({
      id: `blog-${b.slug}`,
      title: b.title,
      description: b.excerpt,
      url: `/blog/${b.slug}`,
      type: "blog",
      keywords: `${b.tags.join(" ")} ${b.category} ${b.author}`
    })),

    // Footer items — Direct Complements
    { id: "vpn-services", title: "VPN Services — NordVPN, ExpressVPN, Surfshark", description: "Best VPN services compared. Proxy vs VPN — which is right for you?", url: "/blog/residential-vs-mobile-proxies", type: "page" },
    { id: "captcha-solvers", title: "CAPTCHA Solvers — 2Captcha, CapSolver, AntiCaptcha", description: "Best CAPTCHA solving services for web scraping automation.", url: "/use-cases/web-scraping", type: "page" },
    { id: "antidetect-browsers", title: "Antidetect Browsers — Multilogin, GoLogin, AdsPower", description: "Best antidetect browsers to use with residential proxies.", url: "/guides/best-proxies-for-scraping", type: "page" },
    { id: "scraping-apis", title: "Scraping APIs — ScraperAPI, ZenRows, ScrapingBee", description: "Best scraping APIs compared with proxy providers.", url: "/guides/best-scraping-apis", type: "page" },
    { id: "headless-browsers", title: "Headless Browsers — Browserless, Playwright, Puppeteer", description: "Best headless browsers for web scraping with proxies.", url: "/guides/best-headless-browsers", type: "page" },

    // Footer items — Security & Privacy
    { id: "antivirus", title: "Antivirus Software — Norton, Bitdefender, Malwarebytes", description: "Best antivirus software for online security and privacy.", url: "/use-cases/web-scraping", type: "page" },
    { id: "password-managers", title: "Password Managers — 1Password, Bitwarden, Dashlane", description: "Best password managers for online security.", url: "/use-cases/web-scraping", type: "page" },
    { id: "dns-services", title: "DNS Services — Cloudflare 1.1.1.1, NextDNS, Quad9", description: "Best DNS services for privacy and performance.", url: "/use-cases/web-scraping", type: "page" },
    { id: "dark-web-monitoring", title: "Dark Web Monitoring — Aura, IdentityForce, DeleteMe", description: "Best dark web monitoring services to protect your identity.", url: "/use-cases/web-scraping", type: "page" },

    // Footer items — Data & Business Tools
    { id: "seo-tools", title: "SEO Tools — Semrush, Ahrefs, Moz", description: "Best SEO tools that use proxies for rank tracking and competitor analysis.", url: "/use-cases/seo-monitoring", type: "page" },
    { id: "data-extraction", title: "Data Extraction Tools — Octoparse, ParseHub, Import.io", description: "Best no-code data extraction tools for web scraping.", url: "/use-cases/web-scraping", type: "page" },
    { id: "ad-intelligence", title: "Ad Intelligence Tools — AdSpy, BigSpy, PowerAdSpy", description: "Best ad intelligence tools for competitive marketing research.", url: "/use-cases/ad-verification", type: "page" },

    // Footer items — Developer & Automation Tools
    { id: "browser-automation", title: "Browser Automation — Selenium, Playwright, Puppeteer", description: "Best browser automation tools to use with rotating proxies.", url: "/guides/best-headless-browsers", type: "page" },
    { id: "http-clients", title: "HTTP Clients — curl_cffi, httpx, Requests", description: "Best Python HTTP clients for web scraping with proxies.", url: "/blog/how-to-rotate-proxies-python", type: "page" },

    // Footer items — E-commerce & Marketing
    { id: "price-monitoring", title: "Price Monitoring Tools — Prisync, Wiser, Skuuudle", description: "Best price monitoring tools for e-commerce intelligence.", url: "/use-cases/price-monitoring", type: "page" },
    { id: "affiliate-networks", title: "Affiliate Networks — Impact, ShareASale, CJ Affiliate", description: "Best affiliate networks for proxy and VPN offers.", url: "/blog/proxy-pricing-explained", type: "page" },

    // Footer items — Research & Intelligence
    { id: "market-research", title: "Market Research Tools — SimilarWeb, SpyFu, iSpionage", description: "Best market research tools powered by proxy data collection.", url: "/use-cases/market-research", type: "page" },
    { id: "brand-monitoring", title: "Brand Monitoring — Mention, Brandwatch, Talkwalker", description: "Best brand monitoring tools for online reputation management.", url: "/use-cases/brand-protection", type: "page" },
  ];

  writeFileSync(
    resolve(root, "public/search-index.json"),
    JSON.stringify(items, null, 0)
  );
  console.log(`✓ Search index generated: ${items.length} items`);
}

run().catch(e => { console.error(e); process.exit(1); });
