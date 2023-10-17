import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import i18n from './i18n/i18n'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/font.css'
// import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VueI18n)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
