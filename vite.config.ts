import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/[\\/]react(-dom)?[\\/]/.test(id) || id.includes("scheduler")) return "vendor";
            if (id.includes("@tanstack")) return "router";
            if (id.includes("fuse.js")) return "search";
            if (id.includes("lucide-react") || id.includes("clsx") || id.includes("tailwind-merge"))
              return "ui";
            return "deps";
          }
          // Heavy content datasets get their own chunks so they are fetched
          // only by the routes that actually need them.
          if (id.includes("/src/data/blog.ts")) return "data-blog";
          if (id.includes("/src/data/blog-meta.ts")) return "data-blog-meta";
          if (id.includes("/src/data/blog-links.ts")) return "data-blog-links";
          if (id.includes("/src/data/city-deep.ts")) return "data-city-deep";
          if (id.includes("/src/data/city-content.ts")) return "data-city-content";
          if (id.includes("/src/data/countries.ts")) return "data-countries";
          if (id.includes("/src/data/guides.ts")) return "data-guides";
          if (id.includes("/src/data/use-cases.ts")) return "data-use-cases";
          if (id.includes("/src/data/providers.ts")) return "data-providers";
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
  },

  resolve: {
    alias: {
      "node:async_hooks": "/dev/null",
    },
  },
});
