/*
 * @Author: yxd
 * @Date: 2023-05-21 13:36:05
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:36:11
 * @Description: 
 */
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isBuild) {
  return viteMockServe({
    mockPath: 'mock/modules',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock';
      setupProdMockServer();
    `,
  })
}
