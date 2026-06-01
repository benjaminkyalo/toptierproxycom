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
  },
  resolve: {
    alias: {
      "node:async_hooks": "/dev/null",
    },
  },
});
