const leia = require("readline-sync");

let num1 , num2

num1 = leia.questionInt("digite o primeiro numero:");
num2 = leia.questionInt("digite o segundo numero do intervalo:");

if (num1 < num2){
    for (let i = num1; i <= num2; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log( `${i} é multiplo de 3 e 5`);
        }

    }
}else{
        console.log("intervalo invalido")
    }
