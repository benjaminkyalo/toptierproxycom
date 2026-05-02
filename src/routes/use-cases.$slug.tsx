import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/page-shell";
import { ProviderBadge } from "@/components/provider-logo";
import { LongFormSection } from "@/components/long-form";
import { getUseCase, useCases } from "@/data/use-cases";
import { providers } from "@/data/providers";

export const Route = createFileRoute("/use-cases/$slug")({
  loader: ({ params }) => {
    const useCase = getUseCase(params.slug);
    if (!useCase) throw notFound();
    return { useCase };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { useCase } = loaderData;
    return {
      meta: [
        { title: `${useCase.metaTitle} | ToptierProxy.com` },
        { name: "description", content: useCase.metaDescription },
        { name: "keywords", content: useCase.primaryKeywords.join(", ") },
        { property: "og:title", content: useCase.metaTitle },
        { property: "og:description", content: useCase.metaDescription },
        { property: "og:type", content: "article" },
      ],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: useCase.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }],
    };
  },
  notFoundComponent: () => <PageShell title="Not found"><Link to="/use-cases" className="text-primary underline">All use cases</Link></PageShell>,
  errorComponent: ({ error }) => <PageShell title="Error"><p>{error.message}</p></PageShell>,
  component: UseCasePage,
});

function UseCasePage() {
  const { useCase } = Route.useLoaderData();
  const ranked = useCase.bestProviders.map((s) => providers.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const related = useCases.filter((u) => u.slug !== useCase.slug).slice(0, 4);
  return (
    <PageShell title={useCase.title} intro={useCase.intro} breadcrumb={[{ to: "/", label: "Home" }, { to: "/use-cases", label: "Use Cases" }]}>
      <Prose><p>{useCase.intro}</p><h2>Why this matters</h2><ul>{useCase.whyMatters.map((w) => <li key={w}>{w}</li>)}</ul></Prose>

      <h2 className="mt-10 text-2xl font-bold">Top providers for {useCase.title.replace(/^Best Proxies for /, "")}</h2>
      <ol className="mt-4 space-y-3">
        {ranked.map((p, i) => (
          <li key={p.slug} className="flex items-center gap-4 rounded-md border border-border bg-card p-4 shadow-card">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
            <ProviderBadge provider={p} />
            <span className="ml-auto text-sm text-muted-foreground hidden md:inline">{p.shortDescription}</span>
            <Link to="/reviews/$slug" params={{ slug: p.slug }} className="rounded bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">Review</Link>
          </li>
        ))}
      </ol>

      <Prose>
        <h2>Key challenges</h2><ul>{useCase.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
        {useCase.body.map((s) => (<div key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}{s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}</div>))}
        <h2>Frequently asked questions</h2>
        {useCase.faqs.map((f) => (<div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>))}
      </Prose>

      <LongFormSection variant="use-case" topic={useCase.title.replace(/^Best Proxies for /, "")} />

      <div className="mt-12 border-t border-border pt-8">
        <h3 className="text-xl font-bold">Related use cases</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {related.map((u) => (
            <Link key={u.slug} to="/use-cases/$slug" params={{ slug: u.slug }} className="rounded-md border border-border bg-card p-4 hover:border-primary">
              <div className="font-bold">{u.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
