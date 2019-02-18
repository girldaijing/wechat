//index.js
//获取应用实例
const app = getApp();
import utils from "../../utils/util";
var http = utils.http;
var star=utils.star;
var sliceTitle=utils.sliceTitle;
var doubanUrl = "https://douban.uieee.com/v2/movie/";
var obj={};
Page({

    data: {
        "in_theaters": {},
        "coming_soon": {},
        "top250": {}
    },

    onLoad: function (options) {
        var count="?start=0&count=3"
        var inTheatersUrl = doubanUrl + "in_theaters"+count;
        var comingSoonUrl=doubanUrl+"coming_soon"+count;
        var top250Url=doubanUrl+"top250"+count;
        // console.log(inTheatersUrl);
        var self=this;
        http(inTheatersUrl,this.handleData,"in_theaters");
        http(comingSoonUrl,this.handleData,"coming_soon");
        http(top250Url,this.handleData,"top250")
    },

    handleData(res,type){
        // console.log(res)
        var subjects=res.data.subjects;
        var header=res.data.title;
        var movies=[];
        subjects.forEach(ele => {
           

            // console.log(ele)
            var temp={
                image:ele.images.small,
                title:sliceTitle(ele.title),
                stars:star(ele.rating.stars),
                average:ele.rating.average,
                id:ele.id
            }
            movies.push(temp);
            // console.log(movies)
            var readyData={};
            readyData[type]={
                movies,
                header,
                type
            }
            // this.setData(readyData);
            obj[type]=readyData[type];
            this.setData({
                obj
            })
            // console.log(obj)
        });
        // console.log(this.data)

    },
    onsearch(){
        wx.navigateTo({
            url: '/pages/search/search',
        })
    }
})
