import { Link } from "@tanstack/react-router";
import { Triangle, Linkedin, Twitter, Youtube } from "lucide-react";

const footerNav = [
  { to: "/about", label: "ABOUT" },
  { to: "/why-trust-us", label: "WHY TRUST US" },
  { to: "/how-we-test", label: "HOW WE TEST" },
  { to: "/trust-score", label: "TRUST SCORE" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <Link to="/" className="flex items-center gap-2">
            <Triangle className="h-6 w-6 fill-current" strokeWidth={1.5} />
            <span className="text-xl font-bold">
              ToptierProxy<span className="font-normal opacity-80">.com</span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-xs font-bold tracking-wider opacity-90 hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex gap-3">
          <a aria-label="LinkedIn" href="#" className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
          <a aria-label="Twitter" href="#" className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
          <a aria-label="YouTube" href="#" className="flex h-8 w-8 items-center justify-center bg-white/10 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
        </div>

        <div className="mt-10 space-y-2 text-xs opacity-70">
          <p>
            Proxy services discussed: pricing, pool sizes and features change frequently — always
            confirm current details on the provider's website before purchase.
          </p>
          <p>
            © {new Date().getFullYear()} ToptierProxy Media Group LLC. All rights reserved.{" "}
            <Link to="/terms" className="underline">Terms of Use</Link> |{" "}
            <Link to="/disclaimers" className="underline">Disclaimers</Link> |{" "}
            <Link to="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
