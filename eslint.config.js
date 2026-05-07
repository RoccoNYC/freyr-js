import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['**/*.json'],
  },
  js.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': [
        1,
        {
          trailingComma: 'all',
          printWidth: 130,
          bracketSpacing: false,
          arrowParens: 'avoid',
          singleQuote: true,
        },
      ],
      'no-empty': 0,
      'no-cond-assign': 0,
      'no-sparse-arrays': 0,
      'no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];
