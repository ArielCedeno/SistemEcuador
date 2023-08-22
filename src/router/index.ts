import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuienesSomosView from '../views/QuienesSomosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ContactoView from '../views/ContactoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quienes-somos',
      name: 'quienes-somos',
      component: QuienesSomosView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
  ],
  
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
