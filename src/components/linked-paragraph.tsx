// Shared internal linking component - used across blog, guides, use-cases, reviews, vs pages.
// Automatically links the FIRST occurrence of each keyword to the right internal page.
// NOTE: findLink() below is also imported directly by scripts/prerender.mjs (via tsx)
// so the static prerendered HTML and the live React app share ONE keyword map,
// instead of two copies that can silently drift out of sync.

export const INTERNAL_LINKS: Record<string, string> = {
  // Guides
  "best residential proxies": "/guides/best-residential-proxies",
  "residential proxies": "/guides/best-residential-proxies",
  "residential proxy": "/guides/best-residential-proxies",
  "best datacenter proxies": "/guides/best-datacenter-proxies",
  "datacenter proxies": "/guides/best-datacenter-proxies",
  "datacenter proxy": "/guides/best-datacenter-proxies",
  "best ISP proxies": "/guides/best-isp-proxies",
  "ISP proxies": "/guides/best-isp-proxies",
  "ISP proxy": "/guides/best-isp-proxies",
  "static residential proxies": "/guides/best-isp-proxies",
  "best mobile proxies": "/guides/best-mobile-proxies",
  "mobile proxies": "/guides/best-mobile-proxies",
  "mobile proxy": "/guides/best-mobile-proxies",
  "4G/5G proxies": "/guides/best-mobile-proxies",
  "best sneaker proxies": "/guides/best-sneaker-proxies",
  "sneaker proxies": "/guides/best-sneaker-proxies",
  "sneaker proxy": "/guides/best-sneaker-proxies",
  "proxies for web scraping": "/guides/best-proxies-for-scraping",
  "web scraping proxies": "/guides/best-proxies-for-scraping",
  "scraping proxy": "/guides/best-proxies-for-scraping",
  "best scraping APIs": "/guides/best-scraping-apis",
  "scraping APIs": "/guides/best-scraping-apis",
  "scraping API": "/guides/best-scraping-apis",
  "Web Scraping API": "/guides/best-scraping-apis",
  "SERP APIs": "/guides/best-serp-apis",
  "SERP API": "/guides/best-serp-apis",
  "free proxy trials": "/guides/best-free-proxy-trials",
  "free proxy trial": "/guides/best-free-proxy-trials",
  "free trial": "/guides/best-free-proxy-trials",
  "pay-as-you-go proxies": "/guides/best-payg-proxies",
  "pay-as-you-go proxy": "/guides/best-payg-proxies",
  "enterprise proxies": "/guides/best-enterprise-proxies",
  "enterprise proxy": "/guides/best-enterprise-proxies",
  "proxies for beginners": "/guides/best-proxies-for-beginners",
  "beginner proxies": "/guides/best-proxies-for-beginners",
  "SEO proxies": "/guides/best-seo-proxies",
  "SEO proxy": "/guides/best-seo-proxies",
  "ad verification proxies": "/guides/best-ad-verification-proxies",
  "headless browsers": "/guides/best-headless-browsers",
  "headless browser": "/guides/best-headless-browsers",
  // Reviews
  "Bright Data": "/reviews/bright-data",
  "Oxylabs": "/reviews/oxylabs",
  "Decodo": "/reviews/decodo",
  "IPRoyal": "/reviews/iproyal",
  "SOAX": "/reviews/soax",
  "NetNut": "/reviews/netnut",
  "Webshare": "/reviews/webshare",
  "Rayobyte": "/reviews/rayobyte",
  "ProxyEmpire": "/reviews/proxyempire",
  "Nimbleway": "/reviews/nimbleway",
  "Infatica": "/reviews/infatica",
  "Proxy-Cheap": "/reviews/proxy-cheap",
  // Use cases
  "proxy rating": "/trust-score",
  "proxy ratings": "/trust-score",
  "Trust Score": "/trust-score",
  "proxy scores": "/trust-score",
  "how proxies are rated": "/trust-score",
  "web scraping": "/use-cases/web-scraping",
  "price monitoring": "/use-cases/price-monitoring",
  "ad verification": "/use-cases/ad-verification",
  "SEO monitoring": "/use-cases/seo-monitoring",
  "lead generation": "/use-cases/lead-generation",
  "brand protection": "/use-cases/brand-protection",
  "social media management": "/use-cases/social-media-management",
  "sneaker copping": "/use-cases/sneaker-copping",
  "market research": "/use-cases/market-research",
  "AI training data": "/use-cases/ai-training-data",
  "travel fare": "/use-cases/travel-fare-aggregation",
  "streaming proxies": "/use-cases/streaming-geo-checks",
  // Missing high-impression GSC keywords
  "best proxies": "/guides/best-proxies-2026",
  "best proxy": "/guides/best-proxies-2026",
  "proxy provider": "/guides/best-proxies-2026",
  "proxy providers": "/guides/best-proxies-2026",
  "top proxy providers": "/guides/best-proxies-2026",
  "residential proxy providers": "/guides/best-residential-proxies",
  "datacenter proxy provider": "/guides/best-datacenter-proxies",
  "datacenter proxy providers": "/guides/best-datacenter-proxies",
  "best datacenter proxy": "/guides/best-datacenter-proxies",
  "best residential proxy": "/guides/best-residential-proxies",
  "best mobile proxy": "/guides/best-mobile-proxies",
  "best ISP proxy": "/guides/best-isp-proxies",
  "isp proxies": "/guides/best-isp-proxies",
  "isp proxy": "/guides/best-isp-proxies",
  "seo proxy": "/guides/best-seo-proxies",
  "proxies for seo": "/guides/best-seo-proxies",
  "proxies for rank tracking": "/use-cases/seo-monitoring",
  "rank tracking": "/use-cases/seo-monitoring",
  "serp tracking": "/use-cases/seo-monitoring",
  "ad fraud": "/use-cases/ad-verification",
  "sneaker bots": "/guides/best-sneaker-proxies",
  "reddit scraping": "/blog/best-proxies-for-reddit-scraping-2026",
  "scrape reddit": "/blog/best-proxies-for-reddit-scraping-2026",
  "llm training": "/blog/best-proxies-for-ai-training-data-llm-scraping-2026",
  "ai data collection": "/blog/best-proxies-for-ai-training-data-llm-scraping-2026",
  "proxy comparison": "/compare",
  "compare proxies": "/compare",
  "how we test": "/how-we-test",
  "our methodology": "/how-we-test",
  "free proxy": "/guides/best-free-proxy-trials",
  "cheap proxy": "/guides/best-payg-proxies",
  "cheap proxies": "/guides/best-payg-proxies",
  "buy proxy": "/guides/best-proxies-2026",
};

// Pure logic, no JSX - shared by the React component below AND by
// scripts/prerender.mjs (imported directly via tsx) for static HTML generation.
export function findLink(text: string): { before: string; keyword: string; url: string; after: string } | null {
  const keywords = Object.keys(INTERNAL_LINKS).sort((a, b) => b.length - a.length);
  for (const keyword of keywords) {
    const idx = text.indexOf(keyword);
    if (idx !== -1) {
      const url = INTERNAL_LINKS[keyword];
      const before = text.slice(0, idx);
      const after = text.slice(idx + keyword.length);
      return { before, keyword, url, after };
    }
  }
  return null;
}

export function LinkedParagraph({ text }: { text: string }) {
  const match = findLink(text);
  if (!match) return <p>{text}</p>;
  return (
    <p>
      {match.before}
      <a href={match.url} className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
        {match.keyword}
      </a>
      {match.after}
    </p>
  );
}
