# @nickjmoss/eslint-config-backend

## Getting Started

Install the following packages for this config to work

```bash
bun install @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-prettier prettier
```

## Usage

This package uses the new ESLint flat config format so import the config into your `eslint.config.js` file like so:

```js
import { eslintConfigBackend } from '@nickjmoss/eslint-config/frontend';

export default [
    ...eslintBackendConfig,
    // additional rules
];
```
