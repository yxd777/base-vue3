/*
 * @Author: yxd
 * @Date: 2023-05-19 09:28:32
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-19 09:32:52
 * @Description:  vite-plugin-html插件
 */
import  { createHtmlPlugin } from 'vite-plugin-html'

export function configHtmlPlugin(viteEnv, isBuild) {
  const { VITE_APP_TITLE } = viteEnv
  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}
