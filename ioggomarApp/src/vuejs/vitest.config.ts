/// <reference types="vitest" />

import path from "path";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

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
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
