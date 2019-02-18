// pages/detail/detail.js
const app=getApp();
var doubanUrl="https://douban.uieee.com/v2/movie/";
import utils from "../../utils/util";
const http=utils.http;
var star=utils.star;
var handleCasts=utils.handleCasts;
var handleGenres=utils.handleGenres;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var id=options.id;
      //  console.log(id)
      var url=doubanUrl+"subject/"+options.id;
      http(url,this.handleData);
  },
 handleData(res){
   
      var data=res.data;
      // console.log(data)
      var title=data.title;
      var country=data.countries[0]+"·"+data.year;
      var like=data.wish_count;
      var comment=data.comments_count;
      var banner=data.images.large;
      var small=data.images.small;
      var alt_title=data.original_title;
      var director=data.directors[0].name;
      var stars=star(data.rating.stars);
      var average=data.rating.average;
      var castsName=handleCasts(data.casts);
      var genres=handleGenres(data.genres);
      var sum=data.summary;
      var casts=data.casts;
      this.setData({
            title,country,like,comment,banner,
            alt_title,stars,average,director,
            castsName,genres,sum,casts,small,stars
      })
 },
  
  onReachBottom: function () {

  },

  
})