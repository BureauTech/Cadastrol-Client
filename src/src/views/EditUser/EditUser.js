import rulesUtils from "@/utils/rulesUtils"
import axios from "@/axios.js"
import UserForm from "@/components/UserForm/UserForm.vue"

export default {
    name: "EditUser",
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
            passwordRules: [],
            rules: rulesUtils
        }
    },
    methods: {
        cancel: function() {
            this.$router.push({name: "UserList"})
        },
        updateUser: async function(userFormRef) {
            if (!userFormRef.validate()) return

            const fieldsToUpdate = {}
            for (const userField of Object.keys(this.originalUser)) {
                if (this.originalUser[userField] !== this.user[userField]) {
                    fieldsToUpdate[userField] = this.user[userField]
                }
            }
            if (this.user.usePassword && this.confirmPassword) {
                fieldsToUpdate["usePassword"] = this.user.usePassword
            }
            if (Object.keys(fieldsToUpdate).length) {
                try {
                    this.loading = true
                    const response = await axios.put(`/user/${this.user.useCod}`, fieldsToUpdate)
                    if (response.data.success) {
                        this.$toasted.success("Sucesso ao editar usuário!")
                        this.$router.push({name: "UserList"})
                    }
                } catch (error) {
                    this.$toasted.error("Erro ao editar usuário!")
                } finally {
                    this.loading = false
                }
            } else {
                this.$toasted.info("Nenhuma informação foi alterada")
            }
        }
    },
    beforeMount: function() {
        this.originalUser = this.$route.params.user
        this.user = {...this.user, ...this.originalUser}
    }
}