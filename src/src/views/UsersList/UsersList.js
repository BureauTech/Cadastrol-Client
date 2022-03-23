import Card from "@/components/Card/Card.vue"
import Button from "@/components/Button/Button.vue"
import Input from "@/components/Input/Input.vue"
import axios from "@/axios.js"
import router from "@/router"

export default {
    name: "UsersList",
    components: {
        Card,
        Button,
        Input

    },
    data: function() {
        return {
            headers: [{text: "Nome", align: "start", value: "useName"}, {text: "E-mail",
                value: "useEmail"
            }, {text: "Telefone", value: "usePhone"}, {text: "Adm", value: "useIsAdmin"}, 
            {text: "Editar", value: "edit"}, {text: "Excluir", value: "delete"}],
            users: [],
            dialog: false,
            user: ""
        }
    },
    beforeMount: function() {
        this.getUsers()
    },
    methods: {
        getUsers: async function() {
            try {
                const response = await axios.get("/user")
                this.users = response.data.data
            } catch {
                this.$toasted.error("Erro ao listar usuários!")
            }
        },
        Edit(item) {
            this.$router.push({name: "EditUser", params: {user: item}})
        },
        Delete(item) {
            this.dialog = true
            this.user = item
        },
        AddUser() {
            router.push({name: "Signup"})
        },
        async DeleteUser() {
            const response = await axios.delete(`/user/${this.user.useCod}/`)
            if (!response.data.success) {
                return this.$toasted.error("Ocorreu um erro na requisição")
            }
            this.$toasted.success("Usuário excluído com sucesso!")
            window.location.reload()
        }
    }
}