import Home from '@/view/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'





const routes: any[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    iconClass: 'fas fa-home',
    mainMenu: true
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Home,
    iconClass: 'fas fa-search',
    mainMenu: true
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Home,
    iconClass: 'fas fa-bell',
    mainMenu: true
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Home,
    iconClass: 'fas fa-envelope',
    mainMenu: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router