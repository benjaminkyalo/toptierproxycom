import type { Provider } from "@/data/providers";

// Brand-color squares with provider initials. Zero external dependencies, fast,
// looks clean next to the provider name and works inside lists and tables.
const BRAND: Record<string, { bg: string; fg: string; mark: string }> = {
  "bright-data":  { bg: "#0F2F5C", fg: "#ffffff", mark: "BD" },
  "oxylabs":      { bg: "#0AA47A", fg: "#ffffff", mark: "OX" },
  "decodo":       { bg: "#7C3AED", fg: "#ffffff", mark: "DE" },
  "iproyal":      { bg: "#1E40AF", fg: "#ffffff", mark: "IP" },
  "soax":         { bg: "#FF5C28", fg: "#ffffff", mark: "SX" },
  "netnut":       { bg: "#FF7A1A", fg: "#ffffff", mark: "NN" },
  "webshare":     { bg: "#0EA5E9", fg: "#ffffff", mark: "WS" },
  "rayobyte":     { bg: "#DC2626", fg: "#ffffff", mark: "RB" },
  "proxyempire":  { bg: "#111827", fg: "#FBBF24", mark: "PE" },
  "nimbleway":    { bg: "#16A34A", fg: "#ffffff", mark: "NW" },
  "infatica":     { bg: "#0891B2", fg: "#ffffff", mark: "IN" },
  "proxy-cheap":  { bg: "#F59E0B", fg: "#111827", mark: "PC" },
};

const SIZES = {
  sm: "h-7 w-7 text-[10px]",
  md: "h-9 w-9 text-xs",
  lg: "h-12 w-12 text-sm",
} as const;

export function ProviderLogo({
  provider,
  size = "md",
  className = "",
}: {
  provider: Pick<Provider, "slug" | "name">;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const b = BRAND[provider.slug] ?? { bg: "#1f2937", fg: "#ffffff", mark: provider.name.slice(0, 2).toUpperCase() };
  return (
    <span
      aria-label={`${provider.name} logo`}
      className={`inline-flex shrink-0 items-center justify-center rounded font-extrabold tracking-tight shadow-sm ${SIZES[size]} ${className}`}
      style={{ backgroundColor: b.bg, color: b.fg }}
    >
      {b.mark}
    </span>
  );
}

export function ProviderBadge({ provider }: { provider: Pick<Provider, "slug" | "name"> }) {
  return (
    <span className="inline-flex items-center gap-2">
      <ProviderLogo provider={provider} size="sm" />
      <span className="font-bold">{provider.name}</span>
    </span>
  );
}
