import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home/home'
import  defaultGroup from '@/components/module-db/db-list/defaultGroup'
import  user from '@/components/module-sys-manager/authorityList/user'
import  menuList from '@/components/module-sys-manager/authorityList/menuList'
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
      component: Home,
      children:[
        {
          path: 'authorityList',
          name: 'authorityList',

          component: menuList,
          children:[
            {
              path: 'user',
              name: 'user',

              component: user,
            }
          ]
        },
        {
          path: 'defaultGroup',
          name: 'defaultGroup',
          component: defaultGroup
        }
      ]

    },
    {
      path: '/defaultGroup',
      name: 'defaultGroup',
      component: defaultGroup

    }

  ]
})
