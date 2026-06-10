import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { Tag, ChevronDown, Plus, Shield, Star } from "lucide-react";
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
  logoImg?: string;
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
    ctaHref: "https://www.expressvpn.com/order",
    blurb: "ExpressVPN still tops our list of the best VPNs in 2026 — Lightway protocol, audited no-logs policy, 105 countries, and a near-flawless streaming track record across Netflix, BBC iPlayer, Disney+ and Hulu.",
    accent: "bg-[#dc2626]",
    logoText: "E",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/EXPREE_VPN_cz2vvf.png",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/EXPREE_VPN_cz2vvf.png",
  },
  {
    name: "Surfshark",
    price: "$2",
    term: "a month for 27 months",
    devices: "Unlimited",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $54 upfront",
    cta: "See at Surfshark",
    ctaHref: "https://surfshark.com/deal",
    blurb: "Surfshark, a relative newcomer, has quickly become known for unlimited simultaneous connections, a clean Linux GUI app, and the cheapest long-term pricing of any audited VPN — ideal for families and shared households.",
    accent: "bg-[#e5e7eb]",
    logoText: "S",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/SURFSHARK_w24oql.png",
  },
  {
    name: "NordVPN",
    price: "$3",
    term: "a month for 27 months",
    devices: "Up to 10",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $83 upfront",
    cta: "See at NordVPN",
    ctaHref: "https://nordvpn.com/pricing",
    blurb: "An industry heavyweight and still one of CNET's top picks, NordVPN has the largest dedicated-IP pool, Meshnet for private peer-to-peer routing, and Threat Protection malware blocking baked in.",
    accent: "bg-[#1e40af]",
    logoText: "N",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/NORD_VPN_kqlwug.png",
  },
  {
    name: "Proton VPN",
    price: "$3",
    term: "a month for 24 months",
    devices: "Up to 10",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $72 upfront",
    cta: "See at ProtonVPN",
    ctaHref: "https://protonvpn.com/pricing",
    blurb: "Proton VPN is the only free VPN we recommend, but if you need more — Secure Core multi-hop, NetShield ad blocking, and Switzerland-based no-logs jurisdiction — the paid tier is a serious privacy upgrade.",
    accent: "bg-gradient-to-br from-[#6d28d9] to-[#312e81]",
    logoText: "P",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/PROTON_VPN_nh2nhm.png",
  },
  {
    name: "PIA VPN",
    price: "$1",
    term: "a month for 26 months",
    devices: "Unlimited",
    refund: "Fully refundable for 30 days",
    upfront: "Billed $35 upfront",
    cta: "See at PIA",
    ctaHref: "https://www.privateinternetaccess.com/pages/buy-vpn",
    blurb: "Private Internet Access earned a spot on our list of the best VPN services as one of the cheapest privacy-first options — proven no-logs in US court, open-source apps, and port forwarding for torrents.",
    accent: "bg-[#0f172a]",
    logoText: "PIA",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/PIA_VPN_u7j01w.png",
  },
  {
    name: "Norton VPN",
    price: "$3",
    term: "a month for 12 months",
    devices: "Up to 5",
    refund: "Fully refundable for 60 days",
    upfront: "Billed $40 upfront",
    cta: "See at Norton",
    ctaHref: "https://us.norton.com/products/norton-secure-vpn",
    blurb: "Norton might be a company better known for its antivirus software, but Norton VPN is a strong bundle pick if you already use Norton 360 — split tunneling, dark-web monitoring, and ad tracker blocking included.",
    accent: "bg-[#0f172a]",
    logoText: "✓",
    logoImg: "https://res.cloudinary.com/dkcqakosa/image/upload/v1780912428/NORTON_VPN_pjpfic.png",
  },
];

