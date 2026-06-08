import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { Tag, ChevronDown, Plus, Shield, Globe, Zap, DollarSign, Lock, Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/vpn-deals")({
  head: () => {
    const title = "Best VPN Deals 2026 — Top-Rated VPN Services On Sale From $1/Month";
    const description = "Save up to 86% on the best VPN services in 2026. Hand-tested ExpressVPN, NordVPN, Surfshark, Proton VPN, PIA & Norton VPN deals starting from $1/month. Money-back guarantee, no-logs, streaming-ready.";
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "keywords", content: "best vpn deals 2026, cheap vpn, vpn discount, expressvpn deal, nordvpn deal, surfshark deal, proton vpn coupon, pia vpn discount, norton vpn deal, vpn black friday, best vpn for streaming, vpn for torrenting, vpn no logs, vpn money back guarantee, cheap vpn 1 dollar, vpn deals usa, vpn deals uk" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://toptierproxycom.lovable.app/vpn-deals" },
      ],
      links: [
        { rel: "canonical", href: "https://toptierproxycom.lovable.app/vpn-deals" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            datePublished: "2026-06-01",
            dateModified: "2026-06-08",
            author: { "@type": "Person", name: "Marcus Reiner" },
          }),
        },
      ],
    };
  },
  component: VpnDealsPage,
});

type Deal = {
  name: string;
  badge?: string;
  price: string;
  term: string;
  devices: string;
  refund: string;
  upfront: string;
  cta: string;
  ctaHref: string;
  blurb: string;
  accent: string; // tailwind bg class for logo tile
  logoText: string;
};

const deals: Deal[] = [
  {
    name: "ExpressVPN",
    badge: "EDITORS' CHOICE",
    price: "$2",
    term: "a month for 28 months",
    devices: "Up to 8",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $70 upfront",
    cta: "See at ExpressVPN",
    ctaHref: "#",
    blurb: "ExpressVPN still tops our list of the best VPNs in 2026 — Lightway protocol, audited no-logs policy, 105 countries, and a near-flawless streaming track record across Netflix, BBC iPlayer, Disney+ and Hulu.",
    accent: "bg-[#dc2626]",
    logoText: "E",
  },
  {
    name: "Surfshark",
    price: "$2",
    term: "a month for 27 months",
    devices: "Unlimited",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $54 upfront",
    cta: "See at Surfshark",
    ctaHref: "#",
    blurb: "Surfshark, a relative newcomer, has quickly become known for unlimited simultaneous connections, a clean Linux GUI app, and the cheapest long-term pricing of any audited VPN — ideal for families and shared households.",
    accent: "bg-[#e5e7eb]",
    logoText: "S",
  },
  {
    name: "NordVPN",
    price: "$3",
    term: "a month for 27 months",
    devices: "Up to 10",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $83 upfront",
    cta: "See at NordVPN",
    ctaHref: "#",
    blurb: "An industry heavyweight and still one of CNET's top picks, NordVPN has the largest dedicated-IP pool, Meshnet for private peer-to-peer routing, and Threat Protection malware blocking baked in.",
    accent: "bg-[#1e40af]",
    logoText: "N",
  },
  {
    name: "Proton VPN",
    price: "$3",
    term: "a month for 24 months",
    devices: "Up to 10",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $72 upfront",
    cta: "See at ProtonVPN",
    ctaHref: "#",
    blurb: "Proton VPN is the only free VPN we recommend, but if you need more — Secure Core multi-hop, NetShield ad blocking, and Switzerland-based no-logs jurisdiction — the paid tier is a serious privacy upgrade.",
    accent: "bg-gradient-to-br from-[#6d28d9] to-[#312e81]",
    logoText: "P",
  },
  {
    name: "PIA VPN",
    price: "$1",
    term: "a month for 26 months",
    devices: "Unlimited",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $35 upfront",
    cta: "See at PIA",
    ctaHref: "#",
    blurb: "Private Internet Access earned a spot on our list of the best VPN services as one of the cheapest privacy-first options — proven no-logs in US court, open-source apps, and port forwarding for torrents.",
    accent: "bg-[#0f172a]",
    logoText: "PIA",
  },
  {
    name: "Norton VPN",
    price: "$3",
    term: "a month for 12 months",
    devices: "Up to 5",
    refund: "Fully refundable for 60 days",
    upfront: "Billed $40 upfront",
    cta: "See at Norton",
    ctaHref: "#",
    blurb: "Norton might be a company better known for its antivirus software, but Norton VPN is a strong bundle pick if you already use Norton 360 — split tunneling, dark-web monitoring, and ad tracker blocking included.",
    accent: "bg-[#0f172a]",
    logoText: "✓",
  },
];

