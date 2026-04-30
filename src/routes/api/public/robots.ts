import { createFileRoute } from "@tanstack/react-router";

const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://toptierproxy.com/sitemap.xml
`;

export const Route = createFileRoute("/api/public/robots")({
  server: {
    handlers: {
      GET: () => new Response(robots, {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
      }),
    },
  },
});
