import react from "@vitejs/plugin-react";
import { join } from "node:path";
import { cwd } from "node:process";
import { defineConfig, loadEnv, type CommonServerOptions } from "vite";

const { PORT, VITE_API_PREFIX, PROXY_SERVER, PROXY_REWRITE, VITE_WEB_BASE } =
  loadEnv("development", cwd(), "");

const SERVER_OPTIONS: CommonServerOptions = {
  port: parseInt(PORT, 10),
  strictPort: true,
  proxy: {
    [join(VITE_WEB_BASE, VITE_API_PREFIX)]: {
      target: PROXY_SERVER,
      changeOrigin: true,
      secure: false,
      rewrite: PROXY_REWRITE
        ? (path) => path.replace(VITE_API_PREFIX, VITE_WEB_BASE)
        : undefined,
    },
  },
};

export default defineConfig({
  base: VITE_WEB_BASE,
  server: SERVER_OPTIONS,
  preview: SERVER_OPTIONS,
  resolve: {
    alias: {
      "@": join(cwd(), "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: Infinity,
    reportCompressedSize: false,
    rollupOptions: {
      /**
       * disable rollup 4 build INVALID_ANNOTATION warning
       * https://rollupjs.org/configuration-options/#pure
       * https://rollupjs.org/configuration-options/#onwarn
       */
      onwarn: (warning, defaultHandler) => {
        if (
          warning.code === "INVALID_ANNOTATION" &&
          warning.message.includes("/*#__PURE__*/")
        ) {
          return;
        }
        defaultHandler(warning);
      },
    },
  },
  plugins: [react()],
});
