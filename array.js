var frutas = ['Maçã', 'Banana']

console.log(frutas.length)

frutas.push('Laranja')
/*
frutas.forEach(function(item, indice, array){
    console.log(item, indice)
})

console.log(frutas.length)
*/
for(let chave in frutas){
    console.log(chave)
}

for(let chave in frutas){
    console.log(frutas[chave])
}