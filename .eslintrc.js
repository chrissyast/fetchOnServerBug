module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    quotes: 'warn',
    indent: 'warn',
    'space-before-function-paren': 'off',
    'no-constant-condition': 'off',
    'spaced-comment': 'off',
    'no-console': 'off',
    'friendly-errors': 'off',
    'vue/valid-v-slot': ['error', {
      allowModifiers: true
    }]
  }
}
