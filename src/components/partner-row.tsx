import { Link } from "@tanstack/react-router";
import type { Provider } from "@/data/providers";

export function PartnerRow({ provider }: { provider: Provider }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-md border border-border bg-card p-5 shadow-card sm:flex-row sm:items-center sm:gap-6">
      <div className="flex h-12 w-24 shrink-0 items-center justify-center rounded bg-muted text-sm font-bold text-foreground">
        {provider.name.split(" ")[0]}
      </div>
      <div className="flex-1">
        <p className="text-base font-semibold text-foreground">{provider.tagline}</p>
        <p className="mt-1 text-xs italic text-muted-foreground">
          (Pricing from ${provider.startingPriceGB}/GB — terms apply.)
        </p>
      </div>
      <Link
        to="/reviews/$slug"
        params={{ slug: provider.slug }}
        className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue-hover"
      >
        Visit Site
      </Link>
    </div>
  );
}

export function ProviderLogo({ name }: { name: string }) {
  return (
    <div className="flex h-12 items-center justify-center rounded bg-muted px-4 text-sm font-bold text-foreground">
      {name}
    </div>
  );
}
