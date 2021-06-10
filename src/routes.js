import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home.vue'
import Users from '@/pages/Users.vue'

export default new Router({
   routes: [
      {
         path: '/',
         name: "home",
         component: Home
      },
      {
         path: '/users',
         name: "users",
         component: Users
      },
   ]
})