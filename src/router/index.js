import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // Firebase Hosting rewrites every unknown path to index.html, so without this
  // the app would render an empty page instead of sending the visitor home.
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
