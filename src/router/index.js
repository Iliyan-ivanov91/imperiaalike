import { faCity } from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue'
import VueRouter from "vue-router"
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'lobby',
        component: () => import(/* webpackChunkName: "about" */ '../components/Lobby.vue')
    },
    {
        path: '/lobby',
        name: 'lobby',
        component: () => import(/* webpackChunkName: "about" */ '../components/Lobby.vue')
    },
    {
        path: '/game',
        name: 'game',
        component: () => import(/* webpackChunkName: "about" */ '../components/Game.vue'),
        children: [
            {
                path: 'map',
                name: 'map',
                component: () => import(/* webpackChunkName: "about" */ '../components/map/Map.vue'),
            },
            {
                path: 'city',
                name: 'city',
                component: () => import(/* webpackChunkName: "about" */ '../components/city/City.vue'),
            },
        ]
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import(/* webpackChunkName: "about" */ '../components/lobby/Logout.vue'),
        meta: {
            requiresAuth: true
        }
    },
];

const router = new VueRouter({
    mode: 'history',
    base: "",
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  
    if (requiresAuth && !auth.currentUser) {
      next('/lobby')
    } else {
      next()
    }
  })

export default router