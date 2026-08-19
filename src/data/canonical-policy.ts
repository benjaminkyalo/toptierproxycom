// Consolidation policy — single source of truth for which URLs are the canonical,
// indexable version of a topic. See docs/seo-consolidation-audit.md.
//
// Nothing here deletes a URL. Every page stays live, linked and crawlable; the
// policy only decides (a) which URL carries the canonical tag and (b) which URLs
// are advertised in sitemap.xml. Fully reversible in one commit.

import { countries, cityToSlug } from "./countries";
import { getCityContent } from "./city-content";
import { getCityDeep } from "./city-deep";

export const SITE = "https://www.toptierproxy.com";

/* ------------------------------------------------------------------ *
 * Phase 1 — /best/{country}-proxies duplicates /countries/{country}
 * (measured 41–42% body overlap). Country page is the canonical target.
 * ------------------------------------------------------------------ */
export function bestCanonicalPath(countrySlug: string): string {
  return `/countries/${countrySlug}`;
}

/* ------------------------------------------------------------------ *
 * Phase 2 — city tiering.
 * Tier A (self-canonical, in sitemap): a city with its own researched
 * record (city-deep or city-content), or the country's primary city.
 * Tier B: canonical to the parent country page.
 * ------------------------------------------------------------------ */
export function isCityTierA(countrySlug: string, citySlug: string): boolean {
  if (getCityDeep(citySlug, countrySlug)) return true;
  if (getCityContent(citySlug)) return true;
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return false;
  return cityToSlug(country.topCities[0]) === citySlug;
}

export function cityCanonicalPath(countrySlug: string, citySlug: string): string {
  return isCityTierA(countrySlug, citySlug)
    ? `/countries/${countrySlug}/cities/${citySlug}`
    : `/countries/${countrySlug}`;
}

/* ------------------------------------------------------------------ *
 * Phase 3 — /vs/* pruning (measured 71% overlap between siblings).
 * Keep matchups between the providers users actually compare; the rest
 * canonical to the /compare hub.
 * ------------------------------------------------------------------ */
export const VS_CORE_PROVIDERS = [
  "bright-data",
  "oxylabs",
  "decodo",
  "iproyal",
  "soax",
  "webshare",
] as const;

export function isVsTierA(a: string, b: string): boolean {
  const core = VS_CORE_PROVIDERS as readonly string[];
  return core.includes(a) && core.includes(b);
}

export function vsCanonicalPath(a: string, b: string): string {
  return isVsTierA(a, b) ? `/vs/${a}-vs-${b}` : "/compare";
}
