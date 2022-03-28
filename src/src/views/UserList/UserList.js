import axios from "@/axios.js"
import Card from "@/components/Card/Card.vue"
import searchUtils from "@/utils/searchUtils"

export default {
    name: "UserList",
    components: {
        Card
    },
    data: function() {
        return {
            headers: [{text: "Nome", align: "start", value: "useName"}, {text: "E-mail", value: "useEmail"},
                {text: "Telefone", value: "usePhone"}, {text: "Ações", value: "actions", sortable: false}],
            dialog: false,
            user: {},
            users: [],
            page: 0,
            hasNext: true
        }
    },
    beforeMount: function() {
        this.getUsers()
    },
    methods: {
        getUsers: async function() {
            try {
                if (!this.hasNext) return
                const response = await axios.get("/user", {params: {page: this.page++}})
                const userList = response.data.data
                this.users = [...this.users, ...userList]
                this.hasNext = userList.length === 10
            } catch {
                this.$toasted.error("Erro ao listar usuários!")
            }
        },
        editDialog(user) {
            this.$router.push({name: "EditUser", params: {user: user}})
        },
        deleteDialog(user) {
            this.dialog = true
            this.user = user
        },
        addUser() {
            this.$router.push({name: "Signup"})
        },
        async logout() {
            await axios.get("/logout")
            await this.$store.dispatch("setAuth", false)
            this.$router.push({name: "Login"})
        },
        async deleteUser() {
            this.dialog = false
            const response = await axios.delete(`/user/${this.user.useCod}/`)
            if (!response.data.success) return this.$toasted.error("Ocorreu um erro na requisição")
            this.users.splice(searchUtils.searchUserInUserList(this.user, this.users), 1)
            this.$toasted.success("Usuário excluído com sucesso!")
        }
    }
}