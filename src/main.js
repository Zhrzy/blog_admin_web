import Vue from 'vue'
import ElementUI from 'element-ui';//引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import locale from 'element-ui/lib/locale/lang/en'
import router from './router' //路由
import store from './store'   //vuex状态管理器
import '@/style/index.scss'   // global css全局样式
import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
