import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import home from "@/views/home";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: ()=>import('@/views/home'),
        name: 'Home',
        meta: {title: 'Home', icon: 'home', affix: true}
      }
    ]
  },
  {
    path:'/login',
    component: () => import('@/views/system/sign-in'),
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
