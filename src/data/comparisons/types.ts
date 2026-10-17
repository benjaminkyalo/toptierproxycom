export type ComparisonBlock =
  | { type: "heading"; text: string; level: number }
  | { type: "paragraph"; text: string }
  | { type: "listItem"; text: string }
  | { type: "table"; rows: string[][] };

export interface ComparisonSummary {
  slug: string;
  pdfSlug: string;
  providerSlugs: string[];
  title: string;
  subtitle: string;
  seoTitle: string;
  description: string;
  keywords: string;
  quickVerdict: string;
  pageStart: number;
  pageEnd: number;
  wordCount: number;
}

export interface ComparisonArticle extends ComparisonSummary {
  blocks: ComparisonBlock[];
  faq: { q: string; a: string }[];
  methodology: string;
  dateModified: string;
  correctionNote?: string;
}