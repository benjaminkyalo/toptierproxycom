#!/usr/bin/env node
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const DIST = resolve(root, "dist");
const SITE = "https://www.toptierproxy.com";

async function loadTs(rel) {
  const mod = await import(pathToFileURL(resolve(root, rel)).href);
  return mod;
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function writeHtml(urlPath, title, description, bodyContent = "") {
  const template = readFileSync(resolve(DIST, "index.html"), "utf-8");
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${description.replace(/"/g, "&quot;")}"`);

  const seoBody = bodyContent
    ? `<div id="root"><main style="font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:2rem 1.5rem;color:#1a1a2e;line-height:1.7">${bodyContent}</main></div>`
    : '<div id="root"></div>';
  html = html.replace('<div id="root"></div>', seoBody);

  const dir = urlPath === "/" ? DIST : resolve(DIST, ...urlPath.replace(/^\//, "").split("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "index.html"), html);
}

function providerBody(p, allProviders) {
  const alternatives = allProviders.filter(x => x.slug !== p.slug).slice(0, 4).map(x => `<a href="${SITE}/reviews/${x.slug}" style="color:#2563eb">${x.name}</a>`).join(", ");
  const pros = p.pros.map(pr => `<li>${pr}</li>`).join("");
  const cons = p.cons.map(c => `<li>${c}</li>`).join("");
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">${p.name} Review 2026  Pricing, Pool Size &amp; Benchmarks</h1>
    <p style="color:#6b7280;margin-bottom:1.5rem">Last updated: May 2026  By ToptierProxy Editorial Team  ${p.rating}/5 stars</p>
    <p style="font-size:1.1rem;margin-bottom:1.5rem">${p.shortDescription}</p>
    <p>${p.longDescription}</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Quick Facts: ${p.name}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      ${p.poolSize ? `<li><strong>Pool Size:</strong> ${p.poolSize}</li>` : ""}
      ${p.countries ? `<li><strong>Countries:</strong> ${p.countries}+</li>` : ""}
      ${p.startingPriceGB ? `<li><strong>Starting Price:</strong> $${p.startingPriceGB}/GB</li>` : ""}
      <li><strong>Best For:</strong> ${p.bestFor}</li>
      <li><strong>Proxy Types:</strong> ${p.proxyTypes.join(", ")}</li>
      ${p.founded ? `<li><strong>Founded:</strong> ${p.founded}</li>` : ""}
      ${p.hq ? `<li><strong>HQ:</strong> ${p.hq}</li>` : ""}
      <li><strong>Trust Score:</strong> ${p.trustScore}/100</li>
    </ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Pros of ${p.name}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${pros}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Cons of ${p.name}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${cons}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Is ${p.name} Worth It in 2026?</h2>
    <p>${p.name} earned a ${p.rating}/5 rating in our 2026 independent benchmark. It is best suited for ${p.bestFor.toLowerCase()}. Our testing covered success rates against Cloudflare, DataDome, PerimeterX and Akamai-protected targets, latency from 12 global regions, IP rotation quality, dashboard usability and support response times.</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">How Much Does ${p.name} Cost?</h2>
    <p>${p.startingPriceGB ? `${p.name} residential bandwidth starts at $${p.startingPriceGB}/GB on the entry plan. Pricing scales down with higher volume commitments.` : `Visit the ${p.name} pricing page for current plans and pricing.`}</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Best ${p.name} Alternatives in 2026</h2>
    <p>If ${p.name} doesn't fit your budget or use case, consider these alternatives: ${alternatives}. Compare them all on our <a href="${SITE}/compare" style="color:#2563eb">proxy comparison page</a>.</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Related Guides</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      <li><a href="${SITE}/guides/best-proxies-2026" style="color:#2563eb">Best Proxy Providers for 2026</a></li>
      <li><a href="${SITE}/guides/best-residential-proxies" style="color:#2563eb">Best Residential Proxies for 2026</a></li>
      <li><a href="${SITE}/compare" style="color:#2563eb">Compare All Proxy Providers</a></li>
      <li><a href="${SITE}/reviews" style="color:#2563eb">All Proxy Provider Reviews</a></li>
    </ul>`;
}

function countryBody(c, allProviders) {
  const topProvs = c.topProviders.map(slug => {
    const prov = allProviders.find(p => p.slug === slug);
    return prov ? `<li><a href="${SITE}/reviews/${slug}" style="color:#2563eb">${prov.name}</a>  ${prov.shortDescription}</li>` : "";
  }).join("");
  const cities = c.topCities.map(city => `<li><a href="${SITE}/countries/${c.slug}/cities/${slugify(city)}" style="color:#2563eb">${city} Proxies</a></li>`).join("");
  const keywords = c.primaryKeywords.map(k => `<li>${k}</li>`).join("");
  const intents = c.searchIntents.map(i => `<li>${i}</li>`).join("");
  const useCases = c.primaryUseCases.map(u => `<li>${u}</li>`).join("");
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Best ${c.name} Proxies 2026  Residential &amp; Datacenter IPs</h1>
    <p style="color:#6b7280;margin-bottom:1.5rem">Last updated: May 2026  ${c.poolDepth} available  ${c.internetUsers} internet users</p>
    <p style="font-size:1.1rem;margin-bottom:1.5rem">${c.notes}</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">${c.name} Proxy Market Overview</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      <li><strong>Population:</strong> ${c.population}</li>
      <li><strong>Internet Users:</strong> ${c.internetUsers}</li>
      <li><strong>Capital:</strong> ${c.capital}</li>
      <li><strong>Region:</strong> ${c.region}</li>
      <li><strong>Residential IP Pool:</strong> ${c.poolDepth}</li>
      <li><strong>Average Speed:</strong> ${c.averageSpeed}</li>
      <li><strong>IPv6 Adoption:</strong> ${c.ipv6Adoption}</li>
      <li><strong>Market Size:</strong> ${c.marketSize}</li>
    </ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Top Use Cases for ${c.name} Proxies</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${useCases}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Best Proxy Providers for ${c.name}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${topProvs}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Major ISPs &amp; Carriers in ${c.name}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${c.carriers.map(car => `<li>${car}</li>`).join("")}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Legal Note</h2>
    <p>${c.legalNote}</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Proxies by City in ${c.name}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${cities}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Popular Search Terms for ${c.name} Proxies</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${keywords}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">What People Ask About ${c.name} Proxies</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${intents}</ul>
    <p style="margin-top:2rem">Compare all providers at <a href="${SITE}/compare" style="color:#2563eb">ToptierProxy Compare</a> or read our <a href="${SITE}/guides/best-proxies-2026" style="color:#2563eb">Best Proxies for 2026</a> guide.</p>`;
}

function guideBody(g, allProviders) {
  const provLinks = g.providerSlugs.map(slug => {
    const prov = allProviders.find(p => p.slug === slug);
    return prov ? `<li><a href="${SITE}/reviews/${slug}" style="color:#2563eb">${prov.name}</a>  ${prov.tagline}</li>` : "";
  }).join("");
  const related = g.related.map(r => `<li><a href="${SITE}/guides/${r.to}" style="color:#2563eb">${r.label}</a></li>`).join("");
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">${g.title}</h1>
    <p style="color:#6b7280;margin-bottom:1.5rem">Last updated: May 2026  By ToptierProxy Editorial Team  Independent testing across 225+ criteria</p>
    <p style="font-size:1.1rem;margin-bottom:1.5rem">${g.intro}</p>
    <p>${g.body}</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Top Recommended Providers for ${g.shortLabel}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${provLinks}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Related Guides</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${related}</ul>
    <p style="margin-top:2rem">See our full <a href="${SITE}/compare" style="color:#2563eb">proxy comparison tool</a> or browse all <a href="${SITE}/reviews" style="color:#2563eb">provider reviews</a>.</p>`;
}

function blogBody(b) {
  const sections = b.body.map(section => {
    const paras = section.paragraphs.map(p => `<p style="margin:1rem 0">${p}</p>`).join("");
    const list = section.list ? `<ul style="margin:1rem 0;padding-left:1.5rem">${section.list.map(i => `<li>${i}</li>`).join("")}</ul>` : "";
    return `<h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">${section.heading}</h2>${paras}${list}`;
  }).join("");
  const tags = b.tags.map(t => `<span style="background:#dbeafe;color:#1e40af;padding:.2rem .6rem;border-radius:9999px;font-size:.8rem;margin-right:.5rem">${t}</span>`).join("");
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">${b.title}</h1>
    <p style="color:#6b7280;margin-bottom:.5rem">By ${b.author}  ${b.datePublished}  ${b.readTime} read  ${b.category}</p>
    <div style="margin-bottom:1.5rem">${tags}</div>
    <p style="font-size:1.1rem;margin-bottom:1.5rem;font-style:italic">${b.excerpt}</p>
    ${sections}
    <p style="margin-top:2rem">Read more on <a href="${SITE}/blog" style="color:#2563eb">ToptierProxy Blog</a> or see our <a href="${SITE}/guides/best-proxies-2026" style="color:#2563eb">Best Proxies 2026 guide</a>.</p>`;
}

function useCaseBody(u, allProviders) {
  const provLinks = u.bestProviders.map(slug => {
    const prov = allProviders.find(p => p.slug === slug);
    return prov ? `<li><a href="${SITE}/reviews/${slug}" style="color:#2563eb">${prov.name}</a>  ${prov.tagline}</li>` : "";
  }).join("");
  const keywords = u.primaryKeywords.map(k => `<li>${k}</li>`).join("");
  const challenges = u.challenges.map(c => `<li>${c}</li>`).join("");
  const whyMatters = u.whyMatters.map(w => `<li>${w}</li>`).join("");
  const sections = u.body.map(section => {
    const paras = section.paragraphs.map(p => `<p style="margin:1rem 0">${p}</p>`).join("");
    const list = section.list ? `<ul style="margin:1rem 0;padding-left:1.5rem">${section.list.map(i => `<li>${i}</li>`).join("")}</ul>` : "";
    return `<h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">${section.heading}</h2>${paras}${list}`;
  }).join("");
  const faqs = u.faqs.map(f => `<h3 style="font-weight:700;margin-top:1.5rem">${f.q}</h3><p>${f.a}</p>`).join("");
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">${u.title}</h1>
    <p style="color:#6b7280;margin-bottom:1.5rem">Last updated: May 2026  Recommended type: ${u.recommendedType} proxies</p>
    <p style="font-size:1.1rem;margin-bottom:1.5rem">${u.intro}</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Why Proxy Choice Matters for ${u.title}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${whyMatters}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Key Challenges</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${challenges}</ul>
    ${sections}
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Best Providers for ${u.title}</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${provLinks}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Frequently Asked Questions</h2>
    ${faqs}
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Target Keywords</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${keywords}</ul>`;
}

function cityBody(x, allProviders) {
  const topProvs = x.country.topProviders.slice(0, 4).map(slug => {
    const prov = allProviders.find(p => p.slug === slug);
    return prov ? `<li><a href="${SITE}/reviews/${slug}" style="color:#2563eb">${prov.name}</a>  Best for ${prov.bestFor}</li>` : "";
  }).join("");
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Best ${x.city} Proxies 2026  ${x.country.name} IPs</h1>
    <p style="color:#6b7280;margin-bottom:1.5rem">Last updated: May 2026  Residential &amp; Datacenter IPs in ${x.city}, ${x.country.name}</p>
    <p style="font-size:1.1rem;margin-bottom:1.5rem">Find the best proxy providers with IP addresses in ${x.city}, ${x.country.name}. Whether you need residential IPs for web scraping, datacenter proxies for high-volume tasks or ISP proxies for ad verification, the providers below offer verified ${x.city} IP coverage.</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Why Use ${x.city} Proxies?</h2>
    <p>${x.city} is one of the key cities in ${x.country.name}  ${x.country.notes} Proxies with ${x.city} IPs are used for local SEO rank tracking, geo-targeted ad verification, e-commerce price monitoring and accessing region-locked content.</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Best Providers with ${x.city} IP Coverage</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">${topProvs}</ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">${x.country.name} Proxy Market</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      <li><strong>Pool Depth:</strong> ${x.country.poolDepth}</li>
      <li><strong>Average Speed:</strong> ${x.country.averageSpeed}</li>
      <li><strong>Major ISPs:</strong> ${x.country.carriers.slice(0, 4).join(", ")}</li>
      <li><strong>Market Size:</strong> ${x.country.marketSize}</li>
    </ul>
    <p style="margin-top:2rem">Browse all <a href="${SITE}/countries/${x.countrySlug}" style="color:#2563eb">${x.country.name} proxy providers</a> or compare at <a href="${SITE}/compare" style="color:#2563eb">ToptierProxy Compare</a>.</p>`;
}

function vsBody(a, b) {
  return `
    <h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">${a.name} vs ${b.name} 2026  Side-by-Side Comparison</h1>
    <p style="color:#6b7280;margin-bottom:1.5rem">Last updated: May 2026  Independent benchmark by ToptierProxy Editorial Team</p>
    <p style="font-size:1.1rem;margin-bottom:1.5rem">Choosing between ${a.name} and ${b.name}? This side-by-side comparison covers pricing, pool size, proxy types, country coverage, anti-bot success rates and best use cases to help you decide.</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">${a.name} Overview</h2>
    <p>${a.shortDescription}</p>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      ${a.poolSize ? `<li><strong>Pool Size:</strong> ${a.poolSize}</li>` : ""}
      ${a.countries ? `<li><strong>Countries:</strong> ${a.countries}+</li>` : ""}
      ${a.startingPriceGB ? `<li><strong>Price:</strong> from $${a.startingPriceGB}/GB</li>` : ""}
      <li><strong>Best For:</strong> ${a.bestFor}</li>
      <li><strong>Rating:</strong> ${a.rating}/5</li>
      <li><strong>Trust Score:</strong> ${a.trustScore}/100</li>
    </ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">${b.name} Overview</h2>
    <p>${b.shortDescription}</p>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      ${b.poolSize ? `<li><strong>Pool Size:</strong> ${b.poolSize}</li>` : ""}
      ${b.countries ? `<li><strong>Countries:</strong> ${b.countries}+</li>` : ""}
      ${b.startingPriceGB ? `<li><strong>Price:</strong> from $${b.startingPriceGB}/GB</li>` : ""}
      <li><strong>Best For:</strong> ${b.bestFor}</li>
      <li><strong>Rating:</strong> ${b.rating}/5</li>
      <li><strong>Trust Score:</strong> ${b.trustScore}/100</li>
    </ul>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Which Is Better: ${a.name} or ${b.name}?</h2>
    <p>Both ${a.name} and ${b.name} are strong proxy providers but serve different needs. ${a.name} is best for ${a.bestFor.toLowerCase()} while ${b.name} excels at ${b.bestFor.toLowerCase()}. For most users, the choice comes down to budget, pool size requirements and the specific targets you need to scrape.</p>
    <h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">Related Comparisons</h2>
    <ul style="margin:1rem 0;padding-left:1.5rem">
      <li><a href="${SITE}/reviews/${a.slug}" style="color:#2563eb">${a.name} Full Review</a></li>
      <li><a href="${SITE}/reviews/${b.slug}" style="color:#2563eb">${b.name} Full Review</a></li>
      <li><a href="${SITE}/compare" style="color:#2563eb">Compare All Proxy Providers</a></li>
      <li><a href="${SITE}/guides/best-proxies-2026" style="color:#2563eb">Best Proxy Providers 2026</a></li>
    </ul>`;
}

async function run() {
  const { providers } = await loadTs("src/data/providers.ts");
  const { guides } = await loadTs("src/data/guides.ts");
  const { countries, allCityPairs } = await loadTs("src/data/countries.ts");
  const { useCases } = await loadTs("src/data/use-cases.ts");
  const { blogPosts } = await loadTs("src/data/blog.ts");

  let count = 0;

  // Static pages
  const staticPages = [
    ["/reviews", "Proxy Provider Reviews 2026 | ToptierProxy.com", "In-depth, hands-on reviews of every major proxy provider. Updated for 2026 with pricing, pool size, geographic coverage, anti-bot success rates and Trust Score.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Proxy Provider Reviews 2026</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">In-depth, hands-on reviews of every major proxy provider. Updated for 2026 with pricing, pool size, geographic coverage, anti-bot success rates and Trust Score.</p><h2 style="font-size:1.4rem;font-weight:700;color:#1e3a5f;margin-top:2rem">All Proxy Provider Reviews</h2><ul style="margin:1rem 0;padding-left:1.5rem">${providers.map(p => `<li><a href="${SITE}/reviews/${p.slug}" style="color:#2563eb">${p.name} Review 2026</a>  ${p.tagline}</li>`).join("")}</ul>`],
    ["/guides", "Proxy Guides & Tutorials 2026 | ToptierProxy.com", "Expert proxy guides covering residential, datacenter, ISP and mobile proxies.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Proxy Guides &amp; Tutorials 2026</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Expert proxy guides covering residential, datacenter, ISP and mobile proxies. Step-by-step tutorials for scraping, SEO, ad verification and more.</p><ul style="margin:1rem 0;padding-left:1.5rem">${guides.map(g => `<li><a href="${SITE}/guides/${g.slug}" style="color:#2563eb">${g.title}</a>  ${g.intro}</li>`).join("")}</ul>`],
    ["/countries", "Proxy Servers by Country 2026 | ToptierProxy.com", "Find the best proxy providers for every country.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Proxy Servers by Country 2026</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Find the best proxy providers for every country. Compare residential IP pool sizes, speeds and pricing by location across 60+ countries.</p><ul style="margin:1rem 0;padding-left:1.5rem">${countries.map(c => `<li><a href="${SITE}/countries/${c.slug}" style="color:#2563eb">Best ${c.name} Proxies 2026</a>  ${c.poolDepth}</li>`).join("")}</ul>`],
    ["/compare", "Compare Proxy Providers Side-by-Side | ToptierProxy.com", "Side-by-side proxy provider comparison.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Compare Proxy Providers 2026</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Side-by-side proxy provider comparison. Compare pricing, pool size, speed, uptime and features across all major providers.</p><ul style="margin:1rem 0;padding-left:1.5rem">${providers.map(p => `<li><a href="${SITE}/reviews/${p.slug}" style="color:#2563eb">${p.name}</a>  ${p.tagline}  Rating: ${p.rating}/5</li>`).join("")}</ul>`],
    ["/blog", "Proxy Blog  News, Tips & Tutorials | ToptierProxy.com", "Latest proxy industry news, scraping tutorials, and expert tips.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Proxy Blog 2026</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Latest proxy industry news, scraping tutorials, and expert tips from the ToptierProxy.com team.</p><ul style="margin:1rem 0;padding-left:1.5rem">${blogPosts.map(b => `<li><a href="${SITE}/blog/${b.slug}" style="color:#2563eb">${b.title}</a>  ${b.excerpt}</li>`).join("")}</ul>`],
    ["/use-cases", "Proxy Use Cases & Applications | ToptierProxy.com", "Explore how proxies are used for web scraping, SEO, ad verification and more.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Proxy Use Cases 2026</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Explore how proxies are used for web scraping, SEO, ad verification, sneaker copping, market research and more.</p><ul style="margin:1rem 0;padding-left:1.5rem">${useCases.map(u => `<li><a href="${SITE}/use-cases/${u.slug}" style="color:#2563eb">${u.title}</a>  ${u.intro}</li>`).join("")}</ul>`],
    ["/resources", "Proxy Resources & Tools | ToptierProxy.com", "Free proxy resources, tools and calculators.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Proxy Resources &amp; Tools</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Free proxy resources, tools and calculators to help you choose the right proxy provider for your needs.</p>`],
    ["/about", "About ToptierProxy.com", "ToptierProxy.com provides unbiased proxy provider reviews.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">About ToptierProxy.com</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">ToptierProxy.com is the world's most trusted independent proxy provider review platform. We help developers, agencies and enterprise data teams find the best residential, datacenter, ISP and mobile proxy providers through rigorous hands-on testing and unbiased editorial reviews.</p>`],
    ["/contact", "Contact ToptierProxy.com", "Get in touch with the ToptierProxy.com team.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Contact ToptierProxy.com</h1><p>Get in touch with our editorial team for questions, partnerships or provider submissions.</p>`],
    ["/how-we-test", "How We Test Proxy Providers | ToptierProxy.com", "Our rigorous methodology for testing proxy providers.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">How We Test Proxy Providers</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">Every proxy provider reviewed on ToptierProxy.com goes through our 225-point testing framework covering success rate against Cloudflare, DataDome, PerimeterX and Akamai; latency from 12 global regions; IP rotation quality; dashboard usability; pricing transparency; and customer support response times.</p>`],
    ["/why-trust-us", "Why Trust ToptierProxy.com Reviews?", "Learn about our editorial independence and testing methodology.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Why Trust ToptierProxy.com?</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">ToptierProxy.com operates with full editorial independence. No proxy provider can pay to improve their ranking or review score. Our Trust Score algorithm is based purely on performance data collected during hands-on testing.</p>`],
    ["/trust-score", "ToptierProxy Trust Score Explained | ToptierProxy.com", "The ToptierProxy Trust Score is a 0-100 rating.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">ToptierProxy Trust Score Explained</h1><p style="font-size:1.1rem;margin-bottom:1.5rem">The ToptierProxy Trust Score is a 0-100 composite rating that measures proxy provider reliability, pricing transparency, ethical IP sourcing, customer support quality and long-term consistency.</p>`],
    ["/privacy", "Privacy Policy | ToptierProxy.com", "ToptierProxy.com privacy policy.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Privacy Policy</h1><p>This privacy policy explains how ToptierProxy.com collects, uses and protects your personal data.</p>`],
    ["/terms", "Terms of Service | ToptierProxy.com", "ToptierProxy.com terms of service.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Terms of Service</h1><p>By using ToptierProxy.com you agree to these terms of service.</p>`],
    ["/disclaimers", "Disclaimers | ToptierProxy.com", "Affiliate and editorial disclaimers.", `<h1 style="font-size:2rem;font-weight:800;color:#1e3a5f;margin-bottom:.5rem">Disclaimers</h1><p>ToptierProxy.com participates in affiliate programs. When you click provider links and make a purchase, we may earn a commission at no extra cost to you. This never influences our editorial ratings or rankings.</p>`],
  ];

  for (const [path, title, desc, body] of staticPages) {
    writeHtml(path, title, desc, body);
    count++;
  }
  console.log(` ${staticPages.length} static pages`);

  // Provider reviews
  for (const p of providers) {
    const title = `${p.name} Review 2026  Pricing, Pool Size & Benchmarks | ToptierProxy.com`;
    const desc = `Independent ${p.name} review: ${p.poolSize || ""} pool across ${p.countries || ""}+ countries. Pricing from $${p.startingPriceGB}/GB. Pros, cons, benchmarks and alternatives.`;
    writeHtml(`/reviews/${p.slug}`, title, desc, providerBody(p, providers));
    count++;
  }
  console.log(` ${providers.length} provider reviews`);

  // Guides
  for (const g of guides) {
    const title = `${g.title} | ToptierProxy.com`;
    writeHtml(`/guides/${g.slug}`, title, g.description, guideBody(g, providers));
    count++;
  }
  console.log(` ${guides.length} guides`);

  // Countries
  for (const c of countries) {
    const title = `Best ${c.name} Proxies 2026  Residential & Datacenter IPs | ToptierProxy.com`;
    const desc = `Find the best ${c.name} proxy providers. ${c.poolDepth} available. Compare residential, datacenter and ISP proxies for ${c.name}.`;
    writeHtml(`/countries/${c.slug}`, title, desc, countryBody(c, providers));
    const bestTitle = `Best Proxies for ${c.name} 2026 | ToptierProxy.com`;
    writeHtml(`/best/${c.slug}-proxies`, bestTitle, desc, countryBody(c, providers));
    count += 2;
  }
  console.log(` ${countries.length} country pages + ${countries.length} best pages`);

  // City pages
  for (const x of allCityPairs) {
    const title = `Best ${x.city} Proxies 2026  ${x.country.name} IPs | ToptierProxy.com`;
    const desc = `Find the best proxy providers with ${x.city}, ${x.country.name} IP addresses. Residential and datacenter proxies for ${x.city}.`;
    writeHtml(`/countries/${x.countrySlug}/cities/${x.citySlug}`, title, desc, cityBody(x, providers));
    count++;
  }
  console.log(` ${allCityPairs.length} city pages`);

  // Use cases
  for (const u of useCases) {
    writeHtml(`/use-cases/${u.slug}`, u.metaTitle, u.metaDescription, useCaseBody(u, providers));
    count++;
  }
  console.log(` ${useCases.length} use case pages`);

  // Blog posts
  for (const b of blogPosts) {
    const title = `${b.title} | ToptierProxy.com`;
    writeHtml(`/blog/${b.slug}`, title, b.description, blogBody(b));
    count++;
  }
  console.log(` ${blogPosts.length} blog posts`);

  // VS matchups
  let vsCount = 0;
  for (let i = 0; i < providers.length; i++) {
    for (let j = i + 1; j < providers.length; j++) {
      const a = providers[i];
      const b = providers[j];
      const title = `${a.name} vs ${b.name} 2026  Side-by-Side Comparison | ToptierProxy.com`;
      const desc = `${a.name} vs ${b.name}: compare pricing, pool size, speed and features. Which proxy provider is better in 2026?`;
      writeHtml(`/vs/${a.slug}-vs-${b.slug}`, title, desc, vsBody(a, b));
      vsCount++;
      count++;
    }
  }
  console.log(` ${vsCount} VS matchup pages`);
  console.log(`\n DONE  ${count} HTML files generated in dist/`);
}

run().catch((e) => { console.error(e); process.exit(1); });
