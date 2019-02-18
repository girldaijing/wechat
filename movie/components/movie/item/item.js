// components/movie/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  data:Object,
  
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
    Imgclick(event){
      // console.log(event)
      var id=event.currentTarget.dataset.id;
      // console.log(id)
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })

    }
  }
})
