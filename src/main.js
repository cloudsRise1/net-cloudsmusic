import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //导入element-ui组件库
import router from './router'

Vue.config.productionTip = false

import '@/styles/index.scss' //清除全局默认样式
import 'element-ui/lib/theme-chalk/index.css' //导入element-ui组件库样式
Vue.use(ElementUI)


new Vue({
  router,
  el:'#app',
  render: h => h(App)
})
