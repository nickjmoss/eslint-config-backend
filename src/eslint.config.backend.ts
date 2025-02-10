import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import recommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
    {
        files: ['**/*.js', '**/*.ts'],
        languageOptions: {
            parser: tsparser,
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: {
                ...globals.node, // No browser globals
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            prettier,
        },
        rules: {
            // Base ESLint recommended rules
            ...js.configs.recommended.rules,

            // TypeScript recommended rules
            ...tseslint.configs.recommended.rules,

            // Prettier recommended rules
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    tabWidth: 4,
                },
            ],

            // Custom rule adjustments
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
    recommended,
];
