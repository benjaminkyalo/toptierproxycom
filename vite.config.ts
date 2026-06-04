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
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["@tanstack/react-router", "@tanstack/react-query"],
          ui: ["lucide-react", "clsx", "tailwind-merge"],
          search: ["fuse.js"],
        }
      }
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
