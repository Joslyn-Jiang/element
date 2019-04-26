// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import load from '@/components/load/load.js'
import sjld from './components/sjld/sjld.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Element)
Vue.use(load)
Vue.use(sjld)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
