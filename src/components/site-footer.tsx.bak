import { Link } from "@tanstack/react-router";
import { Triangle, Linkedin, Twitter, Youtube } from "lucide-react";

const footerNav = [
  { to: "/about", label: "ABOUT" },
  { to: "/why-trust-us", label: "WHY TRUST US" },
  { to: "/how-we-test", label: "HOW WE TEST" },
  { to: "/trust-score", label: "TRUST SCORE" },
  { to: "/blog", label: "BLOG" },
  { to: "/compare", label: "COMPARE" },
  { to: "/contact", label: "CONTACT" },
] as const;

type LinkItem = { label: string; href: string };

type Section = {
  title: string;
  items: LinkItem[];
};

// CNET-style dense link sections. Internal links route to relevant blog/review
// pages where available; external tool names use "#" as the user requested.
const sections: Section[] = [
  {
    title: "DIRECT COMPLEMENTS",
    items: [
      { label: "Best VPN Deals", href: "/vpn-deals" },
      { label: "ExpressVPN", href: "/" },
      { label: "Surfshark", href: "/" },
      { label: "Multilogin", href: "#" },
      { label: "GoLogin", href: "#" },
      { label: "AdsPower", href: "#" },
      { label: "2Captcha", href: "#" },
      { label: "CapSolver", href: "#" },
      { label: "AntiCaptcha", href: "#" },
      { label: "Scrapy", href: "#" },
      { label: "Playwright", href: "#" },
      { label: "Puppeteer", href: "#" },
      { label: "ScraperAPI", href: "/scraper-api" },
      { label: "ZenRows", href: "#" },
      { label: "ScrapingBee", href: "#" },
      { label: "Browserless", href: "#" },
      { label: "Bright Data Browser", href: "/reviews/bright-data" },
      { label: "IPRoyal Rotation", href: "/reviews/iproyal" },
      { label: "Smartproxy", href: "/reviews/decodo" },
      { label: "Decodo", href: "/reviews/decodo" },
      { label: "ProxyMesh", href: "#" },
      { label: "Storm Proxies", href: "#" },
      { label: "Proxy6", href: "#" },
    ],
  },
  {
    title: "SECURITY & PRIVACY",
    items: [
      { label: "Norton", href: "#" },
      { label: "Bitdefender", href: "#" },
      { label: "Malwarebytes", href: "#" },
      { label: "1Password", href: "#" },
      { label: "Bitwarden", href: "#" },
      { label: "Dashlane", href: "#" },
      { label: "Cloudflare 1.1.1.1", href: "#" },
      { label: "NextDNS", href: "#" },
      { label: "Quad9", href: "#" },
      { label: "GlassWire", href: "#" },
      { label: "Little Snitch", href: "#" },
      { label: "ZoneAlarm", href: "#" },
      { label: "Aura", href: "#" },
      { label: "IdentityForce", href: "#" },
      { label: "DeleteMe", href: "#" },
      { label: "ProtonMail", href: "#" },
      { label: "SimpleLogin", href: "#" },
      { label: "Tutanota", href: "#" },
    ],
  },
  {
    title: "DATA & BUSINESS TOOLS",
    items: [
      { label: "Octoparse", href: "#" },
      { label: "ParseHub", href: "#" },
      { label: "Import.io", href: "#" },
      { label: "Semrush", href: "#" },
      { label: "Ahrefs", href: "#" },
      { label: "Moz", href: "#" },
      { label: "Bright Data", href: "/reviews/bright-data" },
      { label: "Oxylabs", href: "/reviews/oxylabs" },
      { label: "Cloudflare Bot Mgmt", href: "#" },
      { label: "Jungle Scout", href: "#" },
      { label: "Helium 10", href: "#" },
      { label: "DataHawk", href: "#" },
      { label: "Jarvee", href: "#" },
      { label: "FollowLiker", href: "#" },
      { label: "MassPlanner", href: "#" },
      { label: "AdSpy", href: "#" },
      { label: "BigSpy", href: "#" },
      { label: "PowerAdSpy", href: "#" },
    ],
  },
  {
    title: "DEVELOPER & AUTOMATION",
    items: [
      { label: "curl_cffi", href: "#" },
      { label: "httpx", href: "#" },
      { label: "Requests", href: "#" },
      { label: "Selenium", href: "#" },
      { label: "Playwright", href: "#" },
      { label: "Puppeteer", href: "#" },
      { label: "Apache Airflow", href: "#" },
      { label: "Prefect", href: "#" },
      { label: "Celery", href: "#" },
      { label: "AWS Lambda", href: "#" },
      { label: "Google Cloud Functions", href: "#" },
      { label: "Postman", href: "#" },
      { label: "Insomnia", href: "#" },
      { label: "RapidAPI", href: "#" },
      { label: "BeautifulSoup", href: "#" },
      { label: "Cheerio", href: "#" },
      { label: "lxml", href: "#" },
    ],
  },
  {
    title: "E-COMMERCE & MARKETING",
    items: [
      { label: "Prisync", href: "#" },
      { label: "Wiser", href: "#" },
      { label: "Skuuudle", href: "#" },
      { label: "Impact", href: "#" },
      { label: "ShareASale", href: "#" },
      { label: "CJ Affiliate", href: "#" },
      { label: "Mailchimp", href: "#" },
      { label: "Klaviyo", href: "#" },
      { label: "ActiveCampaign", href: "#" },
      { label: "Unbounce", href: "#" },
      { label: "Leadpages", href: "#" },
      { label: "Instapage", href: "#" },
      { label: "Google Analytics", href: "#" },
      { label: "Mixpanel", href: "#" },
      { label: "Hotjar", href: "#" },
      { label: "Optimizely", href: "#" },
      { label: "VWO", href: "#" },
      { label: "AB Tasty", href: "#" },
    ],
  },
  {
    title: "RESEARCH & INTELLIGENCE",
    items: [
      { label: "SimilarWeb", href: "#" },
      { label: "SpyFu", href: "#" },
      { label: "iSpionage", href: "#" },
      { label: "Mention", href: "#" },
      { label: "Brandwatch", href: "#" },
      { label: "Talkwalker", href: "#" },
      { label: "Crayon", href: "#" },
      { label: "Klue", href: "#" },
      { label: "Kompyte", href: "#" },
      { label: "Feedly", href: "#" },
      { label: "Pocket", href: "#" },
      { label: "Flipboard", href: "#" },
      { label: "Tableau", href: "#" },
      { label: "Power BI", href: "#" },
      { label: "Looker", href: "#" },
      { label: "SurveyMonkey", href: "#" },
      { label: "Typeform", href: "#" },
      { label: "Google Forms", href: "#" },
    ],
  },
];

