# Add PROXYS.IO across ToptierProxy

## Goal
Create a factual, conversion-focused PROXYS.IO review page and surface it wherever visitors discover or compare providers, using the supplied affiliate URL, discount code, logo, screenshots, pricing and coverage data.

## What will change
- Add a dedicated `/proxys-io-review` page with:
  - Clear verdict, strengths, limitations and suitability guidance.
  - Residential, mobile and per-address pricing tables without inventing the unpublished mobile traffic rate.
  - Coverage details for the 100M+ residential pool, 195 countries, residential targeting and listed mobile/static locations.
  - Protocol, rotation, session, refund and company details.
  - A prominent `HEAT_RES` 35%-off residential offer with copyable code and tracked affiliate calls to action.
  - The supplied optimized logo and two screenshots, with descriptive alt text and lazy loading below the first screen.
  - Honest disclosure that supplied specifications are provider-reported unless independently measured.
  - FAQ, internal links, sticky desktop offer and compact mobile action bar.
- Add PROXYS.IO to relevant discovery points:
  - Reviews page and Reviews navigation dropdown.
  - Global Partners marquee.
  - Homepage Top Picks and featured partner area where the existing provider model supports it.
  - Main comparison table and generic category/provider listings through the central provider data.
  - Footer review links.
  - Tracked `/go/proxys-io` redirect and generated static redirect output.
- Add the real logo to the shared provider-logo system.
- Add page metadata and structured data:
  - Self-referencing canonical on `https://www.toptierproxy.com/proxys-io-review`.
  - Article/Open Graph/Twitter metadata.
  - Breadcrumb, Review/Product, Offer, Organization, FAQ and speakable markup.
  - Crawlable prerendered content and sitemap inclusion.

## Accuracy rules
- Quote residential rotating at **$1.50/GB** and label mobile rotating pricing as cart-calculated/pending confirmation.
- Keep per-address prices distinct from traffic-based products.
- State the supplied 24-hour refund window and minimum one-month static rental plainly.
- Do not claim independent speed, uptime, anti-bot or hands-on benchmark results that were not supplied.
- Use `https://proxys.io/?refid=389543` for commercial links with sponsored/nofollow attributes.

## Validation
- Check the new page and all key entry points on desktop and mobile.
- Verify the promo-code copy action and every PROXYS.IO destination.
- Confirm metadata, structured data, sitemap and prerendered body are present.
- Confirm the project build succeeds and review current preview errors before completion.

## Technical details
- Follow the standalone-review route pattern used by the existing detailed reviews while keeping components local and focused.
- Extend central provider data only where required so generic pages inherit PROXYS.IO automatically.
- Update static prerender and redirect generation explicitly for the standalone URL.
