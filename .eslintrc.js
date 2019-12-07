module.exports = {
  plugins: ['gridsome'],
  extends: ['prettier', 'plugin:gridsome/recommended', 'plugin:vue/recommended'],
  rules: {
    'vue/component-name-in-template-casing': ['error',  'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/no-v-html': 'off',
  },
};