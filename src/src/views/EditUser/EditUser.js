import rulesUtils from "@/utils/rulesUtils"

export default { 
    name: "EditUser",
    data: function() {
        return {
            loading: false,
            user: {
                name: "",
                email: "",
                phone: "",
                password: ""
            },
            samePass: "",
            rules: rulesUtils,
            value: ""
        }
    }
}