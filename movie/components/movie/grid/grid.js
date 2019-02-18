// components/movie/grid/grid.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   data:Object,
    // title:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
     Moreclick(){
      //  console.log(this.properties.data)

       var type = this.properties.data.type;
       var header=this.properties.data.header;
      //  console.log(type)
       wx.navigateTo({
         url: '/pages/more/more?type='+type+"&header="+header,
       })
       var url= '/pages/more/more?type='+type+"&header="+header
       console.log(url)
     }
  }
})
