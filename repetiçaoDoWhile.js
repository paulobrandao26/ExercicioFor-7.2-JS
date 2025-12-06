const leia = require("readline-sync")

somanumero = 0
numero = 1

do{
let numero = leia.questionInt("Digite um numero:")
if (numero === 0 ){
        break
}
else if (numero > 0){
  somanumero += numero
}
      
}while(numero > 0);
console.log(`A soma dos números positivos é ${somanumero}`)



