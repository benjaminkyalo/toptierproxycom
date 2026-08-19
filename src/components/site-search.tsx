import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X, BookOpen, Globe, Star, Zap, FileText, ArrowRight } from "lucide-react";
import Fuse from "fuse.js";
import { pagefindSearch, typeFromUrl, loadPagefind } from "@/lib/pagefind";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: string;
  keywords?: string;
  /** Highlighted body snippet, present on full-text (Pagefind) results. */
  excerpt?: string;
}

const TYPE_ICON: Record<string, React.ReactNode> = {
  review: <Star className="h-4 w-4 text-yellow-500" />,
  guide: <BookOpen className="h-4 w-4 text-blue-500" />,
  country: <Globe className="h-4 w-4 text-green-500" />,
  usecase: <Zap className="h-4 w-4 text-purple-500" />,
  blog: <FileText className="h-4 w-4 text-orange-500" />,
  vs: <ArrowRight className="h-4 w-4 text-gray-500" />,
  page: <FileText className="h-4 w-4 text-gray-400" />,
};

const TYPE_LABEL: Record<string, string> = {
  review: "Review", guide: "Guide", country: "Country",
  usecase: "Use Case", blog: "Blog", vs: "Compare", page: "Page",
};

let fuseCache: Fuse<SearchItem> | null = null;

export function SiteSearch({ className = "", heroMode = false }: { className?: string; heroMode?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<{ item: SearchItem }[]>([]);
  const [loaded, setLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load search index once
  useEffect(() => {
    if (fuseCache) { setLoaded(true); return; }
    fetch("/search-index.json")
      .then(r => r.json())
      .then((items: SearchItem[]) => {
        fuseCache = new Fuse(items, {
          keys: ["title", "description", "keywords"],
          threshold: 0.35,
          minMatchCharLength: 2,
          includeScore: true,
        });
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Warm the full-text index (no-op in dev / when the index is absent)
  useEffect(() => { void loadPagefind(); }, []);

  // Search: full-text (Pagefind) first, then Fuse title/description matches
  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) { setResults([]); return; }
    let cancelled = false;

    const fuseHits = fuseCache
      ? (fuseCache.search(q).slice(0, 10) as { item: SearchItem }[])
      : [];
    setResults(fuseHits.slice(0, 8));

    void (async () => {
      const hits = await pagefindSearch(q, 16);
      if (cancelled || hits.length === 0) return;

      const byUrl = new Map<string, SearchItem>();
      for (const { item } of fuseHits) byUrl.set(item.url, item);

      const merged: SearchItem[] = [];
      const seenUrl = new Set<string>();
      const seenTitle = new Map<string, number>(); // title -> index in merged

      const push = (item: SearchItem) => {
        if (seenUrl.has(item.url)) return;
        const key = item.title.trim().toLowerCase();
        const existing = seenTitle.get(key);
        if (existing !== undefined) {
          // Same page reachable from a canonicalised duplicate (e.g. /best/x
          // canonicals to /countries/x) — keep the canonical URL only.
          if (item.url.startsWith("/countries") && merged[existing].url.startsWith("/best")) {
            seenUrl.delete(merged[existing].url);
            merged[existing] = item;
            seenUrl.add(item.url);
          }
          return;
        }
        seenTitle.set(key, merged.length);
        seenUrl.add(item.url);
        merged.push(item);
      };

      for (const hit of hits) {
        const known = byUrl.get(hit.url);
        push({
          id: hit.url,
          url: hit.url,
          title: known?.title || hit.title || hit.url,
          description: known?.description || "",
          type: known?.type || typeFromUrl(hit.url),
          excerpt: hit.excerpt,
        });
      }
      for (const { item } of fuseHits) push(item);

      setResults(merged.slice(0, 8).map((item) => ({ item })));
    })();

    return () => { cancelled = true; };
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard shortcut
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className={heroMode
          ? "flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3 cursor-text transition-all duration-200 hover:border-white/60 hover:bg-white/20 text-white w-full"
          : "flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 cursor-text transition-all duration-200 hover:border-primary/50 hover:bg-background"}
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
      >
        <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search proxies, reviews, guides, countries…"
          className={`bg-transparent outline-none w-full min-w-0 ${heroMode ? "text-base text-white placeholder:text-white/60" : "text-sm placeholder:text-muted-foreground"}`}
        />
        {query && (
          <button onClick={e => { e.stopPropagation(); setQuery(""); inputRef.current?.focus(); }}>
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
        <button
          onClick={e => { e.stopPropagation(); setOpen(true); inputRef.current?.focus(); }}
          className={`flex-shrink-0 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${heroMode ? "bg-white/20 text-white hover:bg-white/40 border border-white/30" : "bg-muted border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary"}`}
        >
          <Search className="h-3 w-3" />
          <span>Search</span>
        </button>
      </div>

      {open && query.length >= 2 && (
        <div className="fixed left-1/2 -translate-x-1/2 mt-2 w-[min(600px,90vw)] rounded-xl border border-border bg-background shadow-2xl z-[9999] overflow-hidden">
          {results.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground text-sm">
              No results for "<strong>{query}</strong>"
            </div>
          ) : (
            <div>
              <div className="px-4 py-2 border-b border-border text-xs text-muted-foreground font-medium">
                {results.length} result{results.length !== 1 ? "s" : ""} for "<strong>{query}</strong>"
              </div>
              <ul className="max-h-[480px] overflow-y-auto">
                {results.map(({ item }) => (
                  <li key={item.id}>
                    <Link
                      to={item.url}
                      onClick={() => { setOpen(false); setQuery(""); }}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-muted/60 transition-colors duration-150 group"
                    >
                      <div className="mt-0.5 flex-shrink-0">{TYPE_ICON[item.type] || TYPE_ICON.page}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">{item.title}</span>
                          <span className="flex-shrink-0 text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">{TYPE_LABEL[item.type] || "Page"}</span>
                        </div>
                        {item.excerpt ? (
                          <p
                            className="text-xs text-muted-foreground mt-0.5 line-clamp-2 [&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground"
                            dangerouslySetInnerHTML={{ __html: item.excerpt }}
                          />
                        ) : (
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.description}</p>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 border-t border-border text-xs text-muted-foreground flex items-center justify-between">
                <span>Press <kbd className="rounded border border-border px-1">↵</kbd> to select</span>
                <span>Press <kbd className="rounded border border-border px-1">Esc</kbd> to close</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
