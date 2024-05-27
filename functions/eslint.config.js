// module.exports = {
//   env: {
//     es6: true,
//     node: true,
//   },
//   parserOptions: {
//     'ecmaVersion': 2018,
//   },
//   extends: [
//     'eslint:recommended',
//     'google',
//   ],
//   rules: {
//     'no-restricted-globals': ['error', 'name', 'length'],
//     'prefer-arrow-callback': 'error',
//     'quotes': ['error', 'double', {'allowTemplateLiterals': true}],
//   },
//   overrides: [
//     {
//       files: ['**/*.spec.*'],
//       env: {
//         mocha: true,
//       },
//       rules: {},
//     },
//   ],
//   globals: {},
// };

// import { FlatCompat } from '@eslint/eslintrc';
// import js from '@eslint/js';

// const compat = new FlatCompat({
//   baseDirectory: __dirname, // Replace with your project's root directory
// });


export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    linterOptions: {
      globals: {
        // Add any global variables here
      },
    },
    env: {
      es6: true,
      node: true,
    },
    rules: {
      'no-restricted-globals': ['error', 'name', 'length'],
      'prefer-arrow-callback': 'error',
      'quotes': ['error', 'double', { allowTemplateLiterals: true }],
    },
  },
  ...compat.extends('eslint:recommended'),
  ...compat.extends('google'),
  {
    files: ['**/*.spec.*'],
    env: {
      mocha: true,
    },
    rules: {
      // Override or add specific rules for test files here
    },
  },
];
