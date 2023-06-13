const cliente = {
    nome: "Felipe",
    idade: 37,
    cpf: "123456789",
    email: "meca_felipe@hotmail.com"
}

console.log(cliente.idade)

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)