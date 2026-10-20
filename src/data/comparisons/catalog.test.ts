import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { comparisonSummaries, getComparisonSummary, getComparisonProvider, canonicalComparisonPath } from "./catalog";
import { providers } from "../providers";
import type { ComparisonArticle } from "./types";

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

test("all 14 PROXYS.IO comparisons use the supplied price and minimum static rental", () => {
  const summaries = comparisonSummaries.filter(a => a.providerSlugs.includes("proxys-io"));
  assert.equal(summaries.length, 14);
  for (const summary of summaries) {
    const article: ComparisonArticle = JSON.parse(readFileSync(new URL(`./articles/${summary.slug}.json`, import.meta.url), "utf8"));
    const text = JSON.stringify(article);
    assert.ok(text.includes("$1.50/GB"), summary.slug);
    assert.ok(text.includes("Minimum static rental is one month"), summary.slug);
    assert.ok(text.includes("24 hours"), summary.slug);
    assert.equal(text.includes("residential GB packages from about $4 for 1 GB"), false, summary.slug);
    assert.equal(text.includes("daily rentals"), false, summary.slug);
    assert.equal(text.includes("not a large rotating pool"), false, summary.slug);
  }
});
test("each comparison has one main address; swapped-name addresses point to it", () => {
  for (const article of comparisonSummaries) {
    const main = `/vs/${article.slug}`;
    assert.equal(canonicalComparisonPath(article.slug), main);
    assert.equal(canonicalComparisonPath([...article.providerSlugs].reverse().join("-vs-")), main);
  }
  assert.equal(canonicalComparisonPath("rayobyte-vs-nimbleway"), "/vs/rayobyte-vs-nimbleway");
  assert.equal(canonicalComparisonPath("nimbleway-vs-rayobyte"), "/vs/rayobyte-vs-nimbleway");
});
