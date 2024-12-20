import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/index.ts', 'src/**/*.stories.tsx'],
      reportsDirectory: 'coverage',
    },
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    watch: false,
  },
}));
