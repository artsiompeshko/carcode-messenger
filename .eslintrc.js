module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'react-app', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-prototype-builtins': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['components', 'core', 'shared-components'],
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: ['children', 'history', 'location'],
      },
    ],
  },
};
