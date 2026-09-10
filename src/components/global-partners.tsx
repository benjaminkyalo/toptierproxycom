import { ProviderLogo } from "@/components/provider-logo";

type Partner = { slug: string; name: string; description: string; href: string };

const partners: Partner[] = [
  { slug: "thordata", name: "Thordata", description: "Global residential network", href: "https://dashboard.thordata.com/register?invitation_code=FGOCHJZN" },
  { slug: "live-proxies", name: "Live Proxies", description: "Private rotating residential", href: "https://liveproxies.io/" },
  { slug: "proxy-seller", name: "Proxy-Seller", description: "ISP, mobile & datacenter", href: "https://proxy-seller.com/?partner=4PB3INBLBLHU1G" },
  { slug: "bright-data", name: "Bright Data", description: "Enterprise proxy leader", href: "https://get.brightdata.com/68a0yf9mr2cl" },
  { slug: "oxylabs", name: "Oxylabs", description: "Premium scraping APIs", href: "https://oxylabs.hasoffers.com/signup/2192" },
  { slug: "decodo", name: "Decodo", description: "Affordable premium proxies", href: "https://decodo.com/?refcode=toptierproxy" },
  { slug: "iproyal", name: "IPRoyal", description: "Pay-as-you-go residential", href: "https://iproyal.com/?r=1289846" },
  { slug: "soax", name: "SOAX", description: "Flexible mobile pools", href: "https://soax.com" },
  { slug: "webshare", name: "Webshare", description: "Cheapest datacenter IPs", href: "https://www.webshare.io/?referral_code=gp0x8ig1cckr" },
  { slug: "rayobyte", name: "Rayobyte", description: "US-based ethical proxies", href: "https://rayobyte.com" },
  { slug: "nimbleway", name: "Nimbleway", description: "AI-driven web data", href: "https://nimbleway.com" },
  { slug: "infatica", name: "Infatica", description: "Ethically-sourced peers", href: "https://dashboard.infatica.io/aff.php?aff=845" },
  { slug: "proxy-cheap", name: "Proxy-Cheap", description: "Budget every category", href: "https://app.proxy-cheap.com/r/nAPT9Q" },
  { slug: "proxyempire", name: "ProxyEmpire", description: "Rolling traffic, sticky IPs", href: "https://proxyempire.io/?ref=zjuzmde" },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a
      href={partner.href}
      target="_blank"
      rel="sponsored nofollow noopener"
      aria-label={`Visit ${partner.name} — ${partner.description}`}
      className="partner-card-glow group/card relative flex w-64 shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm transition-all duration-300 hover:z-10 hover:scale-[1.15] hover:shadow-2xl"
    >
      <ProviderLogo provider={partner} size="md" />
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-foreground">{partner.name}</p>
        <p className="truncate text-xs text-muted-foreground">{partner.description}</p>
      </div>
    </a>
  );
}

export function GlobalPartners() {
  return (
    <section aria-label="Global partners" className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold uppercase tracking-[0.2em] text-navy">
          Global Partners
        </h2>
      </div>
      <div className="marquee mt-8">
        <div className="marquee-track">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerCard key={`${partner.slug}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
