import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      meta: {
        title: 'Blogs'
      },
      component: () => import('../views/BlogsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login'
      },
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: 'Register'
      },
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      meta: {
        title: 'Forgot Password'
      },
      component: () => import('../views/ForgotPasswordView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: 'Profile'
      },
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        title: 'Admin'
      },
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
