import { createFileRoute } from "@tanstack/react-router";
import { providers } from "@/data/providers";

export const Route = createFileRoute("/go/$slug")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const p = providers.find((p) => p.slug === params.slug);
        if (!p) return new Response("Not found", { status: 404 });
        return new Response(null, {
          status: 302,
          headers: {
            Location: p.visitUrl,
            "Cache-Control": "no-store",
            "Referrer-Policy": "no-referrer",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});
