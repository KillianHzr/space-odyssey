import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import EnigmeOne from './components/EnigmeOne.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home  ,
    },
    {
      path: '/enigmes',
      component: EnigmeOne  ,
    }
  ]
})