import { createFileRoute } from "@tanstack/react-router";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { countries } from "@/data/countries";
import { blogPosts } from "@/data/blog";

const SITE = "https://toptierproxy.com";

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];
  const staticUrls = [
    "/", "/reviews", "/guides", "/countries", "/compare", "/blog",
    "/resources", "/about", "/contact", "/how-we-test", "/why-trust-us",
    "/trust-score", "/privacy", "/terms", "/disclaimers",
  ];
  const urls: { loc: string; priority: string; changefreq: string }[] = [
    ...staticUrls.map((u) => ({ loc: u, priority: u === "/" ? "1.0" : "0.8", changefreq: "weekly" })),
    ...providers.map((p) => ({ loc: `/reviews/${p.slug}`, priority: "0.9", changefreq: "weekly" })),
    ...guides.map((g) => ({ loc: `/guides/${g.slug}`, priority: "0.9", changefreq: "weekly" })),
    ...countries.map((c) => ({ loc: `/countries/${c.slug}`, priority: "0.7", changefreq: "monthly" })),
    ...blogPosts.map((b) => ({ loc: `/blog/${b.slug}`, priority: "0.8", changefreq: "monthly" })),
  ];
  const top = providers.slice(0, 8);
  for (let i = 0; i < top.length; i++) {
    for (let j = i + 1; j < top.length; j++) {
      urls.push({ loc: `/vs/${top[i].slug}-vs-${top[j].slug}`, priority: "0.6", changefreq: "monthly" });
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
