import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src/**/*', 'src/**/*.ts', 'src/**/*.vue', 'src/vue.d.ts'], // Включить все файлы в src
      exclude: ['**/*.stories.ts', '**/*.test.ts'], // Исключить тесты и истории,
      compilerOptions: {
        types: ['vue'],
      },
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "reset-css";`,
      },
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@djuslun/ds',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
});
