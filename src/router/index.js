import Vue from 'vue'
import Router from 'vue-router'
import AppTodos from '@/components/AppTodos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App-todos',
      component: AppTodos
    }
  ]
})
