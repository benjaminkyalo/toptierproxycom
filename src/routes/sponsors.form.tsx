import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { PromoBanner } from "@/components/promo-banner";
import { SiteFooter } from "@/components/site-footer";
import { getSponsorPlan } from "@/data/sponsor-plans";

type Search = { plan?: string };

export const Route = createFileRoute("/sponsors/form")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => {
    const title = "Sponsor Information — ToptierProxy Sponsorship";
    const description =
      "Provide your sponsor details: product name, description, website, logo and start date. You will be taken to the payment page after submission.";
    return {
      meta: [
        { title: `${title} | ToptierProxy.com` },
        { name: "description", content: description },
        { name: "robots", content: "noindex, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: "https://www.toptierproxy.com/sponsors/form" }],
    };
  },
  component: SponsorFormPage,
});

const labelCls = "block text-sm font-bold text-foreground";
const inputCls =
  "mt-2 h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Req() {
  return <span className="text-destructive"> *</span>;
}

function SponsorFormPage() {
  const { plan: planId } = Route.useSearch();
  const plan = getSponsorPlan(planId);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState("");
  const [start, setStart] = useState("");

  function fetchFromSite() {
    if (!website) return;
    try {
      const host = new URL(website.startsWith("http") ? website : `https://${website}`).hostname.replace(
        /^www\./,
        "",
      );
      const brand = host.split(".")[0];
      if (!name) setName(brand.charAt(0).toUpperCase() + brand.slice(1));
      if (!logo) setLogo(`https://${host}/favicon.ico`);
      if (!description) setDescription(`${host} — proxy and data collection tools.`);
    } catch {
      /* ignore invalid URL */
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate({ to: "/sponsors/checkout", search: { plan: plan.id } });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <SiteHeader />
        <PromoBanner />
      </div>

      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Sponsor Information
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Provide your sponsor details below. You will be taken to the payment page after
            submission. Your information is automatically activated once the payment succeeds.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 space-y-6 rounded-xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <div>
              <label className={labelCls} htmlFor="sponsor-name">
                Sponsor / Product Name
                <Req />
              </label>
              <input
                id="sponsor-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. My Awesome Product"
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="sponsor-desc">
                Description
              </label>
              <textarea
                id="sponsor-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                maxLength={90}
                placeholder="A short description shown next to your logo"
                className={`${inputCls} h-auto resize-y py-2.5`}
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="sponsor-url">
                Website URL
                <Req />
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="sponsor-url"
                  required
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://example.com"
                  className={`${inputCls} mt-0 flex-1`}
                />
                <button
                  type="button"
                  onClick={fetchFromSite}
                  className="h-11 shrink-0 rounded-md border border-border bg-card px-4 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Fetch
                </button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Click “Fetch” to auto-fill the name, description and logo from the website.
              </p>
            </div>

            <div>
              <label className={labelCls} htmlFor="sponsor-logo">
                Logo Image URL
                <Req />
              </label>
              <input
                id="sponsor-logo"
                required
                type="url"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                placeholder="https://example.com/logo.png"
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="sponsor-start">
                Sponsorship Period ({plan.period})
                <Req />
              </label>
              <input
                id="sponsor-start"
                required
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Select a start date"
                className={inputCls}
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-blue-hover"
            >
              Submit &amp; Checkout
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
