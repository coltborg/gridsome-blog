module.exports = {
  plugins: ['gridsome'],
  extends: ['prettier', 'plugin:gridsome/recommended', 'plugin:vue/recommended'],
  rules: {
    'vue/no-v-html': 'off',
  },
};