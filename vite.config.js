import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/myapi": {
        target: "https://ofm.anettcom.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/myapi/, ""),
      },
    },
  },
});
