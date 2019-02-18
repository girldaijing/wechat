// pages/book/book.js
import {BookModel} from "../../models/book"
const bookModel=new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      bookModel.getHotBook().then(res=>{
        this.setData({
          books:res
        })
      })
  },

 onSearch(){
   wx.navigateTo({
     url: '/pages/search/search'
   })
 }
  
  
})