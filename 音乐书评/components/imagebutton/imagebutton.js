// components/imagebutton/imagebutton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     openType:String
  },
  options:{
    multipleSlots:true
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
      onGetUserInfo(e){
        const userInfo=e.detail.userInfo;
        this.triggerEvent("onGet",{userInfo})
      }
  }
})
