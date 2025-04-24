import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error', // Ensures hooks are used only at the top level
      'react-hooks/exhaustive-deps': 'warn', // Ensures hooks have valid dependencies

      // React Refresh (HMR) rules for Vite support
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allows constant exports in HMR setup
      ],

      // TypeScript specific rules (from @typescript-eslint)
      '@typescript-eslint/no-explicit-any': 'warn', // Disallows the use of 'any' type
      '@typescript-eslint/consistent-type-imports': 'warn', // Enforces consistent use of type imports

      // Disable base ESLint no-unused-vars rule in favor of the TypeScript rule
      'no-unused-vars': 'off', // Turns off the base 'no-unused-vars' rule
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }, // Warns about unused variables except those starting with '_'
      ],

      // React specific rules (from eslint-plugin-react)
      'react/jsx-boolean-value': ['warn', 'never'], // Enforces no explicit boolean values in JSX attributes
      'react/self-closing-comp': 'warn', // Ensures self-closing components are used when appropriate

      // Other rules for better linting and code quality
      'react/prop-types': 'off', // Turns off prop-types validation (if you are using TypeScript, this is redundant)
      'react/react-in-jsx-scope': 'off', // Disables rule requiring React to be in scope in JSX files (for React 17+)

      // Import related rules (for organizing and sorting imports)
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Group external libraries first
            ['^react', '^@?\\w'],
            // Then group internal imports
            ['^@/'],
            // Finally, group side-effect imports
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn', // Ensures exports are sorted

      // Enforce a consistent return type when using hooks
      'react-hooks/exhaustive-deps': 'warn', // Ensures all dependencies are included in hook dependency arrays

      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  }
)
