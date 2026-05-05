import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { countries, allCityPairs } from "@/data/countries";
import { blogPosts } from "@/data/blog";
import { useCases } from "@/data/use-cases";

const SITE = "https://toptierproxy.com";

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];
  const staticUrls = [
    "/", "/reviews", "/guides", "/countries", "/compare", "/blog", "/use-cases",
    "/resources", "/about", "/contact", "/how-we-test", "/why-trust-us",
    "/trust-score", "/privacy", "/terms", "/disclaimers",
  ];
  const urls: { loc: string; priority: string; changefreq: string }[] = [
    ...staticUrls.map((u) => ({ loc: u, priority: u === "/" ? "1.0" : "0.8", changefreq: "weekly" })),
    ...providers.map((p) => ({ loc: `/reviews/${p.slug}`, priority: "0.9", changefreq: "weekly" })),
    ...guides.map((g) => ({ loc: `/guides/${g.slug}`, priority: "0.9", changefreq: "weekly" })),
    ...countries.map((c) => ({ loc: `/countries/${c.slug}`, priority: "0.7", changefreq: "monthly" })),
    ...countries.map((c) => ({ loc: `/best/${c.slug}-proxies`, priority: "0.8", changefreq: "monthly" })),
    ...allCityPairs.map((p) => ({ loc: `/countries/${p.countrySlug}/cities/${p.citySlug}`, priority: "0.6", changefreq: "monthly" })),
    ...useCases.map((u) => ({ loc: `/use-cases/${u.slug}`, priority: "0.8", changefreq: "monthly" })),
    ...blogPosts.map((b) => ({ loc: `/blog/${b.slug}`, priority: "0.8", changefreq: "monthly" })),
  ];
  // All provider vs combinations
  for (let i = 0; i < providers.length; i++) {
    for (let j = i + 1; j < providers.length; j++) {
      urls.push({ loc: `/vs/${providers[i].slug}-vs-${providers[j].slug}`, priority: "0.5", changefreq: "monthly" });
    }
  }
  const body = urls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => new Response(buildSitemap(), {
        headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
      }),
    },
  },
});
