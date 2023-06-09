/*
 * @Author: yxd
 * @Date: 2023-05-18 18:00:02
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-22 11:07:43
 * @Description: 
 * 
 * ①在vite项目中，以VITE_ 为前缀的环境变量可以通过 import.meta.env.xxx的方式访问，
 *   .env文件的环境变量会在所有环境中加载，但是优先级更低，会被当前模式下的同名变量覆盖
 * ②但是，在node环境中（如vite.config.js文件），并不能通过import.meta.env.xxx这种方式使用环境变量
 *   但我们却有这样的需求，因此我们需要处理一下，让node环境也可以使用我们定义的环境变量
 
 */
const httpsReg = /^https:\/\//
/**
 * @description: 因为vite的loadEnv方法返回是一个Record<string, string>，要改成对应的数据结构
 *              同时设置了process.env
 * @param {*} envOptions loadEnv的返回值
 * @return {*} 
 */
export function wrapperEnv(envOptions) { 
  if (!envOptions) return {}
  const rst = {}

  for (const key in envOptions) {
    let val = envOptions[key]
    if (['true', 'false'].includes(val)) {
      val = val === 'true'
    }
    if (['VITE_PORT'].includes(key)) {
      val = +val
    }
    if (key === 'VITE_PROXY' && val) {
      try {
        val = JSON.parse(val.replace(/'/g, '"')) // [["/api","http://localhost:8080"]] 
      } catch (error) {
        val = ''
      }
    }
    rst[key] = val
    if (typeof key === 'string') {
      process.env[key] = val
    } else if (typeof key === 'object') {
      process.env[key] = JSON.stringify(val)
    }
  }  
  return rst
}

/**
 * @description: 配置devserver 用于vite.config.js
 * @param {*} list
 * @return {*}
 */
export function createProxy(list = []) {
  const rst = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)

    // https://github.com/http-party/node-http-proxy#options
    rst[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    }
  }
  return rst
}
