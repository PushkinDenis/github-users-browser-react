import module, { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/github-users-browser-react/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: `[name]__[local]__[hash:base64:2]`,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@atoms": "/src/components/atoms/index.ts",
      "@organisms": "/src/components/organisms/index.ts",
    },
  },
});
