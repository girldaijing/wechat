import {config} from "../config"
class HTTP{
    request({url,data={},method='GET'}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: config.base_url+url,
                data,
                method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                    'Content-Type':'application/json',
                    "appkey":config.appkey
                }, // 设置请求的 header
                success: res=>{
                    // success
                    resolve(res.data)
                },
                fail:err=>{
                    // fail
                    reject(err)
                },
               
            })
        })
    }
}
export {HTTP}