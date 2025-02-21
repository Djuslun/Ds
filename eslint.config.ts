import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import oxlint from 'eslint-plugin-oxlint';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import globals from 'globals';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import pluginPrettierVue from 'eslint-plugin-prettier-vue';
import prettierConfig from './.prettierrc.json';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  { languageOptions: { globals: globals.browser } },

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  oxlint.configs['flat/recommended'],
  skipFormatting,
  {
    plugins: {
      'prettier-vue': pluginPrettierVue,
    },
    rules: {
      'prettier-vue/prettier': ['error', { ...prettierConfig }],
    },
  },
  {
    plugins: { '@stylistic/ts': stylisticTs },
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': 'error',
      'no-console': 'error',
      'no-nested-ternary': 'error',
      '@stylistic/ts/member-delimiter-style': 'error',
      'vue/padding-line-between-tags': [
        'error',
        [
          {
            blankLine: 'always',
            prev: '*',
            next: '*',
          },
        ],
      ],
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  }
);
