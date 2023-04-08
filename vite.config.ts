/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  test: {
    globals: true, // So you do not need to import jest tools like 'describe'
    environment: "happy-dom",
    setupFiles: ["./src/utils/setupVitest.ts"],
  },
});
