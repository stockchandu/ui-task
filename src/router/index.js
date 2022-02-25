import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-employee',
    name: 'addemployee',
    component: () => import('@/components/AddEmployee.vue')
  },
  {
    path: '/view-employee/:id',
    name: 'viewemployee',
    component: () => import('@/components/ViewEmployeeDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
