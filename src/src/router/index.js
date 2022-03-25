import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/Login/Login.vue"
import UserList from "@/views/UserList/UserList.vue"
import EditUser from "@/views/EditUser/EditUser.vue"
import Signup from "@/views/Signup/Signup.vue"

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
    path: "/signup",
    name: "Signup",
    component: Signup
},
{
    path: "/users-list",
    name: "UserList",
    component: UserList
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

export default router
