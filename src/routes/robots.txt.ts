import { createFileRoute } from "@tanstack/react-router";

const robots = `User-agent: *\nAllow: /\n\nSitemap: https://toptierproxy.com/sitemap.xml\n`;

export const Route = createFileRoute("/robots/txt")({
  server: {
    handlers: {
      GET: () => new Response(robots, {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" },
      }),
    },
  },
});
