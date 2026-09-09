import { ProviderLogo } from "@/components/provider-logo";

type Partner = { slug: string; name: string; description: string };

const partners: Partner[] = [
  { slug: "thordata", name: "Thordata", description: "Global residential network" },
  { slug: "live-proxies", name: "Live Proxies", description: "Private rotating residential" },
  { slug: "proxy-seller", name: "Proxy-Seller", description: "ISP, mobile & datacenter" },
  { slug: "bright-data", name: "Bright Data", description: "Enterprise proxy leader" },
  { slug: "oxylabs", name: "Oxylabs", description: "Premium scraping APIs" },
  { slug: "decodo", name: "Decodo", description: "Affordable premium proxies" },
  { slug: "iproyal", name: "IPRoyal", description: "Pay-as-you-go residential" },
  { slug: "soax", name: "SOAX", description: "Flexible mobile pools" },
  { slug: "webshare", name: "Webshare", description: "Cheapest datacenter IPs" },
  { slug: "rayobyte", name: "Rayobyte", description: "US-based ethical proxies" },
  { slug: "nimbleway", name: "Nimbleway", description: "AI-driven web data" },
  { slug: "infatica", name: "Infatica", description: "Ethically-sourced peers" },
  { slug: "proxy-cheap", name: "Proxy-Cheap", description: "Budget every category" },
  { slug: "proxyempire", name: "ProxyEmpire", description: "Rolling traffic, sticky IPs" },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex w-64 shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
      <ProviderLogo provider={partner} size="md" />
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-foreground">{partner.name}</p>
        <p className="truncate text-xs text-muted-foreground">{partner.description}</p>
      </div>
    </div>
  );
}

export function GlobalPartners() {
  return (
    <section aria-label="Global partners" className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-sm font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
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
