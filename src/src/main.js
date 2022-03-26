import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./router"
import Toasted from "vue-toasted"
import store from "@/store"
import axios from"@/axios"


Vue.use(Toasted, {
    position: "top-center",
    className: "toasted-font",
    duration: 3000,
    singleton: true
})

const startApp = async function() {
    try {
        const response = await axios.get("/user")
        if (response.data.success) store.dispatch("setAuth", true)
    } catch (error) {
        console.error(error)
    }

    Vue.config.productionTip = false
    new Vue({
        vuetify,
        router,
        store,
        render: h => h(App)
    }).$mount("#app")
}

startApp()