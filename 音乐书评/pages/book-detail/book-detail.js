// pages/book-detail/book-detail.js
import {BookModel} from "../../models/book"
const bookModel=new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
         const id=options.id;
         this._getNetWorkData(id)
  },

  _getNetWorkData(id){
       const detail=bookModel.getBookDetail(id)
       const comments=bookModel.getBookComment(id)
       const likeStatus=bookModel.getBookLike(id)
       Promise.all([detail,comments,likeStatus]).then(res=>{
         let[detail,comments,likeStatus]=res;
         this.setData({
           id,
           detail,
           comments:comments.comments,
           likeStatus
         })
       })
  },
  onClick(){
    this.setData({
      isShow:true
    })
  },
  onCancel(){
    this.setData({
      isShow:false
    })
  },
  onConfirm(e){
    var value=e.detail.value.search;
    if(typeof value=="function"){
      value =e.detail.value
    }
    var obj={
      content:value,
      nums:1
    }
    if(value){
      this.data.comments.unshift(obj)
    bookModel.addNewComment(this.data.id,value).then(res=>{
      wx.showToast({
        title: '新增一个短评',
        icon: 'none'
      })
    })
    }
    this.setData({
      comments:this.data.comments
    })
  }
})