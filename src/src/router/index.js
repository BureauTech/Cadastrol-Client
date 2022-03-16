import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/Login/Login.vue"
import EditUser from "@/views/EditUser/EditUser.vue"
// import ForgotPassword from "@/views/ForgotPassword/ForgotPassword.vue"
// import Home from "@/views/Home/Home.vue"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Login",
    component: Login
},
{
    path: "/edit-user",
    name: "EditUser",
    component: EditUser
},
{
    //     path: "/",
    //     name: "Home",
    //     component: Home
    // }, {
    path: "/:catchAll(.*)",
    redirect: {
        name: "EditUser"
    }
}]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

// const isAuthenticated = function() {
//     return store.getters.isAuthenticated
// }

// router.beforeEach(function(to, from, next) {
//     const requiresAuth = to.matched.some(function(record) {
//         return record.meta.requiresAuth
//     })

//     const requiresAdmin = to.matched.some(function(record) {
//         return record.meta.requiresAdmin
//     })

//     if (to.name !== "ChangePassword" && store.getters.getUser.use_is_temp_password) {
//         next({name: "ChangePassword"})
//     } else if (requiresAuth) {
//         if (!isAuthenticated()) {
//             next({name: "Login"})
//         } else if (requiresAdmin && !store.getters.getUser.use_is_admin) {
//             next({name: "Home"})
//         } else {
//             next()
//         }
//     } else if ((to.name === "Login" || to.name === "ForgotPassword") && isAuthenticated()) {
//         next({name: "Home"})
//     } else {
//         next()
//     }
// })

export default router
