/**
 * Pagefind full-text search loader.
 *
 * The index is generated at build time (`npm run search:index`) from the
 * prerendered HTML in dist/, so every page — including content added in the
 * future — is indexed automatically with no data file to maintain.
 *
 * In dev (or if the index is missing) load() resolves to null and the caller
 * falls back to the lightweight Fuse.js title/description index.
 */

export interface PagefindHit {
  url: string;
  title: string;
  excerpt: string;
}

interface PagefindApi {
  init?: () => Promise<void>;
  options?: (opts: Record<string, unknown>) => Promise<void>;
  search: (query: string) => Promise<{
    results: {
      id: string;
      data: () => Promise<{
        url: string;
        raw_url?: string;
        excerpt: string;
        meta?: { title?: string };
      }>;
    }[];
  }>;
}

let pagefindPromise: Promise<PagefindApi | null> | null = null;

export function loadPagefind(): Promise<PagefindApi | null> {
  if (pagefindPromise) return pagefindPromise;
  pagefindPromise = (async () => {
    if (typeof window === "undefined") return null;
    try {
      const res = await fetch("/pagefind/pagefind.js", { method: "HEAD" });
      if (!res.ok) return null;
      const mod = (await import(/* @vite-ignore */ "/pagefind/pagefind.js")) as PagefindApi;
      await mod.options?.({ excerptLength: 25 });
      await mod.init?.();
      return mod;
    } catch {
      return null;
    }
  })();
  return pagefindPromise;
}

function normalizeUrl(url: string) {
  const clean = url.replace(/index\.html$/, "").replace(/\.html$/, "");
  if (clean === "/" || clean === "") return "/";
  return clean.replace(/\/+$/, "");
}

export async function pagefindSearch(query: string, limit = 8): Promise<PagefindHit[]> {
  const pf = await loadPagefind();
  if (!pf) return [];
  try {
    const { results } = await pf.search(query);
    const top = await Promise.all(results.slice(0, limit).map((r) => r.data()));
    return top.map((d) => ({
      url: normalizeUrl(d.raw_url || d.url),
      title: (d.meta?.title || "").replace(/\s*[|–-]\s*TopTierProxy.*$/i, "").trim(),
      excerpt: d.excerpt || "",
    }));
  } catch {
    return [];
  }
}

/** Infer the result category from its path so icons/labels stay consistent. */
export function typeFromUrl(url: string): string {
  if (url.startsWith("/blog")) return "blog";
  if (url.startsWith("/guides")) return "guide";
  if (url.includes("-review") || url.startsWith("/reviews")) return "review";
  if (url.startsWith("/countries") || url.startsWith("/best")) return "country";
  if (url.startsWith("/use-cases")) return "usecase";
  if (url.includes("-vs-") || url.startsWith("/compare")) return "vs";
  return "page";
}
