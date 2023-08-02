import request from '@/utils/request'

/**
 * 获取轮播图数据
 * 
 */

export function getSwipers(){
    return request({
        url:"/banner",
        method:'get',
    })
}