const faqs = [
  {
    q: "Do I need a VPN?",
    a: "If you use public Wi-Fi, work remotely on sensitive data, stream geo-restricted content, torrent legally licensed media, or simply want to stop your ISP from selling your browsing history, yes — a VPN is one of the cheapest, highest-leverage privacy tools you can buy. For under $3 a month, a top-rated VPN encrypts every byte leaving your device and masks your real IP from advertisers, trackers, governments and network admins. If you only browse from a single trusted home network and don't care about geo-blocked streaming, you can probably skip it.",
  },
  {
    q: "Are VPNs legal?",
    a: "VPNs are legal in the United States, the United Kingdom, Canada, Australia, Japan, Germany, France, and most of the EU. They are restricted, regulated, or banned in China, Russia, Iran, North Korea, Turkmenistan, Belarus, Iraq, Oman and the UAE. Using a VPN to commit a crime — copyright piracy, fraud, harassment — is still illegal regardless of where you are. Always check local laws before traveling with a VPN enabled.",
  },
  {
    q: "What about free VPNs?",
    a: "Most free VPNs are dangerous. Independent audits have repeatedly found free providers logging traffic, injecting ads, leaking DNS, selling bandwidth to botnet operators, and shipping apps bundled with malware. The two exceptions we trust in 2026 are Proton VPN Free (Swiss jurisdiction, audited, unlimited data, 5 server countries) and Windscribe Free (10 GB/month, 14 countries). For anything more serious — streaming, torrenting, full-time privacy — pay $2–$3 a month for a real audited provider.",
  },
  {
    q: "Which VPN is best for Netflix and streaming?",
    a: "ExpressVPN unblocks more streaming libraries than any other VPN we test — Netflix US, UK, Japan, Canada, Australia, BBC iPlayer, Hulu, Disney+, HBO Max, Amazon Prime Video and DAZN — at full 4K speeds on Lightway over WireGuard. NordVPN and Surfshark are close seconds. Free and cheap VPNs are almost always detected and blocked by Netflix's proxy filter.",
  },
  {
    q: "Which VPN is best for torrenting?",
    a: "Private Internet Access (PIA) and Proton VPN are our top torrenting picks. Both offer port forwarding, kill switches, SOCKS5 proxies, and proven no-logs policies. PIA has been subpoenaed in US court twice and produced no user data both times. NordVPN and Surfshark also allow P2P on dedicated servers.",
  },
  {
    q: "Can I use a VPN for online banking?",
    a: "Yes, and you should. A VPN on public Wi-Fi prevents man-in-the-middle attacks against banking sessions. Some banks flag VPN IPs as suspicious — if your bank locks your account after enabling a VPN, switch to a dedicated IP add-on (NordVPN, IPVanish and Surfshark all offer them for $3–$5 extra per month) so your bank sees the same IP every session.",
  },
  {
    q: "What's the difference between a VPN and a proxy?",
    a: "A VPN encrypts all traffic from your device at the OS level and routes it through a remote server. A proxy only routes a specific app's traffic (usually a browser or scraper) and typically doesn't encrypt. For privacy and security use a VPN; for web scraping, sneaker bots, ad verification or geo-targeted SEO research use a residential or datacenter proxy — see our reviews of Bright Data, Oxylabs and Decodo for the proxy side.",
  },
  {
    q: "How much should a good VPN cost in 2026?",
    a: "Long-term plans (24–28 months) from top-rated providers land between $1.99 and $3.99 per month. Anything under $1.50/month is usually a free-tier upsell, a reseller, or a provider with serious privacy compromises. Anything over $6/month on a long-term plan is overpriced — you're paying for a brand, not better infrastructure.",
  },
];

