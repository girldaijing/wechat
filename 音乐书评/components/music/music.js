// components/music/music.js
const audio = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    image: String,
    content: String,
    title: String,
    url: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlay: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onMusic(){
        if(this.data.isPlay){
          this.setData({
            isPlay:false
          })
          audio.pause()
        }else{
          audio.title=this.properties.title;
          audio.src=this.properties.url;
          this.setData({
            isPlay:true
          })
        }
      },
      _recoveryMusic(){
        if(audio.src==this.properties.url){
          this.setData({
            isPlay:true
          })
        }
        if(audio.pause){
          this.setData({
            isPlay:false
          })
        }
      },
      _momiterMusic(){
        audio.onPlay(()=>{
          this.setData({
            isPlay:true
          })
        })
        audio.onPause(()=>{
          this.setData({
            isPlay:false
          })
        })
        audio.onStop(()=>{
          this.setData({
            isPlay:false
          })
        })
        audio.onEnded(()=>{
          this.setData({
            isPlay:false
          })
        })
      }
  },
  attached(){
    this._momiterMusic()
    this._recoveryMusic()
  }
})