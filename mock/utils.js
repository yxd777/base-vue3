/*
 * @Author: yxd
 * @Date: 2023-05-21 13:34:59
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:35:02
 * @Description: 
 */
export function resolveToken(authorization) {
  /**
   * * jwt token
   * * Bearer + token
   * ! 认证方案: Bearer
   */
  const reqTokenSplit = authorization.split(' ')
  if (reqTokenSplit.length === 2) {
    return reqTokenSplit[1]
  }
  return ''
}
