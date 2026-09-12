import { useCallback, useEffect, useState } from "react";

type IpInfo = {
  ip: string;
  country: string;
  city: string;
  region: string;
  org: string;
  timezone: string;
};

type State =
  | { s: "loading" }
  | { s: "ok"; data: IpInfo }
  | { s: "error"; message: string };

async function fetchIp(): Promise<IpInfo> {
  const res = await fetch("https://ipwho.is/", { cache: "no-store" });
  if (!res.ok) throw new Error(`Lookup service returned ${res.status}`);
  const j = (await res.json()) as Record<string, unknown>;
  if (j.success === false) throw new Error(String(j.message || "Lookup failed"));
  const conn = (j.connection || {}) as Record<string, unknown>;
  const tz = (j.timezone || {}) as Record<string, unknown>;
  return {
    ip: String(j.ip || ""),
    country: String(j.country || "unknown"),
    city: String(j.city || "unknown"),
    region: String(j.region || ""),
    org: String(conn.isp || conn.org || "unknown"),
    timezone: String(tz.id || "unknown"),
  };
}

export function WhatIsMyIp() {
  const [state, setState] = useState<State>({ s: "loading" });
  const [copied, setCopied] = useState(false);

  const load = useCallback(() => {
    setState({ s: "loading" });
    fetchIp()
      .then((data) => setState({ s: "ok", data }))
      .catch((e: unknown) =>
        setState({
          s: "error",
          message:
            e instanceof Error
              ? e.message
              : "The IP lookup service could not be reached from your network.",
        }),
      );
  }, []);

  useEffect(load, [load]);

  const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown";
  const browserLang = (navigator.languages || [navigator.language]).join(", ");
  const mismatch =
    state.s === "ok" &&
    state.data.timezone !== "unknown" &&
    browserTz !== "unknown" &&
    state.data.timezone !== browserTz;

  const copy = () => {
    if (state.s !== "ok") return;
    navigator.clipboard.writeText(state.data.ip).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => setCopied(false),
    );
  };

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-md border border-border bg-card p-6 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
          The IP websites see
        </div>
        {state.s === "loading" && (
          <div className="mt-2 text-2xl font-bold text-foreground/60">Checking...</div>
        )}
        {state.s === "error" && (
          <div className="mt-3 text-sm font-semibold text-destructive">
            Could not determine your IP: {state.message}. Nothing is shown rather than a guess -
            try again, or disable any blocker that stops third-party requests.
          </div>
        )}
        {state.s === "ok" && (
          <>
            <div className="mt-2 break-all font-mono text-3xl font-extrabold text-primary">
              {state.data.ip}
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={copy}
                className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
              >
                {copied ? "Copied" : "Copy IP"}
              </button>
              <button
                type="button"
                onClick={load}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Re-check
              </button>
            </div>
          </>
        )}
      </div>

      {state.s === "ok" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <div className="border-b border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
              From your IP address
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Country", state.data.country],
                  ["City", state.data.city],
                  ["Region", state.data.region || "unknown"],
                  ["ISP / organisation", state.data.org],
                  ["IP timezone", state.data.timezone],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-border last:border-0">
                    <td className="w-40 px-4 py-2 font-semibold">{k}</td>
                    <td className="break-all px-4 py-2 text-foreground/80">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <div className="border-b border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
              From your browser
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-border">
                  <td className="w-40 px-4 py-2 font-semibold">Browser timezone</td>
                  <td className="break-all px-4 py-2 text-foreground/80">{browserTz}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-2 font-semibold">Languages</td>
                  <td className="break-all px-4 py-2 text-foreground/80">{browserLang}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Verdict</td>
                  <td className="px-4 py-2 text-foreground/80">
                    {mismatch
                      ? "Timezone mismatch - your browser and your IP tell different stories."
                      : "Browser timezone matches your IP location."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
