module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:storybook/recommended', 'plugin:@next/next/recommended'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx', 'middleware.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react-hooks/recommended',
        'plugin:@next/next/recommended',
      ],
      rules: {
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',
        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',
        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',
        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': 'error',
        // Although it would be great that most functions have return types,
        // a lot of the time these can be inferred and don't require explicit
        // return types
        '@typescript-eslint/explicit-function-return-type': 'off',
        // Don't require return typing for the class component render methods
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowedNames: ['render'],
          },
        ],
        'no-unused-expressions': 'off',
        'jsx-a11y/label-has-associated-control': [
          'warn',
          {
            controlComponents: ['Checkbox', 'Field'],
          },
        ],
        'jsx-a11y/no-autofocus': [
          2,
          {
            ignoreNonDOM: true,
          },
        ],
        // Set new a11y rules to warn so that these can be fixed incrementally
        'jsx-a11y/control-has-associated-label': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'react/jsx-curly-brace-presence': ['error', { children: 'ignore' }],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // The airbnb eslint preset overrides this for whatever reason.
        'react/no-unsafe': ['error', { checkAliases: true }],
        // We tend to be pretty good about destructuring as needed,
        // and this rule is overzealous in cases where you want to
        // do something like this.props.foo.get('bar').
        'react/destructuring-assignment': 'off',
        // This is meant to make you be more explicit, which is
        // typically a good thing, but we find this idiom more
        // useful than dangerous.
        'react/jsx-props-no-spreading': 'off',
        // This is to ensure that jsx is consistently indented
        'react/jsx-indent': [1, 2, { checkAttributes: true, indentLogicalExpressions: true }],
        // This ensures that members of types and interfaces are consistently formatted.
        '@typescript-eslint/member-delimiter-style': 'error',
        // Storybook Stories are a dev only thing.
        'import/no-extraneous-dependencies': ['error', { devDependencies: [
            '**/*.stories.tsx',
            "**/*.test.{ts,tsx}",
        ] }],
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        // Disable warnings about `defaultProps`
        'react/require-default-props': 'off',
        // The rule is not compatible with the way we preload the google fonts
        // and therefore produces incorrect warnings.
        '@next/next/google-font-preconnect': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
          },
          {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          },
          {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          },
          {
            selector: "CallExpression[callee.object.name='localStorage']",
            message: 'Do not use `localStorage` directly, use `src/common/utils/storageWrapper` instead',
          },
          {
            selector: "CallExpression[callee.object.object.name='window'][callee.object.property.name='localStorage']",
            message: 'Do not use `localStorage` directly, use `src/common/utils/storageWrapper` instead',
          },
          {
            selector: "CallExpression[callee.object.name='sessionStorage']",
            message: 'Do not use `sessionStorage` directly, use `src/common/utils/storageWrapper` instead',
          },
          {
            selector: "CallExpression[callee.object.object.name='window'][callee.object.property.name='sessionStorage']",
            message: 'Do not use `sessionStorage` directly, use `src/common/utils/storageWrapper` instead',
          },
        ],
        'no-restricted-imports': [
          'warn',
          {
            paths: [
              {
                name: 'react-i18next',
                message: 'Please use next-i18next instead.',
              },
              {
                name: 'react-dom',
                importNames: ['useFormState'],
                message: 'Please use react-final-form instead.',
              },
              {
                // Discourage using `format` directly.
                // import { format } from 'date-fns';
                name: 'date-fns',
                importNames: ['format'],
                message: "Please use 'formatDate' from '/src/common/utils/dateHelpers' instead.",
              },
              {
                // Discourage using `format` directly.
                // import format from 'date-fns/format';
                name: 'date-fns/format',
                importNames: ['default'],
                message: "Please use 'formatDate' from '/src/common/utils/dateHelpers' instead.",
              },
              {
                name: '@sentry/node',
                importNames: ['captureException'],
                message: "Please use 'captureException' from '/src/common/utils/captureException' instead.",
              },
              {
                name: '@sentry/browser',
                importNames: ['captureException'],
                message: "Please use 'captureException' from '/src/common/utils/captureException' instead.",
              },
            ],
          },
        ],
        // Ensure consistent whitespace after colons for objects
        '@typescript-eslint/key-spacing': 'error',
        // Ensure consistent whitespace after colons for types
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            modifiers: ['destructured'],
            // Allow following formats for destructured variables
            format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
          },
        ]
      },
    },
  ],
};
