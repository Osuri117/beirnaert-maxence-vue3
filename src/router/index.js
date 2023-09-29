import { createRouter, createWebHistory } from 'vue-router'
import HomeView      from '../views/HomeView.vue'
import DetailsView from "../views/DetailsView.vue"
import ListeView from "../views/ListeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: DetailsView
    },
    {
      path: '/liste',
      name: 'Liste',
      component: ListeView
    }
  ]
})

export default router
