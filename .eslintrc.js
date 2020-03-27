module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-hooks'],
  extends: [
    'airbnb-typescript',
    'prettier'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
  },
};
