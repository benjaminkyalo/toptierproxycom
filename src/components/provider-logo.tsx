import type { Provider } from "@/data/providers";

// Real provider logos hosted on Cloudinary. We render them inside a clean
// white rounded tile so every logo (dark, light, colored) sits well next to
// the provider name across reviews, comparison tables and partner rows.
const LOGO_URL: Record<string, string> = {
  "bright-data":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725875/bright_data_logo_muhsjd_efmshs.png",
  "oxylabs":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725876/oxylabs_logo_lkvr2i_d5hfj9.png",
  "decodo":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725875/decodo_logo_ek7uxk_ednnxc.png",
  "iproyal":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725876/iproyal_logo_fapvx7_n2qdm5.png",
  "soax":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725875/soax_logo_ssdefv_wlxqwk.png",
  "netnut":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777701037/netnut_logo_ugn59g.png",
  "webshare":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777701038/webshare_logo_stwvzs.png",
  "rayobyte":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725875/royabyte_logo_dxirbg_c5h2uq.png",
  "proxyempire":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777701037/proxy_empire_logo_tjuiqw.jpg",
  "nimbleway":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725876/nibleway_logo_wddvm2_aqsi2z.png",
  "proxy-cheap":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725875/proxycheap_logo_jl5ucv_pnghvr.png",
  "infatica":
    "https://res.cloudinary.com/dkcqakosa/image/upload/v1777725875/infatica_logo_xxzvgj_qxk5vg.jpg",
};

const SIZES = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-12 w-12",
} as const;

const TEXT_SIZE = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm",
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
  const url = LOGO_URL[provider.slug];

  if (url) {
    return (
      <span
        aria-label={`${provider.name} logo`}
        className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded border border-border bg-white shadow-sm ${SIZES[size]} ${className}`}
      >
        <img
          src={url}
          alt={`${provider.name} logo`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-1"
        />
      </span>
    );
  }

  // Fallback: initials tile for any provider without a hosted logo.
  const mark = provider.name.slice(0, 2).toUpperCase();
  return (
    <span
      aria-label={`${provider.name} logo`}
      className={`inline-flex shrink-0 items-center justify-center rounded bg-muted font-extrabold tracking-tight text-foreground shadow-sm ${SIZES[size]} ${TEXT_SIZE[size]} ${className}`}
    >
      {mark}
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
