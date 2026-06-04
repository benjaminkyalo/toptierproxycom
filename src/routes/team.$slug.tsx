import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { blogPosts } from "@/data/blog";
import { Linkedin, Twitter, Mail, Award, BookOpen, FlaskConical, Calendar } from "lucide-react";

type Author = {
  slug: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  longBio: string[];
  expertise: string[];
  credentials: string[];
  topics: string[];
  social: { linkedin?: string; twitter?: string; email?: string };
  location: string;
  yearsExperience: number;
};

const AUTHORS: Record<string, Author> = {
  "marcus-reiner": {
    slug: "marcus-reiner",
    name: "Marcus Reiner",
    role: "Director of Network Research",
    image:
      "https://res.cloudinary.com/dkcqakosa/image/upload/v1780194300/Capture-Photoroom_1_w5jmmt.png",
    shortBio:
      "Marcus Reiner is the Director of Network Research at ToptierProxy.com. He has spent 14 years building large-scale web scraping infrastructure, proxy networks, and anti-bot evasion tooling for data engineering teams at e-commerce, fintech and cybersecurity companies.",
    longBio: [
      "Marcus leads ToptierProxy.com's benchmarking lab, where every residential, ISP, datacenter and mobile proxy provider is independently tested against live targets — Amazon, Google SERP, Cloudflare, DataDome, PerimeterX and Akamai — using a fixed 5,000-request corpus that is re-run every 90 days. His methodology underpins every Trust Score and ranking published on the site.",
      "Before joining ToptierProxy.com in 2023, Marcus was a Principal Data Engineer at a top-5 retail intelligence firm, where he architected a multi-region scraping pipeline that processed 2.3 billion product pages per month across 47 countries. He has contributed to several open-source HTTP and TLS fingerprinting tools and is a regular speaker at scraping and data-engineering conferences.",
      "Marcus holds a B.Sc. in Computer Science from the Technical University of Munich and an M.Sc. in Distributed Systems from ETH Zürich. He is based in Berlin, Germany.",
    ],
    expertise: [
      "Residential proxy network architecture",
      "TLS/JA3 fingerprint evasion",
      "Headless browser detection bypass",
      "Anti-bot software (Cloudflare, DataDome, PerimeterX, Akamai)",
      "Distributed crawling at 50k+ req/s",
      "Proxy pool quality benchmarking",
    ],
    credentials: [
      "M.Sc. Distributed Systems, ETH Zürich",
      "B.Sc. Computer Science, TU Munich",
      "14+ years building scraping infrastructure",
      "Former Principal Data Engineer, retail intelligence",
      "Speaker — Web Data Summit, Extract Conf, PyCon DE",
    ],
    topics: [
      "Residential vs Datacenter Proxies",
      "Bypassing Cloudflare",
      "Web Scraping at Scale",
      "Mobile Proxies",
      "Proxy Benchmarking Methodology",
      "Engineering & How-To",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      email: "marcus@toptierproxy.com",
    },
    location: "Berlin, Germany",
    yearsExperience: 14,
  },
  "elena-park": {
    slug: "elena-park",
    name: "Elena Park",
    role: "Senior Editor",
    image:
      "https://res.cloudinary.com/dkcqakosa/image/upload/v1780194300/image_22-Photoroom_1_d2osmc.png",
    shortBio:
      "Elena Park is the Senior Editor at ToptierProxy.com. She covers proxy pricing, vendor comparisons, legal & compliance topics, and buyer's guides — translating deep technical benchmarks into clear, decision-ready recommendations for businesses of every size.",
    longBio: [
      "Elena leads editorial strategy for ToptierProxy.com, overseeing every published review, comparison and pricing analysis. She is responsible for the site's editorial-independence policy and personally signs off on every vendor ranking before publication.",
      "Before joining ToptierProxy.com in 2024, Elena spent 9 years as a senior technology journalist at two of the largest B2B SaaS review publications, where she investigated procurement fraud, exposed misleading vendor benchmarks and authored more than 300 long-form buyer's guides. Her work has been cited by Forbes, TechCrunch and The Wall Street Journal.",
      "Elena holds a B.A. in Journalism from Northwestern University's Medill School and an M.S. in Information Systems from NYU Stern. She is based in Seoul, South Korea.",
    ],
    expertise: [
      "Proxy & SaaS pricing analysis",
      "Vendor comparisons & buyer's guides",
      "Web scraping legality & compliance (GDPR, CCPA, CFAA)",
      "Affiliate-disclosure & editorial-independence policy",
      "B2B procurement research",
      "Long-form technology journalism",
    ],
    credentials: [
      "M.S. Information Systems, NYU Stern",
      "B.A. Journalism, Northwestern Medill",
      "9+ years senior B2B tech journalism",
      "300+ published buyer's guides",
      "Cited in Forbes, TechCrunch, WSJ",
    ],
    topics: [
      "Proxy Pricing",
      "Bright Data vs Oxylabs",
      "Is Web Scraping Legal",
      "Best Free Proxy Trials",
      "GDPR & CCPA Compliance",
      "Vendor Buyer's Guides",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://twitter.com/",
      email: "elena@toptierproxy.com",
    },
    location: "Seoul, South Korea",
    yearsExperience: 9,
  },
};

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const author = AUTHORS[params.slug];
    if (!author) throw notFound();
    return { author };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const a = loaderData.author;
    const url = `https://toptierproxycom.lovable.app/team/${params.slug}`;
    const title = `${a.name} — ${a.role} at ToptierProxy.com`;
    const description = `${a.shortBio.slice(0, 155)}`;
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "author", content: a.name },
        { name: "keywords", content: [a.name, a.role, "proxy expert", "web scraping expert", ...a.topics].join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
        { property: "og:image", content: a.image },
        { property: "profile:first_name", content: a.name.split(" ")[0] },
        { property: "profile:last_name", content: a.name.split(" ").slice(1).join(" ") },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: a.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: a.name,
            jobTitle: a.role,
            image: a.image,
            url,
            description: a.shortBio,
            worksFor: {
              "@type": "Organization",
              name: "ToptierProxy.com",
              url: "https://toptierproxycom.lovable.app",
            },
            knowsAbout: a.expertise,
            address: { "@type": "PostalAddress", addressLocality: a.location },
            sameAs: Object.values(a.social).filter((u) => u?.startsWith("http")),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://toptierproxycom.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Team", item: "https://toptierproxycom.lovable.app/about" },
              { "@type": "ListItem", position: 3, name: a.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell title="Author not found">
      <p>That author profile doesn't exist.</p>
      <Link to="/" className="font-bold text-primary underline">Back home</Link>
    </PageShell>
  ),
  component: TeamPage,
});

