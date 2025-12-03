const leia = require("readline-sync");
let contadorPar = 0
let contadorImpar = 0 
for (let i = 1 ; i <=10; i++){
    numero = leia.questionInt(`Digite o ${i} numero:`)
    if ( numero % 2 === 0){
        contadorPar++

    }else{
        contadorImpar++
    }

}
console.log(`o contador ${contadorPar} par`)
console.log(`o contador ${contadorImpar} impar`)