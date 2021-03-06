import { HTTP } from '../utils/http.js'

class LikeModel extends HTTP {
  like (behavior, artID, category, callback) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        _id: artID,
        type: category
      },
      success: (res) => {
        callback(res)
      }
    })
  }
}
module.exports = {
  LikeModel
}

