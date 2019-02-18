// pages/index/index.js
import {LikeModel} from "../../models/like"
const likeModel=new LikeModel()
import {ClassicModel} from "../../models/classic"
const classicModel=new ClassicModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
       classic:{},
       isLast:true,
       isFirst:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       classicModel.getLatest(res=>{
         this.setData({
              classic:res,
              like_status:res.like_status,
              fav_nums:res.fav_nums
         })
       })
  },
  onLike(e){
    var behavior=e.detail.behavior;
    var id=this.data.classic.id;
    var type=this.data.classic.type;
    likeModel.getLike(behavior,id,type)
  },
  
  _updataData(nextOrprevious){
     classicModel.getClassic(this.data.classic.index,nextOrprevious,res=>{
       likeModel.getLikeStatus(res.type,res.id,res=>{
         this.setData({
           like_status:res.like_status,
           fav_nums:res.fav_nums
         })
       })
       this.setData({
         classic:res,
         isFirst:classicModel.isFirst(res.index),
         isLast:classicModel.isLast(res.index)
       })
     })
  },
  onPrev(){
    this._updataData("previous")
  },
  onNext(){
    this._updataData("next")
  }
 
})