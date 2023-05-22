/*
 * @Author: yxd
 * @Date: 2023-05-21 14:00:14
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 14:00:17
 * @Description: 
 */
import { useUserStore } from '@/store/modules/user'

const WITHOUT_TOKEN_API = [{ url: '/auth/login', method: 'POST' }]

/**
 * @description: 不需要token的接口。对应 WITHOUT_TOKEN_API
 */
export function isWithoutToken({ url, method = '' }) {
  return WITHOUT_TOKEN_API.some((item) => item.url === url && item.method === method.toUpperCase())
}

export function addBaseParams(params) {
  if (!params.userId) {
    params.userId = useUserStore().userId
  }
}
