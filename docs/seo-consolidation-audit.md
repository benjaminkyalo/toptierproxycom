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
