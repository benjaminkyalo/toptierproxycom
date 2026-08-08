import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { providers } from "@/data/providers";
import { ProviderLogo } from "@/components/provider-logo";

const THORDATA_PICK = {
  slug: "thordata",
  name: "Thordata",
  rating: 4,
  startingPriceGB: 0.65,
  poolSize: "125M+ IPs",
  countries: 190,
  bestFor: "Sponsored - residential, ISP, mobile & datacenter proxies",
  proxyTypes: ["residential", "isp", "mobile", "datacenter"],
};

const PROXY_SELLER_PICK = {
  slug: "proxy-seller",
  name: "Proxy-Seller",
  rating: 4.8,
  startingPriceGB: 1.3,
  poolSize: "10M+ IPs",
  countries: 220,
  bestFor: "Residential, ISP, mobile, IPv4 & IPv6 in 220+ locations",
  proxyTypes: ["residential", "isp", "mobile", "ipv4", "ipv6"],
};

export function TopPicks() {
  const [showAll, setShowAll] = useState(false);
  const ranked = [...providers].sort((a, b) => b.rating - a.rating);
  const withThordata = [THORDATA_PICK, PROXY_SELLER_PICK, ...ranked];
  const visible = showAll ? withThordata : withThordata.slice(0, 6);

  return (
    <section className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-bold tracking-widest text-primary">TOP PICKS</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Best Proxy Server Providers</h2>
        <p className="mt-3 max-w-2xl text-foreground/70">Ranked by our Trust Score - real pricing, real testing, updated for 2026.</p>

        <div className="mt-8 space-y-4">
          {visible.map((p, i) => (
            <div
              key={p.slug}
              className={`relative rounded-md border bg-card p-5 shadow-card sm:p-6 ${i === 0 ? "border-2 border-primary" : "border-border"}`}
            >
              {i === 0 && (
                <div className="absolute -top-3 left-6 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Star className="h-3 w-3 fill-current" /> EDITOR'S CHOICE
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold text-muted-foreground">
                    Sponsored placement
                  </span>
                </div>
              )}

              <span className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow">
                {i + 1}
              </span>

              <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto_auto] sm:items-center">
                <div className="flex items-center gap-3">
                  <ProviderLogo provider={p} size="sm" className="!h-12 !w-12" />
                  <span className="text-base font-bold text-foreground">{p.name}</span>
                </div>

                <div className="hidden sm:block sm:text-center">
                  <div className="text-sm text-muted-foreground">{p.bestFor}</div>
                  <div className="mt-1 text-3xl font-extrabold text-foreground md:text-4xl">
                    From ${p.startingPriceGB}/GB
                  </div>
                  <div className="text-xs text-muted-foreground">{p.poolSize} - {p.countries}+ countries</div>
                </div>

                <div className="flex items-center justify-start sm:justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-bold">
                    <span className="flex items-center">
                      {Array.from({ length: 5 }).map((_, si) => {
                        const diff = p.rating - si;
                        if (diff >= 1) {
                          return <Star key={si} className="h-4 w-4 fill-warning text-warning" />;
                        }
                        if (diff >= 0.5) {
                          return (
                            <span key={si} className="relative inline-block h-4 w-4">
                              <Star className="absolute inset-0 h-4 w-4 text-muted-foreground" />
                              <span className="absolute inset-0 w-1/2 overflow-hidden">
                                <Star className="h-4 w-4 fill-warning text-warning" />
                              </span>
                            </span>
                          );
                        }
                        return <Star key={si} className="h-4 w-4 text-muted-foreground" />;
                      })}
                    </span>
                    {p.rating}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:w-44">
                  <a
                    href={p.slug === "thordata" ? "https://dashboard.thordata.com/register?invitation_code=FGOCHJZN" : `/go/${p.slug}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-green-500 text-sm font-bold text-white hover:bg-green-600 transition-colors"
                  >
                    Try Now
                  </a>
                  {p.slug === "thordata" ? (
                    <Link
                      to="/thordata-review"
                      className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-primary text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover transition-colors"
                    >
                      Read Review
                    </Link>
                  ) : (
                    <Link
                      to="/reviews/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex h-10 items-center justify-center gap-1 rounded-md bg-primary text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover transition-colors"
                    >
                      Read Review
                    </Link>
                  )}
                </div>
              </div>

              <div className="mt-3 text-xs text-muted-foreground sm:hidden">
                {p.bestFor} - From ${p.startingPriceGB}/GB - {p.poolSize}
              </div>

              <div className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground">
                {p.proxyTypes.join(", ")}
              </div>
            </div>
          ))}
        </div>

        {!showAll && ranked.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-md bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-brand-blue-hover transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
