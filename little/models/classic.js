/*
 * @Author: jiaxinying 
 * @Date: 2018-10-18 20:25:55 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-10-19 15:46:18
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
  //点赞
  postLike (data, callback) {
    this.request({
      url: 'like/',
      method: 'POST',
      data: data,
      success: (res) => {
        callback(res)

      }
    })
  }
}
module.exports = {
  ClassModel
}