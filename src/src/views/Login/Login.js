import Card from "@/components/Card/Card.vue"
import Input from "@/components/Input/Input.vue"
import Button from "@/components/Button/Button.vue"
import rulesUtils from "@/utils/rulesUtils"
import axios from "@/axios"

export default {
    name: "Login",
    components: {
        Card,
        Input,
        Button
    },
    data: function() {
        return {
            rules: rulesUtils,
            loading: false,
            loginForm: {
                useEmail: undefined,
                usePassword: undefined
            }
        }
    },
    methods: {
        login: async function() {
            if (this.$refs.loginForm.validate()) {
                this.loading = true
                try {
                    const response = await axios.post("/login", this.loginForm)
                    if (response.status == 200) {
                        await this.$store.dispatch("setAuth", true)
                        this.$router.push({name: "UserList"})
                    } else {
                        this.$toasted.error("Credenciais incorretas")
                    }
                } catch (error) {
                    this.$toasted.error("Ocorreu um erro na requisição")
                } finally {
                    this.loading = false
                }
            }
        }
    }
}