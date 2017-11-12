import Vue from 'vue'
import Router from 'vue-router'
import TheIndex from '@/components/TheIndex'
import TheList from '@/components/TheList'
import TheShow from '@/components/TheShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: TheIndex
    },
    {
      path: '/list',
      name: 'list',
      component: TheList
    },
    {
      path: '/movies/:id',
      props: true,
      component: TheShow
    }
  ]
})
