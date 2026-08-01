import { Sparkles, ArrowUpRight } from "lucide-react";

const THORDATA_URL = "https://dashboard.thordata.com/register?invitation_code=FGOCHJZN";

export function PromoBanner() {
  return (
    <a
      href={THORDATA_URL}
      target="_blank"
      rel="sponsored nofollow noopener"
      className="block bg-gradient-to-r from-[#0a1628] via-[#0f2847] to-[#0a1628] px-4 py-2.5 text-center text-sm text-white hover:opacity-95 transition-opacity"
    >
      <span className="inline-flex flex-wrap items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 shrink-0 text-white/70" />
        <span>
          Residential IP Pool Upgraded, Get{" "}
          <span className="inline-block rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-bold text-green-400">
            10% Extra Traffic
          </span>
          , from <span className="font-bold text-green-400">$0.65/GB</span>{" "}
          <span className="text-white/50 line-through">$1.05/GB</span>
        </span>
        <span className="ml-2 inline-flex items-center gap-1 font-bold text-[#ff3b3b]">
          Claim Offer <ArrowUpRight className="h-4 w-4" />
        </span>
      </span>
    </a>
  );
}
