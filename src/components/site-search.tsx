import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X, BookOpen, Globe, Star, Zap, FileText, ArrowRight } from "lucide-react";
import Fuse from "fuse.js";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { countries } from "@/data/countries";
import { useCases } from "@/data/use-cases";
import { blogPosts } from "@/data/blog";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "review" | "guide" | "country" | "usecase" | "blog" | "vs";
}

const allItems: SearchItem[] = [
  ...providers.map(p => ({
    id: `review-${p.slug}`,
    title: `${p.name} Review 2026`,
    description: p.shortDescription,
    url: `/reviews/${p.slug}`,
    type: "review" as const,
  })),
  ...guides.map(g => ({
    id: `guide-${g.slug}`,
    title: g.title,
    description: g.intro,
    url: `/guides/${g.slug}`,
    type: "guide" as const,
  })),
  ...countries.map(c => ({
    id: `country-${c.slug}`,
    title: `Best ${c.name} Proxies 2026`,
    description: `${c.poolDepth} available. ${c.primaryUseCases[0]}`,
    url: `/countries/${c.slug}`,
    type: "country" as const,
  })),
  ...useCases.map(u => ({
    id: `usecase-${u.slug}`,
    title: u.title,
    description: u.intro,
    url: `/use-cases/${u.slug}`,
    type: "usecase" as const,
  })),
  ...blogPosts.map(b => ({
    id: `blog-${b.slug}`,
    title: b.title,
    description: b.excerpt,
    url: `/blog/${b.slug}`,
    type: "blog" as const,
  })),
  ...providers.flatMap((a, i) =>
    providers.slice(i + 1).map(b => ({
      id: `vs-${a.slug}-${b.slug}`,
      title: `${a.name} vs ${b.name} 2026`,
      description: `Side-by-side comparison of pricing, pool size, speed and features.`,
      url: `/vs/${a.slug}-vs-${b.slug}`,
      type: "vs" as const,
    }))
  ),
];

const fuse = new Fuse(allItems, {
  keys: ["title", "description"],
  threshold: 0.35,
  minMatchCharLength: 2,
  includeScore: true,
});

const TYPE_ICON: Record<string, React.ReactNode> = {
  review: <Star className="h-4 w-4 text-yellow-500" />,
  guide: <BookOpen className="h-4 w-4 text-blue-500" />,
  country: <Globe className="h-4 w-4 text-green-500" />,
  usecase: <Zap className="h-4 w-4 text-purple-500" />,
  blog: <FileText className="h-4 w-4 text-orange-500" />,
  vs: <ArrowRight className="h-4 w-4 text-gray-500" />,
};

const TYPE_LABEL: Record<string, string> = {
  review: "Review",
  guide: "Guide",
  country: "Country",
  usecase: "Use Case",
  blog: "Blog",
  vs: "Compare",
};

export function SiteSearch({ className = "", heroMode = false }: { className?: string; heroMode?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    return fuse.search(query).slice(0, 8);
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className={heroMode ? "flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-4 py-3 cursor-text transition-all duration-200 hover:border-white/60 hover:bg-white/20 text-white w-full" : "flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 cursor-text transition-all duration-200 hover:border-primary/50 hover:bg-background"}
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
        <div className="absolute top-full mt-2 left-0 right-0 w-full rounded-xl border border-border bg-background shadow-2xl z-50 overflow-hidden">
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
                      <div className="mt-0.5 flex-shrink-0">{TYPE_ICON[item.type]}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">{item.title}</span>
                          <span className="flex-shrink-0 text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">{TYPE_LABEL[item.type]}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.description}</p>
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
