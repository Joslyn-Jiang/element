// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import Box from './components/box'
import TranslateForm from './components/translateForm'
import ShowCity from './components/showCity'

Vue.use(ShowCity)
Vue.use(TranslateForm)
Vue.use(ElementUI)
Vue.use(Element)
Vue.use(Box)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
