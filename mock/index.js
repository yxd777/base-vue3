/*
 * @Author: yxd
 * @Date: 2023-05-21 13:34:49
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 22:01:18
 * @Description: 
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.globEager('./modules/*.js')

const mockModules = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
