import { createRouter, createWebHistory } from '@ionic/vue-router';
import Blackpink from '../pages/Blackpink.vue'

const routes = [
  {
    path: '/',
    redirect: '/Blackpink'
  },
  {
    path: '/Blackpink',
    component: Blackpink
  },
  {
    path: '/Blackpink/:id',
    component: ()=> import('../pages/BlackpinkDetailsPage.vue')
  },
  {
    path: '/Blackpink/add',
    component: ()=> import('../pages/AddBlackpinkPage.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
