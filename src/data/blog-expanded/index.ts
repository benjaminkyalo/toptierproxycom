import type { BlogExpansion } from "./types";
import { batch as b01 } from "./batch-01";
import { batch as b02 } from "./batch-02";
import { batch as b03 } from "./batch-03";
import { batch as b04 } from "./batch-04";
import { batch as b05 } from "./batch-05";
import { batch as b06 } from "./batch-06";
import { batch as b07 } from "./batch-07";
import { batch as b08 } from "./batch-08";
import { batch as b09 } from "./batch-09";
import { batch as b10 } from "./batch-10";
import { batch as b11 } from "./batch-11";
import { batch as b12 } from "./batch-12";

export type { BlogExpansion };

/**
 * Deep-content expansions for previously thin blog posts. Keyed by post slug.
 * Merged over the base post in src/data/blog.ts so the source entries stay
 * readable while article bodies live in per-batch modules.
 */
export const expandedBodies: Record<string, BlogExpansion> = {
  ...b01,
  ...b02,
  ...b03,
  ...b04,
  ...b05,
  ...b06,
  ...b07,
  ...b08,
  ...b09,
  ...b10,
  ...b11,
  ...b12,
};
