/*
 * @Author: yxd
 * @Date: 2023-05-21 13:52:51
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:54:03
 * @Description: 
 */
import { createPinia } from 'pinia'

export function setupStore(app) {
  app.use(createPinia())
}
