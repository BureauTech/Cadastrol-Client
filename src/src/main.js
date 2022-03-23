import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./router"
import Toasted from "vue-toasted"


Vue.use(Toasted, {
    position: "top-center",
    className: "toasted-font",
    duration: 3000,
    singleton: true
})


Vue.config.productionTip = false
new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount("#app")
