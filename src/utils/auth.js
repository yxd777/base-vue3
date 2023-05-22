/*
 * @Author: yxd
 * @Date: 2023-05-21 13:51:46
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:51:51
 * @Description: 
 */
import { router } from '@/router'

export function toLogin() {
  router.replace({ path: '/login' })
}
