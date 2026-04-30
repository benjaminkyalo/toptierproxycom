import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ToptierProxy.com — Editorial & Partnership Inquiries" },
      { name: "description", content: "Get in touch with the ToptierProxy.com editorial team for tips, corrections, partnership inquiries or general feedback." },
      { property: "og:title", content: "Contact ToptierProxy.com" },
      { property: "og:description", content: "Reach our editorial and partnerships teams." },
    ],
  }),
  component: () => (
    <PageShell title="Contact us" intro="Reach our editorial team for tips, corrections, partnership inquiries or general feedback." breadcrumb={[{ to: "/", label: "Home" }, { to: "/contact", label: "Contact" }]}>
      <Prose>
        <h2>Editorial</h2>
        <p>Spotted a factual error or have a tip? Email <a href="mailto:editor@toptierproxy.com">editor@toptierproxy.com</a> and we'll respond within 48 hours.</p>
        <h2>Partnerships</h2>
        <p>Provider partnerships, advertising and content syndication: <a href="mailto:partners@toptierproxy.com">partners@toptierproxy.com</a></p>
        <h2>Press</h2>
        <p>Journalists and analysts: <a href="mailto:press@toptierproxy.com">press@toptierproxy.com</a></p>
      </Prose>
    </PageShell>
  ),
});
