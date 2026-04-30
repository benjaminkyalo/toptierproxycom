import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Link } from "@tanstack/react-router";

export function PageShell({
  title,
  intro,
  breadcrumb,
  children,
}: {
  title: string;
  intro?: string;
  breadcrumb?: { to: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {breadcrumb && (
            <nav className="mb-4 text-xs opacity-80">
              {breadcrumb.map((b, i) => (
                <span key={b.to}>
                  {i > 0 && <span className="mx-1">/</span>}
                  <a href={b.to} className="hover:underline">{b.label}</a>
                </span>
              ))}
            </nav>
          )}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {intro && <p className="mt-4 max-w-3xl text-lg opacity-90">{intro}</p>}
        </div>
      </section>
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-tt max-w-none text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:font-semibold [&_a]:text-primary [&_a]:underline">
      {children}
    </div>
  );
}
