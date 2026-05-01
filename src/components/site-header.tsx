import { Link } from "@tanstack/react-router";
import { Triangle } from "lucide-react";

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
  return (
    <header
      className={
        isNavy
          ? "bg-navy text-navy-foreground"
          : "bg-background text-foreground border-b border-border"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
