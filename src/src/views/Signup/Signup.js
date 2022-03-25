import axios from "@/axios.js"
import router from "@/router"
import rulesUtils from "@/utils/rulesUtils"


export default {
    name: "Signup",

    data: function() {
        return {
            user: {
                useName: "",
                usePhone: "",
                useEmail: "",
                usePassword: "",
                useCod: undefined
            },
            samePass: "",
            rules: rulesUtils,
            value: "",
            loading: false
        }
    },
      
    methods: {
        addUser: function() {
            this.loading = true
            try {
                axios.post("/user", this.user)
                    .then(res => {
                        if(res.data.success) {
                            this.$toasted.success("Usuário cadastrado com sucesso!")
                            this.loading = false
                            window.history.back()
                        }
                    })
                
            } catch (error) {
                this.$toasted.error("Ocorreu um erro ao fazer a requisição")
            }
        },
        cancel: function() {
            router.push({name: "UserList"})
        }
    },
    mounted: function() {
    }
}