import { test } from "node:test";
import assert from "node:assert/strict";
import { comparisonSummaries, getComparisonSummary, getComparisonProvider } from "./catalog";
import { providers } from "../providers";

test("all 105 supplied comparisons resolve in both provider orders", () => {
  assert.equal(comparisonSummaries.length, 105);
  assert.equal(new Set(comparisonSummaries.map(a => a.slug)).size, 105);
  for (const article of comparisonSummaries) {
    assert.equal(getComparisonSummary(article.slug)?.slug, article.slug);
    assert.equal(getComparisonSummary([...article.providerSlugs].reverse().join("-vs-"))?.slug, article.slug);
  }
});

test("invalid and self comparisons do not resolve", () => {
  assert.equal(getComparisonSummary("iproyal-vs-iproyal"), undefined);
  assert.equal(getComparisonSummary("iproyal-vs-missing"), undefined);
  assert.equal(getComparisonSummary("iproyal-vs-webshare-vs-soax"), undefined);
});

test("PROXYS.IO keeps the supplied affiliate destination without joining the benchmark registry", () => {
  assert.equal(getComparisonProvider("proxys-io")?.visitUrl, "https://proxys.io/?refid=389543");
  assert.equal(getComparisonProvider("proxys-io")?.reviewUrl, "/proxys-io-review");
  assert.equal(providers.some(p => p.slug === "proxys-io"), false);
});