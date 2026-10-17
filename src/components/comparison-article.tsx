import { PageShell, Prose } from "@/components/page-shell";
import { ProviderLogo } from "@/components/provider-logo";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { comparisonHeadingId, getComparisonProvider, relatedComparisons } from "@/data/comparisons/catalog";
import type { ComparisonArticle as Article } from "@/data/comparisons/types";

export function ComparisonArticle({ article }: { article: Article }) {
  const providers = article.providerSlugs.map(getComparisonProvider).filter((p) => p !== undefined);
  const headings = article.blocks.filter((b) => b.type === "heading" && b.level === 2);
  return (
    <PageShell title={article.title} intro={article.subtitle}
      breadcrumb={[{ to: "/", label: "Home" }, { to: "/compare", label: "Compare" }]}
      linkHub={false}>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <p className="text-sm text-muted-foreground">Updated October 17, 2026 · {Math.ceil(article.wordCount / 220)} min read</p>
        <div className="flex flex-wrap gap-6">
          {providers.map((p) => <div key={p.slug} className="flex items-center gap-2">
            <ProviderLogo provider={p} size="sm" eager />
            <Button asChild variant="outline"><a href={p.visitUrl} target="_blank" rel="sponsored nofollow noopener noreferrer">Visit {p.name}<ArrowUpRight /></a></Button>
          </div>)}
        </div>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">Published specifications and pricing from the supplied October 2026 brief, not a new hands-on benchmark. Confirm current prices and terms before purchase.</p>
      {article.correctionNote && <p className="mb-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground">{article.correctionNote}</p>}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <article className="min-w-0">
          <Prose>
            {article.blocks.map((block, index) => {
              if (block.type === "heading") return block.level === 3
                ? <h3 key={index} id={comparisonHeadingId(block.text)} className="scroll-mt-40">{block.text}</h3>
                : <h2 key={index} id={comparisonHeadingId(block.text)} className="scroll-mt-40">{block.text}</h2>;
              if (block.type === "listItem") return <ul key={index}><li>{block.text}</li></ul>;
              if (block.type === "table") {
                const [header, ...rows] = block.rows;
                return <div key={index} className="mt-6 overflow-x-auto rounded-md border border-border">
                  <table className="w-full min-w-[620px] table-fixed text-sm">
                    <thead className="bg-muted"><tr>{(header ?? []).map((cell, i) => <th key={i} scope="col" className={`px-4 py-3 text-left ${i === 0 ? "w-1/4" : ""}`}>{cell || "Feature"}</th>)}</tr></thead>
                    <tbody className="divide-y divide-border">{rows.map((row, j) => <tr key={j}>{row.map((cell, i) => i === 0
                      ? <th key={i} scope="row" className="px-4 py-3 text-left align-top font-semibold">{cell}</th>
                      : <td key={i} className="break-words px-4 py-3 align-top">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>;
              }
              return <p key={index} className={block.text === article.quickVerdict ? "tt-speakable text-lg font-medium" : undefined}>{block.text}</p>;
            })}
            <h2 id="faq" className="scroll-mt-40">Frequently asked questions</h2>
            {article.faq.map((faq) => <div key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}
            <h2 id="sources" className="scroll-mt-40">Sources and comparison methodology</h2>
            <p>{article.methodology}</p>
            <ul>{providers.map((p) => <li key={p.slug}><a href={p.visitUrl} target="_blank" rel="sponsored nofollow noopener noreferrer">{p.name} — current product details and pricing</a>{p.reviewUrl && <> · <a href={p.reviewUrl}>Read our {p.name} review</a></>}</li>)}</ul>
            <p>Some outbound links are affiliate links. We may receive a commission at no additional cost to you. <a href="/disclaimers">Affiliate disclosure</a>.</p>
            <h2>Put this comparison into practice</h2>
            <ul>
              <li><a href="/resources/cost-calculator">Compare cost per successful request</a> using workload size and retry costs.</li>
              <li><a href="/resources/what-is-my-ip">Check your proxy exit IP</a> before running your test.</li>
              <li><a href="/resources/fingerprint-checker">Check browser fingerprint and WebRTC exposure</a> for account-based workflows.</li>
              <li><a href="/how-we-test">Read our testing methodology</a> or <a href="/contact">report an outdated detail</a>.</li>
            </ul>
          </Prose>
        </article>
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-40 border-l border-border pl-5">
            <h2 className="mb-4 text-sm font-bold">On this page</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">{headings.map((h, i) => h.type === "heading" && <li key={i}><a href={`#${comparisonHeadingId(h.text)}`} className="hover:text-primary">{h.text}</a></li>)}<li><a href="#faq" className="hover:text-primary">FAQs</a></li><li><a href="#sources" className="hover:text-primary">Sources and methodology</a></li></ul>
          </nav>
        </aside>
      </div>
      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-2xl font-bold">Related comparisons</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{relatedComparisons(article).map((a) => <a key={a.slug} href={`/vs/${a.slug}`} className="rounded-md border border-border bg-card p-4 text-sm font-semibold hover:border-primary hover:text-primary">{a.title}</a>)}</div>
        <a href="/compare#all-comparisons" className="mt-5 inline-block font-semibold text-primary underline">Browse all 105 comparisons</a>
      </section>
    </PageShell>
  );
}