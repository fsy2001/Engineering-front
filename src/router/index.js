import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from "@/views/Search";
import Register from "@/views/Register";
import Login from "@/views/Login";
import UserCenter from "@/views/UserCenter";
import AddBook from "@/views/AddBook";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/user',
        name: 'User',
        component: UserCenter,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/manage/add',
        name: 'AddBook',
        component: AddBook,
        // mata: {
        //     requiresAuth: true
        // }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.userLogin) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next() // does not require auth
    }
})

export default router
