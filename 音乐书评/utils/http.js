import { config } from "../config"
class HTTP {
    request({ url, data = {}, method = 'GET', success }) {
          wx.request({
              url: config.base_url+url,
              data,
              method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              header: {
                  'Content-Type':'application/json',
                  "appkey":config.appkey
              }, 
              success: res=>{
                  const statusCode=res.statusCode.toString();
                  if(statusCode.startsWith("2")){
                      success&&success(res.data)
                  }else{
                      this._show_error()
                  }
              },
              fail: err=> {
                 this._show_error()
              },
             
          })
    }
    _show_error(){
        wx.showToast({
            title: '网络错误',
            icon: 'none'
        })
    }
}
export {HTTP}