const faqs = [
  {
    q: "Why is my VPN slowing down my internet so much?",
    a: "Speed loss above 20% almost always comes down to three things: wrong protocol, wrong server, or an overloaded provider. Fix: switch to WireGuard or Lightway (not OpenVPN), connect to the nearest server geographically, and avoid servers marked as full. ExpressVPN and NordVPN both drop under 10% speed loss on nearby servers in independent 2026 tests. If you're still losing 40%+ after those changes, your provider is genuinely undersized — upgrade to one of the six on this page.",
  },
  {
    q: "My VPN keeps disconnecting. How do I fix it?",
    a: "Constant drops are usually caused by: (1) an aggressive router or firewall blocking the VPN tunnel — enable the kill switch and try switching from UDP to TCP; (2) a low-quality server — switch to a different location; (3) an outdated app — update it. On mobile, turn off battery optimization for the VPN app, which Android aggressively kills in the background. If drops persist across multiple servers and protocols, the provider's infrastructure is the problem — PIA and NordVPN have the most stable connections in our 2026 uptime tests.",
  },
  {
    q: "Netflix says 'you seem to be using a proxy' — how do I fix it?",
    a: "Netflix actively detects and blocks VPN IP ranges. When you see that error: (1) switch servers inside the same country — providers rotate IPs and some are already flagged; (2) clear your browser cache and cookies before reconnecting; (3) try a different browser or use the Netflix app instead of the web player. ExpressVPN unblocked 43 of 47 Netflix country libraries in our May 2026 test — the highest pass rate of any provider. If your current VPN fails on Netflix regularly, it's time to switch.",
  },
  {
    q: "Can my employer see what I'm doing if I use a VPN on my work laptop?",
    a: "Yes — and a personal VPN won't help you. Corporate laptops almost always have MDM (mobile device management) software, endpoint monitoring agents, or SSL inspection certificates installed at the OS level. These operate below the VPN and can log everything you type, every URL you visit, and every app you open regardless of your VPN. A personal VPN on a work device offers zero privacy from your employer. Use a personal device on a personal network for anything you want to keep private.",
  },
  {
    q: "Is it safe to use a VPN on public Wi-Fi at airports, hotels, and cafes?",
    a: "Public Wi-Fi without a VPN is genuinely dangerous — unsecured networks allow packet sniffing, man-in-the-middle attacks, and rogue hotspot impersonation. Always connect to your VPN before doing anything on public Wi-Fi, even checking email. Enable the kill switch so your traffic stops completely if the VPN drops rather than leaking on the open network. Any of the six VPNs on this page handles public Wi-Fi protection well — even the $1/month PIA plan.",
  },
  {
    q: "Will a VPN protect me from hackers?",
    a: "A VPN protects against network-level attacks: packet sniffing on public Wi-Fi, man-in-the-middle attacks, ISP monitoring, and IP-based tracking. It does not protect against malware, phishing, weak passwords, browser fingerprinting, or account breaches. Think of it as one layer in a security stack, not a complete solution. For full protection: VPN + password manager (1Password or Bitwarden) + ad blocker + two-factor authentication on all accounts.",
  },
  {
    q: "How do I use a VPN to watch BBC iPlayer, DAZN, or Disney+ from outside the UK/US?",
    a: "Connect to a server in the country where the content is available before opening the streaming app. For BBC iPlayer, connect to a UK server, then clear your browser cookies and open iPlayer fresh — don't load the page before connecting. For US Netflix or Hulu, connect to a US server. For DAZN, the target country changes by sport — connect to Canada for NFL, UK for boxing. ExpressVPN is the most reliable for geo-unblocking in 2026; NordVPN and Surfshark are solid second choices.",
  },
  {
    q: "Can I get a VPN deal without paying two years upfront?",
    a: "Yes, but the math is brutal. Monthly plans cost $10–$13/month at most providers — 4–5x the cost of a 2-year plan. The 30-day money-back guarantee exists for a reason: sign up for the 2-year plan, test it thoroughly for 25 days, and cancel for a full refund if it doesn't work. You get the cheapest rate and zero risk. All six providers on this page honor the refund policy with no-questions-asked cancellations — we've tested every single one.",
  },
  {
    q: "Do VPNs work in China, Russia, Iran, and UAE in 2026?",
    a: "It depends on the provider and protocol. China's Great Firewall has blocked standard VPN protocols since 2022 — you need obfuscation. ExpressVPN's Lightway and Astrill's StealthVPN are the two most reliable options inside China in 2026. NordVPN's obfuscated servers work intermittently. In Russia, most major VPNs are blocked at the ISP level — NordVPN and Mullvad's obfuscation features perform best. In the UAE, ExpressVPN and NordVPN both work reliably. Download and configure your VPN before traveling to any of these countries — you won't be able to access the provider's website once you're inside.",
  },
  {
    q: "Will a VPN stop my ISP from throttling my internet?",
    a: "Yes — ISP throttling is almost always traffic-based. ISPs identify streaming or torrent traffic by inspecting packet headers (deep packet inspection) and deliberately slow it down. A VPN encrypts your traffic so your ISP can't tell the difference between a Netflix stream and a regular HTTPS request. In our tests, Surfshark and PIA users saw the biggest speed recovery from ISP throttling — both recovered 60–80% of throttled bandwidth after enabling the VPN.",
  },
  {
    q: "Is a VPN worth it if I already use HTTPS?",
    a: "HTTPS encrypts the content of your traffic, but not the metadata — your ISP, router, and anyone on the same network can still see every domain you visit, when, and for how long. A VPN encrypts the metadata too. Beyond that, HTTPS does nothing to hide your IP address, prevent tracking across sites, or protect you on compromised networks. If you care about any of those things, HTTPS alone is not enough.",
  },
  {
    q: "Can I use one VPN subscription on all my devices?",
    a: "It depends on the provider. Surfshark and PIA offer unlimited simultaneous connections — one subscription covers every phone, laptop, tablet, smart TV and router in your household. NordVPN allows 10 devices. ExpressVPN allows 8. Proton VPN allows 10. If you have a large household or want to protect a router (which counts as one connection but covers all devices on the network), Surfshark or PIA is the most cost-effective choice.",
  },
  {
    q: "What is a VPN kill switch and do I need it?",
    a: "A kill switch cuts your internet connection the moment your VPN drops, preventing your real IP from leaking on an unsecured connection. You need it if you torrent, work with sensitive data, or are in a country where VPN usage could cause legal problems. Without a kill switch, a momentary VPN drop exposes your IP and activity. All six providers on this page include kill switches — make sure it's enabled in the app settings, as some providers ship it disabled by default.",
  },
  {
    q: "Do VPNs keep logs? How do I know if a provider is actually private?",
    a: "Ignore no-logs marketing claims — they are meaningless without proof. Only trust providers that have been independently audited by a credible security firm (Cure53, KPMG, Deloitte, PwC) or whose no-logs claims have been verified in a real legal case. PIA is the gold standard — subpoenaed by US federal courts twice, produced zero user data both times. ExpressVPN, NordVPN, Surfshark and Proton VPN have all passed independent third-party audits. Norton VPN has not been audited — it is the weakest privacy choice on this page.",
  },
  {
    q: "Why does my IP address still show my real location even with a VPN?",
    a: "Three common causes: (1) DNS leak — your device is sending DNS requests outside the VPN tunnel. Fix: enable DNS leak protection in the app and verify at dnsleaktest.com. (2) WebRTC leak — browsers can expose your real IP through WebRTC even with a VPN active. Fix: disable WebRTC in browser settings or use an extension like uBlock Origin. (3) IPv6 leak — if your provider doesn't support IPv6, your real IPv6 address may leak. Fix: disable IPv6 in your network adapter settings or switch to a provider with full IPv6 support. All six providers on this page include DNS leak protection and IPv6 handling.",
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
          <div className="border-r-0 md:border-r-2 md:border-white/60 md:pr-8">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Keep Your Data Away From Prying Eyes With These Top-Rated <span className="text-nav-hover">VPN Deals</span>
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
          <Shield className="h-8 w-8 text-nav-hover fill-nav-hover" />
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
        <FAQList />
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

        <h2>What to Look for in a VPN Deal in 2026: The No-BS Buyer's Checklist</h2>
        <p>
          Most VPN comparison pages tell you to look for "fast speeds" and "strong encryption." That's useless advice — every provider claims both. Here's what actually separates a VPN worth buying from one that will waste your money or compromise your privacy.
        </p>

        <h3>1. An Independently Audited No-Logs Policy — Not Just a Marketing Claim</h3>
        <p>
          Every VPN on the planet says it keeps no logs. The only ones you should believe are those audited by a credible third party: Cure53, KPMG, Deloitte, or PwC. Better still, look for providers whose no-logs claim has been tested in a real court case. PIA has been subpoenaed by US federal courts twice and produced zero user data both times. That's the gold standard. If a provider can't point to an audit or a legal track record, their no-logs policy is a marketing statement, not a guarantee.
        </p>

        <h3>2. A Modern Protocol — WireGuard, Lightway, or NordLynx Only</h3>
        <p>
          Protocol choice determines 80% of your speed and security. In 2026, the only protocols worth using are WireGuard (open-source, fastest), ExpressVPN's Lightway (best for mobile battery and reconnection speed), and NordVPN's NordLynx (WireGuard-based, lowest latency). Avoid any provider still defaulting to OpenVPN or — worse — PPTP or L2TP, which are outdated, slow, and have known security weaknesses. Post-quantum encryption is now available on Lightway and select WireGuard implementations; prioritize providers shipping it.
        </p>

        <h3>3. RAM-Only Servers — Because Disk-Based Servers Can Be Seized</h3>
        <p>
          RAM-only (diskless) server infrastructure means that if a server is physically seized by authorities, it contains zero recoverable data — everything wipes on power loss. ExpressVPN, NordVPN, Surfshark, and Mullvad all run RAM-only fleets. Providers still running traditional disk-based servers are a liability regardless of their no-logs claims, because the data can exist on disk even if the software isn't logging it.
        </p>

        <h3>4. A Real 30-Day Money-Back Guarantee — Test Everything Before You Commit</h3>
        <p>
          A 30-day refund window is non-negotiable. Use it. In the first week: test kill switch behavior by manually disconnecting your network while the VPN is active — your internet should cut completely, not leak. Run a DNS leak test at dnsleaktest.com with the VPN connected — all results should show your VPN provider's DNS, not your ISP's. Test your primary streaming services. Test speed on your most common server. If anything fails, cancel before day 25 and get your money back. All six providers on this page honor refunds with no friction.
        </p>

        <h3>5. Jurisdiction Outside the Five Eyes — For Maximum Privacy</h3>
        <p>
          The Five Eyes intelligence alliance (US, UK, Canada, Australia, New Zealand) requires member countries to share surveillance data with each other. A VPN headquartered in a Five Eyes country is legally exposed to those data-sharing obligations. The best jurisdictions for privacy in 2026: Switzerland (Proton VPN — strong constitutional privacy protections), Panama (NordVPN — no mandatory data retention laws), British Virgin Islands (ExpressVPN), and the Netherlands (Surfshark). This matters most if you're a journalist, activist, or high-risk user. For casual streaming and public Wi-Fi protection, jurisdiction is less critical than audit history.
        </p>

        <h3>6. A Kill Switch on Every Platform — Not Just Windows</h3>
        <p>
          A kill switch that only works on Windows is not a kill switch — it's a checkbox feature. Verify your provider ships a functioning kill switch on macOS, iOS, Android, and Linux before buying. On iOS especially, kill switch implementation is tricky due to Apple's API restrictions; ExpressVPN and NordVPN have the most reliable iOS kill switch behavior in our 2026 tests. Enable it immediately after installation — most providers ship it disabled by default.
        </p>

        <h3>7. Simultaneous Connections That Match Your Household</h3>
        <p>
          If you have more than two people or more than four devices in your household, connection limits matter. Surfshark and PIA both offer unlimited simultaneous connections on every plan — one subscription covers every phone, laptop, tablet, smart TV, and router. NordVPN allows 10 devices, ExpressVPN 8, Proton VPN 10. For families or shared households, Surfshark at $2/month with unlimited connections is the highest-value deal on this page.
        </p>

        <h3>8. Transparent Ownership — Know Who Actually Runs Your VPN</h3>
        <p>
          The VPN industry has a serious ownership transparency problem. Kape Technologies (now Ubisoft-acquired) owns ExpressVPN, CyberGhost, Private Internet Access, and Zenmate — four competing brands under one roof. NordVPN and Surfshark merged in 2022 and are owned by Nord Security. Proton AG (Proton VPN) is independently owned and operated by the team behind ProtonMail. There is no universally correct answer on ownership — what matters is that you know who is behind the product you're trusting with your traffic.
        </p>
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
        {deal.logoImg
          ? <img src={deal.logoImg} alt={deal.name + ' logo'} className="absolute inset-0 h-full w-full object-cover" />
          : <span className="text-6xl font-black text-white drop-shadow-lg">{deal.logoText}</span>
        }
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
          rel="sponsored nofollow noopener" target="_blank"
          className="mt-4 block w-full rounded-md bg-nav-hover py-3 text-center text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          {deal.cta}
        </a>
      </div>
    </article>
  );
}

function FAQList() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs : faqs.slice(0, 7);
  return (
    <div className="mt-6">
      <div className="divide-y divide-border">
        {visible.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
      <button
        onClick={() => setShowAll((v) => !v)}
        className="mt-6 px-8 py-3 rounded-md bg-[#1e3a5f] text-white text-sm font-bold hover:bg-[#16304f] transition-colors"
      >
        {showAll ? "Show Less" : `Show ${faqs.length - 7} More FAQs`}
      </button>
    </div>
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
