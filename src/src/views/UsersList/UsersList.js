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
            csvFile: null,
            headers: [{text: "Nome", align: "start", value: "useName"}, {text: "E-mail",
                value: "useEmail"
            }, {text: "Telefone", value: "usePhone"}, {text: "Adm", value: "useIsAdmin"}, 
            {text: "Editar", value: "edit"}, {text: "Excluir", value: "delete"}],
            users: [],
            dialog: false,
            teste: undefined,
            dialogCsvError: false,
            errors: ""
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
            this.$router.push({name: "EditProfile", params: {user: item}})
        },
        Delete(item) {
            this.dialog = true
            this.teste = item
            console.log(item.use_cod)
        },
        AddUser() {
            router.push({name: "Signup"})
        },
        async DeleteUser() {
            const response = await axios.delete(`/administrator/${this.teste.use_cod}/`)
            this.dialog = false
            if (!response.data.success) {
                return this.$toasted.error("Ocorreu um erro na requisição")
            }
            this.$toasted.success("Usuário excluído com sucesso!")
            setTimeout(function() { 
                window.location.reload()
            }, 1500)
        }
    }
}