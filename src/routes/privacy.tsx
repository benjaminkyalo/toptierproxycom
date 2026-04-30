import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ToptierProxy.com" },
      { name: "description", content: "ToptierProxy.com's privacy policy: what data we collect, how we use it, and your rights." },
    ],
  }),
  component: () => (
    <PageShell title="Privacy Policy" breadcrumb={[{ to: "/", label: "Home" }, { to: "/privacy", label: "Privacy" }]}>
      <Prose>
        <p>Last updated: April 2026.</p>
        <h2>What we collect</h2>
        <p>We collect anonymous analytics (pages visited, referrer, country, device class) via privacy-respecting analytics. We do not use third-party advertising trackers.</p>
        <h2>Cookies</h2>
        <p>We use a small number of first-party cookies for site functionality and affiliate attribution. You can disable cookies in your browser at any time.</p>
        <h2>Your rights</h2>
        <p>EU and UK residents have GDPR rights including access, deletion and portability. US residents in covered states have CCPA/CPRA rights. Email <a href="mailto:privacy@toptierproxy.com">privacy@toptierproxy.com</a> to exercise any of these.</p>
      </Prose>
    </PageShell>
  ),
});
