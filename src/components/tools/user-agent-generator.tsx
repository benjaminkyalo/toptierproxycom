import { useState } from "react";

type Profile = {
  id: string;
  label: string;
  strings: string[];
};

// Real, current strings (Chrome 140 / Firefox 142 / Safari 18.x era, 2026).
const PROFILES: Profile[] = [
  {
    id: "chrome-win",
    label: "Chrome on Windows",
    strings: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
    ],
  },
  {
    id: "chrome-mac",
    label: "Chrome on macOS",
    strings: [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
    ],
  },
  {
    id: "chrome-linux",
    label: "Chrome on Linux",
    strings: [
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    ],
  },
  {
    id: "firefox-win",
    label: "Firefox on Windows",
    strings: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:141.0) Gecko/20100101 Firefox/141.0",
    ],
  },
  {
    id: "firefox-mac",
    label: "Firefox on macOS",
    strings: [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:142.0) Gecko/20100101 Firefox/142.0",
    ],
  },
  {
    id: "safari-mac",
    label: "Safari on macOS",
    strings: [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15",
    ],
  },
  {
    id: "edge-win",
    label: "Edge on Windows",
    strings: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0",
    ],
  },
  {
    id: "chrome-android",
    label: "Chrome on Android",
    strings: [
      "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
    ],
  },
  {
    id: "safari-ios",
    label: "Safari on iOS",
    strings: [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (iPad; CPU OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1",
    ],
  },
];

function pick(list: string[], avoid?: string) {
  if (list.length === 1) return list[0];
  let next = list[Math.floor(Math.random() * list.length)];
  let guard = 0;
  while (next === avoid && guard++ < 5) {
    next = list[Math.floor(Math.random() * list.length)];
  }
  return next;
}

export function UserAgentGenerator() {
  const [profileId, setProfileId] = useState(PROFILES[0].id);
  const profile = PROFILES.find((p) => p.id === profileId) ?? PROFILES[0];
  const [current, setCurrent] = useState(profile.strings[0]);
  const [copied, setCopied] = useState<"one" | null>(null);

  const changeProfile = (id: string) => {
    const p = PROFILES.find((x) => x.id === id) ?? PROFILES[0];
    setProfileId(id);
    setCurrent(p.strings[0]);
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied("one");
        setTimeout(() => setCopied(null), 1500);
      },
      () => setCopied(null),
    );
  };

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-md border border-border bg-card p-6">
        <label className="block">
          <span className="text-sm font-semibold text-foreground">Browser and platform</span>
          <select
            value={profileId}
            onChange={(e) => changeProfile(e.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          >
            {PROFILES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-5 rounded-md bg-muted p-4">
          <code className="block break-all font-mono text-xs text-foreground">{current}</code>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => copy(current)}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            {copied === "one" ? "Copied" : "Copy to clipboard"}
          </button>
          <button
            type="button"
            onClick={() => setCurrent(pick(profile.strings, current))}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            Generate another
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-border bg-card">
        <div className="border-b border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
          All strings in this set
        </div>
        <ul className="divide-y divide-border">
          {PROFILES.flatMap((p) =>
            p.strings.map((s) => (
              <li key={s} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center">
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-foreground/60">{p.label}</div>
                  <code className="block break-all font-mono text-xs text-foreground/80">{s}</code>
                </div>
                <button
                  type="button"
                  onClick={() => copy(s)}
                  className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-semibold hover:bg-muted"
                >
                  Copy
                </button>
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  );
}
