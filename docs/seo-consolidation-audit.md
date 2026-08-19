# ToptierProxy — Consolidation Audit (measured, not estimated)

Date: 2026-08-19. Method: full sitemap inventory + live render of `<main>` text with
6-gram shingle overlap between sibling pages (Playwright against the running app).

## 1. Page inventory (from public/sitemap.xml — 703 URLs)

| Group | URLs | Unique data behind it | Verdict |
|---|---|---|---|
| `/countries/*/cities/*` | 284 | 11 cities in `city-content.ts` + 5 in `city-deep.ts` = **16** | 268 template-only pages |
| `/blog/*` | 137 | hand-written bodies | healthy |
| `/vs/*` | 66 | provider fields only | template-only |
| `/countries/*` | 60 | full country records | healthy |
| `/best/*` | 60 | **same country record as `/countries/*`** | near-duplicate layer |
| `/guides/*` | 18 | hand-written | healthy |
| `/use-cases/*` | 12 | hand-written | healthy |
| `/reviews/*` + standalone reviews | 18 | hand-written | healthy (money pages) |
| static/legal/hubs | ~28 | — | fine |

## 2. Measured duplication (6-gram overlap of main content)

| Pair | Words | Overlap |
|---|---|---|
| `/countries/france` vs `/best/france-proxies` | 1164 / 861 | **41.5%** |
| `/countries/hungary` vs `/best/hungary-proxies` | 1099 / 823 | **42.1%** |
| Trondheim vs Valencia (city template) | 1100 / 1137 | **68.2%** |
| Valencia vs Hamburg | 1137 / 1170 | 60.3% |
| Hamburg vs Osaka | 1170 / 1187 | 54.4% |
| `/vs/oxylabs-vs-decodo` vs `/vs/oxylabs-vs-soax` | 831 / 839 | **71.0%** |

Threshold interpretation: >50% inter-sibling overlap is the range where Google keeps a page
indexed but ranks it as a low-confidence candidate — exactly the impressions-with-zero-clicks
pattern seen in Search Console (avg position ~37).

## 3. Root cause

The site's authority is spread over ~410 template pages (city + best + vs) that share
50–70% of their body text. Each one competes with its own siblings, so no single URL
accumulates enough topical signal to reach page 1. The 200-ish hand-written pages
(blog, guides, use-cases, reviews, countries) are not the problem.

## 4. Consolidation plan (phased, reversible)

**Phase 1 — collapse the `/best/*` duplicate layer (60 URLs → 0 new content lost)**
`/best/{country}-proxies` renders the same country record as `/countries/{country}`.
Action: keep the URLs live (no 404s, inbound links preserved) but point their canonical at
`/countries/{country}`, drop them from the sitemap, and keep internal links flowing to the
country page. Exception: the 2 `/best/*` pages that already earn impressions
(`united-kingdom`, `hungary`) get promoted instead — they become the canonical target and the
country page canonicals to them only if data shows they win.

**Phase 2 — city tiering (284 URLs → ~40 indexable)**
- Tier A (keep + expand): 16 cities with real data, plus the top ~24 by search demand.
- Tier B (the remaining ~244): canonical to their parent country page, removed from sitemap,
  still reachable and still linked (they keep passing internal signal, they stop competing).
- Re-promote a Tier B city only when it gets a genuine `city-content` record.

**Phase 3 — `/vs/*` pruning (66 → ~20)**
Keep matchups between the 6 providers users actually compare; canonical the rest to
`/compare`. 71% overlap makes the long tail pure cannibalisation.

**Phase 4 — differentiate the survivors**
Own benchmark numbers, dated price tables, per-city carrier/ISP specifics, and intent-matched
formats (table-first for "best X", answer-box-first for "how to").

## 5. Guardrails

- No URL is deleted. Every consolidation is canonical + sitemap only, so it is reversible in
  one commit and no backlink or bookmark breaks.
- Internal links stay in place so consolidated pages keep funnelling authority upward.
- Changes land one phase at a time, with a health check and a re-render after each.

---

## 6. Implemented (2026-08-19)

Policy lives in `src/data/canonical-policy.ts` — one file governs canonicals and sitemap
inclusion for both the SPA route heads and `scripts/prerender.mjs`.

- **Phase 1** — all 60 `/best/{country}-proxies` canonical to `/countries/{country}`, removed
  from the sitemap, plus a prominent in-page link up to the country hub.
- **Phase 2** — city tiering rule: Tier A = city has a `city-deep` or `city-content` record, or
  is its country's primary city. Result: **70 of 284** cities are self-canonical and in the
  sitemap; the other 214 canonical to their country page and carry a "full guide" link upward.
- **Phase 3** — `/vs/*` kept for the 6 core providers (15 matchups); the other 51 canonical to
  `/compare` and link to the comparison table.
- Sitemap: **703 → 356** advertised URLs. Zero URLs deleted; `dist/` still ships 693 pages.
- Removed the build-date `<lastmod>` from sitemap.xml (it was not page-specific, so it told
  Google every page changed on every deploy).

### Critical bug found during the audit

`src/routes/countries.$slug.cities.$city.tsx` was nested under `/countries/$slug`, whose
component renders no `<Outlet/>` — so **every one of the 284 city pages rendered the country
page** in-browser (Valencia showed the h1 "Best Proxies for Spain"). The prerendered HTML had
city content, but real users and JS-executing crawlers saw the country page. Fixed by moving the
route to `countries_.$slug.cities.$city.tsx` (same URL, no parent nesting). Verified: Valencia
now renders "Best Valencia Proxies 2026" with 13 city mentions.

### Phase 4 queue (content work, per page — next)

1. The 70 Tier A cities without a `city-content` record: add carrier/ASN specifics, local target
   sites, city-level price observations, 3 FAQs each.
2. The 15 surviving `/vs` pages: add own benchmark numbers (success rate, latency, dated price).
3. Country pages with impressions but no clicks: intent-match the format to the live top 5.

### Phase 5 queue (head plumbing)

The root route renders no `<HeadContent />`, so route `head()` values never reach the browser —
each URL relies on its prerendered HTML (which is correct, and is what Google indexes). Enabling
`<HeadContent />` today emits React `tagName` warnings and does not override the canonical,
because routes declare canonicals inconsistently: some as `{ rel: "canonical" }` inside `meta`,
some as `{ tagName: "link", ... }`. Normalize every route's `head()` to `{ meta: [...], links:
[{ rel: "canonical", href }] }` first, then mount `<HeadContent />` so client-side navigation
updates the head too.
