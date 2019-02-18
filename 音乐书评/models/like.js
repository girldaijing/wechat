import {HTTP} from "../utils/http"
class LikeModel extends HTTP{
    getLike(behaviors,id,type){
        const url =behaviors?'/like':'/like/cancel'
        this.request({
           url,
           method:"POST",
           data:{
               art_id:id,
               type
           }
        })
    }

    getLikeStatus(type,id,callback){
        this.request({
            url:`/classic/${type}/${id}/favor`,
            success:res=>{
                callback(res)
            }
        })
    }
}
export {LikeModel}