import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

export function NetNutAlert() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="mb-6 flex items-start gap-3 rounded-md bg-green-500 px-5 py-4 text-black shadow-lg">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="flex-1 text-sm font-semibold">
        Oops! NetNut is currently under investigation - keep coming back for updates.
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss"
        className="shrink-0 rounded p-0.5 hover:bg-black/10"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
