/*
 * @Author: jiaxinying 
 * @Date: 2018-10-18 16:23:08 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-10-18 19:30:24
 */

import { config } from '../config.js'

class HTTP {
  request (params) {
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          //判断返回的code 是不是以2开头的。那么就做处理，否则服务器异常
          //startWidth startEnd
          params.success && params.success(res.data)
        }
        else {
          let error_code = res.data.error_code
          // this._show_error(error_code)
        }
      },
      fail: (err) => {
        console.log(config.api_base_url + params.url)
        // this._show_error(1)
        console.log(err)
      }
    })
  }
}
export { HTTP }