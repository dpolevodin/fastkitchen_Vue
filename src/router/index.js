import Vue from 'vue'
import VueRouter from 'vue-router'
import FcAbout from '@/views/About'
import FcOrders from '@/views/Orders'
import FkOrderInfo from '@/views/OrderInfo'
import FkContacts from '@/views/Contacts'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: FcAbout
  },
  {
    path: '/orders',
    name: 'orders',
    component: FcOrders
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: FkContacts
  },
  {
    path: '/about',
    name: 'about',
    component: FcAbout
  },
  {
    path: '/orderinfo',
    name: 'orderInfo',
    component: FkOrderInfo
  }
]

const router = new VueRouter({
  routes
})

export default router