export interface BlogExpansion {
  title?: string;
  description?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  dateModified?: string;
  omitLongForm?: boolean;
  sources?: { label: string; url: string }[];
  relatedLinks?: { label: string; url: string }[];
  /** Full replacement body for the post. 8-12 sections, 1,500-3,000 words total. */
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
  /** Replacement FAQ block (5-8 entries) used for FAQPage rich results. */
  faq?: { q: string; a: string }[];
  /** Optional updated read time, e.g. "12 min". */
  readTime?: string;
}
