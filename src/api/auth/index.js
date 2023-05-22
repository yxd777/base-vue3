/*
 * @Author: yxd
 * @Date: 2023-05-21 13:32:50
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:33:17
 * @Description: 
 */
import { defAxios as request } from '@/utils/http'

export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
