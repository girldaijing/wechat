// pages/search/search.js
const app = getApp();
import utils from "../../utils/util";
var http = utils.http;
var star = utils.star;
var sliceTitle = utils.sliceTitle;
Page({


  data: {

  },
  onConfirm(e) {
    var value = e.detail.value;
    var url = `https://douban.uieee.com/v2/movie/search?q=${value}`;
    http(url,this.handleData);
  },
  handleData(res) {
    console.log(res)
    var subjects = res.data.subjects;
    var movies = [];
    subjects.forEach(ele => {

      var title = sliceTitle(ele.title);
      var average = ele.rating.average;
      var stars = star(ele.rating.stars);
      var image = ele.images.small;
      var id = ele.id;
      var temp = {
        average,
        stars,
        title,
        image,
        id
      };
      movies.push(temp);
    });
    this.setData({
      movies
    })
    console.log(movies)
  },

})