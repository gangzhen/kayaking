import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import * as echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
import '@/assets/icons/index.js'
import '@/utils/globalVarService.js'

Vue.config.productionTip = false

Vue.use(ElementUI, {size: 'small'})
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
