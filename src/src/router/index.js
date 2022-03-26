import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/Login/Login.vue"
import UserList from "@/views/UserList/UserList.vue"
import EditUser from "@/views/EditUser/EditUser.vue"
import Signup from "@/views/Signup/Signup.vue"
import store from "@/store"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Login",
    component: Login
},
{
    path: "/edit-user",
    name: "EditUser",
    component: EditUser,
    meta: {
        requiresAuth: true
    }
},
{
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
        requiresAuth: true
    }
},
{
    path: "/users",
    name: "UserList",
    component: UserList,
    meta: {
        requiresAuth: true
    }
}, {
    path: "/:catchAll(.*)",
    redirect: {
        name: "UserList"
    }
}]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

const isAuthenticated = function() {
    return store.getters.isAuthenticated
}


router.beforeEach(function(to, from, next) {
    const requiresAuth = to.matched.some(function(record) {
        return record.meta.requiresAuth
    })
    if(!isAuthenticated() && requiresAuth) {
        next({name: "Login"})
    } else if (to.name === "Login" && isAuthenticated()) {
        next({name: "UserList"})
    } else {
        next()
    }
})

export default router
