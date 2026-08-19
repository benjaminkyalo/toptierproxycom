// Shared schema.org helpers for answer engines (Google AI Overviews, ChatGPT
// Search, Perplexity, Gemini, Alexa/Assistant voice answers).
//
// Two node types live here:
//   1. WebPage + speakable  — marks the short, quotable answer on a page so
//      voice/answer surfaces read the right sentence instead of guessing.
//   2. Dataset              — describes our hands-on benchmark tables as real
//      research data, which is the shape answer engines prefer to cite.
//
// Nothing here renders UI; it only emits JSON-LD.

const ORG = {
  "@type": "Organization",
  name: "ToptierProxy.com",
  url: "https://www.toptierproxy.com",
} as const;

/** Elements whose text is safe to read aloud as the page's answer. */
export const SPEAKABLE_SELECTORS = ["h1", ".tt-speakable"];

export function speakableSpec(selectors: string[] = SPEAKABLE_SELECTORS) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: selectors,
  };
}

/**
 * A WebPage node carrying `speakable`, so answer engines know which part of
 * the page is the concise answer to the query.
 */
export function speakablePage(opts: {
  url: string;
  name: string;
  description: string;
  dateModified?: string;
  selectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "ToptierProxy.com",
      url: "https://www.toptierproxy.com",
    },
    publisher: ORG,
    speakable: speakableSpec(opts.selectors),
  };
}

export interface MeasuredVariable {
  name: string;
  description?: string;
  unitText?: string;
  minValue?: number;
  maxValue?: number;
}

/**
 * A Dataset node describing a benchmark / comparison table on the page.
 * Answer engines quote tabular test data more than prose, and Dataset markup
 * is what tells them the numbers are first-party measurements.
 */
export function benchmarkDataset(opts: {
  url: string;
  name: string;
  description: string;
  variableMeasured: MeasuredVariable[];
  keywords?: string[];
  /** ISO 8601 interval, e.g. "2026-01-01/2026-08-01" */
  temporalCoverage?: string;
  dateModified?: string;
  measurementTechnique?: string;
  /** Number of rows in the table, surfaced as size metadata. */
  rowCount?: number;
  spatialCoverage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${opts.url}#dataset`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    creator: ORG,
    publisher: ORG,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.temporalCoverage ? { temporalCoverage: opts.temporalCoverage } : {}),
    ...(opts.spatialCoverage ? { spatialCoverage: opts.spatialCoverage } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    measurementTechnique:
      opts.measurementTechnique ??
      "Hands-on testing on paid provider accounts against live anti-bot protected targets (Cloudflare, DataDome, PerimeterX, Akamai), scored with the published ToptierProxy 225-criterion methodology.",
    variableMeasured: opts.variableMeasured.map((v) => ({
      "@type": "PropertyValue",
      name: v.name,
      ...(v.description ? { description: v.description } : {}),
      ...(v.unitText ? { unitText: v.unitText } : {}),
      ...(v.minValue !== undefined ? { minValue: v.minValue } : {}),
      ...(v.maxValue !== undefined ? { maxValue: v.maxValue } : {}),
    })),
    ...(opts.rowCount ? { size: `${opts.rowCount} rows` } : {}),
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "text/html",
        contentUrl: opts.url,
      },
    ],
    citation: "https://www.toptierproxy.com/how-we-test",
    includedInDataCatalog: {
      "@type": "DataCatalog",
      name: "ToptierProxy Proxy & Scraping Benchmarks",
      url: "https://www.toptierproxy.com/how-we-test",
    },
    isBasedOn: "https://www.toptierproxy.com/trust-score",
  };
}
