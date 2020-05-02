module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'simple-import-sort',
    'prefer-arrow-functions',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': 'error',
    'no-shadow': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
  },
};
