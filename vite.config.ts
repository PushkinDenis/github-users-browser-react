import module, { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/github-users-browser-react/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: `[name]__[local]__[hash:base64:2]`,
    },
  },
});
