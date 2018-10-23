// components/episode/index.js
/** 
 * properties 和data 最终会合并成一个js对象
 * properties 和data中的变量不能重名
 * 
*/
/** 
 * 坑： 小程序在type 声明成number的时候，会自动把08 转换成8
 * 
 * 内存泄露问题：
 * observer 在执行setData的时候，监听了index,index 一直在改动 一直在无限递归调用。
 * 在改动属性了，所以会出现无限制的监听
 * 
 * 
 * 总结：在observer中，不要尝试修改属性。会触发无线递归。
 * 解决办法，在data中，设置一个变量，修改变量，防止触发无限递归。
 * 
*/

/**
 * wxs 可以解决内存泄露
 * 
 */


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        let getVal = newVal % 12
        let val = getVal < 10 ? '0' + getVal : getVal

        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
    year: 0,
    month: '',
    _index: ''
  },
  attached: function () {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()


    this.setData({
      year,
      month: this.data.months[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