function isInternal(href: string) {
  return href.startsWith("/");
}

function FooterLink({ item }: { item: LinkItem }) {
  const cls =
    "group relative inline-block py-1.5 text-sm text-footer-foreground/85 hover:text-white";
  const underline = (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-1 left-0 h-[2px] w-0 bg-nav-hover transition-all duration-300 ease-out group-hover:w-full"
    />
  );
  if (isInternal(item.href)) {
    return (
      <span className="block">
        <Link to={item.href} className={cls}>
          {item.label}
          {underline}
        </Link>
      </span>
    );
  }
  return (
    <span className="block">
      <a href={item.href} className={cls} rel="nofollow noopener">
        {item.label}
        {underline}
      </a>
    </span>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="whitespace-nowrap text-base font-extrabold uppercase tracking-wider">
          {section.title}
        </h3>
        <div className="flex-1 border-t-2 border-dotted border-white/70" />
      </div>
      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <FooterLink key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {sections.map((s) => (
          <SectionBlock key={s.title} section={s} />
        ))}

        <div className="mt-6 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <Link to="/" className="flex items-center gap-2">
            <Triangle className="h-6 w-6 fill-current" strokeWidth={1.5} />
            <span className="text-xl font-bold">
              ToptierProxy<span className="font-normal opacity-80">.com</span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs font-bold tracking-wider opacity-90 hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex gap-3">
          <a aria-label="LinkedIn" href="#" className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
          <a aria-label="Twitter" href="#" className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
          <a aria-label="YouTube" href="#" className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
        </div>

        <div className="mt-10 space-y-2 text-xs opacity-70">
          <p>
            Tool and proxy services listed are for reference. Pricing, pool sizes and features
            change frequently — always confirm current details on the provider's website before
            purchase. External links are not endorsements unless explicitly stated in a review.
          </p>
          <p>
            © {new Date().getFullYear()} ToptierProxy Media Group LLC. All rights reserved.{" "}
            <Link to="/terms" className="underline">Terms of Use</Link> |{" "}
            <Link to="/disclaimers" className="underline">Disclaimers</Link> |{" "}
            <Link to="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
