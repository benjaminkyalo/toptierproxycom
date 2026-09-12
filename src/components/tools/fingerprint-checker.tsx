import { useEffect, useState } from "react";

type Row = { label: string; value: string };

function canvasHash(): string {
  try {
    const c = document.createElement("canvas");
    c.width = 240;
    c.height = 60;
    const ctx = c.getContext("2d");
    if (!ctx) return "unavailable";
    ctx.textBaseline = "top";
    ctx.font = "16px 'Arial'";
    ctx.fillStyle = "#f60";
    ctx.fillRect(0, 0, 120, 30);
    ctx.fillStyle = "#069";
    ctx.fillText("ToptierProxy fp 2026", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("ToptierProxy fp 2026", 4, 22);
    ctx.beginPath();
    ctx.arc(180, 30, 20, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    const data = c.toDataURL();
    let h1 = 0x811c9dc5;
    for (let i = 0; i < data.length; i++) {
      h1 ^= data.charCodeAt(i);
      h1 = Math.imul(h1, 0x01000193) >>> 0;
    }
    return h1.toString(16).padStart(8, "0");
  } catch {
    return "blocked";
  }
}

function webgl(): { vendor: string; renderer: string } {
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl") ||
      c.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return { vendor: "unavailable", renderer: "unavailable" };
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    if (!ext) {
      return {
        vendor: String(gl.getParameter(gl.VENDOR)),
        renderer: String(gl.getParameter(gl.RENDERER)),
      };
    }
    return {
      vendor: String(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)),
      renderer: String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)),
    };
  } catch {
    return { vendor: "unavailable", renderer: "unavailable" };
  }
}

const IPV4 = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;

function isPrivate(ip: string) {
  return (
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip) ||
    ip.startsWith("127.") ||
    ip.startsWith("169.254.")
  );
}

async function webrtcIps(): Promise<{ local: string[]; public: string[]; supported: boolean }> {
  const local = new Set<string>();
  const pub = new Set<string>();
  if (typeof RTCPeerConnection === "undefined") {
    return { local: [], public: [], supported: false };
  }
  return new Promise((resolve) => {
    let pc: RTCPeerConnection;
    try {
      pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });
    } catch {
      resolve({ local: [], public: [], supported: false });
      return;
    }
    const done = () => {
      try {
        pc.close();
      } catch {
        /* ignore */
      }
      resolve({ local: [...local], public: [...pub], supported: true });
    };
    const timer = setTimeout(done, 4000);
    pc.onicecandidate = (e) => {
      if (!e.candidate) {
        clearTimeout(timer);
        done();
        return;
      }
      const m = IPV4.exec(e.candidate.candidate);
      if (m) {
        const ip = m[1];
        if (isPrivate(ip)) local.add(ip);
        else pub.add(ip);
      }
    };
    try {
      pc.createDataChannel("tt");
      pc.createOffer().then((o) => pc.setLocalDescription(o)).catch(() => {
        clearTimeout(timer);
        done();
      });
    } catch {
      clearTimeout(timer);
      done();
    }
  });
}

export function FingerprintChecker() {
  const [rows, setRows] = useState<Row[]>([]);
  const [rtc, setRtc] = useState<{
    state: "loading" | "done" | "unsupported";
    local: string[];
    public: string[];
  }>({ state: "loading", local: [], public: [] });

  useEffect(() => {
    const gl = webgl();
    const nav = navigator as Navigator & { deviceMemory?: number };
    setRows([
      { label: "Canvas fingerprint hash", value: canvasHash() },
      { label: "WebGL vendor", value: gl.vendor },
      { label: "WebGL renderer", value: gl.renderer },
      { label: "Screen resolution", value: `${window.screen.width} x ${window.screen.height}` },
      { label: "Viewport", value: `${window.innerWidth} x ${window.innerHeight}` },
      { label: "Color depth", value: `${window.screen.colorDepth}-bit` },
      { label: "Device pixel ratio", value: String(window.devicePixelRatio) },
      { label: "Timezone", value: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown" },
      { label: "Languages", value: (navigator.languages || [navigator.language]).join(", ") },
      { label: "CPU cores", value: String(navigator.hardwareConcurrency || "unknown") },
      { label: "Device memory", value: nav.deviceMemory ? `${nav.deviceMemory} GB` : "not exposed" },
      { label: "Platform", value: navigator.platform || "unknown" },
      { label: "Cookies enabled", value: navigator.cookieEnabled ? "yes" : "no" },
      { label: "User-Agent", value: navigator.userAgent },
    ]);
    let alive = true;
    webrtcIps().then((r) => {
      if (!alive) return;
      setRtc({
        state: r.supported ? "done" : "unsupported",
        local: r.local,
        public: r.public,
      });
    });
    return () => {
      alive = false;
    };
  }, []);

  const leaked = rtc.state === "done" && (rtc.public.length > 0 || rtc.local.length > 0);

  return (
    <div className="mt-6 space-y-6">
      <div
        className={`rounded-md border p-6 ${
          rtc.state === "done"
            ? leaked
              ? "border-destructive bg-destructive/10"
              : "border-primary bg-primary/10"
            : "border-border bg-card"
        }`}
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
          WebRTC IP leak test
        </div>
        {rtc.state === "loading" && (
          <div className="mt-2 text-lg font-bold">Testing your connection...</div>
        )}
        {rtc.state === "unsupported" && (
          <div className="mt-2 text-lg font-bold">
            WebRTC is disabled or unavailable in this browser - nothing can leak through it.
          </div>
        )}
        {rtc.state === "done" && (
          <>
            <div className="mt-2 text-2xl font-extrabold">
              {leaked ? "Leak detected" : "No leak detected"}
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              {leaked
                ? "WebRTC exposed the addresses below. Any site running a few lines of JavaScript can read them, even while your page requests go through a proxy."
                : "WebRTC returned no usable IP addresses to this page. Your proxy or VPN is not being bypassed through this channel."}
            </p>
            {rtc.public.length > 0 && (
              <p className="mt-3 text-sm">
                <span className="font-semibold">Public IPs exposed:</span>{" "}
                <span className="font-mono">{rtc.public.join(", ")}</span>
              </p>
            )}
            {rtc.local.length > 0 && (
              <p className="mt-1 text-sm">
                <span className="font-semibold">Local network IPs exposed:</span>{" "}
                <span className="font-mono">{rtc.local.join(", ")}</span>
              </p>
            )}
          </>
        )}
      </div>

      <div className="overflow-hidden rounded-md border border-border bg-card">
        <table className="w-full text-sm">
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td className="px-4 py-3 text-foreground/60">Reading your browser...</td>
              </tr>
            )}
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-border last:border-0">
                <td className="w-56 px-4 py-3 font-semibold text-foreground">{r.label}</td>
                <td className="break-all px-4 py-3 font-mono text-xs text-foreground/80">
                  {r.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-foreground/60">
        Nothing on this page is sent to our servers. Every value is read in your browser and
        discarded when you leave.
      </p>
    </div>
  );
}
