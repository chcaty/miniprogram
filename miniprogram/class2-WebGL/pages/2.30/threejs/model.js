// pages/2.30/threejs/model.js
import { createScopedThreejs } from 'threejs-miniprogram'

const { renderModel } = require('../../../lib/test-cases/model')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.createSelectorQuery()
    .select('#webg4')
    .node()
    .exec((res) => {
      const canvas = res[0].node
      this.canvas = canvas
      const THREE = createScopedThreejs(canvas)

      this.fadeToAction = renderModel(canvas, THREE)//3d model
      // console.log(renderOrbit);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})