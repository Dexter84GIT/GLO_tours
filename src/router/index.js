import Vue from 'vue'
import VueRouter from 'vue-router'
import MainViews from '@/views/MainViews.vue'
import TourViews from '@/views/TourViews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainViews
  },
  {
    path: '/about',
    component: MainViews
  },
  { name: 'tour', 
    path: '/about/:id', 
    component: TourViews 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
