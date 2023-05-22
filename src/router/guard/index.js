/*
 * @Author: yxd
 * @Date: 2023-05-21 14:11:01
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 14:11:04
 * @Description: 
 */
import { createPageLoadingGuard } from './page-loading-guard'
import { createPageTitleGuard } from './page-title-guard'
import { createPermissionGuard } from './permission-guard'

export function setupRouterGuard(router) {
  createPageLoadingGuard(router)
  createPermissionGuard(router)
  createPageTitleGuard(router)
}
