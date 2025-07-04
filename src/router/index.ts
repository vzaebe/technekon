import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/product',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ProductPage.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/CompanyHistory.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutCompany.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/ContactsPage.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NewsPage.vue')
  },
  {
    path: '/news/robotics-line',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetailPage.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesPage.vue')
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: () => import('../views/EquipmentPage.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import('../views/ServiceOffersPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/technekon/' : '/'),
  routes
})

export default router 