function TeamPage() {
  const { author: a } = Route.useLoaderData() as { author: Author };
  const posts = blogPosts.filter((p) => p.author === a.name);

  return (
    <PageShell
      title={a.name}
      intro={`${a.role} — ${a.yearsExperience}+ years of hands-on experience in proxy networks, web scraping infrastructure & data engineering.`}
      breadcrumb={[
        { to: "/", label: "Home" },
        { to: "/about", label: "Team" },
      ]}
    >
      {/* HERO PROFILE CARD */}
      <section className="grid gap-8 md:grid-cols-[260px_1fr] md:items-start">
        <div className="mx-auto md:mx-0">
          <div className="h-56 w-56 overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
            <img src={a.image} alt={`${a.name} — ${a.role} at ToptierProxy.com`} className="h-full w-full object-cover object-top" loading="eager" />
          </div>
          <div className="mt-4 flex justify-center gap-3 md:justify-start">
            {a.social.linkedin && (
              <a href={a.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${a.name} on LinkedIn`} className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {a.social.twitter && (
              <a href={a.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${a.name} on Twitter`} className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary">
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {a.social.email && (
              <a href={`mailto:${a.social.email}`} aria-label={`Email ${a.name}`} className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary">
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span>{a.role}</span>
            <span className="opacity-40">•</span>
            <span>{a.location}</span>
            <span className="opacity-40">•</span>
            <span>{a.yearsExperience}+ yrs experience</span>
          </div>
          <Prose>
            <p className="!mt-3 text-lg">{a.shortBio}</p>
            {a.longBio.map((p, i) => <p key={i}>{p}</p>)}
          </Prose>
        </div>
      </section>

      {/* EXPERTISE + CREDENTIALS */}
      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold">Areas of Expertise</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/85">
            {a.expertise.map((x) => (
              <li key={x} className="flex gap-2"><span className="text-primary">▸</span>{x}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold">Credentials & Experience</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/85">
            {a.credentials.map((x) => (
              <li key={x} className="flex gap-2"><span className="text-primary">✓</span>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOPICS */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Topics {a.name.split(" ")[0]} Covers</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {a.topics.map((t) => (
            <span key={t} className="rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="mt-14">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">Articles by {a.name} ({posts.length})</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">In-depth proxy guides, reviews and benchmarks authored by {a.name.split(" ")[0]}.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.slice(0, 24).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{p.category}</span>
              <h3 className="mt-2 text-base font-bold leading-snug group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.datePublished}</span>
                <span>·</span>
                <span>{p.readTime} read</span>
              </div>
            </Link>
          ))}
        </div>
        {posts.length === 0 && (
          <p className="mt-6 text-sm text-muted-foreground">No articles yet — check back soon.</p>
        )}
      </section>

      {/* EDITORIAL POLICY */}
      <section className="mt-14 rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="text-xl font-bold">Editorial standards</h2>
        <p className="mt-3 text-sm text-foreground/80">
          Every article {a.name.split(" ")[0]} publishes on ToptierProxy.com is independently researched and reviewed before publication. We disclose affiliate relationships at the article level and never accept paid placement in editorial rankings. Read more about{" "}
          <Link to="/how-we-test" className="font-semibold text-primary underline">how we test</Link>,{" "}
          <Link to="/why-trust-us" className="font-semibold text-primary underline">why you can trust us</Link>, and our{" "}
          <Link to="/trust-score" className="font-semibold text-primary underline">Trust Score methodology</Link>.
        </p>
      </section>
    </PageShell>
  );
}
