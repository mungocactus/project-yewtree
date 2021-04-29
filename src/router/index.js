import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nasa from '../views/Nasa.vue'
import Weather from '../views/Weather.vue'
import RandomPeople from '../views/RandomPeople.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nasa',
    name: 'Nasa',
    component: Nasa
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/random-people',
    name: 'RandomPeople',
    component: RandomPeople
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
