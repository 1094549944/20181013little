// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
    },
    count: {
      type: Number
    },
    readOnly: {
      type: Boolean
    },
    _id: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 数据绑定
    // 三元表达式
    //封装性 开放性
    // 封装在内部 ，开放出来的
    // 粒度
    // 非常简单的功能   非常复杂的功能
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      console.log('我点击了like')
      // 自定义事件
      if (this.properties.readOnly) {
        return
      }
      let like = this.properties.like
      let count = this.properties.count

      count = like ? count - 1 : count + 1
      this.setData({
        count: count,
        like: !like
      })
      // 激活 behavior 用来标识，是点赞，还是取消点赞
      // triggerEvent 激活自定义
      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent('likeFun', {
        behavior: behavior
      }, {})
    }
  }
})