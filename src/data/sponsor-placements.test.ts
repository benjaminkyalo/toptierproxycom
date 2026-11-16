import { test } from "node:test";
import assert from "node:assert/strict";
import { guides } from "./guides";
import { getBlogPost } from "./blog";
import { providers } from "./providers";

test("Floppydata appears as a separate sponsor on the three requested guides", () => {
  for (const slug of ["best-proxies-2026", "best-residential-proxies", "best-ad-verification-proxies"]) {
    assert.equal(guides.find((guide) => guide.slug === slug)?.sponsoredProvider, "floppydata", slug);
  }
});

test("the 2026 best-proxies blog lists NodeMaven before Floppydata without adding either to benchmark rankings", () => {
  assert.deepEqual(getBlogPost("best-proxies-2026-tested-ranked")?.sponsoredProviders, ["nodemaven", "floppydata"]);
  assert.equal(providers.some((provider) => provider.slug === "nodemaven" || provider.slug === "floppydata"), false);
});