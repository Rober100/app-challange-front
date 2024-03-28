import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "../views/Register.vue"
import Login from '../views/Login.vue'
import ForgotPassword from "../views/ForgotPassword.vue"
import ResetPassword from '../views/ResetPassword.vue'
import Dashboard from "../views/Dashboard.vue"
import Task from "../views/Task.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
