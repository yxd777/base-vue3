/*
 * @Author: yxd
 * @Date: 2023-05-21 14:07:07
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 22:16:09
 * @Description: 
 */
export default [
  {
    name: 'Page1',
    path: '/page1',
    component: () => import('@/views/test-page/page1/index.vue'),
    meta: {
      title: '动态路由1',
      role: ['admin'],
    },
  },
  {
    name: 'Page2',
    path: '/page2',
    component: () => import('@/views/test-page/page2/index.vue'),
    meta: {
      title: '动态路由2',
      role: ['editor','admin'],
    },
  },
  {
    name: 'Page3',
    path: '/page3',
    component: () => import('@/views/test-page/page3/index.vue'),
    meta: {
      title: '动态路由3',
      role: ['editor'],
    },
  },
]
