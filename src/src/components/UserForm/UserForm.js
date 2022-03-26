import Card from "@/components/Card/Card.vue"
import Input from "@/components/Input/Input.vue"

export default {
    name: "UserForm",
    components: {
        Card,
        Input
    },

    props: {
        nameRules: Array,
        emailRules: Array,
        phoneRules: Array,
        passwordRules: Array,
        confirmPasswordRules: Array,
        loading: Boolean,
        formName: String,
        initialValue: Object
    },

    data: function () {
        return {
            showPassword: false,
            showConfirmPassword: false,
            nameValue: this.initialValue.useName,
            emailValue: this.initialValue.useEmail,
            phoneValue: this.initialValue.usePhone,
            passwordValue: this.initialValue.usePassword,
            confirmPasswordValue: this.initialValue.confirmPassword,
        }
    },

    methods: {
        emitCancel: function (e) {
            this.$emit('clickCancel', e)
        },
        emitSave: function (e) {
            this.$emit('clickSave', this.$refs.UserForm)
        }
    }
}