import { defineConfig } from 'vitest/config';
import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";
import path from 'path';

export default defineConfig({
  test: {
    // Default to jsdom for component tests
    environment: 'jsdom',
    include: ['./test/**/*.test.{ts,tsx}'],
    exclude: ['./test/**/*.worker.test.{ts,tsx}'],
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  workspace: {
    'worker-tests': {
      ...defineWorkersConfig({
        test: {
          include: ['./test/**/*.worker.test.{ts,tsx}'],
          poolOptions: {
            workers: {
              wrangler: { configPath: "./wrangler.jsonc" },
            },
          },
        },
      }),
    },
  },
});