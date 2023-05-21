/*
 * @Author: yxd
 * @Date: 2023-05-19 10:20:03
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-19 10:35:04
 * @Description:
 */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
    'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', '401', '404'],
      },
    ],
  },
}
