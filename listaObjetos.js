
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["753159456", "852456789"]
}

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 159,
        apartamento: true,
        complemento: "ap 1452"
    }
]

console.log(cliente.enderecos)

/*
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}


let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100
   
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"
   
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
*/