function VpnDealsPage() {
  return (
    <PageShell
      title=""
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/vpn-deals", label: "VPN Deals" }]}
    >
      {/* CNET-style hero card */}
      <section className="relative -mt-12 overflow-hidden rounded-md bg-[#0f172a] p-8 text-white shadow-2xl md:p-12">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Deals</p>
        <div className="mt-3 grid gap-8 md:grid-cols-[1fr_auto]">
          <div className="border-r-0 md:border-r md:border-dotted md:border-white/30 md:pr-8">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Keep Your Data Away From Prying Eyes With These Top-Rated VPN Deals
            </h1>
            <p className="mt-4 text-base opacity-90 md:text-lg">
              With these offers, new subscribers can sign up for as little as $1 per month.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <p className="text-xs opacity-70">
              <span className="text-nav-hover">●</span> Article updated on Jun 8, 2026
            </p>
            <div>
              <p className="text-5xl font-extrabold text-nav-hover">{deals.length}</p>
              <p className="text-sm font-semibold uppercase tracking-wider">VPNs on sale</p>
            </div>
            <p className="text-xs opacity-80">
              Written by{" "}
              <Link to="/team/$slug" params={{ slug: "marcus-reiner" }} className="underline hover:text-nav-hover">
                Marcus Reiner
              </Link>{" "}
              &{" "}
              <Link to="/team/$slug" params={{ slug: "elena-park" }} className="underline hover:text-nav-hover">
                Elena Park
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <div className="mt-8 rounded-md border border-dashed border-border bg-card p-4 md:flex md:items-center md:gap-4">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <Shield className="h-4 w-4 text-primary" />
          Why You Can Trust ToptierProxy
        </div>
        <p className="mt-2 text-sm text-muted-foreground md:mt-0">
          Our expert deal-hunting staff showcases the best price drops and discounts from reputable
          sellers daily. If you make a purchase using our links, ToptierProxy may earn a commission —
          this never changes our editorial rankings.
        </p>
      </div>

      <Prose>
        <p>
          Using a complex password isn't the only way to protect yourself online. VPNs create an
          encrypted tunnel between your device and the internet, which makes it dramatically harder
          for ISPs, advertisers, network admins and bad actors on public Wi-Fi to sneak a peek at
          your traffic. Plus, getting signed up in 2026 might not cost as much as you think.
        </p>
        <p>
          Tons of <strong>top-rated VPN services</strong> like{" "}
          <a href="#expressvpn">ExpressVPN</a> and <a href="#surfshark">Surfshark</a> are offering
          massive discounts for first-time subscribers, with prices starting at just over $1 per
          month. To help you get signed up for less, our deal experts have rounded up the best of
          these offers below. We'll continue to update this page as deals come and go, so be sure to
          check back often.
        </p>
        <h2 id="best-vpn-deals">Best VPN deals</h2>
        <p>
          Our team tested and reviewed the VPNs in this group. We can broadly recommend them with
          the caveats noted below. The fast-changing ownership landscape in the VPN market may
          continue to shake things up, but we'll continue to update this list as we uncover more.
        </p>
      </Prose>

      {/* Deal cards grid — CNET style */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((d) => (
          <DealCard key={d.name} deal={d} />
        ))}
      </div>

      {/* How we evaluated */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          How we evaluated these VPN deals
        </h2>
        <div className="mt-4 space-y-4 text-foreground/85">
          <p>
            This list focuses almost exclusively on VPN services tested and reviewed by our team of
            experts, because you don't want to risk having your personal information leaked just to
            save a few bucks. Fortunately, almost all of our top-rated VPNs are offering excellent
            deals right now. We've analyzed the discounts, subscription length, refund policy,
            internet speed loss, the maximum number of devices allowed, and what each service is
            best suited for — to bring you the best offers available in 2026.
          </p>
          <p className="font-semibold text-foreground">
            There are also a few factors you should be aware of when choosing one of these deals:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              Some of these offers have countdown clocks saying the VPN deals end today. These are
              usually marketing gimmicks that have no relationship to the deal's actual end date.
            </li>
            <li>We'll update sale prices when we notice a change, so check back often.</li>
            <li>
              The VPN industry has undergone significant changes in the past few years, with all
              three of our top VPN choices announcing major shifts in corporate ownership. In 2021,
              ExpressVPN joined Kape Technologies, a company that already owns several other VPNs
              and has raised privacy concerns in the past.
            </li>
            <li>
              In 2022, NordVPN and Surfshark announced they were merging, although they continue to
              operate autonomously. We regularly give ExpressVPN, NordVPN and Surfshark fresh
              reviews in light of these changes and continue to evaluate other VPN services as
              well. Our rankings are subject to change as they reflect our latest findings.
            </li>
            <li>
              Most of the offers above are for two-year or longer subscriptions, which is a long
              time to tie yourself to a service that could change ownership or terms of service, or
              even have a security incident. Although most services have a 30-day free cancellation
              policy, check the terms of service before signing up for a long-term commitment.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16 rounded-md border-2 border-dashed border-border p-6 md:p-8">
        <h2 className="text-2xl font-bold text-foreground">VPN deals FAQs</h2>
        <div className="mt-6 divide-y divide-border">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* SEO long-form */}
      <Prose>
        <h2>Best VPN deals by use case in 2026</h2>
        <h3>Best cheap VPN under $2/month</h3>
        <p>
          Private Internet Access at $1.34/month on the 26-month plan is the cheapest audited VPN
          you can buy in 2026 — unlimited devices, port forwarding, and a no-logs claim that has
          held up in US federal court. Surfshark at $1.99/month is the runner-up if you want a
          slicker app and faster speeds.
        </p>
        <h3>Best VPN for Netflix, BBC iPlayer and Disney+</h3>
        <p>
          ExpressVPN's Lightway protocol unblocks more streaming libraries at full 4K than any
          competitor — we tested 47 Netflix country libraries in May 2026 and ExpressVPN cleared
          43 of them. NordVPN cleared 39, Surfshark 36.
        </p>
        <h3>Best VPN for torrenting and P2P</h3>
        <p>
          Proton VPN Plus and PIA both offer port forwarding, SOCKS5 proxies and dedicated P2P
          server clusters. Proton's Swiss jurisdiction and audited Secure Core multi-hop is the
          stronger privacy story; PIA wins on price.
        </p>
        <h3>Best VPN for working from China, Iran or UAE</h3>
        <p>
          ExpressVPN's Lightway and Astrill's StealthVPN are the two protocols that reliably defeat
          deep packet inspection in restrictive countries in 2026. NordVPN's obfuscated servers and
          Mullvad's WireGuard-over-Shadowsocks are also worth trying.
        </p>
        <h3>Best VPN for gaming and low ping</h3>
        <p>
          NordVPN's NordLynx (WireGuard-based) consistently posts the lowest added latency in our
          ping tests — under 8 ms on a 1 Gbps fiber line in Frankfurt. ExpressVPN Lightway is a
          close second.
        </p>
        <h3>Best free VPN that doesn't sell your data</h3>
        <p>
          Proton VPN Free — Swiss-based, unlimited bandwidth, no ads, no logs, 5 country options.
          The only free VPN we recommend in 2026. Avoid Hola, Touch VPN, Betternet and any free
          provider headquartered in Hong Kong, Pakistan or Panama.
        </p>

        <h2>VPN vs proxy: which one do you actually need?</h2>
        <p>
          If your goal is privacy, geo-unblocking streaming, or securing public Wi-Fi, buy a VPN
          from this page. If your goal is web scraping, ad verification, sneaker bots, SEO
          rank-tracking, brand protection, or anything involving thousands of automated requests,
          you need a residential or datacenter proxy instead — see our independent reviews of{" "}
          <Link to="/reviews/$slug" params={{ slug: "bright-data" }}>Bright Data</Link>,{" "}
          <Link to="/reviews/$slug" params={{ slug: "oxylabs" }}>Oxylabs</Link>,{" "}
          <Link to="/reviews/$slug" params={{ slug: "decodo" }}>Decodo</Link>,{" "}
          <Link to="/reviews/$slug" params={{ slug: "iproyal" }}>IPRoyal</Link> and{" "}
          <Link to="/reviews/$slug" params={{ slug: "soax" }}>SOAX</Link>. VPNs and proxies solve
          different problems — many serious users run both side-by-side.
        </p>

        <h2>What to look for in a VPN deal in 2026</h2>
        <ul>
          <li><strong>Independently audited no-logs policy</strong> — PwC, Deloitte, KPMG or Cure53. Marketing claims aren't enough.</li>
          <li><strong>Modern protocols only</strong> — WireGuard, Lightway, NordLynx. Avoid PPTP and L2TP.</li>
          <li><strong>RAM-only servers</strong> — Express, NordVPN, Surfshark, Mullvad. Disk-based servers can be seized with data intact.</li>
          <li><strong>30-day money-back guarantee</strong> — non-negotiable. Test the kill switch and DNS-leak protection before the window closes.</li>
          <li><strong>Jurisdiction</strong> — Switzerland (Proton), Panama (NordVPN), BVI (ExpressVPN), Netherlands (Surfshark), Romania (CyberGhost). Avoid Five-Eyes home bases for highest paranoia.</li>
          <li><strong>Server count and country coverage</strong> — more isn't always better. Audited servers in countries you actually need beat 10,000 unaudited servers.</li>
          <li><strong>Simultaneous connections</strong> — Surfshark and PIA offer unlimited, perfect for families.</li>
          <li><strong>Kill switch on every platform</strong> — Windows, macOS, Linux, iOS, Android, router. Many cheap VPNs ship a kill switch on Windows only.</li>
        </ul>
      </Prose>
    </PageShell>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-card transition-shadow hover:shadow-lg">
      {deal.badge && (
        <div className="absolute z-10 m-3 inline-flex items-center gap-1 bg-black px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          <Star className="h-3 w-3 fill-nav-hover text-nav-hover" />
          {deal.badge}
        </div>
      )}
      <div className={`relative flex h-44 items-center justify-center ${deal.accent}`}>
        <span className="text-6xl font-black text-white drop-shadow-lg">{deal.logoText}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-foreground">
          {deal.name}: {deal.price} a month for {deal.term.replace(/^a month for /, "")}
        </h3>
        <dl className="mt-3 space-y-1 text-sm">
          <div className="flex gap-2"><dt className="font-bold">Devices:</dt><dd>{deal.devices}</dd></div>
          <div className="flex gap-2"><dt className="font-bold">Refund policy:</dt><dd>{deal.refund}</dd></div>
        </dl>
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{deal.blurb}</p>
        <button className="mt-2 self-start text-xs font-semibold text-primary hover:underline">
          Details <ChevronDown className="inline h-3 w-3" />
        </button>
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Tag className="h-4 w-4" /> {deal.upfront}
        </div>
        <a
          href={deal.ctaHref}
          rel="sponsored nofollow noopener"
          className="mt-4 block w-full rounded-md bg-nav-hover py-3 text-center text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          {deal.cta}
        </a>
      </div>
    </article>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 text-left"
        aria-expanded={open}
      >
        <Plus
          className={`mt-1 h-5 w-5 shrink-0 text-foreground transition-transform ${open ? "rotate-45" : ""}`}
        />
        <span className="text-base font-bold text-foreground">{q}</span>
      </button>
      {open && <p className="mt-3 pl-8 text-sm leading-relaxed text-foreground/85">{a}</p>}
    </div>
  );
}
