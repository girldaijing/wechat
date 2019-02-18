import {HTTP} from "../utils/http"
class ClassicModel extends HTTP{
    getLatest(callback){
        this.request({
            url:"/classic/latest",
            success:res=>{
                let index=res.index
                callback(res)
                wx.setStorageSync('last', res.index)
            }
        })
    }


    getClassic(index,nextOrprevious,callback){
        const inx=(nextOrprevious=="next")?index+1:index-1
        const classic=wx.getStorageSync(this._getkey(inx))
        if(classic){
            callback(classic)
        }else{
            this.request({
                url:`/classic/${index}/${nextOrprevious}`,
                success:res=>{
                    callback(res)
                    wx.setStorageSync(this._getkey(res.index),res)
                }
            })
        }
    }
    _getkey(index){
        return "classic"+index
    }
    isFirst(index){
        return index==1?true:false
    }
    isLast(index){
        const last = wx.getStorageSync('last')
        return index==last?true:false
    }
    getFavor(callback){
        this.request({
            url:'/classic/favor',
            success:res=>{
                callback(res)
            }
        })
    }
}

export {ClassicModel}