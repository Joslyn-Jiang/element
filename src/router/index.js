import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index/index'
import New from '@/views/new/new'
import Com from '@/views/com/com'

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
      name:'com',
      component:Com
    }
  ]
})

