import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import New from '@/views/new/new'
import Com from '@/views/com/com'
import Vuex from '@/views/vuex/vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },{
      path: '/com',
      name: 'com',
      component:Com
    },{
      path: '/vuex',
      name: 'vuex',
      component:Vuex
    }

  ]
})

