const leia = require("readline-sync")

let num = leia.questionInt("Digite o numero que voce deseja encontrar: ")

let lista = [2,5,1,3,4,9,7,8,10,6]
let achou  = false
for (let i = 0; i < lista.length; i++){

    if ( num === lista[i]){

        console.log(`O número ${num} está localizado na posição: ${i}`)
        achou = true
    
    }
}  if (!achou){
    console.log(`O número ${num} não foi encontrado!`)
}