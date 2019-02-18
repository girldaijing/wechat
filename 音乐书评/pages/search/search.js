// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      topMore:0,
      bottomMore:0
  },

  onPullDownRefresh: function () {
       this.setData({
         topMore:Math.random()
       })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.setData({
        bottomMore:Math.random()
      })
  },

 
})