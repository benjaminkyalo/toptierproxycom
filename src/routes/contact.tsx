import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { Mail, Handshake, Star, Newspaper, MessageCircle, Linkedin, ExternalLink, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ToptierProxy.com — Talk to Our Proxy Experts" },
      { name: "description", content: "Get in touch with the ToptierProxy.com team. Questions about proxy providers, reviews, partnerships or advertising? We respond within 24 hours. hello@toptierproxy.com" },
      { name: "keywords", content: "contact toptierproxy, proxy expert help, best proxy provider question, proxy review contact, proxy partnership, proxy advertising, contact proxy review site" },
      { property: "og:title", content: "Contact ToptierProxy.com — Talk to Our Proxy Experts" },
      { property: "og:description", content: "Reach the ToptierProxy team for proxy buying advice, partnerships, reviews and press. Real humans reply within 24 hours." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact ToptierProxy.com",
          description: "Contact the ToptierProxy.com team for proxy review questions, partnerships, press inquiries and general support.",
          url: "https://www.toptierproxy.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "ToptierProxy.com",
            url: "https://www.toptierproxy.com",
            email: "hello@toptierproxy.com",
            contactPoint: [
              { "@type": "ContactPoint", email: "hello@toptierproxy.com", contactType: "customer support", availableLanguage: "English" },
              { "@type": "ContactPoint", email: "partners@toptierproxy.com", contactType: "sales", availableLanguage: "English" },
              { "@type": "ContactPoint", email: "reviews@toptierproxy.com", contactType: "technical support", availableLanguage: "English" },
              { "@type": "ContactPoint", email: "editor@toptierproxy.com", contactType: "public relations", availableLanguage: "English" },
            ],
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
  email: string;
  button: string;
};

const cards: Card[] = [
  { icon: <Mail className="h-5 w-5" />, title: "General Inquiries", description: "Questions about proxy providers, our reviews or how we test.", email: "hello@toptierproxy.com", button: "Send Email" },
  { icon: <Handshake className="h-5 w-5" />, title: "Partnerships & Affiliates", description: "Proxy providers, affiliate programs and commercial partnerships.", email: "partners@toptierproxy.com", button: "Partner With Us" },
  { icon: <Star className="h-5 w-5" />, title: "Provider Reviews", description: "Request a review, update existing review data or dispute a rating.", email: "reviews@toptierproxy.com", button: "Contact Reviews Team" },
  { icon: <Newspaper className="h-5 w-5" />, title: "Press & Media", description: "Journalists, podcasters and content creators covering the proxy industry.", email: "editor@toptierproxy.com", button: "Press Inquiries" },
  { icon: <MessageCircle className="h-5 w-5" />, title: "General Contact", description: "Any other questions or feedback about ToptierProxy.com.", email: "contact@toptierproxy.com", button: "Get In Touch" },
];

const faqs = [
  { q: "How do I request a proxy provider review?", a: "Email reviews@toptierproxy.com with the provider name, their website and why you think we should cover them. We review all requests and publish new reviews monthly." },
  { q: "I'm a proxy provider — how do I get listed on ToptierProxy.com?", a: "We independently test and list providers based on merit — no payment required. Email partners@toptierproxy.com and we will evaluate your network for inclusion in our next review cycle." },
  { q: "Can I advertise on ToptierProxy.com?", a: "We do not accept paid placements in our rankings. For sponsorship and advertising inquiries, email partners@toptierproxy.com." },
  { q: "I found incorrect information in a review — how do I report it?", a: "Email reviews@toptierproxy.com with the specific page URL and the correction. We update reviews within 48 hours of receiving verified information." },
  { q: "Are you open to guest posts or content contributions?", a: "Yes — we accept high-quality contributions from proxy and web scraping experts. Email editor@toptierproxy.com with your topic idea and a brief writing sample." },
];

function ContactPage() {
  return (
    <PageShell
      title="Get in Touch With Our Team"
      intro="Have a question about a proxy provider? Want to suggest a review? Reaching out about a partnership or press inquiry? We read every email and respond within 24 hours — usually much faster."
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/contact", label: "Contact" }]}
    >
      {/* Contact cards */}
      <section aria-labelledby="contact-cards">
        <h2 id="contact-cards" className="sr-only">Contact channels</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.email} className="flex flex-col rounded-md border border-border bg-card p-5 shadow-card transition-shadow hover:border-primary hover:shadow-card-hover">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {c.icon}
                </span>
                <h3 className="text-base font-bold">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.description}</p>
              <a href={`mailto:${c.email}`} className="mt-3 break-all text-sm font-semibold text-primary hover:underline">{c.email}</a>
              <a
                href={`mailto:${c.email}`}
                className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {c.button}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Response time banner */}
      <section className="mt-10 flex items-start gap-3 rounded-md border border-primary/30 bg-primary/5 p-5">
        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div className="text-sm">
          <p className="font-semibold text-foreground">We typically respond within 24 hours.</p>
          <p className="mt-1 text-muted-foreground">
            For urgent proxy questions, email{" "}
            <a href="mailto:hello@toptierproxy.com" className="font-semibold text-primary hover:underline">hello@toptierproxy.com</a>{" "}
            and mention <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-bold">URGENT</code> in the subject line.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Frequently asked contact questions</h2>
        <div className="mt-6 divide-y divide-border rounded-md border border-border bg-card shadow-card">
          {faqs.map((f) => (
            <div key={f.q} className="p-5">
              <h3 className="text-base font-bold text-foreground">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">About ToptierProxy.com</h2>
        <Prose>
          <p>
            ToptierProxy.com is an independent proxy provider review and comparison platform. We test
            residential, datacenter, ISP, mobile and scraping API providers hands-on using real paid
            accounts. Our reviews are based on actual benchmark data — success rates on Cloudflare,
            DataDome and PerimeterX-protected targets, pool size, pricing and dashboard UX. We do not
            accept payment for rankings. Every score on our site is calculated by our transparent{" "}
            <Link to="/trust-score">Trust Score methodology</Link>. Learn more about{" "}
            <Link to="/how-we-test">how we test</Link>,{" "}
            <Link to="/why-trust-us">why to trust us</Link>, or browse all{" "}
            <Link to="/reviews">provider reviews</Link> and our{" "}
            <Link to="/compare">side-by-side comparison</Link>.
          </p>
        </Prose>
      </section>

      {/* Social / professional */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Follow &amp; connect</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="https://www.linkedin.com/company/toptierproxy" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold hover:border-primary">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://www.producthunt.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold hover:border-primary">
            <ExternalLink className="h-4 w-4" /> Product Hunt
          </a>
          <a href="mailto:hello@toptierproxy.com" className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-semibold hover:border-primary">
            <Mail className="h-4 w-4" /> hello@toptierproxy.com
          </a>
        </div>
      </section>
    </PageShell>
  );
}
