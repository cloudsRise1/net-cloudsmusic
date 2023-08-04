import request from '@/utils/request'

/**
 * 获取轮播图数据
 * 
 */

export function getSwipers(){
    return request({
        url:"/banner",
    })
}
/**
 * 点击轮播图获取音乐链接
 * params {number} params
 */
export function getMusicUrl(musicId){
    return request({
        url:'/song/url',
        params:{
            id:musicId
        }
    })
}

/**
 * 点击轮播图获取音乐内容
 *  params {number} params
 */

export function getMusicMenu(musicId){
    return request({
        url:'/song/detail',
        params:{
            ids:musicId
        }
    })
}

/**
 * 
 * 点击获取歌单列表
 * params {number, number} params
 */

export function getMusicList(){
    return request({
        url:'/top/playlist',
        params:{
            offset: (Math.random() * 1297).toFixed(0) - 12,
            limit: 12
        }
    })

}