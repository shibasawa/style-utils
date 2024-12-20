import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'style-utils',
      fileName: (format) => `style-utils.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
