/*
 * @Author: yxd
 * @Date: 2023-05-21 13:49:24
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 14:11:26
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes as routes } from './routes'
import { setupRouterGuard } from './guard'

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}
