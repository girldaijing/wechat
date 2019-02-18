// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       title:String,
       isLast:Boolean,
       isFirst:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
       yesLeft:"images/triangle@left.png",
       noLeft:"images/triangle.dis@left.png",
       yesRight:"images/triangle@right.png",
       noRight:"images/triangle.dis@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLeft(){
        if(!this.properties.isLast){
          this.triggerEvent("next",{})
        }
      },
      onRight(){
        if(!this.properties.isFirst){
          this.triggerEvent("previous",{})
        }
      }
  }
})
