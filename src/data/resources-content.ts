export interface ResourceEntry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const resourcesContent: ResourceEntry[] = [
  {
    slug: "cost-calculator",
    title: "Bandwidth Cost Calculator - Estimate Your Monthly Proxy Spend",
    metaTitle: "Proxy Cost Calculator 2026 - Estimate Monthly Bandwidth Spend",
    metaDescription: "Free proxy bandwidth cost calculator - estimate your monthly proxy spend from GB usage and real 2026 provider pricing, from $1.75/GB to $8/GB.",
    intro: "Estimate your monthly proxy bandwidth cost below, then compare against real 2026 provider pricing.",
    sections: [
      { heading: "How proxy pricing actually works", paragraphs: [
        "Residential and mobile proxies are almost always billed per gigabyte of bandwidth used, not per request or per IP. Datacenter and ISP (static residential) proxies are typically billed per IP instead, since you are renting a specific address rather than paying for rotating bandwidth.",
        "The calculator above uses a per-GB model, since that covers the majority of scraping and automation use cases. If your work is account management or long-session automation on ISP proxies, check our proxy type cheatsheet for per-IP pricing instead.",
      ] },
      { heading: "Real 2026 pricing benchmarks", paragraphs: [
        "Pay-as-you-go residential pricing in 2026 ranges from roughly $1.75/GB (IPRoyal) at the budget end to $8/GB (Bright Data, Oxylabs) at the premium, enterprise-support end. Committed-volume plans bring the higher end down substantially - often to $2.50-5/GB at real production scale.",
        "Datacenter proxies are far cheaper per unit, typically $0.50-2 per IP per month, but are blocked far more often on protected targets, so the true cost-per-successful-request can end up higher than a pricier residential plan once retries are factored in.",
      ] },
    ],
  },
  {
    slug: "glossary",
    title: "Proxy Glossary - Every Term Explained in Plain English",
    metaTitle: "Proxy Glossary 2026 - Residential, ASN, CGNAT & More Explained",
    metaDescription: "Every proxy term explained in plain English - residential, datacenter, ISP proxy, rotating vs sticky sessions, ASN, CGNAT, fingerprinting and more.",
    intro: "The proxy industry is full of jargon that gets thrown around without explanation. Here is every term you actually need to know, in plain English.",
    sections: [
      { heading: "Proxy types", paragraphs: [
        "Residential proxy - an IP address assigned by an internet service provider to a real home device (a phone, router or computer). Residential IPs look like genuine consumer traffic to websites, which makes them harder to block than datacenter IPs.",
        "Datacenter proxy - an IP address hosted in a commercial data center rather than assigned to a home. Fast and cheap, but the IP ranges are well known to anti-bot systems and get blocked more easily on protected sites.",
        "ISP proxy (static residential) - a residential-registered IP hosted on datacenter-grade infrastructure. Combines the trust of a residential IP with the speed and stability of a datacenter connection, and stays assigned to you rather than rotating.",
        "Mobile proxy - an IP address assigned by a mobile carrier to a phone on a 4G or 5G network. Because carrier-grade NAT shares each IP across thousands of real devices, mobile IPs are the hardest for anti-bot systems to block.",
      ] },
      { heading: "Session behavior", paragraphs: [
        "Rotating session - a proxy connection where the IP address changes on every request, or on a set time interval. Useful for high-volume scraping where you want to distribute requests across many IPs.",
        "Sticky session - a proxy connection that keeps the same IP address for an extended period (minutes to hours), then rotates. Necessary for tasks like logging into an account, where the site expects the same IP throughout a session.",
      ] },
      { heading: "Network and identity terms", paragraphs: [
        "ASN (Autonomous System Number) - a unique identifier assigned to a network operator, like an ISP or hosting company. Anti-bot systems use ASN data to distinguish real consumer ISPs from datacenter and hosting providers.",
        "CGNAT (Carrier-Grade NAT) - a technique mobile carriers use to share one public IP address across many customers at once. This is why mobile proxies are so hard to block - blocking a CGNAT IP would block thousands of real, unrelated mobile users too.",
        "Browser fingerprinting - the practice of identifying a device by combining dozens of signals (canvas rendering, WebGL output, installed fonts, screen resolution, timezone) into a unique profile, independent of IP address. A clean proxy alone does not defeat fingerprinting.",
        "Success rate - the percentage of requests through a proxy that return the real, intended content rather than a block page, CAPTCHA or empty response. The single most important metric when evaluating a proxy provider for a specific target.",
      ] },
    ],
  },
  {
    slug: "proxy-type-cheatsheet",
    title: "Proxy Type Cheatsheet - Residential vs Datacenter vs ISP vs Mobile",
    metaTitle: "Proxy Type Cheatsheet 2026 - Residential vs Datacenter vs ISP vs Mobile",
    metaDescription: "Quick reference: residential, datacenter, ISP and mobile proxies compared on speed, cost, trust level and best use case - pick the right type in 30 seconds.",
    intro: "Four proxy types, four different jobs. Here is the fast version - which type to reach for, and why.",
    sections: [
      { heading: "Residential proxies", paragraphs: [
        "Best for: general-purpose scraping, sites that block datacenter ranges, localized content access. Typical cost: $2-10/GB. Trust level: high - looks like a real consumer device. Trade-off: more expensive per GB than datacenter, and rotating IPs can break logged-in sessions.",
      ] },
      { heading: "Datacenter proxies", paragraphs: [
        "Best for: high-volume requests against unprotected or lightly-protected targets, speed-sensitive automation. Typical cost: $0.50-2/IP. Trust level: low - IP ranges are well known and frequently blocked by anti-bot systems. Trade-off: cheapest and fastest option, but fails fast against any real protection.",
      ] },
      { heading: "ISP (static residential) proxies", paragraphs: [
        "Best for: account management, social media automation, anything requiring a consistent identity over time. Typical cost: $0.75-1.50/IP. Trust level: high, with the stability of a fixed IP. Trade-off: costs more than datacenter, and a smaller pool than rotating residential.",
      ] },
      { heading: "Mobile proxies", paragraphs: [
        "Best for: the hardest anti-bot targets - social media platforms, ad verification, sneaker sites. Typical cost: $2-20/GB, the most expensive tier. Trust level: highest available - carrier-grade NAT makes mobile IPs nearly impossible to block without collateral damage. Trade-off: highest cost, reserve it for targets that actually need it.",
      ] },
      { heading: "The 10-second decision", paragraphs: [
        "Unprotected target, need volume and speed: datacenter. General scraping on a protected site: residential. Managing accounts or long sessions: ISP. Hardest possible target (social media, ad verification): mobile.",
      ] },
    ],
  },
  {
    slug: "anti-bot-reference",
    title: "Anti-Bot Reference - How Cloudflare, DataDome, PerimeterX and Akamai Actually Work",
    metaTitle: "Anti-Bot Reference 2026 - Cloudflare, DataDome, PerimeterX, Akamai",
    metaDescription: "How the major anti-bot systems actually detect automated traffic - IP reputation, TLS fingerprinting, behavioral analysis and what it takes to pass each one in 2026.",
    intro: "Every major anti-bot vendor works differently under the hood. Here is what each one actually checks, in plain terms.",
    sections: [
      { heading: "Cloudflare Bot Management", paragraphs: [
        "Combines IP reputation scoring, TLS/JA3 fingerprinting, and a machine-learning behavioral model trained across Cloudflare's entire network. Datacenter IPs are flagged fast; residential IPs with a consistent, realistic TLS fingerprint pass more often. JavaScript challenges (the 'checking your browser' interstitial) specifically test whether a real browser engine is executing the page.",
      ] },
      { heading: "DataDome", paragraphs: [
        "Runs a real-time detection engine that scores every request in milliseconds, combining device fingerprinting, IP reputation and behavioral signals like mouse movement and request timing. DataDome is known for being aggressive on datacenter and known-VPN ranges specifically, and is a common target for e-commerce and ticketing sites.",
      ] },
      { heading: "PerimeterX (now HUMAN Security)", paragraphs: [
        "Focuses heavily on behavioral biometrics - how a user actually interacts with a page, not just what device they claim to be. Headless browsers without realistic mouse movement, scroll behavior and timing get flagged even with a clean residential IP and correct fingerprint.",
      ] },
      { heading: "Akamai Bot Manager", paragraphs: [
        "One of the oldest and most enterprise-focused systems, commonly used by banks, airlines and large retailers. Combines device fingerprinting with sensor data collection (mouse, touch, and device orientation signals on mobile) and maintains long-lived reputation scores per device fingerprint, not just per IP.",
      ] },
      { heading: "What actually works across all four", paragraphs: [
        "Residential or mobile IPs with genuine, consistent fingerprints; full browser automation (not raw HTTP requests) for anything beyond static pages; realistic request timing and behavior rather than mechanically regular patterns; and ongoing maintenance, since every one of these systems updates its detection logic on a rolling basis.",
      ] },
    ],
  },
  {
    slug: "http-vs-socks5",
    title: "HTTP vs SOCKS5 Proxies - When Each Protocol Matters",
    metaTitle: "HTTP vs SOCKS5 Proxy 2026 - Which Protocol Do You Actually Need?",
    metaDescription: "HTTP and SOCKS5 proxies explained - the real technical differences, and when each protocol actually matters for your use case.",
    intro: "Most proxy providers offer both HTTP and SOCKS5 endpoints. Here is what actually differs, and when it matters.",
    sections: [
      { heading: "HTTP proxies", paragraphs: [
        "Operate at the application layer and only understand HTTP and HTTPS traffic. Simple to configure, and sufficient for the large majority of web scraping and browsing use cases, since that traffic is HTTP-based anyway. Cannot handle non-web protocols like FTP, torrent clients or custom TCP applications.",
      ] },
      { heading: "SOCKS5 proxies", paragraphs: [
        "Operate at a lower network layer and are protocol-agnostic - they can tunnel any TCP or UDP traffic, not just HTTP. This makes SOCKS5 the right choice for torrent clients, game clients, SSH tunnels, or any application that is not simply a web browser or scraper making HTTP requests. SOCKS5 also supports UDP, which HTTP proxies do not.",
      ] },
      { heading: "Which one do you actually need", paragraphs: [
        "If your work is web scraping, browser automation, or anything happening through a browser or an HTTP client library (requests, axios, curl), an HTTP or HTTPS proxy is all you need. If you are running a torrent client, a game that requires UDP, or any application that is not fundamentally a web request, use SOCKS5. Most providers charge the same for both, so there is rarely a cost reason to pick one over the other - pick based on what your application actually requires.",
      ] },
    ],
  },
  {
    slug: "sticky-vs-rotating",
    title: "Sticky vs Rotating Sessions - Pick the Right Strategy",
    metaTitle: "Sticky vs Rotating Proxy Sessions - Which One Do You Need in 2026?",
    metaDescription: "Sticky and rotating proxy sessions explained - when each session strategy is the right call for your scraping or automation workload.",
    intro: "Session strategy is one of the most commonly misunderstood proxy settings. Here is exactly when to use each one.",
    sections: [
      { heading: "Rotating sessions", paragraphs: [
        "The proxy IP changes on every request, or after a short, configurable interval. This distributes your traffic across a large pool of IPs, which is exactly what you want for high-volume scraping of public, unauthenticated pages - product listings, search results, price data - where each request is independent and does not need to look like it came from the same visitor as the last one.",
      ] },
      { heading: "Sticky sessions", paragraphs: [
        "The proxy IP stays the same for an extended period - typically anywhere from a few minutes to several hours, depending on the provider. This is required whenever a site expects continuity: logging into an account, adding items to a cart across multiple pages, or any multi-step workflow where the site would flag a sudden IP change mid-session as suspicious.",
      ] },
      { heading: "How to choose", paragraphs: [
        "Ask one question: does this task involve a login, a cart, or any multi-step flow where the site tracks you as one continuous visitor? If yes, use a sticky session long enough to cover the full workflow. If you are just pulling public data point by point with no login or session state, rotating IPs on every request gives you better distribution and avoids burning through a sticky session's rate limits unnecessarily.",
      ] },
    ],
  },
];

export function getResourceContent(slug: string) {
  return resourcesContent.find((r) => r.slug === slug) ?? null;
}
