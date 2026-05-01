// Real country flag images via flagcdn.com (free, CDN-hosted SVG/PNG flags).
// Docs: https://flagpedia.net/download/api

interface FlagProps {
  code: string; // ISO 3166-1 alpha-2 (e.g. "US", "GB")
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  rounded?: boolean;
}

// flagcdn.com only serves these fixed widths: 20, 40, 80, 160, 320, 640, 1280, 2560
const PX = { sm: 20, md: 40, lg: 80, xl: 160 } as const;
const PX_2X = { sm: 40, md: 80, lg: 160, xl: 320 } as const;
const W = { sm: "w-5", md: "w-8", lg: "w-12", xl: "w-20" } as const;
const H = { sm: "h-[15px]", md: "h-6", lg: "h-9", xl: "h-[60px]" } as const;

export function Flag({ code, name, size = "md", className = "", rounded = true }: FlagProps) {
  const lower = code.toLowerCase();
  const px = PX[size];
  const px2 = PX_2X[size];
  const src = `https://flagcdn.com/w${px2}/${lower}.png`;
  const srcSet = `https://flagcdn.com/w${px}/${lower}.png 1x, https://flagcdn.com/w${px2}/${lower}.png 2x`;
  return (
    <img
      src={src}
      srcSet={srcSet}
      width={px}
      height={Math.round(px * 0.75)}
      alt={`Flag of ${name}`}
      loading="lazy"
      decoding="async"
      className={`${W[size]} ${H[size]} object-cover shadow-sm ring-1 ring-black/10 ${rounded ? "rounded-sm" : ""} ${className}`}
    />
  );
}
