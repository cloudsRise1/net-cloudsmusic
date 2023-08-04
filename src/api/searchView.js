import request from '@/utils/request'


export function getSearchAll(keywords){
    return request({
        url:'/cloudsearch',
        params:{
            keywords
        }
    })
}
