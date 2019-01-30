import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Test from '@/components/propsTest'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home

    },
    {
      path: '/test',
      name: 'test',
      component: Test

    }
  ]
})
