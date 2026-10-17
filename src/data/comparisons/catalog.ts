import manifest from "./manifest.json";
import { getProvider } from "../providers";
import type { ComparisonSummary } from "./types";

export const comparisonSummaries: ComparisonSummary[] = manifest;

export function getComparisonSummary(slug: string): ComparisonSummary | undefined {
  const parts = slug.split("-vs-");
  if (parts.length !== 2 || parts[0] === parts[1]) return undefined;
  return comparisonSummaries.find((entry) =>
    entry.providerSlugs.includes(parts[0]) && entry.providerSlugs.includes(parts[1]),
  );
}

const extraProviders: Record<string, { name: string; visitUrl: string; reviewUrl?: string }> = {
  floppydata: { name: "Floppydata", visitUrl: "https://floppydata.com/" },
  nodemaven: { name: "NodeMaven", visitUrl: "https://nodemaven.com/" },
  "proxys-io": { name: "PROXYS.IO", visitUrl: "https://proxys.io/?refid=389543", reviewUrl: "/proxys-io-review" },
};

export function getComparisonProvider(slug: string) {
  const provider = getProvider(slug);
  if (provider) return { slug, name: provider.name, visitUrl: provider.visitUrl, reviewUrl: `/reviews/${slug}` };
  const extra = extraProviders[slug];
  return extra ? { slug, ...extra } : undefined;
}

export function comparisonHeadingId(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function relatedComparisons(article: ComparisonSummary) {
  return comparisonSummaries.filter((entry) => entry.slug !== article.slug &&
    entry.providerSlugs.some((slug) => article.providerSlugs.includes(slug))).slice(0, 8);
}