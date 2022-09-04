/// <reference types="vitest" />

import path from "path";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@localizations": path.resolve(__dirname, "./src/localizations"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
