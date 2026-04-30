import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — ToptierProxy.com" },
      { name: "description", content: "Terms of use governing your access to and use of ToptierProxy.com." },
    ],
  }),
  component: () => (
    <PageShell title="Terms of Use" breadcrumb={[{ to: "/", label: "Home" }, { to: "/terms", label: "Terms" }]}>
      <Prose>
        <p>Last updated: April 2026.</p>
        <h2>Acceptance</h2>
        <p>By using ToptierProxy.com you agree to these terms. If you do not agree, please do not use the site.</p>
        <h2>Editorial content</h2>
        <p>Our reviews and rankings reflect our editorial opinion based on hands-on testing. They are not investment, legal or technical advice.</p>
        <h2>Affiliate disclosure</h2>
        <p>We earn commissions on some outbound links to providers. See our <a href="/disclaimers">Disclaimers</a> page for details.</p>
        <h2>Liability</h2>
        <p>ToptierProxy.com is provided "as is" without warranties of any kind. We are not liable for your business decisions made on the basis of our content.</p>
      </Prose>
    </PageShell>
  ),
});
