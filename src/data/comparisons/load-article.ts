import type { ComparisonArticle } from "./types";

const articles = import.meta.glob<ComparisonArticle>("./articles/*.json", { import: "default" });

export async function loadComparisonArticle(slug: string): Promise<ComparisonArticle | undefined> {
  const load = articles[`./articles/${slug}.json`];
  return load ? load() : undefined;
}