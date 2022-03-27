import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Jobs from '../views/LatestJobs'
import Contact from '../views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs 
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact 
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
