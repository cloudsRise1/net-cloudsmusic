import Vue from 'vue'
import VueRouter from 'vue-router'
import config from './config'
/**
 * 解决路由跳转到相同location报错问题
 */
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location){
return originalPush.call(this , location).catch(err=>err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location){
return originalReplace.call(this , location).catch(err=>err)
}

Vue.use(VueRouter)

const router = new VueRouter(config)

export default router