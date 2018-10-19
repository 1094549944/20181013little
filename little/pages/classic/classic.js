// pages/classic/classic.js
import {
  ClassModel
} from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
const classicModel = new ClassModel()
const likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据  
   */
  data: {
    classicData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 获取最新期刊
     */
    classicModel.getLatest((res) => {
      console.log(res)
      this.setData({
        classicData: res.data
      })
    })
  },
  onLike: function (event) {

    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type, (res) => {

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})