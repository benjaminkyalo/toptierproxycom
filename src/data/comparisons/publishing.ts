import { getComparisonProvider, comparisonHeadingId, relatedComparisons } from "./catalog";
import type { ComparisonArticle } from "./types";

const SITE = "https://www.toptierproxy.com";
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

export function comparisonSchema(article: ComparisonArticle, path = `/vs/${article.slug}`) {
  const url = `${SITE}${path}`;
  return [
    {
      "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`,
      headline: article.title, description: article.description, dateModified: article.dateModified,
      mainEntityOfPage: url, inLanguage: "en", wordCount: article.wordCount,
      author: { "@type": "Organization", name: "ToptierProxy Editorial Team" },
      publisher: { "@type": "Organization", name: "ToptierProxy.com", url: SITE },
      citation: article.providerSlugs.map((slug) => getComparisonProvider(slug)?.visitUrl).filter(Boolean),
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: article.faq.map((faq) => ({ "@type": "Question", name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE}/compare` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "WebPage", url, name: article.title,
      description: article.description, dateModified: article.dateModified,
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".tt-speakable"] },
    },
  ];
}

export function comparisonHtml(article: ComparisonArticle) {
  const body = article.blocks.map((block) => {
    if (block.type === "heading") {
      const tag = block.level === 3 ? "h3" : "h2";
      return `<${tag} id="${comparisonHeadingId(block.text)}">${escapeHtml(block.text)}</${tag}>`;
    }
    if (block.type === "table") {
      const [header, ...rows] = block.rows;
      return `<table><thead><tr>${(header ?? []).map((cell, i) => `<th scope="col">${escapeHtml(cell || (i === 0 ? "Feature" : ""))}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, i) => i === 0 ? `<th scope="row">${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    }
    if (block.type === "listItem") return `<ul><li>${escapeHtml(block.text)}</li></ul>`;
    return `<p>${escapeHtml(block.text)}</p>`;
  }).join("");
  const providers = article.providerSlugs.map(getComparisonProvider).filter((p) => p !== undefined);
  const providerLinks = providers.map((p) => `${p.reviewUrl ? `<a href="${p.reviewUrl}">${escapeHtml(p.name)} review</a> · ` : ""}<a href="${escapeHtml(p.visitUrl)}" rel="sponsored nofollow noopener" target="_blank">Visit ${escapeHtml(p.name)}</a>`).join(" · ");
  return `<article><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.subtitle)}</p><p>Updated October 17, 2026 · Provider-reported specifications</p><p class="tt-speakable">${escapeHtml(article.quickVerdict)}</p>${body}<h2>Frequently asked questions</h2>${article.faq.map((f) => `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`).join("")}<h2>Sources and comparison methodology</h2><p>${escapeHtml(article.methodology)}</p>${article.correctionNote ? `<p>${escapeHtml(article.correctionNote)}</p>` : ""}<p>${providerLinks}</p><h2>Put this comparison into practice</h2><ul><li><a href="/resources/cost-calculator">Calculate cost per successful request</a></li><li><a href="/resources/what-is-my-ip">Check your proxy exit IP</a></li><li><a href="/resources/fingerprint-checker">Check your browser fingerprint</a></li><li><a href="/how-we-test">Read our testing methodology</a></li><li><a href="/contact">Report a correction</a></li></ul><h2>Related comparisons</h2><ul>${relatedComparisons(article).map((a) => `<li><a href="/vs/${a.slug}">${escapeHtml(a.title)}</a></li>`).join("")}</ul></article>`;
}