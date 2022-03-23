import rulesUtils from "@/utils/rulesUtils"
import axios from "@/axios.js"

export default { 
    name: "EditUser",
    data: function() {
        return {
            loading: false,
            user: "",
            samePass: "",
            rules: rulesUtils,
            value: ""
        }
    },
    methods: {
        editUser: async function() {
            
            try {
                const response = await axios.put(`/user/${this.user.useCod}`, this.user)
                if (response.data.success) {
                    this.$toasted.success("Sucesso ao editar usuário!")
                    this.$router.push({name: "UsersList"})
                }
                
            } catch(error) {
                this.$toasted.error("Erro ao editar usuário!")
            }
        },
        cancel: function() {
            this.$router.push({name: "UsersList"})
        }
    },
    beforeMount: function() {
        this.user = this.$route.params.user
    }
}