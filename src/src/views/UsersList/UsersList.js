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
            headers: [{text: "Nome", align: "start", value: "use_name"}, {text: "E-mail",
                value: "use_email"
            }, {text: "Telefone", value: "use_telefone"}, {text: "Adm", value: "use_adm"}, 
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
            const response = await axios.get("/administrator/")
            this.users = response.data.data
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
        },
        DownloadErrors() {
            this.dialogCsvError = false
            const blob = new Blob([this.errors], {type: "text/csv"})
            saveAs(blob, "Erros.csv")
        }
    }
}