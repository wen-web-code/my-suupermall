import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

//懒加载
const Home = () => import('../views/Home/home')
const cart = () => import('../views/cart/cart')
const category = () => import('../views/category/category')
const profile = () => import('../views/profile/profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/category',
    component: category
  },
]

const router =  new Router({
  routes,
  mode: 'history'
})
export default router;