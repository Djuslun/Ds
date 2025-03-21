import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tsconfigPaths(),
    libInjectCss(),
    svgLoader(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src/**/*', 'src/**/*.ts', 'src/**/*.vue', 'src/vue.d.ts'],
      exclude: ['**/*.stories.ts', '**/*.test.ts'],
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
        additionalData: `
          @use "sass:math";
          @use "@/assets/scss/_base.scss" as *;
          @use "@/assets/scss/_colors.scss" as *;
          @use "@/assets/scss/_mixins.scss" as *;
          @use "@/assets/scss/_variables.scss" as *;
        `,
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
      external: ['vue', 'vue3-icon', '@mdi/js'],
      output: {
        preserveModules: true,
        assetFileNames: 'styles/[name][extname]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
