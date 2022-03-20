import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/Login/Login.vue"
import ForgotPassword from "@/views/ForgotPassword/ForgotPassword.vue"
import store from "@/store"
import ChangePassword from "@/views/ChangePassword/ChangePassword.vue"
import Profile from "@/views/Profile/Profile.vue"
import UsersList from "@/views/UsersList/UsersList.vue"
import EditProfile from "@/views/EditProfile/EditProfile.vue"
import AddUser from "@/views/AddUser/AddUser.vue"

Vue.use(VueRouter)

const routes = [{
    path: "/login",
    name: "Login",
    component: Login
}, {
    path: "/esqueci-a-senha",
    name: "ForgotPassword",
    component: ForgotPassword
}, {
    path: "/lista-usuarios",
    name: "UsersList",
    component: UsersList,
    meta: {
        requiresAuth: true,
        requiresAdmin: true
    }
}, {
    path: "/cadastrar/usuario",
    name: "AddUser",
    component: AddUser,
    meta: {
        requiresAuth: true,
        requiresAdmin: true
    }
}, {
    path: "/perfil",
    name: "Profile",
    component: Profile,
    meta: {
        requiresAuth: true
    }
}, {
    path: "/definir-senha",
    name: "ChangePassword",
    component: ChangePassword,
    meta: {
        requiresAuth: true
    }
}, {
    path: "/editar-perfil",
    name: "EditProfile",
    component: EditProfile,
    meta: {
        requiresAuth: true
    }
}, {
    path: "/:catchAll(.*)", 
    redirect: {
        name: "UsersList"
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

    const requiresAdmin = to.matched.some(function(record) {
        return record.meta.requiresAdmin
    })
    
    if (to.name !== "ChangePassword" && store.getters.getUser.use_is_temp_password) {
        next({name: "ChangePassword"})
    } else if (requiresAuth) {
        if (!isAuthenticated()) {
            next({name: "Login"})
        } else if (requiresAdmin && !store.getters.getUser.use_is_admin) {
            next({name: "UsersList"})
        } else {
            next()
        }
    } else if ((to.name === "Login" || to.name === "ForgotPassword") && isAuthenticated()) {
        next({name: "UsersList"})
    } else {
        next()
    }
})

export default router
