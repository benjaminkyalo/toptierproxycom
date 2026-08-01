import { useEffect, useState } from "react";
import { X } from "lucide-react";

const THORDATA_URL = "https://dashboard.thordata.com/register?invitation_code=FGOCHJZN";
const STORAGE_KEY = "thordata-popup-dismissed";

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const t = window.setTimeout(() => setOpen(true), 7000);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] w-[min(20rem,calc(100vw-2rem))] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative overflow-hidden rounded-xl bg-[#d92121] px-6 pb-6 pt-8 text-center shadow-2xl">
        {/* Sale ribbon */}
        <div className="absolute right-0 top-3">
          <div className="relative bg-[#f5b731] py-1 pl-4 pr-3 text-xs font-bold text-[#7a4a00] shadow">
            10% off
          </div>
        </div>

        <button
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute left-2 top-2 rounded p-1 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <a href={THORDATA_URL} target="_blank" rel="sponsored nofollow noopener" className="block">
          <div className="text-4xl font-bold leading-none tracking-tight text-white">thordata</div>

          <div className="mt-4 flex items-end justify-center gap-2">
            <span className="relative text-lg font-semibold text-white/70">
              $1.05
              <span className="absolute left-0 top-1/2 h-[2px] w-full -rotate-12 bg-white/70" />
            </span>
            <span className="text-2xl font-bold text-white">$</span>
            <span className="text-4xl font-bold leading-none text-white">0.65</span>
          </div>

          <span className="mt-5 inline-flex items-center justify-center rounded-full bg-[#1db954] px-7 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#17a44a]">
            BUY NOW
          </span>

          <p className="mt-4 text-xs font-medium text-white/90">*while offer lasts</p>
        </a>
      </div>
    </div>
  );
}
