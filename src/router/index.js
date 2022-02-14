import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import About from '@/views/About.vue'
import EnterMobileNumber from '@/views/EnterMobileNumber.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/phone',
    name: 'Get-started-with-phone',
    component: EnterMobileNumber
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: '/about/:id/:slug',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
