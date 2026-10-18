import { test, expect } from "bun:test";
import { comparisonSummaries, getComparisonSummary, getComparisonProvider } from "./catalog";
import { providers } from "../providers";

test("all 105 supplied comparisons resolve in both provider orders", () => {
  expect(comparisonSummaries).toHaveLength(105);
  expect(new Set(comparisonSummaries.map(a => a.slug)).size).toBe(105);
  for (const article of comparisonSummaries) {
    expect(getComparisonSummary(article.slug)?.slug).toBe(article.slug);
    expect(getComparisonSummary([...article.providerSlugs].reverse().join("-vs-"))?.slug).toBe(article.slug);
  }
});

test("invalid and self comparisons do not resolve", () => {
  expect(getComparisonSummary("iproyal-vs-iproyal")).toBeUndefined();
  expect(getComparisonSummary("iproyal-vs-missing")).toBeUndefined();
  expect(getComparisonSummary("iproyal-vs-webshare-vs-soax")).toBeUndefined();
});

test("PROXYS.IO keeps the supplied affiliate destination without joining the benchmark registry", () => {
  expect(getComparisonProvider("proxys-io")?.visitUrl).toBe("https://proxys.io/?refid=389543");
  expect(getComparisonProvider("proxys-io")?.reviewUrl).toBe("/proxys-io-review");
  expect(providers.some(p => p.slug === "proxys-io")).toBe(false);
});