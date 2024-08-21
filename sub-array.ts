const senha = 'Qwer@1asdf'

function validarSenha (senha: string) {
    if (senha.length < 8) {
        return console.log('A senha deve conter 8 caracteres!')
    }
    if (!(/[a-z]/.test(senha))) {
        return console.log('A senha deve conter ao menos 1 letra minuscula!')
    }
    if (!(/[A-Z]/.test(senha))) {
        return console.log('A senha deve conter ao menos 1 letra maiúscula!')
    }
    if(!(/\d/.test(senha))) {
        return console.log('A senha deve conter ao menos 1 dígito numérico')
    }
    if (!(/\W/.test(senha))) {
        return console.log('A senha deve conter ao menos 1 caractere especial (!, @, #, $, %, ^, &, *)!')
    }
    return true
}
  
console.log(validarSenha(senha))



