/*
 * @Author: jiaxinying 
 * @Date: 2018-10-18 20:25:55 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-10-18 20:35:42
 */

import { HTTP } from '../utils/http.js'
class ClassModel extends HTTP {
  //获取最新一期的数据
  getLatest (sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)

      }
    })
  }
}
module.exports = {
  ClassModel
}