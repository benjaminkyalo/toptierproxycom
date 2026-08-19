// Site-wide internal linking block.
//
// Purpose: give every content page a dense, crawlable, editorially-sensible set
// of outbound internal links (guides / use cases / reviews / countries / tools)
// with exact-match descriptive anchors. Links are picked deterministically from
// a hash of the current path so different pages surface different neighbours —
// this spreads PageRank across the whole site instead of funnelling every page
// into the same 6 destinations, while staying stable per URL between renders.

import { useLocation } from "@tanstack/react-router";
import { guides } from "@/data/guides";
import { useCases } from "@/data/use-cases";
import { providers } from "@/data/providers";
import { countries } from "@/data/countries";

type Item = { href: string; label: string };

function hashPath(path: string) {
  let h = 0;
  for (let i = 0; i < path.length; i++) h = (h * 31 + path.charCodeAt(i)) % 100000;
  return h;
}

// Rotating window over a list, offset by the page hash.
function pick<T>(list: T[], count: number, offset: number): T[] {
  if (list.length === 0) return [];
  const out: T[] = [];
  for (let i = 0; i < Math.min(count, list.length); i++) {
    out.push(list[(offset + i) % list.length]);
  }
  return out;
}

const EVERGREEN: Item[] = [
  { href: "/compare", label: "Compare all proxy providers side by side" },
  { href: "/guides/best-proxies-2026", label: "Best proxy providers in 2026" },
  { href: "/scraper-api", label: "Best web scraping APIs compared" },
  { href: "/trust-score", label: "How our Trust Score is calculated" },
  { href: "/how-we-test", label: "Our 225-criterion testing methodology" },
  { href: "/blog/free-proxy-list", label: "Free proxy list (updated 2026)" },
  { href: "/countries", label: "Proxies by country" },
  { href: "/use-cases", label: "Best proxies by use case" },
];

function normalise(path: string) {
  const p = path.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function ContextualLinkHub({
  heading = "Continue researching",
  intro,
}: {
  heading?: string;
  intro?: string;
}) {
  const location = useLocation();
  const current = normalise(location.pathname);
  const offset = hashPath(current);

  const guideItems: Item[] = guides.map((g) => ({
    href: `/guides/${g.slug}`,
    label: g.title,
  }));
  const useCaseItems: Item[] = useCases.map((u) => ({
    href: `/use-cases/${u.slug}`,
    label: u.title,
  }));
  const reviewItems: Item[] = providers.map((p) => ({
    href: `/reviews/${p.slug}`,
    label: `${p.name} review — pricing, pool size & test results`,
  }));
  const countryItems: Item[] = countries.map((c) => ({
    href: `/countries/${c.slug}`,
    label: `${c.name} proxies`,
  }));

  const columns: { title: string; items: Item[] }[] = [
    { title: "Buying guides", items: pick(guideItems, 5, offset) },
    { title: "By use case", items: pick(useCaseItems, 5, offset * 2 + 1) },
    { title: "Provider reviews", items: pick(reviewItems, 5, offset * 3 + 2) },
    { title: "By location", items: pick(countryItems, 5, offset * 5 + 3) },
  ].map((col) => ({ ...col, items: col.items.filter((i) => normalise(i.href) !== current) }));

  const evergreen = EVERGREEN.filter((i) => normalise(i.href) !== current);

  return (
    <nav aria-label="Related pages" className="mt-14 border-t border-border pt-8">
      <h2 className="text-xl font-bold text-foreground">{heading}</h2>
      {intro && <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{intro}</p>}

      <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{col.title}</h3>
            <ul className="mt-3 space-y-2">
              {col.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-foreground/80 hover:text-primary hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-dotted border-border pt-5">
        {evergreen.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// Small reusable card grid for page-specific "related" sections.
export function RelatedLinks({ title, items }: { title: string; items: Item[] }) {
  const location = useLocation();
  const current = normalise(location.pathname);
  const filtered = items.filter((i) => normalise(i.href) !== current);
  if (filtered.length === 0) return null;
  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className="rounded-md border border-border bg-card p-4 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
          >
            {i.label}
          </a>
        ))}
      </div>
    </section>
  );
}
