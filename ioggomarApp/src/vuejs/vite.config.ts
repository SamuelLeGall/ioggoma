import { rmSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron, { onstart } from "vite-plugin-electron";
import eslintPlugin from "vite-plugin-eslint";

rmSync("dist", { recursive: true, force: true }); // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "../assets"),
      "@composables": path.resolve(__dirname, "./app/composables"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@config": path.resolve(__dirname, "../config"),
      "@localizations": path.resolve(__dirname, "../localizations"),
      "@models": path.resolve(__dirname, "../models"),
      "@router": path.resolve(__dirname, "./app/router"),
      "@stores": path.resolve(__dirname, "./app/stores"),
      "@styles": path.resolve(__dirname, "../styles"),
      "@utils": path.resolve(__dirname, "../utils"),
    },
  },
  plugins: [
    eslintPlugin(),
    vue(),
    electron({
      main: {
        entry: "../../electron/main/index.ts",
        vite: {
          build: {
            // For Debug
            sourcemap: true,
            outDir: "../../../dist/electron/main",
          },
          // Will start Electron via VSCode Debug
          plugins: [process.env.VSCODE_DEBUG ? onstart() : null],
        },
      },
      preload: {
        input: {
          // You can configure multiple preload here
          index: path.join(__dirname, "../../electron/preload/index.ts"),
        },
        vite: {
          build: {
            // For Debug
            sourcemap: "inline",
            outDir: "../../../dist/electron/preload",
          },
        },
      },
    }),
  ],
});
