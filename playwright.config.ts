import { defineConfig } from "@playwright/test";

// L'extension (extension/) chargée dans Chromium contre de fausses pages Outlook web
// (aucune requête réelle).   npx playwright test
export default defineConfig({
  testDir: "tests",
  testMatch: "**/*.spec.ts",
  workers: 3,
  fullyParallel: false,
  timeout: 180000,
  reporter: [["list"]],
  use: { screenshot: "only-on-failure" },
});
