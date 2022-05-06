import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "vitest.setup.ts",
    environment: "jsdom",
    threads: false,
    clearMocks: true,
  },
});
