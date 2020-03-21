module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  }
};
