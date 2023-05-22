/*
 * @Author: yxd
 * @Date: 2023-05-21 14:10:41
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 22:41:17
 * @Description:  动态修改页面title
 */
const baseTitle = import.meta.env.VITE_APP_TITLE

export function createPageTitleGuard(router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
