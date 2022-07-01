import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../pages/first-page/FirstPage.vue';
import SecondPage from '../pages/second-page/SecondPage.vue'
import ThirdPage from '../pages/third-page/ThirdPage.vue';
import ErrorPage from '../pages/error-page/ErrorPage.vue';
const routes = [
  {
    path: '/',
    name: 'first-page',
    component: FirstPage
  },  
  {
    path: '/second-page',
    name: 'second-page',    
    component: () => import('../pages/second-page/SecondPage.vue')
  },
   {
    path: '/third-page',
    name: 'third-page',    
    component: () => import('../pages/third-page/ThirdPage.vue')
  },
   ,
   {
    path: '/error-page',
    name: 'error-page',    
    component: () => import('../pages/error-page/ErrorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
