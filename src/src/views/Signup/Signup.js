import axios from "@/axios.js"
import rulesUtils from "@/utils/rulesUtils"
import UserForm from "@/components/UserForm/UserForm.vue"

export default {
    name: "Signup",
    components: {
        UserForm
    },

    data: function() {
        return {
            loading: false,
            originalUser: {
                useName: "",
                useEmail: "",
                usePhone: ""
            },
            user: {
                useName: "",
                useEmail: "",
                usePhone: "",
                usePassword: ""
            },
            confirmPassword: "",
            nameRules: [rulesUtils.required],
            emailRules: [rulesUtils.required, rulesUtils.email],
            phoneRules: [rulesUtils.required, rulesUtils.number],
            passwordRules: [rulesUtils.required],
            rules: rulesUtils
        }
    },

    methods: {
        addUser: async function(userFormRef) {
            if (!userFormRef.validate()) return
            this.loading = true
            try {
                const {data} = await axios.post("/user", this.user)
                if (data.success) {
                    this.$toasted.success("Usuário cadastrado com sucesso!")
                    this.$router.push({name: "UserList"})
                }
            } catch (error) {
                this.$toasted.error("Erro ao cadastrar usuário!")
            } finally {
                this.loading = false
            }
        },
        cancel: function() {
            this.$router.push({name: "UserList"})
        }
    }
}