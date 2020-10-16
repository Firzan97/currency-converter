import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue"

Vue.use(VueRouter);


const routes = [{
        path: '/',
        component: Home,
        meta: {
            title: 'Home',

        }
    },
    {
        path: '/Dashboard',
        component: Dashboard,
        meta: {
            title: 'Currency Dashboard',

        }
    }
]
const router = new VueRouter({
    // short for `routes: routes`,
    mode: 'history',
    base: "/",
    routes,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
router.replace("/")

export default router;