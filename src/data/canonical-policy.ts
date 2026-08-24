// Consolidation policy — single source of truth for which URLs are the canonical,
// indexable version of a topic. See docs/seo-consolidation-audit.md.
//
// Nothing here deletes a URL. Every page stays live, linked and crawlable; the
// policy only decides (a) which URL carries the canonical tag and (b) which URLs
// are advertised in sitemap.xml. Fully reversible in one commit.


export const SITE = "https://www.toptierproxy.com";

/* ------------------------------------------------------------------ *
 * Phase 1 — /best/{country}-proxies duplicates /countries/{country}
 * (measured 41–42% body overlap). Country page is the canonical target.
 * ------------------------------------------------------------------ */
export function bestCanonicalPath(countrySlug: string): string {
  return `/countries/${countrySlug}`;
}

/* ------------------------------------------------------------------ *
 * Phase 2 — city tiering: ROLLED BACK 2026-08-24.
 *
 * Cross-page canonicals on ~300 city pages removed ~2,200 daily
 * impressions within days of deploy (GSC: 2,443/day on 12 Aug →
 * ~150/day by 19 Aug). Every city page now self-canonicals and is
 * advertised in the sitemap again. Phase 4 gave these pages
 * market-specific content, so they are not thin duplicates.
 * ------------------------------------------------------------------ */
export function isCityTierA(_countrySlug: string, _citySlug: string): boolean {
  return true;
}

export function cityCanonicalPath(countrySlug: string, citySlug: string): string {
  return `/countries/${countrySlug}/cities/${citySlug}`;
}

/* ------------------------------------------------------------------ *
 * Phase 3 — /vs/* pruning: ROLLED BACK 2026-08-24 for the same reason.
 * Matchup pages self-canonical and are advertised again.
 * ------------------------------------------------------------------ */
export const VS_CORE_PROVIDERS = [
  "bright-data",
  "oxylabs",
  "decodo",
  "iproyal",
  "soax",
  "webshare",
] as const;

export function isVsTierA(_a: string, _b: string): boolean {
  return true;
}

export function vsCanonicalPath(a: string, b: string): string {
  return `/vs/${a}-vs-${b}`;
}

