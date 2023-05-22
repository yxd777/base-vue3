/*
 * @Author: yxd
 * @Date: 2023-05-21 14:10:28
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 22:40:19
 * @Description:  全局loading-bar
 */
export function createPageLoadingGuard(router) {
  router.beforeEach(() => {
    window.$loadingBar?.start()
  })

  router.afterEach(() => {
    setTimeout(() => {
      window.$loadingBar?.finish()
    }, 200)
  })

  router.onError(() => {
    window.$loadingBar?.error()
  })
}
