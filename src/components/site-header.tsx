import { Link } from "@tanstack/react-router";
import { Triangle, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/reviews", label: "Reviews" },
  { to: "/guides", label: "Guides" },
  { to: "/countries", label: "Countries" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/compare", label: "Compare" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader({ variant = "navy" }: { variant?: "navy" | "white" }) {
  const isNavy = variant === "navy";
  const [open, setOpen] = useState(false);
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
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold opacity-90 transition-opacity hover:opacity-100"
              activeProps={{ className: "opacity-100 underline underline-offset-4" }}
            >
              {item.label}
            </Link>
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
