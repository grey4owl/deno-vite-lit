import { defineConfig } from "npm:vite";

export default defineConfig({
  //-- 1: Make sure Vite knows how to resolve the Deno “npm:” specifier:
  resolve: {
    alias: [
      { find: /^npm:(.*)$/, replacement: "$1" },
    ],
  },
  //-- 2: Force Lit (and decorators) into Vite’s pre‑bundle step:
  optimizeDeps: {
    include: [
      "lit",
      "lit/decorators.js",
    ],
  },
  //-- 3: Ensure decorators stay in legacy form
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
      },
    },
  },
});
