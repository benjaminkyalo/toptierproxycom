#!/usr/bin/env node
// Generates static files for VPS hosting (Path B):
//  - public/robots.txt
//  - public/sitemap.xml
//  - public/go/<slug>/index.html  (HTML meta-refresh redirects to affiliate URLs)
//
// Run BEFORE `vite build` so files are copied into the build output.
// Usage: node scripts/build-static.mjs

import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const PUBLIC = resolve(root, "public");
const SITE = process.env.SITE_URL || "https://www.toptierproxy.com";

async function loadTs(rel) {
  // tsx is not required: data files are plain TS exports w/ no runtime deps.
  // Use a dynamic import via a temporary .mjs trick — easier: use bun if present.
  // Fallback: regex-extract slugs. We use bun if available.
  const mod = await import(pathToFileURL(resolve(root, rel)).href);
  return mod;
}

async function run() {
  const { providers } = await loadTs("src/data/providers.ts");
  const { guides } = await loadTs("src/data/guides.ts");
  const { countries, allCityPairs } = await loadTs("src/data/countries.ts");
  const { useCases } = await loadTs("src/data/use-cases.ts");
  const { blogPosts } = await loadTs("src/data/blog.ts");

  // robots.txt
  writeFileSync(
    resolve(PUBLIC, "robots.txt"),
    `User-agent: *\nAllow: /\nDisallow: /go/\n\nSitemap: ${SITE}/sitemap.xml\n`,
  );

  // sitemap.xml
  const today = new Date().toISOString().split("T")[0];
  const staticUrls = [
    "/", "/reviews", "/guides", "/countries", "/compare", "/blog", "/use-cases",
    "/resources", "/about", "/contact", "/how-we-test", "/why-trust-us",
    "/trust-score", "/privacy", "/terms", "/disclaimers",
  ];
  const urls = [
    ...staticUrls.map((u) => ({ loc: u, p: u === "/" ? "1.0" : "0.8", c: "weekly" })),
    ...providers.map((p) => ({ loc: `/reviews/${p.slug}`, p: "0.9", c: "weekly" })),
    ...guides.map((g) => ({ loc: `/guides/${g.slug}`, p: "0.9", c: "weekly" })),
    ...countries.map((c) => ({ loc: `/countries/${c.slug}`, p: "0.7", c: "monthly" })),
    ...countries.map((c) => ({ loc: `/best/${c.slug}-proxies`, p: "0.8", c: "monthly" })),
    ...allCityPairs.map((x) => ({ loc: `/countries/${x.countrySlug}/cities/${x.citySlug}`, p: "0.6", c: "monthly" })),
    ...useCases.map((u) => ({ loc: `/use-cases/${u.slug}`, p: "0.8", c: "monthly" })),
    ...blogPosts.map((b) => ({ loc: `/blog/${b.slug}`, p: "0.8", c: "monthly" })),
  ];
  for (let i = 0; i < providers.length; i++) {
    for (let j = i + 1; j < providers.length; j++) {
      urls.push({ loc: `/vs/${providers[i].slug}-vs-${providers[j].slug}`, p: "0.5", c: "monthly" });
    }
  }
  const body = urls
    .map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.c}</changefreq><priority>${u.p}</priority></url>`)
    .join("\n");
  writeFileSync(
    resolve(PUBLIC, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
  );

  // /go/<slug>/index.html — HTML meta-refresh redirect (replaces server redirect)
  const goDir = resolve(PUBLIC, "go");
  rmSync(goDir, { recursive: true, force: true });
  for (const p of providers) {
    const dir = resolve(goDir, p.slug);
    mkdirSync(dir, { recursive: true });
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex,nofollow">
<meta http-equiv="refresh" content="0; url=${p.visitUrl}">
<link rel="canonical" href="${p.visitUrl}">
<script>location.replace(${JSON.stringify(p.visitUrl)});</script>
</head>
<body>Redirecting to <a href="${p.visitUrl}" rel="nofollow sponsored noopener">${p.visitUrl}</a>…</body>
</html>`;
    writeFileSync(resolve(dir, "index.html"), html);
  }

  console.log(`✓ static assets generated in public/ (${providers.length} /go redirects, ${urls.length} sitemap urls)`);
}

run().catch((e) => { console.error(e); process.exit(1); });
