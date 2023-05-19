/*
 * @Author: yxd
 * @Date: 2023-05-19 10:05:26
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-19 10:05:34
 * @Description: 
 */
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export function unocss() {
  return Unocss({
    presets: [presetUno(), presetAttributify(), presetIcons()],
  })
}
