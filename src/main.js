import Vue from 'vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App2.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
