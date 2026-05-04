import { Link } from "@tanstack/react-router";
import { Triangle, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { providers } from "@/data/providers";
import { guides } from "@/data/guides";
import { countries } from "@/data/countries";
import { useCases } from "@/data/use-cases";

type DropItem = { to: string; label: string; params?: Record<string, string> };

const reviewItems: DropItem[] = providers
  .slice(0, 12)
  .map((p) => ({ to: "/reviews/$slug", params: { slug: p.slug }, label: `${p.name} Review` }));

const guideItems: DropItem[] = guides
  .slice(0, 10)
  .map((g) => ({ to: "/guides/$slug", params: { slug: g.slug }, label: g.title }));

const countryItems: DropItem[] = countries
  .slice(0, 14)
  .map((c) => ({ to: "/countries/$slug", params: { slug: c.slug }, label: c.name }));

const useCaseItems: DropItem[] = useCases
  .slice(0, 10)
  .map((u) => ({ to: "/use-cases/$slug", params: { slug: u.slug }, label: u.title.replace(/\s*in 2026.*/i, "").replace(/^Best Proxies for /, "") }));

const nav: { to: string; label: string; items?: DropItem[] }[] = [
  { to: "/reviews", label: "Reviews", items: reviewItems },
  { to: "/guides", label: "Guides", items: guideItems },
  { to: "/countries", label: "Countries", items: countryItems },
  { to: "/use-cases", label: "Use Cases", items: useCaseItems },
  { to: "/compare", label: "Compare" },
  { to: "/blog", label: "Blog" },
];

export function SiteHeader({ variant = "navy" }: { variant?: "navy" | "white" }) {
  const isNavy = variant === "navy";
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  return (
    <header
      className={
        isNavy
          ? "bg-navy text-navy-foreground"
          : "bg-background text-foreground border-b border-border"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Triangle className="h-6 w-6 fill-current" strokeWidth={1.5} />
          <span className="text-xl font-bold tracking-tight">
            ToptierProxy<span className="font-normal opacity-80">.com</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.items && setOpenDrop(item.to)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 text-sm font-semibold opacity-90 transition-opacity hover:opacity-100"
                activeProps={{ className: "opacity-100 underline underline-offset-4" }}
              >
                {item.label}
                {item.items && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.items && openDrop === item.to && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                  <div className="w-[min(900px,90vw)] rounded-md border border-border bg-white text-foreground shadow-xl">
                    <div className="border-b border-border px-6 py-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.label}</p>
                    </div>
                    <ul className="grid max-h-[60vh] grid-cols-2 gap-x-2 gap-y-1 overflow-y-auto p-4 sm:grid-cols-3 lg:grid-cols-4">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.to as any}
                            params={sub.params as any}
                            onClick={() => setOpenDrop(null)}
                            className="block rounded px-3 py-2 text-sm font-medium text-primary hover:bg-muted hover:underline"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border px-6 py-3">
                      <Link
                        to={item.to}
                        onClick={() => setOpenDrop(null)}
                        className="text-sm font-bold text-primary hover:underline"
                      >
                        See all {item.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-current/20 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-current/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold opacity-90 hover:opacity-100"
                activeProps={{ className: "opacity-100 underline underline-offset-4" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
