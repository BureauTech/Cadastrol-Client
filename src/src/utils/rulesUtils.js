/* eslint-disable max-len */
export default {
    required: value => !!value || "Obrigatório.",
    email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || "E-mail inválido."
    },
    same: (firstValue, secondValue) => firstValue === secondValue || "Senhas diferentes.",
    number: value => (Number(value) ? true : "Número inválido."),
    maxValue: (firstValue, secondValue) => firstValue <= secondValue || "Valor menor que o mínimo.",
    optionalSame: (firstValue, secondValue) => ((!!firstValue || !!secondValue) ? (firstValue === secondValue || "Senhas devem ser iguais.") : true)
}
